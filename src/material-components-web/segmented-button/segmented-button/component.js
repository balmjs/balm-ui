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
import { __extends, __values } from "tslib";
import { MDCComponent } from '../../base/component';
import { MDCSegmentedButtonSegment } from '../segment/component';
import { events, selectors } from './constants';
import { MDCSegmentedButtonFoundation } from './foundation';
var MDCSegmentedButton = /** @class */ (function (_super) {
    __extends(MDCSegmentedButton, _super);
    function MDCSegmentedButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSegmentedButton.attachTo = function (root) {
        return new MDCSegmentedButton(root);
    };
    Object.defineProperty(MDCSegmentedButton.prototype, "segments", {
        get: function () {
            return this.segmentsList.slice();
        },
        enumerable: false,
        configurable: true
    });
    // initialSyncWithDOM
    MDCSegmentedButton.prototype.initialize = function (segmentFactory) {
        if (segmentFactory === void 0) { segmentFactory = function (el) {
            return new MDCSegmentedButtonSegment(el);
        }; }
        this.segmentFactory = segmentFactory;
        this.segmentsList = this.instantiateSegments(this.segmentFactory);
    };
    /**
     * @param segmentFactory Factory to create new child segments
     * @return Returns list of child segments found in DOM
     */
    MDCSegmentedButton.prototype.instantiateSegments = function (segmentFactory) {
        var segmentElements = [].slice.call(this.root.querySelectorAll(selectors.SEGMENT));
        return segmentElements.map(function (el) { return segmentFactory(el); });
    };
    MDCSegmentedButton.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleSelected = function (event) {
            _this.foundation.handleSelected(event.detail);
        };
        this.listen(events.SELECTED, this.handleSelected);
        var isSingleSelect = this.foundation.isSingleSelect();
        for (var i = 0; i < this.segmentsList.length; i++) {
            var segment = this.segmentsList[i];
            segment.setIndex(i);
            segment.setIsSingleSelect(isSingleSelect);
        }
        var selectedSegments = this.segmentsList.filter(function (segment) { return segment.isSelected(); });
        if (isSingleSelect && selectedSegments.length === 0 &&
            this.segmentsList.length > 0) {
            throw new Error('No segment selected in singleSelect mdc-segmented-button');
        }
        else if (isSingleSelect && selectedSegments.length > 1) {
            throw new Error('Multiple segments selected in singleSelect mdc-segmented-button');
        }
    };
    MDCSegmentedButton.prototype.destroy = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.segmentsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var segment = _c.value;
                segment.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.unlisten(events.SELECTED, this.handleSelected);
        _super.prototype.destroy.call(this);
    };
    MDCSegmentedButton.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            hasClass: function (className) {
                return _this.root.classList.contains(className);
            },
            getSegments: function () {
                return _this.mappedSegments();
            },
            selectSegment: function (indexOrSegmentId) {
                var segmentDetail = _this.mappedSegments().find(function (detail) { return detail.index === indexOrSegmentId ||
                    detail.segmentId === indexOrSegmentId; });
                if (segmentDetail) {
                    _this.segmentsList[segmentDetail.index].setSelected();
                }
            },
            unselectSegment: function (indexOrSegmentId) {
                var segmentDetail = _this.mappedSegments().find(function (detail) { return detail.index === indexOrSegmentId ||
                    detail.segmentId === indexOrSegmentId; });
                if (segmentDetail) {
                    _this.segmentsList[segmentDetail.index].setUnselected();
                }
            },
            notifySelectedChange: function (detail) {
                _this.emit(events.CHANGE, detail, true /* shouldBubble */);
            }
        };
        return new MDCSegmentedButtonFoundation(adapter);
    };
    /**
     * @return Returns readonly list of selected child segments as SegmentDetails
     */
    MDCSegmentedButton.prototype.getSelectedSegments = function () {
        return this.foundation.getSelectedSegments();
    };
    /**
     * Sets identified segment to be selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButton.prototype.selectSegment = function (indexOrSegmentId) {
        this.foundation.selectSegment(indexOrSegmentId);
    };
    /**
     * Sets identified segment to be not selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButton.prototype.unselectSegment = function (indexOrSegmentId) {
        this.foundation.unselectSegment(indexOrSegmentId);
    };
    /**
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     * @return Returns true if identified child segment is currently selected,
     * otherwise returns false
     */
    MDCSegmentedButton.prototype.isSegmentSelected = function (indexOrSegmentId) {
        return this.foundation.isSegmentSelected(indexOrSegmentId);
    };
    /**
     * @return Returns child segments mapped to readonly SegmentDetail list
     */
    MDCSegmentedButton.prototype.mappedSegments = function () {
        return this.segmentsList.map(function (segment, index) {
            return {
                index: index,
                selected: segment.isSelected(),
                segmentId: segment.getSegmentId()
            };
        });
    };
    return MDCSegmentedButton;
}(MDCComponent));
export { MDCSegmentedButton };
//# sourceMappingURL=component.js.map