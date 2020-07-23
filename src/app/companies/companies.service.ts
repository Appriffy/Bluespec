import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable, from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

import * as dayjs from 'dayjs';

import { DataStore } from '../shell/data-store';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CompanyDetailModel, CompanyListingModel, CompanyModel } from '../dbmodels/company-model';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { AuthConstants } from '../config/AuthConstants';
import { StorageService } from '../services/storage.service';

@Injectable()
export class CompanyService {
  jobFilterData:any;
   //listingBundle : CompanyListingModel;
   listingBundle : Array<CompanyModel>;
  private listingDataStore: DataStore<CompanyListingModel>;
  private detailsDataStore: DataStore<CompanyDetailModel>;
  invokeEvent: Subject<any> = new Subject(); 

  public invokeListChangeEvent = new BehaviorSubject(this.listingBundle); 
  currentData = this.invokeListChangeEvent.asObservable();
  
  constructor(private http: HttpClient, private authService: AuthService, 
    private storageService: StorageService,
    private toastService: ToastService) { }

  getFilterData(){ 
    return this.jobFilterData; 
 } 

 setFilterData(data:any){
     this.jobFilterData = data;
     this.invokeEvent.next(data);
 }

  get relativeDates(): Array<string> {
    return [
      dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string,
      dayjs().add(7, 'day').format('MM/DD/YYYY') as string,
      dayjs().subtract(1, 'month').format('MM/DD/YYYY') as string,
      dayjs().add(2, 'month').format('MM/DD/YYYY') as string
    ];
  }

//   public getListingDataSource(): Observable<CompanyModel> {
//     return this.http.get<CompanyModel>('./assets/sample-data/company-listing.json').pipe(
//       map(listingData => {
//         // using rest operator to divide the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
//         const {items, ...otherData} = listingData;

//         const itemsWithRelativeDates = items.map((dealItem, index) => {
//           // Relative date (better to showcase UI micro-interactions)
//           return {...dealItem, expirationDate: this.relativeDates[index]};
//         });
//         // using spread operator to concat the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
//         return {...otherData, items: itemsWithRelativeDates};
//       })
//     );
//   }

public getListingDataSource() {
     this.fetchFreshList();
  }

  fetchFreshList(){
     this.authService.getAuthCache().then(results =>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': results.api_key
        })
        };
        const url = environment.apiUrl + 'companies';
        this.http.get<CompanyListingModel>(url, httpOptions).subscribe(
        (res: any) => {
          if(AuthConstants.DEV_MODE){
            console.log("###### Companies List API Response: "+JSON.stringify(res));
          }
        if (res.error) {
          //this.toastService.presentToast(res.message);
        } else {
          this.listingBundle = res.items;
          this.invokeListChangeEvent.next(res.items);
          this.storageService.store(AuthConstants.COMPANIES, res.items);  
          if(AuthConstants.DEV_MODE){
            this.toastService.presentToast("Invoked next data");
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
     });
  }

  

  public getListingStore(dataSource: Observable<CompanyListingModel>): DataStore<CompanyListingModel> {
    if (!this.listingDataStore) {
      const shellModel: CompanyListingModel = new CompanyListingModel();
      this.listingDataStore = new DataStore(shellModel);
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }


  deleteItemFromLocal(item:CompanyModel) {
    //Wow examples
    //this.listingBundle = this.listingBundle.filter(order => order.id !== item.id); 
    // const index = this.listingBundle.findIndex(x => x.id === item.id);
    let index = item.id;
     if (index !== undefined){
      if (this.listingBundle!== undefined && item !== undefined && item !== null) {
        this.listingBundle = this.listingBundle.splice(index, 1);
      }else{
        this.storageService.get(AuthConstants.COMPANIES).then(result=>{
          if(result){
            this.listingBundle = result;
            this.listingBundle = this.listingBundle.splice(index, 1);
          }
        });
      }
      this.storageService.store(AuthConstants.COMPANIES, this.listingBundle);
      console.log('########## Delete Result Saved and Changed #####: '+JSON.stringify(this.listingBundle));
      this.invokeListChangeEvent.next(this.listingBundle);
     }else{
       this.toastService.presentToast("Could not update view for delete operation.");
     }
     
     //old thing
     //this.fetchFreshList(this.api_key);
}

addItemToLocal(item:CompanyModel) {
  console.log('########## Create Result Injected #####: '+JSON.stringify(item));
  if (this.listingBundle!== undefined && item !== undefined && item !== null) {
      this.listingBundle.push(item);
  } else{
    this.storageService.get(AuthConstants.COMPANIES).then(result=>{
      if(result){
        this.listingBundle = result;
      this.listingBundle.push(item);
      }
    });
  }
  this.storageService.store(AuthConstants.COMPANIES, this.listingBundle);
  console.log('########## Create Result Saved and Change Invoked #####: '+JSON.stringify(item));
  this.invokeListChangeEvent.next(this.listingBundle);      
}


  /************** RETURN ITEM DETAIL FROM API ***************/
  public getDetailsDataSource(apiKey:any, postData :any): Observable<CompanyDetailModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': apiKey
      })
      };
      const url = environment.apiUrl + 'companies/profile';
      return this.http.post<CompanyDetailModel>(url, postData, httpOptions);
  }

  public getDetailsStore(dataSource: Observable<CompanyDetailModel>): DataStore<CompanyDetailModel> {
    const shellModel: CompanyDetailModel = new CompanyDetailModel();
    this.detailsDataStore = new DataStore(shellModel);
    this.detailsDataStore.load(dataSource);
    return this.detailsDataStore;
  }

  /**********************/
  callCompanyCreateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'companies/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+' via '+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  callCompanyCreateAPIEnhanced(apiKey:any, postData: any): Observable<any> {
    const myObject: any = {
      reportProgress: true,
      observe: 'events'
    };
    const httpOptions = {
      //params: new HttpParams(myObject), 
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })};

    const url = environment.apiUrl + 'companies/create';
    console.log("Hiting Register Company "+url+" with => "+JSON.stringify(postData));
    console.log('########## Auth #####: '+apiKey);
    return this.http.post(url, postData, httpOptions);

  }

  callCompanyUpdateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'companies/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post<any>(url, postData, httpOptions);
  }

  // async getTokenFirst(){
  //   await this.authService.getAuthKey().then(wow=>{
  //     return wow;
  //   });
  // }

 

  performDeleteCompany(token:any, postData:any):any{
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
      };

      const url = environment.apiUrl + 'companies/delete';
      console.log("Hiting "+url+" with => "+JSON.stringify(postData));
      return this.http.post<any>(url, postData, httpOptions);
  }

  deleteItem(apiKey:any, postData: any): Observable<any> {
    return this.performDeleteCompany(apiKey, postData);
    // const myToken =  this.getTokenFirst().then(wow=>{
    //   alert("Got "+wow);
    // });
    //alert("Got for nothing now");
    //return this.performDeleteCompany(postData);

  
    //

  //   return Observable.create(resolve=>{
    // this.authService.getAuthKey().then(apiKey=>{
    //   return this.performDeleteCompany(apiKey, postData);
    // });

    // return from(this.authService.getAuthKey().then(apiKey=>{
    //   return this.performDeleteCompany(apiKey, postData);
    // }));
    //return null;
  }


  getMyCompanies(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/my/companies';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+' via '+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

}
