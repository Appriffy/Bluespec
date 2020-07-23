import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public router: Router, public storageService: StorageService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.logout();
    }, 2500);
  }


  logout(){
    console.log("/******* Logging Out *******/");
    this.storageService.clear();
    this.router.navigate(['auth/login']);
   }

}
