import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController, AlertController, ModalController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { StorageService } from '../../services/storage.service';
import { MasterService } from '../../services/master.service';
import { UserService } from '../user.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { AuthConstants } from '../../config/AuthConstants';
import { BluspecUserModel } from '../profile/user-profile.model';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';
import { SelectJobAreaPage } from '../../utility-components/select-job-area/select-job-area.page';
import { JobAreaModel } from '../../dbmodels/job-areas';

@Component({
  selector: 'app-assign-skills',
  templateUrl: './assign-skills.page.html',
  styleUrls: ['./assign-skills.page.scss'],
})
export class AssignSkillsPage implements OnInit {
  addSkillsForm: FormGroup;
  skills = [];
  skillsHolder = [];
  existingSkillset : [any];
  selectedSkills = [];
  thisUserID : any;
  user_profile_id : any;
  localUser: LocalUser;
  loading = true;

  selectedJobArea: JobAreaModel;
  //postJobForm: FormGroup;

  constructor(private masterService: MasterService, private userService: UserService,
    public router: Router,
    public route: ActivatedRoute,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public menu: MenuController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private toastService: ToastService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public storageService: StorageService) { }

  ngOnInit() {
    this.menu.enable(false);

      this.addSkillsForm = new FormGroup({
        job_area: new FormControl('', Validators.required),
        job_area_name: new FormControl(''),
        //jobAreas: new FormArray([]),
        skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
      });
  
      this.authService.getAuthCache().then(results=>{
        if(results){
          this.localUser = results;
          this.user_profile_id = this.localUser.id;
                /************ CHECK ROUTE PARAM REQUESTS ***************/
 this.route.paramMap.subscribe(params => {
  if(params.get("user_id")){
    this.user_profile_id = params.get("user_id");
    // if(this.user_profile_id <= 0){
    //   this.ngRouter.navigate(['page-not-found']);
    // }
  }else{
    this.user_profile_id = this.localUser.id;
  }
  this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
  });
        }
      });

       this.storageService.get(AuthConstants.JOB_SKILLS).then(results=>{
         if(results){
          this.skills = results;
          this.skillsHolder = results;
          //console.log("JOB SKILLS: "+JSON.stringify(results));
     this.skills.map((item) => {
       (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
     });
         }else{
           alert("Could not find job skills.");
         }
       });
  }

  
  get skillsFormArray() { return <FormArray>this.addSkillsForm.get('skills'); }
  
  get jobAreasFormArray() { return <FormArray>this.addSkillsForm.get('jobAreas'); }

  onJobAreaSelected(jobArea:any){
     this.skills = this.skillsHolder;
     console.log("#####: onJobAreaSelected Num of Skills=>  "+this.skills.length);

     this.skills = this.skills.filter(item =>{
       //return item.id%2==0;
       if(item){
        return item.parent_id === jobArea.id;
       }
     });
     console.log("#####: onJobAreaSelected Num of Filtered Skills=>  "+this.skills.length);
     this.loading = false;
    //  setTimeout(() => {
      
    //  }, 2000);
  }

  onJobSkillSelected(thisSkill:any){
    console.log("#####: onJobSkillSelected "+thisSkill);
    // this.addSkillsForm.value.skills
    // .map((value: any, index: number) => {
    //   if (value) {
    //     this.selectedSkills.push(index);
    //   }
    // });
    //Check if number
      if (thisSkill) {
        this.selectedSkills.push(thisSkill);
        console.log("#####: Validated =>"+thisSkill);
      }

    console.log("#####: onJobSkillSelected Array => "+this.selectedSkills.toString());
  }

  recoverCache(){
    if(this.existingSkillset !== null && this.existingSkillset !== undefined){
      if(this.existingSkillset.length > 0){
        console.log("Restoring cache for "+JSON.stringify(this.existingSkillset));

        let existingSkillsArr =  [];
        for(let element of this.existingSkillset){
          existingSkillsArr.push(element.skill_type);
        }
        console.log("Restoring cache for SIMPLIFIED: "+JSON.stringify(existingSkillsArr));

        this.skills.map((item) => {
          //let skillsArr = this.cachedData.selected_skills.split(',');
          if(existingSkillsArr.includes(item.id)){
            console.log("RESTORED : "+item.id);
            (this.addSkillsForm.controls.skills as FormArray).push(new FormControl(true));
          }else{
            (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
          }      
        });

       }
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


  fetchMyJobSkills(apiKey:any, userID:any){
    this.loading = true;
    this.userService.getUserSkillSet(apiKey, userID).subscribe(skillSets =>{
      if(skillSets){
        this.loading = false;
        this.existingSkillset = skillSets.items;
        console.log("Existing Skill Set Fetched: "+JSON.stringify(this.existingSkillset));
        if(this.existingSkillset.length > 0){
         this.recoverCache();
        }
      }
    },
    (error: any) => {
     this.loadingController.dismiss();
    this.presentAlert('Looks like there is a Network Issue.'+error.message);
    });
  }

  addUserSkills() {
    this.presentLoadingWithOptions();
    // this.addSkillsForm.value.skills
    // .map((value: any, index: number) => {
    //   if (value) {
    //     console.log(index+" WHAT IS "+value);
    //     //selectedSkills.push(this.skills[index].id);
    //     this.selectedSkills.push(index);
    //   }
    // });
 
    console.log(this.selectedSkills.toString()+" - USER SKILLS ARRAY");
    //alert(selectedSkills.toString());
    this.hitSkillSaveAPI();
  }

  redirectToSkillset(){
    this.router.navigate(['skill-set/'+this.user_profile_id]);
  }

  hitSkillSaveAPI(){
    let postData = {
      'user_id' : this.user_profile_id,
      'selected_skills' : this.selectedSkills.toString(),
      'flag':0
    }
    
    this.userService.addUserSkills(this.localUser.api_key, postData)
    .subscribe(
      (res: any) => {
        console.log('####### Add Skills Result ########## '+JSON.stringify(res));
        this.loadingController.dismiss();
        if (res.error) {
          this.presentAlert(res.message); 
          } else {
            //Refresh the list
            this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
            //this.presentAlert(res.message); 
            this.toastService.presentToast(res.message);
            //this.router.navigate(['/hire-people-for-work']);
            if(this.localUser.role_id == 1){
              this.router.navigate(['/people/listing/grafters']);
              //this.router.navigate(['/people/details', this.user_profile_id]);
            }else{
              this.router.navigate(['/people/profile']);
            }
          }
          //alert("Congo! "+this.addSkillsForm.value);
      },
      (error: any) => {
       this.loadingController.dismiss();
      this.presentAlert('Looks like there is a Network Issue.'+error.message);
      }
      );
  }

  /******************/
  restartProcess(){
    
this.authService.getAuthCache().then(authData=>{
  if(authData){
     this.localUser = authData;

/******** START FETCH SKILLS *******/ 
this.masterService.getSkills().subscribe(
  (res: any) => {
    if (!res.error) {
  //console.log(JSON.stringify(res));
 this.skills = res.result;
 this.skillsHolder = res.result;
this.skills.map((item) => {
(this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
});

  }
  },
  (error: any) => {
  alert('Looks like there is a Network Issue while fetching skills.');
  }
  );
 /******** ENDS FETCH SKILLS THEN *******/     

     this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
  }
});
  }
/***************************************** */  


  async openSelectJobArea() {
    const modal = await this.modalCtrl.create({
      component: SelectJobAreaPage,
      // componentProps: {
      //   'user': this.profile
      // }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        //alert(JSON.stringify(item));
        this.addSkillsForm.controls.job_area.patchValue(item.data.id);
        this.addSkillsForm.controls.job_area_name.patchValue(item.data.title);
        this.selectedJobArea = item.data;
        this.onJobAreaSelected(item.data);
      }
    });
    await modal.present();
   }
   
}
