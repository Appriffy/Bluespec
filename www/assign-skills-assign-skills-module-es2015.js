(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assign-skills-assign-skills-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/assign-skills/assign-skills.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/assign-skills/assign-skills.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"create-user-form ion-page\" [formGroup]=\"addSkillsForm\" (ngSubmit)=\"addUserSkills()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"people/profile\"></ion-back-button>\n        <!-- <ion-back-button *ngIf=\"user_profile_id > 0\" [routerLink]=\"['/people/details', user_profile_id]\"></ion-back-button> -->\n      </ion-buttons>\n      <ion-title>Assign Skills</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"restartProcess()\">\n          <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <ion-row class=\"expiration-countdown\" *ngIf=\"existingSkillset?.length <= 0\">\n      <span class=\"expiration-lead\">\n        Select a job area to start adding skills.</span>\n    </ion-row>\n\n    <ion-row class=\"expiration-countdown\" *ngIf=\"existingSkillset?.length == 1\">\n      <span class=\"expiration-lead\">\n        You have added 1 skill. You can also add multiple job skills that you have.</span>\n    </ion-row>\n\n    <ion-row class=\"expiration-countdown\" *ngIf=\"existingSkillset?.length > 1\">\n      <span class=\"expiration-lead\">\n        You have added  {{existingSkillset?.length}} skills yet.</span>\n    </ion-row>\n\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"!selectedJobArea\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\" style=\"color: #444444;font-size:48px;\"></ion-icon>\n    <h5 class=\"section-header\" style=\"font-weight: 500;color:#555555;\">SELECT JOB AREA</h5>\n    <p class=\"section-header\" style=\"font-weight: 500;color:#555555;margin-top:2px;\">Select a job area to filter related job skills.</p>\n    <ion-button (click)=\"openSelectJobArea()\" style=\"text-align: center;\" class=\"upload-picture-btn\" color=\"dark\" expand=\"cover\" fill=\"outline\">\n      FIND SKILLS</ion-button>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n   \n    <section class=\"user-experience-fields fields-section\" *ngIf=\"selectedJobArea\">\n\n      <ion-row style=\"display: block;margin-top:0px;\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Selected Job Area</ion-label>\n          <ion-input type=\"hidden\" formControlName=\"job_area\" required></ion-input>\n          <ion-input type=\"text\" formControlName=\"job_area_name\" (click)=\"openSelectJobArea()\" readonly></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <h4 *ngIf=\"skills?.length > 0\" class=\"section-header\" style=\"font-size: 18px;margin-top:20px;\">Select the skills you have to start discovering the most relevant work opportunities around you.</h4>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\" *ngIf=\"skills?.length > 0\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let yooSkill of skills\">\n          <ion-label class=\"tag-label\">{{yooSkill.title}}</ion-label>\n          <ion-checkbox [formControlName]=\"yooSkill.id\" (click)=\"onJobSkillSelected(yooSkill.id)\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n\n    </section>\n\n     <!------- Empty View ------->\n  <ion-grid style=\"height: 100%\" *ngIf=\"selectedJobArea && skills?.length == 0\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column;padding: 30px;\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\"> No job skill found in {{selectedJobArea?.title}}.</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n  </ion-content>\n\n  <ion-footer *ngIf=\"addSkillsForm.valid\">\n    <ion-row class=\"form-actions-wrapper\" style=\"background-color: #ffffff;\">\n      <ion-col>\n        <ion-button expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!addSkillsForm.valid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SAVE SKILLS</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-area/select-job-area.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-area/select-job-area.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select Job Area</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search Job Areas\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Job Areas...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n  <!------- Empty View ------->\n  <ion-grid style=\"width:100%;height: 100%;display:block;align-content: center;\" *ngIf=\"listing?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Job Area found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n  <ion-list class=\"\" *ngIf=\"listing?.length > 0 && !loading\">     \n    <ion-item class=\"list-item\" *ngFor=\"let item of listing\" (click)=\"dismissModal(item)\">\n      <ion-row class=\"user-row\">\n        <!-- <ion-col size=\"3\" class=\"user-image-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item?.image\" [alt]=\"'Company Logo'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col> -->\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h5 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n \n\n</ion-item>\n </ion-list>\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\">\n      <ion-button class=\"select-variant-btn\" color=\"primary\" expand=\"block\" fill=\"solid\" (click)=\"openSizeChooser()\">SELECT</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/user/assign-skills/assign-skills.module.ts":
/*!************************************************************!*\
  !*** ./src/app/user/assign-skills/assign-skills.module.ts ***!
  \************************************************************/
/*! exports provided: AssignSkillsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSkillsPageModule", function() { return AssignSkillsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _assign_skills_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign-skills.page */ "./src/app/user/assign-skills/assign-skills.page.ts");
/* harmony import */ var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/select-job-area/select-job-area.page */ "./src/app/utility-components/select-job-area/select-job-area.page.ts");
/* harmony import */ var _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/utility-components.module */ "./src/app/utility-components/utility-components.module.ts");










const routes = [
    {
        path: '',
        component: _assign_skills_page__WEBPACK_IMPORTED_MODULE_7__["AssignSkillsPage"]
    }
];
let AssignSkillsPageModule = class AssignSkillsPageModule {
};
AssignSkillsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_9__["UtilityComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_assign_skills_page__WEBPACK_IMPORTED_MODULE_7__["AssignSkillsPage"]],
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
        entryComponents: [_utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_8__["SelectJobAreaPage"]]
    })
], AssignSkillsPageModule);



/***/ }),

/***/ "./src/app/user/assign-skills/assign-skills.page.scss":
/*!************************************************************!*\
  !*** ./src/app/user/assign-skills/assign-skills.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 3px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.create-user-content {\n  --background: var(--page-background-shade);\n}\n\n.fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n  color: #555555;\n}\n\n.user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-experience-fields {\n  --background: var(--page-background-shade);\n}\n\n.user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: #444444;\n  --checkbox-tag-background: #ffffff;\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hc3NpZ24tc2tpbGxzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVzZXJcXGFzc2lnbi1za2lsbHNcXGFzc2lnbi1za2lsbHMucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL2Fzc2lnbi1za2lsbHMvYXNzaWduLXNraWxscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvYXNzaWduLXNraWxscy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvREFBQTtFQUNBLHVCQUFBO0FDREY7O0FES0E7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0RBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSkY7O0FETUU7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRFFBO0VBQ0UsMENBQUE7QUNMRjs7QURVSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ1BOOztBRFlJO0VBQ0UsK0JBQUE7QUNUTjs7QURZSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDVk47O0FEY0U7RUFDRSwwQ0FBQTtBQ1hKOztBRGFJO0VBQ0UsK0RBQUE7RUUzREosMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QURpREY7O0FDL0NDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRGdESjs7QUM5Q0k7RUFDRCx1QkFBQTtBRGdESDs7QUM3Q0U7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEK0NOOztBQzVDSTtFQUNFLFlBQUE7QUQ4Q047O0FDNUNNO0VBRUUsVUFBQTtBRDZDUjs7QUN6Q0U7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRDJDTjs7QUN4Q0U7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FEd0NIOztBRHZCTTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUN5QlI7O0FEbEJRO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNEQUFBO0VBQ0EsMERBQUE7QUNvQlY7O0FEbEJVO0VBQ0Usd0NBQUE7QUNvQlo7O0FEYkE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDZUY7O0FEYkU7RUFDRSxXQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Fzc2lnbi1za2lsbHMvYXNzaWduLXNraWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDNweDtcclxufVxyXG5cclxuXHJcbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDg7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuZXhwaXJhdGlvbi1sZWFkIHtcclxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5jcmVhdGUtdXNlci1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XHJcbn1cclxuXHJcbi5maWVsZHMtc2VjdGlvbiB7XHJcbiAgICAvL3BhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgY29sb3I6IzU1NTU1NTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLWRldGFpbHMtZmllbGRzIHtcclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgLmNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcclxuXHJcbiAgICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAgICYucm91bmRlZC1jaGVja2JveC10YWdzIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgLnN1Ym1pdC1idG4ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiAzcHg7XG59XG5cbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leHBpcmF0aW9uLWNvdW50ZG93biAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG5cbi51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcucm91bmRlZC10YWcge1xuICAtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjNDQ0NDQ0O1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/assign-skills/assign-skills.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/assign-skills/assign-skills.page.ts ***!
  \**********************************************************/
/*! exports provided: AssignSkillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSkillsPage", function() { return AssignSkillsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility-components/select-job-area/select-job-area.page */ "./src/app/utility-components/select-job-area/select-job-area.page.ts");













let AssignSkillsPage = class AssignSkillsPage {
    //postJobForm: FormGroup;
    constructor(masterService, userService, router, route, navCtrl, activatedRoute, menu, modalCtrl, authService, toastService, alertController, loadingController, storageService) {
        this.masterService = masterService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.skills = [];
        this.skillsHolder = [];
        this.selectedSkills = [];
        this.loading = true;
    }
    ngOnInit() {
        this.menu.enable(false);
        this.addSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            job_area: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            job_area_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            //jobAreas: new FormArray([]),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_9__["CheckboxCheckedValidator"].minSelectedCheckboxes(1))
        });
        this.authService.getAuthCache().then(results => {
            if (results) {
                this.localUser = results;
                this.user_profile_id = this.localUser.id;
                /************ CHECK ROUTE PARAM REQUESTS ***************/
                this.route.paramMap.subscribe(params => {
                    if (params.get("user_id")) {
                        this.user_profile_id = params.get("user_id");
                        // if(this.user_profile_id <= 0){
                        //   this.ngRouter.navigate(['page-not-found']);
                        // }
                    }
                    else {
                        this.user_profile_id = this.localUser.id;
                    }
                    this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
                });
            }
        });
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].JOB_SKILLS).then(results => {
            if (results) {
                this.skills = results;
                this.skillsHolder = results;
                //console.log("JOB SKILLS: "+JSON.stringify(results));
                this.skills.map((item) => {
                    this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]());
                });
            }
            else {
                alert("Could not find job skills.");
            }
        });
    }
    get skillsFormArray() { return this.addSkillsForm.get('skills'); }
    get jobAreasFormArray() { return this.addSkillsForm.get('jobAreas'); }
    onJobAreaSelected(jobArea) {
        this.skills = this.skillsHolder;
        console.log("#####: onJobAreaSelected Num of Skills=>  " + this.skills.length);
        this.skills = this.skills.filter(item => {
            //return item.id%2==0;
            if (item) {
                return item.parent_id === jobArea.id;
            }
        });
        console.log("#####: onJobAreaSelected Num of Filtered Skills=>  " + this.skills.length);
        this.loading = false;
        //  setTimeout(() => {
        //  }, 2000);
    }
    onJobSkillSelected(thisSkill) {
        console.log("#####: onJobSkillSelected " + thisSkill);
        // this.addSkillsForm.value.skills
        // .map((value: any, index: number) => {
        //   if (value) {
        //     this.selectedSkills.push(index);
        //   }
        // });
        //Check if number
        if (thisSkill) {
            this.selectedSkills.push(thisSkill);
            console.log("#####: Validated =>" + thisSkill);
        }
        console.log("#####: onJobSkillSelected Array => " + this.selectedSkills.toString());
    }
    recoverCache() {
        if (this.existingSkillset !== null && this.existingSkillset !== undefined) {
            if (this.existingSkillset.length > 0) {
                console.log("Restoring cache for " + JSON.stringify(this.existingSkillset));
                let existingSkillsArr = [];
                for (let element of this.existingSkillset) {
                    existingSkillsArr.push(element.skill_type);
                }
                console.log("Restoring cache for SIMPLIFIED: " + JSON.stringify(existingSkillsArr));
                this.skills.map((item) => {
                    //let skillsArr = this.cachedData.selected_skills.split(',');
                    if (existingSkillsArr.includes(item.id)) {
                        console.log("RESTORED : " + item.id);
                        this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](true));
                    }
                    else {
                        this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]());
                    }
                });
            }
        }
    }
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: '',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            return alert;
        });
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                animated: true,
                spinner: "bubbles",
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    fetchMyJobSkills(apiKey, userID) {
        this.loading = true;
        this.userService.getUserSkillSet(apiKey, userID).subscribe(skillSets => {
            if (skillSets) {
                this.loading = false;
                this.existingSkillset = skillSets.items;
                console.log("Existing Skill Set Fetched: " + JSON.stringify(this.existingSkillset));
                if (this.existingSkillset.length > 0) {
                    this.recoverCache();
                }
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
    }
    addUserSkills() {
        this.presentLoadingWithOptions();
        // this.addSkillsForm.value.skills
        // .map((value: any, index: number) => {
        //   if (value) {
        //     console.log(index+" WHAT IS "+value);
        //     //selectedSkills.push(this.skills[index].id);
        //     this.selectedSkills.push(index);
        //   }
        // });
        console.log(this.selectedSkills.toString() + " - USER SKILLS ARRAY");
        //alert(selectedSkills.toString());
        this.hitSkillSaveAPI();
    }
    redirectToSkillset() {
        this.router.navigate(['skill-set/' + this.user_profile_id]);
    }
    hitSkillSaveAPI() {
        let postData = {
            'user_id': this.user_profile_id,
            'selected_skills': this.selectedSkills.toString(),
            'flag': 0
        };
        this.userService.addUserSkills(this.localUser.api_key, postData)
            .subscribe((res) => {
            console.log('####### Add Skills Result ########## ' + JSON.stringify(res));
            this.loadingController.dismiss();
            if (res.error) {
                this.presentAlert(res.message);
            }
            else {
                //Refresh the list
                this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
                //this.presentAlert(res.message); 
                this.toastService.presentToast(res.message);
                //this.router.navigate(['/hire-people-for-work']);
                if (this.localUser.role_id == 1) {
                    this.router.navigate(['/people/listing/grafters']);
                    //this.router.navigate(['/people/details', this.user_profile_id]);
                }
                else {
                    this.router.navigate(['/people/profile']);
                }
            }
            //alert("Congo! "+this.addSkillsForm.value);
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
    }
    /******************/
    restartProcess() {
        this.authService.getAuthCache().then(authData => {
            if (authData) {
                this.localUser = authData;
                /******** START FETCH SKILLS *******/
                this.masterService.getSkills().subscribe((res) => {
                    if (!res.error) {
                        //console.log(JSON.stringify(res));
                        this.skills = res.result;
                        this.skillsHolder = res.result;
                        this.skills.map((item) => {
                            this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]());
                        });
                    }
                }, (error) => {
                    alert('Looks like there is a Network Issue while fetching skills.');
                });
                /******** ENDS FETCH SKILLS THEN *******/
                this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
            }
        });
    }
    /***************************************** */
    openSelectJobArea() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_12__["SelectJobAreaPage"],
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    //alert(JSON.stringify(item));
                    this.addSkillsForm.controls.job_area.patchValue(item.data.id);
                    this.addSkillsForm.controls.job_area_name.patchValue(item.data.title);
                    this.selectedJobArea = item.data;
                    this.onJobAreaSelected(item.data);
                }
            });
            yield modal.present();
        });
    }
};
AssignSkillsPage.ctorParameters = () => [
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
AssignSkillsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assign-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-skills.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/assign-skills/assign-skills.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-skills.page.scss */ "./src/app/user/assign-skills/assign-skills.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
], AssignSkillsPage);



/***/ }),

/***/ "./src/app/utility-components/select-job-area/select-job-area.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/utility-components/select-job-area/select-job-area.page.ts ***!
  \****************************************************************************/
/*! exports provided: SelectJobAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectJobAreaPage", function() { return SelectJobAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");






let SelectJobAreaPage = class SelectJobAreaPage {
    constructor(storageService, modalController, toastService) {
        this.storageService = storageService;
        this.modalController = modalController;
        this.toastService = toastService;
        this.loading = true;
        this.isMultiMode = false;
    }
    ngOnInit() {
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].JOB_AREAS).then(value => {
            if (value) {
                this.filtered_listing = value;
                this.listing = value;
                this.loading = false;
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                    console.log("Synced from Subject: " + JSON.stringify(value));
                    //this.toastService.presentToast("Job areas list has been updated.");
                }
            }
        });
    }
    dismissModal(avatar) {
        this.modalController.dismiss(avatar);
    }
    selectionDone(data) {
        alert("Selecion: " + data);
        this.modalController.dismiss(data);
    }
    addToSelection(avatar) {
        this.selectedArray.push(avatar);
    }
    /****************** SEARCH ITEMS ********************/
    initializeItems() {
        this.listing = this.filtered_listing;
    }
    searchList() {
        this.initializeItems();
        return this.listing = this.listing.filter((thisJob) => {
            return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
        });
    }
};
SelectJobAreaPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
SelectJobAreaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-job-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-job-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-job-area/select-job-area.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
], SelectJobAreaPage);



/***/ }),

/***/ "./src/app/utility-components/utility-components.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/utility-components/utility-components.module.ts ***!
  \*****************************************************************/
/*! exports provided: UtilityComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityComponentsModule", function() { return UtilityComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-job-area/select-job-area.page */ "./src/app/utility-components/select-job-area/select-job-area.page.ts");






let UtilityComponentsModule = class UtilityComponentsModule {
};
UtilityComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_5__["SelectJobAreaPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        exports: [_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_5__["SelectJobAreaPage"]],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], UtilityComponentsModule);



/***/ }),

/***/ "./src/app/validators/checkbox-checked.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/validators/checkbox-checked.validator.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxCheckedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function() { return CheckboxCheckedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CheckboxCheckedValidator {
    static minSelectedCheckboxes(min) {
        const validator = (formArray) => {
            const totalSelected = formArray.controls
                // get a list of checkbox values (boolean)
                .map(control => control.value)
                // total up the number of checked checkboxes
                .reduce((prev, next) => next ? prev + next : prev, 0);
            // if the total is not greater than the minimum, return the error message
            return totalSelected >= min ? null : { required: true };
        };
        return validator;
    }
}


/***/ })

}]);
//# sourceMappingURL=assign-skills-assign-skills-module-es2015.js.map