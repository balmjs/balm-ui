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
import { AnimationFrame } from '../../animation/animationframe';
import { MDCFoundation } from '../../base/foundation';
import { KEY } from '../../dom/keyboard';
import { MDCChipActionFocusBehavior, MDCChipActionInteractionTrigger, MDCChipActionType } from '../action/constants';
import { MDCChipAnimation, MDCChipAttributes, MDCChipCssClasses, MDCChipEvents } from './constants';
var Direction;
(function (Direction) {
    Direction[Direction["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Direction[Direction["LEFT"] = 1] = "LEFT";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
})(Direction || (Direction = {}));
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["SELECTION"] = "selection";
    AnimationKeys["EXIT"] = "exit";
})(AnimationKeys || (AnimationKeys = {}));
/**
 * MDCChipFoundation provides a foundation for all chips.
 */
var MDCChipFoundation = /** @class */ (function (_super) {
    __extends(MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCChipFoundation.defaultAdapter), adapter)) || this;
        _this.animFrame = new AnimationFrame();
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                emitEvent: function () { return undefined; },
                getActions: function () { return []; },
                getAttribute: function () { return null; },
                getElementID: function () { return ''; },
                getOffsetWidth: function () { return 0; },
                hasClass: function () { return false; },
                isActionDisabled: function () { return false; },
                isActionFocusable: function () { return false; },
                isActionSelectable: function () { return false; },
                isActionSelected: function () { return false; },
                isRTL: function () { return false; },
                removeClass: function () { return undefined; },
                setActionDisabled: function () { return undefined; },
                setActionFocus: function () { return undefined; },
                setActionSelected: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipFoundation.prototype.destroy = function () {
        this.animFrame.cancelAll();
    };
    MDCChipFoundation.prototype.getElementID = function () {
        return this.adapter.getElementID();
    };
    MDCChipFoundation.prototype.setDisabled = function (isDisabled) {
        var e_1, _a;
        var actions = this.getActions();
        try {
            for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                var action = actions_1_1.value;
                this.adapter.setActionDisabled(action, isDisabled);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (isDisabled) {
            this.adapter.addClass(MDCChipCssClasses.DISABLED);
        }
        else {
            this.adapter.removeClass(MDCChipCssClasses.DISABLED);
        }
    };
    MDCChipFoundation.prototype.isDisabled = function () {
        var e_2, _a;
        var actions = this.getActions();
        try {
            for (var actions_2 = __values(actions), actions_2_1 = actions_2.next(); !actions_2_1.done; actions_2_1 = actions_2.next()) {
                var action = actions_2_1.value;
                if (this.adapter.isActionDisabled(action)) {
                    return true;
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
        return false;
    };
    MDCChipFoundation.prototype.getActions = function () {
        return this.adapter.getActions();
    };
    MDCChipFoundation.prototype.isActionFocusable = function (action) {
        return this.adapter.isActionFocusable(action);
    };
    MDCChipFoundation.prototype.isActionSelectable = function (action) {
        return this.adapter.isActionSelectable(action);
    };
    MDCChipFoundation.prototype.isActionSelected = function (action) {
        return this.adapter.isActionSelected(action);
    };
    MDCChipFoundation.prototype.setActionFocus = function (action, focus) {
        this.adapter.setActionFocus(action, focus);
    };
    MDCChipFoundation.prototype.setActionSelected = function (action, isSelected) {
        this.adapter.setActionSelected(action, isSelected);
        this.animateSelection(isSelected);
    };
    MDCChipFoundation.prototype.startAnimation = function (animation) {
        if (animation === MDCChipAnimation.ENTER) {
            this.adapter.addClass(MDCChipCssClasses.ENTER);
            return;
        }
        if (animation === MDCChipAnimation.EXIT) {
            this.adapter.addClass(MDCChipCssClasses.EXIT);
            return;
        }
    };
    MDCChipFoundation.prototype.handleAnimationEnd = function (event) {
        var _this = this;
        var animationName = event.animationName;
        if (animationName === MDCChipAnimation.ENTER) {
            this.adapter.removeClass(MDCChipCssClasses.ENTER);
            this.adapter.emitEvent(MDCChipEvents.ANIMATION, {
                chipID: this.getElementID(),
                animation: MDCChipAnimation.ENTER,
                addedAnnouncement: this.getAddedAnnouncement(),
                isComplete: true,
            });
            return;
        }
        if (animationName === MDCChipAnimation.EXIT) {
            this.adapter.removeClass(MDCChipCssClasses.EXIT);
            this.adapter.addClass(MDCChipCssClasses.HIDDEN);
            var width = this.adapter.getOffsetWidth();
            this.adapter.setStyleProperty('width', width + "px");
            // Wait two frames so the width gets applied correctly.
            this.animFrame.request(AnimationKeys.EXIT, function () {
                _this.animFrame.request(AnimationKeys.EXIT, function () {
                    _this.adapter.setStyleProperty('width', '0');
                });
            });
        }
    };
    MDCChipFoundation.prototype.handleTransitionEnd = function () {
        if (!this.adapter.hasClass(MDCChipCssClasses.HIDDEN))
            return;
        this.adapter.emitEvent(MDCChipEvents.ANIMATION, {
            chipID: this.getElementID(),
            animation: MDCChipAnimation.EXIT,
            removedAnnouncement: this.getRemovedAnnouncement(),
            isComplete: true,
        });
    };
    MDCChipFoundation.prototype.handleActionInteraction = function (_a) {
        var detail = _a.detail;
        var source = detail.source, actionID = detail.actionID;
        var isSelectable = this.adapter.isActionSelectable(source);
        var isSelected = this.adapter.isActionSelected(source);
        this.adapter.emitEvent(MDCChipEvents.INTERACTION, {
            chipID: this.getElementID(),
            shouldRemove: this.shouldRemove(detail),
            actionID: actionID,
            isSelectable: isSelectable,
            isSelected: isSelected,
            source: source,
        });
    };
    MDCChipFoundation.prototype.handleActionNavigation = function (_a) {
        var detail = _a.detail;
        var source = detail.source, key = detail.key;
        var isRTL = this.adapter.isRTL();
        var isTrailingActionFocusable = this.adapter.isActionFocusable(MDCChipActionType.TRAILING);
        var isPrimaryActionFocusable = this.adapter.isActionFocusable(MDCChipActionType.PRIMARY);
        var dir = this.directionFromKey(key, isRTL);
        var shouldNavigateToTrailing = source === MDCChipActionType.PRIMARY &&
            dir === Direction.RIGHT && isTrailingActionFocusable;
        var shouldNavigateToPrimary = source === MDCChipActionType.TRAILING &&
            dir === Direction.LEFT && isPrimaryActionFocusable;
        if (shouldNavigateToTrailing) {
            this.navigateActions({ from: source, to: MDCChipActionType.TRAILING });
            return;
        }
        if (shouldNavigateToPrimary) {
            this.navigateActions({ from: source, to: MDCChipActionType.PRIMARY });
            return;
        }
        this.adapter.emitEvent(MDCChipEvents.NAVIGATION, {
            chipID: this.getElementID(),
            isRTL: isRTL,
            source: source,
            key: key,
        });
    };
    MDCChipFoundation.prototype.directionFromKey = function (key, isRTL) {
        var isLeftKey = key === KEY.ARROW_LEFT;
        var isRightKey = key === KEY.ARROW_RIGHT;
        if (!isRTL && isLeftKey || isRTL && isRightKey) {
            return Direction.LEFT;
        }
        if (!isRTL && isRightKey || isRTL && isLeftKey) {
            return Direction.RIGHT;
        }
        return Direction.UNSPECIFIED;
    };
    MDCChipFoundation.prototype.navigateActions = function (nav) {
        this.adapter.setActionFocus(nav.from, MDCChipActionFocusBehavior.NOT_FOCUSABLE);
        this.adapter.setActionFocus(nav.to, MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
    };
    MDCChipFoundation.prototype.shouldRemove = function (_a) {
        var source = _a.source, trigger = _a.trigger;
        if (trigger === MDCChipActionInteractionTrigger.BACKSPACE_KEY ||
            trigger === MDCChipActionInteractionTrigger.DELETE_KEY) {
            return true;
        }
        return source === MDCChipActionType.TRAILING;
    };
    MDCChipFoundation.prototype.getRemovedAnnouncement = function () {
        var msg = this.adapter.getAttribute(MDCChipAttributes.DATA_REMOVED_ANNOUNCEMENT);
        return msg || undefined;
    };
    MDCChipFoundation.prototype.getAddedAnnouncement = function () {
        var msg = this.adapter.getAttribute(MDCChipAttributes.DATA_ADDED_ANNOUNCEMENT);
        return msg || undefined;
    };
    MDCChipFoundation.prototype.animateSelection = function (isSelected) {
        var _this = this;
        this.resetAnimationStyles();
        // Wait two frames to ensure the animation classes are unset
        this.animFrame.request(AnimationKeys.SELECTION, function () {
            _this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.updateSelectionStyles(isSelected);
            });
        });
    };
    MDCChipFoundation.prototype.resetAnimationStyles = function () {
        this.adapter.removeClass(MDCChipCssClasses.SELECTING);
        this.adapter.removeClass(MDCChipCssClasses.DESELECTING);
        this.adapter.removeClass(MDCChipCssClasses.SELECTING_WITH_PRIMARY_ICON);
        this.adapter.removeClass(MDCChipCssClasses.DESELECTING_WITH_PRIMARY_ICON);
    };
    MDCChipFoundation.prototype.updateSelectionStyles = function (isSelected) {
        var _this = this;
        var hasIcon = this.adapter.hasClass(MDCChipCssClasses.WITH_PRIMARY_ICON);
        if (hasIcon && isSelected) {
            this.adapter.addClass(MDCChipCssClasses.SELECTING_WITH_PRIMARY_ICON);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.addClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (hasIcon && !isSelected) {
            this.adapter.addClass(MDCChipCssClasses.DESELECTING_WITH_PRIMARY_ICON);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.removeClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (isSelected) {
            this.adapter.addClass(MDCChipCssClasses.SELECTING);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.addClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (!isSelected) {
            this.adapter.addClass(MDCChipCssClasses.DESELECTING);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.removeClass(MDCChipCssClasses.SELECTED);
            });
            return;
        }
    };
    return MDCChipFoundation;
}(MDCFoundation));
export { MDCChipFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipFoundation;
//# sourceMappingURL=foundation.js.map