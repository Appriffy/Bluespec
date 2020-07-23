import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable, from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

import { DataStore } from '../../shell/data-store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { AuthConstants } from '../../config/AuthConstants';
import { MasterService } from '../../services/master.service';
import { JobAreaListingModel, JobAreaDetailModel, JobAreaModel } from '../../dbmodels/job-areas';
import { StorageService } from '../../services/storage.service';

//@Injectable()
@Injectable({
  providedIn: 'root',
})
export class JobAreasService {
  listingBundle : Array<JobAreaModel>;
  private listingDataStore: DataStore<JobAreaListingModel>;
  private detailsDataStore: DataStore<JobAreaDetailModel>;
  api_key:any;
  lastSyncAgo:number;


    /************* REACTIVE DIAMOND WAY NOT IN USE **********/
    public invokeItemUpdatedEvent = new BehaviorSubject<JobAreaDetailModel>(null);
    public invokeListChangeEvent = new BehaviorSubject(this.listingBundle); 
    currentData = this.invokeListChangeEvent.asObservable();
    watchProfile() : Observable<Array<JobAreaModel>|null> {
      return this.invokeListChangeEvent;
    }
    peekProfile():Array<JobAreaModel> | null {
      return this.invokeListChangeEvent.value;
    }
    pokeProfile(thisUser: Array<JobAreaModel>): void {
      this.invokeListChangeEvent.next(thisUser);
    }
    /************* REACTIVE DIAMOND WAY **********/

  constructor(private http: HttpClient, private authService: AuthService, 
    private storageService: StorageService,
    private masterService: MasterService,private toastService: ToastService) { }

  public getListingDataSource() {
  this.authService.getAuthKey().then(result=>{
    this.api_key = result;
    console.log('########## Service Obtained Token #####: '+result);
    this.fetchFreshList(this.api_key);
  });
  }


  public getJobAreasFromLocalStorageDELETE() {
 
    this.storageService.get(AuthConstants.JOB_AREAS).then(response=>{
    if(response){
    console.log('########## LOCAL SYNC SUCCESSFUL #####: '+JSON.stringify(response));
    this.storageService.get(AuthConstants.JOB_AREAS_SYNC_TIME).then(lastFetched=>{
    if(lastFetched){
        let timeCurrent = Math.floor(Date.now() / 1000);
        console.log('########## LOCAL SYNC #####: '+lastFetched);
        this.lastSyncAgo = (timeCurrent-lastFetched);
        console.log('########## SYNC INTERVAL #####: '+this.lastSyncAgo);
        this.listingBundle = response;
        if(AuthConstants.DEV_MODE){
          console.log("Data last synced "+this.lastSyncAgo+" timunes ago | Last Fetched: "+lastFetched);
          this.toastService.presentToast("Fetched from local storage.");
          }
        this.invokeListChangeEvent.next(response);
        //return from(response);
        return false;
    }
    });
     }else{
      this.toastService.presentToast("Getting Bluspec Job Areas on Board.");
      this.getListingDataSource();
     }
    });

    }

  fetchFreshList(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
      };
      const url = environment.apiUrl + 'job-areas';
      this.http.get<any>(url, httpOptions).subscribe(
      (res: any) => {
        if(AuthConstants.DEV_MODE){
          console.log("###### Job Areas List API Response: "+JSON.stringify(res));
        }
      if (res.error) {
        this.toastService.presentToast(res.message);
      } else {
        this.listingBundle = res.result;
        this.storageService.store(AuthConstants.JOB_AREAS, res.result);
        let timeCurrent = Math.floor(Date.now() / 1000);
        this.storageService.store(AuthConstants.JOB_AREAS_SYNC_TIME, timeCurrent);
        this.invokeListChangeEvent.next(this.listingBundle);
        if(AuthConstants.DEV_MODE){
          this.toastService.presentToast("We found "+res.result.length+" Job areas.");
        }
      }
      },
      (error: any) => {
      this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
      },
      () => {
        // complete callback
       // this.loaderDismiss();
    }
      );
  }



  deleteItemFromLocal(item:JobAreaModel) {
    //Wow examples
    //this.listingBundle = this.listingBundle.filter(order => order.id !== item.id); 
    // const index = this.listingBundle.findIndex(x => x.id === item.id);
    let index = item.id;
     if (index !== undefined){
      if (this.listingBundle!== undefined && item !== undefined && item !== null) {
        this.listingBundle = this.listingBundle.splice(index, 1);
      }else{
        this.storageService.get(AuthConstants.JOB_AREAS).then(result=>{
          if(result){
            this.listingBundle = result;
            this.listingBundle = this.listingBundle.splice(index, 1);
          }
        });
      }
      this.storageService.store(AuthConstants.JOB_AREAS, this.listingBundle);
      console.log('########## Delete Result Saved and Changed #####: '+JSON.stringify(this.listingBundle));
      this.invokeListChangeEvent.next(this.listingBundle);
     }else{
       this.toastService.presentToast("Could not update view for delete operation.");
     }
     
     //old thing
     //this.fetchFreshList(this.api_key);
}

addItemToLocal(item:JobAreaModel) {
  console.log('########## Create Result Injected #####: '+JSON.stringify(item));
  if (this.listingBundle!== undefined && item !== undefined && item !== null) {
      this.listingBundle.push(item);
  } else{
    this.storageService.get(AuthConstants.JOB_AREAS).then(result=>{
      if(result){
        this.listingBundle = result;
      this.listingBundle.push(item);
      }
    });
  }
  this.storageService.store(AuthConstants.JOB_AREAS, this.listingBundle);
  console.log('########## Create Result Saved and Change Invoked #####: '+JSON.stringify(item));
  this.invokeListChangeEvent.next(this.listingBundle);      
}

  /************** RETURN ITEM DETAIL FROM API ***************/
  public getDetailsDataSource(postData :any): Observable<JobAreaDetailModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '3c0a2f29323a29e5474bfd3384fce722'
      })
      };
      const url = environment.apiUrl + 'apis/job-areas/profile';
      console.log("Hiting "+url+" with => "+JSON.stringify(postData));
      console.log('########## Service Got Auth #####: '+this.api_key);
      return this.http.post<JobAreaDetailModel>(url, postData, httpOptions);
  }

  public getDetailsStore(dataSource: Observable<JobAreaDetailModel>): DataStore<JobAreaDetailModel> {
    const shellModel: JobAreaDetailModel = new JobAreaDetailModel();
    this.detailsDataStore = new DataStore(shellModel);
    this.detailsDataStore.load(dataSource);
    return this.detailsDataStore;
  }

  /**********************/
  callItemCreateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/job-areas/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData));
    console.log('########## Auth #####: '+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  callItemUpdateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/job-areas/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  async getTokenFirst(){
    await this.authService.getAuthKey().then(wow=>{
      return wow;
    });
  }

  performDeleteItem(token:any, postData:any):any{
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
      };

      const url = environment.apiUrl + 'apis/job-areas/delete';
      console.log("Hiting "+url+" with => "+JSON.stringify(postData));
      return this.http.post<any>(url, postData, httpOptions);
  }

  deleteItem(apiKey:any, postData: any): Observable<any> {
    return this.performDeleteItem(apiKey, postData);
  }

}
