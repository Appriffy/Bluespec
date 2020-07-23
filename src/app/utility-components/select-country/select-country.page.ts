import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { AppCountryModel } from '../../signup/personal-profile/personal-profile.page';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.page.html',
  styleUrls: [
    '../../bluspecstyles/listing.page.scss',
    '../../bluspecstyles/listing.shell.scss',
    '../../bluspecstyles/listing.ios.scss',
  ],
})
export class SelectCountryPage implements OnInit {

  searchQuery: string;
  autocompleteItems:  Array<AppCountryModel>;
  filteredItems: Array<AppCountryModel>;
  constructor(public viewCtrl: ModalController, private storageService:StorageService ) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.COUNTRIES).then(allRes=>{
      if(allRes){
        this.autocompleteItems = allRes;
        this.filteredItems = allRes;
        //console.log("ITEMS => "+JSON.stringify(this.autocompleteItems));
      }
    });
  }

  initializeItems() {
     this.autocompleteItems = this.filteredItems;
  }

  searchList() {
    this.initializeItems();
    console.log("Searching "+this.searchQuery);
    if (this.searchQuery === undefined || this.searchQuery === "") return this.autocompleteItems;
    return this.autocompleteItems = this.autocompleteItems.filter((location) => {
      return location.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
    });
  }

  dismissModal(item: any) {
    this.viewCtrl.dismiss(item);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
