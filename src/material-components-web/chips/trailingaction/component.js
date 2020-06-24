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
import { MDCComponent } from '@material/base/component';
import { MDCRipple } from '@material/ripple/component';
import { MDCRippleFoundation } from '@material/ripple/foundation';
import { strings } from './constants';
import { MDCChipTrailingActionFoundation } from './foundation';
var MDCChipTrailingAction = /** @class */ (function (_super) {
    __extends(MDCChipTrailingAction, _super);
    function MDCChipTrailingAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCChipTrailingAction.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    MDCChipTrailingAction.attachTo = function (root) {
        return new MDCChipTrailingAction(root);
    };
    MDCChipTrailingAction.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) {
            return new MDCRipple(el, foundation);
        }; }
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var rippleAdapter = MDCRipple.createAdapter(this);
        this.ripple_ =
            rippleFactory(this.root, new MDCRippleFoundation(rippleAdapter));
    };
    MDCChipTrailingAction.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function (evt) {
            _this.foundation.handleClick(evt);
        };
        this.handleKeydown_ = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.listen('click', this.handleClick_);
        this.listen('keydown', this.handleKeydown_);
    };
    MDCChipTrailingAction.prototype.destroy = function () {
        this.ripple_.destroy();
        this.unlisten('click', this.handleClick_);
        this.unlisten('keydown', this.handleKeydown_);
        _super.prototype.destroy.call(this);
    };
    MDCChipTrailingAction.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            focus: function () {
                // TODO(b/157231863): Migate MDCComponent#root to HTMLElement
                _this.root.focus();
            },
            getAttribute: function (attr) { return _this.root.getAttribute(attr); },
            notifyInteraction: function (trigger) {
                return _this.emit(strings.INTERACTION_EVENT, { trigger: trigger }, true /* shouldBubble */);
            },
            notifyNavigation: function (key) {
                _this.emit(strings.NAVIGATION_EVENT, { key: key }, true /* shouldBubble */);
            },
            setAttribute: function (attr, value) {
                _this.root.setAttribute(attr, value);
            },
        };
        return new MDCChipTrailingActionFoundation(adapter);
    };
    MDCChipTrailingAction.prototype.isNavigable = function () {
        return this.foundation.isNavigable();
    };
    MDCChipTrailingAction.prototype.focus = function () {
        this.foundation.focus();
    };
    MDCChipTrailingAction.prototype.removeFocus = function () {
        this.foundation.removeFocus();
    };
    return MDCChipTrailingAction;
}(MDCComponent));
export { MDCChipTrailingAction };
//# sourceMappingURL=component.js.map