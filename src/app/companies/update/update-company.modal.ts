import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyModel } from '../../dbmodels/company-model';
import { CompanyService } from '../companies.service';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { MasterService } from '../../services/master.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { BluspecValidator } from '../../shared/BluspecValidator';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.modal.html',
  styleUrls: [
    './styles/update-company.modal.scss',
    './styles/update-company.shell.scss'
  ],
})
export class UpdateCompanyModal implements OnInit {
  @Input() user: CompanyModel;
  updateUserForm: FormGroup;
  jobAreas = [];
  api_key:any;
  logoImgUpdated:string = "";

  hasWebsite = true;
  websiteInfo = "This company has a website.";
  hasFbPage = true;
  fbPageInfo = "This company has a facebook page.";
  hasTwitter = true;
  twitterInfo = "This company has a twitter page.";
  hasLinkedIn = true;
  linkedInInfo = "This company has a linkedIn page.";

  validations = {
    'title': [
    { type: 'required', message: 'Company name is required.' },
	  { type: 'minLength', message: 'Company name appears to be too small.' },
	  { type: 'maxLength', message: 'Company name can not exceed 20 characters.' }
    ],
    'tagline': [
    { type: 'required', message: 'Company tagline is required.' },
	  { type: 'minLength', message: 'Tagline appears to be too small.' },
	  { type: 'maxLength', message: 'Tagline can not exceed 20 characters.' }
    ],
    'description': [
      { type: 'required', message: 'Company description is required.' },
      { type: 'minLength', message: 'Company description appears to be too small.' },
      { type: 'maxLength', message: 'Company description must not exceed 200 characters.' }
      ],
    'website': [
      { type: 'required', message: 'Enter the company website URL.' },
      { type: 'pattern', message: 'Enter a valid website address. e.g. www.mysite.com' }
    ],
    'fb_link': [
      { type: 'required', message: 'Enter the company facebook page URL.' },
      { type: 'pattern', message: 'Enter a valid facebook page link. e.g. www.facebook.com/company' }
    ],
    'twitter_link': [
      { type: 'required', message: 'Enter the company twitter page URL.' },
      { type: 'pattern', message: 'Enter a valid twitter page url. e.g. www.twitter.com/company' }
    ],
    'linkedin': [
      { type: 'required', message: 'Enter LinkedIn URL for the company.' },
      { type: 'pattern', message: 'Enter a valid LinkedIn page url. e.g. www.linkedin.com/company' }
    ]
  };

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: CompanyService,
    public masterService: MasterService,
    private authService: AuthService,
    public toastService:ToastService,
    private storageService: StorageService,
    public loadingController: LoadingController,
    public router: Router) {
    
  }

  ngOnInit() {

  this.authService.getAuthKey().then(result=>{
      this.api_key = result;
    });

    //this.logoImgUpdated = this.user.logo;
    this.updateUserForm = new FormGroup({
      company_id: new FormControl(this.user.id, Validators.required),
      user_id: new FormControl(this.user.user_id, Validators.required),
      title: new FormControl(this.user.title, Validators.required),
      tagline: new FormControl(this.user.tagline, Validators.required),
      website: new FormControl(this.user.website, [Validators.required, Validators.pattern(BluspecValidator.urlRegex)]),
      description: new FormControl(this.user.description, Validators.required),
      jobAreas: new FormArray([], [CheckboxCheckedValidator.minSelectedCheckboxes(1)]),
      logo: new FormControl(this.user.logo, Validators.required),
      video_url: new FormControl(),
      fb_link: new FormControl(this.user.fb_link, [Validators.required, Validators.pattern(BluspecValidator.fbRegex)]),
      twitter_link: new FormControl(this.user.twitter_link, [Validators.required, Validators.pattern(BluspecValidator.twitterRegex)]),
      linkedin: new FormControl(this.user.linkedin, [Validators.required, Validators.pattern(BluspecValidator.linkedInRegex)])
    });


    /************ NO NEED FETCH ALL TIME **********/
    this.masterService.getJobAreas().subscribe(skills => {
      this.jobAreas = skills.result;
      // create skill checkboxes
      this.jobAreas.map((skill) => {
        let userSkillsIds = [];
        if (this.user.jobAreas) {
          userSkillsIds = this.user.jobAreas.map(function(skillId) {
            return skillId['id'];
          });
        }
        // set the control value to 'true' if the user already has this skill
        const control = new FormControl(userSkillsIds.includes(skill.id));
        (this.updateUserForm.controls.jobAreas as FormArray).push(control);

        //Display selected job areas
        // if(skillsArr.includes(item.id)){
        //   (this.updateUserForm.controls.skills as FormArray).push(new FormControl(true));
        // }else{
        //   (this.updateUserForm.controls.skills as FormArray).push(new FormControl());
        // }

      });
    });
/*******************************************************************/
//A dummy method for validation delay in template
this.initCompanyLinks();
}

  get skillsFormArray() { return <FormArray>this.updateUserForm.get('jobAreas'); }


  onWebsiteOptionSelected(e){
    this.hasWebsite = !this.hasWebsite;
    if(!this.hasWebsite){
      this.websiteInfo = 'Add company website.';
      this.updateUserForm.get('website').clearValidators();
      this.updateUserForm.get('website').updateValueAndValidity();
    }else{
      this.websiteInfo = 'Do not add website.';
      this.updateUserForm.get('website').setValidators([Validators.required, Validators.pattern(BluspecValidator.urlRegex)]);
      this.updateUserForm.get('website').updateValueAndValidity();
    }
  }

  onFacebookOptionSelected(e){
    this.hasFbPage = !this.hasFbPage;
    if(!this.hasFbPage){
      this.fbPageInfo = 'Do not add facebook page.';
      this.updateUserForm.get('fb_link').clearValidators();
      this.updateUserForm.get('fb_link').updateValueAndValidity();
    }else{
      this.fbPageInfo = 'Add facebook page.';
      this.updateUserForm.get('fb_link').setValidators([Validators.required, Validators.pattern(BluspecValidator.fbRegex)]);
      this.updateUserForm.get('fb_link').updateValueAndValidity();
    }
  }

  onTwitterOptionSelected(e){
    this.hasTwitter = !this.hasTwitter;
    if(!this.hasTwitter){
      this.twitterInfo = 'Do not add twitter page.';
      this.updateUserForm.get('twitter_link').clearValidators();
      this.updateUserForm.get('twitter_link').updateValueAndValidity();
    }else{
      this.twitterInfo = 'Add twitter page.';
      this.updateUserForm.get('twitter_link').setValidators([Validators.required, Validators.pattern(BluspecValidator.twitterRegex)]);
      this.updateUserForm.get('twitter_link').updateValueAndValidity();
    }
  }

  onLinkedInOptionSelected(e){
    this.hasLinkedIn = !this.hasLinkedIn;
    if(!this.hasLinkedIn){
      this.linkedInInfo = 'Do not add linkedin page.';
      this.updateUserForm.get('linkedin').clearValidators();
      this.updateUserForm.get('linkedin').updateValueAndValidity();
    }else{
      this.linkedInInfo = 'Add linkedin page.';
      this.updateUserForm.get('linkedin').setValidators([Validators.required, Validators.pattern(BluspecValidator.linkedInRegex)]);
      this.updateUserForm.get('linkedin').updateValueAndValidity();
    }
  }


initCompanyLinks(){
if(!this.user.website){
this.hasWebsite = false;
this.websiteInfo = 'Do not add website.';
this.updateUserForm.get('website').clearValidators();
this.updateUserForm.get('website').updateValueAndValidity();
}
if(!this.user.linkedin){
  this.hasLinkedIn = false;
  this.linkedInInfo = 'Do not add linkedin page.';
  this.updateUserForm.get('linkedin').clearValidators();
  this.updateUserForm.get('linkedin').updateValueAndValidity();
  }
  if(!this.user.fb_link){
    this.hasFbPage = false;
    this.fbPageInfo = 'Do not add facebook page.';
    this.updateUserForm.get('fb_link').clearValidators();
    this.updateUserForm.get('fb_link').updateValueAndValidity();
    }
    if(!this.user.twitter_link){
      this.hasTwitter = false;
      this.twitterInfo = 'Do not add twitter page.';
      this.updateUserForm.get('twitter_link').clearValidators();
      this.updateUserForm.get('twitter_link').updateValueAndValidity();
      }
}

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteUser() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to delete the company profile for ' + this.user.title + '?',
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
                if(AuthConstants.DEV_MODE){
                console.log('################ Result# '+JSON.stringify(res));
                }
                this.loadingController.dismiss();

                if (res.error) {
                  this.presentAlert(res.message); 
                  } else {
                    //delete from local
                    this.firebaseService.deleteItemFromLocal(this.user);
                    this.dismissModal();
                    this.toastService.presentToast(res.message);
                    this.router.navigate(['/companies/listing']);
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

  getSelectedJobAreasCount(){
    const selectedAreas = [];
    this.updateUserForm.value.jobAreas
    .map((value: any, index: number) => {
      if (value) {
        selectedAreas.push(this.jobAreas[index].id);
      }
    });
    return selectedAreas.length;
  }

  updateUser() {
    this.presentLoadingWithOptions();
    this.user.id = this.updateUserForm.value.company_id;
    this.user.title = this.updateUserForm.value.title;
    this.user.tagline = this.updateUserForm.value.tagline;
    this.user.website = this.updateUserForm.value.website;
    this.user.description = this.updateUserForm.value.description;
    this.user.user_id = this.updateUserForm.value.user_id;
    this.user.fb_link = this.updateUserForm.value.fb_link;
    this.user.twitter_link = this.updateUserForm.value.twitter_link;
    this.user.linkedin = this.updateUserForm.value.linkedin;
    this.user.logo = this.logoImgUpdated;
    //const selectedJobAreas = [];
    const selectedJobAreas = [];
    this.updateUserForm.value.jobAreas
    .map((value: any, index: number) => {
      if (value) {
        selectedJobAreas.push(this.jobAreas[index].id);
      }
    });
    this.user.jobAreas = selectedJobAreas;
    var postData = {
      id:this.user.id,
      title:this.user.title,
      tagline:this.user.tagline,
      website:this.user.website,
      description:this.user.description,
      user_id:this.user.user_id,
      fb_link:this.user.fb_link,
      twitter_link:this.user.twitter_link,
      linkedin:this.user.linkedin,
      jobAreas:this.user.jobAreas,
      logoImgUpdated:this.logoImgUpdated
      };


    this.firebaseService.callCompanyUpdateAPI(this.api_key, postData)
    .subscribe(
      (res: any) => {
        this.loadingController.dismiss();
        if(AuthConstants.DEV_MODE){
          console.log('########## API Response ########### '+JSON.stringify(res));
        }
        //this.updateResult = res.json();
        if (!res.error) {
          this.dismissModal();
          //SYNC THE UPDATE
          this.firebaseService.fetchFreshList();
          //this.router.navigate(['/companies/details'], {queryParams :{id : res.id}});
          this.router.navigate(['/companies/listing']);
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
    this.updateUserForm.patchValue({
      logo: file
    });
    this.updateUserForm.get('logo').updateValueAndValidity()

    console.log("uploadFile() "+this.updateUserForm.value);
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.logoImgUpdated = reader.result as string;
      this.user.logo = this.logoImgUpdated;
      console.log("uploadFile() got preview: "+this.logoImgUpdated);
    }
    reader.readAsDataURL(file)
  }

  removeFile(){
    this.logoImgUpdated = "";
    this.user.logo = this.logoImgUpdated;
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

}
