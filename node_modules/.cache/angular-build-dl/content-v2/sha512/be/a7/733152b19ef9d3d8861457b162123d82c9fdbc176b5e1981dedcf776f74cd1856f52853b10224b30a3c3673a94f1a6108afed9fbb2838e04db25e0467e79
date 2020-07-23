(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-listing-user-map-listing-user-map-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/listing/user-map-listing/user-map-listing.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/listing/user-map-listing/user-map-listing.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      \n      <ion-buttons  (click)=\"prevStep()\">\n        <ion-button fill=\"outline\" color=\"facebook\">Back</ion-button>\n      </ion-buttons>\n\n    </ion-buttons>\n    <ion-title slot=\"\">Select Location</ion-title>\n    <ion-buttons slot=\"end\">\n     \n      <ion-buttons  (click)=\"nextStep()\">\n        <ion-button fill=\"outline\" color=\"facebook\">FILTER</ion-button>\n      </ion-buttons>\n\n    </ion-buttons>\n    \n  </ion-toolbar>\n\n  <!-- <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"query\" (ionInput)=\"searchPlace()\"></ion-searchbar>\n</ion-toolbar> -->\n\n</ion-header>\n\n<ion-content class=\"create-user-content\">\n  <app-map *ngIf=\"(coordinates$|async) as coords\" [coords]=\"coords\"></app-map>\n  \n</ion-content>\n\n<ion-footer>\n  <!-- <div class=\"users-pictures-wrapper\">\n    <h3 class=\"detail-title\">Select a radius you can offer your service.</h3>\n    <ion-row class=\"pictures-row\">\n     \n    </ion-row>\n    <ion-button class=\"upload-picture-btn\" color=\"dark\" expand=\"block\" fill=\"outline\">Set Default Location</ion-button>\n  </div> -->\n\n  <ion-item-group class=\"filters-content filters-group\">\n  <ion-item-divider>\n    <ion-label>Lat: {{currentLat}}, Lat: {{currentLong}}</ion-label>\n  </ion-item-divider>\n  <!-- <form [formGroup]=\"filterUsersForm\" class=\"range-list\" (ngSubmit)=\"saveLocationPrefs()\">\n\n    <ion-row class=\"range-item\" style=\"display:none;\">\n      <ion-col size=\"6\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Latitude</ion-label>\n          <ion-input type=\"text\" formControlName=\"latitude\" required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Longitude</ion-label>\n          <ion-input type=\"text\" formControlName=\"longitude\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"range-item\">\n      <ion-col size=\"12\">\n        <div class=\"range-header\">\n          <span class=\"range-label\" style=\"margin-left:15px;\">How far can you offer your service?</span>\n          <span class=\"range-value\">{{ rangeForm.controls.radius.value }}</span>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-range class=\"range-control\" formControlName=\"radius\" color=\"secondary\" (ionChange)=\"rangeChange($event)\" min=\"0\" max=\"50\" step=\"1\"></ion-range>\n      </ion-col>\n    </ion-row>\n  </form> -->\n</ion-item-group>\n\n\n<ion-row class=\"details-purchase-options-row\">\n \n  <ion-col size=\"6\">\n    <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"addMarkerTest()\">Add Marker</ion-button>\n  </ion-col>\n  <ion-col size=\"6\" class=\"main-call-to-action-col\">\n    <ion-button class=\"add-to-cart-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">More Action</ion-button>\n  </ion-col>\n</ion-row>\n\n\n  <ion-row class=\"form-actions-wrapper\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; LOCATE ON MAP</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/user/listing/user-map-listing/user-map-listing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/listing/user-map-listing/user-map-listing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UserMapListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMapListingPageModule", function() { return UserMapListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_map_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-map-listing.page */ "./src/app/user/listing/user-map-listing/user-map-listing.page.ts");
/* harmony import */ var _shared_components_map_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/map/shared.module */ "./src/app/shared/components/map/shared.module.ts");








const routes = [
    {
        path: '',
        component: _user_map_listing_page__WEBPACK_IMPORTED_MODULE_6__["UserMapListingPage"]
    }
];
let UserMapListingPageModule = class UserMapListingPageModule {
};
UserMapListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_components_map_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_map_listing_page__WEBPACK_IMPORTED_MODULE_6__["UserMapListingPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], UserMapListingPageModule);



/***/ }),

/***/ "./src/app/user/listing/user-map-listing/user-map-listing.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/listing/user-map-listing/user-map-listing.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbGlzdGluZy91c2VyLW1hcC1saXN0aW5nL3VzZXItbWFwLWxpc3RpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/listing/user-map-listing/user-map-listing.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/listing/user-map-listing/user-map-listing.page.ts ***!
  \************************************************************************/
/*! exports provided: UserMapListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMapListingPage", function() { return UserMapListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/map/map.component */ "./src/app/shared/components/map/map.component.ts");










const { Toast, Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].Plugins;
let UserMapListingPage = class UserMapListingPage {
    constructor(router, menu, loadingController, alertController) {
        this.router = router;
        this.menu = menu;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.defaultPos = { latitude: 42, longitude: 2 };
    }
    ngOnInit() {
        this.filterUsersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
            //radius: new FormControl(10, counterRangeValidator(1, 200))
        });
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
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert!',
                subHeader: 'Wadfak',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            return alert;
        });
    }
    getCurrentPosition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isAvailable = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].isPluginAvailable('Geolocation');
            if (!isAvailable) {
                console.log('Err: plugin not available');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new Error('Err: plugin not available'));
            }
            const POSITION = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Geolocation.getCurrentPosition()
                // handle Capacitor Errors
                .catch(err => {
                console.log('ERR', err);
                return new Error(err.message || 'message perso');
            });
            this.coordinates$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(POSITION).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((data) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(data.coords)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log(data)));
            return POSITION;
        });
    }
    saveLocationPrefs() {
        alert("This feature is coming.");
    }
    addMarkerTest() {
        this.mapComponent.addMarker(42, 9);
    }
};
UserMapListingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"])
], UserMapListingPage.prototype, "mapComponent", void 0);
UserMapListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-map-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-map-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/listing/user-map-listing/user-map-listing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-map-listing.page.scss */ "./src/app/user/listing/user-map-listing/user-map-listing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], UserMapListingPage);



/***/ })

}]);
//# sourceMappingURL=user-listing-user-map-listing-user-map-listing-module-es2015.js.map