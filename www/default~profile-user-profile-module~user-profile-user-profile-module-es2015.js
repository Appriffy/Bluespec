(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-user-profile-module~user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/change-profile-description/change-profile-description.modal.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/change-profile-description/change-profile-description.modal.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"create-user-form ion-page\" [formGroup]=\"updateStatusForm\" (ngSubmit)=\"createUser()\">\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>My Intro</ion-title>\n    </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n <!------ Top Header Main ---->\n <div class=\"recipes-wrapper\" style=\"background-color:#eeeeee;clear: both;margin-bottom:0px;\">\n  <div class=\"recipes-list\">\n    <div class=\"recipe-item\">\n      <!----- SECTION 1: BASIC ITEM DETAILS ----->\n      <app-image-shell class=\"recipe-cover-image\" [mode]=\"'cover'\" [src]=\"'./assets/images/bg.jpg'\">\n        <app-aspect-ratio [ratio]=\"{w:12, h:2}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n      <div class=\"chef-picture-wrapper\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" *ngIf=\"userImage\">\n          <app-image-shell class=\"chef-picture-image\" [src]=\"userImage\"></app-image-shell>\n        </app-aspect-ratio>\n\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\"  *ngIf=\"!userImage\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" [src]=\"'./assets/images/avatar.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n\n      </div>\n   \n      <div class=\"recipe-call-to-action\" style=\"margin-top:5px;margin-bottom:5px;\">\n        <h3 class=\"recipe-name\" style=\"margin-bottom:2px;color:#444444;\">\n          Write Your Intro\n        </h3>\n\n        <h5 class=\"user-name\" style=\"margin-top:2px;font-size: 16px;color:#444444;\">\n          A short and effective intro gives more visibility to your profile.\n        </h5>\n      </div>\n\n<!----- SECTION FORM ----->\n<section class=\"user-details-fields fields-section\">\n  <ion-list class=\"inputs-list\" lines=\"full\">\n\n<ion-item class=\"input-item\" style=\"background-color:#ffffff;margin-left:10px;margin-right:10px;\">\n<ion-label color=\"primary\" position=\"floating\">Write your Intro *</ion-label>\n<ion-textarea rows=\"4\" formControlName=\"description\"></ion-textarea>\n</ion-item>\n\n<div class=\"error-container\">\n<ng-container *ngFor=\"let validation of validations.description\">\n  <div class=\"error-message\" *ngIf=\"updateStatusForm.get('description').hasError(validation.type) && (updateStatusForm.get('description').dirty || updateStatusForm.get('description').touched)\">\n    <ion-icon name=\"information-circle-outline\"></ion-icon>\n    <span>{{ validation.message }}</span>\n  </div>\n</ng-container>\n</div>\n<ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n  </ion-list>\n</section>\n<!----- SECTION FORM ----->\n\n    </div>\n  </div>\n</div>\n\n\n</ion-content>\n\n<ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col>\n      <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateStatusForm.valid\">UPDATE INTRO</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/change-profile-status/change-profile-status.modal.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/change-profile-status/change-profile-status.modal.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"create-user-form ion-page\" [formGroup]=\"updateStatusForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Profile Tagline</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"3\">\n       \n        <img style=\"margin:0 auto;width:108px;\" [src]=\"'./assets/images/status.png'\">\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n\n  <ion-item class=\"input-item\">\n    <ion-label color=\"primary\" position=\"floating\">What's your status?</ion-label>\n    <ion-textarea rows=\"4\" formControlName=\"tagline\" placeholder=\"Full Stack Software Developer\"></ion-textarea>\n  </ion-item>\n\n  <div class=\"error-container\">\n    <ng-container *ngFor=\"let validation of validations.tagline\">\n      <div class=\"error-message\" *ngIf=\"updateStatusForm.get('tagline').hasError(validation.type) && (updateStatusForm.get('tagline').dirty || updateStatusForm.get('tagline').touched)\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ validation.message }}</span>\n      </div>\n    </ng-container>\n  </div>\n\n  \n  <ion-input type=\"hidden\" formControlName=\"user_id\"></ion-input>\n\n      </ion-list>\n    \n    </section>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"primary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateStatusForm.valid\">UPDATE TAGLINE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"selfView\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" *ngIf=\"!selfView\">\n      <ion-back-button defaultHref=\"\"></ion-back-button> \n    </ion-buttons>\n\n    <ion-title *ngIf=\"!selfView\">View Profile</ion-title>\n    <ion-title *ngIf=\"selfView\"><img src=\"assets/images/logo.png\" style=\"height:30px;vertical-align: middle;\"/></ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"hitProfileAPI()\">REFRESH</ion-button> -->\n\n      <ion-button *ngIf=\"!loading\" fill=\"clear\" color=\"primary\" class=\"filters-btn\" (click)=\"hitProfileAPI()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button color=\"primary\" [routerLink]=\"['/people/update', profile?.user_name]\" *ngIf=\"profile && (selfView || localUser?.role_id === 1)\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/edit.svg\"></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"openItemUpdateModal()\" *ngIf=\"profile && (selfView || localUser?.role_id === 1)\">\n        Edit\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-profile-content\">\n  <ion-row class=\"expiration-countdown\" *ngIf=\"!selfView && loading\" style=\"background-color: #0A5392;\">\n    <span class=\"expiration-lead\">\n      Loading profile...</span>\n  </ion-row>\n\n  <ion-row class=\"expiration-countdown\" *ngIf=\"profile?.status=='Blocked' || profile?.status=='Pending'\">\n    <span *ngIf=\"profile?.status=='Blocked'\" class=\"expiration-lead\">This account has been blocked.</span>\n    <span *ngIf=\"profile?.status=='Pending'\" class=\"expiration-lead\">This user account is pending verification.</span>\n  </ion-row>\n  \n\n  <!-----Small Completeness Progress \n  <ion-row class=\"popular-dish\" *ngIf=\"!loading && selfView\">\n    <ion-col size=\"12\">\n      <ion-progress-bar class=\"dish-score\" type=\"determinate\" [value]=\"completenessScore\"></ion-progress-bar>\n    </ion-col>\n  </ion-row>\n  ----->\n\n  <ion-row class=\"user-details-section\" *ngIf=\"!loading\">\n    <ion-col class=\"user-image-wrapper\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"profile?.user_image\"></app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\">\n      <ion-row class=\"user-data-row\">\n        <ion-col size=\"12\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"profile?.first_name+' '+profile?.last_name\"></app-text-shell>\n          </h3>\n         \n          <h5 class=\"user-title\" *ngIf=\"profile?.tagline\" style=\"color: #444444;margin-top: 1px;\">\n            <app-text-shell style=\"display: inline-block;\" animation=\"bouncing\" [data]=\"profile?.tagline\"></app-text-shell>\n            <ion-icon *ngIf=\"selfView\" (click)=\"openStatusDialog()\" src=\"./assets/sample-icons/side-menu/edit.svg\" style=\"display: inline-block;width:24px;cursor: pointer;\"></ion-icon>\n          </h5>\n\n          <h5 class=\"user-title\" *ngIf=\"!profile?.tagline && selfView\" style=\"color: #444444;\">\n            <app-text-shell style=\"display: inline-block;\" animation=\"bouncing\" [data]=\"'Add a short profile tagline'\"></app-text-shell>\n            <ion-icon *ngIf=\"selfView\" (click)=\"openStatusDialog()\" src=\"./assets/sample-icons/side-menu/edit.svg\" style=\"display: inline-block;width:24px;\"></ion-icon>\n          </h5>\n\n          <ion-badge *ngIf=\"profile?.online_status=='Online'\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"primary\">{{profile?.online_status}}</ion-badge>\n          <ion-badge *ngIf=\"profile?.online_status !=='Online'\" style=\"margin-left: 0px;\" class=\"status-label\" color=\"danger\">{{profile?.online_status}}</ion-badge>\n\n          <h5 class=\"user-age\" style=\"font-size:13px;color: #444444;margin-top:3px;margin-bottom:1px;\" *ngIf=\"profile?.last_active && !adminMode\">\n            <app-text-shell animation=\"bouncing\" [data]=\"'Last Seen: '+profile?.last_active\"></app-text-shell>\n          </h5>\n\n          <h5 class=\"user-age\" style=\"font-size:13px;color: #444444;margin-top:3px;margin-bottom:1px;\">\n            <app-text-shell animation=\"bouncing\" [data]=\"'Country: '+profile?.country\"></app-text-shell>\n          </h5>  \n\n        </ion-col>\n      </ion-row>\n     \n    </ion-col>\n  </ion-row>\n  \n  <!----- ######## AUTH CARD ########----->\n  <div *ngIf=\"profile && adminMode && !loading\" class=\"accommodations-wrapper\">\n    <hr class=\"details-divider\">\n    <ion-row class=\"accommodation-row\">\n      <ion-col size=\"12\">\n\n        <h5 *ngIf=\"profile?.email && adminMode\" style=\"margin-top: 3px;margin-bottom:3px;\">\n          <ion-icon class=\"accommodation-icon\" style=\"display:inline-block;vertical-align:middle;\" src=\"./assets/sample-icons/side-menu/map-pin.svg\"></ion-icon>\n          <app-text-shell class=\"accommodation-name\" style=\"display:inline-block;vertical-align:middle;\" animation=\"bouncing\" [data]=\"''+profile?.email\"></app-text-shell>\n        </h5>\n\n        \n        <h5 *ngIf=\"profile?.mobile && adminMode\" style=\"margin-top: 3px;margin-bottom:3px;\">\n          <ion-icon class=\"accommodation-icon\" style=\"display:inline-block;vertical-align:middle;\" src=\"./assets/sample-icons/side-menu/phone.svg\"></ion-icon> \n          <app-text-shell class=\"accommodation-name\" style=\"display:inline-block;vertical-align:middle;\" animation=\"bouncing\" [data]=\"'Mobile: '+profile?.mobile\"></app-text-shell>\n        </h5>\n      \n        <h5 *ngIf=\"profile?.date_created\" style=\"margin-top: 3px;margin-bottom:3px;\">\n          <ion-icon class=\"accommodation-icon\" style=\"display:inline-block;vertical-align:middle;\" src=\"./assets/sample-icons/side-menu/calendar.svg\"></ion-icon> \n          <app-text-shell class=\"accommodation-name\" style=\"display:inline-block;vertical-align:middle;\" animation=\"bouncing\" [data]=\"'Joined '+profile?.date_created\"></app-text-shell>\n        </h5>\n\n        <h5 style=\"margin-top: 3px;margin-bottom:3px;\">\n          <ion-icon class=\"accommodation-icon\" style=\"display:inline-block;vertical-align:middle;\" src=\"./assets/sample-icons/side-menu/timer.svg\"></ion-icon> \n          <app-text-shell class=\"accommodation-name\" style=\"display:inline-block;vertical-align:middle;\" animation=\"bouncing\" [data]=\"profile?.last_active ?'Last Seen: '+profile?.last_active:'Last Seen: N/A'\"></app-text-shell>\n        </h5>\n\n      </ion-col>\n    </ion-row>\n    </div>\n\n  <!------- GRAFTER STATS STARTS HERE ------->\n  <ion-row class=\"user-stats-section\" *ngIf=\"!loading && profile?.role_id === 3\">\n    <ion-col class=\"user-stats-wrapper\" size=\"4\">\n      <span class=\"stat-value\">\n        <app-text-shell [data]=\"profile?.jobDone > 0?''+profile?.jobDone:'0'\"></app-text-shell>\n      </span>\n      <span class=\"stat-name\">JOBS DONE</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"4\">\n      <span class=\"stat-value\">\n        <app-text-shell [data]=\"profile?.avgRating > 0?''+profile?.avgRating:'0'\"></app-text-shell>\n      </span>\n      <span class=\"stat-name\">RATING</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"4\">\n      <span class=\"stat-value\">\n        <app-text-shell [data]=\"profile?.numReviews > 0?''+profile?.numReviews:'0'\"></app-text-shell>\n      </span>\n      <span class=\"stat-name\">REVIEWS</span>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"user-about-section\" *ngIf=\"!loading && (selfView || profile?.description)\">\n    <ion-row class=\"heading-row\">\n      <h3 class=\"details-section-title\">ABOUT</h3>\n      <a class=\"heading-call-to-action\" style=\"cursor: pointer;\" *ngIf=\"profile && selfView\" (click)=\"openProfileDescDialog()\" >{{ 'EDIT' }}</a>\n    </ion-row>\n\n    <p class=\"user-description\"  *ngIf=\"profile?.description\">\n      <app-text-shell animation=\"bouncing\" lines=\"4\" [data]=\"profile?.description\"></app-text-shell>\n    </p>\n\n    <p class=\"user-description\" *ngIf=\"selfView && !profile?.description\">\n      Tell us something about you. A short intro can help you find more opportunities. Hit the edit button above to add something about you.\n    </p>\n  </div>\n\n\n   \n  <!-- <hr class=\"details-divider\"> -->\n\n  <ion-row class=\"actions-row\" style=\"text-align: center;\" *ngIf=\"!loading && profile?.role_id === 3\">\n    <ion-col class=\"main-actions\">\n      <ion-button *ngIf=\"profile\" [routerLink]=\"['/relocation-fees', {user_id: profile?.id}]\" class=\"call-to-action-btn\" size=\"small\" color=\"primary\">VIEW FEES</ion-button>\n      <ion-button *ngIf=\"profile\" [routerLink]=\"['/list-documents', profile?.id]\" class=\"call-to-action-btn\" size=\"small\" color=\"primary\">DOCUMENTS</ion-button>\n      <ion-button *ngIf=\"profile\" [routerLink]=\"['/relocation-fees', profile?.id]\" class=\"call-to-action-btn\" size=\"small\" color=\"primary\">CHAT</ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <!---- DISPLAY JOB SKILLS -->\n  <div class=\"user-photos-section\" *ngIf=\"!loading && profile?.role_id === 3 && (selfView || adminMode || (!selfView && profile?.skills.length > 0))\">\n    <ion-row class=\"heading-row\">\n      <h3 class=\"details-section-title\">SKILLS</h3>\n      <a class=\"heading-call-to-action\" *ngIf=\"profile && selfView && profile?.skills.length <= 0\" [routerLink]=\"['/people/assign-skills', profile?.id]\" >{{ 'ADD' }}</a>\n      <a class=\"heading-call-to-action\" *ngIf=\"profile && profile?.skills.length > 0\" [routerLink]=\"['/skill-set', profile?.id]\" >{{ 'DETAIL' }}</a>\n    </ion-row>\n   \n     <!----Empty view-->\n     <ion-grid class=\"roundHolder\" *ngIf=\"(selfView || adminMode) && (profile?.skills.length <= 0)\" style=\"width:100%;height: 100%;display:block;align-content: center;\">\n      <hr class=\"details-divider\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-icon src=\"./assets/sample-icons/side-menu/construct.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n        <h5 style=\"text-align: center;color: #444444;\">No Job Skills?</h5>\n        <p *ngIf=\"selfView\" class=\"user-description\" style=\"text-align:center;padding:10px;\">\n          Add your job skills to discover relevant work opportunities around you.\n        </p>\n        <ion-button *ngIf=\"profile && selfView\" [routerLink]=\"['/people/assign-skills', profile?.id]\" style=\"display:block;text-align: center;\" class=\"upload-picture-btn\" color=\"dark\" expand=\"cover\" fill=\"outline\">\n          Add Skills</ion-button>\n        </ion-row>\n      </ion-grid>\n  <!----Empty view-->\n\n    <ion-row class=\"details-tags\"  *ngIf=\"profile?.skills.length > 0 \">\n      <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of profile?.skills\">\n        <span class=\"item-tag\">\n          {{tag.title}} <span style=\"margin-left:2px;margin-right:2px;\" *ngIf=\"tag.numEndorsement > 0\">| <ion-icon name=\"thumbs-up\"></ion-icon> {{tag.numEndorsement}}</span>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n<!--------------- Experience Details --------------->\n<div class=\"user-photos-section\" *ngIf=\"!loading && profile?.role_id === 3 && (selfView || (!selfView && profile?.work_experiences.length > 0))\">\n  <ion-row class=\"heading-row\">\n    <h3 class=\"details-section-title\">WORK EXPERIENCES</h3>\n\n    <a *ngIf=\"selfView && profile\" class=\"heading-call-to-action\" [routerLink]=\"['/work-experiences/listing', profile?.id]\">{{ 'SEE ALL' }}</a>\n  </ion-row>\n \n   <ion-row class=\"details-tags padding\" style=\"text-align: center;\" *ngIf=\"profile?.work_experiences.length <=0\">\n   \n     <!----Empty view-->\n     <ion-grid class=\"roundHolder\" *ngIf=\"selfView && profile?.work_experiences.length <= 0\" style=\"width:100%;height: 100%;display:block;align-content: center;\">\n      <hr class=\"details-divider\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-icon src=\"./assets/sample-icons/side-menu/briefcase.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n        <h5 style=\"text-align: center;color: #444444;\">No Work Experience yet!</h5>\n        <ion-button *ngIf=\"profile\" [routerLink]=\"['/work-experiences/listing', profile?.id]\" style=\"display:block;text-align: center;\" class=\"upload-picture-btn\" color=\"dark\" expand=\"cover\" fill=\"outline\">\n          Add Work Experience</ion-button>\n        </ion-row>\n      </ion-grid>\n  <!----Empty view-->\n  </ion-row>\n\n  <div *ngIf=\"profile?.work_experiences.length > 0\">\n  <ion-row class=\"playlist-item-row\" *ngFor=\"let item of profile?.work_experiences\">\n    <ion-col size=\"12\" class=\"video-info-wrapper\">\n      <h4 class=\"image-title\" *ngIf=\"item.company\">\n        <app-text-shell animation=\"gradient\" [data]=\"item.company\"></app-text-shell>\n      </h4>\n      <h3 class=\"image-description\" *ngIf=\"item.designation\">\n        <app-text-shell animation=\"bouncing\" [data]=\"'Designation: '+item.designation\"></app-text-shell>\n      </h3>\n\n      <h5 class=\"image-description\" *ngIf=\"item.current\">\n        <app-text-shell animation=\"bouncing\" [data]=\"'Duration: '+item.startDate?.concat(' to Current')\"></app-text-shell>\n      </h5>\n      \n      <h5 class=\"image-description\" *ngIf=\"!item.current\">\n        <app-text-shell animation=\"bouncing\" [data]=\"'Duration: '+item.startDate?.concat(' - ').concat(item.endDate)\"></app-text-shell>\n      </h5>\n\n      <h5 class=\"image-description\" *ngIf=\"item.role\">\n        <app-text-shell animation=\"bouncing\" [data]=\"'Role: '+item.role\"></app-text-shell>\n      </h5>\n\n    </ion-col>\n  </ion-row>\n</div></div>\n<!------ Ends Experience Detail ------->\n\n<hr class=\"details-divider\">\n\n<!--------------- Education Details --------------->\n<div class=\"user-photos-section\" *ngIf=\"!loading && profile?.role_id === 3 && (selfView || (!selfView && profile?.education_details.length > 0))\">\n  <ion-row class=\"heading-row\">\n    <h3 class=\"details-section-title\">EDUCATION DETAILS</h3>\n    <a *ngIf=\"selfView && profile\" class=\"heading-call-to-action\" [routerLink]=\"['/education-details/listing', profile?.id]\">{{ 'SEE ALL' }}</a>\n  </ion-row>\n \n   <ion-row class=\"details-tags padding\" style=\"text-align: center;\" *ngIf=\"profile?.education_details.length <=0\">\n   \n   <!----Empty view-->\n    <ion-grid class=\"roundHolder\" *ngIf=\"selfView\" style=\"width:100%;height: 100%;display:block;align-content: center;\">\n      <hr class=\"details-divider\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-icon src=\"./assets/sample-icons/side-menu/study_areas.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n        <h5 style=\"text-align: center;columns: #444444;\">No education detail found</h5>\n        <ion-button (click)=\"addNewEducationItem()\" style=\"display:block;text-align: center;\" class=\"upload-picture-btn\" color=\"dark\" expand=\"cover\" fill=\"outline\">\n          Add Details</ion-button>\n        </ion-row>\n      </ion-grid>\n  <!----Empty view-->\n  </ion-row>\n\n  <div *ngIf=\"profile?.education_details.length > 0\">\n  <ion-row class=\"playlist-item-row\" *ngFor=\"let video of profile?.education_details\">\n    <ion-col size=\"12\" class=\"video-info-wrapper\">\n      <h4 class=\"image-title\">\n        <app-text-shell animation=\"gradient\" [data]=\"video.title\"></app-text-shell>\n      </h4>\n      <h5 class=\"image-description\">\n        <app-text-shell lines=\"1\" animation=\"gradient\" [data]=\"video.organization\"></app-text-shell>\n      </h5>\n\n      <h5 class=\"image-description\">\n        <app-text-shell lines=\"1\" animation=\"gradient\" [data]=\"'Duration: '+video.yoj+' - '+video.yop\"></app-text-shell>\n      </h5>\n\n      <h5 class=\"image-description\" *ngIf=\"video.score_type == 'Percent'\">\n        <app-text-shell lines=\"1\" animation=\"gradient\" [data]=\"'Score: '+video.score+' %'\"></app-text-shell>\n      </h5>\n\n      <h5 class=\"image-description\" *ngIf=\"video.score_type == 'Grade'\">\n        <app-text-shell lines=\"1\" animation=\"gradient\" [data]=\"'Grade: '+video.score\"></app-text-shell>\n      </h5>\n\n    </ion-col>\n  </ion-row>\n</div>\n</div>\n<!------- Ends Education Detail ------->\n\n\n<!---Display Reviews-->\n<hr class=\"details-divider\">\n<div class=\"reviews-wrapper\" *ngIf=\"!loading && profile?.role_id === 3 && (selfView || (!selfView && profile?.reviews.length > 0))\">\n\n  <ion-row class=\"heading-row\">\n    <h3 class=\"details-section-title\">REVIEWS</h3>\n    <a *ngIf=\"profile && profile?.reviews.length > 3\" class=\"heading-call-to-action\" [routerLink]=\"['/people/reviews', profile?.id]\">{{ 'SEE ALL' }}</a>\n  </ion-row>\n\n    <!----Empty view-->\n    <ion-grid class=\"roundHolder\" *ngIf=\"selfView && profile?.reviews.length === 0\" style=\"width:100%;height: 100%;display:block;align-content: center;\">\n      <hr class=\"details-divider\">\n      <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n        <ion-icon src=\"./assets/sample-icons/side-menu/thumbs-up.svg\" style=\"display: block;font-size:48px;\"></ion-icon>\n        <h5 style=\"text-align: center;color: #444444;\">No Rated yet</h5>\n        <p class=\"user-description\" style=\"margin-top:4px;padding:10px;\">\n          A great review is all you need to stand out. Earn a good reputation by delivering expected work in time.\n        </p>\n        </ion-row>\n      </ion-grid>\n  <!----Empty view-->\n\n  <div class=\"reviews-list\" *ngIf=\"profile?.reviews.length > 0\">\n    <div class=\"review-item\" *ngFor=\"let review of profile?.reviews| slice:0:3\">\n      <app-work-review [review]=\"review\"></app-work-review>\n    </div>\n  </div> </div>\n  <!---Display Reviews-->\n\n\n   <!------- Loading View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n      <h5 style=\"text-align: center;color: #555555;\">Loading Profile ...</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Loading View ------->\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-reviews/work-review/work-review.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-reviews/work-review/work-review.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"review-user\">\n    <ion-col size=\"2\" class=\"user-image-wrapper\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell class=\"review-user-image\" [src]=\"review.reviewerImg\" [alt]=\"'review user image'\"></app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n   \n    <ion-col class=\"user-brief-wrapper\">\n     \n      <ion-row class=\"details-scores user-scores\">\n        <ion-col class=\"score-item user-score\">\n\n          <!-- <span style=\"display:inline-block;text-align: left;\">\n            <app-rating-input max=\"{{review.rating}}\" readOnly=\"true\" style=\"margin-bottom:1px;\"></app-rating-input>       \n          </span>\n          <span class=\"review-date\" style=\"display:inline-block;text-align: right;\">\n            <app-text-shell [data]=\"review.publishedAt\"></app-text-shell>\n          </span> -->\n\n         \n          <app-rating-input max=\"{{review.rating}}\" readOnly=\"true\" style=\"margin-top:1px;margin-bottom:1px;padding:1px;\"></app-rating-input>\n         \n          <h5 class=\"review-message\" style=\"margin-top:1px;margin-bottom:1px;\">\n            <app-text-shell [data]=\"review.review\" lines=\"2\"></app-text-shell>\n          </h5>\n\n          <h5 class=\"review-user-name\" style=\"margin-top:1px;margin-bottom:1px;\">\n            <app-text-shell [data]=\"'- '+review.reviewerName\"></app-text-shell>\n          </h5>\n  \n          <span class=\"review-date\" style=\"display:block;text-align: right; font-size: 13px;\">\n            <app-text-shell [data]=\"review.publishedAt\"></app-text-shell>\n          </span>\n\n        </ion-col>\n        \n      </ion-row>\n    </ion-col>\n    <!-- <ion-col class=\"review-info-wrapper\">\n    \n    </ion-col> -->\n  </ion-row>\n\n  <!-- <ion-row class=\"details-scores user-scores\">\n    <ion-col size=\"12\">\n    <h5 class=\"review-message\" style=\"margin-top:2px;\">\n      <app-text-shell [data]=\"review.review\" lines=\"5\"></app-text-shell>\n    </h5>\n  </ion-col>\n  </ion-row>  -->");

/***/ }),

/***/ "./src/app/dbmodels/work-review-model.ts":
/*!***********************************************!*\
  !*** ./src/app/dbmodels/work-review-model.ts ***!
  \***********************************************/
/*! exports provided: WorkReviewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkReviewModel", function() { return WorkReviewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


class WorkReviewModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
}


/***/ }),

/***/ "./src/app/user/profile/change-profile-description/change-profile-description.modal.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/profile/change-profile-description/change-profile-description.modal.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChangeProfileDescriptionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfileDescriptionModal", function() { return ChangeProfileDescriptionModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");








let ChangeProfileDescriptionModal = class ChangeProfileDescriptionModal {
    constructor(modalController, firebaseService, authService, toastService, alertController, loadingController, router) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.userImage = "";
        this.validations = {
            'description': [
                { type: 'required', message: 'Write a short intro about you.' },
                { type: 'minLength', message: 'Your Intro appears to be too small.' },
                { type: 'maxLength', message: 'Intro should not exceed 100 characters.' }
            ]
        };
    }
    ngOnInit() {
        this.updateStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)])
        });
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            //this.userImage = this.image;
        });
    }
    dismissModal() {
        this.modalController.dismiss(this.updateStatusForm.value.description);
    }
    createUser() {
        this.presentLoadingWithOptions();
        let postData = {
            user_id: this.updateStatusForm.value.user_id,
            description: this.updateStatusForm.value.description
        };
        this.firebaseService.callUpdateProfileDescriptionAPI(this.localUser.api_key, postData)
            .subscribe((event) => {
            this.loadingController.dismiss();
            if (!event.error) {
                this.dismissModal();
                this.toastService.presentToast(event.message);
            }
            else {
                this.presentAlert(event.message);
            }
        }, (error) => {
            this.loadingController.dismiss();
            this.presentAlert('Looks like there is a Network Issue.');
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
                animated: true,
                spinner: "bubbles",
                message: 'Updating Your Intro',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
ChangeProfileDescriptionModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ChangeProfileDescriptionModal.prototype, "userID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ChangeProfileDescriptionModal.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ChangeProfileDescriptionModal.prototype, "image", void 0);
ChangeProfileDescriptionModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-profile-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-profile-description.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/change-profile-description/change-profile-description.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/details.page.scss */ "./src/app/bluspecstyles/details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/details.shell.scss */ "./src/app/bluspecstyles/details.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ChangeProfileDescriptionModal);



/***/ }),

/***/ "./src/app/user/profile/change-profile-status/change-profile-status.modal.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user/profile/change-profile-status/change-profile-status.modal.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangeProfileStatusModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfileStatusModal", function() { return ChangeProfileStatusModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _user_profile_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-profile.model */ "./src/app/user/profile/user-profile.model.ts");









let ChangeProfileStatusModal = class ChangeProfileStatusModal {
    constructor(modalController, firebaseService, authService, toastService, alertController, loadingController, router) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.userData = new _user_profile_model__WEBPACK_IMPORTED_MODULE_8__["UserProfileModel"]();
        this.validations = {
            'tagline': [
                { type: 'required', message: 'Write a tagline for your profile.' },
                { type: 'minLength', message: 'Your tagline appears to be too small.' },
                { type: 'maxLength', message: 'Tagline should not exceed 30 characters.' }
            ]
        };
    }
    ngOnInit() {
        this.updateStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            tagline: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.tagline, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)])
        });
        this.authService.getAuthCache().then(promisedValue => {
            this.localUser = promisedValue;
            //this.updateStatusForm.patchValue({user_id:this.localUser.id});
        });
    }
    dismissModal() {
        this.modalController.dismiss(this.updateStatusForm.value.tagline);
    }
    createUser() {
        this.presentLoadingWithOptions();
        this.userData.id = this.updateStatusForm.value.user_id;
        this.userData.tagline = this.updateStatusForm.value.tagline;
        let postData = {
            user_id: this.userData.id,
            tagline: this.userData.tagline
        };
        this.firebaseService.callUpdateProfileStatusAPI(this.localUser.api_key, postData)
            .subscribe((event) => {
            this.loadingController.dismiss();
            if (!event.error) {
                this.dismissModal();
                this.toastService.presentToast(event.message);
                //this.router.navigate(['/people/details', event.username]);
            }
            else {
                this.presentAlert(event.message);
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
                animated: true,
                spinner: "bubbles",
                message: 'Updating Your Tagline',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
ChangeProfileStatusModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ChangeProfileStatusModal.prototype, "userID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ChangeProfileStatusModal.prototype, "tagline", void 0);
ChangeProfileStatusModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-profile-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-profile-status.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/change-profile-status/change-profile-status.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/change-profile-status.scss */ "./src/app/user/profile/change-profile-status/styles/change-profile-status.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/change-profile-status.shell.scss */ "./src/app/user/profile/change-profile-status/styles/change-profile-status.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ChangeProfileStatusModal);



/***/ }),

/***/ "./src/app/user/profile/change-profile-status/styles/change-profile-status.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/user/profile/change-profile-status/styles/change-profile-status.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL2NoYW5nZS1wcm9maWxlLXN0YXR1cy9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxccHJvZmlsZVxcY2hhbmdlLXByb2ZpbGUtc3RhdHVzXFxzdHlsZXNcXGNoYW5nZS1wcm9maWxlLXN0YXR1cy5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtc3RhdHVzL3N0eWxlcy9jaGFuZ2UtcHJvZmlsZS1zdGF0dXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxvREFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxvQ0FBQTtBQ0ZGOztBREdFO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhDQUFBO0FDREo7O0FERUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQU47O0FEQ007RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0FDQ1I7O0FER0k7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNGTjs7QURJTTtFQUNFLGVBQUE7QUNGUjs7QURPRTtFQUNFLCtCQUFBO0VBQ0EsOEVBQUE7QUNMSjs7QURPSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDTE47O0FEVUk7RUFDRSwrQkFBQTtBQ1JOOztBRFdJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNUTjs7QURlQTtFQUNFLHVEQUFBO0VBRUEscUNBQUE7QUNiRjs7QURlRTtFQUNFLFdBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS1zdGF0dXMvc3R5bGVzL2NoYW5nZS1wcm9maWxlLXN0YXR1cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XG5cbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBtYXJnaW46IDBweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/profile/change-profile-status/styles/change-profile-status.shell.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/user/profile/change-profile-status/styles/change-profile-status.shell.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL2NoYW5nZS1wcm9maWxlLXN0YXR1cy9zdHlsZXMvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxccHJvZmlsZVxcY2hhbmdlLXByb2ZpbGUtc3RhdHVzXFxzdHlsZXNcXGNoYW5nZS1wcm9maWxlLXN0YXR1cy5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtc3RhdHVzL3N0eWxlcy9jaGFuZ2UtcHJvZmlsZS1zdGF0dXMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvY2hhbmdlLXByb2ZpbGUtc3RhdHVzL3N0eWxlcy9jaGFuZ2UtcHJvZmlsZS1zdGF0dXMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.ios.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.ios.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host-context(.plt-mobile.ios) .user-details-section .user-image-wrapper {\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxwcm9maWxlXFxzdHlsZXNcXHVzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSB7XG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMzAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.md.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.md.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host-context(.plt-mobile.md) .user-details-section .user-image-wrapper {\n  max-width: 28%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxwcm9maWxlXFxzdHlsZXNcXHVzZXItcHJvZmlsZS5tZC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUubWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUubWQpIHtcbiAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogMjglO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCgucGx0LW1vYmlsZS5tZCkgLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDI4JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.page.scss":
/*!************************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-actions-padding: 5px;\n  --page-friends-gutter: calc(var(--page-margin) / 2);\n  --page-pictures-gutter: calc(var(--page-margin) / 2);\n  --page-tags-vertical-gutter: calc(var(--page-margin) / 4);\n  --page-tags-horizontal-gutter: calc(var(--page-margin) / 2);\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-dish-score-height: 6px;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n\n.mini-modal {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n\n.expiration-countdown {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.expiration-countdown .expiration-lead {\n  padding: 0px calc(var(--page-margin) / 2);\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.status-label {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.accommodations-wrapper {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.accommodations-wrapper .accommodation-row {\n  --ion-grid-column-padding: 0px;\n  border-top: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.accommodations-wrapper .accommodation-row + .accommodation-row {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.accommodations-wrapper .accommodation-row .icon-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-right: 20px;\n}\n\n.accommodations-wrapper .accommodation-row .accommodation-icon {\n  font-size: 22px;\n  color: var(--ion-color-medium-tint);\n}\n\n.accommodations-wrapper .accommodation-row .accommodation-name {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.accommodations-wrapper .accommodation-row .accommodation-value {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-medium-tint);\n}\n\n.roundHolder {\n  background-color: #eeeeee;\n  --ion-grid-column-padding: 6px;\n  display: block;\n  border-radius: 10px;\n  border-top: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n}\n\n.user-details-section {\n  --ion-grid-column-padding: 0px;\n  margin: var(--page-margin);\n}\n\n.user-details-section .user-image-wrapper {\n  max-width: 26%;\n}\n\n.user-details-section .user-info-wrapper {\n  padding-left: var(--page-margin);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.user-details-section .user-info-wrapper .user-data-row {\n  padding-bottom: var(--page-margin);\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-name {\n  margin: 0px 0px 5px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-title {\n  margin: 0px;\n  color: var(--ion-color-medium);\n  font-size: 15px;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .membership-col {\n  padding-left: var(--page-margin);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-membership {\n  display: block;\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: 4px 8px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.user-details-section .user-info-wrapper .actions-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: var(--page-actions-padding);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n}\n\n.user-details-section .user-info-wrapper .actions-row .main-actions {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n  display: -webkit-box;\n  display: flex;\n}\n\n.user-details-section .user-info-wrapper .actions-row .main-actions .call-to-action-btn {\n  padding: 0px var(--page-actions-padding);\n  margin: 0px;\n}\n\n.user-details-section .user-info-wrapper .actions-row .secondary-actions {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.user-details-section .user-info-wrapper .actions-row .secondary-actions .more-btn {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0px;\n}\n\n.user-age {\n  font-size: 18px;\n}\n\n.user-stats-section {\n  --ion-grid-column-padding: 0px;\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-stats-section .user-stats-wrapper {\n  text-align: center;\n}\n\n.user-stats-section .user-stats-wrapper .stat-value {\n  display: block;\n  padding-bottom: 5px;\n  color: var(--ion-color-dark-shade);\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.user-stats-section .user-stats-wrapper .stat-name {\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n\n.details-section-title {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.user-about-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-about-section .user-description {\n  color: var(--ion-color-dark-shade);\n  text-align: justify;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  line-height: 1.3;\n  font-weight: 500;\n}\n\n.user-friends-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-friends-section .heading-row {\n  margin-bottom: var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.user-friends-section .heading-row .details-section-title {\n  margin: 0px;\n}\n\n.user-friends-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-primary);\n}\n\n.user-friends-section .friends-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-friends-section .friends-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-friends-section .friends-row::before, .user-friends-section .friends-row::after {\n  content: \"\";\n  -webkit-box-flex: 0;\n          flex: 0 0 calc(var(--page-margin) - var(--page-friends-gutter));\n}\n\n.user-friends-section .friends-row .friend-item {\n  padding: 0px var(--page-friends-gutter);\n}\n\n.user-friends-section .friends-row .friend-item .friend-name {\n  display: block;\n  text-align: center;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n}\n\n.user-photos-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.user-photos-section .pictures-row {\n  --ion-grid-columns: 4;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n\n.user-photos-section .pictures-row .picture-item {\n  padding: 0px var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2);\n}\n\n.heading-row {\n  margin-bottom: var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.heading-row .details-section-title {\n  margin: 0px;\n}\n\n.heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-primary);\n}\n\n.playlist-item-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.playlist-item-row:not(:first-child) {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.playlist-item-row:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n  box-shadow: inset 0 -7px 3px -8px var(--ion-color-darkest);\n}\n\n.popular-dishes-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.popular-dishes-wrapper .popular-dish {\n  --ion-grid-column-padding: 0px;\n}\n\n.popular-dishes-wrapper .popular-dish:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n\n.popular-dishes-wrapper .popular-dish .dish-name {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.popular-dishes-wrapper .popular-dish .dish-score {\n  --buffer-background: rgba(var(--page-color-rgb), .20);\n  --progress-background: rgba(var(--page-color-rgb), 1);\n  height: var(--page-dish-score-height);\n  border-radius: calc(var(--page-dish-score-height) / 2);\n}\n\n.popular-dishes-wrapper .popular-dish .dish-votes-count {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.popular-dishes-wrapper .popular-dish .dish-votes-count .dish-votes-icon {\n  color: var(--ion-color-medium-tint);\n}\n\n.popular-dishes-wrapper .popular-dish .dish-votes-count .dish-votes-value {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-right: 4px;\n}\n\n.video-info-wrapper {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  align-self: center;\n}\n\n.video-info-wrapper .image-title {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n\n.video-info-wrapper .image-title app-text-shell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-info-wrapper .image-description {\n  margin: 0px;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n\n.details-tags {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  -webkit-box-pack: left;\n          justify-content: left;\n  margin-top: calc(var(--page-tags-vertical-gutter) * 2 * -1);\n}\n\n.details-tags .tag-wrapper {\n  padding: calc(var(--page-tags-vertical-gutter) * 2) var(--page-tags-horizontal-gutter) 0px 0px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.details-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.details-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-medium-tint);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n}\n\n.reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.reviews-wrapper .reviews-list .review-item {\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-top: var(--page-margin);\n  background: #ffffff;\n  display: block;\n}\n\n.reviews-wrapper .reviews-list .review-item:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n\n.reviews-wrapper .reviews-list .review-item:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  margin: 5px var(--page-margin);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.reviews-wrapper .details-divider {\n  margin: 5px 0px;\n}\n\n.reviews-wrapper .all-reviews-btn {\n  margin: 5px 0px;\n}\n\n.reviews-wrapper .write-reviews-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n\n::ng-deep .language-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n\n::ng-deep .language-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .language-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .language-alert .alert-head,\n::ng-deep .language-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .language-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxwcm9maWxlXFxzdHlsZXNcXHVzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZmlsZS9zdHlsZXMvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcdGhlbWVcXG1peGluc1xcc2Nyb2xsYmFycy5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXHNlbGVjdC1hbGVydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsdUNBQUE7RUFDQSw0Q0FBQTtFQUVBLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUVBLHlEQUFBO0VBQ0EsMkRBQUE7RUFFQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBRUEsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDUkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0MsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1JIOztBRFdBO0VBQ0UsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1ZGOztBRFlFO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNWSjs7QURjQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRGdCQTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUNiRjs7QURlRTtFQUNFLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNiSjs7QURlSTtFQUNFLHlDQUFBO0FDYk47O0FEZ0JJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG1CQUFBO0FDZE47O0FEaUJJO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FDZk47O0FEa0JJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ2hCTjs7QURtQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDakJOOztBRHNCQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDbkJGOztBRHVCQTtFQUNFLDhCQUFBO0VBRUEsMEJBQUE7QUNyQkY7O0FEdUJFO0VBQ0UsY0FBQTtBQ3JCSjs7QUR3QkU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkFBQTtBQ3RCSjs7QUR3Qkk7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ3RCTjs7QUR3Qk07RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ3RCUjs7QUR5Qk07RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDdkJSOztBRDBCTTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FDeEJSOztBRDJCTTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDekJSOztBRDZCSTtFQUNFLHNCQUFBO0VBQ0Esc0RBQUE7RUFFQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0FDNUJOOztBRDhCTTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDNUJSOztBRDhCUTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtBQzVCVjs7QURnQ007RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDOUJSOztBRGdDUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0FDL0JWOztBRHNDQTtFQUNFLGVBQUE7QUNuQ0Y7O0FEcUNBO0VBQ0UsOEJBQUE7RUFFQSwwRUFBQTtFQUNBLGtDQUFBO0VBQ0EscURBQUE7QUNuQ0Y7O0FEcUNFO0VBQ0Usa0JBQUE7QUNuQ0o7O0FEcUNJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNuQ047O0FEc0NJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUNyQ047O0FEMENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSwwRUFBQTtFQUNBLGtDQUFBO0VBQ0EscURBQUE7QUN2Q0Y7O0FEeUNFO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2Q0o7O0FEMkNBO0VBQ0UsMEVBQUE7RUFDQSxrQ0FBQTtFQUNBLHFEQUFBO0FDeENGOztBRDBDRTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUN4Q0o7O0FEMENJO0VBQ0UsV0FBQTtBQ3hDTjs7QUQyQ0k7RUFDRSxrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUN6Q047O0FENkNFO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUV0UkYsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEeU9GOztBQ3RPRTtFQUNFLGFBQUE7QUR3T0o7O0FEMENJO0VBRUUsV0FBQTtFQUVBLG1CQUFBO1VBQUEsK0RBQUE7QUMxQ047O0FENkNJO0VBQ0UsdUNBQUE7QUMzQ047O0FENkNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDM0NSOztBRGlEQTtFQUNFLDBFQUFBO0VBQ0EsNENBQUE7QUM5Q0Y7O0FEZ0RFO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGtEQUFBO0FDL0NKOztBRGlESTtFQUNFLDhFQUFBO0FDL0NOOztBRHFEQTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNsREY7O0FEb0RFO0VBQ0UsV0FBQTtBQ2xESjs7QURxREU7RUFDRSxrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNuREo7O0FEdURBO0VBQ0UsOEJBQUE7QUNwREY7O0FEc0RFO0VBQ0UseUNBQUE7QUNwREo7O0FEdURFO0VBQ0UsNENBQUE7RUFFQSwwREFBQTtBQ3RESjs7QUQyREE7RUFDRSxrREFBQTtBQ3hERjs7QUQwREE7RUFDRSw4QkFBQTtBQ3hERjs7QUQwREU7RUFDRSxrQ0FBQTtBQ3hESjs7QUQyREU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUN6REo7O0FENERFO0VBQ0UscURBQUE7RUFDQSxxREFBQTtFQUVBLHFDQUFBO0VBQ0Esc0RBQUE7QUMzREo7O0FEOERFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUM1REo7O0FEOERJO0VBQ0UsbUNBQUE7QUM1RE47O0FEK0RJO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUM3RE47O0FEbUVBO0VBQ0UseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLGtCQUFBO0FDaEVGOztBRGtFRTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ2hFSjs7QURrRUk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNoRU47O0FEb0VFO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFHQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLDRCQUFBO0FDckVKOztBRDBFQTtFQUNFLDhCQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkRBQUE7QUN2RUY7O0FEeUVFO0VBQ0UsOEZBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUN2RUo7O0FEeUVJO0VBQ0Usa0JBQUE7QUN2RU47O0FEMkVFO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSw0RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDekVKOztBRDhFQTtFQUNFLGtEQUFBO0FDM0VGOztBRDZFRTtFQUNFLDJDQUFBO0FDM0VKOztBRDZFSTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtBQzdFTjs7QUQrRU07RUFDRSxrQ0FBQTtBQzdFUjs7QUQrRVE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUVBQUE7QUM3RVY7O0FEb0ZFO0VBQ0UsZUFBQTtBQ2xGSjs7QURxRkU7RUFDRSxlQUFBO0FDbkZKOztBRHNGRTtFQUNFLGtDQUFBO0FDcEZKOztBRDBGQTtFR3JmRSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUh1ZkEsK0NBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0FDdkZGOztBRWhhRTtFQUNFLHVEQUFBO0VBQ0EsMERBQUE7RUFDQSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsK0NBQUE7VUFBQSw4Q0FBQTtBRmthSjs7QUUvWkU7RUFDRSxnQ0FBQTtBRmlhSjs7QUU5WkU7O0VBRUUsZ0RBQUE7QUZnYUo7O0FFM1pJO0VBQ0UsV0FBQTtBRjZaTjs7QUV2Wkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUZ5Wk47O0FFdFpJO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBRnNaTjs7QUQ2REU7RUFDRSxhQUFBO0FDM0RKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9zZWxlY3QtYWxlcnRcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG5cbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtZnJpZW5kcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcblxuICAtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQ6IDZweDtcbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xuICAtLXBhZ2UtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi5taW5pLW1vZGFse1xuICBoZWlnaHQ6IDIwJTtcbiAgIHRvcDogODAlO1xuICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgIGRpc3BsYXk6IGJsb2NrOyAgXG59XG5cbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmV4cGlyYXRpb24tbGVhZCB7XG4gICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0gXG5cbi5zdGF0dXMtbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cblxuXG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYgKyAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cbn1cblxuLnJvdW5kSG9sZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDZweDtcbiAgZGlzcGxheTpibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDI2JTtcbiAgfVxuXG4gIC51c2VyLWluZm8td3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICAgIC51c2VyLWRhdGEtcm93IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgfVxuXG4gICAgICAudXNlci10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLm1lbWJlcnNoaXAtY29sIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItbWVtYmVyc2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG5cbiAgICAgIC5tYWluLWFjdGlvbnMge1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAuY2FsbC10by1hY3Rpb24tYnRuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnktYWN0aW9ucyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgICAubW9yZS1idG4ge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcblxuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi51c2VyLWFnZXtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVzZXItc3RhdHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cbiAgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnN0YXQtdmFsdWUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnN0YXQtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgLy9jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgfVxuICB9XG59XG5cbi5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLnVzZXItYWJvdXQtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAudXNlci1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAuaGVhZGluZy1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuZnJpZW5kcy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogNzsgLy8gV2Ugd2FudCB0byBzaG93IHRocmVlIGZyaWVuZHMgYW5kIGEgaGFsZi4gRWFjaCBmcmllbmQgZmlsbHMgMiBjb2xzID0+ICgzLjUgKiAyID0gNyBjb2xzKVxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICAvLyAuZnJpZW5kLWl0ZW0gaGFzIDhweCBvZiBzaWRlIHBhZGRpbmcsIHdlIG5lZWQgYW4gZXh0cmEgNHB4IGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZCB0byBmaWxsIHRoZSAxMnB4IHNpZGUgbWFyZ2luIG9mIHRoZSB2aWV3XG4gICAgICBmbGV4OiAwIDAgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKSk7XG4gICAgfVxuXG4gICAgLmZyaWVuZC1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKTtcblxuICAgICAgLmZyaWVuZC1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi51c2VyLXBob3Rvcy1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gIC5waWN0dXJlcy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogNDtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgIC5waWN0dXJlLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIDIpO1xuICAgIH1cbiAgfVxufVxuXG5cbi5oZWFkaW5nLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4ucGxheWxpc3QtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIH1cblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIGJvdHRvbVxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTdweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gIH1cbn1cblxuXG4ucG9wdWxhci1kaXNoZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4ucG9wdWxhci1kaXNoIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5kaXNoLW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIH1cblxuICAuZGlzaC1zY29yZSB7XG4gICAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4yMCk7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMSk7XG5cbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodCkgLyAyKTtcbiAgfVxuXG4gIC5kaXNoLXZvdGVzLWNvdW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmRpc2gtdm90ZXMtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG5cbiAgICAuZGlzaC12b3Rlcy12YWx1ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgfVxufVxufVxuXG4udmlkZW8taW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gIC5pbWFnZS10aXRsZSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIGFwcC10ZXh0LXNoZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcblxuICAgIC8vIGxpbmUgY2xhbXAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lLWNsYW1waW4vI2FydGljbGUtaGVhZGVyLWlkLTBcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB3ZSBuZWVkIGF1dG9wcmVmaXhlciBvZmYgZm9yIG5leHQgbGluZSBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzc3NiNpc3N1ZWNvbW1lbnQtNDQ1MjQ5MTc0XG4gICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH1cbn1cblxuXG4uZGV0YWlscy10YWdzIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogMiAqIC0xKTtcblxuICAudGFnLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIDBweCAwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLXRhZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIH1cbn1cblxuXG4ucmV2aWV3cy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLnJldmlld3MtbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5yZXZpZXctaXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvL3BhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAvL2JvcmRlci1yYWRpdXM6NHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogNXB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1kaXZpZGVyIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cblxuICAuYWxsLXJldmlld3MtYnRuIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cblxuICAud3JpdGUtcmV2aWV3cy1idG4ge1xuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gIH1cbn1cblxuLy8gQWxlcnRzIGFuZCBpbiBnZW5lcmFsIGFsbCBvdmVybGF5cyBhcmUgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3IgaW9uLWFwcCBkaXJlY3RseVxuLy8gV2UgbmVlZCB0byB1c2UgOjpuZy1kZWVwIHRvIGFjY2VzcyBpdCBmcm9tIGhlcmVcbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQge1xuICBAaW5jbHVkZSBzZWxlY3QtYWxlcnQoKTtcblxuICAvLyBWYXJpYWJsZXMgc2hvdWxkIGJlIGluIGEgZGVlcGVyIHNlbGVjdG9yIG9yIGFmdGVyIHRoZSBtaXhpbiBpbmNsdWRlIHRvIG92ZXJyaWRlIGRlZmF1bHQgdmFsdWVzXG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcblxuICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nOiA1cHg7XG4gIC0tcGFnZS1mcmllbmRzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXJhdGluZy01LWNvbG9yOiAjN2NlMTk4O1xuICAtLXBhZ2UtcmF0aW5nLTQtY29sb3I6ICNhOGUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMy1jb2xvcjogI2NlZTA3YztcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjZTBjNzdjO1xuICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNlMDdjN2M7XG4gIC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodDogNnB4O1xuICAtLXBhZ2UtY29sb3I6ICNlYmJiMDA7XG4gIC0tcGFnZS1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuLm1pbmktbW9kYWwge1xuICBoZWlnaHQ6IDIwJTtcbiAgdG9wOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leHBpcmF0aW9uLWNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leHBpcmF0aW9uLWNvdW50ZG93biAuZXhwaXJhdGlvbi1sZWFkIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN0YXR1cy1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgKyAuYWNjb21tb2RhdGlvbi1yb3cge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuaWNvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93IC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuYWNjb21tb2RhdGlvbi12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuXG4ucm91bmRIb2xkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiA2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMjYlO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLnVzZXItdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC5tZW1iZXJzaGlwLWNvbCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmbGV4LWdyb3c6IDA7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC51c2VyLW1lbWJlcnNoaXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyAubWFpbi1hY3Rpb25zIHtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyAubWFpbi1hY3Rpb25zIC5jYWxsLXRvLWFjdGlvbi1idG4ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5zZWNvbmRhcnktYWN0aW9ucyB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5zZWNvbmRhcnktYWN0aW9ucyAubW9yZS1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnVzZXItYWdlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udXNlci1zdGF0cy1zZWN0aW9uIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1zdGF0cy1zZWN0aW9uIC51c2VyLXN0YXRzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1zdGF0cy1zZWN0aW9uIC51c2VyLXN0YXRzLXdyYXBwZXIgLnN0YXQtdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVzZXItc3RhdHMtc2VjdGlvbiAudXNlci1zdGF0cy13cmFwcGVyIC5zdGF0LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4udXNlci1hYm91dC1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnVzZXItYWJvdXQtc2VjdGlvbiAudXNlci1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udXNlci1mcmllbmRzLXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDc7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6YmVmb3JlLCAudXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cgLmZyaWVuZC1pdGVtIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdyAuZnJpZW5kLWl0ZW0gLmZyaWVuZC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51c2VyLXBob3Rvcy1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLnBpY3R1cmVzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtaXRlbSB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAyKTtcbn1cblxuLmhlYWRpbmctcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGluZy1yb3cgLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmhlYWRpbmctcm93IC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wbGF5bGlzdC1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5wbGF5bGlzdC1pdGVtLXJvdzpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnBsYXlsaXN0LWl0ZW0tcm93Om5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtN3B4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cblxuLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIC5wb3B1bGFyLWRpc2gge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4ucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIgLnBvcHVsYXItZGlzaCAuZGlzaC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIC5wb3B1bGFyLWRpc2ggLmRpc2gtc2NvcmUge1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodCkgLyAyKTtcbn1cbi5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIC5wb3B1bGFyLWRpc2ggLmRpc2gtdm90ZXMtY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXZvdGVzLWNvdW50IC5kaXNoLXZvdGVzLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIC5wb3B1bGFyLWRpc2ggLmRpc2gtdm90ZXMtY291bnQgLmRpc2gtdm90ZXMtdmFsdWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnZpZGVvLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi52aWRlby1pbmZvLXdyYXBwZXIgLmltYWdlLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi52aWRlby1pbmZvLXdyYXBwZXIgLmltYWdlLXRpdGxlIGFwcC10ZXh0LXNoZWxsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udmlkZW8taW5mby13cmFwcGVyIC5pbWFnZS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uZGV0YWlscy10YWdzIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogMiAqIC0xKTtcbn1cbi5kZXRhaWxzLXRhZ3MgLnRhZy13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAqIDIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcikgMHB4IDBweDtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5kZXRhaWxzLXRhZ3MgLml0ZW0tdGFnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG5cbi5yZXZpZXdzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuLnJldmlld3Mtd3JhcHBlciAuZGV0YWlscy1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLnJldmlld3Mtd3JhcHBlciAuYWxsLXJldmlld3MtYnRuIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLnJldmlld3Mtd3JhcHBlciAud3JpdGUtcmV2aWV3cy1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xufVxuXG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IHtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtaGVhZCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG59XG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IC5hbGVydC1oZWFkLFxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1idXR0b24ge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuOWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyLjFlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCJAbWl4aW4gc2VsZWN0LWFsZXJ0KCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogIzAwMDtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiAxNnB4O1xuXG4gIC5hbGVydC1oZWFkIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gIH1cblxuICAuYWxlcnQtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtY29sb3IpO1xuICB9XG5cbiAgLmFsZXJ0LWhlYWQsXG4gIC5hbGVydC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZCk7XG4gIH1cblxuICAvLyBpT1Mgc3R5bGVzXG4gIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIC5hbGVydC10aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAvLyBNYXRlcmlhbCBzdHlsZXNcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuYWxlcnQtYnV0dG9uIHtcbiAgICAgIC8vIFZhbHVlcyB0YWtlbiBmcm9tIElvbmljIHNtYWxsIGJ1dHRvbiBwcmVzZXRcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuOWVtO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICBoZWlnaHQ6IDIuMWVtO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.shell.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 20px;\n  max-width: 50%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-title > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.user-title > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-membership > app-text-shell {\n  --text-shell-line-color: rgba(var(--ion-color-secondary-rgb), 0.4);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.user-membership > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.stat-value > app-text-shell {\n  --text-shell-line-height: 18px;\n  max-width: 50%;\n  margin: 0px auto;\n}\n\n.stat-value > app-text-shell.text-loaded {\n  max-width: unset;\n  margin: initial;\n}\n\n.user-description > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.friend-picture {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.friend-name > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.user-photo-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy9EOlxcV0VCIE1BUktFVFBMQUNFXFxBTkdVTEFSXFxCbHVzcGVjL3NyY1xcYXBwXFx1c2VyXFxwcm9maWxlXFxzdHlsZXNcXHVzZXItcHJvZmlsZS5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0FDREo7O0FES0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDRSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLDhCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNIRjs7QURLRTtFQUNFLGNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9zdHlsZXMvdXNlci1wcm9maWxlLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi51c2VyLXRpdGxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNzAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnVzZXItbWVtYmVyc2hpcCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjQpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uc3RhdC12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIG1hcmdpbjogaW5pdGlhbDtcbiAgfVxufVxuXG4udXNlci1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZnJpZW5kLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5mcmllbmQtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwudXNlci1waG90by1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufSIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnVzZXItdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG59XG4udXNlci10aXRsZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnVzZXItbWVtYmVyc2hpcCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjQpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi51c2VyLW1lbWJlcnNoaXAgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uc3RhdC12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xuICBtYXJnaW46IGluaXRpYWw7XG59XG5cbi51c2VyLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5mcmllbmQtcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmZyaWVuZC1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC51c2VyLXBob3RvLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user/profile/user-profile.page.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile.resolver */ "./src/app/user/profile/user-profile.resolver.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _change_profile_status_change_profile_status_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-profile-status/change-profile-status.modal */ "./src/app/user/profile/change-profile-status/change-profile-status.modal.ts");
/* harmony import */ var _work_reviews_work_review_work_review_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../work-reviews/work-review/work-review.module */ "./src/app/user/work-reviews/work-review/work-review.module.ts");
/* harmony import */ var _change_profile_description_change_profile_description_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-profile-description/change-profile-description.modal */ "./src/app/user/profile/change-profile-description/change-profile-description.modal.ts");













const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"],
        resolve: {
            data: _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["UserProfileResolver"]
        }
    }
];
let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _work_reviews_work_review_work_review_module__WEBPACK_IMPORTED_MODULE_11__["WorkReviewModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"], _change_profile_status_change_profile_status_modal__WEBPACK_IMPORTED_MODULE_10__["ChangeProfileStatusModal"], _change_profile_description_change_profile_description_modal__WEBPACK_IMPORTED_MODULE_12__["ChangeProfileDescriptionModal"]],
        providers: [
            _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["UserProfileResolver"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        ],
        entryComponents: [_change_profile_status_change_profile_status_modal__WEBPACK_IMPORTED_MODULE_10__["ChangeProfileStatusModal"], _change_profile_description_change_profile_description_modal__WEBPACK_IMPORTED_MODULE_12__["ChangeProfileDescriptionModal"]]
    })
], UserProfilePageModule);



/***/ }),

/***/ "./src/app/user/profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _update_update_user_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update/update-user.modal */ "./src/app/user/update/update-user.modal.ts");
/* harmony import */ var _education_details_create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../education-details/create/create-education-details.modal */ "./src/app/user/education-details/create/create-education-details.modal.ts");
/* harmony import */ var _change_profile_status_change_profile_status_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-profile-status/change-profile-status.modal */ "./src/app/user/profile/change-profile-status/change-profile-status.modal.ts");
/* harmony import */ var _change_profile_description_change_profile_description_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-profile-description/change-profile-description.modal */ "./src/app/user/profile/change-profile-description/change-profile-description.modal.ts");












let UserProfilePage = class UserProfilePage {
    constructor(route, ngRouter, menu, toastService, alertController, modalController, authService, storageService) {
        this.route = route;
        this.ngRouter = ngRouter;
        this.menu = menu;
        this.toastService = toastService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.authService = authService;
        this.storageService = storageService;
        this.user_profile_id = "";
        this.selfView = true;
        this.adminMode = false;
        this.loading = true;
        //localUser : any;
        this.completenessScore = 100;
    }
    get isShell() {
        return (this.profile && this.profile.isShell) ? true : false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.getAuthCache().then(promisedValue => {
                if (promisedValue) {
                    this.localUser = promisedValue;
                    this.user_profile_id = this.localUser.user_name;
                    console.log("/***** PROFILE PAGE LOCAL USER : " + JSON.stringify(promisedValue));
                    /************ CHECK ROUTE PARAM REQUESTS ***************/
                    this.route.paramMap.subscribe(params => {
                        if (params.get("user_id")) {
                            this.user_profile_id = params.get("user_id");
                            if (this.user_profile_id != this.localUser.user_name) {
                                this.selfView = false;
                            }
                            if (this.localUser.role_id === 1) {
                                this.adminMode = true;
                            }
                            // alert("YYY"+this.localUser.role_id);
                        }
                        this.hitProfileAPI();
                    });
                    /************ CHECK ROUTE PARAM REQUESTS ***************/
                }
                else {
                    this.toastService.presentToast("Looks like you are not logged in.");
                    this.authService.logout();
                }
            });
        });
    }
    //WHY SO LENGTHY
    hitProfileAPI() {
        if (navigator.onLine) {
            this.refreshFullProfile();
        }
    }
    refreshFullProfile() {
        this.loading = true;
        this.authService.getAuthCache().then(authData => {
            if (authData) {
                const postData = { 'user_id': this.user_profile_id };
                this.authService.getFullProfileFromServer(authData.api_key, postData).subscribe((res) => {
                    if (!res.error) {
                        if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].DEV_MODE) {
                            console.log("PROFILE SYNC :: " + JSON.stringify(res));
                        }
                        this.profile = res.myProfile;
                        this.loading = false;
                    }
                    else {
                        this.toastService.presentToast(res.message);
                    }
                }, (error) => {
                    this.toastService.presentToast('Looks like there is a Network Issue while fetching profile.');
                });
            }
        });
    }
    ionViewDidEnter() {
        if (!this.menu.isEnabled) {
            if (this.selfView) {
                this.menu.enable(true);
            }
        }
        this.hitProfileAPI();
    }
    addNewEducationItem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _education_details_create_create_education_details_modal__WEBPACK_IMPORTED_MODULE_9__["CreateEducationDetailsModal"],
                cssClass: "fullscreen-modal",
                componentProps: {
                    'user_id': this.user_profile_id
                }
            });
            yield modal.present();
        });
    }
    openItemUpdateModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let editUserProfile = {
                id: this.profile.id,
                first_name: this.profile.first_name,
                last_name: this.profile.last_name,
                status: this.profile.status,
                user_name: this.profile.user_name,
                mobile: this.profile.mobile,
                email: this.profile.email,
                address: this.profile.address,
                latitude: this.profile.latitude,
                longitude: this.profile.longitude,
                pincode: this.profile.pincode,
                role_id: this.profile.role_id,
                role_name: '',
                grafter_type: this.profile.grafter_type,
                grafter_type_name: '',
                city: this.profile.city,
                country: this.profile.country,
                api_key: '',
                date_created: '',
                user_image: this.profile.user_image,
                dob: this.profile.dob
            };
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_5__["AuthConstants"].DEV_MODE) {
                console.log("PASSING TO UPDATE::: " + JSON.stringify(editUserProfile));
            }
            const modal = yield this.modalController.create({
                component: _update_update_user_modal__WEBPACK_IMPORTED_MODULE_8__["UpdateUserModal"],
                componentProps: {
                    //'user': this.profile
                    'user': editUserProfile
                }
            });
            yield modal.present();
        });
    }
    openStatusDialog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _change_profile_status_change_profile_status_modal__WEBPACK_IMPORTED_MODULE_10__["ChangeProfileStatusModal"],
                //cssClass: 'mini-modal',
                componentProps: {
                    'userID': this.profile.id,
                    'tagline': this.profile.tagline
                }
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    this.profile.tagline = item.data;
                    this.refreshFullProfile();
                }
            });
            yield modal.present();
        });
    }
    openProfileDescDialog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _change_profile_description_change_profile_description_modal__WEBPACK_IMPORTED_MODULE_11__["ChangeProfileDescriptionModal"],
                componentProps: {
                    'userID': this.profile.id,
                    'description': this.profile.description,
                    'image': this.profile.user_image
                }
            });
            modal.onDidDismiss().then(item => {
                if (item.data != null) {
                    this.profile.description = item.data;
                    this.refreshFullProfile();
                }
            });
            yield modal.present();
        });
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserProfilePage.prototype, "isShell", null);
UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/user-profile.page.scss */ "./src/app/user/profile/styles/user-profile.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/user-profile.shell.scss */ "./src/app/user/profile/styles/user-profile.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/user-profile.ios.scss */ "./src/app/user/profile/styles/user-profile.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/user-profile.md.scss */ "./src/app/user/profile/styles/user-profile.md.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], UserProfilePage);



/***/ }),

/***/ "./src/app/user/profile/user-profile.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/profile/user-profile.resolver.ts ***!
  \*******************************************************/
/*! exports provided: UserProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileResolver", function() { return UserProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






let UserProfileResolver = class UserProfileResolver {
    constructor(userService, storageService, authService) {
        this.userService = userService;
        this.storageService = storageService;
        this.authService = authService;
    }
    resolve(route) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authDataVal = yield this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH);
            //console.log("JobApplicationsManagerResolver authDataVal => "+JSON.stringify(authDataVal));
            let user_id = route.params['user_id'];
            let apiKey = authDataVal.api_key;
            const dataSource = this.userService.getProfileDataSource(apiKey, user_id);
            const dataStore = this.userService.getProfileStore(dataSource);
            return dataStore;
        });
    }
};
UserProfileResolver.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
UserProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], UserProfileResolver);



/***/ }),

/***/ "./src/app/user/work-reviews/work-review/work-review.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/work-reviews/work-review/work-review.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n}\n\n.review-user {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n}\n\n.review-user .user-image-wrapper {\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.review-user .user-brief-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.review-user .user-brief-wrapper .review-user-name {\n  font-size: 14px;\n  margin: 0px;\n  font-weight: 500;\n}\n\n.review-user .user-brief-wrapper .user-scores .user-score .score-title {\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  margin-left: 4px;\n}\n\n.review-user .review-info-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  min-width: 20%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n\n.review-user .review-info-wrapper .review-date {\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n\n.review-user .review-info-wrapper .review-rating {\n  width: 36px;\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 13px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  background-color: var(--ion-color-medium-tint);\n}\n\n.review-user .review-info-wrapper .review-rating[ratingBase=\"1\"] {\n  background-color: var(--page-rating-1-color);\n}\n\n.review-user .review-info-wrapper .review-rating[ratingBase=\"2\"] {\n  background-color: var(--page-rating-2-color);\n}\n\n.review-user .review-info-wrapper .review-rating[ratingBase=\"3\"] {\n  background-color: var(--page-rating-3-color);\n}\n\n.review-user .review-info-wrapper .review-rating[ratingBase=\"4\"] {\n  background-color: var(--page-rating-4-color);\n}\n\n.review-user .review-info-wrapper .review-rating[ratingBase=\"5\"] {\n  background-color: var(--page-rating-5-color);\n}\n\n.review-message {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  margin: var(--page-margin) 0px;\n}\n\n.review-scores {\n  padding: 0px var(--page-margin) var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.review-scores .review-score {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.review-scores .review-score:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n\n.review-scores .review-score:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci93b3JrLXJldmlld3Mvd29yay1yZXZpZXcvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcdXNlclxcd29yay1yZXZpZXdzXFx3b3JrLXJldmlld1xcd29yay1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvd29yay1yZXZpZXdzL3dvcmstcmV2aWV3L3dvcmstcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFSTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNDTjs7QURBTTtFQUNFLDJDQUFBO0FDRVI7O0FEQ007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBRUEsMkNBQUE7QUNBUjs7QURFUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBVjs7QURLWTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSGQ7O0FEU007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNQUjs7QURTUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNQVjs7QURVUTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0VBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSw4Q0FBQTtBQ1RWOztBRFdVO0VBQ0UsNENBQUE7QUNUWjs7QURXVTtFQUNFLDRDQUFBO0FDVFo7O0FEV1U7RUFDRSw0Q0FBQTtBQ1RaOztBRFdVO0VBQ0UsNENBQUE7QUNUWjs7QURXVTtFQUNFLDRDQUFBO0FDVFo7O0FEZUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDWk47O0FEZUk7RUFDRSxrREFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNaTjs7QURjTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNaUjs7QURjUTtFQUNFLDBDQUFBO0FDWlY7O0FEZVE7RUFDRSwyQ0FBQTtFQUNBLG9EQUFBO0FDYlYiLCJmaWxlIjoic3JjL2FwcC91c2VyL3dvcmstcmV2aWV3cy93b3JrLXJldmlldy93b3JrLXJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxuICAgIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG4gICAgLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gICAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xyXG4gIH1cclxuICBcclxuICAgIC5yZXZpZXctdXNlciB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICAgICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXItYnJpZWYtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgLnJldmlldy11c2VyLW5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItc2NvcmVzIHtcclxuICAgICAgICAgIC51c2VyLXNjb3JlIHtcclxuICAgICAgICAgICAgLnNjb3JlLXRpdGxlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJldmlldy1pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgICAgICAucmV2aWV3LWRhdGUge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmV2aWV3LXJhdGluZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLy8gRGVmYXVsdCBjb2xvclxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuXHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIyXCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIzXCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCI0XCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCI1XCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJldmlldy1tZXNzYWdlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXctc2NvcmVzIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIC5yZXZpZXctc2NvcmUge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xufVxuXG4ucmV2aWV3LXVzZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4ucmV2aWV3LXVzZXIgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmV2aWV3LXVzZXIgLnVzZXItYnJpZWYtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5yZXZpZXctdXNlciAudXNlci1icmllZi13cmFwcGVyIC5yZXZpZXctdXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yZXZpZXctdXNlciAudXNlci1icmllZi13cmFwcGVyIC51c2VyLXNjb3JlcyAudXNlci1zY29yZSAuc2NvcmUtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1pbi13aWR0aDogMjAlO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4LWdyb3c6IDA7XG59XG4ucmV2aWV3LXVzZXIgLnJldmlldy1pbmZvLXdyYXBwZXIgLnJldmlldy1kYXRlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZyB7XG4gIHdpZHRoOiAzNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIC5yZXZpZXctcmF0aW5nW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4ucmV2aWV3LXVzZXIgLnJldmlldy1pbmZvLXdyYXBwZXIgLnJldmlldy1yYXRpbmdbcmF0aW5nQmFzZT1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcbn1cbi5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZ1tyYXRpbmdCYXNlPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xufVxuLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIC5yZXZpZXctcmF0aW5nW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG59XG5cbi5yZXZpZXctbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbn1cblxuLnJldmlldy1zY29yZXMge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJldmlldy1zY29yZXMgLnJldmlldy1zY29yZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJldmlldy1zY29yZXMgLnJldmlldy1zY29yZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5yZXZpZXctc2NvcmVzIC5yZXZpZXctc2NvcmU6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/work-reviews/work-review/work-review.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/work-reviews/work-review/work-review.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkReviewComponent", function() { return WorkReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dbmodels_work_review_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dbmodels/work-review-model */ "./src/app/dbmodels/work-review-model.ts");



let WorkReviewComponent = class WorkReviewComponent {
    constructor() {
        this.adminMode = false;
    }
    ngOnInit() {
        // console.log("Inside Review Component => "+JSON.stringify(this.review));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('review'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dbmodels_work_review_model__WEBPACK_IMPORTED_MODULE_2__["WorkReviewModel"])
], WorkReviewComponent.prototype, "review", void 0);
WorkReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/work-reviews/work-review/work-review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-review.component.scss */ "./src/app/user/work-reviews/work-review/work-review.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkReviewComponent);



/***/ }),

/***/ "./src/app/user/work-reviews/work-review/work-review.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/work-reviews/work-review/work-review.module.ts ***!
  \*********************************************************************/
/*! exports provided: WorkReviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkReviewModule", function() { return WorkReviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _work_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-review.component */ "./src/app/user/work-reviews/work-review/work-review.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");





//import { ShellModule } from '../../../shell/shell.module';


let WorkReviewModule = class WorkReviewModule {
};
WorkReviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot()
        ],
        declarations: [
            _work_review_component__WEBPACK_IMPORTED_MODULE_5__["WorkReviewComponent"]
        ],
        exports: [
            _work_review_component__WEBPACK_IMPORTED_MODULE_5__["WorkReviewComponent"]
        ]
    })
], WorkReviewModule);



/***/ })

}]);
//# sourceMappingURL=default~profile-user-profile-module~user-profile-user-profile-module-es2015.js.map