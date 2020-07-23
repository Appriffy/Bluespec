import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { JobFilterPage } from './job-filter/job-filter.page';
import { ModalController } from '@ionic/angular';
import { JobService } from '../jobs.service';
import { JobListingModel } from '../../dbmodels/jobs-listing.model';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { AuthConstants } from '../../config/AuthConstants';
import { JobFilterCache } from '../../dbmodels/job-filter-cache';
import { StorageService } from '../../services/storage.service';
import { SettingsModel } from '../../dbmodels/settings-model';

@Component({
  selector: 'app-deals-listing',
  templateUrl: './jobs-listing.page.html',
  styleUrls: [
    './styles/deals-listing.page.scss',
    './styles/deals-listing.shell.scss',
    './styles/deals-listing.ios.scss'
  ],
})
export class JobListingPage implements OnInit {
  listing: JobListingModel;
  filtered_listing: JobListingModel;
  searchQuery: string;
  jobFilterArr: JobFilterCache;
  localUser: LocalUser;
  loading = false;
  appSettings: SettingsModel;
  //Selected params
  skillID : number = 0;
  jobArea : number = 0;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  fetchFiltersFromService(){
    this.jobFilterArr = this.jobService.getFilterData();
    if(AuthConstants.DEV_MODE){
      console.log("fetchFiltersFromService() => "+JSON.stringify(this.jobFilterArr));
    }
  }

  constructor(private jobService: JobService, private route: ActivatedRoute, 
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private modalController: ModalController) { }

  ngOnInit(): void {
    //Just get fresh every time via Constructor unless required
    this.jobFilterArr = this.jobService.getFilterData(); 
     this.jobService.invokeFilterChangeEvent.subscribe(newFilter =>{
       if(newFilter){
       this.jobFilterArr = newFilter;
       //Enable Server Filter
       this.loadJobsFromServer(true);
       //Enable Local Filter
       //this.filterJobs();
       console.log("NEW FILTER: "+JSON.stringify(newFilter));
       }
     });

    this.route.params.subscribe(params => {
      if(params.get("skillID")){
        this.skillID = params['skillID'];
        console.log("GOT SKILL via Route: "+this.skillID);
      }
      if(params.get("jobArea")){
        this.jobArea = params['jobArea'];
      }
      
      });

    this.route.data.subscribe((resolvedRouteData) => {
      const listingDataStore = resolvedRouteData['data'];
      if(AuthConstants.DEV_MODE){
      console.log("ROUTE BASED JOB DETAILS HERE "+ JSON.stringify(listingDataStore));
      }
      listingDataStore.state.subscribe(
        (state) => {
          this.listing = state;
          console.log("JOB DETAILS HERE "+ JSON.stringify(this.listing));
        },
        (error) => {}
      );
    },
    (error) => {})

    this.storageService.get(AuthConstants.APP_SETTINGS).then(appSettings=>{
      if(appSettings){
        this.appSettings = appSettings;
        if(AuthConstants.DEV_MODE){
          console.log("AppSettings: "+JSON.stringify(appSettings));
        }
      }
    });

    this.loadJobsFromServer();
  }

  loadJobsFromServer(withFilter = false){
    this.loading = true;
    this.authService.getAuthCache().then(results =>{
      if(results){
        let postData = {
          skillID: ""+this.skillID,
          jobArea: this.jobArea
        }
        if(withFilter){
          postData = this.jobFilterArr;
        }
        console.log("FETCH JOBS FROM SERVICE WITH FILTER => "+ JSON.stringify(this.jobFilterArr));
        this.jobService.getListingDataSource(results.api_key, postData).subscribe(resultData=>{
          if(resultData){
             if(AuthConstants.DEV_MODE){
              console.log("JOBS FETCHED FROM SERVICE: "+ JSON.stringify(resultData));
             }
             this.listing = resultData;
             this.loading = false;
          }
        });
      }
    });

  }

  initializeItems() {
    this.filtered_listing = this.listing;
  }

 /****************** SEARCH USERS ********************/
 searchList() {
  //alert(this.searchQuery);
  // this.searchSubject.next({
  //   lower: this.rangeForm.controls.dual.value.lower,
  //   upper: this.rangeForm.controls.dual.value.upper,
  //   query: this.searchQuery
  // });
  this.initializeItems();
  return this.listing.items = this.listing.items.filter((thisJob) => {
    return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
    thisJob.job_description.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });
}
/****************** SEARCH USERS ********************/

filterJobs(){
    this.initializeItems();
    console.log("APPLYING NEW FILTER");
    return this.listing.items = this.listing.items.filter((thisJob) => {
      //return thisJob.job_type_name.indexOf(this.jobFilterArr.job_type) > -1
      //return thisJob.jobSkills.every(c => this.jobFilterArr.selected_skills.includes(c.id))

      return this.jobFilterArr.job_type.includes(thisJob.job_type) &&

       thisJob.jobSkills.some(c => this.jobFilterArr.selected_skills_arr.includes(c.id))
      
      //this.jobFilterArr.job_type > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
      //thisJob.max_salary <= this.jobFilterArr.max_salary &&
      //this.jobFilterArr.min_salary > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
    });
}

  async showJobFilterScreen() {
    const modal = await this.modalController.create({
      component: JobFilterPage,
      cssClass: "fullscreen-modal"
    });
    //alert("hii");
    return await modal.present();
  }

}
