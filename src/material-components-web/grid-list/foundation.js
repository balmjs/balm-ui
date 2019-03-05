/**
 * @license
 * Copyright 2016 Google Inc.
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
import * as tslib_1 from "tslib";
import { MDCFoundation } from '../base/foundation';
import { strings } from './constants';
var MDCGridListFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCGridListFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCGridListFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, MDCGridListFoundation.defaultAdapter, adapter)) || this;
        _this.resizeFrame_ = 0;
        _this.resizeHandler_ = _this.alignCenter.bind(_this);
        return _this;
    }
    Object.defineProperty(MDCGridListFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCGridListFoundation, "defaultAdapter", {
        get: function () {
            return {
                deregisterResizeHandler: function () { return undefined; },
                getNumberOfTiles: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getOffsetWidthForTileAtIndex: function () { return 0; },
                registerResizeHandler: function () { return undefined; },
                setStyleForTilesElement: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCGridListFoundation.prototype.init = function () {
        this.alignCenter();
        this.adapter_.registerResizeHandler(this.resizeHandler_);
    };
    MDCGridListFoundation.prototype.destroy = function () {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    };
    MDCGridListFoundation.prototype.alignCenter = function () {
        var _this = this;
        if (this.resizeFrame_ !== 0) {
            cancelAnimationFrame(this.resizeFrame_);
        }
        this.resizeFrame_ = requestAnimationFrame(function () {
            _this.alignCenter_();
            _this.resizeFrame_ = 0;
        });
    };
    MDCGridListFoundation.prototype.alignCenter_ = function () {
        if (this.adapter_.getNumberOfTiles() === 0) {
            return;
        }
        var gridWidth = this.adapter_.getOffsetWidth();
        var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
        var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
        this.adapter_.setStyleForTilesElement('width', tilesWidth + "px");
    };
    return MDCGridListFoundation;
}(MDCFoundation));
export { MDCGridListFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCGridListFoundation;
//# sourceMappingURL=foundation.js.map