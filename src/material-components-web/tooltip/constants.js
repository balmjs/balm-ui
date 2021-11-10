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
var CssClasses;
(function (CssClasses) {
    CssClasses["RICH"] = "mdc-tooltip--rich";
    CssClasses["SHOWN"] = "mdc-tooltip--shown";
    CssClasses["SHOWING"] = "mdc-tooltip--showing";
    CssClasses["SHOWING_TRANSITION"] = "mdc-tooltip--showing-transition";
    CssClasses["HIDE"] = "mdc-tooltip--hide";
    CssClasses["HIDE_TRANSITION"] = "mdc-tooltip--hide-transition";
    CssClasses["MULTILINE_TOOLTIP"] = "mdc-tooltip--multiline";
    CssClasses["SURFACE"] = "mdc-tooltip__surface";
    CssClasses["SURFACE_ANIMATION"] = "mdc-tooltip__surface-animation";
    CssClasses["TOOLTIP_CARET_TOP"] = "mdc-tooltip__caret-surface-top";
    CssClasses["TOOLTIP_CARET_BOTTOM"] = "mdc-tooltip__caret-surface-bottom";
})(CssClasses || (CssClasses = {}));
var numbers = {
    BOUNDED_ANCHOR_GAP: 4,
    UNBOUNDED_ANCHOR_GAP: 8,
    MIN_VIEWPORT_TOOLTIP_THRESHOLD: 8,
    HIDE_DELAY_MS: 600,
    SHOW_DELAY_MS: 500,
    // LINT.IfChange(tooltip-dimensions)
    MIN_HEIGHT: 24,
    MAX_WIDTH: 200,
    // LINT.ThenChange(_tooltip.scss:tooltip-dimensions)
    CARET_INDENTATION: 24,
    // LINT.IfChange(tooltip-anim-scale)
    ANIMATION_SCALE: 0.8,
    // LINT.ThenChange(_tooltip.scss:tooltip-anim-scale)
};
var attributes = {
    ARIA_EXPANDED: 'aria-expanded',
    ARIA_HASPOPUP: 'aria-haspopup',
    PERSISTENT: 'data-mdc-tooltip-persistent',
    SCROLLABLE_ANCESTOR: 'tooltip-scrollable-ancestor',
    HAS_CARET: 'data-mdc-tooltip-has-caret',
};
var events = {
    HIDDEN: 'MDCTooltip:hidden',
};
/** Enum for possible tooltip positioning relative to its anchor element. */
var XPosition;
(function (XPosition) {
    XPosition[XPosition["DETECTED"] = 0] = "DETECTED";
    XPosition[XPosition["START"] = 1] = "START";
    // Note: CENTER is not valid for rich tooltips.
    XPosition[XPosition["CENTER"] = 2] = "CENTER";
    XPosition[XPosition["END"] = 3] = "END";
})(XPosition || (XPosition = {}));
var YPosition;
(function (YPosition) {
    YPosition[YPosition["DETECTED"] = 0] = "DETECTED";
    YPosition[YPosition["ABOVE"] = 1] = "ABOVE";
    YPosition[YPosition["BELOW"] = 2] = "BELOW";
})(YPosition || (YPosition = {}));
/**
 * Enum for possible anchor boundary types. This determines the gap between the
 * bottom of the anchor and the tooltip element.
 * Bounded anchors have an identifiable boundary (e.g. buttons).
 * Unbounded anchors don't have a visually declared boundary (e.g. plain text).
 */
var AnchorBoundaryType;
(function (AnchorBoundaryType) {
    AnchorBoundaryType[AnchorBoundaryType["BOUNDED"] = 0] = "BOUNDED";
    AnchorBoundaryType[AnchorBoundaryType["UNBOUNDED"] = 1] = "UNBOUNDED";
})(AnchorBoundaryType || (AnchorBoundaryType = {}));
var strings = {
    LEFT: 'left',
    RIGHT: 'right',
    CENTER: 'center',
    TOP: 'top',
    BOTTOM: 'bottom'
};
/**
 * Enum for possible positions of a tooltip with caret (this specifies the
 * positioning of the tooltip relative to the anchor -- the position of the
 * caret will follow that of the tooltip). This can NOT be combined with the
 * above X/YPosition options. Naming for the enums follows: (vertical
 * placement)_(horizontal placement).
 */
var PositionWithCaret;
(function (PositionWithCaret) {
    PositionWithCaret[PositionWithCaret["DETECTED"] = 0] = "DETECTED";
    PositionWithCaret[PositionWithCaret["ABOVE_START"] = 1] = "ABOVE_START";
    PositionWithCaret[PositionWithCaret["ABOVE_CENTER"] = 2] = "ABOVE_CENTER";
    PositionWithCaret[PositionWithCaret["ABOVE_END"] = 3] = "ABOVE_END";
    PositionWithCaret[PositionWithCaret["TOP_SIDE_START"] = 4] = "TOP_SIDE_START";
    PositionWithCaret[PositionWithCaret["CENTER_SIDE_START"] = 5] = "CENTER_SIDE_START";
    PositionWithCaret[PositionWithCaret["BOTTOM_SIDE_START"] = 6] = "BOTTOM_SIDE_START";
    PositionWithCaret[PositionWithCaret["TOP_SIDE_END"] = 7] = "TOP_SIDE_END";
    PositionWithCaret[PositionWithCaret["CENTER_SIDE_END"] = 8] = "CENTER_SIDE_END";
    PositionWithCaret[PositionWithCaret["BOTTOM_SIDE_END"] = 9] = "BOTTOM_SIDE_END";
    PositionWithCaret[PositionWithCaret["BELOW_START"] = 10] = "BELOW_START";
    PositionWithCaret[PositionWithCaret["BELOW_CENTER"] = 11] = "BELOW_CENTER";
    PositionWithCaret[PositionWithCaret["BELOW_END"] = 12] = "BELOW_END";
})(PositionWithCaret || (PositionWithCaret = {}));
var YPositionWithCaret;
(function (YPositionWithCaret) {
    YPositionWithCaret[YPositionWithCaret["ABOVE"] = 1] = "ABOVE";
    YPositionWithCaret[YPositionWithCaret["BELOW"] = 2] = "BELOW";
    YPositionWithCaret[YPositionWithCaret["SIDE_TOP"] = 3] = "SIDE_TOP";
    YPositionWithCaret[YPositionWithCaret["SIDE_CENTER"] = 4] = "SIDE_CENTER";
    YPositionWithCaret[YPositionWithCaret["SIDE_BOTTOM"] = 5] = "SIDE_BOTTOM";
})(YPositionWithCaret || (YPositionWithCaret = {}));
var XPositionWithCaret;
(function (XPositionWithCaret) {
    XPositionWithCaret[XPositionWithCaret["START"] = 1] = "START";
    XPositionWithCaret[XPositionWithCaret["CENTER"] = 2] = "CENTER";
    XPositionWithCaret[XPositionWithCaret["END"] = 3] = "END";
    XPositionWithCaret[XPositionWithCaret["SIDE_START"] = 4] = "SIDE_START";
    XPositionWithCaret[XPositionWithCaret["SIDE_END"] = 5] = "SIDE_END";
})(XPositionWithCaret || (XPositionWithCaret = {}));
export { CssClasses, numbers, attributes, events, XPosition, AnchorBoundaryType, YPosition, strings, PositionWithCaret, YPositionWithCaret, XPositionWithCaret };
//# sourceMappingURL=constants.js.map