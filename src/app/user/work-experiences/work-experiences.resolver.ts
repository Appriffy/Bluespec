import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { UserWorkExperienceModel } from '../../dbmodels/user-work-experience.model';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class WorkExperiencesResolver implements Resolve<any> {

  apiKey:any;
  userID:any = 0;

constructor(private userService: UserService, private authService: AuthService) {
    authService.getAuthCache().then(result=>{
      this.apiKey = result;
      this.userID = result.id;
    });
  }

  resolve(route: ActivatedRouteSnapshot) {

    // if(route.paramMap.has("id")){
    //   console.log("/******** USING ActivatedRouteSnapshot ID ********/"+route.paramMap.get("id"));
    // }
    // if(route.queryParams["user_id"]){
    //   console.log("/******** USING ActivatedRouteSnapshot @@ user_id ********/"+route.paramMap["user_id"]);
    // }

    if(route.paramMap.has("user_id")){
      this.userID = route.paramMap.get("user_id");
      console.log("/******** USING ActivatedRouteSnapshot user_id ********/"+this.userID+" => "+this.apiKey);
    }

    //console.log("/************** Resolver ActivatedRouteSnapshot *************** */"+route.url);
    const dataSource: Observable<Array<UserWorkExperienceModel>> = this.userService.getWorkExperienceDataSource(this.apiKey, this.userID);
    const dataStore: DataStore<Array<UserWorkExperienceModel>> = this.userService.getWorkExperienceStore(dataSource);
    return dataStore;
  }
}
