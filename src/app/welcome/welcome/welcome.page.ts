import { Component, OnInit } from '@angular/core';
import { JobSkillsService } from '../../app-masters/job-skills/job-skills.service';
import { ModalController, MenuController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { CheckboxCheckedValidator } from '../../validators/checkbox-checked.validator';
import { MasterService } from '../../services/master.service';
import { CompanyService } from '../../companies/companies.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { myEnterAnimation } from '../../animations/enter_animation';
import { BluspecUserModel } from '../../user/profile/user-profile.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss', 
  '../../bluspecstyles/details.page.scss',
  '../../bluspecstyles/details.shell.scss']
})
export class WelcomePage implements OnInit {
  userData: BluspecUserModel = new BluspecUserModel();
  jobAreas = [];
  skills = [];
  professionals= [];
  companies = [];
  api_key:any;
  employerMode:boolean = false;
  isLoggedIn :boolean = false;
  localUser:any;
  devMode = AuthConstants.DEV_MODE;

  constructor(public firebaseService: JobSkillsService,
    public masterService:MasterService,
    private authService: AuthService,
    private storageService: StorageService,
    private alertController: AlertController,
    public modalController: ModalController,
    public router: Router,
    public toastService: ToastService,
    public menu: MenuController,
    private route: ActivatedRoute) { }

   
    getCompaniesOnBoard(){

       /******** START FETCH COMPANIES *******/ 
    this.masterService.getCompanyListCarosell(this.api_key).subscribe(
      (res: any) => {
        if (res) {
          this.storageService.store(AuthConstants.COMPANIES, res.items);
          console.log("FETCHED COMPANIES : "+JSON.stringify(res));
      this.companies = res.items;
      }
      },
      (error: any) => {
      this.toastService.presentToast('Looks like there is a Network Issue while fetching companies.');
      }
      );
     /******** ENDS FETCH COMPANIES THEN *******/
    }


    ionViewWillEnter() {
      this.menu.enable(true);
    }
    
/*************** HERO ************ */
ngOnInit() {
  //this.menu.enable(false);
  this.menu.enable(true);

  //Right way 
  this.storageService
  .get(AuthConstants.AUTH)
  .then(res => {
  if (res) {
    this.localUser = res;
    this.isLoggedIn = true;
    this.api_key = res.api_key;
    if(this.localUser != null && this.localUser.role_id == 2){
      this.employerMode = true;
    }
    this.getJobAreasFromLocalStorage();
    this.getJobSkillsFromLocalStorage();
    this.getCompaniesFromLocalStorage();

    //This is live fetch mode instead
    //this.getJobSkillsOnBoard();
    //this.getJobAreasOnBoard();
    //this.getCompaniesOnBoard();

    this.toastService.presentToast("Bluspec is on your board.  "+this.api_key);

  } else {
    this.localUser = null;
    this.isLoggedIn = false;
  }
  });
}

getJobSkillsOnBoard(){
    /******** START FETCH SKILLS *******/ 
    this.masterService.getSkills().subscribe(
      (res: any) => {
        if (!res.error) {
      console.log(JSON.stringify(res));
     this.skills = res.result;
     this.storageService.store(AuthConstants.JOB_SKILLS, res.result);
      }
      },
      (error: any) => {
        this.toastService.presentToast('Looks like there is a Network Issue while fetching skills.');
      }
      );
     /******** ENDS FETCH SKILLS THEN *******/  
}

getJobAreasOnBoard(){
    /******** START FETCH JOB AREAS *******/ 
    this.masterService.getJobAreas().subscribe(
      (res: any) => {
        if (!res.error) {
      console.log("/**************/ FETCHED JOB AREAS: "+JSON.stringify(res));
     this.jobAreas = res.result;
     this.storageService.store(AuthConstants.JOB_CATEGORIES, res.result);
      }
      },
      (error: any) => {
        this.toastService.presentToast('Looks like there is a Network Issue while fetching job areas.');
      }
      );
     /******** ENDS FETCH JOB AREAS *******/   
}


/************* ### LOCAL SYNCS ### *************/
getCompaniesFromLocalStorage(){
  this.storageService.get(AuthConstants.COMPANIES).then(results=>{
    if(results){
      this.companies = results;
    }else{
      if(AuthConstants.DEV_MODE){
      this.toastService.presentToast("Fetching companies from server.");
      }
      this.getCompaniesOnBoard();
    }
  });
}

getJobSkillsFromLocalStorage(){
  this.storageService.get(AuthConstants.JOB_SKILLS).then(results=>{
    if(results){
      this.skills = results;
    }else{
      if(AuthConstants.DEV_MODE){
      this.toastService.presentToast("Fetching job skills from server.");
      }
      this.getJobSkillsOnBoard();
    }
  });
}

getJobAreasFromLocalStorage(){
  this.storageService.get(AuthConstants.JOB_AREAS).then(results=>{
    if(results){
      this.jobAreas = results;
    }else{
      if(AuthConstants.DEV_MODE){
      this.toastService.presentToast("Fetching Job Areas from server.");
      }
      this.getJobAreasOnBoard();
    }
  });
}
/************* SYNC OVER ****************/
}
