/**
 * @license
 * Copyright 2020 Google Inc.
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
import { MDCFoundation } from '../base/foundation';
import { cssClasses, strings } from './constants';
var MDCCircularProgressFoundation = /** @class */ (function (_super) {
    __extends(MDCCircularProgressFoundation, _super);
    function MDCCircularProgressFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCCircularProgressFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCCircularProgressFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgressFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                getDeterminateCircleAttribute: function () { return null; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                setAttribute: function () { return undefined; },
                setDeterminateCircleAttribute: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCCircularProgressFoundation.prototype.init = function () {
        this.isClosed_ = this.adapter.hasClass(cssClasses.CLOSED_CLASS);
        this.isDeterminate_ =
            !this.adapter.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.progress_ = 0;
        if (this.isDeterminate_) {
            this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress_.toString());
        }
        this.radius_ =
            Number(this.adapter.getDeterminateCircleAttribute(strings.RADIUS));
    };
    MDCCircularProgressFoundation.prototype.isDeterminate = function () {
        return this.isDeterminate_;
    };
    MDCCircularProgressFoundation.prototype.getProgress = function () {
        return this.progress_;
    };
    /**
     * @return Returns whether the progress indicator is hidden.
     */
    MDCCircularProgressFoundation.prototype.isClosed = function () {
        return this.isClosed_;
    };
    /**
     * Sets whether the progress indicator is in determinate mode.
     * @param isDeterminate Whether the indicator should be determinate.
     */
    MDCCircularProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.isDeterminate_ = isDeterminate;
        if (this.isDeterminate_) {
            this.adapter.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.setProgress(this.progress_);
        }
        else {
            this.adapter.addClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter.removeAttribute(strings.ARIA_VALUENOW);
        }
    };
    /**
     * Sets the current progress value. In indeterminate mode, this has no
     * visual effect but will be reflected if the indicator is switched to
     * determinate mode.
     * @param value The current progress value, which must be between 0 and 1.
     */
    MDCCircularProgressFoundation.prototype.setProgress = function (value) {
        this.progress_ = value;
        if (this.isDeterminate_) {
            var unfilledArcLength = (1 - this.progress_) * (2 * Math.PI * this.radius_);
            this.adapter.setDeterminateCircleAttribute(strings.STROKE_DASHOFFSET, "" + unfilledArcLength);
            this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress_.toString());
        }
    };
    /**
     * Shows the progress indicator.
     */
    MDCCircularProgressFoundation.prototype.open = function () {
        this.isClosed_ = false;
        this.adapter.removeClass(cssClasses.CLOSED_CLASS);
    };
    /**
     * Hides the progress indicator
     */
    MDCCircularProgressFoundation.prototype.close = function () {
        this.isClosed_ = true;
        this.adapter.addClass(cssClasses.CLOSED_CLASS);
    };
    return MDCCircularProgressFoundation;
}(MDCFoundation));
export { MDCCircularProgressFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCCircularProgressFoundation;
//# sourceMappingURL=foundation.js.map