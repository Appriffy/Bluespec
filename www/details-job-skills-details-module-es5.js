function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-job-skills-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/details/job-skills-details.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/details/job-skills-details.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppMastersJobSkillsDetailsJobSkillsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"job-skills/listing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Job Skill Detail</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openItemUpdateModal()\" *ngIf=\"user && localUser?.role_id === 1\">\n        Edit\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\" color=\"primary\">\n <!------ Top Header Main ---->\n <div class=\"recipes-wrapper\" style=\"background-color:#ffffff;clear: both;margin-bottom:0px;\">\n  <div class=\"recipes-list\">\n    <div class=\"recipe-item\">\n      <!----- SECTION 1: BASIC ITEM DETAILS ----->\n      <app-image-shell class=\"recipe-cover-image\" [mode]=\"'cover'\" [src]=\"'./assets/images/bg.jpg'\">\n        <app-aspect-ratio [ratio]=\"{w:12, h:3}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n      <div class=\"chef-picture-wrapper\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"chef-picture-image\" [src]=\"user?.image\" [alt]=\"'Job Area Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </div>\n   \n      <div class=\"recipe-call-to-action\">\n       \n        <h3 class=\"recipe-name\" style=\"margin-bottom:2px;\">\n          <app-text-shell [data]=\"user?.title\"></app-text-shell>\n        </h3>\n\n        <h5 class=\"user-name\" *ngIf=\"user?.parent_name\" style=\"margin-top:2px;\">\n          <app-text-shell animation=\"bouncing\" [data]=\"user?.parent_name\"></app-text-shell>\n        </h5>\n\n         <span class=\"recipe-author\" *ngIf=\"user?.skill_desc\">\n          <app-text-shell [data]=\"user?.skill_desc\"></app-text-shell>\n        </span>\n      </div>\n<!----- SECTION 1: BASIC ITEM DETAILS ----->\n\n\n\n      <!----- SECTION 2: STAT BOX -----\n      <hr class=\"details-divider\">\n      <ion-row class=\"details-scores recipe-attributes\">\n        <ion-col class=\"score-item attribute-score\">\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/briefcase.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"user?.numJobs+' Jobs'\"></app-text-shell>\n          </div>\n        </ion-col>\n        <ion-col class=\"score-item attribute-score\">\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/glasses-outline.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"user?.numProfessionals+' Professionals'\"></app-text-shell>\n          </div>\n        </ion-col>\n        <ion-col class=\"score-item attribute-score\">\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/people.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"user?.numFavourites+' Likes'\"></app-text-shell>\n          </div>\n        </ion-col>\n      </ion-row>\n      <hr class=\"details-divider\">\n      ---- SECTION 2: STAT BOX ----->\n\n\n\n<hr class=\"details-divider\">\n<ion-row class=\"user-stats-section\">\n  \n  <ion-col class=\"user-stats-wrapper\" size=\"4\">\n    <span class=\"stat-value\">\n      <app-text-shell [data]=\"user?.numJobs > 0?''+user?.numJobs:'0'\"></app-text-shell>\n    </span>\n    <span class=\"stat-name\"> JOBS</span>\n    <!-- <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/briefcase.svg\"></ion-icon>  -->\n  </ion-col>\n  <ion-col class=\"user-stats-wrapper\" size=\"4\">\n    <span class=\"stat-value\">\n      <app-text-shell [data]=\"user?.numProfessionals > 0?''+user?.numProfessionals:'0'\"></app-text-shell>\n    </span>\n    <span class=\"stat-name\"> PROFESSIONALS</span>\n    <!-- <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/glasses-outline.svg\"></ion-icon> -->\n  </ion-col>\n  <ion-col class=\"user-stats-wrapper\" size=\"4\">\n    <span class=\"stat-value\">\n      <app-text-shell [data]=\"user?.numFavourites > 0?''+user?.numFavourites:'0'\"></app-text-shell>\n    </span>\n    <span class=\"stat-name\">SUBSCRIBERS</span>\n    <!-- <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/people.svg\"></ion-icon> -->\n  </ion-col>\n</ion-row>\n<!-- <hr class=\"details-divider\"> -->\n\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"user-friends-section\" *ngIf=\"user?.professionals.length > 0 && (localUser?.role_id == 2 || localUser?.role_id == 1)\">\n  <ion-row class=\"heading-row\">\n    <h5 class=\"details-section-title\">HIRE PROFESSIONALS</h5>\n    <a class=\"heading-call-to-action\" style=\"color:white;\" [routerLink]=\"['/people/listing/grafters']\">SEE ALL</a>\n  </ion-row>\n  <ion-row class=\"friends-row\">\n    <ion-col class=\"friend-item\" size=\"2\" *ngFor=\"let friend of user?.professionals\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" [routerLink]=\"['/people/details', friend.user_name]\">\n        <app-image-shell class=\"friend-picture\" [src]=\"friend.user_image\"></app-image-shell>\n      </app-aspect-ratio>\n      <span class=\"friend-name\">\n        <app-text-shell [data]=\"friend.first_name\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n\n<!----- SECTION FOR GRAFTER : PROMO BOX ----->\n<ion-row class=\"promo-row\" style=\"background-color: #eeeeee;\" *ngIf=\"user && (localUser?.role_id == 3 || localUser?.role_id == 1)\">   \n  <ion-col size=\"10\">\n    <h3><ion-icon name=\"notifications\" style=\"font-size: 64px;color: #555555;\"></ion-icon></h3>\n    <!-- <h3><ion-icon name=\"notifications-off\" style=\"font-size: 80px;\"></ion-icon></h3> -->\n    \n    <h4 style=\"color: var(--ion-color-medium-tint);\">\n      Are you a {{user?.title}}?\n    </h4>\n    <h4 class=\"promo-description\">\n      Subscribe to get notified of the best job opportunities in areas of your preference.\n    </h4>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-button class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\">\n      <span class=\"promo-code\">\n        <app-text-shell [data]=\"'SUBSCRIBE'\"></app-text-shell>\n      </span>\n    </ion-button>\n  </ion-col>\n</ion-row>\n<!----- SECTION: PROMO BOX ----->\n\n<!----- SECTION FOR EMPLOYER : PROMO BOX ----->\n<ion-row class=\"promo-row\" style=\"background-color: #dddddd;\" *ngIf=\"user && (localUser?.role_id == 2 || localUser?.role_id == 1)\">   \n  <ion-col size=\"10\">\n    <h3><ion-icon name=\"rocket\" style=\"font-size: 64px;color: #555555;\"></ion-icon></h3>\n    <h4 style=\"color: var(--ion-color-medium-tint);\">\n      Looking to hire a {{user?.title}}?\n    </h4>\n    <h4 class=\"promo-description\">\n      Post a job to find the best professionals in your area.\n    </h4>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-button [routerLink]=\"['/post-new-job']\" class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\">\n      <span class=\"promo-code\">\n        <app-text-shell [data]=\"'POST JOB'\"></app-text-shell>\n      </span>\n    </ion-button>\n     \n    <ion-button [routerLink]=\"['/people/listing/grafters']\" style=\"display:block;margin-top:20px;\" class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"solid\" color=\"primary\">\n      <span class=\"promo-code\">\n        <app-text-shell [data]=\"'FIND GRAFTERS'\"></app-text-shell>\n      </span>\n    </ion-button>\n<!-- \n    <ion-button style=\"margin-top:20px;\" expand=\"block\" shape=\"round\" fill=\"solid\" color=\"primary\">\n      <ion-icon name=\"search\" style=\"font-size: 24px;\"></ion-icon> FIND GRAFTERS\n    </ion-button> -->\n\n  </ion-col>\n</ion-row>\n<!----- SECTION: PROMO BOX ----->\n\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\" *ngIf=\"localUser?.role_id == 3 || localUser?.role_id == 1\">\n      <ion-button class=\"select-variant-btn\" color=\"secondary\" expand=\"block\" fill=\"solid\" [routerLink]=\"['/job-requests', {skillID:user?.id}]\">FIND JOBS</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\" *ngIf=\"localUser?.role_id == 2 || localUser?.role_id == 1\">\n      <ion-button [routerLink]=\"['/post-new-job']\" class=\"add-to-cart-btn\" color=\"primary\" expand=\"block\" fill=\"solid\">HIRE {{user?.title|uppercase}}</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/app-masters/job-skills/details/job-skills-details.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/app-masters/job-skills/details/job-skills-details.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: JobSkillsDetailModule */

  /***/
  function srcAppAppMastersJobSkillsDetailsJobSkillsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobSkillsDetailModule", function () {
      return JobSkillsDetailModule;
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


    var _job_skills_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./job-skills-details.page */
    "./src/app/app-masters/job-skills/details/job-skills-details.page.ts");
    /* harmony import */


    var _job_skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../job-skills.service */
    "./src/app/app-masters/job-skills/job-skills.service.ts");
    /* harmony import */


    var _job_skills_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./job-skills-details.resolver */
    "./src/app/app-masters/job-skills/details/job-skills-details.resolver.ts");

    var routes = [{
      path: '',
      component: _job_skills_details_page__WEBPACK_IMPORTED_MODULE_7__["JobSkillsDetailsPage"],
      resolve: {
        data: _job_skills_details_resolver__WEBPACK_IMPORTED_MODULE_9__["JobSkillDetailsResolver"]
      }
    }];

    var JobSkillsDetailModule = function JobSkillsDetailModule() {
      _classCallCheck(this, JobSkillsDetailModule);
    };

    JobSkillsDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_job_skills_details_page__WEBPACK_IMPORTED_MODULE_7__["JobSkillsDetailsPage"]],
      providers: [_job_skills_service__WEBPACK_IMPORTED_MODULE_8__["JobSkillsService"], _job_skills_details_resolver__WEBPACK_IMPORTED_MODULE_9__["JobSkillDetailsResolver"]]
    })], JobSkillsDetailModule);
    /***/
  },

  /***/
  "./src/app/app-masters/job-skills/details/job-skills-details.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/app-masters/job-skills/details/job-skills-details.page.ts ***!
    \***************************************************************************/

  /*! exports provided: JobSkillsDetailsPage */

  /***/
  function srcAppAppMastersJobSkillsDetailsJobSkillsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobSkillsDetailsPage", function () {
      return JobSkillsDetailsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _update_update_job_skill_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../update/update-job-skill.modal */
    "./src/app/app-masters/job-skills/update/update-job-skill.modal.ts");
    /* harmony import */


    var _job_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../job-skills.service */
    "./src/app/app-masters/job-skills/job-skills.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var JobSkillsDetailsPage =
    /*#__PURE__*/
    function () {
      function JobSkillsDetailsPage(firebaseService, modalController, router, toastService, authService, route) {
        _classCallCheck(this, JobSkillsDetailsPage);

        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.router = router;
        this.toastService = toastService;
        this.authService = authService;
        this.route = route;
      } // relatedUsers: Array<FirebaseListingItemModel> & ShellModel;


      _createClass(JobSkillsDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.item_id = params.get("id"); //alert(this.item_id);

            if (_this.item_id <= 0) {
              _this.router.navigate(['page-not-found']);
            }
          });
          var postData = {
            item_id: this.item_id,
            sort_by: 0
          };
          this.authService.getAuthCache().then(function (promisedValue) {
            if (promisedValue) {
              _this.localUser = promisedValue;

              _this.firebaseService.getDetailsDataSource(_this.localUser.api_key, postData).subscribe(function (res) {
                if (res) {
                  if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                    console.log("Job Skill Profile: " + JSON.stringify(res));
                  }

                  _this.user = res;

                  if (res.error) {
                    //this.router.navigate(['page-not-found']);
                    _this.toastService.presentToast("Error Response " + JSON.stringify(res));
                  }
                }
              }, function (error) {
                console.log('Looks like there is a Network Issue.');
              });
            }
          });
        }
      }, {
        key: "openItemUpdateModal",
        value: function openItemUpdateModal() {
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
                      component: _update_update_job_skill_modal__WEBPACK_IMPORTED_MODULE_4__["UpdateJobSkillModal"],
                      componentProps: {
                        'user': this.user
                      }
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
      }, {
        key: "isShell",
        get: function get() {
          return this.user && this.user.isShell ? true : false;
        }
      }]);

      return JobSkillsDetailsPage;
    }();

    JobSkillsDetailsPage.ctorParameters = function () {
      return [{
        type: _job_skills_service__WEBPACK_IMPORTED_MODULE_5__["JobSkillsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JobSkillsDetailsPage.prototype, "isShell", null);
    JobSkillsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-skill-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-skills-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-skills/details/job-skills-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/details.page.scss */
      "./src/app/bluspecstyles/details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/details.shell.scss */
      "./src/app/bluspecstyles/details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_skills_service__WEBPACK_IMPORTED_MODULE_5__["JobSkillsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], JobSkillsDetailsPage);
    /***/
  },

  /***/
  "./src/app/app-masters/job-skills/details/job-skills-details.resolver.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/app-masters/job-skills/details/job-skills-details.resolver.ts ***!
    \*******************************************************************************/

  /*! exports provided: JobSkillDetailsResolver */

  /***/
  function srcAppAppMastersJobSkillsDetailsJobSkillsDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobSkillDetailsResolver", function () {
      return JobSkillDetailsResolver;
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


    var _job_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../job-skills.service */
    "./src/app/app-masters/job-skills/job-skills.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var JobSkillDetailsResolver =
    /*#__PURE__*/
    function () {
      function JobSkillDetailsResolver(firebaseService, authService) {
        var _this2 = this;

        _classCallCheck(this, JobSkillDetailsResolver);

        this.firebaseService = firebaseService;
        this.authService = authService;
        this.authService.getAuthCache().then(function (promisedValue) {
          _this2.localUser = promisedValue;
          console.log("JobSkillDetailsResolver => " + JSON.stringify(_this2.localUser));
        });
      } // resolve(route: ActivatedRouteSnapshot) {
      //   //const userId = route.paramMap.get('item_id');
      //   const userId = route.paramMap.get('id');
      //   console.log("JobSkillDetailsResolver USERID => "+userId);
      //   const combinedUserDataSource: Observable<JobSkillDetailModel> = this.firebaseService
      //   .getDetailsDataSource(this.localUser.api_key, userId);
      //   const combinedUserDataStore: DataStore<JobSkillDetailModel> = this.firebaseService
      //   .getDetailsStore(combinedUserDataSource);
      //   return {user: combinedUserDataStore};
      // }


      _createClass(JobSkillDetailsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this3 = this;

          //const userId = route.paramMap.get('item_id');
          var userId = route.paramMap.get('id');
          console.log("JobSkillDetailsResolver USERID => " + userId);
          this.authService.getAuthCache().then(function (promisedValue) {
            _this3.localUser = promisedValue;
            console.log("JobSkillDetailsResolver => " + JSON.stringify(_this3.localUser));

            var combinedUserDataSource = _this3.firebaseService.getDetailsDataSource(_this3.localUser.api_key, userId);

            var combinedUserDataStore = _this3.firebaseService.getDetailsStore(combinedUserDataSource);

            return {
              user: combinedUserDataSource
            };
          });
        }
      }]);

      return JobSkillDetailsResolver;
    }();

    JobSkillDetailsResolver.ctorParameters = function () {
      return [{
        type: _job_skills_service__WEBPACK_IMPORTED_MODULE_2__["JobSkillsService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    JobSkillDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_skills_service__WEBPACK_IMPORTED_MODULE_2__["JobSkillsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], JobSkillDetailsResolver);
    /***/
  }
}]);
//# sourceMappingURL=details-job-skills-details-module-es5.js.map