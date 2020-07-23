import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { UserService } from '../../user.service';
import { ToastService } from '../../../services/toast.service';
import { UserProfileModel, BluspecUserModel } from '../user-profile.model';

@Component({
  selector: 'app-change-profile-status',
  templateUrl: './change-profile-status.modal.html',
  styleUrls: [
    './styles/change-profile-status.scss',
    './styles/change-profile-status.shell.scss'
  ]
})
export class ChangeProfileStatusModal implements OnInit {
  updateStatusForm: FormGroup;
  userData: UserProfileModel = new UserProfileModel();
  localUser:LocalUser;
  @Input() userID: number;
  @Input() tagline: string;

  validations = {
    'tagline': [
      { type: 'required', message: 'Write a tagline for your profile.' },
	  { type: 'minLength', message: 'Your tagline appears to be too small.' },
	  { type: 'maxLength', message: 'Tagline should not exceed 30 characters.' }
    ]
  };

  constructor(private modalController: ModalController,
    public firebaseService: UserService,
    private authService:AuthService,
    private toastService: ToastService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    public router:Router) { 

    }

  ngOnInit() {
    this.updateStatusForm = new FormGroup({
      user_id: new FormControl(this.userID, Validators.required),
      tagline : new FormControl(this.tagline, [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });

    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
    //this.updateStatusForm.patchValue({user_id:this.localUser.id});
    });

  }

  dismissModal() {
   this.modalController.dismiss(this.updateStatusForm.value.tagline);
  }

  createUser() {
    this.presentLoadingWithOptions();
    
    this.userData.id = this.updateStatusForm.value.user_id;
    this.userData.tagline = this.updateStatusForm.value.tagline;

    let postData = {
         user_id: this.userData.id,
         tagline: this.userData.tagline
    }

    this.firebaseService.callUpdateProfileStatusAPI(this.localUser.api_key, postData)
    .subscribe((event: any) => {
      this.loadingController.dismiss();
     if (!event.error) {
      this.dismissModal();
      this.toastService.presentToast(event.message);
      //this.router.navigate(['/people/details', event.username]);
      } else {
        this.presentAlert(event.message);
      }
    },
    (error: any) => {
     this.loadingController.dismiss();
    this.presentAlert('Looks like there is a Network Issue.'+error.message);
    });
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
      message: 'Updating Your Tagline',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
