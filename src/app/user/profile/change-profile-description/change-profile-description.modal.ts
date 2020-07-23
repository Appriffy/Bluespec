import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { UserService } from '../../user.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-change-profile-description',
  templateUrl: './change-profile-description.modal.html',
  styleUrls: [
    '../../../bluspecstyles/details.page.scss',
    '../../../bluspecstyles/details.shell.scss'
  ]
})
export class ChangeProfileDescriptionModal implements OnInit {
  updateStatusForm: FormGroup;
  localUser:LocalUser;
  @Input() userID: number;
  @Input() description: string;
  @Input() image: string;
  userImage = "";
  
  validations = {
    'description': [
      { type: 'required', message: 'Write a short intro about you.' },
	  { type: 'minLength', message: 'Your Intro appears to be too small.' },
	  { type: 'maxLength', message: 'Intro should not exceed 100 characters.' }
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
      description : new FormControl(this.description, [Validators.required, Validators.minLength(30), Validators.maxLength(200)])
    });

    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      //this.userImage = this.image;
    });

  }

  dismissModal() {
   this.modalController.dismiss(this.updateStatusForm.value.description);
  }

  createUser() {
    this.presentLoadingWithOptions();
    
    let postData = {
         user_id: this.updateStatusForm.value.user_id,
         description: this.updateStatusForm.value.description
    }

    this.firebaseService.callUpdateProfileDescriptionAPI(this.localUser.api_key, postData)
    .subscribe((event: any) => {
      this.loadingController.dismiss();
     if (!event.error) {
      this.dismissModal();
      this.toastService.presentToast(event.message);
      } else {
        this.presentAlert(event.message);
      }
    },
    (error: any) => {
     this.loadingController.dismiss();
    this.presentAlert('Looks like there is a Network Issue.');
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
      message: 'Updating Your Intro',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
