(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-documents-list-documents-list-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/list-documents/list-documents.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/list-documents/list-documents.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/people/profile\" *ngIf=\"!adminModeView\"></ion-back-button>\n      <ion-back-button defaultHref=\"/dashboard/summary\" *ngIf=\"adminModeView\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>List Documents</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!loading\" fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n<ion-button *ngIf=\"selfView\" fill=\"clear\" color=\"light\" class=\"filters-btn\"\n[routerLink]=\"['/upload-document']\">\n  <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n   <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Documents</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"items?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      \n      <ion-icon src=\"./assets/sample-icons/side-menu/document.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 *ngIf=\"selfView\" style=\"text-align: center;color: #555555;\">Submit Documents</h5>\n      <h5 *ngIf=\"selfView\" style=\"text-align: center;columns: #555555;font-size: 13px;margin-top:1px;\">Upload the mandatory documents to get your profile verified.</h5>\n\n      <div *ngIf=\"!selfView && !adminModeView\">\n        <h5 style=\"text-align: center;color: #555555;\">No Document to show</h5>\n      </div>\n\n      <div *ngIf=\"!selfView && adminModeView\">\n        <h5 style=\"text-align: center;color: #555555;font-size: 20px;\">No Document Found</h5>\n        <h5 style=\"text-align: center;columns: #555555;font-size: 15px;margin:2px 10px;\">Looks like user has not submitted any document yet.</h5>  \n      </div>\n      \n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"items?.length > 0 && !loading\">     \n\n        <ion-segment class=\"user-friends-segment\" mode=\"md\" (ionChange)=\"segmentChanged($event)\" \n        *ngIf=\"adminModeView && adminModeFullListing\">\n          <ion-segment-button mode=\"md\" checked=\"true\" value=\"Pending\">\n            <ion-label>Pending</ion-label>\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" value=\"Approved\">\n            <ion-label>Approved</ion-label>\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" value=\"Rejected\">\n            <ion-label>Rejected</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <ion-item class=\"list-item\" *ngFor=\"let item of items\" tappable (click)=\"showDocDetailPage(item.qcode)\">\n  \n          <ion-row class=\"user-row\">\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h5 class=\"user-name\" style=\"color: black;\">\n                  {{item?.document_type}}\n                </h5>\n\n                <h5 class=\"user-age\" *ngIf=\"adminModeView\">\n                  Submitted by {{item?.user_full_name}}\n                 </h5>\n\n                <h5 class=\"user-age\" *ngIf=\"adminModeView\">\n                  File Info: {{item?.file_format}} ({{item?.size}} KB)\n                 </h5>\n\n                 <h5 class=\"user-age\">\n                  Submitted on {{item?.date_created}}\n                 </h5>\n\n                 <h5 class=\"user-age\" *ngIf=\"item?.date_updated\">\n                  Updated on {{item?.date_updated}}\n                 </h5>\n\n    <div *ngIf=\"item.status == 'Approved'\">\n      <ion-badge class=\"schedule-closed\" color=\"primary\" style=\"font-size: 11px;\">Approved</ion-badge>\n      </div>\n\n    <div *ngIf=\"item.status == 'Rejected'\">\n        <ion-badge class=\"schedule-closed\" color=\"danger\" style=\"font-size: 11px;\">Rejected</ion-badge>\n        </div>\n\n              </div>\n            </ion-col></ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n     \n     \n</ion-content>\n");

/***/ }),

/***/ "./src/app/bluspecstyles/listing.ios.scss":
/*!************************************************!*\
  !*** ./src/app/bluspecstyles/listing.ios.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host-context(.plt-mobile.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmxpc3QtaXRlbSB7XG4gICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAubGlzdC1pdGVtIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bluspecstyles/listing.shell.scss":
/*!**************************************************!*\
  !*** ./src/app/bluspecstyles/listing.shell.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/documents/list-documents/list-documents.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/documents/list-documents/list-documents.module.ts ***!
  \************************************************************************/
/*! exports provided: ListDocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDocumentsPageModule", function() { return ListDocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-documents.page */ "./src/app/user/documents/list-documents/list-documents.page.ts");







const routes = [
    {
        path: '',
        component: _list_documents_page__WEBPACK_IMPORTED_MODULE_6__["ListDocumentsPage"]
    }
];
let ListDocumentsPageModule = class ListDocumentsPageModule {
};
ListDocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_list_documents_page__WEBPACK_IMPORTED_MODULE_6__["ListDocumentsPage"]],
    })
], ListDocumentsPageModule);



/***/ }),

/***/ "./src/app/user/documents/list-documents/list-documents.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/user/documents/list-documents/list-documents.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n}\n\n.user-friends-segment {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  background-color: var(--page-segment-background);\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --background: var(--page-segment-background);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --color-checked: var(--ion-color-dark);\n  --indicator-color-checked: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\n.user-friends-segment ion-segment-button ion-label {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) / 4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kb2N1bWVudHMvbGlzdC1kb2N1bWVudHMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxcZG9jdW1lbnRzXFxsaXN0LWRvY3VtZW50c1xcbGlzdC1kb2N1bWVudHMucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL2RvY3VtZW50cy9saXN0LWRvY3VtZW50cy9saXN0LWRvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQ0FBQTtBQ0RKOztBRElFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7QUNESjs7QURHSTtFQUNFLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDZDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUVBLDBCQUFBO0VBQ0EsaUZBQUE7QUNGTjs7QURJTTtFQUNFLHdDQUFBO0VBQ0EsMkNBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZG9jdW1lbnRzL2xpc3QtZG9jdW1lbnRzL2xpc3QtZG9jdW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxuICAgIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG4gICAgLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gICAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xyXG4gIH1cclxuICBcclxuICAudXNlci1mcmllbmRzLXNlZ21lbnQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcclxuICAgICAgLS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xyXG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIFxyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xyXG4gIFxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xufVxuXG4udXNlci1mcmllbmRzLXNlZ21lbnQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xufVxuLnVzZXItZnJpZW5kcy1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/documents/list-documents/list-documents.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/documents/list-documents/list-documents.page.ts ***!
  \**********************************************************************/
/*! exports provided: ListDocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDocumentsPage", function() { return ListDocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");









let ListDocumentsPage = class ListDocumentsPage {
    constructor(modalController, route, router, storageService, authService, toastService, userService) {
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.authService = authService;
        this.toastService = toastService;
        this.userService = userService;
        this.segmentValue = 'Pending';
        this.loading = true;
        this.adminModeView = false;
        this.adminModeFullListing = false;
        this.selfView = false;
    }
    ngOnInit() {
        this.authService
            .getAuthCache()
            .then(res => {
            if (res) {
                this.localUser = res;
                this.route.paramMap.subscribe(params => {
                    if (params && params.has("user_id")) {
                        this.user_profile_id = params.get("user_id");
                        if (this.user_profile_id == this.localUser.id) {
                            this.selfView = true;
                        }
                        if (this.user_profile_id == "all" && this.localUser.role_id != 1) {
                            this.router.navigate(['unauthorized']);
                        }
                        else {
                            if (this.user_profile_id <= 0) {
                                this.router.navigate(['page-not-found']);
                            }
                        }
                        if (this.user_profile_id == "all") {
                            this.adminModeFullListing = true;
                        }
                    }
                    else {
                        this.user_profile_id = this.localUser.id;
                        this.selfView = true;
                    }
                });
            }
        });
    }
    ionViewDidEnter() {
        this.loadItems();
    }
    loadItems() {
        this.loading = true;
        //FIND USER SESSION AND HIT API
        this.storageService
            .get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].AUTH)
            .then(res => {
            if (res) {
                if (res.role_id == 1) {
                    this.adminModeView = true;
                }
                /********** THE CALLER ***********/
                this.userService.getUserDocumentDataSource(res.api_key, this.user_profile_id).subscribe((results) => {
                    this.loading = false;
                    if (results) {
                        //console.log("/********* DOC API RESPONSE *************/ "+JSON.stringify(results));
                        if (!results.error) {
                            this.items = results.result;
                            this.backupItems = results.result;
                            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                                this.toastService.presentToast("Updated " + this.items.length + " documents.");
                            }
                            this.userService.invokeDocListChangeEvent.next(results.result);
                        }
                        else {
                            this.toastService.presentToast(results.message);
                        }
                    }
                }, (error) => {
                    this.toastService.presentToast('Looks like there is a Network Issue.' + error.message);
                }, () => {
                    // complete callback  
                });
                /************ THE CALLER ***********/
            }
            else {
                this.toastService.presentToast("Invalid token. You are not authorized to make this request.");
            }
        });
        //END OF CALL 
    }
    showDocDetailPage(qcode) {
        if (this.adminModeFullListing) {
            //this.router.navigate(['/people/documents/detail', qcode], {viewer:true});
            this.router.navigate(['people/documents/detail', qcode], { queryParams: { viewer: 1 } });
        }
        else {
            this.router.navigate(['/people/documents/detail', qcode]);
        }
    }
    segmentChanged(ev) {
        this.segmentValue = ev.detail.value;
        this.searchList();
    }
    searchList() {
        this.items = this.backupItems;
        if (this.adminModeFullListing) {
            if (this.segmentValue === 'Pending') {
                this.items = this.filterList(this.items, "Pending");
            }
            else if (this.segmentValue === 'Approved') {
                this.items = this.filterList(this.items, "Approved");
            }
            else if (this.segmentValue === 'Rejected') {
                this.items = this.filterList(this.items, "Rejected");
            }
        }
        //console.log("Finding Left with "+this.items.length);
    }
    filterList(list, query) {
        //console.log("Finding ALL  "+JSON.stringify(list));
        //console.log("Finding "+query+" among "+list.length);
        return list.filter(item => {
            console.log("Finding Comparing " + item.status + " and  " + query);
            return item.status.toLowerCase().includes(query.toLowerCase());
        });
        //return list.filter(item => item.status == query);
        //return list.filter(item => item.status.toLowerCase().includes(query.toLowerCase()));
    }
};
ListDocumentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
ListDocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-documents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-documents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/documents/list-documents/list-documents.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-documents.page.scss */ "./src/app/user/documents/list-documents/list-documents.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], ListDocumentsPage);



/***/ })

}]);
//# sourceMappingURL=user-documents-list-documents-list-documents-module-es2015.js.map