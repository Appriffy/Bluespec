import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/AuthConstants';
import { Platform } from '@ionic/angular';
import { LocalUser } from '../dbmodels/local-user';
import { AuthService } from '../services/auth.service';
import { SyncService } from '../services/sync.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
    './styles/categories.page.scss',
    './styles/categories.shell.scss',
    './styles/categories.responsive.scss',
    './../coming-soon/coming-soon.page.scss'
  ]
})
export class CategoriesPage implements OnInit{ 
  userData : any;
  platformDetails : string;
  userDataDebug : string;
  fullProfileDebug : string;
  localUser: LocalUser;
  jobAreas : string;
  jobSkills:string;
  studyAreas:string;
  eduLevels:string;


  constructor(public platform: Platform, private syncService: SyncService, private authService: AuthService, private storageService: StorageService){
  }

  triggerSyncService(){
     this.syncService.syncAppData();
  }

  ngOnInit(){
    this.userData = this.storageService.get(AuthConstants.AUTH);
    this.platformDetails = this.platform.platforms().toString();
    //this.userDataDebugFromService =  "Wo: "+JSON.stringify(this.authService.getAuthData());
    // if(this.platform.is('android') || this.platform.is('ios') || this.platform.is('core'))
    // {
    // }
    
    // this.localUser = this.storageService.get(AuthConstants.AUTH);
    // this.userDataDebug = JSON.stringify(this.localUser);

    //Right way 
    this.storageService
    .get(AuthConstants.AUTH)
    .then(res => {
    if (res) {
      this.localUser = res;
      this.userDataDebug = JSON.stringify(this.localUser);

    } else {
      this.localUser = null;
      this.userDataDebug = "No Debug Data";
    }
    })
    //Ends right way


    /********************/
    this.storageService
    .get(AuthConstants.MY_FULL_PROFILE)
    .then(res => {
    if (res) {
      this.fullProfileDebug = JSON.stringify(res);
    } else {
      this.fullProfileDebug = "No Debug Data";
    }
    })
    /********************/


  

     
  }

  loadJobSkills(){
    this.storageService
    .get(AuthConstants.JOB_SKILLS)
    .then(res => {
    if (res) {
      this.jobSkills = JSON.stringify(res);
      alert(this.jobSkills);
    } else {
      this.jobSkills = "No Job Skills Data";
      alert(this.jobSkills);
    }
    })
  }


  loadStudyAreas(){
      /********************/
      this.storageService
      .get(AuthConstants.STUDY_AREAS)
      .then(res => {
      if (res) {
        this.studyAreas = JSON.stringify(res);
      } else {
        this.studyAreas = "No Study Areas Data";
      }
      })
      /********************/
      alert(this.studyAreas);
  }

  
  loadJobAreas(){
    this.storageService
     .get(AuthConstants.JOB_AREAS)
     .then(res => {
     if (res) {
       this.jobAreas = JSON.stringify(res);
     } else {
       this.jobAreas = "No Job Areas Data";
     }
     })
    alert(this.jobAreas);
}

loadEduLevels(){
  this.storageService
      .get(AuthConstants.EDU_LEVELS)
      .then(res => {
      if (res) {
        this.eduLevels = JSON.stringify(res);
      } else {
        this.eduLevels = "No Edu Levels Data";
      }
      })
  alert(this.eduLevels);
}


loadJobTypes(){
  this.storageService
      .get(AuthConstants.JOB_TYPES)
      .then(res => {
        alert(JSON.stringify(res));
      })
  
}

loadCountries(){
  this.storageService
      .get(AuthConstants.COUNTRIES)
      .then(res => {
      if (res) {
        alert(JSON.stringify(res));
      } else {
        alert("NO COUNTRIES");
      }
      })

}

}
