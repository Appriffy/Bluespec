function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~jobs-listing-job-filter-job-filter-module~jobs-listing-jobs-listing-module~jobs-post-job-det~515ff2e8"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-skill/select-job-skill.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-skill/select-job-skill.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilityComponentsSelectJobSkillSelectJobSkillPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Select Job Skills</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button> -->\n\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-row class=\"expiration-countdown\" *ngIf=\"multiple\">\n    <span class=\"expiration-lead\">\n      Select Job Skill(s) to continue.\n    </span>\n  </ion-row>\n  \n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search skills...\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n  <h3>{{searchQuery}}</h3>\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Skills...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n<!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      \n      <ion-icon src=\"./assets/sample-icons/side-menu/briefcase.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Job Skill Found</h5>\n      </ion-row>\n    </ion-grid>\n<!------- Empty View ------->\n<form class=\"create-user-form ion-page\" [formGroup]=\"addSkillsForm\" (ngSubmit)=\"processMultipleSelection()\">\n<ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">    \n  <div *ngIf=\"!multiple\">\n    <ion-item class=\"list-item\" *ngFor=\"let item of listing\" tappable (click)=\"dismissModal(item)\">\n      <ion-row class=\"user-row\">\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h3 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h3>\n          </div>\n        </ion-col>\n      </ion-row>\n</ion-item>\n\n  </div>\n\n  <div *ngIf=\"multiple\">\n    <!-- <ion-item class=\"list-item\" *ngFor=\"let item of listing\" tappable (click)=\"onJobSkillSelected(item)\">\n      <ion-row class=\"user-row\">\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h3 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h3>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"1\" *ngIf=\"isSkillSelected(item?.id)\">\n          <div class=\"user-info\">\n            <ion-icon src=\"./assets/sample-icons/side-menu/notifications.svg\" style=\"font-size: 28px;\"></ion-icon>\n          </div>\n        </ion-col>\n\n      </ion-row>\n  </ion-item> -->\n\n  \n<!------ CHECKBOX TYPE VIEW ------>\n<section class=\"user-experience-fields fields-section\" *ngIf=\"listing?.length > 0 && !loading\">\n<ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n  <ion-item lines=\"none\" formArrayName=\"skills\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let item of skillsFormArray.controls; let i = index;\">\n    <ion-label class=\"tag-label\">{{listing[i]?.title}}</ion-label>\n    <ion-checkbox [formControlName]=\"i\" (click)=\"onJobSkillSelected(listing[i])\"></ion-checkbox>\n  </ion-item>\n</ion-row>\n</section>\n<!------ CHECKBOX TYPE VIEW ------>\n\n  </div>\n\n     </ion-list>\n    </form>\n</ion-content>\n\n<ion-footer>\n\n  <section class=\"user-details-fields fields-section\">\n      <ion-row class=\"form-actions-wrapper\" *ngIf=\"multiple\">\n        <ion-col>\n          <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" [disabled]=\"!addSkillsForm.valid\" (click)=\"processMultipleSelection()\" fill=\"solid\">SELECT AND CONTINUE</ion-button>\n        </ion-col>\n      </ion-row>\n  </section>\n  \n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/bluspecstyles/listing.ios.scss":
  /*!************************************************!*\
    !*** ./src/app/bluspecstyles/listing.ios.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBluspecstylesListingIosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmxpc3QtaXRlbSB7XG4gICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAubGlzdC1pdGVtIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bluspecstyles/listing.shell.scss":
  /*!**************************************************!*\
    !*** ./src/app/bluspecstyles/listing.shell.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBluspecstylesListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dbmodels/job-areas.ts":
  /*!***************************************!*\
    !*** ./src/app/dbmodels/job-areas.ts ***!
    \***************************************/

  /*! exports provided: JobAreas, JobAreaModel, JobAreaListingModel, JobAreaDetailModel */

  /***/
  function srcAppDbmodelsJobAreasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreas", function () {
      return JobAreas;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreaModel", function () {
      return JobAreaModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreaListingModel", function () {
      return JobAreaListingModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreaDetailModel", function () {
      return JobAreaDetailModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var JobAreas = function JobAreas() {
      _classCallCheck(this, JobAreas);
    };

    var JobAreaModel =
    /*#__PURE__*/
    function (_shell_data_store__WE) {
      _inherits(JobAreaModel, _shell_data_store__WE);

      function JobAreaModel() {
        _classCallCheck(this, JobAreaModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(JobAreaModel).apply(this, arguments));
      }

      return JobAreaModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var JobAreaListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE2) {
      _inherits(JobAreaListingModel, _shell_data_store__WE2);

      function JobAreaListingModel() {
        var _this;

        _classCallCheck(this, JobAreaListingModel);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(JobAreaListingModel).call(this));
        _this.items = [new JobAreaModel(), new JobAreaModel(), new JobAreaModel(), new JobAreaModel()];
        return _this;
      }

      _createClass(JobAreaListingModel, [{
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "setItems",
        value: function setItems(itemsSent) {
          this.items = itemsSent;
        }
      }]);

      return JobAreaListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var JobAreaDetailModel =
    /*#__PURE__*/
    function (_JobAreaModel) {
      _inherits(JobAreaDetailModel, _JobAreaModel);

      function JobAreaDetailModel() {
        _classCallCheck(this, JobAreaDetailModel);

        return _possibleConstructorReturn(this, _getPrototypeOf(JobAreaDetailModel).call(this));
      }

      return JobAreaDetailModel;
    }(JobAreaModel);
    /***/

  },

  /***/
  "./src/app/utility-components/select-job-skill/select-job-skill.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/utility-components/select-job-skill/select-job-skill.module.ts ***!
    \********************************************************************************/

  /*! exports provided: SelectJobSkillPageModule */

  /***/
  function srcAppUtilityComponentsSelectJobSkillSelectJobSkillModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectJobSkillPageModule", function () {
      return SelectJobSkillPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _select_job_skill_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-job-skill.page */
    "./src/app/utility-components/select-job-skill/select-job-skill.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var SelectJobSkillPageModule = function SelectJobSkillPageModule() {
      _classCallCheck(this, SelectJobSkillPageModule);
    };

    SelectJobSkillPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_select_job_skill_page__WEBPACK_IMPORTED_MODULE_5__["SelectJobSkillPage"]],
      exports: [_select_job_skill_page__WEBPACK_IMPORTED_MODULE_5__["SelectJobSkillPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SelectJobSkillPageModule);
    /***/
  },

  /***/
  "./src/app/utility-components/select-job-skill/select-job-skill.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/utility-components/select-job-skill/select-job-skill.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilityComponentsSelectJobSkillSelectJobSkillPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --detail-sections-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 3px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.user-experience-fields {\n  --background: var(--page-background-shade);\n}\n\n.user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: #444444;\n  --checkbox-tag-background: #ffffff;\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0eS1jb21wb25lbnRzL3NlbGVjdC1qb2Itc2tpbGwvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXRpbGl0eS1jb21wb25lbnRzXFxzZWxlY3Qtam9iLXNraWxsXFxzZWxlY3Qtam9iLXNraWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXRpbGl0eS1jb21wb25lbnRzL3NlbGVjdC1qb2Itc2tpbGwvc2VsZWN0LWpvYi1za2lsbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3V0aWxpdHktY29tcG9uZW50cy9zZWxlY3Qtam9iLXNraWxsL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0NBQUE7RUFDQSxnREFBQTtFQUNBLDhDQUFBO0VBQ0Esb0RBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElFO0VBQ0UsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hKOztBREtJO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNITjs7QURTRTtFQUNFLDBDQUFBO0FDTko7O0FEUUk7RUFDRSwrREFBQTtFRWxDSiwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBRDZCRjs7QUMzQkM7RUFFQyxvQkFBQTtFQUNFLHdCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxREFBQTtFQUNFLDJDQUFBO0FENEJKOztBQzFCSTtFQUNELHVCQUFBO0FENEJIOztBQ3pCRTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QUQyQk47O0FDeEJJO0VBQ0UsWUFBQTtBRDBCTjs7QUN4Qk07RUFFRSxVQUFBO0FEeUJSOztBQ3JCRTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEdUJOOztBQ3BCRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QURvQkg7O0FENUJNO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBQzhCUjs7QUR2QlE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0RBQUE7RUFDQSwwREFBQTtBQ3lCVjs7QUR2QlU7RUFDRSx3Q0FBQTtBQ3lCWiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdHktY29tcG9uZW50cy9zZWxlY3Qtam9iLXNraWxsL3NlbGVjdC1qb2Itc2tpbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAgIC0tZGV0YWlsLXNlY3Rpb25zLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gICAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBpcmF0aW9uLWNvdW50ZG93biB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5leHBpcmF0aW9uLWxlYWQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICB9IFxyXG5cclxuXHJcbiAgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgLmNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcclxuXHJcbiAgICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAgICYucm91bmRlZC1jaGVja2JveC10YWdzIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLWRldGFpbC1zZWN0aW9ucy1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogM3B4O1xufVxuXG4uZXhwaXJhdGlvbi1jb3VudGRvd24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhwaXJhdGlvbi1jb3VudGRvd24gLmV4cGlyYXRpb24tbGVhZCB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcucm91bmRlZC10YWcge1xuICAtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjNDQ0NDQ0O1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/utility-components/select-job-skill/select-job-skill.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/utility-components/select-job-skill/select-job-skill.page.ts ***!
    \******************************************************************************/

  /*! exports provided: SelectJobSkillPage */

  /***/
  function srcAppUtilityComponentsSelectJobSkillSelectJobSkillPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectJobSkillPage", function () {
      return SelectJobSkillPage;
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


    var _services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _dbmodels_job_areas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../dbmodels/job-areas */
    "./src/app/dbmodels/job-areas.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");

    var SelectJobSkillPage =
    /*#__PURE__*/
    function () {
      function SelectJobSkillPage(navCtrl, masterService, storageService, modalController, authService) {
        var _this2 = this;

        _classCallCheck(this, SelectJobSkillPage);

        this.navCtrl = navCtrl;
        this.masterService = masterService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.authService = authService;
        this.multiple = false;
        this.loading = true;
        this.selectedSkills = new Array();
        this.authService.getAuthCache().then(function (promisedValue) {
          _this2.localUser = promisedValue;
        });
      }

      _createClass(SelectJobSkillPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //console.log("SelectedJobArea Received: "+JSON.stringify(this.selectedJobArea));
          //console.log("filterArr Received: "+this.filterArr);
          this.addSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_9__["CheckboxCheckedValidator"].minSelectedCheckboxes(1))
          });
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].JOB_SKILLS).then(function (allList) {
            if (allList) {
              _this3.listing = allList;
              _this3.filtered_listing = allList;
              _this3.loading = false;
              console.log("All Job Skills : " + JSON.stringify(allList));

              if (_this3.selectedJobArea !== null && _this3.selectedJobArea !== undefined) {
                console.log("Filtering for Single Job Area : " + _this3.selectedJobArea.id + " among " + allList.length); //this.listing = this.listing.find(item => item.parent_id === this.selectedJobArea);

                allList = allList.filter(function (item) {
                  return item.parent_id === _this3.selectedJobArea.id;
                });
                _this3.listing = allList;
                _this3.filtered_listing = allList;
                console.log("Total Filtered : " + allList.length);

                _this3.listing.map(function (item) {
                  _this3.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]());
                });
              }
            }
          });
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this4 = this;

          this.loading = true;
          this.masterService.getSkills().subscribe(function (allData) {
            _this4.loading = false;

            if (allData) {
              _this4.listing = allData.result;
              _this4.filtered_listing = allData.result;
            }
          });
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.listing = this.filtered_listing;
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "searchList",
        value: function searchList() {
          var _this5 = this;

          console.log("#####: searchList => " + this.searchQuery);
          this.initializeItems();
          this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this5.searchQuery.toLowerCase()) > -1;
          });
          this.updateFormArrayDisplay();
        }
      }, {
        key: "updateFormArrayDisplay",
        value: function updateFormArrayDisplay() {
          var _this6 = this;

          var control = this.addSkillsForm.controls.skills;

          for (var i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
          } //(this.addSkillsForm.controls.skills as FormArray).reset();


          this.listing.map(function (item) {
            _this6.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]());
          });
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "dismissModal",
        value: function dismissModal(item) {
          //alert(item.title+" "+this.multiple);
          this.modalController.dismiss(item);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "containsObject",
        value: function containsObject(obj, list) {
          if (list && list.length > 0) {
            var i;

            for (i = 0; i < list.length; i++) {
              if (list[i].id === obj.id) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "onJobSkillSelected",
        value: function onJobSkillSelected(thisSkill) {
          console.log("#####: onJobAreaSelected " + JSON.stringify(thisSkill));

          if (this.containsObject(thisSkill, this.selectedSkills)) {
            //if(this.selectedSkills.some(person => person.id === thisSkill.id)){
            console.log("#####: Exists Already "); //this.selectedSkills.pop();
          } else {
            this.selectedSkills.push(thisSkill);
            console.log("#####: Doesnt Exist "); //   this.selectedSkills = this.selectedSkills.filter(function( obj ) {
            //     return obj.id !== thisSkill.id;
            // });
          } //this.skills = this.skillsHolder;
          //this.skills = this.skills.map(item => item.parent_id === jobAreas.id);
          //this.skills = this.skills.find(item => item.parent_id === jobArea);


          console.log("#####: FINAL SELECTION =>  " + JSON.stringify(this.selectedSkills));
        }
      }, {
        key: "processMultipleSelection",
        value: function processMultipleSelection() {
          var displayNames = Array.prototype.map.call(this.selectedSkills, function (item) {
            return item.title;
          }).join(", ");
          this.displayIDs = Array.prototype.map.call(this.selectedSkills, function (s) {
            return s.id;
          }).toString();
          console.log("#####: FINAL displayNames =>  " + displayNames);
          console.log("#####: FINAL displayIDs =>  " + this.displayIDs);
          var resultArr = [];
          resultArr["id"] = this.displayIDs;
          resultArr["title"] = displayNames;
          this.modalController.dismiss(resultArr);
        }
      }, {
        key: "isSkillSelected",
        value: function isSkillSelected(id) {
          this.selectedSkills.forEach(function (element) {
            if (element.id == id) {
              return true;
            }
          });
          return false;
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.addSkillsForm.get('skills');
        }
      }]);

      return SelectJobSkillPage;
    }();

    SelectJobSkillPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectJobSkillPage.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_job_areas__WEBPACK_IMPORTED_MODULE_7__["JobAreaModel"])], SelectJobSkillPage.prototype, "selectedJobArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], SelectJobSkillPage.prototype, "filterArr", void 0);
    SelectJobSkillPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-job-skill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-job-skill.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-skill/select-job-skill.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-job-skill.page.scss */
      "./src/app/utility-components/select-job-skill/select-job-skill.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], SelectJobSkillPage);
    /***/
  },

  /***/
  "./src/app/validators/checkbox-checked.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/validators/checkbox-checked.validator.ts ***!
    \**********************************************************/

  /*! exports provided: CheckboxCheckedValidator */

  /***/
  function srcAppValidatorsCheckboxCheckedValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function () {
      return CheckboxCheckedValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CheckboxCheckedValidator =
    /*#__PURE__*/
    function () {
      function CheckboxCheckedValidator() {
        _classCallCheck(this, CheckboxCheckedValidator);
      }

      _createClass(CheckboxCheckedValidator, null, [{
        key: "minSelectedCheckboxes",
        value: function minSelectedCheckboxes(min) {
          var validator = function validator(formArray) {
            var totalSelected = formArray.controls // get a list of checkbox values (boolean)
            .map(function (control) {
              return control.value;
            }) // total up the number of checked checkboxes
            .reduce(function (prev, next) {
              return next ? prev + next : prev;
            }, 0); // if the total is not greater than the minimum, return the error message

            return totalSelected >= min ? null : {
              required: true
            };
          };

          return validator;
        }
      }]);

      return CheckboxCheckedValidator;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~jobs-listing-job-filter-job-filter-module~jobs-listing-jobs-listing-module~jobs-post-job-det~515ff2e8-es5.js.map