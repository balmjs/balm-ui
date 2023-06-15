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
import { __extends, __read, __values } from "tslib";
import { MDCComponent } from '../../base/component';
import { MDCChipAction } from '../action/component';
import { MDCChipActionEvents } from '../action/constants';
import { MDCChipFoundation } from './foundation';
/**
 * MDCChip provides component encapsulation of the foundation implementation.
 */
var MDCChip = /** @class */ (function (_super) {
    __extends(MDCChip, _super);
    function MDCChip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootHTML = _this.root;
        return _this;
    }
    MDCChip.attachTo = function (root) {
        return new MDCChip(root);
    };
    MDCChip.prototype.initialize = function (actionFactory) {
        if (actionFactory === void 0) { actionFactory = function (el) { return new MDCChipAction(el); }; }
        this.actions = new Map();
        var actionEls = this.root.querySelectorAll('.mdc-evolution-chip__action');
        for (var i = 0; i < actionEls.length; i++) {
            var action = actionFactory(actionEls[i]);
            this.actions.set(action.actionType(), action);
        }
    };
    MDCChip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleActionInteraction = function (event) {
            _this.foundation.handleActionInteraction(event);
        };
        this.handleActionNavigation = function (event) {
            _this.foundation.handleActionNavigation(event);
        };
        this.listen(MDCChipActionEvents.INTERACTION, this.handleActionInteraction);
        this.listen(MDCChipActionEvents.NAVIGATION, this.handleActionNavigation);
    };
    MDCChip.prototype.destroy = function () {
        this.unlisten(MDCChipActionEvents.INTERACTION, this.handleActionInteraction);
        this.unlisten(MDCChipActionEvents.NAVIGATION, this.handleActionNavigation);
        _super.prototype.destroy.call(this);
    };
    MDCChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            emitEvent: function (eventName, eventDetail) {
                _this.emit(eventName, eventDetail, true /* shouldBubble */);
            },
            getActions: function () {
                var e_1, _a;
                var actions = [];
                try {
                    for (var _b = __values(_this.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 1), key = _d[0];
                        actions.push(key);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return actions;
            },
            getAttribute: function (attrName) { return _this.root.getAttribute(attrName); },
            getElementID: function () { return _this.rootHTML.id; },
            getOffsetWidth: function () {
                return _this.rootHTML.offsetWidth;
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            isActionSelectable: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.isSelectable();
                }
                return false;
            },
            isActionSelected: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.isSelected();
                }
                return false;
            },
            isActionFocusable: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.isFocusable();
                }
                return false;
            },
            isActionDisabled: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.isDisabled();
                }
                return false;
            },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setActionDisabled: function (actionType, isDisabled) {
                var action = _this.actions.get(actionType);
                if (action) {
                    action.setDisabled(isDisabled);
                }
            },
            setActionFocus: function (actionType, behavior) {
                var action = _this.actions.get(actionType);
                if (action) {
                    action.setFocus(behavior);
                }
            },
            setActionSelected: function (actionType, isSelected) {
                var action = _this.actions.get(actionType);
                if (action) {
                    action.setSelected(isSelected);
                }
            },
            setStyleProperty: function (prop, value) {
                _this.rootHTML.style.setProperty(prop, value);
            },
        };
        // Default to the primary foundation
        return new MDCChipFoundation(adapter);
    };
    /** Exposed to be called by the parent chip set. */
    MDCChip.prototype.remove = function () {
        var parent = this.root.parentNode;
        if (parent !== null) {
            parent.removeChild(this.root);
        }
    };
    /** Returns the MDCChipActionTypes for the encapsulated actions. */
    MDCChip.prototype.getActions = function () {
        return this.foundation.getActions();
    };
    /** Returns the ID of the root element. */
    MDCChip.prototype.getElementID = function () {
        return this.foundation.getElementID();
    };
    MDCChip.prototype.isDisabled = function () {
        return this.foundation.isDisabled();
    };
    MDCChip.prototype.setDisabled = function (isDisabled) {
        this.foundation.setDisabled(isDisabled);
    };
    /** Returns the focusability of the action. */
    MDCChip.prototype.isActionFocusable = function (action) {
        return this.foundation.isActionFocusable(action);
    };
    /** Returns the selectability of the action. */
    MDCChip.prototype.isActionSelectable = function (action) {
        return this.foundation.isActionSelectable(action);
    };
    /** Returns the selected state of the action. */
    MDCChip.prototype.isActionSelected = function (action) {
        return this.foundation.isActionSelected(action);
    };
    /** Sets the focus behavior of the action. */
    MDCChip.prototype.setActionFocus = function (action, focus) {
        this.foundation.setActionFocus(action, focus);
    };
    /** Sets the selected state of the action. */
    MDCChip.prototype.setActionSelected = function (action, isSelected) {
        this.foundation.setActionSelected(action, isSelected);
    };
    /** Starts the animation on the chip. */
    MDCChip.prototype.startAnimation = function (animation) {
        this.foundation.startAnimation(animation);
    };
    return MDCChip;
}(MDCComponent));
export { MDCChip };
//# sourceMappingURL=component.js.map