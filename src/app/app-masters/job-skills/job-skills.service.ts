import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable, from } from "rxjs";
import { DataStore } from '../../shell/data-store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { AuthConstants } from '../../config/AuthConstants';
import { JobSkillModel, JobSkillListingModel, JobSkillDetailModel } from '../../dbmodels/job-skill.model';
import { MasterService } from '../../services/master.service';
import { StorageService } from '../../services/storage.service';

@Injectable()
export class JobSkillsService {
  listingBundle : Array<JobSkillModel>;
  public invokeListChangeEvent = new BehaviorSubject(this.listingBundle); 
  currentData = this.invokeListChangeEvent.asObservable();
  api_key:any;

  private listingDataStore: DataStore<JobSkillListingModel>;
  private detailsDataStore: DataStore<JobSkillDetailModel>;

  constructor(private http: HttpClient, private authService: AuthService, 
    private storageService: StorageService,
    private masterService: MasterService,
    private toastService: ToastService) { }

public getListingDataSource() {
     this.authService.getAuthKey().then(result=>{
      this.api_key = result;
      console.log('########## Service Obtained Token #####: '+result);
      this.fetchFreshList(this.api_key);
    });
  }

  fetchFreshList(api_key:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'skill-types';
      this.http.get<any>(url, httpOptions).subscribe(
      (res: any) => {
        if(AuthConstants.DEV_MODE){
          console.log("###### Job Skills List API Response: "+JSON.stringify(res));
        }
      if (res.error) {
        this.toastService.presentToast(res.message);
      } else {
        this.listingBundle = res.result;
        this.storageService.store(AuthConstants.JOB_SKILLS, this.listingBundle);
        this.invokeListChangeEvent.next(res.result);
        if(AuthConstants.DEV_MODE){
          this.toastService.presentToast("We found "+res.result.length+" Job skills.");
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



/******* JAVASCRIPT DOM MANIPULATIONS *******/
deleteItemFromLocal(item:JobSkillModel) {
  //Wow examples
  //this.listingBundle = this.listingBundle.filter(order => order.id !== item.id); 
  // const index = this.listingBundle.findIndex(x => x.id === item.id);
  let index = item.id;
   if (index !== undefined){
    if (this.listingBundle!== undefined && item !== undefined && item !== null) {
      this.listingBundle = this.listingBundle.splice(index, 1);
    }else{
      this.storageService.get(AuthConstants.JOB_SKILLS).then(result=>{
        if(result){
          this.listingBundle = result;
          this.listingBundle = this.listingBundle.splice(index, 1);
        }
      });
    }
    this.storageService.store(AuthConstants.JOB_SKILLS, this.listingBundle);
    console.log('########## Delete Result Saved and Changed #####: '+JSON.stringify(this.listingBundle));
    this.invokeListChangeEvent.next(this.listingBundle);
   }else{
     this.toastService.presentToast("Could not update view for delete operation.");
   }
   
   //old thing
   //this.fetchFreshList(this.api_key);
}

addItemToLocal(item:JobSkillModel) {
console.log('########## Create Result Injected #####: '+JSON.stringify(item));
if (this.listingBundle!== undefined && item !== undefined && item !== null) {
    this.listingBundle.push(item);
} else{
  this.storageService.get(AuthConstants.JOB_SKILLS).then(result=>{
    if(result){
      this.listingBundle = result;
    this.listingBundle.push(item);
    }
  });
}
this.storageService.store(AuthConstants.JOB_SKILLS, this.listingBundle);
console.log('########## Create Result Saved and Change Invoked #####: '+JSON.stringify(item));
this.invokeListChangeEvent.next(this.listingBundle);      
}
/********** */

  /************** RETURN ITEM DETAIL FROM API ***************/
  public getDetailsDataSource(api_key:any, postData :any): Observable<JobSkillDetailModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/skill-types/profile';
      return this.http.post<JobSkillDetailModel>(url, postData, httpOptions);
  }

  public getDetailsStore(dataSource: Observable<JobSkillDetailModel>): DataStore<JobSkillDetailModel> {
    const shellModel: JobSkillDetailModel = new JobSkillDetailModel();
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
    const url = environment.apiUrl + 'apis/skill-types/create';
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
    const url = environment.apiUrl + 'apis/skill-types/update';
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

      const url = environment.apiUrl + 'apis/skill-types/delete';
      console.log("Hiting "+url+" with => "+JSON.stringify(postData));
      return this.http.post<any>(url, postData, httpOptions);
  }

  deleteItem(apiKey:any, postData: any): Observable<any> {
    return this.performDeleteItem(apiKey, postData);
  }

}
