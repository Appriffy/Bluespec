import { Component, OnInit, HostBinding } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { JobAreaDetailModel } from '../../../dbmodels/job-areas';
import { JobAreasService } from '../job-areas.service';
import { UpdateJobAreaModal } from '../update/update-job-area.modal';
import { LocalUser } from '../../../dbmodels/local-user';
import { AuthService } from '../../../services/auth.service';
import { AuthConstants } from '../../../config/AuthConstants';

@Component({
  selector: 'app-job-areas-details',
  templateUrl: './job-areas-details.page.html',
  styleUrls: [
    '../../../bluspecstyles/details.page.scss',
    '../../../bluspecstyles/details.shell.scss'
  ],
})
export class JobAreasDetailsPage implements OnInit {
  user: JobAreaDetailModel;
  item_id:any;
  localUser:LocalUser;
  
 // relatedUsers: Array<FirebaseListingItemModel> & ShellModel;
  @HostBinding('class.is-shell') get isShell() {
    return ((this.user && this.user.isShell)) ? true : false;
  }

  constructor(
    public firebaseService: JobAreasService,
    private authService: AuthService,
    public modalController: ModalController,
    public router: Router,
    private route: ActivatedRoute
  ) { }


  ionViewDidEnter(){
    //Subscribe to any auth changes event
    console.log("ionViewDidEnter");
    //this.firebaseService.getListingDataSource();
  }

  ngOnInit() {
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      console.log("/***** JUST ASKED LOCAL STORAGE : "+JSON.stringify(promisedValue));
    });

    this.firebaseService.invokeItemUpdatedEvent.subscribe(value => {
      this.user = value;
            if(AuthConstants.DEV_MODE){
              console.log(" @@@@@@@@@@ GREAT UPDATE SYNC "+JSON.stringify(value));
              }
        });
    
      this.route.paramMap.subscribe(params => {
        this.item_id = params.get("id");
        //alert(this.item_id);
        if(this.item_id <= 0){
          this.router.navigate(['page-not-found']);
        }
        });

   
    var postData = {
      item_id: this.item_id,
      sort_by: 0
      };

     this.firebaseService.getDetailsDataSource(postData).subscribe(
      (res: any) => {
        console.log("Job Skill Profile: "+JSON.stringify(res)); 
      this.user = res;
      console.log("Job Skill Profile: "+this.user);
      if (res.error) {
        this.router.navigate(['page-not-found']);
      }
      },
      (error: any) => {
      console.log('Looks like there is a Network Issue.');
      }
      );
      console.log("Done fetching Job Skills.");
  }

  // ionViewDidEnter(){
  //   //Subscribe to any auth changes event
  //   //console.log("ionViewDidEnter");
  //     this.firebaseService.getListingDataSource();
  // }

  async openItemUpdateModal() {
    const modal = await this.modalController.create({
      component: UpdateJobAreaModal,
      componentProps: {
        'user': this.user
      }
    });
    await modal.present();
  }

}
