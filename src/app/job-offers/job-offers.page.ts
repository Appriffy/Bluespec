import { Component, OnInit } from '@angular/core';
import { JobOfferModel } from '../dbmodels/job-offer-model';
import { JobOffersService } from './job-offers.service';
import { ToastService } from '../services/toast.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.page.html',
  styleUrls: [
    './styles/job-offers.page.scss',
    './styles/job-offers.ios.scss',
    './styles/job-offers.shell.scss'
  ]
})
export class JobOffersPage implements OnInit {
  listingDataStore: Array<JobOfferModel>;
  items: Array<JobOfferModel>;
  constructor(public modalController: ModalController,
    private jobOffersService: JobOffersService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    //this.presentLoadingWithOptions();
          /******** FETCH ALL USERS *******/
          var postData = {
            job_id: 0,
            grafter_id: 0
            };
           this.jobOffersService.getListingDataSource(postData).subscribe(
            (res: any) => {
              this.loaderDismiss();
              //this.toastService.presentToast(JSON.stringify(res)); 
            if (!res.error) {
              //alert("Done Done !!!");
              //this.loadingCtrl.dismiss();
  
            // Storing the User data.
            //this.toastService.presentToast(JSON.stringify(res)); 
            //this.toastService.presentToast(res.message);
            this.listingDataStore = res.result;
            this.items = res.result;
           
            // this.listingDataStore = res;
            // this.items = res;
            } else {
              this.toastService.presentToast(res.message);
            }
            },
            (error: any) => {
              //this.loadingCtrl.dismiss();
              this.loaderDismiss();
            this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
            },
            () => {  
              // complete callback
              this.loaderDismiss();
          }
            );

  }


  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: 'Loading Job Offers...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async loaderDismiss(){
  await this.loadingCtrl.dismiss();
  }

}
