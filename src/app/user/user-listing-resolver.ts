import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../shell/data-store';
import { UserService } from './user.service';
import { UserProfileModel } from './profile/user-profile.model';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserListingResolver implements Resolve<any> {
apiKey:any;
postData = {
        role_id: 0,
        sort_by: 0,
        };

constructor(private userService: UserService, private authService: AuthService) {
    authService.getAuthKey().then(result=>{
      this.apiKey = result;
    });
  }
  
  resolve() {
    const dataSource: Observable<Array<UserProfileModel>> = this.userService.getListingDataSource(this.apiKey, this.postData);
    const dataStore: DataStore<Array<UserProfileModel>> = this.userService.getListingStore(dataSource);
    return dataStore;
  }
}
