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
import { __extends } from "tslib";
import { MDCComponent } from '../base/component';
import { CssClasses, events } from './constants';
import { MDCTooltipFoundation } from './foundation';
var MDCTooltip = /** @class */ (function (_super) {
    __extends(MDCTooltip, _super);
    function MDCTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTooltip.attachTo = function (root) {
        return new MDCTooltip(root);
    };
    MDCTooltip.prototype.initialize = function () {
        var tooltipId = this.root.getAttribute('id');
        if (!tooltipId) {
            throw new Error('MDCTooltip: Tooltip component must have an id.');
        }
        var anchorElem = document.querySelector("[data-tooltip-id=\"" + tooltipId + "\"]") ||
            document.querySelector("[aria-describedby=\"" + tooltipId + "\"]");
        if (!anchorElem) {
            throw new Error('MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id].');
        }
        this.anchorElem = anchorElem;
    };
    MDCTooltip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.isTooltipRich = this.foundation.isRich();
        this.isTooltipPersistent = this.foundation.isPersistent();
        this.handleMouseEnter = function () {
            _this.foundation.handleAnchorMouseEnter();
        };
        this.handleFocus = function (evt) {
            _this.foundation.handleAnchorFocus(evt);
        };
        this.handleMouseLeave = function () {
            _this.foundation.handleAnchorMouseLeave();
        };
        this.handleTransitionEnd = function () {
            _this.foundation.handleTransitionEnd();
        };
        this.handleClick = function () {
            _this.foundation.handleAnchorClick();
        };
        this.handleTouchstart = function () {
            _this.foundation.handleAnchorTouchstart();
        };
        this.handleTouchend = function () {
            _this.foundation.handleAnchorTouchend();
        };
        if (this.isTooltipRich && this.isTooltipPersistent) {
            this.anchorElem.addEventListener('click', this.handleClick);
        }
        else {
            this.anchorElem.addEventListener('mouseenter', this.handleMouseEnter);
            // TODO(b/157075286): Listening for a 'focus' event is too broad.
            this.anchorElem.addEventListener('focus', this.handleFocus);
            this.anchorElem.addEventListener('mouseleave', this.handleMouseLeave);
            this.anchorElem.addEventListener('touchstart', this.handleTouchstart);
            this.anchorElem.addEventListener('touchend', this.handleTouchend);
        }
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCTooltip.prototype.destroy = function () {
        if (this.anchorElem) {
            if (this.isTooltipRich && this.isTooltipPersistent) {
                this.anchorElem.removeEventListener('click', this.handleClick);
            }
            else {
                this.anchorElem.removeEventListener('mouseenter', this.handleMouseEnter);
                this.anchorElem.removeEventListener('focus', this.handleFocus);
                this.anchorElem.removeEventListener('mouseleave', this.handleMouseLeave);
                this.anchorElem.removeEventListener('touchstart', this.handleTouchstart);
                this.anchorElem.removeEventListener('touchend', this.handleTouchend);
            }
        }
        this.unlisten('transitionend', this.handleTransitionEnd);
        _super.prototype.destroy.call(this);
    };
    MDCTooltip.prototype.setTooltipPosition = function (position) {
        this.foundation.setTooltipPosition(position);
    };
    MDCTooltip.prototype.setAnchorBoundaryType = function (type) {
        this.foundation.setAnchorBoundaryType(type);
    };
    MDCTooltip.prototype.setShowDelay = function (delayMs) {
        this.foundation.setShowDelay(delayMs);
    };
    MDCTooltip.prototype.setHideDelay = function (delayMs) {
        this.foundation.setHideDelay(delayMs);
    };
    MDCTooltip.prototype.hide = function () {
        this.foundation.hide();
    };
    MDCTooltip.prototype.isShown = function () {
        return this.foundation.isShown();
    };
    /**
     * Method that allows user to specify additional elements that should have a
     * scroll event listener attached to it. This should be used in instances
     * where the anchor element is placed inside a scrollable container (that is
     * not the body element), and will ensure that the tooltip will stay attached
     * to the anchor on scroll.
     */
    MDCTooltip.prototype.attachScrollHandler = function (addEventListenerFn) {
        this.foundation.attachScrollHandler(addEventListenerFn);
    };
    /**
     * Must be used in conjunction with #attachScrollHandler. Removes the scroll
     * event handler from elements on the page.
     */
    MDCTooltip.prototype.removeScrollHandler = function (removeEventHandlerFn) {
        this.foundation.removeScrollHandler(removeEventHandlerFn);
    };
    MDCTooltip.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            getAttribute: function (attr) { return _this.root.getAttribute(attr); },
            setAttribute: function (attr, value) {
                _this.root.setAttribute(attr, value);
            },
            removeAttribute: function (attr) {
                _this.root.removeAttribute(attr);
            },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            getComputedStyleProperty: function (propertyName) {
                return window.getComputedStyle(_this.root).getPropertyValue(propertyName);
            },
            setStyleProperty: function (propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            setSurfaceAnimationStyleProperty: function (propertyName, value) {
                var surface = _this.root.querySelector("." + CssClasses.SURFACE_ANIMATION);
                surface === null || surface === void 0 ? void 0 : surface.style.setProperty(propertyName, value);
            },
            getViewportWidth: function () { return window.innerWidth; },
            getViewportHeight: function () { return window.innerHeight; },
            getTooltipSize: function () {
                return {
                    width: _this.root.offsetWidth,
                    height: _this.root.offsetHeight
                };
            },
            getAnchorBoundingRect: function () {
                return _this.anchorElem ? _this.anchorElem.getBoundingClientRect() : null;
            },
            getParentBoundingRect: function () {
                var _a, _b;
                return (_b = (_a = _this.root.parentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : null;
            },
            getAnchorAttribute: function (attr) {
                return _this.anchorElem ? _this.anchorElem.getAttribute(attr) : null;
            },
            setAnchorAttribute: function (attr, value) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.setAttribute(attr, value);
            },
            isRTL: function () { return getComputedStyle(_this.root).direction === 'rtl'; },
            anchorContainsElement: function (element) {
                var _a;
                return !!((_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.contains(element));
            },
            tooltipContainsElement: function (element) {
                return _this.root.contains(element);
            },
            focusAnchorElement: function () {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.focus();
            },
            registerEventHandler: function (evt, handler) {
                if (_this.root instanceof HTMLElement) {
                    _this.root.addEventListener(evt, handler);
                }
            },
            deregisterEventHandler: function (evt, handler) {
                if (_this.root instanceof HTMLElement) {
                    _this.root.removeEventListener(evt, handler);
                }
            },
            registerAnchorEventHandler: function (evt, handler) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.addEventListener(evt, handler);
            },
            deregisterAnchorEventHandler: function (evt, handler) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.removeEventListener(evt, handler);
            },
            registerDocumentEventHandler: function (evt, handler) {
                document.body.addEventListener(evt, handler);
            },
            deregisterDocumentEventHandler: function (evt, handler) {
                document.body.removeEventListener(evt, handler);
            },
            registerWindowEventHandler: function (evt, handler) {
                window.addEventListener(evt, handler);
            },
            deregisterWindowEventHandler: function (evt, handler) {
                window.removeEventListener(evt, handler);
            },
            notifyHidden: function () {
                _this.emit(events.HIDDEN, {});
            },
            getTooltipCaretBoundingRect: function () {
                var caret = _this.root.querySelector("." + CssClasses.TOOLTIP_CARET_TOP);
                if (!caret) {
                    return null;
                }
                return caret.getBoundingClientRect();
            },
            setTooltipCaretStyle: function (propertyName, value) {
                var topCaret = _this.root.querySelector("." + CssClasses.TOOLTIP_CARET_TOP);
                var bottomCaret = _this.root.querySelector("." + CssClasses.TOOLTIP_CARET_BOTTOM);
                if (!topCaret || !bottomCaret) {
                    return;
                }
                topCaret.style.setProperty(propertyName, value);
                bottomCaret.style.setProperty(propertyName, value);
            },
            clearTooltipCaretStyles: function () {
                var topCaret = _this.root.querySelector("." + CssClasses.TOOLTIP_CARET_TOP);
                var bottomCaret = _this.root.querySelector("." + CssClasses.TOOLTIP_CARET_BOTTOM);
                if (!topCaret || !bottomCaret) {
                    return;
                }
                topCaret.removeAttribute('style');
                bottomCaret.removeAttribute('style');
            },
            getActiveElement: function () {
                return document.activeElement;
            },
        };
        //tslint:enable:object-literal-sort-keys
        return new MDCTooltipFoundation(adapter);
    };
    return MDCTooltip;
}(MDCComponent));
export { MDCTooltip };
//# sourceMappingURL=component.js.map