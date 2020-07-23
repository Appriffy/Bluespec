import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { MasterService } from '../../../services/master.service';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { JobAreaModel } from '../../..//dbmodels/job-areas';
import { JobAreasService } from '../job-areas.service';

@Component({
  selector: 'app-update-job-area',
  templateUrl: './update-job-area.modal.html',
  styleUrls: [
    '../../../bluspecstyles/update.modal.scss',
    '../../../bluspecstyles/update.shell.scss'
  ],
})
export class UpdateJobAreaModal implements OnInit {
  // "user" is passed in firebase-details.page
  @Input() user: JobAreaModel;
  updateUserForm: FormGroup;
  selectedAvatar: string;
  jobAreas = [];

  deleteResult : any;
  updateResult : any;
  api_key:any;
  updatedImage:any;

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: JobAreasService,
    private authService: AuthService,
    public toastService:ToastService,
    private masterService: MasterService, 
    private storageService: StorageService,
    public loadingController: LoadingController,
    public router: Router) {
    
  }

  ngOnInit() {

  this.authService.getAuthKey().then(result=>{
      this.api_key = result;
    });

    if(this.user.image){
      //this.updatedImage = this.user.image;
    }

    this.updateUserForm = new FormGroup({
      id: new FormControl(this.user.id, Validators.required),
      title: new FormControl(this.user.title, Validators.required),
      image: new FormControl(this.user.image),
      enabled: new FormControl(this.user.enabled),
      job_area_desc: new FormControl(this.user.job_area_desc),
    });
  }

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteItem() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to delete the Job Area - ' + this.user.title + '?',
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
              'id' : this.user.id
            }
            this.firebaseService.deleteItem(this.api_key, postData)
            .subscribe(
              (res: any) => {
                console.log('################ Result# '+JSON.stringify(res));
                this.loadingController.dismiss();

                if (res.error) {
                  this.presentAlert(res.message); 
                  } else {
                    //delete from local
                    this.firebaseService.deleteItemFromLocal(this.user);
                    //this.firebaseService.fetchFreshList(this.api_key);
                    this.dismissModal();
                    //console.log('Modal Dismiss Time 007 # '+JSON.stringify(this.deleteResult));
                    this.toastService.presentToast(res.message);
                    this.router.navigate(['/job-areas/listing']);
                  }

              },
              (error: any) => {
               this.loadingController.dismiss();
              this.presentAlert('Looks like there is a Network Issue.');
              }
              );

          }
        }
      ]
    });
    await alert.present();
  }

  updateUser() {
    this.presentLoadingWithOptions();
    this.user.id = this.updateUserForm.value.id;
    this.user.title = this.updateUserForm.value.title;
    this.user.job_area_desc = this.updateUserForm.value.job_area_desc;
    this.user.enabled = this.updateUserForm.value.enabled;

    //updatedImage:this.updatedImage;
    var postData = {
      id:this.user.id,
      title:this.user.title,
      job_area_desc:this.user.job_area_desc,
      enabled:this.user.enabled,
      updatedImage:this.updatedImage
      };

      if(AuthConstants.DEV_MODE){
        console.log('########## Job Area params ########### '+JSON.stringify(this.user));
      }
    
    this.firebaseService.callItemUpdateAPI(this.api_key, postData)
    .subscribe(
      (res: any) => {
        this.loadingController.dismiss();

        if(AuthConstants.DEV_MODE){
          console.log('########## API Response for Skill Update ########### '+JSON.stringify(res));
        }
        
        this.updateResult = res;
        if (!res.error) {
          this.firebaseService.fetchFreshList(this.api_key);
          /********** NAVIGATE WITH USER ID **********/
          this.dismissModal();
          //Refresh the list by fetching data again
          if (res.item) {
          this.firebaseService.invokeItemUpdatedEvent.next(res.item);
          }
         this.router.navigate(['/job-areas/details', res.id]);
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
      duration: 5000,
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.updateUserForm.patchValue({
      image: file
    });
    this.updateUserForm.get('image').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.updatedImage = reader.result as string;
      this.user.image = this.updatedImage;
      //console.log("uploadFile() got preview: "+this.logoImgUpdated);
    }
    reader.readAsDataURL(file)
  }

  removeFile(){
    this.updatedImage = "";
    this.user.image = this.updatedImage;
  }

}
