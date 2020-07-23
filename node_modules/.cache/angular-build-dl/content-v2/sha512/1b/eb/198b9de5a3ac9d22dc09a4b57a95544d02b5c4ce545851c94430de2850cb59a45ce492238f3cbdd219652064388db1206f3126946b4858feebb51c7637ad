function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-job-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/details/job-details.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/details/job-details.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsDetailsJobDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Job Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"deals-details-content\" [ngClass]=\"{'ended': ((details?.expirationDate | appTimeDifference) < 0), 'imminent-end': ((details?.expirationDate | appTimeDifference) > 0 && (details?.expirationDate | appTimeDifference) <= 2), 'ends-soon': ((details?.expirationDate | appTimeDifference) > 0 && (details?.expirationDate | appTimeDifference) > 2 && (details?.expirationDate | appTimeDifference) < 10), 'distant-end': ((details?.expirationDate | appTimeDifference) >= 10)}\">\n  <ion-row class=\"expiration-countdown\" style=\"padding: 8px;\" *ngIf=\"((details?.expirationDate | appTimeDifference) > 0 && (details?.expirationDate | appTimeDifference) <= 3)\">\n    <span class=\"expiration-lead\">Job expires in:</span>\n    <app-countdown-timer class=\"item-countdown\" fill=\"countdown\" [end]=\"details?.expirationDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n  </ion-row>\n\n\n  <!--------ADMIN PANEL -------->\n  <div class=\"details-wrapper\" *ngIf=\"selfView || adminMode\">\n\n  <ion-row class=\"details-scores review-scores description-row\">\n \n    <ion-col class=\"score-item review-score\">\n      <div style=\"vertical-align: middle;\">\n        <ion-icon class=\"score-icon\" style=\"text-align:left;position: relative;vertical-align: middle;display: inline-block;\" name=\"people\"></ion-icon>\n        <div style=\"display: inline-block;vertical-align: middle;\">\n          <h2 class=\"score-title\"><app-text-shell animation=\"bouncing\" [data]=\"details?.numApplications ? details?.numApplications : '0'\"></app-text-shell></h2>\n          <h6 class=\"score-value\">APPLICANTS</h6>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col class=\"score-item review-score\">\n      <div style=\"vertical-align: middle;\">\n        <ion-icon class=\"score-icon\" style=\"text-align:left;position: relative;vertical-align: middle;display: inline-block;\" name=\"funnel\"></ion-icon>\n        <div style=\"display: inline-block;vertical-align: middle;\">\n          <h2 class=\"score-title\"><app-text-shell animation=\"bouncing\" [data]=\"details?.numShortlists ? details?.numShortlists : '0'\"></app-text-shell></h2>\n          <h6 class=\"score-value\">SHORTLISTED</h6>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col class=\"score-item review-score\">\n      <div style=\"vertical-align: middle;\">\n        <ion-icon class=\"score-icon\" style=\"text-align:left;position: relative;vertical-align: middle;display: inline-block;\" name=\"eye\"></ion-icon>\n        <div style=\"display: inline-block;vertical-align: middle;\">\n          <h2 class=\"score-title\"><app-text-shell animation=\"bouncing\" [data]=\"details?.numTotalViews ? details?.numTotalViews : '0'\"></app-text-shell></h2>\n          <h6 class=\"score-value\">TOTAL VIEWS</h6>\n        </div>\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n\n\n  </div>\n\n  <!--------ADMIN PANEL -------->\n\n\n  <div class=\"details-wrapper\">\n\n    <!-- <ion-row class=\"slider-row\" *ngIf=\"details?.showcaseImages.length > 0\">\n      <ion-slides class=\"details-slides\" pager=\"true\" [options]=\"slidesOptions\">\n        <ion-slide class=\"\" *ngFor=\"let image of details?.showcaseImages\">\n          <ion-row class=\"slide-inner-row\">\n            <app-aspect-ratio [ratio]=\"{w: 56, h: 40}\">\n              <app-image-shell [src]=\"image\" [alt]=\"'deals details'\" class=\"showcase-image\" animation=\"spinner\"></app-image-shell>\n            </app-aspect-ratio>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-row> -->\n\n    <ion-row class=\"description-row\">\n      <ion-col class=\"logo-col\" size=\"4\" *ngIf=\"details?.company?.logo\">\n        <app-image-shell [src]=\"details?.company.logo\" [alt]=\"'company details'\" class=\"logo-image\" animation=\"spinner\"></app-image-shell>\n      </ion-col>\n\n      <ion-col class=\"info-col\" size=\"12\">\n        <h1 class=\"details-name\">\n          <app-text-shell animation=\"bouncing\" [data]=\"details?.title\"></app-text-shell>\n        </h1>\n        <p class=\"details-description\">\n          <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"details?.job_description\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"amenities-wrapper\" *ngIf=\"details?.jobSkills.length > 0\">\n      <h3 class=\"detail-title\">Required Job Skills</h3>\n      <ion-row class=\"amenities-tags\">\n        <ion-col class=\"tag-wrapper\" *ngFor=\"let amenity of details?.jobSkills\">\n          <span class=\"amenity-tag\">\n            <app-text-shell [data]=\"amenity.title\"></app-text-shell>\n          </span>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <div class=\"description-wrapper\">\n      <span class=\"details-price\">\n        <app-text-shell animation=\"gradient\" [data]=\"'Days Left: '+details?.expirationDate | appTimeDifference\"></app-text-shell>\n      </span>\n    </div> -->\n\n\n  </div>\n\n<!-------- 3. JOB STAT TABLE--------->\n<div class=\"details-wrapper\">\n <div class=\"accommodations-wrapper\">\n  <h3 class=\"detail-title\">Job Specification</h3>\n  <ion-row class=\"accommodation-row\" *ngIf=\"details?.salary_type\">\n    <ion-col class=\"icon-wrapper\">\n      \n      <ion-icon name=\"cash\"  class=\"accommodation-icon\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Salary</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\" *ngIf=\"details?.salary_type == 'monthly'\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.currency+' '+details?.job_salary+'/Month'\"></app-text-shell>\n      </span>\n      <span class=\"accommodation-value\" *ngIf=\"details?.salary_type == 'hourly'\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.currency+' '+details?.job_salary+'/Hr'\"></app-text-shell>\n      </span>\n      <span class=\"accommodation-value\" *ngIf=\"details?.salary_type == 'fixed'\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.currency+' '+details?.job_salary+''\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"accommodation-row\" *ngIf=\"details?.distance\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"locate\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Distance</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.distance+' Km away'\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"accommodation-row\" *ngIf=\"details?.minExp && details?.maxExp\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"briefcase\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Required Experience</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.minExp+' - '+details?.maxExp+' Years'\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"accommodation-row\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"ios-briefcase\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Job Area</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.job_area_name\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"accommodation-row\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"pricetag\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Job Type</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.job_type_name\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"accommodation-row\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"calendar\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Date Posted</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.date_created\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"accommodation-row\" *ngIf=\"details?.date_closing\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"alarm\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Closing Date</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.date_closing\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n</div>\n</div>\n<!-------- END OF JOB STAT TABLE--------->\n\n<!-------- TEST--------->\n<div class=\"details-wrapper\">\n  <!-- <p>{{details|json}}</p> -->\n  <div class=\"accommodations-wrapper\">\n    <h3 class=\"detail-title\">How to apply?</h3>\n    <p>Go through the job description carefully. If you meet the required criteria click accept job button below to share your interest. We will notify once your profile is shortlisted by the employer.</p>\n    <p>We will notify once your profile is shortlisted by the employer.</p>\n  </div>\n</div>\n<!-------- END TEST--------->\n\n  <!-------- MAP HERE --------->\n  <div class=\"location-wrapper\" *ngIf=\"details?.address && details?.latitude && details?.longitude\">\n    <div class=\"location-header\">\n      <h3 class=\"detail-title\"> <ion-icon class=\"accommodation-icon\" name=\"locate\"></ion-icon> Hiring Location</h3>\n      <span class=\"location-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.address\"></app-text-shell>\n      </span>\n    </div>\n  \n    <div id=\"map\">\n      <google-map [mapOptions]=\"mapOptions\"></google-map>\n    </div>\n\n  </div>\n<!-------- MAP HERE --------->\n\n  <ion-row class=\"promo-row ion-text-center\" *ngIf=\"!selfView\">\n    <ion-col size=\"12\">\n      <ion-button (click)=\"startChat()\" class=\"promo-code-btn\" expand=\"cover\" shape=\"round\" fill=\"outline\" color=\"success\">\n        <span class=\"promo-code\">\n          <ion-icon name=\"chatboxes\"></ion-icon> START CHAT\n        </span>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"promo-instructions\">\n        You can enter into chat with the recruiter after accepting this job. \n      </p>\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"availability-wrapper\" style=\"text-align: center;\" *ngIf=\"!selfView && details?.jobPrefs.enableCustomOffer\">\n    <ion-button class=\"book-now-btn\" color=\"dark\" expand=\"cover\" fill=\"outline\">MAKE A CUSTOM OFFER</ion-button>\n  </div>\n\n  <div class=\"related-deals-wrapper\" *ngIf=\"details?.company && details?.company.logo\">\n    <ion-row class=\"related-deal\">\n      <ion-col class=\"deal-logo-wrapper\" size=\"3\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [src]=\"'assets/images/tut-grafter2.png'\" [alt]=\"'deals logo'\" class=\"related-deal-logo\" animation=\"spinner\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"deal-info-wrapper\" size=\"9\">\n        <h4 class=\"related-deal-title\">\n          <app-text-shell [data]=\"'Company Name'\"></app-text-shell>\n        </h4>\n        <p class=\"related-deal-description\">\n          <app-text-shell [data]=\"'A little intro'\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-row class=\"expiration-countdown\" *ngIf=\"details?.hasApplied\">\n    <span class=\"expiration-lead\" style=\"padding: 10px;\">\n     You have applied for this job. Your application is {{details?.applicationStatus}}.\n    </span>\n  </ion-row>\n\n  <ion-row *ngIf=\"!selfView\">\n    <ion-col size=\"12\" style=\"display: none;\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"rejectJob()\">REJECT</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"details && !details?.hasApplied && (details?.expirationDate | appTimeDifference) >= 0\">\n      <ion-button class=\"select-variant-btn\" color=\"dark\" expand=\"block\" fill=\"solid\" (click)=\"acceptJob()\">ACCEPT JOB</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"details && (selfView || adminMode)\">\n    <ion-col size=\"12\">\n      <ion-button class=\"select-variant-btn\" color=\"primary\" expand=\"block\" fill=\"solid\" *ngIf=\"details\" [routerLink]=\"['/jobs/applications', details?.qcode]\">View Applications</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/jobs/details/job-details.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/jobs/details/job-details.module.ts ***!
    \****************************************************/

  /*! exports provided: JobDetailsPageModule */

  /***/
  function srcAppJobsDetailsJobDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobDetailsPageModule", function () {
      return JobDetailsPageModule;
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


    var _job_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./job-details.page */
    "./src/app/jobs/details/job-details.page.ts");
    /* harmony import */


    var _job_details_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./job-details.resolver */
    "./src/app/jobs/details/job-details.resolver.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _walkthrough_walkthrough_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../walkthrough/walkthrough.page */
    "./src/app/walkthrough/walkthrough.page.ts");
    /* harmony import */


    var _accept_job_form_accept_job_form_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../accept-job-form/accept-job-form.module */
    "./src/app/jobs/accept-job-form/accept-job-form.module.ts");
    /* harmony import */


    var _accept_job_form_accept_job_form_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../accept-job-form/accept-job-form.page */
    "./src/app/jobs/accept-job-form/accept-job-form.page.ts");

    var routes = [{
      path: '',
      component: _job_details_page__WEBPACK_IMPORTED_MODULE_9__["JobDetailsPage"],
      resolve: {
        data: _job_details_resolver__WEBPACK_IMPORTED_MODULE_10__["JobDetailsResolver"]
      }
    }];

    var JobDetailsPageModule = function JobDetailsPageModule() {
      _classCallCheck(this, JobDetailsPageModule);
    };

    JobDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _accept_job_form_accept_job_form_module__WEBPACK_IMPORTED_MODULE_13__["AcceptJobFormPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_job_details_page__WEBPACK_IMPORTED_MODULE_9__["JobDetailsPage"], _walkthrough_walkthrough_page__WEBPACK_IMPORTED_MODULE_12__["WalkthroughPage"]],
      providers: [_job_details_resolver__WEBPACK_IMPORTED_MODULE_10__["JobDetailsResolver"], _jobs_service__WEBPACK_IMPORTED_MODULE_11__["JobService"]],
      exports: [_job_details_page__WEBPACK_IMPORTED_MODULE_9__["JobDetailsPage"]],
      entryComponents: [_walkthrough_walkthrough_page__WEBPACK_IMPORTED_MODULE_12__["WalkthroughPage"], _accept_job_form_accept_job_form_page__WEBPACK_IMPORTED_MODULE_14__["AcceptJobFormPage"]]
    })], JobDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/details/job-details.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/jobs/details/job-details.page.ts ***!
    \**************************************************/

  /*! exports provided: JobDetailsPage */

  /***/
  function srcAppJobsDetailsJobDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobDetailsPage", function () {
      return JobDetailsPage;
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


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _walkthrough_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../walkthrough/walkthrough.page */
    "./src/app/walkthrough/walkthrough.page.ts");
    /* harmony import */


    var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/google-map/google-map.component */
    "./src/app/components/google-map/google-map.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _accept_job_form_accept_job_form_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../accept-job-form/accept-job-form.page */
    "./src/app/jobs/accept-job-form/accept-job-form.page.ts");

    var JobDetailsPage =
    /*#__PURE__*/
    function () {
      function JobDetailsPage(router, route, toastService, authService, jobService, modalController) {
        _classCallCheck(this, JobDetailsPage);

        this.router = router;
        this.route = route;
        this.toastService = toastService;
        this.authService = authService;
        this.jobService = jobService;
        this.modalController = modalController;
        this.loading = false;
        this.selfView = false;
        this.adminMode = false; //mapOptions: google.maps.MapOptions;

        this.mapOptions = {
          zoom: 15,
          center: {
            lat: -34.9199842,
            lng: -56.149849
          }
        };
      }

      _createClass(JobDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          /*********** THE ROUTE WAY *************/
          this.route.data.subscribe(function (resolvedRouteData) {
            var detailsDataStore = resolvedRouteData['data']; //console.log("Resolved => "+JSON.stringify(detailsDataStore));

            detailsDataStore.state.subscribe(function (state) {
              _this.details = state.item;
              console.log("Resolver Finally Resolved => " + JSON.stringify(state));

              _this.authService.getAuthCache().then(function (promisedValue) {
                if (promisedValue) {
                  _this.localUser = promisedValue;

                  if (_this.localUser.id == _this.details.user_id) {
                    _this.selfView = true;

                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                      _this.toastService.presentToast(_this.localUser.id + " is viewing post of " + _this.details.user_id);
                    }
                  }

                  if (_this.details.latitude !== undefined && _this.details.longitude !== undefined) {
                    //console.log("Resolved Latitude => "+this.details.latitude);
                    _this.mapOptions = {
                      zoom: 15,
                      center: {
                        lat: _this.details.latitude,
                        lng: _this.details.longitude
                      }
                    };
                  }
                } else {
                  _this.toastService.presentToast("Looks like you are not logged in.");

                  _this.authService.logout();
                }
              });
            }, function (error) {});
          }, function (error) {});
          /***************************************/

          this.job_code = this.route.snapshot.params.job_code;
          console.log("Resolved jobCode => " + this.job_code);
          this.authService.getAuthCache().then(function (promisedValue) {
            if (promisedValue) {
              _this.localUser = promisedValue;

              if (_this.localUser.role_id === 1) {
                _this.adminMode = true;
              }
            }
          }); //this.refreshJobRequest();

          /************ NON ROUTED DATA FETCH SYSTEM **************
            this.authService.getAuthCache().then(promisedValue=>{
            if(promisedValue){
            this.localUser = promisedValue;
             this.route.paramMap.subscribe(params => {
            if(params.get("job_code")){
              this.job_code = params.get("job_code");
              if(this.localUser.user_name == this.localUser.user_name){
                this.selfView = true;
                if(AuthConstants.DEV_MODE){
                  this.toastService.presentToast(this.localUser.user_name+" is viewing post of "+this.localUser.user_name);
                }
               }
               if(this.localUser.role_id === 1){
                 this.adminMode = true;
               }
            }
            this.refreshJobRequest();
            });
                }else{
                  this.toastService.presentToast("Looks like you are not logged in.");
                  this.authService.logout();
                }
               });
            *********** NON ROUTED DATA FETCH SYSTEM ***************/
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {//Map Works
          //this.initMap();
        }
      }, {
        key: "initMap",
        value: function initMap() {
          var _this2 = this;

          if (this._GoogleMap !== undefined && this._GoogleMap !== null) {
            this._GoogleMap.$mapReady.subscribe(function (map) {
              _this2.map = map;
            });
          } else {
            this.toastService.presentToast("Map view not found.");
          }
        }
      }, {
        key: "createMarker",
        value: function createMarker() {
          var myLatLngList = {
            myLatLng: [{
              lat: 37.76487,
              lng: -122.41948
            }, {
              lat: 59.33555,
              lng: 18.029851
            }]
          }; //iterate latLng and add markers 

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = myLatLngList.myLatLng[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var data = _step.value;
              var marker = new google.maps.Marker({
                position: data,
                map: this.map,
                title: 'markers'
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "refreshJobRequest",
        value: function refreshJobRequest() {
          var _this3 = this;

          this.loading = true;
          this.authService.getAuthCache().then(function (authData) {
            if (authData) {
              var postData = {
                'qcode': _this3.job_code
              };

              _this3.jobService.getJobRequestDetailDataSource(authData.api_key, _this3.job_code).subscribe(function (res) {
                if (!res.error) {
                  if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                    console.log("JOB SYNC :: " + JSON.stringify(res));
                  }

                  _this3.details = res.item; //console.log("Resolved Latitude => "+this.details.latitude);

                  if (_this3.details.latitude !== undefined && _this3.details.longitude !== undefined) {
                    //console.log("Resolved Latitude => "+this.details.latitude);
                    _this3.mapOptions = {
                      zoom: 15,
                      center: {
                        lat: _this3.details.latitude,
                        lng: _this3.details.longitude
                      }
                    };

                    _this3.initMap();

                    _this3.createMarker();
                  }

                  _this3.loading = false;

                  _this3.jobService.hitJobViewsAPI(_this3.localUser.api_key, {
                    job_id: _this3.details.id
                  }).subscribe(function (viewResponse) {
                    if (!viewResponse.error) {
                      _this3.toastService.presentToast(viewResponse.message);
                    }
                  });
                } else {
                  _this3.toastService.presentToast(res.message);
                }
              }, function (error) {
                _this3.toastService.presentToast('Looks like there is a Network Issue while fetching job post.');
              });
            }
          });
        }
      }, {
        key: "acceptJob",
        value: function acceptJob() {
          this.openItemUpdateModal();
        }
      }, {
        key: "openItemUpdateModal",
        value: function openItemUpdateModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _accept_job_form_accept_job_form_page__WEBPACK_IMPORTED_MODULE_10__["AcceptJobFormPage"],
                      componentProps: {
                        'job': this.details
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (item) {
                      _this4.refreshJobRequest();

                      if (item.data != null) {
                        _this4.toastService.presentToast(item.data);
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rejectJob",
        value: function rejectJob() {
          this.toastService.presentToast("Feature coming soon");
        }
      }, {
        key: "startChat",
        value: function startChat() {
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
                      component: _walkthrough_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPage"],
                      cssClass: 'fullscreen-modal-css'
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
      }, {
        key: "goToJobApplicationForm",
        value: function goToJobApplicationForm() {
          this.router.navigate(['accept-job-form']); //this.navCtrl.push(PersonalProfilePage, {}, {animate:true, direction:'back'});
          //this.navCtrl.navigateBack('personal-profile');
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.details && this.details.isShell ? true : false;
        }
      }]);

      return JobDetailsPage;
    }();

    JobDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JobDetailsPage.prototype, "isShell", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"])], JobDetailsPage.prototype, "_GoogleMap", void 0);
    JobDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deals-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/details/job-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-details.page.scss */
      "./src/app/jobs/details/styles/deals-details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/deals-details.shell.scss */
      "./src/app/jobs/details/styles/deals-details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], JobDetailsPage);
    /***/
  },

  /***/
  "./src/app/jobs/details/job-details.resolver.ts":
  /*!******************************************************!*\
    !*** ./src/app/jobs/details/job-details.resolver.ts ***!
    \******************************************************/

  /*! exports provided: JobDetailsResolver */

  /***/
  function srcAppJobsDetailsJobDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobDetailsResolver", function () {
      return JobDetailsResolver;
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
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var JobDetailsResolver =
    /*#__PURE__*/
    function () {
      function JobDetailsResolver(dealsService, storageService, authService) {
        _classCallCheck(this, JobDetailsResolver);

        this.dealsService = dealsService;
        this.storageService = storageService;
        this.authService = authService;
        this.userID = 0;
      }

      _createClass(JobDetailsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var authDataVal, jobCode, apiKey, postData, dataSource, dataStore;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].AUTH);

                  case 2:
                    authDataVal = _context3.sent;
                    //console.log("JobApplicationsManagerResolver authDataVal => "+JSON.stringify(authDataVal));
                    jobCode = route.params['job_code'];
                    console.log("JobApplicationsManagerResolver jobCode Resolved => " + jobCode);
                    apiKey = authDataVal.api_key;
                    console.log("JobApplicationsManagerResolver apiKey Resolved => " + apiKey);
                    postData = {
                      job_id: jobCode
                    };
                    dataSource = this.dealsService.getJobRequestDetailDataSource(apiKey, jobCode);
                    dataStore = this.dealsService.getDetailsStore(dataSource);
                    return _context3.abrupt("return", dataStore);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return JobDetailsResolver;
    }();

    JobDetailsResolver.ctorParameters = function () {
      return [{
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    JobDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], JobDetailsResolver);
    /***/
  },

  /***/
  "./src/app/jobs/details/styles/deals-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/jobs/details/styles/deals-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsDetailsStylesDealsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n:host {\n  --page-margin: var(--app-broad-margin);\n  --detail-sections-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-options-gutter: 10px;\n  --page-amenity-vertical-gutter: 2px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n:host .ion-color-claim {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.details-divider {\n  margin: 0px var(--page-margin) calc(var(--page-margin) * 2);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\ngoogle-map {\n  display: contents;\n  width: 100%;\n  height: 100%;\n}\n#map {\n  width: 100%;\n  position: relative;\n  height: 180px;\n  max-height: 180px;\n  display: block;\n  overflow: hidden;\n}\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin/2);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 13px;\n}\n.expiration-countdown app-countdown-timer.item-countdown {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px 3px;\n  --countdown-time-margin: 0px 2px;\n  --countdown-time-padding: 0px 2px;\n  --countdown-inner-time-margin: 0px 2px 0px 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  padding: 0px calc(var(--page-margin) / 4);\n  font-size: 14px;\n  font-weight: 500;\n}\n.review-scores {\n  padding: 0px var(--page-margin) var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.review-scores .review-score {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.review-scores .review-score:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.review-scores .review-score:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.details-scores .score-item {\n  display: block;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n.details-scores .score-item .score-icon {\n  color: var(--ion-color-medium-shade);\n  font-size: 25px;\n  vertical-align: middle;\n}\n.details-scores .score-item .score-value {\n  color: var(--ion-color-medium-shade);\n  font-size: 13px;\n  margin-left: 4px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  vertical-align: middle;\n}\n.details-scores .score-item .score-title {\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n  margin-left: 4px;\n  display: block;\n  text-align: center;\n}\n.deals-details-content {\n  --background: var(--page-background);\n}\n.deals-details-content.ended {\n  --page-deal-color: var(--page-expired-color);\n}\n.deals-details-content.imminent-end {\n  --page-deal-color: var(--page-distant-end-color);\n}\n.deals-details-content.ends-soon {\n  --page-deal-color: var(--page-ends-soon-color);\n}\n.deals-details-content.distant-end {\n  --page-deal-color: var(--page-distant-end-color);\n}\n.deals-details-content .details-wrapper {\n  margin: calc(var(--page-margin) / 2);\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.deals-details-content .details-wrapper .slider-row .details-slides {\n  --bullet-background: var(--ion-color-primary);\n  --bullet-background-active: var(--ion-color-primary);\n  height: 100%;\n  width: 100%;\n  border-radius: var(--app-broad-radius) var(--app-broad-radius) 0px 0px;\n}\n.deals-details-content .details-wrapper .slider-row .details-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n  box-sizing: border-box;\n}\n.deals-details-content .details-wrapper .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n  -webkit-box-align: center;\n          align-items: center;\n}\n.deals-details-content .details-wrapper .description-row .logo-col {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content .details-wrapper .description-row .info-col {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.deals-details-content .details-wrapper .description-row .info-col .details-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.deals-details-content .details-wrapper .description-row .info-col .details-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.deals-details-content .details-wrapper .promo-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.deals-details-content .details-wrapper .promo-row .promo-title {\n  font-size: 22px;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n.deals-details-content .details-wrapper .promo-row .promo-title::before, .deals-details-content .details-wrapper .promo-row .promo-title::after {\n  content: \"·\";\n  color: var(--ion-color-dark-tint);\n}\n.deals-details-content .details-wrapper .promo-row .promo-description {\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.deals-details-content .details-wrapper .promo-row .promo-code-btn {\n  margin: 0px;\n}\n.deals-details-content .details-wrapper .promo-row .promo-code {\n  display: block;\n  font-size: 14px;\n  line-height: 1;\n}\n.deals-details-content .details-wrapper .promo-row .promo-instructions {\n  margin: var(--page-margin) 0px 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  line-height: 1.4;\n}\n.deals-details-content .details-wrapper .promo-row .promo-instructions .instructions-anchor {\n  color: var(--page-color);\n  text-decoration: none;\n}\n.deals-details-content .details-wrapper .expiration-notice {\n  background-color: var(--page-deal-color);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  color: var(--ion-color-lightest);\n  border-radius: 0px 0px var(--app-broad-radius) var(--app-broad-radius);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.deals-details-content .details-wrapper .expiration-notice .notice-message {\n  display: block;\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n.deals-details-content .details-wrapper .expiration-notice .expiration-value {\n  display: block;\n}\n.deals-details-content .job-actions-row {\n  --ion-grid-column-padding: var(--page-options-gutter);\n  padding-top: 0px;\n  padding-left: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-right: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-bottom: calc(var(--page-margin) * 2);\n  background-color: #63C463;\n}\n.deals-details-content .job-actions-row .aux-action-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.deals-details-content .job-actions-row .aux-action-col .size-chart-btn {\n  margin: 0px;\n  height: 25px;\n}\n.deals-details-content .description-wrapper {\n  padding: var(--page-margin) var(--page-margin) 0px;\n}\n.deals-details-content .description-wrapper .details-name {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px 0px 5px;\n}\n.deals-details-content .description-wrapper .details-brand {\n  display: block;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0px 0px var(--page-margin);\n}\n.deals-details-content .description-wrapper .details-price {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px;\n  color: var(--page-color);\n  display: inline-block;\n}\n.deals-details-content .description-wrapper .details-sale-price {\n  color: var(--ion-color-medium-shade);\n  text-decoration: line-through;\n  display: inline-block;\n  margin-left: var(--page-margin);\n  font-size: 14px;\n}\n.deals-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content .details-description-wrapper {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n.deals-details-content .details-description-wrapper .details-description {\n  margin: 0px;\n  line-height: 1.3;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n.deals-details-content .accommodations-wrapper {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) / 2);\n}\n.deals-details-content .accommodations-wrapper .accommodation-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.deals-details-content .accommodations-wrapper .accommodation-row + .accommodation-row {\n  padding-top: calc(var(--page-margin) / 2);\n}\n.deals-details-content .accommodations-wrapper .accommodation-row .icon-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-right: 20px;\n}\n.deals-details-content .accommodations-wrapper .accommodation-row .accommodation-icon {\n  font-size: 30px;\n  color: var(--ion-color-medium-shade);\n}\n.deals-details-content .accommodations-wrapper .accommodation-row .accommodation-name {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.deals-details-content .accommodations-wrapper .accommodation-row .accommodation-value {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-medium-tint);\n}\n.deals-details-content .location-wrapper {\n  padding: calc(var(--page-margin) / 2) 0px var(--page-margin);\n}\n.deals-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n.deals-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.deals-details-content .amenities-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n.deals-details-content .amenities-wrapper .amenities-tags {\n  --ion-grid-column-padding: 0px;\n  margin-top: calc(var(--page-amenity-vertical-gutter) * -1);\n}\n.deals-details-content .amenities-wrapper .amenities-tags .tag-wrapper {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.deals-details-content .amenities-wrapper .amenities-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n.deals-details-content .amenities-wrapper .amenities-tags .amenity-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 2px solid var(--ion-color-dark-tint);\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-dark-tint);\n}\n.deals-details-content .related-deals-wrapper {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.deals-details-content .related-deals-wrapper .related-deals-title {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n.deals-details-content .related-deals-wrapper .related-deal {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.deals-details-content .related-deals-wrapper .related-deal:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content .related-deals-wrapper .related-deal .deal-logo-wrapper {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.deals-details-content .related-deals-wrapper .related-deal .deal-info-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.deals-details-content .related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-title {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 20px;\n}\n.deals-details-content .related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n.availability-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n.availability-wrapper .availability-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.availability-wrapper .availability-row .availability-description,\n.availability-wrapper .availability-row .availability-value {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n}\n.availability-wrapper .availability-row .availability-description {\n  color: var(--ion-color-medium-tint);\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.availability-wrapper .availability-row .availability-value {\n  color: var(--page-color);\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.availability-wrapper .book-now-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n:host ::ng-deep .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n:host ::ng-deep .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n:host ::ng-deep app-countdown-timer.item-countdown .time-unit {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9kZXRhaWxzL3N0eWxlcy9kZWFscy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvam9icy9kZXRhaWxzL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxqb2JzXFxkZXRhaWxzXFxzdHlsZXNcXGRlYWxzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JzL2RldGFpbHMvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpb24tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJaEI7RUFDRSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsOENBQUE7RUFFQSwyQkFBQTtFQUVBLG1DQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFFQSwyRUFBQTtFQUVBLGtEQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLDBDQUFBO0VBRUEscUJBQUE7RUFJRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURaSjtBRXBCRTtFQUNFLG1EQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtFQUNBLHdFQUFBO0VBQ0EsMERBQUE7RUFDQSx3REFBQTtBRnNCSjtBQ1FBO0VBQ0UsMkRBQUE7RUFDQSxpRUFBQTtBRExGO0FDUUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FETEY7QUNTQTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRFBGO0FDWUE7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMERBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtF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MUdOO0FDNkdJO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FEM0dOO0FDK0dFO0VBQ0Usa0NBQUE7QUQ3R0o7QUNzSEk7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBRHBITjtBQ3NITTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QURwSFI7QUMwSEk7RUFFRSxnQkFBQTtBRHpITiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLWRldGFpbC1zZWN0aW9ucy1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1vcHRpb25zLWd1dHRlcjogMTBweDtcbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogMzBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG4gIC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC4yKTtcbiAgLS1wYWdlLWV4cGlyZWQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIC0tcGFnZS1lbmRzLXNvb24tY29sb3I6ICNGRkFCNkI7XG4gIC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcjogIzcwREY3MDtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtY29sb3I6ICM3MERGNzA7XG4gIC0taW9uLWNvbG9yLWNsYWltOiAjNzBERjcwO1xuICAtLWlvbi1jb2xvci1jbGFpbS1yZ2I6IDExMiwyMjMsMTEyO1xuICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItY2xhaW0tc2hhZGU6ICM2M0M0NjM7XG4gIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG59XG46aG9zdCAuaW9uLWNvbG9yLWNsYWltIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNsYWltKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNsYWltLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNsYWltLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY2xhaW0tdGludCkgIWltcG9ydGFudDtcbn1cblxuLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC40KTtcbn1cblxuZ29vZ2xlLW1hcCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4vMik7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leHBpcmF0aW9uLWNvdW50ZG93biAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5leHBpcmF0aW9uLWNvdW50ZG93biBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXBhZGRpbmc6IDBweCAzcHg7XG4gIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHggMnB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweCAycHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAwcHggMnB4IDBweCAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yKTtcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yZXZpZXctc2NvcmVzIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yZXZpZXctc2NvcmVzIC5yZXZpZXctc2NvcmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZXZpZXctc2NvcmVzIC5yZXZpZXctc2NvcmU6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmV2aWV3LXNjb3JlcyAucmV2aWV3LXNjb3JlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG4uZGV0YWlscy1zY29yZXMgLnNjb3JlLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtc2NvcmVzIC5zY29yZS1pdGVtIC5zY29yZS1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1zY29yZXMgLnNjb3JlLWl0ZW0gLnNjb3JlLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRldGFpbHMtc2NvcmVzIC5zY29yZS1pdGVtIC5zY29yZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVhbHMtZGV0YWlscy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudC5lbmRlZCB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudC5pbW1pbmVudC1lbmQge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50LmVuZHMtc29vbiB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50LmRpc3RhbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuc2xpZGVyLXJvdyAuZGV0YWlscy1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpIHZhcigtLWFwcC1icm9hZC1yYWRpdXMpIDBweCAwcHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnNsaWRlci1yb3cgLmRldGFpbHMtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZGVzY3JpcHRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmRlc2NyaXB0aW9uLXJvdyAubG9nby1jb2wge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZGVzY3JpcHRpb24tcm93IC5pbmZvLWNvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmRlc2NyaXB0aW9uLXJvdyAuaW5mby1jb2wgLmRldGFpbHMtbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZGVzY3JpcHRpb24tcm93IC5pbmZvLWNvbCAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby10aXRsZTo6YmVmb3JlLCAuZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8tdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCLCt1wiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8tZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8tY29kZS1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby1jb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyAucHJvbW8taW5zdHJ1Y3Rpb25zIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby1pbnN0cnVjdGlvbnMgLmluc3RydWN0aW9ucy1hbmNob3Ige1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZXhwaXJhdGlvbi1ub3RpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggdmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5leHBpcmF0aW9uLW5vdGljZSAubm90aWNlLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5leHBpcmF0aW9uLW5vdGljZSAuZXhwaXJhdGlvbi12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuam9iLWFjdGlvbnMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzQzQ2Mztcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmpvYi1hY3Rpb25zLXJvdyAuYXV4LWFjdGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuam9iLWFjdGlvbnMtcm93IC5hdXgtYWN0aW9uLWNvbCAuc2l6ZS1jaGFydC1idG4ge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24td3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24td3JhcHBlciAuZGV0YWlscy1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24td3JhcHBlciAuZGV0YWlscy1icmFuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLXByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLXNhbGUtcHJpY2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtZGVzY3JpcHRpb24td3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93ICsgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuaWNvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5sb2NhdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIC50YWctd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5hbWVuaXRpZXMtd3JhcHBlciAuYW1lbml0aWVzLXRhZ3MgLnRhZy13cmFwcGVyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5hbWVuaXRpZXMtd3JhcHBlciAuYW1lbml0aWVzLXRhZ3MgLmFtZW5pdHktdGFnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWxzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWxvZ28td3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIC5yZWxhdGVkLWRlYWwtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciAucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hdmFpbGFiaWxpdHktd3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24sXG4uYXZhaWxhYmlsaXR5LXdyYXBwZXIgLmF2YWlsYWJpbGl0eS1yb3cgLmF2YWlsYWJpbGl0eS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYXZhaWxhYmlsaXR5LXdyYXBwZXIgLmJvb2stbm93LWJ0biB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xufVxuOmhvc3QgOjpuZy1kZWVwIGFwcC1jb3VudGRvd24tdGltZXIuaXRlbS1jb3VudGRvd24gLnRpbWUtdW5pdCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pb24tY29sb3JcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLWRldGFpbC1zZWN0aW9ucy1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLW9wdGlvbnMtZ3V0dGVyOiAxMHB4O1xuXG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogMnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogMzBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG5cbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuXG4gIC0tcGFnZS1leHBpcmVkLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAtLXBhZ2UtZW5kcy1zb29uLWNvbG9yOiAjRkZBQjZCO1xuICAtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3I6ICM3MERGNzA7XG5cbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcblxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XG4gIEBpbmNsdWRlIGlvbi1jb2xvcignY2xhaW0nKSB7XG4gICAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG4gIH1cbn1cblxuLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xufVxuXG5nb29nbGUtbWFwIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vaGVpZ2h0OjEyMHB4O1xufVxuXG4jbWFwe1xuICB3aWR0aDoxMDAlO1xuICAvL2Rpc3BsYXk6IGNvbnRlbnRzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTgwcHg7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBkaXNwbGF5OmJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cblxuLmV4cGlyYXRpb24tY291bnRkb3duIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luLzIpO1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5leHBpcmF0aW9uLWxlYWQge1xuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIC8vQGV4dGVuZDogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gICAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4IDNweDtcbiAgICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4IDJweDtcbiAgICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweCAycHg7XG4gICAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDBweCAycHggMHB4IDBweDtcbiAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAgIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yKTtcbiAgICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuXG4gICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLnJldmlldy1zY29yZXMge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5yZXZpZXctc2NvcmUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIH1cbiAgfVxufVxuXG4uZGV0YWlscy1zY29yZXMge1xuICAuc2NvcmUtaXRlbSB7XG4gICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbiAgICAuc2NvcmUtaWNvbiB7XG4gICAgICAvL2NvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgLy9mb250LXNpemU6IDI4cHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5zY29yZS12YWx1ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgbWFyZ2luLXRvcDoycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjJweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLnNjb3JlLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgJi5lbmRlZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIH1cbiAgJi5pbW1pbmVudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgfVxuICAmLmVuZHMtc29vbiB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgfVxuICAmLmRpc3RhbnQtZW5kIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG4gIH1cblxuICAuZGV0YWlscy13cmFwcGVyIHtcbiAgICAvL21hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pLzI7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAuc2xpZGVyLXJvdyB7XG4gICAgICAuZGV0YWlscy1zbGlkZXMge1xuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgdmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgMHB4IDBweDtcblxuICAgICAgICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbiAgICAgICAgICAvLyBBcyB3ZSBzZXQgVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLCBib3gtc2l6aW5nIGdldCdzIHJlc2V0dGVkIHRvIGNvbnRlbnQtYm94IGlmIEkgZG9uJ3QgYWRkIHRoaXNcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5sb2dvLWNvbCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuaW5mby1jb2wge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIFx0XHRcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvbW8tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5wcm9tby10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnwrcnO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucHJvbW8tZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5wcm9tby1jb2RlLWJ0biB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuXG4gICAgICAucHJvbW8tY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuXG4gICAgICAucHJvbW8taW5zdHJ1Y3Rpb25zIHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICAgICAgICAuaW5zdHJ1Y3Rpb25zLWFuY2hvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5leHBpcmF0aW9uLW5vdGljZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggdmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIC5ub3RpY2UtbWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG5cbiAgICAgIC5leHBpcmF0aW9uLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmpvYi1hY3Rpb25zLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcik7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2M0M0NjM7XG5cbiAgICAuYXV4LWFjdGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgLnNpemUtY2hhcnQtYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC5kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcblxuICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtYnJhbmQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXNhbGUtcHJpY2Uge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICB9XG5cbiAgLmRldGFpbHMtZGVzY3JpcHRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgfVxuICB9XG5cbiAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYgKyAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIH1cblxuICAgICAgLmljb24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuXG4gICAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuIC5sb2NhdGlvbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAubG9jYXRpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmFtZW5pdGllcy10YWdzIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgIC50YWctd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFtZW5pdHktdGFnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAucmVsYXRlZC1kZWFsIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuZGVhbC1sb2dvLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgICAgIH1cblxuICAgICAgLmRlYWwtaW5mby13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLnJlbGF0ZWQtZGVhbC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4uYXZhaWxhYmlsaXR5LXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLmF2YWlsYWJpbGl0eS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbixcbiAgICAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gIH1cblxuICAuYm9vay1ub3ctYnRuIHtcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICB9XG59XG5cbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbi8vICAgICAgICAoQW5ndWxhciBkb2Vzbid0IGFkZCBhbiAnX25nY29udGVudCcgYXR0cmlidXRlIHRvIHRoZSAuc3dpcGVyLXBhZ2dpbmF0aW9uIGJlY2F1c2UgaXQncyBkeW5hbWljYWxseSByZW5kZXJlZClcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XG46aG9zdCA6Om5nLWRlZXAge1xuICAuZGV0YWlscy1zbGlkZXMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcbiAgICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcbiAgICAudGltZS11bml0IHtcbiAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGlvbi1jb2xvcigkY29sb3IpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLmlvbi1jb2xvci0jeyRjb2xvcn0ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0pICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS10aW50KSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/details/styles/deals-details.shell.scss":
  /*!**************************************************************!*\
    !*** ./src/app/jobs/details/styles/deals-details.shell.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsDetailsStylesDealsDetailsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\n:host(.is-shell) ion-content {\n  opacity: 0.8;\n}\n\napp-image-shell.showcase-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.logo-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.score-title > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.details-name > app-text-shell {\n  color: var(--ion-color-dark-tint);\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 20px;\n  font-size: 22px;\n  font-weight: 400;\n}\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.preview-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.promo-code > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 80px;\n}\n\n.promo-code > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.expiration-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--ion-color-lightest-rgb), .20);\n  --text-shell-line-height: 18px;\n  min-width: 60px;\n}\n\n.expiration-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\napp-image-shell.related-deal-logo {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.related-deal-title > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.related-deal-title > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.related-deal-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.related-deal-description > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9kZXRhaWxzL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxqb2JzXFxkZXRhaWxzXFxzdHlsZXNcXGRlYWxzLWRldGFpbHMuc2hlbGwuc2NzcyIsInNyYy9hcHAvam9icy9kZXRhaWxzL3N0eWxlcy9kZWFscy1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDREY7O0FETUU7RUFDRSxZQUFBO0FDSEo7O0FET0E7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDSkY7O0FET0E7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0VBQ0EsZ0NBQUE7QUNKRjs7QURPQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGlDQUFBO0VBQ0EsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ0pGOztBRE9BO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0FDSkY7O0FET0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE1FO0VBQ0UsY0FBQTtBQ0pKOztBRFFBO0VBQ0UsaUVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPRTtFQUNFLGNBQUE7QUNMSjs7QURTQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtBQ05GOztBRFNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNORjs7QURRRTtFQUNFLGtCQUFBO0FDTko7O0FEVUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1BGOztBRFNFO0VBQ0Usa0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICM3MERGNzA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAxMTIsMjIzLDExMjtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICBpb24tY29udGVudCB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9nby1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcbn1cblxuLnNjb3JlLXRpdGxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBtYXJnaW4tdG9wOjJweDtcbiAgbWFyZ2luLWJvdHRvbToycHg7XG59XG5cbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OjQwMDtcbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnByZXZpZXctaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5wcm9tby1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogODBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uZXhwaXJhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0LXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLWRlYWwtbG9nbyB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcbn1cblxuLnJlbGF0ZWQtZGVhbC10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnJlbGF0ZWQtZGVhbC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzcwREY3MDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDExMiwyMjMsMTEyO1xufVxuXG46aG9zdCguaXMtc2hlbGwpIGlvbi1jb250ZW50IHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuc2hvd2Nhc2UtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvZ28taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5zY29yZS10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucHJldmlldy1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcbn1cblxuLnByb21vLWNvZGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuLnByb21vLWNvZGUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uZXhwaXJhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0LXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLmV4cGlyYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1kZWFsLWxvZ28ge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5yZWxhdGVkLWRlYWwtdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4ucmVsYXRlZC1kZWFsLXRpdGxlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5yZWxhdGVkLWRlYWwtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4ucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59Il19 */";
    /***/
  }
}]);
//# sourceMappingURL=details-job-details-module-es5.js.map