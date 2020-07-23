import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { JobAreaModel } from '../../../dbmodels/job-areas';
import { JobAreasService } from '../job-areas.service';
import { AuthConstants } from '../../../config/AuthConstants';

@Component({
  selector: 'app-create-job-area',
  templateUrl: './create-job-area.modal.html',
  styleUrls: [
    '../../../bluspecstyles/create.modal.scss',
    '../../../bluspecstyles/create.shell.scss'
  ],
})
export class CreateJobAreaModal implements OnInit {
  createUserForm: FormGroup;
  userData: JobAreaModel = new JobAreaModel();
  api_key:any;
  preview:any;
  selectedImage: string;

  constructor(
    private modalController: ModalController,
    public firebaseService: JobAreasService,
    private authService:AuthService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    public router:Router) { }

  ngOnInit() {
    this.authService.getAuthKey().then(result=>{
      this.api_key = result;
      //console.log('########## Obtained Token #####: '+result);
    });

    // default image
    this.createUserForm = new FormGroup({
      image: new FormControl(null),
      title: new FormControl(this.userData.title, Validators.required),
      enabled: new FormControl(this.userData.enabled),
      job_area_desc: new FormControl(this.userData.job_area_desc)
    });

  }

  dismissModal() {
   this.modalController.dismiss();
  }

  createUser() {
    this.presentLoadingWithOptions();
    this.userData.title = this.createUserForm.value.title;
    this.userData.image = this.preview;
    this.userData.job_area_desc = this.createUserForm.value.job_area_desc;
    this.userData.enabled = this.createUserForm.value.enabled;


    this.firebaseService.callItemCreateAPI(this.api_key, this.userData)
      .subscribe(
        (res: any) => {
        this.loadingController.dismiss();
        if(AuthConstants.DEV_MODE){
          console.log('########## Create Result #####: '+JSON.stringify(res));
        }
        if (!res.error) {
        /********** NAVIGATE WITH USER ID **********/
        this.dismissModal();
        //Prefer saving from api response
        this.firebaseService.addItemToLocal(this.userData);
        
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


    // Image Preview
    uploadFile(event) {
      const file = (event.target as HTMLInputElement).files[0];
      this.createUserForm.patchValue({
        image: file
      });
      this.createUserForm.get('image').updateValueAndValidity()
      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result as string;
        //console.log("uploadFile() got preview: "+this.preview);
      }
      reader.readAsDataURL(file)
    }

    removeFile(){
      this.preview = "";
    }

}
