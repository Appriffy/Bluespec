(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~documents-upload-document-upload-document-module~user-documents-upload-document-upload-docum~05c5089d"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/upload-document/upload-document.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/upload-document/upload-document.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"create-user-form ion-page\" [formGroup]=\"uploadFileForm\" (ngSubmit)=\"createFile()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"people/profile\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Upload {{docType}}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"expiration-countdown\">\n      <span class=\"expiration-lead\" *ngIf=\"docType\">\n        Upload your {{docType}} in PDF, PNG or JPEG Format.\n      </span>\n      <span class=\"expiration-lead\" *ngIf=\"!docType\" (click)=\"openSelectDocumentMaster()\">\n        Click here to select a document type.\n      </span>\n    </ion-row>\n\n    <!-- <ion-button (click)=\"fileInput.click()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon> CLICK TEST\n    </ion-button>\n\n    <ion-button (click)=\"fileInput.onChange()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon> CHANGE TEST\n    </ion-button> -->\n\n    <ion-row class=\"select-user-image-row\" *ngIf=\"docType\">\n      <ion-col class=\"user-image-col\" size=\"8\" (click)=\"fileInput.click()\">\n      \n        <!-- <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" *ngIf=\"!localFileSrc && preview\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"preview\" [alt]=\"'Upload Document'\"></app-image-shell>\n        </app-aspect-ratio> -->\n        <pdf-viewer *ngIf=\"localFileSrc\" [src]=\"localFileSrc\" [render-text]=\"true\"\n        style=\"display: block;\" [original-size]=\"false\" [fit-to-page]=\"true\"></pdf-viewer>\n\n         <img *ngIf=\"preview\" class=\"user-image\" [src]=\"preview\" style=\"margin:0 auto;width:100%;height:auto;\"/>\n        \n         <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" *ngIf=\"!preview && !localFileSrc\">\n          <app-image-shell class=\"user-image\" [mode]=\"'cover'\" animation=\"spinner\" [src]=\"'./assets/images/bg.jpg'\" [alt]=\"'Upload Document'\"></app-image-shell>\n        </app-aspect-ratio>\n\n        <ion-button class=\"change-image-btn\" color=\"primary\" (click)=\"fileInput.click()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/upload.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-content>\n\n  <ion-footer>\n\n  <section class=\"user-details-fields fields-section\">\n  <ion-list class=\"inputs-list\" lines=\"full\">\n\n  <!-- Progress Bar -->\n  <div class=\"progress form-group\" *ngIf=\"percentDone\">\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\n      [style.width.%]=\"percentDone\">\n    </div>\n  </div>\n\n  <!-- File Input -->\n  <div class=\"form-group\" style=\"display:block;text-align: center;\">\n    <input #fileInput type=\"file\" accept=\".pdf, .png, .jpeg\" (change)=\"uploadBinaryFile($event)\">\n  </div>\n\n\n        <ion-item class=\"input-item\" style=\"display:none;\">\n          <ion-label color=\"primary\" position=\"floating\">Select Document Type *</ion-label>\n          <ion-input type=\"text\" (click)=\"openSelectDocumentMaster()\" formControlName=\"doc_type\"></ion-input>\n        </ion-item>\n        <ion-input type=\"hidden\" formControlName=\"doc_type_id\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\" required></ion-input>\n</ion-list>\n    </section>\n\n\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!uploadFileForm.valid\">\n          <ion-icon slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/upload.svg\"></ion-icon> &nbsp;&nbsp;UPLOAD</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/user/documents/upload-document/upload-document.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/documents/upload-document/upload-document.module.ts ***!
  \**************************************************************************/
/*! exports provided: UploadDocumentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentPageModule", function() { return UploadDocumentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_document_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-document.page */ "./src/app/user/documents/upload-document/upload-document.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _utility_components_select_document_type_select_document_type_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility-components/select-document-type/select-document-type.page */ "./src/app/utility-components/select-document-type/select-document-type.page.ts");
/* harmony import */ var _utility_components_select_document_type_select_document_type_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utility-components/select-document-type/select-document-type.module */ "./src/app/utility-components/select-document-type/select-document-type.module.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");











const routes = [
    {
        path: '',
        component: _upload_document_page__WEBPACK_IMPORTED_MODULE_6__["UploadDocumentPage"]
    }
];
let UploadDocumentPageModule = class UploadDocumentPageModule {
};
UploadDocumentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _utility_components_select_document_type_select_document_type_module__WEBPACK_IMPORTED_MODULE_9__["SelectDocumentTypePageModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfViewerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        entryComponents: [_utility_components_select_document_type_select_document_type_page__WEBPACK_IMPORTED_MODULE_8__["SelectDocumentTypePage"]],
        declarations: [_upload_document_page__WEBPACK_IMPORTED_MODULE_6__["UploadDocumentPage"]]
    })
], UploadDocumentPageModule);



/***/ }),

/***/ "./src/app/user/documents/upload-document/upload-document.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/documents/upload-document/upload-document.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  background-color: #ffffff;\n  border-radius: 0%;\n  border: solid 3px #777777;\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 20px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kb2N1bWVudHMvdXBsb2FkLWRvY3VtZW50L0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVzZXJcXGRvY3VtZW50c1xcdXBsb2FkLWRvY3VtZW50XFx1cGxvYWQtZG9jdW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL2RvY3VtZW50cy91cGxvYWQtZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvREFBQTtFQUNBLHVCQUFBO0FDREY7O0FEaUJBO0VBQ0UsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2hCRjs7QURrQkU7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURvQkE7RUFDRSxvQ0FBQTtBQ2pCRjs7QURrQkU7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUNoQko7O0FEa0JJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCTjs7QURpQk07RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNmUjs7QURtQkk7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNsQk47O0FEb0JNO0VBQ0UsZUFBQTtBQ2xCUjs7QUR1QkU7RUFDRSwrQkFBQTtFQUNBLDhFQUFBO0FDckJKOztBRHVCSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDckJOOztBRDBCSTtFQUNFLCtCQUFBO0FDeEJOOztBRDJCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDekJOOztBRCtCQTtFQUNFLHVEQUFBO0VBRUEscUNBQUE7QUM3QkY7O0FEK0JFO0VBQ0UsV0FBQTtBQzdCSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZG9jdW1lbnRzL3VwbG9hZC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vLyBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbi8vICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuLy8gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbi8vICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbi8vICAgcGFkZGluZy10b3A6IC0yMHB4O1xyXG4vLyAgIHRvcDogLTIwcHg7XHJcbi8vIH1cclxuXHJcbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDg7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuZXhwaXJhdGlvbi1sZWFkIHtcclxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn0gXHJcblxyXG4uY3JlYXRlLXVzZXItY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC51c2VyLWltYWdlLWNvbCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLnVzZXItaW1hZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzc3Nzc3NztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICB3aWR0aDogNGNoO1xyXG4gICAgICBoZWlnaHQ6IDRjaDtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgICAgLmJ0bi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWVsZHMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXItZGV0YWlscy1maWVsZHMge1xyXG4gICAgLmlucHV0cy1saXN0IHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAuc3VibWl0LWJ0biB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLmV4cGlyYXRpb24tY291bnRkb3duIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmV4cGlyYXRpb24tY291bnRkb3duIC5leHBpcmF0aW9uLWxlYWQge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzc3Nzc3Nztcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDRjaDtcbiAgaGVpZ2h0OiA0Y2g7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/documents/upload-document/upload-document.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/documents/upload-document/upload-document.page.ts ***!
  \************************************************************************/
/*! exports provided: UploadDocumentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentPage", function() { return UploadDocumentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utility_components_select_document_type_select_document_type_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility-components/select-document-type/select-document-type.page */ "./src/app/utility-components/select-document-type/select-document-type.page.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");










let UploadDocumentPage = class UploadDocumentPage {
    constructor(authService, masterService, modalController, alertController, route, userService, loadingController, router) {
        this.authService = authService;
        this.masterService = masterService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.route = route;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.preview = '';
        this.percentDone = 0;
        this.docType = "";
    }
    ngOnInit() {
        this.uploadFileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            doc_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            doc_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            document: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            this.api_key = this.localUser.api_key;
            this.uploadFileForm.patchValue({ user_id: this.localUser.id });
        });
        this.route.paramMap.subscribe(params => {
            this.docType = params.get("id");
            //alert(this.docType);
            if (this.docType == null || this.docType == undefined || this.docType == "") {
                this.openSelectDocumentMaster();
            }
        });
    }
    openSelectDocumentMaster() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log('########## openSelectDocumentMaster #####: ');
            const modal = yield this.modalController.create({
                component: _utility_components_select_document_type_select_document_type_page__WEBPACK_IMPORTED_MODULE_8__["SelectDocumentTypePage"]
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    //alert(JSON.stringify(item));
                    this.docType = item.data.title;
                    this.uploadFileForm.controls.doc_type.patchValue(item.data.title);
                    this.uploadFileForm.controls.doc_type_id.patchValue(item.data.id);
                }
            });
            yield modal.present();
        });
    }
    createFile() {
        this.presentLoadingWithOptions();
        let postData = {
            user_id: this.uploadFileForm.value.user_id,
            title: '',
            doc_type: this.uploadFileForm.value.doc_type_id,
            document: this.preview,
        };
        const formData = new FormData();
        formData.append('user_id', this.uploadFileForm.get('user_id').value);
        formData.append('doc_type', this.uploadFileForm.get('doc_type_id').value);
        formData.append('document', this.uploadFileForm.get('document').value);
        console.log('########## Upload Params #####: ' + JSON.stringify(postData));
        console.log('########## Upload Params formData #####: ' + JSON.stringify(formData));
        this.userService.callDocUploadAPI(this.api_key, postData)
            //this.userService.callDocUploadAPI(this.api_key, formData)
            .subscribe((event) => {
            console.log('########## Upload Result #####: ' + JSON.stringify(event));
            this.loadingController.dismiss();
            if (!event.error) {
                this.router.navigate(['/list-documents', this.localUser.id]);
            }
            else {
                this.presentAlert(event.message);
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
        });
    }
    // Image Preview
    uploadBinaryFile(event) {
        //uploadBinaryFile(event) {
        //const file = (event.target as HTMLInputElement).files[0];
        const file = this.myFileInput.nativeElement.files[0];
        if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
            console.log("uploadBinaryFile() called: " + file);
        }
        this.uploadFileForm.patchValue({
            document: file
        });
        this.uploadFileForm.get('document').updateValueAndValidity();
        //console.log("uploadFile() "+this.uploadFileForm.value);
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
            this.localFileSrc = reader.result;
            console.log("uploadFile() got preview: " + this.preview);
        };
        if (file && file.type.match('image.*')) {
            console.log("MATCHING TEST passed image ");
        }
        else {
            console.log("MATCHING TEST else ");
        }
        reader.readAsDataURL(file);
        //this.localFileSrc = reader.readAsArrayBuffer(file);
        console.log("uploadFile() localFileSrc: " + this.localFileSrc);
    }
    uploadFile(event) {
        //https://www.techiediaries.com/angular-file-upload-progress-bar/
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.preview = file;
            console.log("Upload File now => " + file);
            this.uploadFileForm.patchValue({
                document: file
            });
            this.uploadFileForm.get('document').updateValueAndValidity();
            //this.uploadFileForm.get('document').setValue(file);
            console.log("Upload File Now Again => " + JSON.stringify(file.data));
        }
    }
    dismissModal() {
        this.router.navigate(['/list-documents', this.localUser.id]);
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
                message: 'Uploading ' + this.docType + '..',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
UploadDocumentPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UploadDocumentPage.prototype, "myFileInput", void 0);
UploadDocumentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-document.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/upload-document/upload-document.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-document.page.scss */ "./src/app/user/documents/upload-document/upload-document.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], UploadDocumentPage);



/***/ })

}]);
//# sourceMappingURL=default~documents-upload-document-upload-document-module~user-documents-upload-document-upload-docum~05c5089d-es2015.js.map