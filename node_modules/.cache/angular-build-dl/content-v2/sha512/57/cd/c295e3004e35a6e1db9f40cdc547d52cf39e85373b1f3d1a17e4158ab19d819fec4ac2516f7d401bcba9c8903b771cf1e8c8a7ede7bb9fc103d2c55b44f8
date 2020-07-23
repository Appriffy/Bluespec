(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-verify-account-verify-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/verify-account/verify-account.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/verify-account/verify-account.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n<form class=\"create-user-form ion-page\" [formGroup]=\"verifyAccountForm\" (ngSubmit)=\"nextStep()\">\n  <ion-content text-center class=\"vertical-align-content\">\n\n    <ion-grid style=\"height:100%;\">\n      <ion-row class=\"walkthrough-slides slide-inner-row\" style=\"align-items: center;\n      text-align: center;\">\n        <ion-col class=\"illustration-col\" style=\"vertical-align: middle;margin-top:40px;\">\n          <img src=\"assets/images/success.png\" position=\"center\" style=\"width:110px;height:110px;display:block;margin:0 auto;\"/>\n          <h3 class=\"info-title ion-text-center\">VERIFY ACCOUNT</h3>\n          <h4 class=\"info-paragraph ion-text-center\">\n            Enter the OTP we have sent to your registered email address. Please check your JUNK folder as well.\n          </h4>\n\n          <ion-item class=\"input-item\" style=\"margin:25px;\">\n            <ion-label color=\"secondary\" position=\"floating\">ENTER OTP</ion-label>\n            <ion-input type=\"number\" class=\"info-title\" formControlName=\"otp\" placeholder=\"Enter your OTP here\" required></ion-input>\n          </ion-item>\n\n        </ion-col>\n        </ion-row>\n     \n</ion-grid>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!verifyAccountForm.valid\"> <ion-icon name=\"arrow-round-forward\"></ion-icon>&nbsp; SUBMIT OTP</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/signup/verify-account/verify-account.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/signup/verify-account/verify-account.module.ts ***!
  \****************************************************************/
/*! exports provided: VerifyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountPageModule", function() { return VerifyAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verify_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-account.page */ "./src/app/signup/verify-account/verify-account.page.ts");







const routes = [
    {
        path: '',
        component: _verify_account_page__WEBPACK_IMPORTED_MODULE_6__["VerifyAccountPage"]
    }
];
let VerifyAccountPageModule = class VerifyAccountPageModule {
};
VerifyAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_verify_account_page__WEBPACK_IMPORTED_MODULE_6__["VerifyAccountPage"]]
    })
], VerifyAccountPageModule);



/***/ }),

/***/ "./src/app/signup/verify-account/verify-account.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/signup/verify-account/verify-account.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".walkthrough-slides {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n.walkthrough-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n.vertical-align-content > * {\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3ZlcmlmeS1hY2NvdW50L0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHNpZ251cFxcdmVyaWZ5LWFjY291bnRcXHZlcmlmeS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3ZlcmlmeS1hY2NvdW50L3ZlcmlmeS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsaURBQUE7RUFFQSxZQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHFDQUFBO0VBRUEsb0VBQUE7RUFDQSw0QkFBQTtFQUNBLG9EQUFBO0FDRk47QURNRTtFQUVHLGdDQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtBQ0pMIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3ZlcmlmeS1hY2NvdW50L3ZlcmlmeS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxrdGhyb3VnaC1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICBcclxuICAgIC5zbGlkZS1pbm5lci1yb3cge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIC8vIEhlYWRlciBzcGFjZVxyXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gc3BhY2VcclxuICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcclxue1xyXG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn0iLCIud2Fsa3Rocm91Z2gtc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2Fsa3Rocm91Z2gtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1hcHAtaGVhZGVyLWhlaWdodCk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/verify-account/verify-account.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/signup/verify-account/verify-account.page.ts ***!
  \**************************************************************/
/*! exports provided: VerifyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountPage", function() { return VerifyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../registration.service */ "./src/app/signup/registration.service.ts");






let VerifyAccountPage = class VerifyAccountPage {
    constructor(router, activatedRoute, menu, loadingController, alertController, registrationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.registrationService = registrationService;
    }
    ngOnInit() {
        this.menu.enable(false);
        this.verifyAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //user_id: new FormControl(this.thisUserID, Validators.required),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])
        });
        this.registrationService.getCachedData().then(res => {
            if (res) {
                this.cachedData = res;
            }
            else {
                //this.prevStep();
                this.presentAlert("INVALID SESSION", "", "Looks like something went wrong and we could not identify you. Please close this app and start again..");
            }
        });
    }
    nextStep() {
        if (this.verifyAccountForm.valid) {
            //this.cachedData.about = this.verifyAccountForm.value.otp;
            //this.registrationService.setCachedData(this.cachedData);
            this.router.navigate(['dashboard']);
        }
        else {
            this.presentAlert("INVALID OTP", "", "Please enter the OTP we have sent to your registered email address.");
        }
    }
    prevStep() {
        this.router.navigate(['getting-started']);
    }
    presentAlert(title, subtitle, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                subHeader: subtitle,
                message: message,
                animated: true,
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
VerifyAccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"] }
];
VerifyAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/verify-account/verify-account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-account.page.scss */ "./src/app/signup/verify-account/verify-account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"]])
], VerifyAccountPage);



/***/ })

}]);
//# sourceMappingURL=signup-verify-account-verify-account-module-es2015.js.map