(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-integration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/create/create-company.modal.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/create/create-company.modal.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n<form class=\"create-user-form ion-page\" [formGroup]=\"createUserForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Register Company</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"expiration-countdown\" *ngIf=\"userData && !userData.logo\">\n      <span class=\"expiration-lead\">Upload the company logo.</span>\n    </ion-row>\n\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" [src]=\"preview\" [alt]=\"'Company Logo'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"primary\" (click)=\"fileInput.click()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <!-- Progress Bar -->\n  <div class=\"progress form-group\" *ngIf=\"percentDone\">\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\n      [style.width.%]=\"percentDone\">\n    </div>\n  </div>\n\n  <!-- File Input -->\n  <div class=\"form-group\" style=\"display:none;\">\n    <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)=\"uploadFile($event)\" #fileInput>\n  </div>\n\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Company Name *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.title\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('title').hasError(validation.type) && (createUserForm.get('title').dirty || createUserForm.get('title').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Short Tagline *</ion-label>\n          <ion-input type=\"text\" formControlName=\"tagline\" required></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.tagline\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('tagline').hasError(validation.type) && (createUserForm.get('tagline').dirty || createUserForm.get('tagline').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n       \n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Description *</ion-label>\n          <ion-textarea rows=\"3\" formControlName=\"description\" required></ion-textarea>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.description\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('description').hasError(validation.type) && (createUserForm.get('description').dirty || createUserForm.get('description').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <!--------- Start of social links -------->\n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{websiteInfo}}</ion-label>\n          <ion-toggle color=\"primary\" (ionChange)=\"onWebsiteOptionSelected($event)\" checked></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\"  *ngIf=\"hasWebsite\">\n          <ion-label color=\"primary\" position=\"floating\">Website</ion-label>\n          <ion-input type=\"url\" formControlName=\"website\"></ion-input>\n        </ion-item>\n        <ion-input *ngIf=\"!hasWebsite\" type=\"hidden\" formControlName=\"website\" value=\"\"></ion-input>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.website\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('website').hasError(validation.type) && (createUserForm.get('website').dirty || createUserForm.get('website').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n\n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{linkedInInfo}}</ion-label>\n          <ion-toggle color=\"primary\" (ionChange)=\"onLinkedInOptionSelected($event)\" checked></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\" *ngIf=\"hasLinkedIn\">\n          <ion-label color=\"primary\" position=\"floating\">LinkedIn URL</ion-label>\n          <ion-input type=\"url\" formControlName=\"linkedin\"></ion-input>\n        </ion-item>\n        <ion-input *ngIf=\"!hasLinkedIn\" type=\"hidden\" formControlName=\"linkedin\" value=\"\"></ion-input>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.linkedin\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('linkedin').hasError(validation.type) && (createUserForm.get('linkedin').dirty || createUserForm.get('linkedin').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n\n        \n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{fbPageInfo}}</ion-label>\n          <ion-toggle color=\"primary\" (ionChange)=\"onFacebookOptionSelected($event)\" checked></ion-toggle>\n        </ion-item>\n        <ion-item class=\"input-item\" *ngIf=\"hasFbPage\">\n          <ion-label color=\"primary\" position=\"floating\">Facebook Page URL</ion-label>\n          <ion-input type=\"url\" formControlName=\"fb_link\"></ion-input>\n        </ion-item>\n        <ion-input *ngIf=\"!hasFbPage\" type=\"hidden\" formControlName=\"fb_link\" value=\"\"></ion-input>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.fb_link\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('fb_link').hasError(validation.type) && (createUserForm.get('fb_link').dirty || createUserForm.get('fb_link').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n        \n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{twitterInfo}}</ion-label>\n          <ion-toggle color=\"primary\" (ionChange)=\"onTwitterOptionSelected($event)\" checked></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\" *ngIf=\"hasTwitter\">\n          <ion-label color=\"primary\" position=\"floating\">Twitter URL</ion-label>\n          <ion-input type=\"url\" formControlName=\"twitter_link\"></ion-input>\n        </ion-item>\n        <ion-input *ngIf=\"!hasTwitter\" type=\"hidden\" formControlName=\"twitter_link\" value=\"\"></ion-input>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.twitter_link\">\n            <div class=\"error-message\" *ngIf=\"createUserForm.get('twitter_link').hasError(validation.type) && (createUserForm.get('twitter_link').dirty || createUserForm.get('twitter_link').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n<!-----------End of Social Links --------->\n\n\n        <ion-input type=\"hidden\" formControlName=\"user_id\" required></ion-input>\n\n      </ion-list>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Select Related Job Areas</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"jobAreas\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{jobAreas[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\" (change)=\"getSelectedJobAreasCount()\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"expiration-countdown\" *ngIf=\"errorMsg\">\n      <span class=\"expiration-lead\">{{errorMsg}}Select suitable job areas related to your company.</span>\n    </ion-row>\n\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createUserForm.valid\">REGISTER COMPANY</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/update/update-company.modal.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/update/update-company.modal.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"update-user-form ion-page\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update Company</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n    <ion-row class=\"expiration-countdown\" *ngIf=\"user && !user.logo\">\n      <span class=\"expiration-lead\">Upload the company logo.</span>\n    </ion-row>\n\n    <!-- <ion-row class=\"expiration-countdown\" *ngIf=\"countReady && getSelectedJobAreasCount() <= 0\">\n      <span class=\"expiration-lead\">Select suitable job areas related to your company.</span>\n    </ion-row> -->\n\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"5\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" [src]=\"user.logo\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"primary\" (click)=\"fileInput.click()\" *ngIf=\"!user.logo\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"change-image-btn\" color=\"danger\" (click)=\"removeFile()\" *ngIf=\"user.logo\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n          <div class=\"form-group\" style=\"display: none;\">\n          <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)=\"uploadFile($event)\" #fileInput>\n        </div>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Company Name *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.title\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('title').hasError(validation.type) && (updateUserForm.get('title').dirty || updateUserForm.get('title').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Tagline *</ion-label>\n          <ion-input type=\"text\" formControlName=\"tagline\" required></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.tagline\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('tagline').hasError(validation.type) && (updateUserForm.get('tagline').dirty || updateUserForm.get('tagline').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Description</ion-label>\n          <ion-textarea rows=\"3\" formControlName=\"description\" required></ion-textarea>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.description\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('description').hasError(validation.type) && (updateUserForm.get('description').dirty || updateUserForm.get('description').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n          <!--------- Start of social links -------->\n          <ion-item class=\"input-item\">\n            <ion-label class=\"toggle-label\">{{websiteInfo}}</ion-label>\n            <ion-toggle color=\"primary\" (ionChange)=\"onWebsiteOptionSelected($event)\" [checked]=\"hasWebsite\"></ion-toggle>\n          </ion-item>\n  \n          <ion-item class=\"input-item\"  *ngIf=\"hasWebsite\">\n            <ion-label color=\"primary\" position=\"floating\">Website</ion-label>\n            <ion-input type=\"url\" formControlName=\"website\"></ion-input>\n          </ion-item>\n          <ion-input *ngIf=\"!hasWebsite\" type=\"hidden\" formControlName=\"website\" value=\"\"></ion-input>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.website\">\n              <div class=\"error-message\" *ngIf=\"updateUserForm.get('website').hasError(validation.type) && (updateUserForm.get('website').dirty || updateUserForm.get('website').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n  \n  \n          <ion-item class=\"input-item\">\n            <ion-label class=\"toggle-label\">{{linkedInInfo}}</ion-label>\n            <ion-toggle color=\"primary\" (ionChange)=\"onLinkedInOptionSelected($event)\" [checked]=\"hasLinkedIn\"></ion-toggle>\n          </ion-item>\n  \n          <ion-item class=\"input-item\" *ngIf=\"hasLinkedIn\">\n            <ion-label color=\"primary\" position=\"floating\">LinkedIn URL</ion-label>\n            <ion-input type=\"url\" formControlName=\"linkedin\"></ion-input>\n          </ion-item>\n          <ion-input *ngIf=\"!hasLinkedIn\" type=\"hidden\" formControlName=\"linkedin\" value=\"\"></ion-input>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.linkedin\">\n              <div class=\"error-message\" *ngIf=\"updateUserForm.get('linkedin').hasError(validation.type) && (updateUserForm.get('linkedin').dirty || updateUserForm.get('linkedin').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n  \n  \n          \n          <ion-item class=\"input-item\">\n            <ion-label class=\"toggle-label\">{{fbPageInfo}}</ion-label>\n            <ion-toggle color=\"primary\" (ionChange)=\"onFacebookOptionSelected($event)\" [checked]=\"hasFbPage\"></ion-toggle>\n          </ion-item>\n          <ion-item class=\"input-item\" *ngIf=\"hasFbPage\">\n            <ion-label color=\"primary\" position=\"floating\">Facebook Page URL</ion-label>\n            <ion-input type=\"url\" formControlName=\"fb_link\"></ion-input>\n          </ion-item>\n          <ion-input *ngIf=\"!hasFbPage\" type=\"hidden\" formControlName=\"fb_link\" value=\"\"></ion-input>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.fb_link\">\n              <div class=\"error-message\" *ngIf=\"updateUserForm.get('fb_link').hasError(validation.type) && (updateUserForm.get('fb_link').dirty || updateUserForm.get('fb_link').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          \n          <ion-item class=\"input-item\">\n            <ion-label class=\"toggle-label\">{{twitterInfo}}</ion-label>\n            <ion-toggle color=\"primary\" (ionChange)=\"onTwitterOptionSelected($event)\" [checked]=\"hasTwitter\"></ion-toggle>\n          </ion-item>\n  \n          <ion-item class=\"input-item\" *ngIf=\"hasTwitter\">\n            <ion-label color=\"primary\" position=\"floating\">Twitter URL</ion-label>\n            <ion-input type=\"url\" formControlName=\"twitter_link\"></ion-input>\n          </ion-item>\n          <ion-input *ngIf=\"!hasTwitter\" type=\"hidden\" formControlName=\"twitter_link\" value=\"\"></ion-input>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.twitter_link\">\n              <div class=\"error-message\" *ngIf=\"updateUserForm.get('twitter_link').hasError(validation.type) && (updateUserForm.get('twitter_link').dirty || updateUserForm.get('twitter_link').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n  \n  <!-----------End of Social Links --------->\n\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        \n      </ion-list>\n    </section>\n\n   \n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Selected Job Areas</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"jobAreas\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{jobAreas[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\" (change)=\"getSelectedJobAreasCount()\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-row class=\"expiration-countdown\" *ngIf=\"getSelectedJobAreasCount() <= 0\">\n      <span class=\"expiration-lead\">Select suitable job areas related to your company.</span>\n    </ion-row>\n\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateUserForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/companies/companies-integration.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/companies/companies-integration.module.ts ***!
  \***********************************************************/
/*! exports provided: CompanyIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyIntegrationModule", function() { return CompanyIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _update_update_company_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update/update-company.modal */ "./src/app/companies/update/update-company.modal.ts");
/* harmony import */ var _create_create_company_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create-company.modal */ "./src/app/companies/create/create-company.modal.ts");









const firebaseRoutes = [
    {
        path: 'listing',
        loadChildren: () => Promise.all(/*! import() | listing-companies-module */[__webpack_require__.e("default~app-masters-job-skills-job-skills-integration-module~jobs-listing-job-filter-job-filter-modu~7e2dd6bc"), __webpack_require__.e("default~bluspec-recruiter-bluspec-recruiter-module~bluspec-recruiter-location-autocomplete-location-~884cb434"), __webpack_require__.e("default~jobs-post-job-detail-post-job-detail-module~listing-companies-module~manager-companies-manager-module"), __webpack_require__.e("common"), __webpack_require__.e("listing-companies-module")]).then(__webpack_require__.bind(null, /*! ./listing/companies.module */ "./src/app/companies/listing/companies.module.ts")).then(m => m.CompaniesPageModule)
    },
    {
        path: 'manager',
        loadChildren: () => Promise.all(/*! import() | manager-companies-manager-module */[__webpack_require__.e("default~app-masters-job-skills-job-skills-integration-module~jobs-listing-job-filter-job-filter-modu~7e2dd6bc"), __webpack_require__.e("default~jobs-post-job-detail-post-job-detail-module~listing-companies-module~manager-companies-manager-module"), __webpack_require__.e("common"), __webpack_require__.e("manager-companies-manager-module")]).then(__webpack_require__.bind(null, /*! ./manager/companies-manager.module */ "./src/app/companies/manager/companies-manager.module.ts")).then(m => m.CompaniesManagerPageModule)
    },
    {
        path: 'details/:id',
        loadChildren: () => Promise.all(/*! import() | details-company-details-module */[__webpack_require__.e("default~details-company-details-module~details-job-areas-details-module~details-job-skills-details-m~3b748c40"), __webpack_require__.e("details-company-details-module")]).then(__webpack_require__.bind(null, /*! ./details/company-details.module */ "./src/app/companies/details/company-details.module.ts")).then(m => m.CompanyDetailsPageModule)
    }
];
let CompanyIntegrationModule = class CompanyIntegrationModule {
};
CompanyIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes)
        ],
        entryComponents: [
            _create_create_company_modal__WEBPACK_IMPORTED_MODULE_8__["CreateCompanyModal"],
            _update_update_company_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyModal"]
        ],
        declarations: [
            _create_create_company_modal__WEBPACK_IMPORTED_MODULE_8__["CreateCompanyModal"],
            _update_update_company_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyModal"]
        ]
    })
], CompanyIntegrationModule);



/***/ }),

/***/ "./src/app/companies/create/create-company.modal.ts":
/*!**********************************************************!*\
  !*** ./src/app/companies/create/create-company.modal.ts ***!
  \**********************************************************/
/*! exports provided: CreateCompanyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyModal", function() { return CreateCompanyModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dbmodels_company_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dbmodels/company-model */ "./src/app/dbmodels/company-model.ts");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/BluspecValidator */ "./src/app/shared/BluspecValidator.ts");














let CreateCompanyModal = class CreateCompanyModal {
    constructor(modalController, firebaseService, authService, masterService, alertController, storageService, toastService, loadingController, router) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.masterService = masterService;
        this.alertController = alertController;
        this.storageService = storageService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
        this.userData = new _dbmodels_company_model__WEBPACK_IMPORTED_MODULE_4__["CompanyModel"]();
        this.jobAreas = [];
        this.percentDone = 0;
        this.errorMsg = "";
        this.hasWebsite = true;
        this.websiteInfo = "Add website URL.";
        this.hasFbPage = true;
        this.fbPageInfo = "Add facebook page link.";
        this.hasTwitter = true;
        this.twitterInfo = "Add twitter page link.";
        this.hasLinkedIn = true;
        this.linkedInInfo = "Add linkedIn page URL.";
        this.validations = {
            'title': [
                { type: 'required', message: 'Company name is required.' },
                { type: 'minLength', message: 'Company name appears to be too small.' },
                { type: 'maxLength', message: 'Company name can not exceed 20 characters.' }
            ],
            'tagline': [
                { type: 'required', message: 'Company tagline is required.' },
                { type: 'minLength', message: 'Tagline appears to be too small.' },
                { type: 'maxLength', message: 'Tagline can not exceed 20 characters.' }
            ],
            'description': [
                { type: 'required', message: 'Company description is required.' },
                { type: 'minLength', message: 'Company description appears to be too small.' },
                { type: 'maxLength', message: 'Company description must not exceed 200 characters.' }
            ],
            'website': [
                { type: 'required', message: 'Enter the company website URL.' },
                { type: 'pattern', message: 'Enter a valid website address. e.g. www.mysite.com' }
            ],
            'fb_link': [
                { type: 'required', message: 'Enter the company facebook page URL.' },
                { type: 'pattern', message: 'Enter a valid facebook page link. e.g. www.facebook.com/company' }
            ],
            'twitter_link': [
                { type: 'required', message: 'Enter the company twitter page URL.' },
                { type: 'pattern', message: 'Enter a valid twitter page url. e.g. www.twitter.com/company' }
            ],
            'linkedin': [
                { type: 'required', message: 'Enter LinkedIn URL for the company.' },
                { type: 'pattern', message: 'Enter a valid LinkedIn page url. e.g. www.linkedin.com/company' }
            ]
        };
    }
    ngOnInit() {
        this.userData.logo = '';
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            this.api_key = this.localUser.api_key;
            // default image
            this.createUserForm.controls.user_id.patchValue(this.localUser.id);
            this.createUserForm.controls.user_id.updateValueAndValidity();
        });
        this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            tagline: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].urlRegex)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
            jobAreas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            video_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            fb_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].fbRegex)]),
            twitter_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].twitterRegex)]),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].linkedInRegex)])
        });
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].JOB_AREAS).then(skills => {
            if (skills) {
                this.jobAreas = skills;
                this.jobAreas.map(() => {
                    this.createUserForm.controls.jobAreas.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
                });
            }
            else {
                //Can fetch now
                alert("Could not find job areas in storage.");
            }
        });
    }
    get skillsFormArray() { return this.createUserForm.get('jobAreas'); }
    getSelectedJobAreasCount() {
        const selectedAreas = [];
        this.createUserForm.value.jobAreas
            .map((value, index) => {
            if (value) {
                selectedAreas.push(this.jobAreas[index].id);
            }
        });
        return selectedAreas.length;
    }
    onWebsiteOptionSelected(e) {
        this.hasWebsite = !this.hasWebsite;
        if (!this.hasWebsite) {
            this.websiteInfo = 'Do not have a website.';
            this.createUserForm.get('website').clearValidators();
            this.createUserForm.get('website').updateValueAndValidity();
        }
        else {
            this.websiteInfo = 'Add website link.';
            this.createUserForm.get('website').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].urlRegex)]);
            this.createUserForm.get('website').updateValueAndValidity();
        }
    }
    onFacebookOptionSelected(e) {
        this.hasFbPage = !this.hasFbPage;
        if (!this.hasFbPage) {
            this.fbPageInfo = 'Do not have facebook page.';
            this.createUserForm.get('fb_link').clearValidators();
            this.createUserForm.get('fb_link').updateValueAndValidity();
        }
        else {
            this.fbPageInfo = 'Have facebook page.';
            this.createUserForm.get('fb_link').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].fbRegex)]);
            this.createUserForm.get('fb_link').updateValueAndValidity();
        }
    }
    onTwitterOptionSelected(e) {
        this.hasTwitter = !this.hasTwitter;
        if (!this.hasTwitter) {
            this.twitterInfo = 'Do not have twitter page.';
            this.createUserForm.get('twitter_link').clearValidators();
            this.createUserForm.get('twitter_link').updateValueAndValidity();
        }
        else {
            this.twitterInfo = 'Add twitter page.';
            this.createUserForm.get('twitter_link').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].twitterRegex)]);
            this.createUserForm.get('twitter_link').updateValueAndValidity();
        }
    }
    onLinkedInOptionSelected(e) {
        this.hasLinkedIn = !this.hasLinkedIn;
        if (!this.hasLinkedIn) {
            this.linkedInInfo = 'Do not have linkedin page.';
            this.createUserForm.get('linkedin').clearValidators();
            this.createUserForm.get('linkedin').updateValueAndValidity();
        }
        else {
            this.linkedInInfo = 'Have linkedin page.';
            this.createUserForm.get('linkedin').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].linkedInRegex)]);
            this.createUserForm.get('linkedin').updateValueAndValidity();
        }
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    createUser() {
        this.presentLoadingWithOptions();
        this.userData.title = this.createUserForm.value.title;
        this.userData.tagline = this.createUserForm.value.tagline;
        this.userData.website = this.createUserForm.value.website;
        this.userData.description = this.createUserForm.value.description;
        this.userData.user_id = this.createUserForm.value.user_id;
        this.userData.fb_link = this.createUserForm.value.fb_link;
        this.userData.twitter_link = this.createUserForm.value.twitter_link;
        this.userData.linkedin = this.createUserForm.value.linkedin;
        const selectedJobAreas = [];
        this.createUserForm.value.jobAreas
            .map((value, index) => {
            if (value) {
                selectedJobAreas.push(this.jobAreas[index].id);
            }
        });
        this.userData.jobAreas = selectedJobAreas;
        this.userData.logo = this.preview;
        this.firebaseService.callCompanyCreateAPI(this.api_key, this.userData)
            .subscribe((event) => {
            this.loading.dismiss();
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].DEV_MODE) {
                console.log('########## Company Create Result #####: ' + JSON.stringify(event));
            }
            if (!event.error) {
                this.dismissModal();
                this.firebaseService.addItemToLocal(this.userData);
                /********** NAVIGATE WITH USER ID **********/
                this.toastService.presentToast(event.message);
                this.router.navigate(['/companies/details', event.id]);
            }
            else {
                this.presentAlert(event.message);
            }
        }, (error) => {
            this.loading.dismiss();
            this.presentAlert('Looks like there is a Network Issue.');
        });
    }
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.createUserForm.patchValue({
            logo: file
        });
        this.createUserForm.get('logo').updateValueAndValidity();
        console.log("uploadFile() " + this.createUserForm.value);
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
            console.log("uploadFile() got preview: " + this.preview);
        };
        reader.readAsDataURL(file);
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
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                animated: true,
                spinner: "bubbles",
                message: 'Registering Company Profile',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield this.loading.present();
        });
    }
};
CreateCompanyModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
CreateCompanyModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-company.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/create/create-company.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/create-company.modal.scss */ "./src/app/companies/create/styles/create-company.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/create-company.shell.scss */ "./src/app/companies/create/styles/create-company.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _companies_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], CreateCompanyModal);



/***/ }),

/***/ "./src/app/companies/create/styles/create-company.modal.scss":
/*!*******************************************************************!*\
  !*** ./src/app/companies/create/styles/create-company.modal.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.toggle-item {\n  --inner-padding-end: 0px;\n}\n\n.toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-dark);\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.create-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL2NyZWF0ZS9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcY29tcGFuaWVzXFxjcmVhdGVcXHN0eWxlc1xcY3JlYXRlLWNvbXBhbnkubW9kYWwuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL2NyZWF0ZS9zdHlsZXMvY3JlYXRlLWNvbXBhbnkubW9kYWwuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL2NyZWF0ZS9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xcY2hlY2tib3gtdGFnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEsb0RBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0pGOztBRE1FO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURRQTtFQUNFLHdCQUFBO0FDTEY7O0FETUU7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDSko7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDTEY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRE9FO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhDQUFBO0FDTEo7O0FETUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSk47O0FES007RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0FDSFI7O0FET0k7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNOTjs7QURRTTtFQUNFLGVBQUE7QUNOUjs7QURXRTtFQUNFLCtCQUFBO0VBQ0EsOEVBQUE7QUNUSjs7QURXSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDVE47O0FEY0k7RUFDRSwrQkFBQTtBQ1pOOztBRGVJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNiTjs7QURrQkk7RUFDRSwrREFBQTtFRXZHSiwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBRHdGRjs7QUN0RkM7RUFFQyxvQkFBQTtFQUNFLHdCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxREFBQTtFQUNFLDJDQUFBO0FEdUZKOztBQ3JGSTtFQUNELHVCQUFBO0FEdUZIOztBQ3BGRTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QURzRk47O0FDbkZJO0VBQ0UsWUFBQTtBRHFGTjs7QUNuRk07RUFFRSxVQUFBO0FEb0ZSOztBQ2hGRTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEa0ZOOztBQy9FRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUQrRUg7O0FEbEJNO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQ29CUjs7QURoQk07RUFDRSwyQ0FBQTtBQ2tCUjs7QURoQlE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSwwREFBQTtBQ2tCVjs7QURoQlU7RUFDRSx3Q0FBQTtBQ2tCWjs7QURYRTtFQUNFLG1CQUFBO0FDYUo7O0FEWEk7RUFDRSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLHVDQUFBO1VBQUEsc0NBQUE7RUFFQSx5REFBQTtBQ1dOOztBRFRNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDRDQUFBO0FDV1I7O0FEVFE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDV1Y7O0FEUlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDVVY7O0FETk07RUFFRSwrQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURBQTtFQUNFLHVEQUFBO0VBRUEscUNBQUE7QUNFRjs7QURBRTtFQUNFLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jcmVhdGUvc3R5bGVzL2NyZWF0ZS1jb21wYW55Lm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcblxuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5leHBpcmF0aW9uLWxlYWQge1xuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59IFxuXG4udG9nZ2xlLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGlvbi10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xuICB9XG59XG5cbi50b2dnbGUtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLnNlbGVjdC11c2VyLWltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuICAgIC51c2VyLWltYWdlLWNvbCB7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICBoZWlnaHQ6IDRjaDtcbiAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtZmllbGRzIHtcbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgICAuY2hlY2tib3gtdGFncyB7XG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cbiAgICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXG4gICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtZmllbGRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgLnJhbmdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhwaXJhdGlvbi1jb3VudGRvd24gLmV4cGlyYXRpb24tbGVhZCB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50b2dnbGUtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi50b2dnbGUtaXRlbSBpb24tdG9nZ2xlIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi50b2dnbGUtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQuY2hlY2tib3gtdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xuXG4gICAgJi5yb3VuZGVkLXRhZyB7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcblx0XHR9XG5cblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuXHRcdC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/companies/create/styles/create-company.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/companies/create/styles/create-company.shell.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL2NyZWF0ZS9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcY29tcGFuaWVzXFxjcmVhdGVcXHN0eWxlc1xcY3JlYXRlLWNvbXBhbnkuc2hlbGwuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL2NyZWF0ZS9zdHlsZXMvY3JlYXRlLWNvbXBhbnkuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wYW5pZXMvY3JlYXRlL3N0eWxlcy9jcmVhdGUtY29tcGFueS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/companies/update/styles/update-company.modal.scss":
/*!*******************************************************************!*\
  !*** ./src/app/companies/update/styles/update-company.modal.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.update-user-content {\n  --background: var(--page-background);\n}\n\n.update-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.update-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.update-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.update-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.update-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.update-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.update-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.update-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.update-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.update-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\n.form-actions-wrapper .delete-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL3VwZGF0ZS9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcY29tcGFuaWVzXFx1cGRhdGVcXHN0eWxlc1xcdXBkYXRlLWNvbXBhbnkubW9kYWwuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL3VwZGF0ZS9zdHlsZXMvdXBkYXRlLWNvbXBhbnkubW9kYWwuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL3VwZGF0ZS9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xcY2hlY2tib3gtdGFnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0RBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hGOztBREtFO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNISjs7QURPQTtFQUNFLG9DQUFBO0FDSkY7O0FETUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNMSjs7QURPSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNMTjs7QURPTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNMUjs7QURTSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1JOOztBRFVNO0VBQ0UsZUFBQTtBQ1JSOztBRGFFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1hKOztBRGFJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNYTjs7QURnQkk7RUFDRSwrQkFBQTtBQ2ROOztBRGlCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDZk47O0FEb0JJO0VBQ0UsK0RBQUE7RUUzRkosMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUQwRUY7O0FDeEVDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRHlFSjs7QUN2RUk7RUFDRCx1QkFBQTtBRHlFSDs7QUN0RUU7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEd0VOOztBQ3JFSTtFQUNFLFlBQUE7QUR1RU47O0FDckVNO0VBRUUsVUFBQTtBRHNFUjs7QUNsRUU7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRG9FTjs7QUNqRUU7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FEaUVIOztBRGhCTTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUNrQlI7O0FEZE07RUFDRSwyQ0FBQTtBQ2dCUjs7QURkUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDZ0JWOztBRGRVO0VBQ0Usd0NBQUE7QUNnQlo7O0FEVEU7RUFDRSxtQkFBQTtBQ1dKOztBRFRJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUNTTjs7QURQTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw0Q0FBQTtBQ1NSOztBRFBRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1NWOztBRE5RO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1FWOztBREpNO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDSVI7O0FERUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wYW5pZXMvdXBkYXRlL3N0eWxlcy91cGRhdGUtY29tcGFueS5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XG5cbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmV4cGlyYXRpb24tbGVhZCB7XG4gICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0gXG5cbi51cGRhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLWZpZWxkcyB7XG4gICAgLmNoZWNrYm94LXRhZ3Mge1xuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAgIC5jaGVja2JveC10YWcge1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG5cbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5kZWxldGUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLmV4cGlyYXRpb24tY291bnRkb3duIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmV4cGlyYXRpb24tY291bnRkb3duIC5leHBpcmF0aW9uLWxlYWQge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXBkYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBtYXJnaW46IDBweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIC5kZWxldGUtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/companies/update/styles/update-company.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/companies/update/styles/update-company.shell.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL3VwZGF0ZS9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcY29tcGFuaWVzXFx1cGRhdGVcXHN0eWxlc1xcdXBkYXRlLWNvbXBhbnkuc2hlbGwuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL3VwZGF0ZS9zdHlsZXMvdXBkYXRlLWNvbXBhbnkuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wYW5pZXMvdXBkYXRlL3N0eWxlcy91cGRhdGUtY29tcGFueS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/companies/update/update-company.modal.ts":
/*!**********************************************************!*\
  !*** ./src/app/companies/update/update-company.modal.ts ***!
  \**********************************************************/
/*! exports provided: UpdateCompanyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyModal", function() { return UpdateCompanyModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dbmodels_company_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dbmodels/company-model */ "./src/app/dbmodels/company-model.ts");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/BluspecValidator */ "./src/app/shared/BluspecValidator.ts");














let UpdateCompanyModal = class UpdateCompanyModal {
    constructor(modalController, alertController, firebaseService, masterService, authService, toastService, storageService, loadingController, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.toastService = toastService;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.router = router;
        this.jobAreas = [];
        this.logoImgUpdated = "";
        this.hasWebsite = true;
        this.websiteInfo = "This company has a website.";
        this.hasFbPage = true;
        this.fbPageInfo = "This company has a facebook page.";
        this.hasTwitter = true;
        this.twitterInfo = "This company has a twitter page.";
        this.hasLinkedIn = true;
        this.linkedInInfo = "This company has a linkedIn page.";
        this.validations = {
            'title': [
                { type: 'required', message: 'Company name is required.' },
                { type: 'minLength', message: 'Company name appears to be too small.' },
                { type: 'maxLength', message: 'Company name can not exceed 20 characters.' }
            ],
            'tagline': [
                { type: 'required', message: 'Company tagline is required.' },
                { type: 'minLength', message: 'Tagline appears to be too small.' },
                { type: 'maxLength', message: 'Tagline can not exceed 20 characters.' }
            ],
            'description': [
                { type: 'required', message: 'Company description is required.' },
                { type: 'minLength', message: 'Company description appears to be too small.' },
                { type: 'maxLength', message: 'Company description must not exceed 200 characters.' }
            ],
            'website': [
                { type: 'required', message: 'Enter the company website URL.' },
                { type: 'pattern', message: 'Enter a valid website address. e.g. www.mysite.com' }
            ],
            'fb_link': [
                { type: 'required', message: 'Enter the company facebook page URL.' },
                { type: 'pattern', message: 'Enter a valid facebook page link. e.g. www.facebook.com/company' }
            ],
            'twitter_link': [
                { type: 'required', message: 'Enter the company twitter page URL.' },
                { type: 'pattern', message: 'Enter a valid twitter page url. e.g. www.twitter.com/company' }
            ],
            'linkedin': [
                { type: 'required', message: 'Enter LinkedIn URL for the company.' },
                { type: 'pattern', message: 'Enter a valid LinkedIn page url. e.g. www.linkedin.com/company' }
            ]
        };
    }
    ngOnInit() {
        this.authService.getAuthKey().then(result => {
            this.api_key = result;
        });
        //this.logoImgUpdated = this.user.logo;
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            company_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.user_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            tagline: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.tagline, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.website, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].urlRegex)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            jobAreas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], [_validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_7__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)]),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.logo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            video_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            fb_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.fb_link, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].fbRegex)]),
            twitter_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.twitter_link, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].twitterRegex)]),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.linkedin, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].linkedInRegex)])
        });
        /************ NO NEED FETCH ALL TIME **********/
        this.masterService.getJobAreas().subscribe(skills => {
            this.jobAreas = skills.result;
            // create skill checkboxes
            this.jobAreas.map((skill) => {
                let userSkillsIds = [];
                if (this.user.jobAreas) {
                    userSkillsIds = this.user.jobAreas.map(function (skillId) {
                        return skillId['id'];
                    });
                }
                // set the control value to 'true' if the user already has this skill
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](userSkillsIds.includes(skill.id));
                this.updateUserForm.controls.jobAreas.push(control);
                //Display selected job areas
                // if(skillsArr.includes(item.id)){
                //   (this.updateUserForm.controls.skills as FormArray).push(new FormControl(true));
                // }else{
                //   (this.updateUserForm.controls.skills as FormArray).push(new FormControl());
                // }
            });
        });
        /*******************************************************************/
        //A dummy method for validation delay in template
        this.initCompanyLinks();
    }
    get skillsFormArray() { return this.updateUserForm.get('jobAreas'); }
    onWebsiteOptionSelected(e) {
        this.hasWebsite = !this.hasWebsite;
        if (!this.hasWebsite) {
            this.websiteInfo = 'Add company website.';
            this.updateUserForm.get('website').clearValidators();
            this.updateUserForm.get('website').updateValueAndValidity();
        }
        else {
            this.websiteInfo = 'Do not add website.';
            this.updateUserForm.get('website').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].urlRegex)]);
            this.updateUserForm.get('website').updateValueAndValidity();
        }
    }
    onFacebookOptionSelected(e) {
        this.hasFbPage = !this.hasFbPage;
        if (!this.hasFbPage) {
            this.fbPageInfo = 'Do not add facebook page.';
            this.updateUserForm.get('fb_link').clearValidators();
            this.updateUserForm.get('fb_link').updateValueAndValidity();
        }
        else {
            this.fbPageInfo = 'Add facebook page.';
            this.updateUserForm.get('fb_link').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].fbRegex)]);
            this.updateUserForm.get('fb_link').updateValueAndValidity();
        }
    }
    onTwitterOptionSelected(e) {
        this.hasTwitter = !this.hasTwitter;
        if (!this.hasTwitter) {
            this.twitterInfo = 'Do not add twitter page.';
            this.updateUserForm.get('twitter_link').clearValidators();
            this.updateUserForm.get('twitter_link').updateValueAndValidity();
        }
        else {
            this.twitterInfo = 'Add twitter page.';
            this.updateUserForm.get('twitter_link').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].twitterRegex)]);
            this.updateUserForm.get('twitter_link').updateValueAndValidity();
        }
    }
    onLinkedInOptionSelected(e) {
        this.hasLinkedIn = !this.hasLinkedIn;
        if (!this.hasLinkedIn) {
            this.linkedInInfo = 'Do not add linkedin page.';
            this.updateUserForm.get('linkedin').clearValidators();
            this.updateUserForm.get('linkedin').updateValueAndValidity();
        }
        else {
            this.linkedInInfo = 'Add linkedin page.';
            this.updateUserForm.get('linkedin').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_BluspecValidator__WEBPACK_IMPORTED_MODULE_13__["BluspecValidator"].linkedInRegex)]);
            this.updateUserForm.get('linkedin').updateValueAndValidity();
        }
    }
    initCompanyLinks() {
        if (!this.user.website) {
            this.hasWebsite = false;
            this.websiteInfo = 'Do not add website.';
            this.updateUserForm.get('website').clearValidators();
            this.updateUserForm.get('website').updateValueAndValidity();
        }
        if (!this.user.linkedin) {
            this.hasLinkedIn = false;
            this.linkedInInfo = 'Do not add linkedin page.';
            this.updateUserForm.get('linkedin').clearValidators();
            this.updateUserForm.get('linkedin').updateValueAndValidity();
        }
        if (!this.user.fb_link) {
            this.hasFbPage = false;
            this.fbPageInfo = 'Do not add facebook page.';
            this.updateUserForm.get('fb_link').clearValidators();
            this.updateUserForm.get('fb_link').updateValueAndValidity();
        }
        if (!this.user.twitter_link) {
            this.hasTwitter = false;
            this.twitterInfo = 'Do not add twitter page.';
            this.updateUserForm.get('twitter_link').clearValidators();
            this.updateUserForm.get('twitter_link').updateValueAndValidity();
        }
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you really want to delete the company profile for ' + this.user.title + '?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.presentLoadingWithOptions();
                            let postData = {
                                'id': this.user.id
                            };
                            this.firebaseService.deleteItem(this.api_key, postData)
                                .subscribe((res) => {
                                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_12__["AuthConstants"].DEV_MODE) {
                                    console.log('################ Result# ' + JSON.stringify(res));
                                }
                                this.loadingController.dismiss();
                                if (res.error) {
                                    this.presentAlert(res.message);
                                }
                                else {
                                    //delete from local
                                    this.firebaseService.deleteItemFromLocal(this.user);
                                    this.dismissModal();
                                    this.toastService.presentToast(res.message);
                                    this.router.navigate(['/companies/listing']);
                                }
                            }, (error) => {
                                this.loadingController.dismiss();
                                this.presentAlert('Looks like there is a Network Issue.');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getSelectedJobAreasCount() {
        const selectedAreas = [];
        this.updateUserForm.value.jobAreas
            .map((value, index) => {
            if (value) {
                selectedAreas.push(this.jobAreas[index].id);
            }
        });
        return selectedAreas.length;
    }
    updateUser() {
        this.presentLoadingWithOptions();
        this.user.id = this.updateUserForm.value.company_id;
        this.user.title = this.updateUserForm.value.title;
        this.user.tagline = this.updateUserForm.value.tagline;
        this.user.website = this.updateUserForm.value.website;
        this.user.description = this.updateUserForm.value.description;
        this.user.user_id = this.updateUserForm.value.user_id;
        this.user.fb_link = this.updateUserForm.value.fb_link;
        this.user.twitter_link = this.updateUserForm.value.twitter_link;
        this.user.linkedin = this.updateUserForm.value.linkedin;
        this.user.logo = this.logoImgUpdated;
        //const selectedJobAreas = [];
        const selectedJobAreas = [];
        this.updateUserForm.value.jobAreas
            .map((value, index) => {
            if (value) {
                selectedJobAreas.push(this.jobAreas[index].id);
            }
        });
        this.user.jobAreas = selectedJobAreas;
        var postData = {
            id: this.user.id,
            title: this.user.title,
            tagline: this.user.tagline,
            website: this.user.website,
            description: this.user.description,
            user_id: this.user.user_id,
            fb_link: this.user.fb_link,
            twitter_link: this.user.twitter_link,
            linkedin: this.user.linkedin,
            jobAreas: this.user.jobAreas,
            logoImgUpdated: this.logoImgUpdated
        };
        this.firebaseService.callCompanyUpdateAPI(this.api_key, postData)
            .subscribe((res) => {
            this.loadingController.dismiss();
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_12__["AuthConstants"].DEV_MODE) {
                console.log('########## API Response ########### ' + JSON.stringify(res));
            }
            //this.updateResult = res.json();
            if (!res.error) {
                this.dismissModal();
                //SYNC THE UPDATE
                this.firebaseService.fetchFreshList();
                //this.router.navigate(['/companies/details'], {queryParams :{id : res.id}});
                this.router.navigate(['/companies/listing']);
            }
            else {
                this.presentAlert(res.message);
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
        // if (!this.updateResult.error) {
        //   /********** NAVIGATE WITH USER ID **********/
        //   this.dismissModal();
        //   console.log('########## API Successful ########### '+JSON.stringify(this.updateResult));
        //   this.router.navigate(['companies/details'], {queryParams :{id : this.updateResult.id}});
        //   //this.router.navigate(['companies/details'], this.updateResult.id);
        //   } else {
        //     this.presentAlert(this.updateResult.message);
        //   }
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.updateUserForm.patchValue({
            logo: file
        });
        this.updateUserForm.get('logo').updateValueAndValidity();
        console.log("uploadFile() " + this.updateUserForm.value);
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.logoImgUpdated = reader.result;
            this.user.logo = this.logoImgUpdated;
            console.log("uploadFile() got preview: " + this.logoImgUpdated);
        };
        reader.readAsDataURL(file);
    }
    removeFile() {
        this.logoImgUpdated = "";
        this.user.logo = this.logoImgUpdated;
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
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 5000,
                animated: true,
                spinner: "bubbles",
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
UpdateCompanyModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_company_model__WEBPACK_IMPORTED_MODULE_5__["CompanyModel"])
], UpdateCompanyModal.prototype, "user", void 0);
UpdateCompanyModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-company.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/update/update-company.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/update-company.modal.scss */ "./src/app/companies/update/styles/update-company.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/update-company.shell.scss */ "./src/app/companies/update/styles/update-company.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _companies_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UpdateCompanyModal);



/***/ }),

/***/ "./src/app/shared/BluspecValidator.ts":
/*!********************************************!*\
  !*** ./src/app/shared/BluspecValidator.ts ***!
  \********************************************/
/*! exports provided: BluspecValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluspecValidator", function() { return BluspecValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BluspecValidator {
    // Validates URL
    static urlValidator(url) {
        if (url.pristine) {
            return null;
        }
        const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        url.markAsTouched();
        if (URL_REGEXP.test(url.value)) {
            return null;
        }
        return {
            invalidUrl: true
        };
    }
    // Validates passwords
    static matchPassword(group) {
        const password = group.controls.password;
        const confirm = group.controls.confirm;
        if (password.pristine || confirm.pristine) {
            return null;
        }
        group.markAsTouched();
        if (password.value === confirm.value) {
            return null;
        }
        return {
            invalidPassword: true
        };
    }
    // Validates numbers
    static numberValidator(number) {
        if (number.pristine) {
            return null;
        }
        const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
        number.markAsTouched();
        if (NUMBER_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }
    // Validates US SSN
    static ssnValidator(ssn) {
        if (ssn.pristine) {
            return null;
        }
        const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
        ssn.markAsTouched();
        if (SSN_REGEXP.test(ssn.value)) {
            return null;
        }
        return {
            invalidSsn: true
        };
    }
    // Validates US phone numbers
    static phoneValidator(number) {
        if (number.pristine) {
            return null;
        }
        const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }
    // Validates zip codes
    static zipCodeValidator(zip) {
        if (zip.pristine) {
            return null;
        }
        const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
        zip.markAsTouched();
        if (ZIP_REGEXP.test(zip.value)) {
            return null;
        }
        return {
            invalidZip: true
        };
    }
}
// public static readonly linkedInRegex =  "(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/(?:(?:\w)*#!\/)?(?:pages\/)?([\w\-]*)?";
//public static readonly urlRegex = '^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$@i';
BluspecValidator.urlRegex = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
//public static readonly fbRegex = "^((http|https):\/\/)?+(www.facebook.com\/)+[a-z]+(\/)+[a-zA-Z0-9-]{5,30}+$";
BluspecValidator.twitterRegex = "www.twitter.com\/[^\/]+$";
BluspecValidator.linkedInRegex = "www.linkedin.com\/[^\/]+$";
BluspecValidator.fbRegex = "www.facebook.com\/[^\/]+$";


/***/ }),

/***/ "./src/app/validators/checkbox-checked.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/validators/checkbox-checked.validator.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxCheckedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function() { return CheckboxCheckedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CheckboxCheckedValidator {
    static minSelectedCheckboxes(min) {
        const validator = (formArray) => {
            const totalSelected = formArray.controls
                // get a list of checkbox values (boolean)
                .map(control => control.value)
                // total up the number of checked checkboxes
                .reduce((prev, next) => next ? prev + next : prev, 0);
            // if the total is not greater than the minimum, return the error message
            return totalSelected >= min ? null : { required: true };
        };
        return validator;
    }
}


/***/ })

}]);
//# sourceMappingURL=companies-companies-integration-module-es2015.js.map