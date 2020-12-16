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
import { AnimationFrame } from '../animation/animationframe';
import { MDCFoundation } from '../base/foundation';
import { KEY, normalizeKey } from '../dom/keyboard';
import { AnchorBoundaryType, attributes, CssClasses, numbers, XPosition, YPosition } from './constants';
var RICH = CssClasses.RICH, SHOWN = CssClasses.SHOWN, SHOWING = CssClasses.SHOWING, SHOWING_TRANSITION = CssClasses.SHOWING_TRANSITION, HIDE = CssClasses.HIDE, HIDE_TRANSITION = CssClasses.HIDE_TRANSITION, MULTILINE_TOOLTIP = CssClasses.MULTILINE_TOOLTIP;
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["POLL_ANCHOR"] = "poll_anchor";
})(AnimationKeys || (AnimationKeys = {}));
var MDCTooltipFoundation = /** @class */ (function (_super) {
    __extends(MDCTooltipFoundation, _super);
    function MDCTooltipFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTooltipFoundation.defaultAdapter), adapter)) || this;
        _this.isShown = false;
        _this.anchorGap = numbers.BOUNDED_ANCHOR_GAP;
        _this.xTooltipPos = XPosition.DETECTED;
        _this.yTooltipPos = YPosition.DETECTED;
        // Minimum threshold distance needed between the tooltip and the viewport.
        _this.minViewportTooltipThreshold = numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
        _this.hideDelayMs = numbers.HIDE_DELAY_MS;
        _this.showDelayMs = numbers.SHOW_DELAY_MS;
        _this.anchorRect = null;
        _this.frameId = null;
        _this.hideTimeout = null;
        _this.showTimeout = null;
        _this.animFrame = new AnimationFrame();
        _this.documentClickHandler = function (evt) {
            _this.handleDocumentClick(evt);
        };
        _this.documentKeydownHandler = function (evt) {
            _this.handleKeydown(evt);
        };
        _this.richTooltipMouseEnterHandler = function () {
            _this.handleRichTooltipMouseEnter();
        };
        _this.richTooltipMouseLeaveHandler = function () {
            _this.handleRichTooltipMouseLeave();
        };
        _this.richTooltipFocusOutHandler = function (evt) {
            _this.handleRichTooltipFocusOut(evt);
        };
        _this.windowScrollHandler = function () {
            _this.handleWindowChangeEvent();
        };
        _this.windowResizeHandler = function () {
            _this.handleWindowChangeEvent();
        };
        return _this;
    }
    Object.defineProperty(MDCTooltipFoundation, "defaultAdapter", {
        get: function () {
            return {
                getAttribute: function () { return null; },
                setAttribute: function () { return undefined; },
                addClass: function () { return undefined; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
                getViewportWidth: function () { return 0; },
                getViewportHeight: function () { return 0; },
                getTooltipSize: function () { return ({ width: 0, height: 0 }); },
                getAnchorBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getAnchorAttribute: function () { return null; },
                setAnchorAttribute: function () { return null; },
                isRTL: function () { return false; },
                anchorContainsElement: function () { return false; },
                tooltipContainsElement: function () { return false; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
                registerDocumentEventHandler: function () { return undefined; },
                deregisterDocumentEventHandler: function () { return undefined; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
                notifyHidden: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCTooltipFoundation.prototype.init = function () {
        this.isRich = this.adapter.hasClass(RICH);
        this.isPersistent =
            this.adapter.getAttribute(attributes.PERSISTENT) === 'true';
        this.isInteractive =
            !!this.adapter.getAnchorAttribute(attributes.ARIA_EXPANDED) &&
                this.adapter.getAnchorAttribute(attributes.ARIA_HASPOPUP) === 'true';
    };
    MDCTooltipFoundation.prototype.getIsRich = function () {
        return this.isRich;
    };
    MDCTooltipFoundation.prototype.getIsPersistent = function () {
        return this.isPersistent;
    };
    MDCTooltipFoundation.prototype.handleAnchorMouseEnter = function () {
        var _this = this;
        if (this.isShown) {
            // Covers the instance where a user hovers over the anchor to reveal the
            // tooltip, and then quickly navigates away and then back to the anchor.
            // The tooltip should stay visible without animating out and then back in
            // again.
            this.show();
        }
        else {
            this.showTimeout = setTimeout(function () {
                _this.show();
            }, this.showDelayMs);
        }
    };
    MDCTooltipFoundation.prototype.handleAnchorFocus = function () {
        var _this = this;
        // TODO(b/157075286): Need to add some way to distinguish keyboard
        // navigation focus events from other focus events, and only show the
        // tooltip on the former of these events.
        this.showTimeout = setTimeout(function () {
            _this.show();
        }, this.showDelayMs);
    };
    MDCTooltipFoundation.prototype.handleAnchorMouseLeave = function () {
        var _this = this;
        this.clearShowTimeout();
        this.hideTimeout = setTimeout(function () {
            _this.hide();
        }, this.hideDelayMs);
    };
    MDCTooltipFoundation.prototype.handleAnchorBlur = function (evt) {
        if (this.isRich) {
            var tooltipContainsRelatedTargetElement = evt.relatedTarget instanceof HTMLElement &&
                this.adapter.tooltipContainsElement(evt.relatedTarget);
            // If focus changed to the tooltip element, don't hide the tooltip.
            if (tooltipContainsRelatedTargetElement) {
                return;
            }
        }
        // Hide tooltip immediately on focus change.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleAnchorClick = function () {
        if (this.isShown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    MDCTooltipFoundation.prototype.handleDocumentClick = function (evt) {
        var anchorContainsTargetElement = evt.target instanceof HTMLElement &&
            this.adapter.anchorContainsElement(evt.target);
        // For persistent rich tooltips, we will only hide if the click target is
        // not within the anchor element, otherwise both the anchor element's click
        // handler and this handler will handle the click (due to event
        // propagation), resulting in a shown tooltip being immediately hidden if
        // the tooltip was initially hidden.
        if (this.isRich && this.isPersistent && anchorContainsTargetElement) {
            return;
        }
        // Hide the tooltip immediately on click.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleKeydown = function (evt) {
        // Hide the tooltip immediately on ESC key.
        var key = normalizeKey(evt);
        if (key === KEY.ESCAPE) {
            this.hide();
        }
    };
    MDCTooltipFoundation.prototype.handleRichTooltipMouseEnter = function () {
        this.show();
    };
    MDCTooltipFoundation.prototype.handleRichTooltipMouseLeave = function () {
        var _this = this;
        this.clearShowTimeout();
        this.hideTimeout = setTimeout(function () {
            _this.hide();
        }, this.hideDelayMs);
    };
    MDCTooltipFoundation.prototype.handleRichTooltipFocusOut = function (evt) {
        var anchorOrTooltipContainsRelatedTargetElement = evt.relatedTarget instanceof HTMLElement &&
            (this.adapter.anchorContainsElement(evt.relatedTarget) ||
                this.adapter.tooltipContainsElement(evt.relatedTarget));
        // If the focus is still within the anchor or the tooltip, do not hide the
        // tooltip.
        if (anchorOrTooltipContainsRelatedTargetElement) {
            return;
        }
        this.hide();
    };
    /**
     * On window resize or scroll, check the anchor position and size and
     * repostion tooltip if necessary.
     */
    MDCTooltipFoundation.prototype.handleWindowChangeEvent = function () {
        var _this = this;
        // Since scroll and resize events can fire at a high rate, we throttle
        // the potential re-positioning of tooltip component using
        // requestAnimationFrame.
        this.animFrame.request(AnimationKeys.POLL_ANCHOR, function () {
            _this.repositionTooltipOnAnchorMove();
        });
    };
    MDCTooltipFoundation.prototype.show = function () {
        var _this = this;
        this.clearHideTimeout();
        this.clearShowTimeout();
        if (this.isShown) {
            return;
        }
        this.isShown = true;
        var showTooltipOptions = this.parseShowTooltipOptions();
        if (!showTooltipOptions.hideFromScreenreader) {
            this.adapter.setAttribute('aria-hidden', 'false');
        }
        if (this.isRich) {
            if (this.isInteractive) {
                this.adapter.setAnchorAttribute('aria-expanded', 'true');
            }
            this.adapter.registerEventHandler('focusout', this.richTooltipFocusOutHandler);
            if (!this.isPersistent) {
                this.adapter.registerEventHandler('mouseenter', this.richTooltipMouseEnterHandler);
                this.adapter.registerEventHandler('mouseleave', this.richTooltipMouseLeaveHandler);
            }
        }
        this.adapter.removeClass(HIDE);
        this.adapter.addClass(SHOWING);
        if (this.isTooltipMultiline() && !this.isRich) {
            this.adapter.addClass(MULTILINE_TOOLTIP);
        }
        this.anchorRect = this.adapter.getAnchorBoundingRect();
        this.positionTooltip();
        this.adapter.registerDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.registerDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.registerWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.frameId = requestAnimationFrame(function () {
            _this.clearAllAnimationClasses();
            _this.adapter.addClass(SHOWN);
            _this.adapter.addClass(SHOWING_TRANSITION);
        });
    };
    MDCTooltipFoundation.prototype.hide = function () {
        this.clearHideTimeout();
        this.clearShowTimeout();
        if (!this.isShown) {
            return;
        }
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        this.isShown = false;
        this.adapter.setAttribute('aria-hidden', 'true');
        this.adapter.deregisterEventHandler('focusout', this.richTooltipFocusOutHandler);
        if (this.isRich) {
            if (this.isInteractive) {
                this.adapter.setAnchorAttribute('aria-expanded', 'false');
            }
            if (!this.isPersistent) {
                this.adapter.deregisterEventHandler('mouseenter', this.richTooltipMouseEnterHandler);
                this.adapter.deregisterEventHandler('mouseleave', this.richTooltipMouseLeaveHandler);
            }
        }
        this.clearAllAnimationClasses();
        this.adapter.addClass(HIDE);
        this.adapter.addClass(HIDE_TRANSITION);
        this.adapter.removeClass(SHOWN);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.deregisterWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
    };
    MDCTooltipFoundation.prototype.handleTransitionEnd = function () {
        var isHidingTooltip = this.adapter.hasClass(HIDE);
        this.adapter.removeClass(SHOWING);
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(HIDE);
        this.adapter.removeClass(HIDE_TRANSITION);
        // If handleTransitionEnd is called after hiding the tooltip, the tooltip
        // will have the HIDE class (before calling the adapter removeClass method).
        // If tooltip is now hidden, send a notification that the animation has
        // completed and the tooltip is no longer visible.
        if (isHidingTooltip) {
            this.adapter.notifyHidden();
        }
    };
    MDCTooltipFoundation.prototype.clearAllAnimationClasses = function () {
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(HIDE_TRANSITION);
    };
    MDCTooltipFoundation.prototype.setTooltipPosition = function (position) {
        var xPos = position.xPos, yPos = position.yPos;
        if (xPos) {
            this.xTooltipPos = xPos;
        }
        if (yPos) {
            this.yTooltipPos = yPos;
        }
    };
    MDCTooltipFoundation.prototype.setAnchorBoundaryType = function (type) {
        if (type === AnchorBoundaryType.UNBOUNDED) {
            this.anchorGap = numbers.UNBOUNDED_ANCHOR_GAP;
        }
        else {
            this.anchorGap = numbers.BOUNDED_ANCHOR_GAP;
        }
    };
    MDCTooltipFoundation.prototype.parseShowTooltipOptions = function () {
        var hideFromScreenreader = Boolean(this.adapter.getAnchorAttribute('data-tooltip-id'));
        return { hideFromScreenreader: hideFromScreenreader };
    };
    MDCTooltipFoundation.prototype.isTooltipMultiline = function () {
        var tooltipSize = this.adapter.getTooltipSize();
        return tooltipSize.height > numbers.MIN_HEIGHT &&
            tooltipSize.width >= numbers.MAX_WIDTH;
    };
    MDCTooltipFoundation.prototype.positionTooltip = function () {
        var _a = this.calculateTooltipDistance(this.anchorRect), top = _a.top, left = _a.left;
        this.adapter.setStyleProperty('top', top + "px");
        this.adapter.setStyleProperty('left', left + "px");
    };
    /**
     * Calculates the position of the tooltip. A tooltip will be placed beneath
     * the anchor element and aligned either with the 'start'/'end' edge of the
     * anchor element or the 'center'.
     *
     * Tooltip alignment is selected such that the tooltip maintains a threshold
     * distance away from the viewport (defaulting to 'center' alignment). If the
     * placement of the anchor prevents this threshold distance from being
     * maintained, the tooltip is positioned so that it does not collide with the
     * viewport.
     *
     * Users can specify an alignment, however, if this alignment results in the
     * tooltip colliding with the viewport, this specification is overwritten.
     */
    MDCTooltipFoundation.prototype.calculateTooltipDistance = function (anchorRect) {
        if (!anchorRect) {
            return { top: 0, left: 0 };
        }
        var tooltipSize = this.adapter.getTooltipSize();
        var top = this.calculateYTooltipDistance(anchorRect, tooltipSize.height);
        var left = this.calculateXTooltipDistance(anchorRect, tooltipSize.width);
        return { top: top, left: left };
    };
    /**
     * Calculates the `left` distance for the tooltip.
     */
    MDCTooltipFoundation.prototype.calculateXTooltipDistance = function (anchorRect, tooltipWidth) {
        var startPos = anchorRect.left;
        var endPos = anchorRect.right - tooltipWidth;
        var centerPos = anchorRect.left + (anchorRect.width - tooltipWidth) / 2;
        if (this.adapter.isRTL()) {
            startPos = anchorRect.right - tooltipWidth;
            endPos = anchorRect.left;
        }
        var positionOptions = this.determineValidPositionOptions(centerPos, startPos, endPos);
        if (this.xTooltipPos === XPosition.START && positionOptions.has(startPos)) {
            return startPos;
        }
        if (this.xTooltipPos === XPosition.END && positionOptions.has(endPos)) {
            return endPos;
        }
        if (this.xTooltipPos === XPosition.CENTER &&
            positionOptions.has(centerPos)) {
            return centerPos;
        }
        if (positionOptions.has(centerPos)) {
            return centerPos;
        }
        if (positionOptions.has(startPos)) {
            return startPos;
        }
        if (positionOptions.has(endPos)) {
            return endPos;
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the anchor
        // element itself collides with the viewport, or the viewport is very
        // narrow. In this case, we allow the tooltip to be mis-aligned from the
        // anchor element.
        if (anchorRect.left < 0) {
            return this.minViewportTooltipThreshold;
        }
        else {
            var viewportWidth = this.adapter.getViewportWidth();
            return viewportWidth - (tooltipWidth + this.minViewportTooltipThreshold);
        }
    };
    /**
     * Given the values for center/start/end alignment of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all three alignments violate the threshold, then the returned
     * Set contains values that keep the tooltip within the viewport.
     */
    MDCTooltipFoundation.prototype.determineValidPositionOptions = function (centerPos, startPos, endPos) {
        var posWithinThreshold = new Set();
        var posWithinViewport = new Set();
        if (this.positionHonorsViewportThreshold(centerPos)) {
            posWithinThreshold.add(centerPos);
        }
        else if (this.positionDoesntCollideWithViewport(centerPos)) {
            posWithinViewport.add(centerPos);
        }
        if (this.positionHonorsViewportThreshold(startPos)) {
            posWithinThreshold.add(startPos);
        }
        else if (this.positionDoesntCollideWithViewport(startPos)) {
            posWithinViewport.add(startPos);
        }
        if (this.positionHonorsViewportThreshold(endPos)) {
            posWithinThreshold.add(endPos);
        }
        else if (this.positionDoesntCollideWithViewport(endPos)) {
            posWithinViewport.add(endPos);
        }
        return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
    };
    MDCTooltipFoundation.prototype.positionHonorsViewportThreshold = function (leftPos) {
        var viewportWidth = this.adapter.getViewportWidth();
        var tooltipWidth = this.adapter.getTooltipSize().width;
        return leftPos + tooltipWidth <=
            viewportWidth - this.minViewportTooltipThreshold &&
            leftPos >= this.minViewportTooltipThreshold;
    };
    MDCTooltipFoundation.prototype.positionDoesntCollideWithViewport = function (leftPos) {
        var viewportWidth = this.adapter.getViewportWidth();
        var tooltipWidth = this.adapter.getTooltipSize().width;
        return leftPos + tooltipWidth <= viewportWidth && leftPos >= 0;
    };
    /**
     * Calculates the `top` distance for the tooltip.
     */
    MDCTooltipFoundation.prototype.calculateYTooltipDistance = function (anchorRect, tooltipHeight) {
        var belowYPos = anchorRect.bottom + this.anchorGap;
        var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight);
        var yPositionOptions = this.determineValidYPositionOptions(aboveYPos, belowYPos);
        if (this.yTooltipPos === YPosition.ABOVE &&
            yPositionOptions.has(aboveYPos)) {
            return aboveYPos;
        }
        else if (this.yTooltipPos === YPosition.BELOW &&
            yPositionOptions.has(belowYPos)) {
            return belowYPos;
        }
        if (yPositionOptions.has(belowYPos)) {
            return belowYPos;
        }
        if (yPositionOptions.has(aboveYPos)) {
            return aboveYPos;
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the viewport is
        // very short.
        return belowYPos;
    };
    /**
     * Given the values for above/below alignment of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all possible alignments violate the threshold, then the
     * returned Set contains values that keep the tooltip within the viewport.
     */
    MDCTooltipFoundation.prototype.determineValidYPositionOptions = function (aboveAnchorPos, belowAnchorPos) {
        var posWithinThreshold = new Set();
        var posWithinViewport = new Set();
        if (this.yPositionHonorsViewportThreshold(aboveAnchorPos)) {
            posWithinThreshold.add(aboveAnchorPos);
        }
        else if (this.yPositionDoesntCollideWithViewport(aboveAnchorPos)) {
            posWithinViewport.add(aboveAnchorPos);
        }
        if (this.yPositionHonorsViewportThreshold(belowAnchorPos)) {
            posWithinThreshold.add(belowAnchorPos);
        }
        else if (this.yPositionDoesntCollideWithViewport(belowAnchorPos)) {
            posWithinViewport.add(belowAnchorPos);
        }
        return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
    };
    MDCTooltipFoundation.prototype.yPositionHonorsViewportThreshold = function (yPos) {
        var viewportHeight = this.adapter.getViewportHeight();
        var tooltipHeight = this.adapter.getTooltipSize().height;
        return yPos + tooltipHeight + this.minViewportTooltipThreshold <=
            viewportHeight &&
            yPos >= this.minViewportTooltipThreshold;
    };
    MDCTooltipFoundation.prototype.yPositionDoesntCollideWithViewport = function (yPos) {
        var viewportHeight = this.adapter.getViewportHeight();
        var tooltipHeight = this.adapter.getTooltipSize().height;
        return yPos + tooltipHeight <= viewportHeight && yPos >= 0;
    };
    MDCTooltipFoundation.prototype.repositionTooltipOnAnchorMove = function () {
        var newAnchorRect = this.adapter.getAnchorBoundingRect();
        if (!newAnchorRect || !this.anchorRect)
            return;
        if (newAnchorRect.top !== this.anchorRect.top ||
            newAnchorRect.left !== this.anchorRect.left ||
            newAnchorRect.height !== this.anchorRect.height ||
            newAnchorRect.width !== this.anchorRect.width) {
            this.anchorRect = newAnchorRect;
            this.positionTooltip();
        }
    };
    MDCTooltipFoundation.prototype.clearShowTimeout = function () {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
        }
    };
    MDCTooltipFoundation.prototype.clearHideTimeout = function () {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    };
    MDCTooltipFoundation.prototype.destroy = function () {
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
            this.frameId = null;
        }
        this.clearHideTimeout();
        this.clearShowTimeout();
        this.adapter.removeClass(SHOWN);
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(SHOWING);
        this.adapter.removeClass(HIDE);
        this.adapter.removeClass(HIDE_TRANSITION);
        if (this.isRich) {
            this.adapter.deregisterEventHandler('focusout', this.richTooltipFocusOutHandler);
            if (!this.isPersistent) {
                this.adapter.deregisterEventHandler('mouseenter', this.richTooltipMouseEnterHandler);
                this.adapter.deregisterEventHandler('mouseleave', this.richTooltipMouseLeaveHandler);
            }
        }
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.deregisterWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.animFrame.cancelAll();
    };
    return MDCTooltipFoundation;
}(MDCFoundation));
export { MDCTooltipFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTooltipFoundation;
//# sourceMappingURL=foundation.js.map