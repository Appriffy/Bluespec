import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, concatMap, first, filter } from 'rxjs/operators';

import { UserProfileModel, BluspecUserModel } from './profile/user-profile.model';
import { EducationDetailsModel } from './education-details/education-details.model';
import { DataStore } from '../shell/data-store';
import { environment } from '../../environments/environment';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/AuthConstants';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { UserWorkExperienceModel } from '../dbmodels/user-work-experience.model';
import { UserFilterCache } from '../dbmodels/user-filter-cache';
import { UserDocumentModel } from '../dbmodels/user-document.model';
import { WorkExperienceResponse } from '../dbmodels/responses/user-experience-response';
import { UserEducationResponse } from '../dbmodels/responses/user-education-response';
import { WorkReviewsResponse } from '../dbmodels/responses/user-reviews-response';

@Injectable()
export class UserService {
  private listingDataStore: DataStore<Array<UserProfileModel>>;
  private profileDataStore: DataStore<UserProfileModel>;
  private friendsDataStore: DataStore<Array<EducationDetailsModel>>;
  private workDetailsDataStore: DataStore<Array<UserWorkExperienceModel>>;
  private userDocumentsDataStore: DataStore<Array<UserDocumentModel>>;
  invokeProfileChangeEvent: Subject<any> = new Subject(); 
  //For Smooth Updates
  listingBundle : Array<UserProfileModel>;

  //Document State for Smooth Update
  userDocsList : Array<UserProfileModel>;
  public invokeDocListChangeEvent = new BehaviorSubject(this.userDocsList); 

  filterData: UserFilterCache;
  invokeFilterChangeEvent: Subject<any> = new Subject();
  public invokeListChangeEvent = new BehaviorSubject(this.listingBundle); 
  public invokeEduListChangeEvent = new BehaviorSubject<UserEducationResponse>(null); 
  public invokeWorkExperienceListChangeEvent = new BehaviorSubject<WorkExperienceResponse>(null);
  public invokeReviewsListChangeEvent = new BehaviorSubject<WorkReviewsResponse>(null);

  constructor(private http: HttpClient, private storageService: StorageService, 
    private toastService: ToastService, private authService: AuthService) { }

  public getListingDataSource(apiKey:any, postData: any): Observable<Array<UserProfileModel>> {
   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'list-users';
    return this.http.post<UserProfileModel[]>(url, postData, httpOptions);
  }

  public getListingStore(dataSource: Observable<Array<UserProfileModel>>): DataStore<Array<UserProfileModel>> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: Array<UserProfileModel> = [
        new UserProfileModel(),
        new UserProfileModel(),
        new UserProfileModel(),
        new UserProfileModel(),
        new UserProfileModel(),
        new UserProfileModel()
      ];

      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  getFilterData() : UserFilterCache{
    if(this.filterData !== null && this.filterData !== undefined){
      return this.filterData; 
    }else{
      if(AuthConstants.DEV_MODE){
        this.toastService.presentToast("Returning New Cache Box");
      }
      return new UserFilterCache(); 
    }
 } 

 setFilterData(data:UserFilterCache){
     this.filterData = data;
     //this.toastService.presentToast("Your filtering preference has been saved.");
     this.storageService.store(AuthConstants.USER_FILTER_CACHE, data);
     this.storageService.get(AuthConstants.USER_FILTER_CACHE).then(results=>{
       //alert(results);
     });
     this.invokeFilterChangeEvent.next(data);
 }


  public getProfileDataSource(apiKey:any, username:string): Observable<UserProfileModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': apiKey
      })
      };
      const url = environment.apiUrl + 'users/full_profile/'+username;
      if(AuthConstants.DEV_MODE){
        console.log("HITING PROFILE UPDATE SYNC :: "+url+" via "+apiKey);
      }
      return this.http.post<UserProfileModel>(url, {}, httpOptions);
    //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-profile.json');
  }

  public getProfileStore(dataSource: Observable<UserProfileModel>): DataStore<UserProfileModel> {
    // Use cache if available
    if (!this.profileDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserProfileModel = new UserProfileModel();
      this.profileDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.profileDataStore.load(dataSource);
    }
    return this.profileDataStore;
  }

  updateOnlineStatus(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'users/update-online-status';
    return this.http.post(url, postData, httpOptions);
    //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-listing.json');
  }

  callRegistrationAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'registration';
    return this.http.post(url, postData, httpOptions);
    //return this.httpService.post(url, postData, httpOptions);
    //return this.http.get<UserProfileModel>('./assets/sample-data/user/user-listing.json');
  }


  callUpdateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'users/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  deleteItem(token:any, postData:any): Observable<any>{
    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': token
       })
       };
 
       const url = environment.apiUrl + 'users/delete';
       console.log("Hiting "+url+" with => "+JSON.stringify(postData));
       return this.http.post<any>(url, postData, httpOptions);
   }

  callVerifyAccountAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'users-accounts/verify';
    return this.http.post(url, postData, httpOptions);
  }

  callUpdateProfileStatusAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'users/update-profile-status';
    if(AuthConstants.DEV_MODE){
      console.log("/************/ Hitting "+url+" with postData => "+postData+" via "+apiKey);
    }
    return this.http.post(url, postData, httpOptions);
  }

  callUpdateProfileDescriptionAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'users/update-profile-description';
    if(AuthConstants.DEV_MODE){
      console.log("/************/ Hitting "+url+" with postData => "+postData+" via "+apiKey);
    }
    return this.http.post(url, postData, httpOptions);
  }

  /**************** USER EDUCATION ******************/
  //Return type was Array<EducationDetailsModel>
  public getEduDataSource(api_key:any, user_id:any): Observable<any> {
    //return this.http.get<Array<EducationDetailsModel>>('./assets/sample-data/user/user-education.json');
    let postData = {user_id: user_id};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'users/education-details/get';
      console.log("/************/ Hitting "+url+" with userID=> "+user_id+" via "+api_key);
      return this.http.post<Array<EducationDetailsModel>>(url, postData, httpOptions);
  }

  public getEduStore(dataSource: Observable<Array<EducationDetailsModel>>): DataStore<Array<EducationDetailsModel>> {
    // Use cache if available
    if (!this.friendsDataStore) {
      const shellModel: Array<EducationDetailsModel> = [
        new EducationDetailsModel(),
        new EducationDetailsModel(),
        new EducationDetailsModel(),
        new EducationDetailsModel(),
        new EducationDetailsModel(),
        new EducationDetailsModel()
      ];

      this.friendsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.friendsDataStore.load(dataSource);
    }
    return this.friendsDataStore;
  }

  callEduDetailsCreateAPI(apiKey:any, postData: any): Observable<any> {
    //fix me with right auth
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'user_education_levels/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  callEduDetailsUpdateAPI(apiKey:any, postData: any): Observable<any> {
    //fix me with right auth
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'user_education_levels/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  deleteEducationItem(apiKey:any, postData: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': apiKey
        })
        };
        const url = environment.apiUrl + 'user_education_levels/delete';
        console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
        return this.http.post(url, postData, httpOptions);
  }
  /************** ENDS EDUCATION DETAILS *****************/




    /**************** USER WORK EXPERIENCE ******************/
    //Array<UserWorkExperienceModel>
  public getWorkExperienceDataSource(api_key:any, user_id:any): Observable<any> {
    //return this.http.get<Array<EducationDetailsModel>>('./assets/sample-data/user/user-education.json');
    let postData = {user_id: user_id};
    if(AuthConstants.DEV_MODE){
      this.toastService.presentToast("Finding Experiences for UserID =>"+user_id);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'work_experiences/list';
      console.log("/************/ Hitting "+url+" with userID=> "+user_id+" via "+api_key);
     // return this.http.post<any>(url, postData, httpOptions).pipe(filter(val=> {return val.result}));
      return this.http.post<any>(url, postData, httpOptions);

      //return this.http.post<any>(url, postData, httpOptions).pipe(filter(function(val){return val.result}));
  }

  public getWorkExperienceStore(dataSource: Observable<Array<UserWorkExperienceModel>>): DataStore<Array<UserWorkExperienceModel>> {
    // Use cache if available
    if (!this.workDetailsDataStore) {
      const shellModel: Array<UserWorkExperienceModel> = [
        new UserWorkExperienceModel(),
        new UserWorkExperienceModel(),
        new UserWorkExperienceModel(),
        new UserWorkExperienceModel(),
        new UserWorkExperienceModel(),
        new UserWorkExperienceModel()
      ];

      this.workDetailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.workDetailsDataStore.load(dataSource);
    }
    return this.workDetailsDataStore;
  }

  callWorkExperienceCreateAPI(apiKey:any, postData: any): Observable<any> {
    //fix me with right auth
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'work_experiences/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  callWorkExperienceUpdateAPI(apiKey:any, postData: any): Observable<any> {
    //fix me with right auth
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'work_experiences/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  deleteWorkExperienceItem(apiKey:any, postData: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': apiKey
        })
        };
        const url = environment.apiUrl + 'work_experiences/delete';
        console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
        return this.http.post(url, postData, httpOptions);
  }
  /************** ENDS WORK DETAILS *****************/



    /**************** USER RELOCATION FEES ******************/
  public getRelocationFeesDataSource(api_key:any, user_id:any): Observable<any> {
    let postData = {user_id: user_id};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/user_relocations/get';
      console.log("/************/ Hitting "+url+" with userID=> "+user_id+" via "+api_key);
      return this.http.post<any>(url, postData, httpOptions);
  }

  callRelocationFeesSaveAPI(apiKey:any, postData: any): Observable<any> {
    //fix me with right auth
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'user_relocations/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  /************** ENDS RELOCATION FEES *****************/


 /********************** START USER DOCUMENT CALLS ***********************/
  /******************* START OF FILE UPLOAD *******************/
  callDocUploadAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey,
      //'reportProgress': 'true',
      //'withCredentials': 'true',
    })
    };
    const url = environment.apiUrl + 'apis/user_documents/create';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);  
  }

  callDocumentUpdateAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type':  'application/json',
      'enctype':  'multipart/form-data',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/user_documents/update';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  callDocumentVerificationAPI(apiKey:any, postData: any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': apiKey
    })
    };
    const url = environment.apiUrl + 'apis/user_documents/verify';
    console.log("Hiting "+url+" with => "+JSON.stringify(postData)+" via Token "+apiKey);
    return this.http.post(url, postData, httpOptions);
  }

  deleteUserDocument(token:any, postData:any): Observable<any>{
    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': token
       })
       };
       const url = environment.apiUrl + 'apis/user_documents/delete';
       console.log("Hiting "+url+" with => "+JSON.stringify(postData));
       return this.http.post<any>(url, postData, httpOptions);
   }


     /*************** DOM UTILITIES *****************/
  deleteDocumentItemFromLocal(item:UserDocumentModel) {
    let index = item.id;
     if (index !== undefined){
      if (this.userDocsList!== undefined && item !== undefined && item !== null) {
        this.userDocsList = this.listingBundle.splice(index, 1);
      }else{
        this.storageService.get(AuthConstants.COMPANIES).then(result=>{
          if(result){
            this.userDocsList = result;
            this.userDocsList = this.userDocsList.splice(index, 1);
          }
        });
      }
      this.storageService.store(AuthConstants.COMPANIES, this.userDocsList);
      console.log('########## Delete Result Saved and Changed #####: '+JSON.stringify(this.listingBundle));
      this.invokeDocListChangeEvent.next(this.userDocsList);
     }else{
       this.toastService.presentToast("Could not update view for delete operation.");
     }
}

    public getUserDocumentDataSource(api_key:any, user_id:any): Observable<any> {
    let postData = {user_id: user_id};
    if(AuthConstants.DEV_MODE){
      this.toastService.presentToast("Finding Experiences for UserID =>"+user_id);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/list-user-documents';
      console.log("/************/ Hitting "+url+" with userID=> "+user_id+" via "+api_key);
      return this.http.post<any>(url, postData, httpOptions).pipe(filter(function(val){return val.result}));
  }

  public getUserDocumentStore(dataSource: Observable<Array<UserDocumentModel>>): DataStore<Array<UserDocumentModel>> {
    // Use cache if available
    if (!this.workDetailsDataStore) {
      const shellModel: Array<UserDocumentModel> = [
        new UserDocumentModel(),
        new UserDocumentModel(),
        new UserDocumentModel(),
        new UserDocumentModel(),
        new UserDocumentModel(),
        new UserDocumentModel()
      ];

      this.userDocumentsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.userDocumentsDataStore.load(dataSource);
    }
    return this.userDocumentsDataStore;
  }


  public fetchDocDetail(api_key:any, doc_id:any): Observable<any> {
    let postData = {doc_id: doc_id};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/document-viewer';
      console.log("/************/ Hitting "+url+" with doc_id => "+doc_id+" via "+api_key);
      return this.http.post<any>(url, postData, httpOptions);
  }

  /******************* END OF USER DOCUMENT API *******************/

   /************** START USER REVIEWS API *************/
   public getUserReviewsDataSource(api_key:any, user_id:any): Observable<any> {
    let postData = {user_id: user_id};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/list-user-reviews';
      if(AuthConstants.DEV_MODE){
        console.log("/************/ Hitting "+url+" with userID=> "+user_id+" via "+api_key);
      }
      return this.http.post<any>(url, postData, httpOptions).pipe(filter(function(val){return val.result}));
  }

  // public getUserReviewsStore(dataSource: Observable<Array<WorkReviewModel>>): DataStore<Array<WorkReviewModel>> {
  //   // Use cache if available
  //   if (!this.workDetailsDataStore) {
  //     const shellModel: Array<WorkReviewModel> = [
  //       new WorkReviewModel(),
  //       new WorkReviewModel(),
  //       new WorkReviewModel(),
  //       new WorkReviewModel(),
  //       new WorkReviewModel(),
  //       new WorkReviewModel()
  //     ];

  //     this.userDocumentsDataStore = new DataStore(shellModel);
  //     // Trigger the loading mechanism (with shell) in the dataStore
  //     this.userDocumentsDataStore.load(dataSource);
  //   }
  //   return this.userDocumentsDataStore;
  // }

   /*********** END OF REVIEWS API ***********/


  public getUserSkillSet(api_key:any, user_id:any): Observable<any> {
    let postData = {user_id: user_id};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'users/skill-set';
      console.log("/************/ Hitting "+url+" with userID=> "+user_id+" via "+api_key);
     return this.http.post<any>(url, postData, httpOptions);
  }


  public endorseUserForSkills(api_key:any, postData:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/skills/recommendation/create';
      console.log("/************/ Hitting "+url+" with postData=> "+JSON.stringify(postData)+" via "+api_key);
     return this.http.post<any>(url, postData, httpOptions);
  }

  public addUserSkills(api_key:any, postData:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': api_key
      })
      };
      const url = environment.apiUrl + 'apis/skills/favourites/create';
      console.log("/************/ Hitting "+url+" with postData=> "+JSON.stringify(postData)+" via "+api_key);
     return this.http.post<any>(url, postData, httpOptions);
  }
  
  fetchMyDashboard(api_key:any): Observable<any> {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': api_key
    })
    };
    const url = environment.apiUrl + 'apis/dashboard';
    console.log("Hiting "+url+" via Token "+api_key);
    return this.http.get(url, httpOptions);
  }



  /*************** DOM UTILITIES *****************/

  deleteDocItemFromLocal(item:UserProfileModel) {
    let index = item.id;
     if (index !== undefined){
      if (this.userDocsList!== undefined && item !== undefined && item !== null) {
        this.userDocsList = this.userDocsList.splice(index, 1);
        this.invokeDocListChangeEvent.next(this.listingBundle);
      }
     
     //old thing
     //this.fetchFreshList(this.api_key);
}
  }

 
addItemToLocal(item:UserProfileModel) {
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
  this.storageService.store(AuthConstants.SAVED_USERS, this.listingBundle);
  console.log('########## Create Result Saved and Change Invoked #####: '+JSON.stringify(item));
  this.invokeListChangeEvent.next(this.listingBundle);      
}
/************* END OF DOM UTILS *************/

}
