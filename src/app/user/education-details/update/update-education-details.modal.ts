import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { EducationDetailsModel } from '../education-details.model';
import { UserService } from '../../user.service';
import { MasterService } from '../../../services/master.service';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthConstants } from '../../../config/AuthConstants';

@Component({
  selector: 'app-update-education-details',
  templateUrl: './update-education-details.modal.html',
  styleUrls: [
    '../../../bluspecstyles/create.modal.scss',
    '../../../bluspecstyles//create.shell.scss'
  ],
})
export class UpdateEducationDetailsModal implements OnInit {
  @Input() user: EducationDetailsModel;
  updateEduDetailForm: FormGroup;
  studyAreas = [];
  studyAreasBackup = [];
  eduLevels = [];
  scoreTypes = [];
  deleteResult : any;
  updateResult : any;
  currentlyStudying: boolean = false;
  studyStatus = 'Already passed out.';

  page_title = "Update Education Detail";
  localUser: LocalUser;
  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    public masterService: MasterService,
    private authService: AuthService,
    public toastService:ToastService,
    public loadingController: LoadingController,
    public router: Router) {
    
  }

  ngOnInit() {
    this.scoreTypes = ["Percent", "Grade"];
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      console.log("/***** JUST ASKED LOCAL STORAGE : "+JSON.stringify(promisedValue));
    });
    
    this.initializeForm();
    this.onHandleFormChanges();
    
    this.masterService.getStudyAreas().subscribe(skills => {
      this.studyAreas = skills.result;
      this.studyAreasBackup = skills.result;
      console.log("/********* Got Study Areas **********/ => "+JSON.stringify(this.studyAreas));
      this.studyAreas.map((skill) => {
     
        //Waiting to do something on getting First Master Data
        //this.updateEduDetailForm.controls.study_area.patchValue(this.eduLevels[0].id);

      });
    });

    this.masterService.getEducationLevels().subscribe(thisLevels => {
      this.eduLevels = thisLevels.result;
      console.log("/********* Got Education Levels **********/ => "+JSON.stringify(this.eduLevels));
      // create skill checkboxes
      this.eduLevels.map((eduLevel) => {
        //Waiting to do something on getting First Master Data
        //this.updateEduDetailForm.controls.level_id.patchValue(this.eduLevels[0].id);
      });
    });
    
  }


  initializeForm(){
    /************ UPDATE FORM ************/
     this.page_title = "Update Education Detail";
     this.updateEduDetailForm = new FormGroup({
       id: new FormControl(this.user.id, Validators.required),
       user_id: new FormControl(this.user.user_id, Validators.required),
       level_id: new FormControl(this.user.level_id, Validators.required),
       is_current: new FormControl(this.user.is_current, Validators.required),
       title: new FormControl(this.user.title, Validators.required),
       organization: new FormControl(this.user.organization, Validators.required),
       yoj: new FormControl(this.user.yoj, Validators.required),
       yop: new FormControl(this.user.yop, Validators.required),
      
       study_area: new FormControl(this.user.study_area, Validators.required),
       //study_area: new FormControl('', Validators.required),
       score: new FormControl(this.user.score),
       score_type: new FormControl(this.user.score_type)
     });
  }

  get skillsFormArray() { return <FormArray>this.updateEduDetailForm.get('jobAreas'); }

  dismissModal() {
   this.modalController.dismiss();
  }

  async deleteUser() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to delete your education qualification titled ' + this.user.title + '?',
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
              this.firebaseService.deleteEducationItem(apiKey, postData)
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
                      this.firebaseService.getEduDataSource(this.localUser.api_key, this.user.user_id).subscribe(results=>{
                        this.firebaseService.invokeEduListChangeEvent.next(results.items);
                      });
                      this.router.navigate(['/education-details/listing/'+this.user.user_id]);
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

  onHandleFormChanges(): void {
    this.updateEduDetailForm.get("is_current").valueChanges.subscribe(val=>{
      if(val){
        this.updateEduDetailForm.get('yop').clearValidators();
        this.updateEduDetailForm.get('yop').updateValueAndValidity();
      }else{
        this.updateEduDetailForm.get('yop').setValidators([Validators.required, Validators.maxLength(4)]);
        this.updateEduDetailForm.get('yop').updateValueAndValidity();
      }
    });

    this.updateEduDetailForm.valueChanges.subscribe(val => {
      console.log("/********* onHandleFormChanges **********/");
        let yoj = val.yoj;
        let yop =  val.yop;
        let score =  val.score;
        if(yop && yoj){
        if(yop < yoj){
          this.presentAlert("Year of passing must be after the year of joining.");
          }
        }

        let score_type =  val.score_type;
        if(score_type && !score){
        if(score_type == "Grade" && !score){
          this.presentAlert("Please enter the grade you obtained.");
        }else{
          if(score_type == "Percent" && !score){
            this.presentAlert("Please enter the percentage you obtained.");
          }
        }
      }

    });
  }

  updateUser() {
    this.presentLoadingWithOptions();
    this.user.id = this.updateEduDetailForm.value.id;
    this.user.user_id = this.updateEduDetailForm.value.user_id;
    this.user.level_id = this.updateEduDetailForm.value.level_id;
    this.user.title = this.updateEduDetailForm.value.title;
    this.user.organization = this.updateEduDetailForm.value.organization;
    this.user.yoj = this.updateEduDetailForm.value.yoj;
    this.user.yop = this.updateEduDetailForm.value.yop;
    this.user.is_current = this.currentlyStudying ? true : false;
    this.user.score_type = this.updateEduDetailForm.value.score_type;
    this.user.score = this.updateEduDetailForm.value.score;
    this.user.study_area = this.updateEduDetailForm.value.study_area;
    console.log('########## Company params ########### '+JSON.stringify(this.user));

    this.authService.getAuthKey().then(apiKey=>{
      this.firebaseService.callEduDetailsUpdateAPI(apiKey, this.user)
      .subscribe(
        (res: any) => {
          this.loadingController.dismiss();
          console.log('########## Edu Update API Response ########### '+JSON.stringify(res));
          this.updateResult = res;
          if (!res.error) {
            /********** NAVIGATE WITH USER ID **********/
            this.dismissModal();
            this.firebaseService.getEduDataSource(this.localUser.api_key, this.user.user_id).subscribe(results=>{
              this.firebaseService.invokeEduListChangeEvent.next(results.items);
              console.log('########## invokeEduListChangeEvent() ######### '+JSON.stringify(results));
            });
            this.router.navigate(['/education-details/listing/'+this.user.user_id]);
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

  onEduLevelSelected(e) {
    return this.studyAreas = this.studyAreasBackup.filter((studyArea) => {
      return studyArea.education_level == e.target.value
    });
  }

  onCurrentOptionSelected(e){
    //console.log("SWITCH "+e.target.value);
    this.currentlyStudying = !this.currentlyStudying;
    if(!this.currentlyStudying){
      this.studyStatus = 'Already passed out.';
      //this.updateEduDetailForm.addControl('yop', new FormControl(''));
    }else{
      this.studyStatus = 'Currently Persuing.';
      //this.updateEduDetailForm.removeControl('yop');
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
      duration: 5000,
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
