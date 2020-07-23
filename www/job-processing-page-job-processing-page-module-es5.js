function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-processing-page-job-processing-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-processing-page/job-processing-page.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-processing-page/job-processing-page.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsJobProcessingPageJobProcessingPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>job-processing-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/jobs/job-processing-page/job-processing-page.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/jobs/job-processing-page/job-processing-page.module.ts ***!
    \************************************************************************/

  /*! exports provided: JobProcessingPagePageModule */

  /***/
  function srcAppJobsJobProcessingPageJobProcessingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobProcessingPagePageModule", function () {
      return JobProcessingPagePageModule;
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


    var _job_processing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./job-processing-page.page */
    "./src/app/jobs/job-processing-page/job-processing-page.page.ts");

    var routes = [{
      path: '',
      component: _job_processing_page_page__WEBPACK_IMPORTED_MODULE_6__["JobProcessingPagePage"]
    }];

    var JobProcessingPagePageModule = function JobProcessingPagePageModule() {
      _classCallCheck(this, JobProcessingPagePageModule);
    };

    JobProcessingPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_job_processing_page_page__WEBPACK_IMPORTED_MODULE_6__["JobProcessingPagePage"]]
    })], JobProcessingPagePageModule);
    /***/
  },

  /***/
  "./src/app/jobs/job-processing-page/job-processing-page.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/jobs/job-processing-page/job-processing-page.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobProcessingPageJobProcessingPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvam9iLXByb2Nlc3NpbmctcGFnZS9qb2ItcHJvY2Vzc2luZy1wYWdlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/jobs/job-processing-page/job-processing-page.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/jobs/job-processing-page/job-processing-page.page.ts ***!
    \**********************************************************************/

  /*! exports provided: JobProcessingPagePage */

  /***/
  function srcAppJobsJobProcessingPageJobProcessingPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobProcessingPagePage", function () {
      return JobProcessingPagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JobProcessingPagePage =
    /*#__PURE__*/
    function () {
      function JobProcessingPagePage() {
        _classCallCheck(this, JobProcessingPagePage);
      }

      _createClass(JobProcessingPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JobProcessingPagePage;
    }();

    JobProcessingPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-processing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-processing-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job-processing-page/job-processing-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./job-processing-page.page.scss */
      "./src/app/jobs/job-processing-page/job-processing-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JobProcessingPagePage);
    /***/
  }
}]);
//# sourceMappingURL=job-processing-page-job-processing-page-module-es5.js.map