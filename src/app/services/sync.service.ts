import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';
import { Subject } from 'rxjs';
import { MasterService } from './master.service';
import { AuthConstants } from '../config/AuthConstants';
import { LocalUser } from '../dbmodels/local-user';
import { AuthService } from './auth.service';
import { CompanyService } from '../companies/companies.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  invokeSyncSuccessEvent: Subject<any> = new Subject(); 
  localUser: LocalUser;
  constructor(private httpService: HttpService,
    private authService: AuthService,
    private companyService: CompanyService,
    private storageService: StorageService,
    private masterService: MasterService,
    private toastService: ToastService) { 
      this.authService.getAuthCache().then(promisedValue=>{
        if(promisedValue){
          this.localUser = promisedValue;
          if(this.localUser.role_id !== 3){
             this.loadMyCompanies();
          }
        }
      });
    }


    syncAppData(){
      this.loadCountries();
      this.loadEduLevels();
     this.loadJobTypes();
     this.loadJobAreas();
     this.loadJobSkills();
     this.loadStudyAreas();
     this.loadDocumentTypes();
     this.loadDocumentMasters();
     this.loadPaymentModes();
     this.loadCurrencies();
     if(AuthConstants.DEV_MODE){
      this.toastService.presentToast("App Data Sync Successful.");
     }
    }


    async loadMyCompanies(){
      this.companyService.getMyCompanies(this.localUser.api_key, {}).subscribe(
        (res: any) => {
        if (!res.error) {
        try {
          if(AuthConstants.DEV_MODE){console.log("2 SYNCED MY COMPANIES: "+JSON.stringify(res.items));}
          this.storageService.store(AuthConstants.MY_COMPANIES, res.items);
        } catch (Exception) {
          console.log("FETCHING MY COMPANIES AT STARTUP: "+Exception.message);        
        } 
        }
        },
        (error: any) => {
        console.log('Sync Service => Looks like there is a Network Issue while fetching companies.');
        }
        );
  }

    async loadJobSkills(){
      this.masterService.getSkills().subscribe(
        (res: any) => {
        if (!res.error) {
        try {
          this.storageService.store(AuthConstants.JOB_SKILLS, res.result);
        } catch (Exception) {
          console.log("FETCHING SKILLS AT STARTUP: "+Exception.message);        
        } 
        }
        },
        (error: any) => {
        console.log('Sync Service => Looks like there is a Network Issue while fetching skills.');
        }
        );
  }

  
  async loadJobAreas(){
    this.masterService.getJobAreas().subscribe(
      (res: any) => {
      if (!res.error) {
      try {   
        this.storageService.store(AuthConstants.JOB_AREAS, res.result);
        if(AuthConstants.DEV_MODE){console.log("SYNCED JOB AREAS: "+JSON.stringify(res.result));}
      } catch (Exception) {
        console.log("FETCHING JOB AREAS AT STARTUP: "+Exception.message);
      } 
      }
      },
      (error: any) => {
      console.log('Sync Service => Looks like there is a Network Issue while fetching job areas.');
      }
      );
}

async loadJobTypes(){
  this.masterService.getJobTypes().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.JOB_TYPES, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED JOB TYPES: "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING JOB TYPES AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching job types.');
    }
    );
}


async loadStudyAreas(){
  this.masterService.getStudyAreas().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.STUDY_AREAS, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED STUDY AREAS : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING STUDY AREAS AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching study areas.');
    }
    );
}

async loadCountries(){
  this.masterService.getCountries().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.COUNTRIES, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED COUNTRIES : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING COUNTRIES AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching countries.');
    }
    );
}


async loadCurrencies(){
  this.masterService.getCurrencies().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.CURRENCIES, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED CURRENCIES : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING CURRENCIES AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching currencies.');
    }
    );
}

async loadPaymentModes(){
  this.masterService.getPayrollTypes().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.PAYMENT_MODES, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED PAYMENT MODES : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING PAYMENT MODES AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching payroll modes.');
    }
    );
}

async loadEduLevels(){
  this.masterService.getEducationLevels().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.EDU_LEVELS, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED EDU LEVELS : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING EDU LEVELS AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching Edu levels.');
    }
    );
}

async loadDocumentTypes(){
  this.masterService.getDocumentsType().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.DOCUMENT_TYPES, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED DOC TYPES : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING DOC TYPES AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching Doc Types.');
    }
    );
}

async loadDocumentMasters(){
  this.masterService.getMasterDocuments().subscribe(
    (res: any) => {
    if (!res.error) {
    try {   
      this.storageService.store(AuthConstants.DOCUMENT_MASTERS, res.result);
      if(AuthConstants.DEV_MODE){console.log("SYNCED DOC MASTERS : "+JSON.stringify(res.result));}
    } catch (Exception) {
      console.log("FETCHING DOC MASTERS AT STARTUP: "+Exception.message);
    } 
    }
    },
    (error: any) => {
    console.log('Sync Service => Looks like there is a Network Issue while fetching Doc Masters.');
    }
    );
}

}
