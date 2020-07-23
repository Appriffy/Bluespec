import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglePlaceResponse } from '../../dbmodels/google-place-response';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-location-autocomplete',
  templateUrl: './location-autocomplete.page.html',
  styleUrls: [
    './location-autocomplete.page.scss',
    './styles/places-listing.page.scss',
    './styles/places-listing.ios.scss',
    './styles/places-listing.shell.scss'
  ],
})
//https://developers.google.com/maps/documentation/javascript/geocoding
export class LocationAutocompletePage implements OnInit {
  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any;
  googlePlaceResponse:GooglePlaceResponse;
  service = new google.maps.places.AutocompleteService();
  constructor(public viewCtrl: ModalController, 
    private toastService: ToastService, private zone: NgZone) { 
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.geo = item;
    console.log("1. LocationAutocompletePage To be geocoded for "+JSON.stringify(item));
    this.geoCode(this.geo);//convert Address to lat and long
    this.toastService.presentToast(item);
    console.log("5. LocationAutocompletePage geocoding done "+JSON.stringify(this.googlePlaceResponse));
    //this.viewCtrl.dismiss(this.googlePlaceResponse.address);
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
     this.autocompleteItems = [];
     return;
    }

    let me = this;
    this.service.getPlacePredictions({
    input: this.autocomplete.query,
    componentRestrictions: {
      country: 'de'
    }
   }, (predictions, status) => {
     me.autocompleteItems = [];

   me.zone.run(() => {
     if (predictions != null) {
        predictions.forEach((prediction) => {
          me.autocompleteItems.push(prediction.description);
        });
       }
     });
   });
  }

  //convert Address string to lat and long
   geoCode(address:any) {
   let geocoder = new google.maps.Geocoder();
   console.log("2. LocationAutocompletePage geocoding "+JSON.stringify(address));
    geocoder.geocode({ 'address': address }, (results, status) => {
      console.log("3. LocationAutocompletePage geoCode STATUS => "+status);
      this.googlePlaceResponse.latitude = results[0].geometry.location.lat();
      this.googlePlaceResponse.longitude = results[0].geometry.location.lng();
      this.googlePlaceResponse.address = address;
      console.log("3. LocationAutocompletePage geoCode resolving => "+JSON.stringify(results)+" with Status"+status);
      console.log("3. LocationAutocompletePage geoCode resolved => "+JSON.stringify(this.googlePlaceResponse));
      this.toastService.presentToast("lat: " + this.latitude + ", long: " + this.longitude);
    });

    console.log("4. LocationAutocompletePage googlePlaceResponse => "+JSON.stringify(this.googlePlaceResponse));
 }

}
