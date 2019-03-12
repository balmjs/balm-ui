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
import * as tslib_1 from "tslib";
import { cssClasses } from '../constants';
import { MDCTopAppBarBaseFoundation } from '../foundation';
var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.isCollapsed_ = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.isCollapsed_;
        },
        enumerable: true,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        if (this.adapter_.getTotalActionItems() > 0) {
            this.adapter_.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        }
        if (!this.adapter_.hasClass(cssClasses.SHORT_COLLAPSED_CLASS)) {
            this.scrollHandler_ = function () { return _this.shortAppBarScrollHandler_(); };
            this.adapter_.registerScrollHandler(this.scrollHandler_);
            this.shortAppBarScrollHandler_();
        }
    };
    MDCShortTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     */
    MDCShortTopAppBarFoundation.prototype.shortAppBarScrollHandler_ = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.isCollapsed_) {
                this.adapter_.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
                this.isCollapsed_ = false;
            }
        }
        else {
            if (!this.isCollapsed_) {
                this.adapter_.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
                this.isCollapsed_ = true;
            }
        }
    };
    return MDCShortTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation));
export { MDCShortTopAppBarFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCShortTopAppBarFoundation;
//# sourceMappingURL=foundation.js.map