(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-users-integration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/update/update-document.modal.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/update/update-document.modal.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"update-user-form ion-page\" [formGroup]=\"updateFileForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update {{user.document_type}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n <ion-content class=\"create-user-content\">\n<!-- <h4> {{user|json}}</h4> -->\n    <ion-row class=\"select-user-image-row\" *ngIf=\"!loading && user.status != 'Approved'\">\n      <ion-col class=\"user-image-col\" size=\"8\" (click)=\"fileInput.click()\" style=\"background-color: cadetblue;\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" [src]=\"preview\" [alt]=\"'Upload Document'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"fileInput.click()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/upload.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <div class=\"form-group\" style=\"display:none;\">\n          <input type=\"file\" #fileInput accept=\".pdf,.png, .jpeg\" (change)=\"uploadFile($event)\">\n        </div>\n        <ion-input type=\"hidden\" formControlName=\"doc_type\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\" required></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"doc_id\" required></ion-input>\n      </ion-list>\n\n  <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Updating {{user.document_type}}...</h5>\n    </ion-row>\n  </ion-grid>\n  <!------- Loading View ------->\n  </ion-content>\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!preview\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/user/documents/update/styles/update-document.modal.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/documents/update/styles/update-document.modal.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  --image-shell-border-radius: 0%;\n  background-color: #ffffff;\n  border-radius: 0%;\n  border: solid 3px #777777;\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 20px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\n.form-actions-wrapper .delete-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kb2N1bWVudHMvdXBkYXRlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxkb2N1bWVudHNcXHVwZGF0ZVxcc3R5bGVzXFx1cGRhdGUtZG9jdW1lbnQubW9kYWwuc2NzcyIsInNyYy9hcHAvdXNlci9kb2N1bWVudHMvdXBkYXRlL3N0eWxlcy91cGRhdGUtZG9jdW1lbnQubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvREFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGOztBREdFO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtBQ0RKOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ROOztBREVNO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURJSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hOOztBREtNO0VBQ0UsZUFBQTtBQ0hSOztBRFFFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ05KOztBRFFJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNOTjs7QURXSTtFQUNFLCtCQUFBO0FDVE47O0FEWUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ1ZOOztBRGVBO0VBQ0UsdURBQUE7RUFDQSxxQ0FBQTtBQ1pGOztBRGFFO0VBQ0UsV0FBQTtBQ1hKOztBRGFFO0VBQ0UsV0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9kb2N1bWVudHMvdXBkYXRlL3N0eWxlcy91cGRhdGUtZG9jdW1lbnQubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZ1wiO1xuXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM3Nzc3Nzc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICBoZWlnaHQ6IDRjaDtcbiAgICAgIG1hcmdpbjogMjBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5kZWxldGUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG4gIGJvcmRlcjogc29saWQgM3B4ICM3Nzc3Nzc7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBtYXJnaW46IDIwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuZGVsZXRlLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/documents/update/styles/update-document.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/documents/update/styles/update-document.shell.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kb2N1bWVudHMvdXBkYXRlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxkb2N1bWVudHNcXHVwZGF0ZVxcc3R5bGVzXFx1cGRhdGUtZG9jdW1lbnQuc2hlbGwuc2NzcyIsInNyYy9hcHAvdXNlci9kb2N1bWVudHMvdXBkYXRlL3N0eWxlcy91cGRhdGUtZG9jdW1lbnQuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2RvY3VtZW50cy91cGRhdGUvc3R5bGVzL3VwZGF0ZS1kb2N1bWVudC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/documents/update/update-document.modal.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/documents/update/update-document.modal.ts ***!
  \****************************************************************/
/*! exports provided: UpdateDocumentModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDocumentModal", function() { return UpdateDocumentModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dbmodels_user_document_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dbmodels/user-document.model */ "./src/app/dbmodels/user-document.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");









let UpdateDocumentModal = class UpdateDocumentModal {
    constructor(modalController, alertController, firebaseService, authService, toastService, menu, loadingController, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.toastService = toastService;
        this.menu = menu;
        this.loadingController = loadingController;
        this.router = router;
        this.baseUrl = "https://www.bluspec.app/uploads/documents/";
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
    ngOnInit() {
        this.menu.enable(true);
        this.authService.getAuthCache().then(result => {
            this.localUser = result;
        });
        //this.logoImgUpdated = this.user.logo;
        this.updateFileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            doc_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.user_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            doc_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.document_type_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            document: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.baseUrl + this.user.file_url, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm Delete',
                message: 'Do you really want to delete this document?',
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
                                'item_id': this.user.id
                            };
                            this.firebaseService.deleteUserDocument(this.localUser.api_key, postData)
                                .subscribe((res) => {
                                //console.log('################ Result# '+JSON.stringify(res));
                                this.loadingController.dismiss();
                                if (res.error) {
                                    this.presentAlert(res.message);
                                }
                                else {
                                    //delete from local
                                    this.firebaseService.deleteDocumentItemFromLocal(this.user);
                                    this.dismissModal();
                                    this.toastService.presentToast(res.message);
                                    this.router.navigate(['/documents/listing']);
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
        this.user.id = this.updateFileForm.value.user_id;
        this.user.document_type = this.updateFileForm.value.doc_type;
        var postData = {
            doc_id: this.user.id,
            doc_type: this.user.document_type_id,
            user_id: this.user.user_id,
            document: this.preview
        };
        console.log('########## Doc params ########### ' + JSON.stringify(postData));
        //this.firebaseService.callCompanyUpdateAPI(this.api_key, this.user)
        this.firebaseService.callDocumentUpdateAPI(this.localUser.api_key, postData)
            .subscribe((res) => {
            this.loadingController.dismiss();
            console.log('########## API Response ########### ' + JSON.stringify(res));
            this.updateResult = res.json();
            if (!res.error) {
                this.dismissModal();
                //SYNC THE UPDATE
                //this.firebaseService.fetchFreshList();
                //this.router.navigate(['/companies/details'], {queryParams :{id : res.id}});
                this.router.navigate(['/documents/listing']);
            }
            else {
                this.presentAlert(res.message);
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
        // if (!this.updateResult.error) {
        //   /********** NAVIGATE WITH USER ID **********/
        //   this.dismissModal();
        //   console.log('########## API Successful ########### '+JSON.stringify(this.updateResult));
        //   this.router.navigate(['companies/details'], {queryParams :{id : this.updateResult.id}});
        //   //this.router.navigate(['companies/details'], this.updateResult.id);
        //   } else {
        //     this.presentAlert(this.updateResult.message);
        //   }
    }
    uploadFile(event) {
        const file = event.target.files[0];
        this.updateFileForm.patchValue({
            document: file
        });
        this.updateFileForm.get('document').updateValueAndValidity();
        //console.log("uploadFile() "+this.updateFileForm.value);
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
            console.log("uploadFile() got preview: " + this.preview);
        };
        reader.readAsDataURL(file);
    }
    removeFile() {
        this.preview = "";
        this.user.file_url = "";
    }
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '',
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
};
UpdateDocumentModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_user_document_model__WEBPACK_IMPORTED_MODULE_5__["UserDocumentModel"])
], UpdateDocumentModal.prototype, "user", void 0);
UpdateDocumentModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-document.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/update/update-document.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/update-document.modal.scss */ "./src/app/user/documents/update/styles/update-document.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/update-document.shell.scss */ "./src/app/user/documents/update/styles/update-document.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UpdateDocumentModal);



/***/ }),

/***/ "./src/app/user/update/update-user.module.ts":
/*!***************************************************!*\
  !*** ./src/app/user/update/update-user.module.ts ***!
  \***************************************************/
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
/* harmony import */ var _update_user_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-user.modal */ "./src/app/user/update/update-user.modal.ts");








const routes = [
    {
        path: '',
        component: _update_user_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateUserModal"]
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
        declarations: [_update_user_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateUserModal"]]
    })
], UpdateUserModule);



/***/ }),

/***/ "./src/app/user/users-integration-module.ts":
/*!**************************************************!*\
  !*** ./src/app/user/users-integration-module.ts ***!
  \**************************************************/
/*! exports provided: UsersIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersIntegrationModule", function() { return UsersIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _update_update_user_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update/update-user.modal */ "./src/app/user/update/update-user.modal.ts");
/* harmony import */ var _create_create_user_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create-user.modal */ "./src/app/user/create/create-user.modal.ts");
/* harmony import */ var _update_update_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/update-user.module */ "./src/app/user/update/update-user.module.ts");
/* harmony import */ var _utility_components_select_document_type_select_document_type_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utility-components/select-document-type/select-document-type.module */ "./src/app/utility-components/select-document-type/select-document-type.module.ts");
/* harmony import */ var _utility_components_select_document_type_select_document_type_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utility-components/select-document-type/select-document-type.page */ "./src/app/utility-components/select-document-type/select-document-type.page.ts");
/* harmony import */ var _documents_update_update_document_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./documents/update/update-document.modal */ "./src/app/user/documents/update/update-document.modal.ts");
/* harmony import */ var _utility_components_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utility-components/select-country/select-country.module */ "./src/app/utility-components/select-country/select-country.module.ts");
/* harmony import */ var _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utility-components/select-country/select-country.page */ "./src/app/utility-components/select-country/select-country.page.ts");















const firebaseRoutes = [
    {
        path: 'listing/:user_role',
        data: [{ skill: 3, status: 'All', 'numJobs': '1' }],
        loadChildren: () => __webpack_require__.e(/*! import() | listing-listing-module */ "default~listing-listing-module~user-listing-listing-module").then(__webpack_require__.bind(null, /*! ./listing/listing.module */ "./src/app/user/listing/listing.module.ts")).then(m => m.ListingPageModule)
    },
    {
        path: 'details/:user_id',
        loadChildren: () => Promise.all(/*! import() | profile-user-profile-module */[__webpack_require__.e("default~details-company-details-module~details-job-areas-details-module~details-job-skills-details-m~3b748c40"), __webpack_require__.e("default~app-masters-job-areas-job-areas-integration-module~app-masters-job-skills-job-skills-integra~a40ac1be"), __webpack_require__.e("default~profile-user-profile-module~user-education-details-education-details-integration-module~user~9c8810c2"), __webpack_require__.e("default~profile-user-profile-module~user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/user-profile.module */ "./src/app/user/profile/user-profile.module.ts")).then(m => m.UserProfilePageModule)
    },
    {
        path: 'update/:user_id',
        loadChildren: () => __webpack_require__.e(/*! import() | update-user-update-user-module */ "update-user-update-user-module").then(__webpack_require__.bind(null, /*! ./update-user/update-user.module */ "./src/app/user/update-user/update-user.module.ts")).then(m => m.UpdateUserModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-user-profile-module */[__webpack_require__.e("default~details-company-details-module~details-job-areas-details-module~details-job-skills-details-m~3b748c40"), __webpack_require__.e("default~app-masters-job-areas-job-areas-integration-module~app-masters-job-skills-job-skills-integra~a40ac1be"), __webpack_require__.e("default~profile-user-profile-module~user-education-details-education-details-integration-module~user~9c8810c2"), __webpack_require__.e("default~profile-user-profile-module~user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/user-profile.module */ "./src/app/user/profile/user-profile.module.ts")).then(m => m.UserProfilePageModule)
    },
    {
        path: 'upload-document',
        loadChildren: () => Promise.all(/*! import() | documents-upload-document-upload-document-module */[__webpack_require__.e("default~documents-upload-document-upload-document-module~documents-view-document-view-document-modul~09d015fb"), __webpack_require__.e("default~documents-upload-document-upload-document-module~user-documents-upload-document-upload-docum~05c5089d")]).then(__webpack_require__.bind(null, /*! ./documents/upload-document/upload-document.module */ "./src/app/user/documents/upload-document/upload-document.module.ts")).then(m => m.UploadDocumentPageModule)
    },
    {
        path: 'edit-profile/:user_id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./update/update-user.module */ "./src/app/user/update/update-user.module.ts")).then(m => m.UpdateUserModule)
    },
    {
        path: 'relocation-fees/:user_id',
        loadChildren: () => __webpack_require__.e(/*! import() | relocation-fees-relocation-fees-module */ "default~relocation-fees-relocation-fees-module~user-relocation-fees-relocation-fees-module").then(__webpack_require__.bind(null, /*! ./relocation-fees/relocation-fees.module */ "./src/app/user/relocation-fees/relocation-fees.module.ts")).then(m => m.RelocationFeesPageModule)
    },
    {
        path: 'assign-skills/:user_id',
        loadChildren: () => __webpack_require__.e(/*! import() | assign-skills-assign-skills-module */ "assign-skills-assign-skills-module").then(__webpack_require__.bind(null, /*! ./assign-skills/assign-skills.module */ "./src/app/user/assign-skills/assign-skills.module.ts")).then(m => m.AssignSkillsPageModule)
    },
    {
        path: 'documents/detail/:doc_id',
        loadChildren: () => Promise.all(/*! import() | documents-view-document-view-document-module */[__webpack_require__.e("default~documents-upload-document-upload-document-module~documents-view-document-view-document-modul~09d015fb"), __webpack_require__.e("documents-view-document-view-document-module")]).then(__webpack_require__.bind(null, /*! ./documents/view-document/view-document.module */ "./src/app/user/documents/view-document/view-document.module.ts")).then(m => m.ViewDocumentPageModule)
    },
    { path: 'reviews/:user_id',
        loadChildren: './work-reviews/list/work-reviews.module#WorkReviewsPageModule' },
];
let UsersIntegrationModule = class UsersIntegrationModule {
};
UsersIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _update_update_user_module__WEBPACK_IMPORTED_MODULE_9__["UpdateUserModule"],
            _utility_components_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_13__["SelectCountryPageModule"],
            _utility_components_select_document_type_select_document_type_module__WEBPACK_IMPORTED_MODULE_10__["SelectDocumentTypePageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes)
        ],
        entryComponents: [
            _create_create_user_modal__WEBPACK_IMPORTED_MODULE_8__["CreateUserModal"],
            _update_update_user_modal__WEBPACK_IMPORTED_MODULE_7__["UpdateUserModal"],
            _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_14__["SelectCountryPage"],
            _utility_components_select_document_type_select_document_type_page__WEBPACK_IMPORTED_MODULE_11__["SelectDocumentTypePage"],
            _documents_update_update_document_modal__WEBPACK_IMPORTED_MODULE_12__["UpdateDocumentModal"]
        ],
        declarations: [
            _create_create_user_modal__WEBPACK_IMPORTED_MODULE_8__["CreateUserModal"],
            _documents_update_update_document_modal__WEBPACK_IMPORTED_MODULE_12__["UpdateDocumentModal"]
            //UpdateUserModal
        ]
    })
], UsersIntegrationModule);



/***/ }),

/***/ "./src/app/utility-components/select-country/select-country.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/utility-components/select-country/select-country.module.ts ***!
  \****************************************************************************/
/*! exports provided: SelectCountryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function() { return SelectCountryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_country_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-country.page */ "./src/app/utility-components/select-country/select-country.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");







let SelectCountryPageModule = class SelectCountryPageModule {
};
SelectCountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPage"]],
        exports: [
            _select_country_page__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPage"]
        ],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SelectCountryPageModule);



/***/ })

}]);
//# sourceMappingURL=user-users-integration-module-es2015.js.map