function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-experiences-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/work-experiences.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/work-experiences.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserWorkExperiencesWorkExperiencesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/people/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Work Experiences</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!loading\" fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openAddItemModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n  <ion-row class=\"expiration-countdown\" *ngIf=\"!loading && items?.length > 0 && totalExpInfo\">\n    <span class=\"expiration-lead\">{{totalExpInfo}}</span>\n  </ion-row>\n\n  <ion-list class=\"items-list\" *ngIf=\"items?.length > 0  && !loading\">\n    <ion-item tappable class=\"list-item\" *ngFor=\"let item of items\" (click)=\"onItemSelected(item)\">\n\n      <ion-row class=\"user-row\">\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n\n            <h3 class=\"user-name\" *ngIf=\"item.designation\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.designation\"></app-text-shell>\n            </h3>\n\n            <h5 class=\"user-age\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.company\"></app-text-shell>\n            </h5>\n\n            <h5 class=\"user-age\" *ngIf=\"item.current\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.startDate?.concat(' to Current')\"></app-text-shell>\n            </h5>\n            \n            <h5 class=\"user-age\" *ngIf=\"!item.current\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.startDate?.concat(' - ').concat(item.endDate)\"></app-text-shell>\n            </h5>\n\n            <h5 class=\"user-age\" *ngIf=\"item.role\">\n              <app-text-shell animation=\"bouncing\" [data]=\"'Role: '+item.role\"></app-text-shell>\n            </h5>\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <!------- Empty View ------->\n  <ion-grid style=\"height: 100%\" *ngIf=\"items?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/business.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;font-size:20px;font-weight:500;\"> No Work Experience</h5>\n      <h5 *ngIf=\"selfView\" style=\"text-align: center;color: #555555;font-size:16px;margin-top: 3px;padding-left:20px;padding-right:20px;\"> Have you worked in any company before? List all your work experiences to get better job opportunities. Your experience matters!.</h5>\n      <ion-button  *ngIf=\"selfView\" (click)=\"openAddItemModal()\" style=\"text-align: center;\" class=\"upload-picture-btn\" color=\"primary\" expand=\"cover\" fill=\"outline\">\n        GET STARTED</ion-button>\n\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n     <!------- Loading View ------->\n     <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n        <h5 style=\"text-align: center;color: #555555;\">Loading...</h5>\n        </ion-row>\n      </ion-grid>\n     <!------- Loading View ------->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/bluspecstyles/listing.ios.scss":
  /*!************************************************!*\
    !*** ./src/app/bluspecstyles/listing.ios.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBluspecstylesListingIosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmxpc3QtaXRlbSB7XG4gICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAubGlzdC1pdGVtIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bluspecstyles/listing.shell.scss":
  /*!**************************************************!*\
    !*** ./src/app/bluspecstyles/listing.shell.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBluspecstylesListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/work-experiences/work-experiences.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/work-experiences/work-experiences.module.ts ***!
    \******************************************************************/

  /*! exports provided: WorkExperiencesPageModule */

  /***/
  function srcAppUserWorkExperiencesWorkExperiencesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkExperiencesPageModule", function () {
      return WorkExperiencesPageModule;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _work_experiences_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./work-experiences.page */
    "./src/app/user/work-experiences/work-experiences.page.ts");
    /* harmony import */


    var _work_experiences_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./work-experiences.resolver */
    "./src/app/user/work-experiences/work-experiences.resolver.ts");

    var routes = [{
      path: '',
      component: _work_experiences_page__WEBPACK_IMPORTED_MODULE_8__["WorkExperiencesPage"],
      resolve: {
        data: _work_experiences_resolver__WEBPACK_IMPORTED_MODULE_9__["WorkExperiencesResolver"]
      }
    }];

    var WorkExperiencesPageModule = function WorkExperiencesPageModule() {
      _classCallCheck(this, WorkExperiencesPageModule);
    };

    WorkExperiencesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_work_experiences_page__WEBPACK_IMPORTED_MODULE_8__["WorkExperiencesPage"]],
      providers: [_work_experiences_resolver__WEBPACK_IMPORTED_MODULE_9__["WorkExperiencesResolver"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
    })], WorkExperiencesPageModule);
    /***/
  },

  /***/
  "./src/app/user/work-experiences/work-experiences.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/user/work-experiences/work-experiences.page.ts ***!
    \****************************************************************/

  /*! exports provided: WorkExperiencesPage */

  /***/
  function srcAppUserWorkExperiencesWorkExperiencesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkExperiencesPage", function () {
      return WorkExperiencesPage;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _create_create_work_experiences_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./create/create-work-experiences.modal */
    "./src/app/user/work-experiences/create/create-work-experiences.modal.ts");
    /* harmony import */


    var _update_update_work_experiences_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./update/update-work-experiences.modal */
    "./src/app/user/work-experiences/update/update-work-experiences.modal.ts");

    var WorkExperiencesPage =
    /*#__PURE__*/
    function () {
      function WorkExperiencesPage(modalController, route, router, storageService, authService, toastService, userService) {
        _classCallCheck(this, WorkExperiencesPage);

        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.authService = authService;
        this.toastService = toastService;
        this.userService = userService;
        this.loading = true;
        this.selfView = false;
        this.searchQuery = '';
        this.totalExpInfo = "";
      }

      _createClass(WorkExperiencesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //  this.route.data.subscribe(data =>{
          //    console.log("USING ANGULAR RESOLVERS:"+JSON.stringify(data));
          //    this.items = data.result;
          //    this.loading = false;
          //  });

          /*****************************
           this.route.data.subscribe((resolvedRouteData) => {
            const profileDataStore = resolvedRouteData['data'];
            console.log("USING ANGULAR RESOLVERS :"+JSON.stringify(profileDataStore));
            profileDataStore.state.subscribe(
              (state) => {
                this.items = state;
              },
              (error) => {}
            );
          },
          (error) => {});
          ****************************/
          this.userService.invokeWorkExperienceListChangeEvent.subscribe(function (value) {
            if (value != null && value !== undefined) {
              _this.items = value.result;
              _this.totalExpInfo = value.totalExperience;
              _this.loading = false;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                console.log("/***** SYNC DATA : " + JSON.stringify(value));

                _this.toastService.presentToast("Note: " + value.message);
              }
            }
          });
          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;
            _this.user_profile_id = _this.localUser.id;

            _this.route.paramMap.subscribe(function (params) {
              if (params && params.has("user_id")) {
                _this.user_profile_id = params.get("user_id");

                if (_this.user_profile_id <= 0) {
                  _this.router.navigate(['page-not-found']);
                } //Validate the Permissions


                if (_this.localUser.id !== _this.user_profile_id) {
                  if (_this.localUser.role_id !== 1) {
                    _this.router.navigate(['unauthorized']);
                  }
                } else {
                  _this.selfView = true;
                }
              }
            });

            _this.loadItems();
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.loadItems();
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this2 = this;

          //FIND USER SESSION AND HIT API
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].AUTH).then(function (res) {
            if (res) {
              /********** THE CALLER ***********/
              _this2.userService.getWorkExperienceDataSource(res.api_key, _this2.user_profile_id).subscribe(function (results) {
                if (results) {
                  //console.log("/********* DETAILS API RESPONSE *************/ "+JSON.stringify(results));
                  if (!results.error) {
                    _this2.userService.invokeWorkExperienceListChangeEvent.next(results);
                  } else {
                    _this2.toastService.presentToast(results.message);
                  }
                }
              }, function (error) {
                _this2.toastService.presentToast('Looks like there is a Network Issue.');
              }, function () {// complete callback  
              });
              /************ THE CALLER ***********/

            } else {
              _this2.toastService.presentToast("Invalid token. You are not authorized to make this request.");
            }
          }); //END OF CALL 
        }
      }, {
        key: "openAddItemModal",
        value: function openAddItemModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _create_create_work_experiences_modal__WEBPACK_IMPORTED_MODULE_9__["CreateWorkExperiencesModal"],
                      cssClass: "fullscreen-modal",
                      componentProps: {
                        'user_id': this.user_profile_id
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onItemSelected",
        value: function onItemSelected(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _update_update_work_experiences_modal__WEBPACK_IMPORTED_MODULE_10__["UpdateWorkExperiencesModal"],
                      componentProps: {
                        'user': item
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return WorkExperiencesPage;
    }();

    WorkExperiencesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    WorkExperiencesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-experiences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-experiences.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/work-experiences.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], WorkExperiencesPage);
    /***/
  },

  /***/
  "./src/app/user/work-experiences/work-experiences.resolver.ts":
  /*!********************************************************************!*\
    !*** ./src/app/user/work-experiences/work-experiences.resolver.ts ***!
    \********************************************************************/

  /*! exports provided: WorkExperiencesResolver */

  /***/
  function srcAppUserWorkExperiencesWorkExperiencesResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkExperiencesResolver", function () {
      return WorkExperiencesResolver;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var WorkExperiencesResolver =
    /*#__PURE__*/
    function () {
      function WorkExperiencesResolver(userService, authService) {
        var _this3 = this;

        _classCallCheck(this, WorkExperiencesResolver);

        this.userService = userService;
        this.authService = authService;
        this.userID = 0;
        authService.getAuthCache().then(function (result) {
          _this3.apiKey = result;
          _this3.userID = result.id;
        });
      }

      _createClass(WorkExperiencesResolver, [{
        key: "resolve",
        value: function resolve(route) {
          // if(route.paramMap.has("id")){
          //   console.log("/******** USING ActivatedRouteSnapshot ID ********/"+route.paramMap.get("id"));
          // }
          // if(route.queryParams["user_id"]){
          //   console.log("/******** USING ActivatedRouteSnapshot @@ user_id ********/"+route.paramMap["user_id"]);
          // }
          if (route.paramMap.has("user_id")) {
            this.userID = route.paramMap.get("user_id");
            console.log("/******** USING ActivatedRouteSnapshot user_id ********/" + this.userID + " => " + this.apiKey);
          } //console.log("/************** Resolver ActivatedRouteSnapshot *************** */"+route.url);


          var dataSource = this.userService.getWorkExperienceDataSource(this.apiKey, this.userID);
          var dataStore = this.userService.getWorkExperienceStore(dataSource);
          return dataStore;
        }
      }]);

      return WorkExperiencesResolver;
    }();

    WorkExperiencesResolver.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    WorkExperiencesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], WorkExperiencesResolver);
    /***/
  }
}]);
//# sourceMappingURL=work-experiences-module-es5.js.map