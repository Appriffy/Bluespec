import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { CompanyModel } from '../../dbmodels/company-model';
import { CompanyService } from '../companies.service';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthConstants } from '../../config/AuthConstants';
import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { BluspecValidator } from '../../shared/BluspecValidator';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.modal.html',
  styleUrls: [
    './styles/create-company.modal.scss',
    './styles/create-company.shell.scss'
  ]
})
export class CreateCompanyModal implements OnInit {
  createUserForm: FormGroup;
  userData: CompanyModel = new CompanyModel();
  jobAreas = [];
  api_key:any;
  localUser:LocalUser;
  preview: any;
  loading: any;
  percentDone: any = 0;
  errorMsg = "";
  hasWebsite = true;
  websiteInfo = "Add website URL.";
  hasFbPage = true;
  fbPageInfo = "Add facebook page link.";
  hasTwitter = true;
  twitterInfo = "Add twitter page link.";
  hasLinkedIn = true;
  linkedInInfo = "Add linkedIn page URL.";

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
    public firebaseService: CompanyService,
    private authService:AuthService,
    public masterService: MasterService,
    public alertController: AlertController,
    private storageService: StorageService,
    private toastService: ToastService,
    private loadingController: LoadingController,
    public router:Router) { }

  ngOnInit() {
    this.userData.logo = '';
    this.authService.getAuthCache().then(promisedValue=>{
    this.localUser = promisedValue;
    this.api_key = this.localUser.api_key;

    // default image
    this.createUserForm.controls.user_id.patchValue(this.localUser.id);
    this.createUserForm.controls.user_id.updateValueAndValidity();
    });

    this.createUserForm = new FormGroup({
      user_id: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      tagline: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      website: new FormControl('', [Validators.required, Validators.pattern(BluspecValidator.urlRegex)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
      jobAreas: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
      logo: new FormControl(null, Validators.required),
      video_url: new FormControl(''),
      fb_link: new FormControl('', [Validators.required, Validators.pattern(BluspecValidator.fbRegex)]),
      twitter_link: new FormControl('', [Validators.required, Validators.pattern(BluspecValidator.twitterRegex)]),
      linkedin: new FormControl('', [Validators.required, Validators.pattern(BluspecValidator.linkedInRegex)])
    });



    this.storageService.get(AuthConstants.JOB_AREAS).then(skills=>{
      if(skills){
        this.jobAreas = skills;
      this.jobAreas.map(() => {
        (this.createUserForm.controls.jobAreas as FormArray).push(new FormControl());
      });
      }else{
        //Can fetch now
        alert("Could not find job areas in storage.");
      }
    });

  }

  get skillsFormArray() { return <FormArray>this.createUserForm.get('jobAreas'); }

  getSelectedJobAreasCount(){
    const selectedAreas = [];
    this.createUserForm.value.jobAreas
    .map((value: any, index: number) => {
      if (value) {
        selectedAreas.push(this.jobAreas[index].id);
      }
    });
    return selectedAreas.length;
  }

  onWebsiteOptionSelected(e){
    this.hasWebsite = !this.hasWebsite;
    if(!this.hasWebsite){
      this.websiteInfo = 'Do not have a website.';
      this.createUserForm.get('website').clearValidators();
      this.createUserForm.get('website').updateValueAndValidity();
    }else{
      this.websiteInfo = 'Add website link.';
      this.createUserForm.get('website').setValidators([Validators.required, Validators.pattern(BluspecValidator.urlRegex)]);
      this.createUserForm.get('website').updateValueAndValidity();
    }
  }

  onFacebookOptionSelected(e){
    this.hasFbPage = !this.hasFbPage;
    if(!this.hasFbPage){
      this.fbPageInfo = 'Do not have facebook page.';
      this.createUserForm.get('fb_link').clearValidators();
      this.createUserForm.get('fb_link').updateValueAndValidity();
    }else{
      this.fbPageInfo = 'Have facebook page.';
      this.createUserForm.get('fb_link').setValidators([Validators.required, Validators.pattern(BluspecValidator.fbRegex)]);
      this.createUserForm.get('fb_link').updateValueAndValidity();
    }
  }

  onTwitterOptionSelected(e){
    this.hasTwitter = !this.hasTwitter;
    if(!this.hasTwitter){
      this.twitterInfo = 'Do not have twitter page.';
      this.createUserForm.get('twitter_link').clearValidators();
      this.createUserForm.get('twitter_link').updateValueAndValidity();
    }else{
      this.twitterInfo = 'Add twitter page.';
      this.createUserForm.get('twitter_link').setValidators([Validators.required, Validators.pattern(BluspecValidator.twitterRegex)]);
      this.createUserForm.get('twitter_link').updateValueAndValidity();
    }
  }

  onLinkedInOptionSelected(e){
    this.hasLinkedIn = !this.hasLinkedIn;
    if(!this.hasLinkedIn){
      this.linkedInInfo = 'Do not have linkedin page.';
      this.createUserForm.get('linkedin').clearValidators();
      this.createUserForm.get('linkedin').updateValueAndValidity();
    }else{
      this.linkedInInfo = 'Have linkedin page.';
      this.createUserForm.get('linkedin').setValidators([Validators.required, Validators.pattern(BluspecValidator.linkedInRegex)]);
      this.createUserForm.get('linkedin').updateValueAndValidity();
    }
  }

  dismissModal() {
   this.modalController.dismiss();
  }

  createUser() {
    this.presentLoadingWithOptions();
    this.userData.title = this.createUserForm.value.title;
    this.userData.tagline = this.createUserForm.value.tagline;
    this.userData.website = this.createUserForm.value.website;
    this.userData.description = this.createUserForm.value.description;
    this.userData.user_id = this.createUserForm.value.user_id;
    this.userData.fb_link = this.createUserForm.value.fb_link;
    this.userData.twitter_link = this.createUserForm.value.twitter_link;
    this.userData.linkedin = this.createUserForm.value.linkedin;

    const selectedJobAreas = [];
    this.createUserForm.value.jobAreas
    .map((value: any, index: number) => {
      if (value) {
        selectedJobAreas.push(this.jobAreas[index].id);
      }
    });
    this.userData.jobAreas = selectedJobAreas;
    this.userData.logo = this.preview;

    this.firebaseService.callCompanyCreateAPI(this.api_key, this.userData)
    .subscribe((event: any) => {
      this.loading.dismiss();
      if(AuthConstants.DEV_MODE){
        console.log('########## Company Create Result #####: '+JSON.stringify(event));
      }
 
     if (!event.error) {
      this.dismissModal();
      this.firebaseService.addItemToLocal(this.userData);
      /********** NAVIGATE WITH USER ID **********/
      this.toastService.presentToast(event.message);
      this.router.navigate(['/companies/details', event.id]);
      } else {
        this.presentAlert(event.message);
      }
    },
    (error: any) => {
     this.loading.dismiss();
    this.presentAlert('Looks like there is a Network Issue.');
    });

  }



  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createUserForm.patchValue({
      logo: file
    });
    this.createUserForm.get('logo').updateValueAndValidity()

    console.log("uploadFile() "+this.createUserForm.value);
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      console.log("uploadFile() got preview: "+this.preview);
    }
    reader.readAsDataURL(file)
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
     this.loading = await this.loadingController.create({
      animated:true,
      spinner: "bubbles",
      message: 'Registering Company Profile',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }

}
