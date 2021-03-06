(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bluspec Dashboard</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button [routerLink]=\"['/auth/logout']\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/logout.svg\" ></ion-icon>\n      </ion-button> -->\n     \n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"getDataSummaryForDashboard()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"page-home\">\n <ion-tabs *ngIf=\"localUser != null && localUser?.role_id == 1\">\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"summary\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/analytics.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Summary</ion-label>\n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"users-stats\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/people.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">People</ion-label>\n    </ion-tab-button>\n   \n    <ion-tab-button tab=\"jobs-stats\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/briefcase.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Jobs</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"job-areas-stats\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Job Areas</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"countries-summary\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Job Areas</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _dashboard_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.router.module */ "./src/app/dashboard/dashboard.router.module.ts");









const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _dashboard_router_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbiIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");









let DashboardPage = class DashboardPage {
    constructor(menu, route, modalController, alertController, storageService, firebaseService, authService, toastService, loadingController, router) {
        this.menu = menu;
        this.route = route;
        this.modalController = modalController;
        this.alertController = alertController;
        this.storageService = storageService;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
    ngOnInit() {
        this.authService
            .getAuthCache()
            .then(res => {
            if (res) {
                //this.userDataDebug = JSON.stringify(this.localUser);
                if (res === null || res === undefined) {
                    this.router.navigate(["unauthorized"]);
                }
                else {
                    this.localUser = res;
                    switch (this.localUser.role_id) {
                        case 1:
                            break;
                        case 2:
                            this.router.navigate(["dashboard-summary"]);
                            //this.router.navigate(["dashboard/summary"]);
                            break;
                        case 3:
                            this.router.navigate(["welcome"]);
                            break;
                        default:
                            break;
                    }
                }
            }
            else {
                this.authService.logout();
            }
        });
        //this.getDataSummaryForDashboard();
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                animated: true,
                spinner: "bubbles",
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    dismissModal() {
        this.modalController.dismiss();
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
    getDataSummaryForDashboard() {
        this.presentLoadingWithOptions();
        this.authService.getAuthKey().then(apiKey => {
            this.firebaseService.fetchMyDashboard(apiKey)
                .subscribe((res) => {
                this.loadingController.dismiss();
                this.dashboardSummaryList = res.items;
                this.last_updated = new Date().getDate();
                //if(res.summary){
                //alert(JSON.stringify(res.summary));
                //}
                //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
                //this.toastService.presentToast(JSON.stringify(res));
                //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DASHBOARD_SUMMARY_CACHE, res.items);
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DASHBOARD_STATS_SUMMARY_CACHE, res.summary);
                console.log('#### Result Received and Saved ##### ' + JSON.stringify(res.summary));
                if (res.error) {
                    this.presentAlert(res.message);
                }
                else {
                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                        this.toastService.presentToast("Debug Message: All is well.");
                    }
                }
            }, (error) => {
                this.loadingController.dismiss();
                this.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DashboardPage);



/***/ }),

/***/ "./src/app/dashboard/dashboard.router.module.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/dashboard.router.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guard/auth.guard */ "./src/app/guard/auth.guard.ts");






const routes = [
    {
        path: '',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-summary-summary-module */ "dashboard-summary-summary-module").then(__webpack_require__.bind(null, /*! ../dashboard/summary/summary.module */ "./src/app/dashboard/summary/summary.module.ts")).then(m => m.SummaryPageModule),
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_4__["DashboardPage"],
        children: [
            {
                path: 'users-stats',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | dashboard-users-summary-users-summary-module */[__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-users-summary-users-summary-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/users-summary/users-summary.module */ "./src/app/dashboard/users-summary/users-summary.module.ts")).then(m => m.UsersSummaryPageModule)
                    }
                ]
            },
            {
                path: 'jobs-stats',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | dashboard-jobs-summary-jobs-summary-module */[__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-jobs-summary-jobs-summary-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/jobs-summary/jobs-summary.module */ "./src/app/dashboard/jobs-summary/jobs-summary.module.ts")).then(m => m.JobsSummaryPageModule)
                    }
                ]
            },
            {
                path: 'job-areas-stats',
                children: [
                    {
                        loadChildren: () => Promise.all(/*! import() | dashboard-job-areas-summary-job-areas-summary-module */[__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-job-areas-summary-job-areas-summary-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/job-areas-summary/job-areas-summary.module */ "./src/app/dashboard/job-areas-summary/job-areas-summary.module.ts")).then(m => m.JobAreasSummaryPageModule)
                    }
                ]
            },
            {
                path: 'jobareasstats',
                children: [
                    {
                        loadChildren: '../dashboard/job-areas-summary/job-areas-summary.module#JobAreasSummaryPageModule'
                    }
                ]
            },
            {
                path: 'summary',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-summary-summary-module */ "dashboard-summary-summary-module").then(__webpack_require__.bind(null, /*! ../dashboard/summary/summary.module */ "./src/app/dashboard/summary/summary.module.ts")).then(m => m.SummaryPageModule)
                    }
                ]
            },
            {
                path: 'countries-summary',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | dashboard-countries-summary-countries-summary-module */[__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-countries-summary-countries-summary-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/countries-summary/countries-summary.module */ "./src/app/dashboard/countries-summary/countries-summary.module.ts")).then(m => m.CountriesSummaryPageModule)
                    }
                ]
            },
            {
                path: 'job-areas-summary',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | dashboard-job-areas-summary-job-areas-summary-module */[__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-job-areas-summary-job-areas-summary-module")]).then(__webpack_require__.bind(null, /*! ../dashboard/job-areas-summary/job-areas-summary.module */ "./src/app/dashboard/job-areas-summary/job-areas-summary.module.ts")).then(m => m.JobAreasSummaryPageModule)
                    }
                ]
            }
        ]
    },
    // /app/ redirect
    {
        path: '',
        redirectTo: 'dashboard/users-stats',
        pathMatch: 'full'
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], DashboardRoutingModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map