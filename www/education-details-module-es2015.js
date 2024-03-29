(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["education-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/education-details.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/education-details.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/user\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Education Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!loading\" fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openAddEduDetailModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n  <!-- <p>{{dataDebug}}</p> -->\n  <ion-list class=\"items-list\" *ngIf=\"items?.length > 0  && !loading\">\n\n    <ion-item tappable class=\"list-item\" *ngFor=\"let item of items\" (click)=\"onEduItemSelected(item)\">\n\n      <!-- <ion-item class=\"list-item\" *ngFor=\"let item of items\"  [routerLink]=\"['/education-details', item]\"></ion-item> -->\n\n      <ion-row class=\"user-row\">\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n\n            <h3 class=\"user-name\" *ngIf=\"item.title\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.title+' ('+item.level_name+')'\"></app-text-shell>\n            </h3>\n\n            <h5 class=\"user-age\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.organization\"></app-text-shell>\n            </h5>\n\n            <h5 class=\"user-age\" *ngIf=\"item.is_current\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.yoj?.concat(' to Current')\"></app-text-shell>\n            </h5>\n            \n            <h5 class=\"user-age\" *ngIf=\"!item.is_current\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.yoj?.concat(' - ').concat(item.yop)\"></app-text-shell>\n            </h5>\n\n            <h5 class=\"user-age\">\n              <app-text-shell animation=\"bouncing\" [data]=\"'Score: '+item.score?.concat(' ').concat(item.score_type)\"></app-text-shell>\n            </h5>\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <!------- Empty View ------->\n  <ion-grid style=\"height: 100%\" *ngIf=\"items?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/study_areas.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\"> No education detail found.</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n     <!------- Loading View ------->\n     <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n        <h5 style=\"text-align: center;color: #555555;\">Loading...</h5>\n        </ion-row>\n      </ion-grid>\n     <!------- Loading View ------->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user/education-details/education-details.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/education-details/education-details.module.ts ***!
  \********************************************************************/
/*! exports provided: EducationDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsPageModule", function() { return EducationDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _education_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education-details.page */ "./src/app/user/education-details/education-details.page.ts");
/* harmony import */ var _education_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education-details.resolver */ "./src/app/user/education-details/education-details.resolver.ts");










const routes = [
    {
        path: '',
        component: _education_details_page__WEBPACK_IMPORTED_MODULE_8__["EducationDetailsPage"],
        resolve: {
            data: _education_details_resolver__WEBPACK_IMPORTED_MODULE_9__["EducationDetailsResolver"]
        }
    }
];
let EducationDetailsPageModule = class EducationDetailsPageModule {
};
EducationDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        declarations: [_education_details_page__WEBPACK_IMPORTED_MODULE_8__["EducationDetailsPage"]],
        providers: [
            _education_details_resolver__WEBPACK_IMPORTED_MODULE_9__["EducationDetailsResolver"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        ]
    })
], EducationDetailsPageModule);



/***/ }),

/***/ "./src/app/user/education-details/education-details.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/education-details/education-details.page.ts ***!
  \******************************************************************/
/*! exports provided: EducationDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsPage", function() { return EducationDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/update-education-details.modal */ "./src/app/user/education-details/update/update-education-details.modal.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create/create-education-details.modal */ "./src/app/user/education-details/create/create-education-details.modal.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");











let EducationDetailsPage = class EducationDetailsPage {
    constructor(modalController, route, router, storageService, authService, toastService, userService) {
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.authService = authService;
        this.toastService = toastService;
        this.userService = userService;
        this.loading = true;
        this.searchQuery = '';
    }
    ngOnInit() {
        this.userService.invokeEduListChangeEvent.subscribe(value => {
            this.items = value.items;
            this.profilerUsername = value.username;
            this.loading = false;
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                console.log("/***** SYNC DATA : " + JSON.stringify(value));
                this.toastService.presentToast(value.message);
            }
        });
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            this.user_profile_id = this.localUser.id;
            /************ CHECK ROUTE PARAM REQUESTS ***************/
            this.route.paramMap.subscribe(params => {
                if (params && params.has("user_id")) {
                    this.user_profile_id = params.get("user_id");
                    if (this.user_profile_id <= 0) {
                        this.router.navigate(['page-not-found']);
                    }
                }
            });
            if (this.localUser.id !== this.user_profile_id) {
                if (this.localUser.role_id !== 1) {
                    this.router.navigate(['unauthorized']);
                }
            }
        });
    }
    ionViewDidEnter() {
        console.log("/*****ionViewDidEnter : ");
        this.loadItems();
    }
    loadItems() {
        //FIND USER SESSION AND HIT API
        this.loading = true;
        this.storageService
            .get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].AUTH)
            .then(res => {
            if (res) {
                /********** THE CALLER ***********/
                this.userService.getEduDataSource(res.api_key, this.user_profile_id).subscribe((res) => {
                    console.log("/********* EDU DETAILS API RESPONSE *************/ " + JSON.stringify(res));
                    if (!res.error) {
                        //this.items = res.items;
                        this.userService.invokeEduListChangeEvent.next(res);
                    }
                    else {
                        this.toastService.presentToast(res.message);
                    }
                }, (error) => {
                    this.toastService.presentToast('Looks like there is a Network Issue.' + error.message);
                }, () => {
                    // complete callback
                });
                /************ THE CALLER ***********/
            }
            else {
                this.toastService.presentToast("Invalid token. You are not authorized to make this request.");
            }
        });
        //END OF CALL 
    }
    openAddEduDetailModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_9__["CreateEducationDetailsModal"],
                cssClass: "fullscreen-modal",
                componentProps: {
                    'user_id': this.user_profile_id
                }
            });
            yield modal.present();
        });
    }
    onEduItemSelected(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_4__["UpdateEducationDetailsModal"],
                componentProps: {
                    'user': item
                }
            });
            yield modal.present();
        });
    }
};
EducationDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
EducationDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/education-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], EducationDetailsPage);



/***/ }),

/***/ "./src/app/user/education-details/education-details.resolver.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/education-details/education-details.resolver.ts ***!
  \**********************************************************************/
/*! exports provided: EducationDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsResolver", function() { return EducationDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");



let EducationDetailsResolver = class EducationDetailsResolver {
    constructor(userService) {
        this.userService = userService;
    }
    resolve() {
        //const dataSource: Observable<Array<EducationDetailsModel>> = this.userService.getEduDataSource();
        //const dataStore: DataStore<Array<EducationDetailsModel>> = this.userService.getEduStore(dataSource);
        //return dataStore;
        //   this.storageService
        //   .get(AuthConstants.AUTH)
        //   .then(res => {
        //   if (res) {
        //     const dataSource: Observable<Array<EducationDetailsModel>> = this.userService.getEduDataSource(res.api_key);
        //     const dataStore: DataStore<Array<EducationDetailsModel>> = this.userService.getEduStore(dataSource);
        //     return dataStore;
        //   }
        // });
    }
};
EducationDetailsResolver.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
EducationDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], EducationDetailsResolver);



/***/ })

}]);
//# sourceMappingURL=education-details-module-es2015.js.map