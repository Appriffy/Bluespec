(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-job-details-module~job-applications-manager-manager-module~jobs-accept-job-form-acce~c0d0a811"],{

/***/ "./src/app/dbmodels/job-applications-manager-model.ts":
/*!************************************************************!*\
  !*** ./src/app/dbmodels/job-applications-manager-model.ts ***!
  \************************************************************/
/*! exports provided: JobApplicationsManagerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobApplicationsManagerModel", function() { return JobApplicationsManagerModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


class JobApplicationsManagerModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.pending = [
            {
                id: 0,
                applicant_id: 0,
                applicant_name: '',
                applicant_image: '',
                user_name: '',
                amount: '',
                salary_type: '',
                delivery_date: '',
                status: '',
                qcode: '',
                comment: '',
                job_id: 0,
                currency: '',
                jobTitle: '',
                jobCode: '',
                date_created: ''
            }
        ];
        this.shortlisted = [
            {
                id: 0,
                applicant_id: 0,
                applicant_name: '',
                applicant_image: '',
                user_name: '',
                amount: '',
                salary_type: '',
                delivery_date: '',
                status: '',
                qcode: '',
                comment: '',
                job_id: 0,
                currency: '',
                jobTitle: '',
                jobCode: '',
                date_created: ''
            }
        ];
        this.rejected = [
            {
                id: 0,
                applicant_id: 0,
                applicant_name: '',
                applicant_image: '',
                user_name: '',
                amount: '',
                salary_type: '',
                delivery_date: '',
                status: '',
                qcode: '',
                comment: '',
                job_id: 0,
                currency: '',
                jobTitle: '',
                jobCode: '',
                date_created: ''
            },
            {
                id: 0,
                applicant_id: 0,
                applicant_name: '',
                applicant_image: '',
                user_name: '',
                amount: '',
                salary_type: '',
                delivery_date: '',
                status: '',
                qcode: '',
                comment: '',
                job_id: 0,
                currency: '',
                jobTitle: '',
                jobCode: '',
                date_created: ''
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/dbmodels/job-filter-cache.ts":
/*!**********************************************!*\
  !*** ./src/app/dbmodels/job-filter-cache.ts ***!
  \**********************************************/
/*! exports provided: JobFilterCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobFilterCache", function() { return JobFilterCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class JobFilterCache {
    constructor() {
        this.jobArea = 0;
        this.skillID = "";
        this.address = "";
        this.latitude = "";
        this.longitude = "";
        this.km_radius = 5000;
        this.status = "Active";
        this.job_types = "";
        this.online_status = "";
        //selected_skills:string = "";
        this.min_salary = 0;
        this.max_salary = 0;
        this.salary_type = "";
        this.currency = "USD";
        this.sort_by = "RELEVANCE";
        this.work_experience_min = 0;
        this.work_experience_max = 10;
    }
}


/***/ }),

/***/ "./src/app/dbmodels/jobs-listing.model.ts":
/*!************************************************!*\
  !*** ./src/app/dbmodels/jobs-listing.model.ts ***!
  \************************************************/
/*! exports provided: JobItemModel, JobRequestPrefs, JobRequestSalary, JobListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobItemModel", function() { return JobItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobRequestPrefs", function() { return JobRequestPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobRequestSalary", function() { return JobRequestSalary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListingModel", function() { return JobListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


class JobItemModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super(...arguments);
        this.jobSkills = [
            { id: 0, title: '' },
            { id: 0, title: '' },
            { id: 0, title: '' },
            { id: 0, title: '' }
        ];
        //expirationDate: string = dayjs().add(5, 'day').format('MM/DD/YYYY HH:mm:ss') as string;
    }
}
class JobRequestPrefs {
}
class JobRequestSalary {
}
class JobListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.message = "";
        this.numRecords = 0;
        this.items = [
            new JobItemModel(),
            new JobItemModel(),
            new JobItemModel(),
            new JobItemModel()
        ];
    }
    setItems(items) {
        this.items = items;
    }
}


/***/ }),

/***/ "./src/app/dbmodels/user-jobs-model.ts":
/*!*********************************************!*\
  !*** ./src/app/dbmodels/user-jobs-model.ts ***!
  \*********************************************/
/*! exports provided: UserJobModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJobModel", function() { return UserJobModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


class UserJobModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.job_requests = [
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                numOffers: 0
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                numOffers: 0
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                numOffers: 0
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                numOffers: 0
            }
        ];
        this.ongoing_jobs = [
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                progress: '',
                date_requested: '',
                date_approved: '',
                grafter_name: '',
                grafter_image: '',
                expected_delivery: '',
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                progress: '',
                date_requested: '',
                date_approved: '',
                grafter_name: '',
                grafter_image: '',
                expected_delivery: '',
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                progress: '',
                date_requested: '',
                date_approved: '',
                grafter_name: '',
                grafter_image: '',
                expected_delivery: '',
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                progress: '',
                date_requested: '',
                date_approved: '',
                grafter_name: '',
                grafter_image: '',
                expected_delivery: '',
            }
        ];
        this.completed_jobs = [
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                date_approved: '',
                date_completed: '',
                grafter_name: '',
                grafter_image: '',
                is_rated: false,
                rating: 0
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                date_approved: '',
                date_completed: '',
                grafter_name: '',
                grafter_image: '',
                is_rated: false,
                rating: 0
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                date_approved: '',
                date_completed: '',
                grafter_name: '',
                grafter_image: '',
                is_rated: false,
                rating: 0
            },
            {
                title: '',
                job_description: '',
                job_area: '',
                job_type: '',
                salary: '',
                salary_type: '',
                status: '',
                date_requested: '',
                date_approved: '',
                date_completed: '',
                grafter_name: '',
                grafter_image: '',
                is_rated: false,
                rating: 0
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/jobs/jobs.service.ts":
/*!**************************************!*\
  !*** ./src/app/jobs/jobs.service.ts ***!
  \**************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dbmodels/jobs-listing.model */ "./src/app/dbmodels/jobs-listing.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dbmodels_user_jobs_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dbmodels/user-jobs-model */ "./src/app/dbmodels/user-jobs-model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dbmodels_job_applications_manager_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dbmodels/job-applications-manager-model */ "./src/app/dbmodels/job-applications-manager-model.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _dbmodels_job_filter_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dbmodels/job-filter-cache */ "./src/app/dbmodels/job-filter-cache.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");














let JobService = class JobService {
    //invokeEvent: Subject<any> = new Subject();
    constructor(http, toastService, storageService) {
        this.http = http;
        this.toastService = toastService;
        this.storageService = storageService;
        this.invokeFilterChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getFilterData() {
        if (this.jobFilterData !== null && this.jobFilterData !== undefined) {
            return this.jobFilterData;
        }
        else {
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].DEV_MODE) {
                this.toastService.presentToast("Returning New Cache Box");
            }
            return new _dbmodels_job_filter_cache__WEBPACK_IMPORTED_MODULE_12__["JobFilterCache"]();
        }
    }
    setFilterData(data) {
        this.jobFilterData = data;
        this.invokeFilterChangeEvent.next(data);
        this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].USER_FILTER_CACHE, data);
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].USER_FILTER_CACHE).then(results => {
            //alert(results);
        });
    }
    callJobCreateAPI(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'job_requests/create';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
    getListingDataSource(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'job_requests/list';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
    getListingStore(dataSource) {
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_4__["JobListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_4__["JobItemModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
    /**************** GET JOB DETAIL ******************/
    getJobRequestDetailDataSource(api_key, user_id) {
        let postData = { qcode: user_id };
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': api_key
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_requests/viewer';
        console.log("/************/ Hitting " + url + " with Qcode=> " + user_id + " via " + api_key);
        return this.http.post(url, postData, httpOptions);
        // return this.http.post<any>(url, postData, httpOptions).pipe(
        //   map(detailsData => {
        //     const expirationDate = dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string;
        //     return {...detailsData, expirationDate};
        //   })
        // );
    }
    /*******************************/
    /**************** JOB MANAGER PAGES ***************/
    getJobManagerDataSource(apiKey) {
        //return this.http.get<UserJobModel>('./assets/sample-data/user/user-jobs-manager.json');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        let postData = {};
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_requests/manager';
        //const url = environment.apiUrl + 'apis/job_requests/manager/delll';
        //return this.http.post<JobApplications0ManagerModel>(url, postData, httpOptions);
        return this.http.post(url, postData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(detailsData => {
            return detailsData.items;
        }));
    }
    getJobManagerStore(dataSource) {
        // Use cache if available
        if (!this.jobManagerDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _dbmodels_user_jobs_model__WEBPACK_IMPORTED_MODULE_7__["UserJobModel"]();
            this.jobManagerDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.jobManagerDataStore.load(dataSource);
        }
        return this.jobManagerDataStore;
    }
    /**************** JOB MANAGER PAGES ***************/
    /**************** JOB APPLICATIONS ******************/
    callSubmitApplicationAPI(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_applications/create';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
    callApplicationStatusUpdateAPI(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_applications/processing/update';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
    /**************** JOB MANAGER PAGES ***************/
    getJobApplicationsManagerDataSource(apiKey, postData) {
        //return this.http.get<JobApplicationsManagerModel>('./assets/sample-data/job-applications.json');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_applications/manager';
        //return this.http.post<JobApplicationsManagerModel>(url, postData, httpOptions);
        return this.http.post(url, postData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(detailsData => {
            return detailsData.items;
        }));
    }
    getJobApplicationsManagerStore(dataSource) {
        // Use cache if available
        if (!this.jobApplicationsManagerDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _dbmodels_job_applications_manager_model__WEBPACK_IMPORTED_MODULE_9__["JobApplicationsManagerModel"]();
            this.jobApplicationsManagerDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.jobApplicationsManagerDataStore.load(dataSource);
        }
        return this.jobApplicationsManagerDataStore;
    }
    /**************** JOB MANAGER PAGES ***************/
    /****************####### END OF JOB APPLICATIONS ########******************/
    /************* JOB VIEWS***********/
    hitJobViewsAPI(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/apis/job_requests/register-views';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
};
JobService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] }
];
JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]])
], JobService);



/***/ })

}]);
//# sourceMappingURL=default~details-job-details-module~job-applications-manager-manager-module~jobs-accept-job-form-acce~c0d0a811-es2015.js.map