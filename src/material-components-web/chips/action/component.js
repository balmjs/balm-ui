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
import { MDCComponent } from '@material/base/component';
import { closest } from '@material/dom/ponyfill';
import { MDCRipple } from '@material/ripple/component';
import { MDCRippleFoundation } from '@material/ripple/foundation';
import { computePrimaryActionRippleClientRect, GRAPHIC_SELECTED_WIDTH_STYLE_PROP } from './component-ripple';
import { CssClasses } from './constants';
import { MDCChipPrimaryActionFoundation } from './primary-foundation';
import { MDCChipTrailingActionFoundation } from './trailing-foundation';
/**
 * MDCChipAction provides component encapsulation of the different foundation
 * implementations.
 */
var MDCChipAction = /** @class */ (function (_super) {
    __extends(MDCChipAction, _super);
    function MDCChipAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootHTML = _this.root;
        return _this;
    }
    MDCChipAction.attachTo = function (root) {
        return new MDCChipAction(root);
    };
    Object.defineProperty(MDCChipAction.prototype, "ripple", {
        get: function () {
            return this.rippleInstance;
        },
        enumerable: false,
        configurable: true
    });
    MDCChipAction.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) {
            return new MDCRipple(el, foundation);
        }; }
        var rippleAdapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { computeBoundingRect: function () { return _this.computeRippleClientRect(); } });
        this.rippleInstance =
            rippleFactory(this.root, new MDCRippleFoundation(rippleAdapter));
    };
    MDCChipAction.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick = function () {
            _this.foundation.handleClick();
        };
        this.handleKeydown = function (event) {
            _this.foundation.handleKeydown(event);
        };
        this.listen('click', this.handleClick);
        this.listen('keydown', this.handleKeydown);
    };
    MDCChipAction.prototype.destroy = function () {
        this.ripple.destroy();
        this.unlisten('click', this.handleClick);
        this.unlisten('keydown', this.handleKeydown);
        _super.prototype.destroy.call(this);
    };
    MDCChipAction.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            emitEvent: function (eventName, eventDetail) {
                _this.emit(eventName, eventDetail, true /* shouldBubble */);
            },
            focus: function () {
                _this.rootHTML.focus();
            },
            getAttribute: function (attrName) { return _this.root.getAttribute(attrName); },
            getElementID: function () { return _this.root.id; },
            removeAttribute: function (name) {
                _this.root.removeAttribute(name);
            },
            setAttribute: function (name, value) {
                _this.root.setAttribute(name, value);
            },
        };
        if (this.root.classList.contains(CssClasses.TRAILING_ACTION)) {
            return new MDCChipTrailingActionFoundation(adapter);
        }
        // Default to the primary foundation
        return new MDCChipPrimaryActionFoundation(adapter);
    };
    MDCChipAction.prototype.setDisabled = function (isDisabled) {
        this.foundation.setDisabled(isDisabled);
    };
    MDCChipAction.prototype.isDisabled = function () {
        return this.foundation.isDisabled();
    };
    MDCChipAction.prototype.setFocus = function (behavior) {
        this.foundation.setFocus(behavior);
    };
    MDCChipAction.prototype.isFocusable = function () {
        return this.foundation.isFocusable();
    };
    MDCChipAction.prototype.setSelected = function (isSelected) {
        this.foundation.setSelected(isSelected);
    };
    MDCChipAction.prototype.isSelected = function () {
        return this.foundation.isSelected();
    };
    MDCChipAction.prototype.isSelectable = function () {
        return this.foundation.isSelectable();
    };
    MDCChipAction.prototype.actionType = function () {
        return this.foundation.actionType();
    };
    MDCChipAction.prototype.computeRippleClientRect = function () {
        if (this.root.classList.contains(CssClasses.PRIMARY_ACTION)) {
            var chipRoot = closest(this.root, "." + CssClasses.CHIP_ROOT);
            // Return the root client rect since it's better than nothing
            if (!chipRoot)
                return this.root.getBoundingClientRect();
            var graphicWidth = window.getComputedStyle(chipRoot).getPropertyValue(GRAPHIC_SELECTED_WIDTH_STYLE_PROP);
            return computePrimaryActionRippleClientRect(chipRoot.getBoundingClientRect(), graphicWidth);
        }
        return this.root.getBoundingClientRect();
    };
    return MDCChipAction;
}(MDCComponent));
export { MDCChipAction };
//# sourceMappingURL=component.js.map