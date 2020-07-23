import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDocumentModel } from '../../../dbmodels/user-document.model';
import { LocalUser } from '../../../dbmodels/local-user';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { UserService } from '../../user.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { WorkReviewModel } from '../../../dbmodels/work-review-model';

@Component({
  selector: 'app-work-reviews',
  templateUrl: './work-reviews.page.html',
  styleUrls: [
    '../../../bluspecstyles/listing.page.scss',
    '../../../bluspecstyles/listing.shell.scss',
    '../../../bluspecstyles/listing.ios.scss',
    './work-reviews.page.scss'
  ],
})
export class WorkReviewsPage implements OnInit {
  segmentValue = 'Pending';
  stateSubscription: Subscription;
  user_profile_id:any;
  loading:boolean=true;
  items: Array<WorkReviewModel>;
  backupItems: Array<WorkReviewModel>;
  localUser:LocalUser;
  adminModeView  = false;
  adminModeFullListing = false;
  selfView = false;
  username = "";
  avgSummary = "";

  constructor(public modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService,
    private toastService: ToastService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.invokeReviewsListChangeEvent.subscribe(value => {
      if(value != null && value !== undefined){
        this.loading = false; 
        this.items = value.result;
        this.backupItems = value.result;
        this.username = value.username;
        this.avgSummary = value.avgSummary;
            if(AuthConstants.DEV_MODE){
              console.log("Fetched Work Reviews : "+JSON.stringify(value));
              this.toastService.presentToast("Note: "+value.message);
            }
      }
    });

    this.authService
        .getAuthCache()
        .then(res => {
        if (res) {
           this.localUser = res;
           this.route.paramMap.subscribe(params => {
            if(params && params.has("user_id")){
            this.user_profile_id = params.get("user_id");
            
            if(this.user_profile_id == this.localUser.id){
              this.selfView = true;
            }
            if(this.user_profile_id == "all" && this.localUser.role_id != 1){
              this.router.navigate(['unauthorized']);
            }else{
              if(this.user_profile_id <= 0){
                this.router.navigate(['page-not-found']);
              }
            }
            if(this.user_profile_id == "all"){
            this.adminModeFullListing = true;
            }
          } else {
            this.user_profile_id = this.localUser.id;
            this.selfView = true;
          }
          });
        }});
  }



  ionViewDidEnter(){
    this.loadItems();
  }

  loadItems(){
    this.loading = true;
        //FIND USER SESSION AND HIT API
        this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
        if (res) {
          if(res.role_id == 1){
            this.adminModeView = true;
          }
         /********** THE CALLER ***********/
         this.userService.getUserReviewsDataSource(res.api_key, this.user_profile_id).subscribe(
          (results: any) => {
           if(results){
            if (!results.error) {
            this.userService.invokeReviewsListChangeEvent.next(results);
            } else {
              this.toastService.presentToast(results.message);
            }
           }
          },
          (error: any) => {
            if(AuthConstants.DEV_MODE){
              this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
            }else{
              this.toastService.presentToast('Looks like there is a Network Issue.');
            }
          },
          () => {  
            if(AuthConstants.DEV_MODE){
              this.toastService.presentToast('Reviews fetch has been completed.');
            }
          }
          );
        /************ THE CALLER ***********/ 
        } else {
          this.toastService.presentToast("Invalid token. You are not authorized to make this request.");
        }
        })
        //END OF CALL 
  }

  showDocDetailPage(qcode:any){
   if(this.adminModeFullListing){
    //this.router.navigate(['/people/documents/detail', qcode], {viewer:true});
    this.router.navigate(['people/documents/detail', qcode], { queryParams: { viewer: 1 } });
   }else{
    this.router.navigate(['/people/documents/detail', qcode]);
   }
  }

  filterList(list, query): Array<any> {
    //console.log("Finding ALL  "+JSON.stringify(list));
    //console.log("Finding "+query+" among "+list.length);

    return list.filter(item => {
      console.log("Finding Comparing "+item.status+" and  "+query);
      return item.status.toLowerCase().includes(query.toLowerCase());
    });

    //return list.filter(item => item.status == query);
    //return list.filter(item => item.status.toLowerCase().includes(query.toLowerCase()));
  }

}
