import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStore, ShellModel } from '../../shell/data-store';
import { ModalController } from '@ionic/angular';
import { Subscription, BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { ToastService } from '../../services/toast.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';
import { UserWorkExperienceModel } from '../../dbmodels/user-work-experience.model';
import { CreateWorkExperiencesModal } from './create/create-work-experiences.modal';
import { UpdateWorkExperiencesModal } from './update/update-work-experiences.modal';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss'],
})
export class WorkExperiencesPage implements OnInit {
  stateSubscription: Subscription;
  user_profile_id:any;
  loading:boolean=true;
  items: Array<UserWorkExperienceModel>;
  selfView = false;
  dataDebug:any;
  searchQuery = '';
  localUser:LocalUser;
  totalExpInfo = "";

  constructor(public modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService,
    private toastService: ToastService,
    private userService: UserService) { 
	}

   ngOnInit(): void {
  //  this.route.data.subscribe(data =>{
  //    console.log("USING ANGULAR RESOLVERS:"+JSON.stringify(data));
  //    this.items = data.result;
  //    this.loading = false;
  //  });

  /*****************************
   this.route.data.subscribe((resolvedRouteData) => {
    const profileDataStore = resolvedRouteData['data'];
    console.log("USING ANGULAR RESOLVERS :"+JSON.stringify(profileDataStore));
    profileDataStore.state.subscribe(
      (state) => {
        this.items = state;
      },
      (error) => {}
    );
  },
  (error) => {});
  ****************************/

    this.userService.invokeWorkExperienceListChangeEvent.subscribe(value => {
      if(value != null && value !== undefined){
        this.items = value.result;
        this.totalExpInfo = value.totalExperience;
        this.loading = false;
            if(AuthConstants.DEV_MODE){
              console.log("/***** SYNC DATA : "+JSON.stringify(value));
              this.toastService.presentToast("Note: "+value.message);
            }
      }
    });
 
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      this.user_profile_id = this.localUser.id;
      this.route.paramMap.subscribe(params => {
     if(params && params.has("user_id")){
    this.user_profile_id = params.get("user_id");
    if(this.user_profile_id <= 0){
      this.router.navigate(['page-not-found']);
    }
     //Validate the Permissions
   if(this.localUser.id !== this.user_profile_id){
    if(this.localUser.role_id !== 1){
      this.router.navigate(['unauthorized']);
    }
  }else{
        this.selfView = true;
  }
  }
  });
  this.loadItems();
    });

  }


  ionViewDidEnter(){
    this.loadItems();
  }

  loadItems(){
        //FIND USER SESSION AND HIT API
        this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
        if (res) {
         /********** THE CALLER ***********/
         this.userService.getWorkExperienceDataSource(res.api_key, this.user_profile_id).subscribe(
          (results: any) => {
           if(results){
            //console.log("/********* DETAILS API RESPONSE *************/ "+JSON.stringify(results));
            if (!results.error) {
            this.userService.invokeWorkExperienceListChangeEvent.next(results);
            } else {
              this.toastService.presentToast(results.message);
            }
           }
          },
          (error: any) => {
          this.toastService.presentToast('Looks like there is a Network Issue.');
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

  async openAddItemModal() {
    const modal = await this.modalController.create({
      component: CreateWorkExperiencesModal,
      cssClass: "fullscreen-modal",
      componentProps: {
        'user_id': this.user_profile_id
      }
    });
    await modal.present();
  }

  async onItemSelected(item:UserWorkExperienceModel){
    const modal = await this.modalController.create({
      component: UpdateWorkExperiencesModal,
      componentProps: {
        'user': item
      }
    });
    await modal.present();
  }


}
