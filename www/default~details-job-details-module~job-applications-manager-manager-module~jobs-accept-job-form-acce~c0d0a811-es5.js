function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-job-details-module~job-applications-manager-manager-module~jobs-accept-job-form-acce~c0d0a811"], {
  /***/
  "./src/app/dbmodels/job-applications-manager-model.ts":
  /*!************************************************************!*\
    !*** ./src/app/dbmodels/job-applications-manager-model.ts ***!
    \************************************************************/

  /*! exports provided: JobApplicationsManagerModel */

  /***/
  function srcAppDbmodelsJobApplicationsManagerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobApplicationsManagerModel", function () {
      return JobApplicationsManagerModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var JobApplicationsManagerModel =
    /*#__PURE__*/
    function (_shell_data_store__WE) {
      _inherits(JobApplicationsManagerModel, _shell_data_store__WE);

      function JobApplicationsManagerModel() {
        var _this;

        _classCallCheck(this, JobApplicationsManagerModel);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(JobApplicationsManagerModel).call(this));
        _this.pending = [{
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
        }];
        _this.shortlisted = [{
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
        }];
        _this.rejected = [{
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
        }, {
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
        }];
        return _this;
      }

      return JobApplicationsManagerModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/dbmodels/job-filter-cache.ts":
  /*!**********************************************!*\
    !*** ./src/app/dbmodels/job-filter-cache.ts ***!
    \**********************************************/

  /*! exports provided: JobFilterCache */

  /***/
  function srcAppDbmodelsJobFilterCacheTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobFilterCache", function () {
      return JobFilterCache;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var JobFilterCache = function JobFilterCache() {
      _classCallCheck(this, JobFilterCache);

      this.jobArea = 0;
      this.skillID = "";
      this.address = "";
      this.latitude = "";
      this.longitude = "";
      this.km_radius = 5000;
      this.status = "Active";
      this.job_types = "";
      this.online_status = ""; //selected_skills:string = "";

      this.min_salary = 0;
      this.max_salary = 0;
      this.salary_type = "";
      this.currency = "USD";
      this.sort_by = "RELEVANCE";
      this.work_experience_min = 0;
      this.work_experience_max = 10;
    };
    /***/

  },

  /***/
  "./src/app/dbmodels/jobs-listing.model.ts":
  /*!************************************************!*\
    !*** ./src/app/dbmodels/jobs-listing.model.ts ***!
    \************************************************/

  /*! exports provided: JobItemModel, JobRequestPrefs, JobRequestSalary, JobListingModel */

  /***/
  function srcAppDbmodelsJobsListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobItemModel", function () {
      return JobItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobRequestPrefs", function () {
      return JobRequestPrefs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobRequestSalary", function () {
      return JobRequestSalary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobListingModel", function () {
      return JobListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var JobItemModel =
    /*#__PURE__*/
    function (_shell_data_store__WE2) {
      _inherits(JobItemModel, _shell_data_store__WE2);

      function JobItemModel() {
        var _this2;

        _classCallCheck(this, JobItemModel);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(JobItemModel).apply(this, arguments));
        _this2.jobSkills = [{
          id: 0,
          title: ''
        }, {
          id: 0,
          title: ''
        }, {
          id: 0,
          title: ''
        }, {
          id: 0,
          title: ''
        }]; //expirationDate: string = dayjs().add(5, 'day').format('MM/DD/YYYY HH:mm:ss') as string;

        return _this2;
      }

      return JobItemModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);

    var JobRequestPrefs = function JobRequestPrefs() {
      _classCallCheck(this, JobRequestPrefs);
    };

    var JobRequestSalary = function JobRequestSalary() {
      _classCallCheck(this, JobRequestSalary);
    };

    var JobListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE3) {
      _inherits(JobListingModel, _shell_data_store__WE3);

      function JobListingModel() {
        var _this3;

        _classCallCheck(this, JobListingModel);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(JobListingModel).call(this));
        _this3.message = "";
        _this3.numRecords = 0;
        _this3.items = [new JobItemModel(), new JobItemModel(), new JobItemModel(), new JobItemModel()];
        return _this3;
      }

      _createClass(JobListingModel, [{
        key: "setItems",
        value: function setItems(items) {
          this.items = items;
        }
      }]);

      return JobListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/dbmodels/user-jobs-model.ts":
  /*!*********************************************!*\
    !*** ./src/app/dbmodels/user-jobs-model.ts ***!
    \*********************************************/

  /*! exports provided: UserJobModel */

  /***/
  function srcAppDbmodelsUserJobsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserJobModel", function () {
      return UserJobModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserJobModel =
    /*#__PURE__*/
    function (_shell_data_store__WE4) {
      _inherits(UserJobModel, _shell_data_store__WE4);

      function UserJobModel() {
        var _this4;

        _classCallCheck(this, UserJobModel);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(UserJobModel).call(this));
        _this4.job_requests = [{
          title: '',
          job_description: '',
          job_area: '',
          job_type: '',
          salary: '',
          salary_type: '',
          status: '',
          date_requested: '',
          numOffers: 0
        }, {
          title: '',
          job_description: '',
          job_area: '',
          job_type: '',
          salary: '',
          salary_type: '',
          status: '',
          date_requested: '',
          numOffers: 0
        }, {
          title: '',
          job_description: '',
          job_area: '',
          job_type: '',
          salary: '',
          salary_type: '',
          status: '',
          date_requested: '',
          numOffers: 0
        }, {
          title: '',
          job_description: '',
          job_area: '',
          job_type: '',
          salary: '',
          salary_type: '',
          status: '',
          date_requested: '',
          numOffers: 0
        }];
        _this4.ongoing_jobs = [{
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
          expected_delivery: ''
        }, {
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
          expected_delivery: ''
        }, {
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
          expected_delivery: ''
        }, {
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
          expected_delivery: ''
        }];
        _this4.completed_jobs = [{
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
        }, {
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
        }, {
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
        }, {
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
        }];
        return _this4;
      }

      return UserJobModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/jobs/jobs.service.ts":
  /*!**************************************!*\
    !*** ./src/app/jobs/jobs.service.ts ***!
    \**************************************/

  /*! exports provided: JobService */

  /***/
  function srcAppJobsJobsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobService", function () {
      return JobService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dbmodels/jobs-listing.model */
    "./src/app/dbmodels/jobs-listing.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dbmodels_user_jobs_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dbmodels/user-jobs-model */
    "./src/app/dbmodels/user-jobs-model.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _dbmodels_job_applications_manager_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../dbmodels/job-applications-manager-model */
    "./src/app/dbmodels/job-applications-manager-model.ts");
    /* harmony import */


    var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../config/AuthConstants */
    "./src/app/config/AuthConstants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _dbmodels_job_filter_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../dbmodels/job-filter-cache */
    "./src/app/dbmodels/job-filter-cache.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");

    var JobService =
    /*#__PURE__*/
    function () {
      //invokeEvent: Subject<any> = new Subject();
      function JobService(http, toastService, storageService) {
        _classCallCheck(this, JobService);

        this.http = http;
        this.toastService = toastService;
        this.storageService = storageService;
        this.invokeFilterChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(JobService, [{
        key: "getFilterData",
        value: function getFilterData() {
          if (this.jobFilterData !== null && this.jobFilterData !== undefined) {
            return this.jobFilterData;
          } else {
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].DEV_MODE) {
              this.toastService.presentToast("Returning New Cache Box");
            }

            return new _dbmodels_job_filter_cache__WEBPACK_IMPORTED_MODULE_12__["JobFilterCache"]();
          }
        }
      }, {
        key: "setFilterData",
        value: function setFilterData(data) {
          this.jobFilterData = data;
          this.invokeFilterChangeEvent.next(data);
          this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].USER_FILTER_CACHE, data);
          this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_10__["AuthConstants"].USER_FILTER_CACHE).then(function (results) {//alert(results);
          });
        }
      }, {
        key: "callJobCreateAPI",
        value: function callJobCreateAPI(apiKey, postData) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'job_requests/create';
          console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
          return this.http.post(url, postData, httpOptions);
        }
      }, {
        key: "getListingDataSource",
        value: function getListingDataSource(apiKey, postData) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'job_requests/list';
          console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
          return this.http.post(url, postData, httpOptions);
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_4__["JobListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = new _dbmodels_jobs_listing_model__WEBPACK_IMPORTED_MODULE_4__["JobItemModel"]();
          this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.detailsDataStore.load(dataSource);
          return this.detailsDataStore;
        }
        /**************** GET JOB DETAIL ******************/

      }, {
        key: "getJobRequestDetailDataSource",
        value: function getJobRequestDetailDataSource(api_key, user_id) {
          var postData = {
            qcode: user_id
          };
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': api_key
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_requests/viewer';
          console.log("/************/ Hitting " + url + " with Qcode=> " + user_id + " via " + api_key);
          return this.http.post(url, postData, httpOptions); // return this.http.post<any>(url, postData, httpOptions).pipe(
          //   map(detailsData => {
          //     const expirationDate = dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string;
          //     return {...detailsData, expirationDate};
          //   })
          // );
        }
        /*******************************/

        /**************** JOB MANAGER PAGES ***************/

      }, {
        key: "getJobManagerDataSource",
        value: function getJobManagerDataSource(apiKey) {
          //return this.http.get<UserJobModel>('./assets/sample-data/user/user-jobs-manager.json');
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var postData = {};
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_requests/manager'; //const url = environment.apiUrl + 'apis/job_requests/manager/delll';
          //return this.http.post<JobApplications0ManagerModel>(url, postData, httpOptions);

          return this.http.post(url, postData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (detailsData) {
            return detailsData.items;
          }));
        }
      }, {
        key: "getJobManagerStore",
        value: function getJobManagerStore(dataSource) {
          // Use cache if available
          if (!this.jobManagerDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _dbmodels_user_jobs_model__WEBPACK_IMPORTED_MODULE_7__["UserJobModel"]();
            this.jobManagerDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.jobManagerDataStore.load(dataSource);
          }

          return this.jobManagerDataStore;
        }
        /**************** JOB MANAGER PAGES ***************/

        /**************** JOB APPLICATIONS ******************/

      }, {
        key: "callSubmitApplicationAPI",
        value: function callSubmitApplicationAPI(apiKey, postData) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_applications/create';
          console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
          return this.http.post(url, postData, httpOptions);
        }
      }, {
        key: "callApplicationStatusUpdateAPI",
        value: function callApplicationStatusUpdateAPI(apiKey, postData) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_applications/processing/update';
          console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
          return this.http.post(url, postData, httpOptions);
        }
        /**************** JOB MANAGER PAGES ***************/

      }, {
        key: "getJobApplicationsManagerDataSource",
        value: function getJobApplicationsManagerDataSource(apiKey, postData) {
          //return this.http.get<JobApplicationsManagerModel>('./assets/sample-data/job-applications.json');
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'apis/job_applications/manager'; //return this.http.post<JobApplicationsManagerModel>(url, postData, httpOptions);

          return this.http.post(url, postData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (detailsData) {
            return detailsData.items;
          }));
        }
      }, {
        key: "getJobApplicationsManagerStore",
        value: function getJobApplicationsManagerStore(dataSource) {
          // Use cache if available
          if (!this.jobApplicationsManagerDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _dbmodels_job_applications_manager_model__WEBPACK_IMPORTED_MODULE_9__["JobApplicationsManagerModel"]();
            this.jobApplicationsManagerDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.jobApplicationsManagerDataStore.load(dataSource);
          }

          return this.jobApplicationsManagerDataStore;
        }
        /**************** JOB MANAGER PAGES ***************/

        /****************####### END OF JOB APPLICATIONS ########******************/

        /************* JOB VIEWS***********/

      }, {
        key: "hitJobViewsAPI",
        value: function hitJobViewsAPI(apiKey, postData) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': apiKey
            })
          };
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/apis/job_requests/register-views';
          console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
          return this.http.post(url, postData, httpOptions);
        }
      }]);

      return JobService;
    }();

    JobService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]
      }];
    };

    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]])], JobService);
    /***/
  }
}]);
//# sourceMappingURL=default~details-job-details-module~job-applications-manager-manager-module~jobs-accept-job-form-acce~c0d0a811-es5.js.map