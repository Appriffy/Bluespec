function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-work-experiences-work-experiences-integration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/create/create-work-experiences.modal.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/create/create-work-experiences.modal.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserWorkExperiencesCreateCreateWorkExperiencesModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"update-user-form ion-page\" [formGroup]=\"createEduDetailForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page_title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n   \n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Company Name *</ion-label>\n          <ion-input type=\"text\" formControlName=\"company\" placeholder=\"Name of the company you worked at\" ></ion-input>\n\n        </ion-item>\n  \n        \n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Designation *</ion-label>\n          <ion-input type=\"text\" formControlName=\"designation\" placeholder=\"Your designation or Job title\" ></ion-input>\n        </ion-item>\n       \n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Joining Date *</ion-label>\n            <ion-datetime display-format=\"MMM DD, YYYY\" picker-format=\"YYYY-MM-DD\" formControlName=\"startDate\" required></ion-datetime>\n          </ion-item>\n  \n          <ion-item class=\"input-item\">\n            <ion-label class=\"toggle-label\">{{studyStatus}}</ion-label>\n            <ion-toggle color=\"secondary\" formControlName=\"current\" (ionChange)=\"onCurrentOptionSelected($event)\"></ion-toggle>\n          </ion-item>\n  \n          <ion-item class=\"input-item\" *ngIf=\"!currentlyStudying\">\n            <ion-label color=\"secondary\" position=\"floating\">Worked Untill *</ion-label>\n            <ion-datetime display-format=\"MMM DD, YYYY\" picker-format=\"YYYY-MM-DD\" formControlName=\"endDate\"></ion-datetime>\n          </ion-item>\n  \n          <ion-input *ngIf=\"currentlyStudying\" type=\"hidden\" formControlName=\"endDate\" ></ion-input>\n  \n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Role</ion-label>\n            <ion-input type=\"text\" formControlName=\"role\" placeholder=\"Describe your role (Optional)\" ></ion-input>\n          </ion-item>\n  \n          <!------------------>\n \n          <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n          <ion-input type=\"hidden\" formControlName=\"duration\"></ion-input>\n          <ion-input type=\"hidden\" formControlName=\"responsibility\"></ion-input>\n          <!------------------>\n        \n      </ion-list>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createEduDetailForm.valid\">SAVE DETAIL</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/update/update-work-experiences.modal.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/update/update-work-experiences.modal.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserWorkExperiencesUpdateUpdateWorkExperiencesModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"update-user-form ion-page\" [formGroup]=\"updateEduDetailForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page_title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n   \n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <!-- <p>{{updateEduDetailForm.value|json}}</p> -->\n\n         <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Company *</ion-label>\n          <ion-input type=\"text\" formControlName=\"company\" placeholder=\"Company name\" ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Designation *</ion-label>\n          <ion-input type=\"text\" formControlName=\"designation\" placeholder=\"Your designation or Job title\" ></ion-input>\n        </ion-item>\n       \n          <ion-item class=\"input-item\">\n            <ion-label color=\"secondary\" position=\"floating\">Joining Date *</ion-label>\n            <ion-datetime display-format=\"MMM DD, YYYY\" picker-format=\"YYYY-MM-DD\" formControlName=\"startDate\" required></ion-datetime>\n          </ion-item>\n  \n          <ion-item class=\"input-item\">\n            <ion-label class=\"toggle-label\">{{studyStatus}}</ion-label>\n            <ion-toggle color=\"secondary\" formControlName=\"current\" (ionChange)=\"onCurrentOptionSelected($event)\"></ion-toggle>\n          </ion-item>\n  \n          <ion-item class=\"input-item\" *ngIf=\"!currentlyWorking\">\n            <ion-label color=\"secondary\" position=\"floating\">Worked Untill * </ion-label>\n            <ion-datetime display-format=\"MMM DD, YYYY\" picker-format=\"YYYY-MM-DD\" formControlName=\"endDate\" required></ion-datetime>\n          </ion-item>\n\n        <ion-input *ngIf=\"currentlyWorking\" type=\"hidden\" formControlName=\"endDate\" [value]=\"\" ></ion-input>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Role</ion-label>\n          <ion-input formControlName=\"role\" placeholder=\"Describe your role at this company\" ></ion-input>\n        </ion-item>\n\n        <!------------------>\n        <ion-input type=\"hidden\" formControlName=\"id\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"responsibility\"></ion-input>\n        <!------------------>\n      </ion-list>\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"danger\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateEduDetailForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./src/app/services/utils.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/utils.service.ts ***!
    \*******************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      } // splitTimestampFromDate(event){
      //   let dataVal = event.target.value;
      //   if(dataVal.includes('T')){
      //   let formattedVal = dataVal.split('T')[0];
      //   return formattedVal;
      //   }
      //   return event;
      // }


      _createClass(UtilsService, [{
        key: "splitTimestampFromDate",
        value: function splitTimestampFromDate(dataVal) {
          if (dataVal.includes('T')) {
            var formattedVal = dataVal.split('T')[0];
            return formattedVal;
          }

          return dataVal;
        }
      }, {
        key: "isValidDate",
        value: function isValidDate(dateString) {
          try {
            var regEx = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateString.match(regEx)) return false; // Invalid format

            var d = new Date(dateString);
            var dNum = d.getTime();
            if (!dNum && dNum !== 0) return false; // NaN value, Invalid date

            return d.toISOString().slice(0, 10) === dateString;
          } catch (Exception) {
            return true;
          }
        }
      }, {
        key: "formatTheDate",
        value: function formatTheDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }]);

      return UtilsService;
    }();

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UtilsService);
    /***/
  },

  /***/
  "./src/app/user/work-experiences/create/create-work-experiences.modal.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/work-experiences/create/create-work-experiences.modal.ts ***!
    \*******************************************************************************/

  /*! exports provided: CreateWorkExperiencesModal */

  /***/
  function srcAppUserWorkExperiencesCreateCreateWorkExperiencesModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateWorkExperiencesModal", function () {
      return CreateWorkExperiencesModal;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _dbmodels_user_work_experience_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../dbmodels/user-work-experience.model */
    "./src/app/dbmodels/user-work-experience.model.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/utils.service */
    "./src/app/services/utils.service.ts");

    var CreateWorkExperiencesModal =
    /*#__PURE__*/
    function () {
      function CreateWorkExperiencesModal(modalController, alertController, firebaseService, masterService, authService, utilsService, toastService, loadingController, route, router) {
        _classCallCheck(this, CreateWorkExperiencesModal);

        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.user = new _dbmodels_user_work_experience_model__WEBPACK_IMPORTED_MODULE_10__["UserWorkExperienceModel"]();
        this.currentlyStudying = true;
        this.studyStatus = 'Currently working here.';
        this.moderateMode = false;
        this.page_title = "Add Work Experience";
      }

      _createClass(CreateWorkExperiencesModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.initializeForm(); //this.onHandleFormChanges(); 

          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue; // this.route.paramMap.subscribe(params => {
            //  if(params.has("id")){
            //   this.profilerID = params.get("id");
            //  }
            //   });

            _this.profilerID = _this.user_id;

            _this.createEduDetailForm.controls.user_id.patchValue(_this.profilerID);
          });
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          /************ CREATE UPDATE FORM ************/
          this.moderateMode = false;
          this.createEduDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            current: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentlyStudying),
            responsibility: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this2 = this;

          this.user.user_id = this.createEduDetailForm.value.user_id;
          this.user.company = this.createEduDetailForm.value.company;
          this.user.startDate = this.createEduDetailForm.value.startDate;
          this.user.endDate = this.createEduDetailForm.value.endDate;
          this.user.duration = "";
          this.user.role = this.createEduDetailForm.value.role;
          this.user.current = this.currentlyStudying ? true : false;
          this.user.responsibility = this.createEduDetailForm.value.responsibility;
          this.user.designation = this.createEduDetailForm.value.designation;

          if (this.user.startDate !== null && this.user.startDate != "") {
            this.utilsService.splitTimestampFromDate(this.user.startDate);

            if (this.utilsService.isValidDate(this.user.startDate)) {} else {
              var formattedVal = this.utilsService.formatTheDate(this.user.startDate);
              this.createEduDetailForm.controls.startDate.patchValue(formattedVal);
              console.log("Startdate formatted from " + this.user.startDate + " to " + formattedVal);
            }

            this.user.startDate = this.createEduDetailForm.value.startDate;
          }

          if (this.user.endDate !== null && this.user.endDate != "") {
            this.utilsService.splitTimestampFromDate(this.user.endDate);

            if (this.utilsService.isValidDate(this.user.endDate)) {} else {
              var _formattedVal = this.utilsService.formatTheDate(this.user.endDate);

              this.createEduDetailForm.controls.endDate.patchValue(_formattedVal);
              console.log("EndDate formatted from " + this.user.endDate + " to " + _formattedVal);
            }

            this.user.endDate = this.createEduDetailForm.value.endDate;
          }

          if (this.user.startDate && this.user.endDate && !this.user.current) {
            if (this.user.startDate > this.user.endDate) {
              this.presentAlert("Year of leaving must be after the year of joining."); //this.loadingController.dismiss();

              return;
            }
          }

          this.presentLoadingWithOptions();
          this.authService.getAuthKey().then(function (apiKey) {
            _this2.firebaseService.callWorkExperienceCreateAPI(apiKey, _this2.user).subscribe(function (res) {
              _this2.loadingController.dismiss();

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                console.log('########## API Response ########### ' + JSON.stringify(res));
              }

              if (!res.error) {
                /********** NAVIGATE WITH USER ID **********/
                _this2.dismissModal();

                _this2.toastService.presentToast(res.message);

                _this2.firebaseService.getWorkExperienceDataSource(_this2.localUser.api_key, _this2.user.user_id).subscribe(function (results) {
                  _this2.firebaseService.invokeWorkExperienceListChangeEvent.next(results);

                  if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                    console.log('########## SYNC ########### ' + JSON.stringify(results));
                  }
                });

                _this2.router.navigate(['/work-experiences/listing', _this2.user.user_id]);
              } else {
                _this2.presentAlert(res.message);
              }
            }, function (error) {
              _this2.loadingController.dismiss();

              _this2.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
          });
        }
      }, {
        key: "onCurrentOptionSelected",
        value: function onCurrentOptionSelected(e) {
          this.currentlyStudying = !this.currentlyStudying;

          if (!this.currentlyStudying) {
            this.studyStatus = 'Not working here currently.';
            this.createEduDetailForm.get('endDate').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            this.createEduDetailForm.get('endDate').updateValueAndValidity();
          } else {
            this.studyStatus = 'Currently working here.';
            this.createEduDetailForm.controls.endDate.patchValue("");
            this.createEduDetailForm.get('endDate').clearValidators();
            this.createEduDetailForm.get('endDate').updateValueAndValidity();

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
              console.log("onCurrentOptionSelected: " + e.target.value + " Cleared Validations");
            }
          }
        }
      }, {
        key: "onHandleFormChanges",
        value: function onHandleFormChanges() {
          var _this3 = this;

          this.createEduDetailForm.valueChanges.subscribe(function (val) {
            console.log("/********* onHandleFormChanges **********/");
            var startDate = val.startDate;
            var endDate = val.endDate;

            if (startDate && endDate) {
              if (startDate < endDate) {
                _this3.presentAlert("Year of leaving must be after the year of joining.");
              }
            }

            var is_current = val.is_current;

            if (is_current) {
              _this3.createEduDetailForm.get('endDate').clearValidators();

              _this3.createEduDetailForm.get('endDate').updateValueAndValidity();
            } else {
              _this3.createEduDetailForm.get('endDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]);

              _this3.createEduDetailForm.get('endDate').updateValueAndValidity();
            }
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    return _context.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "formatStartDate",
        value: function formatStartDate(event) {
          var dataVal = event.target.value;
          var formattedVal = dataVal.split('T')[0];
          this.createEduDetailForm.controls.startDate.patchValue(formattedVal); //alert(dataVal);
        }
      }, {
        key: "formatEndDate",
        value: function formatEndDate(event) {
          var dataVal = event.target.value;
          var formattedVal = dataVal.split('T')[0];
          this.createEduDetailForm.controls.endDate.patchValue(formattedVal); //alert(dataVal);
        }
      }]);

      return CreateWorkExperiencesModal;
    }();

    CreateWorkExperiencesModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CreateWorkExperiencesModal.prototype, "user_id", void 0);
    CreateWorkExperiencesModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-work-experiences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-work-experiences.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/create/create-work-experiences.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/create.modal.scss */
      "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles//create.shell.scss */
      "./src/app/bluspecstyles/create.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CreateWorkExperiencesModal);
    /***/
  },

  /***/
  "./src/app/user/work-experiences/update/update-work-experiences.modal.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/work-experiences/update/update-work-experiences.modal.ts ***!
    \*******************************************************************************/

  /*! exports provided: UpdateWorkExperiencesModal */

  /***/
  function srcAppUserWorkExperiencesUpdateUpdateWorkExperiencesModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateWorkExperiencesModal", function () {
      return UpdateWorkExperiencesModal;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _dbmodels_user_work_experience_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../dbmodels/user-work-experience.model */
    "./src/app/dbmodels/user-work-experience.model.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/utils.service */
    "./src/app/services/utils.service.ts");

    var UpdateWorkExperiencesModal =
    /*#__PURE__*/
    function () {
      function UpdateWorkExperiencesModal(modalController, alertController, firebaseService, masterService, authService, utilsService, toastService, loadingController, router) {
        _classCallCheck(this, UpdateWorkExperiencesModal);

        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
        this.currentlyWorking = false;
        this.studyStatus = 'Currently Working here.';
        this.moderateMode = false;
        this.page_title = "Update Work Experience";
      }

      _createClass(UpdateWorkExperiencesModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.authService.getAuthCache().then(function (promisedValue) {
            if (promisedValue) {
              _this4.localUser = promisedValue;

              if (_this4.localUser !== undefined || _this4.localUser === null) {
                if (_this4.localUser.id == _this4.user.user_id) {
                  _this4.moderateMode = true;
                }
              }
            }
          });
          this.initializeForm();
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          /************ UPDATE FORM ************/
          this.page_title = "Update Work Experience";
          this.currentlyWorking = this.user.current;

          if (!this.currentlyWorking) {
            this.studyStatus = 'Not working here currently';
          } else {
            this.studyStatus = 'Currently Working here.';
          }

          this.updateEduDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.user_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.company, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.endDate),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.duration),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.role),
            current: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.current),
            responsibility: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.responsibility),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.designation, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)])
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var alertMsg, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    alertMsg = "Do you really want to delete your work experience at " + this.user.company + '?';

                    if (this.moderateMode) {
                      alertMsg = "Do you really want to delete this work experience entry?";
                    }

                    _context3.next = 4;
                    return this.alertController.create({
                      header: 'Confirm',
                      message: alertMsg,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this5.presentLoadingWithOptions();

                          var postData = {
                            'item_id': _this5.user.id
                          };

                          _this5.authService.getAuthKey().then(function (apiKey) {
                            _this5.firebaseService.deleteWorkExperienceItem(apiKey, postData).subscribe(function (res) {
                              _this5.loadingController.dismiss();

                              _this5.deleteResult = res;

                              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                                console.log('deleteResult# ' + JSON.stringify(_this5.deleteResult));
                                console.log('Verify Invoke ' + _this5.localUser.api_key + " <=> " + _this5.user.user_id);
                              }

                              if (res.error) {
                                _this5.presentAlert(res.message);
                              } else {
                                _this5.dismissModal();

                                _this5.firebaseService.getWorkExperienceDataSource(_this5.localUser.api_key, _this5.user.user_id).subscribe(function (results) {
                                  _this5.firebaseService.invokeWorkExperienceListChangeEvent.next(results);
                                });

                                _this5.router.navigate(['/work-experiences/listing/' + _this5.user.user_id]);
                              }
                            }, function (error) {
                              _this5.loadingController.dismiss();

                              _this5.presentAlert('Looks like there is a Network Issue.');
                            });
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context3.sent;
                    _context3.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
        /*
        onHandleFormChanges(): void {
          this.updateEduDetailForm.valueChanges.subscribe(val => {
              let startDate = val.startDate;
              let endDate =  val.endDate;
              if(startDate && endDate){
              if(startDate < endDate){
                this.presentAlert("Year of leaving must be after the year of joining.");
                }
              }
                  let is_current = val.is_current;
              if(is_current){
                this.updateEduDetailForm.get('endDate').clearValidators();
                this.updateEduDetailForm.get('endDate').updateValueAndValidity();
              }else{
                this.updateEduDetailForm.get('endDate').setValidators([Validators.required, Validators.maxLength(4)]);
                this.updateEduDetailForm.get('endDate').updateValueAndValidity();
              }
              });
        }*/

      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this6 = this;

          this.user.id = this.updateEduDetailForm.value.id;
          this.user.user_id = this.updateEduDetailForm.value.user_id;
          this.user.company = this.updateEduDetailForm.value.company;
          this.user.designation = this.updateEduDetailForm.value.designation;
          this.user.role = this.updateEduDetailForm.value.role;
          this.user.current = this.currentlyWorking ? true : false;
          this.user.responsibility = this.updateEduDetailForm.value.responsibility;
          this.user.startDate = this.updateEduDetailForm.value.startDate;
          this.user.endDate = this.updateEduDetailForm.value.endDate;

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
            console.log("Startdate Now => " + this.user.startDate);
          }

          this.user.startDate = this.utilsService.splitTimestampFromDate(this.updateEduDetailForm.value.startDate);

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
            console.log("Startdate Step 1 => " + this.user.startDate);
          }

          if (this.user.startDate !== "") {
            if (this.utilsService.isValidDate(this.user.startDate)) {
              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                console.log("Startdate Now Valid " + this.user.startDate);
              }
            } else {
              var formattedVal = this.utilsService.formatTheDate(this.user.startDate);
              this.updateEduDetailForm.controls.startDate.patchValue(formattedVal);

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                console.log("Startdate formatted from " + this.user.startDate + " to " + formattedVal);
              }

              this.user.startDate = formattedVal;
            }
          }

          if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
            console.log("EndDate now " + this.user.endDate + "");
          }

          if (this.user.endDate !== "") {
            this.user.endDate = this.utilsService.splitTimestampFromDate(this.user.endDate);

            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
              console.log("EndDate After Split " + this.user.endDate + "");
            }

            if (this.utilsService.isValidDate(this.user.endDate)) {} else {
              var formattedEndVal = this.utilsService.formatTheDate(this.user.endDate);
              this.updateEduDetailForm.controls.endDate.patchValue(formattedEndVal);
              this.user.endDate = formattedEndVal;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                console.log("ENDDATE formatted from " + this.user.endDate + " to " + formattedEndVal);
              }
            }
          }

          if (this.user.startDate && this.user.endDate && !this.user.current) {
            if (this.user.startDate > this.user.endDate) {
              this.presentAlert("Year of leaving your job must be after the year of joining.");
              return;
            }
          }

          this.presentLoadingWithOptions();
          this.authService.getAuthKey().then(function (apiKey) {
            _this6.firebaseService.callWorkExperienceUpdateAPI(apiKey, _this6.user).subscribe(function (res) {
              _this6.loadingController.dismiss();

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                console.log('########## Edu Update API Response ########### ' + JSON.stringify(res));
              }

              _this6.updateResult = res;

              if (!res.error) {
                /********** NAVIGATE WITH USER ID **********/
                _this6.dismissModal();

                _this6.firebaseService.getWorkExperienceDataSource(_this6.localUser.api_key, _this6.user.user_id).subscribe(function (results) {
                  if (results) {
                    _this6.firebaseService.invokeWorkExperienceListChangeEvent.next(results);
                  }
                });

                _this6.router.navigate(['/work-experiences/listing/' + _this6.user.user_id]);
              } else {
                _this6.presentAlert(res.message);
              }
            }, function (error) {
              _this6.loadingController.dismiss();

              _this6.presentAlert('Looks like there is a Network Issue.' + error.message);
            });
          });
        }
      }, {
        key: "onCurrentOptionSelected",
        value: function onCurrentOptionSelected(e) {
          //console.log("SWITCH "+e.target.value);
          this.currentlyWorking = !this.currentlyWorking;

          if (!this.currentlyWorking) {
            this.studyStatus = 'Not working here currently';
            this.updateEduDetailForm.get('endDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.updateEduDetailForm.get('endDate').updateValueAndValidity();
          } else {
            this.updateEduDetailForm.controls.endDate.patchValue("");
            this.studyStatus = 'Currently Working here.';
            this.updateEduDetailForm.get('endDate').clearValidators();
            this.updateEduDetailForm.get('endDate').updateValueAndValidity();
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                    return _context4.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return UpdateWorkExperiencesModal;
    }();

    UpdateWorkExperiencesModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_user_work_experience_model__WEBPACK_IMPORTED_MODULE_10__["UserWorkExperienceModel"])], UpdateWorkExperiencesModal.prototype, "user", void 0);
    UpdateWorkExperiencesModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-work-experiences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-work-experiences.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-experiences/update/update-work-experiences.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles/create.modal.scss */
      "./src/app/bluspecstyles/create.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../bluspecstyles//create.shell.scss */
      "./src/app/bluspecstyles/create.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], UpdateWorkExperiencesModal);
    /***/
  },

  /***/
  "./src/app/user/work-experiences/work-experiences-integration.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/user/work-experiences/work-experiences-integration.module.ts ***!
    \******************************************************************************/

  /*! exports provided: WorkExperiencesIntegrationModule */

  /***/
  function srcAppUserWorkExperiencesWorkExperiencesIntegrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkExperiencesIntegrationModule", function () {
      return WorkExperiencesIntegrationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _create_create_work_experiences_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create/create-work-experiences.modal */
    "./src/app/user/work-experiences/create/create-work-experiences.modal.ts");
    /* harmony import */


    var _update_update_work_experiences_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./update/update-work-experiences.modal */
    "./src/app/user/work-experiences/update/update-work-experiences.modal.ts");

    var firebaseRoutes = [// {
    //   path: 'listing',
    //   loadChildren: () => import('./education-details.module').then(m => m.EducationDetailsPageModule)
    // },
    {
      path: 'listing/:user_id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | work-experiences-module */
        [__webpack_require__.e("default~app-masters-job-skills-job-skills-integration-module~jobs-listing-job-filter-job-filter-modu~7e2dd6bc"), __webpack_require__.e("work-experiences-module")]).then(__webpack_require__.bind(null,
        /*! ./work-experiences.module */
        "./src/app/user/work-experiences/work-experiences.module.ts")).then(function (m) {
          return m.WorkExperiencesPageModule;
        });
      }
    }, {
      path: 'create',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./create/create-work-experiences.modal */
        "./src/app/user/work-experiences/create/create-work-experiences.modal.ts")).then(function (m) {
          return m.CreateWorkExperiencesModal;
        });
      }
    }, {
      path: 'details/:id',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./update/update-work-experiences.modal */
        "./src/app/user/work-experiences/update/update-work-experiences.modal.ts")).then(function (m) {
          return m.UpdateWorkExperiencesModal;
        });
      }
    }];

    var WorkExperiencesIntegrationModule = function WorkExperiencesIntegrationModule() {
      _classCallCheck(this, WorkExperiencesIntegrationModule);
    };

    WorkExperiencesIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes)],
      entryComponents: [_create_create_work_experiences_modal__WEBPACK_IMPORTED_MODULE_7__["CreateWorkExperiencesModal"], _update_update_work_experiences_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateWorkExperiencesModal"]],
      declarations: [_create_create_work_experiences_modal__WEBPACK_IMPORTED_MODULE_7__["CreateWorkExperiencesModal"], _update_update_work_experiences_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateWorkExperiencesModal"]]
    })], WorkExperiencesIntegrationModule);
    /***/
  }
}]);
//# sourceMappingURL=user-work-experiences-work-experiences-integration-module-es5.js.map