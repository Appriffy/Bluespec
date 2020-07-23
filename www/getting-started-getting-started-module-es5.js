function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGettingStartedGettingStartedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-getting-started-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">skip</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- We need the form wrapping the slides so all the inputs in the different slides are part of the same form -->\n  <form class=\"getting-started-form\" [formGroup]=\"gettingStartedForm\">\n    <ion-slides class=\"getting-started-slides\" pager=\"false\">\n      <!-- <ion-slide class=\"browsing-categories-slide question-slide\">\n        <ion-row class=\"slide-inner-row\">\n          <ion-col class=\"question-options-col\" size=\"12\">\n            <h2 class=\"slide-title\">I am a</h2>\n\n\n            <ion-row>\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" size-xl=\"6\">\n                <ion-card color=\"secondary\" class=\"selectionCard\" (click)=\"roleSelected(1)\">\n                  <ion-card-content>\n                    <ion-row class=\"related-deal\">\n                      <ion-col class=\"deal-logo-wrapper\" size=\"3\">\n                        <img src=\"assets/images/tut-grafter1.png\"/>\n                      </ion-col>\n                      <ion-col class=\"deal-info-wrapper\" size=\"7\">\n                        <h2 class=\"related-deal-title\">RECUITER</h2>\n                        <p class=\"related-deal-description\">\n                         Find professionals anytime. Anywhere.\n                        </p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-content>\n                </ion-card></ion-col>\n\n\n        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"6\" size-xl=\"6\">\n          <ion-card color=\"success\" (click)=\"roleSelected(2)\">\n              <ion-card-content>\n                <ion-row class=\"related-deal\">\n                  <ion-col class=\"deal-logo-wrapper\" size=\"3\">\n                    <img src=\"assets/images/tut-grafter3.png\"/>\n                  </ion-col>\n                  <ion-col class=\"deal-info-wrapper ion-align-items-start\" size=\"7\">\n                    <h2 class=\"related-deal-title\">\n                      GRAFTER\n                    </h2>\n                    <p class=\"related-deal-description\">\n                     Discover work opportunities in a wide range of skills.\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n    \n              </ion-col>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n\n\n      </ion-slide> -->\n\n\n      <!--- Slide 2 -->\n      <ion-slide class=\"browsing-categories-slide question-slide\">\n\n        <!-- <ion-row class=\"select-user-image-row padding\" style=\"align-items: center;\n        text-align: center;\">\n          <ion-col class=\"user-image-col\" size=\"5\">\n            <img [src] =\"image\" style=\"width:120px;height:120px;margin:0 auto;\">\n            <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"takePhoto()\">\n              <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n            </ion-button>\n          </ion-col>\n    \n        </ion-row> -->\n\n        <ion-row class=\"slide-inner-row\" style=\"align-items: center;\n        text-align: center;\">\n\n          <ion-col class=\"question-options-col\" size=\"12\">\n\n\n            <h2 class=\"slide-title\">I AM</h2>\n\n            <ion-list class=\"question-options-list\">\n              <ion-radio-group formControlName=\"role_id\">\n                \n                <ion-item class=\"question-option\">\n                  <ion-label>LOOKING TO HIRE</ion-label>\n                  <ion-radio value=\"LOOKING TO HIRE\" (click)=\"roleSelected(1)\">\n                  </ion-radio>\n                </ion-item>\n\n                <ion-item class=\"question-option\">\n                  <ion-label>LOOKING FOR JOBS</ion-label>\n                  <ion-radio value=\"LOOKING FOR JOBS\" (click)=\"roleSelected(2)\"></ion-radio>\n                </ion-item>\n               \n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-slide>\n      <!--Slide 2 Ends-->\n      <ion-slide class=\"interests-to-follow-slide question-slide\">\n        <ion-row class=\"slide-inner-row\">\n          <ion-col class=\"heading-col\">\n            <h2 class=\"slide-title\">Select Role</h2>\n            <!-- <p class=\"slide-subtitle\">\n              Select your professional label\n            </p> -->\n          </ion-col>\n          <ion-col class=\"question-options-col\">\n            <ion-row class=\"options-list-row related-deal card-selection\">\n             \n             \n              <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n                <ion-card text-center padding (onclick)=\"grafterTypeSelected(1)\">     \n                  <ion-row>\n                    <ion-col size=\"3\" align-self-center style=\"vertical-align:middle;\">\n                      <ion-icon name=\"arrow-round-forward\" color=\"white\"></ion-icon>\n                    </ion-col>\n                    <ion-col align-self-center style=\"text-align:left;\">\n                      <h4>WHITE COLLAR</h4>\n                    </ion-col>\n                  </ion-row>\n            </ion-card>\n            </ion-col>\n\n            \n\n             \n            <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"6\">\n              <ion-card text-center padding (onclick)=\"grafterTypeSelected(2)\">     \n                <ion-row>\n                  <ion-col size=\"3\" align-self-center style=\"vertical-align:middle;\">\n                    <ion-icon name=\"arrow-round-forward\" color=\"white\"></ion-icon>\n                  </ion-col>\n                  <ion-col align-self-center style=\"text-align:left;\">\n                    <h4>BLUE COLLAR</h4>\n                  </ion-col>\n                </ion-row>\n          </ion-card>\n          </ion-col>\n            \n\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"call-to-action-col\">\n            <ion-button class=\"signup-button\" color=\"secondary\" expand=\"block\" [routerLink]=\"['/auth/signup']\">TAKE A TOUR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <!------------->\n        <!--Slide 2 Ends-->\n        <ion-slide class=\"interests-to-follow-slide question-slide\">\n          <ion-row class=\"slide-inner-row\">\n            <ion-col class=\"heading-col\">\n              <h2 class=\"slide-title\">Which job areas interests you?</h2>\n              <!-- <p class=\"slide-subtitle\">\n                You can add or change them later.\n              </p> -->\n            </ion-col>\n            <ion-col class=\"\">\n              <ion-row class=\"\">\n               \n\n                <ion-virtual-scroll [items]=\"jobAreas\">\n                  <ion-item *virtualItem=\"let item\">\n                    {{ item.title }}\n                  </ion-item>\n                </ion-virtual-scroll>\n\n                \n              </ion-row>\n            </ion-col>\n            <ion-col class=\"call-to-action-col\">\n              <ion-button class=\"signup-button\" color=\"secondary\" expand=\"block\" [routerLink]=\"['/auth/signup']\">TAKE A TOUR</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <!---------------->\n\n    </ion-slides>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/getting-started/getting-started.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/getting-started/getting-started.module.ts ***!
    \***********************************************************/

  /*! exports provided: GettingStartedPageModule */

  /***/
  function srcAppGettingStartedGettingStartedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function () {
      return GettingStartedPageModule;
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
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _getting_started_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./getting-started.page */
    "./src/app/getting-started/getting-started.page.ts");

    var routes = [{
      path: '',
      component: _getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]
    }];

    var GettingStartedPageModule = function GettingStartedPageModule() {
      _classCallCheck(this, GettingStartedPageModule);
    };

    GettingStartedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]]
    })], GettingStartedPageModule);
    /***/
  },

  /***/
  "./src/app/getting-started/getting-started.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/getting-started/getting-started.page.ts ***!
    \*********************************************************/

  /*! exports provided: GettingStartedPage */

  /***/
  function srcAppGettingStartedGettingStartedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPage", function () {
      return GettingStartedPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/master.service */
    "./src/app/services/master.service.ts");

    var GettingStartedPage =
    /*#__PURE__*/
    function () {
      function GettingStartedPage(menu, masterService, router, storageService) {
        _classCallCheck(this, GettingStartedPage);

        this.menu = menu;
        this.masterService = masterService;
        this.router = router;
        this.storageService = storageService;
        this.isLastSlide = false;
        this.selectedJobAreas = [];
        this.gettingStartedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          role_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0'),
          jobAreas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__["CheckboxCheckedValidator"].minSelectedCheckboxes(1))
        });
      }

      _createClass(GettingStartedPage, [{
        key: "onJobAreaSelected",
        value: function onJobAreaSelected(thisjobArea) {
          var selectedJobAreasArr = [];
          this.gettingStartedForm.value.jobAreas.map(function (value, index) {
            if (value) {
              selectedJobAreasArr.push(thisjobArea.id);
            }
          });
          this.selectedJobAreas = selectedJobAreasArr;
          console.log("selectedJobAreas - " + this.selectedJobAreas); // this.cachedData.selected_skills = selectedSkills.toString();
          // this.registrationService.setCachedData(this.cachedData);
          //     this.router.navigate(['set-location']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.menu.enable(false);
          /******** START FETCH JOB AREAS *******/

          this.masterService.getJobAreas().subscribe(function (res) {
            if (!res.error) {
              console.log("JOB AREAS: " + JSON.stringify(res));
              _this.jobAreas = res.result;

              _this.jobAreas.map(function (item) {
                _this.gettingStartedForm.controls.jobAreas.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
              });
            }
          }, function (error) {
            alert('Looks like there is a Network Issue while fetching job areas.');
          });
          /******** ENDS FETCH JOB AREAS *******/
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.slides.lockSwipes(true); // ViewChild is set

          this.slides.isEnd().then(function (isEnd) {
            _this2.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this2.slides.isEnd().then(function (isEnd) {
              _this2.isLastSlide = isEnd;
            });
          });
        }
      }, {
        key: "roleSelected",
        value: function roleSelected(role) {
          //alert(role);
          if (role == 2) {
            this.storageService.store("selected_role", 2); // this.slides.lockSwipes(false);
            // this.slides.slideTo(2);
            // this.slides.lockSwipes(true);
            //this.router.navigate(['walkthrough']);
          } else {
            this.storageService.store("selected_role", 3); // this.slides.lockSwipes(false);
            // this.slides.slideTo(1);
            // this.slides.lockSwipes(true);
            //this.router.navigate(['recruiter-walkthrough']);
          } //console.log("selected_role Set as: "+get("selected_role"));


          this.router.navigate(['/auth/signup']);
        }
      }, {
        key: "grafterTypeSelected",
        value: function grafterTypeSelected(grafterType) {
          alert(grafterType);

          if (grafterType == 2) {
            this.storageService.store("selected_grafter_type", 2);
            this.router.navigate(['dashboard']);
          } else {
            this.storageService.store("selected_grafter_type", 1);
            this.router.navigate(['dashboard']);
          }
        }
      }]);

      return GettingStartedPage;
    }();

    GettingStartedPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], GettingStartedPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GettingStartedPage.prototype, "isLastSlide", void 0);
    GettingStartedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-getting-started',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./getting-started.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.page.scss */
      "./src/app/getting-started/styles/getting-started.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.shell.scss */
      "./src/app/getting-started/styles/getting-started.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.responsive.scss */
      "./src/app/getting-started/styles/getting-started.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])], GettingStartedPage);
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-alt);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n  background-color: var(--page-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.card-selection .related-deals-wrapper {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.card-selection .related-deals-wrapper .related-deals-title {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n\n.card-selection .related-deals-wrapper .related-deal {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n\n.card-selection .related-deals-wrapper .related-deal:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.card-selection .related-deals-wrapper .related-deal .deal-logo-wrapper {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n\n.card-selection .related-deals-wrapper .related-deal .deal-info-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.card-selection .related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-title {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 17px;\n}\n\n.card-selection .related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n\n.card-selection ion-card {\n  background-color: #0A5392;\n  color: white;\n}\n\n.card-selection ion-icon {\n  font-size: 3em;\n}\n\n.select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-light);\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  padding: var(--page-margin);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.question-slide .slide-subtitle {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 0px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 0px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .selectionCard {\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n.related-deals-wrapper {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.related-deals-wrapper .related-deals-title {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n\n.related-deals-wrapper .related-deal {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n\n.related-deals-wrapper .related-deal:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.related-deals-wrapper .related-deal .deal-logo-wrapper {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n\n.related-deals-wrapper .related-deal .deal-info-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-title {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 20px;\n}\n\n.related-deals-wrapper .related-deal .deal-info-wrapper .related-deal-description {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXHN0eWxlc1xcZ2V0dGluZy1zdGFydGVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNoZWNrYm94LXRhZy5zY3NzIiwic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxzY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHdDQUFBO0VBRUEsb0RBQUE7RUFDQSx1QkFBQTtBQ1JGOztBRGNFO0VBQ0Usb0ZBQUE7QUNYSjs7QURhSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FDWE47O0FEY0k7RUFDRSw4QkFBQTtFQUVBLHNDQUFBO0VBQ0EsMkNBQUE7QUNiTjs7QURlTTtFQUNFLDJDQUFBO0FDYlI7O0FEZ0JNO0VBQ0Usa0hBQUE7RUFDQSw2REFBQTtBQ2RSOztBRGlCTTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFB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QUNwREY7O0FEc0RFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUNwREo7O0FEdURFO0VBQ0UsOEJBQUE7RUFFQSxzQ0FBQTtFQUNBLDJDQUFBO0FDdERKOztBRHdESTtFQUNFLDJDQUFBO0FDdEROOztBRHlESTtFQUNFLGtIQUFBO0VBQ0EsNkRBQUE7QUN2RE47O0FEMERJO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDeEROOztBRDBETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ3hEUjs7QUQyRE07RUFDRSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDekRSIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdCk7XG5cbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcblxuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG5cbi5jYXJkLXNlbGVjdGlvbntcblxuICAucmVsYXRlZC1kZWFscy13cmFwcGVyIHtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMykgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAucmVsYXRlZC1kZWFscy10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cblxuICAgIC5yZWxhdGVkLWRlYWwge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG5cbiAgICAgIC5kZWFsLWxvZ28td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAgICAgfVxuXG4gICAgICAuZGVhbC1pbmZvLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAucmVsYXRlZC1kZWFsLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWxhdGVkLWRlYWwtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEE1MzkyO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG59XG5cbi5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC51c2VyLWltYWdlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgfVxuICB9XG5cbiAgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHotaW5kZXg6IDM7XG4gICAgd2lkdGg6IDRjaDtcbiAgICBoZWlnaHQ6IDRjaDtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIC5idG4taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICB9XG59XG5cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgLmNoZWNrYm94LXRhZ3Mge1xuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcblxuICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xuXG4gICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbiAgICB9XG5cbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gc3BhY2VcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB9XG59XG5cbi5xdWVzdGlvbi1zbGlkZSB7XG4gIC5zbGlkZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5zbGlkZS1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cbn1cblxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUge1xuICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucXVlc3Rpb24tb3B0aW9ucy1jb2wge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgIC5xdWVzdGlvbi1vcHRpb25zLWxpc3Qge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAucXVlc3Rpb24tb3B0aW9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAgICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgLy8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cbiAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgLy8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC8vIEluIHRoZSBsYXN0IHNsaWRlIC5zd2lwZXItcGFnaW5hdGlvbiBpcyBoaWRkZW5cbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgfVxuXG4gIC5oZWFkaW5nLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQpO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAub3B0aW9ucy1saXN0LXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VsZWN0aW9uQ2FyZHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKTtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuICB9XG4gIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQpO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5zaWdudXAtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBsZWZ0OiAxNSU7XG4gICAgICAvLyB2ZXJ0aWNhbGx5IGNlbnRlcmVkXG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICBpb24tY2hlY2tib3gge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAtLWJvcmRlci13aWR0aDogMTB2dztcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYik7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIC40KTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyBOb3RlOiBXZSBjYW5ub3RlIGNoYW5nZSB0aGUgc3R5bGVzIG9mIHRoZSAuY2hlY2tib3gtaWNvbiBiZWNhdXNlIGl0J3MgaW5zaWRlIHRoZSBzaGFkb3cgZG9tLlxuICAgICAgLy8gQW4gYWx0ZXJuYXRpdmUgd291bGQgYmUgdG8gc2V0IC0td2lkdGggYW5kIC0taGVpZ2h0IHRvIDBweCBhbmQgYWRkIGEgY3VzdG9tIG92ZXJsYXkgYW5kIGljb24gaW4gdGhlIDxjdXN0b20tY2hlY2tib3g+IGh0bWxcbiAgICB9XG5cbiAgICAmLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSB7XG4gIDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbi8vICAgICAgICAoQW5ndWxhciBkb2Vzbid0IGFkZCBhbiAnX25nY29udGVudCcgYXR0cmlidXRlIHRvIHRoZSAuc3dpcGVyLXBhZ2dpbmF0aW9uIGJlY2F1c2UgaXQncyBkeW5hbWljYWxseSByZW5kZXJlZClcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XG46aG9zdCA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XG4gICAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgIH1cbiAgfVxufVxuXG5cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMykgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5yZWxhdGVkLWRlYWwge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuZGVhbC1sb2dvLXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAgIH1cblxuICAgIC5kZWFsLWluZm8td3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLnJlbGF0ZWQtZGVhbC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAucmVsYXRlZC1kZWFsLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0KTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodDogMTYlO1xuICAtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQ6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi5jYXJkLXNlbGVjdGlvbiAucmVsYXRlZC1kZWFscy13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmNhcmQtc2VsZWN0aW9uIC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jYXJkLXNlbGVjdGlvbiAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1icm9hZC1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmNhcmQtc2VsZWN0aW9uIC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jYXJkLXNlbGVjdGlvbiAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtbG9nby13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xufVxuLmNhcmQtc2VsZWN0aW9uIC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1pbmZvLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkLXNlbGVjdGlvbiAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIC5yZWxhdGVkLWRlYWwtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5jYXJkLXNlbGVjdGlvbiAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIC5yZWxhdGVkLWRlYWwtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXJkLXNlbGVjdGlvbiBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTUzOTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkLXNlbGVjdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcucm91bmRlZC10YWcge1xuICAtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4udXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuXG4ucXVlc3Rpb24tc2xpZGUgLnNsaWRlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnF1ZXN0aW9uLXNsaWRlIC5zbGlkZS1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3Qge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbiBpb24tbGFiZWwge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xufVxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5xdWVzdGlvbi1vcHRpb25zLWxpc3QgLnF1ZXN0aW9uLW9wdGlvbiBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5oZWFkaW5nLWNvbCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyBpb24tY29sOm50aC1jaGlsZChvZGQpIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyBpb24tY29sOm50aC1jaGlsZChldmVuKSB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5zZWxlY3Rpb25DYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jYWxsLXRvLWFjdGlvbi1jb2wgLnNpZ251cC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgZmxleDogMSAwIDEwMCU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDEwdnc7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYik7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIC5jaGVja2JveC10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn1cblxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtbG9nby13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIC5kZWFsLWluZm8td3JhcHBlciAucmVsYXRlZC1kZWFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIC5yZWxhdGVkLWRlYWwtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQuY2hlY2tib3gtdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xuXG4gICAgJi5yb3VuZGVkLXRhZyB7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcblx0XHR9XG5cblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuXHRcdC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.responsive.scss":
  /*!************************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.responsive.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXHN0eWxlc1xcZ2V0dGluZy1zdGFydGVkLnJlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUNmTjtBQUNGO0FEb0JBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUM3Qk47QUFDRjtBRGtDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUEiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXG5cbi8vIChzZWU6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL21lZGlhLXF1ZXJpZXMtZm9yLXN0YW5kYXJkLWRldmljZXMvI2lwaG9uZS1xdWVyaWVzKVxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggLmNoZWNrYm94LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jdXN0b20tY2hlY2tib3ggLmNoZWNrYm94LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovIl19 */";
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.shell.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.shell.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXHN0eWxlc1xcZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwuY2hlY2tib3gtY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC5jaGVja2JveC1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/validators/checkbox-checked.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/validators/checkbox-checked.validator.ts ***!
    \**********************************************************/

  /*! exports provided: CheckboxCheckedValidator */

  /***/
  function srcAppValidatorsCheckboxCheckedValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function () {
      return CheckboxCheckedValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CheckboxCheckedValidator =
    /*#__PURE__*/
    function () {
      function CheckboxCheckedValidator() {
        _classCallCheck(this, CheckboxCheckedValidator);
      }

      _createClass(CheckboxCheckedValidator, null, [{
        key: "minSelectedCheckboxes",
        value: function minSelectedCheckboxes(min) {
          var validator = function validator(formArray) {
            var totalSelected = formArray.controls // get a list of checkbox values (boolean)
            .map(function (control) {
              return control.value;
            }) // total up the number of checked checkboxes
            .reduce(function (prev, next) {
              return next ? prev + next : prev;
            }, 0); // if the total is not greater than the minimum, return the error message

            return totalSelected >= min ? null : {
              required: true
            };
          };

          return validator;
        }
      }]);

      return CheckboxCheckedValidator;
    }();
    /***/

  }
}]);
//# sourceMappingURL=getting-started-getting-started-module-es5.js.map