import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { JobService } from '../jobs.service';
import { UserJobModel } from '../../dbmodels/user-jobs-model';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { AuthConstants } from '../../config/AuthConstants';

@Injectable()
export class JobManagerResolver implements Resolve<any> {

  constructor(private userService: JobService,
    private storageService: StorageService,
    private authService: AuthService) {
      
    }

  async resolve() {
    let authDataVal = await this.storageService.get(AuthConstants.AUTH);
    let apiKey = authDataVal.api_key;
    const dataSource: Observable<UserJobModel> = this.userService.getJobManagerDataSource(apiKey);
    const dataStore: DataStore<UserJobModel> = this.userService.getJobManagerStore(dataSource);
    return dataStore;
  }
}
