function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-not-found-page-not-found-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Page Not Found\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"not-found-content\" padding>\n  <div class=\"illustration-wrapper\" style=\"width:70%;max-width:280px;margin:0 auto;text-align: center;\">\n    <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n      <app-image-shell [src]=\"'./assets/images/page-not-found.svg'\" [alt]=\"'not found page'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"not-found-title\" style=\"color: #444444;margin-top: 20px;\">YOU ARE LOST</div>\n  <div class=\"not-found-text\" style=\"color: #666666;margin:20px;\">Looks like the content you are trying to access is not available at this moment.</div>\n  \n</ion-content>\n\n<ion-footer style=\"background-color: #ffffff;\">\n  <div style=\"margin:15px;\">\n\n    <ion-row>\n      <ion-col size=\"6\" *ngIf=\"(roleID == 1 || roleID == 2)\">\n        <ion-button class=\"go-home-btn\" (click)=\"goToDashboard()\" expand=\"block\" fill=\"solid\">\n          <ion-icon src=\"./assets/sample-icons/side-menu/analytics.svg\"></ion-icon> &nbsp;&nbsp;My Dashboard</ion-button>\n      </ion-col>\n      \n      <ion-col size=\"6\" *ngIf=\"(roleID == 0 || roleID == 3)\">\n        <ion-button class=\"go-home-btn\" (click)=\"goToHome()\" expand=\"block\" fill=\"outline\">\n          <ion-icon src=\"./assets/sample-icons/side-menu/home.svg\"></ion-icon> &nbsp;&nbsp;Bluspec Home</ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button class=\"go-home-btn\" (click)=\"goToMyProfile()\" expand=\"block\" fill=\"solid\">\n          <ion-icon src=\"./assets/sample-icons/side-menu/contact-card.svg\"></ion-icon> &nbsp;&nbsp;My Profile</ion-button>\n      </ion-col>\n    </ion-row>\n   \n\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.module.ts ***!
    \*********************************************************/

  /*! exports provided: PageNotFoundModule */

  /***/
  function srcAppPageNotFoundPageNotFoundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function () {
      return PageNotFoundModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _page_not_found_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-not-found.page */
    "./src/app/page-not-found/page-not-found.page.ts");

    var PageNotFoundModule = function PageNotFoundModule() {
      _classCallCheck(this, PageNotFoundModule);
    };

    PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_7__["PageNotFound"]
      }])],
      declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_7__["PageNotFound"]]
    })], PageNotFoundModule);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.page.ts ***!
    \*******************************************************/

  /*! exports provided: PageNotFound */

  /***/
  function srcAppPageNotFoundPageNotFoundPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFound", function () {
      return PageNotFound;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PageNotFound =
    /*#__PURE__*/
    function () {
      function PageNotFound(menu, authService, location, router) {
        _classCallCheck(this, PageNotFound);

        this.menu = menu;
        this.authService = authService;
        this.location = location;
        this.router = router;
        this.roleID = 0;
      }

      _createClass(PageNotFound, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.menu.enable(false);
          this.authService.getAuthCache().then(function (datum) {
            if (datum) {
              _this.roleID = datum.role_id;
            }
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          alert(this.location.path); //this.location.back();
        }
      }, {
        key: "goToMyProfile",
        value: function goToMyProfile() {
          this.router.navigate(["people/profile"]);
        }
      }, {
        key: "goToDashboard",
        value: function goToDashboard() {
          this.router.navigate(["dashboard/summary"]);
        }
      }, {
        key: "goToMyJobs",
        value: function goToMyJobs() {
          this.router.navigate(["manage-jobs"]);
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(["welcome"]);
        }
      }]);

      return PageNotFound;
    }();

    PageNotFound.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    PageNotFound = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/page-not-found.page.scss */
      "./src/app/page-not-found/styles/page-not-found.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], PageNotFound);
    /***/
  },

  /***/
  "./src/app/page-not-found/styles/page-not-found.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/page-not-found/styles/page-not-found.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundStylesPageNotFoundPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n}\n\n.not-found-content {\n  --background:var(--app-background-shade);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.not-found-content .illustration-wrapper {\n  margin: 0px 10%;\n}\n\n.not-found-content .not-found-title {\n  text-align: center;\n  font-size: 26px;\n  font-weight: 500;\n}\n\n.not-found-content .not-found-text {\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 2px;\n  margin-bottom: 40px;\n  font-weight: 500;\n  color: #444444;\n}\n\n.not-found-content .go-home-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHBhZ2Utbm90LWZvdW5kXFxzdHlsZXNcXHBhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL3BhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFFRSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7O0FERUU7RUFDRSxlQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL3BhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbn1cblxuLm5vdC1mb3VuZC1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6IzMzMztcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLmlsbHVzdHJhdGlvbi13cmFwcGVyIHtcbiAgICBtYXJnaW46IDBweCAxMCU7XG4gIH1cblxuICAubm90LWZvdW5kLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAubm90LWZvdW5kLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjojNDQ0NDQ0O1xuICB9XG5cbiAgLmdvLWhvbWUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuXG4ubm90LWZvdW5kLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6dmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3QtZm91bmQtY29udGVudCAuaWxsdXN0cmF0aW9uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxMCU7XG59XG4ubm90LWZvdW5kLWNvbnRlbnQgLm5vdC1mb3VuZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5ub3QtZm91bmQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5nby1ob21lLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  }
}]);
//# sourceMappingURL=page-not-found-page-not-found-module-es5.js.map