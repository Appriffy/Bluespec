import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController, ModalController } from '@ionic/angular';
import { MasterService } from '../../services/master.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthConstants } from '../../config/AuthConstants';
import { Router } from '@angular/router';
import { Currency } from '../../dbmodels/currency';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss'],
})
export class SelectCurrencyPage implements OnInit {

  listing: Array<Currency>;
  filtered_listing: Array<Currency>;
  searchQuery: string;
  loading : boolean = true;

  localUser:LocalUser;

  constructor(public navCtrl: NavController, private masterService: MasterService,
    private storageService: StorageService,
    private modalController:ModalController,
    private router: Router,
    private authService: AuthService) {
      this.authService.getAuthCache().then(promisedValue=>{
        if(promisedValue){
          this.localUser = promisedValue;
        }
      });
  }
 
  ngOnInit(): void {
  this.storageService.get(AuthConstants.CURRENCIES).then(allList=>{
    if(allList){
       this.listing = allList;
       this.filtered_listing = allList;
       this.loading = false;
    }
  });
  }

  loadItems(){
    this.loading = true;
   this.masterService.getCurrencies().subscribe(allData=>{
    this.loading = false;
     if(allData){
      this.listing = allData.result;
      this.filtered_listing = allData.result;
     }
   });
  }

  initializeItems() {
    this.listing = this.filtered_listing;
  }

 /****************** SEARCH ITEMS ********************/
 searchList() {
  this.initializeItems();
  return this.listing = this.listing.filter((thisJob) => {
    return thisJob.currency.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });
}
/****************** SEARCH ITEMS ********************/

dismissModal(item: any) {
  //alert(item.title);
  this.modalController.dismiss(item);
}

closeModal() {
  this.modalController.dismiss();
}

}
