function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unauthorized-unauthorized-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUnauthorizedUnauthorizedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Not Authorized\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding style=\"background-color: lavender;\">\n  <!-- <div class=\"illustration-wrapper\" style=\"width:70%;max-width:200px;margin:0 auto;text-align: center;\">\n    <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n      <app-image-shell [src]=\"'./assets/images/unauthorized.png'\" [alt]=\"'UnAuthorized'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"not-found-title\" style=\"color: brown;margin-top: 20px;\">Access Denied</div>\n  <div class=\"not-found-text\" style=\"color: brown;\">Looks like you are not authorized to access this content.</div> -->\n\n\n  <!------- Empty View ------->\n  <ion-grid style=\"height: 100%\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column;margin:0 auto;text-align: center;\">\n      <app-image-shell style=\"width:180px;height:180px;\" [src]=\"'./assets/images/unauthorized.png'\" [alt]=\"'UnAuthorized'\"></app-image-shell>\n\n      <h2 style=\"color: #555555;margin-top: 20px;text-align: center;\">ACCESS DENIED</h2>\n  <h5 style=\"color: #666666;margin-top:12px;text-align: center;\">Looks like you are not authorized to access this content.</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n</ion-content>\n\n<ion-footer>\n  <div style=\"margin:15px;\">\n    <ion-button class=\"go-home-btn\" [routerLink]=\"['/dashboard']\" expand=\"block\" fill=\"solid\">My Dashboard</ion-button>\n    \n    <ion-button style =\"margin-top:8px;\" class=\"go-home-btn\" (click)=\"backClicked()\" expand=\"block\" fill=\"outline\">Back</ion-button>\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/unauthorized/unauthorized.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/unauthorized/unauthorized.module.ts ***!
    \*****************************************************/

  /*! exports provided: UnauthorizedPageModule */

  /***/
  function srcAppUnauthorizedUnauthorizedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnauthorizedPageModule", function () {
      return UnauthorizedPageModule;
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


    var _unauthorized_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./unauthorized.page */
    "./src/app/unauthorized/unauthorized.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _unauthorized_page__WEBPACK_IMPORTED_MODULE_6__["UnauthorizedPage"]
    }];

    var UnauthorizedPageModule = function UnauthorizedPageModule() {
      _classCallCheck(this, UnauthorizedPageModule);
    };

    UnauthorizedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _unauthorized_page__WEBPACK_IMPORTED_MODULE_6__["UnauthorizedPage"]
      }])],
      declarations: [_unauthorized_page__WEBPACK_IMPORTED_MODULE_6__["UnauthorizedPage"]]
    })], UnauthorizedPageModule);
    /***/
  },

  /***/
  "./src/app/unauthorized/unauthorized.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/unauthorized/unauthorized.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUnauthorizedUnauthorizedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n}\n\n.not-found-content {\n  background-color: darkturquoise;\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.not-found-content .illustration-wrapper {\n  margin: 0px 10%;\n}\n\n.not-found-content .not-found-title {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.not-found-content .not-found-text {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 40px;\n  font-weight: 500;\n}\n\n.not-found-content .go-home-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5hdXRob3JpemVkL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVuYXV0aG9yaXplZFxcdW5hdXRob3JpemVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQ0FBQTtBQ0RKOztBREtFO0VBQ0ksK0JBQUE7RUFDRixtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZKOztBRElJO0VBQ0UsZUFBQTtBQ0ZOOztBREtJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNITjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLFdBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3R1cnF1b2lzZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgLmlsbHVzdHJhdGlvbi13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiAwcHggMTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdC1mb3VuZC10aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdC1mb3VuZC10ZXh0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZ28taG9tZS1idG4ge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuXG4ubm90LWZvdW5kLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdHVycXVvaXNlO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3QtZm91bmQtY29udGVudCAuaWxsdXN0cmF0aW9uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxMCU7XG59XG4ubm90LWZvdW5kLWNvbnRlbnQgLm5vdC1mb3VuZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5ub3QtZm91bmQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5nby1ob21lLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/unauthorized/unauthorized.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/unauthorized/unauthorized.page.ts ***!
    \***************************************************/

  /*! exports provided: UnauthorizedPage */

  /***/
  function srcAppUnauthorizedUnauthorizedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnauthorizedPage", function () {
      return UnauthorizedPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var UnauthorizedPage =
    /*#__PURE__*/
    function () {
      function UnauthorizedPage(menu, location) {
        _classCallCheck(this, UnauthorizedPage);

        this.menu = menu;
        this.location = location;
      }

      _createClass(UnauthorizedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          var _this = this;

          //alert();
          this.location.subscribe(function (locationChange) {
            if (locationChange) {
              console.log("locationChange" + locationChange);
            }
          });
          setTimeout(function () {
            _this.location.back();
          }, 200);
        }
      }]);

      return UnauthorizedPage;
    }();

    UnauthorizedPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    UnauthorizedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unauthorized',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./unauthorized.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./unauthorized.page.scss */
      "./src/app/unauthorized/unauthorized.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], UnauthorizedPage);
    /***/
  }
}]);
//# sourceMappingURL=unauthorized-unauthorized-module-es5.js.map