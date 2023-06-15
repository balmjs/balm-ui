/**
 * @license
 * Copyright 2017 Google Inc.
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
import { MDCComponent } from '../../base/component';
import { MDCTextFieldHelperTextFoundation } from './foundation';
var MDCTextFieldHelperText = /** @class */ (function (_super) {
    __extends(MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCTextFieldHelperTextFoundation(adapter);
    };
    return MDCTextFieldHelperText;
}(MDCComponent));
export { MDCTextFieldHelperText };
//# sourceMappingURL=component.js.map