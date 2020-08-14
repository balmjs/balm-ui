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
import { KEY, normalizeKey } from '../dom/keyboard';
import { AnchorBoundaryType, CssClasses, numbers, Position } from './constants';
var SHOWN = CssClasses.SHOWN, SHOWING = CssClasses.SHOWING, SHOWING_TRANSITION = CssClasses.SHOWING_TRANSITION, HIDE = CssClasses.HIDE, HIDE_TRANSITION = CssClasses.HIDE_TRANSITION;
var MDCTooltipFoundation = /** @class */ (function (_super) {
    __extends(MDCTooltipFoundation, _super);
    function MDCTooltipFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTooltipFoundation.defaultAdapter), adapter)) || this;
        _this.isShown = false;
        _this.anchorGap = numbers.BOUNDED_ANCHOR_GAP;
        _this.tooltipPos = Position.DETECTED;
        // Minimum threshold distance needed between the tooltip and the viewport.
        _this.minViewportTooltipThreshold = numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
        _this.hideDelayMs = numbers.HIDE_DELAY_MS;
        _this.frameId = null;
        _this.hideTimeout = null;
        _this.documentClickHandler = function () {
            _this.handleClick();
        };
        _this.documentKeydownHandler = function (evt) {
            _this.handleKeydown(evt);
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
                isRTL: function () { return false; },
                registerDocumentEventHandler: function () { return undefined; },
                deregisterDocumentEventHandler: function () { return undefined; },
                notifyHidden: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCTooltipFoundation.prototype.handleAnchorMouseEnter = function () {
        this.show();
    };
    MDCTooltipFoundation.prototype.handleAnchorFocus = function () {
        // TODO(b/157075286): Need to add some way to distinguish keyboard
        // navigation focus events from other focus events, and only show the
        // tooltip on the former of these events.
        this.show();
    };
    MDCTooltipFoundation.prototype.handleAnchorMouseLeave = function () {
        var _this = this;
        this.hideTimeout = setTimeout(function () {
            _this.hide();
        }, this.hideDelayMs);
    };
    MDCTooltipFoundation.prototype.handleAnchorBlur = function () {
        // Hide tooltip immediately on focus change.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleClick = function () {
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
    MDCTooltipFoundation.prototype.show = function () {
        var _this = this;
        this.clearHideTimeout();
        if (this.isShown) {
            return;
        }
        this.isShown = true;
        this.adapter.setAttribute('aria-hidden', 'false');
        this.adapter.removeClass(HIDE);
        this.adapter.addClass(SHOWING);
        var _a = this.calculateTooltipDistance(), top = _a.top, left = _a.left;
        this.adapter.setStyleProperty('top', top + "px");
        this.adapter.setStyleProperty('left', left + "px");
        this.adapter.registerDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.registerDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.frameId = requestAnimationFrame(function () {
            _this.clearAllAnimationClasses();
            _this.adapter.addClass(SHOWN);
            _this.adapter.addClass(SHOWING_TRANSITION);
        });
    };
    MDCTooltipFoundation.prototype.hide = function () {
        this.clearHideTimeout();
        if (!this.isShown) {
            return;
        }
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        this.isShown = false;
        this.adapter.setAttribute('aria-hidden', 'true');
        this.clearAllAnimationClasses();
        this.adapter.addClass(HIDE);
        this.adapter.addClass(HIDE_TRANSITION);
        this.adapter.removeClass(SHOWN);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
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
    MDCTooltipFoundation.prototype.setTooltipPosition = function (pos) {
        this.tooltipPos = pos;
    };
    MDCTooltipFoundation.prototype.setAnchorBoundaryType = function (type) {
        if (type === AnchorBoundaryType.UNBOUNDED) {
            this.anchorGap = numbers.UNBOUNDED_ANCHOR_GAP;
        }
        else {
            this.anchorGap = numbers.BOUNDED_ANCHOR_GAP;
        }
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
    MDCTooltipFoundation.prototype.calculateTooltipDistance = function () {
        var anchorRect = this.adapter.getAnchorBoundingRect();
        var tooltipSize = this.adapter.getTooltipSize();
        if (!anchorRect) {
            return { top: 0, left: 0 };
        }
        var yPos = anchorRect.bottom + this.anchorGap;
        var startPos = anchorRect.left;
        var endPos = anchorRect.right - tooltipSize.width;
        var centerPos = anchorRect.left + (anchorRect.width - tooltipSize.width) / 2;
        if (this.adapter.isRTL()) {
            startPos = anchorRect.right - tooltipSize.width;
            endPos = anchorRect.left;
        }
        var positionOptions = this.determineValidPositionOptions(centerPos, startPos, endPos);
        if (this.tooltipPos === Position.START && positionOptions.has(startPos)) {
            return { top: yPos, left: startPos };
        }
        if (this.tooltipPos === Position.END && positionOptions.has(endPos)) {
            return { top: yPos, left: endPos };
        }
        if (this.tooltipPos === Position.CENTER && positionOptions.has(centerPos)) {
            return { top: yPos, left: centerPos };
        }
        if (positionOptions.has(centerPos)) {
            return { top: yPos, left: centerPos };
        }
        if (positionOptions.has(startPos)) {
            return { top: yPos, left: startPos };
        }
        if (positionOptions.has(endPos)) {
            return { top: yPos, left: endPos };
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the anchor
        // element itself collides with the viewport, or the viewport is very
        // narrow.
        return { top: yPos, left: centerPos };
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
        this.adapter.removeClass(SHOWN);
        this.adapter.removeClass(SHOWING_TRANSITION);
        this.adapter.removeClass(SHOWING);
        this.adapter.removeClass(HIDE);
        this.adapter.removeClass(HIDE_TRANSITION);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
    };
    return MDCTooltipFoundation;
}(MDCFoundation));
export { MDCTooltipFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTooltipFoundation;
//# sourceMappingURL=foundation.js.map