import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { MasterService } from '../../services/master.service';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { MenuController, LoadingController, Platform } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { AuthConstants } from '../../config/AuthConstants';
import { RegistrationService } from '../registration.service';
import { PasswordValidator } from '../../validators/password.validator';
import { BluspecUserModel } from '../../user/profile/user-profile.model';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.page.html',
  styleUrls: ['./personal-profile.page.scss'],
})
export class PersonalProfilePage implements OnInit {
  createUserForm: FormGroup;
  matching_passwords_group: FormGroup;
  userData: BluspecUserModel = new BluspecUserModel();
  cachedData: BluspecUserModel;
  countries: Array<AppCountryModel>;
  isAutogeneratePassword : boolean;
  selectedGrafterType:number = 1;
  selectedRole:number = 3;
  platformDetails:string;
  validations = {
    'first_name': [
      { type: 'required', message: 'First name is required.' }
    ],
    'last_name': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email address is required.' },
      { type: 'pattern', message: 'Enter a valid email address.' }
    ],
    'phone': [
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
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept our terms and conditions.' }
    ]
  };

  constructor(private registrationService: RegistrationService, private platform: Platform, private masterService: MasterService, private userService: UserService,
    public router: Router,
    public menu: MenuController,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private toastService: ToastService,
    public storageService: StorageService) {

    }

  ngOnInit() {
    this.menu.enable(false);
    this.platformDetails = this.platform.platforms().toString();
    this.countries = [
      new AppCountryModel(1, 'UY', 'Uruguay', 'France'),
      new AppCountryModel(2, 'US', 'United States', 'France')
    ];
    
   
    this.masterService.getCountries().subscribe(
      (res: any) => {
      if (!res.error) {
      this.countries = res.result;
      /********** STORE ********/
      try {
        //Store in local repo if fetch is successful
        this.storageService.store(AuthConstants.COUNTRIES, res.result);
      } catch (Exception) {
        console.log("FETCHING COUNTRIES AT STARTUP: "+Exception.message);    
      } 
      /********** STORED ********/
      }
      },
      (error: any) => {
      console.log('Looks like there is a Network Issue while fetching countries.');
      }
      );

    this.buildPasswordFormGroup();

    this.createUserForm = this.formBuilder.group({
    //this.createUserForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      mobile: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]),
      dob: new FormControl(Validators.required),
      address: new FormControl('Na'),
      country : new FormControl(this.countries[0].name, Validators.required),
      terms: new FormControl(true, Validators.pattern('true')),
      autogen_pass: new FormControl(true),
      platform: new FormControl(this.platformDetails),
      matching_passwords: this.matching_passwords_group,
      grafter_type: new FormControl('1'),
      role_id: new FormControl('3')
    });

    //Try out
    // this.createUserForm.valueChanges.subscribe($result => {

    // });
    this.onHandleFormChanges();

    this.registrationService.getCachedData().then(res => {
      if (res !== undefined) {
          console.log("Direct fetched cache: "+JSON.stringify(res));
          this.cachedData = res;
          this.recoverCache();
      }
      });

  }


  buildPasswordFormGroup(){
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('12345678', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      confirm_password: new FormControl('12345678', Validators.required)
    }, (formGroup: FormGroup) => {
      if(!this.isAutogeneratePassword){
        return PasswordValidator.areNotEqual(formGroup);
      }
    });
  }

  //{validator: this.passwordConfirming}
  //|| !this.isAutogeneratePassword

  onHandleFormChanges(): void {
    const matchingPasswordsControl = this.createUserForm.get('matching_passwords');
    this.createUserForm.valueChanges.subscribe(val => {
        this.isAutogeneratePassword = val.autogen_pass;
         if(this.isAutogeneratePassword){
          matchingPasswordsControl.setValidators(Validators.nullValidator);

          matchingPasswordsControl.get('password').clearValidators();
          matchingPasswordsControl.get('confirm_password').clearValidators();
          //console.log(val);
//this.toastService.presentToast("isAutogeneratePassword: "+this.isAutogeneratePassword);
        }else{
          this.buildPasswordFormGroup();
        }
    });
  }

  recoverCache(){
    if(this.cachedData !== undefined){
      this.createUserForm.controls.first_name.setValue(this.cachedData.first_name);
    this.createUserForm.controls.last_name.setValue(this.cachedData.last_name);
    this.createUserForm.controls.email.setValue(this.cachedData.email);
    this.createUserForm.controls.mobile.setValue(this.cachedData.mobile);
    this.createUserForm.controls.dob.setValue(this.cachedData.dob);
    this.createUserForm.controls.address.setValue(this.cachedData.address);
    this.createUserForm.controls.country.setValue(this.cachedData.country);
    this.createUserForm.controls.grafter_type.setValue(this.cachedData.grafter_type);
    this.createUserForm.controls.role_id.setValue(this.cachedData.role_id);
    //this.createUserForm.controls.matching_passwords.get("password").setValue(this.cachedData.password);
    this.createUserForm.controls.autogen_pass.setValue(this.cachedData.autogen_pass);
    
    }
    
  }

  createUser() {
    //this.presentLoadingWithOptions();
    this.userData.first_name = this.createUserForm.value.first_name;
    this.userData.last_name = this.createUserForm.value.last_name;
    //this.userData.dob = dayjs(this.createUserForm.value.dob).unix(); // save it in timestamp
    this.userData.dob = this.createUserForm.value.dob; 
    this.userData.mobile = this.createUserForm.value.mobile;
    this.userData.email = this.createUserForm.value.email;
    this.userData.role_id = this.createUserForm.value.role_id;
    this.userData.grafter_type = this.createUserForm.value.grafter_type;
    this.userData.address = this.createUserForm.value.grafter_type;
    this.userData.country = this.createUserForm.value.country;
    //this.userData.password = this.createUserForm.value.password;
    this.userData.autogen_pass = this.createUserForm.value.autogen_pass;
    // get the ids of the selected skills

    this.storageService.store(AuthConstants.REGISTER_CACHE, this.userData);
     // this.loadingController.dismiss();
      this.router.navigate(['registration/professional-profile']);
  }


  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //duration: 5000,
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  nextStep(){
    if(this.createUserForm.valid){
      this.createUser();
      //this.router.navigate(['professional-profile']);
    }
  }

  prevStep(){
    this.router.navigate(['take-photo']);
  }
}

export class AppCountryModel {
  id: number;
  name: string;
  iso_code: string;
  isd_code: string;

  constructor (id: number, name: string, iso_code:string, isd_code:string) {
    this.id = id;
    this.iso_code = iso_code;
    this.isd_code = isd_code;
    this.name = name;
  }
}
