import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../user.service';
import { MasterService } from '../../../services/master.service';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthConstants } from '../../../config/AuthConstants';
import { UserWorkExperienceModel } from '../../../dbmodels/user-work-experience.model';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-create-work-experiences',
  templateUrl: './create-work-experiences.modal.html',
  styleUrls: [
    '../../../bluspecstyles/create.modal.scss',
    '../../../bluspecstyles//create.shell.scss'
  ]
})
export class CreateWorkExperiencesModal implements OnInit {
  @Input() user_id: number;
  user: UserWorkExperienceModel = new UserWorkExperienceModel(); 
  profilerID : any;
  localUser: LocalUser;
  createEduDetailForm: FormGroup;
  currentlyStudying: boolean = true;
  studyStatus = 'Currently working here.';
  moderateMode : boolean = false;

  page_title :string = "Add Work Experience";
  constructor(private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    public masterService: MasterService,
    private authService: AuthService,
    private utilsService: UtilsService,
    public toastService:ToastService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router) {
     
  }

  ngOnInit() {
    this.initializeForm(); 
    //this.onHandleFormChanges(); 
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      // this.route.paramMap.subscribe(params => {
      //  if(params.has("id")){
      //   this.profilerID = params.get("id");
      //  }
      //   });
      this.profilerID = this.user_id;
      this.createEduDetailForm.controls.user_id.patchValue(this.profilerID);
    });

  }

  initializeForm(){
    /************ CREATE UPDATE FORM ************/
      this.moderateMode = false;
      this.createEduDetailForm = new FormGroup({
       user_id: new FormControl('', Validators.required),
       company: new FormControl('', [Validators.required, Validators.minLength(5)]),
       startDate: new FormControl('', Validators.required),
       endDate: new FormControl(''),
       duration: new FormControl(''),
       role: new FormControl(''),
       current: new FormControl(this.currentlyStudying),
       responsibility: new FormControl(''),      
       designation: new FormControl('', Validators.required)
     });
  }

  dismissModal() {
   this.modalController.dismiss();
  }

  updateUser() {
    this.user.user_id = this.createEduDetailForm.value.user_id;
    this.user.company = this.createEduDetailForm.value.company;
    this.user.startDate = this.createEduDetailForm.value.startDate;
    this.user.endDate = this.createEduDetailForm.value.endDate;
    this.user.duration = "";
    this.user.role = this.createEduDetailForm.value.role;
    this.user.current = this.currentlyStudying ? true : false;
    this.user.responsibility = this.createEduDetailForm.value.responsibility;
    this.user.designation = this.createEduDetailForm.value.designation;
  
    if(this.user.startDate !== null && this.user.startDate != ""){
      this.utilsService.splitTimestampFromDate(this.user.startDate);   
    if(this.utilsService.isValidDate(this.user.startDate)){
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.user.startDate);
      this.createEduDetailForm.controls.startDate.patchValue(formattedVal);
      console.log("Startdate formatted from "+this.user.startDate+" to "+formattedVal);
    }
    this.user.startDate = this.createEduDetailForm.value.startDate;
  }

    if(this.user.endDate !== null && this.user.endDate != ""){
    this.utilsService.splitTimestampFromDate(this.user.endDate);
    if(this.utilsService.isValidDate(this.user.endDate)){
    }else{
      let formattedVal = this.utilsService.formatTheDate(this.user.endDate);
      this.createEduDetailForm.controls.endDate.patchValue(formattedVal);
      console.log("EndDate formatted from "+this.user.endDate+" to "+formattedVal);
    }
    this.user.endDate = this.createEduDetailForm.value.endDate;
  }

    if(this.user.startDate && this.user.endDate && !this.user.current){
      if(this.user.startDate > this.user.endDate){
        this.presentAlert("Year of leaving must be after the year of joining.");
        //this.loadingController.dismiss();
        return;
        }
      }
   
    this.presentLoadingWithOptions();
    this.authService.getAuthKey().then(apiKey=>{
    this.firebaseService.callWorkExperienceCreateAPI(apiKey, this.user)
      .subscribe(
        (res: any) => {
          this.loadingController.dismiss();
          if(AuthConstants.DEV_MODE){
            console.log('########## API Response ########### '+JSON.stringify(res));
          }
          if (!res.error) {
            /********** NAVIGATE WITH USER ID **********/
            this.dismissModal();
            this.toastService.presentToast(res.message);
            this.firebaseService.getWorkExperienceDataSource(this.localUser.api_key, this.user.user_id).subscribe(results=>{
              this.firebaseService.invokeWorkExperienceListChangeEvent.next(results);
              if(AuthConstants.DEV_MODE){
                console.log('########## SYNC ########### '+JSON.stringify(results));
              }
            });
           this.router.navigate(['/work-experiences/listing', this.user.user_id]);
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

  onCurrentOptionSelected(e){
    this.currentlyStudying = !this.currentlyStudying;
    if(!this.currentlyStudying){
      this.studyStatus = 'Not working here currently.';
      this.createEduDetailForm.get('endDate').setValidators(Validators.required);
      this.createEduDetailForm.get('endDate').updateValueAndValidity();
    }else{
      this.studyStatus = 'Currently working here.';
      this.createEduDetailForm.controls.endDate.patchValue("");
      this.createEduDetailForm.get('endDate').clearValidators();
      this.createEduDetailForm.get('endDate').updateValueAndValidity();
      if(AuthConstants.DEV_MODE){
        console.log("onCurrentOptionSelected: "+e.target.value+" Cleared Validations");
      }
    }
  }

  onHandleFormChanges(): void {
    this.createEduDetailForm.valueChanges.subscribe(val => {
      console.log("/********* onHandleFormChanges **********/");
        let startDate = val.startDate;
        let endDate =  val.endDate;
        if(startDate && endDate){
        if(startDate < endDate){
          this.presentAlert("Year of leaving must be after the year of joining.");
          }
        }

        let is_current = val.is_current;
        if(is_current){
          this.createEduDetailForm.get('endDate').clearValidators();
          this.createEduDetailForm.get('endDate').updateValueAndValidity();
        }else{
          this.createEduDetailForm.get('endDate').setValidators([Validators.required, Validators.maxLength(4)]);
          this.createEduDetailForm.get('endDate').updateValueAndValidity();
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
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  formatStartDate(event:any){
    let dataVal = event.target.value;
    let formattedVal = dataVal.split('T')[0];
    this.createEduDetailForm.controls.startDate.patchValue(formattedVal);
    //alert(dataVal);
  }

  formatEndDate(event:any){
    let dataVal = event.target.value;
    let formattedVal = dataVal.split('T')[0];
    this.createEduDetailForm.controls.endDate.patchValue(formattedVal);
    //alert(dataVal);
  }
  
}
