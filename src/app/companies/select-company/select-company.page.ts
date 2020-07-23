import { Component, OnInit } from '@angular/core';
import { AuthConstants } from '../../config/AuthConstants';
import { NavController, ModalController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { StorageService } from '../../services/storage.service';
import { CompanyModel } from '../../dbmodels/company-model';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../companies.service';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss',
  '../listing/styles/listing.page.scss',
  '../listing/styles/listing.shell.scss',
  '../listing/styles/company-listing.ios.scss']
})
export class SelectCompanyPage implements OnInit {
  listing: Array<CompanyModel>;
  filtered_listing: Array<CompanyModel>;
  searchQuery: string;
  loading : boolean = true;
  selectedArray: Array<CompanyModel>;
  isMultiMode: boolean = false;
  
  constructor(private storageService: StorageService, 
    private modalController: ModalController,
    private authService: AuthService,
    private toastService: ToastService,
    private companyService: CompanyService
  ) {

  }

  ngOnInit(): void {
    this.storageService.get(AuthConstants.MY_COMPANIES).then(value=>{
      if(value){
      this.filtered_listing = value;
      this.listing = value;
      this.loading = false;
      if(AuthConstants.DEV_MODE){
        console.log("Synced from Subject: "+JSON.stringify(value));
        //this.toastService.presentToast("Job areas list has been updated.");
      }}
    });
    this.fetchFreshList(false);
  }

  dismissModal(avatar?: CompanyModel) {
    this.modalController.dismiss(avatar);
  }

  selectionDone(data:any) {
    alert("Selecion: "+data);
    this.modalController.dismiss(data);
  }

  addToSelection(avatar?: CompanyModel){
    this.selectedArray.push(avatar);
  }


 /****************** SEARCH ITEMS ********************/
 initializeItems() {
  this.listing = this.filtered_listing;
}

 searchList() {
  this.initializeItems();
  return this.listing = this.listing.filter((thisJob) => {
    return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });
}
/****************** SEARCH ITEMS ********************/

fetchFreshList(showLoading: boolean){
  if(showLoading){this.loading = true;}
  this.authService.getAuthCache().then(results =>{
      if(results){
            
     this.companyService.getMyCompanies(results.api_key, {}).subscribe(
      (res: any) => {
        this.loading = false;
        if(AuthConstants.DEV_MODE){
          console.log("###### Companies List API Response: "+JSON.stringify(res));
        }
      if (res.error) {
        this.toastService.presentToast(res.message);
      } else {
        this.listing = res.items;
        this.loading = false;
        this.storageService.store(AuthConstants.MY_COMPANIES, res.items);  
      }
      },
      (error: any) => {
      this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
      },
      () => {
        // complete callback
       // this.loaderDismiss();
    }
      );
      }
  });
}

}
