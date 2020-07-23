function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-set-location-set-location-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/set-location/set-location.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/set-location/set-location.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSetLocationSetLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"rangeForm\" (ngSubmit)=\"nextStep()\">\n<ion-header>\n    <ion-toolbar color=\"primary\">\n\n      <ion-buttons slot=\"start\">\n        \n        <ion-buttons  (click)=\"prevStep()\">\n          <ion-button fill=\"outline\" color=\"facebook\">PREV</ion-button>\n        </ion-buttons>\n\n      </ion-buttons>\n      <ion-title slot=\"\">Select Location</ion-title>\n      <ion-buttons slot=\"end\">\n       \n        <ion-buttons  (click)=\"nextStep()\">\n          <ion-button fill=\"outline\" color=\"facebook\">NEXT</ion-button>\n        </ion-buttons>\n\n      </ion-buttons>\n      \n    </ion-toolbar>\n\n    <!-- <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"query\" (ionInput)=\"searchPlace()\"></ion-searchbar>\n      <ion-list [hidden]=\"places.length == 0\">\n        <ion-item *ngFor=\"let item of places\" tappable (click)=\"selectSearchResult(item)\">\n          {{ item.description }}\n        </ion-item>\n      </ion-list>\n  </ion-toolbar> -->\n\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <google-map [mapOptions]=\"mapOptions\"></google-map>\n  </ion-content>\n\n  <ion-footer>\n    <ion-item-group class=\"filters-content filters-group range-list\">\n    <ion-item-divider>\n      <ion-label>Set Work Radius</ion-label>\n    </ion-item-divider>\n   \n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Address</ion-label>\n            <ion-input type=\"text\" formControlName=\"address\" placeholder=\"Set work location\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"range-item\" style=\"display: none;\">\n        <ion-col size=\"6\">\n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Latitude</ion-label>\n            <ion-input type=\"text\" formControlName=\"latitude\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Longitude</ion-label>\n            <ion-input type=\"text\" formControlName=\"longitude\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\" style=\"margin-left:15px;\">How far can you offer your service?</span>\n            <span class=\"range-value\">{{ rangeForm.controls.radius.value }} KM</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"radius\" color=\"secondary\" (ionChange)=\"rangeChange($event)\" min=\"0\" max=\"50\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n  </ion-item-group>\n\n\n  <!-- <ion-row class=\"details-purchase-options-row\">\n   \n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"addMarkerTest()\">Add Marker</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" class=\"main-call-to-action-col\">\n      <ion-button class=\"add-to-cart-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">More Action</ion-button>\n    </ion-col>\n  </ion-row>\n -->\n\n    <ion-row class=\"form-actions-wrapper\" style=\"background-color: 0A5392;\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" [disabled]=\"!rangeForm.valid\" fill=\"solid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SAVE & CONTINUE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>";
    /***/
  },

  /***/
  "./src/app/signup/set-location/set-location.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/signup/set-location/set-location.module.ts ***!
    \************************************************************/

  /*! exports provided: SetLocationPageModule */

  /***/
  function srcAppSignupSetLocationSetLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetLocationPageModule", function () {
      return SetLocationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _set_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./set-location.page */
    "./src/app/signup/set-location/set-location.page.ts");
    /* harmony import */


    var _shared_components_map_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/map/shared.module */
    "./src/app/shared/components/map/shared.module.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/signup/registration.service.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _set_location_page__WEBPACK_IMPORTED_MODULE_6__["SetLocationPage"]
    }];

    var SetLocationPageModule = function SetLocationPageModule() {
      _classCallCheck(this, SetLocationPageModule);
    };

    SetLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_components_map_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_set_location_page__WEBPACK_IMPORTED_MODULE_6__["SetLocationPage"]],
      providers: [_registration_service__WEBPACK_IMPORTED_MODULE_8__["RegistrationService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SetLocationPageModule);
    /***/
  },

  /***/
  "./src/app/signup/set-location/set-location.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/signup/set-location/set-location.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSetLocationSetLocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n  display: contents;\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\ngoogle-map {\n  display: contents;\n  width: 100%;\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NldC1sb2NhdGlvbi9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxzaWdudXBcXHNldC1sb2NhdGlvblxcc2V0LWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NldC1sb2NhdGlvbi9zZXQtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw4Q0FBQTtFQUVBLHVCQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBRENNO0VBQ0ksb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUVBLFlBQUE7QUNBVjs7QURNTTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDTlI7O0FEUVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7QUNOVjs7QURRVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNOWjs7QURTVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNQWjs7QURXUTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hWOztBRGlCQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zZXQtbG9jYXRpb24vc2V0LWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIFxyXG4gICAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XHJcbiAgfVxyXG4gICNtYXB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmZpbHRlcnMtY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICAgIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICBcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgLy8gLnJhbmdlLWxpc3Qge1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gIFxyXG4gICAgICAucmFuZ2UtaXRlbSB7XHJcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCAgdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gIFxyXG4gICAgICAgIC5yYW5nZS1oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gIFxyXG4gICAgICAgICAgLnJhbmdlLXZhbHVlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5yYW5nZS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yYW5nZS1jb250cm9sIHtcclxuICAgICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcclxuICAgICAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIFxyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbn0gIFxyXG5cclxuZ29vZ2xlLW1hcCB7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5maWx0ZXJzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlsdGVycy1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWl0ZW0ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWl0ZW0gLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuZ29vZ2xlLW1hcCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signup/set-location/set-location.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/signup/set-location/set-location.page.ts ***!
    \**********************************************************/

  /*! exports provided: SetLocationPage */

  /***/
  function srcAppSignupSetLocationSetLocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetLocationPage", function () {
      return SetLocationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/counter-input/counter-input.component */
    "./src/app/components/counter-input/counter-input.component.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/signup/registration.service.ts");
    /* harmony import */


    var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/google-map/google-map.component */
    "./src/app/components/google-map/google-map.component.ts");
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].Plugins,
        Toast = _capacitor_core__WEBP.Toast,
        Geolocation = _capacitor_core__WEBP.Geolocation;

    var SetLocationPage =
    /*#__PURE__*/
    function () {
      function SetLocationPage(router, menu, loadingController, registrationService, userService, authService, alertController) {
        _classCallCheck(this, SetLocationPage);

        this.router = router;
        this.menu = menu;
        this.loadingController = loadingController;
        this.registrationService = registrationService;
        this.userService = userService;
        this.authService = authService;
        this.alertController = alertController;
        this.mapOptions = {
          zoom: 15,
          center: {
            lat: -34.9199842,
            lng: -56.149849
          } // uncomment the following line if you want to remove the default Map controls
          // disableDefaultUI: true

        };
        this.query = '';
        this.places = [];
        this.defaultPos = {
          latitude: 42,
          longitude: 2
        };
        this.searchDisabled = true;
        this.saveDisabled = true;
      }

      _createClass(SetLocationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.registrationService.getCachedData().then(function (res) {
            if (res !== undefined) {
              _this.cachedData = res; // if(this.cachedData != null && this.cachedData.latitude != "" && this.cachedData.longitude != ""){
              // alert("No need to fetch: "+this.cachedData.latitude+", "+this.cachedData.longitude);
              // }else{
              //   this.loadCurrentLocation();
              // }
              //master old
              //this.loadCurrentLocation();
            }
          });
          this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            radius: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](10, Object(_components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__["counterRangeValidator"])(1, 200))
          }); // let center = this.mapComponent.map.getCenter();
          // this.mapComponent.addMarker(center.lat(), center.lng());
        }
      }, {
        key: "loadCurrentLocation",
        value: function loadCurrentLocation() {
          var _this2 = this;

          this.displayLoader().then(function (loader) {
            // get position
            return _this2.getCurrentPosition().then(function (position) {
              var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              var mapOptions = {
                center: latLng,
                zoom: 15
              }; //alert(position.coords.latitude+", "+ position.coords.longitude); 

              _this2.currentLat = position.coords.latitude;
              _this2.currentLong = position.coords.longitude;

              _this2.rangeForm.controls.latitude.setValue(_this2.currentLat);

              _this2.rangeForm.controls.longitude.setValue(_this2.currentLong); // fermer loader + return position


              loader.dismiss();
              return position;
            }) // if error
            .catch(function (err) {
              // fermer loader + return NULL
              loader.dismiss();
              return null;
            });
          }).then(function (position) {
            return position instanceof Error ? _this2.presentAlert(position.message) : null;
          }) // do not forget to handle promise rejection
          .catch(function (err) {
            _this2.presentAlert(err.message);
          });
        }
      }, {
        key: "displayLoader",
        value: function displayLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loading = this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true
                    }); //Culprits the previous step page
                    //await (await loading).present();

                    return _context.abrupt("return", loading);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    return _context2.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          this.placesService = new google.maps.places.PlacesService(this.map);
          this.searchDisabled = false;
          console.log("ionViewDidLoad");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          //Map Works
          this._GoogleMap.$mapReady.subscribe(function (map) {
            _this3.map = map;
          }); //this.createLoader();


          this.loadCurrentLocation(); //  let search_input = document.getElementById('search_input');
          //   let autocmplete = new google.maps.places.AutocompleteService();
        }
      }, {
        key: "getCurrentPosition",
        value: function getCurrentPosition() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var isAvailable, POSITION;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    isAvailable = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].isPluginAvailable('Geolocation');

                    if (isAvailable) {
                      _context3.next = 4;
                      break;
                    }

                    console.log('Err: plugin not available');
                    return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new Error('Err: plugin not available')));

                  case 4:
                    POSITION = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Geolocation.getCurrentPosition() // handle Capacitor Errors
                    .catch(function (err) {
                      console.log('ERR', err);
                      return new Error(err.message || 'message perso');
                    });
                    this.coordinates$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(POSITION).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (data) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(data.coords);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
                      return console.log(data);
                    }));
                    return _context3.abrupt("return", POSITION);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "saveLocationPrefs",
        value: function saveLocationPrefs() {
          //alert("This feature is coming.");
          this.cachedData.latitude = this.rangeForm.value.latitude;
          this.cachedData.longitude = this.rangeForm.value.longitude;
          this.registrationService.setCachedData(this.cachedData); //console.log('saveLocationPrefs() ');
          //this.router.navigate(['verify-account']);
        }
      }, {
        key: "rangeChange",
        value: function rangeChange(range) {
          console.log('range change', range); //this.search_radius = range.value;
          //this.mapComponent.
          // var name = range.target.attributes.value;
          // console.log('Range# '+name);
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this4 = this;

          this.displayLoader();
          this.userService.callRegistrationAPI(null, this.cachedData).subscribe(function (res) {
            //alert(JSON.stringify(res)); 
            //this.toastService.presentToast(JSON.stringify(res)); 
            _this4.loadingController.dismiss();

            console.log('Result# ' + res.message);

            if (!res.error) {
              if (res.myProfile) {
                _this4.authService.setMyFullProfile(res.myProfile);
              }
              /********** NAVIGATE WITH USER ID **********/


              _this4.presentAlert(res.message);

              _this4.router.navigate(['/registration/verify-account'], {
                queryParams: {
                  user_id: res.id
                }
              });
            } else {
              //this.toastService.presentToast(res.message);
              _this4.presentAlert(res.message);
            }
          }, function (error) {
            _this4.loadingController.dismiss();

            _this4.presentAlert('Looks like there is a Network Issue.');
          });
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          if (this.rangeForm.valid) {
            this.saveLocationPrefs();
            this.registerUser(); //this.router.navigate(['professional-profile']);
          }
        }
      }, {
        key: "prevStep",
        value: function prevStep() {
          this.router.navigate(['/registration/professional-profile']);
        } // addMarkerTest(){
        //   this._GoogleMap.addMarker(42, 9);
        // }

      }, {
        key: "searchPlace",
        value: function searchPlace() {
          var _this5 = this;

          this.saveDisabled = true;

          if (this.query.length > 0 && !this.searchDisabled) {
            var config = {
              types: ['geocode'],
              input: this.query
            };
            this.autocompleteService.getPlacePredictions(config, function (predictions, status) {
              if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                _this5.places = [];
                predictions.forEach(function (prediction) {
                  _this5.places.push(prediction);
                });
              }
            });
          } else {
            this.places = [];
          }
        }
      }]);

      return SetLocationPage;
    }();

    SetLocationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _registration_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationService"]
      }, {
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__["GoogleMapComponent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__["GoogleMapComponent"])], SetLocationPage.prototype, "_GoogleMap", void 0);
    SetLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-set-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./set-location.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/set-location/set-location.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./set-location.page.scss */
      "./src/app/signup/set-location/set-location.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _registration_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationService"], _user_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], SetLocationPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-set-location-set-location-module-es5.js.map