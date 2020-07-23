import { Component, OnInit, HostBinding } from '@angular/core';
import { CompanyListingModel, CompanyModel } from '../../dbmodels/company-model';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompanyService } from '../companies.service';
import { CreateCompanyModal } from '../create/create-company.modal';
import { CompanyFilterPage } from './company-filter/company-filter.page';
import { ToastService } from '../../services/toast.service';
import { UserService } from '../../user/user.service';
import { AuthConstants } from '../../config/AuthConstants';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: [
    './styles/listing.page.scss',
    './styles/listing.shell.scss',
    './styles/company-listing.ios.scss',
    '../../bluspecstyles/listing.page.scss'
  ],
})
export class CompaniesPage implements OnInit {
  listing: Array<CompanyModel>;
  filtered_listing: Array<CompanyModel>;
  searchQuery: string;
  jobFilterArr: any;

  loading : boolean = true;
  localUser: LocalUser;

  // @HostBinding('class.is-shell') get isShell() {
  //   return (this.listing && this.listing.isShell) ? true : false;
  // }

  fetchFiltersFromService(){
    this.jobFilterArr = this.companyService.getFilterData();
  }
  
  constructor(private companyService: CompanyService, 
    private route: ActivatedRoute, 
    private ngRouter: Router,
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService,
    private modalController: ModalController) {

  }

  ionViewWillEnter(){
      this.fetchCompanies();
  } 

  ngOnInit() {
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      if(AuthConstants.DEV_MODE){
        console.log("/***** User Ready with Auth => ****/: "+this.localUser.id);
      }
    });

   //Subscribe to any auth changes event
   this.companyService.invokeListChangeEvent.subscribe(value => {
   this.filtered_listing = value;
    this.listing = value;
    this.loading = false;
    if(AuthConstants.DEV_MODE){
      console.log("Received from Subject: "+JSON.stringify(value));
      this.toastService.presentToast("Companies list has been updated.");
    }
    });


    var postData = {
      role_id: 0,
      sort_by: 0,
      search_item: this.searchQuery
      };
      //Enable this too for real-time actions update
    //this.fetchCompanies();

    this.storageService.get(AuthConstants.COMPANIES).then(companies=>{
      if(companies){
         if(companies.length > 0){
            this.listing = companies;
            this.loading = false;
         }
      }
    });
  }

  fetchCompanies(){
    //this.loading = true;
     //Implement No Disturb Loading
     if(this.listing && this.listing.length <= 0){
      this.loading = true;
   }
    this.companyService.getListingDataSource();
  }

   loadCompanies(){
     //let timeCurrent = Math.floor(Date.now() / 1000);
    this.fetchCompanies();
  }

  initializeItems() {
    this.listing = this.filtered_listing;
  }

 /****************** SEARCH USERS ********************/
 searchList() {
  this.initializeItems();
  return this.listing = this.listing.filter((thisJob) => {
    return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
   // thisJob.tagline.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });
}
/****************** SEARCH USERS ********************/

filterJobs(){
    this.initializeItems();
    return this.listing = this.listing.filter((thisJob) => {
      //return thisJob.is.indexOf(this.jobFilterArr.job_type) > -1
      //this.jobFilterArr.job_type > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
      //thisJob.max_salary <= this.jobFilterArr.max_salary &&
      //this.jobFilterArr.min_salary > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
    });
}

  async createNewCompany(){
    //this.ngRouter.navigate(['create-company']);
    const modal = await this.modalController.create({
      component: CreateCompanyModal,
      cssClass: 'fullscreen-modal-css'
    });
    await modal.present();
  }

  async showFilterScreen() {
    const modal = await this.modalController.create({
      component: CompanyFilterPage,
      cssClass: "fullscreen-modal"
    });
    return await modal.present();
    //alert("hii");
  }


}
