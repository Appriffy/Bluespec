import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { UpdateDocumentModal } from '../update/update-document.modal';
import { UserDocumentModel } from '../../../dbmodels/user-document.model';
import { AuthConstants } from '../../../config/AuthConstants';
import { LocalUser } from '../../../dbmodels/local-user';
import {DomSanitizer} from '@angular/platform-browser';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.page.html',
  styleUrls: [
    '../../../bluspecstyles/listing.page.scss',
    '../../../bluspecstyles/listing.shell.scss',
    '../../../bluspecstyles/listing.ios.scss',
    './view-document.page.scss'],
})
export class ViewDocumentPage implements OnInit {
  doc_id : any;
  thisDocument: UserDocumentModel;
  localUser: LocalUser;
  selfView = false;
  loading = true;
  baseUrl = "https://bluspec.app/uploads/documents/";
  fileurl = "";
  redirectFromAdminView = false;
  backBtnUrl = "";
  pdfLoadStatus = "";
  //pdfUrl = "https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf";

  constructor(public firebaseService: UserService,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private authService: AuthService,
    public router: Router,
    public alertController: AlertController,
    private santitizer: DomSanitizer,
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.doc_id = params.get("doc_id");
      if(this.doc_id == ""){
        this.router.navigate(['page-not-found']);
      }
      console.log("Route paramMap : "+JSON.stringify(params));
      });

      this.route.queryParamMap.subscribe(queries=>{
        console.log("Route Queryparam map=> "+JSON.stringify(queries));
        if(queries.has("viewer")){
          this.redirectFromAdminView = true;
          this.backBtnUrl = "/list-documents/all";
        }
      });

      this.authService.getAuthCache().then(promisedValue=>{
        this.localUser = promisedValue;
        this.fetchDocDetail(this.localUser.api_key, this.doc_id);
      });
  }

  fetchDocDetail(apiKey:any, postData: any){
    this.loading = true;
    this.firebaseService.fetchDocDetail(apiKey, postData).subscribe(
      (res: any) => {
        this.loading = false;
        if(res){
      if(AuthConstants.DEV_MODE){
        console.log("Document Detail Logged: "+JSON.stringify(res)); 
      }
      this.thisDocument = res;   
      this.backBtnUrl = "/list-documents/"+this.thisDocument.user_id;
      this.fileurl = this.thisDocument.file_url;

      //alert(this.getFileType());
      if(this.thisDocument.user_id == this.localUser.id){
        this.selfView = true;
      }  
      if (res.error) {
        this.router.navigate(['page-not-found']);
      }
      }
      },
      (error: any) => {
      console.log('Looks like there is a Network Issue.');
      }
      );
  }

  getFileURL() {
    //return this.santitizer.bypassSecurityTrustResourceUrl(this.baseUrl+""+this.fileurl);
    return this.baseUrl+""+this.fileurl;
  }

  getFileType(){
    return this.fileurl.substr(this.fileurl.lastIndexOf('.') + 1);
  }

  onProgress(progressData: PDFProgressData) {
    this.pdfLoadStatus = "Loading PDF Document";
  }
  onError(error: any) {
    this.pdfLoadStatus = "Error Loading PDF Document";
  }
  pageRendered(e: CustomEvent) {
    this.pdfLoadStatus = "";
  }

  async openItemUpdateModal() {
    const modal = await this.modalController.create({
      component: UpdateDocumentModal,
      componentProps: {
        'user': this.thisDocument
      }
    });
    await modal.present();
  }


  dismissModal() {
    this.modalController.dismiss();
   }
 
      
  async updateDocStatus(status:string){
    let title = "Approve "+this.thisDocument.document_type;
    let message = "Have you completed the verification and want to approve "+this.thisDocument.document_type+"?";
    if(status == "Rejected"){
     title = "Reject "+this.thisDocument.document_type;
     message = "Are you sure you want to reject "+this.thisDocument.document_type+"?";
    }
     const alert = await this.alertController.create({
       header: title,
       message: message,
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {}
         },
         {
           text: 'Confirm',
           handler: () => {
             //this.presentLoadingWithOptions();
             let postData = {
              doc_id: this.thisDocument.id,
              status: status
             }
             this.firebaseService.callDocumentVerificationAPI(this.localUser.api_key, postData)
             .subscribe(
               (res: any) => {
                 this.loadingController.dismiss();
                 console.log('########## API Response ########### '+JSON.stringify(res));
                 //this.updateResult = res.json();
                 if (!res.error) {
                   this.dismissModal();
                   //SYNC THE UPDATE
                   //this.firebaseService.fetchFreshList();
                   //this.router.navigate(['/companies/details'], {queryParams :{id : res.id}});
                   this.presentAlert(res.message);
                  
                   
                   this.authService.getAuthCache().then(authData =>{
                     if(authData){
                      this.firebaseService.getUserDocumentDataSource(authData.api_key, this.thisDocument.user_id)
                     }
                   });

                   if(this.redirectFromAdminView){
                    this.router.navigate(['/list-documents/all']);
                   }else{
                    this.router.navigate(['/list-documents', this.thisDocument.user_id]);
                   }
                   } else {
                     this.presentAlert(res.message);
                   }
               },
               (error: any) => {
                this.loadingController.dismiss();
               this.presentAlert('Looks like there is a Network Issue.'+error.message);
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
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
