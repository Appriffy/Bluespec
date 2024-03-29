function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-summary-summary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/summary/summary.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/summary/summary.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardSummarySummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf=\"localUser != null && localUser?.role_id !== 1\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Dashboard</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"getDataSummaryForDashboard()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-home\">\n \n  <!-- Segment buttons with text and click listeners -->\n<ion-segment mode=\"md\" class=\"stats-segment\" (ionChange)=\"segmentButtonClicked($event)\">\n  <ion-segment-button value=\"total\" checked=\"true\">\n    <ion-label>Total Summary</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"today\">\n    <ion-label>Today</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"monthly\">\n    <ion-label>This Month</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n <!------- Today View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"tabChoice=='today'\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h4 style=\"text-align: center;color: #555555;\">TODAY'S VIEW</h4>\n    <h5 style=\"text-align: center;color: #555555;\">Coming Soon</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Today View ------->\n\n <!------- Monthly View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"tabChoice=='monthly'\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h4 style=\"text-align: center;color: #555555;\">MONTHLY VIEW</h4>\n    <h5 style=\"text-align: center;color: #555555;\">Coming Soon</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Monthly View ------->\n\n <div *ngIf=\"tabChoice=='total'\">\n  <ion-grid *ngIf=\"dashboardSummaryList?.length > 0\">\n    <ion-row class=\"related-deal\">\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\" size=\"12\" *ngFor=\"let items of dashboardSummaryList\">\n   \n      <ion-card text-center padding [routerLink]=\"[items.link]\">\n        <ion-row>\n          <ion-col size=\"3\" align-self-start style=\"vertical-align:middle;\">\n            <ion-icon src=\"{{items.icon_src}}\" class=\"dashicon\" style=\"color:white;\"></ion-icon>\n          </ion-col>\n          <ion-col align-self-end style=\"text-align:right;\">\n            <h1>{{items.value}}</h1>\n            <h5 class=\"related-deal-title\" style=\"margin-bottom:2px;\">\n              {{items.title}}\n            </h5>\n            <p *ngIf=\"items.info\" style=\"margin-top:0px;\">\n              {{items.info}}\n          </p>\n          </ion-col>\n        </ion-row>\n  </ion-card> \n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/dashboard/summary/summary.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/dashboard/summary/summary.module.ts ***!
    \*****************************************************/

  /*! exports provided: SummaryPageModule */

  /***/
  function srcAppDashboardSummarySummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function () {
      return SummaryPageModule;
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


    var _summary_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./summary.page */
    "./src/app/dashboard/summary/summary.page.ts");

    var routes = [{
      path: '',
      component: _summary_page__WEBPACK_IMPORTED_MODULE_7__["SummaryPage"]
    }];

    var SummaryPageModule = function SummaryPageModule() {
      _classCallCheck(this, SummaryPageModule);
    };

    SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_7__["SummaryPage"]]
    })], SummaryPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/summary/summary.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/dashboard/summary/summary.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardSummarySummaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-home ion-icon {\n  font-size: 4em;\n}\n.page-home ion-card {\n  background-color: #0A5392;\n  color: white;\n}\n.dashicon {\n  color: #ffffff;\n}\n.related-deals-wrapper {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.related-deals-wrapper .related-deals-title {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n.related-deals-wrapper .related-deal {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.related-deals-wrapper .related-deal:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.related-deals-wrapper .related-deal .deal-logo-wrapper {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.related-deals-wrapper .related-deal .deal-info-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-title {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 17px;\n}\n.related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N1bW1hcnkvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxzdW1tYXJ5XFxzdW1tYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0FDQVI7QURHSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0RSO0FES0E7RUFDRSxjQUFBO0FDRkY7QURLQTtFQUNJLG9GQUFBO0FDRko7QURJSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FDRk47QURLSTtFQUNFLDhCQUFBO0VBRUEsc0NBQUE7RUFDQSwyQ0FBQTtBQ0pOO0FETU07RUFDRSwyQ0FBQTtBQ0pSO0FET007RUFDRSxrSEFBQTtFQUNBLDZEQUFBO0FDTFI7QURRTTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ05SO0FEUVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNOVjtBRFNRO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ1BWIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ob21lIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwQTUzOTI7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXNoaWNvbiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgIC5yZWxhdGVkLWRlYWxzLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlbGF0ZWQtZGVhbCB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVhbC1sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWFsLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5yZWxhdGVkLWRlYWwtdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIucGFnZS1ob21lIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0ZW07XG59XG4ucGFnZS1ob21lIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBNTM5MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGFzaGljb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtbG9nby13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciAucmVsYXRlZC1kZWFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIC5yZWxhdGVkLWRlYWwtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/summary/summary.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/summary/summary.page.ts ***!
    \***************************************************/

  /*! exports provided: SummaryPage */

  /***/
  function srcAppDashboardSummarySummaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryPage", function () {
      return SummaryPage;
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
    /*! ../../user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
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

    var SummaryPage =
    /*#__PURE__*/
    function () {
      function SummaryPage(menu, route, modalController, alertController, firebaseService, storageService, masterService, authService, toastService, loadingController, router) {
        _classCallCheck(this, SummaryPage);

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

      _createClass(SummaryPage, [{
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

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DASHBOARD_SUMMARY_CACHE).then(function (res) {
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

              _this2.dashboardSummaryList = res.items;
              _this2.last_updated = new Date().getDate(); //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));
              //this.toastService.presentToast(JSON.stringify(res));
              //this.storageService.store(AuthConstants.DASHBOARD_SUMMARY_CACHE, JSON.stringify(res.items));

              _this2.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DASHBOARD_SUMMARY_CACHE, res.items);

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

              _this2.presentAlert('Looks like there is a Network Issue.' + error.message);
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

      return SummaryPage;
    }();

    SummaryPage.ctorParameters = function () {
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

    SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/summary/summary.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary.page.scss */
      "./src/app/dashboard/summary/summary.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SummaryPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-summary-summary-module-es5.js.map