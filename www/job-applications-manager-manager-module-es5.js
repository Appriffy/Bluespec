function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-applications-manager-manager-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-applications-manager/manager.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-applications-manager/manager.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsJobApplicationsManagerManagerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Manage Job Applications\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!loading\" (click)=\"loadAllApplications()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-friends-content\">\n  <ion-segment class=\"user-friends-segment\" mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button mode=\"md\" checked=\"true\" value=\"pending\">\n      <ion-label>Pending</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"shortlisted\">\n      <ion-label>Shortlisted</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"rejected\">\n      <ion-label>Rejected</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-searchbar class=\"friends-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\"></ion-searchbar>\n\n\n  <!------------->\n  <ng-template #completedJobItem let-item=\"item\">\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"item.applicant_image\" [alt]=\"'Grafter Photo'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"item.applicant_name\"></app-text-shell>\n          </h3>\n          <h5 class=\"user-job\" *ngIf=\"item.amount\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n            <ion-icon name=\"clipboard\" style=\"vertical-align: middle;\"></ion-icon> Offer: <app-text-shell style=\"display: inline;\" [data]=\"item.amount+' '+item.currency+' '+item.salary_type|uppercase\"></app-text-shell></h5>\n            \n            <h5 class=\"user-job\" *ngIf=\"item.delivery_date\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n              <ion-icon name=\"stopwatch\" style=\"vertical-align: middle;\"></ion-icon> Expected Delivery: <app-text-shell style=\"display: inline;\" [data]=\"item.delivery_date+' Days'\"></app-text-shell></h5>\n          \n              <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n            <ion-icon name=\"clock\" style=\"vertical-align: middle;\"></ion-icon> Submitted <app-text-shell style=\"display: inline;\" [data]=\"item.date_created\"></app-text-shell></h5>\n\n        </div>\n      </ion-col>\n      <ion-col class=\"user-actions-wrapper\">\n        <ion-button class=\"user-action\" (click)=\"openJobApplicationDialog(item)\" expand=\"block\" size=\"small\" color=\"primary\">View Offer<span></span></ion-button>\n       &nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-button class=\"user-action\" [routerLink]=\"['/people/details', item.user_name]\" expand=\"block\" size=\"small\" color=\"secondary\">View Profile</ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ng-template>\n<!-----------Completed  Buttons -->\n\n  <ng-template #ongoingJobItem let-item=\"item\">\n    <div class=\"user-details-section\">\n    <ion-row>\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"item.applicant_image\" [alt]=\"'Grafter Photo'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"item.applicant_name\"></app-text-shell>\n          </h3>\n          <ion-badge class=\"schedule-closed\" color=\"primary\" >\n            {{item.status}}</ion-badge> \n        \n            <div class=\"user-info\"> \n              <h5 class=\"user-job\" *ngIf=\"item.amount\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n                <ion-icon name=\"clipboard\" style=\"vertical-align: middle;\"></ion-icon> Offer: <app-text-shell style=\"display: inline;\" [data]=\"item.amount+' '+item.currency+' '+item.salary_type\"></app-text-shell></h5>\n                \n                <h5 class=\"user-job\" *ngIf=\"item.delivery_date\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n                  <ion-icon name=\"stopwatch\" style=\"vertical-align: middle;\"></ion-icon> Expected Delivery: <app-text-shell style=\"display: inline;\" [data]=\"item.delivery_date+' Days'\"></app-text-shell></h5>\n              \n                  <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n                <ion-icon name=\"clock\" style=\"vertical-align: middle;\"></ion-icon> Submitted <app-text-shell style=\"display: inline;\" [data]=\"item.date_created\"></app-text-shell></h5>\n                           \n                </div>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-button style=\"display: inline-block;\" (click)=\"openJobApplicationDialog(item)\" class=\"user-action\" expand=\"cover\" size=\"small\" color=\"primary\"><ion-icon name=\"copy\"></ion-icon>  Application</ion-button>\n                   \n                    <ion-button style=\"display: inline-block;\" class=\"user-action\" expand=\"cover\" fill=\"outline\" size=\"small\" color=\"blue\" [routerLink]=\"['/people/details', item.user_name]\"><ion-icon name=\"analytics\"></ion-icon>  View Profile</ion-button>\n\n                    <ion-button style=\"display: inline-block;\" class=\"user-action\" expand=\"cover\" size=\"small\" color=\"secondary\"><ion-icon name=\"chatbubbles\"></ion-icon>  Chat<span></span></ion-button>   \n                  </ion-col></ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n</div>\n  </ng-template>\n\n\n  <!-----------##### PENDING JOB REQUESTS ####-->\n  <ng-template #pendingJobItem let-item=\"item\">\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"item.applicant_image\" [alt]=\"'Grafter Photo'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"item.applicant_name\"></app-text-shell>\n          </h3>\n          <h5 class=\"user-job\" *ngIf=\"item.amount\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n            <ion-icon name=\"clipboard\" style=\"vertical-align: middle;\"></ion-icon> Offer: <app-text-shell style=\"display: inline;\" [data]=\"item.amount+' '+item.currency+' '+item.salary_type\"></app-text-shell></h5>\n            \n          <h5 class=\"user-job\" *ngIf=\"item.delivery_date\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n              <ion-icon name=\"stopwatch\" style=\"vertical-align: middle;\"></ion-icon> Expected Delivery: <app-text-shell style=\"display: inline;\" [data]=\"item.delivery_date+' Days'\"></app-text-shell></h5>\n          \n          <h5 class=\"user-job\" style=\"color: #444444;margin-top:5px;margin-bottom: 5px;\">\n            <ion-icon name=\"clock\" style=\"vertical-align: middle;display:inline-block;\"></ion-icon> Submitted <app-text-shell style=\"display: inline;vertical-align: middle;\" [data]=\"item.date_created\"></app-text-shell></h5>\n\n        </div>\n      </ion-col>\n      <ion-col class=\"user-actions-wrapper\">\n        <ion-button class=\"user-action\" (click)=\"openJobApplicationDialog(item)\" expand=\"block\" size=\"small\" color=\"primary\">View Offer<span></span></ion-button>\n       &nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-button class=\"user-action\" [routerLink]=\"['/people/details', item.user_name]\" expand=\"block\" size=\"small\" color=\"secondary\">View Profile</ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ng-template>\n\n  <section [hidden]=\"segmentValue !== 'pending'\">\n    <ion-list class=\"friends-list\" *ngIf=\"JobRequestsList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let item of JobRequestsList\">\n        <ng-container *ngTemplateOutlet=\"pendingJobItem; context: { item: item }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"JobRequestsList.length <= 0\">\n      <h5 class=\"empty-list-message\">No Pending Application</h5>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'shortlisted'\">\n    <ion-list class=\"friends-list\" *ngIf=\"ongoingJobsList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let item of ongoingJobsList\">\n        <ng-container *ngTemplateOutlet=\"ongoingJobItem; context: { item: item }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"ongoingJobsList.length <= 0\">\n      <h5 class=\"empty-list-message\">No Shortlisted Application</h5>\n    </ng-container>\n\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'rejected'\">\n    <ion-list class=\"friends-list\" *ngIf=\"completedJobsList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let item of completedJobsList\">\n        <ng-container *ngTemplateOutlet=\"completedJobItem; context: { item: item }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"completedJobsList.length <= 0\">\n      <h5 class=\"empty-list-message\">No Rejected Applications</h5>\n    </ng-container>\n  </section>\n\n</ion-content>\n\n<ion-footer *ngIf=\"loading\">\n<ion-row class=\"expiration-countdown\">\n  <span class=\"expiration-lead\">\n    Loading Applications...\n      <!-- <h5 style=\"text-align: center;color: #ffffff;\"><ion-spinner name=\"bubbles\" style=\"width:18px;height:18px;display:inline-block;margin:0 auto;stroke:#ffffff;fill:#444;text-align: center;vertical-align: middle;\"></ion-spinner> &nbsp;Loading Applications</h5> -->\n  </span>\n</ion-row>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsJobApplicationsManagerViewJobApplicationViewJobApplicationModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"updateStatusForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>View Application</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"filters-content\">\n    <ion-row class=\"expiration-countdown\" *ngIf=\"jobApplication?.date_updated\">\n      <span class=\"expiration-lead\">This application has been processed on {{jobApplication?.date_updated}}.</span>\n    </ion-row>\n\n    <!------------- 1. applicant profile ------------->\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-image-wrapper\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"jobApplication?.applicant_image\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"user-info-wrapper\">\n        <ion-row class=\"user-data-row\">\n          <ion-col size=\"12\">\n            <h3 class=\"user-name\">\n              <app-text-shell [data]=\"jobApplication?.applicant_name\"></app-text-shell>\n            </h3>\n           \n             <h5 class=\"user-title\" *ngIf=\"jobApplication?.applicantProfile.tagline\" style=\"color: #444444;margin-top: 1px;\">\n              <app-text-shell style=\"display: inline-block;\" animation=\"bouncing\" [data]=\"jobApplication?.applicantProfile.tagline\"></app-text-shell>\n             \n            </h5>\n\n            <ion-badge *ngIf=\"jobApplication?.applicantProfile.online_status=='Online'\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"primary\">{{jobApplication?.applicantProfile.online_status}}</ion-badge>\n            <ion-badge *ngIf=\"jobApplication?.applicantProfile.online_status !=='Online'\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"danger\">{{jobApplication?.applicantProfile.online_status}}</ion-badge>\n  \n            <h5 class=\"user-age\" style=\"font-size:13px;color: #444444;margin-top:3px;margin-bottom:1px;\" *ngIf=\"jobApplication?.applicantProfile.last_active\">\n              <app-text-shell animation=\"bouncing\" [data]=\"'Last Seen: '+jobApplication?.applicantProfile.last_active\"></app-text-shell>\n            </h5>\n  \n            <h5 class=\"user-age\" style=\"font-size:13px;color: #444444;margin-top:3px;margin-bottom:1px;\">\n              <app-text-shell animation=\"bouncing\" [data]=\"'Country: '+jobApplication?.applicantProfile.country\"></app-text-shell>\n            </h5>  \n  \n            <ion-button [routerLink]=\"['/people/details', jobApplication?.user_name]\" class=\"call-to-action-btn\" size=\"small\" color=\"primary\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon> View Profile\n            </ion-button>\n\n          </ion-col>\n        </ion-row>\n       \n      </ion-col>\n    </ion-row>\n<!-------- end of applicant profile--------->\n\n\n<!-------- COMMENT--------->\n<div class=\"details-wrapper\" *ngIf=\"jobApplication?.comment\">\n  <div class=\"accommodations-wrapper\">\n    <h5 class=\"detail-title\">Offer Description</h5>\n    <p>{{jobApplication?.comment}}</p>\n  </div>\n</div>\n<!-------- END COMMENT --------->\n\n\n<!-------- 2. JOB STAT TABLE--------->\n<div class=\"details-wrapper\">\n  <!-- <p>{{jobApplication|json}}</p> -->\n  <div class=\"accommodations-wrapper\">\n   <ion-row class=\"accommodation-row\" *ngIf=\"jobApplication?.salary_type\">\n     <ion-col class=\"icon-wrapper\">       \n       <ion-icon name=\"cash\"  class=\"accommodation-icon\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"4\">\n       <span class=\"accommodation-name\">Offer Price</span>\n     </ion-col>\n     <ion-col size=\"6\">\n       <span class=\"accommodation-value\" *ngIf=\"jobApplication?.salary_type == 'monthly'\">\n         <app-text-shell [data]=\"jobApplication?.amount+' '+jobApplication?.currency+'/Month'\"></app-text-shell>\n       </span>\n       <span class=\"accommodation-value\" *ngIf=\"jobApplication?.salary_type == 'hourly'\">\n         <app-text-shell [data]=\"jobApplication?.amount+' '+jobApplication?.currency+' '+'/Hour'\"></app-text-shell>\n       </span>\n       <span class=\"accommodation-value\" *ngIf=\"jobApplication?.salary_type == 'fixed'\">\n         <app-text-shell [data]=\"jobApplication?.amount+' '+jobApplication?.currency+' (Fixed)'\"></app-text-shell>\n       </span>\n     </ion-col>\n   </ion-row>\n \n   <ion-row class=\"accommodation-row\" *ngIf=\"jobApplication?.delivery_date\">\n     <ion-col class=\"icon-wrapper\">\n       <ion-icon class=\"accommodation-icon\" name=\"stopwatch\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"4\">\n       <span class=\"accommodation-name\">Delivery Time</span>\n     </ion-col>\n     <ion-col size=\"6\">\n       <span class=\"accommodation-value\">\n         <app-text-shell [data]=\"jobApplication?.delivery_date+' Days'\"></app-text-shell>\n       </span>\n     </ion-col>\n   </ion-row>\n \n   <ion-row class=\"accommodation-row\" *ngIf=\"jobApplication?.date_created\">\n    <ion-col class=\"icon-wrapper\">\n      <ion-icon class=\"accommodation-icon\" name=\"calendar\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n      <span class=\"accommodation-name\">Submitted On</span>\n    </ion-col>\n    <ion-col size=\"6\">\n      <span class=\"accommodation-value\">\n        <app-text-shell [data]=\"jobApplication?.date_created\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n   \n </div>\n </div>\n <!-------- END OF JOB STAT TABLE--------->\n\n\n    <section>\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <ion-item-divider style=\"--background: #333333;\">\n          <ion-label style=\"color: #ffffff;\">UPDATE APPLICATION STATUS</ion-label>\n        </ion-item-divider>\n        <h5 style=\"margin-top:18px;padding-left: var(--page-margin);\">Select Status</h5>\n        <ion-radio-group formControlName=\"status\">\n          <ion-row class=\"radio-tags\">\n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">Pending</ion-label>\n              <ion-radio value=\"Pending\"></ion-radio>\n            </ion-item>\n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">\n                <span>Shortlist</span>\n              </ion-label>\n              <ion-radio value=\"Shortlisted\"></ion-radio>\n            </ion-item>\n           \n            <ion-item class=\"radio-tag\" lines=\"none\">\n              <ion-label class=\"tag-label\">\n                <span>Reject</span>\n              </ion-label>\n              <ion-radio value=\"Rejected\"></ion-radio>\n            </ion-item>\n\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-input type=\"hidden\" formControlName=\"item_id\"></ion-input>\n      </ion-list>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateStatusForm.valid\">UPDATE APPLICATION</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./src/app/dbmodels/job-application.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/dbmodels/job-application.model.ts ***!
    \***************************************************/

  /*! exports provided: JobApplicationModel */

  /***/
  function srcAppDbmodelsJobApplicationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobApplicationModel", function () {
      return JobApplicationModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //export class JobApplicationModel extends ShellModel {


    var JobApplicationModel = function JobApplicationModel() {
      _classCallCheck(this, JobApplicationModel);
    };
    /***/

  },

  /***/
  "./src/app/jobs/job-applications-manager/manager.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/manager.module.ts ***!
    \*****************************************************************/

  /*! exports provided: JobApplicationsManagerPageModule */

  /***/
  function srcAppJobsJobApplicationsManagerManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobApplicationsManagerPageModule", function () {
      return JobApplicationsManagerPageModule;
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
    "./src/app/jobs/job-applications-manager/manager.page.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _manager_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./manager.resolver */
    "./src/app/jobs/job-applications-manager/manager.resolver.ts");
    /* harmony import */


    var _view_job_application_view_job_application_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./view-job-application/view-job-application.modal */
    "./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.ts");

    var routes = [{
      path: '',
      component: _manager_page__WEBPACK_IMPORTED_MODULE_6__["JobApplicationsManagerPage"],
      resolve: {
        data: _manager_resolver__WEBPACK_IMPORTED_MODULE_9__["JobApplicationsManagerResolver"]
      }
    }];

    var JobApplicationsManagerPageModule = function JobApplicationsManagerPageModule() {
      _classCallCheck(this, JobApplicationsManagerPageModule);
    };

    JobApplicationsManagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_manager_page__WEBPACK_IMPORTED_MODULE_6__["JobApplicationsManagerPage"], _view_job_application_view_job_application_modal__WEBPACK_IMPORTED_MODULE_10__["ViewJobApplicationModal"]],
      providers: [_manager_resolver__WEBPACK_IMPORTED_MODULE_9__["JobApplicationsManagerResolver"], _jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobService"]],
      entryComponents: [_view_job_application_view_job_application_modal__WEBPACK_IMPORTED_MODULE_10__["ViewJobApplicationModal"]]
    })], JobApplicationsManagerPageModule);
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/manager.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/manager.page.ts ***!
    \***************************************************************/

  /*! exports provided: JobApplicationsManagerPage */

  /***/
  function srcAppJobsJobApplicationsManagerManagerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobApplicationsManagerPage", function () {
      return JobApplicationsManagerPage;
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


    var _view_job_application_view_job_application_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-job-application/view-job-application.modal */
    "./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../jobs.service */
    "./src/app/jobs/jobs.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var JobApplicationsManagerPage =
    /*#__PURE__*/
    function () {
      // @HostBinding('class.is-shell') get isShell() {
      //   return (this.data && this.data.isShell) ? true : false;
      // }
      function JobApplicationsManagerPage(route, ngRouter, authService, jobService, modalController) {
        _classCallCheck(this, JobApplicationsManagerPage);

        this.route = route;
        this.ngRouter = ngRouter;
        this.authService = authService;
        this.jobService = jobService;
        this.modalController = modalController;
        this.segmentValue = 'pending';
        this.searchQuery = '';
        this.showFilters = false;
        this.loading = true;
      }

      _createClass(JobApplicationsManagerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (resolvedRouteData) {
            var friendsDataStore = resolvedRouteData['data'];
            friendsDataStore.state.subscribe(function (state) {
              _this.data = state;
              _this.JobRequestsList = _this.data.pending;
              _this.ongoingJobsList = _this.data.shortlisted;
              _this.completedJobsList = _this.data.rejected;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                console.log("JobApplicationsManagerResolver RESOLVED DATA=> " + JSON.stringify(_this.data));
              }

              _this.loading = false;
            }, function (error) {});
          }, function (error) {});
          this.jobCode = this.route.snapshot.params.job_code;
          console.log("JobCode => " + this.jobCode);
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

          if (this.segmentValue === 'pending') {
            this.JobRequestsList = this.filterList(this.data.pending, query);
          } else if (this.segmentValue === 'shortlisted') {
            this.ongoingJobsList = this.filterList(this.data.shortlisted, query);
          } else if (this.segmentValue === 'rejected') {
            this.completedJobsList = this.filterList(this.data.rejected, query);
          }
        }
      }, {
        key: "filterList",
        value: function filterList(list, query) {
          return list.filter(function (item) {
            return item.applicant_name.toLowerCase().includes(query.toLowerCase());
          });
        }
      }, {
        key: "openJobApplicationDialog",
        value: function openJobApplicationDialog(jobApplication) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _view_job_application_view_job_application_modal__WEBPACK_IMPORTED_MODULE_3__["ViewJobApplicationModal"],
                      //cssClass: 'mini-modal',
                      componentProps: {
                        'jobApplication': jobApplication
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this2.loadAllApplications();
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
        key: "loadAllApplications",
        value: function loadAllApplications() {
          var _this3 = this;

          this.loading = true;
          this.authService.getAuthCache().then(function (results) {
            if (results) {
              var postData = {
                job_id: _this3.jobCode
              };

              _this3.jobService.getJobApplicationsManagerDataSource(results.api_key, postData).subscribe(function (state) {
                if (state) {
                  _this3.data = state;
                  _this3.JobRequestsList = _this3.data.pending;
                  _this3.ongoingJobsList = _this3.data.shortlisted;
                  _this3.completedJobsList = _this3.data.rejected;

                  if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                    console.log("JOB MANAGER REFRESHED DATA=> " + JSON.stringify(_this3.data));
                  }

                  _this3.loading = false;
                }
              });
            }
          });
        }
      }]);

      return JobApplicationsManagerPage;
    }();

    JobApplicationsManagerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    JobApplicationsManagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manager',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manager.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-applications-manager/manager.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/job-tabs.page.scss */
      "./src/app/jobs/job-applications-manager/styles/job-tabs.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/job-tabs.shell.scss */
      "./src/app/jobs/job-applications-manager/styles/job-tabs.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/job-tabs.md.scss */
      "./src/app/jobs/job-applications-manager/styles/job-tabs.md.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], JobApplicationsManagerPage);
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/manager.resolver.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/manager.resolver.ts ***!
    \*******************************************************************/

  /*! exports provided: JobApplicationsManagerResolver */

  /***/
  function srcAppJobsJobApplicationsManagerManagerResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobApplicationsManagerResolver", function () {
      return JobApplicationsManagerResolver;
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


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var JobApplicationsManagerResolver =
    /*#__PURE__*/
    function () {
      function JobApplicationsManagerResolver(userService, storageService, authService) {
        _classCallCheck(this, JobApplicationsManagerResolver);

        this.userService = userService;
        this.storageService = storageService;
        this.authService = authService;
      }

      _createClass(JobApplicationsManagerResolver, [{
        key: "resolve",
        value: function resolve(route) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var authDataVal, jobCode, apiKey, postData, dataSource, dataStore;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH);

                  case 2:
                    authDataVal = _context2.sent;
                    //console.log("JobApplicationsManagerResolver authDataVal => "+JSON.stringify(authDataVal));
                    jobCode = route.params['job_code'];
                    apiKey = authDataVal.api_key; //console.log("JobApplicationsManagerResolver apiKey => "+apiKey);

                    postData = {
                      job_id: jobCode
                    };
                    dataSource = this.userService.getJobApplicationsManagerDataSource(apiKey, postData);
                    dataStore = this.userService.getJobApplicationsManagerStore(dataSource);
                    return _context2.abrupt("return", dataStore);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return JobApplicationsManagerResolver;
    }();

    JobApplicationsManagerResolver.ctorParameters = function () {
      return [{
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    JobApplicationsManagerResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], JobApplicationsManagerResolver);
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/styles/job-tabs.md.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/styles/job-tabs.md.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobApplicationsManagerStylesJobTabsMdScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.md) .user-details-section .user-actions-wrapper {\n  max-width: 12ex;\n  max-width: 12ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXGpvYi1hcHBsaWNhdGlvbnMtbWFuYWdlclxcc3R5bGVzXFxqb2ItdGFicy5tZC5zY3NzIiwic3JjL2FwcC9qb2JzL2pvYi1hcHBsaWNhdGlvbnMtbWFuYWdlci9zdHlsZXMvam9iLXRhYnMubWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9qb2JzL2pvYi1hcHBsaWNhdGlvbnMtbWFuYWdlci9zdHlsZXMvam9iLXRhYnMubWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUubWQpIHtcbiAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgICAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMmV4O1xuICAgICAgbWF4LXdpZHRoOiAxMmNoO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCgucGx0LW1vYmlsZS5tZCkgLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTJleDtcbiAgbWF4LXdpZHRoOiAxMmNoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/styles/job-tabs.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/styles/job-tabs.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobApplicationsManagerStylesJobTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n  --page-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-tags-gutter: 4px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: #3b5998;\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.user-friends-segment {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  background-color: var(--page-segment-background);\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --background: var(--page-segment-background);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --color-checked: var(--ion-color-dark);\n  --indicator-color-checked: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\n.user-friends-segment ion-segment-button ion-label {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) / 4);\n}\n\nion-searchbar.friends-searchbar {\n  padding: var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 5);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\nion-item.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 20ex;\n  max-width: 20ch;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n\n.item-tags {\n  margin-top: 5px;\n}\n\n.item-tags .tag-wrapper {\n  padding-right: var(--page-tags-gutter);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.item-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.item-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);\n  font-size: 11px;\n  font-weight: bold;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXGpvYi1hcHBsaWNhdGlvbnMtbWFuYWdlclxcc3R5bGVzXFxqb2ItdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL2pvYnMvam9iLWFwcGxpY2F0aW9ucy1tYW5hZ2VyL3N0eWxlcy9qb2ItdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBQTtFQUVBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQ0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSx3REFBQTtFQUVBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURPRTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FEU0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ05GOztBRFFFO0VBQ0UsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBRUEsMEJBQUE7RUFDQSxpRkFBQTtBQ1BKOztBRFNJO0VBQ0Usd0NBQUE7RUFDQSwyQ0FBQTtBQ1BOOztBRFlBO0VBQ0UsMkJBQUE7QUNURjs7QURZQTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QUNURjs7QURZQTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FDVEY7O0FEV0U7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNUSjs7QURZRTtFQUNFLDhCQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNYSjs7QURhSTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDWE47O0FEY1E7RUFDRSwyQ0FBQTtBQ1pWOztBRGVRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2JWOztBRGdCUTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUNkVjs7QURtQkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNqQk47O0FEa0JNO0VBQ0UsV0FBQTtBQ2hCUjs7QURzQkE7RUFDRSxlQUFBO0FDbkJGOztBRHFCRTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDbkJKOztBRHFCSTtFQUNFLGtCQUFBO0FDbkJOOztBRHVCRTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0VBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDckJKIiwiZmlsZSI6InNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvc3R5bGVzL2pvYi10YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG5cbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xuXG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNHB4O1xufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk4O1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4udXNlci1mcmllbmRzLXNlZ21lbnQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgIH1cbiAgfVxufVxuXG5pb24tc2VhcmNoYmFyLmZyaWVuZHMtc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uZnJpZW5kcy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbn1cblxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiA1KTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbS5mcmllbmQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWpvYiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWF4LXdpZHRoOiAyMGV4OyAvLyBUaGUgJ3gnIGNoYXJhY3RlciBpcyBzZW1pLXNxdWFyZSBjaGFyXG4gICAgICBtYXgtd2lkdGg6IDIwY2g7IC8vIGNoIGlzIHRoZSBvbmx5IGZvbnQgdW5pdCBiYXNlZCBvbiB0aGUgd2lkdGggb2YgY2hhcmFjdGVyc1xuICAgICAgLnVzZXItYWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pdGVtLXRhZ3Mge1xuICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgLnRhZy13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLml0ZW0tdGFnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIC8gMikgdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xuICAtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDRweDtcbn1cblxuLmV4cGlyYXRpb24tY291bnRkb3duIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhwaXJhdGlvbi1jb3VudGRvd24gLmV4cGlyYXRpb24tbGVhZCB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51c2VyLWZyaWVuZHMtc2VnbWVudCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQpO1xufVxuLnVzZXItZnJpZW5kcy1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAtIHZhcigtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0KSk7XG59XG4udXNlci1mcmllbmRzLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG5cbmlvbi1zZWFyY2hiYXIuZnJpZW5kcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5mcmllbmRzLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xufVxuXG4uZW1wdHktbGlzdC1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDUpO1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1kYXRhLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm86bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbyAudXNlci1qb2Ige1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWF4LXdpZHRoOiAyMGV4O1xuICBtYXgtd2lkdGg6IDIwY2g7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItYWN0aW9ucy13cmFwcGVyIC51c2VyLWFjdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaXRlbS10YWdzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLml0ZW0tdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLml0ZW0tdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5pdGVtLXRhZ3MgLml0ZW0tdGFnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAvIDIpIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/styles/job-tabs.shell.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/styles/job-tabs.shell.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobApplicationsManagerStylesJobTabsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-job > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 70%;\n  -webkit-columns: #222222;\n     -moz-columns: #222222;\n          columns: #222222;\n}\n\n.user-job > app-text-shell.text-loaded {\n  max-width: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXGpvYi1hcHBsaWNhdGlvbnMtbWFuYWdlclxcc3R5bGVzXFxqb2ItdGFicy5zaGVsbC5zY3NzIiwic3JjL2FwcC9qb2JzL2pvYi1hcHBsaWNhdGlvbnMtbWFuYWdlci9zdHlsZXMvam9iLXRhYnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLGdCQUFBO0FDQ0o7O0FER0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9qb2JzL2pvYi1hcHBsaWNhdGlvbnMtbWFuYWdlci9zdHlsZXMvam9iLXRhYnMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnVzZXItam9iID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNzAlO1xuICBjb2x1bW5zOiAjMjIyMjIyO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnVzZXItam9iID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNzAlO1xuICBjb2x1bW5zOiAjMjIyMjIyO1xufVxuLnVzZXItam9iID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/view-job-application/styles/view-job-application.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/view-job-application/styles/view-job-application.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobApplicationsManagerViewJobApplicationStylesViewJobApplicationScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-actions-padding: 5px;\n  --page-border-radius: var(--app-fair-radius);\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.user-details-section {\n  --ion-grid-column-padding: 0px;\n  margin: var(--page-margin);\n}\n\n.user-details-section .user-image-wrapper {\n  max-width: 26%;\n}\n\n.user-details-section .user-info-wrapper {\n  padding-left: var(--page-margin);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.user-details-section .user-info-wrapper .user-data-row {\n  padding-bottom: var(--page-margin);\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-name {\n  margin: 0px 0px 5px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-title {\n  margin: 0px;\n  color: var(--ion-color-medium);\n  font-size: 15px;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .membership-col {\n  padding-left: var(--page-margin);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-membership {\n  display: block;\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: 4px 8px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.user-details-section .user-info-wrapper .actions-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: var(--page-actions-padding);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n}\n\n.user-details-section .user-info-wrapper .actions-row .main-actions {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n  display: -webkit-box;\n  display: flex;\n}\n\n.user-details-section .user-info-wrapper .actions-row .main-actions .call-to-action-btn {\n  padding: 0px var(--page-actions-padding);\n  margin: 0px;\n}\n\n.user-details-section .user-info-wrapper .actions-row .secondary-actions {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.user-details-section .user-info-wrapper .actions-row .secondary-actions .more-btn {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.details-wrapper {\n  margin: calc(var(--page-margin) / 2);\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n\n.accommodations-wrapper {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.accommodations-wrapper .accommodation-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.accommodations-wrapper .accommodation-row + .accommodation-row {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.accommodations-wrapper .accommodation-row .icon-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-right: 20px;\n}\n\n.accommodations-wrapper .accommodation-row .accommodation-icon {\n  font-size: 30px;\n  color: var(--ion-color-medium-shade);\n}\n\n.accommodations-wrapper .accommodation-row .accommodation-name {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.accommodations-wrapper .accommodation-row .accommodation-value {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-medium-tint);\n}\n\n.select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvdmlldy1qb2ItYXBwbGljYXRpb24vc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXGpvYi1hcHBsaWNhdGlvbnMtbWFuYWdlclxcdmlldy1qb2ItYXBwbGljYXRpb25cXHN0eWxlc1xcdmlldy1qb2ItYXBwbGljYXRpb24uc2NzcyIsInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvdmlldy1qb2ItYXBwbGljYXRpb24vc3R5bGVzL3ZpZXctam9iLWFwcGxpY2F0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0VBQ0Esb0RBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7QUNERjs7QURJQTtFQUNFLG9DQUFBO0FDREY7O0FER0M7RUFDQyxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBRUEsWUFBQTtBQ0ZGOztBRE1BO0VBQ0UsOEJBQUE7RUFFQSwwQkFBQTtBQ0pGOztBRE1FO0VBQ0UsY0FBQTtBQ0pKOztBRE9FO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURPSTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDTE47O0FET007RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0xSOztBRFFNO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFNNO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNQUjs7QURVTTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUlI7O0FEWUk7RUFDRSxzQkFBQTtFQUNBLHNEQUFBO0VBRUEseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtBQ1hOOztBRGFNO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNYUjs7QURhUTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtBQ1hWOztBRGVNO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2JSOztBRGVRO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUNkVjs7QURxQkE7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0RBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDcEJGOztBRHNCRTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcEJKOztBRHdCQTtFQUNFLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FDckJGOztBRHVCRTtFQUNFLDhCQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ3RCSjs7QUR3Qkk7RUFDRSx5Q0FBQTtBQ3RCTjs7QUR5Qkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsbUJBQUE7QUN2Qk47O0FEMEJJO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FDeEJOOztBRDJCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUN6Qk47O0FENEJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQzFCTjs7QUQrQkU7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUM1Qko7O0FENkJJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQzNCTjs7QUQ0Qk07RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0FDMUJSOztBRDhCSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQzdCTjs7QUQrQk07RUFDRSxlQUFBO0FDN0JSOztBRGtDRTtFQUNFLCtCQUFBO0VBQ0EsOEVBQUE7QUMvQko7O0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUMvQk47O0FEb0NJO0VBQ0UsK0JBQUE7QUNqQ047O0FEb0NJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNsQ047O0FEc0NBO0VBQ0UsdURBQUE7RUFFQSxxQ0FBQTtBQ3BDRjs7QURzQ0U7RUFDRSxXQUFBO0FDcENKIiwiZmlsZSI6InNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvdmlldy1qb2ItYXBwbGljYXRpb24vc3R5bGVzL3ZpZXctam9iLWFwcGxpY2F0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcblxuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLmZpbHRlcnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuXHRpb24taXRlbS1kaXZpZGVyIHtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cdFx0LS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHQtLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXHRcdC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXHRcdC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuXHRcdGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG4udXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiAyNiU7XG4gIH1cblxuICAudXNlci1pbmZvLXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICAudXNlci1kYXRhLXJvdyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItdGl0bGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW1iZXJzaGlwLWNvbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLW1lbWJlcnNoaXAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucy1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuXG4gICAgICAubWFpbi1hY3Rpb25zIHtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgLm1vcmUtYnRuIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG5cbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5leHBpcmF0aW9uLWxlYWQge1xuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59IFxuXG4uZGV0YWlscy13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgfVxuXG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJiArIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuaWNvbi13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cbn1cblxuICAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhbmdlLWltYWdlLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgd2lkdGg6IDRjaDtcbiAgICAgIGhlaWdodDogNGNoO1xuICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmllbGRzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItZGV0YWlscy1maWVsZHMge1xuICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cblxuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuICB9XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAuc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG4gIC0tcGFnZS1hY3Rpb25zLXBhZGRpbmc6IDVweDtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi5maWx0ZXJzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlsdGVycy1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAyNiU7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyAudXNlci10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLm1lbWJlcnNoaXAtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZsZXgtZ3JvdzogMDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLnVzZXItbWVtYmVyc2hpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZyk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5tYWluLWFjdGlvbnMge1xuICBmbGV4LWdyb3c6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5tYWluLWFjdGlvbnMgLmNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZyk7XG4gIG1hcmdpbjogMHB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cgLnNlY29uZGFyeS1hY3Rpb25zIHtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cgLnNlY29uZGFyeS1hY3Rpb25zIC5tb3JlLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhwaXJhdGlvbi1jb3VudGRvd24gLmV4cGlyYXRpb24tbGVhZCB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZXRhaWxzLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuXG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgKyAuYWNjb21tb2RhdGlvbi1yb3cge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuaWNvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cblxuLnNlbGVjdC11c2VyLWltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCAudXNlci1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDRjaDtcbiAgaGVpZ2h0OiA0Y2g7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biAuYnRuLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/view-job-application/styles/view-job-application.shell.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/view-job-application/styles/view-job-application.shell.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobApplicationsManagerViewJobApplicationStylesViewJobApplicationShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvdmlldy1qb2ItYXBwbGljYXRpb24vc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXGpvYnNcXGpvYi1hcHBsaWNhdGlvbnMtbWFuYWdlclxcdmlldy1qb2ItYXBwbGljYXRpb25cXHN0eWxlc1xcdmlldy1qb2ItYXBwbGljYXRpb24uc2hlbGwuc2NzcyIsInNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvdmlldy1qb2ItYXBwbGljYXRpb24vc3R5bGVzL3ZpZXctam9iLWFwcGxpY2F0aW9uLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvam9icy9qb2ItYXBwbGljYXRpb25zLW1hbmFnZXIvdmlldy1qb2ItYXBwbGljYXRpb24vc3R5bGVzL3ZpZXctam9iLWFwcGxpY2F0aW9uLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ViewJobApplicationModal */

  /***/
  function srcAppJobsJobApplicationsManagerViewJobApplicationViewJobApplicationModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewJobApplicationModal", function () {
      return ViewJobApplicationModal;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _dbmodels_job_application_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../dbmodels/job-application.model */
    "./src/app/dbmodels/job-application.model.ts");
    /* harmony import */


    var _jobs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../jobs.service */
    "./src/app/jobs/jobs.service.ts");

    var ViewJobApplicationModal =
    /*#__PURE__*/
    function () {
      function ViewJobApplicationModal(modalController, firebaseService, authService, toastService, alertController, loadingController, router) {
        _classCallCheck(this, ViewJobApplicationModal);

        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
      }

      _createClass(ViewJobApplicationModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.updateStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            item_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.jobApplication.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.jobApplication.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            updated: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue)
          });
          this.oldStatusVal = this.jobApplication.status;
          this.authService.getAuthCache().then(function (promisedValue) {
            _this4.localUser = promisedValue;
          });
          this.updateStatusForm.get("status").valueChanges.subscribe(function (x) {
            if (x !== _this4.oldStatusVal) {
              _this4.updateStatusForm.controls.updated.patchValue(true);

              _this4.updateStatusForm.get('updated').updateValueAndValidity();
            } else {
              _this4.updateStatusForm.controls.updated.patchValue(false);

              _this4.updateStatusForm.get('updated').updateValueAndValidity();
            }
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal(msg) {
          this.modalController.dismiss(msg);
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var _this5 = this;

          this.presentLoadingWithOptions();
          var postData = {
            item_id: this.updateStatusForm.value.item_id,
            status: this.updateStatusForm.value.status
          };
          this.firebaseService.callApplicationStatusUpdateAPI(this.localUser.api_key, postData).subscribe(function (event) {
            _this5.loadingController.dismiss();

            if (!event.error) {
              _this5.dismissModal(event.message);

              _this5.toastService.presentToast(event.message); //this.router.navigate(['/people/details', event.username]);

            } else {
              _this5.presentAlert(event.message);
            }
          }, function (error) {
            _this5.loadingController.dismiss();

            _this5.presentAlert('Looks like there is a Network Issue.' + error.message);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                    return _context3.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Processing Application',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ViewJobApplicationModal;
    }();

    ViewJobApplicationModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_job_application_model__WEBPACK_IMPORTED_MODULE_7__["JobApplicationModel"])], ViewJobApplicationModal.prototype, "jobApplication", void 0);
    ViewJobApplicationModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-job-application',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-job-application.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-applications-manager/view-job-application/view-job-application.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/filter.page.scss */
      "./src/app/bluspecstyles/filter.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/view-job-application.scss */
      "./src/app/jobs/job-applications-manager/view-job-application/styles/view-job-application.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/view-job-application.shell.scss */
      "./src/app/jobs/job-applications-manager/view-job-application/styles/view-job-application.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _jobs_service__WEBPACK_IMPORTED_MODULE_8__["JobService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ViewJobApplicationModal);
    /***/
  }
}]);
//# sourceMappingURL=job-applications-manager-manager-module-es5.js.map