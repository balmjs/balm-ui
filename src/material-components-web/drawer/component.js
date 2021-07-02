/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { __extends } from "tslib";
import { MDCComponent } from '../base/component';
import { FocusTrap } from '../dom/focus-trap';
import { MDCList } from '../list/component';
import { MDCDismissibleDrawerFoundation } from './dismissible/foundation';
import { MDCModalDrawerFoundation } from './modal/foundation';
import * as util from './util';
var cssClasses = MDCDismissibleDrawerFoundation.cssClasses, strings = MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */
var MDCDrawer = /** @class */ (function (_super) {
    __extends(MDCDrawer, _super);
    function MDCDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer.attachTo = function (root) {
        return new MDCDrawer(root);
    };
    Object.defineProperty(MDCDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */
        get: function () {
            return this.foundation.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */
        set: function (isOpen) {
            if (isOpen) {
                this.foundation.open();
            }
            else {
                this.foundation.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDrawer.prototype, "list", {
        // initialSyncWithDOM()
        get: function () {
            return this.innerList;
        },
        enumerable: false,
        configurable: true
    });
    MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) { focusTrapFactory = function (el) { return new FocusTrap(el); }; }
        if (listFactory === void 0) { listFactory = function (el) { return new MDCList(el); }; }
        var listEl = this.root.querySelector(strings.LIST_SELECTOR);
        if (listEl) {
            this.innerList = listFactory(listEl);
            this.innerList.wrapFocus = true;
        }
        this.focusTrapFactory = focusTrapFactory;
    };
    MDCDrawer.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var MODAL = cssClasses.MODAL;
        var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
        this.scrim = this.root.parentNode
            .querySelector(SCRIM_SELECTOR);
        if (this.scrim && this.root.classList.contains(MODAL)) {
            this.handleScrimClick = function () {
                return _this.foundation.handleScrimClick();
            };
            this.scrim.addEventListener('click', this.handleScrimClick);
            this.focusTrap = util.createFocusTrapInstance(this.root, this.focusTrapFactory);
        }
        this.handleKeydown = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleTransitionEnd = function (evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.listen('keydown', this.handleKeydown);
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCDrawer.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('transitionend', this.handleTransitionEnd);
        if (this.innerList) {
            this.innerList.destroy();
        }
        var MODAL = cssClasses.MODAL;
        if (this.scrim && this.handleScrimClick &&
            this.root.classList.contains(MODAL)) {
            this.scrim.removeEventListener('click', this.handleScrimClick);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            elementHasClass: function (element, className) {
                return element.classList.contains(className);
            },
            saveFocus: function () {
                _this.previousFocus = document.activeElement;
            },
            restoreFocus: function () {
                var previousFocus = _this.previousFocus;
                if (previousFocus && previousFocus.focus &&
                    _this.root.contains(document.activeElement)) {
                    previousFocus.focus();
                }
            },
            focusActiveNavigationItem: function () {
                var activeNavItemEl = _this.root.querySelector(strings.LIST_ITEM_ACTIVATED_SELECTOR);
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: function () {
                _this.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */);
            },
            notifyOpen: function () {
                _this.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */);
            },
            trapFocus: function () {
                _this.focusTrap.trapFocus();
            },
            releaseFocus: function () {
                _this.focusTrap.releaseFocus();
            },
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
        if (this.root.classList.contains(DISMISSIBLE)) {
            return new MDCDismissibleDrawerFoundation(adapter);
        }
        else if (this.root.classList.contains(MODAL)) {
            return new MDCModalDrawerFoundation(adapter);
        }
        else {
            throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
        }
    };
    return MDCDrawer;
}(MDCComponent));
export { MDCDrawer };
//# sourceMappingURL=component.js.map