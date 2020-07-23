import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserProfileModel } from './user-profile.model';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { LocalUser } from '../../dbmodels/local-user';
import { UpdateUserModal } from '../update/update-user.modal';
import { CreateEducationDetailsModal } from '../education-details/create/create-education-details.modal';
import { ChangeProfileStatusModal } from './change-profile-status/change-profile-status.modal';
import { ChangeProfileDescriptionModal } from './change-profile-description/change-profile-description.modal';
import { UpdateUserProfileModal } from '../update-user/update-user-profile.modal';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: [
    './styles/user-profile.page.scss',
    './styles/user-profile.shell.scss',
    './styles/user-profile.ios.scss',
    './styles/user-profile.md.scss'
  ],
})
export class UserProfilePage implements OnInit {
  profile: UserProfileModel;
  api_key : string;
  user_profile_id: any = "";
  selfView:boolean = true;
  adminMode = false;
  loading:boolean = true;

  //For Permission Usage
  localUser : LocalUser;
  //localUser : any;
  completenessScore:number = 100;
  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    public ngRouter: Router,
    public menu: MenuController,
    public toastService: ToastService,
    public alertController: AlertController,
    private modalController: ModalController,
    private authService: AuthService,
    private storageService: StorageService
  ) { 
     
  }

  async ngOnInit(): Promise<void> {
    this.authService.getAuthCache().then(promisedValue=>{
      if(promisedValue){
       this.localUser = promisedValue;
       this.user_profile_id = this.localUser.user_name;
       console.log("/***** PROFILE PAGE LOCAL USER : "+JSON.stringify(promisedValue));
/************ CHECK ROUTE PARAM REQUESTS ***************/
this.route.paramMap.subscribe(params => {
  if(params.get("user_id")){
    this.user_profile_id = params.get("user_id");
    if(this.user_profile_id != this.localUser.user_name){
      this.selfView = false;
     }
     if(this.localUser.role_id === 1){
       this.adminMode = true;
     }
    // alert("YYY"+this.localUser.role_id);
  }
  this.hitProfileAPI();
  });
  
  /************ CHECK ROUTE PARAM REQUESTS ***************/
      }else{
        this.toastService.presentToast("Looks like you are not logged in.");
        this.authService.logout();
      }
     });
  }

  //WHY SO LENGTHY
  hitProfileAPI(){
    if(navigator.onLine){
    this.refreshFullProfile();
    }
  }
  
  refreshFullProfile(){
  this.loading = true;
   this.authService.getAuthCache().then(authData=>{
     if(authData){
      const postData = { 'user_id':this.user_profile_id};
      
       this.authService.getFullProfileFromServer(authData.api_key, postData).subscribe(
        (res: any) => {
        if (!res.error) {
          if(AuthConstants.DEV_MODE){
            console.log("PROFILE SYNC :: "+JSON.stringify(res));
          }
        this.profile = res.myProfile;
        this.loading = false;
        }else{
          this.toastService.presentToast(res.message);
        }
        },
        (error: any) => {
        this.toastService.presentToast('Looks like there is a Network Issue while fetching profile.');
        }
        );
     }
   });
  }

  ionViewDidEnter(){
    if(!this.menu.isEnabled){
      if(this.selfView){
        this.menu.enable(true);
      }
    }   
    this.hitProfileAPI();
  }

  async addNewEducationItem(){
    const modal = await this.modalController.create({
      component: CreateEducationDetailsModal,
      cssClass: "fullscreen-modal",
      componentProps: {
        'user_id': this.user_profile_id
      }
    });
    await modal.present();
  }

  async openItemUpdateModal() {
    let editUserProfile = {
      id: this.profile.id,
    first_name: this.profile.first_name,
    last_name: this.profile.last_name,
    status: this.profile.status,
    user_name: this.profile.user_name,
    mobile : this.profile.mobile,
    email : this.profile.email,
    address : this.profile.address,
    latitude : this.profile.latitude,
    longitude : this.profile.longitude,
    pincode : this.profile.pincode,
    role_id: this.profile.role_id,
    role_name: '',
    grafter_type: this.profile.grafter_type,
    grafter_type_name: '',
    city : this.profile.city,
    country: this.profile.country,
    api_key: '',
    date_created: '',
    user_image: this.profile.user_image,
    dob: this.profile.dob
    }
    if(AuthConstants.DEV_MODE){
      console.log("PASSING TO UPDATE::: "+JSON.stringify(editUserProfile));
    }
    const modal = await this.modalController.create({
      //component: UpdateUserModal,
      component: UpdateUserProfileModal,
      componentProps: {
        //'user': this.profile
        'user':editUserProfile
      }
    });
    await modal.present();
  }


  async openStatusDialog() {
    const modal = await this.modalController.create({
      component: ChangeProfileStatusModal,
      //cssClass: 'mini-modal',
      componentProps: {
        'userID': this.profile.id,
        'tagline': this.profile.tagline
      }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.profile.tagline = item.data;
        this.refreshFullProfile();
      }
    });
    await modal.present();
   }

   async openProfileDescDialog() {
    const modal = await this.modalController.create({
      component: ChangeProfileDescriptionModal,
      componentProps: {
        'userID': this.profile.id,
        'description': this.profile.description,
        'image': this.profile.user_image
      }
    });

    modal.onDidDismiss().then(item => {
      if (item.data != null) {
        this.profile.description = item.data;
        this.refreshFullProfile();
      }
    });
    await modal.present();
   }

}
