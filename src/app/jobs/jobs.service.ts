import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import * as dayjs from 'dayjs';

import { JobListingModel, JobItemModel } from '../dbmodels/jobs-listing.model';
import { DataStore } from '../shell/data-store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserJobModel } from '../dbmodels/user-jobs-model';
import { environment } from '../../environments/environment';
import { JobApplicationsManagerModel } from '../dbmodels/job-applications-manager-model';
import { AuthConstants } from '../config/AuthConstants';
import { StorageService } from '../services/storage.service';
import { JobFilterCache } from '../dbmodels/job-filter-cache';
import { ToastService } from '../services/toast.service';

@Injectable()
export class JobService {
  jobFilterData:JobFilterCache;
  invokeFilterChangeEvent: Subject<any> = new Subject();
  private listingDataStore: DataStore<JobListingModel>;
  private detailsDataStore: DataStore<JobItemModel>;
  private jobManagerDataStore: DataStore<UserJobModel>;
  private jobApplicationsManagerDataStore: DataStore<JobApplicationsManagerModel>;
  //invokeEvent: Subject<any> = new Subject();
  
  constructor(private http: HttpClient, 
    private toastService: ToastService,
    private storageService: StorageService) { }

  getFilterData() : JobFilterCache{
    if(this.jobFilterData !== null && this.jobFilterData !== undefined){
      return this.jobFilterData; 
    }else{
      if(AuthConstants.DEV_MODE){
        this.toastService.presentToast("Returning New Cache Box");
      }
      return new JobFilterCache(); 
    }
 } 

 setFilterData(data:any){
     this.jobFilterData = data;
     this.invokeFilterChangeEvent.next(data);
     this.storageService.store(AuthConstants.USER_FILTER_CACHE, data);
     this.storageService.get(AuthConstants.USER_FILTER_CACHE).then(results=>{
       //alert(results);
     });
 }

  callJobCreateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'job_requests/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  public getListingDataSource(apiKey:any, postData:any): Observable<JobListingModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': apiKey
      })
      };
      const url = environment.apiUrl + 'job_requests/list';
      console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
      return this.http.post<JobListingModel>(url, postData, httpOptions);
  }

  public getListingStore(dataSource: Observable<JobListingModel>): DataStore<JobListingModel> {
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: JobListingModel = new JobListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsStore(dataSource: Observable<JobItemModel>): DataStore<JobItemModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: JobItemModel = new JobItemModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);
    return this.detailsDataStore;
  }

     /**************** GET JOB DETAIL ******************/
     public getJobRequestDetailDataSource(api_key:any, user_id:any): Observable<any> {
      let postData = {qcode: user_id};    
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': api_key
        })
        };
        const url = environment.apiUrl + 'apis/job_requests/viewer';
        console.log("/************/ Hitting "+url+" with Qcode=> "+user_id+" via "+api_key);
        return this.http.post<any>(url, postData, httpOptions);

        // return this.http.post<any>(url, postData, httpOptions).pipe(
        //   map(detailsData => {
        //     const expirationDate = dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string;
        //     return {...detailsData, expirationDate};
        //   })
        // );
  
    }
    /*******************************/

  /**************** JOB MANAGER PAGES ***************/
  public getJobManagerDataSource(apiKey:any): Observable<UserJobModel> {
    //return this.http.get<UserJobModel>('./assets/sample-data/user/user-jobs-manager.json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': apiKey
      })
      };
      let postData = {};
      const url = environment.apiUrl + 'apis/job_requests/manager';
      //const url = environment.apiUrl + 'apis/job_requests/manager/delll';
      //return this.http.post<JobApplications0ManagerModel>(url, postData, httpOptions);
      return this.http.post<any>(url, postData, httpOptions).pipe(
        map(detailsData => {
          return detailsData.items;
        })
      );
  }

  public getJobManagerStore(dataSource: Observable<UserJobModel>): DataStore<UserJobModel> {
    // Use cache if available
    if (!this.jobManagerDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserJobModel = new UserJobModel();
      this.jobManagerDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.jobManagerDataStore.load(dataSource);
    }
    return this.jobManagerDataStore;
  }
   /**************** JOB MANAGER PAGES ***************/



  /**************** JOB APPLICATIONS ******************/
  callSubmitApplicationAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/job_applications/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  callApplicationStatusUpdateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/job_applications/processing/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

   /**************** JOB MANAGER PAGES ***************/
   public getJobApplicationsManagerDataSource(apiKey:any, postData: any): Observable<any> {
    //return this.http.get<JobApplicationsManagerModel>('./assets/sample-data/job-applications.json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': apiKey
      })
      };
      const url = environment.apiUrl + 'apis/job_applications/manager';
      //return this.http.post<JobApplicationsManagerModel>(url, postData, httpOptions);

      return this.http.post<any>(url, postData, httpOptions).pipe(
        map(detailsData => {
          return detailsData.items;
        })
      );
  }

  public getJobApplicationsManagerStore(dataSource: Observable<JobApplicationsManagerModel>): DataStore<JobApplicationsManagerModel> {
    // Use cache if available
    if (!this.jobApplicationsManagerDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: JobApplicationsManagerModel = new JobApplicationsManagerModel();
      this.jobApplicationsManagerDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.jobApplicationsManagerDataStore.load(dataSource);
    }
    return this.jobApplicationsManagerDataStore;
  }
   /**************** JOB MANAGER PAGES ***************/

 /****************####### END OF JOB APPLICATIONS ########******************/



   /************* JOB VIEWS***********/
   hitJobViewsAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + '/apis/job_requests/register-views';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }
  /************* JOB VIEWS***********/


}
