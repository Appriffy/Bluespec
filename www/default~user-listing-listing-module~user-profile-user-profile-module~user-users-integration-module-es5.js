function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~user-listing-listing-module~user-profile-user-profile-module~user-users-integration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/update/update-user.modal.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/update/update-user.modal.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUpdateUpdateUserModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"update-user-form ion-page\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update Profile</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"user?.user_image\" [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"primary\" (click)=\"fileInput.click()\" *ngIf=\"!user?.user_image\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"change-image-btn\" color=\"danger\" (click)=\"removeFile()\" *ngIf=\"user?.user_image\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n        <div class=\"form-group\" style=\"display: none;\">\n          <input type=\"file\" accept=\"image/*\" (change)=\"uploadFile($event)\" #fileInput>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">First Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"first_name\" required></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.first_name\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('first_name').hasError(validation.type) && (updateUserForm.get('first_name').dirty || updateUserForm.get('first_name').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Last Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.last_name\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('last_name').hasError(validation.type) && (updateUserForm.get('last_name').dirty || updateUserForm.get('last_name').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Date of Birth</ion-label>\n          <ion-datetime [max]=\"maxDOBYear\" display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"dob\"></ion-datetime>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Mobile number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"mobile\" required></ion-input>\n        </ion-item>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.mobile\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('mobile').hasError(validation.type) && (updateUserForm.get('mobile').dirty || updateUserForm.get('mobile').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\">\n          <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required readonly></ion-input>\n        </ion-item>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.email\">\n            <div class=\"error-message\" *ngIf=\"updateUserForm.get('email').hasError(validation.type) && (updateUserForm.get('email').dirty || updateUserForm.get('email').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item class=\"input-item\" style=\"display: none;\">\n          <ion-label color=\"primary\" position=\"floating\">Username</ion-label>\n          <ion-input type=\"text\" formControlName=\"user_name\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item class=\"input-item\">\n          <ion-label position=\"floating\">Country</ion-label>\n          <ion-input type=\"text\" formControlName=\"country\" (click)=\"openSelectCountry()\" readonly></ion-input>\n        </ion-item>\n\n        <!-- <ion-button class=\"delete-btn\" (click)=\"openSelectCountry()\" expand=\"block\" color=\"primary\" fill=\"outline\">CHOOSE COUNTRY</ion-button> -->\n\n        <ion-item class=\"input-item\" *ngIf=\"moderateMode\">\n          <ion-label position=\"floating\">Select Status</ion-label>\n          <ion-select formControlName=\"status\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of user_status\" [value]=\"item\" >{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-input *ngIf=\"!moderateMode\" type=\"hidden\" formControlName=\"status\"></ion-input>\n\n\n\n        <ion-input type=\"hidden\" formControlName=\"city\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"address\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"latitude\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"longitude\"></ion-input>\n        <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n        \n        <div color=\"primary\" class=\"ion-padding\" *ngIf=\"appSettings && appSettings.debugMode\">\n          <p>Debug Mode ON: {{user|json}}</p>\n        </div>\n\n      </ion-list>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateUserForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-footer>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-country/select-country.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-country/select-country.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilityComponentsSelectCountrySelectCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Select Country</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" [showCancelButton]=\"true\"  (ionInput)=\"searchList()\" (ionCancel)=\"dismiss()\" placeholder=\"Search a country\"></ion-searchbar>\n      </ion-col>\n     \n    </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n  <ion-list class=\"items-list\" *ngIf=\"autocompleteItems?.length > 0\">\n    <ion-item class=\"list-item\" *ngFor=\"let item of autocompleteItems\" tappable (click)=\"dismissModal(item.name)\">\n      <ion-row class=\"user-row\">\n        <ion-col size=\"12\" class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h3 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item?.name\"></app-text-shell>\n            </h3>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <div *ngIf=\"autocompleteItems?.length == 0\" class=\"empty-list-section\">\n    <h3 class=\"empty-list-message text-center\" style=\"text-align: center;\">\n      No country found\n    </h3>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/bluspecstyles/listing.ios.scss":
  /*!************************************************!*\
    !*** ./src/app/bluspecstyles/listing.ios.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBluspecstylesListingIosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9ibHVzcGVjc3R5bGVzL2xpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmxpc3QtaXRlbSB7XG4gICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAubGlzdC1pdGVtIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bluspecstyles/listing.shell.scss":
  /*!**************************************************!*\
    !*** ./src/app/bluspecstyles/listing.shell.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBluspecstylesListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1c3BlY3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFxibHVzcGVjc3R5bGVzXFxsaXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2JsdXNwZWNzdHlsZXMvbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dbmodels/user-edit.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/dbmodels/user-edit.model.ts ***!
    \*********************************************/

  /*! exports provided: UserEditModel */

  /***/
  function srcAppDbmodelsUserEditModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditModel", function () {
      return UserEditModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserEditModel = function UserEditModel() {
      _classCallCheck(this, UserEditModel);
    };
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
  "./src/app/user/update/styles/update-user.modal.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/update/styles/update-user.modal.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUpdateStylesUpdateUserModalScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.update-user-content {\n  --background: var(--page-background);\n}\n\n.update-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.update-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.update-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.update-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.update-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.update-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.update-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.update-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.update-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.update-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\n.form-actions-wrapper .delete-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVzZXJcXHVwZGF0ZVxcc3R5bGVzXFx1cGRhdGUtdXNlci5tb2RhbC5zY3NzIiwic3JjL2FwcC91c2VyL3VwZGF0ZS9zdHlsZXMvdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvdXNlci91cGRhdGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXGNoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURJQTtFQUNFLG9DQUFBO0FDREY7O0FER0U7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNGSjs7QURJSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNGTjs7QURJTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNGUjs7QURNSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRE9NO0VBQ0UsZUFBQTtBQ0xSOztBRFVFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1JKOztBRFVJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNSTjs7QURhSTtFQUNFLCtCQUFBO0FDWE47O0FEY0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ1pOOztBRGlCSTtFQUNFLCtEQUFBO0VFdkVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURuQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDcUJSOztBRGpCTTtFQUNFLDJDQUFBO0FDbUJSOztBRGpCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDbUJWOztBRGpCVTtFQUNFLHdDQUFBO0FDbUJaOztBRFpFO0VBQ0UsbUJBQUE7QUNjSjs7QURaSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDWU47O0FEVk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNENBQUE7QUNZUjs7QURWUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNZVjs7QURUUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNXVjs7QURQTTtFQUVFLCtDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ09SOztBRERBO0VBQ0UsdURBQUE7RUFFQSxxQ0FBQTtBQ0dGOztBRERFO0VBQ0UsV0FBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91cGRhdGUvc3R5bGVzL3VwZGF0ZS11c2VyLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcblxuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLnVwZGF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnNlbGVjdC11c2VyLWltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICBoZWlnaHQ6IDRjaDtcbiAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtZmllbGRzIHtcbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgICAuY2hlY2tib3gtdGFncyB7XG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cbiAgICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXG4gICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtZmllbGRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgLnJhbmdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmRlbGV0ZS1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4udXBkYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBtYXJnaW46IDBweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIC5kZWxldGUtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/update/styles/update-user.shell.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/update/styles/update-user.shell.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUpdateStylesUpdateUserShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91cGRhdGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHVzZXJcXHVwZGF0ZVxcc3R5bGVzXFx1cGRhdGUtdXNlci5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL3VwZGF0ZS9zdHlsZXMvdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VwZGF0ZS9zdHlsZXMvdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/update/update-user.modal.ts":
  /*!**************************************************!*\
    !*** ./src/app/user/update/update-user.modal.ts ***!
    \**************************************************/

  /*! exports provided: UpdateUserModal */

  /***/
  function srcAppUserUpdateUpdateUserModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserModal", function () {
      return UpdateUserModal;
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


    var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/master.service */
    "./src/app/services/master.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../utility-components/select-country/select-country.page */
    "./src/app/utility-components/select-country/select-country.page.ts");
    /* harmony import */


    var _dbmodels_user_edit_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../dbmodels/user-edit.model */
    "./src/app/dbmodels/user-edit.model.ts");

    var UpdateUserModal =
    /*#__PURE__*/
    function () {
      function UpdateUserModal(modalController, alertController, firebaseService, masterService, authService, utilsService, activatedRoute, toastService, loadingController, storageService, router) {
        var _this = this;

        _classCallCheck(this, UpdateUserModal);

        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.activatedRoute = activatedRoute;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.router = router;
        this.moderateMode = false;
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
          }]
        };
        this.authService.getAuthCache().then(function (result) {
          _this.localUser = result;
        });
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        this.maxDOBYear = year - 16;
      }

      _createClass(UpdateUserModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].APP_SETTINGS).then(function (appSettings) {
            if (appSettings) {
              _this2.appSettings = appSettings;

              if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                console.log("AppSettings: " + JSON.stringify(appSettings));
              }
            }
          });
          this.user_status = ["Pending", "Active", "Blocked"];

          if (this.localUser.id !== this.user.id) {
            this.moderateMode = true;
          }

          this.selectedAvatar = this.user.user_image;
          this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            //email: new FormControl(this.user.email,  Validators.required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.user_name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.user_image),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.dob),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.address),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.city),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.latitude),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.longitude),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.country)
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
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Confirm',
                      message: 'Do you really want to delete the account of ' + this.user.first_name + '?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this3.presentLoadingWithOptions();

                          var postData = {
                            'user_id': _this3.user.id
                          };

                          _this3.firebaseService.deleteItem(_this3.localUser.api_key, postData).subscribe(function (res) {
                            console.log('################ Result# ' + JSON.stringify(res));

                            _this3.loadingController.dismiss();

                            if (res.error) {
                              _this3.presentAlert(res.message);
                            } else {
                              //delete from local
                              // this.firebaseService.invokeListChangeEvent.subscribe(value => {
                              //   this.toastService.presentToast("GOTTA => "+JSON.stringify(value));
                              //   });
                              _this3.dismissModal(); //console.log('Modal Dismiss Time 007 # '+JSON.stringify(this.deleteResult));


                              _this3.toastService.presentToast(res.message);

                              _this3.router.navigate(['/hire-people-for-work']);
                            }
                          }, function (error) {
                            _this3.loadingController.dismiss();

                            _this3.presentAlert('Looks like there is a Network Issue.');
                          });
                          /********** NAVIGATE WITH USER ID **********/
                          // if (this.deleteResult.error) {
                          //   this.presentAlert(this.deleteResult.message); 
                          //   } else {
                          //     this.dismissModal();
                          //     console.log('Modal Dismiss Time# '+JSON.stringify(this.deleteResult));
                          //     this.router.navigate(['companies/listing']);
                          //   }

                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
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
          var _this4 = this;

          this.presentLoadingWithOptions();
          this.user.id = this.updateUserForm.value.user_id;
          this.user.user_image = this.selectedAvatar;
          this.user.first_name = this.updateUserForm.value.first_name;
          this.user.last_name = this.updateUserForm.value.last_name;
          this.user.email = this.updateUserForm.value.email;
          this.user.mobile = this.updateUserForm.value.mobile;
          this.user.address = this.updateUserForm.value.address; //this.user.city = this.updateUserForm.value.city;

          this.user.country = this.updateUserForm.value.country;
          this.user.latitude = this.updateUserForm.value.latitude;
          this.user.longitude = this.updateUserForm.value.longitude;
          this.user.pincode = this.updateUserForm.value.pincode;
          this.user.user_name = this.updateUserForm.value.user_name;
          this.user.dob = this.updateUserForm.value.dob;
          this.user.status = this.updateUserForm.value.status;
          console.log("DOB Value here: " + this.user.dob);
          this.user.dob = this.utilsService.splitTimestampFromDate(this.user.dob);

          if (this.utilsService.isValidDate(this.user.dob)) {//alert("All right"+this.user.dob);
          } else {
            var formattedVal = this.utilsService.formatTheDate(this.user.dob);
            this.updateUserForm.controls.dob.patchValue(formattedVal);
            this.user.dob = formattedVal;
            console.log("DOB formatted from " + this.user.dob + " to " + formattedVal);
          }

          console.log("And DOB Value here: " + this.updateUserForm.value.dob);
          var postData = {
            user_id: this.user.id,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            mobile: this.user.mobile,
            dob: this.user.dob,
            address: this.user.address,
            country: this.user.country,
            latitude: this.user.latitude,
            longitude: this.user.longitude,
            pincode: this.user.pincode,
            status: this.user.status,
            user_name: this.user.user_name,
            user_image_blob: this.updatedImage
          };
          console.log('########## Update User params ########### ' + JSON.stringify(postData));
          this.firebaseService.callUpdateAPI(this.localUser.api_key, postData).subscribe(function (res) {
            _this4.loadingController.dismiss(); //alert(JSON.stringify(res));
            //this.presentAlert(res.message);
            //this.toastService.presentToast(JSON.stringify(res)); 
            //this.loadingController.dismiss();


            console.log('########## API Response ########### ' + JSON.stringify(res));
            _this4.updateResult = res;

            if (!res.error) {
              /********** NAVIGATE WITH USER ID **********/
              _this4.dismissModal();

              if (res.user_name) {
                _this4.router.navigate(['/people/details', res.user_name]);
              } else {
                _this4.router.navigate(['/people/profile']);
              } //this.firebaseService.invokeProfileChangeEvent.

            } else {
              _this4.presentAlert(res.message);
            }
          }, function (error) {
            _this4.loadingController.dismiss();

            _this4.presentAlert('Looks like there is a Network Issue.' + error.message);
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this5 = this;

          var file = event.target.files[0];
          this.updateUserForm.patchValue({
            user_image: file
          });
          this.updateUserForm.get('user_image').updateValueAndValidity(); // File Preview

          var reader = new FileReader();

          reader.onload = function () {
            _this5.updatedImage = reader.result;
            _this5.user.user_image = _this5.updatedImage;
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "openSelectCountry",
        value: function openSelectCountry() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _utility_components_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_12__["SelectCountryPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (item) {
                      if (item.data != null) {
                        //alert(JSON.stringify(item));
                        _this6.updateUserForm.controls.country.patchValue(item.data);
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: '',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                    return _context3.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "removeFile",
        value: function removeFile() {
          this.updatedImage = "";
          this.user.user_image = this.updatedImage;
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      animated: true,
                      spinner: "bubbles",
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return UpdateUserModal;
    }();

    UpdateUserModal.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_user_edit_model__WEBPACK_IMPORTED_MODULE_13__["UserEditModel"])], UpdateUserModal.prototype, "user", void 0);
    UpdateUserModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-user.modal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/update/update-user.modal.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/update-user.modal.scss */
      "./src/app/user/update/styles/update-user.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/update-user.shell.scss */
      "./src/app/user/update/styles/update-user.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], UpdateUserModal);
    /***/
  },

  /***/
  "./src/app/utility-components/select-country/select-country.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/utility-components/select-country/select-country.page.ts ***!
    \**************************************************************************/

  /*! exports provided: SelectCountryPage */

  /***/
  function srcAppUtilityComponentsSelectCountrySelectCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
      return SelectCountryPage;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");

    var SelectCountryPage =
    /*#__PURE__*/
    function () {
      function SelectCountryPage(viewCtrl, storageService) {
        _classCallCheck(this, SelectCountryPage);

        this.viewCtrl = viewCtrl;
        this.storageService = storageService;
      }

      _createClass(SelectCountryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].COUNTRIES).then(function (allRes) {
            if (allRes) {
              _this7.autocompleteItems = allRes;
              _this7.filteredItems = allRes; //console.log("ITEMS => "+JSON.stringify(this.autocompleteItems));
            }
          });
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.autocompleteItems = this.filteredItems;
        }
      }, {
        key: "searchList",
        value: function searchList() {
          var _this8 = this;

          this.initializeItems();
          console.log("Searching " + this.searchQuery);
          if (this.searchQuery === undefined || this.searchQuery === "") return this.autocompleteItems;
          return this.autocompleteItems = this.autocompleteItems.filter(function (location) {
            return location.name.toLowerCase().indexOf(_this8.searchQuery.toLowerCase()) > -1;
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal(item) {
          this.viewCtrl.dismiss(item);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.viewCtrl.dismiss();
        }
      }]);

      return SelectCountryPage;
    }();

    SelectCountryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    SelectCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-country',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-country/select-country.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.page.scss */
      "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.shell.scss */
      "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../bluspecstyles/listing.ios.scss */
      "./src/app/bluspecstyles/listing.ios.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])], SelectCountryPage);
    /***/
  }
}]);
//# sourceMappingURL=default~user-listing-listing-module~user-profile-user-profile-module~user-users-integration-module-es5.js.map