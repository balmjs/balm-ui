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
import { __extends } from "tslib";
import { cssClasses } from '../constants';
import { MDCTopAppBarBaseFoundation } from '../foundation';
var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.collapsed = false;
        _this.isAlwaysCollapsed = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.collapsed;
        },
        enumerable: false,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.adapter.getTotalActionItems() > 0) {
            this.adapter.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        }
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses.SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */
    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
        this.isAlwaysCollapsed = !!value;
        if (this.isAlwaysCollapsed) {
            this.collapse();
        }
        else {
            // let maybeCollapseBar determine if the bar should be collapsed
            this.maybeCollapseBar();
        }
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
        return this.isAlwaysCollapsed;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     */
    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
        this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar = function () {
        if (this.isAlwaysCollapsed) {
            return;
        }
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.collapsed) {
                this.uncollapse();
            }
        }
        else {
            if (!this.collapsed) {
                this.collapse();
            }
        }
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse = function () {
        this.adapter.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.collapsed = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse = function () {
        this.adapter.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.collapsed = true;
    };
    return MDCShortTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation));
export { MDCShortTopAppBarFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCShortTopAppBarFoundation;
//# sourceMappingURL=foundation.js.map