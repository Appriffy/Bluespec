import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/AuthConstants';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private httpService: HttpService, 
    private storageService : StorageService,
    private toastService: ToastService) { }

  getJobTypes(): Observable<any> {
    return this.httpService.get('job-types');
  }

  getRelocationInputTypes(): Observable<any> {
    return this.httpService.get('relocation-inputs');
  }

  getDocumentTypes(): Observable<any> {
    return this.httpService.get('document-types');
  }

  getMasterDocuments(): Observable<any> {
    return this.httpService.get('master-documents');
  }

  getPayrollTypes(): Observable<any> {
    return this.httpService.get('api/payroll_types');
  }

  getCurrencies(): Observable<any> {
    return this.httpService.get('api/currencies');
  }

  getSkills(): Observable<any> {
    return this.httpService.get('skill-types');
}

getDocumentsType(): Observable<any> {
  return this.httpService.get('master-documents');
}

getJobAreas(): Observable<any> {
  if(navigator.onLine){
    return this.httpService.get('job-areas');
}else{
  this.toastService.presentToast("No Internet connection. Cache System under dev.");
}
}


getCompanyListCarosell(apiKey:string): Observable<any> {
  if(navigator.onLine){
    return this.httpService.get('companies', apiKey);
}else{
  this.toastService.presentToast("No Internet connection.");
}
}

getStudyAreas(): Observable<any> {
  if(navigator.onLine){
    return this.httpService.get('study-areas');
}else{
  this.toastService.presentToast("No Internet connection.");
}
}

//navigator.onLine
  // getSkills(): Observable<any> {
  //   if(navigator.onLine){
  //     return this.httpService.get('skill-types').pipe(map((res: any) => res.result));
  //     //const url = environment.apiUrl + 'skill-types';  
  //     //return this.http.get(url).pipe(map((response: any) => response.result));
  //   }else{
  //     this.storageService
  //     .get(AuthConstants.JOB_SKILLS)
  //     .then((res:any) => {
  //     if (res) {
  //       console.log("##### NO INTERNET FOR getSkills() #######");
  //       return Observable.create(res);
  //       //return Observable.of(new SkillType()).map(o => JSON.stringify(o));
  //     }
  //     })
  //   }
  
  // }

  getCountries(): Observable<any> {
    if(navigator.onLine){
      return this.httpService.get('countries');
    }else{
      this.storageService
      .get(AuthConstants.COUNTRIES)
      .then(res => {
      if (res) {
        return res;
      }
      })
    }
  }

  // getSkills(): Observable<SkillType[]> {
  //   //return this.httpService.get('skill-types');
  //   const url = environment.apiUrl + 'skill-types';
    
  //   return this.http.get<SkillType[]>(url);
  // }

  getEducationLevels(): Observable<any> {
    if(navigator.onLine){
      return this.httpService.get('education-levels');
    }else{
      this.storageService
      .get(AuthConstants.EDU_LEVELS)
      .then(res => {
      if (res) {
        return res;
      }
      })
    }
  }

  getJobCategories(): Observable<any> {
    if(navigator.onLine){
      return this.httpService.get('job_categories');
    }else{
      this.storageService
      .get(AuthConstants.JOB_CATEGORIES)
      .then(res => {
      if (res) {
        return res;
      }
      })
    }
  }
}
