function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~user-listing-listing-module~user-users-integration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create-user.modal.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create-user.modal.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserCreateCreateUserModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"create-user-form ion-page\" [formGroup]=\"createUserForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Create New Account</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"3\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n  \n          <app-image-shell *ngIf=\"preview ===''\" [mode]=\"'cover'\" class=\"user-image\" [src]=\"'./assets/images/avatar.jpg'\"></app-image-shell>\n          <app-image-shell *ngIf=\"preview !=''\" [mode]=\"'cover'\" class=\"user-image\" [src]=\"preview\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"fileInput.click()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <div class=\"form-group\" style=\"display:none;\">\n          <input type=\"file\" (change)=\"uploadFile($event)\" #fileInput>\n        </div>\n\n  <!------------ Progress Bar ----------->\n  <div class=\"progress form-group\" *ngIf=\"percentDone\">\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\n      [style.width.%]=\"percentDone\">\n    </div>\n  </div>\n\n  <!-- File Input -->\n  <div class=\"form-group\" style=\"display: none;\">\n    <input type=\"file\" accept=\"image/*\" (change)=\"uploadFile($event)\" #fileInput>\n  </div>\n\n  <ion-item class=\"input-item\">\n    <ion-label position=\"floating\">Select User Role *</ion-label>\n    <ion-select formControlName=\"role_id\" cancelText=\"Cancel\" okText=\"OK\">\n      <ion-select-option *ngFor=\"let item of user_roles\" [value]=\"item?.id\" >{{item?.title}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class=\"input-item\">\n    <ion-label color=\"secondary\" position=\"floating\">First Name *</ion-label>\n    <ion-input type=\"text\" formControlName=\"first_name\" required></ion-input>\n  </ion-item>\n  <ion-item class=\"input-item\">\n    <ion-label color=\"secondary\" position=\"floating\">Last Name</ion-label>\n    <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n  </ion-item>\n  <ion-item class=\"input-item\">\n    <ion-label color=\"secondary\" position=\"floating\">Date of Birth *</ion-label>\n    <ion-datetime [max]=\"maxDOBYear\" display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"dob\"></ion-datetime>\n  </ion-item>\n\n  <div class=\"error-container\">\n    <ng-container *ngFor=\"let validation of validations.email\">\n      <div class=\"error-message\" *ngIf=\"createUserForm.get('dob').hasError(validation.type) && (createUserForm.get('dob').dirty || createUserForm.get('dob').touched)\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ validation.message }}</span>\n      </div>\n    </ng-container>\n  </div>\n\n  <ion-item class=\"input-item\">\n    <ion-label color=\"secondary\" position=\"floating\">Mobile number *</ion-label>\n    <ion-input type=\"tel\" formControlName=\"mobile\" required></ion-input>\n  </ion-item>\n\n  <div class=\"error-container\">\n    <ng-container *ngFor=\"let validation of validations.mobile\">\n      <div class=\"error-message\" *ngIf=\"createUserForm.get('mobile').hasError(validation.type) && (createUserForm.get('mobile').dirty || createUserForm.get('mobile').touched)\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ validation.message }}</span>\n      </div>\n    </ng-container>\n  </div>\n  \n  <ion-item class=\"input-item\">\n    <ion-label color=\"secondary\" position=\"floating\">Email *</ion-label>\n    <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n  </ion-item>\n\n  <div class=\"error-container\">\n    <ng-container *ngFor=\"let validation of validations.email\">\n      <div class=\"error-message\" *ngIf=\"createUserForm.get('email').hasError(validation.type) && (createUserForm.get('email').dirty || createUserForm.get('email').touched)\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ validation.message }}</span>\n      </div>\n    </ng-container>\n  </div>\n\n  <ion-item class=\"input-item\">\n    <ion-label position=\"floating\">Select Country *</ion-label>\n    <ion-input type=\"text\" formControlName=\"country\" (click)=\"openSelectCountry()\" readonly></ion-input>\n  </ion-item>\n\n\n  <ion-input type=\"hidden\" formControlName=\"status\"></ion-input>\n  <ion-input type=\"hidden\" formControlName=\"city\"></ion-input>\n  <ion-input type=\"hidden\" formControlName=\"address\"></ion-input>\n  <ion-input type=\"hidden\" formControlName=\"latitude\"></ion-input>\n  <ion-input type=\"hidden\" formControlName=\"longitude\"></ion-input>\n\n\n  <ion-item class=\"input-item terms-item\">\n    <ion-label>Auto-generate my password.</ion-label>\n    <ion-checkbox formControlName=\"autogen_pass\"></ion-checkbox>\n  </ion-item>\n\n\n  \n           <!-------- Password Optional------>\n           <div *ngIf=\"!isAutogeneratePassword\" style=\"margin:20px 0 8px 0;\">\n            <ion-label class=\"header-title\" style=\"margin:8px 0 8px 0;color:#444444;\">Enter a password to login into your account.</ion-label>\n        \n            \n              <div formGroupName=\"matching_passwords\">\n                <ion-item class=\"input-item\">\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                </ion-item>\n                <div class=\"error-container\">\n                  <ng-container *ngFor=\"let validation of validations.password\">\n                    <div class=\"error-message\" *ngIf=\"createUserForm.get('matching_passwords').get('password').hasError(validation.type) && (createUserForm.get('matching_passwords').get('password').dirty || createUserForm.get('matching_passwords').get('password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon>\n                      <span>{{ validation.message }}</span>\n                    </div>\n                  </ng-container>\n                </div>\n        \n                <ion-item class=\"input-item\">\n                  <ion-label position=\"floating\">Confirm Password</ion-label>\n                  <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n                </ion-item>\n                <div class=\"error-container\">\n                  <ng-container *ngFor=\"let validation of validations.confirm_password\">\n                    <div class=\"error-message\" *ngIf=\"createUserForm.get('matching_passwords').get('confirm_password').hasError(validation.type) && (createUserForm.get('matching_passwords').get('confirm_password').dirty || createUserForm.get('matching_passwords').get('confirm_password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon>\n                      <span>{{ validation.message }}</span>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n              <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validations.matching_passwords\">\n                  <div class=\"error-message\" *ngIf=\"createUserForm.get('matching_passwords').hasError(validation.type) && (createUserForm.get('matching_passwords').get('confirm_password').dirty || createUserForm.get('matching_passwords').get('confirm_password').touched)\">\n                    <ion-icon name=\"information-circle-outline\"></ion-icon>\n                    <span>{{ validation.message }}</span>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          <!------- Ends Password Entry ------>\n\n  <ion-item class=\"input-item terms-item\">\n    <ion-label>Notify user about this new account via Email.</ion-label>\n    <ion-checkbox formControlName=\"notify_account\"></ion-checkbox>\n  </ion-item>\n\n      </ion-list>\n    \n      \n      \n\n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createUserForm.valid\">REGISTER ACCOUNT</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./src/app/user/create/create-user.modal.ts":
  /*!**************************************************!*\
    !*** ./src/app/user/create/create-user.modal.ts ***!
    \**************************************************/

  /*! exports provided: CreateUserModal */

  /***/
  function srcAppUserCreateCreateUserModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserModal", function () {
      return CreateUserModal;
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


    var _services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../profile/user-profile.model */
    "./src/app/user/profile/user-profile.model.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _validators_password_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../validators/password.validator */
    "./src/app/validators/password.validator.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../utility-components/select-country/select-country.page */
    "./src/app/utility-components/select-country/select-country.page.ts");

    var CreateUserModal =
    /*#__PURE__*/
    function () {
      function CreateUserModal(modalController, firebaseService, authService, masterService, toastService, utilsService, alertController, storageService, loadingController, router) {
        _classCallCheck(this, CreateUserModal);

        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.masterService = masterService;
        this.toastService = toastService;
        this.utilsService = utilsService;
        this.alertController = alertController;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.router = router;
        this.userData = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_8__["UserProfileModel"]();
        this.preview = '';
        this.isAutogeneratePassword = true;
        this.selectedGrafterType = 1;
        this.selectedRole = 3;
        this.validations = {
          'first_name': [{
            type: 'required',
            message: 'First name is required.'
          }, {
            type: 'minLength',
            message: 'First name appears to be too small.'
          }, {
            type: 'maxLength',
            message: 'First name can not exceed 20 characters.'
          }],
          'last_name': [{
            type: 'required',
            message: 'Last name is required.'
          }, {
            type: 'minLength',
            message: 'Last name appears to be too small.'
          }, {
            type: 'maxLength',
            message: 'Last name can not exceed 20 characters.'
          }],
          'email': [{
            type: 'required',
            message: 'Email address is required.'
          }, {
            type: 'pattern',
            message: 'Enter a valid email address.'
          }],
          'mobile': [{
            type: 'required',
            message: 'Please enter your mobile number.'
          }, {
            type: 'minlength',
            message: 'Mobile number must be at least 9 digits long.'
          }, {
            type: 'maxlength',
            message: 'Mobile number must not exceed 12 digits.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must be at least 6 characters long.'
          }],
          'confirm_password': [{
            type: 'required',
            message: 'Password confirmation is required.'
          }],
          'matching_passwords': [{
            type: 'areNotEqual',
            message: 'Password mismatch. Please check your password again.'
          }]
        };
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        this.maxDOBYear = year - 16;
      }

      _createClass(CreateUserModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.user_roles = [{
            "id": 2,
            "title": "Employer"
          }, {
            "id": 3,
            "title": "Grafter"
          }];
          this.userData.user_image = 'https://bluspec.app/uploads/images/defaults/avatar.jpg';
          this.authService.getAuthCache().then(function (promisedValue) {
            _this.localUser = promisedValue;
            _this.api_key = _this.localUser.api_key;

            if (_this.localUser != null && _this.localUser.role_id !== 1) {
              _this.toastService.presentToast("You are not authorized to access this screen.");

              _this.router.navigate(['/auth/login']);
            } //this.createUserForm.patchValue({user_id:this.localUser.id});

          });
          this.buildPasswordFormGroup();
          this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            //country : new FormControl(''),
            user_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            autogen_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            matching_passwords: this.matching_passwords_group,
            grafter_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('1'),
            role_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Pending'),
            notify_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('1')
          });
          this.onHandleFormChanges();
        }
      }, {
        key: "buildPasswordFormGroup",
        value: function buildPasswordFormGroup() {
          var _this2 = this;

          this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          }, function (formGroup) {
            if (!_this2.isAutogeneratePassword) {
              return _validators_password_validator__WEBPACK_IMPORTED_MODULE_11__["PasswordValidator"].areNotEqual(formGroup);
            }
          });
        }
      }, {
        key: "onHandleFormChanges",
        value: function onHandleFormChanges() {
          var _this3 = this;

          var matchingPasswordsControl = this.createUserForm.get('matching_passwords');
          this.createUserForm.valueChanges.subscribe(function (val) {
            _this3.isAutogeneratePassword = val.autogen_pass;

            if (_this3.isAutogeneratePassword) {
              matchingPasswordsControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator);
              matchingPasswordsControl.get('password').clearValidators();
              matchingPasswordsControl.get('confirm_password').clearValidators();
            } else {
              _this3.buildPasswordFormGroup();
            }
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var _this4 = this;

          this.presentLoadingWithOptions();
          this.userData.first_name = this.createUserForm.value.first_name;
          this.userData.last_name = this.createUserForm.value.last_name; //this.userData.dob = dayjs(this.createUserForm.value.dob).unix(); // save it in timestamp

          this.userData.dob = this.createUserForm.value.dob;
          this.userData.mobile = this.createUserForm.value.mobile;
          this.userData.email = this.createUserForm.value.email;
          this.userData.role_id = this.createUserForm.value.role_id;
          this.userData.grafter_type = this.createUserForm.value.grafter_type;
          this.userData.address = this.createUserForm.value.address;
          this.userData.country = this.createUserForm.value.country; //this.userData.city = this.createUserForm.value.city;

          this.userData.autogen_pass = this.createUserForm.value.autogen_pass;
          console.log("DOB Value here: " + this.userData.dob);
          this.userData.dob = this.utilsService.splitTimestampFromDate(this.userData.dob);

          if (this.utilsService.isValidDate(this.userData.dob)) {//alert("All right"+this.userData.dob);
          } else {
            var formattedVal = this.utilsService.formatTheDate(this.userData.dob);
            this.createUserForm.controls.dob.patchValue(formattedVal);
            this.userData.dob = formattedVal; //console.log("DOB formatted from "+this.userData.dob+" to "+formattedVal);
          }

          console.log("And DOB Value here: " + this.createUserForm.value.dob);
          this.userData.user_image = this.preview; //This takes HttpEvent<any>

          var postData = {
            first_name: this.userData.first_name,
            last_name: this.userData.last_name,
            dob: this.userData.dob,
            mobile: this.userData.mobile,
            email: this.userData.email,
            role_id: this.userData.role_id,
            grafter_type: this.userData.grafter_type,
            address: this.userData.address,
            country: this.userData.country,
            autogen_pass: this.userData.autogen_pass,
            user_image: this.preview
          };
          console.log("USER CREATE PARAMS: " + JSON.stringify(postData));
          this.firebaseService.callRegistrationAPI(this.api_key, postData).subscribe(function (event) {
            _this4.loadingController.dismiss();

            console.log('########## User Create Result #####: ' + JSON.stringify(event)); //alert('########## Company Create Result #####: '+JSON.stringify(event));

            /*
            console.log('########## TESTING 001 #####: '+event.type);
            switch (event.type) {
              case HttpEventType.Sent:
                console.log('Request has been made!');
                break;
              case HttpEventType.ResponseHeader:
                console.log('Response header has been received!');
                break;
              case HttpEventType.UploadProgress:
                this.percentDone = Math.round(event.loaded / event.total * 100);
                console.log(`Uploaded! ${this.percentDone}%`);
                break;
              case HttpEventType.Response:
                console.log('User successfully created!', event.body);
                this.percentDone = false;
                this.loadingController.dismiss();
               
                console.log('########## TESTING CHECK #####: '+JSON.stringify(event.body));
                if (!event.body.error) {
                  this.dismissModal();
                  this.firebaseService.addItemToLocal(this.userData);
                  this.router.navigate(['/companies/details', event.body.id]);
                  } else {
                    this.presentAlert(event.body.message);
                  }
            }
            */

            if (!event.error) {
              _this4.dismissModal();

              _this4.firebaseService.addItemToLocal(_this4.userData);

              _this4.toastService.presentToast(event.message);
              /********** NAVIGATE WITH USER ID **********/
              //this.router.navigate(['/people/listing']);
              //user_id
              //this.router.navigate(['/people/view-profile', event.id]);


              _this4.router.navigate(['/people/details', event.username]);
            } else {
              _this4.presentAlert(event.message);
            }
          }, function (error) {
            _this4.loadingController.dismiss();

            _this4.presentAlert('Looks like there is a Network Issue.' + error.message);
          });
        }
      }, {
        key: "validateDOB",
        value: function validateDOB(e) {
          console.log("DOB get=> " + e);
          var year = new Date(e).getFullYear();
          var today = new Date().getFullYear();
          console.log("DOB year=> " + year);

          if (today - year >= 100) {
            console.log("DOB today=> " + today);
          }
        } // Image Preview

      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this5 = this;

          var file = event.target.files[0];
          this.createUserForm.patchValue({
            user_image: file
          });
          this.createUserForm.get('user_image').updateValueAndValidity();
          console.log("uploadFile() " + this.createUserForm.value); // File Preview

          var reader = new FileReader();

          reader.onload = function () {
            _this5.preview = reader.result;
            console.log("uploadFile() got preview: " + _this5.preview);
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "openSelectCountry",
        value: function openSelectCountry() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_13__["SelectCountryPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        _this6.createUserForm.controls.country.patchValue(item.data);
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
                      animated: true,
                      spinner: "bubbles",
                      message: 'Registering Account...',
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
      }]);

      return CreateUserModal;
    }();

    CreateUserModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    CreateUserModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-user.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create-user.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/create-user.modal.scss */
      "./src/app/user/create/styles/create-user.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/create-user.shell.scss */
      "./src/app/user/create/styles/create-user.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], CreateUserModal);
    /***/
  },

  /***/
  "./src/app/user/create/styles/create-user.modal.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/create/styles/create-user.modal.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserCreateStylesCreateUserModalScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.create-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jcmVhdGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVzZXJcXGNyZWF0ZVxcc3R5bGVzXFxjcmVhdGUtdXNlci5tb2RhbC5zY3NzIiwic3JjL2FwcC91c2VyL2NyZWF0ZS9zdHlsZXMvY3JlYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvdXNlci9jcmVhdGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FER0U7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUNESjs7QURFSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURDTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNDUjs7QURHSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZOOztBRElNO0VBQ0UsZUFBQTtBQ0ZSOztBRE9FO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ0xKOztBRE9JO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNMTjs7QURVSTtFQUNFLCtCQUFBO0FDUk47O0FEV0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ1ROOztBRGNJO0VBQ0UsK0RBQUE7RUVwRUosMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUR5REY7O0FDdkRDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRHdESjs7QUN0REk7RUFDRCx1QkFBQTtBRHdESDs7QUNyREU7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEdUROOztBQ3BESTtFQUNFLFlBQUE7QURzRE47O0FDcERNO0VBRUUsVUFBQTtBRHFEUjs7QUNqREU7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRG1ETjs7QUNoREU7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FEZ0RIOztBRHRCTTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUN3QlI7O0FEcEJNO0VBQ0UsMkNBQUE7QUNzQlI7O0FEcEJRO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsMERBQUE7QUNzQlY7O0FEcEJVO0VBQ0Usd0NBQUE7QUNzQlo7O0FEZkU7RUFDRSxtQkFBQTtBQ2lCSjs7QURmSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDZU47O0FEYk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7QUNlUjs7QURiUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNlVjs7QURaUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNjVjs7QURWTTtFQUVFLCtDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ1VSOztBREpBO0VBQ0UsdURBQUE7RUFFQSxxQ0FBQTtBQ01GOztBREpFO0VBQ0UsV0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jcmVhdGUvc3R5bGVzL2NyZWF0ZS11c2VyLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcblxuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLnNlbGVjdC11c2VyLWltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuICAgIC51c2VyLWltYWdlLWNvbCB7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICBoZWlnaHQ6IDRjaDtcbiAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtZmllbGRzIHtcbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgICAuY2hlY2tib3gtdGFncyB7XG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cbiAgICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXG4gICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtZmllbGRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgLnJhbmdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBtYXJnaW46IDBweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/create/styles/create-user.shell.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/create/styles/create-user.shell.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserCreateStylesCreateUserShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jcmVhdGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVzZXJcXGNyZWF0ZVxcc3R5bGVzXFxjcmVhdGUtdXNlci5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL2NyZWF0ZS9zdHlsZXMvY3JlYXRlLXVzZXIuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NyZWF0ZS9zdHlsZXMvY3JlYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/validators/password.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/validators/password.validator.ts ***!
    \**************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PasswordValidator =
    /*#__PURE__*/
    function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "areNotEqual",
        // If our validation fails, we return an object with a key for the error name and a value of true.
        // Otherwise, if the validation passes, we simply return null because there is no error.
        value: function areNotEqual(formGroup) {
          var val;
          var valid = true;

          for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
              var control = formGroup.controls[key];

              if (val === undefined) {
                val = control.value;
              } else {
                if (val !== control.value) {
                  valid = false;
                  break;
                }
              }
            }
          }

          if (valid) {
            return null;
          }

          return {
            areNotEqual: true
          };
        }
      }]);

      return PasswordValidator;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~user-listing-listing-module~user-users-integration-module-es5.js.map