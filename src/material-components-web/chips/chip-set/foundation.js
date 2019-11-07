/**
 * @license
 * Copyright 2017 Google Inc.
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
import { MDCFoundation } from '../../base/foundation';
import { Direction, EventSource, jumpChipKeys, navigationKeys, strings as chipStrings } from '../chip/constants';
import { cssClasses, strings } from './constants';
var MDCChipSetFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */
        _this.selectedChipIds_ = [];
        return _this;
    }
    Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                focusChipPrimaryActionAtIndex: function () { return undefined; },
                focusChipTrailingActionAtIndex: function () { return undefined; },
                getChipListCount: function () { return -1; },
                getIndexOfChipById: function () { return -1; },
                hasClass: function () { return false; },
                isRTL: function () { return false; },
                removeChipAtIndex: function () { return undefined; },
                removeFocusFromChipAtIndex: function () { return undefined; },
                selectChipAtIndex: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns an array of the IDs of all selected chips.
     */
    MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice();
    };
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     * Does not notify clients of the updated selection state.
     */
    MDCChipSetFoundation.prototype.select = function (chipId) {
        this.select_(chipId, false);
    };
    /**
     * Handles a chip interaction event
     */
    MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
        var index = this.adapter_.getIndexOfChipById(chipId);
        this.removeFocusFromChipsExcept_(index);
        if (this.adapter_.hasClass(cssClasses.CHOICE) || this.adapter_.hasClass(cssClasses.FILTER)) {
            this.toggleSelect_(chipId);
        }
    };
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected, shouldIgnore) {
        // Early exit if we should ignore the event
        if (shouldIgnore) {
            return;
        }
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;
        if (selected && !chipIsSelected) {
            this.select(chipId);
        }
        else if (!selected && chipIsSelected) {
            this.deselect_(chipId);
        }
    };
    /**
     * Handles the event when a chip is removed.
     */
    MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
        var index = this.adapter_.getIndexOfChipById(chipId);
        this.deselectAndNotifyClients_(chipId);
        this.adapter_.removeChipAtIndex(index);
        var maxIndex = this.adapter_.getChipListCount() - 1;
        var nextIndex = Math.min(index, maxIndex);
        this.removeFocusFromChipsExcept_(nextIndex);
        // After removing a chip, we should focus the trailing action for the next chip.
        this.adapter_.focusChipTrailingActionAtIndex(nextIndex);
    };
    /**
     * Handles a chip navigation event.
     */
    MDCChipSetFoundation.prototype.handleChipNavigation = function (chipId, key, source) {
        var maxIndex = this.adapter_.getChipListCount() - 1;
        var index = this.adapter_.getIndexOfChipById(chipId);
        // Early exit if the index is out of range or the key is unusable
        if (index === -1 || !navigationKeys.has(key)) {
            return;
        }
        var isRTL = this.adapter_.isRTL();
        var shouldIncrement = key === chipStrings.ARROW_RIGHT_KEY && !isRTL
            || key === chipStrings.ARROW_LEFT_KEY && isRTL
            || key === chipStrings.ARROW_DOWN_KEY;
        var isHome = key === chipStrings.HOME_KEY;
        var isEnd = key === chipStrings.END_KEY;
        if (shouldIncrement) {
            index++;
        }
        else if (isHome) {
            index = 0;
        }
        else if (isEnd) {
            index = maxIndex;
        }
        else {
            index--;
        }
        // Early exit if the index is out of bounds
        if (index < 0 || index > maxIndex) {
            return;
        }
        this.removeFocusFromChipsExcept_(index);
        this.focusChipAction_(index, key, source);
    };
    MDCChipSetFoundation.prototype.focusChipAction_ = function (index, key, source) {
        var shouldJumpChips = jumpChipKeys.has(key);
        if (shouldJumpChips && source === EventSource.PRIMARY) {
            return this.adapter_.focusChipPrimaryActionAtIndex(index);
        }
        if (shouldJumpChips && source === EventSource.TRAILING) {
            return this.adapter_.focusChipTrailingActionAtIndex(index);
        }
        var dir = this.getDirection_(key);
        if (dir === Direction.LEFT) {
            return this.adapter_.focusChipTrailingActionAtIndex(index);
        }
        if (dir === Direction.RIGHT) {
            return this.adapter_.focusChipPrimaryActionAtIndex(index);
        }
    };
    MDCChipSetFoundation.prototype.getDirection_ = function (key) {
        var isRTL = this.adapter_.isRTL();
        if (key === chipStrings.ARROW_LEFT_KEY && !isRTL || key === chipStrings.ARROW_RIGHT_KEY && isRTL) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    /**
     * Deselects the chip with the given id and optionally notifies clients.
     */
    MDCChipSetFoundation.prototype.deselect_ = function (chipId, shouldNotifyClients) {
        if (shouldNotifyClients === void 0) { shouldNotifyClients = false; }
        var index = this.selectedChipIds_.indexOf(chipId);
        if (index >= 0) {
            this.selectedChipIds_.splice(index, 1);
            var chipIndex = this.adapter_.getIndexOfChipById(chipId);
            this.adapter_.selectChipAtIndex(chipIndex, /** isSelected */ false, shouldNotifyClients);
        }
    };
    /**
     * Deselects the chip with the given id and notifies clients.
     */
    MDCChipSetFoundation.prototype.deselectAndNotifyClients_ = function (chipId) {
        this.deselect_(chipId, true);
    };
    /**
     * Toggles selection of the chip with the given id.
     */
    MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            this.deselectAndNotifyClients_(chipId);
        }
        else {
            this.selectAndNotifyClients_(chipId);
        }
    };
    MDCChipSetFoundation.prototype.removeFocusFromChipsExcept_ = function (index) {
        var chipCount = this.adapter_.getChipListCount();
        for (var i = 0; i < chipCount; i++) {
            if (i !== index) {
                this.adapter_.removeFocusFromChipAtIndex(i);
            }
        }
    };
    MDCChipSetFoundation.prototype.selectAndNotifyClients_ = function (chipId) {
        this.select_(chipId, true);
    };
    MDCChipSetFoundation.prototype.select_ = function (chipId, shouldNotifyClients) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            return;
        }
        if (this.adapter_.hasClass(cssClasses.CHOICE) && this.selectedChipIds_.length > 0) {
            var previouslySelectedChip = this.selectedChipIds_[0];
            var previouslySelectedIndex = this.adapter_.getIndexOfChipById(previouslySelectedChip);
            this.selectedChipIds_ = [];
            this.adapter_.selectChipAtIndex(previouslySelectedIndex, /** isSelected */ false, shouldNotifyClients);
        }
        this.selectedChipIds_.push(chipId);
        var index = this.adapter_.getIndexOfChipById(chipId);
        this.adapter_.selectChipAtIndex(index, /** isSelected */ true, shouldNotifyClients);
    };
    return MDCChipSetFoundation;
}(MDCFoundation));
export { MDCChipSetFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipSetFoundation;
//# sourceMappingURL=foundation.js.map