import { Component, OnInit, HostBinding } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDetailModel } from '../../dbmodels/company-model';
import { CompanyService } from '../companies.service';
import { UpdateCompanyModal } from '../update/update-company.modal';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthService } from '../../services/auth.service';
import { AuthConstants } from '../../config/AuthConstants';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: [
    '../../bluspecstyles/details.page.scss',
    '../../bluspecstyles/details.shell.scss'
  ],
})
export class CompanyDetailsPage implements OnInit {
  user: CompanyDetailModel;
  company_id:any;
  localUser: LocalUser;
  selfView : boolean = false;
 // relatedUsers: Array<FirebaseListingItemModel> & ShellModel;
  @HostBinding('class.is-shell') get isShell() {
    return ((this.user && this.user.isShell)) ? true : false;
  }

  constructor(
    public firebaseService: CompanyService,
    public modalController: ModalController,
    private authService: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.company_id = params.get("id");
        if(this.company_id <= 0){
          this.router.navigate(['page-not-found']);
        }});

        var postData = {
          company_id: this.company_id
        };

        this.authService.getAuthCache().then(promisedValue=>{
          this.localUser = promisedValue;
          this.fetchCompanyDetail(this.localUser.api_key, postData);
        });
  }


  fetchCompanyDetail(apiKey:any, postData: any){
    this.firebaseService.getDetailsDataSource(apiKey, postData).subscribe(
      (res: any) => {
      if(res){
      this.user = res;
      //alert(this.user.user_id+" and "+this.localUser.id);
      //this.user !== undefined && 
      if(this.user.user_id == this.localUser.id){
        //alert(JSON.stringify(this.user));
        this.selfView = true;
      }
      if(AuthConstants.DEV_MODE){
        console.log("Company Detail Profile: "+JSON.stringify(this.user)); 
      }
      if (res.error) {
        this.router.navigate(['page-not-found']);
      }
      }
      },
      (error: any) => {
      console.log('Looks like there is a Network Issue.');
      });
  }

  async openItemUpdateModal() {
    const modal = await this.modalController.create({
      component: UpdateCompanyModal,
      componentProps: {
        'user': this.user
      }
    });
    await modal.present();
  }

}
