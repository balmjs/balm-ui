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
import { MDCFoundation } from '../../base/foundation';
import { attributes, booleans, cssClasses } from './constants';
var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCSegmentedButtonSegmentFoundation = /** @class */ (function (_super) {
    __extends(MDCSegmentedButtonSegmentFoundation, _super);
    function MDCSegmentedButtonSegmentFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCSegmentedButtonSegmentFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSegmentedButtonSegmentFoundation, "defaultAdapter", {
        get: function () {
            return {
                isSingleSelect: function () { return false; }, getAttr: function () { return ''; }, setAttr: function () { return undefined; },
                addClass: function () { return undefined; }, removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifySelectedChange: function () { return undefined; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @return Returns true if segment is currently selected, otherwise returns
     * false
     */
    MDCSegmentedButtonSegmentFoundation.prototype.isSelected = function () {
        return this.adapter.hasClass(cssClasses.SELECTED);
    };
    /**
     * Sets segment to be selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setSelected = function () {
        this.adapter.addClass(cssClasses.SELECTED);
        this.setAriaAttr(booleans.TRUE);
    };
    /**
     * Sets segment to be not selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setUnselected = function () {
        this.adapter.removeClass(cssClasses.SELECTED);
        this.setAriaAttr(booleans.FALSE);
    };
    /**
     * @return Returns segment's segmentId if it was set by client
     */
    MDCSegmentedButtonSegmentFoundation.prototype.getSegmentId = function () {
        var _a;
        return (_a = this.adapter.getAttr(attributes.DATA_SEGMENT_ID)) !== null && _a !== void 0 ? _a : undefined;
    };
    /**
     * Called when segment is clicked. If the wrapping segmented button is single
     * select, doesn't allow segment to be set to not selected. Otherwise, toggles
     * segment's selected status. Finally, emits event to wrapping segmented
     * button.
     *
     * @event selected With detail - SegmentDetail
     */
    MDCSegmentedButtonSegmentFoundation.prototype.handleClick = function () {
        if (this.adapter.isSingleSelect()) {
            this.setSelected();
        }
        else {
            this.toggleSelection();
        }
        this.adapter.notifySelectedChange(this.isSelected());
    };
    /**
     * @return Returns bounding rectangle for ripple effect
     */
    MDCSegmentedButtonSegmentFoundation.prototype.getDimensions = function () {
        return this.adapter.getRootBoundingClientRect();
    };
    /**
     * Sets segment from not selected to selected, or selected to not selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.toggleSelection = function () {
        if (this.isSelected()) {
            this.setUnselected();
        }
        else {
            this.setSelected();
        }
    };
    /**
     * Sets appropriate aria attribute, based on wrapping segmented button's
     * single selected value, to new value
     *
     * @param value Value that represents selected status
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setAriaAttr = function (value) {
        if (this.adapter.isSingleSelect()) {
            this.adapter.setAttr(attributes.ARIA_CHECKED, value);
        }
        else {
            this.adapter.setAttr(attributes.ARIA_PRESSED, value);
        }
    };
    return MDCSegmentedButtonSegmentFoundation;
}(MDCFoundation));
export { MDCSegmentedButtonSegmentFoundation };
//# sourceMappingURL=foundation.js.map