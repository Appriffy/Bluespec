import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { SkillType } from '../../../dbmodels/skill_type';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../../services/storage.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthConstants } from '../../../config/AuthConstants';
import { AuthService } from '../../../services/auth.service';
import { JobService } from '../../jobs.service';
import { JobFilterCache } from '../../../dbmodels/job-filter-cache';
import { SelectJobAreaPage } from '../../../utility-components/select-job-area/select-job-area.page';
import { JobAreaModel } from '../../../dbmodels/job-areas';
import { SelectCurrencyPage } from '../../../utility-components/select-currency/select-currency.page';
import { LocationAutocompletePage } from '../../../bluspec-recruiter/location-autocomplete/location-autocomplete.page';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.page.html',
  styleUrls: ['./job-filter.page.scss']
})
export class JobFilterPage implements OnInit {
  localUser: LocalUser;
  //Always get this first from the User Service
  devMode = false;
  userFilterForm: FormGroup;
  filterArr : JobFilterCache;

  isLocationEnabled: boolean = true;
  isSearchRadiusEnabled: boolean = false;
  isSalaryFilterEnabled: boolean = false;
  isExperienceFilterEnabled: boolean = false;

  job_types = [];
  selected_job_area:number;
  selected_job_area_name:string;
  selectedJobAreaItem:JobAreaModel;
  selected_work_experience_min = 0;
  selected_work_experience_max = 10;
  custom_values : number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filter_search_radius = 500;
  skill_types: Array<SkillType>;

  //Job Filter Params
  selected_job_types: number[] = [];
  selected_skills: number[] = [];
  userStatusArr : string[] = ["Ongoing", "Pending", "Completed"];

  constructor(private formBuilder: FormBuilder, 
    private storageService: StorageService, 
    private authService: AuthService,
    private jobService: JobService,
    private modalCtrl: ModalController,
    private modalController: ModalController) {
    
  }

  searchRangeChange(range: any) {
    console.log('searchRangeChange change', range.target.value);
    const thisRange = range.target.value;
    if(thisRange !== null && thisRange !== NaN){
      this.filterArr.km_radius = thisRange;
      this.filter_search_radius = thisRange;
    }
  }

  filterUsers(): void {
    this.onSubmit();
  }

  // onChangeOnlineStatus(event) {
  //   //alert(event.detail);
  //   this.online_status = event.target.value;
  //   this.filterArr.online_status = this.online_status;
  //   }


  async openSelectJobArea() {
    const modal = await this.modalCtrl.create({
      component: SelectJobAreaPage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.selectedJobAreaItem = item.data;
        this.selected_job_area = item.data.id;
        this.selected_job_area_name = item.data.title;
        this.updateSkillTypes();
      }
    });
    await modal.present();
   }


  ngOnInit() {
    //this.filterArr = new UserFilterCache();
    this.filterArr = this.jobService.getFilterData();
     this.authService.getAuthCache().then(authData =>{
       if(authData){
         this.localUser = authData;
       }
     });
     this.devMode = AuthConstants.DEV_MODE;

     this.userFilterForm = new FormGroup({
      jobArea: new FormControl(''),
      job_area_name: new FormControl(''),
      jobTypes: new FormArray([]),
      skillID: new FormArray([]),
      availableJobTypes: new FormArray([]),
      status: new FormControl('Pending'),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      km_radius: new FormControl(1000),
      address: new FormControl(''),
      min_salary: new FormControl(),
      max_salary: new FormControl(),
      currency: new FormControl('USD'),
      selected_work_experience_min: new FormControl(this.selected_work_experience_min),
      selected_work_experience_max: new FormControl(this.selected_work_experience_max),
      isRadiusEnabled: new FormControl(this.isSearchRadiusEnabled),
      isLocationEnabled: new FormControl(this.isLocationEnabled),
      isSalaryFilterEnabled: new FormControl(this.isSalaryFilterEnabled),
      isExperienceFilterEnabled: new FormControl(this.isExperienceFilterEnabled)
    });

/******** PROCESS JOB TYPES ******/
console.log("Going get Job Types");
this.storageService.get(AuthConstants.JOB_TYPES).then(results => {
if(results){
this.job_types = results;

this.job_types.map((item) => {
  item.enabled = 0;
  });

console.log("LISTING Job Types "+JSON.stringify(this.job_types));
this.job_types.map((item) => {
(this.userFilterForm.controls.jobTypes as FormArray).push(new FormControl());
//(this.userFilterForm.controls.jobTypes as FormArray).push(this.formBuilder.group(new FormControl(false)));
});


/****Start the Restore
if(this.filterArr.job_type){
 console.log("Start the Restore ##1: "+JSON.stringify(this.filterArr.job_type));
 this.job_types.map((item) => {
  //Appears to be buggy with multiple selection. Under beta version    
  if(this.filterArr.job_type.includes(item.title)){
    item.enabled = 1;
  }else{
    item.enabled = 0;
  }
  //isJobTypeSelected(topic)
 });
}
//End of restoration*****/

}});
/********* END OF JOB TYPES ******/


 /********ALSO THIS******/
console.log("Going get Job Skills");
this.storageService.get(AuthConstants.JOB_SKILLS).then(results => {
if(results){
this.skill_types = results;
this.skill_types.map((item) => {
item.enabled = 0;
});

console.log("LISTING Job Skills "+JSON.stringify(this.skill_types));
this.skill_types.map((item) => {
(this.userFilterForm.controls.skillID as FormArray).push(new FormControl());
//(this.userFilterForm.controls.skillID as FormArray).push(this.formBuilder.group(new FormControl()));
});

this.skill_types.map((item) => {
  (this.userFilterForm.controls.availableJobTypes as FormArray).push(new FormControl());
});

/*********Start the Restore
if(this.filterArr.selected_skills_arr){
console.log("Start the Restore ##1: "+JSON.stringify(this.filterArr.selected_skills_arr));
this.skill_types.map((item) => {
if(this.filterArr.selected_skills_arr.includes(item.id)){
item.enabled = 1;
}else{
item.enabled = 0;
}     
});
}
//End of restoration***********/

   }
 });
  /********* DELETE ALSO THIS ******/
  }


  onSubmit() {
    //this.filterArr.status = this.se;
    this.filterArr.work_experience_min = this.userFilterForm.value.selected_work_experience_min;
    this.filterArr.work_experience_max = this.userFilterForm.value.selected_work_experience_max;
    this.filterArr.km_radius = this.userFilterForm.value.km_radius;
    this.filterArr.min_salary = this.userFilterForm.value.min_salary;
    this.filterArr.max_salary = this.userFilterForm.value.max_salary;

    //Simple Filters supported on server
    this.filterArr.jobArea = this.selected_job_area;
    //For local restoration purpose
    this.filterArr.selected_skills_arr = this.selected_skills;
    //Multiple Filters not supported on server
    let selected_skills = this.selected_skills.join();
    this.filterArr.skillID = selected_skills;

    this.filterArr.job_type = this.selected_job_types;
    this.filterArr.job_types = this.selected_job_types.join();
    this.jobService.setFilterData(this.filterArr);
    this.jobService.invokeFilterChangeEvent.next(this.filterArr);
    console.log("FILTER READY: "+JSON.stringify(this.filterArr));
    this.modalController.dismiss();
  }

  onJobSkillsChange(event, id:number) {
    if(event.target.checked){
      this.selected_skills.push(id);
    }
    else{
    const index: number = this.selected_skills.indexOf(id);
    if (index !== -1) {
      this.selected_skills.splice(index, 1);
    }   
    }
    console.log("#####: onJobSkillSelected String => "+this.selected_skills.join());
  }

  onJobTypeFilterSelected(event, id:number){
    console.log("#####: onJobTypeFilterSelected "+id);
    if(event.target.checked){
      this.selected_job_types.push(id);
    }
    else{
    const index: number = this.selected_job_types.indexOf(id);
    if (index !== -1) {
      this.selected_job_types.splice(index, 1);
    }   
    }
    console.log("#####: onJobTypeFilterSelected String => "+this.selected_job_types.join());
  }


  isJobTypeSelected(topic){
    return this.selected_job_types.indexOf(topic.id) >= 0;
  }

  async openCurrencyChooser() {
    const modal = await this.modalCtrl.create({
      component: SelectCurrencyPage
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        //this.selectedCurrency = item.data.symbol;
        this.filterArr.currency = item.data.symbol;
      }
    });
    await modal.present();
   }

   get skillsFormArray() { return <FormArray>this.userFilterForm.get('skillID'); }

   get jobTypesFormArray() { return <FormArray>this.userFilterForm.get('jobTypes'); }

  updateSkillTypes(){
    this.storageService.get(AuthConstants.JOB_SKILLS).then(allList=>{
      if(allList){
        allList.map((item) => {
          item.enabled = 0; 
        });

    if(this.selected_job_area !== null && this.selected_job_area !== undefined){
      console.log("Filtering for Single Job Area : "+this.selected_job_area+" among "+this.skill_types.length);
      allList = allList.filter(item => item.parent_id === this.selected_job_area);
      this.skill_types = allList;
      console.log("Total Filtered : "+this.skill_types.length);
     }
    }
  });
  }

  onLocationEnabled(e){
    this.isLocationEnabled = !this.isLocationEnabled;
    if(!this.isLocationEnabled){
      this.filterArr.latitude = "";
      this.filterArr.longitude = "";
    }else{
    }
  }

  onSearchRadiusEnabled(e){
    this.isSearchRadiusEnabled = !this.isSearchRadiusEnabled;
    if(!this.isLocationEnabled){
      this.filter_search_radius = 5000;
    }
  }

  onFilterBySalaryEnabled(e){
    this.isSalaryFilterEnabled = !this.isSalaryFilterEnabled;
    if(!this.isSalaryFilterEnabled){
      this.filterArr.min_salary = 0;
      this.filterArr.max_salary = 0;
    }
  }


  onFilterByExperienceEnabled(e){
    this.isExperienceFilterEnabled = !this.isExperienceFilterEnabled;
    if(!this.isExperienceFilterEnabled){
      this.filterArr.work_experience_min = 0;
      this.filterArr.work_experience_max = 0;
    }
  }


  async showAddressModal () {
    const modal = await this.modalCtrl.create({
      component: LocationAutocompletePage,
      cssClass: 'fullscreen-modal-css'
    });

    modal.onDidDismiss().then((dataReturned ) => {
      if (dataReturned !== null) {
        console.log("dataReturned.data: "+dataReturned.data);
        alert(''+ JSON.stringify(dataReturned.data));
        this.filterArr.address = dataReturned.data;
      }else{
        alert('No Place selected. Please try again.');
      }
    });
    await modal.present();
  }



}
