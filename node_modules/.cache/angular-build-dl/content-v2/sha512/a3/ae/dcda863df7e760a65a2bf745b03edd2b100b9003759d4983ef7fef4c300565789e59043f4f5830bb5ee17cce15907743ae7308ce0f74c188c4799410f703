(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-users-summary-users-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/users-summary/users-summary.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/users-summary/users-summary.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"firebase-listing-content\" style=\"background-color: red;\">\n  <!-- <div class=\"list\" ng-repeat=\"things in countryLabels\">\n    {{things}}\n  </div> -->\n\n\n  <div color=\"primary\" class=\"ion-padding\" *ngIf=\"appSettings && appSettings.devMode\">\n    <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"reloadGraphs()\">RELOAD GRAPHS</ion-button>\n  </div>\n\n  <ion-card class=\"stats-card\" style=\"display: block;\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Total Users Summary</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChart></canvas>\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- Segment buttons with text and click listeners -->\n  <!-- <ion-segment mode=\"md\" class=\"stats-segment\" (ionChange)=\"segmentButtonClicked($event)\">\n    <ion-segment-button value=\"all\" checked=\"true\">\n      <ion-label>OVERALL DISTRIBUTION</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"grafters\">\n      <ion-label>GRAFTERS</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"employers\">\n      <ion-label>EMPLOYERS</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n\n  <ion-card class=\"stats-card\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Overall Distribution</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForCountry></canvas>\n    </ion-card-content>\n  </ion-card> \n\n  <ion-card class=\"stats-card\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Grafters Distribution</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForGraftersCountry></canvas>\n    </ion-card-content>\n  </ion-card> \n\n  <ion-card class=\"stats-card\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Employers Distribution</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForEmployersCountry></canvas>\n    </ion-card-content>\n  </ion-card> \n\n\n  <!-- <ion-card class=\"stats-card\" [hidden]=\"tabChoice != 'all'\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Overall Distribution</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForCountry></canvas>\n    </ion-card-content>\n  </ion-card> \n\n  <ion-card class=\"stats-card\" [hidden]=\"tabChoice != 'grafters'\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Grafters Distribution</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForGraftersCountry></canvas>\n    </ion-card-content>\n  </ion-card> \n\n  <ion-card class=\"stats-card\" [hidden]=\"tabChoice != 'employers'\">\n    <ion-card-header>\n      <ion-card-title justify-content-center>Employers Distribution</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barChartForEmployersCountry></canvas>\n    </ion-card-content>\n  </ion-card>  -->\n  \n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading User Stats</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard/users-summary/users-summary.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/users-summary/users-summary.module.ts ***!
  \*****************************************************************/
/*! exports provided: UsersSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSummaryPageModule", function() { return UsersSummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _users_summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-summary.page */ "./src/app/dashboard/users-summary/users-summary.page.ts");







const routes = [
    {
        path: '',
        component: _users_summary_page__WEBPACK_IMPORTED_MODULE_6__["UsersSummaryPage"]
    }
];
let UsersSummaryPageModule = class UsersSummaryPageModule {
};
UsersSummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_users_summary_page__WEBPACK_IMPORTED_MODULE_6__["UsersSummaryPage"]]
    })
], UsersSummaryPageModule);



/***/ }),

/***/ "./src/app/dashboard/users-summary/users-summary.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/users-summary/users-summary.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --detail-sections-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.firebase-listing-content {\n  background-color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzLXN1bW1hcnkvRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcZGFzaGJvYXJkXFx1c2Vycy1zdW1tYXJ5XFx1c2Vycy1zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzLXN1bW1hcnkvdXNlcnMtc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsOENBQUE7QUNDSjs7QURFRTtFQUNFLHlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdXNlcnMtc3VtbWFyeS91c2Vycy1zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1kZXRhaWwtc2VjdGlvbnMtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICB9XHJcblxyXG4gIC5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIFxyXG4gIH0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLWRldGFpbC1zZWN0aW9ucy1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/users-summary/users-summary.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/users-summary/users-summary.page.ts ***!
  \***************************************************************/
/*! exports provided: UsersSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSummaryPage", function() { return UsersSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");





let UsersSummaryPage = class UsersSummaryPage {
    constructor(storageService) {
        this.storageService = storageService;
        this.countryLabels = [];
        this.countryAllUsersDataset = [];
        this.countryGraftersLabels = [];
        this.countryAllGraftersDataset = [];
        this.countryEmployersLabels = [];
        this.countryAllEmployersDataset = [];
        this.tabChoice = "all";
    }
    ngOnInit() {
        console.log("GRAPHDEBUG: In ngOnInit()");
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].APP_SETTINGS).then(appSettings => {
            if (appSettings) {
                this.appSettings = appSettings;
            }
        });
    }
    ionViewDidEnter() {
        console.log("GRAPHDEBUG: In ionViewDidEnter()");
        this.createBarChart();
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].DASHBOARD_STATS_SUMMARY_CACHE).then(dashData => {
            if (dashData) {
                //var json = JSON.parse(dashData);
                this.statsSummary = dashData;
                console.log("GRAPHDEBUG PARSING JSON FOR GRAPHS: " + JSON.stringify(this.statsSummary));
                /*********** SHOW ALL USERS - COUNTRY DISTRIBUTION **********/
                this.statsSummary.totalUsersByCountry.forEach(element => {
                    //console.log("PARSING GOT => "+JSON.stringify(element));
                    element.forEach(subElement => {
                        //console.log("PARSING GOT AGAIN => "+JSON.stringify(subElement));
                        if (subElement) {
                            //console.log("PARSING EXACTLY => "+subElement.country);
                            try {
                                if (subElement.country !== null && subElement.country !== "" && subElement.country !== "Array") {
                                    this.countryLabels.push(subElement.country);
                                    this.countryAllUsersDataset.push(subElement.numUsers);
                                }
                            }
                            catch (Exception) {
                                alert(Exception.toString());
                            }
                        }
                    });
                });
                this.createBarChartForCountry();
                /*********** SHOW ALL USERS - COUNTRY DISTRIBUTION **********/
                /*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/
                this.statsSummary.totalGraftersByCountry.forEach(element => {
                    console.log("PARSING GOT => " + JSON.stringify(element));
                    element.forEach(subElement => {
                        console.log("PARSING GOT AGAIN => " + JSON.stringify(subElement));
                        if (subElement) {
                            console.log("PARSING EXACTLY => " + subElement.country);
                            try {
                                if (subElement.country !== null && subElement.country !== "" && subElement.country !== "Array") {
                                    this.countryGraftersLabels.push(subElement.country);
                                    this.countryAllGraftersDataset.push(subElement.numUsers);
                                }
                            }
                            catch (Exception) {
                                alert(Exception.toString());
                            }
                        }
                    });
                });
                this.createBarChartForCountryGrafters();
                /*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/
                /*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/
                this.statsSummary.totalEmployersByCountry.forEach(element => {
                    console.log("PARSING GOT => " + JSON.stringify(element));
                    element.forEach(subElement => {
                        console.log("PARSING GOT AGAIN => " + JSON.stringify(subElement));
                        if (subElement) {
                            console.log("PARSING EXACTLY => " + subElement.country);
                            try {
                                if (subElement.country !== null && subElement.country !== "" && subElement.country !== "Array") {
                                    this.countryEmployersLabels.push(subElement.country);
                                    this.countryAllEmployersDataset.push(subElement.numUsers);
                                }
                            }
                            catch (Exception) {
                                alert(Exception.toString());
                            }
                        }
                    });
                });
                this.createBarChartForCountryEmployers();
                /*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/
            }
        });
    }
    reloadGraphs() {
        this.createBarChartForCountry();
        this.createBarChartForCountryGrafters();
        this.createBarChartForCountryEmployers();
    }
    segmentButtonClicked(ev) {
        //console.log('Segment button clicked', ev);
        this.tabChoice = ev.detail.value;
        console.log('Selected Choice: ', this.tabChoice);
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Grafters', 'Employers', 'Total Users'],
                datasets: [{
                        label: 'Active ',
                        data: [38, 7, 45],
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    },
                    {
                        label: 'Pending',
                        data: [7, 4, 11],
                        backgroundColor: 'rgb(125, 110, 200)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    },
                    {
                        label: 'Blocked',
                        data: [0, 1, 1],
                        backgroundColor: 'rgb(225, 0, 0)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
    createBarChartForCountry() {
        this.barsForCountry = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChartForCountry.nativeElement, {
            type: 'bar',
            data: {
                labels: this.countryLabels,
                datasets: [{
                        label: 'All Users',
                        data: this.countryAllUsersDataset,
                        backgroundColor: 'rgb(38, 94, 220)',
                        borderColor: 'rgb(38, 220, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
    createBarChartForCountryEmployers() {
        this.barsForCountryEmployers = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChartForEmployersCountry.nativeElement, {
            type: 'bar',
            data: {
                labels: this.countryEmployersLabels,
                datasets: [{
                        label: 'All Employers',
                        data: this.countryAllEmployersDataset,
                        backgroundColor: 'rgb(38, 94, 220)',
                        borderColor: 'rgb(38, 220, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
    createBarChartForCountryGrafters() {
        this.barsForCountryGrafters = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.barChartForGraftersCountry.nativeElement, {
            type: 'bar',
            data: {
                labels: this.countryGraftersLabels,
                datasets: [{
                        label: 'All Grafters',
                        data: this.countryAllGraftersDataset,
                        backgroundColor: 'rgb(38, 94, 220)',
                        borderColor: 'rgb(38, 220, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
};
UsersSummaryPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersSummaryPage.prototype, "barChart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChartForCountry', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersSummaryPage.prototype, "barChartForCountry", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChartForGraftersCountry', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersSummaryPage.prototype, "barChartForGraftersCountry", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChartForEmployersCountry', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersSummaryPage.prototype, "barChartForEmployersCountry", void 0);
UsersSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/users-summary/users-summary.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-summary.page.scss */ "./src/app/dashboard/users-summary/users-summary.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], UsersSummaryPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-users-summary-users-summary-module-es2015.js.map