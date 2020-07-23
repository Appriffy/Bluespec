import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController, ModalController } from '@ionic/angular';
import { MasterService } from '../../../services/master.service';
import { ToastService } from '../../../services/toast.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { JobAreaModel } from '../../../dbmodels/job-areas';
import { JobAreasService } from '../job-areas.service';
import { CreateJobAreaModal } from '../create/create-job-area.modal';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';
import { Observable } from 'rxjs';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-job-areas',
  templateUrl: './job-areas.page.html',
  styleUrls: ['../../../bluspecstyles/listing.page.scss',
  '../../../bluspecstyles/listing.shell.scss',
  '../../../bluspecstyles/listing.ios.scss',
  '../../../bluspecstyles/details.page.scss',
  '../../../bluspecstyles/details.shell.scss']
})
export class JobAreasPage implements OnInit {

  listing: Array<JobAreaModel>;
  filtered_listing: Array<JobAreaModel>;
  searchQuery: string;
  loading : boolean = true;
  localUser:LocalUser;

  constructor(public navCtrl: NavController, private toastService: ToastService,
    private jobSkillsService: JobAreasService,
    private modalController:ModalController,
    private authService: AuthService,
    private storageService: StorageService) {
      //Lazy people dont need updated data
      //this.localUser = authService.peekProfile();

      //Rocking components need to watch values
      // this.localUser$ = authService.watchProfile();
      // this.localUser$.subscribe(fetchedUser=>{
      //   this.localUser = fetchedUser;
      //   //alert("Got it done!!! ");
      //   console.log("/***** REACTIVE WAY *****/ Local user is updated via the Active Subscription: "+JSON.stringify(this.localUser));
      // });

      // this.authService.getAuthData().subscribe(authData=>{
      //   this.localUser = authData;
      // });

      //this.localUser = this.authService.getAuthData();



      this.authService.getAuthCache().then(promisedValue=>{
        this.localUser = promisedValue;
        if(AuthConstants.DEV_MODE){
          console.log("/***** User Ready with Auth => ****/: "+this.localUser.id);
        }
      });
  }

 
  ngOnInit(): void {
    this.jobSkillsService.invokeListChangeEvent.subscribe(value => {
      this.filtered_listing = value;
      this.listing = value;
      this.loading = false;
            if(AuthConstants.DEV_MODE){
              console.log(" @@@@@@@@@@ Synced from Subject: "+JSON.stringify(value));
              this.toastService.presentToast("Job areas list has been updated.");
              }
        });



        
        // this.liveJobAreas = this.jobSkillsService.watchProfile();
        // this.liveJobAreas.subscribe(fetchedUser=>{
        //   this.listing = fetchedUser;
        //   this.filtered_listing = fetchedUser;
        //   this.loading = false;
        //   this.toastService.presentToast("Wooahhh! List Synced."+JSON.stringify(fetchedUser));
      
        //   console.log("/***** THE FINAL REACTIVE WAY *****/ "+JSON.stringify(fetchedUser));
        // });
  
  }

  ngOnDestroy():void{
    if(AuthConstants.DEV_MODE){
    console.log("Unsubscribed from invokeListChangeEvent ");
    }
    this.jobSkillsService.invokeListChangeEvent.unsubscribe();
  }


  ionViewDidEnter(){
      this.jobSkillsService.getListingDataSource();
  }

  loadItems(){
    //this.loading = true;
    //Implement No Disturb Loading
    if(this.listing.length <= 0){
      this.loading = true;
    }
    this.jobSkillsService.getListingDataSource();
  }

  initializeItems() {
    this.listing = this.filtered_listing;
  }

 /****************** SEARCH ITEMS ********************/
 searchList() {
  this.initializeItems();
  return this.listing = this.listing.filter((thisJob) => {
  return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });
}
/****************** SEARCH ITEMS ********************/

  async openCreateItemModal() {
    const modal = await this.modalController.create({
      component: CreateJobAreaModal,
      cssClass: 'fullscreen-modal-css'
    });
    await modal.present();
  }

}
