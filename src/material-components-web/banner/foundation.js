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
import { CloseReason, cssClasses, numbers } from './constants';
var OPENING = cssClasses.OPENING, OPEN = cssClasses.OPEN, CLOSING = cssClasses.CLOSING;
/**
 * Foundation class for banner. Responsibilities include opening and closing the
 * banner.
 */
var MDCBannerFoundation = /** @class */ (function (_super) {
    __extends(MDCBannerFoundation, _super);
    function MDCBannerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCBannerFoundation.defaultAdapter), adapter)) || this;
        _this.isOpened = false;
        // Request id for open animation, used to cancel the refresh callback
        // request on close() and destroy().
        _this.animationFrame = 0;
        // Timer id for close and open animation, used to cancel the timer on
        // close() and destroy().
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCBannerFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                getContentHeight: function () { return 0; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeClass: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
                trapFocus: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCBannerFoundation.prototype.destroy = function () {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = 0;
    };
    MDCBannerFoundation.prototype.open = function () {
        var _this = this;
        this.isOpened = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        var contentHeight = this.adapter.getContentHeight();
        this.animationFrame = requestAnimationFrame(function () {
            _this.adapter.addClass(OPEN);
            _this.adapter.setStyleProperty('height', contentHeight + "px");
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus();
                _this.adapter.notifyOpened();
            }, numbers.BANNER_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
     *     custom handling of programmatic closing of the banner.
     */
    MDCBannerFoundation.prototype.close = function (reason) {
        var _this = this;
        if (!this.isOpened) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as
            // the banner is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        this.isOpened = false;
        this.adapter.notifyClosing(reason);
        this.adapter.addClass(CLOSING);
        this.adapter.setStyleProperty('height', '0');
        this.adapter.removeClass(OPEN);
        this.adapter.removeClass(OPENING);
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(reason);
        }, numbers.BANNER_ANIMATION_CLOSE_TIME_MS);
    };
    MDCBannerFoundation.prototype.isOpen = function () {
        return this.isOpened;
    };
    MDCBannerFoundation.prototype.handlePrimaryActionClick = function () {
        this.close(CloseReason.PRIMARY);
    };
    MDCBannerFoundation.prototype.handleSecondaryActionClick = function () {
        this.close(CloseReason.SECONDARY);
    };
    MDCBannerFoundation.prototype.layout = function () {
        var contentHeight = this.adapter.getContentHeight();
        this.adapter.setStyleProperty('height', contentHeight + "px");
    };
    MDCBannerFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    return MDCBannerFoundation;
}(MDCFoundation));
export { MDCBannerFoundation };
//# sourceMappingURL=foundation.js.map