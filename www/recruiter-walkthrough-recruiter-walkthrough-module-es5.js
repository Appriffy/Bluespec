function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recruiter-walkthrough-recruiter-walkthrough-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter-walkthrough/recruiter-walkthrough.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter-walkthrough/recruiter-walkthrough.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecruiterWalkthroughRecruiterWalkthroughPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-walkthrough-button\" fill=\"clear\" (click)=\"skipWalkthrough()\">skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides class=\"walkthrough-slides\" pager=\"true\" [options]=\"slidesOptions\">\n    <ion-slide class=\"first-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <img src=\"assets/images/tut-recruiter1.png\"/>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 90 20\" style=\"enable-background:new 0 0 90 20;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col ion-text-center\">\n          <div class=\"info-wrapper\">\n            <h3 class=\"info-title ion-text-center\">FIND PROFESSIONALS ANYTIME. ANYWHERE.</h3>\n            <p class=\"info-paragraph ion-text-center\">\n              We make it easy for you to find, hire and manage best matches for your Job requirements. Hiring for your Project is really simple with Bluspec.\n            </p>\n            <p class=\"info-paragraph ion-text-center\">\n              Find a range of skilled professionals in a wide range of job skills in any area of your choice.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide class=\"second-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <img src=\"assets/images/tut-recruiter2.png\"/>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2024%20Q56%2024%2048%2016%20Q34%200%2022%2010%20Q10%2022%200%208%20Z -->\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 24\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col\">\n          <div class=\"info-wrapper ion-text-center\">\n            <h3 class=\"info-title ion-text-center\">START BY POSTING JOB</h3>\n            <p class=\"info-paragraph\">\n              Tell us about your requirement in detail with the specific skills required.\n            </p>\n            <p class=\"info-paragraph\">\n              Our intelligent search functionality can facilitate in finding your best match based on skills, location, work experience and reviews.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide class=\"third-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <img src=\"assets/images/tut-recruiter3.png\"/>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C19%205%2025%2014%2032%2014%20S45%205%2059%205%20H64%20V0%20Z -->\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 14\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col ion-text-center\">\n          <div class=\"info-wrapper\">\n            <h3 class=\"info-title ion-text-center\">COMPARE & SELECT BIDDERS</h3>\n            <p class=\"info-paragraph ion-text-center\">\n             Let us connect you to the best matches who are willing to work out your requirement. Evaluate bids, taking into account their qualifications, discussion, timeline and overall cost. Review their profile, chat or call and get started.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n    <ion-slide class=\"fourth-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <img src=\"assets/images/tut-recruiter4.png\"/>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 14\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col ion-text-center\">\n          <div class=\"info-wrapper\">\n            <h3 class=\"info-title ion-text-center\">APPROVE WORK BEFORE PAYMENT</h3>\n            <p class=\"info-paragraph ion-text-center\">Pay by the hour, or a fixed price for the entire project. Only pay for work you authorize.</p>\n            <p class=\"info-paragraph ion-text-center\">\n              Access your invoices and transaction history on Bluspec.\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n    <ion-slide class=\"last-slide illustration-and-decoration-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"illustration-col\">\n          <img src=\"assets/images/tut-recruiter5.png\"/>\n        </ion-col>\n        <ion-col class=\"decoration-col\">\n      \n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 18\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z\"/>\n          </svg>\n        </ion-col>\n        <ion-col class=\"info-col\">\n          <ion-row class=\"info-outer\">\n            <ion-col>\n              <div class=\"info-wrapper ion-text-center\">\n                <h3 class=\"info-title ion-text-center\">GET STARTED</h3>\n                <p class=\"info-paragraph ion-text-center\">\n                   Bluspec has a lot to offer to recuiters looking for effective manpower with verified skills. Register a free account to discover what we have for you.\n                </p>\n              </div>\n            </ion-col>\n            <ion-col class=\"call-to-actions-wrapper\">\n              <ion-button class=\"get-started-button\" expand=\"block\" [routerLink]=\"['/take-photo']\">Get Started</ion-button>\n              <ion-row class=\"alt-call-to-action-row\">\n                <span class=\"cta-leading-text\">Already have an account?</span>\n                <ion-button class=\"login-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">\n                  Login here\n                </ion-button>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/recruiter-walkthrough/recruiter-walkthrough.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/recruiter-walkthrough/recruiter-walkthrough.module.ts ***!
    \***********************************************************************/

  /*! exports provided: RecruiterWalkthroughPageModule */

  /***/
  function srcAppRecruiterWalkthroughRecruiterWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecruiterWalkthroughPageModule", function () {
      return RecruiterWalkthroughPageModule;
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


    var _recruiter_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recruiter-walkthrough.page */
    "./src/app/recruiter-walkthrough/recruiter-walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _recruiter_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["RecruiterWalkthroughPage"]
    }];

    var RecruiterWalkthroughPageModule = function RecruiterWalkthroughPageModule() {
      _classCallCheck(this, RecruiterWalkthroughPageModule);
    };

    RecruiterWalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_recruiter_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["RecruiterWalkthroughPage"]]
    })], RecruiterWalkthroughPageModule);
    /***/
  },

  /***/
  "./src/app/recruiter-walkthrough/recruiter-walkthrough.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/recruiter-walkthrough/recruiter-walkthrough.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecruiterWalkthroughRecruiterWalkthroughPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\nion-header ion-toolbar {\n  --ion-toolbar-background: transparent;\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n}\n\n.walkthrough-slides {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.illustration-and-decoration-slide .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.illustration-and-decoration-slide .illustration-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 0;\n  min-height: auto;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-width: 30vh;\n  padding: 0px;\n}\n\n.illustration-and-decoration-slide .decoration-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 12vh;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .decoration-col .vector-decoration {\n  fill: currentColor;\n  color: var(--page-vector-decoration-fill);\n  background-color: var(--page-background);\n  padding-bottom: 4px;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  shape-rendering: geometricprecision;\n  height: calc(100% + 1px);\n}\n\n.illustration-and-decoration-slide .info-col {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 0;\n  min-height: auto;\n  background-color: var(--page-background);\n  margin-bottom: -1px;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper {\n  margin: calc(var(--page-margin) * -1) var(--page-margin) 0px;\n  text-align: left;\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n  color: var(--ion-color-dark);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph:last-child {\n  margin-bottom: 0px;\n}\n\n.first-slide {\n  --page-vector-decoration-fill: var(--page-first-slide-background);\n}\n\n.second-slide {\n  --page-vector-decoration-fill: var(--page-second-slide-background);\n}\n\n.third-slide {\n  --page-vector-decoration-fill: var(--page-third-slide-background);\n}\n\n.last-slide {\n  --page-vector-decoration-fill: var(--page-last-slide-background);\n}\n\n.last-slide .slide-inner-row {\n  border-width: 0px;\n}\n\n.last-slide .info-col {\n  padding: var(--page-margin);\n}\n\n.last-slide .info-col .info-outer {\n  height: 100%;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.last-slide .info-col .info-outer .info-wrapper {\n  margin: calc(var(--page-margin) * -1) 0px 0px;\n}\n\n.last-slide .info-col .info-outer .call-to-actions-wrapper {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.last-slide .info-col .get-started-button {\n  margin: 0px;\n}\n\n.last-slide .info-col .alt-call-to-action-row {\n  padding-top: 5px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.last-slide .info-col .alt-call-to-action-row .cta-leading-text {\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.last-slide .info-col .alt-call-to-action-row .login-button {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n:host(.first-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host(.last-slide-active) ::ng-deep .walkthrough-slides .swiper-pagination {\n  display: none;\n}\n\n:host(.last-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjcnVpdGVyLXdhbGt0aHJvdWdoL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHJlY3J1aXRlci13YWxrdGhyb3VnaFxccmVjcnVpdGVyLXdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjcnVpdGVyLXdhbGt0aHJvdWdoL3JlY3J1aXRlci13YWxrdGhyb3VnaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQ0FBQTtFQUNBLHdDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFFQSwyREFBQTtBQ0pKOztBRFNJO0VBQ0UscUNBQUE7QUNOTjs7QURTTTtFQUNFLGtDQUFBO0FDUFI7O0FEWUU7RUFFRSxrQkFBQTtFQUNBLE1BQUE7QUNWSjs7QURhRTtFQUNFLDBDQUFBO0VBQ0EsaURBQUE7RUFFQSxZQUFBO0FDWEo7O0FEYUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxxQ0FBQTtFQUVBLG9FQUFBO0VBQ0EsNEJBQUE7RUFDQSxvREFBQTtBQ2JOOztBRGtCSTtFQUNFLDhCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNoQk47O0FEbUJJO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNqQk47O0FEb0JJO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLGdCQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQ3BCTjs7QURzQk07RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUdBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0FDdEJSOztBRDBCSTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBR0EsbUJBQUE7RUFFQSw2Q0FBQTtVQUFBLHFDQUFBO0FDM0JOOztBRDZCTTtFQUNFLDREQUFBO0VBQ0EsZ0JBQUE7QUMzQlI7O0FENkJRO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUMzQlY7O0FEOEJRO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUM1QlY7O0FEOEJVO0VBQ0Usa0JBQUE7QUM1Qlo7O0FEbUNFO0VBQ0UsaUVBQUE7QUNoQ0o7O0FEbUNFO0VBQ0Usa0VBQUE7QUNoQ0o7O0FEbUNFO0VBQ0UsaUVBQUE7QUNoQ0o7O0FEbUNFO0VBQ0UsZ0VBQUE7QUNoQ0o7O0FEa0NJO0VBRUUsaUJBQUE7QUNqQ047O0FEb0NJO0VBQ0UsMkJBQUE7QUNsQ047O0FEb0NNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNsQ1I7O0FEb0NRO0VBQ0UsNkNBQUE7QUNsQ1Y7O0FEcUNRO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FDbkNWOztBRHVDTTtFQUNFLFdBQUE7QUNyQ1I7O0FEd0NNO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ3RDUjs7QUR3Q1E7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUN0Q1Y7O0FEeUNRO0VBQ0UsbUNBQUE7RUFFQSxXQUFBO0FDeENWOztBRCtDSTtFQUNFLGtCQUFBO0FDNUNOOztBRGtETTtFQUNFLGFBQUE7QUMvQ1I7O0FEbURJO0VBQ0Usa0JBQUE7QUNqRE47O0FEeURJO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0VBRUEsK0ZBQUE7QUN2RE47O0FEeURNO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQ3ZEUiIsImZpbGUiOiJzcmMvYXBwL3JlY3J1aXRlci13YWxrdGhyb3VnaC9yZWNydWl0ZXItd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gICAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xyXG4gICAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcclxuICAgIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xyXG4gIFxyXG4gICAgLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQ6ICNjMWViZmY7XHJcbiAgICAtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQ6ICNhOWViZDI7XHJcbiAgICAtLXBhZ2UtdGhpcmQtc2xpZGUtYmFja2dyb3VuZDogI2YwY2JlNTtcclxuICAgIC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQ6ICNlZWYzZmY7XHJcbiAgXHJcbiAgICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgICAgIC8vIEZvciB0aGUgc2tpcCBidXR0b25cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAvLyBUbyBnZXQgdGhlIGlvbi1jb250ZW50IGJlaGluZCB0aGUgaW9uLWhlYWRlclxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAud2Fsa3Rocm91Z2gtc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICAuc2xpZGUtaW5uZXItcm93IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAvLyBIZWFkZXIgc3BhY2VcclxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLWFwcC1oZWFkZXItaGVpZ2h0KTtcclxuICAgICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXHJcbiAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcclxuICAgIC5zbGlkZS1pbm5lci1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcbiAgXHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXgtd2lkdGg6IDMwdmg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgXHJcbiAgICAgIC8vIFRvIHByZXZlbnQgdHJhbnNwYXJlbnQgbGluZSBjYXVzZWQgYnkgcGl4ZWwgZnJhY3Rpb25zXHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgXHJcbiAgICAgIC52ZWN0b3ItZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBcclxuICAgICAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW5mby1jb2wge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gICAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICAvLyBQcmV2ZW50IC5pbmZvLXdyYXBwZXIgdGV4dCB0byBibGluayBhcyBpdCdzIG92ZXIgdGhlIHByZXZpb3VzIGVsZW1lbnQgKFNhZmFyaSBpc3N1ZSlcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICBcclxuICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgXHJcbiAgICAgICAgLmluZm8tdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuaW5mby1wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgXHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1zbGlkZSB7XHJcbiAgICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbiAgXHJcbiAgLnNlY29uZC1zbGlkZSB7XHJcbiAgICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XHJcbiAgfVxyXG4gIFxyXG4gIC50aGlyZC1zbGlkZSB7XHJcbiAgICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbiAgXHJcbiAgLmxhc3Qtc2xpZGUge1xyXG4gICAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgIC5zbGlkZS1pbm5lci1yb3cge1xyXG4gICAgICAvLyBJbiB0aGUgbGFzdCBzbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24gaXMgaGlkZGVuXHJcbiAgICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmluZm8tY29sIHtcclxuICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgICAuaW5mby1vdXRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG4gICAgICAgIC5pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5nZXQtc3RhcnRlZC1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgXHJcbiAgICAgICAgLmN0YS1sZWFkaW5nLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAubG9naW4tYnV0dG9uIHtcclxuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIFxyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0KC5maXJzdC1zbGlkZS1hY3RpdmUpIHtcclxuICAgIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSB7XHJcbiAgICA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyB7XHJcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBJU1NVRTogLnN3aXBlci1wYWdnaW5hdGlvbiBnZXRzIHJlbmRlcmVkIGR5bmFtaWNhbGx5LiBUaGF0IHByZXZlbnRzIHN0eWxpbmcgdGhlIGVsZW1lbnRzIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgQW5ndWxhciBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbiAgLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxyXG4gIC8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMge1xyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxyXG4gICAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcclxuICBcclxuICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG4gIC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjYzFlYmZmO1xuICAtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQ6ICNhOWViZDI7XG4gIC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kOiAjZjBjYmU1O1xuICAtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjZWVmM2ZmO1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4ud2Fsa3Rocm91Z2gtc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2Fsa3Rocm91Z2gtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1hcHAtaGVhZGVyLWhlaWdodCk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xufVxuXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbGx1c3RyYXRpb24tY29sIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMzB2aDtcbiAgcGFkZGluZzogMHB4O1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBtaW4taGVpZ2h0OiAxMnZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wgLnZlY3Rvci1kZWNvcmF0aW9uIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBjb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XG4gIGhlaWdodDogY2FsYygxMDAlICsgMXB4KTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIgLmluZm8tcGFyYWdyYXBoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby1wYXJhZ3JhcGg6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZpcnN0LXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5zZWNvbmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi50aGlyZC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4ubGFzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG4ubGFzdC1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmluZm8tb3V0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuaW5mby1vdXRlciAuaW5mby13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5pbmZvLW91dGVyIC5jYWxsLXRvLWFjdGlvbnMtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5nZXQtc3RhcnRlZC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuYWx0LWNhbGwtdG8tYWN0aW9uLXJvdyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IC5jdGEtbGVhZGluZy10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmFsdC1jYWxsLXRvLWFjdGlvbi1yb3cgLmxvZ2luLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDBweDtcbn1cblxuOmhvc3QoLmZpcnN0LXNsaWRlLWFjdGl2ZSkgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcbn1cbjpob3N0IDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recruiter-walkthrough/recruiter-walkthrough.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/recruiter-walkthrough/recruiter-walkthrough.page.ts ***!
    \*********************************************************************/

  /*! exports provided: RecruiterWalkthroughPage */

  /***/
  function srcAppRecruiterWalkthroughRecruiterWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecruiterWalkthroughPage", function () {
      return RecruiterWalkthroughPage;
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

    var RecruiterWalkthroughPage =
    /*#__PURE__*/
    function () {
      function RecruiterWalkthroughPage(menu) {
        _classCallCheck(this, RecruiterWalkthroughPage);

        this.menu = menu;
        this.slidesOptions = {
          zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images

          }
        };
        this.isFirstSlide = true;
        this.isLastSlide = false;
      }

      _createClass(RecruiterWalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // ViewChild is set
          this.slides.isBeginning().then(function (isBeginning) {
            _this.isFirstSlide = isBeginning;
          });
          this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isBeginning().then(function (isBeginning) {
              _this.isFirstSlide = isBeginning;
            });

            _this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            });
          });
        }
      }, {
        key: "skipWalkthrough",
        value: function skipWalkthrough() {
          var _this2 = this;

          // Skip to the last slide
          this.slides.length().then(function (length) {
            _this2.slides.slideTo(length);
          });
        }
      }]);

      return RecruiterWalkthroughPage;
    }();

    RecruiterWalkthroughPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], RecruiterWalkthroughPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.first-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RecruiterWalkthroughPage.prototype, "isFirstSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RecruiterWalkthroughPage.prototype, "isLastSlide", void 0);
    RecruiterWalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recruiter-walkthrough',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recruiter-walkthrough.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recruiter-walkthrough/recruiter-walkthrough.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recruiter-walkthrough.page.scss */
      "./src/app/recruiter-walkthrough/recruiter-walkthrough.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], RecruiterWalkthroughPage);
    /***/
  }
}]);
//# sourceMappingURL=recruiter-walkthrough-recruiter-walkthrough-module-es5.js.map