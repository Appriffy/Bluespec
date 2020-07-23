import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UserService } from '../../user/user.service';
import { MasterService } from '../../services/master.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { AuthConstants } from '../../config/AuthConstants';
import { StorageService } from '../../services/storage.service';
import { DashboardItem } from '../../dbmodels/dashboard_item';
import { LocalUser } from '../../dbmodels/local-user';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  dashboardSummaryList: any;
  localUser: LocalUser;
  last_updated:any;
  tabChoice = "total";
  constructor(public menu: MenuController,
    private route: ActivatedRoute, private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: UserService,
    private storageService: StorageService,
    public masterService: MasterService,
    private authService: AuthService,
    public toastService:ToastService,
    public loadingController: LoadingController,
    public router: Router) { 
   
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  segmentButtonClicked(ev) {
    //console.log('Segment button clicked', ev);
    this.tabChoice = ev.detail.value;
    console.log('Selected Choice: ', this.tabChoice);
  }

  ngOnInit() {
    //this.getDataSummaryForDashboard();
    this.authService
    .getAuthCache()
    .then(res => {
    if (res) {
      this.localUser = res;
    }
  }); 

    //Start with the stored Cache
    this.storageService
    .get(AuthConstants.DASHBOARD_SUMMARY_CACHE)
    .then(res => {
    if (res) {
      //this.userDataDebug = JSON.stringify(this.localUser);
      if(res === null || res === undefined){
        console.log("Null Cache => getDataSummaryForDashboard()");
        this.getDataSummaryForDashboard();
      }else{          
        console.log("Cache Exists => Escaped getDataSummaryForDashboard(): Saved: "+JSON.stringify(res));
        this.dashboardSummaryList = res;
      }
    } else {
      console.log("No Cache => getDataSummaryForDashboard()");
      this.getDataSummaryForDashboard();
    }
    });
  }

  getDataSummaryForDashboard(){
    this.presentLoadingWithOptions();
    this.authService.getAuthKey().then(apiKey=>{
      this.firebaseService.fetchMyDashboard(apiKey)
      .subscribe(
        (res: any) => {
          this.loadingController.dismiss();
          this.dashboardSummaryList = res.items;
          this.last_updated = new Date().getDate();
          //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
          //this.toastService.presentToast(JSON.stringify(res));
          //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
          this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, res.items);
          console.log('#### Result Received and Saved ##### '+JSON.stringify(res.items));
         
          if (res.error) {
            this.presentAlert(res.message); 
            } else {
              if(AuthConstants.DEV_MODE){
                this.toastService.presentToast("Debug Message: All is well.");
              }
            }

        },
        (error: any) => {
         this.loadingController.dismiss();
        this.presentAlert('Looks like there is a Network Issue.'+error.message);
        }
        );
       


    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  dismissModal() {
    this.modalController.dismiss();
   }

   private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return alert;
  }

}
