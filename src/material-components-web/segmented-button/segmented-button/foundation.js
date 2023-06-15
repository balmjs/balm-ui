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
import { cssClasses } from './constants';
var MDCSegmentedButtonFoundation = /** @class */ (function (_super) {
    __extends(MDCSegmentedButtonFoundation, _super);
    function MDCSegmentedButtonFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCSegmentedButtonFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSegmentedButtonFoundation, "defaultAdapter", {
        get: function () {
            return {
                hasClass: function () { return false; }, getSegments: function () { return []; },
                selectSegment: function () { return undefined; },
                unselectSegment: function () { return undefined; },
                notifySelectedChange: function () { return undefined; }
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets identified child segment to be selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButtonFoundation.prototype.selectSegment = function (indexOrSegmentId) {
        this.adapter.selectSegment(indexOrSegmentId);
    };
    /**
     * Sets identified child segment to be not selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButtonFoundation.prototype.unselectSegment = function (indexOrSegmentId) {
        this.adapter.unselectSegment(indexOrSegmentId);
    };
    /**
     * @return Returns currently selected child segments as readonly list of
     * SegmentDetails
     */
    MDCSegmentedButtonFoundation.prototype.getSelectedSegments = function () {
        return this.adapter.getSegments().filter(function (segmentDetail) { return segmentDetail.selected; });
    };
    /**
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     * @return Returns true if identified child segment is currently selected,
     * otherwise returns false
     */
    MDCSegmentedButtonFoundation.prototype.isSegmentSelected = function (indexOrSegmentId) {
        return this.adapter.getSegments().some(function (segmentDetail) { return (segmentDetail.index === indexOrSegmentId ||
            segmentDetail.segmentId === indexOrSegmentId) &&
            segmentDetail.selected; });
    };
    /**
     * @return Returns true if segmented button is single select, otherwise
     * returns false
     */
    MDCSegmentedButtonFoundation.prototype.isSingleSelect = function () {
        return this.adapter.hasClass(cssClasses.SINGLE_SELECT);
    };
    /**
     * Called when child segment's selected status may have changed. If segmented
     * button is single select, unselects all child segments other than identified
     * child segment. Finally, emits event to client.
     *
     * @param detail Child segment affected represented as SegmentDetail
     * @event change With detail - SegmentDetail
     */
    MDCSegmentedButtonFoundation.prototype.handleSelected = function (detail) {
        if (this.isSingleSelect()) {
            this.unselectPrevSelected(detail.index);
        }
        this.adapter.notifySelectedChange(detail);
    };
    /**
     * Sets all child segments to be not selected except for child segment
     * identified by index
     *
     * @param index Index of child segment to not unselect
     */
    MDCSegmentedButtonFoundation.prototype.unselectPrevSelected = function (index) {
        var e_1, _a;
        try {
            for (var _b = __values(this.getSelectedSegments()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selectedSegment = _c.value;
                if (selectedSegment.index !== index) {
                    this.unselectSegment(selectedSegment.index);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return MDCSegmentedButtonFoundation;
}(MDCFoundation));
export { MDCSegmentedButtonFoundation };
//# sourceMappingURL=foundation.js.map