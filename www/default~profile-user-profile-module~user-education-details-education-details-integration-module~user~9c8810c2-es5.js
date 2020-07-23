function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-user-profile-module~user-education-details-education-details-integration-module~user~9c8810c2"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/create/create-education-details.modal.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/create/create-education-details.modal.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserEducationDetailsCreateCreateEducationDetailsModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"update-user-form ion-page\" [formGroup]=\"createEduDetailForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page_title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n   \n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n      <ion-item class=\"input-item\">\n        <ion-label color=\"secondary\" position=\"floating\">Select Education Level *</ion-label>\n        <ion-select placeholder=\"Choose a level\" formControlName=\"level_id\" cancelText=\"Cancel\" okText=\"OK\" (ionChange)=\"onEduLevelSelected($event)\">\n          <ion-select-option *ngFor=\"let item of eduLevels\" [value]=\"item.id\" >{{item.title}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-input type=\"hidden\" formControlName=\"study_area\" value=\"0\"></ion-input>\n\n      <ion-item class=\"input-item\" *ngIf=\"createEduDetailForm.value.level_id\">\n        <ion-label color=\"primary\" position=\"floating\">Select Study Area *</ion-label>\n        <ion-input (ionFocus)=\"selectStudyArea()\" formControlName=\"study_area_name\" inputmode=\"none\" type=\"text\" readonly></ion-input>\n      </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Examination Title *</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" placeholder=\"e.g. AISSCE, KSBE\" required></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Organization *</ion-label>\n          <ion-input type=\"text\" formControlName=\"organization\" placeholder=\"School/College/University\" required></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Joining *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yoj\" required></ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label class=\"toggle-label\">{{studyStatus}}</ion-label>\n          <ion-toggle color=\"secondary\" formControlName=\"is_current\" (ionChange)=\"onCurrentOptionSelected($event)\"></ion-toggle>\n        </ion-item>\n\n        <ion-item class=\"input-item\" *ngIf=\"!currentlyStudying\">\n          <ion-label color=\"secondary\" position=\"floating\">Year of Passing *</ion-label>\n          <ion-datetime display-format=\"YYYY\" picker-format=\"YYYY\" formControlName=\"yop\"></ion-datetime>\n        </ion-item>\n\n        <ion-input *ngIf=\"currentlyStudying\" type=\"hidden\" formControlName=\"yop\" [value]=\"'Not yet'\" ></ion-input>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score *</ion-label>\n          <ion-input type=\"text\" maxLength=\"4\" formControlName=\"score\" placeholder=\"Marks/Grade obtained\" ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Score Type *</ion-label>\n          <ion-select formControlName=\"score_type\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of scoreTypes\" [value]=\"item\" >{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        <!------------------>\n\n        \n      </ion-list>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createEduDetailForm.valid\">SAVE DETAIL</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-study-area/select-study-area.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-study-area/select-study-area.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilityComponentsSelectStudyAreaSelectStudyAreaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select Study Area</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search Study Areas\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Study Areas...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n  <!------- Empty View ------->\n  <ion-grid style=\"width:100%;height: 100%;display:block;align-content: center;\" *ngIf=\"listing?.length == 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-icon src=\"./assets/sample-icons/side-menu/study_area.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Study Area found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n  <ion-list class=\"\" *ngIf=\"listing?.length > 0 && !loading\">     \n    <ion-item class=\"list-item\" *ngFor=\"let item of listing\" (click)=\"dismissModal(item)\">\n      <ion-row class=\"user-row\">\n\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h5 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n \n\n</ion-item>\n </ion-list>\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\">\n      <ion-button class=\"select-variant-btn\" color=\"primary\" expand=\"block\" fill=\"solid\" (click)=\"openSizeChooser()\">SELECT</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/user/education-details/create/create-education-details.modal.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user/education-details/create/create-education-details.modal.ts ***!
    \*********************************************************************************/

  /*! exports provided: CreateEducationDetailsModal */

  /***/
  function srcAppUserEducationDetailsCreateCreateEducationDetailsModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEducationDetailsModal", function () {
      return CreateEducationDetailsModal;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _education_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../education-details.model */
    "./src/app/user/education-details/education-details.model.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../utility-components/select-study-area/select-study-area.page */
    "./src/app/utility-components/select-study-area/select-study-area.page.ts");

    var CreateEducationDetailsModal =
    /*#__PURE__*/
    function () {
      function CreateEducationDetailsModal(modalController, alertController, firebaseService, masterService, authService, storageService, toastService, loadingController, route, router) {
        _classCallCheck(this, CreateEducationDetailsModal);

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

      _createClass(CreateEducationDetailsModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.initializeForm();
          this.onHandleFormChanges();
          this.scoreTypes = ["Percent", "Grade"];
          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;
            _this.profilerID = _this.user_id;

            _this.createEduDetailForm.controls.user_id.patchValue(_this.profilerID);
          });
          this.masterService.getEducationLevels().subscribe(function (thisLevels) {
            if (thisLevels) {
              _this.eduLevels = thisLevels.result;
              console.log("/********* Got Education Levels **********/ => " + JSON.stringify(_this.eduLevels));

              _this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].EDU_LEVELS, thisLevels.result);

              _this.eduLevels.map(function (eduLevel) {//Waiting to do something on getting First Master Data
                //this.updateEduDetailForm.controls.level_id.patchValue(this.eduLevels[0].id);
              });
            }
          });
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
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
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "selectStudyArea",
        value: function selectStudyArea() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _utility_components_select_study_area_select_study_area_page__WEBPACK_IMPORTED_MODULE_12__["SelectStudyAreaPage"],
                      componentProps: {
                        'multiple': false,
                        'selected_education_level': this.selected_education_level
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (avatar) {
                      if (avatar.data != null) {
                        _this2.createEduDetailForm.patchValue({
                          study_area: avatar.data.id,
                          study_area_name: avatar.data.title
                        });

                        _this2.createEduDetailForm.get('study_area').updateValueAndValidity();

                        _this2.createEduDetailForm.get('study_area_name').updateValueAndValidity();
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this3 = this;

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
          this.authService.getAuthKey().then(function (apiKey) {
            _this3.firebaseService.callEduDetailsCreateAPI(apiKey, _this3.user).subscribe(function (res) {
              _this3.loadingController.dismiss();

              console.log('########## API Response ########### ' + JSON.stringify(res));
              _this3.updateResult = res;

              if (!res.error) {
                /********** NAVIGATE WITH USER ID **********/
                _this3.dismissModal();

                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].DEV_MODE) {
                  console.log('########## API Successful ########### ' + JSON.stringify(res));
                }

                _this3.firebaseService.getEduDataSource(_this3.localUser.api_key, _this3.localUser.id).subscribe(function (results) {
                  _this3.firebaseService.invokeEduListChangeEvent.next(results);
                });

                _this3.toastService.presentToast(res.message);

                _this3.router.navigate(['/education-details/listing', _this3.user_id]);
              } else {
                _this3.presentAlert(res.message);
              }
            }, function (error) {
              _this3.loadingController.dismiss();

              _this3.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
          });
        }
      }, {
        key: "onEduLevelSelected",
        value: function onEduLevelSelected(e) {
          this.selected_education_level = e.target.value;
        }
      }, {
        key: "onCurrentOptionSelected",
        value: function onCurrentOptionSelected(e) {
          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_11__["AuthConstants"].DEV_MODE) {
            console.log("onCurrentOptionSelected: " + e.target.value);
          }

          this.currentlyStudying = !this.currentlyStudying;

          if (!this.currentlyStudying) {
            this.studyStatus = 'Already passed out.'; //this.updateEduDetailForm.addControl('yop', new FormControl(''));
          } else {
            this.studyStatus = 'Currently Persuing.'; //this.updateEduDetailForm.removeControl('yop');
          }
        }
      }, {
        key: "onHandleFormChanges",
        value: function onHandleFormChanges() {
          var _this4 = this;

          this.createEduDetailForm.get("is_current").valueChanges.subscribe(function (val) {
            if (val) {
              _this4.createEduDetailForm.get('yop').clearValidators();

              _this4.createEduDetailForm.get('yop').updateValueAndValidity();
            } else {
              _this4.createEduDetailForm.get('yop').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]);

              _this4.createEduDetailForm.get('yop').updateValueAndValidity();
            }
          });
          this.createEduDetailForm.valueChanges.subscribe(function (val) {
            console.log("/********* onHandleFormChanges **********/");
            var yoj = val.yoj;
            var yop = val.yop;
            var score = val.score;

            if (yop && yoj) {
              if (yop < yoj) {
                _this4.presentAlert("Year of passing must be after the year of joining.");
              }
            }

            var score_type = val.score_type;

            if (score_type && !score) {
              if (score_type == "Grade" && !score) {
                _this4.presentAlert("Please enter the grade you obtained.");
              } else {
                if (score_type == "Percent" && !score) {
                  _this4.presentAlert("Please enter the percentage you obtained.");
                }
              }
            }
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    return _context2.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      duration: 5000,
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.createEduDetailForm.get('jobAreas');
        }
      }]);

      return CreateEducationDetailsModal;
    }();

    CreateEducationDetailsModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CreateEducationDetailsModal.prototype, "user_id", void 0);
    CreateEducationDetailsModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-education-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-education-details.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/education-details/create/create-education-details.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/create.modal.scss */
      "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles//create.shell.scss */
      "./src/app/bluspecstyles/create.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CreateEducationDetailsModal);
    /***/
  },

  /***/
  "./src/app/utility-components/select-study-area/select-study-area.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/utility-components/select-study-area/select-study-area.page.ts ***!
    \********************************************************************************/

  /*! exports provided: SelectStudyAreaPage */

  /***/
  function srcAppUtilityComponentsSelectStudyAreaSelectStudyAreaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectStudyAreaPage", function () {
      return SelectStudyAreaPage;
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


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");

    var SelectStudyAreaPage =
    /*#__PURE__*/
    function () {
      function SelectStudyAreaPage(navCtrl, masterService, storageService, modalController, authService) {
        var _this5 = this;

        _classCallCheck(this, SelectStudyAreaPage);

        this.navCtrl = navCtrl;
        this.masterService = masterService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.authService = authService;
        this.multiple = false;
        this.loading = true;
        this.selectedSkills = new Array();
        this.authService.getAuthCache().then(function (promisedValue) {
          _this5.localUser = promisedValue;
        });
      }

      _createClass(SelectStudyAreaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.addSkillsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__["CheckboxCheckedValidator"].minSelectedCheckboxes(1))
          });
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].STUDY_AREAS).then(function (allList) {
            if (allList) {
              _this6.listing = allList;
              _this6.filtered_listing = allList;
              _this6.loading = false;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                console.log("All Study Areas : " + JSON.stringify(allList));
              }

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                console.log("Selected_education_level : " + _this6.selected_education_level + " among " + allList.length);
              }

              if (_this6.selected_education_level > 0) {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                  console.log("Filtering for Single Area : " + _this6.selected_education_level + " among " + allList.length);
                }

                allList = allList.filter(function (item) {
                  return item.education_level === _this6.selected_education_level;
                });
                _this6.listing = allList;
                _this6.filtered_listing = allList;

                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].DEV_MODE) {
                  console.log("Total Filtered : " + allList.length);
                }

                _this6.listing.map(function (item) {
                  _this6.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
                });
              }
            }
          });
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this7 = this;

          this.loading = true;
          this.masterService.getSkills().subscribe(function (allData) {
            _this7.loading = false;

            if (allData) {
              _this7.listing = allData.result;
              _this7.filtered_listing = allData.result;
            }
          });
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
          var _this8 = this;

          this.initializeItems();
          this.listing = this.listing.filter(function (thisJob) {
            return thisJob.title.toLowerCase().indexOf(_this8.searchQuery.toLowerCase()) > -1;
          });
          this.updateFormArrayDisplay();
        }
      }, {
        key: "updateFormArrayDisplay",
        value: function updateFormArrayDisplay() {
          var _this9 = this;

          var control = this.addSkillsForm.controls.skills;

          for (var i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
          }

          this.listing.map(function (item) {
            _this9.addSkillsForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
          });
        }
        /****************** SEARCH ITEMS ********************/

      }, {
        key: "dismissModal",
        value: function dismissModal(item) {
          //alert(item.title+" "+this.multiple);
          this.modalController.dismiss(item);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "containsObject",
        value: function containsObject(obj, list) {
          if (list && list.length > 0) {
            var i;

            for (i = 0; i < list.length; i++) {
              if (list[i].id === obj.id) {
                return true;
              }
            }
          }

          return false;
        }
      }, {
        key: "onJobSkillSelected",
        value: function onJobSkillSelected(thisSkill) {
          if (this.containsObject(thisSkill, this.selectedSkills)) {
            console.log("#####: Exists Already ");
          } else {
            this.selectedSkills.push(thisSkill);
            console.log("#####: Doesnt Exist ");
          }

          console.log("#####: FINAL SELECTION =>  " + JSON.stringify(this.selectedSkills));
        }
      }, {
        key: "processMultipleSelection",
        value: function processMultipleSelection() {
          var displayNames = Array.prototype.map.call(this.selectedSkills, function (item) {
            return item.title;
          }).join(", ");
          this.displayIDs = Array.prototype.map.call(this.selectedSkills, function (s) {
            return s.id;
          }).toString();
          console.log("#####: FINAL displayNames =>  " + displayNames);
          console.log("#####: FINAL displayIDs =>  " + this.displayIDs);
          var resultArr = [];
          resultArr["id"] = this.displayIDs;
          resultArr["title"] = displayNames;
          this.modalController.dismiss(resultArr);
        }
      }, {
        key: "isSkillSelected",
        value: function isSkillSelected(id) {
          this.selectedSkills.forEach(function (element) {
            if (element.id == id) {
              return true;
            }
          });
          return false;
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.addSkillsForm.get('skills');
        }
      }]);

      return SelectStudyAreaPage;
    }();

    SelectStudyAreaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SelectStudyAreaPage.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], SelectStudyAreaPage.prototype, "selected_education_level", void 0);
    SelectStudyAreaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-study-area',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-study-area.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-study-area/select-study-area.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], SelectStudyAreaPage);
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
//# sourceMappingURL=default~profile-user-profile-module~user-education-details-education-details-integration-module~user~9c8810c2-es5.js.map