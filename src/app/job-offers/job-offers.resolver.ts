import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../shell/data-store';
import { JobOfferModel } from '../dbmodels/job-offer-model';
import { JobOffersService } from './job-offers.service';

@Injectable()
export class JobOffersResolver implements Resolve<any> {

 postData = {
        role_id: 0,
        sort_by: 0,
        };

  constructor(private userService: JobOffersService) {}
  resolve() {
    const dataSource: Observable<Array<JobOfferModel>> = this.userService.getListingDataSource(this.postData);
    const dataStore: DataStore<Array<JobOfferModel>> = this.userService.getListingStore(dataSource);
    return dataStore;
  }
}
