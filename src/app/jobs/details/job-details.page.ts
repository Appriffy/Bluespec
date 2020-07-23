import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { ModalController } from '@ionic/angular';
import { WalkthroughPage } from '../../walkthrough/walkthrough.page';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { JobItemModel } from '../../dbmodels/jobs-listing.model';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';
import { JobService } from '../jobs.service';
import { AuthConstants } from '../../config/AuthConstants';
import { AcceptJobFormPage } from '../accept-job-form/accept-job-form.page';

@Component({
  selector: 'app-deals-details',
  templateUrl: './job-details.page.html',
  styleUrls: [
    './styles/deals-details.page.scss',
    './styles/deals-details.shell.scss'
  ]
})
export class JobDetailsPage implements OnInit {
  localUser:LocalUser;
  job_code:any;
  loading:boolean = false;
  details: JobItemModel;
  selfView:boolean = false;
  adminMode:boolean = false;

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  @ViewChild(GoogleMapComponent, { static: true }) _GoogleMap: GoogleMapComponent;
  map: google.maps.Map;
  //mapOptions: google.maps.MapOptions;

  mapOptions: google.maps.MapOptions = {
    zoom: 15,
    center: {lat: -34.9199842, lng: -56.149849}
  };

  constructor(public router: Router, private route: ActivatedRoute, private toastService: ToastService, 
    private authService:AuthService,
    private jobService: JobService,
    private modalController: ModalController) { }

  ngOnInit(): void {
    /*********** THE ROUTE WAY *************/
    this.route.data.subscribe((resolvedRouteData) => {
      const detailsDataStore = resolvedRouteData['data'];
      //console.log("Resolved => "+JSON.stringify(detailsDataStore));
      detailsDataStore.state.subscribe(
        (state) => {
          this.details = state.item;
          console.log("Resolver Finally Resolved => "+JSON.stringify(state));
         
          this.authService.getAuthCache().then(promisedValue=>{
            if(promisedValue){
            this.localUser = promisedValue;
            if(this.localUser.id == this.details.user_id){
              this.selfView = true;
              if(AuthConstants.DEV_MODE){
                this.toastService.presentToast(this.localUser.id+" is viewing post of "+this.details.user_id);
              }
             }

             if(this.details.latitude !== undefined && this.details.longitude !== undefined){
              //console.log("Resolved Latitude => "+this.details.latitude);
              this.mapOptions = {
                zoom: 15,
                center: {lat: this.details.latitude, lng: this.details.longitude}
              };
             }

            }else{
                  this.toastService.presentToast("Looks like you are not logged in.");
                  this.authService.logout();
                }
               });

         

        },
        (error) => {}
      );
    },
    (error) => {});
/***************************************/


this.job_code = this.route.snapshot.params.job_code;
console.log("Resolved jobCode => "+this.job_code);


this.authService.getAuthCache().then(promisedValue=>{
  if(promisedValue){
  this.localUser = promisedValue;
  if(this.localUser.role_id === 1){
    this.adminMode = true;
  }
}});


//this.refreshJobRequest();
/************ NON ROUTED DATA FETCH SYSTEM **************
  this.authService.getAuthCache().then(promisedValue=>{
  if(promisedValue){
  this.localUser = promisedValue;
   this.route.paramMap.subscribe(params => {
  if(params.get("job_code")){
    this.job_code = params.get("job_code");
    if(this.localUser.user_name == this.localUser.user_name){
      this.selfView = true;
      if(AuthConstants.DEV_MODE){
        this.toastService.presentToast(this.localUser.user_name+" is viewing post of "+this.localUser.user_name);
      }
     }
     if(this.localUser.role_id === 1){
       this.adminMode = true;
     }
  }
  this.refreshJobRequest();
  });
      }else{
        this.toastService.presentToast("Looks like you are not logged in.");
        this.authService.logout();
      }
     });
  *********** NON ROUTED DATA FETCH SYSTEM ***************/
  }



  ngAfterViewInit(): void {
    //Map Works
    //this.initMap();
  }

  initMap(){
    if(this._GoogleMap !== undefined && this._GoogleMap !== null){
      this._GoogleMap.$mapReady.subscribe(map => {
        this.map = map;
      });
    }else{
      this.toastService.presentToast("Map view not found.");
    }
  }
  
  createMarker() {
     var myLatLngList = {
         myLatLng : [{ lat: 37.76487, lng: -122.41948 }, { lat: 59.33555, lng: 18.029851 }]    
         };

        //iterate latLng and add markers 
       for(const data of myLatLngList.myLatLng){
         var marker = new google.maps.Marker({
             position: data,
             map: this.map,
             title: 'markers'
         });
      }
 }

  refreshJobRequest(){
    this.loading = true;
     this.authService.getAuthCache().then(authData=>{
       if(authData){
        const postData = { 'qcode':this.job_code};
        
         this.jobService.getJobRequestDetailDataSource(authData.api_key, this.job_code).subscribe(
          (res: any) => {
          if (!res.error) {
            if(AuthConstants.DEV_MODE){
              console.log("JOB SYNC :: "+JSON.stringify(res));
            }
          this.details = res.item;
          //console.log("Resolved Latitude => "+this.details.latitude);
          if(this.details.latitude !== undefined && this.details.longitude !== undefined){
            //console.log("Resolved Latitude => "+this.details.latitude);
            this.mapOptions = {
              zoom: 15,
              center: {lat: this.details.latitude, lng: this.details.longitude}
            };
            this.initMap();
            this.createMarker();
           }
          this.loading = false;

          this.jobService.hitJobViewsAPI(this.localUser.api_key, {job_id:this.details.id}).subscribe((viewResponse: any) => {
            if (!viewResponse.error) {
            this.toastService.presentToast(viewResponse.message);
            }});

          }else{
            this.toastService.presentToast(res.message);
          }
          },
          (error: any) => {
          this.toastService.presentToast('Looks like there is a Network Issue while fetching job post.');
          }
          );
       }
     });
    }


  acceptJob(){
    this.openItemUpdateModal();
  }

  async openItemUpdateModal() {
    const modal = await this.modalController.create({
      component: AcceptJobFormPage,
      componentProps: {
        'job': this.details
      }
    });

    modal.onDidDismiss().then(item => {
      this.refreshJobRequest();
      if (item.data != null) {
        this.toastService.presentToast(item.data);
      }
    });
    await modal.present();
  }

  rejectJob(){
    this.toastService.presentToast("Feature coming soon");
  }

  async startChat(){
    const modal = await this.modalController.create({
      component: WalkthroughPage,
      cssClass: 'fullscreen-modal-css'
    });
    await modal.present();
  }

  goToJobApplicationForm(){
    this.router.navigate(['accept-job-form']);
    //this.navCtrl.push(PersonalProfilePage, {}, {animate:true, direction:'back'});
    //this.navCtrl.navigateBack('personal-profile');
  }

}
