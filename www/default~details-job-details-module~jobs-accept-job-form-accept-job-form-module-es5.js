function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-job-details-module~jobs-accept-job-form-accept-job-form-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/accept-job-form/accept-job-form.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/accept-job-form/accept-job-form.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsAcceptJobFormAcceptJobFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"applyJobForm\" (ngSubmit)=\"submitForm()\"> \n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title slot=\"\">Apply for Job</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"create-user-content\"  style=\"position: relative;\">\n\n   <!---------STATIC TEST------>\n   <div class=\"listing-item\" style=\"margin:10px;padding:10px;border-bottom-style:none;\" *ngIf=\"showJobThumbnail\">\n    <ion-row class=\"middle-row\">\n      <ion-col class=\"info-col\">\n        <h4 class=\"item-name\">\n          <app-text-shell animation=\"bouncing\" [data]=\"job?.title\"></app-text-shell>\n        </h4>\n      \n        <p class=\"item-code\"><ion-icon name=\"locate\" style=\"display:inline-block;font-size:16px;vertical-align: middle;\"></ion-icon> <app-text-shell style=\"display:inline-block;vertical-align: middle;\" animation=\"bouncing\" [data]=\"'Whitefield, Bangalore'\">\n        </app-text-shell></p>       \n        <p class=\"item-description\" style=\"margin-top:10px;\">\n          <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"job?.job_description\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"bottom-row\">\n      <ion-col class=\"code-wrapper\">\n        <span class=\"item-code\">\n          <app-text-shell [data]=\"job?.job_type_name\"></app-text-shell>\n        </span>\n  \n      </ion-col>\n      <ion-col class=\"time-left-wrapper\" size=\"5\">\n        <ion-button class=\"bookmark-button\" fill=\"clear\" color=\"claim\">\n         \n          <span class=\"accommodation-value\" *ngIf=\"job?.salary_type == 'monthly'\">\n            <app-text-shell animation=\"bouncing\" [data]=\"job?.jobSalary.min_salary+' - '+job?.jobSalary.max_salary+' '+job?.currency+'/Month'\"></app-text-shell>\n          </span>\n          <span class=\"accommodation-value\" *ngIf=\"job?.salary_type == 'hourly'\">\n            <app-text-shell animation=\"bouncing\" [data]=\"job?.jobSalary.min_rate_per_hour+' - '+job?.jobSalary.min_rate_per_hour+' '+job?.currency+'/Hour'\"></app-text-shell>\n          </span>\n          <span class=\"accommodation-value\" *ngIf=\"job?.salary_type == 'fixed'\">\n            <app-text-shell animation=\"bouncing\" [data]=\"job?.jobSalary.fixed_fee+' '+job?.currency+' (Fixed)'\"></app-text-shell>\n          </span>\n\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </div>\n  <!--------END STATIC TEST --------->\n\n  <!-- <p>{{applyJobForm.value|json}}</p>  -->\n\n<!----------- Start Prefs Detail Group ------->\n<ion-item-group class=\"filters-content filters-group\">\n\n  <ion-item class=\"input-item\" style=\"--background: #333333;\" *ngIf=\"showJobThumbnail\">\n    <ion-label style=\"color: #ffffff;\" class=\"toggle-label\">Job Application Form</ion-label>\n  </ion-item>\n\n  <ion-list class=\"toggle-list\" lines=\"full\">\n\n    <ion-item class=\"toggle-item\">\n      <ion-label class=\"toggle-label\" color=\"primary\">Share My Phone number with employer.</ion-label>\n      <ion-toggle color=\"primary\" formControlName=\"share_phone\"></ion-toggle>\n    </ion-item>\n\n    <ion-item class=\"toggle-item\" *ngIf=\"job?.jobPrefs.enableCustomOffer\">\n      <ion-label class=\"toggle-label\" color=\"primary\">I will share my custom offer</ion-label>\n      <ion-toggle color=\"primary\" formControlName=\"enableCustomOffer\" (ionChange)=\"onCustomOfferEnabled($event)\"></ion-toggle>\n    </ion-item>\n\n    <div style=\"--padding-start: var(--page-margin);\n    --padding-end: var(--page-margin);\"></div>\n\n  </ion-list>\n\n    <!----- CUSTOM OFFER SECTION ------>\n    <div class=\"filters-content filters-group\" *ngIf=\"shareCustomOffer\">\n      <ion-item-divider>\n        <ion-label class=\"range-label\">SHARE YOUR CUSTOM OFFER</ion-label>\n      </ion-item-divider>\n  \n      <ion-row class=\"form-actions-wrapper\">\n        <p style=\"margin-left:10px;margin-top: 0px;font-size: smaller;\"> Enable this option only if you want to share your custom offer for this job.</p>\n      </ion-row>\n\n      <ion-row align-items-center>\n        <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\" color=\"primary\">{{priceTagLabel}} <span *ngIf=\"selectedCurrency\">(in {{selectedCurrency}})</span>*</ion-label>\n          <ion-input type=\"number\" formControlName=\"amount\"></ion-input>\n          </ion-item>\n        </ion-col>\n        </ion-row>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.amount\">\n            <div class=\"error-message\" *ngIf=\"applyJobForm.get('amount').hasError(validation.type) && (applyJobForm.get('amount').dirty || applyJobForm.get('amount').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n  \n  \n        <ion-row align-items-center *ngIf=\"job?.salary_type=='fixed'\">\n          <ion-col size=\"12\">\n            <ion-item class=\"input-item\">\n              <ion-label color=\"primary\" position=\"floating\">Expected Delivery Date</ion-label>\n              <ion-datetime [min]=\"minDeliveryDate\" display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"delivery_date\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          </ion-row>\n  \n          <ion-row align-items-center>\n            <ion-col size=\"12\">\n              <ion-item class=\"input-item\">\n                <ion-label color=\"primary\" position=\"floating\">Describe your offer</ion-label>\n                <ion-textarea rows=\"4\" formControlName=\"comment\" placeholder=\"Write a short description about your offer (Optional)\"></ion-textarea>\n              </ion-item>\n            </ion-col>\n            </ion-row>\n            <div class=\"error-container\">\n              <ng-container *ngFor=\"let validation of validations.comment\">\n                <div class=\"error-message\" *ngIf=\"applyJobForm.get('comment').hasError(validation.type) && (applyJobForm.get('comment').dirty || applyJobForm.get('comment').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>{{ validation.message }}</span>\n                </div>\n              </ng-container>\n            </div>\n  \n          </div>\n        <!---------- END OF OFFER SECTION -------->  \n        <ion-list class=\"toggle-list\" lines=\"full\">\n    <ion-item class=\"toggle-item\">\n      <ion-label class=\"toggle-label\" color=\"primary\">I Agree that I meet the Job Requirements.</ion-label>\n      <ion-toggle color=\"primary\" formControlName=\"agree\" value=\"true\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n    <div class=\"error-container\">\n      <ng-container *ngFor=\"let validation of validations.agree\">\n        <div class=\"error-message\" *ngIf=\"applyJobForm.get('agree').hasError(validation.type) && (applyJobForm.get('agree').dirty || applyJobForm.get('agree').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          <span>{{ validation.message }}</span>\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-input type=\"hidden\" formControlName=\"applicant_id\"></ion-input>\n    <ion-input type=\"hidden\" formControlName=\"job_id\"></ion-input>\n    <ion-input type=\"hidden\" formControlName=\"currency\"></ion-input>\n    <ion-input type=\"hidden\" formControlName=\"salary_type\"></ion-input>\n\n</ion-item-group>\n<!----------- Ends Prefs Detail Group ------->\n\n</ion-content>\n<ion-footer>\n\n  <ion-row class=\"form-actions-wrapper\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!applyJobForm.valid\" fill=\"solid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SUBMIT APPLICATION</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./src/app/jobs/accept-job-form/accept-job-form.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/jobs/accept-job-form/accept-job-form.module.ts ***!
    \****************************************************************/

  /*! exports provided: AcceptJobFormPageModule */

  /***/
  function srcAppJobsAcceptJobFormAcceptJobFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcceptJobFormPageModule", function () {
      return AcceptJobFormPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _accept_job_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accept-job-form.page */
    "./src/app/jobs/accept-job-form/accept-job-form.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _accept_job_form_page__WEBPACK_IMPORTED_MODULE_5__["AcceptJobFormPage"]
    }];

    var AcceptJobFormPageModule = function AcceptJobFormPageModule() {
      _classCallCheck(this, AcceptJobFormPageModule);
    };

    AcceptJobFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_accept_job_form_page__WEBPACK_IMPORTED_MODULE_5__["AcceptJobFormPage"]],
      exports: [_accept_job_form_page__WEBPACK_IMPORTED_MODULE_5__["AcceptJobFormPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AcceptJobFormPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/accept-job-form/accept-job-form.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/jobs/accept-job-form/accept-job-form.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsAcceptJobFormAcceptJobFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9hY2NlcHQtam9iLWZvcm0vRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcam9ic1xcYWNjZXB0LWpvYi1mb3JtXFxhY2NlcHQtam9iLWZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JzL2FjY2VwdC1qb2ItZm9ybS9hY2NlcHQtam9iLWZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JzL2FjY2VwdC1qb2ItZm9ybS9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyIsInNyYy9hcHAvam9icy9hY2NlcHQtam9iLWZvcm0vRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xccmFkaW8tdGFnLnNjc3MiLCJzcmMvYXBwL2pvYnMvYWNjZXB0LWpvYi1mb3JtL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNvbG9yLXJhZGlvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0VBRUEsdUJBQUE7RUFFQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkpBQUE7QUNQRjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEVUE7RUFDRSxvQ0FBQTtBQ1BGOztBRFNDO0VBQ0Msb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUVBLFlBQUE7QUNSRjs7QURXRTtFQUNFLDJDQUFBO0FDVEo7O0FEV0k7RUFDRSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLHVDQUFBO1VBQUEsc0NBQUE7RUFFQSx5REFBQTtBQ1hOOztBRGFNO0VBQ0Usb0JBQUE7RUFB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RSxnQkFBQTtFQUNBLG1CQUFBO0FDb0RKOztBRC9DRTs7RUFFRSwyQ0FBQTtBQ2tESiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvYWNjZXB0LWpvYi1mb3JtL2FjY2VwdC1qb2ItZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvcmFkaW8tdGFnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NvbG9yLXJhZGlvXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcclxuXHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3c6IDU7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcjogMiU7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKSkgLyB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKTtcclxufVxyXG5cclxuLmNyZWF0ZS11c2VyLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uZmlsdGVycy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG5cdGlvbi1pdGVtLWRpdmlkZXIge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cdFx0LS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHRcdC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHRcdC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuICAucmFuZ2UtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgIC5yYW5nZS1pdGVtIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCAgdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG5cclxuICAgICAgLnJhbmdlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmFuZ2UtY29udHJvbCB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1saXN0IHtcclxuICAgIC5jaGVja2JveC1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLmNoZWNrYm94LWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yYWRpby1saXN0IHtcclxuICAgIC5yYWRpby1ncm91cCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYWRpby1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLnJhZGlvLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0LmNoZWNrYm94LXRhZ3Mge1xyXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcclxuXHJcblx0XHRAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcclxuXHJcbiAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgICYuc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xyXG4gIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cclxuICAucmFkaW8tdGFncyB7XHJcbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdEBpbmNsdWRlIHJhZGlvLXRhZygpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgLnJhZGlvLXRhZyB7XHJcbiAgICAgIC0tcmFkaW8tdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG4gICAgfVxyXG5cdH1cclxuXHJcbiAgLnRvZ2dsZS1saXN0IHtcclxuICAgIC50b2dnbGUtaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC50b2dnbGUtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi10b2dnbGUge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY291bnRlci1saXN0IHtcclxuICAgIC5jb3VudGVyLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAuY291bnRlci1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50ZXItdmFsdWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1jb3VudGVyLWlucHV0IHtcclxuICAgICAgICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJhdGluZ3MtbGlzdCB7XHJcbiAgICAucmF0aW5nLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAucmF0aW5nLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcHAtcmF0aW5nLWlucHV0IHtcclxuICAgICAgICAtLXJhdGluZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblxyXG5cdC5jb2xvci1yYWRpby1ncm91cCB7XHJcbiAgICAvLyBBY2NvdW50IGZvciAyJSBzdGFydCBhbmQgZW5kIG1hcmdpbiBzZXQgYnkgLmNvbG9yLXRhZyBjaGlsZHNcclxuXHRcdHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgLmNvbG9yLXJhZGlvIHtcclxuICAgICAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcclxuICAgICAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuXHJcbiAgICAgIGZsZXg6IDAgMCB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcclxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XHJcblxyXG4gICAgICAuY29sb3ItcmFkaW8taW5uZXItd3JhcHBlciB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHRcdFx0fVxyXG4gICAgfVxyXG5cclxuXHRcdEBpbmNsdWRlIGNvbG9yLXJhZGlvKCk7XHJcblx0fVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5tZCkge1xyXG4gIC5yYXRpbmdzLWxpc3QsXHJcbiAgLmNvdW50ZXItbGlzdCxcclxuICAudG9nZ2xlLWxpc3QsXHJcbiAgLnJhZGlvLWxpc3QsXHJcbiAgLmNoZWNrYm94LWxpc3QsXHJcbiAgLnJhbmdlLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcclxuICAucmFkaW8tdGFncyxcclxuICAuY2hlY2tib3gtdGFncyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xuICAtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdzogNTtcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcjogMiU7XG4gIC0tcGFnZS1jb2xvci1yYWRpby13aWR0aDogY2FsYygoMTAwJSAtICgyICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSkpIC8gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSk7XG59XG5cbi5jcmVhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4uZmlsdGVycy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZpbHRlcnMtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3QgLmNoZWNrYm94LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIC5jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gLnJhZGlvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtLXJhZGlvLXRhZy1jb2xvcjogIzAwMDtcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcbiAgZmxleDogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZy5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcgaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIHtcbiAgLS1yYWRpby10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSAudG9nZ2xlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSBpb24tdG9nZ2xlIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYXRpbmdzLWxpc3QgLnJhdGluZy1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAucmF0aW5ncy1saXN0IC5yYXRpbmctaXRlbSAucmF0aW5nLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhdGluZ3MtbGlzdCAucmF0aW5nLWl0ZW0gYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCAuY29sb3ItcmFkaW8ge1xuICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYik7XG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xuICBmbGV4OiAwIDAgdmFyKC0tcGFnZS1jb2xvci1yYWRpby13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tcGFnZS1jb2xvci1yYWRpby13aWR0aCk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgLmNvbG9yLXJhZGlvIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpbyB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogNHB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2IpLCAuMykgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1yYWRpby1jaGVja2VkIC5jb2xvci1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAuY29sb3ItbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8gLmNvbG9yLWxhYmVsIHtcbiAgLS1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cblxuOmhvc3QtY29udGV4dCgubWQpIC5yYXRpbmdzLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLmNvdW50ZXItbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAudG9nZ2xlLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLnJhZGlvLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLmNoZWNrYm94LWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLnJhbmdlLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIC5yYWRpby10YWdzLFxuOmhvc3QtY29udGV4dCguaW9zKSAuY2hlY2tib3gtdGFncyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiIsIkBtaXhpbiByYWRpby10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tcmFkaW8tdGFnLWNvbG9yOiAjMDAwO1xuICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5yYWRpby10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tbWluLWhlaWdodDogMzhweDtcblxuXHRcdC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWJhY2tncm91bmQpO1xuXHRcdC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG5cbiAgICBmbGV4OiAxO1xuXG5cdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tcmFkaW8ge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAucmFkaW8taWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiIsIkBtaXhpbiBjb2xvci1yYWRpbygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0aW9uLWl0ZW0uY29sb3ItcmFkaW8ge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuXHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLXBhZGRpbmctdG9wOiAwcHg7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdFx0LS1ib3JkZXItd2lkdGg6IDRweDtcblx0XHQtLWJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0LS1ib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0LS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIC8vIEJvdGggdGhlIGlvbi1pdGVtIGFuZCBpdCdzIHNoYWRvdyBkb20gaW5uZXJzIGhhdmUgYm9yZGVyLXJhZGl1cyBwcm9wZXJ0aWVzIGFwcGxpZWRcbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgLml0ZW0taW5uZXIgLmlucHV0LXdyYXBwZXIgZWxlbWVudCBpbnNpZGUgdGhlIGlvbi1pdGVtIHNoYWRvdyByb290XG4gICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgaW9uLWl0ZW0gZWxlbWVudFxuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xuXG5cdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xuXHRcdFx0LS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2IpLCAuMykgIWltcG9ydGFudDtcblx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcblxuXHRcdFx0LmNvbG9yLWxhYmVsIHtcbiAgICAgICAgb3BhY2l0eTogMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuXHRcdFx0b3BhY2l0eTogMC41O1xuXG4gICAgICAuY29sb3ItbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cdFx0fVxuXG4gICAgLmNvbG9yLWxhYmVsIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWNvbG9yKTtcblxuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cblxuICAgIGlvbi1yYWRpbyB7XG4gICAgICBtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblx0fVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/jobs/accept-job-form/accept-job-form.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/jobs/accept-job-form/accept-job-form.page.ts ***!
    \**************************************************************/

  /*! exports provided: AcceptJobFormPage */

  /***/
  function srcAppJobsAcceptJobFormAcceptJobFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcceptJobFormPage", function () {
      return AcceptJobFormPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../dbmodels/jobs-listing.model */
    "./src/app/dbmodels/jobs-listing.model.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/utils.service */
    "./src/app/services/utils.service.ts");

    var AcceptJobFormPage =
    /*#__PURE__*/
    function () {
      function AcceptJobFormPage(loadingController, alertController, modalCtrl, utilsService, jobService, authService) {
        _classCallCheck(this, AcceptJobFormPage);

        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.utilsService = utilsService;
        this.jobService = jobService;
        this.authService = authService;
        this.selectedCurrency = "";
        this.shareCustomOffer = false;
        this.priceTagLabel = "Offer Price";
        this.showJobThumbnail = true;
        this.validations = {
          'agree': [{
            type: 'required',
            message: 'You must agree that you meet the job requirements.'
          }],
          'amount': [{
            type: 'required',
            message: 'You must enter your offer price for this job.'
          }],
          'comment': [{
            type: 'required',
            message: 'You must enter your offer price for this job.'
          }]
        };
        var startDate = new Date().toISOString();
        this.minDeliveryDate = startDate;
      }

      _createClass(AcceptJobFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.applyJobForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            agree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue),
            applicant_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            job_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            enableCustomOffer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.shareCustomOffer),
            salary_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            delivery_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            share_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
          });
          this.selectedCurrency = this.job.currency;
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              console.log("AUTH DATA USERID" + authData.id);

              _this.applyJobForm.controls.applicant_id.patchValue(authData.id);

              _this.applyJobForm.get('applicant_id').updateValueAndValidity();

              _this.applyJobForm.controls.job_id.patchValue(_this.job.id);

              _this.applyJobForm.get('job_id').updateValueAndValidity();

              _this.applyJobForm.controls.salary_type.patchValue(_this.job.salary_type);

              _this.applyJobForm.get('salary_type').updateValueAndValidity();

              _this.applyJobForm.controls.currency.patchValue(_this.job.currency);

              _this.applyJobForm.get('currency').updateValueAndValidity();
            }
          });

          if (this.job.salary_type !== "fixed") {
            if (this.job.salary_type == "monthly") {
              this.priceTagLabel = "Expected Monthly Salary";
            }

            if (this.job.salary_type == "perHour") {
              this.priceTagLabel = "Expected Hourly Rate";
            }
          }
        }
      }, {
        key: "onCustomOfferEnabled",
        value: function onCustomOfferEnabled(e) {
          this.shareCustomOffer = !this.shareCustomOffer;

          if (!this.shareCustomOffer) {
            this.applyJobForm.get('salary_type').clearValidators();
            this.applyJobForm.get('salary_type').updateValueAndValidity();
            this.applyJobForm.get('amount').clearValidators();
            this.applyJobForm.get('amount').updateValueAndValidity();
            this.applyJobForm.get('delivery_date').clearValidators();
            this.applyJobForm.get('delivery_date').updateValueAndValidity();
          } else {
            this.applyJobForm.get('amount').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]);
            this.applyJobForm.get('amount').updateValueAndValidity();
          }
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Submitting Application...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
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
        key: "submitForm",
        value: function submitForm() {
          var _this2 = this;

          this.presentLoadingWithOptions();
          var date_closing = this.applyJobForm.value.delivery_date;

          if (date_closing !== null && date_closing != "") {
            date_closing = this.utilsService.splitTimestampFromDate(this.applyJobForm.value.delivery_date);

            if (this.utilsService.isValidDate(date_closing)) {} else {
              var formattedVal = this.utilsService.formatTheDate(this.applyJobForm.value.delivery_date);
              this.applyJobForm.controls.delivery_date.patchValue(formattedVal);
              date_closing = formattedVal;
              console.log("Date formatted from " + this.applyJobForm.value.delivery_date + " to " + formattedVal);
            }
          }

          var postData = {
            applicant_id: this.applyJobForm.value.applicant_id,
            job_id: this.applyJobForm.value.job_id,
            comment: this.applyJobForm.value.comment,
            amount: this.applyJobForm.value.amount,
            currency: this.applyJobForm.value.amount,
            salary_type: this.applyJobForm.value.salary_type,
            delivery_date: this.applyJobForm.value.delivery_date,
            share_phone: this.applyJobForm.value.share_phone ? 1 : 0
          };

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
            console.log('########## Sending Post params ########### ' + JSON.stringify(postData));
          }

          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              _this2.jobService.callSubmitApplicationAPI(authData.api_key, postData).subscribe(function (res) {
                _this2.loadingController.dismiss();

                if (!res.error) {
                  _this2.dismissModal(res.message); //this.firebaseService.invokeProfileChangeEvent.

                } else {
                  _this2.presentAlert(res.message);
                }
              }, function (error) {
                _this2.loadingController.dismiss();

                _this2.presentAlert('Looks like there is a Network Issue.');
              });
            }
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal(item) {
          this.modalCtrl.dismiss(item);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss();
        }
      }]);

      return AcceptJobFormPage;
    }();

    AcceptJobFormPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_3__["JobItemModel"])], AcceptJobFormPage.prototype, "job", void 0);
    AcceptJobFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accept-job-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accept-job-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/accept-job-form/accept-job-form.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accept-job-form.page.scss */
      "./src/app/jobs/accept-job-form/accept-job-form.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../listing/styles/deals-listing.page.scss */
      "./src/app/jobs/listing/styles/deals-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../listing/styles/deals-listing.shell.scss */
      "./src/app/jobs/listing/styles/deals-listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../listing/styles/deals-listing.ios.scss */
      "./src/app/jobs/listing/styles/deals-listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"], _jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], AcceptJobFormPage);
    /***/
  },

  /***/
  "./src/app/services/utils.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/utils.service.ts ***!
    \*******************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      } // splitTimestampFromDate(event){
      //   let dataVal = event.target.value;
      //   if(dataVal.includes('T')){
      //   let formattedVal = dataVal.split('T')[0];
      //   return formattedVal;
      //   }
      //   return event;
      // }


      _createClass(UtilsService, [{
        key: "splitTimestampFromDate",
        value: function splitTimestampFromDate(dataVal) {
          if (dataVal.includes('T')) {
            var formattedVal = dataVal.split('T')[0];
            return formattedVal;
          }

          return dataVal;
        }
      }, {
        key: "isValidDate",
        value: function isValidDate(dateString) {
          try {
            var regEx = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateString.match(regEx)) return false; // Invalid format

            var d = new Date(dateString);
            var dNum = d.getTime();
            if (!dNum && dNum !== 0) return false; // NaN value, Invalid date

            return d.toISOString().slice(0, 10) === dateString;
          } catch (Exception) {
            return true;
          }
        }
      }, {
        key: "formatTheDate",
        value: function formatTheDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }]);

      return UtilsService;
    }();

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UtilsService);
    /***/
  }
}]);
//# sourceMappingURL=default~details-job-details-module~jobs-accept-job-form-accept-job-form-module-es5.js.map