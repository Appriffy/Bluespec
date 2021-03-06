(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-masters-job-skills-job-skills-integration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/create/create-job-skill.modal.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/create/create-job-skill.modal.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n<form class=\"create-user-form ion-page\" [formGroup]=\"createUserForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Add New Job Skill</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"3\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" [src]=\"preview\" [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"fileInput.click()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <div class=\"form-group\" style=\"display:none;\">\n          <input type=\"file\" (change)=\"uploadFile($event)\" #fileInput>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Skill Name *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n        </ion-item>\n        \n        <ion-input type=\"hidden\" formControlName=\"grafter_type\" value=\"0\"></ion-input>\n       \n        <!-- <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Select Job Area *</ion-label>\n          <ion-select formControlName=\"parent_id\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of jobAreas\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n          </ion-select>\n        </ion-item> -->\n\n        <ion-input type=\"hidden\" formControlName=\"parent_id\" value=\"0\"></ion-input>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Select Job Area *</ion-label>\n          <ion-input (ionFocus)=\"selectJobArea()\" formControlName=\"parent_name\" inputmode=\"none\" type=\"text\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Short Description</ion-label>\n          <ion-textarea rows=\"3\" formControlName=\"skill_desc\"></ion-textarea>\n        </ion-item>\n        \n        <ion-item class=\"input-item terms-item\">\n          <ion-label>Make this job skill active.</ion-label>\n          <ion-checkbox formControlName=\"enabled\"></ion-checkbox>\n        </ion-item>\n\n      </ion-list>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createUserForm.valid\">SAVE JOB SKILL</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/update/update-job-skill.modal.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/update/update-job-skill.modal.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"update-user-form ion-page\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update Job Skill</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"5\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"user.image\" [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"fileInput.click()\" *ngIf=\"!user.image\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"change-image-btn\" color=\"danger\" (click)=\"removeFile()\" *ngIf=\"user.image\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <div class=\"form-group\" style=\"display: none;\">\n          <input type=\"file\" (change)=\"uploadFile($event)\" #fileInput>\n        </div>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Skill Name *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n        </ion-item>\n       \n        \n        <ion-input type=\"hidden\" formControlName=\"grafter_type\"></ion-input>\n\n        <ion-input type=\"hidden\" formControlName=\"parent_id\"></ion-input>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Select Job Area *</ion-label>\n          <ion-input type=\"text\" formControlName=\"parent_name\" (click)=\"openSelectJobArea()\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Short Description</ion-label>\n          <ion-textarea rows=\"3\" formControlName=\"skill_desc\"></ion-textarea>\n        </ion-item>\n        \n        <ion-item class=\"input-item terms-item\">\n          <ion-label>Make this job skill active.</ion-label>\n          <ion-checkbox formControlName=\"enabled\" [checked]=\"enabled\"></ion-checkbox>\n        </ion-item>\n        \n      </ion-list>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteItem()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateUserForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

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

/***/ "./src/app/app-masters/job-skills/create/create-job-skill.modal.ts":
/*!*************************************************************************!*\
  !*** ./src/app/app-masters/job-skills/create/create-job-skill.modal.ts ***!
  \*************************************************************************/
/*! exports provided: CreateJobSkillModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateJobSkillModal", function() { return CreateJobSkillModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _dbmodels_job_skill_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dbmodels/job-skill.model */ "./src/app/dbmodels/job-skill.model.ts");
/* harmony import */ var _job_skills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../job-skills.service */ "./src/app/app-masters/job-skills/job-skills.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utility-components/select-job-area/select-job-area.page */ "./src/app/utility-components/select-job-area/select-job-area.page.ts");












let CreateJobSkillModal = class CreateJobSkillModal {
    constructor(modalController, firebaseService, authService, masterService, storageService, alertController, loadingController, router) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.masterService = masterService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.userData = new _dbmodels_job_skill_model__WEBPACK_IMPORTED_MODULE_6__["JobSkillModel"]();
        this.jobAreas = [];
    }
    ngOnInit() {
        this.authService.getAuthKey().then(result => {
            this.api_key = result;
            console.log('########## Obtained Token #####: ' + result);
        });
        // default image
        this.userData.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
        this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            grafter_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userData.grafter_type),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userData.parent_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            parent_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userData.enabled),
            skill_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userData.skill_desc),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userData.image)
        });
        this.masterService.getJobAreas().subscribe((res) => {
            if (!res.error) {
                this.jobAreas = res.result;
                /********** STORE ********/
                try {
                    //Store in local repo if fetch is successful
                    this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].JOB_CATEGORIES, res.result);
                }
                catch (Exception) {
                    console.log("FETCHING JOB AREAS IN createJobSkill: " + Exception.message);
                }
                /********** STORED ********/
            }
        }, (error) => {
            console.log('Looks like there is a Network Issue while fetching job areas.');
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    createUser() {
        this.presentLoadingWithOptions();
        this.userData.image = this.preview;
        this.userData.title = this.createUserForm.value.title;
        this.userData.parent_id = this.createUserForm.value.parent_id;
        this.userData.grafter_type = this.createUserForm.value.grafter_type;
        this.userData.skill_desc = this.createUserForm.value.skill_desc;
        this.userData.enabled = this.createUserForm.value.enabled;
        this.firebaseService.callItemCreateAPI(this.api_key, this.userData)
            .subscribe((res) => {
            this.loadingController.dismiss();
            console.log('########## Create Result #####: ' + JSON.stringify(res));
            if (!res.error) {
                /********** NAVIGATE WITH USER ID **********/
                this.dismissModal();
                //Prefer saving from api response
                this.firebaseService.addItemToLocal(this.userData);
                //this.router.navigate(['/job-skills/details'], {queryParams :{id : res.id}});
                //this.router.navigate(['/job-skills/details', res.id]);
                this.router.navigate(['/job-skills/listing']);
            }
            else {
                this.presentAlert(res.message);
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.' + error.message);
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
    // Image Preview
    uploadFile(event) {
        const file = event.target.files[0];
        this.createUserForm.patchValue({
            image: file
        });
        this.createUserForm.get('image').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.preview = reader.result;
            console.log("uploadFile() got preview: " + this.preview);
        };
        reader.readAsDataURL(file);
    }
    selectJobArea() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_11__["SelectJobAreaPage"]
            });
            modal.onDidDismiss().then(avatar => {
                if (avatar.data != null) {
                    this.createUserForm.patchValue({
                        parent_id: avatar.data.id,
                        parent_name: avatar.data.title
                    });
                    this.createUserForm.get('parent_id').updateValueAndValidity();
                    this.createUserForm.get('parent_name').updateValueAndValidity();
                }
            });
            yield modal.present();
        });
    }
};
CreateJobSkillModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _job_skills_service__WEBPACK_IMPORTED_MODULE_7__["JobSkillsService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CreateJobSkillModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-job-skill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-job-skill.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/create/create-job-skill.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/create.modal.scss */ "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles//create.shell.scss */ "./src/app/bluspecstyles/create.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _job_skills_service__WEBPACK_IMPORTED_MODULE_7__["JobSkillsService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CreateJobSkillModal);



/***/ }),

/***/ "./src/app/app-masters/job-skills/job-skills-integration.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/app-masters/job-skills/job-skills-integration.module.ts ***!
  \*************************************************************************/
/*! exports provided: JobSkillsIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillsIntegrationModule", function() { return JobSkillsIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _create_create_job_skill_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create-job-skill.modal */ "./src/app/app-masters/job-skills/create/create-job-skill.modal.ts");
/* harmony import */ var _update_update_job_skill_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update-job-skill.modal */ "./src/app/app-masters/job-skills/update/update-job-skill.modal.ts");
/* harmony import */ var _job_areas_job_areas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../job-areas/job-areas.service */ "./src/app/app-masters/job-areas/job-areas.service.ts");
/* harmony import */ var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility-components/select-job-area/select-job-area.page */ "./src/app/utility-components/select-job-area/select-job-area.page.ts");
/* harmony import */ var _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility-components/utility-components.module */ "./src/app/utility-components/utility-components.module.ts");












const firebaseRoutes = [
    {
        path: 'listing',
        loadChildren: () => __webpack_require__.e(/*! import() | listing-job-skills-module */ "listing-job-skills-module").then(__webpack_require__.bind(null, /*! ./listing/job-skills.module */ "./src/app/app-masters/job-skills/listing/job-skills.module.ts")).then(m => m.JobSkillsPageModule)
    },
    {
        path: 'details/:id',
        loadChildren: () => Promise.all(/*! import() | details-job-skills-details-module */[__webpack_require__.e("default~details-company-details-module~details-job-areas-details-module~details-job-skills-details-m~3b748c40"), __webpack_require__.e("details-job-skills-details-module")]).then(__webpack_require__.bind(null, /*! ./details/job-skills-details.module */ "./src/app/app-masters/job-skills/details/job-skills-details.module.ts")).then(m => m.JobSkillsDetailModule)
    }
];
let JobSkillsIntegrationModule = class JobSkillsIntegrationModule {
};
JobSkillsIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _utility_components_utility_components_module__WEBPACK_IMPORTED_MODULE_11__["UtilityComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes)
        ],
        entryComponents: [
            _create_create_job_skill_modal__WEBPACK_IMPORTED_MODULE_7__["CreateJobSkillModal"],
            _update_update_job_skill_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateJobSkillModal"],
            _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_10__["SelectJobAreaPage"]
        ],
        declarations: [
            _create_create_job_skill_modal__WEBPACK_IMPORTED_MODULE_7__["CreateJobSkillModal"],
            _update_update_job_skill_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateJobSkillModal"]
        ],
        providers: [
            _job_areas_job_areas_service__WEBPACK_IMPORTED_MODULE_9__["JobAreasService"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], JobSkillsIntegrationModule);



/***/ }),

/***/ "./src/app/app-masters/job-skills/update/update-job-skill.modal.ts":
/*!*************************************************************************!*\
  !*** ./src/app/app-masters/job-skills/update/update-job-skill.modal.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateJobSkillModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateJobSkillModal", function() { return UpdateJobSkillModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _dbmodels_job_skill_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dbmodels/job-skill.model */ "./src/app/dbmodels/job-skill.model.ts");
/* harmony import */ var _job_skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../job-skills.service */ "./src/app/app-masters/job-skills/job-skills.service.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utility-components/select-job-area/select-job-area.page */ "./src/app/utility-components/select-job-area/select-job-area.page.ts");













let UpdateJobSkillModal = class UpdateJobSkillModal {
    constructor(modalController, alertController, firebaseService, authService, toastService, masterService, storageService, loadingController, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.toastService = toastService;
        this.masterService = masterService;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.router = router;
        this.jobAreas = [];
    }
    ngOnInit() {
        this.authService.getAuthKey().then(result => {
            this.api_key = result;
        });
        this.updatedImage = this.user.image;
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            grafter_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.grafter_type),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.parent_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            parent_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.parent_name),
            enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.enabled),
            skill_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.skill_desc),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.image)
        });
        this.masterService.getJobAreas().subscribe((res) => {
            if (!res.error) {
                this.jobAreas = res.result;
                /********** STORE ********/
                try {
                    //Store in local repo if fetch is successful
                    this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].JOB_CATEGORIES, res.result);
                }
                catch (Exception) {
                    console.log("FETCHING JOB AREAS IN createJobSkill: " + Exception.message);
                }
                /********** STORED ********/
            }
        }, (error) => {
            console.log('Looks like there is a Network Issue while fetching job areas.');
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteItem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you really want to delete the Job Skill - ' + this.user.title + '?',
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
                                'id': this.user.id
                            };
                            this.firebaseService.deleteItem(this.api_key, postData)
                                .subscribe((res) => {
                                console.log('################ Result# ' + JSON.stringify(res));
                                this.loadingController.dismiss();
                                if (res.error) {
                                    this.presentAlert(res.message);
                                }
                                else {
                                    //delete from local
                                    this.firebaseService.deleteItemFromLocal(this.user);
                                    // this.firebaseService.invokeListChangeEvent.subscribe(value => {
                                    this.dismissModal();
                                    //console.log('Modal Dismiss Time 007 # '+JSON.stringify(this.deleteResult));
                                    this.toastService.presentToast(res.message);
                                    this.router.navigate(['/job-skills/listing']);
                                }
                            }, (error) => {
                                this.loadingController.dismiss();
                                this.presentAlert('Looks like there is a Network Issue.');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateUser() {
        this.presentLoadingWithOptions();
        this.user.id = this.updateUserForm.value.id;
        this.user.image = this.updatedImage;
        this.user.title = this.updateUserForm.value.title;
        this.user.parent_id = this.updateUserForm.value.parent_id;
        this.user.grafter_type = this.updateUserForm.value.grafter_type;
        this.user.skill_desc = this.updateUserForm.value.skill_desc;
        this.user.enabled = this.updateUserForm.value.enabled;
        var postData = {
            id: this.user.id,
            title: this.user.title,
            skill_desc: this.user.skill_desc,
            parent_id: this.user.parent_id,
            grafter_type: this.user.grafter_type,
            enabled: this.user.enabled,
            updatedImage: this.updatedImage
        };
        console.log('########## Company params ########### ' + JSON.stringify(this.user));
        this.firebaseService.callItemUpdateAPI(this.api_key, postData)
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
                console.log('########## API Successful ########### ' + JSON.stringify(res));
                //this.router.navigate(['/job-skills/details'], {queryParams :{id : res.id}});
                //this.router.navigate(['/companies/listing']);
                this.router.navigate(['/job-skills/details', res.id]);
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
    uploadFile(event) {
        const file = event.target.files[0];
        this.updateUserForm.patchValue({
            image: file
        });
        this.updateUserForm.get('image').updateValueAndValidity();
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.updatedImage = reader.result;
            this.user.image = this.updatedImage;
            //console.log("uploadFile() got preview: "+this.logoImgUpdated);
        };
        reader.readAsDataURL(file);
    }
    removeFile() {
        this.updatedImage = "";
        this.user.image = this.updatedImage;
    }
    openSelectJobArea() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _utility_components_select_job_area_select_job_area_page__WEBPACK_IMPORTED_MODULE_12__["SelectJobAreaPage"],
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    //alert(JSON.stringify(item));
                    this.updateUserForm.controls.parent_id.patchValue(item.data.id);
                    this.updateUserForm.controls.parent_name.patchValue(item.data.title);
                }
            });
            yield modal.present();
        });
    }
};
UpdateJobSkillModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _job_skills_service__WEBPACK_IMPORTED_MODULE_8__["JobSkillsService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_job_skill_model__WEBPACK_IMPORTED_MODULE_7__["JobSkillModel"])
], UpdateJobSkillModal.prototype, "user", void 0);
UpdateJobSkillModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-job-skill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-job-skill.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/update/update-job-skill.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/update.modal.scss */ "./src/app/bluspecstyles/update.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/update.shell.scss */ "./src/app/bluspecstyles/update.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _job_skills_service__WEBPACK_IMPORTED_MODULE_8__["JobSkillsService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UpdateJobSkillModal);



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



/***/ })

}]);
//# sourceMappingURL=app-masters-job-skills-job-skills-integration-module-es2015.js.map