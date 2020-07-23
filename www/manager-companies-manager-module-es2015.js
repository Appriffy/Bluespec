(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-companies-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/manager/companies-manager.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/manager/companies-manager.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Companies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadCompanies()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"createNewCompany()\" *ngIf=\"localUser?.role_id == 1 || localUser?.role_id == 2\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n   <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Companies...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing && listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/business.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;columns: #555555;\">Looks like you have not registered a company yet.</h5>\n      <ion-button class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\" (click)=\"createNewCompany()\">\n        <span class=\"promo-code\">\n         REGISTER COMPANY\n        </span>\n      </ion-button>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">     \n        <ion-item class=\"list-item\" *ngFor=\"let item of listing\" [routerLink]=\"['/companies/details', item.id]\">\n   \n          <ion-row class=\"user-row\">\n            <ion-col size=\"2\" class=\"user-image-wrapper\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item?.logo\" [alt]=\"'Company Logo'\"></app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h3 class=\"user-name\">\n                  <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n                </h3>\n           \n       <h5 class=\"user-age\" *ngIf=\"item?.tagline\">\n        <app-text-shell animation=\"bouncing\" [data]=\"item?.tagline\"></app-text-shell>\n      </h5>\n\n      <!-- <h5 class=\"user-age\" *ngIf=\"item?.website\">\n        <app-text-shell animation=\"bouncing\" [data]=\"item?.website\"></app-text-shell>\n      </h5> -->\n    \n      <div *ngIf=\"!item.is_published\">\n       <ion-badge class=\"schedule-closed\" color=\"danger\">Not Approved</ion-badge>\n       </div>\n\n       <!-- <div class=\"amenities-wrapper\" style=\"margin-left: 0px;\">\n        <ion-row class=\"amenities-tags\" style=\"margin-left: 0px;\">\n          <ion-col class=\"tag-wrapper\" *ngFor=\"let skill of item?.jobAreas| slice:0:3\">\n            <span class=\"amenity-tag\" style=\"color:white;\">\n              <app-text-shell [data]=\"skill.title\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"tag-wrapper\" *ngIf=\"item?.jobAreas.length > 3\">\n            <span class=\"amenity-tag\" style=\"color:white;font-weight: bold;\">\n              <app-text-shell [data]=\"'.. + '+(item?.jobAreas.length -3)+' more'\"></app-text-shell>\n            </span>\n          </ion-col>\n         \n        </ion-row>\n      </div> -->\n\n\n              </div>\n            </ion-col>\n          </ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n     \n     \n</ion-content>\n");

/***/ }),

/***/ "./src/app/companies/manager/companies-manager.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/companies/manager/companies-manager.module.ts ***!
  \***************************************************************/
/*! exports provided: CompaniesManagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesManagerPageModule", function() { return CompaniesManagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _companies_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../companies.resolver */ "./src/app/companies/companies.resolver.ts");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _companies_manager_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companies-manager.page */ "./src/app/companies/manager/companies-manager.page.ts");










const routes = [
    {
        path: '',
        component: _companies_manager_page__WEBPACK_IMPORTED_MODULE_9__["CompaniesManagerPage"],
        resolve: {
            data: _companies_resolver__WEBPACK_IMPORTED_MODULE_6__["CompanyListingResolver"]
        }
    }
];
let CompaniesManagerPageModule = class CompaniesManagerPageModule {
};
CompaniesManagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_companies_manager_page__WEBPACK_IMPORTED_MODULE_9__["CompaniesManagerPage"]],
        providers: [
            _companies_resolver__WEBPACK_IMPORTED_MODULE_6__["CompanyListingResolver"],
            _companies_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]
        ],
        entryComponents: []
    })
], CompaniesManagerPageModule);



/***/ }),

/***/ "./src/app/companies/manager/companies-manager.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/companies/manager/companies-manager.page.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesManagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesManagerPage", function() { return CompaniesManagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _create_create_company_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create/create-company.modal */ "./src/app/companies/create/create-company.modal.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");










let CompaniesManagerPage = class CompaniesManagerPage {
    constructor(companyService, route, ngRouter, toastService, authService, storageService, modalController) {
        this.companyService = companyService;
        this.route = route;
        this.ngRouter = ngRouter;
        this.toastService = toastService;
        this.authService = authService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.loading = true;
    }
    ionViewWillEnter() {
        this.fetchFreshList(false);
    }
    ngOnInit() {
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                console.log("Local User: " + this.localUser.id);
            }
        });
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].MY_COMPANIES).then(companies => {
            if (companies) {
                if (companies.length > 0) {
                    this.listing = companies;
                    this.loading = false;
                }
            }
        });
    }
    loadCompanies() {
        this.fetchFreshList(true);
    }
    createNewCompany() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.ngRouter.navigate(['create-company']);
            const modal = yield this.modalController.create({
                component: _create_create_company_modal__WEBPACK_IMPORTED_MODULE_5__["CreateCompanyModal"],
                cssClass: 'fullscreen-modal-css'
            });
            yield modal.present();
        });
    }
    fetchFreshList(showLoading) {
        if (showLoading) {
            this.loading = true;
        }
        this.authService.getAuthCache().then(results => {
            if (results) {
                this.companyService.getMyCompanies(results.api_key, {}).subscribe((res) => {
                    this.loading = false;
                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                        console.log("###### Companies List API Response: " + JSON.stringify(res));
                    }
                    if (res.error) {
                        this.toastService.presentToast(res.message);
                    }
                    else {
                        this.listing = res.items;
                        this.loading = false;
                        this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].MY_COMPANIES, res.items);
                    }
                }, (error) => {
                    this.toastService.presentToast('Looks like there is a Network Issue.' + error.message);
                }, () => {
                    // complete callback
                    // this.loaderDismiss();
                });
            }
        });
    }
};
CompaniesManagerPage.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
CompaniesManagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies-manager.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/manager/companies-manager.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../listing/styles/listing.page.scss */ "./src/app/companies/listing/styles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../listing/styles/listing.shell.scss */ "./src/app/companies/listing/styles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../listing/styles/company-listing.ios.scss */ "./src/app/companies/listing/styles/company-listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], CompaniesManagerPage);



/***/ })

}]);
//# sourceMappingURL=manager-companies-manager-module-es2015.js.map