function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-job-areas-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-areas/details/job-areas-details.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-areas/details/job-areas-details.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppMastersJobAreasDetailsJobAreasDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"job-skills/listing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{user?.title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openItemUpdateModal()\" *ngIf=\"localUser?.role_id == 1 && user\">\n        Edit\n      </ion-button>\n      <ion-button *ngIf=\"user\" fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"favouriteJobArea()\">\n        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n  <!------ Top Header Main ---->\n  <div class=\"recipes-wrapper\">\n    <div class=\"recipes-list\">\n      <div class=\"recipe-item\">\n\n        <!----- SECTION 1: BASIC ITEM DETAILS ----->\n        <app-image-shell class=\"recipe-cover-image\" [mode]=\"'cover'\" [src]=\"'./assets/images/banner.jpg'\">\n          <app-aspect-ratio [ratio]=\"{w:12, h:3}\">\n          </app-aspect-ratio>\n        </app-image-shell>\n        <div class=\"chef-picture-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell style=\"background-color: white;border-radius: 10px;padding:8px;\"  class=\"chef-picture-image\" [src]=\"user?.image\" [alt]=\"'Job Area Image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </div>\n     \n        <div class=\"recipe-call-to-action\">\n         \n          <h3 class=\"recipe-name\">\n            <app-text-shell [data]=\"user?.title\"></app-text-shell>\n          </h3>\n\n          <h5 class=\"user-name\" *ngIf=\"user?.parent_name\">\n            <app-text-shell animation=\"bouncing\" [data]=\"user?.parent_name\"></app-text-shell>\n          </h5>\n\n          <span class=\"recipe-chef\" *ngIf=\"user && user?.jobSkills.length <=0\" style=\"margin-top:2px;\">\n            <app-text-shell [data]=\"'No job skills listed for '+user?.title\"></app-text-shell>\n           </span>\n\n           <span class=\"recipe-chef\" *ngIf=\"user && user?.jobSkills.length > 0\" style=\"margin-top:2px;\">\n            <app-text-shell [data]=\"user?.jobSkills.length+' job skills listed for '+user?.title\"></app-text-shell>\n           </span>\n\n           <h5 class=\"normalText\" *ngIf=\"user && user?.job_area_desc\">\n            <app-text-shell [data]=\"user?.job_area_desc\"></app-text-shell>\n           </h5>\n\n        </div>\n<!----- SECTION 1: BASIC ITEM DETAILS ----->\n\n\n        <!----- SECTION 2: STAT BOX ----->\n        <hr class=\"details-divider\">\n        <ion-row class=\"details-scores recipe-attributes\">\n          <ion-col class=\"score-item attribute-score\">\n            <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/briefcase.svg\"></ion-icon>\n            <div class=\"score-value\">\n              <app-text-shell *ngIf=\"user\" [data]=\"user?.numJobs+' Jobs'\"></app-text-shell>\n            </div>\n          </ion-col>\n\n          <ion-col class=\"score-item attribute-score\">\n            <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/tags.svg\"></ion-icon>\n            <div class=\"score-value\">\n              <app-text-shell *ngIf=\"user\" [data]=\"user?.numJobSkills+' Skills'\"></app-text-shell>\n            </div>\n          </ion-col>\n\n          <ion-col class=\"score-item attribute-score\">\n            <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/side-menu/heart.svg\"></ion-icon>\n            <div class=\"score-value\">\n              <app-text-shell *ngIf=\"user\" [data]=\"user?.numFavourites+' Likes'\"></app-text-shell>\n            </div>\n          </ion-col>\n        </ion-row>\n        <hr class=\"details-divider\">\n        <!----- SECTION 2: STAT BOX ----->\n      </div>\n    </div>\n  </div>\n\n\n<!----- SECTION 3: LIST JOB SKILLS ----->\n  <ion-row class=\"details-tags\" style=\"margin-top:15px;\">\n    <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of user?.jobSkills\">\n      <span class=\"item-tag\">\n        <app-text-shell [data]=\"tag.title\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n<!----- SECTION 3: LIST JOB SKILLS ----->\n\n\n<!----- SECTION 4: PROMO BOX ----->\n  <ion-row class=\"promo-row\" *ngIf=\"user\">   \n    <ion-col size=\"10\">\n      <p class=\"promo-description\">\n        Looking for jobs in {{user?.title}}? Find most relevant jobs in areas of your choice.\n      </p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\">\n        <span class=\"promo-code\">\n          <app-text-shell [data]=\"'SUBSCRIBE'\"></app-text-shell>\n        </span>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n<!----- SECTION 4: PROMO BOX ----->\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n\n    <ion-col size=\"12\" *ngIf=\"user && user?.id && (localUser?.role_id == 3 || localUser?.role_id == 1)\">\n      <ion-button class=\"select-variant-btn\" color=\"secondary\" expand=\"block\" fill=\"solid\" [routerLink]=\"['/job-requests', {jobArea:user?.id}]\">FIND JOBS</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\" *ngIf=\"user && user?.id && (localUser?.role_id == 2 || localUser?.role_id == 1)\">\n      <ion-button [routerLink]=\"['/post-new-job', {jobArea:user?.id}]\" class=\"add-to-cart-btn\" color=\"primary\" expand=\"block\" fill=\"solid\">HIRE NOW</ion-button>\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/app-masters/job-areas/details/job-areas-details.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/app-masters/job-areas/details/job-areas-details.module.ts ***!
    \***************************************************************************/

  /*! exports provided: JobAreasDetailModule */

  /***/
  function srcAppAppMastersJobAreasDetailsJobAreasDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreasDetailModule", function () {
      return JobAreasDetailModule;
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


    var _job_areas_details_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./job-areas-details.resolver */
    "./src/app/app-masters/job-areas/details/job-areas-details.resolver.ts");
    /* harmony import */


    var _job_areas_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./job-areas-details.page */
    "./src/app/app-masters/job-areas/details/job-areas-details.page.ts");
    /* harmony import */


    var _job_areas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../job-areas.service */
    "./src/app/app-masters/job-areas/job-areas.service.ts");

    var routes = [{
      path: '',
      component: _job_areas_details_page__WEBPACK_IMPORTED_MODULE_8__["JobAreasDetailsPage"],
      resolve: {
        data: _job_areas_details_resolver__WEBPACK_IMPORTED_MODULE_7__["JobAreasDetailsResolver"]
      }
    }];

    var JobAreasDetailModule = function JobAreasDetailModule() {
      _classCallCheck(this, JobAreasDetailModule);
    };

    JobAreasDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_job_areas_details_page__WEBPACK_IMPORTED_MODULE_8__["JobAreasDetailsPage"]],
      providers: [_job_areas_service__WEBPACK_IMPORTED_MODULE_9__["JobAreasService"], _job_areas_details_resolver__WEBPACK_IMPORTED_MODULE_7__["JobAreasDetailsResolver"]]
    })], JobAreasDetailModule);
    /***/
  },

  /***/
  "./src/app/app-masters/job-areas/details/job-areas-details.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/app-masters/job-areas/details/job-areas-details.page.ts ***!
    \*************************************************************************/

  /*! exports provided: JobAreasDetailsPage */

  /***/
  function srcAppAppMastersJobAreasDetailsJobAreasDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreasDetailsPage", function () {
      return JobAreasDetailsPage;
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


    var _job_areas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../job-areas.service */
    "./src/app/app-masters/job-areas/job-areas.service.ts");
    /* harmony import */


    var _update_update_job_area_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../update/update-job-area.modal */
    "./src/app/app-masters/job-areas/update/update-job-area.modal.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var JobAreasDetailsPage =
    /*#__PURE__*/
    function () {
      function JobAreasDetailsPage(firebaseService, authService, modalController, router, route) {
        _classCallCheck(this, JobAreasDetailsPage);

        this.firebaseService = firebaseService;
        this.authService = authService;
        this.modalController = modalController;
        this.router = router;
        this.route = route;
      } // relatedUsers: Array<FirebaseListingItemModel> & ShellModel;


      _createClass(JobAreasDetailsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //Subscribe to any auth changes event
          console.log("ionViewDidEnter"); //this.firebaseService.getListingDataSource();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;
            console.log("/***** JUST ASKED LOCAL STORAGE : " + JSON.stringify(promisedValue));
          });
          this.firebaseService.invokeItemUpdatedEvent.subscribe(function (value) {
            _this.user = value;

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_7__["AuthConstants"].DEV_MODE) {
              console.log(" @@@@@@@@@@ GREAT UPDATE SYNC " + JSON.stringify(value));
            }
          });
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
          this.firebaseService.getDetailsDataSource(postData).subscribe(function (res) {
            console.log("Job Skill Profile: " + JSON.stringify(res));
            _this.user = res;
            console.log("Job Skill Profile: " + _this.user);

            if (res.error) {
              _this.router.navigate(['page-not-found']);
            }
          }, function (error) {
            console.log('Looks like there is a Network Issue.');
          });
          console.log("Done fetching Job Skills.");
        } // ionViewDidEnter(){
        //   //Subscribe to any auth changes event
        //   //console.log("ionViewDidEnter");
        //     this.firebaseService.getListingDataSource();
        // }

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
                      component: _update_update_job_area_modal__WEBPACK_IMPORTED_MODULE_5__["UpdateJobAreaModal"],
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

      return JobAreasDetailsPage;
    }();

    JobAreasDetailsPage.ctorParameters = function () {
      return [{
        type: _job_areas_service__WEBPACK_IMPORTED_MODULE_4__["JobAreasService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JobAreasDetailsPage.prototype, "isShell", null);
    JobAreasDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-areas-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-areas-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-masters/job-areas/details/job-areas-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/details.page.scss */
      "./src/app/bluspecstyles/details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/details.shell.scss */
      "./src/app/bluspecstyles/details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_areas_service__WEBPACK_IMPORTED_MODULE_4__["JobAreasService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], JobAreasDetailsPage);
    /***/
  },

  /***/
  "./src/app/app-masters/job-areas/details/job-areas-details.resolver.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/app-masters/job-areas/details/job-areas-details.resolver.ts ***!
    \*****************************************************************************/

  /*! exports provided: JobAreasDetailsResolver */

  /***/
  function srcAppAppMastersJobAreasDetailsJobAreasDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobAreasDetailsResolver", function () {
      return JobAreasDetailsResolver;
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


    var _job_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../job-areas.service */
    "./src/app/app-masters/job-areas/job-areas.service.ts");

    var JobAreasDetailsResolver =
    /*#__PURE__*/
    function () {
      function JobAreasDetailsResolver(firebaseService) {
        _classCallCheck(this, JobAreasDetailsResolver);

        this.firebaseService = firebaseService;
      }

      _createClass(JobAreasDetailsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var userId = route.paramMap.get('item_id');
          var combinedUserDataSource = this.firebaseService.getDetailsDataSource(userId);
          var combinedUserDataStore = this.firebaseService.getDetailsStore(combinedUserDataSource);
          return {
            user: combinedUserDataStore
          };
        }
      }]);

      return JobAreasDetailsResolver;
    }();

    JobAreasDetailsResolver.ctorParameters = function () {
      return [{
        type: _job_areas_service__WEBPACK_IMPORTED_MODULE_2__["JobAreasService"]
      }];
    };

    JobAreasDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_areas_service__WEBPACK_IMPORTED_MODULE_2__["JobAreasService"]])], JobAreasDetailsResolver);
    /***/
  }
}]);
//# sourceMappingURL=details-job-areas-details-module-es5.js.map