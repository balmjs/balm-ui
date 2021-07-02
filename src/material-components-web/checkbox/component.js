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
import { __assign, __extends, __values } from "tslib";
import { getCorrectEventName } from '../animation/util';
import { MDCComponent } from '../base/component';
import { applyPassive } from '../dom/events';
import { matches } from '../dom/ponyfill';
import { MDCRipple } from '../ripple/component';
import { MDCRippleFoundation } from '../ripple/foundation';
import { strings } from './constants';
import { MDCCheckboxFoundation } from './foundation';
var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var MDCCheckbox = /** @class */ (function (_super) {
    __extends(MDCCheckbox, _super);
    function MDCCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rippleSurface = _this.createRipple();
        return _this;
    }
    MDCCheckbox.attachTo = function (root) {
        return new MDCCheckbox(root);
    };
    Object.defineProperty(MDCCheckbox.prototype, "ripple", {
        get: function () {
            return this.rippleSurface;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "checked", {
        get: function () {
            return this.getNativeControl().checked;
        },
        set: function (checked) {
            this.getNativeControl().checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
        get: function () {
            return this.getNativeControl().indeterminate;
        },
        set: function (indeterminate) {
            this.getNativeControl().indeterminate = indeterminate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "disabled", {
        get: function () {
            return this.getNativeControl().disabled;
        },
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "value", {
        get: function () {
            return this.getNativeControl().value;
        },
        set: function (value) {
            this.getNativeControl().value = value;
        },
        enumerable: false,
        configurable: true
    });
    MDCCheckbox.prototype.initialize = function () {
        var DATA_INDETERMINATE_ATTR = strings.DATA_INDETERMINATE_ATTR;
        this.getNativeControl().indeterminate =
            this.getNativeControl().getAttribute(DATA_INDETERMINATE_ATTR) ===
                'true';
        this.getNativeControl().removeAttribute(DATA_INDETERMINATE_ATTR);
    };
    MDCCheckbox.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange = function () {
            _this.foundation.handleChange();
        };
        this.handleAnimationEnd = function () {
            _this.foundation.handleAnimationEnd();
        };
        this.getNativeControl().addEventListener('change', this.handleChange);
        this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd);
        this.installPropertyChangeHooks();
    };
    MDCCheckbox.prototype.destroy = function () {
        this.rippleSurface.destroy();
        this.getNativeControl().removeEventListener('change', this.handleChange);
        this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd);
        this.uninstallPropertyChangeHooks();
        _super.prototype.destroy.call(this);
    };
    MDCCheckbox.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            forceLayout: function () { return _this.root.offsetWidth; },
            hasNativeControl: function () { return !!_this.getNativeControl(); },
            isAttachedToDOM: function () { return Boolean(_this.root.parentNode); },
            isChecked: function () { return _this.checked; },
            isIndeterminate: function () { return _this.indeterminate; },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            removeNativeControlAttr: function (attr) {
                _this.getNativeControl().removeAttribute(attr);
            },
            setNativeControlAttr: function (attr, value) {
                _this.getNativeControl().setAttribute(attr, value);
            },
            setNativeControlDisabled: function (disabled) {
                _this.getNativeControl().disabled = disabled;
            },
        };
        return new MDCCheckboxFoundation(adapter);
    };
    MDCCheckbox.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { deregisterInteractionHandler: function (evtType, handler) {
                _this.getNativeControl().removeEventListener(evtType, handler, applyPassive());
            }, isSurfaceActive: function () { return matches(_this.getNativeControl(), ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) {
                _this.getNativeControl().addEventListener(evtType, handler, applyPassive());
            } });
        return new MDCRipple(this.root, new MDCRippleFoundation(adapter));
    };
    MDCCheckbox.prototype.installPropertyChangeHooks = function () {
        var e_1, _a;
        var _this = this;
        var nativeCb = this.getNativeControl();
        var cbProto = Object.getPrototypeOf(nativeCb);
        var _loop_1 = function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            // We have to check for this descriptor, since some browsers (Safari) don't support its return.
            // See: https://bugs.webkit.org/show_bug.cgi?id=49739
            if (!validDescriptor(desc)) {
                return { value: void 0 };
            }
            // Type cast is needed for compatibility with Closure Compiler.
            var nativeGetter = desc.get;
            var nativeCbDesc = {
                configurable: desc.configurable,
                enumerable: desc.enumerable,
                get: nativeGetter,
                set: function (state) {
                    desc.set.call(nativeCb, state);
                    _this.foundation.handleChange();
                },
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        };
        try {
            for (var CB_PROTO_PROPS_1 = __values(CB_PROTO_PROPS), CB_PROTO_PROPS_1_1 = CB_PROTO_PROPS_1.next(); !CB_PROTO_PROPS_1_1.done; CB_PROTO_PROPS_1_1 = CB_PROTO_PROPS_1.next()) {
                var controlState = CB_PROTO_PROPS_1_1.value;
                var state_1 = _loop_1(controlState);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (CB_PROTO_PROPS_1_1 && !CB_PROTO_PROPS_1_1.done && (_a = CB_PROTO_PROPS_1.return)) _a.call(CB_PROTO_PROPS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCCheckbox.prototype.uninstallPropertyChangeHooks = function () {
        var e_2, _a;
        var nativeCb = this.getNativeControl();
        var cbProto = Object.getPrototypeOf(nativeCb);
        try {
            for (var CB_PROTO_PROPS_2 = __values(CB_PROTO_PROPS), CB_PROTO_PROPS_2_1 = CB_PROTO_PROPS_2.next(); !CB_PROTO_PROPS_2_1.done; CB_PROTO_PROPS_2_1 = CB_PROTO_PROPS_2.next()) {
                var controlState = CB_PROTO_PROPS_2_1.value;
                var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
                if (!validDescriptor(desc)) {
                    return;
                }
                Object.defineProperty(nativeCb, controlState, desc);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (CB_PROTO_PROPS_2_1 && !CB_PROTO_PROPS_2_1.done && (_a = CB_PROTO_PROPS_2.return)) _a.call(CB_PROTO_PROPS_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MDCCheckbox.prototype.getNativeControl = function () {
        var NATIVE_CONTROL_SELECTOR = strings.NATIVE_CONTROL_SELECTOR;
        var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);
        if (!el) {
            throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
        }
        return el;
    };
    return MDCCheckbox;
}(MDCComponent));
export { MDCCheckbox };
function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
//# sourceMappingURL=component.js.map