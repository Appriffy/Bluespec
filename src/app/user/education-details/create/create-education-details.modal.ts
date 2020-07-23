import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { EducationDetailsModel } from '../education-details.model';
import { UserService } from '../../user.service';
import { MasterService } from '../../../services/master.service';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { SelectStudyAreaPage } from '../../../utility-components/select-study-area/select-study-area.page';

@Component({
  selector: 'app-create-education-details',
  templateUrl: './create-education-details.modal.html',
  styleUrls: [
    '../../../bluspecstyles/create.modal.scss',
    '../../../bluspecstyles//create.shell.scss'
  ]
})
export class CreateEducationDetailsModal implements OnInit {
  @Input() user_id: number;
  user: EducationDetailsModel = new EducationDetailsModel(); 
  profilerID : any;
  localUser: LocalUser;
  createEduDetailForm: FormGroup;
  eduLevels = [];
  scoreTypes = [];
  deleteResult : any;
  updateResult : any;
  currentlyStudying: boolean = false;
  studyStatus = 'Already passed out.';
  moderateMode : boolean = false;
  selected_education_level : number;

  page_title = "Add Education Detail";
  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    public masterService: MasterService,
    private authService: AuthService,
    private storageService: StorageService,
    public toastService:ToastService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router) {
     
  }

  ngOnInit() {
    this.initializeForm(); 
    this.onHandleFormChanges(); 
    this.scoreTypes = ["Percent", "Grade"];
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      this.profilerID = this.user_id;
      this.createEduDetailForm.controls.user_id.patchValue(this.profilerID);
    });
    
   this.masterService.getEducationLevels().subscribe(thisLevels => {
    if(thisLevels){
      this.eduLevels = thisLevels.result;
      console.log("/********* Got Education Levels **********/ => "+JSON.stringify(this.eduLevels));
      this.storageService.store(AuthConstants.EDU_LEVELS, thisLevels.result);
      this.eduLevels.map((eduLevel) => {
        //Waiting to do something on getting First Master Data
        //this.updateEduDetailForm.controls.level_id.patchValue(this.eduLevels[0].id);
      });
    }
  });

  }


  initializeForm(){
    /************ CREATE UPDATE FORM ************/
      this.moderateMode = false;
      this.createEduDetailForm = new FormGroup({
       user_id: new FormControl('', Validators.required),
       level_id: new FormControl('', Validators.required),
       study_area: new FormControl('', Validators.required),
       study_area_name: new FormControl('', Validators.required),
       title: new FormControl('', Validators.required),
       organization: new FormControl('', Validators.required),
       yoj: new FormControl('', Validators.required),
       is_current: new FormControl(false),
       yop: new FormControl('', Validators.required),      
       score: new FormControl(''),
       score_type: new FormControl(this.scoreTypes[0])
     });
  }

  get skillsFormArray() { return <FormArray>this.createEduDetailForm.get('jobAreas'); }

  dismissModal() {
   this.modalController.dismiss();
  }

  async selectStudyArea() {
    const modal = await this.modalController.create({
      component: SelectStudyAreaPage,
      componentProps: {
        'multiple': false,
        'selected_education_level': this.selected_education_level
      }
    });
    modal.onDidDismiss().then(avatar => {
      if (avatar.data != null) {
        this.createEduDetailForm.patchValue({
          study_area: avatar.data.id,
          study_area_name : avatar.data.title
        });
        this.createEduDetailForm.get('study_area').updateValueAndValidity()
        this.createEduDetailForm.get('study_area_name').updateValueAndValidity()
      }
    });
    await modal.present();
  }

  updateUser() {
    this.presentLoadingWithOptions();
    this.user.user_id = this.createEduDetailForm.value.user_id;
    this.user.level_id = this.createEduDetailForm.value.level_id;
    this.user.title = this.createEduDetailForm.value.title;
    this.user.organization = this.createEduDetailForm.value.organization;
    this.user.yoj = this.createEduDetailForm.value.yoj;
    this.user.yop = this.createEduDetailForm.value.yop;
    this.user.is_current = this.currentlyStudying ? true : false;
    this.user.score_type = this.createEduDetailForm.value.score_type;
    this.user.score = this.createEduDetailForm.value.score;
    this.user.study_area = this.createEduDetailForm.value.study_area;
    console.log('########## Post params ########### '+JSON.stringify(this.user));
    this.authService.getAuthKey().then(apiKey=>{
    this.firebaseService.callEduDetailsCreateAPI(apiKey, this.user)
      .subscribe(
        (res: any) => {
          this.loadingController.dismiss();
  
          console.log('########## API Response ########### '+JSON.stringify(res));
          this.updateResult = res;
          if (!res.error) {
            /********** NAVIGATE WITH USER ID **********/
            this.dismissModal();
            if(AuthConstants.DEV_MODE){
              console.log('########## API Successful ########### '+JSON.stringify(res));           
            }
            this.firebaseService.getEduDataSource(this.localUser.api_key, this.localUser.id).subscribe(results=>{
              this.firebaseService.invokeEduListChangeEvent.next(results);
            });
           this.toastService.presentToast(res.message);
           this.router.navigate(['/education-details/listing', this.user_id]);
            } else {
              this.presentAlert(res.message);
            }
        },
        (error: any) => {
         this.loadingController.dismiss();
        this.presentAlert('Looks like there is a Network Issue.'+error.message);
        }
        );
    
    });

  }

  onEduLevelSelected(e) {
    this.selected_education_level = e.target.value;
  }

  onCurrentOptionSelected(e){
    if(AuthConstants.DEV_MODE){
      console.log("onCurrentOptionSelected: "+e.target.value);
    }
    this.currentlyStudying = !this.currentlyStudying;
    if(!this.currentlyStudying){
      this.studyStatus = 'Already passed out.';
      //this.updateEduDetailForm.addControl('yop', new FormControl(''));
    }else{
      this.studyStatus = 'Currently Persuing.';
      //this.updateEduDetailForm.removeControl('yop');
    }
    
  }

  onHandleFormChanges(): void {

    this.createEduDetailForm.get("is_current").valueChanges.subscribe(val=>{
      if(val){
        this.createEduDetailForm.get('yop').clearValidators();
        this.createEduDetailForm.get('yop').updateValueAndValidity();
      }else{
        this.createEduDetailForm.get('yop').setValidators([Validators.required, Validators.maxLength(4)]);
        this.createEduDetailForm.get('yop').updateValueAndValidity();
      }
    });


    this.createEduDetailForm.valueChanges.subscribe(val => {
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
