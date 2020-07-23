import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../../shell/data-store';
import { JobAreasService } from '../job-areas.service';
import { JobAreaDetailModel } from '../../../dbmodels/job-areas';


@Injectable()
export class JobAreasDetailsResolver implements Resolve<any> {

  constructor(private firebaseService: JobAreasService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.paramMap.get('item_id');

    const combinedUserDataSource: Observable<JobAreaDetailModel> = this.firebaseService
    .getDetailsDataSource(userId);

    const combinedUserDataStore: DataStore<JobAreaDetailModel> = this.firebaseService
    .getDetailsStore(combinedUserDataSource);

    return {user: combinedUserDataStore};
  }
}
