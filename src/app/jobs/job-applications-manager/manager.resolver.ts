import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { JobService } from '../jobs.service';
import { JobApplicationsManagerModel } from '../../dbmodels/job-applications-manager-model';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class JobApplicationsManagerResolver implements Resolve<any> {

  constructor(private userService: JobService,
    private storageService: StorageService,
    private authService: AuthService) {
  }

  async resolve(route: ActivatedRouteSnapshot) {
    let authDataVal = await this.storageService.get(AuthConstants.AUTH);
    //console.log("JobApplicationsManagerResolver authDataVal => "+JSON.stringify(authDataVal));
    let jobCode: any = route.params['job_code'];
    let apiKey = authDataVal.api_key;
    //console.log("JobApplicationsManagerResolver apiKey => "+apiKey);
    let postData = {job_id : jobCode};
    const dataSource: Observable<JobApplicationsManagerModel> = this.userService.getJobApplicationsManagerDataSource(apiKey, postData);
    const dataStore: DataStore<JobApplicationsManagerModel> = this.userService.getJobApplicationsManagerStore(dataSource);

    return dataStore;
  }
}