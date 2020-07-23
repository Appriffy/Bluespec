import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { UserEducationListingModel, EducationDetailsModel } from './education-details.model';

@Injectable()
export class EducationDetailsResolver implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve() {
    //const dataSource: Observable<Array<EducationDetailsModel>> = this.userService.getEduDataSource();
    //const dataStore: DataStore<Array<EducationDetailsModel>> = this.userService.getEduStore(dataSource);
    //return dataStore;


  //   this.storageService
  //   .get(AuthConstants.AUTH)
  //   .then(res => {
  //   if (res) {
  //     const dataSource: Observable<Array<EducationDetailsModel>> = this.userService.getEduDataSource(res.api_key);
  //     const dataStore: DataStore<Array<EducationDetailsModel>> = this.userService.getEduStore(dataSource);


  //     return dataStore;
  //   }
  // });
  }
}
