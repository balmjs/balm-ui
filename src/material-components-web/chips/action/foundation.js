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
import { Attributes, Events, FocusBehavior, InteractionTrigger } from './constants';
var triggerMap = new Map();
triggerMap.set(KEY.SPACEBAR, InteractionTrigger.SPACEBAR_KEY);
triggerMap.set(KEY.ENTER, InteractionTrigger.ENTER_KEY);
triggerMap.set(KEY.DELETE, InteractionTrigger.DELETE_KEY);
triggerMap.set(KEY.BACKSPACE, InteractionTrigger.BACKSPACE_KEY);
/**
 * MDCChipActionFoundation provides a base abstract foundation for all chip
 * actions.
 */
var MDCChipActionFoundation = /** @class */ (function (_super) {
    __extends(MDCChipActionFoundation, _super);
    function MDCChipActionFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCChipActionFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCChipActionFoundation, "defaultAdapter", {
        get: function () {
            return {
                emitEvent: function () { return undefined; },
                focus: function () { return undefined; },
                getAttribute: function () { return null; },
                getElementID: function () { return ''; },
                removeAttribute: function () { return undefined; },
                setAttribute: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipActionFoundation.prototype.handleClick = function () {
        // Early exit for cases where the click comes from a source other than the
        // user's pointer (i.e. programmatic click from AT).
        if (this.isDisabled())
            return;
        this.emitInteraction(InteractionTrigger.CLICK);
    };
    MDCChipActionFoundation.prototype.handleKeydown = function (event) {
        var key = normalizeKey(event);
        if (this.shouldNotifyInteractionFromKey(key)) {
            event.preventDefault();
            this.emitInteraction(this.getTriggerFromKey(key));
            return;
        }
        if (isNavigationEvent(event)) {
            event.preventDefault();
            this.emitNavigation(key);
            return;
        }
    };
    MDCChipActionFoundation.prototype.setDisabled = function (isDisabled) {
        // Use `aria-disabled` for the selectable (listbox) disabled state
        if (this.isSelectable()) {
            this.adapter.setAttribute(Attributes.ARIA_DISABLED, "" + isDisabled);
            return;
        }
        if (isDisabled) {
            this.adapter.setAttribute(Attributes.DISABLED, 'true');
        }
        else {
            this.adapter.removeAttribute(Attributes.DISABLED);
        }
    };
    MDCChipActionFoundation.prototype.isDisabled = function () {
        if (this.adapter.getAttribute(Attributes.ARIA_DISABLED) === 'true') {
            return true;
        }
        if (this.adapter.getAttribute(Attributes.DISABLED) !== null) {
            return true;
        }
        return false;
    };
    MDCChipActionFoundation.prototype.setFocus = function (behavior) {
        // Early exit if not focusable
        if (!this.isFocusable()) {
            return;
        }
        // Add it to the tab order and give focus
        if (behavior === FocusBehavior.FOCUSABLE_AND_FOCUSED) {
            this.adapter.setAttribute(Attributes.TAB_INDEX, '0');
            this.adapter.focus();
            return;
        }
        // Add to the tab order
        if (behavior === FocusBehavior.FOCUSABLE) {
            this.adapter.setAttribute(Attributes.TAB_INDEX, '0');
            return;
        }
        // Remove it from the tab order
        if (behavior === FocusBehavior.NOT_FOCUSABLE) {
            this.adapter.setAttribute(Attributes.TAB_INDEX, '-1');
            return;
        }
    };
    MDCChipActionFoundation.prototype.isFocusable = function () {
        if (this.isDisabled()) {
            return false;
        }
        if (this.adapter.getAttribute(Attributes.ARIA_HIDDEN) === 'true') {
            return false;
        }
        return true;
    };
    MDCChipActionFoundation.prototype.setSelected = function (isSelected) {
        // Early exit if not selectable
        if (!this.isSelectable()) {
            return;
        }
        this.adapter.setAttribute(Attributes.ARIA_SELECTED, "" + isSelected);
    };
    MDCChipActionFoundation.prototype.isSelected = function () {
        return this.adapter.getAttribute(Attributes.ARIA_SELECTED) === 'true';
    };
    MDCChipActionFoundation.prototype.emitInteraction = function (trigger) {
        this.adapter.emitEvent(Events.INTERACTION, {
            actionID: this.adapter.getElementID(),
            source: this.actionType(),
            trigger: trigger,
        });
    };
    MDCChipActionFoundation.prototype.emitNavigation = function (key) {
        this.adapter.emitEvent(Events.NAVIGATION, {
            source: this.actionType(),
            key: key,
        });
    };
    MDCChipActionFoundation.prototype.shouldNotifyInteractionFromKey = function (key) {
        var isFromActionKey = key === KEY.ENTER || key === KEY.SPACEBAR;
        var isFromRemoveKey = key === KEY.BACKSPACE || key === KEY.DELETE;
        if (isFromActionKey) {
            return true;
        }
        if (isFromRemoveKey && this.shouldEmitInteractionOnRemoveKey()) {
            return true;
        }
        return false;
    };
    MDCChipActionFoundation.prototype.getTriggerFromKey = function (key) {
        var trigger = triggerMap.get(key);
        if (trigger) {
            return trigger;
        }
        // Default case, should ideally never be returned
        return InteractionTrigger.UNSPECIFIED;
    };
    return MDCChipActionFoundation;
}(MDCFoundation));
export { MDCChipActionFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipActionFoundation;
//# sourceMappingURL=foundation.js.map