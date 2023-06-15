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
import { __assign, __extends, __values } from "tslib";
import { MDCFoundation } from '../../base/foundation';
import { KEY } from '../../dom/keyboard';
import { MDCChipActionFocusBehavior, MDCChipActionType } from '../action/constants';
import { MDCChipAnimation } from '../chip/constants';
import { MDCChipSetAttributes, MDCChipSetEvents } from './constants';
var Operator;
(function (Operator) {
    Operator[Operator["INCREMENT"] = 0] = "INCREMENT";
    Operator[Operator["DECREMENT"] = 1] = "DECREMENT";
})(Operator || (Operator = {}));
/**
 * MDCChipSetFoundation provides a foundation for all chips.
 */
var MDCChipSetFoundation = /** @class */ (function (_super) {
    __extends(MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCChipSetFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                announceMessage: function () { return undefined; },
                emitEvent: function () { return undefined; },
                getAttribute: function () { return null; },
                getChipActionsAtIndex: function () { return []; },
                getChipCount: function () { return 0; },
                getChipIdAtIndex: function () { return ''; },
                getChipIndexById: function () { return 0; },
                isChipFocusableAtIndex: function () { return false; },
                isChipSelectableAtIndex: function () { return false; },
                isChipSelectedAtIndex: function () { return false; },
                removeChipAtIndex: function () { },
                setChipFocusAtIndex: function () { return undefined; },
                setChipSelectedAtIndex: function () { return undefined; },
                startChipAnimationAtIndex: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipSetFoundation.prototype.handleChipAnimation = function (_a) {
        var detail = _a.detail;
        var chipID = detail.chipID, animation = detail.animation, isComplete = detail.isComplete, addedAnnouncement = detail.addedAnnouncement, removedAnnouncement = detail.removedAnnouncement;
        var index = this.adapter.getChipIndexById(chipID);
        if (animation === MDCChipAnimation.EXIT && isComplete) {
            if (removedAnnouncement) {
                this.adapter.announceMessage(removedAnnouncement);
            }
            this.removeAfterAnimation(index, chipID);
            return;
        }
        if (animation === MDCChipAnimation.ENTER && isComplete && addedAnnouncement) {
            this.adapter.announceMessage(addedAnnouncement);
            return;
        }
    };
    MDCChipSetFoundation.prototype.handleChipInteraction = function (_a) {
        var detail = _a.detail;
        var source = detail.source, chipID = detail.chipID, isSelectable = detail.isSelectable, isSelected = detail.isSelected, shouldRemove = detail.shouldRemove;
        var index = this.adapter.getChipIndexById(chipID);
        if (shouldRemove) {
            this.removeChip(index);
            return;
        }
        this.focusChip(index, source, MDCChipActionFocusBehavior.FOCUSABLE);
        this.adapter.emitEvent(MDCChipSetEvents.INTERACTION, {
            chipIndex: index,
            chipID: chipID,
        });
        if (isSelectable) {
            this.setSelection(index, source, !isSelected);
        }
    };
    MDCChipSetFoundation.prototype.handleChipNavigation = function (_a) {
        var detail = _a.detail;
        var chipID = detail.chipID, key = detail.key, isRTL = detail.isRTL, source = detail.source;
        var index = this.adapter.getChipIndexById(chipID);
        var toNextChip = (key === KEY.ARROW_RIGHT && !isRTL) ||
            (key === KEY.ARROW_LEFT && isRTL);
        if (toNextChip) {
            // Start from the next chip so we increment the index
            this.focusNextChipFrom(index + 1);
            return;
        }
        var toPreviousChip = (key === KEY.ARROW_LEFT && !isRTL) ||
            (key === KEY.ARROW_RIGHT && isRTL);
        if (toPreviousChip) {
            // Start from the previous chip so we decrement the index
            this.focusPrevChipFrom(index - 1);
            return;
        }
        if (key === KEY.ARROW_DOWN) {
            // Start from the next chip so we increment the index
            this.focusNextChipFrom(index + 1, source);
            return;
        }
        if (key === KEY.ARROW_UP) {
            // Start from the previous chip so we decrement the index
            this.focusPrevChipFrom(index - 1, source);
            return;
        }
        if (key === KEY.HOME) {
            this.focusNextChipFrom(0, source);
            return;
        }
        if (key === KEY.END) {
            this.focusPrevChipFrom(this.adapter.getChipCount() - 1, source);
            return;
        }
    };
    /** Returns the unique selected indexes of the chips. */
    MDCChipSetFoundation.prototype.getSelectedChipIndexes = function () {
        var e_1, _a;
        var selectedIndexes = new Set();
        var chipCount = this.adapter.getChipCount();
        for (var i = 0; i < chipCount; i++) {
            var actions = this.adapter.getChipActionsAtIndex(i);
            try {
                for (var actions_1 = (e_1 = void 0, __values(actions)), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    if (this.adapter.isChipSelectedAtIndex(i, action)) {
                        selectedIndexes.add(i);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return selectedIndexes;
    };
    /** Sets the selected state of the chip at the given index and action. */
    MDCChipSetFoundation.prototype.setChipSelected = function (index, action, isSelected) {
        if (this.adapter.isChipSelectableAtIndex(index, action)) {
            this.setSelection(index, action, isSelected);
        }
    };
    /** Returns the selected state of the chip at the given index and action. */
    MDCChipSetFoundation.prototype.isChipSelected = function (index, action) {
        return this.adapter.isChipSelectedAtIndex(index, action);
    };
    /** Removes the chip at the given index. */
    MDCChipSetFoundation.prototype.removeChip = function (index) {
        // Early exit if the index is out of bounds
        if (index >= this.adapter.getChipCount() || index < 0)
            return;
        this.adapter.startChipAnimationAtIndex(index, MDCChipAnimation.EXIT);
        this.adapter.emitEvent(MDCChipSetEvents.REMOVAL, {
            chipID: this.adapter.getChipIdAtIndex(index),
            chipIndex: index,
            isComplete: false,
        });
    };
    MDCChipSetFoundation.prototype.addChip = function (index) {
        // Early exit if the index is out of bounds
        if (index >= this.adapter.getChipCount() || index < 0)
            return;
        this.adapter.startChipAnimationAtIndex(index, MDCChipAnimation.ENTER);
    };
    /**
     * Increments to find the first focusable chip.
     */
    MDCChipSetFoundation.prototype.focusNextChipFrom = function (startIndex, targetAction) {
        var chipCount = this.adapter.getChipCount();
        for (var i = startIndex; i < chipCount; i++) {
            var focusableAction = this.getFocusableAction(i, Operator.INCREMENT, targetAction);
            if (focusableAction) {
                this.focusChip(i, focusableAction, MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
                return;
            }
        }
    };
    /**
     * Decrements to find the first focusable chip. Takes an optional target
     * action that can be used to focus the first matching focusable action.
     */
    MDCChipSetFoundation.prototype.focusPrevChipFrom = function (startIndex, targetAction) {
        for (var i = startIndex; i > -1; i--) {
            var focusableAction = this.getFocusableAction(i, Operator.DECREMENT, targetAction);
            if (focusableAction) {
                this.focusChip(i, focusableAction, MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
                return;
            }
        }
    };
    /** Returns the appropriate focusable action, or null if none exist. */
    MDCChipSetFoundation.prototype.getFocusableAction = function (index, op, targetAction) {
        var actions = this.adapter.getChipActionsAtIndex(index);
        // Reverse the actions if decrementing
        if (op === Operator.DECREMENT)
            actions.reverse();
        if (targetAction) {
            return this.getMatchingFocusableAction(index, actions, targetAction);
        }
        return this.getFirstFocusableAction(index, actions);
    };
    /**
     * Returs the first focusable action, regardless of type, or null if no
     * focusable actions exist.
     */
    MDCChipSetFoundation.prototype.getFirstFocusableAction = function (index, actions) {
        var e_2, _a;
        try {
            for (var actions_2 = __values(actions), actions_2_1 = actions_2.next(); !actions_2_1.done; actions_2_1 = actions_2.next()) {
                var action = actions_2_1.value;
                if (this.adapter.isChipFocusableAtIndex(index, action)) {
                    return action;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (actions_2_1 && !actions_2_1.done && (_a = actions_2.return)) _a.call(actions_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    /**
     * If the actions contain a focusable action that matches the target action,
     * return that. Otherwise, return the first focusable action, or null if no
     * focusable action exists.
     */
    MDCChipSetFoundation.prototype.getMatchingFocusableAction = function (index, actions, targetAction) {
        var e_3, _a;
        var focusableAction = null;
        try {
            for (var actions_3 = __values(actions), actions_3_1 = actions_3.next(); !actions_3_1.done; actions_3_1 = actions_3.next()) {
                var action = actions_3_1.value;
                if (this.adapter.isChipFocusableAtIndex(index, action)) {
                    focusableAction = action;
                }
                // Exit and return the focusable action if it matches the target
                if (focusableAction === targetAction) {
                    return focusableAction;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (actions_3_1 && !actions_3_1.done && (_a = actions_3.return)) _a.call(actions_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return focusableAction;
    };
    MDCChipSetFoundation.prototype.focusChip = function (index, action, focus) {
        var e_4, _a;
        this.adapter.setChipFocusAtIndex(index, action, focus);
        var chipCount = this.adapter.getChipCount();
        for (var i = 0; i < chipCount; i++) {
            var actions = this.adapter.getChipActionsAtIndex(i);
            try {
                for (var actions_4 = (e_4 = void 0, __values(actions)), actions_4_1 = actions_4.next(); !actions_4_1.done; actions_4_1 = actions_4.next()) {
                    var chipAction = actions_4_1.value;
                    // Skip the action and index provided since we set it above
                    if (chipAction === action && i === index)
                        continue;
                    this.adapter.setChipFocusAtIndex(i, chipAction, MDCChipActionFocusBehavior.NOT_FOCUSABLE);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (actions_4_1 && !actions_4_1.done && (_a = actions_4.return)) _a.call(actions_4);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
    MDCChipSetFoundation.prototype.supportsMultiSelect = function () {
        return this.adapter.getAttribute(MDCChipSetAttributes.ARIA_MULTISELECTABLE) === 'true';
    };
    MDCChipSetFoundation.prototype.setSelection = function (index, action, isSelected) {
        var e_5, _a;
        this.adapter.setChipSelectedAtIndex(index, action, isSelected);
        this.adapter.emitEvent(MDCChipSetEvents.SELECTION, {
            chipID: this.adapter.getChipIdAtIndex(index),
            chipIndex: index,
            isSelected: isSelected,
        });
        // Early exit if we support multi-selection
        if (this.supportsMultiSelect()) {
            return;
        }
        // If we get here, we ony support single selection. This means we need to
        // unselect all chips
        var chipCount = this.adapter.getChipCount();
        for (var i = 0; i < chipCount; i++) {
            var actions = this.adapter.getChipActionsAtIndex(i);
            try {
                for (var actions_5 = (e_5 = void 0, __values(actions)), actions_5_1 = actions_5.next(); !actions_5_1.done; actions_5_1 = actions_5.next()) {
                    var chipAction = actions_5_1.value;
                    // Skip the action and index provided since we set it above
                    if (chipAction === action && i === index)
                        continue;
                    this.adapter.setChipSelectedAtIndex(i, chipAction, false);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (actions_5_1 && !actions_5_1.done && (_a = actions_5.return)) _a.call(actions_5);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    };
    MDCChipSetFoundation.prototype.removeAfterAnimation = function (index, chipID) {
        this.adapter.removeChipAtIndex(index);
        this.adapter.emitEvent(MDCChipSetEvents.REMOVAL, {
            chipIndex: index,
            isComplete: true,
            chipID: chipID,
        });
        var chipCount = this.adapter.getChipCount();
        // Early exit if we have an empty chip set
        if (chipCount <= 0)
            return;
        this.focusNearestFocusableAction(index);
    };
    /**
     * Find the first focusable action by moving bidirectionally horizontally
     * from the start index.
     *
     * Given chip set [A, B, C, D, E, F, G]...
     * Let's say we remove chip "F". We don't know where the nearest focusable
     * action is since any of them could be disabled. The nearest focusable
     * action could be E, it could be G, it could even be A. To find it, we
     * start from the source index (5 for "F" in this case) and move out
     * horizontally, checking each chip at each index.
     *
     */
    MDCChipSetFoundation.prototype.focusNearestFocusableAction = function (index) {
        var chipCount = this.adapter.getChipCount();
        var decrIndex = index;
        var incrIndex = index;
        while (decrIndex > -1 || incrIndex < chipCount) {
            var focusAction = this.getNearestFocusableAction(decrIndex, incrIndex, MDCChipActionType.TRAILING);
            if (focusAction) {
                this.focusChip(focusAction.index, focusAction.action, MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
                return;
            }
            decrIndex--;
            incrIndex++;
        }
    };
    MDCChipSetFoundation.prototype.getNearestFocusableAction = function (decrIndex, incrIndex, actionType) {
        var decrAction = this.getFocusableAction(decrIndex, Operator.DECREMENT, actionType);
        if (decrAction) {
            return {
                index: decrIndex,
                action: decrAction,
            };
        }
        // Early exit if the incremented and decremented indices are identical
        if (incrIndex === decrIndex)
            return null;
        var incrAction = this.getFocusableAction(incrIndex, Operator.INCREMENT, actionType);
        if (incrAction) {
            return {
                index: incrIndex,
                action: incrAction,
            };
        }
        return null;
    };
    return MDCChipSetFoundation;
}(MDCFoundation));
export { MDCChipSetFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipSetFoundation;
//# sourceMappingURL=foundation.js.map