import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { StorageService } from '../services/storage.service';
import { RegistrationService } from './registration.service';
import { BluspecUserModel } from '../user/profile/user-profile.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: [
    './styles/signup.page.scss'
  ]
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  userData: BluspecUserModel = new BluspecUserModel();
  cachedData: BluspecUserModel;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ]
  };

  constructor(
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController,
    public storageService: StorageService,
    private authService: AuthService,
    private registrationService: RegistrationService
  ) {

    this.signupForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);

    this.authService.getAuthCache().then(authData=>{
      if(authData){
      //alert("Already logged In!!!");
      this.router.navigate(['/welcome']);
      }
    });

    this.storageService.get("selected_role").then(res => {
      console.log("selected_role : "+res);
      if (res <=0) {
        this.router.navigate(['getting-started']);
        }

      });

       /******* GET CACHE AND RESTORE *******/
     this.registrationService.getCachedData().then(res => {
      if (res) {
          //alert(JSON.stringify(res));
          console.log("Direct fetched cache: "+JSON.stringify(res));
          this.cachedData = res;
          this.recoverCache();
        // }else{
        //   alert(this.cachedData);
         }
      });
      /******* GET CACHE AND RESTORE *******/
  }


  recoverCache(){
    if(this.cachedData.email){
      this.signupForm.controls.email.setValue(this.cachedData.email);
    }
   }

  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServicePage
    });
    return await modal.present();
  }

  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyPolicyPage
    });
    return await modal.present();
  }

  doSignup(): void {
    console.log('do sign up');
    if(this.cachedData !== undefined){
      this.cachedData.email = this.signupForm.value.email;
      this.registrationService.setCachedData(this.cachedData);
    }
    this.router.navigate(['/registration/take-photo']);
  }

  doFacebookSignup(): void {
    console.log('facebook signup');
    this.router.navigate(['app-debug']);
  }

  doGoogleSignup(): void {
    console.log('google signup');
    this.router.navigate(['app-debug']);
  }

  doTwitterSignup(): void {
    console.log('twitter signup');
    this.router.navigate(['app-debug']);
  }
}
