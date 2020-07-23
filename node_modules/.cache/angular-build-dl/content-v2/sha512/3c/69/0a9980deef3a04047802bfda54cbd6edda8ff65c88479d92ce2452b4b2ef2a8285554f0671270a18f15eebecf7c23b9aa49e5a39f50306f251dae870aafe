function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-companies-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/listing/companies.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/listing/companies.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompaniesListingCompaniesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>List Companies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadCompanies()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"createNewCompany()\" *ngIf=\"localUser?.role_id == 1 || localUser?.role_id == 2\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search companies...\"></ion-searchbar>\n      </ion-col>\n      <!-- <ion-col class=\"call-to-action-col\">\n       \n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showFilterScreen()\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-col> -->\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n   <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Companies...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing && listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/business.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;columns: #555555;\">No Company found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">     \n        <ion-item class=\"list-item\" *ngFor=\"let item of listing\" [routerLink]=\"['/companies/details', item.id]\">\n   \n          <ion-row class=\"user-row\">\n            <ion-col size=\"2\" class=\"user-image-wrapper\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item?.logo\" [alt]=\"'Company Logo'\"></app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h3 class=\"user-name\">\n                  <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n                </h3>\n           \n       <h5 class=\"user-age\" *ngIf=\"item?.tagline\">\n        <app-text-shell animation=\"bouncing\" [data]=\"item?.tagline\"></app-text-shell>\n      </h5>\n\n      <!-- <h5 class=\"user-age\" *ngIf=\"item?.website\">\n        <app-text-shell animation=\"bouncing\" [data]=\"item?.website\"></app-text-shell>\n      </h5> -->\n    \n      <div *ngIf=\"!item.is_published\">\n       <ion-badge class=\"schedule-closed\" color=\"danger\">Not Approved</ion-badge>\n       </div>\n\n       <!-- <div class=\"amenities-wrapper\" style=\"margin-left: 0px;\">\n        <ion-row class=\"amenities-tags\" style=\"margin-left: 0px;\">\n          <ion-col class=\"tag-wrapper\" *ngFor=\"let skill of item?.jobAreas| slice:0:3\">\n            <span class=\"amenity-tag\" style=\"color:white;\">\n              <app-text-shell [data]=\"skill.title\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"tag-wrapper\" *ngIf=\"item?.jobAreas.length > 3\">\n            <span class=\"amenity-tag\" style=\"color:white;font-weight: bold;\">\n              <app-text-shell [data]=\"'.. + '+(item?.jobAreas.length -3)+' more'\"></app-text-shell>\n            </span>\n          </ion-col>\n         \n        </ion-row>\n      </div> -->\n\n\n              </div>\n            </ion-col>\n          </ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n     \n     \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/listing/company-filter/company-filter.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/listing/company-filter/company-filter.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompaniesListingCompanyFilterCompanyFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterItems()\">FILTER</ion-button>\n    </ion-buttons>\n    <ion-title>Filters</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"filters-content\">\n  <ion-item-group class=\"filters-group\">\n\n\n    <form class=\"validations-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" method=\"POST\">\n\n      <ion-item-divider>\n        <ion-label style=\"color: white;\">SELECT LOCATION</ion-label>\n      </ion-item-divider>\n  \n      <ion-item>\n        <ion-input [(ngModel)]=\"filterArr.pincode\" name=\"address\" id=\"search_input\" placeholder=\"Select a location\"></ion-input>\n      </ion-item>\n  \n      <!-- <ion-item>\n      <input #ramSelector name=\"ram\" type=\"range\" min=\"0\" max=\"100\" [(ngModel)]=\"filterArr.search_radius\" (ngModelChange)=\"setSearchRadius($event)\" value=\"0\">\n    </ion-item> -->\n\n    <ion-row class=\"range-item\" style=\"display: block;\">\n      <ion-col size=\"6\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Latitude</ion-label>\n          <ion-input type=\"text\" formControlName=\"latitude\" required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Longitude</ion-label>\n          <ion-input type=\"text\" formControlName=\"longitude\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-item-divider>\n      <ion-label style=\"color: white;\">SEARCH COMPANIES \n       <span class=\"\" style=\"color:white;\"> WITHIN {{ filterArr.search_radius }} K.m</span>\n    </ion-label>\n    </ion-item-divider>\n\n    <ion-row class=\"range-item\">\n     \n      <ion-col size=\"12\">\n        <ion-range class=\"range-control\" name=\"search_radius\" [(ngModel)]=\"filterArr.search_radius\" color=\"secondary\" (ngModelChange)=\"setSearchRadius($event)\" min=\"0\" max=\"100\" step=\"1\"></ion-range>\n      </ion-col>\n    </ion-row>\n\n     \n\n      <ion-item-divider>\n        <ion-label style=\"color: white;\">FILTER BY JOB AREAS</ion-label>\n      </ion-item-divider>\n\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ng-container *ngFor=\"let s of skill_types\">\n          <ion-item lines=\"none\" class=\"checkbox-tag rounded-tag\">\n            <ion-label class=\"tag-label\">{{ s.title }}  <span *ngIf=\"s.checked\" style=\"vertical-align: middle;font-size: 18px;\n              font-weight: 500;\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></span> </ion-label>\n            <ion-checkbox [(ngModel)]=\"s.checked\" name=\"skills\" (click)=\"updateFilter(s)\"></ion-checkbox>\n          </ion-item>\n        </ng-container>\n      </ion-row>\n\n      <ion-list class=\"counter-list\" lines=\"full\">\n\n<!--------- Sorting --------->\n      <ion-item-divider>\n        <ion-label style=\"color: white;\">SORT BY {{filterArr.sort_by}}</ion-label>\n      </ion-item-divider>\n\n      <ion-radio-group [ngModel]=\"filterArr.sort_by\" name=\"sort_by\">\n        <ion-row class=\"radio-tags\" style=\"background-color: white;padding:10px 0 10px 0;\">\n         \n          <ng-container *ngFor=\"let s of sort_options\">\n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">\n                <span>{{ s }}</span>\n              </ion-label>\n              <ion-radio [ngModel]=\"s.checked\" name=\"sort_by\" (click)=\"sortingMethodSelected(s)\"></ion-radio>\n            </ion-item>\n          </ng-container>\n\n        </ion-row>\n      </ion-radio-group>\n      <!-------ENDS SORTING ------>\n       \n      </ion-list>\n\n      <ion-button padding class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" style=\"margin-bottom: 20px;\">Filter Companies</ion-button>\n      \n    </form>\n    \n  </ion-item-group>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/companies/listing/companies.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/companies/listing/companies.module.ts ***!
    \*******************************************************/

  /*! exports provided: CompaniesPageModule */

  /***/
  function srcAppCompaniesListingCompaniesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function () {
      return CompaniesPageModule;
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


    var _companies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./companies.page */
    "./src/app/companies/listing/companies.page.ts");
    /* harmony import */


    var _companies_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../companies.resolver */
    "./src/app/companies/companies.resolver.ts");
    /* harmony import */


    var _companies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../companies.service */
    "./src/app/companies/companies.service.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _company_filter_company_filter_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./company-filter/company-filter.page */
    "./src/app/companies/listing/company-filter/company-filter.page.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.page */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.module */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.module.ts");

    var routes = [{
      path: '',
      component: _companies_page__WEBPACK_IMPORTED_MODULE_6__["CompaniesPage"],
      resolve: {
        data: _companies_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyListingResolver"]
      }
    }];

    var CompaniesPageModule = function CompaniesPageModule() {
      _classCallCheck(this, CompaniesPageModule);
    };

    CompaniesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _bluspec_recruiter_location_autocomplete_location_autocomplete_module__WEBPACK_IMPORTED_MODULE_12__["LocationAutocompletePageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_companies_page__WEBPACK_IMPORTED_MODULE_6__["CompaniesPage"], _company_filter_company_filter_page__WEBPACK_IMPORTED_MODULE_10__["CompanyFilterPage"]],
      providers: [_companies_resolver__WEBPACK_IMPORTED_MODULE_7__["CompanyListingResolver"], _companies_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]],
      entryComponents: [_company_filter_company_filter_page__WEBPACK_IMPORTED_MODULE_10__["CompanyFilterPage"], _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_11__["LocationAutocompletePage"]]
    })], CompaniesPageModule);
    /***/
  },

  /***/
  "./src/app/companies/listing/companies.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/companies/listing/companies.page.ts ***!
    \*****************************************************/

  /*! exports provided: CompaniesPage */

  /***/
  function srcAppCompaniesListingCompaniesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesPage", function () {
      return CompaniesPage;
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


    var _create_create_company_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../create/create-company.modal */
    "./src/app/companies/create/create-company.modal.ts");
    /* harmony import */


    var _company_filter_company_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./company-filter/company-filter.page */
    "./src/app/companies/listing/company-filter/company-filter.page.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");

    var CompaniesPage =
    /*#__PURE__*/
    function () {
      function CompaniesPage(companyService, route, ngRouter, toastService, authService, storageService, modalController) {
        _classCallCheck(this, CompaniesPage);

        this.companyService = companyService;
        this.route = route;
        this.ngRouter = ngRouter;
        this.toastService = toastService;
        this.authService = authService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.loading = true;
      } // @HostBinding('class.is-shell') get isShell() {
      //   return (this.listing && this.listing.isShell) ? true : false;
      // }


      _createClass(CompaniesPage, [{
        key: "fetchFiltersFromService",
        value: function fetchFiltersFromService() {
          this.jobFilterArr = this.companyService.getFilterData();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.fetchCompanies();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
              console.log("/***** User Ready with Auth => ****/: " + _this.localUser.id);
            }
          }); //Subscribe to any auth changes event

          this.companyService.invokeListChangeEvent.subscribe(function (value) {
            _this.filtered_listing = value;
            _this.listing = value;
            _this.loading = false;

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
              console.log("Received from Subject: " + JSON.stringify(value));

              _this.toastService.presentToast("Companies list has been updated.");
            }
          });
          var postData = {
            role_id: 0,
            sort_by: 0,
            search_item: this.searchQuery
          }; //Enable this too for real-time actions update
          //this.fetchCompanies();

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].COMPANIES).then(function (companies) {
            if (companies) {
              if (companies.length > 0) {
                _this.listing = companies;
                _this.loading = false;
              }
            }
          });
        }
      }, {
        key: "fetchCompanies",
        value: function fetchCompanies() {
          //this.loading = true;
          //Implement No Disturb Loading
          if (this.listing && this.listing.length <= 0) {
            this.loading = true;
          }

          this.companyService.getListingDataSource();
        }
      }, {
        key: "loadCompanies",
        value: function loadCompanies() {
          //let timeCurrent = Math.floor(Date.now() / 1000);
          this.fetchCompanies();
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.listing = this.filtered_listing;
        }
        /****************** SEARCH USERS ********************/

      }, {
        key: "searchList",
        value: function searchList() {
          var _this2 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this2.searchQuery.toLowerCase()) > -1; // thisJob.tagline.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
          });
        }
        /****************** SEARCH USERS ********************/

      }, {
        key: "filterJobs",
        value: function filterJobs() {
          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {//return thisJob.is.indexOf(this.jobFilterArr.job_type) > -1
            //this.jobFilterArr.job_type > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
            //thisJob.max_salary <= this.jobFilterArr.max_salary &&
            //this.jobFilterArr.min_salary > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
          });
        }
      }, {
        key: "createNewCompany",
        value: function createNewCompany() {
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
                      component: _create_create_company_modal__WEBPACK_IMPORTED_MODULE_5__["CreateCompanyModal"],
                      cssClass: 'fullscreen-modal-css'
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
        key: "showFilterScreen",
        value: function showFilterScreen() {
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
                      component: _company_filter_company_filter_page__WEBPACK_IMPORTED_MODULE_6__["CompanyFilterPage"],
                      cssClass: "fullscreen-modal"
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CompaniesPage;
    }();

    CompaniesPage.ctorParameters = function () {
      return [{
        type: _companies_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    CompaniesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./companies.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/listing/companies.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/listing.page.scss */
      "./src/app/companies/listing/styles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/listing.shell.scss */
      "./src/app/companies/listing/styles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/company-listing.ios.scss */
      "./src/app/companies/listing/styles/company-listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], CompaniesPage);
    /***/
  },

  /***/
  "./src/app/companies/listing/company-filter/company-filter.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/companies/listing/company-filter/company-filter.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompaniesListingCompanyFilterCompanyFilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --bluspec-background: blue;\n  --bluspec-label-color: #ffffff;\n  --bluspec-label-dark-color:#333333;\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--bluspec-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL2xpc3RpbmcvY29tcGFueS1maWx0ZXIvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcY29tcGFuaWVzXFxsaXN0aW5nXFxjb21wYW55LWZpbHRlclxcY29tcGFueS1maWx0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wYW5pZXMvbGlzdGluZy9jb21wYW55LWZpbHRlci9jb21wYW55LWZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBhbmllcy9saXN0aW5nL2NvbXBhbnktZmlsdGVyL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNoZWNrYm94LXRhZy5zY3NzIiwic3JjL2FwcC9jb21wYW5pZXMvbGlzdGluZy9jb21wYW55LWZpbHRlci9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxyYWRpby10YWcuc2NzcyIsInNyYy9hcHAvY29tcGFuaWVzL2xpc3RpbmcvY29tcGFueS1maWx0ZXIvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xcY29sb3ItcmFkaW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SkFBQTtBQ0xGOztBRFNBO0VBQ0Usb0NBQUE7QUNORjs7QURRQztFQUNDLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FDUEY7O0FEa0JFO0VBQ0UsMkNBQUE7QUNoQko7O0FEa0JJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUNsQk47O0FEb0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDRDQUFBO0FDbEJSOztBRG9CUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNsQlY7O0FEcUJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ25CVjs7QUR1Qk07RUFFRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUN2QlI7O0FENkJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDM0JOOztBRDZCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUMzQkw7O0FEOEJNO0VBQ0UsdUJBQUE7VUFBQSxzQkFBQTtBQzVCUjs7QURrQ0k7RUFDRSxjQUFBO0FDaENOOztBRG1DSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ2pDTjs7QURtQ007RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FDakNMOztBRG9DTTtFQUNFLHlCQUFBO1VBQUEsd0JBQUE7QUNsQ1I7O0FEdUNDO0VBQ0Msd0ZBQUE7RUUzSEEsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUR1RkY7O0FDckZDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRHNGSjs7QUNwRkk7RUFDRCx1QkFBQTtBRHNGSDs7QUNuRkU7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEcUZOOztBQ2xGSTtFQUNFLFlBQUE7QURvRk47O0FDbEZNO0VBRUUsVUFBQTtBRG1GUjs7QUMvRUU7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRGlGTjs7QUM5RUU7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FEOEVIOztBREdJO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQ0ROOztBREtJO0VBQ0Usd0NBQUE7QUNITjs7QURLTTtFQUNFLDZDQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDSFI7O0FEUUk7RUFDQSwyQ0FBQTtBQ05KOztBRFFNO0VBQ0UsK0NBQUE7RUFDQSx1REFBQTtFQUNBLHNEQUFBO0VBQ0EsNERBQUE7QUNOUjs7QURXRTtFQUNFLCtEQUFBO0VBQ0Ysd0NBQUE7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0VHaEtGLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0FGd0pGOztBRXRKQztFQUVHLG9CQUFBO0VBQ0Esd0JBQUE7RUFDRiwwQkFBQTtFQUNFLGtCQUFBO0VBRUYsb0JBQUE7RUFDRSxtQkFBQTtFQUNGLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0VBRUUsbUJBQUE7VUFBQSxPQUFBO0FGcUpKOztBRW5KRTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QUZxSk47O0FFbEpJO0VBQ0UsWUFBQTtBRm9KTjs7QUVsSk07RUFFRSxVQUFBO0FGbUpSOztBRS9JSTtFQUNELFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FGaUpOOztBRTlJRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUY4SUg7O0FEM0JJO0VBQ0UsNkNBQUE7RUFDQSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EseURBQUE7RUFFQSxvQ0FBQTtFQUNBLG1DQUFBO0FDNEJOOztBRHZCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ3lCTjs7QUR2Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FDeUJMOztBRHRCTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUN3QlI7O0FEbEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDb0JOOztBRGxCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUNvQkw7O0FEakJNO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ21CUjs7QURoQk07RUFDRSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0RBQUE7QUNrQlI7O0FEWkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUNjTjs7QURaTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUNjTDs7QURYTTtFQUNFLDBDQUFBO0FDYVI7O0FEUkM7RUFFQyxxRkFBQTtFQUNBLDJDQUFBO0VJblBBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FINlBGOztBRFZJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZEQUFBO0VBQ0EsZ0NBQUE7RUFFQSxtQkFBQTtVQUFBLHVDQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQ1dOOztBRFRNO0VBQ0Ysb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1dSOztBRzNRQztFQUVHLHFCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHRSxpREFBQTtFQUVGLCtDQUFBO0FIeVFGOztBR3ZRRTtFQUNDLHlFQUFBO0VBQ0Esa0JBQUE7QUh5UUg7O0FHdlFHO0VBQ0ssVUFBQTtBSHlRUjs7QUdyUUU7RUFDQyxZQUFBO0FIdVFIOztBR3JRTTtFQUVFLFVBQUE7QUhzUVI7O0FHbFFJO0VBQ0UsaUNBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBSG1RTjs7QUdoUUk7RUFDRSxXQUFBO0VBRUgsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FIZ1FIOztBRDFDRTs7Ozs7O0VBTUUsZ0JBQUE7RUFDQSxtQkFBQTtBQzZDSjs7QUR4Q0U7O0VBRUUsMkNBQUE7QUMyQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW5pZXMvbGlzdGluZy9jb21wYW55LWZpbHRlci9jb21wYW55LWZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvcmFkaW8tdGFnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NvbG9yLXJhZGlvXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIC0tYmx1c3BlYy1iYWNrZ3JvdW5kIDogYmx1ZTtcclxuICAtLWJsdXNwZWMtbGFiZWwtY29sb3IgOiAjZmZmZmZmO1xyXG4gIC0tYmx1c3BlYy1sYWJlbC1kYXJrLWNvbG9yOiMzMzMzMzM7XHJcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3c6IDU7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcjogMiU7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKSkgLyB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5maWx0ZXJzLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcblx0aW9uLWl0ZW0tZGl2aWRlciB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWJsdXNwZWMtYmFja2dyb3VuZCk7XHJcblx0XHQtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cdFx0LS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuXHRcdGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLWxhYmVse1xyXG4gIC8vICAgLS1jb2xvcjogdmFyKC0tYmx1c3BlYy1sYWJlbC1jb2xvcik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAudGFnLWxhYmVse1xyXG4gIC8vICAgLS1jb2xvcjogdmFyKC0tYmx1c3BlYy1sYWJlbC1kYXJrLWNvbG9yKTtcclxuICAvLyB9XHJcblxyXG4gIC5yYW5nZS1saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgLnJhbmdlLWl0ZW0ge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAucmFuZ2UtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuZ2UtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYW5nZS1jb250cm9sIHtcclxuICAgICAgICAvLyBvdmVycmlkZSB0aGUgcGluIGNvbG9yXHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWxpc3Qge1xyXG4gICAgLmNoZWNrYm94LWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAuY2hlY2tib3gtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWxpc3Qge1xyXG4gICAgLnJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhZGlvLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAucmFkaW8tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHQuY2hlY2tib3gtdGFncyB7XHJcblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG5cclxuXHRcdEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xyXG5cclxuICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgJi5zcXVhcmUtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblxyXG4gIC5yYWRpby10YWdzIHtcclxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdFx0QGluY2x1ZGUgcmFkaW8tdGFnKCk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAucmFkaW8tdGFnIHtcclxuICAgICAgLS1yYWRpby10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XHJcbiAgICB9XHJcblx0fVxyXG5cclxuICAudG9nZ2xlLWxpc3Qge1xyXG4gICAgLnRvZ2dsZS1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLnRvZ2dsZS1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3VudGVyLWxpc3Qge1xyXG4gICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC5jb3VudGVyLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmF0aW5ncy1saXN0IHtcclxuICAgIC5yYXRpbmctaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC5yYXRpbmctbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1yYXRpbmctaW5wdXQge1xyXG4gICAgICAgIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHJcblx0LmNvbG9yLXJhZGlvLWdyb3VwIHtcclxuICAgIC8vIEFjY291bnQgZm9yIDIlIHN0YXJ0IGFuZCBlbmQgbWFyZ2luIHNldCBieSAuY29sb3ItdGFnIGNoaWxkc1xyXG5cdFx0cGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAuY29sb3ItcmFkaW8ge1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgICAgIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYik7XHJcbiAgICAgIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xyXG5cclxuICAgICAgZmxleDogMCAwIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKTtcclxuXHJcbiAgICAgIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcbiAgICB9XHJcblxyXG5cdFx0QGluY2x1ZGUgY29sb3ItcmFkaW8oKTtcclxuXHR9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLm1kKSB7XHJcbiAgLnJhdGluZ3MtbGlzdCxcclxuICAuY291bnRlci1saXN0LFxyXG4gIC50b2dnbGUtbGlzdCxcclxuICAucmFkaW8tbGlzdCxcclxuICAuY2hlY2tib3gtbGlzdCxcclxuICAucmFuZ2UtbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmlvcykge1xyXG4gIC5yYWRpby10YWdzLFxyXG4gIC5jaGVja2JveC10YWdzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1ibHVzcGVjLWJhY2tncm91bmQ6IGJsdWU7XG4gIC0tYmx1c3BlYy1sYWJlbC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1ibHVzcGVjLWxhYmVsLWRhcmstY29sb3I6IzMzMzMzMztcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG4gIC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93OiA1O1xuICAtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyOiAyJTtcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKSkgLyB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKTtcbn1cblxuLmZpbHRlcnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmx1c3BlYy1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtbGlzdCAuY2hlY2tib3gtaXRlbSAuY2hlY2tib3gtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtbGlzdCAuY2hlY2tib3gtaXRlbSBpb24tY2hlY2tib3gge1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1pdGVtIC5yYWRpby1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1pdGVtIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5zcXVhcmUtY2hlY2tib3gtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3Mge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLS1yYWRpby10YWctY29sb3I6ICMwMDA7XG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1taW4taGVpZ2h0OiAzOHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG4gIGZsZXg6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyB7XG4gIC0tcmFkaW8tdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0gLnRvZ2dsZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0gaW9uLXRvZ2dsZSB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSAuY291bnRlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSAuY291bnRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0gYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmF0aW5ncy1saXN0IC5yYXRpbmctaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhdGluZ3MtbGlzdCAucmF0aW5nLWl0ZW0gLnJhdGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYXRpbmdzLWxpc3QgLnJhdGluZy1pdGVtIGFwcC1yYXRpbmctaW5wdXQge1xuICAtLXJhdGluZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XG4gIC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZDogI0NDQztcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgLmNvbG9yLXJhZGlvIHtcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpO1xuICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDQwJTtcbiAgZmxleDogMCAwIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xuICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIC5jb2xvci1yYWRpbyAuY29sb3ItcmFkaW8taW5uZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8ge1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDRweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiKSwgLjMpICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0tcmFkaW8tY2hlY2tlZCAuY29sb3ItbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLmNvbG9yLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvIC5jb2xvci1sYWJlbCB7XG4gIC0tY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpbyBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5cbjpob3N0LWNvbnRleHQoLm1kKSAucmF0aW5ncy1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5jb3VudGVyLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLnRvZ2dsZS1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5yYWRpby1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5jaGVja2JveC1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5yYW5nZS1saXN0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuOmhvc3QtY29udGV4dCguaW9zKSAucmFkaW8tdGFncyxcbjpob3N0LWNvbnRleHQoLmlvcykgLmNoZWNrYm94LXRhZ3Mge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gcmFkaW8tdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLXJhZGlvLXRhZy1jb2xvcjogIzAwMDtcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQucmFkaW8tdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG5cblx0XHQtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuXHRcdC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kKTtcblx0XHQtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuXG4gICAgZmxleDogMTtcblxuXHRcdCYuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLXJhZGlvIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gY29sb3ItcmFkaW8oKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XG4gIC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZDogI0NDQztcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNTAlO1xuXG5cdGlvbi1pdGVtLmNvbG9yLXJhZGlvIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcblx0XHQtLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1wYWRkaW5nLXRvcDogMHB4O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuXHRcdC0tYm9yZGVyLXdpZHRoOiA0cHg7XG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAvLyBCb3RoIHRoZSBpb24taXRlbSBhbmQgaXQncyBzaGFkb3cgZG9tIGlubmVycyBoYXZlIGJvcmRlci1yYWRpdXMgcHJvcGVydGllcyBhcHBsaWVkXG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIC5pdGVtLWlubmVyIC5pbnB1dC13cmFwcGVyIGVsZW1lbnQgaW5zaWRlIHRoZSBpb24taXRlbSBzaGFkb3cgcm9vdFxuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIGlvbi1pdGVtIGVsZW1lbnRcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcblxuXHRcdCYuaXRlbS1yYWRpby1jaGVja2VkIHtcblx0XHRcdC0tYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiKSwgLjMpICFpbXBvcnRhbnQ7XG5cdFx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cblx0XHRcdC5jb2xvci1sYWJlbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcblx0XHRcdG9wYWNpdHk6IDAuNTtcblxuICAgICAgLmNvbG9yLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXHRcdH1cblxuICAgIC5jb2xvci1sYWJlbCB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1jb2xvcik7XG5cbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICBpb24tcmFkaW8ge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAucmFkaW8taWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cdH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/companies/listing/company-filter/company-filter.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/companies/listing/company-filter/company-filter.page.ts ***!
    \*************************************************************************/

  /*! exports provided: CompanyFilterPage */

  /***/
  function srcAppCompaniesListingCompanyFilterCompanyFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyFilterPage", function () {
      return CompanyFilterPage;
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


    var _components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/counter-input/counter-input.component */
    "./src/app/components/counter-input/counter-input.component.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../companies.service */
    "./src/app/companies/companies.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");

    var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Geolocation;

    var CompanyFilterPage =
    /*#__PURE__*/
    function () {
      function CompanyFilterPage(storageService, formBuilder, masterService, modalController, dealsService, toaster) {
        _classCallCheck(this, CompanyFilterPage);

        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.masterService = masterService;
        this.modalController = modalController;
        this.dealsService = dealsService;
        this.toaster = toaster; //currentRatingRange: number = 0;

        this.filterArr = {
          pincode: "",
          search_radius: 50,
          skills: [],
          sort_by: "RELEVANCE",
          tags: []
        };
      }

      _createClass(CompanyFilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var search_input = document.getElementById('search_input');
          var autocmplete = new google.maps.places.AutocompleteService();
          this.loadCurrentLocation();
          this.validationsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](6, Object(_components_counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_3__["counterRangeValidator"])(1, 12)),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          /**************
          this.masterService.getSkills().subscribe(
           (res: any) => {
           if (!res.error) {
           //this.toastService.presentToast(JSON.stringify(res));
           this.skill_types = res.result;
           //this.skill_types = JSON.stringify(res.result);
           console.log("######## skill_types ###########: "+this.skill_types);
           //this.skill_types = JSON.parse(res.result);
           alert(this.skill_types);
           } else {
             alert(res.message);
           }
           },
           (error: any) => {
           alert('Looks like there is a Network Issue while fetching skills.');
           }
           );
          ***************/

          /********** STORE ********
          this.storageService
          .get(AuthConstants.JOB_SKILLS)
          .then(res => {
          if (res) {
            this.skill_types = res;
            //this.userDataDebug = JSON.stringify(this.localUser);
            if(this.skill_types === null || this.skill_types === undefined){
             //Fetch from server
             alert("This can not happen");
            }
          } else {
            //Fetch from server
          }
          })
          ********** STORED ********/
          //  this.skill_types = [
          //    {"id":8,"title":"Cleaner", checked:false},
          //    {"id":7,"title":"Painter", checked:false},
          //    {"id":6,"title":"Plumber", checked:false},
          //    {"id":5,"title":"Carpenter", checked:false},
          //    {"id":4,"title":"Advisor", checked:false},
          //    {"id":3,"title":"Team Leader", checked:false},
          //  {"id":2,"title":"Management", checked:false},
          //  {"id":1,"title":"Administrator", checked:false}
          // ];

          /******** START FETCH SKILLS *******/

          this.masterService.getJobAreas().subscribe(function (res) {
            if (!res.error) {
              //console.log(JSON.stringify(res));
              _this3.skill_types = res.result;
              _this3.skillsHolder = res.result;

              _this3.skill_types.map(function (item) {
                _this3.validationsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
              });
            }
          }, function (error) {
            alert('Looks like there is a Network Issue while fetching skills.');
          });
          /******** ENDS FETCH SKILLS THEN *******/

          this.sort_options = ["NEAREST DISTANCE", "MOST RECENT"];
        }
      }, {
        key: "setSearchRadius",
        value: function setSearchRadius(value) {
          this.filterArr.search_radius = value;
        }
      }, {
        key: "filterItems",
        value: function filterItems() {
          this.onSubmit();
        }
      }, {
        key: "sortingMethodSelected",
        value: function sortingMethodSelected(value) {
          this.filterArr.sort_by = value;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.modalController.dismiss();
          this.dealsService.setFilterData(this.filterArr);
          alert(JSON.stringify(this.filterArr));
        }
      }, {
        key: "updateFilter",
        value: function updateFilter(appt) {
          if (appt.checked) {
            var index = this.filterArr.skills.indexOf(appt.id);
            this.filterArr.skills.splice(index, 1);
            console.log("####### REMOVED #### :" + appt.id);
          } else {
            this.filterArr.skills.push(appt.id);
            console.log("####### ADDED #### :" + appt.id);
          }

          console.log("####### SKILLS ARRAY  #### :" + this.filterArr.skills.join(', '));
        }
        /********** Advanced ***********/

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
                    isAvailable = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Capacitor"].isPluginAvailable('Geolocation');

                    if (isAvailable) {
                      _context3.next = 4;
                      break;
                    }

                    console.log('Err: plugin not available');
                    return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new Error('Err: plugin not available')));

                  case 4:
                    POSITION = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Geolocation.getCurrentPosition() // handle Capacitor Errors
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
        key: "loadCurrentLocation",
        value: function loadCurrentLocation() {
          var _this4 = this;

          return this.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
              center: latLng,
              zoom: 15
            };

            _this4.toaster.presentToast("Current Location: " + position.coords.latitude + ", " + position.coords.longitude); //alert(position.coords.latitude+", "+ position.coords.longitude); 
            //this.currentLat = position.coords.latitude;
            //this.currentLong = position.coords.longitude;


            _this4.validationsForm.controls.latitude.setValue(position.coords.latitude);

            _this4.validationsForm.controls.longitude.setValue(position.coords.longitude);

            return position;
          }) // if error
          .catch(function (err) {
            return null;
          });
        }
      }]);

      return CompanyFilterPage;
    }();

    CompanyFilterPage.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _companies_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
      }];
    };

    CompanyFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company-filter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/listing/company-filter/company-filter.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company-filter.page.scss */
      "./src/app/companies/listing/company-filter/company-filter.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _companies_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]])], CompanyFilterPage);
    /***/
  }
}]);
//# sourceMappingURL=listing-companies-module-es5.js.map