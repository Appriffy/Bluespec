import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from './notifications.service';
import { AuthConstants } from '../config/AuthConstants';
import { AuthService } from '../services/auth.service';
import { LocalUser } from '../dbmodels/local-user';
import { MenuController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: [
    './styles/notifications.page.scss',
    './styles/notifications.shell.scss'
  ]
})
export class NotificationsPage implements OnInit {
  notifications: any;
  localUser: LocalUser;
  loading = true;
  constructor(private route: ActivatedRoute, 
    public menu: MenuController,
    private authService: AuthService,
    private toastService: ToastService,
    private notiService: NotificationsService) { }

  ngOnInit(): void {
    if (this.route && this.route.data) {
      this.route.data.subscribe(resolvedData => {
        const dataSource = resolvedData['data'];
        if (dataSource) {
          dataSource.source.subscribe(pageData => {
            if (pageData) {
              this.notifications = pageData.result;
              this.loading = false;
            }
          });
        }
      });
    }

    this.notiService.invokeListChangeEvent.subscribe(value => {
      this.notifications = value;
      this.loading = false;
      
            if(AuthConstants.DEV_MODE){
              console.log("Notifier Subject Sync: "+JSON.stringify(value));
              }
        });

  }

  ionViewDidEnter(){
    //Subscribe to any auth changes event
    //console.log("ionViewDidEnter");
    if(!this.menu.isEnabled)
    this.menu.enable(true);
    this.authService.getAuthCache().then(authData=>{
      if(authData){
        this.localUser = authData;
        //this.notiService.getData(this.localUser.api_key);
        this.loadItems();
      }
    });
  }

  loadItems(){
    this.loading = true;
    this.notiService.getData(this.localUser.api_key).subscribe(
      (res: any) => {
        if (!res.error) {
      console.log("Notifier API Response: "+JSON.stringify(res));
    // this.notifications = res.result;
     this.notiService.invokeListChangeEvent.next(res.result);
     this.toastService.presentToast(res.message);
      }
      },
      (error: any) => {
      alert('Looks like there is a Network Issue while fetching notifications.');
      }
      );
     /******** ENDS FETCH *******/     
  }


}
