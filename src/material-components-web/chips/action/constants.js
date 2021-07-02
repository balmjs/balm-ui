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
 * CssClasses provides the classes to be queried and manipulated on the root.
 */
export var CssClasses;
(function (CssClasses) {
    CssClasses["PRIMARY_ACTION"] = "mdc-evolution-chip__action--primary";
    CssClasses["TRAILING_ACTION"] = "mdc-evolution-chip__action--trailing";
    CssClasses["CHIP_ROOT"] = "mdc-evolution-chip";
})(CssClasses || (CssClasses = {}));
/**
 * InteractionTrigger provides detail of the different triggers for action
 * interactions.
 */
export var InteractionTrigger;
(function (InteractionTrigger) {
    InteractionTrigger[InteractionTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    InteractionTrigger[InteractionTrigger["CLICK"] = 1] = "CLICK";
    InteractionTrigger[InteractionTrigger["BACKSPACE_KEY"] = 2] = "BACKSPACE_KEY";
    InteractionTrigger[InteractionTrigger["DELETE_KEY"] = 3] = "DELETE_KEY";
    InteractionTrigger[InteractionTrigger["SPACEBAR_KEY"] = 4] = "SPACEBAR_KEY";
    InteractionTrigger[InteractionTrigger["ENTER_KEY"] = 5] = "ENTER_KEY";
})(InteractionTrigger || (InteractionTrigger = {}));
/**
 * ActionType provides the different types of available actions.
 */
export var ActionType;
(function (ActionType) {
    ActionType[ActionType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ActionType[ActionType["PRIMARY"] = 1] = "PRIMARY";
    ActionType[ActionType["TRAILING"] = 2] = "TRAILING";
})(ActionType || (ActionType = {}));
/**
 * Events provides the different events emitted by the action.
 */
export var Events;
(function (Events) {
    Events["INTERACTION"] = "MDCChipAction:interaction";
    Events["NAVIGATION"] = "MDCChipAction:navigation";
})(Events || (Events = {}));
/**
 * FocusBehavior provides configurations for focusing or unfocusing an action.
 */
export var FocusBehavior;
(function (FocusBehavior) {
    FocusBehavior[FocusBehavior["FOCUSABLE"] = 0] = "FOCUSABLE";
    FocusBehavior[FocusBehavior["FOCUSABLE_AND_FOCUSED"] = 1] = "FOCUSABLE_AND_FOCUSED";
    FocusBehavior[FocusBehavior["NOT_FOCUSABLE"] = 2] = "NOT_FOCUSABLE";
})(FocusBehavior || (FocusBehavior = {}));
/**
 * Attributes provides the HTML attributes used by the foundation.
 */
export var Attributes;
(function (Attributes) {
    Attributes["ARIA_DISABLED"] = "aria-disabled";
    Attributes["ARIA_HIDDEN"] = "aria-hidden";
    Attributes["ARIA_SELECTED"] = "aria-selected";
    Attributes["DATA_DELETABLE"] = "data-mdc-deletable";
    Attributes["DISABLED"] = "disabled";
    Attributes["ROLE"] = "role";
    Attributes["TAB_INDEX"] = "tabindex";
})(Attributes || (Attributes = {}));
//# sourceMappingURL=constants.js.map