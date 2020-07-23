(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-user-update-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/update-user/update-user-profile.modal.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/update-user/update-user-profile.modal.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"update-user-form ion-page\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update Profile</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"user?.user_image\" [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"primary\" (click)=\"fileInput.click()\" *ngIf=\"!user?.user_image\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"change-image-btn\" color=\"danger\" (click)=\"removeFile()\" *ngIf=\"user?.user_image\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <div class=\"form-group\" style=\"display: none;\">\n          <input type=\"file\" accept=\"image/*\" (change)=\"uploadFile($event)\" #fileInput>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">First Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"first_name\" required></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.first_name\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('first_name').hasError(validation.type) && (updateUserForm.get('first_name').dirty || updateUserForm.get('first_name').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Last Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.last_name\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('last_name').hasError(validation.type) && (updateUserForm.get('last_name').dirty || updateUserForm.get('last_name').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Date of Birth</ion-label>\n          <ion-datetime [max]=\"maxDOBYear\" display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"dob\"></ion-datetime>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Mobile number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"mobile\" required></ion-input>\n        </ion-item>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.mobile\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('mobile').hasError(validation.type) && (updateUserForm.get('mobile').dirty || updateUserForm.get('mobile').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required readonly></ion-input>\n        </ion-item>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.email\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('email').hasError(validation.type) && (updateUserForm.get('email').dirty || updateUserForm.get('email').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\" style=\"display: none;\">\n          <ion-label color=\"primary\" position=\"floating\">Username</ion-label>\n          <ion-input type=\"text\" formControlName=\"user_name\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Country</ion-label>\n          <ion-input type=\"text\" formControlName=\"country\" (click)=\"openSelectCountry()\" readonly></ion-input>\n        </ion-item>\n\n        <!-- <ion-button class=\"delete-btn\" (click)=\"openSelectCountry()\" expand=\"block\" color=\"primary\" fill=\"outline\">CHOOSE COUNTRY</ion-button> -->\n\n        <ion-item class=\"input-item\" *ngIf=\"moderateMode\">\n          <ion-label position=\"floating\">Select Status</ion-label>\n          <ion-select formControlName=\"status\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of user_status\" [value]=\"item\" >{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-input *ngIf=\"!moderateMode\" type=\"hidden\" formControlName=\"status\"></ion-input>\n\n\n\n        <ion-input type=\"hidden\" formControlName=\"city\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"address\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"latitude\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"longitude\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        \n        <div color=\"primary\" class=\"ion-padding\" *ngIf=\"appSettings && appSettings.debugMode\">\n          <p>Debug Mode ON: {{user|json}}</p>\n        </div>\n\n      </ion-list>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateUserForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/user/update-user/styles/update-user.modal.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/update-user/styles/update-user.modal.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.update-user-content {\n  --background: var(--page-background);\n}\n\n.update-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.update-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.update-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.update-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.update-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.update-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.update-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.update-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.update-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.update-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\n.form-actions-wrapper .delete-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUtdXNlci9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxcdXBkYXRlLXVzZXJcXHN0eWxlc1xcdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvdXNlci91cGRhdGUtdXNlci9zdHlsZXMvdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvdXNlci91cGRhdGUtdXNlci9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xcY2hlY2tib3gtdGFnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0RBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0Usb0NBQUE7QUNERjs7QURHRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSw4Q0FBQTtBQ0ZKOztBRElJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBRElNO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtBQ0ZSOztBRE1JO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTE47O0FET007RUFDRSxlQUFBO0FDTFI7O0FEVUU7RUFDRSwrQkFBQTtFQUNBLDhFQUFBO0FDUko7O0FEVUk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ1JOOztBRGFJO0VBQ0UsK0JBQUE7QUNYTjs7QURjSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDWk47O0FEaUJJO0VBQ0UsK0RBQUE7RUV2RUosMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUR5REY7O0FDdkRDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRHdESjs7QUN0REk7RUFDRCx1QkFBQTtBRHdESDs7QUNyREU7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEdUROOztBQ3BESTtFQUNFLFlBQUE7QURzRE47O0FDcERNO0VBRUUsVUFBQTtBRHFEUjs7QUNqREU7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRG1ETjs7QUNoREU7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FEZ0RIOztBRG5CTTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUNxQlI7O0FEakJNO0VBQ0UsMkNBQUE7QUNtQlI7O0FEakJRO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsMERBQUE7QUNtQlY7O0FEakJVO0VBQ0Usd0NBQUE7QUNtQlo7O0FEWkU7RUFDRSxtQkFBQTtBQ2NKOztBRFpJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUNZTjs7QURWTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw0Q0FBQTtBQ1lSOztBRFZRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1lWOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1dWOztBRFBNO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDT1I7O0FEREE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDR0Y7O0FEREU7RUFDRSxXQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VwZGF0ZS11c2VyL3N0eWxlcy91cGRhdGUtdXNlci5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XG5cbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi51cGRhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLWZpZWxkcyB7XG4gICAgLmNoZWNrYm94LXRhZ3Mge1xuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAgIC5jaGVja2JveC10YWcge1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG5cbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5kZWxldGUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLnVwZGF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuZGVsZXRlLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/user/update-user/styles/update-user.shell.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/update-user/styles/update-user.shell.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUtdXNlci9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxcdXBkYXRlLXVzZXJcXHN0eWxlc1xcdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNyYy9hcHAvdXNlci91cGRhdGUtdXNlci9zdHlsZXMvdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VwZGF0ZS11c2VyL3N0eWxlcy91cGRhdGUtdXNlci5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/update-user/update-user-profile.modal.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/update-user/update-user-profile.modal.ts ***!
  \***************************************************************/
/*! exports provided: UpdateUserProfileModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserProfileModal", function() { return UpdateUserProfileModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility-components/select-country/select-country.page */ "./src/app/utility-components/select-country/select-country.page.ts");













let UpdateUserProfileModal = class UpdateUserProfileModal {
    constructor(modalController, alertController, firebaseService, masterService, authService, utilsService, activatedRoute, toastService, loadingController, storageService, route, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.activatedRoute = activatedRoute;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.moderateMode = false;
        this.validations = {
            'first_name': [
                { type: 'required', message: 'First name is required.' },
                { type: 'minLength', message: 'First name appears to be too small.' },
                { type: 'maxLength', message: 'First name can not exceed 20 characters.' }
            ],
            'last_name': [
                { type: 'required', message: 'Last name is required.' },
                { type: 'minLength', message: 'Last name appears to be too small.' },
                { type: 'maxLength', message: 'Last name can not exceed 20 characters.' }
            ],
            'email': [
                { type: 'required', message: 'Email address is required.' },
                { type: 'pattern', message: 'Enter a valid email address.' }
            ],
            'mobile': [
                { type: 'required', message: 'Please enter your mobile number.' },
                { type: 'minlength', message: 'Mobile number must be at least 9 digits long.' },
                { type: 'maxlength', message: 'Mobile number must not exceed 12 digits.' }
            ]
        };
        let currentTime = new Date();
        let year = currentTime.getFullYear();
        this.maxDOBYear = year - 16;
    }
    ngOnInit() {
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            //email: new FormControl(this.user.email,  Validators.required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.route.paramMap.subscribe(params => {
            if (params.get("user_id")) {
                let user_profile_id = params.get("user_id");
                this.authService.getAuthCache().then(result => {
                    this.localUser = result;
                    this.firebaseService.getProfileDataSource(this.localUser.api_key, user_profile_id).subscribe((res) => {
                        if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                            console.log("PROFILE UPDATE SYNC :: " + JSON.stringify(res));
                        }
                        if (!res.error) {
                            this.user = res.myProfile;
                            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                                console.log("PROFILE UPDATE SYNC => " + JSON.stringify(this.user));
                            }
                            if (user_profile_id != this.localUser.user_name) {
                                //this.selfView = false;
                            }
                            if (this.localUser.id !== this.user.id) {
                                this.moderateMode = true;
                            }
                            // this.loading = false;
                            this.populateForm();
                        }
                        else {
                            this.toastService.presentToast(res.message);
                        }
                    }, (error) => {
                        this.toastService.presentToast('Looks like there is a Network Issue while fetching profile.');
                    });
                });
            }
            else {
            }
        });
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].APP_SETTINGS).then(appSettings => {
            if (appSettings) {
                this.appSettings = appSettings;
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                    console.log("AppSettings: " + JSON.stringify(appSettings));
                }
            }
        });
        this.user_status = ["Pending", "Active", "Blocked"];
    }
    populateForm() {
        this.selectedAvatar = this.user.user_image;
        this.updateUserForm.patchValue({ user_id: this.user.id });
        this.updateUserForm.get('user_id').updateValueAndValidity();
        this.updateUserForm.patchValue({ first_name: this.user.first_name });
        this.updateUserForm.get('first_name').updateValueAndValidity();
        this.updateUserForm.patchValue({ last_name: this.user.last_name });
        this.updateUserForm.get('last_name').updateValueAndValidity();
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you really want to delete the account of ' + this.user.first_name + '?',
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
                                'user_id': this.user.id
                            };
                            this.firebaseService.deleteItem(this.localUser.api_key, postData)
                                .subscribe((res) => {
                                console.log('################ Result# ' + JSON.stringify(res));
                                this.loadingController.dismiss();
                                if (res.error) {
                                    this.presentAlert(res.message);
                                }
                                else {
                                    //delete from local
                                    // this.firebaseService.invokeListChangeEvent.subscribe(value => {
                                    //   this.toastService.presentToast("GOTTA => "+JSON.stringify(value));
                                    //   });
                                    this.dismissModal();
                                    //console.log('Modal Dismiss Time 007 # '+JSON.stringify(this.deleteResult));
                                    this.toastService.presentToast(res.message);
                                    this.router.navigate(['/hire-people-for-work']);
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
    updateUser() {
        this.presentLoadingWithOptions();
        this.user.id = this.updateUserForm.value.user_id;
        this.user.user_image = this.selectedAvatar;
        this.user.first_name = this.updateUserForm.value.first_name;
        this.user.last_name = this.updateUserForm.value.last_name;
        this.user.email = this.updateUserForm.value.email;
        this.user.mobile = this.updateUserForm.value.mobile;
        this.user.address = this.updateUserForm.value.address;
        //this.user.city = this.updateUserForm.value.city;
        this.user.country = this.updateUserForm.value.country;
        this.user.latitude = this.updateUserForm.value.latitude;
        this.user.longitude = this.updateUserForm.value.longitude;
        this.user.pincode = this.updateUserForm.value.pincode;
        this.user.user_name = this.updateUserForm.value.user_name;
        this.user.dob = this.updateUserForm.value.dob;
        this.user.status = this.updateUserForm.value.status;
        console.log("DOB Value here: " + this.user.dob);
        this.user.dob = this.utilsService.splitTimestampFromDate(this.user.dob);
        if (this.utilsService.isValidDate(this.user.dob)) {
            //alert("All right"+this.user.dob);
        }
        else {
            let formattedVal = this.utilsService.formatTheDate(this.user.dob);
            this.updateUserForm.controls.dob.patchValue(formattedVal);
            this.user.dob = formattedVal;
            console.log("DOB formatted from " + this.user.dob + " to " + formattedVal);
        }
        console.log("And DOB Value here: " + this.updateUserForm.value.dob);
        let postData = {
            user_id: this.user.id,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            mobile: this.user.mobile,
            dob: this.user.dob,
            address: this.user.address,
            country: this.user.country,
            latitude: this.user.latitude,
            longitude: this.user.longitude,
            pincode: this.user.pincode,
            status: this.user.status,
            user_name: this.user.user_name,
            user_image_blob: this.updatedImage
        };
        console.log('########## Update User params ########### ' + JSON.stringify(postData));
        this.firebaseService.callUpdateAPI(this.localUser.api_key, postData)
            .subscribe((res) => {
            this.loadingController.dismiss();
            //alert(JSON.stringify(res));
            //this.presentAlert(res.message);
            //this.toastService.presentToast(JSON.stringify(res)); 
            //this.loadingController.dismiss();
            console.log('########## API Response ########### ' + JSON.stringify(res));
            this.updateResult = res;
            if (!res.error) {
                /********** NAVIGATE WITH USER ID **********/
                this.dismissModal();
                if (res.user_name) {
                    this.router.navigate(['/people/details', res.user_name]);
                }
                else {
                    this.router.navigate(['/people/profile']);
                }
                //this.firebaseService.invokeProfileChangeEvent.
            }
            else {
                this.presentAlert(res.message);
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.updateUserForm.patchValue({
            user_image: file
        });
        this.updateUserForm.get('user_image').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.updatedImage = reader.result;
            this.user.user_image = this.updatedImage;
        };
        reader.readAsDataURL(file);
    }
    openSelectCountry() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_12__["SelectCountryPage"],
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    //alert(JSON.stringify(item));
                    this.updateUserForm.controls.country.patchValue(item.data);
                }
            });
            yield modal.present();
        });
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
    removeFile() {
        this.updatedImage = "";
        this.user.user_image = this.updatedImage;
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
};
UpdateUserProfileModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdateUserProfileModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-user-profile.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/update-user/update-user-profile.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/update-user.modal.scss */ "./src/app/user/update-user/styles/update-user.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/update-user.shell.scss */ "./src/app/user/update-user/styles/update-user.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UpdateUserProfileModal);



/***/ }),

/***/ "./src/app/user/update-user/update-user.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/update-user/update-user.module.ts ***!
  \********************************************************/
/*! exports provided: UpdateUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserModule", function() { return UpdateUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _update_user_profile_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-user-profile.modal */ "./src/app/user/update-user/update-user-profile.modal.ts");








const routes = [
    {
        path: '',
        component: _update_user_profile_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateUserProfileModal"]
    }
];
let UpdateUserModule = class UpdateUserModule {
};
UpdateUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        //exports:[UpdateUserModule],
        entryComponents: [],
        declarations: [_update_user_profile_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateUserProfileModal"]]
    })
], UpdateUserModule);



/***/ })

}]);
//# sourceMappingURL=update-user-update-user-module-es2015.js.map