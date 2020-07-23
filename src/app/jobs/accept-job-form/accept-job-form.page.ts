import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobItemModel } from '../../dbmodels/jobs-listing.model';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../jobs.service';
import { StorageService } from '../../services/storage.service';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AuthConstants } from '../../config/AuthConstants';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-accept-job-form',
  templateUrl: './accept-job-form.page.html',
  styleUrls: ['./accept-job-form.page.scss',
  '../listing/styles/deals-listing.page.scss',
  '../listing/styles/deals-listing.shell.scss',
  '../listing/styles/deals-listing.ios.scss'],
})
export class AcceptJobFormPage implements OnInit {
  applyJobForm : FormGroup;
  @Input() job: JobItemModel;
  selectedCurrency = "";
  shareCustomOffer: boolean = false;
  minDeliveryDate : any;
  priceTagLabel = "Offer Price";
  showJobThumbnail = true;

  validations = {
    'agree': [
      { type: 'required', message: 'You must agree that you meet the job requirements.' }
    ],
    'amount': [
      { type: 'required', message: 'You must enter your offer price for this job.' }
    ],
    'comment': [
      { type: 'required', message: 'You must enter your offer price for this job.' }
    ]
  };

  constructor(public loadingController:LoadingController,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private utilsService: UtilsService,
    private jobService: JobService,
    private authService: AuthService) {
      let startDate = new Date().toISOString();
      this.minDeliveryDate = startDate;
   }

  ngOnInit() {
    this.applyJobForm = new FormGroup({
      agree: new FormControl(false, Validators.requiredTrue),
      applicant_id: new FormControl(''),
      job_id: new FormControl(''),
      amount: new FormControl(''),
      enableCustomOffer: new FormControl(this.shareCustomOffer),
      salary_type: new FormControl(''),
      delivery_date: new FormControl(''),
      comment: new FormControl(''),
      currency: new FormControl(''),
      share_phone: new FormControl(false)
    });

    this.selectedCurrency = this.job.currency;

    this.authService.getAuthCache().then(authData=>{
      if(authData){
        console.log("AUTH DATA USERID"+authData.id);
        this.applyJobForm.controls.applicant_id.patchValue(authData.id);
        this.applyJobForm.get('applicant_id').updateValueAndValidity();
        this.applyJobForm.controls.job_id.patchValue(this.job.id);
        this.applyJobForm.get('job_id').updateValueAndValidity();
        this.applyJobForm.controls.salary_type.patchValue(this.job.salary_type);
        this.applyJobForm.get('salary_type').updateValueAndValidity();
        this.applyJobForm.controls.currency.patchValue(this.job.currency);
        this.applyJobForm.get('currency').updateValueAndValidity();
      }
    });

    if(this.job.salary_type !== "fixed"){
      if(this.job.salary_type == "monthly"){
        this.priceTagLabel = "Expected Monthly Salary";
      }
      if(this.job.salary_type == "perHour"){
        this.priceTagLabel = "Expected Hourly Rate";
      }
    }

  }

  onCustomOfferEnabled(e){
    this.shareCustomOffer = !this.shareCustomOffer;
    if(!this.shareCustomOffer){
    this.applyJobForm.get('salary_type').clearValidators();
    this.applyJobForm.get('salary_type').updateValueAndValidity();
    this.applyJobForm.get('amount').clearValidators();
    this.applyJobForm.get('amount').updateValueAndValidity();
    this.applyJobForm.get('delivery_date').clearValidators();
    this.applyJobForm.get('delivery_date').updateValueAndValidity();
    }else{
    this.applyJobForm.get('amount').setValidators([Validators.required, Validators.minLength(3),  Validators.maxLength(20)]);
    this.applyJobForm.get('amount').updateValueAndValidity();
    }
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      animated:true,
      spinner: "bubbles",
      message: 'Submitting Application...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
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

  submitForm(){
    this.presentLoadingWithOptions();
    let date_closing = this.applyJobForm.value.delivery_date;
    if(date_closing !== null && date_closing != ""){
    date_closing = this.utilsService.splitTimestampFromDate(this.applyJobForm.value.delivery_date);
    if(this.utilsService.isValidDate(date_closing)){
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.applyJobForm.value.delivery_date);
      this.applyJobForm.controls.delivery_date.patchValue(formattedVal);
      date_closing = formattedVal;
      console.log("Date formatted from "+this.applyJobForm.value.delivery_date+" to "+formattedVal);
    }
  }
  
    let postData = {
      applicant_id: this.applyJobForm.value.applicant_id,
      job_id: this.applyJobForm.value.job_id,
      comment: this.applyJobForm.value.comment,
      amount: this.applyJobForm.value.amount,
      currency: this.applyJobForm.value.amount,
      salary_type: this.applyJobForm.value.salary_type,
      delivery_date: this.applyJobForm.value.delivery_date,
      share_phone:  this.applyJobForm.value.share_phone ? 1: 0
    }

    if(AuthConstants.DEV_MODE){
      console.log('########## Sending Post params ########### '+JSON.stringify(postData));
    }

    this.authService.getAuthCache().then(authData=>{
      if(authData){
        this.jobService.callSubmitApplicationAPI(authData.api_key, postData)
        .subscribe(
          (res: any) => {
            this.loadingController.dismiss();
            if (!res.error) {
              this.dismissModal(res.message);
              //this.firebaseService.invokeProfileChangeEvent.
              } else {
                this.presentAlert(res.message);
              }
          },
          (error: any) => {
           this.loadingController.dismiss();
          this.presentAlert('Looks like there is a Network Issue.');
          }
          );
      }
    });
  }


  dismissModal(item: any) {
    this.modalCtrl.dismiss(item);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
