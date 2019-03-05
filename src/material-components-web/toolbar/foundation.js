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
import { MDCFoundation } from '../base/foundation';
import { cssClasses, numbers, strings } from './constants';
var MDCToolbarFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCToolbarFoundation, _super);
    function MDCToolbarFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, MDCToolbarFoundation.defaultAdapter, adapter)) || this;
        _this.checkRowHeightFrame_ = 0;
        _this.scrollFrame_ = 0;
        _this.executedLastChange_ = false;
        _this.isFixed_ = false;
        _this.isFixedLastRow_ = false;
        _this.hasFlexibleFirstRow_ = false;
        _this.useFlexDefaultBehavior_ = false;
        _this.calculations_ = {
            flexibleExpansionHeight: 0,
            flexibleExpansionRatio: 0,
            maxTranslateYDistance: 0,
            maxTranslateYRatio: 0,
            scrollThreshold: 0,
            scrollThresholdRatio: 0,
            toolbarHeight: 0,
            toolbarRatio: 0,
            toolbarRowHeight: 0,
        };
        return _this;
    }
    Object.defineProperty(MDCToolbarFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCToolbarFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCToolbarFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCToolbarFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                registerScrollHandler: function () { return undefined; },
                deregisterScrollHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getViewportWidth: function () { return 0; },
                getViewportScrollY: function () { return 0; },
                getOffsetHeight: function () { return 0; },
                getFirstRowElementOffsetHeight: function () { return 0; },
                notifyChange: function () { return undefined; },
                setStyle: function () { return undefined; },
                setStyleForTitleElement: function () { return undefined; },
                setStyleForFlexibleRowElement: function () { return undefined; },
                setStyleForFixedAdjustElement: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCToolbarFoundation.prototype.init = function () {
        var _this = this;
        this.isFixed_ = this.adapter_.hasClass(cssClasses.FIXED);
        this.isFixedLastRow_ = this.adapter_.hasClass(cssClasses.FIXED_LASTROW) && this.isFixed_;
        this.hasFlexibleFirstRow_ = this.adapter_.hasClass(cssClasses.TOOLBAR_ROW_FLEXIBLE);
        if (this.hasFlexibleFirstRow_) {
            this.useFlexDefaultBehavior_ = this.adapter_.hasClass(cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
        }
        this.resizeHandler_ = function () { return _this.checkRowHeight_(); };
        this.scrollHandler_ = function () { return _this.updateToolbarStyles_(); };
        this.adapter_.registerResizeHandler(this.resizeHandler_);
        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.initKeyRatio_();
        this.setKeyHeights_();
    };
    MDCToolbarFoundation.prototype.destroy = function () {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    };
    MDCToolbarFoundation.prototype.updateAdjustElementStyles = function () {
        if (this.isFixed_) {
            this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + "px");
        }
    };
    MDCToolbarFoundation.prototype.getFlexibleExpansionRatio_ = function (scrollTop) {
        // To prevent division by zero when there is no flexibleExpansionHeight
        var delta = 0.0001;
        return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
    };
    MDCToolbarFoundation.prototype.checkRowHeight_ = function () {
        var _this = this;
        cancelAnimationFrame(this.checkRowHeightFrame_);
        this.checkRowHeightFrame_ = requestAnimationFrame(function () { return _this.setKeyHeights_(); });
    };
    MDCToolbarFoundation.prototype.setKeyHeights_ = function () {
        var newToolbarRowHeight = this.getRowHeight_();
        if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
            this.calculations_.toolbarRowHeight = newToolbarRowHeight;
            this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
            this.calculations_.flexibleExpansionHeight =
                this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
            this.calculations_.maxTranslateYDistance =
                this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
            this.calculations_.scrollThreshold =
                this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
            this.updateAdjustElementStyles();
            this.updateToolbarStyles_();
        }
    };
    MDCToolbarFoundation.prototype.updateToolbarStyles_ = function () {
        var _this = this;
        cancelAnimationFrame(this.scrollFrame_);
        this.scrollFrame_ = requestAnimationFrame(function () {
            var scrollTop = _this.adapter_.getViewportScrollY();
            var hasScrolledOutOfThreshold = _this.scrolledOutOfThreshold_(scrollTop);
            if (hasScrolledOutOfThreshold && _this.executedLastChange_) {
                return;
            }
            var flexibleExpansionRatio = _this.getFlexibleExpansionRatio_(scrollTop);
            _this.updateToolbarFlexibleState_(flexibleExpansionRatio);
            if (_this.isFixedLastRow_) {
                _this.updateToolbarFixedState_(scrollTop);
            }
            if (_this.hasFlexibleFirstRow_) {
                _this.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
            }
            _this.executedLastChange_ = hasScrolledOutOfThreshold;
            _this.adapter_.notifyChange({ flexibleExpansionRatio: flexibleExpansionRatio });
        });
    };
    MDCToolbarFoundation.prototype.scrolledOutOfThreshold_ = function (scrollTop) {
        return scrollTop > this.calculations_.scrollThreshold;
    };
    MDCToolbarFoundation.prototype.initKeyRatio_ = function () {
        var toolbarRowHeight = this.getRowHeight_();
        var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
        this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
        this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
        this.calculations_.maxTranslateYRatio =
            this.isFixedLastRow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
        this.calculations_.scrollThresholdRatio =
            (this.isFixedLastRow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
    };
    MDCToolbarFoundation.prototype.getRowHeight_ = function () {
        var breakpoint = numbers.TOOLBAR_MOBILE_BREAKPOINT;
        return this.adapter_.getViewportWidth() < breakpoint ?
            numbers.TOOLBAR_ROW_MOBILE_HEIGHT : numbers.TOOLBAR_ROW_HEIGHT;
    };
    MDCToolbarFoundation.prototype.updateToolbarFlexibleState_ = function (flexibleExpansionRatio) {
        this.adapter_.removeClass(cssClasses.FLEXIBLE_MAX);
        this.adapter_.removeClass(cssClasses.FLEXIBLE_MIN);
        if (flexibleExpansionRatio === 1) {
            this.adapter_.addClass(cssClasses.FLEXIBLE_MAX);
        }
        else if (flexibleExpansionRatio === 0) {
            this.adapter_.addClass(cssClasses.FLEXIBLE_MIN);
        }
    };
    MDCToolbarFoundation.prototype.updateToolbarFixedState_ = function (scrollTop) {
        var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
        this.adapter_.setStyle('transform', "translateY(" + -translateDistance + "px)");
        if (translateDistance === this.calculations_.maxTranslateYDistance) {
            this.adapter_.addClass(cssClasses.FIXED_AT_LAST_ROW);
        }
        else {
            this.adapter_.removeClass(cssClasses.FIXED_AT_LAST_ROW);
        }
    };
    MDCToolbarFoundation.prototype.updateFlexibleRowElementStyles_ = function (flexibleExpansionRatio) {
        if (this.isFixed_) {
            var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
            this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + "px");
        }
        if (this.useFlexDefaultBehavior_) {
            this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
        }
    };
    MDCToolbarFoundation.prototype.updateElementStylesDefaultBehavior_ = function (flexibleExpansionRatio) {
        var maxTitleSize = numbers.MAX_TITLE_SIZE;
        var minTitleSize = numbers.MIN_TITLE_SIZE;
        var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;
        this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + "rem");
    };
    return MDCToolbarFoundation;
}(MDCFoundation));
export { MDCToolbarFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCToolbarFoundation;
//# sourceMappingURL=foundation.js.map