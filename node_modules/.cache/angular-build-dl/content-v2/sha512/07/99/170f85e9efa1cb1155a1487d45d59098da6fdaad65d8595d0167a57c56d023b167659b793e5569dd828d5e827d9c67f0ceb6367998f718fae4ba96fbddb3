(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-view-document-view-document-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/view-document/view-document.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/view-document/view-document.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"{{backBtnUrl}}\"></ion-back-button>\n      </ion-buttons>\n\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"openItemUpdateModal()\" *ngIf=\"thisDocument?.status != 'Approved' && (localUser?.role_id == 1 || selfView)\">\n        <!-- <ion-button (click)=\"openItemUpdateModal()\" *ngIf=\"localUser?.role_id == 1 || selfView\"> -->\n          Edit\n        </ion-button>\n      </ion-buttons>\n      <ion-title *ngIf=\"!thisDocument\">View Document</ion-title>\n      <ion-title *ngIf=\"thisDocument\">View {{thisDocument?.document_type}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"expiration-countdown\" *ngIf=\"thisDocument?.status == 'Rejected'\">\n      <span class=\"expiration-lead\">This {{thisDocument?.document_type}} has been rejected. Upload a valid file to get re-verified.</span>\n    </ion-row>\n\n    <ion-row class=\"expiration-countdown approved\" *ngIf=\"thisDocument?.status == 'Approved'\">\n      <span class=\"expiration-lead\">This {{thisDocument?.document_type}} has been approved.</span>\n    </ion-row>\n\n\n    <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Document</h5>\n    <h5 style=\"text-align: center;columns: #555555;font-size:13px;margin-top:2px;\">Please wait...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n    <ion-row *ngIf=\"thisDocument && !loading\">\n  <!-- <pdf-viewer [src]=\"getFileURL()\"></pdf-viewer> -->\n      <ion-card class=\"doc-card\">\n        <ion-card-content>\n    <h4 class=\"user-age\" style=\"color:#444444;font-size:16px;font-weight: 500;\" *ngIf=\"thisDocument?.user_full_name\"> Submitted by {{thisDocument?.user_full_name}}</h4>\n    <h5 class=\"user-age\" style=\"color:#444444;font-size:16px;font-weight: 500;\" *ngIf=\"thisDocument?.status\"> Status: {{thisDocument?.status}}</h5>\n    <h5 class=\"user-age\" style=\"color:#444444;font-size:16px;font-weight: 500;\" *ngIf=\"thisDocument?.date_created\"> Submission Date : {{thisDocument?.date_created}}</h5>\n    \n    <h5 class=\"user-age\" style=\"color:#444444;font-size:16px;font-weight: 500;\" *ngIf=\"!selfView && thisDocument?.size > 0\">File Info : {{thisDocument?.file_format}} ({{thisDocument?.size}} KB)</h5>\n    \n    <hr>\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\" \n    *ngIf=\"getFileType() === 'pdf' && pdfLoadStatus\">\n      <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n      <h5 style=\"text-align: center;columns: #555555;\">Loading Preview...</h5>\n      </ion-row>\n\n    <pdf-viewer *ngIf=\"getFileType() === 'pdf'\" [src]=\"getFileURL()\" [render-text]=\"true\"\n    style=\"display: block;\" [original-size]=\"false\" [fit-to-page]=\"true\" \n    (on-progress)=\"onProgress($event)\" (error)=\"onError($event)\" (after-load-complete)=\"pageRendered($event)\"></pdf-viewer>\n\n\n    <img *ngIf=\"getFileType() == 'jpg' || getFileType() == 'jpeg' || getFileType() == 'png'\" \n    [src]=\"getFileURL()\" style=\"width:100%;height:auto;margin:0 auto;\"/>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n    <ion-row class=\"form-actions-wrapper\"  style=\"text-align: center;align-content: center;margin: 0 auto;\">\n      <ion-col size=\"12\">\n        <ion-button class=\"promo-code-btn\" style=\"text-align: center;\" expand=\"cover\" shape=\"round\" fill=\"outline\" color=\"claim\">\n          <a target=\"_blank\" [href]=\"getFileURL()\" style=\"text-align: center;text-decoration: none;\">\n            <span class=\"promo-code\">\n              <ion-icon class=\"btn-icon\" slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/download.svg\"></ion-icon> DOWNLOAD \n            </span>\n          </a>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-content>\n\n  <ion-footer>\n    <section class=\"user-details-fields fields-section\">\n        <ion-row class=\"form-actions-wrapper\" *ngIf=\"localUser?.role_id == 1\">\n          <ion-col *ngIf=\"thisDocument?.status == 'Pending' || thisDocument?.status == 'Rejected'\">\n            <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" (click)=\"updateDocStatus('Approved')\" fill=\"solid\">\n              <ion-icon class=\"btn-icon\" slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/checkmark.svg\"></ion-icon> &nbsp;&nbsp;APPROVE</ion-button>\n          </ion-col>\n          <ion-col *ngIf=\"thisDocument?.status == 'Pending'|| thisDocument?.status == 'Approved'\">\n            <ion-button class=\"submit-btn\" expand=\"block\" color=\"danger\" (click)=\"updateDocStatus('Rejected')\" fill=\"solid\">\n              <ion-icon class=\"btn-icon\" slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/close.svg\"></ion-icon> &nbsp;&nbsp;REJECT</ion-button>\n          </ion-col>\n        </ion-row>\n    </section>\n    \n  </ion-footer>\n");

/***/ }),

/***/ "./src/app/user/documents/view-document/view-document.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/documents/view-document/view-document.module.ts ***!
  \**********************************************************************/
/*! exports provided: ViewDocumentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDocumentPageModule", function() { return ViewDocumentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _view_document_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-document.page */ "./src/app/user/documents/view-document/view-document.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _view_document_page__WEBPACK_IMPORTED_MODULE_7__["ViewDocumentPage"]
    }
];
let ViewDocumentPageModule = class ViewDocumentPageModule {
};
ViewDocumentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfViewerModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_document_page__WEBPACK_IMPORTED_MODULE_7__["ViewDocumentPage"]],
    })
], ViewDocumentPageModule);



/***/ }),

/***/ "./src/app/user/documents/view-document/view-document.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user/documents/view-document/view-document.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --detail-sections-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.create-user-content {\n  --background: var(--app-background);\n}\n\n.doc-card {\n  background-color: white;\n  width: 100%;\n}\n\n.iframe-fix iframe {\n  -webkit-overflow-scrolling: touch !important;\n  overflow: scroll !important;\n  width: 100%;\n  height: 100%;\n  border: none;\n  margin-top: 2px;\n}\n\n.iframe-fix {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #fff;\n}\n\n.form-actions-wrapper {\n  text-align: center;\n  align-content: center;\n}\n\n.promo-code-btn {\n  margin: 0px;\n}\n\n.promo-code {\n  display: block;\n  font-size: 14px;\n  line-height: 1;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.approved {\n  background-color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kb2N1bWVudHMvdmlldy1kb2N1bWVudC9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxkb2N1bWVudHNcXHZpZXctZG9jdW1lbnRcXHZpZXctZG9jdW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL2RvY3VtZW50cy92aWV3LWRvY3VtZW50L3ZpZXctZG9jdW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxnREFBQTtFQUNBLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0RBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FERUk7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBRElFO0VBQ0UsMENBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZG9jdW1lbnRzL3ZpZXctZG9jdW1lbnQvdmlldy1kb2N1bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgLS1kZXRhaWwtc2VjdGlvbnMtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbn1cclxuXHJcbi5jcmVhdGUtdXNlci1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmRvYy1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlmcmFtZS1maXggaWZyYW1lIHtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pZnJhbWUtZml4IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuLmZvcm0tYWN0aW9ucy13cmFwcGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICAucHJvbW8tY29kZS1idG4ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvbW8tY29kZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuXHJcbiAgLmV4cGlyYXRpb24tY291bnRkb3duIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogODtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmV4cGlyYXRpb24tbGVhZCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIC5hcHByb3ZlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICB9XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tZGV0YWlsLXNlY3Rpb25zLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLmRvYy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWZyYW1lLWZpeCBpZnJhbWUge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2ggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmlmcmFtZS1maXgge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvbW8tY29kZS1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByb21vLWNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmV4cGlyYXRpb24tY291bnRkb3duIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmV4cGlyYXRpb24tY291bnRkb3duIC5leHBpcmF0aW9uLWxlYWQge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYXBwcm92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/documents/view-document/view-document.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/documents/view-document/view-document.page.ts ***!
  \********************************************************************/
/*! exports provided: ViewDocumentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDocumentPage", function() { return ViewDocumentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _update_update_document_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update/update-document.modal */ "./src/app/user/documents/update/update-document.modal.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");









let ViewDocumentPage = class ViewDocumentPage {
    //pdfUrl = "https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf";
    constructor(firebaseService, modalController, loadingController, authService, router, alertController, santitizer, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.santitizer = santitizer;
        this.route = route;
        this.selfView = false;
        this.loading = true;
        this.baseUrl = "https://bluspec.app/uploads/documents/";
        this.fileurl = "";
        this.redirectFromAdminView = false;
        this.backBtnUrl = "";
        this.pdfLoadStatus = "";
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.doc_id = params.get("doc_id");
            if (this.doc_id == "") {
                this.router.navigate(['page-not-found']);
            }
            console.log("Route paramMap : " + JSON.stringify(params));
        });
        this.route.queryParamMap.subscribe(queries => {
            console.log("Route Queryparam map=> " + JSON.stringify(queries));
            if (queries.has("viewer")) {
                this.redirectFromAdminView = true;
                this.backBtnUrl = "/list-documents/all";
            }
        });
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            this.fetchDocDetail(this.localUser.api_key, this.doc_id);
        });
    }
    fetchDocDetail(apiKey, postData) {
        this.loading = true;
        this.firebaseService.fetchDocDetail(apiKey, postData).subscribe((res) => {
            this.loading = false;
            if (res) {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
                    console.log("Document Detail Logged: " + JSON.stringify(res));
                }
                this.thisDocument = res;
                this.backBtnUrl = "/list-documents/" + this.thisDocument.user_id;
                this.fileurl = this.thisDocument.file_url;
                //alert(this.getFileType());
                if (this.thisDocument.user_id == this.localUser.id) {
                    this.selfView = true;
                }
                if (res.error) {
                    this.router.navigate(['page-not-found']);
                }
            }
        }, (error) => {
            console.log('Looks like there is a Network Issue.');
        });
    }
    getFileURL() {
        //return this.santitizer.bypassSecurityTrustResourceUrl(this.baseUrl+""+this.fileurl);
        return this.baseUrl + "" + this.fileurl;
    }
    getFileType() {
        return this.fileurl.substr(this.fileurl.lastIndexOf('.') + 1);
    }
    onProgress(progressData) {
        this.pdfLoadStatus = "Loading PDF Document";
    }
    onError(error) {
        this.pdfLoadStatus = "Error Loading PDF Document";
    }
    pageRendered(e) {
        this.pdfLoadStatus = "";
    }
    openItemUpdateModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_update_document_modal__WEBPACK_IMPORTED_MODULE_6__["UpdateDocumentModal"],
                componentProps: {
                    'user': this.thisDocument
                }
            });
            yield modal.present();
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    updateDocStatus(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let title = "Approve " + this.thisDocument.document_type;
            let message = "Have you completed the verification and want to approve " + this.thisDocument.document_type + "?";
            if (status == "Rejected") {
                title = "Reject " + this.thisDocument.document_type;
                message = "Are you sure you want to reject " + this.thisDocument.document_type + "?";
            }
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: 'Confirm',
                        handler: () => {
                            //this.presentLoadingWithOptions();
                            let postData = {
                                doc_id: this.thisDocument.id,
                                status: status
                            };
                            this.firebaseService.callDocumentVerificationAPI(this.localUser.api_key, postData)
                                .subscribe((res) => {
                                this.loadingController.dismiss();
                                console.log('########## API Response ########### ' + JSON.stringify(res));
                                //this.updateResult = res.json();
                                if (!res.error) {
                                    this.dismissModal();
                                    //SYNC THE UPDATE
                                    //this.firebaseService.fetchFreshList();
                                    //this.router.navigate(['/companies/details'], {queryParams :{id : res.id}});
                                    this.presentAlert(res.message);
                                    this.authService.getAuthCache().then(authData => {
                                        if (authData) {
                                            this.firebaseService.getUserDocumentDataSource(authData.api_key, this.thisDocument.user_id);
                                        }
                                    });
                                    if (this.redirectFromAdminView) {
                                        this.router.navigate(['/list-documents/all']);
                                    }
                                    else {
                                        this.router.navigate(['/list-documents', this.thisDocument.user_id]);
                                    }
                                }
                                else {
                                    this.presentAlert(res.message);
                                }
                            }, (error) => {
                                this.loadingController.dismiss();
                                this.presentAlert('Looks like there is a Network Issue.' + error.message);
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
};
ViewDocumentPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ViewDocumentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-document.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/view-document/view-document.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-document.page.scss */ "./src/app/user/documents/view-document/view-document.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ViewDocumentPage);



/***/ })

}]);
//# sourceMappingURL=documents-view-document-view-document-module-es2015.js.map