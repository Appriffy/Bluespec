function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-company-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/details/company-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/details/company-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompaniesDetailsCompanyDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"companies/listing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Company Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openItemUpdateModal()\" *ngIf=\"localUser?.role_id == 1 || selfView\">\n        Edit\n      </ion-button>\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"favouriteCompany()\" *ngIf=\"localUser?.role_id !== 1 || !selfView\">\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n  <!------ Top Header Main ---->\n  <div class=\"recipes-wrapper\">\n    <div class=\"recipes-list\">\n      <div class=\"recipe-item\">\n\n        <!----- SECTION 1: BASIC ITEM DETAILS ----->\n        <app-image-shell class=\"recipe-cover-image\" [mode]=\"'cover'\" [src]=\"'./assets/images/bg.jpg'\">\n          <app-aspect-ratio [ratio]=\"{w:12, h:2}\">\n          </app-aspect-ratio>\n        </app-image-shell>\n\n        <div class=\"chef-picture-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell style=\"background-color: white;border-radius: 10px;padding:5px;\" class=\"chef-picture-image\" [src]=\"user?.logo\" [alt]=\"'Company Image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </div>\n     \n        <div class=\"recipe-call-to-action\">\n         \n          <h3 class=\"recipe-name\" style=\"margin-top:2px;margin-bottom:2px;\">\n            <app-text-shell [data]=\"user?.title\"></app-text-shell>\n          </h3>\n\n          <h5 class=\"user-author\" *ngIf=\"user?.tagline\" style=\"font-size:13px;margin-top:2px;margin-bottom:5px;\">\n            <app-text-shell animation=\"bouncing\" [data]=\"user?.tagline\"></app-text-shell>\n          </h5>\n\n         \n          <!----- SECTION 3: LIST JOB SKILLS ----->\n  <ion-row class=\"details-tags\" style=\"margin-top:5px;\" *ngIf=\"user?.jobAreas.length > 0\">\n    <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of user?.jobAreas\">\n      <span class=\"item-tag\">\n        <app-text-shell [data]=\"tag.title\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n<!----- SECTION 3: LIST JOB SKILLS ----->\n    \n\n<hr class=\"details-divider\">\n<h5 class=\"user-name\" style=\"font-size:15px;line-height:17px;margin-top: 5px;border-bottom: 1 px solid #777;\">\n<app-text-shell animation=\"bouncing\" [data]=\"user?.description\"></app-text-shell>\n</h5>\n\n          <a class=\"user-name\" *ngIf=\"user?.website\" style=\"color:blue;font-size:14px;font-weight: bold;text-decoration: solid;\"\n          [href]=\"'http://'+user?.website\" target=\"_blank\">\n            <p> <app-text-shell animation=\"bouncing\" [data]=\"user?.website\"></app-text-shell></p>\n          </a>\n             \n        </div>\n<!----- SECTION 1: BASIC ITEM DETAILS ----->\n\n  <ion-row style=\"justify-content: center;align-content: center;text-align: center;\">\n    <ion-col size=\"12\" style=\"justify-content: center;justify-content: center;\">\n      <a *ngIf=\"user?.linkedin\" style=\"text-align: center;text-decoration: solid;\" class=\"go-home-btn\" [href]=\"'https://'+user?.linkedin\" target=\"_blank\"> \n        <ion-button fill=\"solid\" color=\"primary\">\n          <ion-icon src=\"./assets/sample-icons/side-menu/linkedin.svg\"></ion-icon> &nbsp;&nbsp;LinkedIn\n        </ion-button>\n      </a>\n      \n      <a *ngIf=\"user?.fb_link\" style=\"text-align: center;text-decoration: solid;justify-content: center;\" class=\"go-home-btn\" [href]=\"'https://'+user?.fb_link\" target=\"_blank\"> \n        <ion-button  fill=\"solid\" color=\"facebook\">\n          <ion-icon src=\"./assets/sample-icons/side-menu/facebook.svg\"></ion-icon> &nbsp;&nbsp;Facebook\n        </ion-button>\n      </a>\n      \n      <a *ngIf=\"user?.twitter_link\" style=\"text-align: center;text-decoration: solid;justify-content: center;\" class=\"go-home-btn\" [href]=\"'https://'+user?.twitter_link\" target=\"_blank\"> \n        <ion-button fill=\"solid\" color=\"twitter\">\n          <ion-icon src=\"./assets/sample-icons/side-menu/twitter.svg\"></ion-icon> &nbsp;&nbsp;Twitter\n        </ion-button>\n      </a>\n    </ion-col>\n    </ion-row>\n\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/companies/details/company-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/companies/details/company-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: CompanyDetailsPageModule */

  /***/
  function srcAppCompaniesDetailsCompanyDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailsPageModule", function () {
      return CompanyDetailsPageModule;
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


    var _company_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./company-details.page */
    "./src/app/companies/details/company-details.page.ts");
    /* harmony import */


    var _company_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./company-details.resolver */
    "./src/app/companies/details/company-details.resolver.ts");
    /* harmony import */


    var _companies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../companies.service */
    "./src/app/companies/companies.service.ts");

    var routes = [{
      path: '',
      component: _company_details_page__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailsPage"],
      resolve: {
        data: _company_details_resolver__WEBPACK_IMPORTED_MODULE_8__["CompanyDetailsResolver"]
      }
    }];

    var CompanyDetailsPageModule = function CompanyDetailsPageModule() {
      _classCallCheck(this, CompanyDetailsPageModule);
    };

    CompanyDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_company_details_page__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailsPage"]],
      providers: [_companies_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"], _company_details_resolver__WEBPACK_IMPORTED_MODULE_8__["CompanyDetailsResolver"]]
    })], CompanyDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/companies/details/company-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/companies/details/company-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: CompanyDetailsPage */

  /***/
  function srcAppCompaniesDetailsCompanyDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailsPage", function () {
      return CompanyDetailsPage;
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


    var _companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../companies.service */
    "./src/app/companies/companies.service.ts");
    /* harmony import */


    var _update_update_company_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../update/update-company.modal */
    "./src/app/companies/update/update-company.modal.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var CompanyDetailsPage =
    /*#__PURE__*/
    function () {
      function CompanyDetailsPage(firebaseService, modalController, authService, router, route) {
        _classCallCheck(this, CompanyDetailsPage);

        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.selfView = false;
      } // relatedUsers: Array<FirebaseListingItemModel> & ShellModel;


      _createClass(CompanyDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.company_id = params.get("id");

            if (_this.company_id <= 0) {
              _this.router.navigate(['page-not-found']);
            }
          });
          var postData = {
            company_id: this.company_id
          };
          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;

            _this.fetchCompanyDetail(_this.localUser.api_key, postData);
          });
        }
      }, {
        key: "fetchCompanyDetail",
        value: function fetchCompanyDetail(apiKey, postData) {
          var _this2 = this;

          this.firebaseService.getDetailsDataSource(apiKey, postData).subscribe(function (res) {
            if (res) {
              _this2.user = res; //alert(this.user.user_id+" and "+this.localUser.id);
              //this.user !== undefined && 

              if (_this2.user.user_id == _this2.localUser.id) {
                //alert(JSON.stringify(this.user));
                _this2.selfView = true;
              }

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                console.log("Company Detail Profile: " + JSON.stringify(_this2.user));
              }

              if (res.error) {
                _this2.router.navigate(['page-not-found']);
              }
            }
          }, function (error) {
            console.log('Looks like there is a Network Issue.');
          });
        }
      }, {
        key: "openItemUpdateModal",
        value: function openItemUpdateModal() {
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
                      component: _update_update_company_modal__WEBPACK_IMPORTED_MODULE_5__["UpdateCompanyModal"],
                      componentProps: {
                        'user': this.user
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
        key: "isShell",
        get: function get() {
          return this.user && this.user.isShell ? true : false;
        }
      }]);

      return CompanyDetailsPage;
    }();

    CompanyDetailsPage.ctorParameters = function () {
      return [{
        type: _companies_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompanyDetailsPage.prototype, "isShell", null);
    CompanyDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/details/company-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/details.page.scss */
      "./src/app/bluspecstyles/details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/details.shell.scss */
      "./src/app/bluspecstyles/details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CompanyDetailsPage);
    /***/
  },

  /***/
  "./src/app/companies/details/company-details.resolver.ts":
  /*!***************************************************************!*\
    !*** ./src/app/companies/details/company-details.resolver.ts ***!
    \***************************************************************/

  /*! exports provided: CompanyDetailsResolver */

  /***/
  function srcAppCompaniesDetailsCompanyDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailsResolver", function () {
      return CompanyDetailsResolver;
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


    var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../companies.service */
    "./src/app/companies/companies.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var CompanyDetailsResolver =
    /*#__PURE__*/
    function () {
      function CompanyDetailsResolver(firebaseService, authService) {
        _classCallCheck(this, CompanyDetailsResolver);

        this.firebaseService = firebaseService;
        this.authService = authService;
      } //Error in Api key


      _createClass(CompanyDetailsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var userId = route.paramMap.get('company_id');
          var postData = {
            company_id: userId
          };
          var combinedUserDataSource = this.firebaseService.getDetailsDataSource(userId, postData);
          var combinedUserDataStore = this.firebaseService.getDetailsStore(combinedUserDataSource);
          return {
            user: combinedUserDataStore
          };
        }
      }]);

      return CompanyDetailsResolver;
    }();

    CompanyDetailsResolver.ctorParameters = function () {
      return [{
        type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    CompanyDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], CompanyDetailsResolver);
    /***/
  }
}]);
//# sourceMappingURL=details-company-details-module-es5.js.map