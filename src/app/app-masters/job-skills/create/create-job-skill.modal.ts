import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { JobSkillModel } from '../../../dbmodels/job-skill.model';
import { JobSkillsService } from '../job-skills.service';
import { MasterService } from '../../../services/master.service';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { SelectJobAreaPage } from '../../../utility-components/select-job-area/select-job-area.page';

@Component({
  selector: 'app-create-job-skill',
  templateUrl: './create-job-skill.modal.html',
  styleUrls: [
    '../../../bluspecstyles/create.modal.scss',
    '../../../bluspecstyles//create.shell.scss'
  ],
})
export class CreateJobSkillModal implements OnInit {
  createUserForm: FormGroup;
  userData: JobSkillModel = new JobSkillModel();
  jobAreas = [];
  api_key:any;
  
  preview: string;

  constructor(
    private modalController: ModalController,
    public firebaseService: JobSkillsService,
    private authService:AuthService,
    private masterService: MasterService, 
    private storageService: StorageService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    public router:Router) { }

  ngOnInit() {
    this.authService.getAuthKey().then(result=>{
      this.api_key = result;
      console.log('########## Obtained Token #####: '+result);
    });

    // default image
    this.userData.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
    this.createUserForm = new FormGroup({
      grafter_type: new FormControl(this.userData.grafter_type),
      title: new FormControl(this.userData.title, Validators.required),
      parent_id: new FormControl(this.userData.parent_id, Validators.required),
      parent_name: new FormControl("", Validators.required),
      enabled: new FormControl(this.userData.enabled),
      skill_desc: new FormControl(this.userData.skill_desc),
      image: new FormControl(this.userData.image)
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

  createUser() {
    this.presentLoadingWithOptions();
    this.userData.image = this.preview;
    this.userData.title = this.createUserForm.value.title;
    this.userData.parent_id = this.createUserForm.value.parent_id;
    this.userData.grafter_type = this.createUserForm.value.grafter_type;
    this.userData.skill_desc = this.createUserForm.value.skill_desc;
    this.userData.enabled = this.createUserForm.value.enabled;


    this.firebaseService.callItemCreateAPI(this.api_key, this.userData)
      .subscribe(
        (res: any) => {
        this.loadingController.dismiss();
        console.log('########## Create Result #####: '+JSON.stringify(res));
        if (!res.error) {
        /********** NAVIGATE WITH USER ID **********/
        this.dismissModal();
        //Prefer saving from api response
        this.firebaseService.addItemToLocal(this.userData);
        //this.router.navigate(['/job-skills/details'], {queryParams :{id : res.id}});
        //this.router.navigate(['/job-skills/details', res.id]);
        this.router.navigate(['/job-skills/listing']);
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
      duration: 5000,
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
      console.log("uploadFile() got preview: "+this.preview);
    }
    reader.readAsDataURL(file)
  }


  async selectJobArea() {
    const modal = await this.modalController.create({
      component: SelectJobAreaPage
    });
    modal.onDidDismiss().then(avatar => {
      if (avatar.data != null) {
        this.createUserForm.patchValue({
          parent_id: avatar.data.id,
          parent_name : avatar.data.title
        });
        this.createUserForm.get('parent_id').updateValueAndValidity()
        this.createUserForm.get('parent_name').updateValueAndValidity()
      }
    });
    await modal.present();
  }

}
