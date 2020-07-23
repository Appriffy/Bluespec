import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthService } from '../../../services/auth.service';
import { MasterService } from '../../../services/master.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { SelectDocumentTypePage } from '../../../utility-components/select-document-type/select-document-type.page';
import { AuthConstants } from '../../../config/AuthConstants';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.page.html',
  styleUrls: ['./upload-document.page.scss'],
})
export class UploadDocumentPage implements OnInit {
  uploadFileForm: FormGroup;
  api_key:any;
  localUser:LocalUser;
  preview: string = '';
  percentDone: any = 0;
  docType = "";
  localFileSrc: any;
  @ViewChild('fileInput', {static: false}) myFileInput: ElementRef;


  constructor(private authService:AuthService,
    public masterService: MasterService,
    private modalController: ModalController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private userService: UserService,
    private loadingController: LoadingController,
    public router:Router) { }

  ngOnInit() {
    this.uploadFileForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      doc_type_id: new FormControl(0, Validators.required),
      doc_type: new FormControl("", Validators.required),
      document: new FormControl('', Validators.required) 
    });

    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      this.api_key = this.localUser.api_key;
    this.uploadFileForm.patchValue({user_id:this.localUser.id});

    });

    this.route.paramMap.subscribe(params => {
      this.docType = params.get("id");
      //alert(this.docType);
      if(this.docType == null || this.docType == undefined || this.docType == ""){
        this.openSelectDocumentMaster();
      }
      });
  }

  async openSelectDocumentMaster() {
    //console.log('########## openSelectDocumentMaster #####: ');
    const modal = await this.modalController.create({
      component: SelectDocumentTypePage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        //alert(JSON.stringify(item));
        this.docType = item.data.title;
        this.uploadFileForm.controls.doc_type.patchValue(item.data.title);
        this.uploadFileForm.controls.doc_type_id.patchValue(item.data.id);
      }
    });
    await modal.present();
   }


  createFile() {
    this.presentLoadingWithOptions();
   let postData = {
     user_id:this.uploadFileForm.value.user_id,
     title:'',
     doc_type:this.uploadFileForm.value.doc_type_id,
     document : this.preview,
   }

   const formData = new FormData();
   formData.append('user_id', this.uploadFileForm.get('user_id').value);
   formData.append('doc_type', this.uploadFileForm.get('doc_type_id').value);
    formData.append('document', this.uploadFileForm.get('document').value);

   console.log('########## Upload Params #####: '+JSON.stringify(postData));
   console.log('########## Upload Params formData #####: '+JSON.stringify(formData));

   this.userService.callDocUploadAPI(this.api_key, postData)
    //this.userService.callDocUploadAPI(this.api_key, formData)
    .subscribe((event: any) => {
      console.log('########## Upload Result #####: '+JSON.stringify(event));
      this.loadingController.dismiss();
     if (!event.error) {
      this.router.navigate(['/list-documents', this.localUser.id]);
      } else {
        this.presentAlert(event.message);
      }
    },
    (error: any) => {
     this.loadingController.dismiss();
    this.presentAlert('Looks like there is a Network Issue.'+error.message);
    });

  }



  // Image Preview
  uploadBinaryFile(event) {
  //uploadBinaryFile(event) {
    //const file = (event.target as HTMLInputElement).files[0];
    const file = this.myFileInput.nativeElement.files[0];
    if(AuthConstants.DEV_MODE){
      console.log("uploadBinaryFile() called: "+file);
    }
    this.uploadFileForm.patchValue({
      document: file
    });
    this.uploadFileForm.get('document').updateValueAndValidity()
    //console.log("uploadFile() "+this.uploadFileForm.value);
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      this.localFileSrc = reader.result;
      console.log("uploadFile() got preview: "+this.preview);
    }

    if (file && file.type.match('image.*')) {
      console.log("MATCHING TEST passed image ");
    } else {
      console.log("MATCHING TEST else ");
    }
    reader.readAsDataURL(file);

    //this.localFileSrc = reader.readAsArrayBuffer(file);
    console.log("uploadFile() localFileSrc: "+this.localFileSrc);
  }

  uploadFile(event) {
    //https://www.techiediaries.com/angular-file-upload-progress-bar/
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.preview = file;
      console.log("Upload File now => "+file);
      this.uploadFileForm.patchValue({
        document: file
      });
      this.uploadFileForm.get('document').updateValueAndValidity()
      //this.uploadFileForm.get('document').setValue(file);
      console.log("Upload File Now Again => "+JSON.stringify(file.data));
    }
  }

  dismissModal(){
    this.router.navigate(['/list-documents', this.localUser.id]);
  }

  private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return alert;
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      animated:true,
      spinner: "bubbles",
      message: 'Uploading '+this.docType+'..',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }


}
