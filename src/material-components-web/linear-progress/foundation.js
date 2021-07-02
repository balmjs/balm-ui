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
import { __assign, __extends, __values } from "tslib";
import { getCorrectPropertyName } from '../animation/util';
import { MDCFoundation } from '../base/foundation';
import { animationDimensionPercentages as percents, cssClasses, strings } from './constants';
var MDCLinearProgressFoundation = /** @class */ (function (_super) {
    __extends(MDCLinearProgressFoundation, _super);
    function MDCLinearProgressFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCLinearProgressFoundation.defaultAdapter), adapter)) || this;
        _this.observer = null;
        return _this;
    }
    Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                attachResizeObserver: function () { return null; },
                forceLayout: function () { return undefined; },
                getWidth: function () { return 0; },
                hasClass: function () { return false; },
                setBufferBarStyle: function () { return null; },
                setPrimaryBarStyle: function () { return null; },
                setStyle: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                removeClass: function () { return undefined; },
                setAttribute: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCLinearProgressFoundation.prototype.init = function () {
        var _this = this;
        this.determinate = !this.adapter.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
        this.progress = 0;
        this.buffer = 1;
        this.observer = this.adapter.attachResizeObserver(function (entries) {
            var e_1, _a;
            if (_this.determinate) {
                return;
            }
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    if (entry.contentRect) {
                        _this.calculateAndSetDimensions(entry.contentRect.width);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        if (!this.determinate && this.observer) {
            this.calculateAndSetDimensions(this.adapter.getWidth());
        }
    };
    MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.determinate = isDeterminate;
        if (this.determinate) {
            this.adapter.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress.toString());
            this.adapter.setAttribute(strings.ARIA_VALUEMAX, '1');
            this.adapter.setAttribute(strings.ARIA_VALUEMIN, '0');
            this.setPrimaryBarProgress(this.progress);
            this.setBufferBarProgress(this.buffer);
            return;
        }
        if (this.observer) {
            this.calculateAndSetDimensions(this.adapter.getWidth());
        }
        this.adapter.addClass(cssClasses.INDETERMINATE_CLASS);
        this.adapter.removeAttribute(strings.ARIA_VALUENOW);
        this.adapter.removeAttribute(strings.ARIA_VALUEMAX);
        this.adapter.removeAttribute(strings.ARIA_VALUEMIN);
        this.setPrimaryBarProgress(1);
        this.setBufferBarProgress(1);
    };
    MDCLinearProgressFoundation.prototype.isDeterminate = function () {
        return this.determinate;
    };
    MDCLinearProgressFoundation.prototype.setProgress = function (value) {
        this.progress = value;
        if (this.determinate) {
            this.setPrimaryBarProgress(value);
            this.adapter.setAttribute(strings.ARIA_VALUENOW, value.toString());
        }
    };
    MDCLinearProgressFoundation.prototype.getProgress = function () {
        return this.progress;
    };
    MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
        this.buffer = value;
        if (this.determinate) {
            this.setBufferBarProgress(value);
        }
    };
    MDCLinearProgressFoundation.prototype.getBuffer = function () {
        return this.buffer;
    };
    MDCLinearProgressFoundation.prototype.open = function () {
        this.adapter.removeClass(cssClasses.CLOSED_CLASS);
        this.adapter.removeClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
        this.adapter.removeAttribute(strings.ARIA_HIDDEN);
    };
    MDCLinearProgressFoundation.prototype.close = function () {
        this.adapter.addClass(cssClasses.CLOSED_CLASS);
        this.adapter.setAttribute(strings.ARIA_HIDDEN, 'true');
    };
    MDCLinearProgressFoundation.prototype.isClosed = function () {
        return this.adapter.hasClass(cssClasses.CLOSED_CLASS);
    };
    /**
     * Handles the transitionend event emitted after `close()` is called and the
     * opacity fades out. This is so that animations are removed only after the
     * progress indicator is completely hidden.
     */
    MDCLinearProgressFoundation.prototype.handleTransitionEnd = function () {
        if (this.adapter.hasClass(cssClasses.CLOSED_CLASS)) {
            this.adapter.addClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
        }
    };
    MDCLinearProgressFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    MDCLinearProgressFoundation.prototype.restartAnimation = function () {
        this.adapter.removeClass(cssClasses.ANIMATION_READY_CLASS);
        this.adapter.forceLayout();
        this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
    };
    MDCLinearProgressFoundation.prototype.setPrimaryBarProgress = function (progressValue) {
        var value = "scaleX(" + progressValue + ")";
        // Accessing `window` without a `typeof` check will throw on Node
        // environments.
        var transformProp = typeof window !== 'undefined' ?
            getCorrectPropertyName(window, 'transform') :
            'transform';
        this.adapter.setPrimaryBarStyle(transformProp, value);
    };
    MDCLinearProgressFoundation.prototype.setBufferBarProgress = function (progressValue) {
        var value = progressValue * 100 + "%";
        this.adapter.setBufferBarStyle(strings.FLEX_BASIS, value);
    };
    MDCLinearProgressFoundation.prototype.calculateAndSetDimensions = function (width) {
        var primaryHalf = width * percents.PRIMARY_HALF;
        var primaryFull = width * percents.PRIMARY_FULL;
        var secondaryQuarter = width * percents.SECONDARY_QUARTER;
        var secondaryHalf = width * percents.SECONDARY_HALF;
        var secondaryFull = width * percents.SECONDARY_FULL;
        this.adapter.setStyle('--mdc-linear-progress-primary-half', primaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-primary-half-neg', -primaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-primary-full', primaryFull + "px");
        this.adapter.setStyle('--mdc-linear-progress-primary-full-neg', -primaryFull + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-quarter', secondaryQuarter + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-quarter-neg', -secondaryQuarter + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-half', secondaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-half-neg', -secondaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-full', secondaryFull + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-full-neg', -secondaryFull + "px");
        // need to restart animation for custom props to apply to keyframes
        this.restartAnimation();
    };
    return MDCLinearProgressFoundation;
}(MDCFoundation));
export { MDCLinearProgressFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCLinearProgressFoundation;
//# sourceMappingURL=foundation.js.map