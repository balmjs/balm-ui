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
import { __extends } from "tslib";
import { MDCComponent } from '../base/component';
import { MDCCircularProgressFoundation } from './foundation';
var MDCCircularProgress = /** @class */ (function (_super) {
    __extends(MDCCircularProgress, _super);
    function MDCCircularProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCCircularProgress.prototype.initialize = function () {
        this.determinateCircle_ = this.root_.querySelector(MDCCircularProgressFoundation.strings.DETERMINATE_CIRCLE_SELECTOR);
    };
    MDCCircularProgress.attachTo = function (root) {
        return new MDCCircularProgress(root);
    };
    Object.defineProperty(MDCCircularProgress.prototype, "determinate", {
        /**
         * Sets whether the progress indicator is in determinate mode.
         * @param isDeterminate Whether the indicator should be determinate.
         */
        set: function (value) {
            this.foundation_.setDeterminate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgress.prototype, "progress", {
        /**
         * Sets the current progress value. In indeterminate mode, this has no
         * visual effect but will be reflected if the indicator is switched to
         * determinate mode.
         * @param value The current progress value, which must be between 0 and 1.
         */
        set: function (value) {
            this.foundation_.setProgress(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgress.prototype, "isClosed", {
        /**
         * Whether the progress indicator is hidden.
         */
        get: function () {
            return this.foundation_.isClosed();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Shows the progress indicator.
     */
    MDCCircularProgress.prototype.open = function () {
        this.foundation_.open();
    };
    /**
     * Hides the progress indicator.
     */
    MDCCircularProgress.prototype.close = function () {
        this.foundation_.close();
    };
    MDCCircularProgress.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            getDeterminateCircleAttribute: function (attributeName) {
                return _this.determinateCircle_.getAttribute(attributeName);
            },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            removeClass: function (className) {
                return _this.root_.classList.remove(className);
            },
            removeAttribute: function (attributeName) {
                return _this.root_.removeAttribute(attributeName);
            },
            setAttribute: function (attributeName, value) {
                return _this.root_.setAttribute(attributeName, value);
            },
            setDeterminateCircleAttribute: function (attributeName, value) {
                return _this.determinateCircle_.setAttribute(attributeName, value);
            },
        };
        return new MDCCircularProgressFoundation(adapter);
    };
    return MDCCircularProgress;
}(MDCComponent));
export { MDCCircularProgress };
//# sourceMappingURL=component.js.map