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
/**
 * MDCChipActionCssClasses provides the classes to be queried and manipulated on
 * the root.
 */
export var MDCChipActionCssClasses;
(function (MDCChipActionCssClasses) {
    MDCChipActionCssClasses["PRIMARY_ACTION"] = "mdc-evolution-chip__action--primary";
    MDCChipActionCssClasses["TRAILING_ACTION"] = "mdc-evolution-chip__action--trailing";
    MDCChipActionCssClasses["CHIP_ROOT"] = "mdc-evolution-chip";
})(MDCChipActionCssClasses || (MDCChipActionCssClasses = {}));
/**
 * MDCChipActionInteractionTrigger provides detail of the different triggers for
 * action interactions.
 */
export var MDCChipActionInteractionTrigger;
(function (MDCChipActionInteractionTrigger) {
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["CLICK"] = 1] = "CLICK";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["BACKSPACE_KEY"] = 2] = "BACKSPACE_KEY";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["DELETE_KEY"] = 3] = "DELETE_KEY";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["SPACEBAR_KEY"] = 4] = "SPACEBAR_KEY";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["ENTER_KEY"] = 5] = "ENTER_KEY";
})(MDCChipActionInteractionTrigger || (MDCChipActionInteractionTrigger = {}));
/**
 * MDCChipActionType provides the different types of available actions.
 */
export var MDCChipActionType;
(function (MDCChipActionType) {
    MDCChipActionType[MDCChipActionType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MDCChipActionType[MDCChipActionType["PRIMARY"] = 1] = "PRIMARY";
    MDCChipActionType[MDCChipActionType["TRAILING"] = 2] = "TRAILING";
})(MDCChipActionType || (MDCChipActionType = {}));
/**
 * MDCChipActionEvents provides the different events emitted by the action.
 */
export var MDCChipActionEvents;
(function (MDCChipActionEvents) {
    MDCChipActionEvents["INTERACTION"] = "MDCChipAction:interaction";
    MDCChipActionEvents["NAVIGATION"] = "MDCChipAction:navigation";
})(MDCChipActionEvents || (MDCChipActionEvents = {}));
/**
 * MDCChipActionFocusBehavior provides configurations for focusing or unfocusing
 * an action.
 */
export var MDCChipActionFocusBehavior;
(function (MDCChipActionFocusBehavior) {
    MDCChipActionFocusBehavior[MDCChipActionFocusBehavior["FOCUSABLE"] = 0] = "FOCUSABLE";
    MDCChipActionFocusBehavior[MDCChipActionFocusBehavior["FOCUSABLE_AND_FOCUSED"] = 1] = "FOCUSABLE_AND_FOCUSED";
    MDCChipActionFocusBehavior[MDCChipActionFocusBehavior["NOT_FOCUSABLE"] = 2] = "NOT_FOCUSABLE";
})(MDCChipActionFocusBehavior || (MDCChipActionFocusBehavior = {}));
/**
 * MDCChipActionAttributes provides the HTML attributes used by the foundation.
 */
export var MDCChipActionAttributes;
(function (MDCChipActionAttributes) {
    MDCChipActionAttributes["ARIA_DISABLED"] = "aria-disabled";
    MDCChipActionAttributes["ARIA_HIDDEN"] = "aria-hidden";
    MDCChipActionAttributes["ARIA_SELECTED"] = "aria-selected";
    MDCChipActionAttributes["DATA_DELETABLE"] = "data-mdc-deletable";
    MDCChipActionAttributes["DISABLED"] = "disabled";
    MDCChipActionAttributes["ROLE"] = "role";
    MDCChipActionAttributes["TAB_INDEX"] = "tabindex";
})(MDCChipActionAttributes || (MDCChipActionAttributes = {}));
//# sourceMappingURL=constants.js.map