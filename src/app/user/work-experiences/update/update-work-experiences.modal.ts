import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../user.service';
import { MasterService } from '../../../services/master.service';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthConstants } from '../../../config/AuthConstants';
import { UserWorkExperienceModel } from '../../../dbmodels/user-work-experience.model';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-update-work-experiences',
  templateUrl: './update-work-experiences.modal.html',
  styleUrls: [
    '../../../bluspecstyles/create.modal.scss',
    '../../../bluspecstyles//create.shell.scss'
  ],
})
export class UpdateWorkExperiencesModal implements OnInit {
  @Input() user: UserWorkExperienceModel;
  updateEduDetailForm: FormGroup;
  deleteResult : any;
  updateResult : any;
  currentlyWorking: boolean = false;
  studyStatus = 'Currently Working here.';
  moderateMode:boolean = false;
  page_title = "Update Work Experience";
  localUser: LocalUser;
  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    public masterService: MasterService,
    private authService: AuthService,
    private utilsService: UtilsService,
    public toastService:ToastService,
    public loadingController: LoadingController,
    public router: Router) {
    
  }

  ngOnInit() {
    this.authService.getAuthCache().then(promisedValue=>{
      if(promisedValue){
        this.localUser = promisedValue;
        if(this.localUser !== undefined || this.localUser === null){
          if(this.localUser.id == this.user.user_id){
            this.moderateMode = true;
          }
        }
      }
    });
    
    this.initializeForm();
  }


  initializeForm(){
    /************ UPDATE FORM ************/
     this.page_title = "Update Work Experience";
     this.currentlyWorking = this.user.current;
     if(!this.currentlyWorking){
      this.studyStatus = 'Not working here currently';
    }else{
      this.studyStatus = 'Currently Working here.';
    } 

     this.updateEduDetailForm = new FormGroup({
       id: new FormControl(this.user.id, Validators.required),
       user_id: new FormControl(this.user.user_id, [Validators.required]),
       company: new FormControl(this.user.company, [Validators.required, Validators.minLength(4)]),
       startDate: new FormControl(this.user.startDate, Validators.required),
       endDate: new FormControl(this.user.endDate),
       duration: new FormControl(this.user.duration),
       role: new FormControl(this.user.role),
       current: new FormControl(this.user.current),
       responsibility: new FormControl(this.user.responsibility),      
       designation: new FormControl(this.user.designation, [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
     });
  }

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteUser() {
    let alertMsg = "Do you really want to delete your work experience at "+ this.user.company + '?';
    if(this.moderateMode){
      alertMsg = "Do you really want to delete this work experience entry?";
    }
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: alertMsg,
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
              'item_id' : this.user.id
            }


            this.authService.getAuthKey().then(apiKey=>{
              this.firebaseService.deleteWorkExperienceItem(apiKey, postData)
              .subscribe(
                (res: any) => {
                  this.loadingController.dismiss();
                  this.deleteResult = res;
                  if(AuthConstants.DEV_MODE){
                  console.log('deleteResult# '+JSON.stringify(this.deleteResult));
                  console.log('Verify Invoke '+this.localUser.api_key+" <=> "+this.user.user_id);
                  }
                  if (res.error) {
                    this.presentAlert(res.message); 
                    } else {
                      this.dismissModal();
                      this.firebaseService.getWorkExperienceDataSource(this.localUser.api_key, this.user.user_id).subscribe(results=>{
                        this.firebaseService.invokeWorkExperienceListChangeEvent.next(results);
                      });
                      this.router.navigate(['/work-experiences/listing/'+this.user.user_id]);
                    }
                },
                (error: any) => {
                 this.loadingController.dismiss();
                this.presentAlert('Looks like there is a Network Issue.');
                }
                );
  
            });

          }
        }
      ]
    });
    await alert.present();
  }

  /*
  onHandleFormChanges(): void {
    this.updateEduDetailForm.valueChanges.subscribe(val => {
        let startDate = val.startDate;
        let endDate =  val.endDate;
        if(startDate && endDate){
        if(startDate < endDate){
          this.presentAlert("Year of leaving must be after the year of joining.");
          }
        }

        let is_current = val.is_current;
        if(is_current){
          this.updateEduDetailForm.get('endDate').clearValidators();
          this.updateEduDetailForm.get('endDate').updateValueAndValidity();
        }else{
          this.updateEduDetailForm.get('endDate').setValidators([Validators.required, Validators.maxLength(4)]);
          this.updateEduDetailForm.get('endDate').updateValueAndValidity();
        }

    });
  }*/

  updateUser() {
    this.user.id = this.updateEduDetailForm.value.id;
    this.user.user_id = this.updateEduDetailForm.value.user_id;
    this.user.company = this.updateEduDetailForm.value.company;
    this.user.designation = this.updateEduDetailForm.value.designation;
    this.user.role = this.updateEduDetailForm.value.role;
    this.user.current = this.currentlyWorking ? true : false;
    this.user.responsibility = this.updateEduDetailForm.value.responsibility;
    this.user.startDate = this.updateEduDetailForm.value.startDate;
    this.user.endDate = this.updateEduDetailForm.value.endDate;

    if(AuthConstants.DEV_MODE){
      console.log("Startdate Now => "+this.user.startDate);
    }
    this.user.startDate = this.utilsService.splitTimestampFromDate(this.updateEduDetailForm.value.startDate);
    
    if(AuthConstants.DEV_MODE){
      console.log("Startdate Step 1 => "+this.user.startDate);
    }
    if(this.user.startDate !== ""){
    if(this.utilsService.isValidDate(this.user.startDate)){
      if(AuthConstants.DEV_MODE){
        console.log("Startdate Now Valid "+this.user.startDate);
      }
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.user.startDate);
      this.updateEduDetailForm.controls.startDate.patchValue(formattedVal);
      if(AuthConstants.DEV_MODE){
      console.log("Startdate formatted from "+this.user.startDate+" to "+formattedVal);
      }
      this.user.startDate = formattedVal;
    }
  }
  
  if(AuthConstants.DEV_MODE){
  console.log("EndDate now "+this.user.endDate+"");
  }
    if(this.user.endDate !== ""){
      this.user.endDate = this.utilsService.splitTimestampFromDate(this.user.endDate);
      if(AuthConstants.DEV_MODE){
      console.log("EndDate After Split "+this.user.endDate+"");
      }
      if(this.utilsService.isValidDate(this.user.endDate)){
      }else{
        let formattedEndVal = this.utilsService.formatTheDate(this.user.endDate);
        this.updateEduDetailForm.controls.endDate.patchValue(formattedEndVal);
        this.user.endDate = formattedEndVal;
        if(AuthConstants.DEV_MODE){
        console.log("ENDDATE formatted from "+this.user.endDate+" to "+formattedEndVal);
        }
      }
    }
  
    if(this.user.startDate && this.user.endDate && !this.user.current){
      if(this.user.startDate > this.user.endDate){
        this.presentAlert("Year of leaving your job must be after the year of joining.");
        return;
        }
      }

    this.presentLoadingWithOptions();  
    this.authService.getAuthKey().then(apiKey=>{
      this.firebaseService.callWorkExperienceUpdateAPI(apiKey, this.user)
      .subscribe(
        (res: any) => {
          this.loadingController.dismiss();
          if(AuthConstants.DEV_MODE){
          console.log('########## Edu Update API Response ########### '+JSON.stringify(res));
          }
          this.updateResult = res;
          if (!res.error) {
            /********** NAVIGATE WITH USER ID **********/
            this.dismissModal();
            this.firebaseService.getWorkExperienceDataSource(this.localUser.api_key, this.user.user_id).subscribe(results=>{
              if(results){
                this.firebaseService.invokeWorkExperienceListChangeEvent.next(results);
              }
            });
            this.router.navigate(['/work-experiences/listing/'+this.user.user_id]);
            } else {
              this.presentAlert(res.message);
            }
        },
        (error: any) => {
         this.loadingController.dismiss();
        this.presentAlert('Looks like there is a Network Issue.'+error.message);
        });
    });
  }

  onCurrentOptionSelected(e){
    //console.log("SWITCH "+e.target.value);
    this.currentlyWorking = !this.currentlyWorking;
    if(!this.currentlyWorking){
      this.studyStatus = 'Not working here currently';
      this.updateEduDetailForm.get('endDate').setValidators([Validators.required]);
      this.updateEduDetailForm.get('endDate').updateValueAndValidity();
    }else{
      this.updateEduDetailForm.controls.endDate.patchValue("");
      this.studyStatus = 'Currently Working here.';
      this.updateEduDetailForm.get('endDate').clearValidators();
      this.updateEduDetailForm.get('endDate').updateValueAndValidity();
    } 
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


}
