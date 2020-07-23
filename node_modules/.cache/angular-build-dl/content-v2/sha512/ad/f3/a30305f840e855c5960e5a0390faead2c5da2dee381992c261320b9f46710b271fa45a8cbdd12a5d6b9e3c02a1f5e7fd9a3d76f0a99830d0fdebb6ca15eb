function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"switchersForm\" (ngSubmit)=\"saveSettings()\">\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"filters-content\">\n  <ion-row class=\"expiration-countdown\">\n    <span class=\"expiration-lead\">For Development Purpose Only</span>\n  </ion-row>\n\n  <ion-item-group class=\"filters-group\">\n      <ion-list class=\"toggle-list\" lines=\"full\">\n\n        <ion-item-divider>\n          <ion-label>Debugging Mode Settings</ion-label>\n        </ion-item-divider>\n        <ion-item class=\"toggle-item\">\n          <ion-label class=\"toggle-label\">Debug Mode</ion-label>\n          <ion-toggle color=\"primary\" formControlName=\"debugMode\"></ion-toggle>\n        </ion-item>\n        <ion-item class=\"toggle-item\">\n          <ion-label class=\"toggle-label\">Development Mode</ion-label>\n          <ion-toggle color=\"primary\" formControlName=\"devMode\"></ion-toggle>\n        </ion-item>\n\n        <ion-item-divider>\n          <ion-label>Advanced Settings</ion-label>\n        </ion-item-divider>\n\n        <ion-item class=\"toggle-item\">\n          <ion-label class=\"toggle-label\">Enable Push Notifications</ion-label>\n          <ion-toggle color=\"primary\" formControlName=\"enablePush\"></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"toggle-item\">\n          <ion-label class=\"toggle-label\">Enable Lazy Loading</ion-label>\n          <ion-toggle color=\"primary\" formControlName=\"enableLoading\"></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"toggle-item\">\n          <ion-label class=\"toggle-label\">Strict Mode</ion-label>\n          <ion-toggle color=\"primary\" formControlName=\"strictMode\"></ion-toggle>\n        </ion-item>\n\n\n        <ion-item-divider>\n          <ion-label>Sync Duration Period</ion-label>\n        </ion-item-divider>\n        <ion-radio-group formControlName=\"syncTimer\">\n          <ion-row class=\"radio-tags\">\n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">Hourly</ion-label>\n              <ion-radio value=\"1\"></ion-radio>\n            </ion-item>\n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">\n                <span>Daily</span>\n              </ion-label>\n              <ion-radio value=\"24\"></ion-radio>\n            </ion-item>\n           \n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">\n                <span>Never</span>\n              </ion-label>\n              <ion-radio value=\"0\"></ion-radio>\n            </ion-item>\n          </ion-row>\n        </ion-radio-group>\n\n      </ion-list>\n    \n  </ion-item-group>\n</ion-content>\n\n<ion-footer>\n  <ion-row class=\"form-actions-wrapper\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!switchersForm.valid\">SAVE SETTINGS</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./src/app/dbmodels/settings-model.ts":
  /*!********************************************!*\
    !*** ./src/app/dbmodels/settings-model.ts ***!
    \********************************************/

  /*! exports provided: SettingsModel */

  /***/
  function srcAppDbmodelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModel", function () {
      return SettingsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SettingsModel = function SettingsModel() {
      _classCallCheck(this, SettingsModel);

      this.debugMode = false;
      this.devMode = false;
      this.syncTimer = 60;
      this.enablePush = false;
      this.enableLoading = false;
      this.strictMode = false;
    };
    /***/

  },

  /***/
  "./src/app/services/loading-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/loading-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: LoadingServiceService */

  /***/
  function srcAppServicesLoadingServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingServiceService", function () {
      return LoadingServiceService;
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

    var LoadingServiceService =
    /*#__PURE__*/
    function () {
      function LoadingServiceService(loadingController) {
        _classCallCheck(this, LoadingServiceService);

        this.loadingController = loadingController; //https://stackoverflow.com/questions/52574448/ionic-4-loading-controller-dismiss-is-called-before-present-which-will-ke

        this.isLoading = false;
      }

      _createClass(LoadingServiceService, [{
        key: "present",
        value: function present(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: message,
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('Abort Loading');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.next = 3;
                    return this.loadingController.dismiss();

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoadingServiceService;
    }();

    LoadingServiceService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoadingServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], LoadingServiceService);
    /***/
  },

  /***/
  "./src/app/settings/settings.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.module.ts ***!
    \*********************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/settings/settings.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }];

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/settings/settings.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw4Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBREdJO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIH1cclxuXHJcbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogODtcclxuICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgIC5leHBpcmF0aW9uLWxlYWQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leHBpcmF0aW9uLWNvdW50ZG93biAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/settings.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/settings/settings.page.ts ***!
    \*******************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _dbmodels_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dbmodels/settings-model */
    "./src/app/dbmodels/settings-model.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_loading_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/loading-service.service */
    "./src/app/services/loading-service.service.ts");

    var SettingsPage =
    /*#__PURE__*/
    function () {
      function SettingsPage(authService, storageService, loadingController, router) {
        _classCallCheck(this, SettingsPage);

        this.authService = authService;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.router = router;
      }

      _createClass(SettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.switchersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            debugMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            devMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            enablePush: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            enableLoading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            strictMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            syncTimer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
          });
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              if (authData.role_id !== 1) {
                _this2.router.navigateByUrl("/welcome");
              }
            } else {
              _this2.authService.logout();
            }
          });
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].APP_SETTINGS).then(function (appSettings) {
            if (appSettings) {
              console.log("Settings exist!");
              console.log("Settings => " + JSON.stringify(appSettings));
              _this2.settingsModel = appSettings;
            } else {
              console.log("No settings exist!");
              _this2.settingsModel = new _dbmodels_settings_model__WEBPACK_IMPORTED_MODULE_3__["SettingsModel"]();
            }

            _this2.updateSettingsForm();
          });
        }
      }, {
        key: "updateSettingsForm",
        value: function updateSettingsForm() {
          this.switchersForm.controls.debugMode.patchValue(this.settingsModel.debugMode);
          this.switchersForm.controls.devMode.patchValue(this.settingsModel.devMode);
          this.switchersForm.controls.enablePush.patchValue(this.settingsModel.enablePush);
          this.switchersForm.controls.enableLoading.patchValue(this.settingsModel.enableLoading);
          this.switchersForm.controls.strictMode.patchValue(this.settingsModel.strictMode);
          this.switchersForm.controls.syncTimer.patchValue(this.settingsModel.syncTimer);
        }
      }, {
        key: "saveSettings",
        value: function saveSettings() {
          var _this3 = this;

          this.loadingController.present('Saving Settings'); //console.log('########## Final Result #####: '+this.switchersForm.value);

          this.settingsModel.debugMode = this.switchersForm.value.debugMode;
          this.settingsModel.devMode = this.switchersForm.value.devMode;
          this.settingsModel.enableLoading = this.switchersForm.value.enableLoading;
          this.settingsModel.enablePush = this.switchersForm.value.enablePush;
          this.settingsModel.strictMode = this.switchersForm.value.strictMode;
          this.settingsModel.syncTimer = this.switchersForm.value.syncTimer;
          this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].APP_SETTINGS, this.settingsModel);
          this.loadingController.dismiss().then(function () {
            _this3.router.navigateByUrl("/dashboard/summary");
          }); //this.router.navigateByUrl("/dashboard/summary");
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _services_loading_service_service__WEBPACK_IMPORTED_MODULE_8__["LoadingServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../bluspecstyles/filter.page.scss */
      "./src/app/bluspecstyles/filter.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/settings/settings.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _services_loading_service_service__WEBPACK_IMPORTED_MODULE_8__["LoadingServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map