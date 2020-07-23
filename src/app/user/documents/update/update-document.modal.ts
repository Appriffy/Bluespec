import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDocumentModel } from '../../../dbmodels/user-document.model';
import { UserService } from '../../user.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { LocalUser } from '../../../dbmodels/local-user';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.modal.html',
  styleUrls: [
    './styles/update-document.modal.scss',
    './styles/update-document.shell.scss'
  ],
})
export class UpdateDocumentModal implements OnInit {
  @Input() user: UserDocumentModel;
  updateFileForm: FormGroup;
  localUser: LocalUser;
  deleteResult : any;
  updateResult : any;
  preview:any;
  baseUrl = "https://www.bluspec.app/uploads/documents/";

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    private authService: AuthService,
    public toastService:ToastService,
    public menu: MenuController,
    public loadingController: LoadingController,
    public router: Router) {
    
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
  this.menu.enable(true);
  this.authService.getAuthCache().then(result=>{
      this.localUser = result;
    });

    //this.logoImgUpdated = this.user.logo;
    this.updateFileForm = new FormGroup({
      doc_id: new FormControl(this.user.id, Validators.required),
      user_id: new FormControl(this.user.user_id, Validators.required),
      doc_type: new FormControl(this.user.document_type_id, Validators.required),
      document: new FormControl(this.baseUrl+this.user.file_url, Validators.required)
    });
}

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteUser() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you really want to delete this document?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.presentLoadingWithOptions();
            let postData = {
              'item_id' : this.user.id
            }
            this.firebaseService.deleteUserDocument(this.localUser.api_key, postData)
            .subscribe(
              (res: any) => {
                //console.log('################ Result# '+JSON.stringify(res));
                this.loadingController.dismiss();

                if (res.error) {
                  this.presentAlert(res.message); 
                  } else {
                    //delete from local

                    this.firebaseService.deleteDocumentItemFromLocal(this.user);
                    this.dismissModal();
                    this.toastService.presentToast(res.message);
                    this.router.navigate(['/documents/listing']);
                  }

              },
              (error: any) => {
               this.loadingController.dismiss();
              this.presentAlert('Looks like there is a Network Issue.');
              }
              );
             
              /********** NAVIGATE WITH USER ID **********/
              // if (this.deleteResult.error) {
              //   this.presentAlert(this.deleteResult.message); 
              //   } else {
              //     this.dismissModal();
              //     console.log('Modal Dismiss Time# '+JSON.stringify(this.deleteResult));
              //     this.router.navigate(['companies/listing']);
              //   }

          }
        }
      ]
    });
    await alert.present();
  }

  updateUser() {
    this.presentLoadingWithOptions();
    this.user.id = this.updateFileForm.value.user_id;
    this.user.document_type = this.updateFileForm.value.doc_type;
    
    var postData = {
      doc_id:this.user.id,
      doc_type:this.user.document_type_id,
      user_id:this.user.user_id,
      document:this.preview
      };

    console.log('########## Doc params ########### '+JSON.stringify(postData));
    //this.firebaseService.callCompanyUpdateAPI(this.api_key, this.user)
    this.firebaseService.callDocumentUpdateAPI(this.localUser.api_key, postData)
    .subscribe(
      (res: any) => {
        this.loadingController.dismiss();
        console.log('########## API Response ########### '+JSON.stringify(res));
        this.updateResult = res.json();
        if (!res.error) {
          this.dismissModal();
          //SYNC THE UPDATE
          //this.firebaseService.fetchFreshList();
          //this.router.navigate(['/companies/details'], {queryParams :{id : res.id}});
          this.router.navigate(['/documents/listing']);
          } else {
            this.presentAlert(res.message);
          }
      },
      (error: any) => {
       this.loadingController.dismiss();
      this.presentAlert('Looks like there is a Network Issue.'+error.message);
      }
      );

      // if (!this.updateResult.error) {
      //   /********** NAVIGATE WITH USER ID **********/
      //   this.dismissModal();
      //   console.log('########## API Successful ########### '+JSON.stringify(this.updateResult));
      //   this.router.navigate(['companies/details'], {queryParams :{id : this.updateResult.id}});
      //   //this.router.navigate(['companies/details'], this.updateResult.id);
      //   } else {
      //     this.presentAlert(this.updateResult.message);
      //   }
  }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.updateFileForm.patchValue({
      document: file
    });
    this.updateFileForm.get('document').updateValueAndValidity()
    //console.log("uploadFile() "+this.updateFileForm.value);
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      console.log("uploadFile() got preview: "+this.preview);
    }
    reader.readAsDataURL(file)
  }

  removeFile(){
    this.preview = "";
    this.user.file_url = "";
  }

  private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: '',
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
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
