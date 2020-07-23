import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.page.html',
  styleUrls: ['./unauthorized.page.scss'],
})
export class UnauthorizedPage implements OnInit {

  constructor(public menu: MenuController, private location: Location) { }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  backClicked() {
    //alert();
    this.location.subscribe(locationChange=>{
      if(locationChange){
console.log("locationChange"+locationChange);
      }
    });
    setTimeout(() => {
      this.location.back();
    }, 200);
  }

}
