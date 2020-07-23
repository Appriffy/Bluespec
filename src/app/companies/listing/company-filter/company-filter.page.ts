import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { SkillType } from '../../../dbmodels/skill_type';
import { counterRangeValidator } from '../../../components/counter-input/counter-input.component';
import { MasterService } from '../../../services/master.service';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../../services/storage.service';
import { CompanyService } from '../../companies.service';
import { Capacitor } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../../components/google-map/google-map.component';

import {Observable, of, from as fromPromise} from 'rxjs';
import { tap, map, switchMap} from 'rxjs/operators';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.page.html',
  styleUrls: ['./company-filter.page.scss'],
})
export class CompanyFilterPage implements OnInit {
  validationsForm: FormGroup;
  //skill_types: Array<SkillType>;
  skill_types: Array<any>;
  skillsHolder: Array<any>;
  sort_options: Array<any>;
  //currentRatingRange: number = 0;
  filterArr = {
    pincode:"",
    search_radius: 50,
    skills: [],
    sort_by: "RELEVANCE",
    tags:[]
  };
  
  constructor(private storageService: StorageService, private formBuilder: FormBuilder, 
    private masterService: MasterService, private modalController: ModalController,
    private dealsService: CompanyService,
    private toaster: ToastService) { }

  ngOnInit() {
    let search_input = document.getElementById('search_input');
    let autocmplete = new google.maps.places.AutocompleteService();
    this.loadCurrentLocation();

    this.validationsForm = new FormGroup({
      experience: new FormControl(6, counterRangeValidator(1, 12)),
      latitude: new FormControl(''),
      longitude: new FormControl('')
    });
     /**************
     this.masterService.getSkills().subscribe(
      (res: any) => {
      if (!res.error) {
      //this.toastService.presentToast(JSON.stringify(res)); 
      this.skill_types = res.result;
      //this.skill_types = JSON.stringify(res.result);
      console.log("######## skill_types ###########: "+this.skill_types);
      //this.skill_types = JSON.parse(res.result);
      alert(this.skill_types);
      } else {
        alert(res.message);
      }
      },
      (error: any) => {
      alert('Looks like there is a Network Issue while fetching skills.');
      }
      );
     ***************/

      /********** STORE ********
      this.storageService
      .get(AuthConstants.JOB_SKILLS)
      .then(res => {
      if (res) {
        this.skill_types = res;
        //this.userDataDebug = JSON.stringify(this.localUser);
        if(this.skill_types === null || this.skill_types === undefined){
         //Fetch from server
         alert("This can not happen");
        }
      } else {
        //Fetch from server
      }
      })
      ********** STORED ********/

    //  this.skill_types = [
    //    {"id":8,"title":"Cleaner", checked:false},
    //    {"id":7,"title":"Painter", checked:false},
    //    {"id":6,"title":"Plumber", checked:false},
    //    {"id":5,"title":"Carpenter", checked:false},
    //    {"id":4,"title":"Advisor", checked:false},
    //    {"id":3,"title":"Team Leader", checked:false},
    //  {"id":2,"title":"Management", checked:false},
    //  {"id":1,"title":"Administrator", checked:false}
    // ];

     /******** START FETCH SKILLS *******/ 
     this.masterService.getJobAreas().subscribe(
      (res: any) => {
        if (!res.error) {
      //console.log(JSON.stringify(res));
     this.skill_types = res.result;
     this.skillsHolder = res.result;
this.skill_types.map((item) => {
  (this.validationsForm.controls.skills as FormArray).push(new FormControl());
});

      }
      },
      (error: any) => {
      alert('Looks like there is a Network Issue while fetching skills.');
      }
      );
     /******** ENDS FETCH SKILLS THEN *******/

    this.sort_options = ["NEAREST DISTANCE", "MOST RECENT"];
  }

  setSearchRadius(value){
    this.filterArr.search_radius = value;
  }

  filterItems(): void {
    this.onSubmit();
  }

  sortingMethodSelected(value) : void {
    this.filterArr.sort_by = value;
  }
  

  onSubmit() {
    this.modalController.dismiss();
    this.dealsService.setFilterData(this.filterArr);
    alert(JSON.stringify(this.filterArr));
  }

  updateFilter(appt:any) {
    if(appt.checked) {
      let index = this.filterArr.skills.indexOf(appt.id)
      this.filterArr.skills.splice(index, 1)
      console.log("####### REMOVED #### :"+appt.id)
    }
    else {
      this.filterArr.skills.push(appt.id)
      console.log("####### ADDED #### :"+appt.id)
    }
    console.log("####### SKILLS ARRAY  #### :"+this.filterArr.skills.join(', '))
  }


  /********** Advanced ***********/

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
  
  loadCurrentLocation(){
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
             this.validationsForm.controls.latitude.setValue(position.coords.latitude);
             this.validationsForm.controls.longitude.setValue(position.coords.longitude);
          return position;
        })
        // if error
        .catch(err => {
          return null;
        });
  }

  /********************/
}
