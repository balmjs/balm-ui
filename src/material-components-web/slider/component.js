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
import { applyPassive } from '../dom/events';
import { strings } from './constants';
import { MDCSliderFoundation } from './foundation';
var MDCSlider = /** @class */ (function (_super) {
    tslib_1.__extends(MDCSlider, _super);
    function MDCSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlider.attachTo = function (root) {
        return new MDCSlider(root);
    };
    Object.defineProperty(MDCSlider.prototype, "value", {
        get: function () {
            return this.foundation_.getValue();
        },
        set: function (value) {
            this.foundation_.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSlider.prototype, "min", {
        get: function () {
            return this.foundation_.getMin();
        },
        set: function (min) {
            this.foundation_.setMin(min);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSlider.prototype, "max", {
        get: function () {
            return this.foundation_.getMax();
        },
        set: function (max) {
            this.foundation_.setMax(max);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSlider.prototype, "step", {
        get: function () {
            return this.foundation_.getStep();
        },
        set: function (step) {
            this.foundation_.setStep(step);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSlider.prototype, "disabled", {
        get: function () {
            return this.foundation_.isDisabled();
        },
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    MDCSlider.prototype.initialize = function () {
        this.thumbContainer_ = this.root_.querySelector(strings.THUMB_CONTAINER_SELECTOR);
        this.track_ = this.root_.querySelector(strings.TRACK_SELECTOR);
        this.pinValueMarker_ = this.root_.querySelector(strings.PIN_VALUE_MARKER_SELECTOR);
        this.trackMarkerContainer_ = this.root_.querySelector(strings.TRACK_MARKER_CONTAINER_SELECTOR);
    };
    MDCSlider.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            getAttribute: function (name) { return _this.root_.getAttribute(name); },
            setAttribute: function (name, value) { return _this.root_.setAttribute(name, value); },
            removeAttribute: function (name) { return _this.root_.removeAttribute(name); },
            computeBoundingRect: function () { return _this.root_.getBoundingClientRect(); },
            getTabIndex: function () { return _this.root_.tabIndex; },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler, applyPassive()); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler, applyPassive()); },
            registerThumbContainerInteractionHandler: function (evtType, handler) {
                _this.thumbContainer_.addEventListener(evtType, handler, applyPassive());
            },
            deregisterThumbContainerInteractionHandler: function (evtType, handler) {
                _this.thumbContainer_.removeEventListener(evtType, handler, applyPassive());
            },
            registerBodyInteractionHandler: function (evtType, handler) { return document.body.addEventListener(evtType, handler); },
            deregisterBodyInteractionHandler: function (evtType, handler) { return document.body.removeEventListener(evtType, handler); },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            notifyInput: function () { return _this.emit(strings.INPUT_EVENT, _this); },
            notifyChange: function () { return _this.emit(strings.CHANGE_EVENT, _this); },
            setThumbContainerStyleProperty: function (propertyName, value) {
                _this.thumbContainer_.style.setProperty(propertyName, value);
            },
            setTrackStyleProperty: function (propertyName, value) { return _this.track_.style.setProperty(propertyName, value); },
            setMarkerValue: function (value) { return _this.pinValueMarker_.innerText = value.toLocaleString(); },
            setTrackMarkers: function (step, max, min) {
                var stepStr = step.toLocaleString();
                var maxStr = max.toLocaleString();
                var minStr = min.toLocaleString();
                // keep calculation in css for better rounding/subpixel behavior
                var markerAmount = "((" + maxStr + " - " + minStr + ") / " + stepStr + ")";
                var markerWidth = "2px";
                var markerBkgdImage = "linear-gradient(to right, currentColor " + markerWidth + ", transparent 0)";
                var markerBkgdLayout = "0 center / calc((100% - " + markerWidth + ") / " + markerAmount + ") 100% repeat-x";
                var markerBkgdShorthand = markerBkgdImage + " " + markerBkgdLayout;
                _this.trackMarkerContainer_.style.setProperty('background', markerBkgdShorthand);
            },
            isRTL: function () { return getComputedStyle(_this.root_).direction === 'rtl'; },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCSliderFoundation(adapter);
    };
    MDCSlider.prototype.initialSyncWithDOM = function () {
        var origValueNow = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUENOW), this.value);
        var min = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUEMIN), this.min);
        var max = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUEMAX), this.max);
        // min and max need to be set in the right order to avoid throwing an error
        // when the new min is greater than the default max.
        if (min >= this.max) {
            this.max = max;
            this.min = min;
        }
        else {
            this.min = min;
            this.max = max;
        }
        this.step = this.parseFloat_(this.root_.getAttribute(strings.STEP_DATA_ATTR), this.step);
        this.value = origValueNow;
        this.disabled = (this.root_.hasAttribute(strings.ARIA_DISABLED) &&
            this.root_.getAttribute(strings.ARIA_DISABLED) !== 'false');
        this.foundation_.setupTrackMarker();
    };
    MDCSlider.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCSlider.prototype.stepUp = function (amount) {
        if (amount === void 0) { amount = (this.step || 1); }
        this.value += amount;
    };
    MDCSlider.prototype.stepDown = function (amount) {
        if (amount === void 0) { amount = (this.step || 1); }
        this.value -= amount;
    };
    MDCSlider.prototype.parseFloat_ = function (str, defaultValue) {
        var num = parseFloat(str); // tslint:disable-line:ban
        var isNumeric = typeof num === 'number' && isFinite(num);
        return isNumeric ? num : defaultValue;
    };
    return MDCSlider;
}(MDCComponent));
export { MDCSlider };
//# sourceMappingURL=component.js.map