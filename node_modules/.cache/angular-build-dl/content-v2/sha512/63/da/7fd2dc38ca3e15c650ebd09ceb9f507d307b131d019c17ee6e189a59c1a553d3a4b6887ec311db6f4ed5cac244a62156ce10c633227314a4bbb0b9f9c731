(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-skill-set-skill-set-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/skill-set/skill-set.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/skill-set/skill-set.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ion-back-button defaultHref=\"people/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!loading\" fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"addMoreSkills()\" *ngIf=\"selfView || localUser?.role_id ==1\" fill=\"solid\" color=\"danger\"> \n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        ADD SKILL</ion-button>\n\n\n    </ion-buttons>\n    <ion-title>Skill Set</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n   <!------- Loading View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n      <h5 style=\"text-align: center;columns: #555555;\">Loading Skills</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Loading View ------->\n\n    <!------- Empty View ------->\n    <ion-grid style=\"width:100%;height: 100%;display:block;align-content: center;\" *ngIf=\"skillsHolder?.length == 0 && !loading\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n\n        <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n        <h5 style=\"text-align: center;color: #555555;\">No Skill Detail Available</h5>\n        </ion-row>\n      </ion-grid>\n     <!------- Empty View ------->\n\n  <section class=\"content-section user-languages-wrapper\" *ngIf=\"skillsHolder.length > 0 && !loading\">\n    <ion-row class=\"range-item\" *ngFor=\"let skill of skillsHolder\" style=\"border-bottom:2px solid #999;\">\n      <ion-col size=\"10\">\n        <div class=\"range-header\">\n          <span class=\"range-label\">\n            {{skill.skill_type_name}} </span>\n            <!-- <span class=\"range-label\"> {{skill.proficiency*20}}% </span> -->\n          <span class=\"range-value\">{{ getProficiencyVal(skill.proficiency)}}</span>\n        </div>\n        <ion-progress-bar *ngIf=\"showControls && (selfView || !selfView)\" class=\"language-score\" type=\"determinate\" [value]=\"(skill.proficiency/5)\"></ion-progress-bar>\n        <ion-range  *ngIf=\"showControls && selfView\" class=\"range-control\" color=\"secondary\" [(ngModel)]= \"skill.proficiency\" (ionChange)=\"rangeChange(skill, $event)\" min=\"0\" max=\"5\" step=\"1\"></ion-range>\n      </ion-col>\n\n      <ion-col size=\"2\" float-right>\n        <div (click)=\"endorseUser(skill)\" class=\"ion-text-end\" item-end style=\"font-size: 24px;color:grey;display: block;cursor: pointer;\">\n          {{skill.numEndorsement}} <ion-icon name=\"thumbs-up\"></ion-icon>\n          <p *ngIf=\"!selfView && skill.isEndorsed\" style=\"font-size:11px;color:#444444;margin-top:2px;margin-bottom:5px;\">Already Endorsed</p> \n          <p *ngIf=\"!selfView && !skill.isEndorsed\" style=\"font-size:11px;color:#444444;margin-top:2px;margin-bottom:5px;\">Click to Endorse</p>     \n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <hr class=\"details-divider\">\n      </ion-col>\n    </ion-row>\n\n\n  </section>\n\n</ion-content>\n<ion-footer>\n  <ion-row class=\"form-actions-wrapper\" style=\"background-color: 0A5392;\"  *ngIf=\"selfView\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" (click)=\"submitForm()\" expand=\"block\" color=\"primary\" fill=\"solid\"><ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SAVE SKILLS</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/user/skill-set/skill-set.module.ts":
/*!****************************************************!*\
  !*** ./src/app/user/skill-set/skill-set.module.ts ***!
  \****************************************************/
/*! exports provided: SkillSetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSetPageModule", function() { return SkillSetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _skill_set_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill-set.page */ "./src/app/user/skill-set/skill-set.page.ts");







const routes = [
    {
        path: '',
        component: _skill_set_page__WEBPACK_IMPORTED_MODULE_6__["SkillSetPage"]
    }
];
let SkillSetPageModule = class SkillSetPageModule {
};
SkillSetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_skill_set_page__WEBPACK_IMPORTED_MODULE_6__["SkillSetPage"]]
    })
], SkillSetPageModule);



/***/ }),

/***/ "./src/app/user/skill-set/skill-set.page.scss":
/*!****************************************************!*\
  !*** ./src/app/user/skill-set/skill-set.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n}\n\n.range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-dark);\n}\n\n.range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-dark);\n}\n\n.range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.language-score {\n  --buffer-background: rgba(var(--ion-color-secondary-rgb), .20);\n  --progress-background: rgba(var(--ion-color-secondary-rgb), 1);\n  height: var(--page-margin);\n  border-radius: calc(var(--page-margin) / 2);\n}\n\n.user-languages-wrapper .language-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content {\n  --background: var(--page-background);\n}\n\n.user-content .content-section {\n  padding: var(--page-margin);\n  border-top: solid 1px var(--ion-color-light-shade);\n}\n\n.user-content .content-section .section-header {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9za2lsbC1zZXQvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxcc2tpbGwtc2V0XFxza2lsbC1zZXQucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL3NraWxsLXNldC9za2lsbC1zZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHlEQUFBO0FDSkY7O0FET0k7RUFDRSw4QkFBQTtFQUVBLCtCQUFBO0FDTE47O0FEV007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7QUNUUjs7QURXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNUVjs7QURZUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNWVjs7QURjTTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ2RSOztBRG1CSTtFQUNJLDhEQUFBO0VBQ0EsOERBQUE7RUFFQSwwQkFBQTtFQUNBLDJDQUFBO0FDakJSOztBRHFCSTtFQUNFLDhCQUFBO0VBRUEsMkNBQUE7QUNuQk47O0FEd0JBO0VBQ0Usb0NBQUE7QUNyQkY7O0FEc0JFO0VBQ0UsMkJBQUE7RUFDQSxrREFBQTtBQ3BCSjs7QURzQkk7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUNwQk4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3NraWxsLXNldC9za2lsbC1zZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG5cclxuICAtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbn1cclxuXHJcbiAgICAucmFuZ2UtaXRlbSB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC8vcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLy9wYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXHJcbiAgICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcclxuXHJcbiAgICAgIC5yYW5nZS1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgICAgICAucmFuZ2UtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuZ2UtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmFuZ2UtY29udHJvbCB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmxhbmd1YWdlLXNjb3JlIHtcclxuICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjIwKTtcclxuICAgICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAxKTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgfVxyXG5cclxuICAudXNlci1sYW5ndWFnZXMtd3JhcHBlciB7XHJcbiAgICAubGFuZ3VhZ2UtaXRlbS1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4udXNlci1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuXG4ucmFuZ2UtaXRlbSB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJhbmdlLWl0ZW0gLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4ucmFuZ2UtaXRlbSAucmFuZ2UtY29udHJvbCB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ubGFuZ3VhZ2Utc2NvcmUge1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjIwKTtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuXG4udXNlci1sYW5ndWFnZXMtd3JhcHBlciAubGFuZ3VhZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi51c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udXNlci1jb250ZW50IC5jb250ZW50LXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnVzZXItY29udGVudCAuY29udGVudC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/skill-set/skill-set.page.ts":
/*!**************************************************!*\
  !*** ./src/app/user/skill-set/skill-set.page.ts ***!
  \**************************************************/
/*! exports provided: SkillSetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSetPage", function() { return SkillSetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");










let SkillSetPage = class SkillSetPage {
    constructor(masterService, userService, router, activatedRoute, menu, authService, toastService, alertController, loadingController, storageService) {
        this.masterService = masterService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this.authService = authService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.skills = [];
        this.selfView = false;
        this.skillsHolder = Array();
        this.loading = true;
        this.showControls = false;
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
    ngOnInit() {
        this.menu.enable(false);
        this.skillSetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({});
        this.authService.getAuthCache().then(promised => {
            if (promised) {
                this.localUser = promised;
                this.thisUserID = this.localUser.id;
                this.user_profile_id = this.localUser.id;
                this.activatedRoute.paramMap.subscribe(params => {
                    if (params && params.has("user_id")) {
                        this.user_profile_id = params.get("user_id");
                        if (this.user_profile_id == this.localUser.id) {
                            this.selfView = true;
                        }
                    }
                });
                this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
            }
        });
    }
    fetchMyJobSkills(apiKey, userID) {
        this.loading = true;
        this.userService.getUserSkillSet(apiKey, userID).subscribe(skillSets => {
            if (skillSets) {
                this.loading = false;
                this.skillsHolder = skillSets.items;
                console.log("Skill Set Fetched: " + JSON.stringify(this.skillsHolder));
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
    }
    rangeChange(item, range) {
        //console.log('range change', range);
        console.log('range change', range.value);
    }
    endorseUser(item) {
        this.triggerEndorseNow(item.skill_type_name, item.skill_type);
    }
    loadItems() {
        if (this.localUser.api_key && this.user_profile_id) {
            this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
        }
    }
    triggerEndorseNow(skillName, skillID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userName = " this user";
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you really want to recommend ' + userName + ' for ' + skillName + '?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.presentLoadingWithOptions();
                            let postData = {
                                'user_id': this.user_profile_id,
                                'selected_skills': "" + skillID
                            };
                            this.userService.endorseUserForSkills(this.localUser.api_key, postData)
                                .subscribe((res) => {
                                console.log('####### ENDORSE Result ########## ' + JSON.stringify(res));
                                this.loadingController.dismiss();
                                if (res.error) {
                                    this.presentAlert(res.message);
                                }
                                else {
                                    //Refresh the list
                                    this.fetchMyJobSkills(this.localUser.api_key, this.user_profile_id);
                                    this.toastService.presentToast(res.message);
                                    //this.router.navigate(['/hire-people-for-work']);
                                }
                            }, (error) => {
                                this.loadingController.dismiss();
                                this.presentAlert('Looks like there is a Network Issue.');
                            });
                            /********** NAVIGATE WITH USER ID **********/
                            // if (this.deleteResult.error) {
                            //   this.presentAlert(this.deleteResult.message); 
                            //   } else {
                            //     this.dismissModal();
                            //     console.log('Modal Dismiss Time# '+JSON.stringify(this.deleteResult));
                            //     this.router.navigate(['companies/listing']);
                            //   }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getProficiencyVal(id) {
        switch (id) {
            case 0:
                return "Not Rated";
                break;
            case 1:
                return "Beginner";
                break;
            case 2:
                return "Intermediate";
                break;
            case 3:
                return "Good";
                break;
            case 4:
                return "Proficient";
                break;
            case 5:
                return "Expert";
                break;
            default:
                return "Average";
                break;
        }
    }
    submitForm() {
        alert(JSON.stringify(this.skillsHolder));
    }
    //
    customBackButton() {
        this.router.navigate(['/hire-people-for-work']);
    }
    addMoreSkills() {
        this.router.navigate(["people/assign-skills/" + this.user_profile_id]);
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
                duration: 5000,
                animated: true,
                spinner: "bubbles",
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
SkillSetPage.ctorParameters = () => [
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
SkillSetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill-set',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skill-set.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/skill-set/skill-set.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skill-set.page.scss */ "./src/app/user/skill-set/skill-set.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], SkillSetPage);



/***/ })

}]);
//# sourceMappingURL=user-skill-set-skill-set-module-es2015.js.map