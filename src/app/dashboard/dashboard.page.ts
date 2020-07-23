import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UserService } from '../user/user.service';
import { MasterService } from '../services/master.service';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { AuthConstants } from '../config/AuthConstants';
import { StorageService } from '../services/storage.service';
import { DashboardItem } from '../dbmodels/dashboard_item';
import { LocalUser } from '../dbmodels/local-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
localUser: LocalUser;
dashboardSummaryList: any;
last_updated:any;

  constructor(public menu: MenuController,
    private route: ActivatedRoute, private modalController: ModalController,
    public alertController: AlertController,
    private storageService: StorageService,
    public firebaseService: UserService,
    private authService: AuthService,
    public toastService:ToastService,
    public loadingController: LoadingController,
    public router: Router) { 
   
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.authService
    .getAuthCache()
    .then(res => {
    if (res) {
      //this.userDataDebug = JSON.stringify(this.localUser);
      if(res === null || res === undefined){
        this.router.navigate(["unauthorized"]);
      }else{          
        this.localUser = res;
        switch (this.localUser.role_id) {
          case 1: 
            break;
        
            case 2: 
            this.router.navigate(["dashboard-summary"]);
            //this.router.navigate(["dashboard/summary"]);
            break;

            case 3:
              this.router.navigate(["welcome"]); 
            break;

          default:
            break;
        }
      }
    } else {
      this.authService.logout();
    }
    });

    //this.getDataSummaryForDashboard();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
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


  getDataSummaryForDashboard(){
    this.presentLoadingWithOptions();
    this.authService.getAuthKey().then(apiKey=>{
      this.firebaseService.fetchMyDashboard(apiKey)
      .subscribe(
        (res: any) => {
          this.loadingController.dismiss();
          this.dashboardSummaryList = res.items;
          this.last_updated = new Date().getDate();
          //if(res.summary){
            //alert(JSON.stringify(res.summary));
          //}
          //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
          //this.toastService.presentToast(JSON.stringify(res));
          //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
          this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, res.items);
          this.storageService.store(AuthConstants.DASHBOARD_STATS_SUMMARY_CACHE, res.summary);
          console.log('#### Result Received and Saved ##### '+JSON.stringify(res.summary));
         
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

}
