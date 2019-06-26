/**
 * @license
 * Copyright 2016 Google Inc.
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
import { MDCFoundation } from '../../base/foundation';
import { cssClasses, strings } from './constants';
var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCChipFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
        /**
         * Whether a trailing icon click should immediately trigger exit/removal of the chip.
         */
        _this.shouldRemoveOnTrailingIconClick_ = true;
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassToLeadingIcon: function () { return undefined; },
                eventTargetHasClass: function () { return false; },
                getCheckmarkBoundingClientRect: function () { return emptyClientRect; },
                getComputedStyleValue: function () { return ''; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
                hasClass: function () { return false; },
                hasLeadingIcon: function () { return false; },
                notifyInteraction: function () { return undefined; },
                notifyRemoval: function () { return undefined; },
                notifySelection: function () { return undefined; },
                notifyTrailingIconInteraction: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassFromLeadingIcon: function () { return undefined; },
                setAttr: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter_.hasClass(cssClasses.SELECTED);
    };
    MDCChipFoundation.prototype.setSelected = function (selected) {
        if (selected) {
            this.adapter_.addClass(cssClasses.SELECTED);
            this.adapter_.setAttr(strings.ARIA_CHECKED, 'true');
        }
        else {
            this.adapter_.removeClass(cssClasses.SELECTED);
            this.adapter_.setAttr(strings.ARIA_CHECKED, 'false');
        }
        this.adapter_.notifySelection(selected);
    };
    MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_;
    };
    MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
    };
    MDCChipFoundation.prototype.getDimensions = function () {
        var _this = this;
        var getRootRect = function () { return _this.adapter_.getRootBoundingClientRect(); };
        var getCheckmarkRect = function () { return _this.adapter_.getCheckmarkBoundingClientRect(); };
        // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
        // size of the checkmark.
        if (!this.adapter_.hasLeadingIcon()) {
            var checkmarkRect = getCheckmarkRect();
            if (checkmarkRect) {
                var rootRect = getRootRect();
                // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
                // However, the checkbox is initially hidden by setting the width to 0.
                // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
                // when adding it to the root client rect's width.
                return {
                    bottom: rootRect.bottom,
                    height: rootRect.height,
                    left: rootRect.left,
                    right: rootRect.right,
                    top: rootRect.top,
                    width: rootRect.width + checkmarkRect.height,
                };
            }
        }
        return getRootRect();
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChipFoundation.prototype.beginExit = function () {
        this.adapter_.addClass(cssClasses.CHIP_EXIT);
    };
    /**
     * Handles an interaction event on the root element.
     */
    MDCChipFoundation.prototype.handleInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnter) {
            this.adapter_.notifyInteraction();
        }
    };
    /**
     * Handles a transition end event on the root element.
     */
    MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this;
        // Handle transition end event on the chip when it is about to be removed.
        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHIP_EXIT)) {
            if (evt.propertyName === 'width') {
                this.adapter_.notifyRemoval();
            }
            else if (evt.propertyName === 'opacity') {
                // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
                var chipWidth_1 = this.adapter_.getComputedStyleValue('width');
                // On the next frame (once we get the computed width), explicitly set the chip's width
                // to its current pixel width, so we aren't transitioning out of 'auto'.
                requestAnimationFrame(function () {
                    _this.adapter_.setStyleProperty('width', chipWidth_1);
                    // To mitigate jitter, start transitioning padding and margin before width.
                    _this.adapter_.setStyleProperty('padding', '0');
                    _this.adapter_.setStyleProperty('margin', '0');
                    // On the next frame (once width is explicitly set), transition width to 0.
                    requestAnimationFrame(function () {
                        _this.adapter_.setStyleProperty('width', '0');
                    });
                });
            }
            return;
        }
        // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
        if (evt.propertyName !== 'opacity') {
            return;
        }
        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.LEADING_ICON) &&
            this.adapter_.hasClass(cssClasses.SELECTED)) {
            this.adapter_.addClassToLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
        else if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHECKMARK) &&
            !this.adapter_.hasClass(cssClasses.SELECTED)) {
            this.adapter_.removeClassFromLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
    };
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        evt.stopPropagation();
        if (evt.type === 'click' || isEnter) {
            this.adapter_.notifyTrailingIconInteraction();
            if (this.shouldRemoveOnTrailingIconClick_) {
                this.beginExit();
            }
        }
    };
    return MDCChipFoundation;
}(MDCFoundation));
export { MDCChipFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipFoundation;
//# sourceMappingURL=foundation.js.map