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
import { __assign, __extends, __values } from "tslib";
import { AnimationFrame } from '../animation/animationframe';
import { getCorrectPropertyName } from '../animation/util';
import { MDCFoundation } from '../base/foundation';
import { KEY, normalizeKey } from '../dom/keyboard';
import { AnchorBoundaryType, attributes, CssClasses, numbers, PositionWithCaret, strings, XPosition, XPositionWithCaret, YPosition, YPositionWithCaret } from './constants';
var RICH = CssClasses.RICH, SHOWN = CssClasses.SHOWN, SHOWING = CssClasses.SHOWING, SHOWING_TRANSITION = CssClasses.SHOWING_TRANSITION, HIDE = CssClasses.HIDE, HIDE_TRANSITION = CssClasses.HIDE_TRANSITION, MULTILINE_TOOLTIP = CssClasses.MULTILINE_TOOLTIP;
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["POLL_ANCHOR"] = "poll_anchor";
})(AnimationKeys || (AnimationKeys = {}));
// Accessing `window` without a `typeof` check will throw on Node environments.
var HAS_WINDOW = typeof window !== 'undefined';
var MDCTooltipFoundation = /** @class */ (function (_super) {
    __extends(MDCTooltipFoundation, _super);
    function MDCTooltipFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTooltipFoundation.defaultAdapter), adapter)) || this;
        _this.tooltipShown = false;
        _this.anchorGap = numbers.BOUNDED_ANCHOR_GAP;
        _this.xTooltipPos = XPosition.DETECTED;
        _this.yTooltipPos = YPosition.DETECTED;
        _this.tooltipPositionWithCaret = PositionWithCaret.DETECTED;
        // Minimum threshold distance needed between the tooltip and the viewport.
        _this.minViewportTooltipThreshold = numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
        _this.hideDelayMs = numbers.HIDE_DELAY_MS;
        _this.showDelayMs = numbers.SHOW_DELAY_MS;
        _this.anchorRect = null;
        _this.parentRect = null;
        _this.frameId = null;
        _this.hideTimeout = null;
        _this.showTimeout = null;
        _this.addAncestorScrollEventListeners = new Array();
        _this.removeAncestorScrollEventListeners = new Array();
        _this.animFrame = new AnimationFrame();
        _this.anchorBlurHandler = function (evt) {
            _this.handleAnchorBlur(evt);
        };
        _this.documentClickHandler = function (evt) {
            _this.handleDocumentClick(evt);
        };
        _this.documentKeydownHandler = function (evt) {
            _this.handleKeydown(evt);
        };
        _this.tooltipMouseEnterHandler = function () {
            _this.handleTooltipMouseEnter();
        };
        _this.tooltipMouseLeaveHandler = function () {
            _this.handleTooltipMouseLeave();
        };
        _this.richTooltipFocusOutHandler = function (evt) {
            _this.handleRichTooltipFocusOut(evt);
        };
        _this.windowScrollHandler = function () {
            _this.handleWindowScrollEvent();
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
                removeAttribute: function () { return undefined; },
                addClass: function () { return undefined; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                getComputedStyleProperty: function () { return ''; },
                setStyleProperty: function () { return undefined; },
                setSurfaceAnimationStyleProperty: function () { return undefined; },
                getViewportWidth: function () { return 0; },
                getViewportHeight: function () { return 0; },
                getTooltipSize: function () { return ({ width: 0, height: 0 }); },
                getAnchorBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getParentBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getAnchorAttribute: function () { return null; },
                setAnchorAttribute: function () { return null; },
                isRTL: function () { return false; },
                anchorContainsElement: function () { return false; },
                tooltipContainsElement: function () { return false; },
                focusAnchorElement: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
                registerAnchorEventHandler: function () { return undefined; },
                deregisterAnchorEventHandler: function () { return undefined; },
                registerDocumentEventHandler: function () { return undefined; },
                deregisterDocumentEventHandler: function () { return undefined; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
                notifyHidden: function () { return undefined; },
                getTooltipCaretBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                setTooltipCaretStyle: function () { return undefined; },
                clearTooltipCaretStyles: function () { return undefined; },
                getActiveElement: function () { return null; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTooltipFoundation.prototype.init = function () {
        this.richTooltip = this.adapter.hasClass(RICH);
        this.persistentTooltip =
            this.adapter.getAttribute(attributes.PERSISTENT) === 'true';
        this.interactiveTooltip =
            !!this.adapter.getAnchorAttribute(attributes.ARIA_EXPANDED) &&
                this.adapter.getAnchorAttribute(attributes.ARIA_HASPOPUP) === 'dialog';
        this.hasCaret = this.richTooltip &&
            this.adapter.getAttribute(attributes.HAS_CARET) === 'true';
    };
    MDCTooltipFoundation.prototype.isShown = function () {
        return this.tooltipShown;
    };
    MDCTooltipFoundation.prototype.isRich = function () {
        return this.richTooltip;
    };
    MDCTooltipFoundation.prototype.isPersistent = function () {
        return this.persistentTooltip;
    };
    MDCTooltipFoundation.prototype.handleAnchorMouseEnter = function () {
        var _this = this;
        if (this.tooltipShown) {
            // Covers the instance where a user hovers over the anchor to reveal the
            // tooltip, and then quickly navigates away and then back to the anchor.
            // The tooltip should stay visible without animating out and then back in
            // again.
            this.show();
        }
        else {
            // clearHideTimeout here since handleAnchorMouseLeave sets a hideTimeout
            // and that can execute before the showTimeout executes, resulting in hide
            // being called and the showTimeout set below to be cleared.
            this.clearHideTimeout();
            this.showTimeout = setTimeout(function () {
                _this.show();
            }, this.showDelayMs);
        }
    };
    MDCTooltipFoundation.prototype.handleAnchorTouchstart = function () {
        var _this = this;
        this.showTimeout = setTimeout(function () {
            _this.show();
        }, this.showDelayMs);
        // Prevent a context menu from appearing if user is long-pressing on a
        // tooltip anchor.
        this.adapter.registerWindowEventHandler('contextmenu', this.preventContextMenuOnLongTouch);
    };
    MDCTooltipFoundation.prototype.preventContextMenuOnLongTouch = function (evt) {
        evt.preventDefault();
    };
    MDCTooltipFoundation.prototype.handleAnchorTouchend = function () {
        this.clearShowTimeout();
        // Only remove the 'contextmenu' listener if the tooltip is not shown. When
        // the tooltip *is* shown, listener is removed in the close method.
        if (!this.isShown()) {
            this.adapter.deregisterWindowEventHandler('contextmenu', this.preventContextMenuOnLongTouch);
        }
    };
    MDCTooltipFoundation.prototype.handleAnchorFocus = function (evt) {
        var _this = this;
        // TODO(b/157075286): Need to add some way to distinguish keyboard
        // navigation focus events from other focus events, and only show the
        // tooltip on the former of these events.
        var relatedTarget = evt.relatedTarget;
        var tooltipContainsRelatedTarget = relatedTarget instanceof HTMLElement &&
            this.adapter.tooltipContainsElement(relatedTarget);
        // Do not show tooltip if the previous focus was on a tooltip element. This
        // occurs when a rich tooltip is closed and focus is restored to the anchor
        // or when user tab-navigates back into the anchor from the rich tooltip.
        if (tooltipContainsRelatedTarget) {
            return;
        }
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
    MDCTooltipFoundation.prototype.handleAnchorClick = function () {
        if (this.tooltipShown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    MDCTooltipFoundation.prototype.handleDocumentClick = function (evt) {
        var anchorOrTooltipContainsTargetElement = evt.target instanceof HTMLElement &&
            (this.adapter.anchorContainsElement(evt.target) ||
                this.adapter.tooltipContainsElement(evt.target));
        // For persistent rich tooltips, we will not hide if:
        // - The click target is within the anchor element. Otherwise, both
        //   the anchor element's click handler and this handler will handle the
        //   click (due to event propagation), resulting in a shown tooltip
        //   being immediately hidden if the tooltip was initially hidden.
        // - The click target is within the tooltip element, since clicks
        //   on the tooltip do not close the tooltip.
        if (this.richTooltip && this.persistentTooltip &&
            anchorOrTooltipContainsTargetElement) {
            return;
        }
        // Hide the tooltip immediately on click.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleKeydown = function (evt) {
        // Hide the tooltip immediately on ESC key.
        var key = normalizeKey(evt);
        if (key === KEY.ESCAPE) {
            var activeElement = this.adapter.getActiveElement();
            var tooltipContainsActiveElement = activeElement instanceof HTMLElement &&
                this.adapter.tooltipContainsElement(activeElement);
            if (tooltipContainsActiveElement) {
                this.adapter.focusAnchorElement();
            }
            this.hide();
        }
    };
    MDCTooltipFoundation.prototype.handleAnchorBlur = function (evt) {
        if (this.richTooltip) {
            var tooltipContainsRelatedTargetElement = evt.relatedTarget instanceof HTMLElement &&
                this.adapter.tooltipContainsElement(evt.relatedTarget);
            // If focus changed to the tooltip element, don't hide the tooltip.
            if (tooltipContainsRelatedTargetElement) {
                return;
            }
            if (evt.relatedTarget === null && this.interactiveTooltip) {
                // If evt.relatedTarget is null, it is because focus is moving to an
                // element that is not focusable. This should only occur in instances
                // of a screen reader in browse mode/linear navigation mode. If the
                // tooltip is interactive (and so the entire content is not read by
                // the screen reader upon the tooltip being opened), we want to allow
                // users to read the content of the tooltip (and not just the focusable
                // elements).
                return;
            }
        }
        // Hide tooltip immediately on focus change.
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleTooltipMouseEnter = function () {
        this.show();
    };
    MDCTooltipFoundation.prototype.handleTooltipMouseLeave = function () {
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
        if (evt.relatedTarget === null && this.interactiveTooltip) {
            // If evt.relatedTarget is null, it is because focus is moving to an
            // element that is not focusable. This should only occur in instances
            // of a screen reader in browse mode/linear navigation mode. If the
            // tooltip is interactive (and so the entire content is not read by
            // the screen reader upon the tooltip being opened), we want to allow
            // users to read the content of the tooltip (and not just the focusable
            // elements).
            return;
        }
        this.hide();
    };
    MDCTooltipFoundation.prototype.handleWindowScrollEvent = function () {
        if (this.persistentTooltip) {
            // Persistent tooltips remain visible on user scroll, call appropriate
            // handler to ensure the tooltip remains pinned to the anchor on page
            // scroll.
            this.handleWindowChangeEvent();
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
        var e_1, _a;
        var _this = this;
        this.clearHideTimeout();
        this.clearShowTimeout();
        if (this.tooltipShown) {
            return;
        }
        this.tooltipShown = true;
        this.adapter.removeAttribute('aria-hidden');
        if (this.richTooltip) {
            if (this.interactiveTooltip) {
                this.adapter.setAnchorAttribute('aria-expanded', 'true');
            }
            this.adapter.registerEventHandler('focusout', this.richTooltipFocusOutHandler);
        }
        if (!this.persistentTooltip) {
            this.adapter.registerEventHandler('mouseenter', this.tooltipMouseEnterHandler);
            this.adapter.registerEventHandler('mouseleave', this.tooltipMouseLeaveHandler);
        }
        this.adapter.removeClass(HIDE);
        this.adapter.addClass(SHOWING);
        if (this.isTooltipMultiline() && !this.richTooltip) {
            this.adapter.addClass(MULTILINE_TOOLTIP);
        }
        this.anchorRect = this.adapter.getAnchorBoundingRect();
        this.parentRect = this.adapter.getParentBoundingRect();
        this.richTooltip ? this.positionRichTooltip() : this.positionPlainTooltip();
        this.adapter.registerAnchorEventHandler('blur', this.anchorBlurHandler);
        this.adapter.registerDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.registerDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.registerWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        try {
            // Register any additional scroll handlers
            for (var _b = __values(this.addAncestorScrollEventListeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fn = _c.value;
                fn();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.frameId = requestAnimationFrame(function () {
            _this.clearAllAnimationClasses();
            _this.adapter.addClass(SHOWN);
            _this.adapter.addClass(SHOWING_TRANSITION);
        });
    };
    MDCTooltipFoundation.prototype.hide = function () {
        var e_2, _a;
        this.clearHideTimeout();
        this.clearShowTimeout();
        if (!this.tooltipShown) {
            return;
        }
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
        this.tooltipShown = false;
        this.adapter.setAttribute('aria-hidden', 'true');
        this.adapter.deregisterEventHandler('focusout', this.richTooltipFocusOutHandler);
        if (this.richTooltip) {
            if (this.interactiveTooltip) {
                this.adapter.setAnchorAttribute('aria-expanded', 'false');
            }
        }
        if (!this.persistentTooltip) {
            this.adapter.deregisterEventHandler('mouseenter', this.tooltipMouseEnterHandler);
            this.adapter.deregisterEventHandler('mouseleave', this.tooltipMouseLeaveHandler);
        }
        this.clearAllAnimationClasses();
        this.adapter.addClass(HIDE);
        this.adapter.addClass(HIDE_TRANSITION);
        this.adapter.removeClass(SHOWN);
        this.adapter.deregisterAnchorEventHandler('blur', this.anchorBlurHandler);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.deregisterWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('contextmenu', this.preventContextMenuOnLongTouch);
        try {
            // Deregister any additional scroll handlers
            for (var _b = __values(this.removeAncestorScrollEventListeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fn = _c.value;
                fn();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
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
        var xPos = position.xPos, yPos = position.yPos, withCaretPos = position.withCaretPos;
        if (this.hasCaret && withCaretPos) {
            this.tooltipPositionWithCaret = withCaretPos;
            return;
        }
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
    MDCTooltipFoundation.prototype.setShowDelay = function (delayMs) {
        this.showDelayMs = delayMs;
    };
    MDCTooltipFoundation.prototype.setHideDelay = function (delayMs) {
        this.hideDelayMs = delayMs;
    };
    MDCTooltipFoundation.prototype.isTooltipMultiline = function () {
        var tooltipSize = this.adapter.getTooltipSize();
        return tooltipSize.height > numbers.MIN_HEIGHT &&
            tooltipSize.width >= numbers.MAX_WIDTH;
    };
    MDCTooltipFoundation.prototype.positionPlainTooltip = function () {
        // A plain tooltip has `fixed` positioning and is placed as an immediate
        // child of the document body. Its positioning is calculated with respect to
        // the viewport.
        var _a = this.calculateTooltipStyles(this.anchorRect), top = _a.top, yTransformOrigin = _a.yTransformOrigin, left = _a.left, xTransformOrigin = _a.xTransformOrigin;
        var transformProperty = HAS_WINDOW ? getCorrectPropertyName(window, 'transform') : 'transform';
        this.adapter.setSurfaceAnimationStyleProperty(transformProperty + "-origin", xTransformOrigin + " " + yTransformOrigin);
        this.adapter.setStyleProperty('top', top + "px");
        this.adapter.setStyleProperty('left', left + "px");
    };
    MDCTooltipFoundation.prototype.positionRichTooltip = function () {
        // TODO(b/177686782): Remove width setting when max-content is used to style
        // the rich tooltip.
        var _a, _b, _c, _d;
        // getComputedStyleProperty is used instead of getTooltipSize since
        // getTooltipSize returns the offSetWidth, which includes the border and
        // padding. What we need is the width of the tooltip without border and
        // padding.
        var width = this.adapter.getComputedStyleProperty('width');
        // When rich tooltips are positioned within their parent containers, the
        // tooltip width might be shrunk if it collides with the edge of the parent
        // container. We set the width of the tooltip to prevent this.
        this.adapter.setStyleProperty('width', width);
        var _e = this.hasCaret ?
            this.calculateTooltipWithCaretStyles(this.anchorRect) :
            this.calculateTooltipStyles(this.anchorRect), top = _e.top, yTransformOrigin = _e.yTransformOrigin, left = _e.left, xTransformOrigin = _e.xTransformOrigin;
        var transformProperty = HAS_WINDOW ? getCorrectPropertyName(window, 'transform') : 'transform';
        this.adapter.setSurfaceAnimationStyleProperty(transformProperty + "-origin", xTransformOrigin + " " + yTransformOrigin);
        // A rich tooltip has `absolute` positioning and is placed as a sibling to
        // the anchor element. Its positioning is calculated with respect to the
        // parent element, and so the values need to be adjusted against the parent
        // element.
        var leftAdjustment = left - ((_b = (_a = this.parentRect) === null || _a === void 0 ? void 0 : _a.left) !== null && _b !== void 0 ? _b : 0);
        var topAdjustment = top - ((_d = (_c = this.parentRect) === null || _c === void 0 ? void 0 : _c.top) !== null && _d !== void 0 ? _d : 0);
        this.adapter.setStyleProperty('top', topAdjustment + "px");
        this.adapter.setStyleProperty('left', leftAdjustment + "px");
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
    MDCTooltipFoundation.prototype.calculateTooltipStyles = function (anchorRect) {
        if (!anchorRect) {
            return { top: 0, left: 0 };
        }
        var tooltipSize = this.adapter.getTooltipSize();
        var top = this.calculateYTooltipDistance(anchorRect, tooltipSize.height);
        var left = this.calculateXTooltipDistance(anchorRect, tooltipSize.width);
        return {
            top: top.distance,
            yTransformOrigin: top.yTransformOrigin,
            left: left.distance,
            xTransformOrigin: left.xTransformOrigin
        };
    };
    /**
     * Calculates the `left` distance for the tooltip.
     * Returns the distance value and a string indicating the x-axis transform-
     * origin that should be used when animating the tooltip.
     */
    MDCTooltipFoundation.prototype.calculateXTooltipDistance = function (anchorRect, tooltipWidth) {
        var isLTR = !this.adapter.isRTL();
        var startPos, endPos, centerPos;
        var startTransformOrigin, endTransformOrigin;
        if (this.richTooltip) {
            startPos = isLTR ? anchorRect.left - tooltipWidth : anchorRect.right;
            endPos = isLTR ? anchorRect.right : anchorRect.left - tooltipWidth;
            startTransformOrigin = isLTR ? strings.RIGHT : strings.LEFT;
            endTransformOrigin = isLTR ? strings.LEFT : strings.RIGHT;
        }
        else {
            startPos = isLTR ? anchorRect.left : anchorRect.right - tooltipWidth;
            endPos = isLTR ? anchorRect.right - tooltipWidth : anchorRect.left;
            centerPos = anchorRect.left + (anchorRect.width - tooltipWidth) / 2;
            startTransformOrigin = isLTR ? strings.LEFT : strings.RIGHT;
            endTransformOrigin = isLTR ? strings.RIGHT : strings.LEFT;
        }
        var positionOptions = this.richTooltip ?
            this.determineValidPositionOptions(startPos, endPos) :
            // For plain tooltips, centerPos is defined
            this.determineValidPositionOptions(centerPos, startPos, endPos);
        if (this.xTooltipPos === XPosition.START && positionOptions.has(startPos)) {
            return { distance: startPos, xTransformOrigin: startTransformOrigin };
        }
        if (this.xTooltipPos === XPosition.END && positionOptions.has(endPos)) {
            return { distance: endPos, xTransformOrigin: endTransformOrigin };
        }
        if (this.xTooltipPos === XPosition.CENTER &&
            positionOptions.has(centerPos)) {
            // This code path is only executed if calculating the distance for plain
            // tooltips. In this instance, centerPos will always be defined, so we can
            // safely assert that the returned value is non-null/undefined.
            return { distance: centerPos, xTransformOrigin: strings.CENTER };
        }
        // If no user position is supplied, rich tooltips default to end pos, then
        // start position. Plain tooltips default to center, start, then end.
        var possiblePositions = this.richTooltip ?
            [
                { distance: endPos, xTransformOrigin: endTransformOrigin },
                { distance: startPos, xTransformOrigin: startTransformOrigin }
            ] :
            [
                { distance: centerPos, xTransformOrigin: strings.CENTER },
                { distance: startPos, xTransformOrigin: startTransformOrigin },
                { distance: endPos, xTransformOrigin: endTransformOrigin }
            ];
        var validPosition = possiblePositions.find(function (_a) {
            var distance = _a.distance;
            return positionOptions.has(distance);
        });
        if (validPosition) {
            return validPosition;
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the anchor
        // element itself collides with the viewport, or the viewport is very
        // narrow. In this case, we allow the tooltip to be mis-aligned from the
        // anchor element.
        if (anchorRect.left < 0) {
            return {
                distance: this.minViewportTooltipThreshold,
                xTransformOrigin: strings.LEFT
            };
        }
        else {
            var viewportWidth = this.adapter.getViewportWidth();
            var distance = viewportWidth - (tooltipWidth + this.minViewportTooltipThreshold);
            return { distance: distance, xTransformOrigin: strings.RIGHT };
        }
    };
    /**
     * Given the values for the horizontal alignments of the tooltip, calculates
     * which of these options would result in the tooltip maintaining the required
     * threshold distance vs which would result in the tooltip staying within the
     * viewport.
     *
     * A Set of values is returned holding the distances that would honor the
     * above requirements. Following the logic for determining the tooltip
     * position, if all alignments violate the threshold, then the returned Set
     * contains values that keep the tooltip within the viewport.
     */
    MDCTooltipFoundation.prototype.determineValidPositionOptions = function () {
        var e_3, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var posWithinThreshold = new Set();
        var posWithinViewport = new Set();
        try {
            for (var positions_1 = __values(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
                var position = positions_1_1.value;
                if (this.positionHonorsViewportThreshold(position)) {
                    posWithinThreshold.add(position);
                }
                else if (this.positionDoesntCollideWithViewport(position)) {
                    posWithinViewport.add(position);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (positions_1_1 && !positions_1_1.done && (_a = positions_1.return)) _a.call(positions_1);
            }
            finally { if (e_3) throw e_3.error; }
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
     * Returns the distance value and a string indicating the y-axis transform-
     * origin that should be used when animating the tooltip.
     */
    MDCTooltipFoundation.prototype.calculateYTooltipDistance = function (anchorRect, tooltipHeight) {
        var belowYPos = anchorRect.bottom + this.anchorGap;
        var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight);
        var yPositionOptions = this.determineValidYPositionOptions(aboveYPos, belowYPos);
        if (this.yTooltipPos === YPosition.ABOVE &&
            yPositionOptions.has(aboveYPos)) {
            return { distance: aboveYPos, yTransformOrigin: strings.BOTTOM };
        }
        else if (this.yTooltipPos === YPosition.BELOW &&
            yPositionOptions.has(belowYPos)) {
            return { distance: belowYPos, yTransformOrigin: strings.TOP };
        }
        if (yPositionOptions.has(belowYPos)) {
            return { distance: belowYPos, yTransformOrigin: strings.TOP };
        }
        if (yPositionOptions.has(aboveYPos)) {
            return { distance: aboveYPos, yTransformOrigin: strings.BOTTOM };
        }
        // Indicates that all potential positions would result in the tooltip
        // colliding with the viewport. This would only occur when the viewport is
        // very short.
        return { distance: belowYPos, yTransformOrigin: strings.TOP };
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
    MDCTooltipFoundation.prototype.calculateTooltipWithCaretStyles = function (anchorRect) {
        // Prior to grabbing the caret bounding rect, we clear all styles set on the
        // caret. This will ensure the width/height is consistent (since we rotate
        // the caret 90deg in some positions which would result in the height and
        // width bounding rect measurements flipping).
        this.adapter.clearTooltipCaretStyles();
        var caretSize = this.adapter.getTooltipCaretBoundingRect();
        if (!anchorRect || !caretSize) {
            return { position: PositionWithCaret.DETECTED, top: 0, left: 0 };
        }
        // The caret for the rich tooltip is created by rotating/skewing/scaling
        // square div into a diamond shape and then hiding half of it so it looks
        // like a triangle. We use the boundingClientRect to calculate the
        // width/height of the element after the transforms (to the caret) have been
        // applied. Since the full tooltip is scaled by 0.8 for the entrance
        // animation, we divide by this value to retrieve the actual caret
        // dimensions.
        var caretWidth = caretSize.width / numbers.ANIMATION_SCALE;
        // Since we hide half of caret, we divide the returned ClientRect height
        // by 2.
        var caretHeight = (caretSize.height / numbers.ANIMATION_SCALE) / 2;
        var tooltipSize = this.adapter.getTooltipSize();
        var yOptions = this.calculateYWithCaretDistanceOptions(anchorRect, tooltipSize.height, { caretWidth: caretWidth, caretHeight: caretHeight });
        var xOptions = this.calculateXWithCaretDistanceOptions(anchorRect, tooltipSize.width, { caretWidth: caretWidth, caretHeight: caretHeight });
        var positionOptions = this.validateTooltipWithCaretDistances(yOptions, xOptions);
        if (positionOptions.size < 1) {
            positionOptions = this.generateBackupPositionOption(anchorRect, tooltipSize, { caretWidth: caretWidth, caretHeight: caretHeight });
        }
        var _a = this.determineTooltipWithCaretDistance(positionOptions), position = _a.position, xDistance = _a.xDistance, yDistance = _a.yDistance;
        // After determining the position of the tooltip relative to the anchor,
        // place the caret in the corresponding position and retrieve the necessary
        // x/y transform origins needed to properly animate the tooltip entrance.
        var _b = this.setCaretPositionStyles(position, { caretWidth: caretWidth, caretHeight: caretHeight }), yTransformOrigin = _b.yTransformOrigin, xTransformOrigin = _b.xTransformOrigin;
        return {
            yTransformOrigin: yTransformOrigin,
            xTransformOrigin: xTransformOrigin,
            top: yDistance,
            left: xDistance
        };
    };
    MDCTooltipFoundation.prototype.calculateXWithCaretDistanceOptions = function (anchorRect, tooltipWidth, caretSize) {
        var caretWidth = caretSize.caretWidth, caretHeight = caretSize.caretHeight;
        var isLTR = !this.adapter.isRTL();
        var anchorMidpoint = anchorRect.left + anchorRect.width / 2;
        var sideLeftAligned = anchorRect.left - (tooltipWidth + this.anchorGap + caretHeight);
        var sideRightAligned = anchorRect.right + this.anchorGap + caretHeight;
        var sideStartPos = isLTR ? sideLeftAligned : sideRightAligned;
        var sideEndPos = isLTR ? sideRightAligned : sideLeftAligned;
        var verticalLeftAligned = anchorMidpoint - (numbers.CARET_INDENTATION + caretWidth / 2);
        var verticalRightAligned = anchorMidpoint -
            (tooltipWidth - numbers.CARET_INDENTATION - caretWidth / 2);
        var verticalStartPos = isLTR ? verticalLeftAligned : verticalRightAligned;
        var verticalEndPos = isLTR ? verticalRightAligned : verticalLeftAligned;
        var verticalCenterPos = anchorMidpoint - tooltipWidth / 2;
        var possiblePositionsMap = new Map([
            [XPositionWithCaret.START, verticalStartPos],
            [XPositionWithCaret.CENTER, verticalCenterPos],
            [XPositionWithCaret.END, verticalEndPos],
            [XPositionWithCaret.SIDE_END, sideEndPos],
            [XPositionWithCaret.SIDE_START, sideStartPos],
        ]);
        return possiblePositionsMap;
    };
    MDCTooltipFoundation.prototype.calculateYWithCaretDistanceOptions = function (anchorRect, tooltipHeight, caretSize) {
        var caretWidth = caretSize.caretWidth, caretHeight = caretSize.caretHeight;
        var anchorMidpoint = anchorRect.top + anchorRect.height / 2;
        var belowYPos = anchorRect.bottom + this.anchorGap + caretHeight;
        var aboveYPos = anchorRect.top - (this.anchorGap + tooltipHeight + caretHeight);
        var sideTopYPos = anchorMidpoint - (numbers.CARET_INDENTATION + caretWidth / 2);
        var sideCenterYPos = anchorMidpoint - (tooltipHeight / 2);
        var sideBottomYPos = anchorMidpoint -
            (tooltipHeight - numbers.CARET_INDENTATION - caretWidth / 2);
        var possiblePositionsMap = new Map([
            [YPositionWithCaret.ABOVE, aboveYPos],
            [YPositionWithCaret.BELOW, belowYPos],
            [YPositionWithCaret.SIDE_TOP, sideTopYPos],
            [YPositionWithCaret.SIDE_CENTER, sideCenterYPos],
            [YPositionWithCaret.SIDE_BOTTOM, sideBottomYPos],
        ]);
        return possiblePositionsMap;
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
            this.parentRect = this.adapter.getParentBoundingRect();
            this.richTooltip ? this.positionRichTooltip() :
                this.positionPlainTooltip();
        }
    };
    /**
     * Given a list of x/y position options for a rich tooltip with caret, checks
     * if valid x/y combinations of these position options are either within the
     * viewport threshold, or simply within the viewport. Returns a map with the
     * valid x/y position combinations that all either honor the viewport
     * threshold or are simply inside within the viewport.
     */
    MDCTooltipFoundation.prototype.validateTooltipWithCaretDistances = function (yOptions, xOptions) {
        var e_4, _a, e_5, _b, e_6, _c;
        var posWithinThreshold = new Map();
        var posWithinViewport = new Map();
        // If a tooltip has a caret, not all combinations of YPositionWithCarets and
        // XPositionWithCarets are possible. Because of this we only check the
        // validity of a given XPositionWithCaret if a potential corresponding
        // YPositionWithCaret is valid.
        var validMappings = new Map([
            [
                YPositionWithCaret.ABOVE,
                [
                    XPositionWithCaret.START, XPositionWithCaret.CENTER,
                    XPositionWithCaret.END
                ]
            ],
            [
                YPositionWithCaret.BELOW,
                [
                    XPositionWithCaret.START, XPositionWithCaret.CENTER,
                    XPositionWithCaret.END
                ]
            ],
            [
                YPositionWithCaret.SIDE_TOP,
                [XPositionWithCaret.SIDE_START, XPositionWithCaret.SIDE_END]
            ],
            [
                YPositionWithCaret.SIDE_CENTER,
                [XPositionWithCaret.SIDE_START, XPositionWithCaret.SIDE_END]
            ],
            [
                YPositionWithCaret.SIDE_BOTTOM,
                [XPositionWithCaret.SIDE_START, XPositionWithCaret.SIDE_END]
            ],
        ]);
        try {
            for (var _d = __values(validMappings.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var y = _e.value;
                var yDistance = yOptions.get(y);
                if (this.yPositionHonorsViewportThreshold(yDistance)) {
                    try {
                        for (var _f = (e_5 = void 0, __values(validMappings.get(y))), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var x = _g.value;
                            var xDistance = xOptions.get(x);
                            if (this.positionHonorsViewportThreshold(xDistance)) {
                                var caretPositionName = this.caretPositionOptionsMapping(x, y);
                                posWithinThreshold.set(caretPositionName, { xDistance: xDistance, yDistance: yDistance });
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                else if (this.yPositionDoesntCollideWithViewport(yDistance)) {
                    try {
                        for (var _h = (e_6 = void 0, __values(validMappings.get(y))), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var x = _j.value;
                            var xDistance = xOptions.get(x);
                            if (this.positionDoesntCollideWithViewport(xDistance)) {
                                var caretPositionName = this.caretPositionOptionsMapping(x, y);
                                posWithinViewport.set(caretPositionName, { xDistance: xDistance, yDistance: yDistance });
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return posWithinThreshold.size ? posWithinThreshold : posWithinViewport;
    };
    /**
     * Method for generating a horizontal and vertical position for the tooltip if
     * all other calculated values are considered invalid. This would only happen
     * in situations of very small viewports/large tooltips.
     */
    MDCTooltipFoundation.prototype.generateBackupPositionOption = function (anchorRect, tooltipSize, caretSize) {
        var isLTR = !this.adapter.isRTL();
        var xDistance;
        var xPos;
        if (anchorRect.left < 0) {
            xDistance = this.minViewportTooltipThreshold + caretSize.caretHeight;
            xPos = isLTR ? XPositionWithCaret.END : XPositionWithCaret.START;
        }
        else {
            var viewportWidth = this.adapter.getViewportWidth();
            xDistance = viewportWidth -
                (tooltipSize.width + this.minViewportTooltipThreshold +
                    caretSize.caretHeight);
            xPos = isLTR ? XPositionWithCaret.START : XPositionWithCaret.END;
        }
        var yDistance;
        var yPos;
        if (anchorRect.top < 0) {
            yDistance = this.minViewportTooltipThreshold + caretSize.caretHeight;
            yPos = YPositionWithCaret.BELOW;
        }
        else {
            var viewportHeight = this.adapter.getViewportHeight();
            yDistance = viewportHeight -
                (tooltipSize.height + this.minViewportTooltipThreshold +
                    caretSize.caretHeight);
            yPos = YPositionWithCaret.ABOVE;
        }
        var caretPositionName = this.caretPositionOptionsMapping(xPos, yPos);
        return new Map([[caretPositionName, { xDistance: xDistance, yDistance: yDistance }]]);
    };
    /**
     * Given a list of valid position options for a rich tooltip with caret,
     * returns the option that should be used.
     */
    MDCTooltipFoundation.prototype.determineTooltipWithCaretDistance = function (options) {
        if (options.has(this.tooltipPositionWithCaret)) {
            var tooltipPos = options.get(this.tooltipPositionWithCaret);
            return {
                position: this.tooltipPositionWithCaret,
                xDistance: tooltipPos.xDistance,
                yDistance: tooltipPos.yDistance,
            };
        }
        var orderPref = [
            PositionWithCaret.ABOVE_START, PositionWithCaret.ABOVE_CENTER,
            PositionWithCaret.ABOVE_END, PositionWithCaret.TOP_SIDE_START,
            PositionWithCaret.CENTER_SIDE_START, PositionWithCaret.BOTTOM_SIDE_START,
            PositionWithCaret.TOP_SIDE_END, PositionWithCaret.CENTER_SIDE_END,
            PositionWithCaret.BOTTOM_SIDE_END, PositionWithCaret.BELOW_START,
            PositionWithCaret.BELOW_CENTER, PositionWithCaret.BELOW_END
        ];
        // Before calling this method we check whether or not the "options" param
        // is empty and invoke a different method. We, therefore, can be certain
        // that "validPosition" will always be defined.
        var validPosition = orderPref.find(function (pos) { return options.has(pos); });
        var pos = options.get(validPosition);
        return {
            position: validPosition,
            xDistance: pos.xDistance,
            yDistance: pos.yDistance,
        };
    };
    /**
     * Returns the corresponding PositionWithCaret enum for the proivded
     * XPositionWithCaret and YPositionWithCaret enums. This mapping exists so our
     * public API accepts only PositionWithCaret enums (as all combinations of
     * XPositionWithCaret and YPositionWithCaret are not valid), but internally we
     * can calculate the X and Y positions of a rich tooltip with caret
     * separately.
     */
    MDCTooltipFoundation.prototype.caretPositionOptionsMapping = function (xPos, yPos) {
        switch (yPos) {
            case YPositionWithCaret.ABOVE:
                if (xPos === XPositionWithCaret.START) {
                    return PositionWithCaret.ABOVE_START;
                }
                else if (xPos === XPositionWithCaret.CENTER) {
                    return PositionWithCaret.ABOVE_CENTER;
                }
                else if (xPos === XPositionWithCaret.END) {
                    return PositionWithCaret.ABOVE_END;
                }
                break;
            case YPositionWithCaret.BELOW:
                if (xPos === XPositionWithCaret.START) {
                    return PositionWithCaret.BELOW_START;
                }
                else if (xPos === XPositionWithCaret.CENTER) {
                    return PositionWithCaret.BELOW_CENTER;
                }
                else if (xPos === XPositionWithCaret.END) {
                    return PositionWithCaret.BELOW_END;
                }
                break;
            case YPositionWithCaret.SIDE_TOP:
                if (xPos === XPositionWithCaret.SIDE_START) {
                    return PositionWithCaret.TOP_SIDE_START;
                }
                else if (xPos === XPositionWithCaret.SIDE_END) {
                    return PositionWithCaret.TOP_SIDE_END;
                }
                break;
            case YPositionWithCaret.SIDE_CENTER:
                if (xPos === XPositionWithCaret.SIDE_START) {
                    return PositionWithCaret.CENTER_SIDE_START;
                }
                else if (xPos === XPositionWithCaret.SIDE_END) {
                    return PositionWithCaret.CENTER_SIDE_END;
                }
                break;
            case YPositionWithCaret.SIDE_BOTTOM:
                if (xPos === XPositionWithCaret.SIDE_START) {
                    return PositionWithCaret.BOTTOM_SIDE_START;
                }
                else if (xPos === XPositionWithCaret.SIDE_END) {
                    return PositionWithCaret.BOTTOM_SIDE_END;
                }
                break;
            default:
                break;
        }
        throw new Error("MDCTooltipFoundation: Invalid caret position of " + xPos + ", " + yPos);
    };
    /**
     * Given a PositionWithCaret, applies the correct styles to the caret element
     * so that it is positioned properly on the rich tooltip.
     * Returns the x and y positions of the caret, to be used as the
     * transform-origin on the tooltip itself for entrance animations.
     */
    MDCTooltipFoundation.prototype.setCaretPositionStyles = function (position, caretSize) {
        var e_7, _a;
        var values = this.calculateCaretPositionOnTooltip(position, caretSize);
        if (!values) {
            return { yTransformOrigin: 0, xTransformOrigin: 0 };
        }
        // Prior to setting the caret position styles, clear any previous styles
        // set. This is necessary as all position options do not use the same
        // properties (e.g. using 'left' or 'right') and so old style properties
        // might not get overridden, causing misplaced carets.
        this.adapter.clearTooltipCaretStyles();
        this.adapter.setTooltipCaretStyle(values.yAlignment, values.yAxisPx);
        this.adapter.setTooltipCaretStyle(values.xAlignment, values.xAxisPx);
        // Value of scaleX is cos(skew), Math.cos() expects radians though, so we
        // must first convert the skew value (which is in degrees) to radians.
        var skewRadians = values.skew * (Math.PI / 180);
        var scaleX = Math.cos(skewRadians);
        this.adapter.setTooltipCaretStyle('transform', "rotate(" + values.rotation + "deg) skewY(" + values.skew + "deg) scaleX(" + scaleX + ")");
        this.adapter.setTooltipCaretStyle('transform-origin', values.xAlignment + " " + values.yAlignment);
        try {
            for (var _b = __values(values.caretCorners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var corner = _c.value;
                this.adapter.setTooltipCaretStyle(corner, '0');
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return {
            yTransformOrigin: values.yTransformOrigin,
            xTransformOrigin: values.xTransformOrigin
        };
    };
    /**
     * Given a PositionWithCaret, determines the correct styles to position the
     * caret properly on the rich tooltip.
     */
    MDCTooltipFoundation.prototype.calculateCaretPositionOnTooltip = function (tooltipPos, caretSize) {
        var isLTR = !this.adapter.isRTL();
        var tooltipWidth = this.adapter.getComputedStyleProperty('width');
        var tooltipHeight = this.adapter.getComputedStyleProperty('height');
        if (!tooltipWidth || !tooltipHeight || !caretSize) {
            return;
        }
        var midpointWidth = "calc((" + tooltipWidth + " - " + caretSize.caretWidth + "px) / 2)";
        var midpointHeight = "calc((" + tooltipHeight + " - " + caretSize.caretWidth + "px) / 2)";
        var flushWithEdge = '0';
        var indentedFromEdge = numbers.CARET_INDENTATION + "px";
        var indentedFromWidth = "calc(" + tooltipWidth + " - " + indentedFromEdge + ")";
        var indentedFromHeight = "calc(" + tooltipHeight + " - " + indentedFromEdge + ")";
        var verticalRotation = 35;
        var horizontalRotation = Math.abs(90 - verticalRotation);
        var bottomRightTopLeftBorderRadius = ['border-bottom-right-radius', 'border-top-left-radius'];
        var bottomLeftTopRightBorderRadius = ['border-bottom-left-radius', 'border-top-right-radius'];
        var skewDeg = 20;
        switch (tooltipPos) {
            case PositionWithCaret.BELOW_CENTER:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: midpointWidth,
                    rotation: -1 * verticalRotation,
                    skew: -1 * skewDeg,
                    xTransformOrigin: midpointWidth,
                    yTransformOrigin: flushWithEdge,
                    caretCorners: bottomRightTopLeftBorderRadius,
                };
            case PositionWithCaret.BELOW_END:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: isLTR ? strings.RIGHT : strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? verticalRotation : -1 * verticalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? indentedFromWidth : indentedFromEdge,
                    yTransformOrigin: flushWithEdge,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius :
                        bottomRightTopLeftBorderRadius,
                };
            case PositionWithCaret.BELOW_START:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: isLTR ? strings.LEFT : strings.RIGHT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? -1 * verticalRotation : verticalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? indentedFromEdge : indentedFromWidth,
                    yTransformOrigin: flushWithEdge,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius :
                        bottomLeftTopRightBorderRadius,
                };
            case PositionWithCaret.TOP_SIDE_END:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: isLTR ? strings.LEFT : strings.RIGHT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
                    yTransformOrigin: indentedFromEdge,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius :
                        bottomLeftTopRightBorderRadius,
                };
            case PositionWithCaret.CENTER_SIDE_END:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: isLTR ? strings.LEFT : strings.RIGHT,
                    yAxisPx: midpointHeight,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
                    yTransformOrigin: midpointHeight,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius :
                        bottomLeftTopRightBorderRadius,
                };
            case PositionWithCaret.BOTTOM_SIDE_END:
                return {
                    yAlignment: strings.BOTTOM,
                    xAlignment: isLTR ? strings.LEFT : strings.RIGHT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? flushWithEdge : tooltipWidth,
                    yTransformOrigin: indentedFromHeight,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius :
                        bottomRightTopLeftBorderRadius,
                };
            case PositionWithCaret.TOP_SIDE_START:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: isLTR ? strings.RIGHT : strings.LEFT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
                    yTransformOrigin: indentedFromEdge,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius :
                        bottomRightTopLeftBorderRadius,
                };
            case PositionWithCaret.CENTER_SIDE_START:
                return {
                    yAlignment: strings.TOP,
                    xAlignment: isLTR ? strings.RIGHT : strings.LEFT,
                    yAxisPx: midpointHeight,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? -1 * horizontalRotation : horizontalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
                    yTransformOrigin: midpointHeight,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius :
                        bottomRightTopLeftBorderRadius,
                };
            case PositionWithCaret.BOTTOM_SIDE_START:
                return {
                    yAlignment: strings.BOTTOM,
                    xAlignment: isLTR ? strings.RIGHT : strings.LEFT,
                    yAxisPx: indentedFromEdge,
                    xAxisPx: flushWithEdge,
                    rotation: isLTR ? horizontalRotation : -1 * horizontalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? tooltipWidth : flushWithEdge,
                    yTransformOrigin: indentedFromHeight,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius :
                        bottomLeftTopRightBorderRadius,
                };
            case PositionWithCaret.ABOVE_CENTER:
                return {
                    yAlignment: strings.BOTTOM,
                    xAlignment: strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: midpointWidth,
                    rotation: verticalRotation,
                    skew: skewDeg,
                    xTransformOrigin: midpointWidth,
                    yTransformOrigin: tooltipHeight,
                    caretCorners: bottomLeftTopRightBorderRadius,
                };
            case PositionWithCaret.ABOVE_END:
                return {
                    yAlignment: strings.BOTTOM,
                    xAlignment: isLTR ? strings.RIGHT : strings.LEFT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? -1 * verticalRotation : verticalRotation,
                    skew: isLTR ? -1 * skewDeg : skewDeg,
                    xTransformOrigin: isLTR ? indentedFromWidth : indentedFromEdge,
                    yTransformOrigin: tooltipHeight,
                    caretCorners: isLTR ? bottomRightTopLeftBorderRadius :
                        bottomLeftTopRightBorderRadius,
                };
            default:
            case PositionWithCaret.ABOVE_START:
                return {
                    yAlignment: strings.BOTTOM,
                    xAlignment: isLTR ? strings.LEFT : strings.RIGHT,
                    yAxisPx: flushWithEdge,
                    xAxisPx: indentedFromEdge,
                    rotation: isLTR ? verticalRotation : -1 * verticalRotation,
                    skew: isLTR ? skewDeg : -1 * skewDeg,
                    xTransformOrigin: isLTR ? indentedFromEdge : indentedFromWidth,
                    yTransformOrigin: tooltipHeight,
                    caretCorners: isLTR ? bottomLeftTopRightBorderRadius :
                        bottomRightTopLeftBorderRadius,
                };
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
    /**
     * Method that allows user to specify additional elements that should have a
     * scroll event listener attached to it. This should be used in instances
     * where the anchor element is placed inside a scrollable container, and will
     * ensure that the tooltip will stay attached to the anchor on scroll.
     */
    MDCTooltipFoundation.prototype.attachScrollHandler = function (addEventListenerFn) {
        var _this = this;
        this.addAncestorScrollEventListeners.push(function () {
            addEventListenerFn('scroll', _this.windowScrollHandler);
        });
    };
    /**
     * Must be used in conjunction with #attachScrollHandler. Removes the scroll
     * event handler from elements on the page.
     */
    MDCTooltipFoundation.prototype.removeScrollHandler = function (removeEventHandlerFn) {
        var _this = this;
        this.removeAncestorScrollEventListeners.push(function () {
            removeEventHandlerFn('scroll', _this.windowScrollHandler);
        });
    };
    MDCTooltipFoundation.prototype.destroy = function () {
        var e_8, _a;
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
        if (this.richTooltip) {
            this.adapter.deregisterEventHandler('focusout', this.richTooltipFocusOutHandler);
        }
        if (!this.persistentTooltip) {
            this.adapter.deregisterEventHandler('mouseenter', this.tooltipMouseEnterHandler);
            this.adapter.deregisterEventHandler('mouseleave', this.tooltipMouseLeaveHandler);
        }
        this.adapter.deregisterAnchorEventHandler('blur', this.anchorBlurHandler);
        this.adapter.deregisterDocumentEventHandler('click', this.documentClickHandler);
        this.adapter.deregisterDocumentEventHandler('keydown', this.documentKeydownHandler);
        this.adapter.deregisterWindowEventHandler('scroll', this.windowScrollHandler);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        try {
            for (var _b = __values(this.removeAncestorScrollEventListeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fn = _c.value;
                fn();
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.animFrame.cancelAll();
    };
    return MDCTooltipFoundation;
}(MDCFoundation));
export { MDCTooltipFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTooltipFoundation;
//# sourceMappingURL=foundation.js.map