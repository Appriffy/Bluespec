function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_tab, ion_tabs */

  /***/
  function node_modulesIonicCoreDistEsmIonTab_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tab", function () {
      return Tab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tabs", function () {
      return Tabs;
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


    var _chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-00265c49.js */
    "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js");

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(hostRef) {
        _classCallCheck(this, Tab);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */

        this.active = false;
      }

      _createClass(Tab, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {}
        /** Set the active component for the tab */

      }, {
        key: "setActive",
        value: function setActive() {
          return regeneratorRuntime.async(function setActive$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return regeneratorRuntime.awrap(this.prepareLazyLoaded());

                case 2:
                  this.active = true;

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "prepareLazyLoaded",
        value: function prepareLazyLoaded() {
          return regeneratorRuntime.async(function prepareLazyLoaded$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.loaded && this.component != null)) {
                    _context2.next = 9;
                    break;
                  }

                  this.loaded = true;
                  _context2.prev = 2;
                  return _context2.abrupt("return", Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, this.el, this.component, ['ion-page']));

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](2);
                  console.error(_context2.t0);

                case 9:
                  return _context2.abrupt("return", undefined);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this, [[2, 6]]);
        }
      }, {
        key: "render",
        value: function render() {
          var tab = this.tab,
              active = this.active,
              component = this.component;
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "tabpanel",
            "aria-hidden": !active ? 'true' : null,
            "aria-labelledby": "tab-button-".concat(tab),
            class: {
              'ion-page': component === undefined,
              'tab-hidden': !active
            }
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host(.tab-hidden){display:none!important}";
        }
      }]);

      return Tab;
    }();
    /**
     * @slot - Content is placed between the named slots if provided without a slot.
     * @slot top - Content is placed at the top of the screen.
     * @slot bottom - Content is placed at the bottom of the screen.
     */


    var Tabs =
    /*#__PURE__*/
    function () {
      function Tabs(hostRef) {
        var _this = this;

        _classCallCheck(this, Tabs);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transitioning = false;
        this.tabs = [];
        /** @internal */

        this.useRouter = false;

        this.onTabClicked = function (ev) {
          var _ev$detail = ev.detail,
              href = _ev$detail.href,
              tab = _ev$detail.tab;

          var selectedTab = _this.tabs.find(function (t) {
            return t.tab === tab;
          });

          if (_this.useRouter && href !== undefined) {
            var router = document.querySelector('ion-router');

            if (router) {
              router.push(href);
            }
          } else if (selectedTab) {
            _this.select(selectedTab);
          }
        };

        this.ionNavWillLoad = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabsDidChange", 3);
      }

      _createClass(Tabs, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {
          var _this2 = this;

          if (!this.useRouter) {
            this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
          }

          this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
          this.initSelect().then(function () {
            _this2.ionNavWillLoad.emit();

            _this2.componentWillUpdate();
          });
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.tabs.length = 0;
          this.selectedTab = this.leavingTab = undefined;
        }
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
          var tabBar = this.el.querySelector('ion-tab-bar');

          if (tabBar) {
            var tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
          }
        }
        /**
         * Select a tab by the value of its `tab` property or an element reference.
         *
         * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */

      }, {
        key: "select",
        value: function select(tab) {
          var selectedTab;
          return regeneratorRuntime.async(function select$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return regeneratorRuntime.awrap(this.getTab(tab));

                case 2:
                  selectedTab = _context3.sent;

                  if (this.shouldSwitch(selectedTab)) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return", false);

                case 5:
                  _context3.next = 7;
                  return regeneratorRuntime.awrap(this.setActive(selectedTab));

                case 7:
                  _context3.next = 9;
                  return regeneratorRuntime.awrap(this.notifyRouter());

                case 9:
                  this.tabSwitch();
                  return _context3.abrupt("return", true);

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this);
        }
        /**
         * Get a specific tab by the value of its `tab` property or an element reference.
         *
         * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */

      }, {
        key: "getTab",
        value: function getTab(tab) {
          var tabEl;
          return regeneratorRuntime.async(function getTab$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  tabEl = typeof tab === 'string' ? this.tabs.find(function (t) {
                    return t.tab === tab;
                  }) : tab;

                  if (!tabEl) {
                    console.error("tab with id: \"".concat(tabEl, "\" does not exist"));
                  }

                  return _context4.abrupt("return", tabEl);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this);
        }
        /**
         * Get the currently selected tab.
         */

      }, {
        key: "getSelected",
        value: function getSelected() {
          return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
        }
        /** @internal */

      }, {
        key: "setRouteId",
        value: function setRouteId(id) {
          var _this3 = this;

          var selectedTab;
          return regeneratorRuntime.async(function setRouteId$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return regeneratorRuntime.awrap(this.getTab(id));

                case 2:
                  selectedTab = _context5.sent;

                  if (this.shouldSwitch(selectedTab)) {
                    _context5.next = 5;
                    break;
                  }

                  return _context5.abrupt("return", {
                    changed: false,
                    element: this.selectedTab
                  });

                case 5:
                  _context5.next = 7;
                  return regeneratorRuntime.awrap(this.setActive(selectedTab));

                case 7:
                  return _context5.abrupt("return", {
                    changed: true,
                    element: this.selectedTab,
                    markVisible: function markVisible() {
                      return _this3.tabSwitch();
                    }
                  });

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this);
        }
        /** @internal */

      }, {
        key: "getRouteId",
        value: function getRouteId() {
          var tabId;
          return regeneratorRuntime.async(function getRouteId$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  tabId = this.selectedTab && this.selectedTab.tab;
                  return _context6.abrupt("return", tabId !== undefined ? {
                    id: tabId,
                    element: this.selectedTab
                  } : undefined);

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "initSelect",
        value: function initSelect() {
          return regeneratorRuntime.async(function initSelect$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!this.useRouter) {
                    _context7.next = 2;
                    break;
                  }

                  return _context7.abrupt("return");

                case 2:
                  _context7.next = 4;
                  return regeneratorRuntime.awrap(Promise.all(this.tabs.map(function (tab) {
                    return tab.componentOnReady();
                  })));

                case 4:
                  _context7.next = 6;
                  return regeneratorRuntime.awrap(this.select(this.tabs[0]));

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "setActive",
        value: function setActive(selectedTab) {
          if (this.transitioning) {
            return Promise.reject('transitioning already happening');
          }

          this.transitioning = true;
          this.leavingTab = this.selectedTab;
          this.selectedTab = selectedTab;
          this.ionTabsWillChange.emit({
            tab: selectedTab.tab
          });
          return selectedTab.setActive();
        }
      }, {
        key: "tabSwitch",
        value: function tabSwitch() {
          var selectedTab = this.selectedTab;
          var leavingTab = this.leavingTab;
          this.leavingTab = undefined;
          this.transitioning = false;

          if (!selectedTab) {
            return;
          }

          if (leavingTab !== selectedTab) {
            if (leavingTab) {
              leavingTab.active = false;
            }

            this.ionTabsDidChange.emit({
              tab: selectedTab.tab
            });
          }
        }
      }, {
        key: "notifyRouter",
        value: function notifyRouter() {
          if (this.useRouter) {
            var router = document.querySelector('ion-router');

            if (router) {
              return router.navChanged('forward');
            }
          }

          return Promise.resolve(false);
        }
      }, {
        key: "shouldSwitch",
        value: function shouldSwitch(selectedTab) {
          var leavingTab = this.selectedTab;
          return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onIonTabButtonClick: this.onTabClicked
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "top"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "tabs-inner"
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "bottom"
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
          return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}";
        }
      }]);

      return Tabs;
    }();
    /***/

  }
}]);
//# sourceMappingURL=70-es5.js.map