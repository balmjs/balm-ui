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
import { MDCComponent } from '../base/component';
import { applyPassive } from '../dom/events';
import { matches } from '../dom/ponyfill';
import { MDCTabScrollerFoundation } from './foundation';
import * as util from './util';
var MDCTabScroller = /** @class */ (function (_super) {
    __extends(MDCTabScroller, _super);
    function MDCTabScroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScroller.attachTo = function (root) {
        return new MDCTabScroller(root);
    };
    MDCTabScroller.prototype.initialize = function () {
        this.area_ = this.root.querySelector(MDCTabScrollerFoundation.strings.AREA_SELECTOR);
        this.content_ = this.root.querySelector(MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTabScroller.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function () { return _this.foundation.handleInteraction(); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation.handleTransitionEnd(evt); };
        this.area_.addEventListener('wheel', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('touchstart', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('pointerdown', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('mousedown', this.handleInteraction_, applyPassive());
        this.area_.addEventListener('keydown', this.handleInteraction_, applyPassive());
        this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.area_.removeEventListener('wheel', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('touchstart', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('pointerdown', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('mousedown', this.handleInteraction_, applyPassive());
        this.area_.removeEventListener('keydown', this.handleInteraction_, applyPassive());
        this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
    };
    MDCTabScroller.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            eventTargetMatchesSelector: function (evtTarget, selector) {
                return matches(evtTarget, selector);
            },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            addScrollAreaClass: function (className) { return _this.area_.classList.add(className); },
            setScrollAreaStyleProperty: function (prop, value) {
                return _this.area_.style.setProperty(prop, value);
            },
            setScrollContentStyleProperty: function (prop, value) {
                return _this.content_.style.setProperty(prop, value);
            },
            getScrollContentStyleValue: function (propName) {
                return window.getComputedStyle(_this.content_).getPropertyValue(propName);
            },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area_.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area_.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area_.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area_.getBoundingClientRect(); },
            computeScrollContentClientRect: function () {
                return _this.content_.getBoundingClientRect();
            },
            computeHorizontalScrollbarHeight: function () {
                return util.computeHorizontalScrollbarHeight(document);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCTabScrollerFoundation(adapter);
    };
    /**
     * Returns the current visual scroll position
     */
    MDCTabScroller.prototype.getScrollPosition = function () {
        return this.foundation.getScrollPosition();
    };
    /**
     * Returns the width of the scroll content
     */
    MDCTabScroller.prototype.getScrollContentWidth = function () {
        return this.content_.offsetWidth;
    };
    /**
     * Increments the scroll value by the given amount
     * @param scrollXIncrement The pixel value by which to increment the scroll value
     */
    MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
        this.foundation.incrementScroll(scrollXIncrement);
    };
    /**
     * Scrolls to the given pixel position
     * @param scrollX The pixel value to scroll to
     */
    MDCTabScroller.prototype.scrollTo = function (scrollX) {
        this.foundation.scrollTo(scrollX);
    };
    return MDCTabScroller;
}(MDCComponent));
export { MDCTabScroller };
//# sourceMappingURL=component.js.map