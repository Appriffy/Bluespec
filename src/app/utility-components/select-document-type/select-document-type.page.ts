import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController, ModalController } from '@ionic/angular';
import { MasterService } from '../../services/master.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { LocalUser } from '../../dbmodels/local-user';
import { AuthConstants } from '../../config/AuthConstants';
import { DocumentMaster } from '../../dbmodels/document-master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-document-type',
  templateUrl: './select-document-type.page.html',
  styleUrls: ['../../bluspecstyles/listing.page.scss',
  '../../bluspecstyles/listing.shell.scss',
  '../../bluspecstyles/listing.ios.scss'],
})
export class SelectDocumentTypePage implements OnInit {

  listing: Array<DocumentMaster>;
  filtered_listing: Array<DocumentMaster>;
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
  this.storageService.get(AuthConstants.DOCUMENT_MASTERS).then(allList=>{
    if(allList){
       this.listing = allList;
       this.filtered_listing = allList;
       this.loading = false;
    }
  });
  }

  loadItems(){
    this.loading = true;
   this.masterService.getMasterDocuments().subscribe(allData=>{
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
    return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
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

goBack(){
  this.closeModal();
  this.router.navigate(['/list-documents', this.localUser.id]);
}

}
