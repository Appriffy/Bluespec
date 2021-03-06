(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-00265c49.js ***!
  \*************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-353a032e.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js ***!
  \*************************************************************/
/*! exports provided: d, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-d0403a2f.js */ "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
/* harmony import */ var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-94c4865f.js */ "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-3107e07c-js */ "ios-transition-3107e07c-js").then(__webpack_require__.bind(null, /*! ./ios.transition-3107e07c.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-3107e07c.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-90b00ffe-js */ "md-transition-90b00ffe-js").then(__webpack_require__.bind(null, /*! ./md.transition-90b00ffe.js */ "./node_modules/@ionic/core/dist/esm/md.transition-90b00ffe.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const builder = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return builder;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = await __webpack_require__.e(/*! import() | index-d9adb105-js */ "index-d9adb105-js").then(__webpack_require__.bind(null, /*! ./index-d9adb105.js */ "./node_modules/@ionic/core/dist/esm/index-d9adb105.js")).then(mod => mod.create(animationBuilder, opts.baseEl, opts));
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (trans.hasCompleted) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: trans.hasCompleted,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => trans.onFinish(resolve));
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js ***!
  \*************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js ***!
  \*************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
const hasShadowDom = (el) => {
    return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
    const itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
const renderHiddenInput = (always, container, name, value, disabled) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
const clamp = (min, n, max) => {
    return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
const isEndSide = (side) => {
    const isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
};
const debounceEvent = (event, wait) => {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const documentFragmentChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes[i];
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (element) => {
    return (element.children != null) ? element.children : element.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/map/map.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/map/map.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-document-type/select-document-type.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-document-type/select-document-type.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title>Select Document Type</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" color=\"light\" class=\"filters-btn\" (click)=\"loadItems()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n     \n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Search document types\"></ion-searchbar>\n      </ion-col>\n      <!-- <ion-col class=\"call-to-action-col\">   \n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showFilterScreen()\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-col> -->\n    </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n <!------- Loading View ------->\n <ion-grid style=\"height: 100%\" *ngIf=\"loading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n    <ion-spinner name=\"bubbles\" style=\"width:32px;height:32px;margin:0 auto;stroke:#222;fill:#444;text-align: center;\"></ion-spinner>\n    <h5 style=\"text-align: center;columns: #555555;\">Loading Document Types...</h5>\n    </ion-row>\n  </ion-grid>\n <!------- Loading View ------->\n\n   <!------- Empty View ------->\n   <ion-grid style=\"height: 100%\" *ngIf=\"listing?.length <= 0 && !loading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n      \n      <ion-icon src=\"./assets/sample-icons/side-menu/document.svg\" style=\"display:block;width:48px;height:48px;color:#444\"></ion-icon>\n      <h5 style=\"text-align: center;color: #555555;\">No Document Type Found</h5>\n      </ion-row>\n    </ion-grid>\n   <!------- Empty View ------->\n\n      <ion-list class=\"items-list\" *ngIf=\"listing?.length > 0 && !loading\">     \n        <ion-item class=\"list-item\" *ngFor=\"let item of listing\" tappable (click)=\"dismissModal(item)\">\n   \n          <ion-row class=\"user-row\">\n            <ion-col class=\"user-data-wrapper\">\n              <div class=\"user-info\">\n                <h3 class=\"user-name\">\n                  <app-text-shell animation=\"bouncing\" [data]=\"item?.title\"></app-text-shell>\n                </h3>\n    \n      <div *ngIf=\"!item?.enabled\">\n       <ion-badge class=\"schedule-closed\" color=\"danger\">Not Enabled</ion-badge>\n       </div>\n    \n              </div>\n            </ion-col>\n          </ion-row>\n     \n\n  </ion-item>\n     </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/app-masters/job-skills/job-skills.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-masters/job-skills/job-skills.service.ts ***!
  \**************************************************************/
/*! exports provided: JobSkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillsService", function() { return JobSkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _dbmodels_job_skill_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dbmodels/job-skill.model */ "./src/app/dbmodels/job-skill.model.ts");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");












let JobSkillsService = class JobSkillsService {
    constructor(http, authService, storageService, masterService, toastService) {
        this.http = http;
        this.authService = authService;
        this.storageService = storageService;
        this.masterService = masterService;
        this.toastService = toastService;
        this.invokeListChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.listingBundle);
        this.currentData = this.invokeListChangeEvent.asObservable();
    }
    getListingDataSource() {
        this.authService.getAuthKey().then(result => {
            this.api_key = result;
            console.log('########## Service Obtained Token #####: ' + result);
            this.fetchFreshList(this.api_key);
        });
    }
    fetchFreshList(api_key) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': api_key
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'skill-types';
        this.http.get(url, httpOptions).subscribe((res) => {
            if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                console.log("###### Job Skills List API Response: " + JSON.stringify(res));
            }
            if (res.error) {
                this.toastService.presentToast(res.message);
            }
            else {
                this.listingBundle = res.result;
                this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].JOB_SKILLS, this.listingBundle);
                this.invokeListChangeEvent.next(res.result);
                if (_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].DEV_MODE) {
                    this.toastService.presentToast("We found " + res.result.length + " Job skills.");
                }
            }
        }, (error) => {
            this.toastService.presentToast('Looks like there is a Network Issue.' + error.message);
        }, () => {
            // complete callback
            // this.loaderDismiss();
        });
    }
    /******* JAVASCRIPT DOM MANIPULATIONS *******/
    deleteItemFromLocal(item) {
        //Wow examples
        //this.listingBundle = this.listingBundle.filter(order => order.id !== item.id); 
        // const index = this.listingBundle.findIndex(x => x.id === item.id);
        let index = item.id;
        if (index !== undefined) {
            if (this.listingBundle !== undefined && item !== undefined && item !== null) {
                this.listingBundle = this.listingBundle.splice(index, 1);
            }
            else {
                this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].JOB_SKILLS).then(result => {
                    if (result) {
                        this.listingBundle = result;
                        this.listingBundle = this.listingBundle.splice(index, 1);
                    }
                });
            }
            this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].JOB_SKILLS, this.listingBundle);
            console.log('########## Delete Result Saved and Changed #####: ' + JSON.stringify(this.listingBundle));
            this.invokeListChangeEvent.next(this.listingBundle);
        }
        else {
            this.toastService.presentToast("Could not update view for delete operation.");
        }
        //old thing
        //this.fetchFreshList(this.api_key);
    }
    addItemToLocal(item) {
        console.log('########## Create Result Injected #####: ' + JSON.stringify(item));
        if (this.listingBundle !== undefined && item !== undefined && item !== null) {
            this.listingBundle.push(item);
        }
        else {
            this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].JOB_SKILLS).then(result => {
                if (result) {
                    this.listingBundle = result;
                    this.listingBundle.push(item);
                }
            });
        }
        this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_8__["AuthConstants"].JOB_SKILLS, this.listingBundle);
        console.log('########## Create Result Saved and Change Invoked #####: ' + JSON.stringify(item));
        this.invokeListChangeEvent.next(this.listingBundle);
    }
    /********** */
    /************** RETURN ITEM DETAIL FROM API ***************/
    getDetailsDataSource(api_key, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': api_key
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'apis/skill-types/profile';
        return this.http.post(url, postData, httpOptions);
    }
    getDetailsStore(dataSource) {
        const shellModel = new _dbmodels_job_skill_model__WEBPACK_IMPORTED_MODULE_9__["JobSkillDetailModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
    /**********************/
    callItemCreateAPI(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'apis/skill-types/create';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData));
        console.log('########## Auth #####: ' + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
    callItemUpdateAPI(apiKey, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': apiKey
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'apis/skill-types/update';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData) + " via Token " + apiKey);
        return this.http.post(url, postData, httpOptions);
    }
    getTokenFirst() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getAuthKey().then(wow => {
                return wow;
            });
        });
    }
    performDeleteItem(token, postData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'apis/skill-types/delete';
        console.log("Hiting " + url + " with => " + JSON.stringify(postData));
        return this.http.post(url, postData, httpOptions);
    }
    deleteItem(apiKey, postData) {
        return this.performDeleteItem(apiKey, postData);
    }
};
JobSkillsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
JobSkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
        _services_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
], JobSkillsService);



/***/ }),

/***/ "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LocationAutocompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAutocompletePageModule", function() { return LocationAutocompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_autocomplete_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-autocomplete.page */ "./src/app/bluspec-recruiter/location-autocomplete/location-autocomplete.page.ts");






const routes = [
    {
        path: '',
        component: _location_autocomplete_page__WEBPACK_IMPORTED_MODULE_5__["LocationAutocompletePage"]
    }
];
let LocationAutocompletePageModule = class LocationAutocompletePageModule {
};
LocationAutocompletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            //RouterModule.forChild(routes)
        ],
        declarations: [_location_autocomplete_page__WEBPACK_IMPORTED_MODULE_5__["LocationAutocompletePage"]],
        exports: [
            _location_autocomplete_page__WEBPACK_IMPORTED_MODULE_5__["LocationAutocompletePage"]
        ],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], LocationAutocompletePageModule);



/***/ }),

/***/ "./src/app/coming-soon/coming-soon.page.scss":
/*!***************************************************!*\
  !*** ./src/app/coming-soon/coming-soon.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n}\n\n.not-found-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.not-found-content .illustration-wrapper {\n  margin: 0px 10%;\n}\n\n.not-found-content .not-found-title {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 500;\n}\n\n.not-found-content .not-found-text {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 40px;\n  font-weight: 500;\n}\n\n.not-found-content .go-home-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29taW5nLXNvb24vRDpcXFdFQiBNQVJLRVRQTEFDRVxcQU5HVUxBUlxcQmx1c3BlYy9zcmNcXGFwcFxcY29taW5nLXNvb25cXGNvbWluZy1zb29uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29taW5nLXNvb24vY29taW5nLXNvb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUNBQUE7QUNESjs7QURJRTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDREo7O0FER0k7RUFDRSxlQUFBO0FDRE47O0FESUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREtJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvY29taW5nLXNvb24vY29taW5nLXNvb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgLmlsbHVzdHJhdGlvbi13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiAwcHggMTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdC1mb3VuZC10aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdC1mb3VuZC10ZXh0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZ28taG9tZS1idG4ge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuXG4ubm90LWZvdW5kLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3QtZm91bmQtY29udGVudCAuaWxsdXN0cmF0aW9uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxMCU7XG59XG4ubm90LWZvdW5kLWNvbnRlbnQgLm5vdC1mb3VuZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5ub3QtZm91bmQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5nby1ob21lLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/companies/companies.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/companies/companies.resolver.ts ***!
  \*************************************************/
/*! exports provided: CompanyListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListingResolver", function() { return CompanyListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.service */ "./src/app/companies/companies.service.ts");



let CompanyListingResolver = class CompanyListingResolver {
    constructor(dealsService) {
        this.dealsService = dealsService;
    }
    resolve() {
        //const dataSource: Observable<CompanyListingModel> = this.dealsService.getListingDataSource();
        // const dataStore: DataStore<CompanyListingModel> = this.dealsService.getListingStore(dataSource);
        // return dataStore;
    }
};
CompanyListingResolver.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
];
CompanyListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
], CompanyListingResolver);



/***/ }),

/***/ "./src/app/dbmodels/job-skill.model.ts":
/*!*********************************************!*\
  !*** ./src/app/dbmodels/job-skill.model.ts ***!
  \*********************************************/
/*! exports provided: JobSkillModel, JobSkillCreateModel, JobSkillListingModel, JobSkillDetailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillModel", function() { return JobSkillModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillCreateModel", function() { return JobSkillCreateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillListingModel", function() { return JobSkillListingModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillDetailModel", function() { return JobSkillDetailModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


class JobSkillModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
}
class JobSkillCreateModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
}
class JobSkillListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new JobSkillModel(),
            new JobSkillModel(),
            new JobSkillModel(),
            new JobSkillModel()
        ];
    }
    getItems() {
        return this.items;
    }
    setItems(itemsSent) {
        this.items = itemsSent;
    }
}
class JobSkillDetailModel extends JobSkillModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/app/shared/components/map/map.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/map/map.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-location-select ion-list {\n  margin: 0 !important;\n}\npage-location-select #please-connect {\n  position: absolute;\n  background-color: #000;\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\npage-location-select #please-connect p {\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  position: relative;\n  font-size: 1.6em;\n  top: 30%;\n}\npage-location-select .scroll-content {\n  overflow: hidden;\n}\npage-location-select #map {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFwL0Q6XFxXRUIgTUFSS0VUUExBQ0VcXEFOR1VMQVJcXEJsdXNwZWMvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWFwXFxtYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxvQkFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZOO0FES0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FDSFI7QURNSTtFQUNJLGdCQUFBO0FDSlI7QURPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWxvY2F0aW9uLXNlbGVjdCB7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgICNwbGVhc2UtY29ubmVjdCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI3BsZWFzZS1jb25uZWN0IHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICB0b3A6IDMwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICBcclxuICAgICNtYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgfSIsInBhZ2UtbG9jYXRpb24tc2VsZWN0IGlvbi1saXN0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5wYWdlLWxvY2F0aW9uLXNlbGVjdCAjcGxlYXNlLWNvbm5lY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbnBhZ2UtbG9jYXRpb24tc2VsZWN0ICNwbGVhc2UtY29ubmVjdCBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgdG9wOiAzMCU7XG59XG5wYWdlLWxvY2F0aW9uLXNlbGVjdCAuc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxucGFnZS1sb2NhdGlvbi1zZWxlY3QgI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/map/map.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/map/map.component.ts ***!
  \********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapComponent = class MapComponent {
    constructor() {
        this.markers = [];
        this.mapsLoaded = false;
        this.networkHandler = null;
    }
    ngAfterViewInit() {
        this.initMap();
    }
    initMap() {
        const POSITION = { lat: this.coords.latitude, lng: this.coords.longitude };
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: POSITION || { lat: 22, lng: 22 }
        });
        const marker = new google.maps.Marker({
            position: POSITION,
            map: this.map
        });
        this.map.setCenter(POSITION);
    }
    addMarker(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
        this.map.setCenter(latLng);
        this.addRadiusAround(marker, lat, lng, 25);
        console.log("Marker has been added at " + lat + ", " + lng);
    }
    addRadiusAround(marker, lat, lng, search_radius) {
        var latlng = new google.maps.LatLng(lat, lat);
        var sunCircle = {
            strokeColor: "#c3fc49",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#c3fc49",
            fillOpacity: 0.35,
            map: this.map,
            center: latlng,
            radius: search_radius // in meters
        };
        //cityCircle = new google.maps.Circle(sunCircle)
        console.log("Radius has been set being drawn.");
        new google.maps.Circle(sunCircle).bindTo('center', marker, 'position');
        console.log("Radius has been drawn.");
    }
    // Redraw all markers on the map
    updateMap(locations) {
        // Remove all current marker
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];
        for (let loc of locations) {
            let latLng = new google.maps.LatLng(loc.lat, loc.lng);
            let marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: latLng
            });
            this.markers.push(marker);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapComponent.prototype, "coords", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/shared/components/map/map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapComponent);

// import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss'],
// })
// export class MapComponent implements AfterViewInit  {
//   @Input() coords: {latitude: number, longitude: number};
//   constructor() { }
//   ngAfterViewInit() {
//     this.initMap();
//   }
//   initMap(): void {
//     const POSITION = {lat: this.coords.latitude, lng: this.coords.longitude}
//     const map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: POSITION || {lat: 22, lng: 22}
//     });
//     const marker = new google.maps.Marker({
//       position: POSITION,
//       map: map
//     });
//   }
// }


/***/ }),

/***/ "./src/app/shared/components/map/shared.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/map/shared.module.ts ***!
  \********************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.component */ "./src/app/shared/components/map/map.component.ts");





const COMPONENTS = [
    _map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [COMPONENTS],
        exports: [...COMPONENTS, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/showcase/showcase-shell.model.ts":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase-shell.model.ts ***!
  \**************************************************/
/*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function() { return ShowcaseShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function() { return ShowcaseShellUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function() { return ShowcaseCommentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function() { return ShowcasePostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function() { return ShowcaseTaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function() { return ShowcaseUser2Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function() { return ShowcaseCompanyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function() { return ShowcaseCombinedTaskUserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


class ShowcaseShellModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseShellUserModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCommentModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcasePostModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseTaskModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseUser2Model extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCompanyModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCombinedTaskUserModel extends ShowcaseTaskModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/app/showcase/showcase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/showcase/showcase.service.ts ***!
  \**********************************************/
/*! exports provided: ShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseService", function() { return ShowcaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");





// tslint:disable-next-line:max-line-length


// import { TravelListingModel } from '../travel/listing/travel-listing.model';
// import { FashionListingModel } from '../fashion/listing/fashion-listing.model';
let ShowcaseService = class ShowcaseService {
    constructor(http) {
        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    getDataSourceWithDelay() {
        return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(val => {
            console.log('getData STARTED');
            // tslint:disable-next-line:no-console
            console.time('getData Roundtrip');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            console.log('getData COMPLETED');
            // tslint:disable-next-line:no-console
            console.timeEnd('getData Roundtrip');
        }));
    }
    getSimpleDataSource() {
        return this.http.get('./assets/sample-data/showcase/shell.json');
    }
    getSimpleDataStore(dataSource) {
        // Use cache if available
        if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.showcaseDataStore.load(dataSource);
        }
        return this.showcaseDataStore;
    }
    getListDataSource() {
        return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result['data']));
    }
    getPaginationDataSource(page) {
        return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(results => results.length > 0));
    }
    // public getMultipleDataSourceA(): Observable<TravelListingModel> {
    //   return this.http.get<TravelListingModel>('./assets/sample-data/travel/listing.json');
    // }
    // public getMultipleDataSourceB(): Observable<FashionListingModel> {
    //     return this.http.get<FashionListingModel>('./assets/sample-data/fashion/listing.json');
    // }
    getDependantDataSourcePost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    }
    // tslint:disable-next-line:max-line-length
    getDependantDataSourcePostComments(dependantDataSource) {
        return dependantDataSource.pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(post => !post.isShell), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(post => {
            return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
        }));
    }
    getUser(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    }
    // get the company details, a subset of the user data
    getUserSubsetData(userId) {
        const dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((jsonResponse) => {
            const filteredData = Object.assign({}, jsonResponse.company);
            return filteredData;
        }));
    }
    getTasks() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
    // Concat the task with the details of the user
    getCombinedTasksUserDataSource() {
        return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(tasks => {
            const completeTaskData = tasks.map(task => {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                const taskUser = this.getUser(task.userId);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(task),
                    taskUser
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([taskData, user]) => {
                    return Object.assign({}, taskData, { user: user });
                }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(completeTaskData);
        }));
    }
    getOpenDataStream() {
        const firstLoadData = this.getPaginationDataSource(1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.openDataStream.asObservable(), firstLoadData);
    }
    pushValuesToOpenStream() {
        const stackedValues = this.getStackedValues();
        this.openDataStream.next(stackedValues);
    }
    getStackedValuesDataSource() {
        const stackedValues = this.getStackedValues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000));
    }
    getStackedValues() {
        const newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/sample-images/user/person_1.jpg'
        };
        // Get a random integer between 1 (and only 1) and 'max'
        const getRand = (max, min = 1) => {
            return Math.floor(Math.random() * max) + min;
        };
        // Randomly send one, two or three users
        return Array(getRand(3)).fill(newUser);
    }
};
ShowcaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShowcaseService);



/***/ }),

/***/ "./src/app/signup/registration.service.ts":
/*!************************************************!*\
  !*** ./src/app/signup/registration.service.ts ***!
  \************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/AuthConstants */ "./src/app/config/AuthConstants.ts");







let RegistrationService = class RegistrationService {
    constructor(httpService, storageService, router) {
        this.httpService = httpService;
        this.storageService = storageService;
        this.router = router;
        this.invokeRegisteredEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    getCachedData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.storageService
                    .get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].REGISTER_CACHE);
                //console.log(result);
                return result;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    setCachedData(cachedData) {
        this.storageService.store(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].REGISTER_CACHE, cachedData);
    }
};
RegistrationService.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegistrationService);



/***/ }),

/***/ "./src/app/utility-components/select-document-type/select-document-type.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/utility-components/select-document-type/select-document-type.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SelectDocumentTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDocumentTypePageModule", function() { return SelectDocumentTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _select_document_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-document-type.page */ "./src/app/utility-components/select-document-type/select-document-type.page.ts");







let SelectDocumentTypePageModule = class SelectDocumentTypePageModule {
};
SelectDocumentTypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_select_document_type_page__WEBPACK_IMPORTED_MODULE_6__["SelectDocumentTypePage"]],
        exports: [
            _select_document_type_page__WEBPACK_IMPORTED_MODULE_6__["SelectDocumentTypePage"]
        ],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SelectDocumentTypePageModule);



/***/ }),

/***/ "./src/app/utility-components/select-document-type/select-document-type.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/utility-components/select-document-type/select-document-type.page.ts ***!
  \**************************************************************************************/
/*! exports provided: SelectDocumentTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDocumentTypePage", function() { return SelectDocumentTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/AuthConstants */ "./src/app/config/AuthConstants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SelectDocumentTypePage = class SelectDocumentTypePage {
    constructor(navCtrl, masterService, storageService, modalController, router, authService) {
        this.navCtrl = navCtrl;
        this.masterService = masterService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.router = router;
        this.authService = authService;
        this.loading = true;
        this.authService.getAuthCache().then(promisedValue => {
            if (promisedValue) {
                this.localUser = promisedValue;
            }
        });
    }
    ngOnInit() {
        this.storageService.get(_config_AuthConstants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].DOCUMENT_MASTERS).then(allList => {
            if (allList) {
                this.listing = allList;
                this.filtered_listing = allList;
                this.loading = false;
            }
        });
    }
    loadItems() {
        this.loading = true;
        this.masterService.getMasterDocuments().subscribe(allData => {
            this.loading = false;
            if (allData) {
                this.listing = allData.result;
                this.filtered_listing = allData.result;
            }
        });
    }
    initializeItems() {
        this.listing = this.filtered_listing;
    }
    /****************** SEARCH ITEMS ********************/
    searchList() {
        this.initializeItems();
        return this.listing = this.listing.filter((thisJob) => {
            return thisJob.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
        });
    }
    /****************** SEARCH ITEMS ********************/
    dismissModal(item) {
        //alert(item.title);
        this.modalController.dismiss(item);
    }
    closeModal() {
        this.modalController.dismiss();
    }
    goBack() {
        this.closeModal();
        this.router.navigate(['/list-documents', this.localUser.id]);
    }
};
SelectDocumentTypePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SelectDocumentTypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-document-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-document-type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utility-components/select-document-type/select-document-type.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.page.scss */ "./src/app/bluspecstyles/listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.shell.scss */ "./src/app/bluspecstyles/listing.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../bluspecstyles/listing.ios.scss */ "./src/app/bluspecstyles/listing.ios.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SelectDocumentTypePage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map