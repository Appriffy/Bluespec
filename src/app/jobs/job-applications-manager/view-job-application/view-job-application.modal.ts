import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { ToastService } from '../../../services/toast.service';
import { JobApplicationModel } from '../../../dbmodels/job-application.model';
import { JobService } from '../../jobs.service';

@Component({
  selector: 'app-view-job-application',
  templateUrl: './view-job-application.modal.html',
  styleUrls: [
    '../../../bluspecstyles/filter.page.scss',
    './styles/view-job-application.scss',
    './styles/view-job-application.shell.scss'
  ]
})
export class ViewJobApplicationModal implements OnInit {
  updateStatusForm: FormGroup;
  localUser:LocalUser;
  @Input() jobApplication: JobApplicationModel;

  oldStatusVal:any;

  constructor(private modalController: ModalController,
    public firebaseService: JobService,
    private authService:AuthService,
    private toastService: ToastService,
    public alertController: AlertController,
    private loadingController: LoadingController,
    public router:Router) { 

    }

  ngOnInit() {
    this.updateStatusForm = new FormGroup({
      item_id: new FormControl(this.jobApplication.id, Validators.required),
      status : new FormControl(this.jobApplication.status, [Validators.required]),
      updated: new FormControl(false, Validators.requiredTrue)
    });
    this.oldStatusVal = this.jobApplication.status;

    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
    });

    this.updateStatusForm.get("status").valueChanges.subscribe(x => {
      if(x !== this.oldStatusVal){
        this.updateStatusForm.controls.updated.patchValue(true);
        this.updateStatusForm.get('updated').updateValueAndValidity();
      }else{
        this.updateStatusForm.controls.updated.patchValue(false);
        this.updateStatusForm.get('updated').updateValueAndValidity();
      }
   });
  }

  dismissModal(msg:string) {
   this.modalController.dismiss(msg);
  }

  createUser() {
    this.presentLoadingWithOptions();
    let postData = {
         item_id: this.updateStatusForm.value.item_id,
         status: this.updateStatusForm.value.status
    }

    this.firebaseService.callApplicationStatusUpdateAPI(this.localUser.api_key, postData)
    .subscribe((event: any) => {
      this.loadingController.dismiss();
     if (!event.error) {
      this.dismissModal(event.message);
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
      message: 'Processing Application',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
