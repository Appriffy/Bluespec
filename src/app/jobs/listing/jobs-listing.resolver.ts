import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { JobService } from '../jobs.service';
import { JobListingModel } from '../../dbmodels/jobs-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class JobListingResolver implements Resolve<any> {
   dataSource: Observable<JobListingModel>;
   dataStore : DataStore<JobListingModel>;
  constructor(private dealsService: JobService, private authService: AuthService) {}

  resolve() {
    this.authService.getAuthCache().then(results =>{
      if(results){
        let postData = {
          user_id: results.id
        }
        this.dataSource = this.dealsService.getListingDataSource(results.api_key, postData);
      }
    });
     this.dataStore = this.dealsService.getListingStore(this.dataSource);
    return this.dataStore;
  }
}
