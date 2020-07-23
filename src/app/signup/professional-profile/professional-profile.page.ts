import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { StorageService } from '../../services/storage.service';
import { MasterService } from '../../services/master.service';
import { UserService } from '../../user/user.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { RegistrationService } from '../registration.service';
import { AuthConstants } from '../../config/AuthConstants';
import { BluspecUserModel } from '../../user/profile/user-profile.model';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.page.html',
  styleUrls: ['./professional-profile.page.scss'],
})
export class ProfessionalProfilePage implements OnInit {
  addSkillsForm: FormGroup;
  userData: BluspecUserModel = new BluspecUserModel();
  jobAreas = [];
  skills = [];
  skillsHolder = [];
  thisUserID : number;
  cachedData: BluspecUserModel;
  
  constructor(private masterService: MasterService, private userService: UserService,
    public router: Router,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public menu: MenuController,
    private registrationService: RegistrationService,
    public storageService: StorageService) { }

  ngOnInit() {
    this.menu.enable(false);
   
      this.addSkillsForm = new FormGroup({
        jobAreas: new FormArray([]),
        skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
      });
  

      /******** START FETCH JOB AREAS *******/ 
      this.masterService.getJobAreas().subscribe(
        (res: any) => {
          if (!res.error) {
        console.log("JOB AREAS: "+JSON.stringify(res));
       this.jobAreas = res.result;
  this.jobAreas.map((item) => {
    (this.addSkillsForm.controls.jobAreas as FormArray).push(new FormControl());
    
   });
  
        }
        },
        (error: any) => {
        alert('Looks like there is a Network Issue while fetching job areas.');
        }
        );
       /******** ENDS FETCH JOB AREAS *******/
       
       


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
    
     /******* GET CACHE AND RESTORE *******/
     this.registrationService.getCachedData().then(res => {
      if (res !== undefined) {
          //console.log("Direct fetched cache: "+JSON.stringify(res));
          this.cachedData = res;
          this.recoverCache();
        }
      });
      /******* GET CACHE AND RESTORE *******/

  }

  get skillsFormArray() { return <FormArray>this.addSkillsForm.get('skills'); }
  
  get jobAreasFormArray() { return <FormArray>this.addSkillsForm.get('jobAreas'); }

  onJobAreaSelectedOld(jobArea:any){
    //alert("hmm"+JSON.stringify(jobArea));
    console.log("#####: onJobAreaSelected "+jobArea.title);
     this.skills = this.skillsHolder;
    //this.skills = this.skills.map(item => item.parent_id === jobAreas.id);
     this.skills = this.skills.find(item => item.parent_id === jobArea.id);
     console.log("#####: Num of Skills=>  "+this.skills.length);
    // //this.addSkillsForm.controls.skills.reset();
    // this.skills.map((item) => {
    //   (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
    // });
    
  }

  onJobAreaSelected(jobArea:any){
    console.log("#####: onJobAreaSelected "+jobArea);
     this.skills = this.skillsHolder;
    //this.skills = this.skills.map(item => item.parent_id === jobAreas.id);
     this.skills = this.skills.find(item => item.parent_id === jobArea);
     console.log("#####: Num of Skills=>  "+this.skills.length);
  }

  recoverCache(){
  if(this.cachedData !== null && this.cachedData !== undefined){
    if(this.cachedData.selected_skills){
      console.log("Restoring cache for "+this.cachedData.selected_skills);
      this.skills.map((item) => {
        let skillsArr = this.cachedData.selected_skills.split(',');
        if(skillsArr.includes(item.id)){
          (this.addSkillsForm.controls.skills as FormArray).push(new FormControl(true));
        }else{
          (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
        }      
      });
     }
  }
  }

  nextStep(){
    if(this.addSkillsForm.valid){
      this.addUserSkills();
    }
  }

  prevStep(){
    //this.router.navigate(['personal-profile']);
    //this.navCtrl.push(PersonalProfilePage, {}, {animate:true, direction:'back'});
    this.navCtrl.navigateBack('registration/personal-profile');
  }

  addUserSkills() {
    //let userID = this.addSkillsForm.value.user_id;
    const selectedSkills = [];
    this.addSkillsForm.value.skills
    .map((value: any, index: number) => {
      if (value) {
        selectedSkills.push(this.skills[index].id);
      }
    });
console.log(selectedSkills+" - Restored");
    
this.cachedData.selected_skills = selectedSkills.toString();
this.registrationService.setCachedData(this.cachedData);
    this.router.navigate(['registration/set-location']);
  }
  
}
