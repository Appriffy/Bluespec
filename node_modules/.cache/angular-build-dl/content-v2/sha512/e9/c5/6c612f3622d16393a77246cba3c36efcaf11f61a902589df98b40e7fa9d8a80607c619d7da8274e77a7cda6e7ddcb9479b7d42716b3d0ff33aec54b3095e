(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-user-profile-module~user-education-details-education-details-integration-module~user~9c8810c2"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/create/create-education-details.modal.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/create/create-education-details.modal.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"update-user-form ion-page\" [formGroup]=\"createEduDetailForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page_title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n   \n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"floating\">Select Education Level *</ion-label>\n        <ion-select placeholder=\"Choose a level\" formControlName=\"level_id\" cancelText=\"Cancel\" okText=\"OK\" (ionChange)=\"onEduLevelSelected($event)\">\n          <ion-select-option *ngFor=\"let item of eduLevels\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-input type=\"hidden\" formControlName=\"study_area\" value=\"0\"></ion-input>\n\n      <ion-item class=\"input-item\" *ngIf=\"createEduDetailForm.value.level_id\">\n        <ion-label color=\"primary\" position=\"floating\">Select Study Area *</ion-label>\n        <ion-input (ionFocus)=\"selectStudyArea()\" formControlName=\"study_area_name\" inputmode=\"none\" type=\"text\" readonly></ion-input>\n      </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Examination Title *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" placeholder=\"e.g. AISSCE, KSBE\" required></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Organization *</ion-label>\n          <ion-input type=\"text\" formControlName=\"organization\" placeholder=\"School/College/University\" required></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Joining *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yoj\" required></ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{studyStatus}}</ion-label>\n          <ion-toggle color=\"secondary\" formControlName=\"is_current\" (ionChange)=\"onCurrentOptionSelected($event)\"></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\" *ngIf=\"!currentlyStudying\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Passing *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yop\"></ion-datetime>\n        </ion-item>\n\n        <ion-input *ngIf=\"currentlyStudying\" type=\"hidden\" formControlName=\"yop\" [value]=\"'Not yet'\" ></ion-input>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score *</ion-label>\n          <ion-input type=\"text\" maxLength=\"4\" formControlName=\"score\" placeholder=\"Marks/Grade obtained\" ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score Type *</ion-label>\n          <ion-select formControlName=\"score_type\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of scoreTypes\" [value]=\"item\" >{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        <!------------------>\n\n        \n      </ion-list>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createEduDetailForm.valid\">SAVE DETAIL</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-study-area/select-study-area.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-study-area/select-study-area.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select Study Area</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search Study Areas\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Study Areas...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n  <!------- Empty View ------->\n  <ion-grid style=\"width:100%;height: 100%;display:block;align-content: center;\" *ngIf=\"listing?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/study_area.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Study Area found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n  <ion-list class=\"\" *ngIf=\"listing?.length > 0 && !loading\">     \n    <ion-item class=\"list-item\" *ngFor=\"let item of listing\" (click)=\"dismissModal(item)\">\n      <ion-row class=\"user-row\">\n\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h5 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n \n\n</ion-item>\n </ion-list>\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\">\n      <ion-button class=\"select-variant-btn\" color=\"primary\" expand=\"block\" fill=\"solid\" (click)=\"openSizeChooser()\">SELECT</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/user/education-details/create/create-education-details.modal.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/education-details/create/create-education-details.modal.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateEducationDetailsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEducationDetailsModal", function() { return CreateEducationDetailsModal; });
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
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utility-components/select-study-area/select-study-area.page */ "./src/app/utility-components/select-study-area/select-study-area.page.ts");













let CreateEducationDetailsModal = class CreateEducationDetailsModal {
    constructor(modalController, alertController, firebaseService, masterService, authService, storageService, toastService, loadingController, route, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.user = new _education_details_model__WEBPACK_IMPORTED_MODULE_5__["EducationDetailsModel"]();
        this.eduLevels = [];
        this.scoreTypes = [];
        this.currentlyStudying = false;
        this.studyStatus = 'Already passed out.';
        this.moderateMode = false;
        this.page_title = "Add Education Detail";
    }
    ngOnInit() {
        this.initializeForm();
        this.onHandleFormChanges();
        this.scoreTypes = ["Percent", "Grade"];
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            this.profilerID = this.user_id;
            this.createEduDetailForm.controls.user_id.patchValue(this.profilerID);
        });
        this.masterService.getEducationLevels().subscribe(thisLevels => {
            if (thisLevels) {
                this.eduLevels = thisLevels.result;
                console.log("/********* Got Education Levels **********/ => " + JSON.stringify(this.eduLevels));
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].EDU_LEVELS, thisLevels.result);
                this.eduLevels.map((eduLevel) => {
                    //Waiting to do something on getting First Master Data
                    //this.updateEduDetailForm.controls.level_id.patchValue(this.eduLevels[0].id);
                });
            }
        });
    }
    initializeForm() {
        /************ CREATE UPDATE FORM ************/
        this.moderateMode = false;
        this.createEduDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            level_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            study_area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            study_area_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            yoj: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            is_current: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            yop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            score_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.scoreTypes[0])
        });
    }
    get skillsFormArray() { return this.createEduDetailForm.get('jobAreas'); }
    dismissModal() {
        this.modalController.dismiss();
    }
    selectStudyArea() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_12__["SelectStudyAreaPage"],
                componentProps: {
                    'multiple': false,
                    'selected_education_level': this.selected_education_level
                }
            });
            modal.onDidDismiss().then(avatar => {
                if (avatar.data != null) {
                    this.createEduDetailForm.patchValue({
                        study_area: avatar.data.id,
                        study_area_name: avatar.data.title
                    });
                    this.createEduDetailForm.get('study_area').updateValueAndValidity();
                    this.createEduDetailForm.get('study_area_name').updateValueAndValidity();
                }
            });
            yield modal.present();
        });
    }
    updateUser() {
        this.presentLoadingWithOptions();
        this.user.user_id = this.createEduDetailForm.value.user_id;
        this.user.level_id = this.createEduDetailForm.value.level_id;
        this.user.title = this.createEduDetailForm.value.title;
        this.user.organization = this.createEduDetailForm.value.organization;
        this.user.yoj = this.createEduDetailForm.value.yoj;
        this.user.yop = this.createEduDetailForm.value.yop;
        this.user.is_current = this.currentlyStudying ? true : false;
        this.user.score_type = this.createEduDetailForm.value.score_type;
        this.user.score = this.createEduDetailForm.value.score;
        this.user.study_area = this.createEduDetailForm.value.study_area;
        console.log('########## Post params ########### ' + JSON.stringify(this.user));
        this.authService.getAuthKey().then(apiKey => {
            this.firebaseService.callEduDetailsCreateAPI(apiKey, this.user)
                .subscribe((res) => {
                this.loadingController.dismiss();
                console.log('########## API Response ########### ' + JSON.stringify(res));
                this.updateResult = res;
                if (!res.error) {
                    /********** NAVIGATE WITH USER ID **********/
                    this.dismissModal();
                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].DEV_MODE) {
                        console.log('########## API Successful ########### ' + JSON.stringify(res));
                    }
                    this.firebaseService.getEduDataSource(this.localUser.api_key, this.localUser.id).subscribe(results => {
                        this.firebaseService.invokeEduListChangeEvent.next(results);
                    });
                    this.toastService.presentToast(res.message);
                    this.router.navigate(['/education-details/listing', this.user_id]);
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
        this.selected_education_level = e.target.value;
    }
    onCurrentOptionSelected(e) {
        if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].DEV_MODE) {
            console.log("onCurrentOptionSelected: " + e.target.value);
        }
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
    onHandleFormChanges() {
        this.createEduDetailForm.get("is_current").valueChanges.subscribe(val => {
            if (val) {
                this.createEduDetailForm.get('yop').clearValidators();
                this.createEduDetailForm.get('yop').updateValueAndValidity();
            }
            else {
                this.createEduDetailForm.get('yop').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]);
                this.createEduDetailForm.get('yop').updateValueAndValidity();
            }
        });
        this.createEduDetailForm.valueChanges.subscribe(val => {
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
CreateEducationDetailsModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CreateEducationDetailsModal.prototype, "user_id", void 0);
CreateEducationDetailsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-education-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-education-details.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/create/create-education-details.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/create.modal.scss */ "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles//create.shell.scss */ "./src/app/bluspecstyles/create.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CreateEducationDetailsModal);



/***/ }),

/***/ "./src/app/utility-components/select-study-area/select-study-area.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/utility-components/select-study-area/select-study-area.page.ts ***!
  \********************************************************************************/
/*! exports provided: SelectStudyAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStudyAreaPage", function() { return SelectStudyAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");









let SelectStudyAreaPage = class SelectStudyAreaPage {
    constructor(navCtrl, masterService, storageService, modalController, authService) {
        this.navCtrl = navCtrl;
        this.masterService = masterService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.authService = authService;
        this.multiple = false;
        this.loading = true;
        this.selectedSkills = new Array();
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
        });
    }
    ngOnInit() {
        this.addSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__["CheckboxCheckedValidator"].minSelectedCheckboxes(1))
        });
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STUDY_AREAS).then(allList => {
            if (allList) {
                this.listing = allList;
                this.filtered_listing = allList;
                this.loading = false;
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                    console.log("All Study Areas : " + JSON.stringify(allList));
                }
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                    console.log("Selected_education_level : " + this.selected_education_level + " among " + allList.length);
                }
                if (this.selected_education_level > 0) {
                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                        console.log("Filtering for Single Area : " + this.selected_education_level + " among " + allList.length);
                    }
                    allList = allList.filter(item => item.education_level === this.selected_education_level);
                    this.listing = allList;
                    this.filtered_listing = allList;
                    if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                        console.log("Total Filtered : " + allList.length);
                    }
                    this.listing.map((item) => {
                        this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
                    });
                }
            }
        });
    }
    get skillsFormArray() { return this.addSkillsForm.get('skills'); }
    loadItems() {
        this.loading = true;
        this.masterService.getSkills().subscribe(allData => {
            this.loading = false;
            if (allData) {
                this.listing = allData.result;
                this.filtered_listing = allData.result;
            }
        });
    }
    initializeItems() {
        this.listing = this.filtered_listing;
    }
    /****************** SEARCH ITEMS ********************/
    searchList() {
        this.initializeItems();
        this.listing = this.listing.filter((thisJob) => {
            return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
        });
        this.updateFormArrayDisplay();
    }
    updateFormArrayDisplay() {
        const control = this.addSkillsForm.controls.skills;
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.listing.map((item) => {
            this.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
        });
    }
    /****************** SEARCH ITEMS ********************/
    dismissModal(item) {
        //alert(item.title+" "+this.multiple);
        this.modalController.dismiss(item);
    }
    closeModal() {
        this.modalController.dismiss();
    }
    containsObject(obj, list) {
        if (list && list.length > 0) {
            let i;
            for (i = 0; i < list.length; i++) {
                if (list[i].id === obj.id) {
                    return true;
                }
            }
        }
        return false;
    }
    onJobSkillSelected(thisSkill) {
        if (this.containsObject(thisSkill, this.selectedSkills)) {
            console.log("#####: Exists Already ");
        }
        else {
            this.selectedSkills.push(thisSkill);
            console.log("#####: Doesnt Exist ");
        }
        console.log("#####: FINAL SELECTION =>  " + JSON.stringify(this.selectedSkills));
    }
    processMultipleSelection() {
        let displayNames = Array.prototype.map.call(this.selectedSkills, function (item) { return item.title; }).join(", ");
        this.displayIDs = Array.prototype.map.call(this.selectedSkills, s => s.id).toString();
        console.log("#####: FINAL displayNames =>  " + displayNames);
        console.log("#####: FINAL displayIDs =>  " + this.displayIDs);
        let resultArr = [];
        resultArr["id"] = this.displayIDs;
        resultArr["title"] = displayNames;
        this.modalController.dismiss(resultArr);
    }
    isSkillSelected(id) {
        this.selectedSkills.forEach((element) => {
            if (element.id == id) {
                return true;
            }
        });
        return false;
    }
};
SelectStudyAreaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectStudyAreaPage.prototype, "multiple", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SelectStudyAreaPage.prototype, "selected_education_level", void 0);
SelectStudyAreaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-study-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-study-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-study-area/select-study-area.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], SelectStudyAreaPage);



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
//# sourceMappingURL=default~profile-user-profile-module~user-education-details-education-details-integration-module~user~9c8810c2-es2015.js.map