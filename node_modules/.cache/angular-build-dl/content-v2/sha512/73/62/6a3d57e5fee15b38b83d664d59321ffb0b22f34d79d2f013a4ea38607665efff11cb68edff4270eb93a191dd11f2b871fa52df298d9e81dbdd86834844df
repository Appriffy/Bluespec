(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-education-details-education-details-integration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/update/update-education-details.modal.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/update/update-education-details.modal.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"update-user-form ion-page\" [formGroup]=\"updateEduDetailForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page_title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n   \n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"floating\">Select Education Level *</ion-label>\n        <ion-select formControlName=\"level_id\" cancelText=\"Cancel\" okText=\"OK\" (ionChange)=\"onEduLevelSelected($event)\">\n          <ion-select-option *ngFor=\"let item of eduLevels\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      \n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"floating\">Select Study Area *</ion-label>\n        <ion-select formControlName=\"study_area\" cancelText=\"Cancel\" okText=\"OK\">\n          <ion-select-option *ngFor=\"let item of studyAreas\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Examination Title *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" placeholder=\"e.g. AISSCE\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Organization *</ion-label>\n          <ion-input type=\"text\" formControlName=\"organization\" placeholder=\"School/College/University\" required></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Joining *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yoj\" required></ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{studyStatus}}</ion-label>\n          <ion-toggle color=\"secondary\" formControlName=\"is_current\" (ionChange)=\"onCurrentOptionSelected($event)\"></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\" *ngIf=\"!currentlyStudying\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Passing *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yop\" required></ion-datetime>\n        </ion-item>\n\n        <ion-input *ngIf=\"currentlyStudying\" type=\"hidden\" formControlName=\"yop\" [value]=\"\" ></ion-input>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score *</ion-label>\n          <ion-input type=\"number\" maxLength=\"4\" formControlName=\"score\" placeholder=\"Marks/Grade obtained\" ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score Type *</ion-label>\n          <ion-select formControlName=\"score_type\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of scoreTypes\" [value]=\"item\" >{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <!------------------>\n        <ion-input type=\"hidden\" formControlName=\"id\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        <!------------------>\n      </ion-list>\n    </section>\n\n   \n    <!-- <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Selected Job Areas</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"jobAreas\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{jobAreas[i].title}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section> -->\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateEduDetailForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

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

/***/ "./src/app/user/education-details/education-details-integration.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user/education-details/education-details-integration.module.ts ***!
  \********************************************************************************/
/*! exports provided: EducationDetailsIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsIntegrationModule", function() { return EducationDetailsIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create-education-details.modal */ "./src/app/user/education-details/create/create-education-details.modal.ts");
/* harmony import */ var _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update-education-details.modal */ "./src/app/user/education-details/update/update-education-details.modal.ts");
/* harmony import */ var _utility_components_select_study_area_select_study_area_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/select-study-area/select-study-area.module */ "./src/app/utility-components/select-study-area/select-study-area.module.ts");
/* harmony import */ var _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility-components/select-study-area/select-study-area.page */ "./src/app/utility-components/select-study-area/select-study-area.page.ts");











const firebaseRoutes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | education-details-module */ "education-details-module").then(__webpack_require__.bind(null, /*! ./education-details.module */ "./src/app/user/education-details/education-details.module.ts")).then(m => m.EducationDetailsPageModule)
    },
    {
        path: 'listing/:user_id',
        loadChildren: () => __webpack_require__.e(/*! import() | education-details-module */ "education-details-module").then(__webpack_require__.bind(null, /*! ./education-details.module */ "./src/app/user/education-details/education-details.module.ts")).then(m => m.EducationDetailsPageModule)
    },
    {
        path: 'create',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./create/create-education-details.modal */ "./src/app/user/education-details/create/create-education-details.modal.ts")).then(m => m.CreateEducationDetailsModal)
    },
    {
        path: 'details/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./update/update-education-details.modal */ "./src/app/user/education-details/update/update-education-details.modal.ts")).then(m => m.UpdateEducationDetailsModal)
    }
];
let EducationDetailsIntegrationModule = class EducationDetailsIntegrationModule {
};
EducationDetailsIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _utility_components_select_study_area_select_study_area_module__WEBPACK_IMPORTED_MODULE_9__["SelectStudyAreaPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes)
        ],
        entryComponents: [
            _create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_7__["CreateEducationDetailsModal"],
            _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateEducationDetailsModal"],
            _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_10__["SelectStudyAreaPage"]
        ],
        declarations: [
            _create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_7__["CreateEducationDetailsModal"],
            _update_update_education_details_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateEducationDetailsModal"]
        ]
    })
], EducationDetailsIntegrationModule);



/***/ }),

/***/ "./src/app/user/education-details/update/update-education-details.modal.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/education-details/update/update-education-details.modal.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateEducationDetailsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEducationDetailsModal", function() { return UpdateEducationDetailsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _education_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../education-details.model */ "./src/app/user/education-details/education-details.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");











let UpdateEducationDetailsModal = class UpdateEducationDetailsModal {
    constructor(modalController, alertController, firebaseService, masterService, authService, toastService, loadingController, router) {
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
    ngOnInit() {
        this.scoreTypes = ["Percent", "Grade"];
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            console.log("/***** JUST ASKED LOCAL STORAGE : " + JSON.stringify(promisedValue));
        });
        this.initializeForm();
        this.onHandleFormChanges();
        this.masterService.getStudyAreas().subscribe(skills => {
            this.studyAreas = skills.result;
            this.studyAreasBackup = skills.result;
            console.log("/********* Got Study Areas **********/ => " + JSON.stringify(this.studyAreas));
            this.studyAreas.map((skill) => {
                //Waiting to do something on getting First Master Data
                //this.updateEduDetailForm.controls.study_area.patchValue(this.eduLevels[0].id);
            });
        });
        this.masterService.getEducationLevels().subscribe(thisLevels => {
            this.eduLevels = thisLevels.result;
            console.log("/********* Got Education Levels **********/ => " + JSON.stringify(this.eduLevels));
            // create skill checkboxes
            this.eduLevels.map((eduLevel) => {
                //Waiting to do something on getting First Master Data
                //this.updateEduDetailForm.controls.level_id.patchValue(this.eduLevels[0].id);
            });
        });
    }
    initializeForm() {
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
    get skillsFormArray() { return this.updateEduDetailForm.get('jobAreas'); }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you really want to delete your education qualification titled ' + this.user.title + '?',
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
                            this.authService.getAuthKey().then(apiKey => {
                                this.firebaseService.deleteEducationItem(apiKey, postData)
                                    .subscribe((res) => {
                                    this.loadingController.dismiss();
                                    this.deleteResult = res;
                                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].DEV_MODE) {
                                        console.log('deleteResult# ' + JSON.stringify(this.deleteResult));
                                        console.log('Verify Invoke ' + this.localUser.api_key + " <=> " + this.user.user_id);
                                    }
                                    if (res.error) {
                                        this.presentAlert(res.message);
                                    }
                                    else {
                                        this.dismissModal();
                                        this.firebaseService.getEduDataSource(this.localUser.api_key, this.user.user_id).subscribe(results => {
                                            this.firebaseService.invokeEduListChangeEvent.next(results.items);
                                        });
                                        this.router.navigate(['/education-details/listing/' + this.user.user_id]);
                                    }
                                }, (error) => {
                                    this.loadingController.dismiss();
                                    this.presentAlert('Looks like there is a Network Issue.');
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onHandleFormChanges() {
        this.updateEduDetailForm.get("is_current").valueChanges.subscribe(val => {
            if (val) {
                this.updateEduDetailForm.get('yop').clearValidators();
                this.updateEduDetailForm.get('yop').updateValueAndValidity();
            }
            else {
                this.updateEduDetailForm.get('yop').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]);
                this.updateEduDetailForm.get('yop').updateValueAndValidity();
            }
        });
        this.updateEduDetailForm.valueChanges.subscribe(val => {
            console.log("/********* onHandleFormChanges **********/");
            let yoj = val.yoj;
            let yop = val.yop;
            let score = val.score;
            if (yop && yoj) {
                if (yop < yoj) {
                    this.presentAlert("Year of passing must be after the year of joining.");
                }
            }
            let score_type = val.score_type;
            if (score_type && !score) {
                if (score_type == "Grade" && !score) {
                    this.presentAlert("Please enter the grade you obtained.");
                }
                else {
                    if (score_type == "Percent" && !score) {
                        this.presentAlert("Please enter the percentage you obtained.");
                    }
                }
            }
        });
    }
    updateUser() {
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
        this.authService.getAuthKey().then(apiKey => {
            this.firebaseService.callEduDetailsUpdateAPI(apiKey, this.user)
                .subscribe((res) => {
                this.loadingController.dismiss();
                console.log('########## Edu Update API Response ########### ' + JSON.stringify(res));
                this.updateResult = res;
                if (!res.error) {
                    /********** NAVIGATE WITH USER ID **********/
                    this.dismissModal();
                    this.firebaseService.getEduDataSource(this.localUser.api_key, this.user.user_id).subscribe(results => {
                        this.firebaseService.invokeEduListChangeEvent.next(results.items);
                        console.log('########## invokeEduListChangeEvent() ######### ' + JSON.stringify(results));
                    });
                    this.router.navigate(['/education-details/listing/' + this.user.user_id]);
                }
                else {
                    this.presentAlert(res.message);
                }
            }, (error) => {
                this.loadingController.dismiss();
                this.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
        });
    }
    onEduLevelSelected(e) {
        return this.studyAreas = this.studyAreasBackup.filter((studyArea) => {
            return studyArea.education_level == e.target.value;
        });
    }
    onCurrentOptionSelected(e) {
        //console.log("SWITCH "+e.target.value);
        this.currentlyStudying = !this.currentlyStudying;
        if (!this.currentlyStudying) {
            this.studyStatus = 'Already passed out.';
            //this.updateEduDetailForm.addControl('yop', new FormControl(''));
        }
        else {
            this.studyStatus = 'Currently Persuing.';
            //this.updateEduDetailForm.removeControl('yop');
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
UpdateEducationDetailsModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _education_details_model__WEBPACK_IMPORTED_MODULE_5__["EducationDetailsModel"])
], UpdateEducationDetailsModal.prototype, "user", void 0);
UpdateEducationDetailsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-education-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-education-details.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/update/update-education-details.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/create.modal.scss */ "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles//create.shell.scss */ "./src/app/bluspecstyles/create.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UpdateEducationDetailsModal);



/***/ }),

/***/ "./src/app/utility-components/select-study-area/select-study-area.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/utility-components/select-study-area/select-study-area.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SelectStudyAreaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStudyAreaPageModule", function() { return SelectStudyAreaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _select_study_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-study-area.page */ "./src/app/utility-components/select-study-area/select-study-area.page.ts");







let SelectStudyAreaPageModule = class SelectStudyAreaPageModule {
};
SelectStudyAreaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ],
        declarations: [_select_study_area_page__WEBPACK_IMPORTED_MODULE_6__["SelectStudyAreaPage"]],
        exports: [_select_study_area_page__WEBPACK_IMPORTED_MODULE_6__["SelectStudyAreaPage"]],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SelectStudyAreaPageModule);



/***/ })

}]);
//# sourceMappingURL=user-education-details-education-details-integration-module-es2015.js.map