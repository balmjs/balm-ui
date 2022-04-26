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
/** Banner element classes. */
export var cssClasses = {
    CLOSING: 'mdc-banner--closing',
    OPEN: 'mdc-banner--open',
    OPENING: 'mdc-banner--opening',
};
/** Banner numbers. */
export var numbers = {
    BANNER_ANIMATION_CLOSE_TIME_MS: 250,
    BANNER_ANIMATION_OPEN_TIME_MS: 300,
};
/** Banner events. */
export var events = {
    CLOSED: 'MDCBanner:closed',
    CLOSING: 'MDCBanner:closing',
    OPENED: 'MDCBanner:opened',
    OPENING: 'MDCBanner:opening',
    ACTION_CLICKED: 'MDCBanner:actionClicked',
};
/** Banner selectors. */
export var selectors = {
    CONTENT: '.mdc-banner__content',
    PRIMARY_ACTION: '.mdc-banner__primary-action',
    SECONDARY_ACTION: '.mdc-banner__secondary-action',
    TEXT: '.mdc-banner__text',
};
/** Reason as to why the banner was closed. */
export var CloseReason;
(function (CloseReason) {
    // Indicates the banner was closed via primary action button.
    CloseReason[CloseReason["PRIMARY"] = 0] = "PRIMARY";
    // Indicates the banner was closed via secondary action button.
    CloseReason[CloseReason["SECONDARY"] = 1] = "SECONDARY";
    // Will never be used by the component. Provided for custom handling of
    // programmatic closing of the banner.
    CloseReason[CloseReason["UNSPECIFIED"] = 2] = "UNSPECIFIED";
})(CloseReason || (CloseReason = {}));
/**
 * Payload of actionClicked events to signify which action emitted the event.
 */
export var Action;
(function (Action) {
    Action[Action["PRIMARY"] = 0] = "PRIMARY";
    Action[Action["SECONDARY"] = 1] = "SECONDARY";
    Action[Action["UNKNOWN"] = 2] = "UNKNOWN";
})(Action || (Action = {}));
//# sourceMappingURL=constants.js.map