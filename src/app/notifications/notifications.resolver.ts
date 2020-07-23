import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { NotificationsService } from './notifications.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NotificationsResolver implements Resolve<any> {

  constructor(private notificationsService: NotificationsService, private authService: AuthService) { }

  resolve() {
    // Base Observable (where we get data from)
    this.authService.getAuthCache().then(authData=>{
      if(authData){
        const dataObservable = this.notificationsService.getData(authData.api_key);
    return { source: dataObservable };
      }
    });
  }
}
