function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~jobs-listing-job-filter-job-filter-module~jobs-listing-jobs-listing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/listing/job-filter/job-filter.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/listing/job-filter/job-filter.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsListingJobFilterJobFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"validations-form ion-page\" [formGroup]=\"userFilterForm\" (ngSubmit)=\"onSubmit()\" method=\"POST\">\n  <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterUsers()\">FILTER</ion-button>\n    </ion-buttons>\n    <ion-title>Filter Jobs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"filters-content\">\n  <ion-item-group class=\"filters-group\">\n  \n    <ion-list class=\"toggle-list\" lines=\"full\">\n      <ion-item class=\"toggle-item\">\n        <ion-label class=\"toggle-label\" style=\"color:#333333;font-weight:bold;\">Use My Default Location</ion-label>\n        <ion-toggle color=\"primary\"  (ionChange)=\"onLocationEnabled($event)\" formControlName=\"isLocationEnabled\" checked></ion-toggle>\n      </ion-item>\n    </ion-list>\n      \n      <ion-row *ngIf=\"!isLocationEnabled\">\n        <ion-col size=\"12\" align-self-start style=\"vertical-align:middle;\">\n          <ion-item>\n            <ion-input placeholder=\"Select a location\" name=\"address\" formControlName=\"address\" (click)=\"showAddressModal()\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\" align-self-start style=\"vertical-align:middle;\">\n          <ion-item>\n            <ion-input placeholder=\"Latitude\" name=\"latitude\" formControlName=\"latitude\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\" align-self-start style=\"vertical-align:middle;\">\n          <ion-item>\n            <ion-input placeholder=\"Longitude\" name=\"longitude\" formControlName=\"longitude\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div style=\"border-bottom: 1px solid #999999;\"></div>\n\n      <ion-list class=\"toggle-list\" lines=\"full\">\n        <ion-item class=\"toggle-item\" style=\"--background: #ffffff;\">\n          <ion-label class=\"toggle-label\" style=\"color:#333333;font-weight:bold;\">Search Job Within Range</ion-label>\n          <ion-toggle color=\"primary\" (ionChange)=\"onSearchRadiusEnabled($event)\" formControlName=\"isRadiusEnabled\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-item-divider *ngIf=\"isSearchRadiusEnabled\">\n        <ion-label style=\"color:#555555;font-weight:bold;\">Search within {{ this.userFilterForm.value.km_radius }} KM</ion-label>\n      </ion-item-divider>\n\n      <ion-row class=\"range-item\" *ngIf=\"isSearchRadiusEnabled\">\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\"  formControlName=\"km_radius\" color=\"secondary\" (ionChange)=\"searchRangeChange($event)\" min=\"0\" max=\"100\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n\n      <ion-item-divider>\n        <ion-label style=\"color:#555555;font-weight:bold;\">Select Job Type(s)</ion-label>\n      </ion-item-divider>\n\n    <ion-row class=\"checkbox-tags square-checkbox-tags\" *ngIf=\"job_types\" style=\"background-color:#ffffff;\">\n          <ion-item formArrayName=\"availableJobTypes\" lines=\"none\" class=\"checkbox-tag\" *ngFor=\"let jobType of job_types\">\n            <ion-label class=\"tag-label\">{{jobType.title}}</ion-label>\n            <ion-checkbox [formControlName]=\"jobType.id\" (ionChange)=\"onJobTypeFilterSelected($event, jobType.id)\"></ion-checkbox>\n          </ion-item>\n    </ion-row>\n\n<ion-item-divider>\n<ion-label style=\"color:#555555;font-weight:bold;\">Select Job Area</ion-label>\n</ion-item-divider>\n\n<ion-row>\n    <ion-col size=\"12\" align-self-start style=\"vertical-align:middle;\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Select Job Area *</ion-label>\n        <ion-input type=\"hidden\" formControlName=\"jobArea\"></ion-input>\n        <ion-input type=\"text\" formControlName=\"job_area_name\" (click)=\"openSelectJobArea()\"></ion-input>\n      </ion-item>\n    </ion-col>\n</ion-row>\n\n<ion-item-divider *ngIf=\"selected_job_area && selected_job_area > 0\">\n  <ion-label style=\"color:#555555;font-weight:bold;\">Select Professional Skills</ion-label>\n  </ion-item-divider>\n<ion-list class=\"counter-list\" lines=\"full\">\n      \n<ion-row class=\"checkbox-tags rounded-checkbox-tags\" *ngIf=\"selected_job_area && selected_job_area > 0\">\n      <ion-item formArrayName=\"skillID\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let jobSkill of skill_types\">\n        <ion-label class=\"tag-label\">{{jobSkill.title}}</ion-label>\n        <ion-checkbox [formControlName]=\"jobSkill.id\" (ionChange)=\"onJobSkillsChange($event, jobSkill.id)\"></ion-checkbox>\n      </ion-item>\n\n</ion-row>\n\n\n <!------ Start Filter By Experience --------->\n <ion-list class=\"toggle-list\" lines=\"full\">\n  <ion-item class=\"toggle-item\" style=\"--background: #ffffff;\">\n    <ion-label class=\"toggle-label\" style=\"color:#333333;\">Filter By Work Experience</ion-label>\n    <ion-toggle color=\"primary\" formControlName=\"isExperienceFilterEnabled\" (ionChange)=\"onFilterByExperienceEnabled($event)\"></ion-toggle>\n  </ion-item>\n</ion-list>\n\n<ion-item-divider *ngIf=\"isExperienceFilterEnabled\">\n  <ion-label style=\"color:#555555;font-weight:bold;\">Work Experience ({{selected_work_experience_min}}-{{selected_work_experience_max}} Yrs)</ion-label>\n</ion-item-divider>\n\n<ion-row *ngIf=\"isExperienceFilterEnabled\">\n<ion-col size=\"6\">\n  <ion-item class=\"input-item\">\n    <ion-label position=\"floating\">Min. Experience</ion-label>\n    <ion-select  formControlName=\"selected_work_experience_min\" cancelText=\"Cancel\" okText=\"OK\">\n      <ion-select-option *ngFor=\"let item of custom_values\" [value]=\"item\" >{{item}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-col>\n\n<ion-col size=\"6\">\n  <ion-item class=\"input-item\">\n    <ion-label position=\"floating\">Max. Experience</ion-label>\n    <ion-select formControlName=\"selected_work_experience_max\" cancelText=\"Cancel\" okText=\"OK\">\n      <ion-select-option *ngFor=\"let item of custom_values\" [value]=\"item\" >{{item}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-col>\n</ion-row>\n<!------ Ends Filter By Experience --------->\n\n<div style=\"border-bottom: 1px solid #999999;\"></div>\n\n<!------ Start Filter By Salary Range --------->\n<ion-list class=\"toggle-list\" lines=\"full\">\n<ion-item class=\"toggle-item\" style=\"--background: #ffffff;\">\n  <ion-label class=\"toggle-label\" style=\"color:#333333;\">Filter By Salary</ion-label>\n  <ion-toggle color=\"primary\" formControlName=\"isSalaryFilterEnabled\" (ionChange)=\"onFilterBySalaryEnabled($event)\"></ion-toggle>\n</ion-item>\n</ion-list>\n\n<ion-item-divider *ngIf=\"isSalaryFilterEnabled\">\n  <ion-label style=\"color:#555555;font-weight:bold;\">EXPECTED SALARY RANGE</ion-label>\n</ion-item-divider>\n\n<ion-row *ngIf=\"isSalaryFilterEnabled\">\n<ion-col align-self-start style=\"vertical-align:middle;\">\n<ion-item>\n  <ion-label position=\"floating\">Min Salary</ion-label>\n  <ion-input type=\"number\" formControlName=\"min_salary\" name=\"min_slary\" placeholder=\"Min Salary\"></ion-input>\n</ion-item>\n\n</ion-col>\n\n<ion-col align-self-end style=\"text-align:middle;\">\n<ion-item>\n  <ion-label position=\"floating\">Max Salary</ion-label>\n<ion-input type=\"number\" formControlName=\"max_salary\" name=\"max_slary\" placeholder=\"Max Salary\"></ion-input>\n</ion-item>\n</ion-col>\n\n<ion-col size=\"3\" align-self-start style=\"vertical-align:middle;\">\n<ion-item>\n<ion-label position=\"floating\">Currency</ion-label>\n<ion-input formControlName=\"currency\" name=\"currency\" (click)=\"openCurrencyChooser()\" readonly></ion-input>\n</ion-item>\n\n</ion-col>\n</ion-row>\n<!------ Ends Filter By Experience --------->\n\n\n<ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n     <ion-col size=\"12\">\n      <ion-button lg class=\"submit-btn\" (click)=\"filterUsers()\" type=\"submit\" [disabled]=\"!userFilterForm.valid\" expand=\"block\" fill=\"solid\">Apply Filter </ion-button>\n</ion-col></ion-row>\n\n</ion-list>\n\n    \n</ion-item-group>\n</ion-content>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-currency/select-currency.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-currency/select-currency.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilityComponentsSelectCurrencySelectCurrencyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title>Select Currency</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search document types\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Currencies...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      \n      <ion-icon src=\"./assets/sample-icons/side-menu/money.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Currency Found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">     \n        <ion-item class=\"list-item\" *ngFor=\"let item of listing\" tappable (click)=\"dismissModal(item)\">\n   \n          <ion-row class=\"user-row\">\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h3 class=\"user-name\">\n                  <app-text-shell animation=\"bouncing\" [data]=\"item?.currency\"></app-text-shell>\n                </h3>\n    \n              </div>\n            </ion-col>\n          </ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-area/select-job-area.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-area/select-job-area.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilityComponentsSelectJobAreaSelectJobAreaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select Job Area</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search Job Areas\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Job Areas...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n  <!------- Empty View ------->\n  <ion-grid style=\"width:100%;height: 100%;display:block;align-content: center;\" *ngIf=\"listing?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Job Area found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n  <ion-list class=\"\" *ngIf=\"listing?.length > 0 && !loading\">     \n    <ion-item class=\"list-item\" *ngFor=\"let item of listing\" (click)=\"dismissModal(item)\">\n      <ion-row class=\"user-row\">\n        <!-- <ion-col size=\"3\" class=\"user-image-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item?.image\" [alt]=\"'Company Logo'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col> -->\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h5 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n \n\n</ion-item>\n </ion-list>\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\">\n      <ion-button class=\"select-variant-btn\" color=\"primary\" expand=\"block\" fill=\"solid\" (click)=\"openSizeChooser()\">SELECT</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/jobs/listing/job-filter/job-filter.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/jobs/listing/job-filter/job-filter.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsListingJobFilterJobFilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: #222222;\n  --checkbox-tag-background: #dddddd;\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: #222222;\n  --checkbox-tag-background: #dddddd;\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9saXN0aW5nL2pvYi1maWx0ZXIvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcam9ic1xcbGlzdGluZ1xcam9iLWZpbHRlclxcam9iLWZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2pvYnMvbGlzdGluZy9qb2ItZmlsdGVyL2pvYi1maWx0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JzL2xpc3Rpbmcvam9iLWZpbHRlci9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyIsInNyYy9hcHAvam9icy9saXN0aW5nL2pvYi1maWx0ZXIvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xccmFkaW8tdGFnLnNjc3MiLCJzcmMvYXBwL2pvYnMvbGlzdGluZy9qb2ItZmlsdGVyL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNvbG9yLXJhZGlvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0VBRUEsdUJBQUE7RUFFQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkpBQUE7QUNMRjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FET0M7RUFDQyxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBRUEsWUFBQTtBQ05GOztBRFNFO0VBQ0UsMkNBQUE7QUNQSjs7QURTSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDVE47O0FEV007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSx5REFBQTtBQ1RSOztBRFVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ1JWOztBRFdRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ1RWOztBRGFNO0VBRUUseUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDYlI7O0FEbUJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDakJOOztBRG1CTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUNqQkw7O0FEb0JNO0VBQ0UsdUJBQUE7VUFBQSxzQkFBQTtBQ2xCUjs7QUR3Qkk7RUFDRSxjQUFBO0FDdEJOOztBRHlCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ3ZCTjs7QUR5Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FDdkJMOztBRDBCTTtFQUNFLHlCQUFBO1VBQUEsd0JBQUE7QUN4QlI7O0FENkJDO0VBQ0Msd0ZBQUE7RUUvR0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QURxRkY7O0FDbkZDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRG9GSjs7QUNsRkk7RUFDRCx1QkFBQTtBRG9GSDs7QUNqRkU7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEbUZOOztBQ2hGSTtFQUNFLFlBQUE7QURrRk47O0FDaEZNO0VBRUUsVUFBQTtBRGlGUjs7QUM3RUU7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRCtFTjs7QUM1RUU7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FENEVIOztBRFBJO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQ1NOOztBRExJO0VBQ0Usd0NBQUE7QUNPTjs7QURMTTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDT1I7O0FERkk7RUFDQSwyQ0FBQTtBQ0lKOztBREZNO0VBR0UsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNEQUFBO0VBQ0EsNERBQUE7QUNFUjs7QURHRTtFQUNFLCtEQUFBO0VBQ0Ysd0NBQUE7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0VHdEpGLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0FGc0pGOztBRXBKQztFQUVHLG9CQUFBO0VBQ0Esd0JBQUE7RUFDRiwwQkFBQTtFQUNFLGtCQUFBO0VBRUYsb0JBQUE7RUFDRSxtQkFBQTtFQUNGLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0VBRUUsbUJBQUE7VUFBQSxPQUFBO0FGbUpKOztBRWpKRTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QUZtSk47O0FFaEpJO0VBQ0UsWUFBQTtBRmtKTjs7QUVoSk07RUFFRSxVQUFBO0FGaUpSOztBRTdJSTtFQUNELFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FGK0lOOztBRTVJRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUY0SUg7O0FEbkNJO0VBQ0UsNkNBQUE7RUFDQSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EseURBQUE7RUFFQSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0NOOztBRC9CSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ2lDTjs7QUQvQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDaUNSOztBRDlCTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNnQ1I7O0FEMUJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDNEJOOztBRDFCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUM0Qkw7O0FEekJNO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQzJCUjs7QUR4Qk07RUFDRSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0RBQUE7QUMwQlI7O0FEcEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDc0JOOztBRHBCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUNzQkw7O0FEbkJNO0VBQ0UsMENBQUE7QUNxQlI7O0FEaEJDO0VBRUMscUZBQUE7RUFDQSwyQ0FBQTtFSXpPQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtBSDJQRjs7QURsQkk7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkRBQUE7RUFDQSxnQ0FBQTtFQUVBLG1CQUFBO1VBQUEsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0FDbUJOOztBRGpCTTtFQUNGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNtQlI7O0FHelFDO0VBRUcscUJBQUE7RUFDRixrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUdFLGlEQUFBO0VBRUYsK0NBQUE7QUh1UUY7O0FHclFFO0VBQ0MseUVBQUE7RUFDQSxrQkFBQTtBSHVRSDs7QUdyUUc7RUFDSyxVQUFBO0FIdVFSOztBR25RRTtFQUNDLFlBQUE7QUhxUUg7O0FHblFNO0VBRUUsVUFBQTtBSG9RUjs7QUdoUUk7RUFDRSxpQ0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FIaVFOOztBRzlQSTtFQUNFLFdBQUE7RUFFSCxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUg4UEg7O0FEbERFOzs7Ozs7RUFNRSxnQkFBQTtFQUNBLG1CQUFBO0FDcURKOztBRGhERTs7RUFFRSwyQ0FBQTtBQ21ESiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvbGlzdGluZy9qb2ItZmlsdGVyL2pvYi1maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3JhZGlvLXRhZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jb2xvci1yYWRpb1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuXHJcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XHJcblxyXG4gIC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93OiA1O1xyXG4gIC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXI6IDIlO1xyXG4gIC0tcGFnZS1jb2xvci1yYWRpby13aWR0aDogY2FsYygoMTAwJSAtICgyICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSkpIC8gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSk7XHJcbn1cclxuXHJcbi5maWx0ZXJzLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcblx0aW9uLWl0ZW0tZGl2aWRlciB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblx0XHQtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cdFx0LS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblxyXG4gIC5yYW5nZS1saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgLnJhbmdlLWl0ZW0ge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAucmFuZ2UtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCAgdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmFuZ2UtY29udHJvbCB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1saXN0IHtcclxuICAgIC5jaGVja2JveC1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLmNoZWNrYm94LWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yYWRpby1saXN0IHtcclxuICAgIC5yYWRpby1ncm91cCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYWRpby1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLnJhZGlvLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0LmNoZWNrYm94LXRhZ3Mge1xyXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcclxuXHJcblx0XHRAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcclxuXHJcbiAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgICYuc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI2RkZGRkZDtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAvLyAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAvLyAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHJcbiAgLnJhZGlvLXRhZ3Mge1xyXG4gICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHRAaW5jbHVkZSByYWRpby10YWcoKTtcclxuXHJcbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgIC5yYWRpby10YWcge1xyXG4gICAgICAtLXJhZGlvLXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgIH1cclxuXHR9XHJcblxyXG4gIC50b2dnbGUtbGlzdCB7XHJcbiAgICAudG9nZ2xlLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgXHJcbiAgICAgIC50b2dnbGUtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3VudGVyLWxpc3Qge1xyXG4gICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC5jb3VudGVyLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmF0aW5ncy1saXN0IHtcclxuICAgIC5yYXRpbmctaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC5yYXRpbmctbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1yYXRpbmctaW5wdXQge1xyXG4gICAgICAgIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHJcblx0LmNvbG9yLXJhZGlvLWdyb3VwIHtcclxuICAgIC8vIEFjY291bnQgZm9yIDIlIHN0YXJ0IGFuZCBlbmQgbWFyZ2luIHNldCBieSAuY29sb3ItdGFnIGNoaWxkc1xyXG5cdFx0cGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAuY29sb3ItcmFkaW8ge1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgICAgIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYik7XHJcbiAgICAgIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xyXG5cclxuICAgICAgZmxleDogMCAwIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKTtcclxuXHJcbiAgICAgIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcbiAgICB9XHJcblxyXG5cdFx0QGluY2x1ZGUgY29sb3ItcmFkaW8oKTtcclxuXHR9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLm1kKSB7XHJcbiAgLnJhdGluZ3MtbGlzdCxcclxuICAuY291bnRlci1saXN0LFxyXG4gIC50b2dnbGUtbGlzdCxcclxuICAucmFkaW8tbGlzdCxcclxuICAuY2hlY2tib3gtbGlzdCxcclxuICAucmFuZ2UtbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmlvcykge1xyXG4gIC5yYWRpby10YWdzLFxyXG4gIC5jaGVja2JveC10YWdzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG4gIC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93OiA1O1xuICAtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyOiAyJTtcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKSkgLyB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKTtcbn1cblxuLmZpbHRlcnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3QgLmNoZWNrYm94LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIC5jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gLnJhZGlvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMjIyMjIyO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzIyMjIyMjtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC0tcmFkaW8tdGFnLWNvbG9yOiAjMDAwO1xuICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tbWluLWhlaWdodDogMzhweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuICBmbGV4OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcge1xuICAtLXJhZGlvLXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAudG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAudG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIC50b2dnbGUtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAudG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIGlvbi10b2dnbGUge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0gLmNvdW50ZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0gLmNvdW50ZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIGFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhdGluZ3MtbGlzdCAucmF0aW5nLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYXRpbmdzLWxpc3QgLnJhdGluZy1pdGVtIC5yYXRpbmctbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAucmF0aW5ncy1saXN0IC5yYXRpbmctaXRlbSBhcHAtcmF0aW5nLWlucHV0IHtcbiAgLS1yYXRpbmctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIC5jb2xvci1yYWRpbyB7XG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XG4gIC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZDogI0NDQztcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKTtcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA0MCU7XG4gIGZsZXg6IDAgMCB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcbiAgbWF4LXdpZHRoOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCAuY29sb3ItcmFkaW8gLmNvbG9yLXJhZGlvLWlubmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiA0cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYiksIC4zKSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLXJhZGlvLWNoZWNrZWQgLmNvbG9yLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC5jb2xvci1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpbyAuY29sb3ItbGFiZWwge1xuICAtLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8gaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuXG46aG9zdC1jb250ZXh0KC5tZCkgLnJhdGluZ3MtbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAuY291bnRlci1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC50b2dnbGUtbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAucmFkaW8tbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAuY2hlY2tib3gtbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAucmFuZ2UtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbjpob3N0LWNvbnRleHQoLmlvcykgLnJhZGlvLXRhZ3MsXG46aG9zdC1jb250ZXh0KC5pb3MpIC5jaGVja2JveC10YWdzIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQuY2hlY2tib3gtdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xuXG4gICAgJi5yb3VuZGVkLXRhZyB7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcblx0XHR9XG5cblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuXHRcdC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIHJhZGlvLXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1yYWRpby10YWctY29sb3I6ICMwMDA7XG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LnJhZGlvLXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1taW4taGVpZ2h0OiAzOHB4O1xuXG5cdFx0LS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcblx0XHQtLWJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0LS1ib3JkZXItY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYmFja2dyb3VuZCk7XG5cdFx0LS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcblxuICAgIGZsZXg6IDE7XG5cblx0XHQmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1yYWRpbyB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIGNvbG9yLXJhZGlvKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDUwJTtcblxuXHRpb24taXRlbS5jb2xvci1yYWRpbyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0tcGFkZGluZy10b3A6IDBweDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0XHQtLWJvcmRlci13aWR0aDogNHB4O1xuXHRcdC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcblx0XHQtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgLy8gQm90aCB0aGUgaW9uLWl0ZW0gYW5kIGl0J3Mgc2hhZG93IGRvbSBpbm5lcnMgaGF2ZSBib3JkZXItcmFkaXVzIHByb3BlcnRpZXMgYXBwbGllZFxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciBlbGVtZW50IGluc2lkZSB0aGUgaW9uLWl0ZW0gc2hhZG93IHJvb3RcbiAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSBpb24taXRlbSBlbGVtZW50XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG5cblx0XHQmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG5cdFx0XHQtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYiksIC4zKSAhaW1wb3J0YW50O1xuXHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xuXG5cdFx0XHQuY29sb3ItbGFiZWwge1xuICAgICAgICBvcGFjaXR5OiAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG5cdFx0XHRvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC5jb2xvci1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblx0XHR9XG5cbiAgICAuY29sb3ItbGFiZWwge1xuICAgICAgLS1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tY29sb3IpO1xuXG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgaW9uLXJhZGlvIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXHR9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/listing/job-filter/job-filter.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/jobs/listing/job-filter/job-filter.page.ts ***!
    \************************************************************/

  /*! exports provided: JobFilterPage */

  /***/
  function srcAppJobsListingJobFilterJobFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobFilterPage", function () {
      return JobFilterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../utility-components/select-job-area/select-job-area.page */
    "./src/app/utility-components/select-job-area/select-job-area.page.ts");
    /* harmony import */


    var _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../utility-components/select-currency/select-currency.page */
    "./src/app/utility-components/select-currency/select-currency.page.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../bluspec-recruiter/location-autocomplete/location-autocomplete.page */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");

    var JobFilterPage =
    /*#__PURE__*/
    function () {
      function JobFilterPage(formBuilder, storageService, authService, jobService, modalCtrl, modalController) {
        _classCallCheck(this, JobFilterPage);

        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.authService = authService;
        this.jobService = jobService;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController; //Always get this first from the User Service

        this.devMode = false;
        this.isLocationEnabled = true;
        this.isSearchRadiusEnabled = false;
        this.isSalaryFilterEnabled = false;
        this.isExperienceFilterEnabled = false;
        this.job_types = [];
        this.selected_work_experience_min = 0;
        this.selected_work_experience_max = 10;
        this.custom_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.filter_search_radius = 500; //Job Filter Params

        this.selected_job_types = [];
        this.selected_skills = [];
        this.userStatusArr = ["Ongoing", "Pending", "Completed"];
      }

      _createClass(JobFilterPage, [{
        key: "searchRangeChange",
        value: function searchRangeChange(range) {
          console.log('searchRangeChange change', range.target.value);
          var thisRange = range.target.value;

          if (thisRange !== null && thisRange !== NaN) {
            this.filterArr.km_radius = thisRange;
            this.filter_search_radius = thisRange;
          }
        }
      }, {
        key: "filterUsers",
        value: function filterUsers() {
          this.onSubmit();
        } // onChangeOnlineStatus(event) {
        //   //alert(event.detail);
        //   this.online_status = event.target.value;
        //   this.filterArr.online_status = this.online_status;
        //   }

      }, {
        key: "openSelectJobArea",
        value: function openSelectJobArea() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_8__["SelectJobAreaPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this.selectedJobAreaItem = item.data;
                        _this.selected_job_area = item.data.id;
                        _this.selected_job_area_name = item.data.title;

                        _this.updateSkillTypes();
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //this.filterArr = new UserFilterCache();
          this.filterArr = this.jobService.getFilterData();
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              _this2.localUser = authData;
            }
          });
          this.devMode = _config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].DEV_MODE;
          this.userFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            jobArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            job_area_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            jobTypes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            skillID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            availableJobTypes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Pending'),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            km_radius: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1000),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            min_salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            max_salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('USD'),
            selected_work_experience_min: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selected_work_experience_min),
            selected_work_experience_max: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selected_work_experience_max),
            isRadiusEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isSearchRadiusEnabled),
            isLocationEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isLocationEnabled),
            isSalaryFilterEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isSalaryFilterEnabled),
            isExperienceFilterEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isExperienceFilterEnabled)
          });
          /******** PROCESS JOB TYPES ******/

          console.log("Going get Job Types");
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].JOB_TYPES).then(function (results) {
            if (results) {
              _this2.job_types = results;

              _this2.job_types.map(function (item) {
                item.enabled = 0;
              });

              console.log("LISTING Job Types " + JSON.stringify(_this2.job_types));

              _this2.job_types.map(function (item) {
                _this2.userFilterForm.controls.jobTypes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()); //(this.userFilterForm.controls.jobTypes as FormArray).push(this.formBuilder.group(new FormControl(false)));

              });
              /****Start the Restore
              if(this.filterArr.job_type){
               console.log("Start the Restore ##1: "+JSON.stringify(this.filterArr.job_type));
               this.job_types.map((item) => {
                //Appears to be buggy with multiple selection. Under beta version
                if(this.filterArr.job_type.includes(item.title)){
                  item.enabled = 1;
                }else{
                  item.enabled = 0;
                }
                //isJobTypeSelected(topic)
               });
              }
              //End of restoration*****/

            }
          });
          /********* END OF JOB TYPES ******/

          /********ALSO THIS******/

          console.log("Going get Job Skills");
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].JOB_SKILLS).then(function (results) {
            if (results) {
              _this2.skill_types = results;

              _this2.skill_types.map(function (item) {
                item.enabled = 0;
              });

              console.log("LISTING Job Skills " + JSON.stringify(_this2.skill_types));

              _this2.skill_types.map(function (item) {
                _this2.userFilterForm.controls.skillID.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()); //(this.userFilterForm.controls.skillID as FormArray).push(this.formBuilder.group(new FormControl()));

              });

              _this2.skill_types.map(function (item) {
                _this2.userFilterForm.controls.availableJobTypes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
              });
              /*********Start the Restore
              if(this.filterArr.selected_skills_arr){
              console.log("Start the Restore ##1: "+JSON.stringify(this.filterArr.selected_skills_arr));
              this.skill_types.map((item) => {
              if(this.filterArr.selected_skills_arr.includes(item.id)){
              item.enabled = 1;
              }else{
              item.enabled = 0;
              }
              });
              }
              //End of restoration***********/

            }
          });
          /********* DELETE ALSO THIS ******/
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //this.filterArr.status = this.se;
          this.filterArr.work_experience_min = this.userFilterForm.value.selected_work_experience_min;
          this.filterArr.work_experience_max = this.userFilterForm.value.selected_work_experience_max;
          this.filterArr.km_radius = this.userFilterForm.value.km_radius;
          this.filterArr.min_salary = this.userFilterForm.value.min_salary;
          this.filterArr.max_salary = this.userFilterForm.value.max_salary; //Simple Filters supported on server

          this.filterArr.jobArea = this.selected_job_area; //For local restoration purpose

          this.filterArr.selected_skills_arr = this.selected_skills; //Multiple Filters not supported on server

          var selected_skills = this.selected_skills.join();
          this.filterArr.skillID = selected_skills;
          this.filterArr.job_type = this.selected_job_types;
          this.filterArr.job_types = this.selected_job_types.join();
          this.jobService.setFilterData(this.filterArr);
          this.jobService.invokeFilterChangeEvent.next(this.filterArr);
          console.log("FILTER READY: " + JSON.stringify(this.filterArr));
          this.modalController.dismiss();
        }
      }, {
        key: "onJobSkillsChange",
        value: function onJobSkillsChange(event, id) {
          if (event.target.checked) {
            this.selected_skills.push(id);
          } else {
            var index = this.selected_skills.indexOf(id);

            if (index !== -1) {
              this.selected_skills.splice(index, 1);
            }
          }

          console.log("#####: onJobSkillSelected String => " + this.selected_skills.join());
        }
      }, {
        key: "onJobTypeFilterSelected",
        value: function onJobTypeFilterSelected(event, id) {
          console.log("#####: onJobTypeFilterSelected " + id);

          if (event.target.checked) {
            this.selected_job_types.push(id);
          } else {
            var index = this.selected_job_types.indexOf(id);

            if (index !== -1) {
              this.selected_job_types.splice(index, 1);
            }
          }

          console.log("#####: onJobTypeFilterSelected String => " + this.selected_job_types.join());
        }
      }, {
        key: "isJobTypeSelected",
        value: function isJobTypeSelected(topic) {
          return this.selected_job_types.indexOf(topic.id) >= 0;
        }
      }, {
        key: "openCurrencyChooser",
        value: function openCurrencyChooser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_9__["SelectCurrencyPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        //this.selectedCurrency = item.data.symbol;
                        _this3.filterArr.currency = item.data.symbol;
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateSkillTypes",
        value: function updateSkillTypes() {
          var _this4 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].JOB_SKILLS).then(function (allList) {
            if (allList) {
              allList.map(function (item) {
                item.enabled = 0;
              });

              if (_this4.selected_job_area !== null && _this4.selected_job_area !== undefined) {
                console.log("Filtering for Single Job Area : " + _this4.selected_job_area + " among " + _this4.skill_types.length);
                allList = allList.filter(function (item) {
                  return item.parent_id === _this4.selected_job_area;
                });
                _this4.skill_types = allList;
                console.log("Total Filtered : " + _this4.skill_types.length);
              }
            }
          });
        }
      }, {
        key: "onLocationEnabled",
        value: function onLocationEnabled(e) {
          this.isLocationEnabled = !this.isLocationEnabled;

          if (!this.isLocationEnabled) {
            this.filterArr.latitude = "";
            this.filterArr.longitude = "";
          } else {}
        }
      }, {
        key: "onSearchRadiusEnabled",
        value: function onSearchRadiusEnabled(e) {
          this.isSearchRadiusEnabled = !this.isSearchRadiusEnabled;

          if (!this.isLocationEnabled) {
            this.filter_search_radius = 5000;
          }
        }
      }, {
        key: "onFilterBySalaryEnabled",
        value: function onFilterBySalaryEnabled(e) {
          this.isSalaryFilterEnabled = !this.isSalaryFilterEnabled;

          if (!this.isSalaryFilterEnabled) {
            this.filterArr.min_salary = 0;
            this.filterArr.max_salary = 0;
          }
        }
      }, {
        key: "onFilterByExperienceEnabled",
        value: function onFilterByExperienceEnabled(e) {
          this.isExperienceFilterEnabled = !this.isExperienceFilterEnabled;

          if (!this.isExperienceFilterEnabled) {
            this.filterArr.work_experience_min = 0;
            this.filterArr.work_experience_max = 0;
          }
        }
      }, {
        key: "showAddressModal",
        value: function showAddressModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_10__["LocationAutocompletePage"],
                      cssClass: 'fullscreen-modal-css'
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        console.log("dataReturned.data: " + dataReturned.data);
                        alert('' + JSON.stringify(dataReturned.data));
                        _this5.filterArr.address = dataReturned.data;
                      } else {
                        alert('No Place selected. Please try again.');
                      }
                    });
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.userFilterForm.get('skillID');
        }
      }, {
        key: "jobTypesFormArray",
        get: function get() {
          return this.userFilterForm.get('jobTypes');
        }
      }]);

      return JobFilterPage;
    }();

    JobFilterPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    JobFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-filter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/listing/job-filter/job-filter.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./job-filter.page.scss */
      "./src/app/jobs/listing/job-filter/job-filter.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], JobFilterPage);
    /***/
  },

  /***/
  "./src/app/utility-components/select-currency/select-currency.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/utility-components/select-currency/select-currency.page.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectCurrencyPage */

  /***/
  function srcAppUtilityComponentsSelectCurrencySelectCurrencyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCurrencyPage", function () {
      return SelectCurrencyPage;
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


    var _services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SelectCurrencyPage =
    /*#__PURE__*/
    function () {
      function SelectCurrencyPage(navCtrl, masterService, storageService, modalController, router, authService) {
        var _this6 = this;

        _classCallCheck(this, SelectCurrencyPage);

        this.navCtrl = navCtrl;
        this.masterService = masterService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.router = router;
        this.authService = authService;
        this.loading = true;
        this.authService.getAuthCache().then(function (promisedValue) {
          if (promisedValue) {
            _this6.localUser = promisedValue;
          }
        });
      }

      _createClass(SelectCurrencyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].CURRENCIES).then(function (allList) {
            if (allList) {
              _this7.listing = allList;
              _this7.filtered_listing = allList;
              _this7.loading = false;
            }
          });
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this8 = this;

          this.loading = true;
          this.masterService.getCurrencies().subscribe(function (allData) {
            _this8.loading = false;

            if (allData) {
              _this8.listing = allData.result;
              _this8.filtered_listing = allData.result;
            }
          });
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.listing = this.filtered_listing;
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "searchList",
        value: function searchList() {
          var _this9 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.currency.toLowerCase().indexOf(_this9.searchQuery.toLowerCase()) > -1;
          });
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "dismissModal",
        value: function dismissModal(item) {
          //alert(item.title);
          this.modalController.dismiss(item);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return SelectCurrencyPage;
    }();

    SelectCurrencyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SelectCurrencyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-currency',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-currency.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-currency/select-currency.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], SelectCurrencyPage);
    /***/
  },

  /***/
  "./src/app/utility-components/select-job-area/select-job-area.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/utility-components/select-job-area/select-job-area.page.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectJobAreaPage */

  /***/
  function srcAppUtilityComponentsSelectJobAreaSelectJobAreaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectJobAreaPage", function () {
      return SelectJobAreaPage;
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


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");

    var SelectJobAreaPage =
    /*#__PURE__*/
    function () {
      function SelectJobAreaPage(storageService, modalController, toastService) {
        _classCallCheck(this, SelectJobAreaPage);

        this.storageService = storageService;
        this.modalController = modalController;
        this.toastService = toastService;
        this.loading = true;
        this.isMultiMode = false;
      }

      _createClass(SelectJobAreaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].JOB_AREAS).then(function (value) {
            if (value) {
              _this10.filtered_listing = value;
              _this10.listing = value;
              _this10.loading = false;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                console.log("Synced from Subject: " + JSON.stringify(value)); //this.toastService.presentToast("Job areas list has been updated.");
              }
            }
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal(avatar) {
          this.modalController.dismiss(avatar);
        }
      }, {
        key: "selectionDone",
        value: function selectionDone(data) {
          alert("Selecion: " + data);
          this.modalController.dismiss(data);
        }
      }, {
        key: "addToSelection",
        value: function addToSelection(avatar) {
          this.selectedArray.push(avatar);
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.listing = this.filtered_listing;
        }
      }, {
        key: "searchList",
        value: function searchList() {
          var _this11 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this11.searchQuery.toLowerCase()) > -1;
          });
        }
      }]);

      return SelectJobAreaPage;
    }();

    SelectJobAreaPage.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }];
    };

    SelectJobAreaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-job-area',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-job-area.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-area/select-job-area.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])], SelectJobAreaPage);
    /***/
  },

  /***/
  "./src/app/utility-components/utility-components.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/utility-components/utility-components.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UtilityComponentsModule */

  /***/
  function srcAppUtilityComponentsUtilityComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityComponentsModule", function () {
      return UtilityComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-job-area/select-job-area.page */
    "./src/app/utility-components/select-job-area/select-job-area.page.ts");

    var UtilityComponentsModule = function UtilityComponentsModule() {
      _classCallCheck(this, UtilityComponentsModule);
    };

    UtilityComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_5__["SelectJobAreaPage"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]],
      exports: [_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_5__["SelectJobAreaPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], UtilityComponentsModule);
    /***/
  }
}]);
//# sourceMappingURL=default~jobs-listing-job-filter-job-filter-module~jobs-listing-jobs-listing-module-es5.js.map