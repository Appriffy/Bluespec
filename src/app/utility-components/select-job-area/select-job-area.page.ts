import { Component, OnInit } from '@angular/core';
import { JobAreaModel } from '../../dbmodels/job-areas';
import { AuthConstants } from '../../config/AuthConstants';
import { NavController, ModalController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { StorageService } from '../../services/storage.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-select-job-area',
  templateUrl: './select-job-area.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss'],

  // animations: [
  //   trigger('changeDivSize', [
  //     state('initial', style({
  //       backgroundColor: 'green',
  //       width: '100px',
  //       height: '100px'
  //     })),
  //     state('final', style({
  //       backgroundColor: 'red',
  //       width: '200px',
  //       height: '200px'
  //     })),
  //     transition('initial=>final', animate('1500ms')),
  //     transition('final=>initial', animate('1000ms'))
  //   ]),
  // ]
})
export class SelectJobAreaPage implements OnInit {
  listing: Array<JobAreaModel>;
  filtered_listing: Array<JobAreaModel>;
  searchQuery: string;
  loading : boolean = true;
  selectedArray: Array<JobAreaModel>;
  isMultiMode: boolean = false;
  
  constructor(private storageService: StorageService, private modalController: ModalController, private toastService: ToastService,
  ) {

  }

  ngOnInit(): void {
    this.storageService.get(AuthConstants.JOB_AREAS).then(value=>{
      if(value){
      this.filtered_listing = value;
      this.listing = value;
      this.loading = false;
      if(AuthConstants.DEV_MODE){
        console.log("Synced from Subject: "+JSON.stringify(value));
        //this.toastService.presentToast("Job areas list has been updated.");
      }
      }
    });
  }

  dismissModal(avatar?: JobAreaModel) {
    this.modalController.dismiss(avatar);
  }

  selectionDone(data:any) {
    alert("Selecion: "+data);
    this.modalController.dismiss(data);
  }

  addToSelection(avatar?: JobAreaModel){
    this.selectedArray.push(avatar);
  }


 /****************** SEARCH ITEMS ********************/
 initializeItems() {
  this.listing = this.filtered_listing;
}

 searchList() {
  this.initializeItems();
  return this.listing = this.listing.filter((thisJob) => {
    return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
  });
}
/****************** SEARCH ITEMS ********************/

}
