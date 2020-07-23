import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../user.service';
import { AuthConstants } from '../../config/AuthConstants';
import { StorageService } from '../../services/storage.service';
import { BluspecUserModel, UserProfileModel } from '../profile/user-profile.model';
import { LocalUser } from '../../dbmodels/local-user';
import { UtilsService } from '../../services/utils.service';
import { map } from 'rxjs/operators';
import { SelectCountryPage } from '../../utility-components/select-country/select-country.page';
import { SettingsModel } from '../../dbmodels/settings-model';
import { UserEditModel } from '../../dbmodels/user-edit.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.modal.html',
  styleUrls: [
    './styles/update-user.modal.scss',
    './styles/update-user.shell.scss'
  ],
})
export class UpdateUserModal implements OnInit {
 // @Input() user: BluspecUserModel;
  //@Input() user: UserProfileModel;
  @Input() user: UserEditModel;
  updateUserForm: FormGroup;
  selectedAvatar: string;
  deleteResult : any;
  updateResult : any;
  user_status:any;
  data:any;
  localUser: LocalUser;
  moderateMode :boolean = false;
  updatedImage:any;
  maxDOBYear: any;
  appSettings: SettingsModel;

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
    ]
  };

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    public masterService: MasterService,
    private authService: AuthService,
    private utilsService: UtilsService,
    public activatedRoute: ActivatedRoute,
    public toastService:ToastService,
    public loadingController: LoadingController,
    private storageService: StorageService,
    public router: Router) {
      this.authService.getAuthCache().then(result=>{
        this.localUser = result;
      });

      let currentTime = new Date();
      let year = currentTime.getFullYear();
      this.maxDOBYear = year - 16;
  }

  ngOnInit() {
      this.storageService.get(AuthConstants.APP_SETTINGS).then(appSettings=>{
        if(appSettings){
          this.appSettings = appSettings;
          if(AuthConstants.DEV_MODE){
            console.log("AppSettings: "+JSON.stringify(appSettings));
          }
        }
      });


this.user_status = ["Pending", "Active", "Blocked"];
if(this.localUser.id !== this.user.id){
  this.moderateMode = true;
}
    this.selectedAvatar = this.user.user_image;
    this.updateUserForm = new FormGroup({
      user_id: new FormControl(this.user.id, Validators.required),
      first_name: new FormControl(this.user.first_name, [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(this.user.last_name, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(this.user.email,  Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      //email: new FormControl(this.user.email,  Validators.required),
      mobile: new FormControl(this.user.mobile, Validators.required),
      status: new FormControl(this.user.status, Validators.required),
      user_name: new FormControl(this.user.user_name, Validators.required),
      user_image: new FormControl(this.user.user_image),
      dob: new FormControl(this.user.dob),
      address: new FormControl(this.user.address),
      city: new FormControl(this.user.city),
      latitude: new FormControl(this.user.latitude),
      longitude: new FormControl(this.user.longitude),
      country: new FormControl(this.user.country)
    });

  }

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteUser() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to delete the account of ' + this.user.first_name + '?',
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
              'user_id' : this.user.id
            }
            this.firebaseService.deleteItem(this.localUser.api_key, postData)
            .subscribe(
              (res: any) => {
                console.log('################ Result# '+JSON.stringify(res));
                this.loadingController.dismiss();

                if (res.error) {
                  this.presentAlert(res.message); 
                  } else {
                    //delete from local
                    // this.firebaseService.invokeListChangeEvent.subscribe(value => {
                    //   this.toastService.presentToast("GOTTA => "+JSON.stringify(value));

                    //   });

                    this.dismissModal();
                    //console.log('Modal Dismiss Time 007 # '+JSON.stringify(this.deleteResult));
                    this.toastService.presentToast(res.message);
                    this.router.navigate(['/hire-people-for-work']);
                  }

              },
              (error: any) => {
               this.loadingController.dismiss();
              this.presentAlert('Looks like there is a Network Issue.');
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

  updateUser() {
    this.presentLoadingWithOptions();
    this.user.id = this.updateUserForm.value.user_id;
    this.user.user_image = this.selectedAvatar;
    this.user.first_name = this.updateUserForm.value.first_name;
    this.user.last_name = this.updateUserForm.value.last_name;
    this.user.email = this.updateUserForm.value.email;
    this.user.mobile = this.updateUserForm.value.mobile;
    this.user.address = this.updateUserForm.value.address;
    //this.user.city = this.updateUserForm.value.city;
    this.user.country = this.updateUserForm.value.country;
    this.user.latitude = this.updateUserForm.value.latitude;
    this.user.longitude = this.updateUserForm.value.longitude;
    this.user.pincode = this.updateUserForm.value.pincode;
    this.user.user_name = this.updateUserForm.value.user_name;
    this.user.dob = this.updateUserForm.value.dob;
    this.user.status = this.updateUserForm.value.status;
    console.log("DOB Value here: "+this.user.dob);
    this.user.dob = this.utilsService.splitTimestampFromDate(this.user.dob)
    if(this.utilsService.isValidDate(this.user.dob)){
      //alert("All right"+this.user.dob);
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.user.dob);
      this.updateUserForm.controls.dob.patchValue(formattedVal);
      this.user.dob = formattedVal;
      console.log("DOB formatted from "+this.user.dob+" to "+formattedVal);
    }
    console.log("And DOB Value here: "+this.updateUserForm.value.dob);
    let postData = {
      user_id:this.user.id,
      first_name:this.user.first_name,
      last_name:this.user.last_name,
      email:this.user.email,
      mobile:this.user.mobile,
      dob:this.user.dob,
      address:this.user.address,
      country:this.user.country,
      latitude:this.user.latitude,
      longitude:this.user.longitude,
      pincode:this.user.pincode,
      status:this.user.status,
      user_name:this.user.user_name,
      user_image_blob:this.updatedImage
    }

    console.log('########## Update User params ########### '+JSON.stringify(postData));
    this.firebaseService.callUpdateAPI(this.localUser.api_key, postData)
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
          if(res.user_name){
            this.router.navigate(['/people/details', res.user_name]);
          }else{
            this.router.navigate(['/people/profile']);
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

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.updateUserForm.patchValue({
      user_image: file
    });
    this.updateUserForm.get('user_image').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.updatedImage = reader.result as string;
      this.user.user_image = this.updatedImage;
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
        //alert(JSON.stringify(item));
        this.updateUserForm.controls.country.patchValue(item.data);
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

  removeFile(){
    this.updatedImage = "";
    this.user.user_image = this.updatedImage;
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
