function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-manager-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/manager/manager.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/manager/manager.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsManagerManagerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Manage Jobs\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!loading\" (click)=\"loadJobs()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"goToPostNewJob()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-friends-content\">\n  <ion-segment class=\"user-friends-segment\" mode=\"md\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentValue\">\n    <ion-segment-button mode=\"md\" checked=\"true\" value=\"job_requests\">\n      <ion-label>Pending</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"ongoing_jobs\">\n      <ion-label>Ongoing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"completed_jobs\">\n      <ion-label>Completed</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-searchbar class=\"friends-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\"></ion-searchbar>\n\n\n  <!------------->\n  <ng-template #completedJobItem let-item=\"item\">\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"item.grafter_image\" [alt]=\"'Grafter Photo'\"></app-image-shell>\n        </app-aspect-ratio>\n<!-- <p> <app-text-shell [data]=\"item.grafter_name\"></app-text-shell></p> -->\n\n      </ion-col>\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"item.title\"></app-text-shell>\n          </h3>\n\n          <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n            <ion-icon name=\"clipboard\"></ion-icon> Started <app-text-shell style=\"display: inline;\" [data]=\"item.date_approved\"></app-text-shell></h5>\n\n            <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n              <ion-icon name=\"clock\"></ion-icon> Completed <app-text-shell style=\"display: inline;\" [data]=\"item.date_completed\"></app-text-shell></h5>\n  \n              <!-- <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n                <ion-icon name=\"wallet\"></ion-icon> Paid <app-text-shell style=\"display: inline;\" [data]=\"item.salary\"></app-text-shell></h5>\n     -->\n     \n          <!-- <ion-row class=\"item-tags\">\n            <ion-col class=\"tag-wrapper\">\n              <span class=\"item-tag\" style=\"display: inline-block;\">\n                <app-text-shell [data]=\"item.job_area\"></app-text-shell>\n              </span>\n\n              &nbsp;&nbsp;<span class=\"item-tag\" style=\"display: inline-block;\">\n                <app-text-shell [data]=\"item.job_type\"></app-text-shell>\n              </span>\n            </ion-col>\n          </ion-row> -->\n\n          <!-- <ion-row class=\"item-tags\">\n          <ion-badge ion-position=\"end\" class=\"schedule-closed\" color=\"primary\" >\n             Completed {{item.date_completed}}</ion-badge> \n\n            </ion-row> -->\n\n        </div>\n      </ion-col>\n    <ion-row>\n      <ion-col class=\"user-actions-wrapper\">\n        <ion-button class=\"user-action\" expand=\"block\" size=\"small\" color=\"primary\" *ngIf=\"item.is_rated\">\n          <ion-icon name=\"star\"></ion-icon>  \n          <ion-icon name=\"star\"></ion-icon> \n          <ion-icon name=\"star\"></ion-icon> \n          <ion-icon name=\"star-half\"></ion-icon> \n          <ion-icon name=\"star-outline\"></ion-icon> \n         </ion-button>\n<hr>\n         <ion-button *ngIf=\"item.is_rated\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"warning\"><ion-icon name=\"heart-empty\"></ion-icon>  Endorse</ion-button>\n      \n          <ion-button *ngIf=\"!item.is_rated\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"light\"><ion-icon name=\"thumbs-up\"></ion-icon>  Rate</ion-button>\n      \n      \n      </ion-col></ion-row>\n\n    </ion-row>\n  </ng-template>\n<!-----------Completed  Buttons -->\n\n  <ng-template #ongoingJobItem let-item=\"item\">\n    <div class=\"user-details-section\">\n    <ion-row>\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"item.grafter_image\" [alt]=\"'Grafter Photo'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.title\"></app-text-shell>\n          </h3>\n\n          <div style=\"margin-bottom: 4px;margin-top: 4px;\" *ngIf=\"item && item.progress\">\n            <ion-progress-bar value=\"{{item.progress}}\" color=\"success\"></ion-progress-bar>\n          </div>\n          <ion-badge class=\"schedule-closed\" color=\"primary\" *ngIf=\"item && item.status\">\n            {{item.status}}</ion-badge> \n        \n            <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item && item.grafter_name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"'Accepted by '+item.grafter_name+' on '+item.date_approved\"></app-text-shell>\n              </h5>\n        </div>\n      </ion-col>\n\n     \n    </ion-row>\n\n\n    <ion-row>\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n     \n      <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item && item.date_created\">\n              <ion-icon name=\"calendar\"></ion-icon> <app-text-shell style=\"display: inline;\" [data]=\"'Job Posted On '+item.date_created\"></app-text-shell></h5>\n \n      <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item && item.date_approved\">\n              <ion-icon name=\"stopwatch\"></ion-icon> Job Start Date: <app-text-shell style=\"display: inline;\" [data]=\"item.date_approved\"></app-text-shell></h5>\n      \n      <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item && item.job_order_id\">\n                <ion-icon name=\"clipboard\"></ion-icon> Order ID: <app-text-shell style=\"display: inline;\" [data]=\"item.job_order_id\"></app-text-shell></h5>\n          \n       <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item && item.expected_delivery_date\">\n                  <ion-icon name=\"timer\"></ion-icon> <app-text-shell style=\"display: inline;\" [data]=\"'Expected Delivery : '+item.expected_delivery_date\"></app-text-shell></h5>\n                 \n        </div></ion-col>\n        </ion-row>\n\n\n    <!--------- FULLCRUM VIEW ------>\n    <ion-row class=\"bottom-row\">\n      <ion-col class=\"code-wrapper\" *ngIf=\"item && item.qcode\">\n        <ion-button style=\"display: inline-block;\" class=\"user-action\" expand=\"cover\" size=\"small\" color=\"primary\" [routerLink]=\"['/jobs/details', item.qcode]\"><ion-icon name=\"copy\"></ion-icon>  View</ion-button>\n        <!-- <ion-button style=\"display: inline-block;\" class=\"user-action\" expand=\"cover\" size=\"small\" color=\"secondary\"><ion-icon name=\"chatbubbles\"></ion-icon>  Chat<span></span></ion-button> -->\n        <ion-button style=\"display: inline-block;\" class=\"user-action\" expand=\"cover\" fill=\"outline\" size=\"small\" color=\"blue\" [routerLink]=\"['/jobs/track', item.qcode]\"><ion-icon name=\"analytics\"></ion-icon>  Track</ion-button>\n       \n      </ion-col>\n      <ion-col class=\"time-left-wrapper\" size=\"5\" [ngClass]=\"{'countdown-active': ((item.expected_delivery | appTimeDifference) > 0 && (item.expected_delivery | appTimeDifference) <= 2)}\">\n        <span class=\"expiration-cta\">JOB {{ ((item.expirationDate | appTimeDifference) < 0) ? 'LATE' : 'DELIVERY IN' }}:</span>\n        <ng-container *ngIf=\"((item.expected_delivery | appTimeDifference) < 0 || (item.expected_delivery | appTimeDifference) > 4)\">\n          <span class=\"item-time-left\">\n            <app-text-shell [data]=\"(item.expected_delivery | appTimeAgo)\"></app-text-shell>\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"((item.expected_delivery | appTimeDifference) > 0 && (item.expected_delivery | appTimeDifference) <= 4)\">\n          <ion-row class=\"countdown-wrapper\">\n            <app-countdown-timer class=\"item-countdown\" fill=\"inner-time\" [end]=\"item.expected_delivery\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n          </ion-row>\n        </ng-container>\n      </ion-col>\n    </ion-row>\n    <!--------- FULLCRUM VIEW ------->\n</div>\n  </ng-template>\n\n\n  <!-----------##### PENDING JOB REQUESTS ####-->\n  <ng-template #pendingJobItem let-item=\"item\">\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"item.title\" animation=\"bouncing\"></app-text-shell>\n          </h3>\n\n          <!-- <p *ngIf=\"item\">\n            <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"item.job_description\"></app-text-shell>\n          </p> -->\n\n          <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item.address && false\">\n            <ion-icon name=\"locate\"></ion-icon> <app-text-shell style=\"display: inline;\" [data]=\"item.address\"></app-text-shell></h5>\n\n            <ion-badge *ngIf=\"item && item.job_type_name\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\">{{item.job_type_name}}</ion-badge>\n            &nbsp; <ion-badge *ngIf=\"item && item.job_area_name\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\">{{item.job_area_name}} </ion-badge>\n\n            <!-- <ion-badge style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\"><ion-icon name=\"briefcase\"></ion-icon> {{item.job_type_name}} </ion-badge>\n            &nbsp;<ion-badge style=\"margin-left: 0px;\" class=\"status-label\" color=\"facebook\"><ion-icon name=\"construct\"></ion-icon> {{item.job_area_name}} </ion-badge>\n            -->\n\n            <ion-row>\n              <ion-col size=\"5\" *ngIf=\"item && item.numApplications\">\n                <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n                  <ion-icon name=\"document\"></ion-icon> <app-text-shell animation=\"bouncing\" style=\"display: inline;\" [data]=\"' '+item.numApplications+' Applied'\"></app-text-shell></h5>      \n              </ion-col>\n\n              <ion-col size=\"7\" *ngIf=\"item && item.numShortlists\">\n                <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n                  <ion-icon name=\"people\"></ion-icon> <app-text-shell animation=\"bouncing\" style=\"display: inline;\" [data]=\"' '+item.numShortlists+' Shortlisted'\"></app-text-shell></h5>      \n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n                <ion-col size=\"5\" *ngIf=\"item && item.numViews\">\n                  <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item.numViews > 0\">\n                    <ion-icon name=\"people\"></ion-icon> <app-text-shell animation=\"bouncing\" style=\"display: inline;\" [data]=\"' '+item.numViews+' Visits'\"></app-text-shell></h5>      \n                </ion-col>\n\n                <ion-col size=\"7\" *ngIf=\"item && item.numTotalViews\">\n                  <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\" *ngIf=\"item.numTotalViews > 0\">\n                    <ion-icon name=\"eye\"></ion-icon> <app-text-shell animation=\"bouncing\" style=\"display: inline;\" [data]=\"' '+item.numTotalViews+' Views'\"></app-text-shell></h5>      \n                </ion-col>\n              </ion-row>\n\n          <h5 class=\"user-job\" style=\"color: #444444;margin-top:3px;margin-bottom: 3px;\" *ngIf=\"item && item.date_created\">\n            <ion-icon name=\"clock\"></ion-icon> Posted on <app-text-shell animation=\"bouncing\" style=\"display: inline;\" [data]=\"item.date_created\"></app-text-shell></h5>\n\n\n          <ion-row class=\"item-tags\">\n            <ion-col class=\"tag-wrapper\" *ngFor=\"let skill of item.jobSkills\">\n              <span class=\"item-tag\" style=\"display: inline-block;\">\n                <app-text-shell animation=\"bouncing\" style=\"display: inline-block;vertical-align: middle;\" [data]=\"skill.title\"></app-text-shell>\n              </span>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n\n\n        <!-- <ion-row class=\"bottom-row\">\n          <ion-col class=\"code-wrapper\">\n            <span class=\"item-code\">\n              <app-text-shell [data]=\"item.job_type_name\"></app-text-shell>\n            </span>\n    \n          </ion-col>\n        </ion-row> -->\n\n      </ion-col>\n      <ion-col class=\"user-actions-wrapper\">\n        <div class=\"user-info\" style=\"text-align: center;\">\n        <h4 class=\"user-job\" style=\"font-size: 15px;line-height: 18px;margin-bottom: 2px;\">\n          <span class=\"accommodation-value\" *ngIf=\"item.salary_type == 'monthly'\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.jobSalary.min_salary+' - '+item.jobSalary.max_salary\"></app-text-shell>\n          </span>\n          <span class=\"accommodation-value\" *ngIf=\"item.salary_type == 'hourly'\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.jobSalary.min_rate_per_hour+' - '+item.jobSalary.max_rate_per_hour\"></app-text-shell>\n          </span>\n          <span class=\"accommodation-value\" *ngIf=\"item.salary_type == 'fixed'\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.currency+' '+item.jobSalary.fixed_fee\"></app-text-shell>\n          </span>\n        </h4>\n        <h5 class=\"user-job\" style=\"font-size: 12px;line-height: 12px;margin-top: 0px;\">\n          <app-text-shell animation=\"bouncing\" [data]=\"item.salary_type|titlecase\"></app-text-shell>\n        </h5>\n</div>\n        <ion-button *ngIf=\"item && item.numApplications > 0\" class=\"user-action\" [routerLink]=\"['/jobs/applications', item.qcode]\" expand=\"block\" size=\"small\" color=\"primary\">{{item.numApplications}} Offer<span *ngIf=\"item.numApplications > 1\">s</span></ion-button>\n        <h5 class=\"user-job\" *ngIf=\"item && item.numApplications <= 0\" style=\"font-size: 12px;line-height: 12px;margin-top: 4px;text-align: center;\">\n          <app-text-shell animation=\"bouncing\" [data]=\"'(No Offer Yet)'\"></app-text-shell>\n        </h5>\n      \n        <ion-button *ngIf=\"item && item.qcode\" class=\"user-action\" style=\"margin-top:4px;\" expand=\"block\" size=\"small\" color=\"secondary\" [routerLink]=\"['/jobs/details', item.qcode]\">View</ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ng-template>\n\n  <section [hidden]=\"segmentValue !== 'job_requests'\">\n    <ion-list class=\"friends-list\" *ngIf=\"JobRequestsList.length > 0\">\n      <div class=\"friend-item\" *ngFor=\"let item of JobRequestsList\">\n        <ng-container *ngTemplateOutlet=\"pendingJobItem; context: { item: item }\"></ng-container>\n      </div>\n    </ion-list>\n    <ng-container *ngIf=\"JobRequestsList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Job Request found</h3>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'ongoing_jobs'\">\n    <ion-list class=\"friends-list\" *ngIf=\"ongoingJobsList.length > 0\">\n      <div class=\"friend-item\" *ngFor=\"let item of ongoingJobsList\">\n        <ng-container *ngTemplateOutlet=\"ongoingJobItem; context: { item: item }\"></ng-container>\n      </div>\n    </ion-list>\n    <ng-container *ngIf=\"ongoingJobsList.length <= 0\">\n      <h3 class=\"empty-list-message\">No ongoing job found</h3>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'completed_jobs'\">\n    <ion-list class=\"friends-list\" *ngIf=\"completedJobsList.length > 0\">\n      <div class=\"friend-item\" *ngFor=\"let item of completedJobsList\">\n        <ng-container *ngTemplateOutlet=\"completedJobItem; context: { item: item }\"></ng-container>\n      </div>\n    </ion-list>\n    <ng-container *ngIf=\"completedJobsList.length <= 0\">\n      <h3 class=\"empty-list-message\">No completed job found</h3>\n    </ng-container>\n  </section>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/jobs/manager/job-manager.resolver.ts":
  /*!******************************************************!*\
    !*** ./src/app/jobs/manager/job-manager.resolver.ts ***!
    \******************************************************/

  /*! exports provided: JobManagerResolver */

  /***/
  function srcAppJobsManagerJobManagerResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobManagerResolver", function () {
      return JobManagerResolver;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var JobManagerResolver =
    /*#__PURE__*/
    function () {
      function JobManagerResolver(userService, storageService, authService) {
        _classCallCheck(this, JobManagerResolver);

        this.userService = userService;
        this.storageService = storageService;
        this.authService = authService;
      }

      _createClass(JobManagerResolver, [{
        key: "resolve",
        value: function resolve() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var authDataVal, apiKey, dataSource, dataStore;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].AUTH);

                  case 2:
                    authDataVal = _context.sent;
                    apiKey = authDataVal.api_key;
                    dataSource = this.userService.getJobManagerDataSource(apiKey);
                    dataStore = this.userService.getJobManagerStore(dataSource);
                    return _context.abrupt("return", dataStore);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return JobManagerResolver;
    }();

    JobManagerResolver.ctorParameters = function () {
      return [{
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    JobManagerResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], JobManagerResolver);
    /***/
  },

  /***/
  "./src/app/jobs/manager/manager.module.ts":
  /*!************************************************!*\
    !*** ./src/app/jobs/manager/manager.module.ts ***!
    \************************************************/

  /*! exports provided: ManagerPageModule */

  /***/
  function srcAppJobsManagerManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerPageModule", function () {
      return ManagerPageModule;
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


    var _manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manager.page */
    "./src/app/jobs/manager/manager.page.ts");
    /* harmony import */


    var _job_manager_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./job-manager.resolver */
    "./src/app/jobs/manager/job-manager.resolver.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _manager_page__WEBPACK_IMPORTED_MODULE_6__["ManagerPage"],
      resolve: {
        data: _job_manager_resolver__WEBPACK_IMPORTED_MODULE_7__["JobManagerResolver"]
      }
    }];

    var ManagerPageModule = function ManagerPageModule() {
      _classCallCheck(this, ManagerPageModule);
    };

    ManagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_manager_page__WEBPACK_IMPORTED_MODULE_6__["ManagerPage"]],
      providers: [_job_manager_resolver__WEBPACK_IMPORTED_MODULE_7__["JobManagerResolver"], _jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobService"]]
    })], ManagerPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/manager/manager.page.scss":
  /*!************************************************!*\
    !*** ./src/app/jobs/manager/manager.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsManagerManagerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: rgb(118, 180, 118);\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n:host .ion-color-claim {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.claim-button {\n  --box-shadow: none;\n  --border-radius: var(--app-fair-radius);\n  margin: 0px;\n}\n.claim-button:focus {\n  outline: none;\n}\n.claim-button .button-cta {\n  display: block;\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.claim-button ion-icon {\n  font-size: 18px;\n}\n.bottom-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.bottom-row .code-wrapper {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.bottom-row .code-wrapper .code-cta {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n}\n.bottom-row .code-wrapper .item-code {\n  height: var(--page-deal-code-height);\n  text-transform: uppercase;\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border: 2px solid var(--page-color);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: calc(var(--page-deal-code-height) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.bottom-row .code-wrapper .item-code.expired {\n  border-color: var(--page-expired-color);\n  color: var(--page-expired-color);\n  opacity: 0.6;\n}\n.bottom-row .time-left-wrapper {\n  flex-shrink: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.bottom-row .time-left-wrapper .expiration-cta {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n  text-transform: uppercase;\n  text-align: end;\n}\n.bottom-row .time-left-wrapper:not(.countdown-active) .item-time-left {\n  color: var(--page-deal-color);\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  text-align: end;\n}\n.bottom-row .time-left-wrapper.countdown-active {\n  display: block;\n  position: relative;\n}\n.bottom-row .time-left-wrapper.countdown-active .countdown-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: absolute;\n  right: 0px;\n}\n.bottom-row .time-left-wrapper.countdown-active .countdown-wrapper app-countdown-timer.item-countdown {\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  --countdown-time-flex-direction: column;\n  font-weight: 500;\n  font-size: 14px;\n  margin-right: calc(var(--page-countdown-gutter) * -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9tYW5hZ2VyL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXG1hbmFnZXJcXG1hbmFnZXIucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JzL21hbmFnZXIvbWFuYWdlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2pvYnMvbWFuYWdlci9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcaW9uLWNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0VBRUEsMkVBQUE7RUFDQSw2REFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSwwQ0FBQTtFQUNBLHNEQUFBO0VBRUEscUJBQUE7RUFJRSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNWSjtBQ2hCRTtFQUNFLG1EQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtFQUNBLHdFQUFBO0VBQ0EsMERBQUE7RUFDQSx3REFBQTtBRGtCSjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUVBLFdBQUE7QUNKSjtBRE1JO0VBQ0UsYUFBQTtBQ0pOO0FET0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRFFJO0VBQ0UsZUFBQTtBQ05OO0FEV0U7RUFDRSw4QkFBQTtFQUNBLHNFQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1JKO0FEVUk7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNSTjtBRFVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUlI7QURXTTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNUUjtBRFdRO0VBQ0UsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNUVjtBRGNJO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDWk47QURjTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ1pSO0FEZ0JRO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2RWO0FEa0JNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDaEJSO0FEa0JRO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUNqQlY7QURtQlU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEZBQUE7RUFDQSx5RkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0RBQUE7RUFDQSxzREFBQTtFQUNBLGdGQUFBO0VBQ0EsaURBQUE7RUFDQSxxREFBQTtFQUNBLHVDQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUNsQloiLCJmaWxlIjoic3JjL2FwcC9qb2JzL21hbmFnZXIvbWFuYWdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcblxyXG4gIC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC4yKTtcclxuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xyXG4gIC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0OiAzMHB4O1xyXG4gIC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyOiAzcHg7XHJcblxyXG4gIC0tcGFnZS1leHBpcmVkLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gIC0tcGFnZS1lbmRzLXNvb24tY29sb3I6ICNGRkFCNkI7XHJcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xyXG5cclxuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG5cclxuICAtLXBhZ2UtY29sb3I6ICM3MERGNzA7XHJcblxyXG4gIC8vIEFkZCBjdXN0b20gY29sb3JzIHRvIHVzZSB3aXRoIFtjb2xvcl0gcHJvcGVydHlcclxuICBAaW5jbHVkZSBpb24tY29sb3IoJ2NsYWltJykge1xyXG4gICAgLS1pb24tY29sb3ItY2xhaW06IHJnYigxMTgsIDE4MCwgMTE4KTtcclxuICAgIC0taW9uLWNvbG9yLWNsYWltLXJnYjogMTEyLDIyMywxMTI7XHJcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcclxuICAgIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1zaGFkZTogIzYzQzQ2MztcclxuICAgIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xhaW0tYnV0dG9uIHtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWN0YSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5ib3R0b20tcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLmNvZGUtd3JhcHBlciB7XHJcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgICAuY29kZS1jdGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tY29kZSB7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi5leHBpcmVkIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aW1lLWxlZnQtd3JhcHBlciB7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5leHBpcmF0aW9uLWN0YSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCguY291bnRkb3duLWFjdGl2ZSkge1xyXG4gICAgICAgIC5pdGVtLXRpbWUtbGVmdCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1kZWFsLWNvbG9yKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY291bnRkb3duLWFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuY291bnRkb3duLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBhYnNvbHV0ZSBzbyB0aGF0IHRoZSBwYXJlbnQgZG9lbid0IGNvdW50IHRoZSBoZWlnaHQgb2YgdGhpcyBlbGVtZW50LlxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuXHJcbiAgICAgICAgICBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgMHB4O1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSAqIC0xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXI6IDNweDtcbiAgLS1wYWdlLWV4cGlyZWQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIC0tcGFnZS1lbmRzLXNvb24tY29sb3I6ICNGRkFCNkI7XG4gIC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcjogIzcwREY3MDtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcbiAgLS1pb24tY29sb3ItY2xhaW06IHJnYigxMTgsIDE4MCwgMTE4KTtcbiAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3Q6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAtLWlvbi1jb2xvci1jbGFpbS10aW50OiAjN0VFMjdFO1xufVxuOmhvc3QgLmlvbi1jb2xvci1jbGFpbSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jbGFpbSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNsYWltLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5jbGFpbS1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY2xhaW0tYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jbGFpbS1idXR0b24gLmJ1dHRvbi1jdGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jbGFpbS1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib3R0b20tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5ib3R0b20tcm93IC5jb2RlLXdyYXBwZXIgLmNvZGUtY3RhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciAuaXRlbS1jb2RlIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCkgLyAyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIC5pdGVtLWNvZGUuZXhwaXJlZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlciAuZXhwaXJhdGlvbi1jdGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlcjpub3QoLmNvdW50ZG93bi1hY3RpdmUpIC5pdGVtLXRpbWUtbGVmdCB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4uYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIuY291bnRkb3duLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIuY291bnRkb3duLWFjdGl2ZSAuY291bnRkb3duLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyLmNvdW50ZG93bi1hY3RpdmUgLmNvdW50ZG93bi13cmFwcGVyIGFwcC1jb3VudGRvd24tdGltZXIuaXRlbS1jb3VudGRvd24ge1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlcjogbm9uZTtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCB2YXIoLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcik7XG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XG59IiwiQG1peGluIGlvbi1jb2xvcigkY29sb3IpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLmlvbi1jb2xvci0jeyRjb2xvcn0ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0pICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS10aW50KSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/manager/manager.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/jobs/manager/manager.page.ts ***!
    \**********************************************/

  /*! exports provided: ManagerPage */

  /***/
  function srcAppJobsManagerManagerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerPage", function () {
      return ManagerPage;
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


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");

    var ManagerPage =
    /*#__PURE__*/
    function () {
      function ManagerPage(route, authService, jobService, ngRouter) {
        _classCallCheck(this, ManagerPage);

        this.route = route;
        this.authService = authService;
        this.jobService = jobService;
        this.ngRouter = ngRouter;
        this.loading = true;
        this.segmentValue = 'job_requests';
        this.searchQuery = '';
        this.showFilters = false;
      }

      _createClass(ManagerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (resolvedRouteData) {
            var friendsDataStore = resolvedRouteData['data'];
            friendsDataStore.state.subscribe(function (state) {
              _this.data = state;
              _this.JobRequestsList = _this.data.job_requests;
              _this.ongoingJobsList = _this.data.ongoing_jobs;
              _this.completedJobsList = _this.data.completed_jobs;
              _this.loading = false;
            }, function (error) {});
          }, function (error) {});
          this.route.params.subscribe(function (params) {
            if (params['tab']) {
              _this.segmentValue = params['tab'];
            }
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.segmentValue = ev.detail.value;
          this.searchList();
        }
      }, {
        key: "searchList",
        value: function searchList() {
          var query = this.searchQuery && this.searchQuery !== null ? this.searchQuery : '';

          if (this.segmentValue === 'job_requests') {
            this.JobRequestsList = this.filterList(this.data.job_requests, query);
          } else if (this.segmentValue === 'ongoing_jobs') {
            this.ongoingJobsList = this.filterList(this.data.ongoing_jobs, query);
          } else if (this.segmentValue === 'completed_jobs') {
            this.completedJobsList = this.filterList(this.data.completed_jobs, query);
          }
        }
      }, {
        key: "filterList",
        value: function filterList(list, query) {
          return list.filter(function (item) {
            return item.title.toLowerCase().includes(query.toLowerCase());
          });
        }
      }, {
        key: "goToPostNewJob",
        value: function goToPostNewJob() {
          this.ngRouter.navigate(['post-new-job']);
        }
      }, {
        key: "loadJobs",
        value: function loadJobs() {
          var _this2 = this;

          this.loading = true;
          this.authService.getAuthCache().then(function (results) {
            if (results) {
              _this2.jobService.getJobManagerDataSource(results.api_key).subscribe(function (state) {
                if (state) {
                  _this2.data = state;
                  _this2.JobRequestsList = _this2.data.job_requests;
                  _this2.ongoingJobsList = _this2.data.ongoing_jobs;
                  _this2.completedJobsList = _this2.data.completed_jobs;

                  if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].DEV_MODE) {
                    console.log("JOB MANAGER REFRESHED DATA=> " + JSON.stringify(_this2.data));
                  }

                  _this2.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.data && this.data.isShell ? true : false;
        }
      }]);

      return ManagerPage;
    }();

    ManagerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ManagerPage.prototype, "isShell", null);
    ManagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manager',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manager.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/manager/manager.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manager.page.scss */
      "./src/app/jobs/manager/manager.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/job-tabs.page.scss */
      "./src/app/jobs/manager/styles/job-tabs.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/job-tabs.shell.scss */
      "./src/app/jobs/manager/styles/job-tabs.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/job-tabs.md.scss */
      "./src/app/jobs/manager/styles/job-tabs.md.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _jobs_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ManagerPage);
    /***/
  },

  /***/
  "./src/app/jobs/manager/styles/job-tabs.md.scss":
  /*!******************************************************!*\
    !*** ./src/app/jobs/manager/styles/job-tabs.md.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsManagerStylesJobTabsMdScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.md) .user-details-section .user-actions-wrapper {\n  max-width: 12ex;\n  max-width: 12ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9tYW5hZ2VyL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxqb2JzXFxtYW5hZ2VyXFxzdHlsZXNcXGpvYi10YWJzLm1kLnNjc3MiLCJzcmMvYXBwL2pvYnMvbWFuYWdlci9zdHlsZXMvam9iLXRhYnMubWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9qb2JzL21hbmFnZXIvc3R5bGVzL2pvYi10YWJzLm1kLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLm1kKSB7XG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogMTJleDtcbiAgICAgIG1heC13aWR0aDogMTJjaDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUubWQpIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEyZXg7XG4gIG1heC13aWR0aDogMTJjaDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/manager/styles/job-tabs.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/jobs/manager/styles/job-tabs.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsManagerStylesJobTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background-shade);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n  --page-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-tags-gutter: 4px;\n}\n\n.user-friends-content {\n  --background: var(--page-background);\n}\n\n.user-friends-segment {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  --background: var(--page-background);\n  background-color: var(--page-background);\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --background: var(--page-segment-background);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --color-checked: var(--ion-color-dark);\n  --indicator-color-checked: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\n.user-friends-segment ion-segment-button ion-label {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) / 4);\n}\n\nion-searchbar.friends-searchbar {\n  padding: var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n  background-color: var(--page-background);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\n.friend-item {\n  background-color: #ffffff;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n  margin-left: var(--page-margin)/2;\n  margin-right: var(--page-margin)/2;\n  margin-top: var(--page-margin);\n  margin-bottom: var(--page-margin);\n  padding: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n}\n\n.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\n.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\n.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\n.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\n.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n\n.item-tags {\n  margin-top: 5px;\n}\n\n.item-tags .tag-wrapper {\n  padding-right: var(--page-tags-gutter);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.item-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.item-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);\n  font-size: 11px;\n  font-weight: bold;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9tYW5hZ2VyL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxqb2JzXFxtYW5hZ2VyXFxzdHlsZXNcXGpvYi10YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvam9icy9tYW5hZ2VyL3N0eWxlcy9qb2ItdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLG9DQUFBO0VBRUEsb0RBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0Usb0NBQUE7QUNGRjs7QURLQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7QUNGRjs7QURJRTtFQUNFLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDZDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUVBLDBCQUFBO0VBQ0EsaUZBQUE7QUNISjs7QURLSTtFQUNFLHdDQUFBO0VBQ0EsMkNBQUE7QUNITjs7QURRQTtFQUNFLDJCQUFBO0FDTEY7O0FEUUE7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7QUNMRjs7QURRQTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7RUFLQSxvQ0FBQTtFQUNBLDBDQUFBO0VBS0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EseURBQUE7QUNiRjs7QURnQkU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNkSjs7QURpQkU7RUFDRSw4QkFBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDaEJKOztBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDaEJOOztBRG1CUTtFQUNFLDJDQUFBO0FDakJWOztBRG9CUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNsQlY7O0FEcUJRO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQ25CVjs7QUR3Qkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUN0Qk47O0FEd0JNO0VBQ0UsV0FBQTtBQ3RCUjs7QUQ0QkE7RUFDRSxlQUFBO0FDekJGOztBRDJCRTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDekJKOztBRDJCSTtFQUNFLGtCQUFBO0FDekJOOztBRDZCRTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0VBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDM0JKIiwiZmlsZSI6InNyYy9hcHAvam9icy9tYW5hZ2VyL3N0eWxlcy9qb2ItdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0OiAycHg7XG5cbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA0cHg7XG59XG5cbi51c2VyLWZyaWVuZHMtY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4udXNlci1mcmllbmRzLXNlZ21lbnQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgIH1cbiAgfVxufVxuXG5pb24tc2VhcmNoYmFyLmZyaWVuZHMtc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uZnJpZW5kcy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnJpZW5kLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAvLy0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAvLy0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLy8tLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLy8tLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIC8vQ3VzdG9tIEJveGVkIFN0eWxpbmdcbiAgLy9tYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLy9tYXJnaW46ICB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pLzIgIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikvMjtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKS8yO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKS8yO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggdmFyKC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcik7XG4vL0N1c3RvbSBCb3hlZCBTdHlsaW5nXG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItam9iIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXgtd2lkdGg6IDEwZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXJcbiAgICAgIG1heC13aWR0aDogMTBjaDsgLy8gY2ggaXMgdGhlIG9ubHkgZm9udCB1bml0IGJhc2VkIG9uIHRoZSB3aWR0aCBvZiBjaGFyYWN0ZXJzXG5cbiAgICAgIC51c2VyLWFjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaXRlbS10YWdzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuXG4gIC50YWctd3JhcHBlciB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLXRhZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAvIDIpIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQ6IDJweDtcbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA0cHg7XG59XG5cbi51c2VyLWZyaWVuZHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udXNlci1mcmllbmRzLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XG4gIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC0gdmFyKC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQpKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cblxuaW9uLXNlYXJjaGJhci5mcmllbmRzLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLmZyaWVuZHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZyaWVuZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbikvMjtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbikvMjtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xufVxuLmZyaWVuZC1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItam9iIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwZXg7XG4gIG1heC13aWR0aDogMTBjaDtcbn1cbi5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItYWN0aW9ucy13cmFwcGVyIC51c2VyLWFjdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaXRlbS10YWdzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLml0ZW0tdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLml0ZW0tdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5pdGVtLXRhZ3MgLml0ZW0tdGFnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAvIDIpIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/manager/styles/job-tabs.shell.scss":
  /*!*********************************************************!*\
    !*** ./src/app/jobs/manager/styles/job-tabs.shell.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsManagerStylesJobTabsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-job > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 70%;\n  -webkit-columns: #222222;\n     -moz-columns: #222222;\n          columns: #222222;\n}\n\n.user-job > app-text-shell.text-loaded {\n  max-width: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9tYW5hZ2VyL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxqb2JzXFxtYW5hZ2VyXFxzdHlsZXNcXGpvYi10YWJzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2pvYnMvbWFuYWdlci9zdHlsZXMvam9iLXRhYnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLGdCQUFBO0FDQ0o7O0FER0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9qb2JzL21hbmFnZXIvc3R5bGVzL2pvYi10YWJzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgY29sdW1uczogIzIyMjIyMjtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgY29sdW1uczogIzIyMjIyMjtcbn1cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=manager-manager-module-es5.js.map