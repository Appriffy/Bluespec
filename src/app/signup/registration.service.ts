import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/http.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { AuthConstants } from '../config/AuthConstants';
import { BluspecUserModel } from '../user/profile/user-profile.model';

@Injectable({
    providedIn: 'root'
  })
export class RegistrationService {
    invokeRegisteredEvent: Subject<any> = new Subject();
    constructor(private httpService: HttpService,
        private storageService: StorageService,
        private router: Router) { }
        

        async getCachedData(): Promise<BluspecUserModel> {
            try {
                const result =  await this.storageService
                .get(AuthConstants.REGISTER_CACHE);
                //console.log(result);
                return result;
            }
            catch(e) { console.log(e) }
        }

       setCachedData(cachedData:any): void {
          this.storageService.store(AuthConstants.REGISTER_CACHE, cachedData);
      }

    // public getCachedRegistrationData() :string {
    //      //FIND USER SESSION IN STORAGE
    // this.storageService
    // .get(AuthConstants.REGISTER_CACHE)
    // .then(res => {
    // if (res) {
    //     console.log("Registration service fetched cache: "+JSON.stringify(res));
    //   return JSON.stringify(res);
    //   //return res;
    // } else {
    //   return null;
    // }
    // });
    // return null;
    // //FIND USER SESSION IN STORAGE
    // }

}
