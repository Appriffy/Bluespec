import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { UserProfileModel } from './user-profile.model';
import { AuthConstants } from '../../config/AuthConstants';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UserService,
    private storageService: StorageService,
    private authService: AuthService) {
  }

  async resolve(route: ActivatedRouteSnapshot) {
    let authDataVal = await this.storageService.get(AuthConstants.AUTH);
    //console.log("JobApplicationsManagerResolver authDataVal => "+JSON.stringify(authDataVal));
    let user_id: any = route.params['user_id'];
    let apiKey = authDataVal.api_key;
    const dataSource: Observable<UserProfileModel> = this.userService.getProfileDataSource(apiKey, user_id);
    const dataStore: DataStore<UserProfileModel> = this.userService.getProfileStore(dataSource);

    return dataStore;
  }
}
