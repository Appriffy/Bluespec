function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobs-post-job-detail-post-job-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/select-company/select-company.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/select-company/select-company.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompaniesSelectCompanySelectCompanyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select Company</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search Job Areas\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Company...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n  <!------- Empty View ------->\n  <ion-grid style=\"width:100%;height: 100%;display:block;align-content: center;\" *ngIf=\"listing?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/business.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Company found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n  <ion-list class=\"\" *ngIf=\"listing?.length > 0 && !loading\">     \n    <ion-item class=\"list-item\" *ngFor=\"let item of listing\" (click)=\"dismissModal(item)\">\n      <ion-row class=\"user-row\">\n        <ion-col size=\"3\" class=\"user-image-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item?.logo\" [alt]=\"'Company Logo'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"user-data-wrapper\" size=\"9\">\n          <div class=\"user-info\">\n            <h5 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n</ion-item>\n </ion-list>\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\">\n      <ion-button class=\"select-variant-btn\" color=\"primary\" expand=\"block\" fill=\"solid\">SELECT</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/post-job-detail/post-job-detail.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/post-job-detail/post-job-detail.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsPostJobDetailPostJobDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"postJobForm\" (ngSubmit)=\"submitForm()\"> \n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title slot=\"\">Post New Job</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-buttons  (click)=\"loadCurrentLocation()\">\n          <ion-button fill=\"outline\" color=\"light\"><ion-icon name=\"locate\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"create-user-content\"  style=\"position: relative;\">\n\n  <ion-item-group class=\"filters-content filters-group\">\n    \n<div id=\"map\">\n  <google-map [mapOptions]=\"mapOptions\"></google-map>\n</div>\n\n<ion-item-divider style=\"display: block;\">\n  <ion-label class=\"range-label\">SELECT JOB LOCATION</ion-label>\n</ion-item-divider>\n\n\n      <ion-row class=\"form-actions-wrapper\" style=\"display: block;\">\n        <ion-col>\n          <ion-item class=\"input-item\">\n            <ion-label color=\"primary\" position=\"floating\">Choose hiring address</ion-label>\n            <ion-input (click)=\"showAddressModal()\" type=\"text\" formControlName=\"address\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n   \n    <!-- <ion-item class=\"input-item\" style=\"--background: #333333;\">\n      <ion-label style=\"color: #ffffff;\" class=\"toggle-label\">Enable Hiring Range</ion-label>\n      <ion-toggle color=\"tertiary\" (ionChange)=\"onLocationEnabled($event)\" checked></ion-toggle>\n    </ion-item> -->\n\n    <ion-list class=\"toggle-list\" lines=\"full\">\n      <ion-item class=\"toggle-item\">\n        <ion-label class=\"toggle-label\" color=\"primary\">Enable Hiring Range</ion-label>\n        <ion-toggle color=\"primary\"  (ionChange)=\"onLocationEnabled($event)\" checked></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-row class=\"form-actions-wrapper\" *ngIf=\"!isLocationEnabled\">\n      <p style=\"margin-left:10px;margin-top: 0px;font-size: smaller;\"> Note: All professionals with relevant skills will be notified about this job. Enable range to hire grafters within a specific range from the job location.</p>\n    </ion-row>\n\n      <ion-row class=\"form-actions-wrapper\" style=\"display: none;\">\n        <ion-col>\n          <ion-item class=\"input-item\">\n            <ion-label color=\"primary\" position=\"floating\">Latitude</ion-label>                           \n            <ion-input type=\"text\" formControlName=\"latitude\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item class=\"input-item\">\n            <ion-label color=\"primary\" position=\"floating\">Longitude</ion-label>\n            <ion-input type=\"text\" formControlName=\"longitude\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"range-item\" style=\"display: block;\" *ngIf=\"isLocationEnabled\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\" style=\"margin-left:15px;\">Hire People Within </span>\n            <span class=\"range-value\">{{ postJobForm.controls.radius.value }} K.m</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"radius\" color=\"primary\" min=\"0\" max=\"100\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n    </ion-item-group>\n   \n      <ion-item-group class=\"filters-content filters-group\">\n        <ion-item-divider>\n          <ion-label class=\"range-label\">JOB DETAILS</ion-label>\n        </ion-item-divider>\n\n      <ion-row class=\"form-actions-wrapper\" style=\"display: block;\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Job Title *</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n      </ion-item>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.title\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('title').hasError(validation.type) && (postJobForm.get('title').dirty || postJobForm.get('title').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-row>\n\n\n    <ion-row class=\"form-actions-wrapper\" style=\"display: block;\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Job Type *</ion-label>\n        <ion-select formControlName=\"job_type\" cancelText=\"Cancel\" okText=\"OK\">\n          <ion-select-option *ngFor=\"let item of jobTypes\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.job_type\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('job_type').hasError(validation.type) && (postJobForm.get('job_type').dirty || postJobForm.get('job_type').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-row>\n\n      <!-- <section class=\"user-experience-fields fields-section\">\n        <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n          <ion-label class=\"form-actions-wrapper\">Select Job Types *</ion-label>\n        </ion-row>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item  style=\"display: block;\" formArrayName=\"job_types\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of jobTypesFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{jobTypes[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\" (change)=\"getSelectedJobAreasCount()\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section> -->\n   \n\n\n      <ion-row class=\"form-actions-wrapper\" style=\"display: block;\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Select Job Area *</ion-label>\n        <ion-input type=\"hidden\" formControlName=\"job_area\" required></ion-input>\n        <ion-input type=\"text\" formControlName=\"job_area_name\" (click)=\"openSelectJobArea()\" required></ion-input>\n      </ion-item>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.job_area\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('job_area').hasError(validation.type) && (postJobForm.get('job_area').dirty || postJobForm.get('job_area').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-row>\n\n    <ion-row class=\"form-actions-wrapper\" style=\"display: block;\" *ngIf=\"postJobForm.value.job_area_name\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Select Skills *</ion-label>\n        <ion-input type=\"hidden\" formControlName=\"skills\"></ion-input>\n        <ion-input type=\"text\" formControlName=\"skills_name\" (click)=\"openSelectJobSkills()\"></ion-input>\n      </ion-item>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.skills\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('skills').hasError(validation.type) && (postJobForm.get('skills').dirty || postJobForm.get('skills').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-row>\n    \n    <ion-row class=\"form-actions-wrapper\" style=\"display: block;\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Job Closing Date</ion-label>\n        <ion-datetime [min]=\"minExpiryDate\" [max]=\"maxExpiryDate\" display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"closingDate\"></ion-datetime>\n      </ion-item>\n    </ion-row>\n\n    <ion-item-divider>\n      <ion-label class=\"range-label\">JOB SPECIFICATION</ion-label>\n    </ion-item-divider>\n\n    <ion-row class=\"form-actions-wrapper\" style=\"display: block;\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">Job Description</ion-label>\n        <ion-textarea rows=\"4\" formControlName=\"job_description\" placeholder=\"Write detailed job description here\"></ion-textarea>\n      </ion-item>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.job_description\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('job_description').hasError(validation.type) && (postJobForm.get('job_description').dirty || postJobForm.get('job_description').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-row>\n    \n\n    <ion-list class=\"toggle-list\" lines=\"full\">\n      <ion-item class=\"toggle-item\">\n        <ion-label class=\"toggle-label\" color=\"primary\">Specify Required Experience</ion-label>\n        <ion-toggle color=\"primary\" (ionChange)=\"onExperienceEnabled($event)\" checked></ion-toggle>\n      </ion-item>\n    </ion-list>\n  \n  <div class=\"range-list\" *ngIf=\"isExperienceRequired\">\n    <ion-row class=\"range-item\">\n      <ion-col size=\"12\">\n        <div class=\"range-header\">\n          <span class=\"range-value\">Min: {{ postJobForm.controls.expInYrs.value.lower }} Year<span *ngIf=\"postJobForm.controls.expInYrs.value.lower > 1\">s</span></span>\n          <span class=\"range-label\"></span>\n          <span class=\"range-value\">Max: {{ postJobForm.controls.expInYrs.value.upper }} Year<span *ngIf=\"postJobForm.controls.expInYrs.value.upper > 1\">s</span></span>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-range class=\"range-control\" formControlName=\"expInYrs\" color=\"primary\" dualKnobs=\"true\" min=\"0\" max=\"40\" step=\"1\"></ion-range>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n      <ion-input type=\"hidden\" formControlName=\"pincode\"></ion-input>\n      <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n      <ion-input type=\"hidden\" formControlName=\"category_id\"></ion-input>\n     \n  </ion-item-group>\n\n\n  <!----------- Start Salary Detail Group ------->\n  <ion-item-group class=\"filters-content filters-group\">\n  \n    <ion-item class=\"input-item\" style=\"--background: #333333;\">\n      <ion-label class=\"toggle-label\" style=\"color: #ffffff;\">Specify Salary/Fees</ion-label>\n      <ion-toggle color=\"tertiary\" (ionChange)=\"onSalaryEnabled($event)\" checked></ion-toggle>\n    </ion-item>\n  \n    <ion-row class=\"form-actions-wrapper\" *ngIf=\"!isSalaryEnabled\">\n      <p style=\"margin-left:10px;margin-top: 10px;font-size: smaller;\"> Note: Salary details will not be displayed for this job post.</p>\n    </ion-row>\n\n    <div style=\"display: block;\" *ngIf=\"isSalaryEnabled\">\n    <ion-segment mode=\"md\" class=\"stats-segment\" (ionChange)=\"segmentButtonClicked($event)\">\n      <ion-segment-button value=\"fixed\" checked=\"true\">\n        <ion-label>Fixed</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"monthly\">\n        <ion-label>Per Month</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"hourly\">\n        <ion-label>Per Hour</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n\n    <!------- Fixed View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"selectedSalaryType=='fixed'\">\n  <ion-row align-items-center>\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Select Currency*</ion-label>\n        <ion-input type=\"text\" formControlName=\"currency\" (click)=\"openCurrencyChooser()\" readonly></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Enter Price  <span *ngIf=\"selectedCurrency\">(in {{selectedCurrency}})</span>*</ion-label>\n      <ion-input type=\"number\" formControlName=\"fixed_fee\"></ion-input>\n      </ion-item>\n    </ion-col>\n    </ion-row>\n\n    <div class=\"error-container\">\n      <ng-container *ngFor=\"let validation of validations.fixed_fee\">\n        <div class=\"error-message\" *ngIf=\"postJobForm.get('fixed_fee').hasError(validation.type) && (postJobForm.get('fixed_fee').dirty || postJobForm.get('fixed_fee').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          <span>{{ validation.message }}</span>\n        </div>\n      </ng-container>\n    </div>\n\n  </ion-grid>\n <!------- Fixed View ------->\n\n <!------- Monthly View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"selectedSalaryType=='monthly'\">\n  <ion-row align-items-center>\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Select Currency*</ion-label>\n        <ion-input type=\"text\" formControlName=\"currency\" (click)=\"openCurrencyChooser()\" readonly></ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Min Salary <span *ngIf=\"selectedCurrency\">(in {{selectedCurrency}})</span>*</ion-label>\n      <ion-input type=\"number\" formControlName=\"min_salary\"></ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Max Salary  <span *ngIf=\"selectedCurrency\">(in {{selectedCurrency}})</span>*</ion-label>\n      <ion-input type=\"number\" formControlName=\"max_salary\"></ion-input>\n      </ion-item>\n    </ion-col>\n    </ion-row>\n\n    <div class=\"error-container\">\n      <ng-container *ngFor=\"let validation of validations.min_salary\">\n        <div class=\"error-message\" *ngIf=\"postJobForm.get('min_salary').hasError(validation.type) && (postJobForm.get('min_salary').dirty || postJobForm.get('min_salary').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          <span>{{ validation.message }}</span>\n        </div>\n      </ng-container>\n    </div>\n\n    <div class=\"error-container\">\n      <ng-container *ngFor=\"let validation of validations.max_salary\">\n        <div class=\"error-message\" *ngIf=\"postJobForm.get('max_salary').hasError(validation.type) && (postJobForm.get('max_salary').dirty || postJobForm.get('max_salary').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          <span>{{ validation.message }}</span>\n        </div>\n      </ng-container>\n    </div>\n\n  </ion-grid>\n <!------- Monthly View ------->\n\n  <!------- Hourly View ------->\n  <ion-grid style=\"height: 100%\" *ngIf=\"selectedSalaryType=='hourly'\">\n    <ion-row align-items-center>\n\n      <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Select Currency*</ion-label>\n          <ion-input type=\"text\" formControlName=\"currency\" (click)=\"openCurrencyChooser()\" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Min Rate/Hour <span *ngIf=\"selectedCurrency\">(in {{selectedCurrency}})</span></ion-label>\n        <ion-input type=\"number\" formControlName=\"min_rate_per_hour\"></ion-input>\n        </ion-item>\n      </ion-col>\n  \n      <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"4\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Max Rate/Hour  <span *ngIf=\"selectedCurrency\">(in {{selectedCurrency}})</span></ion-label>\n        <ion-input type=\"number\" formControlName=\"max_rate_per_hour\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      </ion-row>\n\n     \n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.min_rate_per_hour\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('min_rate_per_hour').hasError(validation.type) && (postJobForm.get('min_rate_per_hour').dirty || postJobForm.get('min_rate_per_hour').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.max_rate_per_hour\">\n          <div class=\"error-message\" *ngIf=\"postJobForm.get('max_rate_per_hour').hasError(validation.type) && (postJobForm.get('max_rate_per_hour').dirty || postJobForm.get('max_rate_per_hour').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n    </ion-grid>\n   <!------- Hourly View ------->\n\n    </div>\n\n\n    <div class=\"error-container\">\n      <ng-container *ngFor=\"let validation of validations.currency\">\n        <div class=\"error-message\" *ngIf=\"postJobForm.get('currency').hasError(validation.type) && (postJobForm.get('currency').dirty || postJobForm.get('currency').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          <span>{{ validation.message }}</span>\n        </div>\n      </ng-container>\n    </div>\n\n  </ion-item-group>\n  <!----------- Ends Salary Detail Group ------->\n\n\n<!----------- Start Company Detail Group ------->\n  <ion-item-group class=\"filters-content filters-group\">\n \n  <ion-item class=\"input-item\" style=\"--background: #333333;\">\n    <ion-label style=\"color: #ffffff;\" class=\"toggle-label\">Add Company Details</ion-label>\n    <ion-toggle color=\"tertiary\" (ionChange)=\"onCompanyEnabled($event)\"></ion-toggle>\n  </ion-item>\n\n  <ion-row class=\"form-actions-wrapper\" *ngIf=\"!isCompanyPost\">\n    <p style=\"margin-left:10px;margin-top: 10px;font-size: smaller;\"> Note: Company details will not be displayed for this job post.</p>\n  </ion-row>\n\n  <ion-row class=\"form-actions-wrapper\" *ngIf=\"isCompanyPost && myCompanies.length <= 0\">\n    <p style=\"margin-left:10px;margin-top: 10px;font-size: smaller;\"> Note: You have not registered any company profile yet. Create a quick company profile to post jobs on behalf of the company.\n      <a class=\"heading-call-to-action\" [routerLink]=\"['/companies/manager']\"> Click here.</a> </p>\n  </ion-row>\n\n  <ion-row class=\"form-actions-wrapper\" style=\"display: block;\" *ngIf=\"isCompanyPost && myCompanies.length > 0\">\n    <ion-item class=\"input-item\">\n      <ion-label position=\"floating\">Select Company *</ion-label>\n      <!-- <ion-select formControlName=\"company_id\" cancelText=\"Cancel\" okText=\"OK\">\n        <ion-select-option *ngFor=\"let item of myCompanies\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n      </ion-select> -->\n      <ion-input type=\"hidden\" formControlName=\"company_id\" required></ion-input>\n        <ion-input type=\"text\" formControlName=\"company_name\" (click)=\"openSelectCompany()\"></ion-input>\n    </ion-item>\n  </ion-row>\n\n</ion-item-group>\n<!----------- Ends Company Detail Group ------->\n\n\n<!----------- Start Prefs Detail Group ------->\n<ion-item-group class=\"filters-content filters-group\">\n  <!-- <ion-item-divider>\n    <ion-label class=\"range-label\">COMPANY DETAILS (OPTIONAL)</ion-label>\n  </ion-item-divider> -->\n\n  <ion-item class=\"input-item\" style=\"--background: #333333;\">\n    <ion-label style=\"color: #ffffff;\" class=\"toggle-label\">Job Preferences</ion-label>\n  </ion-item>\n\n  <ion-list class=\"toggle-list\" lines=\"full\">\n    <ion-item class=\"toggle-item\">\n      <ion-label class=\"toggle-label\" color=\"primary\">Allow Custom Offers</ion-label>\n      <ion-toggle color=\"primary\" formControlName=\"enableCustomOffer\" (ionChange)=\"onCustomOfferEnabled($event)\"></ion-toggle>\n    </ion-item>\n\n    <ion-row class=\"form-actions-wrapper\" *ngIf=\"isCustomOfferEnabled\">\n      <p style=\"margin-left:10px;margin-top: 10px;font-size: smaller;\"> People who apply for this job can share their custom pricing and timeline .</p>\n    </ion-row>\n\n    <ion-item class=\"toggle-item\">\n      <ion-label class=\"toggle-label\" color=\"primary\">Enable Push Notifications</ion-label>\n      <ion-toggle color=\"primary\" formControlName=\"enablePush\" (ionChange)=\"onPushEnabled($event)\" checked></ion-toggle>\n    </ion-item>\n\n    <ion-item class=\"toggle-item\">\n      <ion-label class=\"toggle-label\" color=\"primary\">Receive E-mail Alert</ion-label>\n      <ion-toggle color=\"primary\" formControlName=\"enableEmail\" (ionChange)=\"onEmailAlertEnabled($event)\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n    <ion-row class=\"form-actions-wrapper\" style=\"display: block;\" *ngIf=\"postJobForm.value.enableEmail > 0\">\n      <ion-item class=\"input-item\">\n        <ion-label color=\"primary\" position=\"floating\">E-mail Address *</ion-label>\n        <ion-input type=\"email\" formControlName=\"notifyEmail\"></ion-input>\n      </ion-item>\n\n      \n    </ion-row>\n\n</ion-item-group>\n<!----------- Ends Prefs Detail Group ------->\n\n<!-- <p>{{postJobForm.value|json}}</p> -->\n</ion-content>\n<ion-footer>\n\n  <ion-row class=\"form-actions-wrapper\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!postJobForm.valid\" fill=\"solid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SUBMIT JOB</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/select-category/select-category.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/select-category/select-category.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsSelectCategorySelectCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Select Job Category</ion-title>\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n\n \n<!----------- CARD BANNER ---------->\n<div class=\"listing-item\">\n  <ion-row class=\"image-row\" style=\"height:50%;\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slidebg3.jpg'\" [routerLink]=\"['/post-new-job']\">\n        <app-aspect-ratio [ratio]=\"{w:5, h:2}\">\n          <div class=\"content-inside-item-image\">\n            <div class=\"slideText\">\n              <h1>INSTANT JOBS</h1>\n              <h5 style=\"color: white;text-align: center;\">Post a Job, Receive Offers, Call, Chat and Hire Grafters. Track the job updates, Mark as complete and Review.</h5>\n            </div>\n            <div class=\"item-cta\" (click)=\"onCategorySelected(1)\">\n              <span>GET STARTED</span>\n              <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n            </div>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"image-row\" style=\"height:50%;\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slidebg4.jpg'\" [routerLink]=\"['/post-new-job']\">\n        <app-aspect-ratio [ratio]=\"{w:5, h:2}\">\n          <div class=\"content-inside-item-image\">\n            <div class=\"slideText\">\n              <h1>REGULAR JOBS</h1>\n              <h5 style=\"color: white;text-align: center;\">Post a Job, Receive Applications, Call, Chat and Shortlist Profiles.</h5>\n            </div>\n            <div class=\"item-cta\" (click)=\"onCategorySelected(0)\">\n              <span>GET STARTED</span>\n              <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n            </div>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n</div>\n  <!----------- CARD BANNER ---------->\n\n\n\n</ion-content>\n\n<!-- <ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button *ngIf=\"localUser !== null && localUser?.role_id == 3\" class=\"action-btn\" color=\"secondary\" expand=\"block\" fill=\"solid\" (click)=\"openSizeChooser()\">WORK</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button *ngIf=\"localUser !== null && localUser?.role_id == 2\" class=\"action-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">HIRE</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer> -->\n";
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
  "./src/app/companies/select-company/select-company.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/companies/select-company/select-company.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SelectCompanyPageModule */

  /***/
  function srcAppCompaniesSelectCompanySelectCompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCompanyPageModule", function () {
      return SelectCompanyPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _select_company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-company.page */
    "./src/app/companies/select-company/select-company.page.ts");

    var SelectCompanyPageModule = function SelectCompanyPageModule() {
      _classCallCheck(this, SelectCompanyPageModule);
    };

    SelectCompanyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
      declarations: [_select_company_page__WEBPACK_IMPORTED_MODULE_6__["SelectCompanyPage"]],
      exports: [_select_company_page__WEBPACK_IMPORTED_MODULE_6__["SelectCompanyPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SelectCompanyPageModule);
    /***/
  },

  /***/
  "./src/app/companies/select-company/select-company.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/companies/select-company/select-company.page.ts ***!
    \*****************************************************************/

  /*! exports provided: SelectCompanyPage */

  /***/
  function srcAppCompaniesSelectCompanySelectCompanyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCompanyPage", function () {
      return SelectCompanyPage;
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
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../companies.service */
    "./src/app/companies/companies.service.ts");

    var SelectCompanyPage =
    /*#__PURE__*/
    function () {
      function SelectCompanyPage(storageService, modalController, authService, toastService, companyService) {
        _classCallCheck(this, SelectCompanyPage);

        this.storageService = storageService;
        this.modalController = modalController;
        this.authService = authService;
        this.toastService = toastService;
        this.companyService = companyService;
        this.loading = true;
        this.isMultiMode = false;
      }

      _createClass(SelectCompanyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].MY_COMPANIES).then(function (value) {
            if (value) {
              _this.filtered_listing = value;
              _this.listing = value;
              _this.loading = false;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                console.log("Synced from Subject: " + JSON.stringify(value)); //this.toastService.presentToast("Job areas list has been updated.");
              }
            }
          });
          this.fetchFreshList(false);
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
          var _this2 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this2.searchQuery.toLowerCase()) > -1;
          });
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "fetchFreshList",
        value: function fetchFreshList(showLoading) {
          var _this3 = this;

          if (showLoading) {
            this.loading = true;
          }

          this.authService.getAuthCache().then(function (results) {
            if (results) {
              _this3.companyService.getMyCompanies(results.api_key, {}).subscribe(function (res) {
                _this3.loading = false;

                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                  console.log("###### Companies List API Response: " + JSON.stringify(res));
                }

                if (res.error) {
                  _this3.toastService.presentToast(res.message);
                } else {
                  _this3.listing = res.items;
                  _this3.loading = false;

                  _this3.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].MY_COMPANIES, res.items);
                }
              }, function (error) {
                _this3.toastService.presentToast('Looks like there is a Network Issue.' + error.message);
              }, function () {// complete callback
                // this.loaderDismiss();
              });
            }
          });
        }
      }]);

      return SelectCompanyPage;
    }();

    SelectCompanyPage.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _companies_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]
      }];
    };

    SelectCompanyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-company.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/select-company/select-company.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../listing/styles/listing.page.scss */
      "./src/app/companies/listing/styles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../listing/styles/listing.shell.scss */
      "./src/app/companies/listing/styles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../listing/styles/company-listing.ios.scss */
      "./src/app/companies/listing/styles/company-listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _companies_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]])], SelectCompanyPage);
    /***/
  },

  /***/
  "./src/app/jobs/post-job-detail/post-job-detail.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/jobs/post-job-detail/post-job-detail.module.ts ***!
    \****************************************************************/

  /*! exports provided: PostJobDetailPageModule */

  /***/
  function srcAppJobsPostJobDetailPostJobDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostJobDetailPageModule", function () {
      return PostJobDetailPageModule;
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


    var _post_job_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-job-detail.page */
    "./src/app/jobs/post-job-detail/post-job-detail.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.page */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../utility-components/utility-components.module */
    "./src/app/utility-components/utility-components.module.ts");
    /* harmony import */


    var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../utility-components/select-job-area/select-job-area.page */
    "./src/app/utility-components/select-job-area/select-job-area.page.ts");
    /* harmony import */


    var _utility_components_select_job_skill_select_job_skill_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../utility-components/select-job-skill/select-job-skill.module */
    "./src/app/utility-components/select-job-skill/select-job-skill.module.ts");
    /* harmony import */


    var _utility_components_select_job_skill_select_job_skill_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../utility-components/select-job-skill/select-job-skill.page */
    "./src/app/utility-components/select-job-skill/select-job-skill.page.ts");
    /* harmony import */


    var _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../utility-components/select-currency/select-currency.page */
    "./src/app/utility-components/select-currency/select-currency.page.ts");
    /* harmony import */


    var _utility_components_select_currency_select_currency_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../utility-components/select-currency/select-currency.module */
    "./src/app/utility-components/select-currency/select-currency.module.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.module */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.module.ts");
    /* harmony import */


    var _companies_select_company_select_company_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../companies/select-company/select-company.page */
    "./src/app/companies/select-company/select-company.page.ts");
    /* harmony import */


    var _companies_select_company_select_company_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../companies/select-company/select-company.module */
    "./src/app/companies/select-company/select-company.module.ts");
    /* harmony import */


    var _select_category_select_category_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../select-category/select-category.module */
    "./src/app/jobs/select-category/select-category.module.ts");

    var routes = [{
      path: '',
      component: _post_job_detail_page__WEBPACK_IMPORTED_MODULE_6__["PostJobDetailPage"]
    }];

    var PostJobDetailPageModule = function PostJobDetailPageModule() {
      _classCallCheck(this, PostJobDetailPageModule);
    };

    PostJobDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_10__["UtilityComponentsModule"], _utility_components_select_job_skill_select_job_skill_module__WEBPACK_IMPORTED_MODULE_12__["SelectJobSkillPageModule"], _utility_components_select_currency_select_currency_module__WEBPACK_IMPORTED_MODULE_15__["SelectCurrencyPageModule"], _companies_select_company_select_company_module__WEBPACK_IMPORTED_MODULE_18__["SelectCompanyPageModule"], _select_category_select_category_module__WEBPACK_IMPORTED_MODULE_19__["SelectCategoryPageModule"], _bluspec_recruiter_location_autocomplete_location_autocomplete_module__WEBPACK_IMPORTED_MODULE_16__["LocationAutocompletePageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_post_job_detail_page__WEBPACK_IMPORTED_MODULE_6__["PostJobDetailPage"]],
      entryComponents: [_bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__["LocationAutocompletePage"], _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_11__["SelectJobAreaPage"], _utility_components_select_job_skill_select_job_skill_page__WEBPACK_IMPORTED_MODULE_13__["SelectJobSkillPage"], _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_14__["SelectCurrencyPage"], _companies_select_company_select_company_page__WEBPACK_IMPORTED_MODULE_17__["SelectCompanyPage"]],
      providers: [_jobs_service__WEBPACK_IMPORTED_MODULE_9__["JobService"]]
    })], PostJobDetailPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/post-job-detail/post-job-detail.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/jobs/post-job-detail/post-job-detail.page.ts ***!
    \**************************************************************/

  /*! exports provided: PostJobDetailPage */

  /***/
  function srcAppJobsPostJobDetailPostJobDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostJobDetailPage", function () {
      return PostJobDetailPage;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/google-map/google-map.component */
    "./src/app/components/google-map/google-map.component.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.page */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../utility-components/select-job-area/select-job-area.page */
    "./src/app/utility-components/select-job-area/select-job-area.page.ts");
    /* harmony import */


    var _utility_components_select_job_skill_select_job_skill_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../utility-components/select-job-skill/select-job-skill.page */
    "./src/app/utility-components/select-job-skill/select-job-skill.page.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../utility-components/select-currency/select-currency.page */
    "./src/app/utility-components/select-currency/select-currency.page.ts");
    /* harmony import */


    var _companies_select_company_select_company_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../companies/select-company/select-company.page */
    "./src/app/companies/select-company/select-company.page.ts");
    /* harmony import */


    var _select_category_select_category_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../select-category/select-category.page */
    "./src/app/jobs/select-category/select-category.page.ts");

    var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Geolocation;

    var PostJobDetailPage =
    /*#__PURE__*/
    function () {
      function PostJobDetailPage(menu, loadingController, alertController, modalCtrl, storageService, jobService, authService, utilsService, router, route, toaster) {
        _classCallCheck(this, PostJobDetailPage);

        this.menu = menu;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.storageService = storageService;
        this.jobService = jobService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.router = router;
        this.route = route;
        this.toaster = toaster;
        this.mapOptions = {
          zoom: 15,
          center: {
            lat: -34.9199842,
            lng: -56.149849
          } // uncomment the following line if you want to remove the default Map controls
          // disableDefaultUI: true

        };
        this.jobSalaryTypes = ["Fixed", "Range", "Do not specify"]; //Page Params For View rendering

        this.isLocationEnabled = true;
        this.isCompanyPost = false;
        this.isSalaryEnabled = true;
        this.isCustomOfferEnabled = false;
        this.isPushEnabled = 1;
        this.isEmailAlertEnabled = 0;
        this.selectedSalaryType = "fixed";
        this.selectedCurrency = "USD";
        this.isExperienceRequired = true;
        this.requiredMinExp = 0;
        this.requiredMaxExp = 20;
        this.validations = {
          'title': [{
            type: 'required',
            message: 'Job title is required.'
          }, {
            type: 'minLength',
            message: 'Job title appears to be too small.'
          }, {
            type: 'maxLength',
            message: 'Job title must not exceed 120 characters.'
          }],
          'job_description': [{
            type: 'required',
            message: 'Job description is required.'
          }, {
            type: 'minLength',
            message: 'Job description appears to be too small.'
          }],
          'job_type': [{
            type: 'required',
            message: 'Select a suitable job type.'
          }],
          'notify_email': [{
            type: 'pattern',
            message: 'Enter a valid email address.'
          }],
          'job_area': [{
            type: 'required',
            message: 'Please select a suitable job area.'
          }],
          'skills': [{
            type: 'required',
            message: 'Please select relevant skill(s) required for this job.'
          }],
          'currency': [{
            type: 'required',
            message: 'Please select a currency to specify the salary.'
          }],
          'min_salary': [{
            type: 'required',
            message: 'Please enter the minimum salary per month.'
          }],
          'max_salary': [{
            type: 'required',
            message: 'Please enter the maximum salary per month.'
          }],
          'fixed_fee': [{
            type: 'required',
            message: 'Please enter the fixed price you are offering for this job.'
          }],
          'min_rate_per_hour': [{
            type: 'required',
            message: 'Please enter the minimum rate per hour.'
          }],
          'max_rate_per_hour': [{
            type: 'required',
            message: 'Please enter the maximum rate per hour.'
          }]
        };
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var startDate = new Date().toISOString();
        this.minExpiryDate = startDate;
        this.maxExpiryDate = year + 1;
      }

      _createClass(PostJobDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.menu.enable(true);
          this.postJobForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // latitude: new FormControl('', Validators.required),
            // longitude: new FormControl('', Validators.required),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            radius: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](10),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            job_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]),
            job_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //job_types: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            closingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            company_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            job_area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            job_area_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            skills_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedCurrency),
            job_salary_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            min_salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            max_salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            min_rate_per_hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            max_rate_per_hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            //expInYrs: new FormControl(0, counterRangeValidator(0, 20)),
            enableCustomOffer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isCustomOfferEnabled),
            expInYrs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
              lower: 0,
              upper: 20
            }),
            enablePush: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isPushEnabled),
            enableEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isEmailAlertEnabled),
            notifyEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.address = {
            place: ''
          };
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_14__["AuthConstants"].JOB_TYPES).then(function (allTypes) {
            if (allTypes) {
              _this4.jobTypes = allTypes; // this.jobTypes.map(() => {
              //   (this.postJobForm.controls.job_types as FormArray).push(new FormControl());
              // });
            }
          });
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_14__["AuthConstants"].MY_COMPANIES).then(function (allTypes) {
            if (allTypes) {
              _this4.myCompanies = allTypes;
            }
          });
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              _this4.postJobForm.controls.user_id.patchValue(authData.id);

              _this4.postJobForm.controls.user_id.updateValueAndValidity();
            }
          });
          this.route.params.subscribe(function (params) {
            if (params['jobArea']) {
              _this4.selectedJobArea = params['jobArea'];
              console.log("Received Job Area: " + JSON.stringify(_this4.selectedJobArea)); //this.postJobForm.controls.job_area.patchValue(this.selectedJobArea);
              //this.postJobForm.controls.job_area.updateValueAndValidity();
            }
          });

          if (this.postJobForm.value.category_id === '') {
            this.openJobCategorySelector();
          }
        }
      }, {
        key: "segmentButtonClicked",
        value: function segmentButtonClicked(ev) {
          this.selectedSalaryType = ev.detail.value;
          console.log('Selected Salary: ', this.selectedSalaryType);
          this.postJobForm.controls.job_salary_type.patchValue(this.selectedSalaryType);
          this.postJobForm.controls.job_salary_type.updateValueAndValidity();

          switch (this.selectedSalaryType) {
            case "fixed":
              this.postJobForm.get('fixed_fee').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
              this.postJobForm.get('fixed_fee').updateValueAndValidity();
              this.postJobForm.get('min_salary').clearValidators();
              this.postJobForm.get('min_salary').updateValueAndValidity();
              this.postJobForm.get('max_salary').clearValidators();
              this.postJobForm.get('max_salary').updateValueAndValidity();
              this.postJobForm.get('min_rate_per_hour').clearValidators();
              this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
              this.postJobForm.get('max_rate_per_hour').clearValidators();
              this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
              break;

            case "monthly":
              // this.postJobForm.get('min_salary').setValidators(Validators.required);
              // this.postJobForm.get('min_salary').updateValueAndValidity();
              // this.postJobForm.get('max_salary').setValidators(Validators.required);
              // this.postJobForm.get('max_salary').updateValueAndValidity();
              this.postJobForm.get('fixed_fee').clearValidators();
              this.postJobForm.get('fixed_fee').updateValueAndValidity();
              this.postJobForm.get('min_rate_per_hour').clearValidators();
              this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
              this.postJobForm.get('max_rate_per_hour').clearValidators();
              this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
              break;

            case "hourly":
              // this.postJobForm.get('min_rate_per_hour').setValidators(Validators.required);
              // this.postJobForm.get('max_rate_per_hour').setValidators(Validators.required);
              // this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
              // this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
              this.postJobForm.get('min_salary').clearValidators();
              this.postJobForm.get('min_salary').updateValueAndValidity();
              this.postJobForm.get('max_salary').clearValidators();
              this.postJobForm.get('max_salary').updateValueAndValidity();
              this.postJobForm.get('fixed_fee').clearValidators();
              this.postJobForm.get('fixed_fee').updateValueAndValidity();
              break;
          }
        }
      }, {
        key: "getSelectedJobTypesCount",
        value: function getSelectedJobTypesCount() {
          var _this5 = this;

          var selectedJobTypes = [];
          this.postJobForm.value.job_types.map(function (value, index) {
            if (value) {
              selectedJobTypes.push(_this5.jobTypes[index].id);
            }
          });
          return selectedJobTypes.length;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          //Map Works
          if (this.isLocationEnabled) {
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_14__["AuthConstants"].DEV_MODE) {
              console.log("Map Location Enabled ngAfterViewInit(): true");
            }

            this.initMap();
          }
        }
      }, {
        key: "initMap",
        value: function initMap() {
          var _this6 = this;

          if (this._GoogleMap !== undefined && this._GoogleMap !== null) {
            this._GoogleMap.$mapReady.subscribe(function (map) {
              _this6.map = map;
            });

            this.createLoader();
            this.loadCurrentLocation();
            var search_input = document.getElementById('search_input');
            var autocmplete = new google.maps.places.AutocompleteService();
          } else {
            this.toaster.presentToast("Map view not found.");
          }
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
                    });
                    _context.next = 3;
                    return loading;

                  case 3:
                    _context.next = 5;
                    return _context.sent.present();

                  case 5:
                    return _context.abrupt("return", loading);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openJobCategorySelector",
        value: function openJobCategorySelector() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _select_category_select_category_page__WEBPACK_IMPORTED_MODULE_19__["SelectCategoryPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this7.postJobForm.get('category_id').patchValue(item.data);

                        _this7.postJobForm.get('category_id').updateValueAndValidity();
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
        key: "loadCurrentLocation",
        value: function loadCurrentLocation() {
          var _this8 = this;

          this.displayLoader().then(function (loader) {
            return _this8.getCurrentPosition().then(function (position) {
              var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              var mapOptions = {
                center: latLng,
                zoom: 15
              };

              _this8.toaster.presentToast("Current Location: " + position.coords.latitude + ", " + position.coords.longitude); //alert(position.coords.latitude+", "+ position.coords.longitude); 
              //this.currentLat = position.coords.latitude;
              //this.currentLong = position.coords.longitude;


              console.log("Current Location: " + position.coords.latitude + ", " + position.coords.longitude);

              _this8.postJobForm.controls.latitude.setValue(position.coords.latitude);

              _this8.postJobForm.controls.longitude.setValue(position.coords.longitude); // fermer loader + return position


              loader.dismiss();
              return position;
            }) // if error
            .catch(function (err) {
              // fermer loader + return NULL
              loader.dismiss();
              return null;
            });
          }).then(function (position) {
            return position instanceof Error ? _this8.presentAlert(position.message) : null;
          }) // do not forget to handle promise rejection
          .catch(function (err) {
            _this8.presentAlert(err.message);
          });
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
                    isAvailable = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('Geolocation');

                    if (isAvailable) {
                      _context3.next = 4;
                      break;
                    }

                    console.log('Err: plugin not available');
                    return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new Error('Err: plugin not available')));

                  case 4:
                    POSITION = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Geolocation.getCurrentPosition() // handle Capacitor Errors
                    .catch(function (err) {
                      console.log('ERR', err);
                      return new Error(err.message || 'message perso');
                    }); // this.coordinates$ = fromPromise(POSITION).pipe(
                    //   switchMap((data: any) => of(data.coords)),
                    //   tap(data => console.log(data))
                    // );

                    return _context3.abrupt("return", POSITION);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "createLoader",
        value: function createLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: 'Trying to get your current location...'
                    });

                  case 2:
                    this.loadingElement = _context4.sent;

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentLoader",
        value: function presentLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingElement.present();

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.loadingElement) {
                      _context6.next = 3;
                      break;
                    }

                    _context6.next = 3;
                    return this.loadingElement.dismiss();

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "onLocationEnabled",
        value: function onLocationEnabled(e) {
          this.isLocationEnabled = !this.isLocationEnabled;

          if (!this.isLocationEnabled) {} else {
            if (this.isLocationEnabled) {//this.initMap();
            }
          }
        }
      }, {
        key: "onExperienceEnabled",
        value: function onExperienceEnabled(e) {
          this.isExperienceRequired = !this.isExperienceRequired;

          if (!this.isExperienceRequired) {} else {}
        }
      }, {
        key: "onSalaryEnabled",
        value: function onSalaryEnabled(e) {
          this.isSalaryEnabled = !this.isSalaryEnabled;

          if (!this.isSalaryEnabled) {
            this.postJobForm.get('job_salary_type').patchValue("");
            this.postJobForm.get('job_salary_type').updateValueAndValidity();
            this.postJobForm.get('currency').clearValidators();
            this.postJobForm.get('currency').updateValueAndValidity();
            this.postJobForm.get('fixed_fee').clearValidators();
            this.postJobForm.get('fixed_fee').updateValueAndValidity();
            this.postJobForm.get('min_salary').clearValidators();
            this.postJobForm.get('min_salary').updateValueAndValidity();
            this.postJobForm.get('max_salary').clearValidators();
            this.postJobForm.get('max_salary').updateValueAndValidity();
            this.postJobForm.get('min_rate_per_hour').clearValidators();
            this.postJobForm.get('min_rate_per_hour').updateValueAndValidity();
            this.postJobForm.get('max_rate_per_hour').clearValidators();
            this.postJobForm.get('max_rate_per_hour').updateValueAndValidity();
          } else {
            this.postJobForm.get('currency').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.postJobForm.get('currency').updateValueAndValidity();
          }
        }
      }, {
        key: "onCustomOfferEnabled",
        value: function onCustomOfferEnabled(e) {
          if (this.isCustomOfferEnabled) {
            this.isCustomOfferEnabled = false;
          } else {
            this.isCustomOfferEnabled = true;
          }

          this.postJobForm.get('enableCustomOffer').patchValue(this.isCustomOfferEnabled);
          this.postJobForm.get('enableCustomOffer').updateValueAndValidity();
        }
      }, {
        key: "onPushEnabled",
        value: function onPushEnabled(e) {
          if (this.isPushEnabled) {
            this.isPushEnabled = 0;
          } else {
            this.isPushEnabled = 1;
          }

          this.postJobForm.get('enablePush').patchValue(this.isPushEnabled);
          this.postJobForm.get('enablePush').updateValueAndValidity();
        }
      }, {
        key: "onEmailAlertEnabled",
        value: function onEmailAlertEnabled(e) {
          if (this.isEmailAlertEnabled) {
            this.isEmailAlertEnabled = 0;
            this.postJobForm.get('enableEmail').clearValidators();
          } else {
            this.isEmailAlertEnabled = 1;
            this.postJobForm.get('enableEmail').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          }

          this.postJobForm.get('enableEmail').patchValue(this.isEmailAlertEnabled);
          this.postJobForm.get('enableEmail').updateValueAndValidity();
        }
      }, {
        key: "onCompanyEnabled",
        value: function onCompanyEnabled(e) {
          this.isCompanyPost = !this.isCompanyPost;

          if (!this.isCompanyPost) {
            this.postJobForm.get('company_id').clearValidators();
            this.postJobForm.get('company_id').updateValueAndValidity();
          } else {
            this.postJobForm.get('company_id').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.postJobForm.get('company_id').updateValueAndValidity();
          }
        }
      }, {
        key: "showAddressModal",
        value: function showAddressModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this9 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_8__["LocationAutocompletePage"],
                      cssClass: 'fullscreen-modal-css'
                    });

                  case 2:
                    modal = _context7.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this9.dataReturned = dataReturned;
                        console.log("dataReturned.data: " + dataReturned.data);
                        alert('' + JSON.stringify(dataReturned.data));
                        _this9.address.place = dataReturned.data;

                        _this9.postJobForm.controls.address.patchValue(_this9.address.place);

                        _this9.postJobForm.controls.address.updateValueAndValidity();
                      } else {
                        alert('No Place selected. Please try again.');
                        _this9.address.place = "Location to be integreted";
                      }
                    });
                    _context7.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                    return _context8.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var loading;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context9.sent;
                    _context9.next = 5;
                    return loading.present();

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "openSelectJobArea",
        value: function openSelectJobArea() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalCtrl.create({
                      component: _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_11__["SelectJobAreaPage"]
                    });

                  case 2:
                    modal = _context10.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this10.selectedJobArea = item.data;

                        _this10.postJobForm.controls.job_area.patchValue(item.data.id);

                        _this10.postJobForm.controls.job_area_name.patchValue(item.data.title);

                        _this10.postJobForm.controls.job_area.updateValueAndValidity();

                        _this10.postJobForm.controls.job_area_name.updateValueAndValidity();
                      }
                    });
                    _context10.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "openSelectCompany",
        value: function openSelectCompany() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this11 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.modalCtrl.create({
                      component: _companies_select_company_select_company_page__WEBPACK_IMPORTED_MODULE_18__["SelectCompanyPage"]
                    });

                  case 2:
                    modal = _context11.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this11.postJobForm.controls.company_id.patchValue(item.data.id);

                        _this11.postJobForm.controls.company_name.patchValue(item.data.title);

                        _this11.postJobForm.controls.company_id.updateValueAndValidity();

                        _this11.postJobForm.controls.company_name.updateValueAndValidity();
                      }
                    });
                    _context11.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "openCurrencyChooser",
        value: function openCurrencyChooser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this12 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.modalCtrl.create({
                      component: _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_17__["SelectCurrencyPage"]
                    });

                  case 2:
                    modal = _context12.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this12.selectedCurrency = item.data.symbol;

                        _this12.postJobForm.controls.currency.patchValue(_this12.selectedCurrency);

                        _this12.postJobForm.controls.currency.updateValueAndValidity();

                        _this12.postJobForm.controls.currency_name.patchValue(_this12.selectedCurrency);

                        _this12.postJobForm.controls.currency_name.updateValueAndValidity();
                      }
                    });
                    _context12.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "openSelectJobSkills",
        value: function openSelectJobSkills() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this13 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    //alert(this.postJobForm.value.job_area);
                    console.log("Sending Job Area: " + JSON.stringify(this.selectedJobArea));
                    _context13.next = 3;
                    return this.modalCtrl.create({
                      component: _utility_components_select_job_skill_select_job_skill_page__WEBPACK_IMPORTED_MODULE_12__["SelectJobSkillPage"],
                      componentProps: {
                        'multiple': true,
                        'selectedJobArea': this.selectedJobArea,
                        'filterArr': [1, 2]
                      }
                    });

                  case 3:
                    modal = _context13.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        if (Array.isArray(item.data)) {
                          //console.log("Received Job Skills: "+JSON.stringify(item.data));
                          _this13.postJobForm.controls.skills.patchValue(item.data["id"]);

                          _this13.postJobForm.controls.skills.updateValueAndValidity();

                          _this13.postJobForm.controls.skills_name.patchValue(item.data["title"]);

                          _this13.postJobForm.controls.skills_name.updateValueAndValidity();
                        } else {
                          _this13.postJobForm.controls.skills.patchValue(item.data.id);

                          _this13.postJobForm.controls.skills.updateValueAndValidity();

                          _this13.postJobForm.controls.skills_name.patchValue(item.data.title);

                          _this13.postJobForm.controls.skills_name.updateValueAndValidity();
                        }
                      }
                    });
                    _context13.next = 7;
                    return modal.present();

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this14 = this;

          this.presentLoadingWithOptions();
          var date_closing = this.postJobForm.value.closingDate;
          console.log("date_closing " + this.postJobForm.value.closingDate + "  ");

          if (date_closing !== null && date_closing != "") {
            date_closing = this.utilsService.splitTimestampFromDate(this.postJobForm.value.closingDate);

            if (this.utilsService.isValidDate(date_closing)) {//alert("All right"+this.user.dob);
            } else {
              var formattedVal = this.utilsService.formatTheDate(this.postJobForm.value.closingDate);
              this.postJobForm.controls.closingDate.patchValue(formattedVal);
              this.postJobForm.controls.closingDate.updateValueAndValidity();
              date_closing = formattedVal;
              console.log("date_closing formatted from " + this.postJobForm.value.closingDate + " to " + formattedVal);
            }
          }

          var postData = {
            user_id: this.postJobForm.value.user_id,
            title: this.postJobForm.value.title,
            job_description: this.postJobForm.value.job_description,
            job_type: this.postJobForm.value.job_type,
            address: this.postJobForm.value.address,
            latitude: this.postJobForm.value.latitude,
            longitude: this.postJobForm.value.longitude,
            pincode: this.postJobForm.value.pincode,
            date_closing: date_closing,
            job_area: this.postJobForm.value.job_area,
            category_id: this.postJobForm.value.category_id,
            salary_type: this.postJobForm.value.job_salary_type,
            job_categories: this.postJobForm.value.skills,
            fixed_fee: this.postJobForm.value.fixed_fee,
            min_rate_per_hour: this.postJobForm.value.min_rate_per_hour,
            max_rate_per_hour: this.postJobForm.value.max_rate_per_hour,
            min_salary: this.postJobForm.value.min_salary,
            max_salary: this.postJobForm.value.max_salary,
            is_loc_enabled: this.isLocationEnabled ? 1 : 0,
            company_id: this.postJobForm.value.company_id,
            notify_range: this.postJobForm.value.radius,
            minExp: this.postJobForm.controls.expInYrs.value.lower,
            maxExp: this.postJobForm.controls.expInYrs.value.upper,
            enablePush: this.postJobForm.value.enablePush ? 1 : 0,
            enableEmail: this.postJobForm.value.enableEmail ? 1 : 0,
            notify_email: this.postJobForm.value.notifyEmail,
            enableCustomOffer: this.isCustomOfferEnabled ? 1 : 0
          };

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_14__["AuthConstants"].DEV_MODE) {
            alert(JSON.stringify(postData));
          }

          console.log('########## Sending Post params ########### ' + JSON.stringify(postData));
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              _this14.jobService.callJobCreateAPI(authData.api_key, postData).subscribe(function (res) {
                _this14.loadingController.dismiss();

                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_14__["AuthConstants"].DEV_MODE) {
                  console.log('########## API Response ########### ' + JSON.stringify(res));
                }

                if (!res.error) {
                  if (res.qcode) {
                    _this14.router.navigate(['/jobs/details', res.qcode]);
                  } else {
                    _this14.router.navigate(['/job-manager']);
                  } //this.firebaseService.invokeProfileChangeEvent.

                } else {
                  _this14.presentAlert(res.message);
                }
              }, function (error) {
                _this14.loadingController.dismiss();

                _this14.presentAlert('Looks like there is a Network Issue.' + error.message);
              });
            }
          });
        }
      }, {
        key: "jobTypesFormArray",
        get: function get() {
          return this.postJobForm.get('job_types');
        }
      }]);

      return PostJobDetailPage;
    }();

    PostJobDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_9__["JobService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_15__["UtilsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"])], PostJobDetailPage.prototype, "_GoogleMap", void 0);
    PostJobDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-job-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-job-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/post-job-detail/post-job-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/post-job.page.scss */
      "./src/app/jobs/post-job-detail/styles/post-job.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/post-job.shell.scss */
      "./src/app/jobs/post-job-detail/styles/post-job.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/post-job.responsive.scss */
      "./src/app/jobs/post-job-detail/styles/post-job.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"], _jobs_service__WEBPACK_IMPORTED_MODULE_9__["JobService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_15__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])], PostJobDetailPage);
    /***/
  },

  /***/
  "./src/app/jobs/post-job-detail/styles/post-job.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/jobs/post-job-detail/styles/post-job.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsPostJobDetailStylesPostJobPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: #eee;\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n}\n\n:host {\n  background-color: #eee;\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\ngoogle-map {\n  display: contents;\n  width: 100%;\n  height: 100%;\n}\n\n#map {\n  width: 100%;\n  position: relative;\n  height: 180px;\n  max-height: 180px;\n  display: block;\n  overflow: hidden;\n}\n\n.counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: #222;\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 25px;\n}\n\n.question-slide .slide-subtitle {\n  color: #222;\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 10px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 10px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n.range-label {\n  --color:#ffffff;\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: #333333;\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.range-list .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.range-list .range-item .range-header .range-value {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-primary);\n}\n\n.range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9wb3N0LWpvYi1kZXRhaWwvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXHBvc3Qtam9iLWRldGFpbFxcc3R5bGVzXFxwb3N0LWpvYi5wYWdlLnNjc3MiLCJzcmMvYXBwL2pvYnMvcG9zdC1qb2ItZGV0YWlsL3N0eWxlcy9wb3N0LWpvYi5wYWdlLnNjc3MiLCJzcmMvYXBwL2pvYnMvcG9zdC1qb2ItZGV0YWlsL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyIsInNyYy9hcHAvam9icy9wb3N0LWpvYi1kZXRhaWwvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxzY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLHVCQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtBQ0hGOztBRE9BO0VBRUUsc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDhDQUFBO0VBRUEsdUJBQUE7QUNORjs7QURXRTtFQUNFLCtEQUFBO0VFekJGLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEa0JGOztBQ2hCQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QURpQko7O0FDZkk7RUFDRCx1QkFBQTtBRGlCSDs7QUNkRTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QURnQk47O0FDYkk7RUFDRSxZQUFBO0FEZU47O0FDYk07RUFFRSxVQUFBO0FEY1I7O0FDVkU7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRFlOOztBQ1RFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRFNIOztBRDVCSTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUM4Qk47O0FEekJNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsMERBQUE7QUMyQlI7O0FEekJRO0VBQ0Usd0NBQUE7QUMyQlY7O0FEbkJBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3NCRjs7QURsQkE7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNvQkY7O0FEakJBO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDb0JGOztBRGxCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNvQko7O0FEakJFO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ21CSjs7QURoQkU7RUFDRSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0RBQUE7QUNrQko7O0FEZEE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDZ0JGOztBRGRFO0VBQ0UsV0FBQTtBQ2dCSjs7QURYRTtFQUNFLG9DQUFBO0FDY0o7O0FEWEk7RUFDRSxhQUFBO0FDYU47O0FEUkE7RUFDRSxvQ0FBQTtBQ1dGOztBRFJBO0VBQ0UsWUFBQTtBQ1dGOztBRFJBO0VBSUUsWUFBQTtBQ1FGOztBRE5FO0VBQ0UsOEJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9FQUFBO0FDT0o7O0FEREU7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREVFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUdwS0Ysd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FGbUtGOztBRWhLRTtFQUNFLGFBQUE7QUZrS0o7O0FERkk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDSU47O0FERk07RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7QUNHUjs7QUREUTtFQUNFLGlDQUFBO0FDR1Y7O0FEQVE7RUFDRSxpREFBQTtFQUNBLDJDQUFBO0FDRVY7O0FEQ1E7RUFDRSx3Q0FBQTtBQ0NWOztBREVRO0VBQ0UsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBQ0ZWOztBRFVFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUdBLGlCQUFBO0FDVEo7O0FEWUU7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtBQ1ZKOztBRGFFO0VBQ0UsZ0JBQUE7RUdoT0Ysd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FGb05GOztBRWpORTtFQUNFLGFBQUE7QUZtTko7O0FEU0k7RUFDRSw4QkFBQTtFQUVBLHlDQUFBO0VBQ0EsNENBQUE7QUNSTjs7QURVTTtFQUNFLHlDQUFBO0VBQ0EsNENBQUE7QUNSUjs7QURVUTtFQUNFLDJDQUFBO0FDUlY7O0FEV1E7RUFDRSwwQ0FBQTtBQ1RWOztBRGVFO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBRUEseUNBQUE7QUNmSjs7QURpQkk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0FDZk47O0FEb0JJO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3BCTjs7QUR1Qkk7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSw4REFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FDdEJOOztBRDRCTTtFQUNFLGFBQUE7QUMxQlI7O0FEa0NJO0VBQ0UsYUFBQTtBQy9CTjs7QUR3Q0U7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBQ3RDSjs7QUR3Q0k7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FDdENOOztBRDJDQTtFQUNFLGVBQUE7QUN4Q0Y7O0FEMENBO0VBQ0Usb0NBQUE7QUN2Q0Y7O0FEeUNJO0VBRUkscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNFLFlBQUE7QUN4Q1Y7O0FEOENFO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDM0NKOztBRDZDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUMzQ047O0FEOENJO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQzVDTjs7QURpREE7RUFDRSwyQ0FBQTtBQzlDRjs7QURnREU7RUFDRSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLHVDQUFBO1VBQUEsc0NBQUE7RUFFQSx5REFBQTtBQ2hESjs7QURrREk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7QUNoRE47O0FEa0RNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ2hEUjs7QURtRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDakRSOztBRHFESTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ3JETiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvcG9zdC1qb2ItZGV0YWlsL3N0eWxlcy9wb3N0LWpvYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZ1wiO1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6ICNlZWU7XG5cbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcblxuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG5cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgLmNoZWNrYm94LXRhZ3Mge1xuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcbiAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xuICAgIH1cbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuZ29vZ2xlLW1hcCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvL2hlaWdodDoxMjBweDtcbn1cblxuI21hcHtcbiAgd2lkdGg6MTAwJTtcbiAgLy9kaXNwbGF5OiBjb250ZW50cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgZGlzcGxheTpibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvdW50ZXItaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAuY291bnRlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxuXG4gIC5jb3VudGVyLXZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG5cbiAgYXBwLWNvdW50ZXItaW5wdXQge1xuICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAuc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgICAvLyBGb3IgdGhlIHNraXAgYnV0dG9uXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiAjMjIyO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIC8vLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLy8tLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC8vYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgfVxufVxuXG4ucXVlc3Rpb24tc2xpZGUge1xuICAuc2xpZGUtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIH1cblxuICAuc2xpZGUtc3VidGl0bGUge1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG59XG5cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIHtcbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLnF1ZXN0aW9uLW9wdGlvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDEwcHg7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAgICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgLy8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cbiAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgLy8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC8vIEluIHRoZSBsYXN0IHNsaWRlIC5zd2lwZXItcGFnaW5hdGlvbiBpcyBoaWRkZW5cbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgfVxuXG4gIC5oZWFkaW5nLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQpO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAub3B0aW9ucy1saXN0LXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1wYWdlLW1heC1jYWxsLXRvLWFjdGlvbnMtaGVpZ2h0KTtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAuc2lnbnVwLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZsZXg6IDEgMCAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3gge1xuICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbGVmdDogMTUlO1xuICAgICAgLy8gdmVydGljYWxseSBjZW50ZXJlZFxuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgaW9uLWNoZWNrYm94IHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDEwdnc7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpO1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuNCk7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gTm90ZTogV2UgY2Fubm90ZSBjaGFuZ2UgdGhlIHN0eWxlcyBvZiB0aGUgLmNoZWNrYm94LWljb24gYmVjYXVzZSBpdCdzIGluc2lkZSB0aGUgc2hhZG93IGRvbS5cbiAgICAgIC8vIEFuIGFsdGVybmF0aXZlIHdvdWxkIGJlIHRvIHNldCAtLXdpZHRoIGFuZCAtLWhlaWdodCB0byAwcHggYW5kIGFkZCBhIGN1c3RvbSBvdmVybGF5IGFuZCBpY29uIGluIHRoZSA8Y3VzdG9tLWNoZWNrYm94PiBodG1sXG4gICAgfVxuXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkge1xuICA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJU1NVRTogLnN3aXBlci1wYWdnaW5hdGlvbiBnZXRzIHJlbmRlcmVkIGR5bmFtaWNhbGx5LiBUaGF0IHByZXZlbnRzIHN0eWxpbmcgdGhlIGVsZW1lbnRzIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgQW5ndWxhciBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG4vLyAgICAgICAgKEFuZ3VsYXIgZG9lc24ndCBhZGQgYW4gJ19uZ2NvbnRlbnQnIGF0dHJpYnV0ZSB0byB0aGUgLnN3aXBlci1wYWdnaW5hdGlvbiBiZWNhdXNlIGl0J3MgZHluYW1pY2FsbHkgcmVuZGVyZWQpXG4vLyBGSVg6ICAgU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzYyNjUwNzIvMTExNjk1OVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICB9XG4gIH1cbn1cblxuLnJhbmdlLWxhYmVse1xuICAtLWNvbG9yOiNmZmZmZmY7XG59XG4uZmlsdGVycy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgICAgIC8vLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn0gXG5cblxuLnRvZ2dsZS1saXN0IHtcbiAgLnRvZ2dsZS1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgLnRvZ2dsZS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cblxuICAgIGlvbi10b2dnbGUge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5yYW5nZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAucmFuZ2UtaXRlbSB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAucmFuZ2UtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhbmdlLWNvbnRyb2wge1xuICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgfVxufSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiAjZWVlO1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xufVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuXG5nb29nbGUtbWFwIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb3VudGVyLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uY291bnRlci1pdGVtIC5jb3VudGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5jb3VudGVyLWl0ZW0gLmNvdW50ZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5jb3VudGVyLWl0ZW0gYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiAjMjIyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucXVlc3Rpb24tc2xpZGUgLnNsaWRlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLnF1ZXN0aW9uLXNsaWRlIC5zbGlkZS1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMjIyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3Qge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cblxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnNsaWRlLWlubmVyLXJvdyB7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci13aWR0aDogMHB4O1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmhlYWRpbmctY29sIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyBpb24tY29sIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IGlvbi1jb2w6bnRoLWNoaWxkKG9kZCkge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IGlvbi1jb2w6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1wYWdlLW1heC1jYWxsLXRvLWFjdGlvbnMtaGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY2FsbC10by1hY3Rpb24tY29sIC5zaWdudXAtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZsZXg6IDEgMCAxMDAlO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCAuY2hlY2tib3gtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIGxlZnQ6IDE1JTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggaW9uLWNoZWNrYm94IHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxMHZ3O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIC40KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3guY2hlY2tib3gtY2hlY2tlZCAuY2hlY2tib3gtdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG59XG5cbi5yYW5nZS1sYWJlbCB7XG4gIC0tY29sb3I6I2ZmZmZmZjtcbn1cblxuLmZpbHRlcnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzMzMzMzMztcbiAgLS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udG9nZ2xlLWxpc3QgLnRvZ2dsZS1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSAudG9nZ2xlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0gaW9uLXRvZ2dsZSB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuXG4ucmFuZ2UtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4ucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/jobs/post-job-detail/styles/post-job.responsive.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/jobs/post-job-detail/styles/post-job.responsive.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsPostJobDetailStylesPostJobResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9wb3N0LWpvYi1kZXRhaWwvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXHBvc3Qtam9iLWRldGFpbFxcc3R5bGVzXFxwb3N0LWpvYi5yZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL2pvYnMvcG9zdC1qb2ItZGV0YWlsL3N0eWxlcy9wb3N0LWpvYi5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQVlNO0lBQ0UsZUFBQTtFQ2ZOO0FBQ0Y7QURvQkEscURBQUE7QUFDQTtFQVlNO0lBQ0UsZUFBQTtFQzdCTjtBQUNGO0FEa0NBLGtEQUFBO0FBYUEscUNBQUE7QUFhQSxpREFBQSIsImZpbGUiOiJzcmMvYXBwL2pvYnMvcG9zdC1qb2ItZGV0YWlsL3N0eWxlcy9wb3N0LWpvYi5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXG5cbi8vIChzZWU6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL21lZGlhLXF1ZXJpZXMtZm9yLXN0YW5kYXJkLWRldmljZXMvI2lwaG9uZS1xdWVyaWVzKVxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggLmNoZWNrYm94LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggLmNoZWNrYm94LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovIl19 */";
    /***/
  },

  /***/
  "./src/app/jobs/post-job-detail/styles/post-job.shell.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/jobs/post-job-detail/styles/post-job.shell.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsPostJobDetailStylesPostJobShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9wb3N0LWpvYi1kZXRhaWwvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXHBvc3Qtam9iLWRldGFpbFxcc3R5bGVzXFxwb3N0LWpvYi5zaGVsbC5zY3NzIiwic3JjL2FwcC9qb2JzL3Bvc3Qtam9iLWRldGFpbC9zdHlsZXMvcG9zdC1qb2Iuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFBO0VBQ0EscUVBQUE7RUFDQSxzREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvam9icy9wb3N0LWpvYi1kZXRhaWwvc3R5bGVzL3Bvc3Qtam9iLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwuY2hlY2tib3gtY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC5jaGVja2JveC1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/jobs/select-category/select-category.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/jobs/select-category/select-category.module.ts ***!
    \****************************************************************/

  /*! exports provided: SelectCategoryPageModule */

  /***/
  function srcAppJobsSelectCategorySelectCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCategoryPageModule", function () {
      return SelectCategoryPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _select_category_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./select-category.page */
    "./src/app/jobs/select-category/select-category.page.ts");

    var routes = [{
      path: '',
      component: _select_category_page__WEBPACK_IMPORTED_MODULE_7__["SelectCategoryPage"]
    }];

    var SelectCategoryPageModule = function SelectCategoryPageModule() {
      _classCallCheck(this, SelectCategoryPageModule);
    };

    SelectCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_select_category_page__WEBPACK_IMPORTED_MODULE_7__["SelectCategoryPage"]],
      exports: [_select_category_page__WEBPACK_IMPORTED_MODULE_7__["SelectCategoryPage"]]
    })], SelectCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/select-category/select-category.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/jobs/select-category/select-category.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsSelectCategorySelectCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.action-btn {\n  font-size: 24px;\n}\n\n.image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.image-row .item-image {\n  cursor: pointer;\n}\n\n.image-row .item-image:focus {\n  outline: none;\n}\n\n.image-row .content-inside-item-image {\n  padding: 0px 12%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.image-row .content-inside-item-image .item-icon {\n  width: 54px;\n  align-self: center;\n  margin-bottom: 24px;\n}\n\n.image-row .content-inside-item-image .item-cta {\n  margin: 0px auto;\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: var(--ion-color-light);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #0A5392;\n  border-radius: var(--app-fair-radius);\n}\n\n.image-row .content-inside-item-image .item-cta .cta-icon {\n  font-size: 26px;\n  margin-left: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9zZWxlY3QtY2F0ZWdvcnkvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcam9ic1xcc2VsZWN0LWNhdGVnb3J5XFxzZWxlY3QtY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JzL3NlbGVjdC1jYXRlZ29yeS9zZWxlY3QtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBRENJO0VBQ0UsZUFBQTtBQ0NOOztBRENNO0VBQ0UsYUFBQTtBQ0NSOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ROOztBREdNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJTTtFQUNFLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxxQ0FBQTtBQ0hSOztBREtRO0VBQ0UsZUFBQTtFQUNBLHlDQUFBO0FDSFYiLCJmaWxlIjoic3JjL2FwcC9qb2JzL3NlbGVjdC1jYXRlZ29yeS9zZWxlY3QtY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XHJcbiAgfVxyXG4gIFxyXG4uYWN0aW9uLWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmltYWdlLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTIlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLml0ZW0taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDU0cHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtLWN0YSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEE1MzkyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XHJcblxyXG4gICAgICAgIC5jdGEtaWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmltYWdlLXJvdyAuaXRlbS1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZS1yb3cgLml0ZW0taW1hZ2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSB7XG4gIHBhZGRpbmc6IDBweCAxMiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWljb24ge1xuICB3aWR0aDogNTRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSAuaXRlbS1jdGEge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEE1MzkyO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSAuaXRlbS1jdGEgLmN0YS1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/select-category/select-category.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/jobs/select-category/select-category.page.ts ***!
    \**************************************************************/

  /*! exports provided: SelectCategoryPage */

  /***/
  function srcAppJobsSelectCategorySelectCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCategoryPage", function () {
      return SelectCategoryPage;
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

    var SelectCategoryPage =
    /*#__PURE__*/
    function () {
      function SelectCategoryPage(authService, storageService, alertController, modalController, router, menu, route) {
        _classCallCheck(this, SelectCategoryPage);

        this.authService = authService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.router = router;
        this.menu = menu;
        this.route = route;
      }

      _createClass(SelectCategoryPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(true);
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "onCategorySelected",
        value: function onCategorySelected(category) {
          this.modalController.dismiss(category);
        }
        /*************** HERO ************ */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          //this.menu.enable(false);
          this.menu.enable(true); //Right way 

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH).then(function (res) {
            if (res) {
              _this15.localUser = res;
            } else {
              _this15.localUser = null;

              _this15.authService.logout();
            }
          });
        }
      }]);

      return SelectCategoryPage;
    }();

    SelectCategoryPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SelectCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/select-category/select-category.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-category.page.scss */
      "./src/app/jobs/select-category/select-category.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/details.page.scss */
      "./src/app/bluspecstyles/details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/details.shell.scss */
      "./src/app/bluspecstyles/details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SelectCategoryPage);
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
  },

  /***/
  "./src/app/utility-components/select-currency/select-currency.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/utility-components/select-currency/select-currency.module.ts ***!
    \******************************************************************************/

  /*! exports provided: SelectCurrencyPageModule */

  /***/
  function srcAppUtilityComponentsSelectCurrencySelectCurrencyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCurrencyPageModule", function () {
      return SelectCurrencyPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _select_currency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-currency.page */
    "./src/app/utility-components/select-currency/select-currency.page.ts");

    var SelectCurrencyPageModule = function SelectCurrencyPageModule() {
      _classCallCheck(this, SelectCurrencyPageModule);
    };

    SelectCurrencyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_select_currency_page__WEBPACK_IMPORTED_MODULE_6__["SelectCurrencyPage"]],
      exports: [_select_currency_page__WEBPACK_IMPORTED_MODULE_6__["SelectCurrencyPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SelectCurrencyPageModule);
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
        var _this16 = this;

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
            _this16.localUser = promisedValue;
          }
        });
      }

      _createClass(SelectCurrencyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].CURRENCIES).then(function (allList) {
            if (allList) {
              _this17.listing = allList;
              _this17.filtered_listing = allList;
              _this17.loading = false;
            }
          });
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this18 = this;

          this.loading = true;
          this.masterService.getCurrencies().subscribe(function (allData) {
            _this18.loading = false;

            if (allData) {
              _this18.listing = allData.result;
              _this18.filtered_listing = allData.result;
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
          var _this19 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.currency.toLowerCase().indexOf(_this19.searchQuery.toLowerCase()) > -1;
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
          var _this20 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].JOB_AREAS).then(function (value) {
            if (value) {
              _this20.filtered_listing = value;
              _this20.listing = value;
              _this20.loading = false;

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
          var _this21 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this21.searchQuery.toLowerCase()) > -1;
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
//# sourceMappingURL=jobs-post-job-detail-post-job-detail-module-es5.js.map