import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/AuthConstants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  constructor(public storageService: StorageService, public router: Router, 
    private authenticationService: AuthService) {}
  
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
    this.storageService
    .get(AuthConstants.AUTH)
    .then(res => {
    if (res && res["api_key"] && res["id"] > 0) {
      console.log("canActivate() "+JSON.stringify(res));
    resolve(true);
    } else {
    //this.router.navigate(['auth/login']);
    alert("Auth Guard Can not Activate with => "+JSON.stringify(res));
    resolve(false);
    }
    })
    .catch(err => {
      //this.router.navigate(['auth/login']);
      alert("Auth Guard Exception => "+err.message);
      resolve(false);
    });
    });


    // const currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser) {
    //         // check if route is restricted by role
    //         if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
    //             // role not authorised so redirect to home page
    //             this.router.navigate(['/']);
    //             return false;
    //         }
 
    //         // authorised so return true
    //         return true;
    //     }

    }

}
