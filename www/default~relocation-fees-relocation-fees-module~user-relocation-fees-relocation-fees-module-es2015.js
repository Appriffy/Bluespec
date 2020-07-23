(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~relocation-fees-relocation-fees-module~user-relocation-fees-relocation-fees-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/relocation-fees/relocation-fees.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/relocation-fees/relocation-fees.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Relocation Fees</ion-title>\n\n    <ion-buttons slot=\"end\">\n\n      <ion-button *ngIf=\"!loading\" fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button *ngIf=\"feesListed && !editMode\" fill=\"outline\" (click)=\"switchEditMode()\" color=\"light\">EDIT</ion-button>\n\n      <ion-button *ngIf=\"editMode\" fill=\"outline\" (click)=\"switchDisplayMode()\" color=\"light\">VIEW</ion-button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"video-playlist-content\" style=\"background-color: #cccccc;background: chartreuse;\">\n  \n  <ion-row class=\"expiration-countdown\" *ngIf=\"editMode && !loading\">\n    <span class=\"expiration-lead\">\n      Set up your job preference profile. List expected salary for applicable entries. Click submit to save your fee listing.\n    </span>\n  </ion-row>\n\n  <ion-row class=\"expiration-countdown\" *ngIf=\"displayResponse && responseMsg && !loading\">\n    <span class=\"expiration-lead\">\n     {{responseMsg}}\n    </span>\n  </ion-row>\n\n  <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"!editMode && !feesListed && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <img [src]=\"'./assets/images/fees.png'\" style=\"margin:0 auto;width:128px;height: auto;\"/>\n      \n      <h4 *ngIf=\"selfView\" style=\"font-size:22px;text-align: center;color: #444444;margin-bottom:5px;\"> LIST YOUR FEES</h4>\n      <h5 *ngIf=\"selfView\" style=\"font-size:18px;text-align: center;color: #555555;margin-top:5px;margin-left:30px;margin-right:30px;\"> Are you willing to relocate? Set up a relocation profile and let employers know about your salary expectations and job preferences. </h5>\n      <ion-button *ngIf=\"selfView\" style=\"text-align: center;\" (click)=\"switchEditMode()\" fill=\"solid\" color=\"primary\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; GET STARTED</ion-button>\n\n      <h4 *ngIf=\"!selfView\" style=\"font-size:22px;text-align: center;color: #444444;margin-bottom:5px;\"> FEES NOT LISTED</h4>\n      <h5 *ngIf=\"!selfView\" style=\"font-size:18px;text-align: center;color: #555555;margin-top:5px;margin-left:30px;margin-right:30px;\"> Looks like relocation preference and expected salary is not listed. </h5>\n    \n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n     <!------- Loading View ------->\n     <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n        <h5 style=\"text-align: center;color: #444444;\">{{loadingMsg}}</h5>\n        <h5 style=\"font-size:15px;text-align: center;color: #555555;margin-top:8px;\">Please wait..</h5>\n        </ion-row>\n      </ion-grid>\n     <!------- Loading View ------->\n\n  <section class=\"video-playlist-section\" *ngIf=\"!editMode && feesListed && !loading\">\n    <ion-row class=\"playlist-item-row\" style=\"margin-top: 20px;\">\n      <ion-col size=\"6\" class=\"video-info-wrapper\">\n        <h4 class=\"image-title\" style=\"display: inline-block;text-align: start;\">\n          Salary Input\n        </h4>\n      </ion-col>\n      <ion-col size=\"6\" class=\"video-info-wrapper\">\n        <h4 class=\"image-title\" style=\"display: inline-block;text-align: end;\">\n           Amount\n        </h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"playlist-item-row\" *ngFor=\"let video of relocation_fees\">\n      <ion-col size=\"6\" class=\"video-info-wrapper\">\n        <h4 class=\"image-title\">\n          <app-text-shell animation=\"gradient\" [data]=\"video.relocation_name\"></app-text-shell>\n        </h4>\n        \n      </ion-col>\n      <ion-col size=\"6\" class=\"video-info-wrapper\">\n       \n        <p class=\"image-description\" style=\"font-weight: 500;color:#333333;\">\n          <app-text-shell animation=\"gradient\" [data]=\"video.fee+' '+video.fee_type\"></app-text-shell>\n        </p>\n       \n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"playlist-item-row\" style=\"margin-top: 10px;\">\n    <ion-col size=\"6\" class=\"video-info-wrapper\">\n      <h4 class=\"image-title\" style=\"display: inline-block;text-align: start;\">\n        Total Salary\n      </h4>\n    </ion-col>\n    <ion-col size=\"6\" class=\"video-info-wrapper\">\n      <h4 class=\"image-title\" style=\"display: inline-block;text-align: end;\">\n         {{totalSalary}} {{currency}} {{payMode}}\n      </h4>\n    </ion-col>\n  </ion-row>\n\n  </section>\n\n\n    <!------------- FEES FORM --------------->\n<div no-padding *ngIf=\"editMode && !loading\" style=\"margin: 0 !important;\npadding: 0 !important;\">\n  <div style=\"padding:0px;margin:10px;\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveFormChanges()\">\n\n      <ion-list margin-bottom class=\"feesFormArea\" style=\"background: #eeeeee;\">\n        <ion-input type=\"hidden\" formControlName=\"name\" value=\"Relocation Fee Structure\"></ion-input>\n     \n        <ion-row align-items-center>\n          <ion-col size=\"12\">\n        <ion-item class=\"toggle-item\">\n          <ion-label class=\"toggle-label\">Enable Relocation Mode</ion-label>\n          <ion-toggle color=\"primary\" formControlName=\"canRelocate\" value=\"1\"></ion-toggle>\n        </ion-item>\n        </ion-col>\n        </ion-row>\n\n        <div class=\"error-container\" style=\"margin-left: 20px;\">          \n          <ng-container *ngFor=\"let validation of validations.canRelocate\">\n            <div class=\"error-message\" *ngIf=\"form.get('canRelocate').hasError(validation.type)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n      <ion-row align-items-center *ngIf=\"enableRelocationFees\">\n        <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Select Currency *</ion-label>\n            <ion-input type=\"hidden\" formControlName=\"currency\"></ion-input>\n        <ion-input type=\"text\" formControlName=\"currency_name\" (click)=\"openCurrencyChooser()\" readonly></ion-input>\n          </ion-item>\n        </ion-col>\n       \n        <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Select Payroll Type *</ion-label>\n            <ion-select formControlName=\"payMode\" cancelText=\"Cancel\" okText=\"OK\">\n              <ion-select-option *ngFor=\"let item of paymentModes\" [value]=\"item\" >{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n          <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Notice Period (in Days)*</ion-label>\n          <ion-input type=\"number\" formControlName=\"notice_period\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <div class=\"error-container\" style=\"margin-left: 20px;\">\n          <ng-container *ngFor=\"let validation of validations.payMode\">\n            <div class=\"error-message\" *ngIf=\"form.get('payMode').hasError(validation.type)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngFor=\"let validation of validations.notice_period\">\n            <div class=\"error-message\" *ngIf=\"form.get('notice_period').hasError(validation.type)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngFor=\"let validation of validations.currency\">\n            <div class=\"error-message\" *ngIf=\"form.get('currency').hasError(validation.type)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n      </ion-row>\n\n\n  <!---- List Form Array -->\n      <div formArrayName=\"fee_entries\" margin-bottom *ngIf=\"enableRelocationFees\">\n           <section\n              [formGroupName]=\"i\" *ngFor=\"let feeInput of feeEntriesFormArray.controls; let i = index;\">\n              <ion-item-group>\n               \n                <ion-row class=\"searchbar-row\" align-items-center>\n                  <ion-col size=\"2\" style=\"display: none;\">\n                    <ion-item class=\"input-item\">\n                    <ion-label color=\"primary\" position=\"floating\">Relocation Input</ion-label>\n                    <ion-input type=\"text\" formControlName=\"relocation_input\" readonly></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"input-item\">\n                    <ion-label color=\"primary\" position=\"floating\">Salary Item</ion-label>\n                    <ion-input type=\"text\" formControlName=\"relocation_name\" readonly></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"input-item\">\n                    <!-- <ion-label color=\"primary\" position=\"floating\">Your Fee </ion-label> -->\n                    <ion-label position=\"floating\"> Fee (in {{currency}})</ion-label>\n                    <ion-input type=\"number\" formControlName=\"fee\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                \n                <!-- <ion-item-divider color=\"light\">{{ tech.relocation_name }}</ion-item-divider> -->\n              </ion-item-group>    \n           </section>\n        </div>\n  <!---- List Form Array -->\n   \n  <!---- Remove Prefs -->\n  <ion-item-group *ngIf=\"!enableRelocationFees\">  \n    <ion-row align-items-center *ngIf=\"feesListed\">\n      <ion-col size=\"12\">  \n    <ion-item class=\"input-item terms-item\">\n      <ion-label>I want to delete my relocation preferences.</ion-label>\n      <ion-checkbox formControlName=\"confirmDelete\" value=\"true\"></ion-checkbox>\n    </ion-item>\n    </ion-col></ion-row>\n\n    <div class=\"error-container\" style=\"margin-left: 8px;margin-top: 5px;margin-bottom: 5px;\">          \n      <ng-container *ngFor=\"let validation of validations.confirmDelete\">\n        <div class=\"error-message\" *ngIf=\"form.get('confirmDelete').hasError(validation.type)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          <span>{{ validation.message }}</span>\n        </div>\n      </ng-container>\n    </div>\n\n\n    <ion-row align-items-center *ngIf=\"feesListed && relocation_fees.length > 0\">\n      <ion-col size=\"12\">  \n    <ion-item class=\"input-item terms-item\">\n      <ion-label>Delete all existing fee entries.</ion-label>\n      <ion-checkbox formControlName=\"deleteFees\" value=\"true\"></ion-checkbox>\n    </ion-item></ion-col></ion-row>\n  </ion-item-group>\n <!---- Remove Prefs -->\n\n     </ion-list>\n   \n        <ion-button style=\"padding-top:20px;padding-bottom:20px;\" class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!form.valid\">Submit</ion-button>\n  \n      </form>\n    </div>\n</div>\n\n<!------------- END OF FEES FORM ------------->\n</ion-content>\n\n<ion-footer>\n  <ion-row *ngIf=\"editMode && !loading\" class=\"form-actions-wrapper\" style=\"background-color: 0A5392;\">\n    <ion-col>\n      <ion-button (click)=\"saveFormChanges()\" [disabled]=\"!form.valid\" class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\"> <ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SUBMIT</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"form-actions-wrapper\" style=\"background-color: 0A5392;\" *ngIf=\"selfView && !editMode && !feesListed && !loading\">\n    <ion-col>\n      <ion-button [routerLink]=\"['/people/profile']\" class=\"submit-btn\" expand=\"block\" color=\"primary\" fill=\"solid\"> <ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SKIP FEE LISTING</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"form-actions-wrapper\" style=\"background-color: 0A5392;\" *ngIf=\"!selfView && !editMode && !feesListed && !loading && user_name\">\n    <ion-col>\n      <ion-button [routerLink]=\"['/people/details', user_name]\" class=\"submit-btn\" expand=\"block\" color=\"primary\" fill=\"solid\"> <ion-icon name=\"arrow-round-back\" style=\"color:white;\"></ion-icon>&nbsp; BACK </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-currency/select-currency.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-currency/select-currency.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title>Select Currency</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search document types\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Currencies...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      \n      <ion-icon src=\"./assets/sample-icons/side-menu/money.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Currency Found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">     \n        <ion-item class=\"list-item\" *ngFor=\"let item of listing\" tappable (click)=\"dismissModal(item)\">\n   \n          <ion-row class=\"user-row\">\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h3 class=\"user-name\">\n                  <app-text-shell animation=\"bouncing\" [data]=\"item?.currency\"></app-text-shell>\n                </h3>\n    \n              </div>\n            </ion-col>\n          </ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user/relocation-fees/relocation-fees.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/relocation-fees/relocation-fees.module.ts ***!
  \****************************************************************/
/*! exports provided: RelocationFeesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelocationFeesPageModule", function() { return RelocationFeesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relocation_fees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relocation-fees.page */ "./src/app/user/relocation-fees/relocation-fees.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _utility_components_select_currency_select_currency_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/select-currency/select-currency.module */ "./src/app/utility-components/select-currency/select-currency.module.ts");
/* harmony import */ var _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/select-currency/select-currency.page */ "./src/app/utility-components/select-currency/select-currency.page.ts");










const routes = [
    {
        path: '',
        component: _relocation_fees_page__WEBPACK_IMPORTED_MODULE_6__["RelocationFeesPage"]
    }
];
let RelocationFeesPageModule = class RelocationFeesPageModule {
};
RelocationFeesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _utility_components_select_currency_select_currency_module__WEBPACK_IMPORTED_MODULE_8__["SelectCurrencyPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_relocation_fees_page__WEBPACK_IMPORTED_MODULE_6__["RelocationFeesPage"]],
        entryComponents: [_utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_9__["SelectCurrencyPage"]]
    })
], RelocationFeesPageModule);



/***/ }),

/***/ "./src/app/user/relocation-fees/relocation-fees.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/relocation-fees/relocation-fees.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.feesFormArea {\n  --background: var(--page-background);\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: green;\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.video-playlist-content {\n  --background: var(--page-background);\n}\n\n.video-playlist-content .video-data-section {\n  padding: var(--page-margin);\n}\n\n.video-playlist-content .video-data-section .video-title {\n  margin-top: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-secondary);\n}\n\n.video-playlist-content .video-data-section .video-description {\n  margin: 0px;\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  color: var(--ion-color-dark);\n}\n\n.video-playlist-content .video-playlist-section {\n  padding: 0px var(--page-margin);\n  padding-bottom: var(--page-margin);\n}\n\n.video-playlist-content .video-playlist-section .playlist-item-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.video-playlist-content .video-playlist-section .playlist-item-row:not(:first-child) {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.video-playlist-content .video-playlist-section .playlist-item-row:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n  box-shadow: inset 0 -7px 3px -8px var(--ion-color-darkest);\n}\n\n.video-playlist-content .video-playlist-section .play-icon-wrapper {\n  height: 100%;\n  text-decoration: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.video-playlist-content .video-playlist-section .play-icon-wrapper .play-icon {\n  color: var(--ion-color-secondary);\n  background: rgba(var(--ion-color-lightest-rgb), 0.7);\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.video-playlist-content .video-playlist-section .video-info-wrapper {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  align-self: center;\n}\n\n.video-playlist-content .video-playlist-section .video-info-wrapper .image-title {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  color: var(--ion-color-secondary);\n  font-size: 14px;\n}\n\n.video-playlist-content .video-playlist-section .video-info-wrapper .image-title app-text-shell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-playlist-content .video-playlist-section .video-info-wrapper .image-description {\n  margin: 0px;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWxvY2F0aW9uLWZlZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxccmVsb2NhdGlvbi1mZWVzXFxyZWxvY2F0aW9uLWZlZXMucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL3JlbG9jYXRpb24tZmVlcy9yZWxvY2F0aW9uLWZlZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUNBQUE7RUFDQSw4Q0FBQTtBQ0RKOztBRElFO0VBQ0Usb0NBQUE7QUNESjs7QURJRTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3REFBQTtFQUVBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNISjs7QURLSTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSE47O0FET0U7RUFDRSxvQ0FBQTtBQ0pKOztBREtNO0VBQ0ksMkJBQUE7QUNIVjs7QURLVTtFQUNJLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGlDQUFBO0FDSGQ7O0FETVU7RUFDRixXQUFBO0VBQ0UsZUFBQTtFQUNFLGdCQUFBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtBQ0pkOztBRFFJO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ05OOztBRFFNO0VBQ0UsOEJBQUE7QUNOUjs7QURRUTtFQUNFLHlDQUFBO0FDTlY7O0FEU1E7RUFDRSw0Q0FBQTtFQUVBLDBEQUFBO0FDUlY7O0FEWU07RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1ZSOztBRFlRO0VBQ0UsaUNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNWVjs7QURjTTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSxrQkFBQTtBQ1pSOztBRGNRO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDWlY7O0FEY1U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNaWjs7QURnQlE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUdBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0EsNEJBQUE7QUNqQlYiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlbG9jYXRpb24tZmVlcy9yZWxvY2F0aW9uLWZlZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWVzRm9ybUFyZWF7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICAuZXhwaXJhdGlvbi1jb3VudGRvd24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAuZXhwaXJhdGlvbi1sZWFkIHtcclxuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgICAudmlkZW8tZGF0YS1zZWN0aW9uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICBcclxuICAgICAgICAgIC52aWRlby10aXRsZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLnZpZGVvLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb25cdHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICBcclxuICAgICAgLnBsYXlsaXN0LWl0ZW0tcm93IHtcclxuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcbiAgXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgYm90dG9tXHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC03cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucGxheS1pY29uLXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAgIC5wbGF5LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QtcmdiKSwgLjcpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudmlkZW8taW5mby13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBcclxuICAgICAgICAuaW1hZ2UtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG4gICAgICAgICAgYXBwLXRleHQtc2hlbGwge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmltYWdlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgXHJcbiAgICAgICAgICAvLyBsaW5lIGNsYW1wIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZS1jbGFtcGluLyNhcnRpY2xlLWhlYWRlci1pZC0wXHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAvLyB3ZSBuZWVkIGF1dG9wcmVmaXhlciBvZmYgZm9yIG5leHQgbGluZSBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzc3NiNpc3N1ZWNvbW1lbnQtNDQ1MjQ5MTc0XHJcbiAgICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5mZWVzRm9ybUFyZWEge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leHBpcmF0aW9uLWNvdW50ZG93biAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tZGF0YS1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLWRhdGEtc2VjdGlvbiAudmlkZW8tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi52aWRlby1wbGF5bGlzdC1jb250ZW50IC52aWRlby1kYXRhLXNlY3Rpb24gLnZpZGVvLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXlsaXN0LWl0ZW0tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXlsaXN0LWl0ZW0tcm93Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tcGxheWxpc3Qtc2VjdGlvbiAucGxheWxpc3QtaXRlbS1yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC03cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXktaWNvbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnBsYXktaWNvbi13cmFwcGVyIC5wbGF5LWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0LXJnYiksIDAuNyk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tcGxheWxpc3Qtc2VjdGlvbiAudmlkZW8taW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnZpZGVvLWluZm8td3JhcHBlciAuaW1hZ2UtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udmlkZW8tcGxheWxpc3QtY29udGVudCAudmlkZW8tcGxheWxpc3Qtc2VjdGlvbiAudmlkZW8taW5mby13cmFwcGVyIC5pbWFnZS10aXRsZSBhcHAtdGV4dC1zaGVsbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnZpZGVvLXBsYXlsaXN0LWNvbnRlbnQgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb24gLnZpZGVvLWluZm8td3JhcHBlciAuaW1hZ2UtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/relocation-fees/relocation-fees.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/relocation-fees/relocation-fees.page.ts ***!
  \**************************************************************/
/*! exports provided: RelocationFeesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelocationFeesPage", function() { return RelocationFeesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility-components/select-currency/select-currency.page */ "./src/app/utility-components/select-currency/select-currency.page.ts");













let RelocationFeesPage = class RelocationFeesPage {
    constructor(router, route, http, authService, firebaseService, storageService, alertController, masterService, toastService, modalCtrl, _FB) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.authService = authService;
        this.firebaseService = firebaseService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.masterService = masterService;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this._FB = _FB;
        this.feesListed = false;
        this.editMode = false;
        this.selfView = true;
        this.user_name = "";
        this.enableRelocationFees = false;
        this.loading = true;
        this.loadingMsg = "Loading Details";
        this.totalAmount = 0;
        this.currencies = [];
        this.paymentModes = ["Per Year", "Per Month"];
        this.totalSalary = 0;
        this.displayResponse = false;
        this.responseMsg = "";
        this.validations = {
            'canRelocate': [
                { type: 'required', message: 'By enabling relocation mode you confirm your willingness to relocate for a new job opportunity.' }
            ],
            'currency': [
                { type: 'required', message: 'You must select a currency to enter your fees.' }
            ],
            'notice_period': [
                { type: 'required', message: 'You must enter your notice period with your current employer in days.' },
                { type: 'min', message: 'Please enter a valid notice period or leave blank if not applicable.' },
                { type: 'max', message: 'You can not specify a notice period of more than an year.' }
            ],
            'payMode': [
                { type: 'required', message: 'You must select a payroll mode to list your fees.' }
            ],
            'confirmDelete': [
                { type: 'required', message: 'Please confirm that you want to disable your fee listing.' }
            ]
        };
    }
    ionViewWillEnter() {
    }
    get feeEntriesFormArray() { return this.form.get('fee_entries'); }
    ngOnInit() {
        this.form = this._FB.group({
            name: ['My Fees', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payMode: [this.paymentModes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notice_period: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(365)]],
            //canRelocate: [this.enableRelocationFees, [Validators.required, Validators.requiredTrue]],
            canRelocate: [this.enableRelocationFees],
            confirmDelete: [false],
            deleteFees: [false],
            fee_entries: this._FB.array([])
        });
        this.authService.getAuthCache().then(promisedValue => {
            if (promisedValue) {
                this.localUser = promisedValue;
                this.selectedUser = this.localUser.id;
                console.log("/***** PROFILE PAGE LOCAL USER : " + JSON.stringify(promisedValue));
                /************ CHECK ROUTE PARAM REQUESTS ***************/
                this.route.paramMap.subscribe(params => {
                    if (params && params.has("user_id")) {
                        this.selectedUser = params.get("user_id");
                        if (this.selectedUser !== this.localUser.id) {
                            this.selfView = false;
                        }
                        if (this.selectedUser <= 0) {
                            this.router.navigate(['page-not-found']);
                        }
                    }
                });
                /************ CHECK ROUTE PARAM REQUESTS ***************/
                this.form.controls.user_id.patchValue(this.selectedUser);
                this.form.get('user_id').updateValueAndValidity();
            }
            else {
                this.authService.logout();
            }
            this.loadItems();
        });
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].CURRENCIES).then(currencies => {
            if (currencies) {
                this.currencies = currencies;
            }
        });
        /***************************/
        this.form.get("fee_entries").valueChanges.subscribe(x => {
            //console.log('fee_entries value changed');
            //console.log("fee_entries=> "+JSON.stringify(x));
            if (x) {
                this.submittedFees = JSON.stringify(x);
                //this.submittedFees = x;
            }
        });
        this.form.get("currency").valueChanges.subscribe(x => {
            if (x) {
                this.currency = x;
            }
        });
        this.form.get("payMode").valueChanges.subscribe(x => {
            if (x) {
                this.payMode = x;
            }
        });
        this.form.get("canRelocate").valueChanges.subscribe(x => {
            if (x) {
                this.enableRelocationFees = true;
                //Apply all validations again
                this.form.get('payMode').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.form.get('payMode').updateValueAndValidity();
                this.form.get('currency').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.form.get('currency').updateValueAndValidity();
                this.form.get('notice_period').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(365)]));
                this.form.get('notice_period').updateValueAndValidity();
            }
            else {
                this.enableRelocationFees = false;
                this.form.get('payMode').clearValidators();
                this.form.get('payMode').updateValueAndValidity();
                this.form.get('currency').clearValidators();
                this.form.get('currency').updateValueAndValidity();
                this.form.get('notice_period').clearValidators();
                this.form.get('notice_period').updateValueAndValidity();
                this.form.get('confirmDelete').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]));
                this.form.get('confirmDelete').updateValueAndValidity();
            }
            console.log("Mode Switched : " + this.enableRelocationFees);
        });
        /***************************/
    }
    initFeeFields(id, name, fee) {
        return this._FB.group({
            relocation_input: [id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            relocation_name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fee: [fee, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(1000000)]]
        });
    }
    addNewInputField(id, name, fee) {
        const control = this.form.controls.fee_entries;
        control.push(this.initFeeFields(id, name, fee));
    }
    removeInputField(i) {
        const control = this.form.controls.fee_entries;
        control.removeAt(i);
    }
    switchEditMode() {
        this.editMode = true;
    }
    switchDisplayMode() {
        this.editMode = false;
    }
    saveFormChanges() {
        //alert(JSON.stringify(this.form.value));
        //alert(JSON.stringify(this.form.value.fee_entries));
        this.hitRelocationSaveAPI();
    }
    loadItems() {
        this.loadingMsg = "Loading Relocation Preferences";
        this.loading = true;
        this.authService.getAuthKey().then(apiKey => {
            this.firebaseService.getRelocationFeesDataSource(apiKey, this.selectedUser).subscribe(allFees => {
                this.loading = false;
                //console.log("/******** GOT ALL FEES *********/"+JSON.stringify(allFees));
                if (allFees) {
                    this.user_name = allFees.username;
                    if (allFees.totalSalary) {
                        this.totalSalary = allFees.totalSalary;
                    }
                    if (allFees.allFormFields) {
                        this.all_relocation_inputs = allFees.allFormFields;
                        if (this.all_relocation_inputs !== null) {
                            //Clear Array First
                            const control = this.form.controls['fee_entries'];
                            for (let i = control.length - 1; i >= 0; i--) {
                                control.removeAt(i);
                            }
                            this.all_relocation_inputs.map((item) => {
                                if (item) {
                                    this.form.controls.fee_entries.push(this.initFeeFields(item.id, item.title, item.fee));
                                }
                            });
                        }
                    }
                    console.log("/******** RELOCATION FEES *********/" + JSON.stringify(this.all_relocation_inputs));
                    if (allFees.fees) {
                        this.feesListed = allFees.isPrefsAdded;
                        //Used only for listing
                        this.relocation_fees = allFees.fees;
                        let relocationDetails = allFees.relocationDetails;
                        if (relocationDetails && relocationDetails !== null && relocationDetails !== undefined) {
                            //Add Existing Relocation Preferences
                            if (relocationDetails.payMode) {
                                this.form.controls.payMode.patchValue(relocationDetails.payMode);
                                this.payMode = relocationDetails.payMode;
                                this.form.get('payMode').updateValueAndValidity();
                            }
                            if (relocationDetails.canRelocate) {
                                this.form.controls.canRelocate.patchValue(true);
                                this.enableRelocationFees = true;
                                this.form.get('canRelocate').updateValueAndValidity();
                            }
                            if (relocationDetails.currency) {
                                this.form.controls.currency.patchValue(relocationDetails.currency);
                                this.form.controls.currency_name.patchValue(relocationDetails.currency);
                                this.currency = relocationDetails.currency;
                                this.form.get('currency').updateValueAndValidity();
                                this.form.get('currency_name').updateValueAndValidity();
                            }
                            if (relocationDetails.notice_period) {
                                this.form.controls.notice_period.patchValue(relocationDetails.notice_period);
                                this.form.get('notice_period').updateValueAndValidity();
                            }
                        }
                    }
                    else {
                        console.log("NO PREFERENCES ADDED => " + JSON.stringify(allFees));
                    }
                }
            });
        });
    }
    hitRelocationSaveAPI() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingMsg = "Saving Relocation Fees";
            this.loading = true;
            this.authService.getAuthKey().then(apiKey => {
                let postData = {
                    user_id: this.form.value.user_id,
                    //relocation_fees : this.form.value.fee_entries,
                    relocation_fees: this.submittedFees,
                    payMode: this.form.value.payMode,
                    notice_period: this.form.value.notice_period,
                    canRelocate: this.form.value.canRelocate,
                    currency: this.form.value.currency,
                    confirmDelete: this.form.value.confirmDelete,
                    deleteFees: this.form.value.deleteFees,
                };
                console.log("Gonna Hitting => " + JSON.stringify(postData) + " via Token " + apiKey);
                this.firebaseService.callRelocationFeesSaveAPI(apiKey, postData)
                    .subscribe((res) => {
                    this.loading = false;
                    console.log('########## Fees Update API Response ########### ' + JSON.stringify(res));
                    if (!res.error) {
                        /********** NAVIGATE WITH USER ID **********/
                        this.editMode = false;
                        this.displayResponse = true;
                        this.responseMsg = res.message;
                        setTimeout(() => {
                            this.displayResponse = false;
                        }, 8000);
                        this.loadItems();
                        //this.router.navigate(['/relocation-fees;user_id='+this.selectedUser]);
                    }
                    else {
                        this.presentAlert(res.message);
                    }
                }, (error) => {
                    //this.loadingController.dismiss();
                    this.loading = false;
                    this.presentAlert('Looks like there is a Network Issue while saving relocation fees.');
                });
            });
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
    openCurrencyChooser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_12__["SelectCurrencyPage"]
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    //alert(JSON.stringify(item));
                    //this.selectedJobArea = item.data;
                    this.form.controls.currency.patchValue(item.data.symbol);
                    this.form.controls.currency_name.patchValue(item.data.symbol);
                }
            });
            yield modal.present();
        });
    }
};
RelocationFeesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RelocationFeesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-relocation-fees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./relocation-fees.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/relocation-fees/relocation-fees.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./relocation-fees.page.scss */ "./src/app/user/relocation-fees/relocation-fees.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], RelocationFeesPage);



/***/ }),

/***/ "./src/app/utility-components/select-currency/select-currency.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/utility-components/select-currency/select-currency.module.ts ***!
  \******************************************************************************/
/*! exports provided: SelectCurrencyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCurrencyPageModule", function() { return SelectCurrencyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _select_currency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-currency.page */ "./src/app/utility-components/select-currency/select-currency.page.ts");







let SelectCurrencyPageModule = class SelectCurrencyPageModule {
};
SelectCurrencyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_select_currency_page__WEBPACK_IMPORTED_MODULE_6__["SelectCurrencyPage"]],
        exports: [
            _select_currency_page__WEBPACK_IMPORTED_MODULE_6__["SelectCurrencyPage"]
        ],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SelectCurrencyPageModule);



/***/ }),

/***/ "./src/app/utility-components/select-currency/select-currency.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/utility-components/select-currency/select-currency.page.ts ***!
  \****************************************************************************/
/*! exports provided: SelectCurrencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCurrencyPage", function() { return SelectCurrencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SelectCurrencyPage = class SelectCurrencyPage {
    constructor(navCtrl, masterService, storageService, modalController, router, authService) {
        this.navCtrl = navCtrl;
        this.masterService = masterService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.router = router;
        this.authService = authService;
        this.loading = true;
        this.authService.getAuthCache().then(promisedValue => {
            if (promisedValue) {
                this.localUser = promisedValue;
            }
        });
    }
    ngOnInit() {
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].CURRENCIES).then(allList => {
            if (allList) {
                this.listing = allList;
                this.filtered_listing = allList;
                this.loading = false;
            }
        });
    }
    loadItems() {
        this.loading = true;
        this.masterService.getCurrencies().subscribe(allData => {
            this.loading = false;
            if (allData) {
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
            return thisJob.currency.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
        });
    }
    /****************** SEARCH ITEMS ********************/
    dismissModal(item) {
        //alert(item.title);
        this.modalController.dismiss(item);
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
SelectCurrencyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SelectCurrencyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-currency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-currency.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-currency/select-currency.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SelectCurrencyPage);



/***/ })

}]);
//# sourceMappingURL=default~relocation-fees-relocation-fees-module~user-relocation-fees-relocation-fees-module-es2015.js.map