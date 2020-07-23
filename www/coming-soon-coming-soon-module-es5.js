function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coming-soon-coming-soon-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon/coming-soon.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon/coming-soon.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComingSoonComingSoonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Coming Soon\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"not-found-content\">\n  <div class=\"illustration-wrapper\" style=\"height:100%;text-align: center;vertical-align: middle;\">\n   \n    <img [src]=\"'./assets/images/comingsoon.png'\" [alt]=\"'Under development'\" style=\"width:100px;margin:0 auto;\">\n    <div class=\"not-found-title\">Coming Soon</div>\n    <div class=\"not-found-text\">This screen is under development. Get back in the next release to see what we come out with.</div>\n    <ion-button class=\"go-home-btn\" [routerLink]=\"['/app/categories']\" expand=\"block\" fill=\"outline\">Back to Home page</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/coming-soon/coming-soon.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/coming-soon/coming-soon.module.ts ***!
    \***************************************************/

  /*! exports provided: ComingSoonPageModule */

  /***/
  function srcAppComingSoonComingSoonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComingSoonPageModule", function () {
      return ComingSoonPageModule;
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


    var _coming_soon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coming-soon.page */
    "./src/app/coming-soon/coming-soon.page.ts");

    var routes = [{
      path: '',
      component: _coming_soon_page__WEBPACK_IMPORTED_MODULE_6__["ComingSoonPage"]
    }];

    var ComingSoonPageModule =
    /*#__PURE__*/
    function () {
      function ComingSoonPageModule(menu) {
        _classCallCheck(this, ComingSoonPageModule);

        this.menu = menu;
      }

      _createClass(ComingSoonPageModule, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }]);

      return ComingSoonPageModule;
    }();

    ComingSoonPageModule.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    ComingSoonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_coming_soon_page__WEBPACK_IMPORTED_MODULE_6__["ComingSoonPage"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])], ComingSoonPageModule);
    /***/
  },

  /***/
  "./src/app/coming-soon/coming-soon.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/coming-soon/coming-soon.page.ts ***!
    \*************************************************/

  /*! exports provided: ComingSoonPage */

  /***/
  function srcAppComingSoonComingSoonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComingSoonPage", function () {
      return ComingSoonPage;
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

    var ComingSoonPage =
    /*#__PURE__*/
    function () {
      function ComingSoonPage(menu) {
        _classCallCheck(this, ComingSoonPage);

        this.menu = menu;
      }

      _createClass(ComingSoonPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }]);

      return ComingSoonPage;
    }();

    ComingSoonPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    ComingSoonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coming-soon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coming-soon.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coming-soon/coming-soon.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coming-soon.page.scss */
      "./src/app/coming-soon/coming-soon.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], ComingSoonPage);
    /***/
  }
}]);
//# sourceMappingURL=coming-soon-coming-soon-module-es5.js.map