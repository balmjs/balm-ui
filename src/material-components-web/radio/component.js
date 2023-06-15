/**
 * @license
 * Copyright 2016 Google Inc.
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
import { MDCComponent } from '../base/component';
import { applyPassive } from '../dom/events';
import { MDCRipple } from '../ripple/component';
import { MDCRippleFoundation } from '../ripple/foundation';
import { MDCRadioFoundation } from './foundation';
var MDCRadio = /** @class */ (function (_super) {
    __extends(MDCRadio, _super);
    function MDCRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rippleSurface = _this.createRipple();
        return _this;
    }
    MDCRadio.attachTo = function (root) {
        return new MDCRadio(root);
    };
    Object.defineProperty(MDCRadio.prototype, "checked", {
        get: function () {
            return this.nativeControl.checked;
        },
        set: function (checked) {
            this.nativeControl.checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadio.prototype, "disabled", {
        get: function () {
            return this.nativeControl.disabled;
        },
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadio.prototype, "value", {
        get: function () {
            return this.nativeControl.value;
        },
        set: function (value) {
            this.nativeControl.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRadio.prototype, "ripple", {
        get: function () {
            return this.rippleSurface;
        },
        enumerable: false,
        configurable: true
    });
    MDCRadio.prototype.destroy = function () {
        this.rippleSurface.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCRadio.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl.disabled =
                disabled; },
        };
        return new MDCRadioFoundation(adapter);
    };
    MDCRadio.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { registerInteractionHandler: function (evtType, handler) {
                _this.nativeControl.addEventListener(evtType, handler, applyPassive());
            }, deregisterInteractionHandler: function (evtType, handler) {
                _this.nativeControl.removeEventListener(evtType, handler, applyPassive());
            }, 
            // Radio buttons technically go "active" whenever there is *any* keyboard
            // interaction. This is not the UI we desire.
            isSurfaceActive: function () { return false; }, isUnbounded: function () { return true; } });
        // tslint:enable:object-literal-sort-keys
        return new MDCRipple(this.root, new MDCRippleFoundation(adapter));
    };
    Object.defineProperty(MDCRadio.prototype, "nativeControl", {
        get: function () {
            var NATIVE_CONTROL_SELECTOR = MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);
            if (!el) {
                throw new Error("Radio component requires a " + NATIVE_CONTROL_SELECTOR + " element");
            }
            return el;
        },
        enumerable: false,
        configurable: true
    });
    return MDCRadio;
}(MDCComponent));
export { MDCRadio };
//# sourceMappingURL=component.js.map