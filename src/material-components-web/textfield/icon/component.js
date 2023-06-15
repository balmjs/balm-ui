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
import { MDCTextFieldIconFoundation } from './foundation';
var MDCTextFieldIcon = /** @class */ (function (_super) {
    __extends(MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCTextFieldIconFoundation(adapter);
    };
    return MDCTextFieldIcon;
}(MDCComponent));
export { MDCTextFieldIcon };
//# sourceMappingURL=component.js.map