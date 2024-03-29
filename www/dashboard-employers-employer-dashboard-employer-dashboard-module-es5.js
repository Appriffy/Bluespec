function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-employers-employer-dashboard-employer-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardEmployersEmployerDashboardEmployerDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf=\"localUser != null && localUser?.role_id !== 1\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Dashboard</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"getDataSummaryForDashboard()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-home\" style=\"background-color: #eeeeee;\">\n \n  <!-- Segment buttons with text and click listeners -->\n<ion-segment mode=\"md\" class=\"stats-segment\" (ionChange)=\"segmentButtonClicked($event)\">\n  <ion-segment-button value=\"total\" checked=\"true\">\n    <ion-label><ion-icon src=\"./assets/sample-icons/side-menu/dashboard.svg\" style=\"font-size: 20px;display: inline-block;vertical-align: middle;\"></ion-icon> Total Summary</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"chat\">\n    <ion-label><ion-icon src=\"./assets/sample-icons/side-menu/chat.svg\" style=\"font-size: 20px;display: inline-block;vertical-align: middle;\"></ion-icon> Chat</ion-label>\n  </ion-segment-button>\n\n</ion-segment>\n\n <!------- Today View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"tabChoice=='chat'\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h4 style=\"text-align: center;color: #555555;\">COMMUNICATION SUMMARY VIEW</h4>\n    <h5 style=\"text-align: center;color: #555555;\">Coming Soon</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Today View ------->\n\n <div *ngIf=\"tabChoice=='total'\">\n  <ion-grid>\n    <ion-row class=\"related-deal\">\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\" size=\"12\">\n      <ion-card color=\"light\" text-center padding [routerLink]=\"['/jobs/manager']\">\n        <ion-row>\n          <ion-col size=\"3\" align-self-start style=\"vertical-align:middle;\">\n            <ion-icon src=\"./assets/sample-icons/side-menu/documents-attach.svg\" class=\"dashicon\" style=\"color: white;\"></ion-icon>\n            <ion-icon name=\"documents\" class=\"dashicon\" style=\"color: white;\"></ion-icon>\n          </ion-col>\n          <ion-col align-self-end style=\"text-align:right;\">\n            <h1 class=\"user-name\" *ngIf=\"dashboardSummaryList\">\n              <app-text-shell animation=\"bouncing\" [data]=\"dashboardSummaryList[0].pendingJobs?dashboardSummaryList[0].pendingJobs:'0'\"></app-text-shell>\n            </h1>\n            <h5 class=\"related-deal-title\" style=\"margin-bottom:2px;\">\n              PENDING JOBS\n            </h5>\n            <p style=\"margin-top:0px;\">\n              Manage your job requests\n          </p>\n          </ion-col> </ion-row></ion-card></ion-col>\n\n\n\n          <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\" size=\"12\">\n            <ion-card text-center padding [routerLink]=\"['/jobs/manager', {tab:'ongoing_jobs'}]\">\n              <ion-row>\n                <ion-col size=\"3\" align-self-start style=\"vertical-align:middle;\">\n                  <ion-icon src=\"./assets/sample-icons/side-menu/timer.svg\" class=\"dashicon\" style=\"color: white;\"></ion-icon>\n                </ion-col>\n                <ion-col align-self-end style=\"text-align:right;\">\n                  <h1 class=\"user-name\" *ngIf=\"dashboardSummaryList\">\n                    <app-text-shell animation=\"bouncing\" [data]=\"dashboardSummaryList[0].ongoingJobs?dashboardSummaryList[0].ongoingJobs:'0'\"></app-text-shell>\n                  </h1>\n                  <h5 class=\"related-deal-title\" style=\"margin-bottom:2px;\">\n                    ONGOING JOBS\n                  </h5>\n                  <p style=\"margin-top:0px;\">\n                    Track progress of currently ongoing jobs\n                </p>\n                </ion-col></ion-row></ion-card></ion-col>\n                \n\n        </ion-row>\n  </ion-grid>\n</div>\n\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/dashboard/employers/employer-dashboard/employer-dashboard.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/dashboard/employers/employer-dashboard/employer-dashboard.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: EmployerDashboardPageModule */

  /***/
  function srcAppDashboardEmployersEmployerDashboardEmployerDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployerDashboardPageModule", function () {
      return EmployerDashboardPageModule;
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
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _employer_dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./employer-dashboard.page */
    "./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.ts");

    var routes = [{
      path: '',
      component: _employer_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["EmployerDashboardPage"]
    }];

    var EmployerDashboardPageModule = function EmployerDashboardPageModule() {
      _classCallCheck(this, EmployerDashboardPageModule);
    };

    EmployerDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_employer_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["EmployerDashboardPage"]]
    })], EmployerDashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardEmployersEmployerDashboardEmployerDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-home ion-icon {\n  font-size: 4em;\n}\n.page-home ion-card {\n  background-color: #0A5392;\n  color: white;\n}\n.dashicon {\n  color: #ffffff;\n}\n.related-deals-wrapper {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.related-deals-wrapper .related-deals-title {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n.related-deals-wrapper .related-deal {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.related-deals-wrapper .related-deal:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.related-deals-wrapper .related-deal .deal-logo-wrapper {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.related-deals-wrapper .related-deal .deal-info-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-title {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 17px;\n}\n.related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2VtcGxveWVycy9lbXBsb3llci1kYXNoYm9hcmQvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxlbXBsb3llcnNcXGVtcGxveWVyLWRhc2hib2FyZFxcZW1wbG95ZXItZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2VtcGxveWVycy9lbXBsb3llci1kYXNoYm9hcmQvZW1wbG95ZXItZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7QUNBUjtBREdJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDRFI7QURLQTtFQUNFLGNBQUE7QUNGRjtBREtBO0VBQ0ksb0ZBQUE7QUNGSjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUNGTjtBREtJO0VBQ0UsOEJBQUE7RUFFQSxzQ0FBQTtFQUNBLDJDQUFBO0FDSk47QURNTTtFQUNFLDJDQUFBO0FDSlI7QURPTTtFQUNFLGtIQUFBO0VBQ0EsNkRBQUE7QUNMUjtBRFFNO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTlI7QURRUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ05WO0FEU1E7RUFDRSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDUFYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZW1wbG95ZXJzL2VtcGxveWVyLWRhc2hib2FyZC9lbXBsb3llci1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaG9tZSB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMEE1MzkyO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGFzaGljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAucmVsYXRlZC1kZWFscy10aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWxhdGVkLWRlYWwge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuXHJcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlYWwtbG9nby13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVhbC1pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAucmVsYXRlZC1kZWFsLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlbGF0ZWQtZGVhbC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIiwiLnBhZ2UtaG9tZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuLnBhZ2UtaG9tZSBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTUzOTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhc2hpY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMykgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWxzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWxvZ28td3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xKTtcbn1cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1pbmZvLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1pbmZvLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbC10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciAucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: EmployerDashboardPage */

  /***/
  function srcAppDashboardEmployersEmployerDashboardEmployerDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployerDashboardPage", function () {
      return EmployerDashboardPage;
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
    /*! ../../../user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");

    var EmployerDashboardPage =
    /*#__PURE__*/
    function () {
      function EmployerDashboardPage(menu, route, modalController, alertController, firebaseService, storageService, masterService, authService, toastService, loadingController, router) {
        _classCallCheck(this, EmployerDashboardPage);

        this.menu = menu;
        this.route = route;
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.storageService = storageService;
        this.masterService = masterService;
        this.authService = authService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
        this.tabChoice = "total";
      }

      _createClass(EmployerDashboardPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menu.enable(true);
        }
      }, {
        key: "segmentButtonClicked",
        value: function segmentButtonClicked(ev) {
          //console.log('Segment button clicked', ev);
          this.tabChoice = ev.detail.value;
          console.log('Selected Choice: ', this.tabChoice);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //this.getDataSummaryForDashboard();
          this.authService.getAuthCache().then(function (res) {
            if (res) {
              _this.localUser = res;
            }
          }); //Start with the stored Cache

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].EMP_DASHBOARD_SUMMARY_CACHE).then(function (res) {
            if (res) {
              //this.userDataDebug = JSON.stringify(this.localUser);
              if (res === null || res === undefined) {
                console.log("Null Cache => getDataSummaryForDashboard()");

                _this.getDataSummaryForDashboard();
              } else {
                console.log("Cache Exists => Escaped getDataSummaryForDashboard(): Saved: " + JSON.stringify(res));
                _this.dashboardSummaryList = res;
              }
            } else {
              console.log("No Cache => getDataSummaryForDashboard()");

              _this.getDataSummaryForDashboard();
            }
          });
        }
      }, {
        key: "getDataSummaryForDashboard",
        value: function getDataSummaryForDashboard() {
          var _this2 = this;

          this.presentLoadingWithOptions();
          this.authService.getAuthKey().then(function (apiKey) {
            _this2.firebaseService.fetchMyDashboard(apiKey).subscribe(function (res) {
              _this2.loadingController.dismiss();

              _this2.last_updated = new Date().getDate();
              _this2.dashboardSummaryList = res.items;

              _this2.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].EMP_DASHBOARD_SUMMARY_CACHE, res.items);

              console.log('#### Result Received and Saved ##### ' + JSON.stringify(res.items));

              if (res.error) {
                _this2.presentAlert(res.message);
              } else {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                  _this2.toastService.presentToast("Debug Message: All is well.");
                }
              }
            }, function (error) {
              _this2.loadingController.dismiss();

              _this2.presentAlert('Looks like there is a Network Issue.');
            });
          });
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
                      duration: 5000,
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
      }]);

      return EmployerDashboardPage;
    }();

    EmployerDashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EmployerDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employer-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employer-dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employer-dashboard.page.scss */
      "./src/app/dashboard/employers/employer-dashboard/employer-dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], EmployerDashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-employers-employer-dashboard-employer-dashboard-module-es5.js.map