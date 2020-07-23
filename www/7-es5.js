function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js ***!
    \*****************************************************************/

  /*! exports provided: ion_app, ion_buttons, ion_content, ion_footer, ion_header, ion_router_outlet, ion_title, ion_toolbar */

  /***/
  function node_modulesIonicCoreDistEsmIonApp_8MdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_app", function () {
      return App;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_buttons", function () {
      return Buttons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_content", function () {
      return Content;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_footer", function () {
      return Footer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_header", function () {
      return Header;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function () {
      return RouterOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_title", function () {
      return ToolbarTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_toolbar", function () {
      return Toolbar;
    });
    /* harmony import */


    var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-d0403a2f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
    /* harmony import */


    var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-1074393c.js */
    "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
    /* harmony import */


    var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-94c4865f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");
    /* harmony import */


    var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chunk-353a032e.js */
    "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js");
    /* harmony import */


    var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chunk-c90aaa66.js */
    "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");
    /* harmony import */


    var _chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chunk-00265c49.js */
    "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js");
    /* harmony import */


    var _chunk_3c9755dd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chunk-3c9755dd.js */
    "./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js");

    var App =
    /*#__PURE__*/
    function () {
      function App(hostRef) {
        _classCallCheck(this, App);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(App, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["a"])(function () {
            var isHybrid = Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'hybrid');

            if (!_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing')) {
              __webpack_require__.e(
              /*! import() | tap-click-b300ec79-js */
              "tap-click-b300ec79-js").then(__webpack_require__.bind(null,
              /*! ./tap-click-b300ec79.js */
              "./node_modules/@ionic/core/dist/esm/tap-click-b300ec79.js")).then(function (module) {
                return module.startTapClick(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
              });
            }

            if (_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('statusTap', isHybrid)) {
              __webpack_require__.e(
              /*! import() | status-tap-7c5416f3-js */
              "status-tap-7c5416f3-js").then(__webpack_require__.bind(null,
              /*! ./status-tap-7c5416f3.js */
              "./node_modules/@ionic/core/dist/esm/status-tap-7c5416f3.js")).then(function (module) {
                return module.startStatusTap();
              });
            }

            if (_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('inputShims', needInputShims())) {
              __webpack_require__.e(
              /*! import() | input-shims-09d70723-js */
              "input-shims-09d70723-js").then(__webpack_require__.bind(null,
              /*! ./input-shims-09d70723.js */
              "./node_modules/@ionic/core/dist/esm/input-shims-09d70723.js")).then(function (module) {
                return module.startInputShims(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
              });
            }

            if (_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('hardwareBackButton', isHybrid)) {
              __webpack_require__.e(
              /*! import() | hardware-back-button-08f20350-js */
              "hardware-back-button-08f20350-js").then(__webpack_require__.bind(null,
              /*! ./hardware-back-button-08f20350.js */
              "./node_modules/@ionic/core/dist/esm/hardware-back-button-08f20350.js")).then(function (module) {
                return module.startHardwareBackButton();
              });
            }

            __webpack_require__.e(
            /*! import() | focus-visible-70161a50-js */
            "focus-visible-70161a50-js").then(__webpack_require__.bind(null,
            /*! ./focus-visible-70161a50.js */
            "./node_modules/@ionic/core/dist/esm/focus-visible-70161a50.js")).then(function (module) {
              return module.startFocusVisible();
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _class;

          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            class: (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'ion-page', true), _defineProperty(_class, 'force-statusbar-padding', _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_forceStatusbarPadding')), _class)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
        }
      }]);

      return App;
    }();

    var needInputShims = function needInputShims() {
      return Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'ios') && Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'mobile');
    };

    var Buttons =
    /*#__PURE__*/
    function () {
      function Buttons(hostRef) {
        _classCallCheck(this, Buttons);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(Buttons, [{
        key: "render",
        value: function render() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            class: Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this)
          });
        }
      }], [{
        key: "style",
        get: function get() {
          return ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";
        }
      }]);

      return Buttons;
    }();
    /**
     * @slot - Content is placed in the scrollable area if provided without a slot.
     * @slot fixed - Should be used for fixed content that should not scroll.
     */


    var Content =
    /*#__PURE__*/
    function () {
      function Content(hostRef) {
        _classCallCheck(this, Content);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1; // Detail is used in a hot loop in the scroll event, by allocating it here
        // V8 will be able to inline any read/write to it since it's a monomorphic class.
        // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html

        this.detail = {
          scrollTop: 0,
          scrollLeft: 0,
          type: 'scroll',
          event: undefined,
          startX: 0,
          startY: 0,
          startTimeStamp: 0,
          currentX: 0,
          currentY: 0,
          velocityX: 0,
          velocityY: 0,
          deltaX: 0,
          deltaY: 0,
          timeStamp: 0,
          data: undefined,
          isScrolling: true
        };
        /**
         * If `true`, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */

        this.fullscreen = false;
        /**
         * If you want to enable the content scrolling in the X axis, set this property to `true`.
         */

        this.scrollX = false;
        /**
         * If you want to disable the content scrolling in the Y axis, set this property to `false`.
         */

        this.scrollY = true;
        /**
         * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
         * and start listening from (ionScroll), set this property to `true`.
         */

        this.scrollEvents = false;
        this.ionScrollStart = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScrollStart", 7);
        this.ionScroll = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScroll", 7);
        this.ionScrollEnd = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScrollEnd", 7);
      }

      _createClass(Content, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {
          if (this.forceOverscroll === undefined) {
            var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            this.forceOverscroll = mode === 'ios' && Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'mobile');
          }
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.resize();
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.onScrollEnd();
        }
      }, {
        key: "onClick",
        value: function onClick(ev) {
          if (this.isScrolling) {
            ev.preventDefault();
            ev.stopPropagation();
          }
        }
      }, {
        key: "resize",
        value: function resize() {
          if (this.fullscreen) {
            Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readDimensions.bind(this));
          } else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
          }
        }
      }, {
        key: "readDimensions",
        value: function readDimensions() {
          var page = getPageElement(this.el);
          var top = Math.max(this.el.offsetTop, 0);
          var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
          var dirty = top !== this.cTop || bottom !== this.cBottom;

          if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
          }
        }
      }, {
        key: "onScroll",
        value: function onScroll(ev) {
          var _this = this;

          var timeStamp = Date.now();
          var shouldStart = !this.isScrolling;
          this.lastScroll = timeStamp;

          if (shouldStart) {
            this.onScrollStart();
          }

          if (!this.queued && this.scrollEvents) {
            this.queued = true;
            Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function (ts) {
              _this.queued = false;
              _this.detail.event = ev;
              updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);

              _this.ionScroll.emit(_this.detail);
            });
          }
        }
        /**
         * Get the element where the actual scrolling takes place.
         * This element can be used to subscribe to `scroll` events or manually modify
         * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
         *
         * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
         * and `scrollToPoint()` to scroll the content into a certain point.
         */

      }, {
        key: "getScrollElement",
        value: function getScrollElement() {
          return Promise.resolve(this.scrollEl);
        }
        /**
         * Scroll to the top of the component.
         *
         * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
         */

      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return this.scrollToPoint(undefined, 0, duration);
        }
        /**
         * Scroll to the bottom of the component.
         *
         * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
         */

      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
          return this.scrollToPoint(undefined, y, duration);
        }
        /**
         * Scroll by a specified X/Y distance in the component.
         *
         * @param x The amount to scroll by on the horizontal axis.
         * @param y The amount to scroll by on the vertical axis.
         * @param duration The amount of time to take scrolling by that amount.
         */

      }, {
        key: "scrollByPoint",
        value: function scrollByPoint(x, y, duration) {
          return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
        }
        /**
         * Scroll to a specified X/Y location in the component.
         *
         * @param x The point to scroll to on the horizontal axis.
         * @param y The point to scroll to on the vertical axis.
         * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
         */

      }, {
        key: "scrollToPoint",
        value: function scrollToPoint(x, y) {
          var duration,
              el,
              resolve,
              startTime,
              promise,
              fromY,
              fromX,
              deltaY,
              deltaX,
              step,
              _args = arguments;
          return regeneratorRuntime.async(function scrollToPoint$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  duration = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
                  el = this.scrollEl;

                  if (!(duration < 32)) {
                    _context.next = 6;
                    break;
                  }

                  if (y != null) {
                    el.scrollTop = y;
                  }

                  if (x != null) {
                    el.scrollLeft = x;
                  }

                  return _context.abrupt("return");

                case 6:
                  startTime = 0;
                  promise = new Promise(function (r) {
                    return resolve = r;
                  });
                  fromY = el.scrollTop;
                  fromX = el.scrollLeft;
                  deltaY = y != null ? y - fromY : 0;
                  deltaX = x != null ? x - fromX : 0; // scroll loop

                  step = function step(timeStamp) {
                    var linearTime = Math.min(1, (timeStamp - startTime) / duration) - 1;
                    var easedT = Math.pow(linearTime, 3) + 1;

                    if (deltaY !== 0) {
                      el.scrollTop = Math.floor(easedT * deltaY + fromY);
                    }

                    if (deltaX !== 0) {
                      el.scrollLeft = Math.floor(easedT * deltaX + fromX);
                    }

                    if (easedT < 1) {
                      // do not use DomController here
                      // must use nativeRaf in order to fire in the next frame
                      // TODO: remove as any
                      requestAnimationFrame(step);
                    } else {
                      resolve();
                    }
                  }; // chill out for a frame first


                  requestAnimationFrame(function (ts) {
                    startTime = ts;
                    step(ts);
                  });
                  return _context.abrupt("return", promise);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "onScrollStart",
        value: function onScrollStart() {
          var _this2 = this;

          this.isScrolling = true;
          this.ionScrollStart.emit({
            isScrolling: true
          });

          if (this.watchDog) {
            clearInterval(this.watchDog);
          } // watchdog


          this.watchDog = setInterval(function () {
            if (_this2.lastScroll < Date.now() - 120) {
              _this2.onScrollEnd();
            }
          }, 100);
        }
      }, {
        key: "onScrollEnd",
        value: function onScrollEnd() {
          clearInterval(this.watchDog);
          this.watchDog = null;

          if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
              isScrolling: false
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign,
              _this3 = this;

          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var scrollX = this.scrollX,
              scrollY = this.scrollY,
              forceOverscroll = this.forceOverscroll;

          var transitionShadow = mode === 'ios' && _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('experimentalTransitionShadow', false);

          this.resize();
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            class: Object.assign({}, Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'content-sizing', Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-popover', this.el)), _defineProperty(_Object$assign, 'overscroll', !!this.forceOverscroll), _Object$assign)),
            style: {
              '--offset-top': "".concat(this.cTop, "px"),
              '--offset-bottom': "".concat(this.cBottom, "px")
            }
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", {
            class: {
              'inner-scroll': true,
              'scroll-x': scrollX,
              'scroll-y': scrollY,
              'overscroll': (scrollX || scrollY) && !!forceOverscroll
            },
            ref: function ref(el) {
              return _this3.scrollEl = el;
            },
            onScroll: function onScroll(ev) {
              return _this3.onScroll(ev);
            }
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), transitionShadow ? Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "transition-effect"
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "transition-cover"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "transition-shadow"
          })) : null, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "fixed"
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}";
        }
      }]);

      return Content;
    }();

    var getParentElement = function getParentElement(el) {
      if (el.parentElement) {
        // normal element with a parent element
        return el.parentElement;
      }

      if (el.parentNode && el.parentNode.host) {
        // shadow dom's document fragment
        return el.parentNode.host;
      }

      return null;
    };

    var getPageElement = function getPageElement(el) {
      var tabs = el.closest('ion-tabs');

      if (tabs) {
        return tabs;
      }

      var page = el.closest('ion-app,ion-page,.ion-page,page-inner');

      if (page) {
        return page;
      }

      return getParentElement(el);
    }; // ******** DOM READ ****************


    var updateScrollDetail = function updateScrollDetail(detail, el, timestamp, shouldStart) {
      var prevX = detail.currentX;
      var prevY = detail.currentY;
      var prevT = detail.timeStamp;
      var currentX = el.scrollLeft;
      var currentY = el.scrollTop;
      var timeDelta = timestamp - prevT;

      if (shouldStart) {
        // remember the start positions
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
      }

      detail.timeStamp = timestamp;
      detail.currentX = detail.scrollLeft = currentX;
      detail.currentY = detail.scrollTop = currentY;
      detail.deltaX = currentX - detail.startX;
      detail.deltaY = currentY - detail.startY;

      if (timeDelta > 0 && timeDelta < 100) {
        var velocityX = (currentX - prevX) / timeDelta;
        var velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
      }
    };
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var Footer =
    /*#__PURE__*/
    function () {
      function Footer(hostRef) {
        _classCallCheck(this, Footer);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */

        this.translucent = false;
      }

      _createClass(Footer, [{
        key: "render",
        value: function render() {
          var _class2;

          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var translucent = this.translucent;
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "contentinfo",
            class: (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, "footer-".concat(mode), true), _defineProperty(_class2, "footer-translucent", translucent), _defineProperty(_class2, "footer-translucent-".concat(mode), translucent), _class2)
          });
        }
      }], [{
        key: "style",
        get: function get() {
          return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}";
        }
      }]);

      return Footer;
    }();
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var Header =
    /*#__PURE__*/
    function () {
      function Header(hostRef) {
        _classCallCheck(this, Header);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */

        this.translucent = false;
      }

      _createClass(Header, [{
        key: "render",
        value: function render() {
          var _class3;

          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "banner",
            class: (_class3 = {}, _defineProperty(_class3, mode, true), _defineProperty(_class3, "header-".concat(mode), true), _defineProperty(_class3, "header-translucent", this.translucent), _defineProperty(_class3, "header-translucent-".concat(mode), this.translucent), _class3)
          });
        }
      }], [{
        key: "style",
        get: function get() {
          return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}";
        }
      }]);

      return Header;
    }();

    var RouterOutlet =
    /*#__PURE__*/
    function () {
      function RouterOutlet(hostRef) {
        _classCallCheck(this, RouterOutlet);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The mode determines which platform styles to use.
         */

        this.mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the router-outlet should animate the transition of components.
         */

        this.animated = true;
        this.ionNavWillLoad = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavDidChange", 3);
      }

      _createClass(RouterOutlet, [{
        key: "swipeHandlerChanged",
        value: function swipeHandlerChanged() {
          if (this.gesture) {
            this.gesture.setDisabled(this.swipeHandler === undefined);
          }
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.ionNavWillLoad.emit();
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this4 = this;

          return regeneratorRuntime.async(function componentDidLoad$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return regeneratorRuntime.awrap(Promise.all(
                  /*! import() | swipe-back-22184b47-js */
                  [__webpack_require__.e(0), __webpack_require__.e("swipe-back-22184b47-js")]).then(__webpack_require__.bind(null,
                  /*! ./swipe-back-22184b47.js */
                  "./node_modules/@ionic/core/dist/esm/swipe-back-22184b47.js")));

                case 2:
                  _context2.t0 = this.el;

                  _context2.t1 = function () {
                    return !!_this4.swipeHandler && _this4.swipeHandler.canStart();
                  };

                  _context2.t2 = function () {
                    return _this4.swipeHandler && _this4.swipeHandler.onStart();
                  };

                  _context2.t3 = function (step) {
                    return _this4.ani && _this4.ani.progressStep(step);
                  };

                  _context2.t4 = function (shouldComplete, step, dur) {
                    if (_this4.ani) {
                      _this4.ani.progressEnd(shouldComplete, step, dur);
                    }

                    if (_this4.swipeHandler) {
                      _this4.swipeHandler.onEnd(shouldComplete);
                    }
                  };

                  this.gesture = _context2.sent.createSwipeBackGesture(_context2.t0, _context2.t1, _context2.t2, _context2.t3, _context2.t4);
                  this.swipeHandlerChanged();

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.activeEl = this.activeComponent = undefined;

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }
        /** @internal */

      }, {
        key: "commit",
        value: function commit(enteringEl, leavingEl, opts) {
          var unlock, changed;
          return regeneratorRuntime.async(function commit$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return regeneratorRuntime.awrap(this.lock());

                case 2:
                  unlock = _context3.sent;
                  changed = false;
                  _context3.prev = 4;
                  _context3.next = 7;
                  return regeneratorRuntime.awrap(this.transition(enteringEl, leavingEl, opts));

                case 7:
                  changed = _context3.sent;
                  _context3.next = 13;
                  break;

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](4);
                  console.error(_context3.t0);

                case 13:
                  unlock();
                  return _context3.abrupt("return", changed);

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this, [[4, 10]]);
        }
        /** @internal */

      }, {
        key: "setRouteId",
        value: function setRouteId(id, params, direction) {
          var changed;
          return regeneratorRuntime.async(function setRouteId$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return regeneratorRuntime.awrap(this.setRoot(id, params, {
                    duration: direction === 'root' ? 0 : undefined,
                    direction: direction === 'back' ? 'back' : 'forward'
                  }));

                case 2:
                  changed = _context4.sent;
                  return _context4.abrupt("return", {
                    changed: changed,
                    element: this.activeEl
                  });

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this);
        }
        /** @internal */

      }, {
        key: "getRouteId",
        value: function getRouteId() {
          var active;
          return regeneratorRuntime.async(function getRouteId$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  active = this.activeEl;
                  return _context5.abrupt("return", active ? {
                    id: active.tagName,
                    element: active
                  } : undefined);

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "setRoot",
        value: function setRoot(component, params, opts) {
          var leavingEl, enteringEl;
          return regeneratorRuntime.async(function setRoot$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(this.activeComponent === component)) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return", false);

                case 2:
                  // attach entering view to DOM
                  leavingEl = this.activeEl;
                  _context6.next = 5;
                  return regeneratorRuntime.awrap(Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params));

                case 5:
                  enteringEl = _context6.sent;
                  this.activeComponent = component;
                  this.activeEl = enteringEl; // commit animation

                  _context6.next = 10;
                  return regeneratorRuntime.awrap(this.commit(enteringEl, leavingEl, opts));

                case 10:
                  _context6.next = 12;
                  return regeneratorRuntime.awrap(Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.delegate, leavingEl));

                case 12:
                  return _context6.abrupt("return", true);

                case 13:
                case "end":
                  return _context6.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "transition",
        value: function transition(enteringEl, leavingEl) {
          var _this5 = this;

          var opts,
              el,
              mode,
              animated,
              animationBuilder,
              _args7 = arguments;
          return regeneratorRuntime.async(function transition$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  opts = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};

                  if (!(leavingEl === enteringEl)) {
                    _context7.next = 3;
                    break;
                  }

                  return _context7.abrupt("return", false);

                case 3:
                  // emit nav will change event
                  this.ionNavWillChange.emit();
                  el = this.el, mode = this.mode;
                  animated = this.animated && _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);
                  animationBuilder = this.animation || opts.animationBuilder || _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation');
                  _context7.next = 9;
                  return regeneratorRuntime.awrap(Object(_chunk_3c9755dd_js__WEBPACK_IMPORTED_MODULE_6__["t"])(Object.assign({
                    mode: mode,
                    animated: animated,
                    animationBuilder: animationBuilder,
                    enteringEl: enteringEl,
                    leavingEl: leavingEl,
                    baseEl: el,
                    progressCallback: opts.progressAnimation ? function (ani) {
                      return _this5.ani = ani;
                    } : undefined
                  }, opts)));

                case 9:
                  // emit nav changed event
                  this.ionNavDidChange.emit();
                  return _context7.abrupt("return", true);

                case 11:
                case "end":
                  return _context7.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "lock",
        value: function lock() {
          var p, resolve;
          return regeneratorRuntime.async(function lock$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  p = this.waitPromise;
                  this.waitPromise = new Promise(function (r) {
                    return resolve = r;
                  });

                  if (!(p !== undefined)) {
                    _context8.next = 5;
                    break;
                  }

                  _context8.next = 5;
                  return regeneratorRuntime.awrap(p);

                case 5:
                  return _context8.abrupt("return", resolve);

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "swipeHandler": ["swipeHandlerChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
        }
      }]);

      return RouterOutlet;
    }();

    var ToolbarTitle =
    /*#__PURE__*/
    function () {
      function ToolbarTitle(hostRef) {
        _classCallCheck(this, ToolbarTitle);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(ToolbarTitle, [{
        key: "getMode",
        value: function getMode() {
          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var toolbar = this.el.closest('ion-toolbar');
          return toolbar && toolbar.mode || mode;
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign2;

          var mode = this.getMode();
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            class: Object.assign((_Object$assign2 = {}, _defineProperty(_Object$assign2, mode, true), _defineProperty(_Object$assign2, "title-".concat(mode), true), _Object$assign2), Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color))
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "toolbar-title"
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}";
        }
      }]);

      return ToolbarTitle;
    }();
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     *
     * @slot - Content is placed between the named slots if provided without a slot.
     * @slot start - Content is placed to the left of the toolbar text in LTR, and to the right in RTL.
     * @slot secondary - Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode.
     * @slot primary - Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode.
     * @slot end - Content is placed to the right of the toolbar text in LTR, and to the left in RTL.
     */


    var Toolbar =
    /*#__PURE__*/
    function () {
      function Toolbar(hostRef) {
        _classCallCheck(this, Toolbar);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.childrenStyles = new Map();
      }

      _createClass(Toolbar, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {
          var buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
          var firstButtons = buttons.find(function (button) {
            return button.slot === 'start';
          });

          if (firstButtons) {
            firstButtons.classList.add('buttons-first-slot');
          }

          var buttonsReversed = buttons.reverse();
          var lastButtons = buttonsReversed.find(function (button) {
            return button.slot === 'end';
          }) || buttonsReversed.find(function (button) {
            return button.slot === 'primary';
          }) || buttonsReversed.find(function (button) {
            return button.slot === 'secondary';
          });

          if (lastButtons) {
            lastButtons.classList.add('buttons-last-slot');
          }
        }
      }, {
        key: "childrenStyle",
        value: function childrenStyle(ev) {
          ev.stopPropagation();
          var tagName = ev.target.tagName;
          var updatedStyles = ev.detail;
          var newStyles = {};
          var childStyles = this.childrenStyles.get(tagName) || {};
          var hasStyleChange = false;
          Object.keys(updatedStyles).forEach(function (key) {
            var childKey = "toolbar-".concat(key);
            var newValue = updatedStyles[key];

            if (newValue !== childStyles[childKey]) {
              hasStyleChange = true;
            }

            if (newValue) {
              newStyles[childKey] = true;
            }
          });

          if (hasStyleChange) {
            this.childrenStyles.set(tagName, newStyles);
            this.el.forceUpdate();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var childStyles = {};
          this.childrenStyles.forEach(function (value) {
            Object.assign(childStyles, value);
          });
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            class: Object.assign(_defineProperty({}, mode, true), childStyles, Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color))
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "toolbar-background"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "toolbar-container"
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "start"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "secondary"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "toolbar-content"
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "primary"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "end"
          })));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
        }
      }]);

      return Toolbar;
    }();
    /***/

  }
}]);
//# sourceMappingURL=7-es5.js.map