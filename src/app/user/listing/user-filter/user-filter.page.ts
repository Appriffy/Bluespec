import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { counterRangeValidator } from '../../../components/counter-input/counter-input.component';
import { MasterService } from '../../../services/master.service';
import { SkillType } from '../../../dbmodels/skill_type';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../user.service';
import { StorageService } from '../../../services/storage.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthConstants } from '../../../config/AuthConstants';
import { UserFilterCache } from '../../../dbmodels/user-filter-cache';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.page.html',
  styleUrls: ['./user-filter.page.scss'],
})
export class UserFilterPage implements OnInit {
  rangeForm: any;
  localUser: LocalUser;
  //Always get this first from the User Service
  devMode = false;
  filterArr : UserFilterCache;
  online_status = "";
  //userFilterForm: FormGroup;
  selected_work_experience_min = 0;
  selected_work_experience_max = 10;
  rating_range_lower = 0;
  rating_range_upper = 5;
  custom_values : number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filter_search_radius = 500;
  skill_types: Array<SkillType>;
  currentRatingRange: number = 0;
  selected_skills: string[] = [];
  userStatusArr : string[] = ["Active", "Pending", "Blocked"];
  constructor(private formBuilder: FormBuilder, 
    private storageService: StorageService, 
    private authService: AuthService,
    private userService:UserService,
    private modalController: ModalController) {
    

/************** FILTER WORLD STARTS ****************/
 //const result = roles.filter(role => role.groups.find(group => user.groups.includes(group.id)));

// var array = [{id :1, name :"test1"},{id :2, name :"test2"},{id :3, name :"test3"},{id :4, name :"test4"}];
// var anotherOne = [{id :2, name :"test2"}, {id :4, name :"test4"}];
// var filteredArray  = array.filter(function(array_el){
// return anotherOne.filter(function(anotherOne_el){
// return anotherOne_el.id == array_el.id;
// }).length == 0
// });
// allList = allList.filter(item => item.parent_id.find(group => group.includes(this.selectedJobArea.id)));

/************** FILTER WORLD ENDS ****************/


    // //this.userFilterForm = new FormGroup({
    //   this.userFilterForm = this.formBuilder.group({
    //   role_id: new FormControl(''),
    //   status: new FormControl('Active'),
    //   latitude: new FormControl(''),
    //   longitude: new FormControl(''),
    //   search_radius: new FormControl('1000'),
    //   online_status: new FormControl(''),
    //   search_location: new FormControl(''),
    //   selected_skill_types: new FormControl(''),
    //   work_experience: new FormControl(1, counterRangeValidator(1, 5)),
    //   rating_range: new FormControl({lower: 0, upper: 5})
    // });
  }

  rangeChange(range: any) {
    //console.log('Rating Range change: '+range.target.value);
    this.rating_range_lower = range.target.value.lower;
    this.rating_range_upper = range.target.value.upper;
  }

  searchRangeChange(range: any) {
    console.log('searchRangeChange change', range.target.value);
    const thisRange = range.target.value;
    if(thisRange !== null && thisRange !== NaN){
      this.filterArr.search_radius = thisRange;
      this.filter_search_radius = thisRange;
    }
  }


  filterUsers(): void {
    //this.modalController.dismiss();
    this.onSubmit();
  }

  onChangeOnlineStatus(event) {
    //alert(event.detail);
    this.online_status = event.target.value;
    this.filterArr.online_status = this.online_status;
    }

  onSubmit() {
    //this.filterArr.status = this.sta;
    this.filterArr.work_experience_min = this.selected_work_experience_min;
    this.filterArr.work_experience_max = this.selected_work_experience_max;
    this.filterArr.online_status = this.online_status;
    this.filterArr.search_radius = this.filter_search_radius;
    this.filterArr.work_experience_min = this.selected_work_experience_min;
    this.filterArr.work_experience_max = this.selected_work_experience_max;

    this.userService.setFilterData(this.filterArr);
    this.userService.invokeFilterChangeEvent.next(this.filterArr);
    console.log("FILTER READY: "+this.filterArr);
    //this.userService.setFilterData(this.userFilterForm.value);
    this.modalController.dismiss();
    //alert(JSON.stringify(this.userFilterForm.value));
  }

  ngOnInit() {
    //this.filterArr = new UserFilterCache();
    this.filterArr = this.userService.getFilterData();
     this.authService.getAuthCache().then(authData =>{
       if(authData){
         this.localUser = authData;
       }
     });
     this.devMode = AuthConstants.DEV_MODE;
/*
    this.masterService.getSkills().subscribe(
      (res: any) => {
      if (!res.error) {
      //this.toastService.presentToast(JSON.stringify(res)); 
      this.skill_types = res.result;
      this.storageService.store(AuthConstants.JOB_SKILLS, res.result);
      //console.log("Got from SERVER: "+JSON.stringify(this.skill_types));
      } else {
        alert("User Filter Page "+res.message);
      }
      },
      (error: any) => {
      alert('Looks like there is a Network Issue while fetching skills.');
      }
      );*/

        /********ALSO THIS******/
     console.log("Going get Job Skills");
     this.storageService.get(AuthConstants.JOB_SKILLS).then(results => {
       if(results){
 this.skill_types = results;
 this.skill_types.map((item) => {
  item.enabled = 0;
});

 console.log("Got from Local Storage: ");
 //Now add existing selection
//  prods.map(function(a) {
//   a.price = a.price.toString()
//  .replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
// });
    
//Start the Restore
if(this.filterArr.selected_skills){
  console.log("Start the Restore ##1: "+JSON.stringify(this.filterArr.selected_skills));
  this.skill_types.map((item) => {
    //let skillsArr = this.selected_skills.split(',');
    let skillsArr = this.filterArr.selected_skills.split(',');
    console.log("Start the Restore: "+JSON.stringify(skillsArr));
  if(skillsArr.includes(""+item.id)){
    item.enabled = 1;
  }else{
    item.enabled = 0;
  }     
  });
}
//End of restoration

       }
     });
      /********* DELETE ALSO THIS ******/



  }


  updateSelectedSkillsFilter(appt) {
    //This is a local one. Assign the final to invoke server
    if(appt.checked) {
      let index = this.selected_skills.indexOf(appt.id)
      this.selected_skills.splice(index, 1)
      console.log("####### REMOVED #### :"+appt.id)
    }
    else {
      this.selected_skills.push(appt.id)
      console.log("####### ADDED #### :"+appt.id)
    }
    //console.log("####### ARRAY NOW #### :"+this.filterArr.join('\n'))
    console.log("####### SKILLS ARRAY  #### :"+this.selected_skills.join(', '))
     this.filterArr.selected_skills = this.selected_skills.join(', ');
    //this.userFilterForm.patchValue({selected_skill_types: stringArrOfSelSkills});
    //this.userFilterForm.get('selected_skill_types').updateValueAndValidity()
  }


}
