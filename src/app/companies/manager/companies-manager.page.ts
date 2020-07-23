import { Component, OnInit, HostBinding } from '@angular/core';
import { CompanyListingModel, CompanyModel } from '../../dbmodels/company-model';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompanyService } from '../companies.service';
import { CreateCompanyModal } from '../create/create-company.modal';
import { ToastService } from '../../services/toast.service';
import { AuthConstants } from '../../config/AuthConstants';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-companies-manager',
  templateUrl: './companies-manager.page.html',
  styleUrls: [
    '../listing/styles/listing.page.scss',
    '../listing/styles/listing.shell.scss',
    '../listing/styles/company-listing.ios.scss',
    '../../bluspecstyles/listing.page.scss'
  ],
})
export class CompaniesManagerPage implements OnInit {
  listing: Array<CompanyModel>;
  loading : boolean = true;
  localUser: LocalUser;
  
  constructor(private companyService: CompanyService, 
    private route: ActivatedRoute, 
    private ngRouter: Router,
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService,
    private modalController: ModalController) {

  }

  ionViewWillEnter(){
      this.fetchFreshList(false);
  } 

  ngOnInit() {
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      if(AuthConstants.DEV_MODE){
        console.log("Local User: "+this.localUser.id);
      }
    });

    this.storageService.get(AuthConstants.MY_COMPANIES).then(companies=>{
      if(companies){
         if(companies.length > 0){
            this.listing = companies;
            this.loading = false;
         }
      }
    });
  }

   loadCompanies(){
    this.fetchFreshList(true);
  }

  async createNewCompany(){
    //this.ngRouter.navigate(['create-company']);
    const modal = await this.modalController.create({
      component: CreateCompanyModal,
      cssClass: 'fullscreen-modal-css'
    });
    await modal.present();
  }

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
