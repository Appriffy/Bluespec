import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot  } from '@angular/router';
import { JobService } from '../jobs.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { JobListingModel, JobItemModel } from '../../dbmodels/jobs-listing.model';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';

@Injectable()
export class JobDetailsResolver implements Resolve<any> {
  apiKey:any;
  userID:any = 0;

  constructor(private dealsService: JobService, 
    private storageService: StorageService, 
    private authService: AuthService) {
  }

  async resolve(route: ActivatedRouteSnapshot) {
    let authDataVal = await this.storageService.get(AuthConstants.AUTH);
    //console.log("JobApplicationsManagerResolver authDataVal => "+JSON.stringify(authDataVal));
    let jobCode: any = route.params['job_code'];
    console.log("JobApplicationsManagerResolver jobCode Resolved => "+jobCode);
    let apiKey = authDataVal.api_key;
    console.log("JobApplicationsManagerResolver apiKey Resolved => "+apiKey);
    let postData = {job_id : jobCode};
  
    const dataSource: Observable<JobItemModel> = this.dealsService.getJobRequestDetailDataSource(apiKey, jobCode);
    const dataStore:DataStore<JobItemModel> = this.dealsService.getDetailsStore(dataSource);
    return dataStore;
  }
}
