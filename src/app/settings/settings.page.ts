import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SettingsModel } from '../dbmodels/settings-model';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/AuthConstants';
import { LoadingServiceService } from '../services/loading-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['../bluspecstyles/filter.page.scss',
  './settings.page.scss'],
})
export class SettingsPage implements OnInit {

  switchersForm: FormGroup;
  settingsModel: SettingsModel;

  constructor(private authService:AuthService,
    private storageService: StorageService,
    private loadingController: LoadingServiceService,
    public router:Router) { }

  ngOnInit() {
    
    this.switchersForm = new FormGroup({
      debugMode: new FormControl(true),
      devMode: new FormControl(false),
      enablePush: new FormControl(false),
      enableLoading: new FormControl(false),
      strictMode: new FormControl(false),
      syncTimer: new FormControl(0)
    });

    this.authService.getAuthCache().then(authData=>{
      if(authData){
      if(authData.role_id !== 1){
        this.router.navigateByUrl("/welcome");
      }
      }else{
        this.authService.logout();
      }
   });

    this.storageService.get(AuthConstants.APP_SETTINGS).then(appSettings=>{
      if(appSettings){
       console.log("Settings exist!");
       console.log("Settings => "+JSON.stringify(appSettings));
       this.settingsModel = appSettings;
      }else{
       console.log("No settings exist!");
       this.settingsModel = new SettingsModel();
      }
      this.updateSettingsForm();
   });

  }

  updateSettingsForm(){
    this.switchersForm.controls.debugMode.patchValue(this.settingsModel.debugMode);
    this.switchersForm.controls.devMode.patchValue(this.settingsModel.devMode);
    this.switchersForm.controls.enablePush.patchValue(this.settingsModel.enablePush);
    this.switchersForm.controls.enableLoading.patchValue(this.settingsModel.enableLoading);
    this.switchersForm.controls.strictMode.patchValue(this.settingsModel.strictMode);
    this.switchersForm.controls.syncTimer.patchValue(this.settingsModel.syncTimer);
  }

  saveSettings(){
    this.loadingController.present('Saving Settings');
    //console.log('########## Final Result #####: '+this.switchersForm.value);
    this.settingsModel.debugMode = this.switchersForm.value.debugMode;
    this.settingsModel.devMode = this.switchersForm.value.devMode;
    this.settingsModel.enableLoading = this.switchersForm.value.enableLoading;
    this.settingsModel.enablePush = this.switchersForm.value.enablePush;
    this.settingsModel.strictMode = this.switchersForm.value.strictMode;
    this.settingsModel.syncTimer = this.switchersForm.value.syncTimer;
    this.storageService.store(AuthConstants.APP_SETTINGS, this.settingsModel);
    this.loadingController.dismiss().then(()=>{
      this.router.navigateByUrl("/dashboard/summary");
    });
    //this.router.navigateByUrl("/dashboard/summary");
  }

}
