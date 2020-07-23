function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Notifications\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n    <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n      <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"notifications-content\">\n\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Updates</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n     <!------- Empty View ------->\n     <ion-grid style=\"height: 100%\" *ngIf=\"notifications?.length <= 0 && !loading\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-icon src=\"./assets/sample-icons/side-menu/notifications.svg\" style=\"color:#555555;margin:0px;font-size: 48px;\"></ion-icon>\n        <h4 class=\"empty-list-message\" style=\"color:#555555;margin-top:10px;margin-left:20px;margin-right:20px;text-align: center;\">\n          No notification yet. Check back again.\n        </h4>\n        </ion-row>\n      </ion-grid>\n     <!------- Empty View ------->\n\n  <ng-container *ngIf=\"notifications && !loading\">\n    <ion-item-group>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications\" [routerLink]=\"['/'+notification.link]\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"1\" class=\"ion-align-items-center\">\n            <!-- <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\n            </app-aspect-ratio> -->\n            <ion-icon src=\"./assets/sample-icons/side-menu/notifications.svg\" style=\"font-size: 28px;\"></ion-icon>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.title }}</h2>\n            <p class=\"details-description\">{{ notification.message }}</p>\n            <!-- <p class=\"details-description\">{{ notification.data_title }} : {{ notification.link }}{{ notification.data_id }}</p> -->\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date_created }}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n   \n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");
    /* harmony import */


    var _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../notifications/notifications.resolver */
    "./src/app/notifications/notifications.resolver.ts");
    /* harmony import */


    var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../notifications/notifications.service */
    "./src/app/notifications/notifications.service.ts");

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"],
        resolve: {
          data: _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"]
        }
      }])],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]],
      providers: [_notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"], _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notifications/notifications.page.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var _notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.service */
    "./src/app/notifications/notifications.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");

    var NotificationsPage =
    /*#__PURE__*/
    function () {
      function NotificationsPage(route, menu, authService, toastService, notiService) {
        _classCallCheck(this, NotificationsPage);

        this.route = route;
        this.menu = menu;
        this.authService = authService;
        this.toastService = toastService;
        this.notiService = notiService;
        this.loading = true;
      }

      _createClass(NotificationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.route && this.route.data) {
            this.route.data.subscribe(function (resolvedData) {
              var dataSource = resolvedData['data'];

              if (dataSource) {
                dataSource.source.subscribe(function (pageData) {
                  if (pageData) {
                    _this.notifications = pageData.result;
                    _this.loading = false;
                  }
                });
              }
            });
          }

          this.notiService.invokeListChangeEvent.subscribe(function (value) {
            _this.notifications = value;
            _this.loading = false;

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].DEV_MODE) {
              console.log("Notifier Subject Sync: " + JSON.stringify(value));
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          //Subscribe to any auth changes event
          //console.log("ionViewDidEnter");
          if (!this.menu.isEnabled) this.menu.enable(true);
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              _this2.localUser = authData; //this.notiService.getData(this.localUser.api_key);

              _this2.loadItems();
            }
          });
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this3 = this;

          this.loading = true;
          this.notiService.getData(this.localUser.api_key).subscribe(function (res) {
            if (!res.error) {
              console.log("Notifier API Response: " + JSON.stringify(res)); // this.notifications = res.result;

              _this3.notiService.invokeListChangeEvent.next(res.result);

              _this3.toastService.presentToast(res.message);
            }
          }, function (error) {
            alert('Looks like there is a Network Issue while fetching notifications.');
          });
          /******** ENDS FETCH *******/
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]
      }];
    };

    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/notifications.page.scss */
      "./src/app/notifications/styles/notifications.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/notifications.shell.scss */
      "./src/app/notifications/styles/notifications.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])], NotificationsPage);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/notifications/notifications.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationsResolver */

  /***/
  function srcAppNotificationsNotificationsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsResolver", function () {
      return NotificationsResolver;
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


    var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notifications.service */
    "./src/app/notifications/notifications.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var NotificationsResolver =
    /*#__PURE__*/
    function () {
      function NotificationsResolver(notificationsService, authService) {
        _classCallCheck(this, NotificationsResolver);

        this.notificationsService = notificationsService;
        this.authService = authService;
      }

      _createClass(NotificationsResolver, [{
        key: "resolve",
        value: function resolve() {
          var _this4 = this;

          // Base Observable (where we get data from)
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              var dataObservable = _this4.notificationsService.getData(authData.api_key);

              return {
                source: dataObservable
              };
            }
          });
        }
      }]);

      return NotificationsResolver;
    }();

    NotificationsResolver.ctorParameters = function () {
      return [{
        type: _notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    NotificationsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], NotificationsResolver);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/notifications/notifications.service.ts ***!
    \********************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppNotificationsNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var NotificationsService =
    /*#__PURE__*/
    function () {
      function NotificationsService(http) {
        _classCallCheck(this, NotificationsService);

        this.http = http;
        this.invokeListChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(NotificationsService, [{
        key: "getData",
        value: function getData(api_key) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': api_key
            })
          };
          var apiUrl = 'apis/notifications';
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + apiUrl;
          console.log('Just Hitting => ' + url + ' ====> ' + api_key);
          return this.http.get(url, httpOptions);
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], NotificationsService);
    /***/
  },

  /***/
  "./src/app/notifications/styles/notifications.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/notifications/styles/notifications.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsStylesNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.notifications-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin);\n}\n\n.notifications-content .notification-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notifications-content .notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.notifications-content .notification-item .details-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notifications-content .notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notifications-content .notification-item .details-wrapper .details-description {\n  font-size: 13px;\n  font-weight: 400;\n  color: #444444;\n  margin: 0px;\n}\n\n.notifications-content .notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notifications-content .notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcc3R5bGVzXFxub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBQTtBQ0RGOztBRE1FO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQ0hKOztBRE1FO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ0xKOztBRE9JO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ05OOztBRFNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ1BOOztBRFNNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNELGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ1BQOztBRFVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNSUjs7QURZSTtFQUNFLHNCQUFBO0FDVk47O0FEWU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ubm90aWZpY2F0aW9ucy1jb250ZW50IHtcbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUtd3JhcHBlciB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAubm90aWZpY2F0aW9uLWRhdGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLm5vdGlmaWNhdGlvbnMtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBtYXJnaW46IDBweDtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRhdGUtd3JhcHBlciAubm90aWZpY2F0aW9uLWRhdGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/notifications/styles/notifications.shell.scss":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/styles/notifications.shell.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsStylesNotificationsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.notification-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcc3R5bGVzXFxub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */";
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map