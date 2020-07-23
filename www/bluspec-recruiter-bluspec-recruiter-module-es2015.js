(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bluspec-recruiter-bluspec-recruiter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bluspec-recruiter/bluspec-recruiter.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bluspec-recruiter/bluspec-recruiter.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"create-user-form ion-page\" [formGroup]=\"gettingStartedForm\"> \n  <ion-header no-border>\n    <ion-toolbar color=\"primary\">\n      <ion-title slot=\"\">Select Location</ion-title>\n      <ion-buttons slot=\"end\">\n       \n        <ion-buttons  (click)=\"loadCurrentLocation()\">\n          <ion-button fill=\"outline\" color=\"facebook\">LOCATE</ion-button>\n        </ion-buttons>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"create-user-content\">\n  <google-map [mapOptions]=\"mapOptions\"></google-map>\n</ion-content>\n<ion-footer>\n  \n  <ion-item-group class=\"filters-content filters-group\" style=\"display: block;\">\n    <ion-item-divider>\n      <ion-label class=\"range-label\">SELECT JOB LOCATION</ion-label>\n    </ion-item-divider>\n   \n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Choose hiring address</ion-label>\n            <ion-input (click)=\"showAddressModal()\" type=\"text\" formControlName=\"address\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"range-item\" style=\"display: none;\">\n        <ion-col size=\"6\">\n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Latitude</ion-label>\n            <ion-input type=\"text\" formControlName=\"latitude\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Longitude</ion-label>\n            <ion-input type=\"text\" formControlName=\"longitude\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\" style=\"margin-left:15px;\">Accept Job Offers Within </span>\n            <span class=\"range-value\">{{ gettingStartedForm.controls.radius.value }} K.m</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"radius\" color=\"secondary\" (ionChange)=\"rangeChange($event)\" min=\"0\" max=\"50\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n  </ion-item-group>\n\n  <ion-row class=\"form-actions-wrapper\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" [disabled]=\"!gettingStartedForm.valid\" fill=\"solid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; NEXT</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/bluspec-recruiter/bluspec-recruiter.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/bluspec-recruiter/bluspec-recruiter.module.ts ***!
  \***************************************************************/
/*! exports provided: BluspecRecuiterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluspecRecuiterPageModule", function() { return BluspecRecuiterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _bluspec_recruiter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bluspec-recruiter.page */ "./src/app/bluspec-recruiter/bluspec-recruiter.page.ts");
/* harmony import */ var _location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location-autocomplete/location-autocomplete.page */ "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");









const routes = [
    {
        path: '',
        component: _bluspec_recruiter_page__WEBPACK_IMPORTED_MODULE_7__["BluspecRecuiterPage"]
    }
];
let BluspecRecuiterPageModule = class BluspecRecuiterPageModule {
};
BluspecRecuiterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_bluspec_recruiter_page__WEBPACK_IMPORTED_MODULE_7__["BluspecRecuiterPage"], _location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__["LocationAutocompletePage"]],
        entryComponents: [_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__["LocationAutocompletePage"]]
    })
], BluspecRecuiterPageModule);



/***/ }),

/***/ "./src/app/bluspec-recruiter/bluspec-recruiter.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/bluspec-recruiter/bluspec-recruiter.page.ts ***!
  \*************************************************************/
/*! exports provided: BluspecRecuiterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluspecRecuiterPage", function() { return BluspecRecuiterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location-autocomplete/location-autocomplete.page */ "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/master.service */ "./src/app/services/master.service.ts");






const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];




let BluspecRecuiterPage = class BluspecRecuiterPage {
    constructor(menu, loadingController, alertController, modalCtrl, masterService, toaster) {
        this.menu = menu;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.masterService = masterService;
        this.toaster = toaster;
        this.mapOptions = {
            zoom: 15,
            center: { lat: -34.9199842, lng: -56.149849 }
            // uncomment the following line if you want to remove the default Map controls
            // disableDefaultUI: true
        };
        this.gettingStartedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // latitude: new FormControl('', Validators.required),
            // longitude: new FormControl('', Validators.required),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            //radius: new FormControl(10, counterRangeValidator(1, 200)),
            //skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1))
            radius: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](10),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.address = {
            place: ''
        };
    }
    ngOnInit() {
        this.menu.enable(false);
        this.masterService.getSkills().subscribe((res) => {
            if (!res.error) {
                //console.log(JSON.stringify(res));
                this.jobSkillsArr = res.result;
                this.jobSkillsArr.map((item) => {
                    // (this.gettingStartedForm.controls.skills as FormArray).push(new FormControl());
                    //console.log(item.title);
                });
            }
        }, (error) => {
            alert('Looks like there is a Network Issue while fetching skills.');
        });
        /******** ENDS FETCH SKILLS THEN *******/
    }
    ngAfterViewInit() {
        //Map Works
        this._GoogleMap.$mapReady.subscribe(map => {
            this.map = map;
        });
        this.createLoader();
        this.loadCurrentLocation();
        let search_input = document.getElementById('search_input');
        let autocmplete = new google.maps.places.AutocompleteService();
    }
    displayLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = this.loadingController.create({
                animated: true,
                spinner: "bubbles",
                message: 'Please wait...',
                translucent: true
            });
            yield (yield loading).present();
            return loading;
        });
    }
    loadCurrentLocation() {
        this.displayLoader()
            .then((loader) => {
            // get position
            return this.getCurrentPosition()
                .then(position => {
                let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let mapOptions = {
                    center: latLng,
                    zoom: 15
                };
                this.toaster.presentToast("Current Location: " + position.coords.latitude + ", " + position.coords.longitude);
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
    getCurrentPosition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isAvailable = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('Geolocation');
            if (!isAvailable) {
                console.log('Err: plugin not available');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new Error('Err: plugin not available'));
            }
            const POSITION = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Geolocation.getCurrentPosition()
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
        });
    }
    createLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingElement = yield this.loadingController.create({
                message: 'Trying to get your current location...'
            });
        });
    }
    presentLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadingElement.present();
        });
    }
    dismissLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loadingElement) {
                yield this.loadingElement.dismiss();
            }
        });
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
            });
            // To add the marker to the map, call setMap();
            marker.setMap(this.map);
        }).catch((error) => {
            console.log('Error getting current location', error);
        }).finally(() => this.dismissLoader());
    }
    showAddressModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let modal = this.modalCtrl.create(LocationAutocompletePage);
            // let me = this;
            // modal.onDidDismiss(data => {
            //   this.address.place = data;
            // });
            // modal.present();
            const modal = yield this.modalCtrl.create({
                component: _location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__["LocationAutocompletePage"],
                cssClass: 'fullscreen-modal-css'
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned;
                    console.log("dataReturned.data: " + dataReturned.data);
                    alert('Modal Sent Data :' + dataReturned.data);
                    this.address.place = "Geolocation to be integreted";
                    //alert('Modal Sent Data :'+ dataReturned.data.address);
                }
                else {
                    alert('Modal did not sent data');
                    this.address.place = "Location to be integreted";
                }
            });
            yield modal.present();
        });
    }
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: '',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            return alert;
        });
    }
};
BluspecRecuiterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"])
], BluspecRecuiterPage.prototype, "_GoogleMap", void 0);
BluspecRecuiterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recuiter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bluspec-recruiter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bluspec-recruiter/bluspec-recruiter.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/getting-started.page.scss */ "./src/app/bluspec-recruiter/styles/getting-started.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/getting-started.shell.scss */ "./src/app/bluspec-recruiter/styles/getting-started.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/getting-started.responsive.scss */ "./src/app/bluspec-recruiter/styles/getting-started.responsive.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
], BluspecRecuiterPage);



/***/ }),

/***/ "./src/app/bluspec-recruiter/styles/getting-started.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/bluspec-recruiter/styles/getting-started.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: #eee;\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n}\n\n:host {\n  background-color: #eee;\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\ngoogle-map {\n  display: contents;\n  width: 100%;\n  height: 80%;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n  display: contents;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: #222;\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 25px;\n}\n\n.question-slide .slide-subtitle {\n  color: #222;\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 10px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 10px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlYy1yZWNydWl0ZXIvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGJsdXNwZWMtcmVjcnVpdGVyXFxzdHlsZXNcXGdldHRpbmctc3RhcnRlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JsdXNwZWMtcmVjcnVpdGVyL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9ibHVzcGVjLXJlY3J1aXRlci9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXHNjcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNDQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFFQSw4QkFBQTtFQUNBLHNDQUFBO0FDTEY7O0FEU0E7RUFFRSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOENBQUE7RUFFQSx1QkFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFdBO0VBQ0UsdURBQUE7RUFFQSxxQ0FBQTtBQ1RGOztBRFdFO0VBQ0UsV0FBQTtBQ1RKOztBRGNFO0VBQ0Usb0NBQUE7QUNYSjs7QURjSTtFQUNFLGFBQUE7QUNaTjs7QURpQkE7RUFDRSxvQ0FBQTtBQ2RGOztBRGlCQTtFQUNFLFlBQUE7QUNkRjs7QURpQkE7RUFJRSxZQUFBO0FDakJGOztBRG1CRTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxvRUFBQTtBQ2xCSjs7QUR3QkU7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3JCSjs7QUR3QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdEJKOztBRDJCRTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUN4Qko7O0FEMkJFO0VBQ0UsZ0JBQUE7RUUzR0Ysd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEaUZGOztBQzlFRTtFQUNFLGFBQUE7QURnRko7O0FEdUJJO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQ3JCTjs7QUR1Qk07RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7QUN0QlI7O0FEd0JRO0VBQ0UsaUNBQUE7QUN0QlY7O0FEeUJRO0VBQ0UsaURBQUE7RUFDQSwyQ0FBQTtBQ3ZCVjs7QUQwQlE7RUFDRSx3Q0FBQTtBQ3hCVjs7QUQyQlE7RUFDRSxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FDM0JWOztBRG1DRTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFHQSxpQkFBQTtBQ2xDSjs7QURxQ0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtBQ25DSjs7QURzQ0U7RUFDRSxnQkFBQTtFRXZLRix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QURrSUY7O0FDL0hFO0VBQ0UsYUFBQTtBRGlJSjs7QURrQ0k7RUFDRSw4QkFBQTtFQUVBLHlDQUFBO0VBQ0EsNENBQUE7QUNqQ047O0FEbUNNO0VBQ0UseUNBQUE7RUFDQSw0Q0FBQTtBQ2pDUjs7QURtQ1E7RUFDRSwyQ0FBQTtBQ2pDVjs7QURvQ1E7RUFDRSwwQ0FBQTtBQ2xDVjs7QUR3Q0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxrREFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFFQSx5Q0FBQTtBQ3hDSjs7QUQwQ0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0FDeENOOztBRDZDSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUM3Q047O0FEZ0RJO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLG9EQUFBO0VBQ0EsOERBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtBQy9DTjs7QURxRE07RUFDRSxhQUFBO0FDbkRSOztBRDJESTtFQUNFLGFBQUE7QUN4RE47O0FEaUVFO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0VBRUEsK0ZBQUE7QUMvREo7O0FEaUVJO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQy9ETjs7QURxRUE7RUFDRSxvQ0FBQTtBQ2xFRjs7QURvRUk7RUFDSSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBRUEsWUFBQTtBQ25FUjs7QURzRUU7RUFDRSwyQ0FBQTtBQ3BFSjs7QURzRUk7RUFDRSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLHVDQUFBO1VBQUEsc0NBQUE7RUFFQSx5REFBQTtBQ3RFTjs7QUR3RU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7QUN0RVI7O0FEd0VRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ3RFVjs7QUR5RVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDdkVWOztBRDJFTTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQzNFUiIsImZpbGUiOiJzcmMvYXBwL2JsdXNwZWMtcmVjcnVpdGVyL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6ICNlZWU7XG5cbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcblxuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG5nb29nbGUtbWFwIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuI21hcHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogIzIyMjtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAvLy0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC8vLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvL2JhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIH1cbn1cblxuLnF1ZXN0aW9uLXNsaWRlIHtcbiAgLnNsaWRlLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgLnNsaWRlLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxufVxuXG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSB7XG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gICAgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIC5xdWVzdGlvbi1vcHRpb24ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG4gICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgIC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAvLyBJbiB0aGUgbGFzdCBzbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24gaXMgaGlkZGVuXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIH1cblxuICAuaGVhZGluZy1jb2wge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0KTtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gICAgLm9wdGlvbnMtbGlzdC1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodCk7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLnNpZ251cC1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGxlZnQ6IDE1JTtcbiAgICAgIC8vIHZlcnRpY2FsbHkgY2VudGVyZWRcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxMHZ3O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKTtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIE5vdGU6IFdlIGNhbm5vdGUgY2hhbmdlIHRoZSBzdHlsZXMgb2YgdGhlIC5jaGVja2JveC1pY29uIGJlY2F1c2UgaXQncyBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXG4gICAgICAvLyBBbiBhbHRlcm5hdGl2ZSB3b3VsZCBiZSB0byBzZXQgLS13aWR0aCBhbmQgLS1oZWlnaHQgdG8gMHB4IGFuZCBhZGQgYSBjdXN0b20gb3ZlcmxheSBhbmQgaWNvbiBpbiB0aGUgPGN1c3RvbS1jaGVja2JveD4gaHRtbFxuICAgIH1cblxuICAgICYuY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIHtcbiAgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcbiAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgfVxuICB9XG59XG5cblxuLmZpbHRlcnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAucmFuZ2UtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAgIC5yYW5nZS1pdGVtIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSAiLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogI2VlZTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodDogMTYlO1xuICAtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQ6IDEwJTtcbn1cblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuZ29vZ2xlLW1hcCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogIzIyMjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnF1ZXN0aW9uLXNsaWRlIC5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5xdWVzdGlvbi1zbGlkZSAuc2xpZGUtc3VidGl0bGUge1xuICBjb2xvcjogIzIyMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2w6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbiBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5oZWFkaW5nLWNvbCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyBpb24tY29sOm50aC1jaGlsZChvZGQpIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyBpb24tY29sOm50aC1jaGlsZChldmVuKSB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmNhbGwtdG8tYWN0aW9uLWNvbCAuc2lnbnVwLWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBmbGV4OiAxIDAgMTAwJTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggLmNoZWNrYm94LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiAxNSU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IGlvbi1jaGVja2JveCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMTB2dztcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuNCk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94LmNoZWNrYm94LWNoZWNrZWQgLmNoZWNrYm94LXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xufVxuXG4uZmlsdGVycy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZpbHRlcnMtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/bluspec-recruiter/styles/getting-started.responsive.scss":
/*!**************************************************************************!*\
  !*** ./src/app/bluspec-recruiter/styles/getting-started.responsive.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlYy1yZWNydWl0ZXIvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGJsdXNwZWMtcmVjcnVpdGVyXFxzdHlsZXNcXGdldHRpbmctc3RhcnRlZC5yZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL2JsdXNwZWMtcmVjcnVpdGVyL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUNmTjtBQUNGO0FEb0JBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUM3Qk47QUFDRjtBRGtDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUEiLCJmaWxlIjoic3JjL2FwcC9ibHVzcGVjLXJlY3J1aXRlci9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAgIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAgIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG4iLCIvKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpIHtcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCAuY2hlY2tib3gtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1NjhweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAvNzEpIHtcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCAuY2hlY2tib3gtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/bluspec-recruiter/styles/getting-started.shell.scss":
/*!*********************************************************************!*\
  !*** ./src/app/bluspec-recruiter/styles/getting-started.shell.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlYy1yZWNydWl0ZXIvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGJsdXNwZWMtcmVjcnVpdGVyXFxzdHlsZXNcXGdldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIiwic3JjL2FwcC9ibHVzcGVjLXJlY3J1aXRlci9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JsdXNwZWMtcmVjcnVpdGVyL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5jaGVja2JveC1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLmNoZWNrYm94LWNvdmVyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=bluspec-recruiter-bluspec-recruiter-module-es2015.js.map