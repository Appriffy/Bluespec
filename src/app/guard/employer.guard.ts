import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/AuthConstants';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivate {
  
  constructor(public storageService: StorageService, 
    public router: Router, 
    public toastService: ToastService, 
    private authenticationService: AuthService) {}
  
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
    this.storageService
    .get(AuthConstants.AUTH)
    .then(res => {
    if(res){
        if (res["api_key"] && (res["role_id"] === 1 || res["role_id"] === 2)) {
            resolve(true);
            } else {
            //this.router.navigate(['auth/login']);
            alert("You are not allowed to access this priviledge as a grafter.");
            resolve(false);
            }
    }else{
   this.toastService.presentToast("We could not validate your session. Please login again to continue.");
   this.authenticationService.logout();
    }
    })
    .catch(err => {
      alert("You are not allowed to access this priviledge.");
      resolve(false);
    });
    });

    }

}
