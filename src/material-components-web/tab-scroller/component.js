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
    // initialSyncWithDOM()
    MDCTabScroller.prototype.initialize = function () {
        this.area = this.root.querySelector(MDCTabScrollerFoundation.strings.AREA_SELECTOR);
        this.content = this.root.querySelector(MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
    };
    MDCTabScroller.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction = function () {
            _this.foundation.handleInteraction();
        };
        this.handleTransitionEnd = function (evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.area.addEventListener('wheel', this.handleInteraction, applyPassive());
        this.area.addEventListener('touchstart', this.handleInteraction, applyPassive());
        this.area.addEventListener('pointerdown', this.handleInteraction, applyPassive());
        this.area.addEventListener('mousedown', this.handleInteraction, applyPassive());
        this.area.addEventListener('keydown', this.handleInteraction, applyPassive());
        this.content.addEventListener('transitionend', this.handleTransitionEnd);
    };
    MDCTabScroller.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.area.removeEventListener('wheel', this.handleInteraction, applyPassive());
        this.area.removeEventListener('touchstart', this.handleInteraction, applyPassive());
        this.area.removeEventListener('pointerdown', this.handleInteraction, applyPassive());
        this.area.removeEventListener('mousedown', this.handleInteraction, applyPassive());
        this.area.removeEventListener('keydown', this.handleInteraction, applyPassive());
        this.content.removeEventListener('transitionend', this.handleTransitionEnd);
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
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            addScrollAreaClass: function (className) {
                _this.area.classList.add(className);
            },
            setScrollAreaStyleProperty: function (prop, value) {
                _this.area.style.setProperty(prop, value);
            },
            setScrollContentStyleProperty: function (prop, value) {
                _this.content.style.setProperty(prop, value);
            },
            getScrollContentStyleValue: function (propName) {
                return window.getComputedStyle(_this.content).getPropertyValue(propName);
            },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area.getBoundingClientRect(); },
            computeScrollContentClientRect: function () {
                return _this.content.getBoundingClientRect();
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
        return this.content.offsetWidth;
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