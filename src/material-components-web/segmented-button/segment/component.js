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
import { MDCComponent } from '../../base/component';
import { MDCRipple } from '../../ripple/component';
import { MDCRippleFoundation } from '../../ripple/foundation';
import { events } from './constants';
import { MDCSegmentedButtonSegmentFoundation } from './foundation';
/**
 * Implementation of MDCSegmentedButtonSegmentFoundation
 */
var MDCSegmentedButtonSegment = /** @class */ (function (_super) {
    __extends(MDCSegmentedButtonSegment, _super);
    function MDCSegmentedButtonSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCSegmentedButtonSegment.prototype, "ripple", {
        get: function () {
            return this.rippleComponent;
        },
        enumerable: false,
        configurable: true
    });
    MDCSegmentedButtonSegment.attachTo = function (root) {
        return new MDCSegmentedButtonSegment(root);
    };
    MDCSegmentedButtonSegment.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) {
            return new MDCRipple(el, foundation);
        }; }
        var rippleAdapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { computeBoundingRect: function () { return _this.foundation.getDimensions(); } });
        this.rippleComponent =
            rippleFactory(this.root, new MDCRippleFoundation(rippleAdapter));
    };
    MDCSegmentedButtonSegment.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick = function () {
            _this.foundation.handleClick();
        };
        this.listen(events.CLICK, this.handleClick);
    };
    MDCSegmentedButtonSegment.prototype.destroy = function () {
        this.ripple.destroy();
        this.unlisten(events.CLICK, this.handleClick);
        _super.prototype.destroy.call(this);
    };
    MDCSegmentedButtonSegment.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            isSingleSelect: function () {
                return _this.isSingleSelect;
            },
            getAttr: function (attrName) {
                return _this.root.getAttribute(attrName);
            },
            setAttr: function (attrName, value) {
                _this.root.setAttribute(attrName, value);
            },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) {
                return _this.root.classList.contains(className);
            },
            notifySelectedChange: function (selected) {
                _this.emit(events.SELECTED, {
                    index: _this.index,
                    selected: selected,
                    segmentId: _this.getSegmentId()
                }, true /* shouldBubble */);
            },
            getRootBoundingClientRect: function () {
                return _this.root.getBoundingClientRect();
            }
        };
        return new MDCSegmentedButtonSegmentFoundation(adapter);
    };
    /**
     * Sets segment's index value
     *
     * @param index Segment's index within wrapping segmented button
     */
    MDCSegmentedButtonSegment.prototype.setIndex = function (index) {
        this.index = index;
    };
    /**
     * Sets segment's isSingleSelect value
     *
     * @param isSingleSelect True if wrapping segmented button is single select
     */
    MDCSegmentedButtonSegment.prototype.setIsSingleSelect = function (isSingleSelect) {
        this.isSingleSelect = isSingleSelect;
    };
    /**
     * @return Returns true if segment is currently selected, otherwise returns
     * false
     */
    MDCSegmentedButtonSegment.prototype.isSelected = function () {
        return this.foundation.isSelected();
    };
    /**
     * Sets segment to be selected
     */
    MDCSegmentedButtonSegment.prototype.setSelected = function () {
        this.foundation.setSelected();
    };
    /**
     * Sets segment to be not selected
     */
    MDCSegmentedButtonSegment.prototype.setUnselected = function () {
        this.foundation.setUnselected();
    };
    /**
     * @return Returns segment's segmentId if it was set by client
     */
    MDCSegmentedButtonSegment.prototype.getSegmentId = function () {
        return this.foundation.getSegmentId();
    };
    return MDCSegmentedButtonSegment;
}(MDCComponent));
export { MDCSegmentedButtonSegment };
//# sourceMappingURL=component.js.map