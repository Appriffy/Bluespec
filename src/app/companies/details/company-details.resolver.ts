import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { CompanyService } from '../companies.service';
import { CompanyDetailModel } from '../../dbmodels/company-model';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class CompanyDetailsResolver implements Resolve<any> {
   
  constructor(private firebaseService: CompanyService, private authService: AuthService) {

  }
  
  //Error in Api key
  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.paramMap.get('company_id');
    var postData = {
      company_id: userId
      };
    const combinedUserDataSource: Observable<CompanyDetailModel> = this.firebaseService
    .getDetailsDataSource(userId, postData);

    const combinedUserDataStore: DataStore<CompanyDetailModel> = this.firebaseService
    .getDetailsStore(combinedUserDataSource);


    return {user: combinedUserDataStore};
  }
}
