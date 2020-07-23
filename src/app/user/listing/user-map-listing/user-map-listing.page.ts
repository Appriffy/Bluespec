import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Capacitor, Plugins, GeolocationPlugin, GeolocationPosition} from '@capacitor/core';
import {Observable, of, from as fromPromise} from 'rxjs';
import { tap, map, switchMap} from 'rxjs/operators';
import { LoadingController, AlertController} from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MapComponent } from '../../../shared/components/map/map.component';
const { Toast, Geolocation} = Capacitor.Plugins;

@Component({
  selector: 'app-user-map-listing',
  templateUrl: './user-map-listing.page.html',
  styleUrls: ['./user-map-listing.page.scss'],
})
export class UserMapListingPage implements OnInit {
  @ViewChild(MapComponent, {static: false}) mapComponent: MapComponent;
  public coordinates$: Observable<GeolocationPosition>;
  public defaultPos = {latitude: 42, longitude: 2};
  currentLat:number;
  currentLong : number;
  search_radius:number;
  filterUsersForm : FormGroup;
  constructor(public router: Router,
    public menu: MenuController,
    private loadingController: LoadingController,
    private alertController: AlertController) {
     }


  ngOnInit() {
    this.filterUsersForm = new FormGroup({
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required)
      //radius: new FormControl(10, counterRangeValidator(1, 200))
    });

    this.displayLoader()
    .then((loader: any) => {
      // get position
      return this.getCurrentPosition()
        .then(position => {
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let mapOptions = {
                    center: latLng,
                    zoom: 15
                };
             //alert(position.coords.latitude+", "+ position.coords.longitude); 
             this.currentLat = position.coords.latitude;
             this.currentLong = position.coords.longitude;
            //  this.filterUsersForm.controls.latitude.setValue(this.currentLat);
            //  this.filterUsersForm.controls.longitude.setValue(this.currentLong);
          // fermer loader + return position
          loader.dismiss();
          return position;
        })
        // if error
        .catch(err => {
          // fermer loader + return NULL
          loader.dismiss();
          return null;
        });
    })
    .then(position => (position instanceof Error) ? this.presentAlert(position.message) : null)
    // do not forget to handle promise rejection
    .catch(err => {
      this.presentAlert(err.message);
    });


    // let center = this.mapComponent.map.getCenter();
    // this.mapComponent.addMarker(center.lat(), center.lng());
  }

  async displayLoader(){
    const loading = this.loadingController.create({
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true
    });
    await (await loading).present();
    return loading;
  }

  private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
  
    const alert = await this.alertController.create({
      header: 'Alert!',
      subHeader: 'Wadfak',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return alert;
  }

  private async getCurrentPosition(): Promise<any> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    // handle Capacitor Errors
    .catch(err => {
      console.log('ERR', err);
      return new Error(err.message || 'message perso');
    });

    this.coordinates$ = fromPromise(POSITION).pipe(
      switchMap((data: any) => of(data.coords)),
      tap(data => console.log(data))
    );
    return POSITION;
  }


  saveLocationPrefs(){
    alert("This feature is coming.");
  }

  addMarkerTest(){
    this.mapComponent.addMarker(42, 9);
  }

}
