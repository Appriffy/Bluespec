function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobs-listing-jobs-listing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/listing/jobs-listing.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/listing/jobs-listing.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsListingJobsListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Job Requests</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadJobsFromServer()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search jobs...\"></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">      \n        <ion-button fill=\"clear\" color=\"primary\" class=\"filters-btn\" (click)=\"showJobFilterScreen()\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"deals-listing-content\">\n\n\n  <!------- Loading View ------->\n  <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n      <h5 style=\"text-align: center;columns: #555555;\">Finding Jobs...</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Loading View ------->\n  \n     <!------- Empty View ------->\n     <ion-grid style=\"height: 100%\" *ngIf=\"listing.items?.length <= 0 && !loading\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-icon src=\"./assets/sample-icons/side-menu/briefcase.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n        <h5 style=\"text-align: center;columns: #555555;\">No Job Found</h5>\n        <ion-button class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\" (click)=\"showJobFilterScreen()\">\n          <span class=\"promo-code\">\n           FILTER JOBS\n          </span>\n        </ion-button>\n        </ion-row>\n      </ion-grid>\n     <!------- Empty View ------->\n\n  <ng-container *ngIf=\"listing?.items && !loading\">\n    <ion-toolbar color=\"secondary\" class=\"ion-padding\" *ngIf=\"appSettings && appSettings.debugMode\">\n      <p>Debug Mode ON: {{jobFilterArr|json}}</p>\n   </ion-toolbar>\n    <!-- <p>Filters: {{jobFilterArr|json}}</p> -->\n    <!-- <p>{{listing.items.length}} Professionals found within {{jobFilterArr.search_radius}} K.m</p> -->\n   \n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\" [ngClass]=\"{'ended': ((item.expirationDate | appTimeDifference) < 0), 'imminent-end': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2), 'ends-soon': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) > 2 && (item.expirationDate | appTimeDifference) < 10), 'distant-end': ((item.expirationDate | appTimeDifference) >= 10)}\">\n      \n      <ion-row class=\"top-row\">\n        <ion-col class=\"info-col\">\n          <h4 class=\"item-name\">\n            <a class=\"name-anchor\" [routerLink]=\"['/jobs/details', item.qcode]\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.title\"></app-text-shell>\n            </a>\n          </h4>\n\n          <ion-badge *ngIf=\"item && item.job_type_name\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\">{{item.job_type_name}}</ion-badge>\n          &nbsp; <ion-badge *ngIf=\"item && item.job_area_name\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\">{{item.job_area_name}} </ion-badge>\n\n        </ion-col> \n        <ion-col class=\"user-actions-wrapper\">\n          <!-- <ion-button class=\"bookmark-button\" fill=\"clear\" color=\"claim\">\n            <span class=\"accommodation-value\" *ngIf=\"item.salary_type == 'monthly'\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.jobSalary.min_salary+' - '+item.jobSalary.max_salary\"></app-text-shell>\n            </span>\n            <span class=\"accommodation-value\" *ngIf=\"item.salary_type == 'hourly'\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.jobSalary.min_rate_per_hour+' - '+item.jobSalary.max_rate_per_hour\"></app-text-shell>\n            </span>\n            <span class=\"accommodation-value\" *ngIf=\"item.salary_type == 'fixed'\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.jobSalary.fixed_fee\"></app-text-shell>\n            </span>\n          </ion-button> -->\n\n          <h4 class=\"bookmark-button\" fill=\"clear\" color=\"claim\">\n            <span class=\"accommodation-value\" *ngIf=\"item.job_salary && item.salary_type == 'monthly'\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.job_salary\"></app-text-shell>\n            </span>\n            <span class=\"accommodation-value\" *ngIf=\"item.job_salary && item.salary_type == 'hourly'\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.job_salary\"></app-text-shell>\n            </span>\n            <span class=\"accommodation-value\" *ngIf=\"item.job_salary && item.salary_type == 'fixed'\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.job_salary\"></app-text-shell>\n            </span>\n            <span class=\"accommodation-value\" *ngIf=\"!item.job_salary && item.salary_type == ''\">\n              <app-text-shell animation=\"bouncing\" [data]=\"'N/A'\"></app-text-shell>\n            </span>\n          </h4>\n\n          <h5 class=\"user-job\" style=\"font-size: 12px;line-height: 12px;margin-top: 0px;\" *ngIf=\"item && item.salary_type\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.salary_type|titlecase\"></app-text-shell>\n          </h5>\n\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row class=\"middle-row\">\n        <ion-col class=\"info-col\">\n             <!-- <ion-badge style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\"><ion-icon name=\"briefcase\"></ion-icon> {{item.job_type_name}} </ion-badge>\n            &nbsp;<ion-badge style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\"><ion-icon name=\"construct\"></ion-icon> {{item.job_area_name}} </ion-badge>\n            -->\n\n          <p class=\"item-description\" *ngIf=\"item.address\"><ion-icon name=\"locate\" style=\"display:inline-block;font-size:13px;line-height:14px;vertical-align: middle;\"></ion-icon> <app-text-shell style=\"display:inline-block;vertical-align: middle;\" animation=\"bouncing\" [data]=\"item.address\">\n          </app-text-shell></p>\n          \n          <p class=\"item-description\" *ngIf=\"item.distance && appSettings && appSettings.debugMode\"><ion-icon name=\"navigate\" style=\"display:inline-block;font-size:13px;line-height:14px;vertical-align: middle;\"></ion-icon> <app-text-shell style=\"display:inline-block;vertical-align: middle;\" animation=\"bouncing\" [data]=\"item.distance+' Km away'\">\n          </app-text-shell></p>\n\n          <p class=\"item-description\" style=\"margin-top:10px;\">\n            <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"item.job_description\"></app-text-shell>\n          </p>\n        \n\n          <ion-row class=\"item-tags\" *ngIf=\"item.jobSkills.length > 0\">\n            <ion-col class=\"tag-wrapper\">\n              <span class=\"item-tag\" style=\"display: inline-block;vertical-align: middle;border:none;font-size: 13px;\n              font-weight: 500;\">Required Skills: </span></ion-col>\n            <ion-col class=\"tag-wrapper\" *ngFor=\"let skill of item.jobSkills\">\n              <span class=\"item-tag\" style=\"display: inline-block;\">\n                <app-text-shell animation=\"bouncing\" style=\"display: inline-block;vertical-align: middle;\" [data]=\"skill.title\"></app-text-shell>\n              </span>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n        \n      </ion-row>\n      <ion-row class=\"bottom-row\">\n        <!-- <ion-col class=\"code-wrapper\">\n          <span class=\"item-code\" [ngClass]=\"{'expired': ((item.expirationDate | appTimeDifference) < 0)}\">\n            <app-text-shell [data]=\"item.job_type_name\"></app-text-shell>\n          </span>\n    \n        </ion-col> -->\n\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) > 0)\" class=\"call-to-action-col\">\n          <ion-button class=\"claim-button\" expand=\"block\" color=\"claim\" [routerLink]=\"['/jobs/details', item.qcode]\">\n            <span class=\"button-cta\">ACCEPT</span>\n            <ion-icon slot=\"end\" name=\"ios-arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) <= 0)\" class=\"call-to-action-col\">\n          <span class=\"expired-cta\">EXPIRED</span>\n        </ion-col>\n        \n        <ion-col class=\"time-left-wrapper\" size=\"5\" [ngClass]=\"{'countdown-active': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)}\">\n          <span class=\"expiration-cta\">JOB {{ ((item.expirationDate | appTimeDifference) < 0) ? 'EXPIRED' : 'EXPIRES IN' }}:</span>\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) < 0 || (item.expirationDate | appTimeDifference) > 2)\">\n            <span class=\"item-time-left\">\n              <app-text-shell [data]=\"(item.expirationDate | appTimeAgo)\"></app-text-shell>\n            </span>\n          </ng-container>\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)\">\n            <ion-row class=\"countdown-wrapper\">\n              <app-countdown-timer class=\"item-countdown\" fill=\"inner-time\" [end]=\"item.expirationDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n            </ion-row>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/jobs/listing/jobs-listing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/jobs/listing/jobs-listing.module.ts ***!
    \*****************************************************/

  /*! exports provided: JobListingPageModule */

  /***/
  function srcAppJobsListingJobsListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobListingPageModule", function () {
      return JobListingPageModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _jobs_listing_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./jobs-listing.page */
    "./src/app/jobs/listing/jobs-listing.page.ts");
    /* harmony import */


    var _jobs_listing_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./jobs-listing.resolver */
    "./src/app/jobs/listing/jobs-listing.resolver.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _job_filter_job_filter_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./job-filter/job-filter.page */
    "./src/app/jobs/listing/job-filter/job-filter.page.ts");
    /* harmony import */


    var _utility_components_select_job_skill_select_job_skill_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../utility-components/select-job-skill/select-job-skill.page */
    "./src/app/utility-components/select-job-skill/select-job-skill.page.ts");
    /* harmony import */


    var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../utility-components/select-job-area/select-job-area.page */
    "./src/app/utility-components/select-job-area/select-job-area.page.ts");
    /* harmony import */


    var _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../utility-components/utility-components.module */
    "./src/app/utility-components/utility-components.module.ts");
    /* harmony import */


    var _utility_components_select_job_skill_select_job_skill_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../utility-components/select-job-skill/select-job-skill.module */
    "./src/app/utility-components/select-job-skill/select-job-skill.module.ts");
    /* harmony import */


    var _utility_components_select_currency_select_currency_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../utility-components/select-currency/select-currency.module */
    "./src/app/utility-components/select-currency/select-currency.module.ts");
    /* harmony import */


    var _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../utility-components/select-currency/select-currency.page */
    "./src/app/utility-components/select-currency/select-currency.page.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.page */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");
    /* harmony import */


    var _bluspec_recruiter_location_autocomplete_location_autocomplete_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../bluspec-recruiter/location-autocomplete/location-autocomplete.module */
    "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.module.ts");

    var routes = [{
      path: '',
      component: _jobs_listing_page__WEBPACK_IMPORTED_MODULE_9__["JobListingPage"],
      resolve: {
        data: _jobs_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["JobListingResolver"]
      }
    }];

    var JobListingPageModule = function JobListingPageModule() {
      _classCallCheck(this, JobListingPageModule);
    };

    JobListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_15__["UtilityComponentsModule"], _bluspec_recruiter_location_autocomplete_location_autocomplete_module__WEBPACK_IMPORTED_MODULE_20__["LocationAutocompletePageModule"], _utility_components_select_job_skill_select_job_skill_module__WEBPACK_IMPORTED_MODULE_16__["SelectJobSkillPageModule"], _utility_components_select_currency_select_currency_module__WEBPACK_IMPORTED_MODULE_17__["SelectCurrencyPageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_jobs_listing_page__WEBPACK_IMPORTED_MODULE_9__["JobListingPage"], _job_filter_job_filter_page__WEBPACK_IMPORTED_MODULE_12__["JobFilterPage"]],
      providers: [_jobs_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["JobListingResolver"], _jobs_service__WEBPACK_IMPORTED_MODULE_11__["JobService"]],
      entryComponents: [_job_filter_job_filter_page__WEBPACK_IMPORTED_MODULE_12__["JobFilterPage"], _bluspec_recruiter_location_autocomplete_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_19__["LocationAutocompletePage"], _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_14__["SelectJobAreaPage"], _utility_components_select_job_skill_select_job_skill_page__WEBPACK_IMPORTED_MODULE_13__["SelectJobSkillPage"], _utility_components_select_currency_select_currency_page__WEBPACK_IMPORTED_MODULE_18__["SelectCurrencyPage"]]
    })], JobListingPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/listing/jobs-listing.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/jobs/listing/jobs-listing.page.ts ***!
    \***************************************************/

  /*! exports provided: JobListingPage */

  /***/
  function srcAppJobsListingJobsListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobListingPage", function () {
      return JobListingPage;
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


    var _job_filter_job_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./job-filter/job-filter.page */
    "./src/app/jobs/listing/job-filter/job-filter.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");

    var JobListingPage =
    /*#__PURE__*/
    function () {
      function JobListingPage(jobService, route, authService, storageService, toastService, modalController) {
        _classCallCheck(this, JobListingPage);

        this.jobService = jobService;
        this.route = route;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.loading = false; //Selected params

        this.skillID = 0;
        this.jobArea = 0;
      }

      _createClass(JobListingPage, [{
        key: "fetchFiltersFromService",
        value: function fetchFiltersFromService() {
          this.jobFilterArr = this.jobService.getFilterData();

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
            console.log("fetchFiltersFromService() => " + JSON.stringify(this.jobFilterArr));
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //Just get fresh every time via Constructor unless required
          this.jobFilterArr = this.jobService.getFilterData();
          this.jobService.invokeFilterChangeEvent.subscribe(function (newFilter) {
            if (newFilter) {
              _this.jobFilterArr = newFilter; //Enable Server Filter

              _this.loadJobsFromServer(true); //Enable Local Filter
              //this.filterJobs();


              console.log("NEW FILTER: " + JSON.stringify(newFilter));
            }
          });
          this.route.params.subscribe(function (params) {
            if (params.get("skillID")) {
              _this.skillID = params['skillID'];
              console.log("GOT SKILL via Route: " + _this.skillID);
            }

            if (params.get("jobArea")) {
              _this.jobArea = params['jobArea'];
            }
          });
          this.route.data.subscribe(function (resolvedRouteData) {
            var listingDataStore = resolvedRouteData['data'];

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
              console.log("ROUTE BASED JOB DETAILS HERE " + JSON.stringify(listingDataStore));
            }

            listingDataStore.state.subscribe(function (state) {
              _this.listing = state;
              console.log("JOB DETAILS HERE " + JSON.stringify(_this.listing));
            }, function (error) {});
          }, function (error) {});
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].APP_SETTINGS).then(function (appSettings) {
            if (appSettings) {
              _this.appSettings = appSettings;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                console.log("AppSettings: " + JSON.stringify(appSettings));
              }
            }
          });
          this.loadJobsFromServer();
        }
      }, {
        key: "loadJobsFromServer",
        value: function loadJobsFromServer() {
          var _this2 = this;

          var withFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.loading = true;
          this.authService.getAuthCache().then(function (results) {
            if (results) {
              var postData = {
                skillID: "" + _this2.skillID,
                jobArea: _this2.jobArea
              };

              if (withFilter) {
                postData = _this2.jobFilterArr;
              }

              console.log("FETCH JOBS FROM SERVICE WITH FILTER => " + JSON.stringify(_this2.jobFilterArr));

              _this2.jobService.getListingDataSource(results.api_key, postData).subscribe(function (resultData) {
                if (resultData) {
                  if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                    console.log("JOBS FETCHED FROM SERVICE: " + JSON.stringify(resultData));
                  }

                  _this2.listing = resultData;
                  _this2.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.filtered_listing = this.listing;
        }
        /****************** SEARCH USERS ********************/

      }, {
        key: "searchList",
        value: function searchList() {
          var _this3 = this;

          //alert(this.searchQuery);
          // this.searchSubject.next({
          //   lower: this.rangeForm.controls.dual.value.lower,
          //   upper: this.rangeForm.controls.dual.value.upper,
          //   query: this.searchQuery
          // });
          this.initializeItems();
          return this.listing.items = this.listing.items.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this3.searchQuery.toLowerCase()) > -1 || thisJob.job_description.toLowerCase().indexOf(_this3.searchQuery.toLowerCase()) > -1;
          });
        }
        /****************** SEARCH USERS ********************/

      }, {
        key: "filterJobs",
        value: function filterJobs() {
          var _this4 = this;

          this.initializeItems();
          console.log("APPLYING NEW FILTER");
          return this.listing.items = this.listing.items.filter(function (thisJob) {
            //return thisJob.job_type_name.indexOf(this.jobFilterArr.job_type) > -1
            //return thisJob.jobSkills.every(c => this.jobFilterArr.selected_skills.includes(c.id))
            return _this4.jobFilterArr.job_type.includes(thisJob.job_type) && thisJob.jobSkills.some(function (c) {
              return _this4.jobFilterArr.selected_skills_arr.includes(c.id);
            }); //this.jobFilterArr.job_type > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
            //thisJob.max_salary <= this.jobFilterArr.max_salary &&
            //this.jobFilterArr.min_salary > 0 ? thisJob.min_salary >= this.jobFilterArr.min_salary : true
          });
        }
      }, {
        key: "showJobFilterScreen",
        value: function showJobFilterScreen() {
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
                      component: _job_filter_job_filter_page__WEBPACK_IMPORTED_MODULE_3__["JobFilterPage"],
                      cssClass: "fullscreen-modal"
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

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
        key: "isShell",
        get: function get() {
          return this.listing && this.listing.isShell ? true : false;
        }
      }]);

      return JobListingPage;
    }();

    JobListingPage.ctorParameters = function () {
      return [{
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JobListingPage.prototype, "isShell", null);
    JobListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deals-listing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobs-listing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/listing/jobs-listing.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.page.scss */
      "./src/app/jobs/listing/styles/deals-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.shell.scss */
      "./src/app/jobs/listing/styles/deals-listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-listing.ios.scss */
      "./src/app/jobs/listing/styles/deals-listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], JobListingPage);
    /***/
  },

  /***/
  "./src/app/jobs/listing/jobs-listing.resolver.ts":
  /*!*******************************************************!*\
    !*** ./src/app/jobs/listing/jobs-listing.resolver.ts ***!
    \*******************************************************/

  /*! exports provided: JobListingResolver */

  /***/
  function srcAppJobsListingJobsListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobListingResolver", function () {
      return JobListingResolver;
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


    var _jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var JobListingResolver =
    /*#__PURE__*/
    function () {
      function JobListingResolver(dealsService, authService) {
        _classCallCheck(this, JobListingResolver);

        this.dealsService = dealsService;
        this.authService = authService;
      }

      _createClass(JobListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var _this5 = this;

          this.authService.getAuthCache().then(function (results) {
            if (results) {
              var postData = {
                user_id: results.id
              };
              _this5.dataSource = _this5.dealsService.getListingDataSource(results.api_key, postData);
            }
          });
          this.dataStore = this.dealsService.getListingStore(this.dataSource);
          return this.dataStore;
        }
      }]);

      return JobListingResolver;
    }();

    JobListingResolver.ctorParameters = function () {
      return [{
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    JobListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], JobListingResolver);
    /***/
  },

  /***/
  "./src/app/utility-components/select-currency/select-currency.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/utility-components/select-currency/select-currency.module.ts ***!
    \******************************************************************************/

  /*! exports provided: SelectCurrencyPageModule */

  /***/
  function srcAppUtilityComponentsSelectCurrencySelectCurrencyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCurrencyPageModule", function () {
      return SelectCurrencyPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _select_currency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-currency.page */
    "./src/app/utility-components/select-currency/select-currency.page.ts");

    var SelectCurrencyPageModule = function SelectCurrencyPageModule() {
      _classCallCheck(this, SelectCurrencyPageModule);
    };

    SelectCurrencyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_select_currency_page__WEBPACK_IMPORTED_MODULE_6__["SelectCurrencyPage"]],
      exports: [_select_currency_page__WEBPACK_IMPORTED_MODULE_6__["SelectCurrencyPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SelectCurrencyPageModule);
    /***/
  }
}]);
//# sourceMappingURL=jobs-listing-jobs-listing-module-es5.js.map