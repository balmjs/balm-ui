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
import { getCorrectPropertyName } from '../animation/util';
import { MDCFoundation } from '../base/foundation';
import { cssClasses, strings } from './constants';
var MDCLinearProgressFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCLinearProgressFoundation, _super);
    function MDCLinearProgressFoundation(adapter) {
        return _super.call(this, tslib_1.__assign({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                getBuffer: function () { return null; },
                getPrimaryBar: function () { return null; },
                hasClass: function () { return false; },
                removeAttribute: function () { return undefined; },
                removeClass: function () { return undefined; },
                setAttribute: function () { return undefined; },
                setStyle: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCLinearProgressFoundation.prototype.init = function () {
        this.isDeterminate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.isReversed_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
        this.progress_ = 0;
        this.buffer_ = 1;
    };
    MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.isDeterminate_ = isDeterminate;
        if (this.isDeterminate_) {
            this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter_.setAttribute(strings.ARIA_VALUENOW, this.progress_.toString());
            this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
            this.setScale_(this.adapter_.getBuffer(), this.buffer_);
        }
        else {
            if (this.isReversed_) {
                // Adding/removing REVERSED_CLASS starts a translate animation, while
                // adding INDETERMINATE_CLASS starts a scale animation. Here, we reset
                // the translate animation in order to keep it in sync with the new
                // scale animation that will start from adding INDETERMINATE_CLASS
                // below.
                this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
                this.adapter_.forceLayout();
                this.adapter_.addClass(cssClasses.REVERSED_CLASS);
            }
            this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter_.removeAttribute(strings.ARIA_VALUENOW);
            this.setScale_(this.adapter_.getPrimaryBar(), 1);
            this.setScale_(this.adapter_.getBuffer(), 1);
        }
    };
    MDCLinearProgressFoundation.prototype.setProgress = function (value) {
        this.progress_ = value;
        if (this.isDeterminate_) {
            this.setScale_(this.adapter_.getPrimaryBar(), value);
            this.adapter_.setAttribute(strings.ARIA_VALUENOW, value.toString());
        }
    };
    MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
        this.buffer_ = value;
        if (this.isDeterminate_) {
            this.setScale_(this.adapter_.getBuffer(), value);
        }
    };
    MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
        this.isReversed_ = isReversed;
        if (!this.isDeterminate_) {
            // Adding INDETERMINATE_CLASS starts a scale animation, while
            // adding/removing REVERSED_CLASS starts a translate animation. Here, we
            // reset the scale animation in order to keep it in sync with the new
            // translate animation that will start from adding/removing REVERSED_CLASS
            // below.
            this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter_.forceLayout();
            this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
        }
        if (this.isReversed_) {
            this.adapter_.addClass(cssClasses.REVERSED_CLASS);
        }
        else {
            this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
        }
    };
    MDCLinearProgressFoundation.prototype.open = function () {
        this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
    };
    MDCLinearProgressFoundation.prototype.close = function () {
        this.adapter_.addClass(cssClasses.CLOSED_CLASS);
    };
    MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
        if (!el) {
            return;
        }
        var value = "scaleX(" + scaleValue + ")";
        this.adapter_.setStyle(el, getCorrectPropertyName(window, 'transform'), value);
    };
    return MDCLinearProgressFoundation;
}(MDCFoundation));
export { MDCLinearProgressFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCLinearProgressFoundation;
//# sourceMappingURL=foundation.js.map