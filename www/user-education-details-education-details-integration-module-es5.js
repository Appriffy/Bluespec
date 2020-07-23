function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-education-details-education-details-integration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/update/update-education-details.modal.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/update/update-education-details.modal.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserEducationDetailsUpdateUpdateEducationDetailsModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"update-user-form ion-page\" [formGroup]=\"updateEduDetailForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page_title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n   \n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"floating\">Select Education Level *</ion-label>\n        <ion-select formControlName=\"level_id\" cancelText=\"Cancel\" okText=\"OK\" (ionChange)=\"onEduLevelSelected($event)\">\n          <ion-select-option *ngFor=\"let item of eduLevels\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      \n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"floating\">Select Study Area *</ion-label>\n        <ion-select formControlName=\"study_area\" cancelText=\"Cancel\" okText=\"OK\">\n          <ion-select-option *ngFor=\"let item of studyAreas\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Examination Title *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" placeholder=\"e.g. AISSCE\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Organization *</ion-label>\n          <ion-input type=\"text\" formControlName=\"organization\" placeholder=\"School/College/University\" required></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Joining *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yoj\" required></ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{studyStatus}}</ion-label>\n          <ion-toggle color=\"secondary\" formControlName=\"is_current\" (ionChange)=\"onCurrentOptionSelected($event)\"></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\" *ngIf=\"!currentlyStudying\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Passing *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yop\" required></ion-datetime>\n        </ion-item>\n\n        <ion-input *ngIf=\"currentlyStudying\" type=\"hidden\" formControlName=\"yop\" [value]=\"\" ></ion-input>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score *</ion-label>\n          <ion-input type=\"number\" maxLength=\"4\" formControlName=\"score\" placeholder=\"Marks/Grade obtained\" ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score Type *</ion-label>\n          <ion-select formControlName=\"score_type\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of scoreTypes\" [value]=\"item\" >{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <!------------------>\n        <ion-input type=\"hidden\" formControlName=\"id\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        <!------------------>\n      </ion-list>\n    </section>\n\n   \n    <!-- <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Selected Job Areas</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"jobAreas\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{jobAreas[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section> -->\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateEduDetailForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
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
  "./src/app/user/education-details/education-details-integration.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/user/education-details/education-details-integration.module.ts ***!
    \********************************************************************************/

  /*! exports provided: EducationDetailsIntegrationModule */

  /***/
  function srcAppUserEducationDetailsEducationDetailsIntegrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationDetailsIntegrationModule", function () {
      return EducationDetailsIntegrationModule;
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
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create/create-education-details.modal */
    "./src/app/user/education-details/create/create-education-details.modal.ts");
    /* harmony import */


    var _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./update/update-education-details.modal */
    "./src/app/user/education-details/update/update-education-details.modal.ts");
    /* harmony import */


    var _utility_components_select_study_area_select_study_area_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../utility-components/select-study-area/select-study-area.module */
    "./src/app/utility-components/select-study-area/select-study-area.module.ts");
    /* harmony import */


    var _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../utility-components/select-study-area/select-study-area.page */
    "./src/app/utility-components/select-study-area/select-study-area.page.ts");

    var firebaseRoutes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | education-details-module */
        "education-details-module").then(__webpack_require__.bind(null,
        /*! ./education-details.module */
        "./src/app/user/education-details/education-details.module.ts")).then(function (m) {
          return m.EducationDetailsPageModule;
        });
      }
    }, {
      path: 'listing/:user_id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | education-details-module */
        "education-details-module").then(__webpack_require__.bind(null,
        /*! ./education-details.module */
        "./src/app/user/education-details/education-details.module.ts")).then(function (m) {
          return m.EducationDetailsPageModule;
        });
      }
    }, {
      path: 'create',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./create/create-education-details.modal */
        "./src/app/user/education-details/create/create-education-details.modal.ts")).then(function (m) {
          return m.CreateEducationDetailsModal;
        });
      }
    }, {
      path: 'details/:id',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./update/update-education-details.modal */
        "./src/app/user/education-details/update/update-education-details.modal.ts")).then(function (m) {
          return m.UpdateEducationDetailsModal;
        });
      }
    }];

    var EducationDetailsIntegrationModule = function EducationDetailsIntegrationModule() {
      _classCallCheck(this, EducationDetailsIntegrationModule);
    };

    EducationDetailsIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _utility_components_select_study_area_select_study_area_module__WEBPACK_IMPORTED_MODULE_9__["SelectStudyAreaPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes)],
      entryComponents: [_create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_7__["CreateEducationDetailsModal"], _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateEducationDetailsModal"], _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_10__["SelectStudyAreaPage"]],
      declarations: [_create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_7__["CreateEducationDetailsModal"], _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateEducationDetailsModal"]]
    })], EducationDetailsIntegrationModule);
    /***/
  },

  /***/
  "./src/app/user/education-details/update/update-education-details.modal.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user/education-details/update/update-education-details.modal.ts ***!
    \*********************************************************************************/

  /*! exports provided: UpdateEducationDetailsModal */

  /***/
  function srcAppUserEducationDetailsUpdateUpdateEducationDetailsModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsModal", function () {
      return UpdateEducationDetailsModal;
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


    var _education_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../education-details.model */
    "./src/app/user/education-details/education-details.model.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var UpdateEducationDetailsModal =
    /*#__PURE__*/
    function () {
      function UpdateEducationDetailsModal(modalController, alertController, firebaseService, masterService, authService, toastService, loadingController, router) {
        _classCallCheck(this, UpdateEducationDetailsModal);

        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
        this.studyAreas = [];
        this.studyAreasBackup = [];
        this.eduLevels = [];
        this.scoreTypes = [];
        this.currentlyStudying = false;
        this.studyStatus = 'Already passed out.';
        this.page_title = "Update Education Detail";
      }

      _createClass(UpdateEducationDetailsModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.scoreTypes = ["Percent", "Grade"];
          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;
            console.log("/***** JUST ASKED LOCAL STORAGE : " + JSON.stringify(promisedValue));
          });
          this.initializeForm();
          this.onHandleFormChanges();
          this.masterService.getStudyAreas().subscribe(function (skills) {
            _this.studyAreas = skills.result;
            _this.studyAreasBackup = skills.result;
            console.log("/********* Got Study Areas **********/ => " + JSON.stringify(_this.studyAreas));

            _this.studyAreas.map(function (skill) {//Waiting to do something on getting First Master Data
              //this.updateEduDetailForm.controls.study_area.patchValue(this.eduLevels[0].id);
            });
          });
          this.masterService.getEducationLevels().subscribe(function (thisLevels) {
            _this.eduLevels = thisLevels.result;
            console.log("/********* Got Education Levels **********/ => " + JSON.stringify(_this.eduLevels)); // create skill checkboxes

            _this.eduLevels.map(function (eduLevel) {//Waiting to do something on getting First Master Data
              //this.updateEduDetailForm.controls.level_id.patchValue(this.eduLevels[0].id);
            });
          });
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          /************ UPDATE FORM ************/
          this.page_title = "Update Education Detail";
          this.updateEduDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.user_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            level_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.level_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            is_current: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.is_current, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.organization, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            yoj: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.yoj, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            yop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.yop, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            study_area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.study_area, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            //study_area: new FormControl('', Validators.required),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.score),
            score_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.score_type)
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Confirm',
                      message: 'Do you really want to delete your education qualification titled ' + this.user.title + '?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this2.presentLoadingWithOptions();

                          var postData = {
                            'item_id': _this2.user.id
                          };

                          _this2.authService.getAuthKey().then(function (apiKey) {
                            _this2.firebaseService.deleteEducationItem(apiKey, postData).subscribe(function (res) {
                              _this2.loadingController.dismiss();

                              _this2.deleteResult = res;

                              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].DEV_MODE) {
                                console.log('deleteResult# ' + JSON.stringify(_this2.deleteResult));
                                console.log('Verify Invoke ' + _this2.localUser.api_key + " <=> " + _this2.user.user_id);
                              }

                              if (res.error) {
                                _this2.presentAlert(res.message);
                              } else {
                                _this2.dismissModal();

                                _this2.firebaseService.getEduDataSource(_this2.localUser.api_key, _this2.user.user_id).subscribe(function (results) {
                                  _this2.firebaseService.invokeEduListChangeEvent.next(results.items);
                                });

                                _this2.router.navigate(['/education-details/listing/' + _this2.user.user_id]);
                              }
                            }, function (error) {
                              _this2.loadingController.dismiss();

                              _this2.presentAlert('Looks like there is a Network Issue.');
                            });
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onHandleFormChanges",
        value: function onHandleFormChanges() {
          var _this3 = this;

          this.updateEduDetailForm.get("is_current").valueChanges.subscribe(function (val) {
            if (val) {
              _this3.updateEduDetailForm.get('yop').clearValidators();

              _this3.updateEduDetailForm.get('yop').updateValueAndValidity();
            } else {
              _this3.updateEduDetailForm.get('yop').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]);

              _this3.updateEduDetailForm.get('yop').updateValueAndValidity();
            }
          });
          this.updateEduDetailForm.valueChanges.subscribe(function (val) {
            console.log("/********* onHandleFormChanges **********/");
            var yoj = val.yoj;
            var yop = val.yop;
            var score = val.score;

            if (yop && yoj) {
              if (yop < yoj) {
                _this3.presentAlert("Year of passing must be after the year of joining.");
              }
            }

            var score_type = val.score_type;

            if (score_type && !score) {
              if (score_type == "Grade" && !score) {
                _this3.presentAlert("Please enter the grade you obtained.");
              } else {
                if (score_type == "Percent" && !score) {
                  _this3.presentAlert("Please enter the percentage you obtained.");
                }
              }
            }
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this4 = this;

          this.presentLoadingWithOptions();
          this.user.id = this.updateEduDetailForm.value.id;
          this.user.user_id = this.updateEduDetailForm.value.user_id;
          this.user.level_id = this.updateEduDetailForm.value.level_id;
          this.user.title = this.updateEduDetailForm.value.title;
          this.user.organization = this.updateEduDetailForm.value.organization;
          this.user.yoj = this.updateEduDetailForm.value.yoj;
          this.user.yop = this.updateEduDetailForm.value.yop;
          this.user.is_current = this.currentlyStudying ? true : false;
          this.user.score_type = this.updateEduDetailForm.value.score_type;
          this.user.score = this.updateEduDetailForm.value.score;
          this.user.study_area = this.updateEduDetailForm.value.study_area;
          console.log('########## Company params ########### ' + JSON.stringify(this.user));
          this.authService.getAuthKey().then(function (apiKey) {
            _this4.firebaseService.callEduDetailsUpdateAPI(apiKey, _this4.user).subscribe(function (res) {
              _this4.loadingController.dismiss();

              console.log('########## Edu Update API Response ########### ' + JSON.stringify(res));
              _this4.updateResult = res;

              if (!res.error) {
                /********** NAVIGATE WITH USER ID **********/
                _this4.dismissModal();

                _this4.firebaseService.getEduDataSource(_this4.localUser.api_key, _this4.user.user_id).subscribe(function (results) {
                  _this4.firebaseService.invokeEduListChangeEvent.next(results.items);

                  console.log('########## invokeEduListChangeEvent() ######### ' + JSON.stringify(results));
                });

                _this4.router.navigate(['/education-details/listing/' + _this4.user.user_id]);
              } else {
                _this4.presentAlert(res.message);
              }
            }, function (error) {
              _this4.loadingController.dismiss();

              _this4.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
          });
        }
      }, {
        key: "onEduLevelSelected",
        value: function onEduLevelSelected(e) {
          return this.studyAreas = this.studyAreasBackup.filter(function (studyArea) {
            return studyArea.education_level == e.target.value;
          });
        }
      }, {
        key: "onCurrentOptionSelected",
        value: function onCurrentOptionSelected(e) {
          //console.log("SWITCH "+e.target.value);
          this.currentlyStudying = !this.currentlyStudying;

          if (!this.currentlyStudying) {
            this.studyStatus = 'Already passed out.'; //this.updateEduDetailForm.addControl('yop', new FormControl(''));
          } else {
            this.studyStatus = 'Currently Persuing.'; //this.updateEduDetailForm.removeControl('yop');
          }
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
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      duration: 5000,
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.updateEduDetailForm.get('jobAreas');
        }
      }]);

      return UpdateEducationDetailsModal;
    }();

    UpdateEducationDetailsModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _education_details_model__WEBPACK_IMPORTED_MODULE_5__["EducationDetailsModel"])], UpdateEducationDetailsModal.prototype, "user", void 0);
    UpdateEducationDetailsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-education-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-education-details.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/update/update-education-details.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/create.modal.scss */
      "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles//create.shell.scss */
      "./src/app/bluspecstyles/create.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], UpdateEducationDetailsModal);
    /***/
  },

  /***/
  "./src/app/utility-components/select-study-area/select-study-area.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/utility-components/select-study-area/select-study-area.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: SelectStudyAreaPageModule */

  /***/
  function srcAppUtilityComponentsSelectStudyAreaSelectStudyAreaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectStudyAreaPageModule", function () {
      return SelectStudyAreaPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _select_study_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-study-area.page */
    "./src/app/utility-components/select-study-area/select-study-area.page.ts");

    var SelectStudyAreaPageModule = function SelectStudyAreaPageModule() {
      _classCallCheck(this, SelectStudyAreaPageModule);
    };

    SelectStudyAreaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
      declarations: [_select_study_area_page__WEBPACK_IMPORTED_MODULE_6__["SelectStudyAreaPage"]],
      exports: [_select_study_area_page__WEBPACK_IMPORTED_MODULE_6__["SelectStudyAreaPage"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SelectStudyAreaPageModule);
    /***/
  }
}]);
//# sourceMappingURL=user-education-details-education-details-integration-module-es5.js.map