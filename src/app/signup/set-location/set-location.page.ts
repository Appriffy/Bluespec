import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Capacitor, Plugins, GeolocationPlugin, GeolocationPosition} from '@capacitor/core';
import {Observable, of, from as fromPromise} from 'rxjs';
import { tap, map, switchMap} from 'rxjs/operators';
import { LoadingController, AlertController} from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input.component';
import { RegistrationService } from '../registration.service';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { UserService } from '../../user/user.service';
import { AuthService } from '../../services/auth.service';
import { BluspecUserModel } from '../../user/profile/user-profile.model';

const { Toast, Geolocation} = Capacitor.Plugins;
@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.page.html',
  styleUrls: ['./set-location.page.scss'],
})
export class SetLocationPage implements OnInit {
  //  @ViewChild(MapComponent, {static: false}) mapComponent: MapComponent;
   //@ViewChild('pleaseConnect', {static: false}) pleaseConnect: ElementRef;
   @ViewChild(GoogleMapComponent, { static: true }) _GoogleMap: GoogleMapComponent;
   map: google.maps.Map;
   mapOptions: google.maps.MapOptions = {
     zoom: 15,
     center: {lat: -34.9199842, lng: -56.149849}
     // uncomment the following line if you want to remove the default Map controls
     // disableDefaultUI: true
   };

   autocompleteService: any;
   placesService: any;
   query: string = '';
   places: any = [];
   searchDisabled: boolean;
   saveDisabled: boolean;
   location: any;  


  public coordinates$: Observable<GeolocationPosition>;
  public defaultPos = {latitude: 42, longitude: 2};
  currentLat:number;
  currentLong : number;
  search_radius:number;
  rangeForm : FormGroup;

  cachedData: BluspecUserModel;
  
  constructor(public router: Router,
    public menu: MenuController,
    private loadingController: LoadingController,
    private registrationService: RegistrationService,
    private userService:UserService,
    private authService: AuthService,
    private alertController: AlertController) {
    this.searchDisabled = true;
    this.saveDisabled = true;
     }

  ngOnInit() {

    this.registrationService.getCachedData().then(res => {
      if (res !== undefined) {
          this.cachedData = res;
          // if(this.cachedData != null && this.cachedData.latitude != "" && this.cachedData.longitude != ""){
          // alert("No need to fetch: "+this.cachedData.latitude+", "+this.cachedData.longitude);
          // }else{
          //   this.loadCurrentLocation();
          // }

          //master old
          //this.loadCurrentLocation();
      }
      });

    this.rangeForm = new FormGroup({
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
      address: new FormControl(''),
      radius: new FormControl(10, counterRangeValidator(1, 200))
    });

 


    // let center = this.mapComponent.map.getCenter();
    // this.mapComponent.addMarker(center.lat(), center.lng());
  }

  loadCurrentLocation(){
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
             this.rangeForm.controls.latitude.setValue(this.currentLat);
             this.rangeForm.controls.longitude.setValue(this.currentLong);
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
  }

  async displayLoader(){
    const loading = this.loadingController.create({
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true
    });

    //Culprits the previous step page
    //await (await loading).present();
    return loading;
  }

  private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
  
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return alert;
  }


  ionViewDidLoad(): void {
    this.placesService = new google.maps.places.PlacesService(this.map);
    this.searchDisabled = false;
console.log("ionViewDidLoad");
}

ngAfterViewInit(): void {
  
  //Map Works
  this._GoogleMap.$mapReady.subscribe(map => {
    this.map = map;
  });
  //this.createLoader();

  this.loadCurrentLocation();
  
//  let search_input = document.getElementById('search_input');
//   let autocmplete = new google.maps.places.AutocompleteService();

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
    //alert("This feature is coming.");
    this.cachedData.latitude = this.rangeForm.value.latitude;
    this.cachedData.longitude = this.rangeForm.value.longitude;
    this.registrationService.setCachedData(this.cachedData);
    //console.log('saveLocationPrefs() ');
    //this.router.navigate(['verify-account']);
  }

  rangeChange(range: any) {
    console.log('range change', range);
    //this.search_radius = range.value;
     //this.mapComponent.
    // var name = range.target.attributes.value;
    // console.log('Range# '+name);
  }


   registerUser(){
    this.displayLoader();
     this.userService.callRegistrationAPI(null, this.cachedData).subscribe(
      (res: any) => {
        //alert(JSON.stringify(res)); 
        //this.toastService.presentToast(JSON.stringify(res)); 
        this.loadingController.dismiss();
        console.log('Result# '+res.message);
      if (!res.error) {
       if(res.myProfile){
        this.authService.setMyFullProfile(res.myProfile);
       }
      /********** NAVIGATE WITH USER ID **********/
        this.presentAlert(res.message);
      this.router.navigate(['/registration/verify-account'], {queryParams :{user_id : res.id}});
      } else {
        //this.toastService.presentToast(res.message);
        this.presentAlert(res.message);
      }
      },
      (error: any) => {
       this.loadingController.dismiss();
      this.presentAlert('Looks like there is a Network Issue.');
      }
      );
  }

  nextStep(){
    if(this.rangeForm.valid){
      this.saveLocationPrefs();
      this.registerUser();
      //this.router.navigate(['professional-profile']);
    }
  }

  prevStep(){
    this.router.navigate(['/registration/professional-profile']);
  }

  // addMarkerTest(){
  //   this._GoogleMap.addMarker(42, 9);
  // }

  searchPlace(){
    this.saveDisabled = true;
    if(this.query.length > 0 && !this.searchDisabled) {

        let config = {
            types: ['geocode'],
            input: this.query
        }

        this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
            if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
                this.places = [];
                predictions.forEach((prediction) => {
                    this.places.push(prediction);
                });
            }
        });

    } else {
        this.places = [];
    }

}
}
