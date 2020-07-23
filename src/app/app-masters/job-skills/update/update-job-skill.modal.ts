import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { JobSkillModel } from '../../../dbmodels/job-skill.model';
import { JobSkillsService } from '../job-skills.service';
import { MasterService } from '../../../services/master.service';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { SelectJobAreaPage } from '../../../utility-components/select-job-area/select-job-area.page';

@Component({
  selector: 'app-update-job-skill',
  templateUrl: './update-job-skill.modal.html',
  styleUrls: [
    '../../../bluspecstyles/update.modal.scss',
    '../../../bluspecstyles/update.shell.scss'
  ],
})
export class UpdateJobSkillModal implements OnInit {
  // "user" is passed in firebase-details.page
  @Input() user: JobSkillModel;
  updateUserForm: FormGroup;
  updatedImage: string;
  jobAreas = [];

  deleteResult : any;
  updateResult : any;
  api_key:any;

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: JobSkillsService,
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

    this.updatedImage = this.user.image;
    this.updateUserForm = new FormGroup({
      id: new FormControl(this.user.id, Validators.required),
      grafter_type: new FormControl(this.user.grafter_type),
      title: new FormControl(this.user.title, Validators.required),
      parent_id: new FormControl(this.user.parent_id, Validators.required),
      parent_name: new FormControl(this.user.parent_name),
      enabled: new FormControl(this.user.enabled),
      skill_desc: new FormControl(this.user.skill_desc),
      image: new FormControl(this.user.image)
    });

    this.masterService.getJobAreas().subscribe(
      (res: any) => {
      if (!res.error) {
      this.jobAreas = res.result;
      /********** STORE ********/
      try {
        //Store in local repo if fetch is successful
        this.storageService.store(AuthConstants.JOB_CATEGORIES, res.result);
      } catch (Exception) {
        console.log("FETCHING JOB AREAS IN createJobSkill: "+Exception.message);    
      } 
      /********** STORED ********/
      }
      },
      (error: any) => {
      console.log('Looks like there is a Network Issue while fetching job areas.');
      }
      );

  }

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteItem() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to delete the Job Skill - ' + this.user.title + '?',
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
                    // this.firebaseService.invokeListChangeEvent.subscribe(value => {
                    this.dismissModal();
                    //console.log('Modal Dismiss Time 007 # '+JSON.stringify(this.deleteResult));
                    this.toastService.presentToast(res.message);
                    this.router.navigate(['/job-skills/listing']);
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
    this.user.image = this.updatedImage;
    this.user.title = this.updateUserForm.value.title;
    this.user.parent_id = this.updateUserForm.value.parent_id;
    this.user.grafter_type = this.updateUserForm.value.grafter_type;
    this.user.skill_desc = this.updateUserForm.value.skill_desc;
    this.user.enabled = this.updateUserForm.value.enabled;

    var postData = {
      id:this.user.id,
      title:this.user.title,
      skill_desc:this.user.skill_desc,
      parent_id:this.user.parent_id,
      grafter_type:this.user.grafter_type,
      enabled:this.user.enabled,
      updatedImage:this.updatedImage
      };

    console.log('########## Company params ########### '+JSON.stringify(this.user));
    this.firebaseService.callItemUpdateAPI(this.api_key, postData)
    .subscribe(
      (res: any) => {
        this.loadingController.dismiss();

        //alert(JSON.stringify(res));
        //this.presentAlert(res.message);
        //this.toastService.presentToast(JSON.stringify(res)); 
        //this.loadingController.dismiss();
        console.log('########## API Response ########### '+JSON.stringify(res));
        this.updateResult = res;
        if (!res.error) {
          /********** NAVIGATE WITH USER ID **********/
          this.dismissModal();
          console.log('########## API Successful ########### '+JSON.stringify(res));
          //this.router.navigate(['/job-skills/details'], {queryParams :{id : res.id}});
         //this.router.navigate(['/companies/listing']);

         this.router.navigate(['/job-skills/details', res.id]);

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

  async openSelectJobArea() {
    const modal = await this.modalController.create({
      component: SelectJobAreaPage,
      // componentProps: {
      //   'user': this.profile
      // }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        //alert(JSON.stringify(item));
        this.updateUserForm.controls.parent_id.patchValue(item.data.id);
        this.updateUserForm.controls.parent_name.patchValue(item.data.title);
      }
    });
    await modal.present();
   }

}
