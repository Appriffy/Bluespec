import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/AuthConstants';
import { HttpHeaders } from '@angular/common/http';
import { LocalUser } from '../dbmodels/local-user';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  invokeLoginEvent: Subject<any> = new Subject(); 
  invokeProfileUpdatedEvent: Subject<any> = new Subject(); 

  /************* REACTIVE DIAMOND WAY **********
  localProfile$ = new BehaviorSubject<LocalUser | null>(this.getAuthData());
  watchProfile() : Observable<LocalUser|null> {
    return this.localProfile$;
  }
  peekProfile():LocalUser | null {
    return this.localProfile$.value;
  }
  pokeProfile(thisUser: LocalUser): void {
    //this.localProfile$.next(thisUser);
  }
  ************ REACTIVE DIAMOND WAY **********/

  private authKey: string = '3c0a2f29323a29e5474bfd3384fce722';
  public role_id : number = 2;

  constructor(private httpService: HttpService,
    private storageService: StorageService,
    private toastService: ToastService,
    private router: Router) {
      //this.getAuthData();
    }

    login(postData: any): Observable<any> {
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json; odata=verbose'
      })
      };
      return this.httpService.post('login_controller', postData, httpOptions);
    }
      
    signup(postData: any): Observable<any> {
      return this.httpService.post('signup', postData, null);
    }
      
    logout() {
      this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
      this.storageService.removeStorageItem(AuthConstants.MY_FULL_PROFILE);  
      this.storageService.removeStorageItem(AuthConstants.MY_COMPANIES);
      this.storageService.removeStorageItem(AuthConstants.USER_FILTER_CACHE);
      this.router.navigate(['auth/login']);
      });
    }

      getUsers(postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '3c0a2f29323a29e5474bfd3384fce722'
    })
    };
    return this.httpService.post('list-users', postData, httpOptions);
    //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-listing.json');
  }

  getFullProfileFromServer(api_key: any, postData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const baseUrl = 'users/full_profile';
      if(postData.user_id != ''){
        console.log('Just Hitting => '+baseUrl+'/'+postData.user_id+''+api_key);
        return this.httpService.post(baseUrl+'/'+postData.user_id, postData, httpOptions);
       
      }else{
        console.log('Just Hitting => '+baseUrl+' ====> '+api_key);
        return this.httpService.post(baseUrl, postData, httpOptions);
      } 
  }

 setAuthData(data:any){
     this.storageService.store(AuthConstants.AUTH, data);
     this.invokeLoginEvent.next(data);
     if(AuthConstants.DEV_MODE){
      console.log("/********* Auth Service saved Auth Info ********/"+JSON.stringify(data));
     }
 }

 getMyFullProfile(): any  { 
  this.storageService
  .get(AuthConstants.MY_FULL_PROFILE)
  .then(res => {
  if (res) {
    console.log("/************* Auth Service => getFullProfile() ********/"+JSON.stringify(res));
    if(res === null || res === undefined){
      res = null;
      return res;
    }
    return res;
    //return JSON.parse(res);
    //return JSON.stringify(res);
  } else {
    res = null;
    console.log("@@@@@@@@@@@@ User Service => getAuthData() ::: NULL :( ");
    return res;
  }
  })
} 

async getAuthCache(): Promise<LocalUser>  {
  return await this.storageService
  .get(AuthConstants.AUTH);
} 



setMyFullProfile(data:any){
  this.storageService.removeStorageItem(AuthConstants.MY_FULL_PROFILE);
   this.storageService.store(AuthConstants.MY_FULL_PROFILE, data);
   this.invokeProfileUpdatedEvent.next(data);
   if(AuthConstants.DEV_MODE){
    console.log("/********* Auth Service saved Full profile ********/"+JSON.stringify(data));
   }
}

// getAuthKey(): any  {
//   this.authKey = "";
//   this.storageService
//   .get(AuthConstants.AUTH)
//   .then(res => {
//   if (res) {
//     console.log("Auth Service => getAuthData()"+JSON.stringify(res));
//     console.log("*********** Auth KEY INSIDE *********** => "+res.api_key);
//     this.authKey = res.api_key;
//     return this.authKey;
//   } 
//   return this.authKey;
//   })
// } 

async getAuthKey(): Promise<string>  {
  this.authKey = "";
  const result = await this.storageService
  .get(AuthConstants.AUTH);
  return result.api_key;
} 

        
}

export interface LoginResponse{
  error:boolean;
  message:string;
}
