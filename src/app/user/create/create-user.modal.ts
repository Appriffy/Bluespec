import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthConstants } from '../../config/AuthConstants';
import { StorageService } from '../../services/storage.service';
import { BluspecUserModel, UserProfileModel } from '../profile/user-profile.model';
import { UserService } from '../user.service';
import { ToastService } from '../../services/toast.service';
import { AppCountryModel } from '../../signup/personal-profile/personal-profile.page';
import { PasswordValidator } from '../../validators/password.validator';
import { UtilsService } from '../../services/utils.service';
import { SelectCountryPage } from '../../utility-components/select-country/select-country.page';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.modal.html',
  styleUrls: [
    './styles/create-user.modal.scss',
    './styles/create-user.shell.scss'
  ]
})
export class CreateUserModal implements OnInit {
  createUserForm: FormGroup;
  matching_passwords_group: FormGroup;
  userData: UserProfileModel = new UserProfileModel();
  api_key:any;
  localUser:LocalUser;
  preview: string = '';
  isAutogeneratePassword : boolean = true;
  selectedGrafterType:number = 1;
  selectedRole:number = 3;
  user_roles: any;

  maxDOBYear: any;
  validations = {
    'first_name': [
      { type: 'required', message: 'First name is required.' },
	  { type: 'minLength', message: 'First name appears to be too small.' },
	  { type: 'maxLength', message: 'First name can not exceed 20 characters.' }
    ],
    'last_name': [
      { type: 'required', message: 'Last name is required.' },
	  { type: 'minLength', message: 'Last name appears to be too small.' },
	  { type: 'maxLength', message: 'Last name can not exceed 20 characters.' }
    ],
    'email': [
      { type: 'required', message: 'Email address is required.' },
      { type: 'pattern', message: 'Enter a valid email address.' }
    ],
    'mobile': [
      { type: 'required', message: 'Please enter your mobile number.' },
      { type: 'minlength', message: 'Mobile number must be at least 9 digits long.' },
      { type: 'maxlength', message: 'Mobile number must not exceed 12 digits.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Password confirmation is required.' }
    ],
    'matching_passwords': [
      { type: 'areNotEqual', message: 'Password mismatch. Please check your password again.' }
    ]
  };

  constructor(private modalController: ModalController,
    public firebaseService: UserService,
    private authService:AuthService,
    public masterService: MasterService,
    private toastService: ToastService,
    private utilsService: UtilsService,
    public alertController: AlertController,
    private storageService: StorageService,
    private loadingController: LoadingController,
    public router:Router) { 
      let currentTime = new Date();
      let year = currentTime.getFullYear();
      this.maxDOBYear = year - 16;
    }

  ngOnInit() {
    this.user_roles = [
      {"id":2, "title":"Employer"},
      {"id":3, "title":"Grafter"}
    ];

    this.userData.user_image = 'https://bluspec.app/uploads/images/defaults/avatar.jpg';

    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      this.api_key = this.localUser.api_key;
      if(this.localUser != null && this.localUser.role_id !== 1){
      this.toastService.presentToast("You are not authorized to access this screen.");
      this.router.navigate(['/auth/login']);
      }
    //this.createUserForm.patchValue({user_id:this.localUser.id});
    });

    this.buildPasswordFormGroup();
    this.createUserForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3),  Validators.maxLength(20)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(3),  Validators.maxLength(20)]),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      mobile: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]),
      dob: new FormControl(''),
      address: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      city: new FormControl(''),
      country : new FormControl('', Validators.required),
      //country : new FormControl(''),
      user_image: new FormControl(null),
      autogen_pass: new FormControl(true),
      matching_passwords: this.matching_passwords_group,
      grafter_type: new FormControl('1'),
      role_id: new FormControl(''),
      status: new FormControl('Pending'),
      notify_account: new FormControl('1')
    });

    this.onHandleFormChanges();
  }

  buildPasswordFormGroup(){
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      if(!this.isAutogeneratePassword){
        return PasswordValidator.areNotEqual(formGroup);
      }
    });
  }

  onHandleFormChanges(): void {
    const matchingPasswordsControl = this.createUserForm.get('matching_passwords');
    this.createUserForm.valueChanges.subscribe(val => {
        this.isAutogeneratePassword = val.autogen_pass;
         if(this.isAutogeneratePassword){
          matchingPasswordsControl.setValidators(Validators.nullValidator);
          matchingPasswordsControl.get('password').clearValidators();
          matchingPasswordsControl.get('confirm_password').clearValidators();
        }else{
          this.buildPasswordFormGroup();
        }
    });
  }

  dismissModal() {
   this.modalController.dismiss();
  }

  createUser() {
    this.presentLoadingWithOptions();
    
    this.userData.first_name = this.createUserForm.value.first_name;
    this.userData.last_name = this.createUserForm.value.last_name;
    //this.userData.dob = dayjs(this.createUserForm.value.dob).unix(); // save it in timestamp
    this.userData.dob = this.createUserForm.value.dob; 
    this.userData.mobile = this.createUserForm.value.mobile;
    this.userData.email = this.createUserForm.value.email;
    this.userData.role_id = this.createUserForm.value.role_id;
    this.userData.grafter_type = this.createUserForm.value.grafter_type;
    this.userData.address = this.createUserForm.value.address;
    this.userData.country = this.createUserForm.value.country;
    //this.userData.city = this.createUserForm.value.city;
    this.userData.autogen_pass = this.createUserForm.value.autogen_pass;

    console.log("DOB Value here: "+this.userData.dob);
    this.userData.dob = this.utilsService.splitTimestampFromDate(this.userData.dob)
    if(this.utilsService.isValidDate(this.userData.dob)){
      //alert("All right"+this.userData.dob);
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.userData.dob);
      this.createUserForm.controls.dob.patchValue(formattedVal);
      this.userData.dob = formattedVal;
      //console.log("DOB formatted from "+this.userData.dob+" to "+formattedVal);
    }
    console.log("And DOB Value here: "+this.createUserForm.value.dob);

    this.userData.user_image = this.preview;
    //This takes HttpEvent<any>


    let postData = {
         first_name: this.userData.first_name,
         last_name: this.userData.last_name,
         dob: this.userData.dob,
         mobile: this.userData.mobile,
         email: this.userData.email,
         role_id: this.userData.role_id,
         grafter_type: this.userData.grafter_type,
         address: this.userData.address,
         country: this.userData.country,
         autogen_pass: this.userData.autogen_pass,
         user_image: this.preview

    }

    console.log("USER CREATE PARAMS: "+JSON.stringify(postData));

    this.firebaseService.callRegistrationAPI(this.api_key, postData)
    .subscribe((event: any) => {
      this.loadingController.dismiss();
      console.log('########## User Create Result #####: '+JSON.stringify(event));
      //alert('########## Company Create Result #####: '+JSON.stringify(event));
      /*
      console.log('########## TESTING 001 #####: '+event.type);
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.percentDone = false;
          this.loadingController.dismiss();
         
          console.log('########## TESTING CHECK #####: '+JSON.stringify(event.body));
          if (!event.body.error) {
            this.dismissModal();
            this.firebaseService.addItemToLocal(this.userData);
            this.router.navigate(['/companies/details', event.body.id]);
            } else {
              this.presentAlert(event.body.message);
            }
      }
      */
     if (!event.error) {
      this.dismissModal();
      this.firebaseService.addItemToLocal(this.userData);
      this.toastService.presentToast(event.message);
      /********** NAVIGATE WITH USER ID **********/
      //this.router.navigate(['/people/listing']);
      //user_id
      //this.router.navigate(['/people/view-profile', event.id]);
      this.router.navigate(['/people/details', event.username]);
      } else {
        this.presentAlert(event.message);
      }
    },
    (error: any) => {
     this.loadingController.dismiss();
    this.presentAlert('Looks like there is a Network Issue.'+error.message);
    });

  }

  validateDOB(e){
    console.log("DOB get=> "+e);
    let year = new Date(e).getFullYear();
    let today = new Date().getFullYear();
    console.log("DOB year=> "+year);
    if(today - year >= 100){
      console.log("DOB today=> "+today);
    }
  }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createUserForm.patchValue({
      user_image: file
    });
    
    this.createUserForm.get('user_image').updateValueAndValidity()

    console.log("uploadFile() "+this.createUserForm.value);
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      console.log("uploadFile() got preview: "+this.preview);
    }
    reader.readAsDataURL(file)
  }

  async openSelectCountry() {
    const modal = await this.modalController.create({
      component: SelectCountryPage,
      // componentProps: {
      //   'user': this.profile
      // }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.createUserForm.controls.country.patchValue(item.data);
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
      message: 'Registering Account...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  // async showUserFilterScreen() {
  //   const modal = await this.modalController.create({
  //     component: CompanyFilterPage,
  //     cssClass: "fullscreen-modal"
  //   });
  //   return await modal.present();
  //   //alert("hii");
  // }

}
