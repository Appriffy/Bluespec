import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of, forkJoin, throwError, combineLatest } from 'rxjs';
import { map, concatMap, first, filter } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { environment } from '../../environments/environment';
import { StorageService } from '../services/storage.service';
import { JobOfferModel } from '../dbmodels/job-offer-model';

@Injectable()
export class JobOffersService {
  private listingDataStore: DataStore<Array<JobOfferModel>>;

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getListingDataSource(postData: any): Observable<Array<JobOfferModel>> {
   
   //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-listing.json').map(res => res.results);

   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '3c0a2f29323a29e5474bfd3384fce722'
    })
    };
    const url = environment.apiUrl + 'list-users';
    //return this.http.post<UserProfileModel[]>(url, postData, httpOptions);
    return this.http.get<Array<JobOfferModel>>('./assets/sample-data/deals/job-offers.json');
  }

  public getListingStore(dataSource: Observable<Array<JobOfferModel>>): DataStore<Array<JobOfferModel>> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<JobOfferModel> = [
        new JobOfferModel(),
        new JobOfferModel(),
        new JobOfferModel(),
        new JobOfferModel(),
        new JobOfferModel(),
        new JobOfferModel()
      ];

      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  
  updateOnlineStatus(postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '3c0a2f29323a29e5474bfd3384fce722'
    })
    };
    const url = environment.apiUrl + 'users/update-online-status';
    return this.http.post(url, postData, httpOptions);
    //return this.httpService.post(url, postData, httpOptions);
    //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-listing.json');
  }

  callRegistrationAPI(postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '3c0a2f29323a29e5474bfd3384fce722'
    })
    };
    const url = environment.apiUrl + 'registration';
    return this.http.post(url, postData, httpOptions);
    //return this.httpService.post(url, postData, httpOptions);
    //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-listing.json');
  }

}
