(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome/welcome.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome/welcome.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img src=\"assets/images/logo.png\" style=\"height:40px;vertical-align: middle;\"/></ion-title>\n    <ion-buttons slot=\"end\">\n\n      <ion-button [routerLink]=\"['/auth/login']\" *ngIf=\"!isLoggedIn\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/login.svg\" ></ion-icon>\n      </ion-button>\n\n      <ion-button [routerLink]=\"['/auth/logout']\" *ngIf=\"isLoggedIn\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/sample-icons/side-menu/logout.svg\" ></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n\n  <!--------######## AUTH CARD ########\n  <ion-card text-center [routerLink]=\"'/profile'\" *ngIf=\"isLoggedIn && devMode\">\n    <div class=\"\">\n    <ion-row class=\"\" style=\"margin-top:2px;margin-bottom: 2px;\">\n      <ion-col size=\"2\" class=\"user-image-wrapper\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"review-user-image\" [src]=\"'localUser?.user_image'\" [alt]=\"'review user image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"user-brief-wrapper\" style=\"align-items: flex-start;text-align: left;\">\n        <h5 class=\"review-user-name\" style=\"margin-top:2px;margin-bottom: 2px;\">\n          <app-text-shell [data]=\"localUser?.first_name+' '+localUser?.last_name\"></app-text-shell>\n        </h5>\n        <ion-row class=\"details-scores user-scores\" style=\"margin-top: 2px;margin-bottom: 2px;\">\n          <ion-col class=\"score-item user-score\">\n            <ion-icon class=\"score-icon\" style=\"font-size: 20px;\" src=\"./assets/sample-icons/side-menu/clock.svg\"></ion-icon>\n            <div class=\"score-value\">\n              <app-text-shell [data]=\"localUser?.online_status\"></app-text-shell>\n            </div>\n          </ion-col>\n          <ion-col class=\"score-item user-score\">\n            <ion-icon class=\"score-icon\" style=\"font-size: 20px;\" src=\"./assets/sample-icons/side-menu/map-pin.svg\"></ion-icon>\n            <div class=\"score-value\">\n              <app-text-shell [data]=\"localUser?.id+' => '+localUser?.status\"></app-text-shell>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row></div>\n    </ion-card>\n  ######## AUTH CARD ########----->\n\n\n<!----------- CARD BANNER GRAFTER ---------->\n<div class=\"listing-item\" *ngIf=\"isLoggedIn && localUser !== null && localUser?.role_id == 3\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slide_grafter_bg1.jpg'\" [routerLink]=\"['/job-requests']\">\n        <app-aspect-ratio [ratio]=\"{w:10, h:5}\">\n          <div class=\"content-inside-item-image\">\n            <div class=\"slideText\">\n              <h5 style=\"color: white;text-align: center;\">Discover work opportunities, find part-time, full-time and contract jobs in areas of your choice.</h5>\n            </div>\n            <div class=\"item-cta\">\n              <span>Find Jobs</span>\n              <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n            </div>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row></div>\n  <!----------- CARD BANNER ---------->\n\n<!----------- CARD BANNER ---------->\n<div class=\"listing-item\" *ngIf=\"isLoggedIn && localUser !== null && localUser?.role_id == 2 ||  localUser?.role_id == 1\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slidebg4.jpg'\" [routerLink]=\"['/post-new-job']\">\n        <app-aspect-ratio [ratio]=\"{w:5, h:2}\">\n          <div class=\"content-inside-item-image\">\n            <div class=\"slideText\">\n              <h5 style=\"color: white;text-align: center;\">Post your job requirement to get offers from professionals. Review, shortlist and get your work done.</h5>\n            </div>\n            <div class=\"item-cta\">\n              <span>GET STARTED</span>\n              <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n            </div>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row></div>\n  <!----------- CARD BANNER ---------->\n\n\n  <ion-slides class=\"walkthrough-slides\" pager=\"true\" [options]=\"slidesOptions\" *ngIf=\"!isLoggedIn\">\n    <ion-slide class=\"first-slide\">\n      <ion-row class=\"\">\n        <ion-col size=\"12\">\n          <img src=\"assets/images/bg-hire.jpg\"/>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n    <ion-slide class=\"second-slide\">\n      <ion-row class=\"slide-inner-row\">\n        <ion-col class=\"\">\n          <img src=\"assets/images/bg-professionals.jpg\"/>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n  \n\n  <!----- SECTION FOR EMPLOYER : PROMO BOX ----->\n<!-- <ion-row class=\"promo-row\" style=\"background-color: #eeeeee;\" *ngIf=\"employerMode\">   \n  <ion-col size=\"10\">\n    <h1><ion-icon name=\"rocket\" style=\"font-size: 40px;\"></ion-icon></h1>\n    <h4 class=\"promo-description\">\n      Looking to hire for your company or individual requirements? Post a job to find the right professional easily and quickly.\n    </h4>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-button href=\"/bluspec-recruiter\" class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\">\n      <span class=\"promo-code\">\n        POST A JOB\n      </span>\n    </ion-button>\n  </ion-col>\n</ion-row> -->\n\n\n<div style=\"background-color: #fff;display:block;\"> \n<div class=\"user-friends-section\">\n  <ion-row class=\"heading-row\">\n    <h5 class=\"details-section-title\" *ngIf=\"employerMode\">JOB SKILLS</h5>\n    <h5 class=\"details-section-title\" *ngIf=\"!employerMode\">FIND JOBS BY SKILLS</h5>\n    <a class=\"heading-call-to-action\" [routerLink]=\"['/job-skills/listing']\">SEE ALL</a>\n  </ion-row>\n\n  <ion-row class=\"heading-row\" style=\"margin-top:0px;\">\n    <p *ngIf=\"!employerMode\" class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #111;\">\n      Find part-time, full-time, contract and freelancer jobs by your skills. Set up your preferences to see most relevant opportunities.</p>\n   \n      <p *ngIf=\"employerMode\" class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #111;\">\n        Find part-time, full-time, contract and freelancer experts in a wide range of job skills.</p>\n     \n  </ion-row>\n  <ion-row class=\"bluspeccarosell-row\">\n    <ion-col class=\"friend-item\" size=\"2\" *ngFor=\"let friend of skills\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" style=\"background-color: white;\" [routerLink]=\"['/job-skills/details', friend.id]\">\n        <app-image-shell class=\"friend-picture\" style=\"background-color: white;border-radius: 10px;\" [src]=\"friend.image\"></app-image-shell>\n      </app-aspect-ratio>\n      <span class=\"friend-name\">\n        <app-text-shell [data]=\"friend.title\" [routerLink]=\"['/job-skills/details', friend.id]\"></app-text-shell>\n      </span>\n    </ion-col>\n  </ion-row>\n</div></div>\n\n\n<!----- SECTION FOR GRAFTER : PROMO BOX ----->\n<ion-row class=\"promo-row\" style=\"background-color: #eeeeee;\" *ngIf=\"localUser !== null && (localUser?.role_id == 1 || localUser?.role_id == 3)\">   \n  <ion-col size=\"10\">\n    <h3><ion-icon name=\"notifications\" style=\"font-size: 40px;color:#666666;\"></ion-icon></h3>\n   \n    <p class=\"promo-description\">\n     Subscribe to get notified of the best job opportunities in areas of your preference.\n    </p>\n    \n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-button class=\"promo-code-btn\" expand=\"block\" shape=\"round\" fill=\"outline\" color=\"claim\">\n      <span class=\"promo-code\">\n        <app-text-shell *ngIf=\"localUser\" [routerLink]=\"['/people/assign-skills', localUser?.id]\" [data]=\"'SUBSCRIBE'\"></app-text-shell>\n      </span>\n    </ion-button>\n  </ion-col>\n</ion-row>\n<!----- SECTION: PROMO BOX ----->\n\n\n  <!----------- CARD BANNER GRAFTER ---------->\n  <div class=\"listing-item\" *ngIf=\"isLoggedIn && localUser !== null && localUser?.role_id == 3\">\n    <ion-row class=\"image-row\">\n      <ion-col size=\"12\">\n        <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slide_grafter_bg3.jpg'\" [routerLink]=\"['/people/profile']\">\n          <app-aspect-ratio [ratio]=\"{w:6, h:3}\">\n            <div class=\"content-inside-item-image\">\n              <div class=\"slideText\">\n                <h5 style=\"color: white;text-align: center;\"> Stand out with your professional profile. List your skills, education details and work experiences. </h5>\n\n              </div>\n              <div class=\"item-cta\">\n                <span>MY PROFILE</span>\n                <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n              </div>\n            </div>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n    </ion-row></div>\n    <!----------- CARD BANNER ---------->\n\n\n<!-----------##### COMPANIES #####-------->\n<section class=\"\" style=\"background-color:#0A5392;display: block;padding-top:14px;\">   \n  <div class=\"user-friends-section\">\n    <ion-row class=\"heading-row\">\n      <h5 class=\"details-section-title\" style=\"color: #ffffff;\">JOB AREAS</h5>\n      <a class=\"heading-call-to-action\" style=\"color: #ffffff;\" [routerLink]=\"['/job-areas/listing']\">SEE ALL</a>\n    </ion-row>\n   \n    <ion-row class=\"heading-row\" style=\"margin-top:0px;\">\n      <p *ngIf=\"!employerMode\" class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #ffffff;\">Stay updated to the most relevant jobs in top companies of your favourite domain. </p>\n      <p *ngIf=\"!employerMode\" class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #ffffff;\">\n        Subscribe to get notifications whenever a new relevant job is posted. </p>\n\n      <p *ngIf=\"employerMode\" class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #ffffff;\">\n        Register your company to start posting jobs. Discover talents easily and quickly on Bluspec. <a href=\"/companies/create\"></a></p>\n     \n    </ion-row>\n\n    <ion-row class=\"friends-row\">\n      <ion-col class=\"friend-item\" size=\"2\" *ngFor=\"let friend of jobAreas\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" [routerLink]=\"['/job-areas/details', friend.id]\">\n          <app-image-shell  style=\"background-color: white;border-radius: 10px;padding:8px;\" class=\"friend-picture\" [src]=\"friend.image\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"friend.title\" style=\"color:#ffffff;\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div></section>\n\n\n  <!----- SECTION: EMPLOYER JOB POST PROMO BOX ----->\n<ion-row class=\"promo-row\" style=\"background-color:white;display: block;padding:25px;\" *ngIf=\"localUser !== null && (localUser?.role_id == 1 || localUser?.role_id == 2)\">   \n  <ion-col size=\"10\">\n    <h1><ion-icon name=\"rocket\" style=\"font-size: 40px;color:#444444;\"></ion-icon></h1>\n    <h3 class=\"promo-description\" style=\"color: #444444;\"> \n      Looking to hire talents for your company or find grafters to get your individual jobs done? \n    </h3>\n\n    <h2 class=\"promo-description\" style=\"color: #444444;\"> \n      Post a job now and let us find the best match for your requirement.\n    </h2>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-button href=\"/post-new-job\" class=\"promo-code-btn\" expand=\"cover\" shape=\"round\" fill=\"outline\" color=\"dark\">\n      <span class=\"promo-code\">\n        POST A JOB\n      </span>\n    </ion-button>\n  </ion-col>\n</ion-row>\n<!----- SECTION: EMPLOYER JOB POST PROMO BOX ----->\n\n\n<!----------- CARD BANNER ---------->\n<div class=\"listing-item\" *ngIf=\"isLoggedIn && localUser !== null && localUser?.role_id == 2 || localUser?.role_id == 1\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slidebg3.jpg'\" [routerLink]=\"['/people/listing/grafters']\">\n        <app-aspect-ratio [ratio]=\"{w:5, h:3}\">\n          <div class=\"content-inside-item-image\">\n            <div class=\"slideText\">\n              <h5 style=\"color: white;text-align: center;\">Hire Freelancers and Top Skilled Professionals easily and quickly.</h5>\n            </div>\n            <div class=\"item-cta\">\n              <span>Find Professionals</span>\n              <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n            </div>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row></div>\n  <!----------- CARD BANNER ---------->\n\n<!-----------##### PROFESSIONALS #####-------\n  <div class=\"\" style=\"display:block;\" *ngIf=\"employerMode\"> \n    <div class=\"user-friends-section\">\n      <ion-row class=\"heading-row\">\n        <h5 class=\"details-section-title\">PROFESSIONALS</h5>\n        <a class=\"heading-call-to-action\" [routerLink]=\"['/hire-people-for-work']\">FIND</a>\n      </ion-row>\n    \n      <ion-row class=\"heading-row\" style=\"margin-top:0px;\">\n        <p class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #111;\">\n          Find among a vast talent pool of our professionals. Search, shortlisted and get your work done.</p>\n       \n      </ion-row>\n      <ion-row class=\"bluspeccarosell-row\">\n        <ion-col class=\"friend-item\" size=\"2\" *ngFor=\"let friend of skills\" [routerLink]=\"['/view-profile', friend.id]\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" style=\"background-color: white;\">\n            <app-image-shell class=\"friend-picture\" [src]=\"friend.image\"></app-image-shell>\n          </app-aspect-ratio>\n          <span class=\"friend-name\">\n            <app-text-shell [data]=\"friend.title\"></app-text-shell>\n          </span>\n        </ion-col>\n      </ion-row>\n    </div></div> --->\n\n\n<!-----------##### COMPANIES #####-------->\n<section class=\"bluspecrow\" style=\"background-color: #ffffff;display: block;padding-top:15px;\">   \n  <div class=\"user-friends-section\">\n    <ion-row class=\"heading-row\">\n      <h5 class=\"details-section-title\" style=\"color: #444444;\">COMPANIES</h5>\n      <a class=\"heading-call-to-action\" style=\"color: #444444;\" [routerLink]=\"['/companies/listing']\">SEE ALL</a>\n    </ion-row>\n   \n    <ion-row class=\"heading-row\" style=\"margin-top:0px;\">\n      <p class=\"details-section-title\" style=\"text-align:left;font-size:14px;line-height:14px;color: #444444;\">Stay updated to the most relevant jobs in top companies of your favourite domain. </p>\n     \n    </ion-row>\n\n    <ion-row class=\"friends-row\">\n      <ion-col class=\"friend-item\" size=\"2\" *ngFor=\"let friend of companies\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\" [routerLink]=\"['/companies/details', friend.id]\">\n          <app-image-shell class=\"friend-picture\" [src]=\"friend.logo\" style=\"background-color: cyan\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\" style=\"color: #444444;\">\n          <app-text-shell [data]=\"friend.title\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div></section>\n\n  <!----------- CARD BANNER GRAFTER ---------\n  <div class=\"listing-item\" *ngIf=\"isLoggedIn && localUser !== null && localUser?.role_id == 3\">\n    <ion-row class=\"image-row\">\n      <ion-col size=\"12\">\n        <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"'./assets/images/slide_grafter_bg3.jpg'\" [routerLink]=\"['/people/profile']\">\n          <app-aspect-ratio [ratio]=\"{w:8, h:3}\">\n            <div class=\"content-inside-item-image\">\n              <div class=\"slideText\">\n                <h5 style=\"color: white;text-align: center;\">Stand out with your professional profile. </h5>\n              </div>\n              <div class=\"item-cta\">\n                <span>MY PROFILE</span>\n                <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n              </div>\n            </div>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n    </ion-row></div>\n    ---------- CARD BANNER ---------->\n\n</ion-content>\n\n<!-- <ion-footer style=\"background-color:#eeeeee;\">\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button *ngIf=\"localUser !== null && localUser?.role_id == 3\" class=\"action-btn\" color=\"secondary\" expand=\"block\" fill=\"solid\" (click)=\"openSizeChooser()\">WORK</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button *ngIf=\"localUser !== null && localUser?.role_id == 2\" class=\"action-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">HIRE</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer> -->\n");

/***/ }),

/***/ "./src/app/welcome/welcome/welcome.module.ts":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome/welcome.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome/welcome.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_masters_job_skills_job_skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-masters/job-skills/job-skills.service */ "./src/app/app-masters/job-skills/job-skills.service.ts");









const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]],
        providers: [_app_masters_job_skills_job_skills_service__WEBPACK_IMPORTED_MODULE_8__["JobSkillsService"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome/welcome.page.scss":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome/welcome.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.action-btn {\n  font-size: 24px;\n}\n\n.image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.image-row .item-image {\n  cursor: pointer;\n}\n\n.image-row .item-image:focus {\n  outline: none;\n}\n\n.image-row .content-inside-item-image {\n  padding: 0px 12%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.image-row .content-inside-item-image .item-icon {\n  width: 54px;\n  align-self: center;\n  margin-bottom: 24px;\n}\n\n.image-row .content-inside-item-image .item-cta {\n  margin: 0px auto;\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: var(--ion-color-light);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #0A5392;\n  border-radius: var(--app-fair-radius);\n}\n\n.image-row .content-inside-item-image .item-cta .cta-icon {\n  font-size: 26px;\n  margin-left: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHdlbGNvbWVcXHdlbGNvbWVcXHdlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxlQUFBO0FDQ047O0FEQ007RUFDRSxhQUFBO0FDQ1I7O0FER0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRE47O0FER007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RSOztBRElNO0VBQ0UsZ0JBQUE7RUFDQSw4REFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLHFDQUFBO0FDSFI7O0FES1E7RUFDRSxlQUFBO0VBQ0EseUNBQUE7QUNIViIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gICAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xyXG4gIH1cclxuICBcclxuLmFjdGlvbi1idG57XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5pbWFnZS1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5pdGVtLWltYWdlIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIHtcclxuICAgICAgcGFkZGluZzogMHB4IDEyJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5pdGVtLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXRlbS1jdGEge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBBNTM5MjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG5cclxuICAgICAgICAuY3RhLWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5pbWFnZS1yb3cgLml0ZW0taW1hZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2Utcm93IC5pdGVtLWltYWdlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pbWFnZS1yb3cgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xuICBwYWRkaW5nOiAwcHggMTIlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSAuaXRlbS1pY29uIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5pbWFnZS1yb3cgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2UgLml0ZW0tY3RhIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBNTM5MjtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cbi5pbWFnZS1yb3cgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2UgLml0ZW0tY3RhIC5jdGEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome/welcome.page.ts":
/*!*************************************************!*\
  !*** ./src/app/welcome/welcome/welcome.page.ts ***!
  \*************************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_masters_job_skills_job_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-masters/job-skills/job-skills.service */ "./src/app/app-masters/job-skills/job-skills.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _user_profile_user_profile_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user/profile/user-profile.model */ "./src/app/user/profile/user-profile.model.ts");











let WelcomePage = class WelcomePage {
    constructor(firebaseService, masterService, authService, storageService, alertController, modalController, router, toastService, menu, route) {
        this.firebaseService = firebaseService;
        this.masterService = masterService;
        this.authService = authService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.router = router;
        this.toastService = toastService;
        this.menu = menu;
        this.route = route;
        this.userData = new _user_profile_user_profile_model__WEBPACK_IMPORTED_MODULE_10__["BluspecUserModel"]();
        this.jobAreas = [];
        this.skills = [];
        this.professionals = [];
        this.companies = [];
        this.employerMode = false;
        this.isLoggedIn = false;
        this.devMode = _config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE;
    }
    getCompaniesOnBoard() {
        /******** START FETCH COMPANIES *******/
        this.masterService.getCompanyListCarosell(this.api_key).subscribe((res) => {
            if (res) {
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].COMPANIES, res.items);
                console.log("FETCHED COMPANIES : " + JSON.stringify(res));
                this.companies = res.items;
            }
        }, (error) => {
            this.toastService.presentToast('Looks like there is a Network Issue while fetching companies.');
        });
        /******** ENDS FETCH COMPANIES THEN *******/
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
    /*************** HERO ************ */
    ngOnInit() {
        //this.menu.enable(false);
        this.menu.enable(true);
        //Right way 
        this.storageService
            .get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].AUTH)
            .then(res => {
            if (res) {
                this.localUser = res;
                this.isLoggedIn = true;
                this.api_key = res.api_key;
                if (this.localUser != null && this.localUser.role_id == 2) {
                    this.employerMode = true;
                }
                this.getJobAreasFromLocalStorage();
                this.getJobSkillsFromLocalStorage();
                this.getCompaniesFromLocalStorage();
                //This is live fetch mode instead
                //this.getJobSkillsOnBoard();
                //this.getJobAreasOnBoard();
                //this.getCompaniesOnBoard();
                this.toastService.presentToast("Bluspec is on your board.  " + this.api_key);
            }
            else {
                this.localUser = null;
                this.isLoggedIn = false;
            }
        });
    }
    getJobSkillsOnBoard() {
        /******** START FETCH SKILLS *******/
        this.masterService.getSkills().subscribe((res) => {
            if (!res.error) {
                console.log(JSON.stringify(res));
                this.skills = res.result;
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].JOB_SKILLS, res.result);
            }
        }, (error) => {
            this.toastService.presentToast('Looks like there is a Network Issue while fetching skills.');
        });
        /******** ENDS FETCH SKILLS THEN *******/
    }
    getJobAreasOnBoard() {
        /******** START FETCH JOB AREAS *******/
        this.masterService.getJobAreas().subscribe((res) => {
            if (!res.error) {
                console.log("/**************/ FETCHED JOB AREAS: " + JSON.stringify(res));
                this.jobAreas = res.result;
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].JOB_CATEGORIES, res.result);
            }
        }, (error) => {
            this.toastService.presentToast('Looks like there is a Network Issue while fetching job areas.');
        });
        /******** ENDS FETCH JOB AREAS *******/
    }
    /************* ### LOCAL SYNCS ### *************/
    getCompaniesFromLocalStorage() {
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].COMPANIES).then(results => {
            if (results) {
                this.companies = results;
            }
            else {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                    this.toastService.presentToast("Fetching companies from server.");
                }
                this.getCompaniesOnBoard();
            }
        });
    }
    getJobSkillsFromLocalStorage() {
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].JOB_SKILLS).then(results => {
            if (results) {
                this.skills = results;
            }
            else {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                    this.toastService.presentToast("Fetching job skills from server.");
                }
                this.getJobSkillsOnBoard();
            }
        });
    }
    getJobAreasFromLocalStorage() {
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].JOB_AREAS).then(results => {
            if (results) {
                this.jobAreas = results;
            }
            else {
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_9__["AuthConstants"].DEV_MODE) {
                    this.toastService.presentToast("Fetching Job Areas from server.");
                }
                this.getJobAreasOnBoard();
            }
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _app_masters_job_skills_job_skills_service__WEBPACK_IMPORTED_MODULE_2__["JobSkillsService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome/welcome.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/details.page.scss */ "./src/app/bluspecstyles/details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/details.shell.scss */ "./src/app/bluspecstyles/details.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_masters_job_skills_job_skills_service__WEBPACK_IMPORTED_MODULE_2__["JobSkillsService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-welcome-module-es2015.js.map