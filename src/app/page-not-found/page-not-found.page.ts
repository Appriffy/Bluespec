import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: [
    './styles/page-not-found.page.scss'
  ]
})
export class PageNotFound implements OnInit {

  roleID: number = 0;
  constructor(public menu: MenuController, 
    private authService: AuthService,
    private location: Location, 
    private router: Router) { }

  ngOnInit(): void {
    this.menu.enable(false);
    this.authService.getAuthCache().then(datum=>{
      if(datum){
        this.roleID = datum.role_id;
      }
    });
  }

  backClicked() {
    alert(this.location.path);
    //this.location.back();
  }

  goToMyProfile() {
    this.router.navigate(["people/profile"]);
  }

  goToDashboard() {
    if(this.roleID == 1){
      this.router.navigate(["/dashboard/summary"]);
    }else{
      this.router.navigate(["/employer-dashboard"]);
    }
  }

  goToMyJobs() {
    this.router.navigate(["manage-jobs"]);
  }

  goToHome() {
    this.router.navigate(["welcome"]);
  }

}
