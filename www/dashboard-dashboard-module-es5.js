function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bluspec Dashboard</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button [routerLink]=\"['/auth/logout']\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/logout.svg\" ></ion-icon>\n      </ion-button> -->\n     \n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"getDataSummaryForDashboard()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"page-home\">\n <ion-tabs *ngIf=\"localUser != null && localUser?.role_id == 1\">\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"summary\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/analytics.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Summary</ion-label>\n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"users-stats\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/people.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">People</ion-label>\n    </ion-tab-button>\n   \n    <ion-tab-button tab=\"jobs-stats\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/briefcase.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Jobs</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"job-areas-stats\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Job Areas</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"countries-summary\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Job Areas</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _dashboard_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard.router.module */
    "./src/app/dashboard/dashboard.router.module.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }];

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _dashboard_router_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-button {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbiIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");

    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(menu, route, modalController, alertController, storageService, firebaseService, authService, toastService, loadingController, router) {
        _classCallCheck(this, DashboardPage);

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

      _createClass(DashboardPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.getAuthCache().then(function (res) {
            if (res) {
              //this.userDataDebug = JSON.stringify(this.localUser);
              if (res === null || res === undefined) {
                _this.router.navigate(["unauthorized"]);
              } else {
                _this.localUser = res;

                switch (_this.localUser.role_id) {
                  case 1:
                    break;

                  case 2:
                    _this.router.navigate(["dashboard-summary"]); //this.router.navigate(["dashboard/summary"]);


                    break;

                  case 3:
                    _this.router.navigate(["welcome"]);

                    break;

                  default:
                    break;
                }
              }
            } else {
              _this.authService.logout();
            }
          }); //this.getDataSummaryForDashboard();
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
                      message: 'Please wait...',
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
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
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
        key: "getDataSummaryForDashboard",
        value: function getDataSummaryForDashboard() {
          var _this2 = this;

          this.presentLoadingWithOptions();
          this.authService.getAuthKey().then(function (apiKey) {
            _this2.firebaseService.fetchMyDashboard(apiKey).subscribe(function (res) {
              _this2.loadingController.dismiss();

              _this2.dashboardSummaryList = res.items;
              _this2.last_updated = new Date().getDate(); //if(res.summary){
              //alert(JSON.stringify(res.summary));
              //}
              //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
              //this.toastService.presentToast(JSON.stringify(res));
              //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));

              _this2.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DASHBOARD_SUMMARY_CACHE, res.items);

              _this2.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DASHBOARD_STATS_SUMMARY_CACHE, res.summary);

              console.log('#### Result Received and Saved ##### ' + JSON.stringify(res.summary));

              if (res.error) {
                _this2.presentAlert(res.message);
              } else {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                  _this2.toastService.presentToast("Debug Message: All is well.");
                }
              }
            }, function (error) {
              _this2.loadingController.dismiss();

              _this2.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
          });
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], DashboardPage);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.router.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/dashboard/dashboard.router.module.ts ***!
    \******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../guard/auth.guard */
    "./src/app/guard/auth.guard.ts");

    var routes = [{
      path: '',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard-summary-summary-module */
        "dashboard-summary-summary-module").then(__webpack_require__.bind(null,
        /*! ../dashboard/summary/summary.module */
        "./src/app/dashboard/summary/summary.module.ts")).then(function (m) {
          return m.SummaryPageModule;
        });
      },
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_4__["DashboardPage"],
      children: [{
        path: 'users-stats',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-users-summary-users-summary-module */
            [__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-users-summary-users-summary-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/users-summary/users-summary.module */
            "./src/app/dashboard/users-summary/users-summary.module.ts")).then(function (m) {
              return m.UsersSummaryPageModule;
            });
          }
        }]
      }, {
        path: 'jobs-stats',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-jobs-summary-jobs-summary-module */
            [__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-jobs-summary-jobs-summary-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/jobs-summary/jobs-summary.module */
            "./src/app/dashboard/jobs-summary/jobs-summary.module.ts")).then(function (m) {
              return m.JobsSummaryPageModule;
            });
          }
        }]
      }, {
        path: 'job-areas-stats',
        children: [{
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-job-areas-summary-job-areas-summary-module */
            [__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-job-areas-summary-job-areas-summary-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/job-areas-summary/job-areas-summary.module */
            "./src/app/dashboard/job-areas-summary/job-areas-summary.module.ts")).then(function (m) {
              return m.JobAreasSummaryPageModule;
            });
          }
        }]
      }, {
        path: 'jobareasstats',
        children: [{
          loadChildren: '../dashboard/job-areas-summary/job-areas-summary.module#JobAreasSummaryPageModule'
        }]
      }, {
        path: 'summary',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dashboard-summary-summary-module */
            "dashboard-summary-summary-module").then(__webpack_require__.bind(null,
            /*! ../dashboard/summary/summary.module */
            "./src/app/dashboard/summary/summary.module.ts")).then(function (m) {
              return m.SummaryPageModule;
            });
          }
        }]
      }, {
        path: 'countries-summary',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-countries-summary-countries-summary-module */
            [__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-countries-summary-countries-summary-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/countries-summary/countries-summary.module */
            "./src/app/dashboard/countries-summary/countries-summary.module.ts")).then(function (m) {
              return m.CountriesSummaryPageModule;
            });
          }
        }]
      }, {
        path: 'job-areas-summary',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-job-areas-summary-job-areas-summary-module */
            [__webpack_require__.e("default~dashboard-countries-summary-countries-summary-module~dashboard-job-areas-summary-job-areas-s~02648072"), __webpack_require__.e("dashboard-job-areas-summary-job-areas-summary-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/job-areas-summary/job-areas-summary.module */
            "./src/app/dashboard/job-areas-summary/job-areas-summary.module.ts")).then(function (m) {
              return m.JobAreasSummaryPageModule;
            });
          }
        }]
      }]
    }, // /app/ redirect
    {
      path: '',
      redirectTo: 'dashboard/users-stats',
      pathMatch: 'full'
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], DashboardRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map