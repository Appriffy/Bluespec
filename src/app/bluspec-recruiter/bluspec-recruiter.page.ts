import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {Observable, of, from as fromPromise} from 'rxjs';
import { tap, map, switchMap} from 'rxjs/operators';

import { IonSlides, MenuController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { ToastService } from '../services/toast.service';
import { LocationAutocompletePage } from './location-autocomplete/location-autocomplete.page';
import { MasterService } from '../services/master.service';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';
import { counterRangeValidator } from '../components/counter-input/counter-input.component';

@Component({
  selector: 'app-recuiter',
  templateUrl: './bluspec-recruiter.page.html',
  styleUrls: [
    './styles/getting-started.page.scss',
    './styles/getting-started.shell.scss',
    './styles/getting-started.responsive.scss'
  ]
})
export class BluspecRecuiterPage implements OnInit, AfterViewInit {

  gettingStartedForm: FormGroup;
  address : any;
  dataReturned: any;
  jobSkillsArr : [];
//followingInterests
  @ViewChild(GoogleMapComponent, { static: true }) _GoogleMap: GoogleMapComponent;
  map: google.maps.Map;
  mapOptions: google.maps.MapOptions = {
    zoom: 15,
    center: {lat: -34.9199842, lng: -56.149849}
    // uncomment the following line if you want to remove the default Map controls
    // disableDefaultUI: true
  };
  loadingElement: any;

  constructor(public menu: MenuController, public loadingController:LoadingController,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private masterService:MasterService,
    private toaster: ToastService) {
    this.gettingStartedForm = new FormGroup({
      // latitude: new FormControl('', Validators.required),
      // longitude: new FormControl('', Validators.required),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      address: new FormControl(''),
      //radius: new FormControl(10, counterRangeValidator(1, 200)),
      //skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
      radius: new FormControl(10),
      skills: new FormArray([])
    });

    this.address = {
      place: ''
    };
  }

  ngOnInit(): void {
    this.menu.enable(false);

    this.masterService.getSkills().subscribe(
      (res: any) => {
        if (!res.error) {
      //console.log(JSON.stringify(res));
     this.jobSkillsArr = res.result;
this.jobSkillsArr.map((item) => {
 // (this.gettingStartedForm.controls.skills as FormArray).push(new FormControl());
  //console.log(item.title);
});

      }
      },
      (error: any) => {
      alert('Looks like there is a Network Issue while fetching skills.');
      }
      );
     /******** ENDS FETCH SKILLS THEN *******/  

  }

  ngAfterViewInit(): void {
  
    //Map Works
    this._GoogleMap.$mapReady.subscribe(map => {
      this.map = map;
    });
    this.createLoader();

    this.loadCurrentLocation();
    
   let search_input = document.getElementById('search_input');
    let autocmplete = new google.maps.places.AutocompleteService();

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
                this.toaster.presentToast("Current Location: "+position.coords.latitude+", "+ position.coords.longitude);
             //alert(position.coords.latitude+", "+ position.coords.longitude); 
             //this.currentLat = position.coords.latitude;
             //this.currentLong = position.coords.longitude;
             this.gettingStartedForm.controls.latitude.setValue(position.coords.latitude);
             this.gettingStartedForm.controls.longitude.setValue(position.coords.longitude);
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

    // this.coordinates$ = fromPromise(POSITION).pipe(
    //   switchMap((data: any) => of(data.coords)),
    //   tap(data => console.log(data))
    // );
    return POSITION;
  }

  async createLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Trying to get your current location...'
    });
  }

  async presentLoader() {
    await this.loadingElement.present();
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }

  geolocateMe() {

    this.presentLoader();
    Geolocation.getCurrentPosition().then(position => {

      const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.panTo(current_location);

      // add a marker
      const marker = new google.maps.Marker({
        position: current_location,
        title: 'You are here!',
        // animation: google.maps.Animation.DROP
      });

      // To add the marker to the map, call setMap();
      marker.setMap(this.map);

    }).catch((error) => {
      console.log('Error getting current location', error);

    }).finally(() => this.dismissLoader());
  }

  async showAddressModal () {
    // let modal = this.modalCtrl.create(LocationAutocompletePage);
    // let me = this;
    // modal.onDidDismiss(data => {
    //   this.address.place = data;
    // });
    // modal.present();

    const modal = await this.modalCtrl.create({
      component: LocationAutocompletePage,
      cssClass: 'fullscreen-modal-css'
    });

    modal.onDidDismiss().then((dataReturned ) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned;
        console.log("dataReturned.data: "+dataReturned.data);
        alert('Modal Sent Data :'+ dataReturned.data);
        this.address.place = "Geolocation to be integreted";
        //alert('Modal Sent Data :'+ dataReturned.data.address);
      }else{
        alert('Modal did not sent data');
        this.address.place = "Location to be integreted";
      }
    });

    await modal.present();
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

}
