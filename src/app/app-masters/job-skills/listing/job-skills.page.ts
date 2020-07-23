import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController, ModalController } from '@ionic/angular';
import { MasterService } from '../../../services/master.service';
import { ToastService } from '../../../services/toast.service';
import { AuthConstants } from '../../../config/AuthConstants';
import { JobSkillsService } from '../job-skills.service';
import { JobSkillModel } from '../../../dbmodels/job-skill.model';
import { CreateJobSkillModal } from '../create/create-job-skill.modal';
import { AuthService } from '../../..//services/auth.service';
import { LocalUser } from '../../..//dbmodels/local-user';

@Component({
  selector: 'app-job-skills',
  templateUrl: './job-skills.page.html',
  styleUrls: ['../../../bluspecstyles/listing.page.scss',
  '../../../bluspecstyles/listing.shell.scss',
  '../../../bluspecstyles/listing.ios.scss'],
})
export class JobSkillsPage implements OnInit {

  listing: Array<JobSkillModel>;
  filtered_listing: Array<JobSkillModel>;
  searchQuery: string;
  loading : boolean = true;

  localUser:LocalUser;

  constructor(public navCtrl: NavController, private toastService: ToastService,
    private jobSkillsService: JobSkillsService,
    private modalController:ModalController,
    private authService: AuthService) {
      this.authService.getAuthCache().then(promisedValue=>{
        this.localUser = promisedValue;
        if(AuthConstants.DEV_MODE){
          console.log("/***** User Ready with Auth => ****/: "+this.localUser.id);
        }
      });
  }

 
  ngOnInit(): void {
    //Subscribe to any auth changes event
   this.jobSkillsService.invokeListChangeEvent.subscribe(value => {
    this.filtered_listing = value;
        this.listing = value;
        this.loading = false;
        if(AuthConstants.DEV_MODE){
          console.log("Received from Subject: "+JSON.stringify(value));
          this.toastService.presentToast("Job skills has been updated.");
        }
        });

        //this.fetchItems();
        //this.jobSkillsService.getListingDataSource();
  }


  ionViewDidEnter(){
    //Subscribe to any auth changes event
    //console.log("ionViewDidEnter");
      //this.fetchItems();
      //this.jobSkillsService.getJobAreasFromLocalStorage();

      // this.storageService.get(AuthConstants.JOB_SKILLS).then(response=>{
      //   if(response){
      //     if(AuthConstants.DEV_MODE){
      //   console.log('########## LOCAL SYNC SUCCESSFUL ionViewDidEnter #####: '+JSON.stringify(response));
      //     }
      //  this.listing = response;
      //  this.filtered_listing = response;
      //    }
      //   });
      this.jobSkillsService.getListingDataSource();
  }

  fetchItems(){
    //this.loading = true;
    //Implement No Disturb Loading
    if(this.listing.length <= 0){
      this.loading = true;
    }
    this.jobSkillsService.getListingDataSource();
  }

  loadItems(){
    //let timeCurrent = Math.floor(Date.now() / 1000);
    this.fetchItems();
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
      component: CreateJobSkillModal,
      cssClass: 'fullscreen-modal-css'
    });
    await modal.present();
  }

}
