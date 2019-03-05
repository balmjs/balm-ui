/**
 * @license
 * Copyright 2017 Google Inc.
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
import * as tslib_1 from "tslib";
import { MDCComponent } from '../base/component';
import { MDCRipple } from '../ripple/component';
import { MDCToolbarFoundation } from './foundation';
var strings = MDCToolbarFoundation.strings;
var MDCToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(MDCToolbar, _super);
    function MDCToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCToolbar.attachTo = function (root) {
        return new MDCToolbar(root);
    };
    MDCToolbar.prototype.initialize = function () {
        var _this = this;
        this.ripples_ = [];
        this.fixedAdjustElement_ = null;
        this.titleElement_ = this.root_.querySelector(strings.TITLE_SELECTOR);
        var firstRowElement = this.root_.querySelector(strings.FIRST_ROW_SELECTOR);
        if (!firstRowElement) {
            throw new Error("MDCToolbar: Required sub-element '" + strings.FIRST_ROW_SELECTOR + "' is missing");
        }
        this.firstRowElement_ = firstRowElement;
        [].forEach.call(this.root_.querySelectorAll(strings.ICON_SELECTOR), function (icon) {
            var ripple = MDCRipple.attachTo(icon);
            ripple.unbounded = true;
            _this.ripples_.push(ripple);
        });
    };
    MDCToolbar.prototype.destroy = function () {
        this.ripples_.forEach(function (ripple) {
            ripple.destroy();
        });
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCToolbar.prototype, "fixedAdjustElement", {
        get: function () {
            return this.fixedAdjustElement_;
        },
        set: function (element) {
            this.fixedAdjustElement_ = element;
            this.foundation_.updateAdjustElementStyles();
        },
        enumerable: true,
        configurable: true
    });
    MDCToolbar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            registerScrollHandler: function (handler) { return window.addEventListener('scroll', handler); },
            deregisterScrollHandler: function (handler) { return window.removeEventListener('scroll', handler); },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getViewportWidth: function () { return window.innerWidth; },
            getViewportScrollY: function () { return window.pageYOffset; },
            getOffsetHeight: function () { return _this.root_.offsetHeight; },
            getFirstRowElementOffsetHeight: function () { return _this.firstRowElement_.offsetHeight; },
            notifyChange: function (evtData) { return _this.emit(strings.CHANGE_EVENT, evtData); },
            setStyle: function (property, value) { return _this.root_.style.setProperty(property, value); },
            setStyleForTitleElement: function (property, value) {
                if (_this.titleElement_) {
                    _this.titleElement_.style.setProperty(property, value);
                }
            },
            setStyleForFlexibleRowElement: function (property, value) { return _this.firstRowElement_.style.setProperty(property, value); },
            setStyleForFixedAdjustElement: function (property, value) {
                if (_this.fixedAdjustElement) {
                    _this.fixedAdjustElement.style.setProperty(property, value);
                }
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCToolbarFoundation(adapter);
    };
    return MDCToolbar;
}(MDCComponent));
export { MDCToolbar };
//# sourceMappingURL=component.js.map