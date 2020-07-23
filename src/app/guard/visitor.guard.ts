import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/AuthConstants';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router, 
    private authenticationService: AuthService) {}

    canActivate(): Promise<boolean> {
      return new Promise(resolve => {
      this.storageService
      .get(AuthConstants.AUTH)
      .then(res => {
      //alert(JSON.stringify(res));
      if(res === undefined || res === null){
        resolve(true);
      }else{
        if (res && res["api_key"] && res["id"] > 0 && res["status"] == "Active") {
          console.log("Inside VisitorGuard canActivate() "+JSON.stringify(res));
          resolve(false);
          this.router.navigate(['dashboard']);
          //resolve(false);
        } else {
          resolve(true);
        }
      }
      })
      .catch(err => {
        console.log("Error in VisitorGuard: canActivate() "+err);
        //this.router.navigate(['auth/login']);
        resolve(true);
      });
      });
  
      }
      
}
