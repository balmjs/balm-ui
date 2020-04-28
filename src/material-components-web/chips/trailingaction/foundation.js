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
import { MDCFoundation } from '@material/base/foundation';
import { isNavigationEvent, KEY, normalizeKey } from '@material/dom/keyboard';
import { InteractionTrigger, strings } from './constants';
var MDCChipTrailingActionFoundation = /** @class */ (function (_super) {
    __extends(MDCChipTrailingActionFoundation, _super);
    function MDCChipTrailingActionFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCChipTrailingActionFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCChipTrailingActionFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipTrailingActionFoundation, "defaultAdapter", {
        get: function () {
            return {
                focus: function () { return undefined; },
                getAttribute: function () { return null; },
                setAttribute: function () { return undefined; },
                notifyInteraction: function () { return undefined; },
                notifyNavigation: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCChipTrailingActionFoundation.prototype.handleClick = function (evt) {
        evt.stopPropagation();
        this.adapter_.notifyInteraction(InteractionTrigger.CLICK);
    };
    MDCChipTrailingActionFoundation.prototype.handleKeydown = function (evt) {
        evt.stopPropagation();
        var key = normalizeKey(evt);
        if (this.shouldNotifyInteractionFromKey_(key)) {
            var trigger = this.getTriggerFromKey_(key);
            this.adapter_.notifyInteraction(trigger);
            return;
        }
        if (isNavigationEvent(evt)) {
            this.adapter_.notifyNavigation(key);
            return;
        }
    };
    MDCChipTrailingActionFoundation.prototype.removeFocus = function () {
        this.adapter_.setAttribute(strings.TAB_INDEX, '-1');
    };
    MDCChipTrailingActionFoundation.prototype.focus = function () {
        this.adapter_.setAttribute(strings.TAB_INDEX, '0');
        this.adapter_.focus();
    };
    MDCChipTrailingActionFoundation.prototype.isNavigable = function () {
        return this.adapter_.getAttribute(strings.ARIA_HIDDEN) !== 'true';
    };
    MDCChipTrailingActionFoundation.prototype.shouldNotifyInteractionFromKey_ = function (key) {
        var isFromActionKey = key === KEY.ENTER || key === KEY.SPACEBAR;
        var isFromDeleteKey = key === KEY.BACKSPACE || key === KEY.DELETE;
        return isFromActionKey || isFromDeleteKey;
    };
    MDCChipTrailingActionFoundation.prototype.getTriggerFromKey_ = function (key) {
        if (key === KEY.SPACEBAR) {
            return InteractionTrigger.SPACEBAR_KEY;
        }
        if (key === KEY.ENTER) {
            return InteractionTrigger.ENTER_KEY;
        }
        if (key === KEY.DELETE) {
            return InteractionTrigger.DELETE_KEY;
        }
        if (key === KEY.BACKSPACE) {
            return InteractionTrigger.BACKSPACE_KEY;
        }
        // Default case, should never be returned
        return InteractionTrigger.UNSPECIFIED;
    };
    return MDCChipTrailingActionFoundation;
}(MDCFoundation));
export { MDCChipTrailingActionFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipTrailingActionFoundation;
//# sourceMappingURL=foundation.js.map