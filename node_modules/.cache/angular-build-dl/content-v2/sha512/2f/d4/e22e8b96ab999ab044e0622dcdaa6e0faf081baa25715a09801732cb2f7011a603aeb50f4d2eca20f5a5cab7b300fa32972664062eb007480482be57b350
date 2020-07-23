function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-jobs-summary-jobs-summary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/jobs-summary/jobs-summary.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/jobs-summary/jobs-summary.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardJobsSummaryJobsSummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"firebase-listing-content\">\n\n<!---------- CHART OPTIONS ------------->\n\n  <ion-card class=\"stats-card\">\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Job Posts</ion-card-subtitle> -->\n      <ion-card-title>Job Posts</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChart></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"stats-card\">\n    <ion-card-header>\n      <ion-card-title>Job Offers</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForJobOffers></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  \n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Job Metrics</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/dashboard/jobs-summary/jobs-summary.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/dashboard/jobs-summary/jobs-summary.module.ts ***!
    \***************************************************************/

  /*! exports provided: JobsSummaryPageModule */

  /***/
  function srcAppDashboardJobsSummaryJobsSummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsSummaryPageModule", function () {
      return JobsSummaryPageModule;
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


    var _jobs_summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jobs-summary.page */
    "./src/app/dashboard/jobs-summary/jobs-summary.page.ts");

    var routes = [{
      path: '',
      component: _jobs_summary_page__WEBPACK_IMPORTED_MODULE_6__["JobsSummaryPage"]
    }];

    var JobsSummaryPageModule = function JobsSummaryPageModule() {
      _classCallCheck(this, JobsSummaryPageModule);
    };

    JobsSummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_jobs_summary_page__WEBPACK_IMPORTED_MODULE_6__["JobsSummaryPage"]]
    })], JobsSummaryPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/jobs-summary/jobs-summary.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/dashboard/jobs-summary/jobs-summary.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardJobsSummaryJobsSummaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9qb2JzLXN1bW1hcnkvam9icy1zdW1tYXJ5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/jobs-summary/jobs-summary.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dashboard/jobs-summary/jobs-summary.page.ts ***!
    \*************************************************************/

  /*! exports provided: JobsSummaryPage */

  /***/
  function srcAppDashboardJobsSummaryJobsSummaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsSummaryPage", function () {
      return JobsSummaryPage;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);

    var JobsSummaryPage =
    /*#__PURE__*/
    function () {
      function JobsSummaryPage() {
        _classCallCheck(this, JobsSummaryPage);

        //colorArrayForOffers: any;
        this.tabChoice = "status";
      }

      _createClass(JobsSummaryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.createBarChart();
          this.createBarChartForJobOffers();
        }
      }, {
        key: "createBarChart",
        value: function createBarChart() {
          this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
              labels: ['PENDING', 'ONGOING', 'COMPLETED'],
              datasets: [{
                label: 'Displaying All Job Posts ',
                data: [118, 17, 25],
                backgroundColor: 'rgb(38, 94, 220)',
                borderColor: 'rgb(38, 220, 129)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "createBarChartForJobOffers",
        value: function createBarChartForJobOffers() {
          this.barsForOffers = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChartForJobOffers.nativeElement, {
            type: 'bar',
            data: {
              labels: ['SENT OFFERS', 'ACCEPTED', 'REJECTED'],
              datasets: [{
                label: 'Displaying All Job Offers ',
                data: [311, 17, 64],
                backgroundColor: 'rgb(38, 94, 220)',
                borderColor: 'rgb(218, 20, 129)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      }]);

      return JobsSummaryPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], JobsSummaryPage.prototype, "barChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChartForJobOffers', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], JobsSummaryPage.prototype, "barChartForJobOffers", void 0);
    JobsSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobs-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobs-summary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/jobs-summary/jobs-summary.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobs-summary.page.scss */
      "./src/app/dashboard/jobs-summary/jobs-summary.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JobsSummaryPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-jobs-summary-jobs-summary-module-es5.js.map