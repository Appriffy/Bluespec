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
import { UploadDocumentPage } from '../upload-document/upload-document.page';
import { AuthConstants } from '../../../config/AuthConstants';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.page.html',
  styleUrls: [
    '../../../bluspecstyles/listing.page.scss',
    '../../../bluspecstyles/listing.shell.scss',
    '../../../bluspecstyles/listing.ios.scss',
    './list-documents.page.scss'
  ],
})
export class ListDocumentsPage implements OnInit {
  segmentValue = 'Pending';
  stateSubscription: Subscription;
  user_profile_id:any;
  loading:boolean=true;
  items: Array<UserDocumentModel>;
  backupItems: Array<UserDocumentModel>;
  localUser:LocalUser;
  adminModeView  = false;
  adminModeFullListing = false;
  selfView = false;
  constructor(public modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService,
    private toastService: ToastService,
    private userService: UserService) { }

  ngOnInit() {


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
          if(res. role_id == 1){
            this.adminModeView = true;
          }
         /********** THE CALLER ***********/
         this.userService.getUserDocumentDataSource(res.api_key, this.user_profile_id).subscribe(
          (results: any) => {
            this.loading = false; 
           if(results){
            //console.log("/********* DOC API RESPONSE *************/ "+JSON.stringify(results));
            if (!results.error) {
            this.items = results.result;
            this.backupItems = results.result;
            if(AuthConstants.DEV_MODE){
              this.toastService.presentToast("Updated "+this.items.length+" documents.");
              }
            this.userService.invokeDocListChangeEvent.next(results.result);
            } else {
              this.toastService.presentToast(results.message);
            }
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

  showDocDetailPage(qcode:any){
   if(this.adminModeFullListing){
    //this.router.navigate(['/people/documents/detail', qcode], {viewer:true});
    this.router.navigate(['people/documents/detail', qcode], { queryParams: { viewer: 1 } });
   }else{
    this.router.navigate(['/people/documents/detail', qcode]);
   }
  }

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;
    this.searchList();
  }

  searchList(): void {
     this.items = this.backupItems;
     if(this.adminModeFullListing){
      if (this.segmentValue === 'Pending') {
        this.items = this.filterList(this.items, "Pending");
      } else if (this.segmentValue === 'Approved') {
        this.items = this.filterList(this.items, "Approved");
      } else if (this.segmentValue === 'Rejected') {
        this.items = this.filterList(this.items, "Rejected");
      }
     }
   
    //console.log("Finding Left with "+this.items.length);
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
