import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { of, from as fromPromise} from 'rxjs';

import { MenuController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { ToastService } from '../../services/toast.service';
import { LocationAutocompletePage } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.page';
import { JobService } from '../jobs.service';
import { AuthService } from '../../services/auth.service';
import { SelectJobAreaPage } from '../../utility-components/select-job-area/select-job-area.page';
import { SelectJobSkillPage } from '../../utility-components/select-job-skill/select-job-skill.page';
import { JobAreaModel } from '../../dbmodels/job-areas';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { UtilsService } from '../../services/utils.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectCurrencyPage } from '../../utility-components/select-currency/select-currency.page';
import { SelectCompanyPage } from '../../companies/select-company/select-company.page';
import { SelectCategoryPage } from '../select-category/select-category.page';

@Component({
  selector: 'app-post-job-detail',
  templateUrl: './post-job-detail.page.html',
  styleUrls: [
    './styles/post-job.page.scss',
    './styles/post-job.shell.scss',
    './styles/post-job.responsive.scss'
  ]
})
export class PostJobDetailPage implements OnInit {

  postJobForm: FormGroup;
  address : any;
  dataReturned: any;
  @ViewChild(GoogleMapComponent, { static: true }) _GoogleMap: GoogleMapComponent;
  map: google.maps.Map;
  mapOptions: google.maps.MapOptions = {
    zoom: 15,
    center: {lat: -34.9199842, lng: -56.149849}
    // uncomment the following line if you want to remove the default Map controls
    // disableDefaultUI: true
  };
  loadingElement: any;
  jobTypes: any;
  minExpiryDate: any;
  maxExpiryDate: any;
  jobSalaryTypes = ["Fixed", "Range", "Do not specify"];
  selectedJobArea : JobAreaModel;
  myCompanies: any;
  jobRequestPostParams: any;
  //Page Params For View rendering
  isLocationEnabled: boolean = true;
  isCompanyPost: boolean = false;
  isSalaryEnabled: boolean = true;
  isCustomOfferEnabled: boolean = false;
  isPushEnabled: number = 1;
  isEmailAlertEnabled: number = 0;
  selectedSalaryType = "fixed";
  selectedCurrency = "USD";
  isExperienceRequired: boolean = true;
  requiredMinExp = 0;
  requiredMaxExp = 20;


  validations = {
    'title': [
      { type: 'required', message: 'Job title is required.' },
	  { type: 'minLength', message: 'Job title appears to be too small.' },
	  { type: 'maxLength', message: 'Job title must not exceed 120 characters.' }
    ],
    'job_description': [
      { type: 'required', message: 'Job description is required.' },
	  { type: 'minLength', message: 'Job description appears to be too small.' }
    ],
    'job_type': [
      { type: 'required', message: 'Select a suitable job type.' }
    ],
    'notify_email': [
      { type: 'pattern', message: 'Enter a valid email address.' }
    ],
    'job_area': [
      { type: 'required', message: 'Please select a suitable job area.' }
    ],
    'skills': [
      { type: 'required', message: 'Please select relevant skill(s) required for this job.' }
    ],
    'currency': [
      { type: 'required', message: 'Please select a currency to specify the salary.' }
    ],
    'min_salary': [
      { type: 'required', message: 'Please enter the minimum salary per month.' }
    ],
    'max_salary': [
      { type: 'required', message: 'Please enter the maximum salary per month.' }
    ],
    'fixed_fee': [
      { type: 'required', message: 'Please enter the fixed price you are offering for this job.' }
    ],
    'min_rate_per_hour': [
      { type: 'required', message: 'Please enter the minimum rate per hour.' }
    ],
    'max_rate_per_hour': [
      { type: 'required', message: 'Please enter the maximum rate per hour.' }
    ]
  };

  constructor(public menu: MenuController, public loadingController:LoadingController,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private storageService: StorageService,
    private jobService: JobService,
    private authService: AuthService,
    private utilsService: UtilsService,
    public router:Router,
    private route: ActivatedRoute, 
    private toaster: ToastService) { 
      let currentTime = new Date();
      let year = currentTime.getFullYear();
      let startDate = new Date().toISOString();
      this.minExpiryDate = startDate;
      this.maxExpiryDate = year +1;
    }

  ngOnInit() {
    this.menu.enable(true);

    this.postJobForm = new FormGroup({
      // latitude: new FormControl('', Validators.required),
      // longitude: new FormControl('', Validators.required),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      address: new FormControl(''),
      radius: new FormControl(10),
      title: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]),
      job_description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      job_type: new FormControl('', Validators.required),
      //job_types: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
      pincode: new FormControl(''),
      category_id: new FormControl('', Validators.required),
      category_name: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required),
      closingDate: new FormControl(''),

      company_id: new FormControl(''),
      company_name: new FormControl(''),
      is_active: new FormControl(''),
      job_area: new FormControl('', Validators.required),
      job_area_name: new FormControl(''),
      skills: new FormControl(''),
      skills_name: new FormControl(''),

      currency: new FormControl(this.selectedCurrency),
      job_salary_type: new FormControl(''),
      min_salary: new FormControl(''),
      max_salary: new FormControl(''),
      min_rate_per_hour: new FormControl(''),
      max_rate_per_hour: new FormControl(''),
      fixed_fee: new FormControl(''),

      //expInYrs: new FormControl(0, counterRangeValidator(0, 20)),
      enableCustomOffer: new FormControl(this.isCustomOfferEnabled),
      expInYrs: new FormControl({lower: 0, upper: 20}),
      enablePush: new FormControl(this.isPushEnabled),
      enableEmail: new FormControl(this.isEmailAlertEnabled),
      notifyEmail: new FormControl(''),
    });

    this.address = {
      place: ''
    };

    this.storageService.get(AuthConstants.JOB_TYPES).then(allTypes=>{
      if(allTypes){
        this.jobTypes = allTypes;

        // this.jobTypes.map(() => {
        //   (this.postJobForm.controls.job_types as FormArray).push(new FormControl());
        // });
      }
    });

    this.storageService.get(AuthConstants.MY_COMPANIES).then(allTypes=>{
      if(allTypes){
        this.myCompanies = allTypes;
      }
    });

    this.authService.getAuthCache().then(authData=>{
      if(authData){
        this.postJobForm.controls.user_id.patchValue(authData.id);
        this.postJobForm.controls.user_id.updateValueAndValidity();
      }
    });


    this.route.params.subscribe(params => {
      if(params['jobArea']){
        this.selectedJobArea = params['jobArea'];
        console.log("Received Job Area: "+JSON.stringify(this.selectedJobArea));
        //this.postJobForm.controls.job_area.patchValue(this.selectedJobArea);
        //this.postJobForm.controls.job_area.updateValueAndValidity();
      }
      });

      // if(this.postJobForm.value.category_id === ''){
      //   this.openJobCategorySelector();
      // }
  }

  get jobTypesFormArray() { return <FormArray>this.postJobForm.get('job_types'); }

  segmentButtonClicked(ev) {
    this.selectedSalaryType = ev.detail.value;
    console.log('Selected Salary: ', this.selectedSalaryType);
    this.postJobForm.controls.job_salary_type.patchValue(this.selectedSalaryType);
    this.postJobForm.controls.job_salary_type.updateValueAndValidity();

    switch(this.selectedSalaryType){
     case "fixed":
      this.postJobForm.get('fixed_fee').setValidators(Validators.required);
      this.postJobForm.get('fixed_fee').updateValueAndValidity();

      this.postJobForm.get('min_salary').clearValidators();
      this.postJobForm.get('min_salary').updateValueAndValidity();
      this.postJobForm.get('max_salary').clearValidators();
      this.postJobForm.get('max_salary').updateValueAndValidity();
      this.postJobForm.get('min_rate_per_hour').clearValidators();
      this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
      this.postJobForm.get('max_rate_per_hour').clearValidators();
      this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
      break;

      case "monthly":
      // this.postJobForm.get('min_salary').setValidators(Validators.required);
      // this.postJobForm.get('min_salary').updateValueAndValidity();
      // this.postJobForm.get('max_salary').setValidators(Validators.required);
      // this.postJobForm.get('max_salary').updateValueAndValidity();

      this.postJobForm.get('fixed_fee').clearValidators();
      this.postJobForm.get('fixed_fee').updateValueAndValidity();
      this.postJobForm.get('min_rate_per_hour').clearValidators();
      this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
      this.postJobForm.get('max_rate_per_hour').clearValidators();
      this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
      break;

      case "hourly":
      // this.postJobForm.get('min_rate_per_hour').setValidators(Validators.required);
      // this.postJobForm.get('max_rate_per_hour').setValidators(Validators.required);
      // this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
      // this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();

      this.postJobForm.get('min_salary').clearValidators();
      this.postJobForm.get('min_salary').updateValueAndValidity();
      this.postJobForm.get('max_salary').clearValidators();
      this.postJobForm.get('max_salary').updateValueAndValidity();
      this.postJobForm.get('fixed_fee').clearValidators();
      this.postJobForm.get('fixed_fee').updateValueAndValidity();
      break;
    }
  }

  getSelectedJobTypesCount(){
    const selectedJobTypes = [];
    this.postJobForm.value.job_types
    .map((value: any, index: number) => {
      if (value) {
        selectedJobTypes.push(this.jobTypes[index].id);
      }
    });
    return selectedJobTypes.length;
  }

  ngAfterViewInit(): void {
    //Map Works
    if(this.isLocationEnabled){
      if(AuthConstants.DEV_MODE){
      console.log("Map Location Enabled ngAfterViewInit(): true");
      }
      this.initMap();
    }
  }

  initMap(){
    if(this._GoogleMap !== undefined && this._GoogleMap !== null){
      this._GoogleMap.$mapReady.subscribe(map => {
        this.map = map;
      });
      this.createLoader();
      this.loadCurrentLocation();
      let search_input = document.getElementById('search_input');
      let autocmplete = new google.maps.places.AutocompleteService();
    }else{
      this.toaster.presentToast("Map view not found.");
    }
  }

  async displayLoader(){
    const loading = this.loadingController.create({
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true
    });
    await (await loading).present();
    return loading;
  }


  async openJobCategorySelector() {
    const modal = await this.modalCtrl.create({
      component: SelectCategoryPage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.postJobForm.get('category_id').patchValue(item.data);
        this.postJobForm.get('category_id').updateValueAndValidity();
        if(item.data == 1){
          this.postJobForm.get('category_name').patchValue("Express Job");
          this.postJobForm.get('category_name').updateValueAndValidity();
        }else{
        this.postJobForm.get('category_name').patchValue("Regular Job");
        this.postJobForm.get('category_name').updateValueAndValidity();
        }
      }
    });
    await modal.present();
  }


  loadCurrentLocation(){
    this.displayLoader()
    .then((loader: any) => {
      return this.getCurrentPosition()
        .then(position => {
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let mapOptions = {
                    center: latLng,
                    zoom: 15
                };
                this.toaster.presentToast("Current Location: "+position.coords.latitude+", "+ position.coords.longitude);
             //alert(position.coords.latitude+", "+ position.coords.longitude); 
             //this.currentLat = position.coords.latitude;
             //this.currentLong = position.coords.longitude;
             console.log("Current Location: "+position.coords.latitude+", "+position.coords.longitude);
             this.postJobForm.controls.latitude.setValue(position.coords.latitude);
             this.postJobForm.controls.longitude.setValue(position.coords.longitude);
          // fermer loader + return position
          loader.dismiss();
          return position;
        })
        // if error
        .catch(err => {
          // fermer loader + return NULL
          loader.dismiss();
          return null;
        });
    })
    .then(position => (position instanceof Error) ? this.presentAlert(position.message) : null)
    // do not forget to handle promise rejection
    .catch(err => {
      this.presentAlert(err.message);
    });
  }

  private async getCurrentPosition(): Promise<any> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    // handle Capacitor Errors
    .catch(err => {
      console.log('ERR', err);
      return new Error(err.message || 'message perso');
    });

    // this.coordinates$ = fromPromise(POSITION).pipe(
    //   switchMap((data: any) => of(data.coords)),
    //   tap(data => console.log(data))
    // );
    return POSITION;
  }

  async createLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Trying to get your current location...'
    });
  }

  async presentLoader() {
    await this.loadingElement.present();
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }


  onLocationEnabled(e){
    this.isLocationEnabled = !this.isLocationEnabled;
    if(!this.isLocationEnabled){
    }else{
      if(this.isLocationEnabled){
        //this.initMap();
      }
    }
  }

  onExperienceEnabled(e){
    this.isExperienceRequired = !this.isExperienceRequired;
    if(!this.isExperienceRequired){
    }else{
      
    }
  }

  onSalaryEnabled(e){
    this.isSalaryEnabled = !this.isSalaryEnabled;
    if(!this.isSalaryEnabled){
    this.postJobForm.get('job_salary_type').patchValue("");
    this.postJobForm.get('job_salary_type').updateValueAndValidity();
    this.postJobForm.get('currency').clearValidators();
    this.postJobForm.get('currency').updateValueAndValidity();
    this.postJobForm.get('fixed_fee').clearValidators();
    this.postJobForm.get('fixed_fee').updateValueAndValidity();
    this.postJobForm.get('min_salary').clearValidators();
    this.postJobForm.get('min_salary').updateValueAndValidity();
    this.postJobForm.get('max_salary').clearValidators();
    this.postJobForm.get('max_salary').updateValueAndValidity();
    this.postJobForm.get('min_rate_per_hour').clearValidators();
    this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
    this.postJobForm.get('max_rate_per_hour').clearValidators();
    this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
    }else{
    this.postJobForm.get('currency').setValidators([Validators.required]);
    this.postJobForm.get('currency').updateValueAndValidity();
    }
  }

  onCustomOfferEnabled(e){
    if(this.isCustomOfferEnabled){
      this.isCustomOfferEnabled = false;
    }else{
      this.isCustomOfferEnabled = true;
    }
    this.postJobForm.get('enableCustomOffer').patchValue(this.isCustomOfferEnabled);
    this.postJobForm.get('enableCustomOffer').updateValueAndValidity();
  }

  onPushEnabled(e){
    if(this.isPushEnabled){
      this.isPushEnabled = 0;
    }else{
      this.isPushEnabled = 1;
    }
    this.postJobForm.get('enablePush').patchValue(this.isPushEnabled);
    this.postJobForm.get('enablePush').updateValueAndValidity();
  }

  onEmailAlertEnabled(e){
    if(this.isEmailAlertEnabled){
      this.isEmailAlertEnabled = 0;
      this.postJobForm.get('enableEmail').clearValidators();
    }else{
      this.isEmailAlertEnabled = 1;
      this.postJobForm.get('enableEmail').setValidators([Validators.required]);
    }
    this.postJobForm.get('enableEmail').patchValue(this.isEmailAlertEnabled);
    this.postJobForm.get('enableEmail').updateValueAndValidity();
  }

  onCompanyEnabled(e){
    this.isCompanyPost = !this.isCompanyPost;
    if(!this.isCompanyPost){
      this.postJobForm.get('company_id').clearValidators();
      this.postJobForm.get('company_id').updateValueAndValidity();
    }else{
      this.postJobForm.get('company_id').setValidators([Validators.required]);
      this.postJobForm.get('company_id').updateValueAndValidity();
    }
  }

  async showAddressModal () {
    // let modal = this.modalCtrl.create(LocationAutocompletePage);
    // let me = this;
    // modal.onDidDismiss(data => {
    //   this.address.place = data;
    // });
    // modal.present();

    const modal = await this.modalCtrl.create({
      component: LocationAutocompletePage,
      cssClass: 'fullscreen-modal-css'
    });

    modal.onDidDismiss().then((dataReturned ) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned;
        console.log("dataReturned.data: "+dataReturned.data);
        alert(''+ JSON.stringify(dataReturned.data));
        this.address.place = dataReturned.data;
        this.postJobForm.controls.address.patchValue(this.address.place);
        this.postJobForm.controls.address.updateValueAndValidity();
      }else{
        alert('No Place selected. Please try again.');
        this.address.place = "Location to be integreted";
      }
    });
    await modal.present();
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

  async openSelectJobArea() {
    const modal = await this.modalCtrl.create({
      component: SelectJobAreaPage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.selectedJobArea = item.data;
        this.postJobForm.controls.job_area.patchValue(item.data.id);
        this.postJobForm.controls.job_area_name.patchValue(item.data.title);
        this.postJobForm.controls.job_area.updateValueAndValidity();
        this.postJobForm.controls.job_area_name.updateValueAndValidity();
      }
    });
    await modal.present();
   }


   async openSelectCompany() {
    const modal = await this.modalCtrl.create({
      component: SelectCompanyPage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.postJobForm.controls.company_id.patchValue(item.data.id);
        this.postJobForm.controls.company_name.patchValue(item.data.title);
        this.postJobForm.controls.company_id.updateValueAndValidity();
        this.postJobForm.controls.company_name.updateValueAndValidity();
      }
    });
    await modal.present();
   }


   async openCurrencyChooser() {
    const modal = await this.modalCtrl.create({
      component: SelectCurrencyPage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.selectedCurrency = item.data.symbol;
        this.postJobForm.controls.currency.patchValue(this.selectedCurrency);
        this.postJobForm.controls.currency.updateValueAndValidity();
        this.postJobForm.controls.currency_name.patchValue(this.selectedCurrency);
        this.postJobForm.controls.currency_name.updateValueAndValidity();
      }
    });
    await modal.present();
   }

   async openSelectJobSkills() {
     //alert(this.postJobForm.value.job_area);
     console.log("Sending Job Area: "+JSON.stringify(this.selectedJobArea));
    const modal = await this.modalCtrl.create({
      component: SelectJobSkillPage,
      componentProps: {
        'multiple': true,
        'selectedJobArea': this.selectedJobArea,
        'filterArr': [1,2]
      }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        if(Array.isArray(item.data)){
          //console.log("Received Job Skills: "+JSON.stringify(item.data));
          this.postJobForm.controls.skills.patchValue(item.data["id"]);
          this.postJobForm.controls.skills.updateValueAndValidity();
          this.postJobForm.controls.skills_name.patchValue(item.data["title"]);
          this.postJobForm.controls.skills_name.updateValueAndValidity();
        }else{
          this.postJobForm.controls.skills.patchValue(item.data.id);
          this.postJobForm.controls.skills.updateValueAndValidity();
          this.postJobForm.controls.skills_name.patchValue(item.data.title);
          this.postJobForm.controls.skills_name.updateValueAndValidity();
        }
      }
    });
    await modal.present();
   }

  submitForm(){
    this.presentLoadingWithOptions();
    let date_closing = this.postJobForm.value.closingDate;
    console.log("date_closing "+this.postJobForm.value.closingDate+"  ");
    if(date_closing !== null && date_closing != ""){
    date_closing = this.utilsService.splitTimestampFromDate(this.postJobForm.value.closingDate);
    if(this.utilsService.isValidDate(date_closing)){
      //alert("All right"+this.user.dob);
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.postJobForm.value.closingDate);
      this.postJobForm.controls.closingDate.patchValue(formattedVal);
      this.postJobForm.controls.closingDate.updateValueAndValidity();
      date_closing = formattedVal;
      console.log("date_closing formatted from "+this.postJobForm.value.closingDate+" to "+formattedVal);
    }
  }
  
    let postData = {
      user_id: this.postJobForm.value.user_id,
      title: this.postJobForm.value.title,
      job_description: this.postJobForm.value.job_description,
      job_type: this.postJobForm.value.job_type,
      address: this.postJobForm.value.address,
      latitude: this.postJobForm.value.latitude,
      longitude: this.postJobForm.value.longitude,
      pincode: this.postJobForm.value.pincode,
      date_closing: date_closing,
      job_area: this.postJobForm.value.job_area,
      category_id: this.postJobForm.value.category_id,
      salary_type: this.postJobForm.value.job_salary_type,
      job_categories: this.postJobForm.value.skills,
      fixed_fee: this.postJobForm.value.fixed_fee,
      min_rate_per_hour: this.postJobForm.value.min_rate_per_hour,
      max_rate_per_hour: this.postJobForm.value.max_rate_per_hour,
      min_salary: this.postJobForm.value.min_salary,
      max_salary: this.postJobForm.value.max_salary,
      is_loc_enabled: this.isLocationEnabled ? 1: 0,
      company_id: this.postJobForm.value.company_id,
      notify_range: this.postJobForm.value.radius,
      minExp: this.postJobForm.controls.expInYrs.value.lower,
      maxExp: this.postJobForm.controls.expInYrs.value.upper,
      enablePush: this.postJobForm.value.enablePush ? 1: 0,
      enableEmail: this.postJobForm.value.enableEmail ? 1: 0,
      notify_email: this.postJobForm.value.notifyEmail,
      enableCustomOffer: this.isCustomOfferEnabled ? 1: 0
    }

    if(AuthConstants.DEV_MODE){
      alert(JSON.stringify(postData));
    }
    console.log('########## Sending Post params ########### '+JSON.stringify(postData));

    this.authService.getAuthCache().then(authData=>{
      if(authData){
        this.jobService.callJobCreateAPI(authData.api_key, postData)
        .subscribe(
          (res: any) => {
            this.loadingController.dismiss();
            if(AuthConstants.DEV_MODE){
              console.log('########## API Response ########### '+JSON.stringify(res));
            }
            if (!res.error) {
              if(res.qcode){
                this.router.navigate(['/jobs/details', res.qcode]);
              }else{
                this.router.navigate(['/job-manager']);
              }
              //this.firebaseService.invokeProfileChangeEvent.
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
    });
  }

}
