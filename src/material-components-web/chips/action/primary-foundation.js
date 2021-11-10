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
import { MDCChipActionAttributes, MDCChipActionType } from './constants';
import { MDCChipActionFoundation } from './foundation';
/**
 * MDCChipPrimaryActionFoundation provides the business logic for the primary
 * chip action.
 */
var MDCChipPrimaryActionFoundation = /** @class */ (function (_super) {
    __extends(MDCChipPrimaryActionFoundation, _super);
    function MDCChipPrimaryActionFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipPrimaryActionFoundation.prototype.isSelectable = function () {
        return this.adapter.getAttribute(MDCChipActionAttributes.ROLE) === 'option';
    };
    MDCChipPrimaryActionFoundation.prototype.actionType = function () {
        return MDCChipActionType.PRIMARY;
    };
    MDCChipPrimaryActionFoundation.prototype.shouldEmitInteractionOnRemoveKey = function () {
        return this.adapter.getAttribute(MDCChipActionAttributes.DATA_DELETABLE) ===
            'true';
    };
    return MDCChipPrimaryActionFoundation;
}(MDCChipActionFoundation));
export { MDCChipPrimaryActionFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipPrimaryActionFoundation;
//# sourceMappingURL=primary-foundation.js.map