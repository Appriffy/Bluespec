import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { RegistrationService } from '../registration.service';
import { BluspecUserModel } from '../../user/profile/user-profile.model';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.page.html',
  styleUrls: ['./verify-account.page.scss'],
})
export class VerifyAccountPage implements OnInit {
  verifyAccountForm: FormGroup;
  thisUserID : number;
  cachedData: BluspecUserModel;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public menu: MenuController,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private registrationService: RegistrationService) { }

  ngOnInit() {
    this.menu.enable(false);

    this.verifyAccountForm = new FormGroup({
      //user_id: new FormControl(this.thisUserID, Validators.required),
      otp: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });

    this.registrationService.getCachedData().then(res => {
      if (res) {
          this.cachedData = res;
      } else {
        //this.prevStep();
        this.presentAlert("INVALID SESSION", "", "Looks like something went wrong and we could not identify you. Please close this app and start again..")
      }
      });
  }

  nextStep(){
    if(this.verifyAccountForm.valid){
      //this.cachedData.about = this.verifyAccountForm.value.otp;
      //this.registrationService.setCachedData(this.cachedData);
      this.router.navigate(['dashboard']);
    }else{
      this.presentAlert("INVALID OTP", "", "Please enter the OTP we have sent to your registered email address.")
    }
  }

  prevStep(){
    this.router.navigate(['getting-started']);
  }

  async presentAlert(title:string, subtitle:string, message:string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: subtitle,
      message: message,
      animated:true,
      backdropDismiss:false,
      buttons: ['OK']
    });

    await alert.present();
  }

}
