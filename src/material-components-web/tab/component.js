/**
 * @license
 * Copyright 2018 Google Inc.
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
import { __assign, __extends } from "tslib";
import { MDCComponent } from '../base/component';
import { MDCRipple } from '../ripple/component';
import { MDCRippleFoundation } from '../ripple/foundation';
import { MDCTabIndicator } from '../tab-indicator/component';
import { MDCTabFoundation } from './foundation';
var MDCTab = /** @class */ (function (_super) {
    __extends(MDCTab, _super);
    function MDCTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTab.attachTo = function (root) {
        return new MDCTab(root);
    };
    MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new MDCRipple(el, foundation); }; }
        if (tabIndicatorFactory === void 0) { tabIndicatorFactory = function (el) { return new MDCTabIndicator(el); }; }
        this.id = this.root.id;
        var rippleSurface = this.root.querySelector(MDCTabFoundation.strings.RIPPLE_SELECTOR);
        var rippleAdapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { addClass: function (className) { return rippleSurface.classList.add(className); }, removeClass: function (className) { return rippleSurface.classList.remove(className); }, updateCssVariable: function (varName, value) { return rippleSurface.style.setProperty(varName, value); } });
        var rippleFoundation = new MDCRippleFoundation(rippleAdapter);
        this.ripple_ = rippleFactory(this.root, rippleFoundation);
        var tabIndicatorElement = this.root.querySelector(MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
        this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
        this.content_ = this.root.querySelector(MDCTabFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTab.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function () { return _this.foundation.handleClick(); };
        this.listen('click', this.handleClick_);
    };
    MDCTab.prototype.destroy = function () {
        this.unlisten('click', this.handleClick_);
        this.ripple_.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCTab.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            activateIndicator: function (previousIndicatorClientRect) {
                return _this.tabIndicator_.activate(previousIndicatorClientRect);
            },
            deactivateIndicator: function () { return _this.tabIndicator_.deactivate(); },
            notifyInteracted: function () { return _this.emit(MDCTabFoundation.strings.INTERACTED_EVENT, { tabId: _this.id }, true /* bubble */); },
            getOffsetLeft: function () { return _this.root.offsetLeft; },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            getContentOffsetLeft: function () { return _this.content_.offsetLeft; },
            getContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            focus: function () { return _this.root.focus(); },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCTabFoundation(adapter);
    };
    Object.defineProperty(MDCTab.prototype, "active", {
        /**
         * Getter for the active state of the tab
         */
        get: function () {
            return this.foundation.isActive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            this.foundation.setFocusOnActivate(focusOnActivate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the tab
     */
    MDCTab.prototype.activate = function (computeIndicatorClientRect) {
        this.foundation.activate(computeIndicatorClientRect);
    };
    /**
     * Deactivates the tab
     */
    MDCTab.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    /**
     * Returns the indicator's client rect
     */
    MDCTab.prototype.computeIndicatorClientRect = function () {
        return this.tabIndicator_.computeContentClientRect();
    };
    MDCTab.prototype.computeDimensions = function () {
        return this.foundation.computeDimensions();
    };
    /**
     * Focuses the tab
     */
    MDCTab.prototype.focus = function () {
        this.root.focus();
    };
    return MDCTab;
}(MDCComponent));
export { MDCTab };
//# sourceMappingURL=component.js.map