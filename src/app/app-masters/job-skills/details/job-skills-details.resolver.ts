import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../../shell/data-store';
import { JobSkillsService } from '../job-skills.service';
import { JobSkillDetailModel } from '../../../dbmodels/job-skill.model';
import { AuthService } from '../../../services/auth.service';
import { LocalUser } from '../../../dbmodels/local-user';


@Injectable()
export class JobSkillDetailsResolver implements Resolve<any> {
  localUser: LocalUser;
  constructor(private firebaseService: JobSkillsService, private authService: AuthService) {
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      console.log("JobSkillDetailsResolver => "+JSON.stringify(this.localUser));
    });
  }

  // resolve(route: ActivatedRouteSnapshot) {
  //   //const userId = route.paramMap.get('item_id');
  //   const userId = route.paramMap.get('id');
  //   console.log("JobSkillDetailsResolver USERID => "+userId);
  //   const combinedUserDataSource: Observable<JobSkillDetailModel> = this.firebaseService
  //   .getDetailsDataSource(this.localUser.api_key, userId);

  //   const combinedUserDataStore: DataStore<JobSkillDetailModel> = this.firebaseService
  //   .getDetailsStore(combinedUserDataSource);

  //   return {user: combinedUserDataStore};
  // }

  resolve(route: ActivatedRouteSnapshot) {
    //const userId = route.paramMap.get('item_id');
    const userId = route.paramMap.get('id');
    console.log("JobSkillDetailsResolver USERID => "+userId);
    this.authService.getAuthCache().then(promisedValue=>{
      this.localUser = promisedValue;
      console.log("JobSkillDetailsResolver => "+JSON.stringify(this.localUser));

      const combinedUserDataSource: Observable<JobSkillDetailModel> = this.firebaseService
      .getDetailsDataSource(this.localUser.api_key, userId);
  
      const combinedUserDataStore: DataStore<JobSkillDetailModel> = this.firebaseService
      .getDetailsStore(combinedUserDataSource);
  
      return {user: combinedUserDataSource};
    });
  
  }
}
