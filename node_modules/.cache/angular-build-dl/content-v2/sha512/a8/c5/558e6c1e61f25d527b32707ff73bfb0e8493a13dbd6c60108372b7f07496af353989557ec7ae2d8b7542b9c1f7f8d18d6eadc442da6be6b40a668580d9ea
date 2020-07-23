function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-professional-profile-professional-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/professional-profile/professional-profile.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/professional-profile/professional-profile.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupProfessionalProfileProfessionalProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"addSkillsForm\" (ngSubmit)=\"addUserSkills()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n\n      <ion-buttons slot=\"start\">\n        \n        <ion-buttons  (click)=\"prevStep()\">\n          <ion-button fill=\"outline\" color=\"facebook\">PREV</ion-button>\n        </ion-buttons>\n\n      </ion-buttons>\n      <ion-title slot=\"\">Add Job Skills</ion-title>\n      <ion-buttons slot=\"end\">\n       \n        <ion-buttons  (click)=\"nextStep()\">\n          <ion-button fill=\"outline\" color=\"facebook\">NEXT</ion-button>\n        </ion-buttons>\n\n      </ion-buttons>\n      \n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\" style=\"overflow: scroll;\">\n\n\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\" slot=\"center\">SELECT A JOB AREA</h5>\n      <p class=\"section-header\" slot=\"center\">Select a job area to filter relevant job skills to choose from.</p>\n     \n      <!-- <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"jobAreas\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let jobArea of jobAreasFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{jobAreas[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\" (click)=\"onJobAreaSelected(jobAreas[i].id)\"></ion-checkbox>\n        </ion-item>\n      </ion-row> -->\n\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"jobAreas\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let jobArea of jobAreas\">\n          <ion-label class=\"tag-label\">{{jobArea.title}}</ion-label>\n          <ion-checkbox [formControlName]=\"jobArea.id\" (click)=\"onJobAreaSelected(jobArea.id)\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\" slot=\"center\">SELECT SKILLS</h5>\n      <p class=\"section-header\" slot=\"center\">Select the job skills to start discovering related work opportunities around you.</p>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{skills[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n   \n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\" style=\"background-color: 0A5392;\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"light\" type=\"submit\" fill=\"solid\" [disabled]=\"!addSkillsForm.valid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; ADD SKILLS</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./src/app/signup/professional-profile/professional-profile.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/signup/professional-profile/professional-profile.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProfessionalProfilePageModule */

  /***/
  function srcAppSignupProfessionalProfileProfessionalProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessionalProfilePageModule", function () {
      return ProfessionalProfilePageModule;
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


    var _professional_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./professional-profile.page */
    "./src/app/signup/professional-profile/professional-profile.page.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/signup/registration.service.ts");

    var routes = [{
      path: '',
      component: _professional_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalProfilePage"]
    }];

    var ProfessionalProfilePageModule = function ProfessionalProfilePageModule() {
      _classCallCheck(this, ProfessionalProfilePageModule);
    };

    ProfessionalProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_professional_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalProfilePage"]],
      providers: [_registration_service__WEBPACK_IMPORTED_MODULE_7__["RegistrationService"]]
    })], ProfessionalProfilePageModule);
    /***/
  },

  /***/
  "./src/app/signup/professional-profile/professional-profile.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/signup/professional-profile/professional-profile.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupProfessionalProfileProfessionalProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 3px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: #444444;\n  --checkbox-tag-background: #ffffff;\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.create-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3Byb2Zlc3Npb25hbC1wcm9maWxlL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHNpZ251cFxccHJvZmVzc2lvbmFsLXByb2ZpbGVcXHByb2Zlc3Npb25hbC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3Byb2Zlc3Npb25hbC1wcm9maWxlL3Byb2Zlc3Npb25hbC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3Byb2Zlc3Npb25hbC1wcm9maWxlL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FESUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNISjs7QURLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNIUjs7QURPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ05OOztBRFFNO0VBQ0UsZUFBQTtBQ05SOztBRFdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1RKOztBRFdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURjSTtFQUNFLCtCQUFBO0FDWk47O0FEZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2JOOztBRGtCSTtFQUNFLCtEQUFBO0VFeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0JSOztBRGJRO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNEQUFBO0VBQ0EsMERBQUE7QUNlVjs7QURiVTtFQUNFLHdDQUFBO0FDZVo7O0FEUkU7RUFDRSxtQkFBQTtBQ1VKOztBRFJJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUNRTjs7QUROTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw0Q0FBQTtBQ1FSOztBRE5RO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1FWOztBRExRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ09WOztBREhNO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1I7O0FER0E7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvcHJvZmVzc2lvbmFsLXByb2ZpbGUvcHJvZmVzc2lvbmFsLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG5cclxuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIC0tcGFnZS10YWdzLWd1dHRlcjogM3B4O1xyXG59XHJcblxyXG4uY3JlYXRlLXVzZXItY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAgIC51c2VyLWltYWdlLWNvbCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIC51c2VyLWltYWdlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICB3aWR0aDogNGNoO1xyXG4gICAgICBoZWlnaHQ6IDRjaDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAuYnRuLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpZWxkcy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcclxuICAgIC5jaGVja2JveC10YWdzIHtcclxuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgY2hlY2tib3gtdGFnKCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG5cclxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuXHJcbiAgICAucmFuZ2UtaXRlbS1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAucmFuZ2UtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuZ2UtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYW5nZS1jb250cm9sIHtcclxuICAgICAgICAvLyBvdmVycmlkZSB0aGUgcGluIGNvbG9yXHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcblxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAuc3VibWl0LWJ0biB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDNweDtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICM0NDQ0NDQ7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIC5yYW5nZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtY29udHJvbCB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup/professional-profile/professional-profile.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/signup/professional-profile/professional-profile.page.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfessionalProfilePage */

  /***/
  function srcAppSignupProfessionalProfileProfessionalProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessionalProfilePage", function () {
      return ProfessionalProfilePage;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/signup/registration.service.ts");
    /* harmony import */


    var _user_profile_user_profile_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../user/profile/user-profile.model */
    "./src/app/user/profile/user-profile.model.ts");

    var ProfessionalProfilePage =
    /*#__PURE__*/
    function () {
      function ProfessionalProfilePage(masterService, userService, router, navCtrl, activatedRoute, menu, registrationService, storageService) {
        _classCallCheck(this, ProfessionalProfilePage);

        this.masterService = masterService;
        this.userService = userService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this.registrationService = registrationService;
        this.storageService = storageService;
        this.userData = new _user_profile_user_profile_model__WEBPACK_IMPORTED_MODULE_10__["BluspecUserModel"]();
        this.jobAreas = [];
        this.skills = [];
        this.skillsHolder = [];
      }

      _createClass(ProfessionalProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.menu.enable(false);
          this.addSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            jobAreas: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArray"]([]),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__["CheckboxCheckedValidator"].minSelectedCheckboxes(1))
          });
          /******** START FETCH JOB AREAS *******/

          this.masterService.getJobAreas().subscribe(function (res) {
            if (!res.error) {
              console.log("JOB AREAS: " + JSON.stringify(res));
              _this.jobAreas = res.result;

              _this.jobAreas.map(function (item) {
                _this.addSkillsForm.controls.jobAreas.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]());
              });
            }
          }, function (error) {
            alert('Looks like there is a Network Issue while fetching job areas.');
          });
          /******** ENDS FETCH JOB AREAS *******/

          /******** START FETCH SKILLS *******/

          this.masterService.getSkills().subscribe(function (res) {
            if (!res.error) {
              //console.log(JSON.stringify(res));
              _this.skills = res.result;
              _this.skillsHolder = res.result;

              _this.skills.map(function (item) {
                _this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]());
              });
            }
          }, function (error) {
            alert('Looks like there is a Network Issue while fetching skills.');
          });
          /******** ENDS FETCH SKILLS THEN *******/

          /******* GET CACHE AND RESTORE *******/

          this.registrationService.getCachedData().then(function (res) {
            if (res !== undefined) {
              //console.log("Direct fetched cache: "+JSON.stringify(res));
              _this.cachedData = res;

              _this.recoverCache();
            }
          });
          /******* GET CACHE AND RESTORE *******/
        }
      }, {
        key: "onJobAreaSelectedOld",
        value: function onJobAreaSelectedOld(jobArea) {
          //alert("hmm"+JSON.stringify(jobArea));
          console.log("#####: onJobAreaSelected " + jobArea.title);
          this.skills = this.skillsHolder; //this.skills = this.skills.map(item => item.parent_id === jobAreas.id);

          this.skills = this.skills.find(function (item) {
            return item.parent_id === jobArea.id;
          });
          console.log("#####: Num of Skills=>  " + this.skills.length); // //this.addSkillsForm.controls.skills.reset();
          // this.skills.map((item) => {
          //   (this.addSkillsForm.controls.skills as FormArray).push(new FormControl());
          // });
        }
      }, {
        key: "onJobAreaSelected",
        value: function onJobAreaSelected(jobArea) {
          console.log("#####: onJobAreaSelected " + jobArea);
          this.skills = this.skillsHolder; //this.skills = this.skills.map(item => item.parent_id === jobAreas.id);

          this.skills = this.skills.find(function (item) {
            return item.parent_id === jobArea;
          });
          console.log("#####: Num of Skills=>  " + this.skills.length);
        }
      }, {
        key: "recoverCache",
        value: function recoverCache() {
          var _this2 = this;

          if (this.cachedData !== null && this.cachedData !== undefined) {
            if (this.cachedData.selected_skills) {
              console.log("Restoring cache for " + this.cachedData.selected_skills);
              this.skills.map(function (item) {
                var skillsArr = _this2.cachedData.selected_skills.split(',');

                if (skillsArr.includes(item.id)) {
                  _this2.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](true));
                } else {
                  _this2.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]());
                }
              });
            }
          }
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          if (this.addSkillsForm.valid) {
            this.addUserSkills();
          }
        }
      }, {
        key: "prevStep",
        value: function prevStep() {
          //this.router.navigate(['personal-profile']);
          //this.navCtrl.push(PersonalProfilePage, {}, {animate:true, direction:'back'});
          this.navCtrl.navigateBack('registration/personal-profile');
        }
      }, {
        key: "addUserSkills",
        value: function addUserSkills() {
          var _this3 = this;

          //let userID = this.addSkillsForm.value.user_id;
          var selectedSkills = [];
          this.addSkillsForm.value.skills.map(function (value, index) {
            if (value) {
              selectedSkills.push(_this3.skills[index].id);
            }
          });
          console.log(selectedSkills + " - Restored");
          this.cachedData.selected_skills = selectedSkills.toString();
          this.registrationService.setCachedData(this.cachedData);
          this.router.navigate(['registration/set-location']);
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.addSkillsForm.get('skills');
        }
      }, {
        key: "jobAreasFormArray",
        get: function get() {
          return this.addSkillsForm.get('jobAreas');
        }
      }]);

      return ProfessionalProfilePage;
    }();

    ProfessionalProfilePage.ctorParameters = function () {
      return [{
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"]
      }, {
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _registration_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }];
    };

    ProfessionalProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professional-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professional-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/professional-profile/professional-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professional-profile.page.scss */
      "./src/app/signup/professional-profile/professional-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _registration_service__WEBPACK_IMPORTED_MODULE_9__["RegistrationService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])], ProfessionalProfilePage);
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
//# sourceMappingURL=signup-professional-profile-professional-profile-module-es5.js.map