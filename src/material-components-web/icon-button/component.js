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
import { MDCRipple } from '../ripple/component';
import { MDCIconButtonToggleFoundation } from './foundation';
var strings = MDCIconButtonToggleFoundation.strings;
var MDCIconButtonToggle = /** @class */ (function (_super) {
    __extends(MDCIconButtonToggle, _super);
    function MDCIconButtonToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rippleComponent = _this.createRipple();
        return _this;
    }
    MDCIconButtonToggle.attachTo = function (root) {
        return new MDCIconButtonToggle(root);
    };
    MDCIconButtonToggle.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick = function () {
            _this.foundation.handleClick();
        };
        this.listen('click', this.handleClick);
    };
    MDCIconButtonToggle.prototype.destroy = function () {
        this.unlisten('click', this.handleClick);
        this.ripple.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCIconButtonToggle.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            notifyChange: function (evtData) {
                _this.emit(strings.CHANGE_EVENT, evtData);
            },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getAttr: function (attrName) { return _this.root.getAttribute(attrName); },
            setAttr: function (attrName, attrValue) {
                return _this.root.setAttribute(attrName, attrValue);
            },
        };
        return new MDCIconButtonToggleFoundation(adapter);
    };
    Object.defineProperty(MDCIconButtonToggle.prototype, "ripple", {
        get: function () {
            return this.rippleComponent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggle.prototype, "on", {
        get: function () {
            return this.foundation.isOn();
        },
        set: function (isOn) {
            this.foundation.toggle(isOn);
        },
        enumerable: false,
        configurable: true
    });
    MDCIconButtonToggle.prototype.createRipple = function () {
        var ripple = new MDCRipple(this.root);
        ripple.unbounded = true;
        return ripple;
    };
    return MDCIconButtonToggle;
}(MDCComponent));
export { MDCIconButtonToggle };
//# sourceMappingURL=component.js.map