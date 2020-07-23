import { Component, OnInit, OnDestroy, HostBinding, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { UserFilterPage } from '../../user/listing/user-filter/user-filter.page';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserService } from '../user.service';
import { UserProfileModel } from '../profile/user-profile.model';
import { MasterService } from '../../services/master.service';
import * as _ from "lodash";
import { UpdateUserModal } from '../update/update-user.modal';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthService } from '../../services/auth.service';
import { AuthConstants } from '../../config/AuthConstants';
import { CreateUserModal } from '../create/create-user.modal';
import { StorageService } from '../../services/storage.service';
import { UserFilterCache } from '../../dbmodels/user-filter-cache';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: [
    './styles/user-listing.page.scss',
    './styles/user-listing.ios.scss',
    './styles/user-listing.shell.scss',
    './styles/user-filter-form.scss'
  ]
})
export class ListingPage implements OnInit, OnDestroy {
  searchQuery: string;
  showFilter = false;
  listingDataStore: Array<UserProfileModel>;
  items: Array<UserProfileModel>;

  localUser:LocalUser;
  loading:boolean = true;

  userRole:string ="grafters";
  userRoleID = 3;
  page_title = "Find Professionals";
  sortBy = 1;
  onlineStatus = "";
   
  filterArr : UserFilterCache;

  initializeItems() {
    this.items = this.listingDataStore;
  }

  constructor(public modalController: ModalController,
    private userService: UserService,
    private masterService: MasterService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private loadingCtrl: LoadingController,
    private authService: AuthService) {
     
     }

    ngOnDestroy(): void {
      //this.stateSubscription.unsubscribe();
    }
    
    ngOnInit() {
     this.filterArr = this.userService.getFilterData(); 
     this.userService.invokeFilterChangeEvent.subscribe(newFilter =>{
       if(newFilter){
this.filterArr = newFilter;
this.loadItems();
console.log("NEW FILTER: "+JSON.stringify(newFilter));
       }
     });
     this.takeRouteParams();

     //Take Query Params
     this.route.queryParams.subscribe( params => {
      if(params){
        //console.log(params);
        
         this.filterArr.latitude = params['latitude'] || "";
         this.filterArr.longitude = params['longitude'] || "";
         this.filterArr.selected_skills = params['selected_skills'];

        // if(params.has("latitude")){
        //   this.filterArr.latitude = params['latitude'];
        // }
        // if(params.has("longitude")){
        //   this.filterArr.longitude = params['longitude'];
        // }

        // if(params.has("selected_skills")){
        //   this.filterArr.selected_skills = params['selected_skills'];
        // }
       
        console.log("Query Params: "+JSON.stringify(params));
      }
    });
  this.userService.setFilterData(this.filterArr);
  //this.loadItems();
     
    //  this.filterForm = new FormGroup({
    //   //dual: new FormControl({lower: 1, upper: 100}),
    //   user_status: new FormControl(''),
    //   search_location: new FormControl(''),
    //   work_experience: new FormControl(1, counterRangeValidator(1, 5)),
    //   rating_range: new FormControl({lower: 0, upper: 5})
    // });
    //this.addCheckboxes();
        }



loadItems(){
  this.presentLoadingWithOptions();
  this.searchQuery = '';
    /******** FETCH ALL USERS *******/
    // var postData = {
    //   role_id: 0,
    //   sort_by: 0,
    //   search_item: this.searchQuery
    //   };
      this.fetchFreshList(this.filterArr);
      
    /***********************/ 

//     this.userService.invokeFilterChangeEvent.subscribe(value => {
//       this.loaderDismiss();
//       if(value){
//         console.log("Received User Fiilter => "+JSON.stringify(value));
//        this.fetchFiltersFromService();
//        if(AuthConstants.DEV_MODE){
// this.toastService.presentToast("Filter Applied");
//        }
//      this.filterUsers();
//     }});
}        
/************************ */  
takeRouteParams(){
  this.route.paramMap.subscribe( params => {
    if(params){
      //console.log(params);
      console.log("Route Params: "+JSON.stringify(params));
      if(params.has("user_role")){
      //alert("Params: "+JSON.stringify(params));
      this.userRole = params.get("user_role");
      if(this.userRole == "employers"){
        this.page_title = "Find Employers";
        this.userRoleID = 2;
        this.filterArr.role_id = this.userRoleID;
      }else{
        if(this.userRole == "grafters"){
          this.page_title = "Find Grafters";
          this.userRoleID = 3;
          this.filterArr.role_id = 3;
        }else{
          this.filterArr.role_id = 0;
        this.router.navigate(["page-not-found"]);
      }
      }
    }



    }
  } );
}      

fetchFreshList(postData:any){
this.authService.getAuthCache().then(promisedValue=>{
  if(promisedValue){
    this.localUser = promisedValue;
    this.userService.getListingDataSource(this.localUser.api_key, postData).subscribe(
      (res: any) => {
  
        //this.toastService.presentToast(JSON.stringify(res)); 
      if (!res.error) {
      //this.toastService.presentToast(res.message);
      this.listingDataStore = res.result;
      this.items = res.result;
      this.loaderDismiss();
      this.userService.invokeListChangeEvent.next(this.items);
      this.loading = false;
      } else {
        this.toastService.presentToast(res.message);
      }
      },
      (error: any) => {
        //this.loadingCtrl.dismiss();
        this.loaderDismiss();
        if(AuthConstants.DEV_MODE){
          this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
        }else{
          this.toastService.presentToast('Looks like there is a Network Issue.');
        }
      },
      () => {  
        // complete callback
        this.loaderDismiss();
    }
      );
  }else{
  this.toastService.presentToast("We could not authenticate your request. Please login again to access Bluspec.");
  this.authService.logout();
  }
            });

}

//DO IT 
    async openCountryListDialog() {
      const modal = await this.modalController.create({
        component: UpdateUserModal,
        cssClass: 'fullscreen-modal-css'
      });
      await modal.present();
      //alert("Show Create Modal");
    }
  


    /************** NEW FILTER SYSTEM ***************/
    fetchFiltersFromService(){
      this.filterArr = this.userService.getFilterData();
    }
     /************** NEW FILTER SYSTEM ***************/


    /****************** SEARCH USERS ********************/
    searchList() {
      //alert(this.searchQuery);
      // this.searchSubject.next({
      //   lower: this.rangeForm.controls.dual.value.lower,
      //   upper: this.rangeForm.controls.dual.value.upper,
      //   query: this.searchQuery
      // });
      console.log("Searching "+this.searchQuery);
      this.initializeItems();
      return this.items = this.items.filter((location) => {
        return location.first_name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
        location.last_name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
        location.tagline.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
      });
    }
  /****************** SEARCH USERS ********************/
  filterUsers(): void {
    //this.modalController.dismiss();
    this.onSubmit();
  }

  onSubmit() {
   
    console.log("USER FILTER VALUE: "+JSON.stringify(this.filterArr));
    
    //let onlineStatus = this.filterArr.onlineStatus;
    let onlineStatus = "";
    switch(this.filterArr.online_status){
      case "0":
        onlineStatus = "";
        break;

      case "1":
      onlineStatus = "Online";
        break;

      case "2":
        onlineStatus = "Offline";
        break;
    }
    this.initializeItems();
    //BROKEN THIS COOL INTO EVEN COOLER
    return this.items = this.items.filter((thisUser) => {
    return thisUser.online_status.toLowerCase().indexOf(onlineStatus.toLowerCase()) > -1
    //this.filterArr.length > 0 ? thisUser.skills.some(c => this.filterArr.includes(c.id)) : true
       //return location.skills.every(c => this.filterArr.includes(c.id)) &&
       //thisUser.skills.some(c => this.filterArr.selected_skills.includes(c.id))
    });
    console.log("/*******************/ REAL FILTER LOGIC CALLED: "+JSON.stringify(this.filterArr));
    // return this.items = this.items.filter((thisUser) => {
    //   return thisUser.online_status.toLowerCase().indexOf(onlineStatus.toLowerCase()) > -1 &&
    //   thisUser.skills.some(c => {
    //     if(this.filterArr.length > 0){
    //       thisUser.skills.some(c => this.filterArr.includes(c.id))
    //      }
    //   })
      
      // });

      // let filteredByStatus = [];
      // filteredByStatus = this.items.filter((thisUser) => {
      //   return thisUser.online_status.toLowerCase().indexOf(onlineStatus.toLowerCase()) > -1
      // });

      // let filteredBySkills = [];
      // filteredBySkills = this.items.filter((thisUser) => {
      //   return thisUser.skills.some(c => this.filterArr.includes(c.id))
      // });

      //return this.items = Array.prototype.push.apply(filteredByStatus,filteredBySkills);
      //return this.items = filteredByStatus.concat(filteredBySkills);
      //return this.items = filteredBySkills.concat(...filteredByStatus);
      //return this.items = [...filteredBySkills, ...filteredByStatus];
      //alert("Filter Done!!!");
  }

  /****************** FILTER USERS ********************/
    async showUserFilterScreen() {
      const modal = await this.modalController.create({
        component: UserFilterPage,
        cssClass: "fullscreen-modal"
      });
      return await modal.present();
    }
    
  
    async presentLoadingWithOptions() {
      const loading = await this.loadingCtrl.create({
        spinner: null,
        message: 'Loading Users...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      //return await loading.present();
    }

    async loaderDismiss(){
    await this.loadingCtrl.dismiss();
    }
  
    async createNewItem(){
      //this.ngRouter.navigate(['create-company']);
      const modal = await this.modalController.create({
        component: CreateUserModal,
        cssClass: 'fullscreen-modal-css'
      });
      await modal.present();
    }

}
