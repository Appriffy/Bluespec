function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-job-skills-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/listing/job-skills.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/listing/job-skills.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppMastersJobSkillsListingJobSkillsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>List Job Skills</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"openCreateItemModal()\" *ngIf=\"localUser?.role_id == 1\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search skills...\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Job Skills...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      \n      <ion-icon src=\"./assets/sample-icons/side-menu/briefcase.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Job Skill Found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">     \n        <ion-item class=\"list-item\" *ngFor=\"let item of listing\" [routerLink]=\"['/job-skills/details', item.id]\">\n   \n          <ion-row class=\"user-row\">\n            <!-- <ion-col size=\"3\" class=\"user-image-wrapper\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item?.image\" [alt]=\"'Company Logo'\"></app-image-shell>\n              </app-aspect-ratio>\n            </ion-col> -->\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h3 class=\"user-name\">\n                  <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n                </h3>\n    \n      <div *ngIf=\"!item?.enabled\">\n       <ion-badge class=\"schedule-closed\" color=\"danger\">Not Enabled</ion-badge>\n       </div>\n    \n              </div>\n            </ion-col>\n          </ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-masters/job-skills/listing/job-skills.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/app-masters/job-skills/listing/job-skills.module.ts ***!
    \*********************************************************************/

  /*! exports provided: JobSkillsPageModule */

  /***/
  function srcAppAppMastersJobSkillsListingJobSkillsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobSkillsPageModule", function () {
      return JobSkillsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _job_skills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../job-skills.service */
    "./src/app/app-masters/job-skills/job-skills.service.ts");
    /* harmony import */


    var _job_skills_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./job-skills.page */
    "./src/app/app-masters/job-skills/listing/job-skills.page.ts");

    var routes = [{
      path: '',
      component: _job_skills_page__WEBPACK_IMPORTED_MODULE_8__["JobSkillsPage"]
    }];

    var JobSkillsPageModule = function JobSkillsPageModule() {
      _classCallCheck(this, JobSkillsPageModule);
    };

    JobSkillsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_job_skills_page__WEBPACK_IMPORTED_MODULE_8__["JobSkillsPage"]],
      providers: [_job_skills_service__WEBPACK_IMPORTED_MODULE_7__["JobSkillsService"]]
    })], JobSkillsPageModule);
    /***/
  },

  /***/
  "./src/app/app-masters/job-skills/listing/job-skills.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/app-masters/job-skills/listing/job-skills.page.ts ***!
    \*******************************************************************/

  /*! exports provided: JobSkillsPage */

  /***/
  function srcAppAppMastersJobSkillsListingJobSkillsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobSkillsPage", function () {
      return JobSkillsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _job_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../job-skills.service */
    "./src/app/app-masters/job-skills/job-skills.service.ts");
    /* harmony import */


    var _create_create_job_skill_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../create/create-job-skill.modal */
    "./src/app/app-masters/job-skills/create/create-job-skill.modal.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../..//services/auth.service */
    "./src/app/services/auth.service.ts");

    var JobSkillsPage =
    /*#__PURE__*/
    function () {
      function JobSkillsPage(navCtrl, toastService, jobSkillsService, modalController, authService) {
        var _this = this;

        _classCallCheck(this, JobSkillsPage);

        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.jobSkillsService = jobSkillsService;
        this.modalController = modalController;
        this.authService = authService;
        this.loading = true;
        this.authService.getAuthCache().then(function (promisedValue) {
          _this.localUser = promisedValue;

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].DEV_MODE) {
            console.log("/***** User Ready with Auth => ****/: " + _this.localUser.id);
          }
        });
      }

      _createClass(JobSkillsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //Subscribe to any auth changes event
          this.jobSkillsService.invokeListChangeEvent.subscribe(function (value) {
            _this2.filtered_listing = value;
            _this2.listing = value;
            _this2.loading = false;

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].DEV_MODE) {
              console.log("Received from Subject: " + JSON.stringify(value));

              _this2.toastService.presentToast("Job skills has been updated.");
            }
          }); //this.fetchItems();
          //this.jobSkillsService.getListingDataSource();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //Subscribe to any auth changes event
          //console.log("ionViewDidEnter");
          //this.fetchItems();
          //this.jobSkillsService.getJobAreasFromLocalStorage();
          // this.storageService.get(AuthConstants.JOB_SKILLS).then(response=>{
          //   if(response){
          //     if(AuthConstants.DEV_MODE){
          //   console.log('########## LOCAL SYNC SUCCESSFUL ionViewDidEnter #####: '+JSON.stringify(response));
          //     }
          //  this.listing = response;
          //  this.filtered_listing = response;
          //    }
          //   });
          this.jobSkillsService.getListingDataSource();
        }
      }, {
        key: "fetchItems",
        value: function fetchItems() {
          //this.loading = true;
          //Implement No Disturb Loading
          if (this.listing.length <= 0) {
            this.loading = true;
          }

          this.jobSkillsService.getListingDataSource();
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          //let timeCurrent = Math.floor(Date.now() / 1000);
          this.fetchItems();
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.listing = this.filtered_listing;
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "searchList",
        value: function searchList() {
          var _this3 = this;

          this.initializeItems();
          return this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this3.searchQuery.toLowerCase()) > -1;
          });
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "openCreateItemModal",
        value: function openCreateItemModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _create_create_job_skill_modal__WEBPACK_IMPORTED_MODULE_6__["CreateJobSkillModal"],
                      cssClass: 'fullscreen-modal-css'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return JobSkillsPage;
    }();

    JobSkillsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _job_skills_service__WEBPACK_IMPORTED_MODULE_5__["JobSkillsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    JobSkillsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-skills.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/listing/job-skills.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _job_skills_service__WEBPACK_IMPORTED_MODULE_5__["JobSkillsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], JobSkillsPage);
    /***/
  }
}]);
//# sourceMappingURL=listing-job-skills-module-es5.js.map