import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStore, ShellModel } from '../../shell/data-store';
import { EducationDetailsModel, UserEducationListingModel } from './education-details.model';
import { ModalController } from '@ionic/angular';
import { Subscription, BehaviorSubject } from 'rxjs';
import { UpdateEducationDetailsModal } from './update/update-education-details.modal';
import { UserService } from '../user.service';
import { ToastService } from '../../services/toast.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { CreateEducationDetailsModal } from './create/create-education-details.modal';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss']
})
export class EducationDetailsPage implements OnInit {
  stateSubscription: Subscription;
  user_profile_id:any;
  loading:boolean=true;
  items: Array<EducationDetailsModel>;

  dataDebug:any;
  searchQuery = '';
  localUser:LocalUser;
  profilerUsername: string;

  constructor(public modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService,
    private toastService: ToastService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.userService.invokeEduListChangeEvent.subscribe(value => {
      this.items = value.items;
      this.profilerUsername = value.username;
      this.loading = false;
            if(AuthConstants.DEV_MODE){
              console.log("/***** SYNC DATA : "+JSON.stringify(value));
              this.toastService.presentToast(value.message);
              }
        });

    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      this.user_profile_id = this.localUser.id;
      /************ CHECK ROUTE PARAM REQUESTS ***************/
      this.route.paramMap.subscribe(params => {
      if(params && params.has("user_id")){
      this.user_profile_id = params.get("user_id");
      if(this.user_profile_id <= 0){
        this.router.navigate(['page-not-found']);
      }
    }
    });

    if(this.localUser.id !== this.user_profile_id){
      if(this.localUser.role_id !== 1){
        this.router.navigate(['unauthorized']);
      }
    }

    });

  }


  ionViewDidEnter(){
    console.log("/*****ionViewDidEnter : ");
    this.loadItems();
  }

  loadItems(){
        //FIND USER SESSION AND HIT API
        this.loading = true;
        this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
        if (res) {
         /********** THE CALLER ***********/
         this.userService.getEduDataSource(res.api_key, this.user_profile_id).subscribe(
          (res: any) => {
            console.log("/********* EDU DETAILS API RESPONSE *************/ "+JSON.stringify(res));
          if (!res.error) {
          //this.items = res.items;
          this.userService.invokeEduListChangeEvent.next(res);
          } else {
            this.toastService.presentToast(res.message);
          }
          },
          (error: any) => {
          this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
          },
          () => {  
            // complete callback
            
        }
          );
        /************ THE CALLER ***********/ 
        } else {
          this.toastService.presentToast("Invalid token. You are not authorized to make this request.");
        }
        })
        //END OF CALL 
  }

  async openAddEduDetailModal() {
    const modal = await this.modalController.create({
      component: CreateEducationDetailsModal,
      cssClass: "fullscreen-modal",
      componentProps: {
        'user_id': this.user_profile_id
      }
    });
    await modal.present();
  }

  async onEduItemSelected(item:EducationDetailsModel){
    const modal = await this.modalController.create({
      component: UpdateEducationDetailsModal,
      componentProps: {
        'user': item
      }
    });
    await modal.present();
  }


}
