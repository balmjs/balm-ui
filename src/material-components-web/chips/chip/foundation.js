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
import { cssClasses, Direction, EventSource, jumpChipKeys, navigationKeys, strings } from './constants';
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
        /** Whether a trailing icon click should immediately trigger exit/removal of the chip. */
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
                focusPrimaryAction: function () { return undefined; },
                focusTrailingAction: function () { return undefined; },
                getAttribute: function () { return null; },
                getCheckmarkBoundingClientRect: function () { return emptyClientRect; },
                getComputedStyleValue: function () { return ''; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
                hasClass: function () { return false; },
                hasLeadingIcon: function () { return false; },
                hasTrailingAction: function () { return false; },
                isRTL: function () { return false; },
                notifyInteraction: function () { return undefined; },
                notifyNavigation: function () { return undefined; },
                notifyRemoval: function () { return undefined; },
                notifySelection: function () { return undefined; },
                notifyTrailingIconInteraction: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassFromLeadingIcon: function () { return undefined; },
                setPrimaryActionAttr: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
                setTrailingActionAttr: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter_.hasClass(cssClasses.SELECTED);
    };
    MDCChipFoundation.prototype.setSelected = function (selected) {
        this.setSelected_(selected);
        this.notifySelection_(selected);
    };
    MDCChipFoundation.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
        this.setSelected_(selected);
        if (shouldNotifyClients) {
            this.notifyIgnoredSelection_(selected);
        }
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
        if (this.shouldHandleInteraction_(evt)) {
            this.adapter_.notifyInteraction();
            this.focusPrimaryAction_();
        }
    };
    /**
     * Handles a transition end event on the root element.
     */
    MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this;
        // Handle transition end event on the chip when it is about to be removed.
        var shouldHandle = this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHIP_EXIT);
        var widthIsAnimating = evt.propertyName === 'width';
        var opacityIsAnimating = evt.propertyName === 'opacity';
        if (shouldHandle && opacityIsAnimating) {
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
            return;
        }
        if (shouldHandle && widthIsAnimating) {
            this.removeFocus_();
            var removedAnnouncement = this.adapter_.getAttribute(strings.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
            this.adapter_.notifyRemoval(removedAnnouncement);
        }
        // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
        if (!opacityIsAnimating) {
            return;
        }
        var shouldHideLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, cssClasses.LEADING_ICON)
            && this.adapter_.hasClass(cssClasses.SELECTED);
        var shouldShowLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHECKMARK)
            && !this.adapter_.hasClass(cssClasses.SELECTED);
        if (shouldHideLeadingIcon) {
            return this.adapter_.addClassToLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
        if (shouldShowLeadingIcon) {
            return this.adapter_.removeClassFromLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
    };
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
        if (this.shouldHandleInteraction_(evt)) {
            this.adapter_.notifyTrailingIconInteraction();
            this.removeChip_(evt);
        }
    };
    /**
     * Handles a keydown event from the root element.
     */
    MDCChipFoundation.prototype.handleKeydown = function (evt) {
        if (this.shouldRemoveChip_(evt)) {
            return this.removeChip_(evt);
        }
        var key = evt.key;
        // Early exit if the key is not usable
        if (!navigationKeys.has(key)) {
            return;
        }
        // Prevent default behavior for movement keys which could include scrolling
        evt.preventDefault();
        this.focusNextAction_(evt);
    };
    MDCChipFoundation.prototype.removeFocus = function () {
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '-1');
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.focusPrimaryAction = function () {
        this.focusPrimaryAction_();
    };
    MDCChipFoundation.prototype.focusTrailingAction = function () {
        if (!this.adapter_.hasTrailingAction()) {
            return this.focusPrimaryAction_();
        }
        this.focusTrailingAction_();
    };
    MDCChipFoundation.prototype.focusNextAction_ = function (evt) {
        var key = evt.key;
        var hasTrailingAction = this.adapter_.hasTrailingAction();
        var dir = this.getDirection_(key);
        var source = this.getEvtSource_(evt);
        // Early exit if the key should jump keys or the chip only has one action (i.e. no trailing action)
        if (jumpChipKeys.has(key) || !hasTrailingAction) {
            this.adapter_.notifyNavigation(key, source);
            return;
        }
        if (source === EventSource.PRIMARY && dir === Direction.RIGHT) {
            return this.focusTrailingAction_();
        }
        if (source === EventSource.TRAILING && dir === Direction.LEFT) {
            return this.focusPrimaryAction_();
        }
        this.adapter_.notifyNavigation(key, EventSource.NONE);
    };
    MDCChipFoundation.prototype.getEvtSource_ = function (evt) {
        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.PRIMARY_ACTION)) {
            return EventSource.PRIMARY;
        }
        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.TRAILING_ACTION)) {
            return EventSource.TRAILING;
        }
        return EventSource.NONE;
    };
    MDCChipFoundation.prototype.getDirection_ = function (key) {
        var isRTL = this.adapter_.isRTL();
        if (key === strings.ARROW_LEFT_KEY && !isRTL || key === strings.ARROW_RIGHT_KEY && isRTL) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    MDCChipFoundation.prototype.focusPrimaryAction_ = function () {
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '0');
        this.adapter_.focusPrimaryAction();
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.focusTrailingAction_ = function () {
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '0');
        this.adapter_.focusTrailingAction();
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.removeFocus_ = function () {
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '-1');
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.removeChip_ = function (evt) {
        evt.stopPropagation();
        // Prevent default behavior for backspace on Firefox which causes a page
        // navigation.
        evt.preventDefault();
        if (this.shouldRemoveOnTrailingIconClick_) {
            this.beginExit();
        }
    };
    MDCChipFoundation.prototype.shouldHandleInteraction_ = function (evt) {
        if (evt.type === 'click') {
            return true;
        }
        var keyEvt = evt;
        return keyEvt.key === strings.ENTER_KEY || keyEvt.key === strings.SPACEBAR_KEY;
    };
    MDCChipFoundation.prototype.shouldRemoveChip_ = function (evt) {
        var isDeletable = this.adapter_.hasClass(cssClasses.DELETABLE);
        return isDeletable && (evt.key === strings.BACKSPACE_KEY || evt.key === strings.DELETE_KEY);
    };
    MDCChipFoundation.prototype.setSelected_ = function (selected) {
        if (selected) {
            this.adapter_.addClass(cssClasses.SELECTED);
            this.adapter_.setPrimaryActionAttr(strings.ARIA_CHECKED, 'true');
        }
        else {
            this.adapter_.removeClass(cssClasses.SELECTED);
            this.adapter_.setPrimaryActionAttr(strings.ARIA_CHECKED, 'false');
        }
    };
    MDCChipFoundation.prototype.notifySelection_ = function (selected) {
        this.adapter_.notifySelection(selected, false);
    };
    MDCChipFoundation.prototype.notifyIgnoredSelection_ = function (selected) {
        this.adapter_.notifySelection(selected, true);
    };
    return MDCChipFoundation;
}(MDCFoundation));
export { MDCChipFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipFoundation;
//# sourceMappingURL=foundation.js.map