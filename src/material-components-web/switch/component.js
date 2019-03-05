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
import * as tslib_1 from "tslib";
import { MDCComponent } from '../base/component';
import { ponyfill } from '../dom/index';
import { MDCRipple, MDCRippleFoundation } from '../ripple/index';
import { MDCSwitchFoundation } from './foundation';
/**
 * An implementation of the switch component defined by the Material Design spec.
 *
 * https://material.io/design/components/selection-controls.html#switches
 */
var MDCSwitch = /** @class */ (function (_super) {
    tslib_1.__extends(MDCSwitch, _super);
    function MDCSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ripple_ = _this.createRipple_();
        return _this;
    }
    MDCSwitch.attachTo = function (root) {
        return new MDCSwitch(root);
    };
    MDCSwitch.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.ripple_.destroy();
        this.nativeControl_.removeEventListener('change', this.changeHandler_);
    };
    MDCSwitch.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.changeHandler_ = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            return (_a = _this.foundation_).handleChange.apply(_a, tslib_1.__spread(args));
        };
        this.nativeControl_.addEventListener('change', this.changeHandler_);
        // Sometimes the checked state of the input element is saved in the history.
        // The switch styling should match the checked state of the input element.
        // Do an initial sync between the native control and the foundation.
        this.checked = this.checked;
    };
    MDCSwitch.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setNativeControlChecked: function (checked) { return _this.nativeControl_.checked = checked; },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl_.disabled = disabled; },
        };
        return new MDCSwitchFoundation(adapter);
    };
    Object.defineProperty(MDCSwitch.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitch.prototype, "checked", {
        get: function () {
            return this.nativeControl_.checked;
        },
        set: function (checked) {
            this.foundation_.setChecked(checked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitch.prototype, "disabled", {
        get: function () {
            return this.nativeControl_.disabled;
        },
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    MDCSwitch.prototype.createRipple_ = function () {
        var _this = this;
        var RIPPLE_SURFACE_SELECTOR = MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR;
        var rippleSurface = this.root_.querySelector(RIPPLE_SURFACE_SELECTOR);
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = tslib_1.__assign({}, MDCRipple.createAdapter(this), { addClass: function (className) { return rippleSurface.classList.add(className); }, computeBoundingRect: function () { return rippleSurface.getBoundingClientRect(); }, deregisterInteractionHandler: function (evtType, handler) {
                _this.nativeControl_.removeEventListener(evtType, handler);
            }, isSurfaceActive: function () { return ponyfill.matches(_this.nativeControl_, ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) {
                _this.nativeControl_.addEventListener(evtType, handler);
            }, removeClass: function (className) { return rippleSurface.classList.remove(className); }, updateCssVariable: function (varName, value) {
                rippleSurface.style.setProperty(varName, value);
            } });
        return new MDCRipple(this.root_, new MDCRippleFoundation(adapter));
    };
    Object.defineProperty(MDCSwitch.prototype, "nativeControl_", {
        get: function () {
            var NATIVE_CONTROL_SELECTOR = MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;
            return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
        },
        enumerable: true,
        configurable: true
    });
    return MDCSwitch;
}(MDCComponent));
export { MDCSwitch };
//# sourceMappingURL=component.js.map