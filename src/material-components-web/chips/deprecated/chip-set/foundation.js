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
import { __assign, __extends } from "tslib";
import { MDCFoundation } from '../../../base/foundation';
import { Direction, EventSource, jumpChipKeys, navigationKeys, strings as chipStrings } from '../chip/constants';
import { cssClasses, strings } from './constants';
var MDCChipSetFoundation = /** @class */ (function (_super) {
    __extends(MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCChipSetFoundation.defaultAdapter), adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */
        _this.selectedChipIds = [];
        return _this;
    }
    Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                announceMessage: function () { return undefined; },
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
        enumerable: false,
        configurable: true
    });
    /**
     * Returns an array of the IDs of all selected chips.
     */
    MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds.slice();
    };
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     * Does not notify clients of the updated selection state.
     */
    MDCChipSetFoundation.prototype.select = function (chipId) {
        this.selectImpl(chipId, false);
    };
    /**
     * Handles a chip interaction event
     */
    MDCChipSetFoundation.prototype.handleChipInteraction = function (_a) {
        var chipId = _a.chipId;
        var index = this.adapter.getIndexOfChipById(chipId);
        this.removeFocusFromChipsExcept(index);
        if (this.adapter.hasClass(cssClasses.CHOICE) ||
            this.adapter.hasClass(cssClasses.FILTER)) {
            this.toggleSelect(chipId);
        }
    };
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    MDCChipSetFoundation.prototype.handleChipSelection = function (_a) {
        var chipId = _a.chipId, selected = _a.selected, shouldIgnore = _a.shouldIgnore;
        // Early exit if we should ignore the event
        if (shouldIgnore) {
            return;
        }
        var chipIsSelected = this.selectedChipIds.indexOf(chipId) >= 0;
        if (selected && !chipIsSelected) {
            this.select(chipId);
        }
        else if (!selected && chipIsSelected) {
            this.deselectImpl(chipId);
        }
    };
    /**
     * Handles the event when a chip is removed.
     */
    MDCChipSetFoundation.prototype.handleChipRemoval = function (_a) {
        var chipId = _a.chipId, removedAnnouncement = _a.removedAnnouncement;
        if (removedAnnouncement) {
            this.adapter.announceMessage(removedAnnouncement);
        }
        var index = this.adapter.getIndexOfChipById(chipId);
        this.deselectAndNotifyClients(chipId);
        this.adapter.removeChipAtIndex(index);
        var maxIndex = this.adapter.getChipListCount() - 1;
        if (maxIndex < 0) {
            return;
        }
        var nextIndex = Math.min(index, maxIndex);
        this.removeFocusFromChipsExcept(nextIndex);
        // After removing a chip, we should focus the trailing action for the next chip.
        this.adapter.focusChipTrailingActionAtIndex(nextIndex);
    };
    /**
     * Handles a chip navigation event.
     */
    MDCChipSetFoundation.prototype.handleChipNavigation = function (_a) {
        var chipId = _a.chipId, key = _a.key, source = _a.source;
        var maxIndex = this.adapter.getChipListCount() - 1;
        var index = this.adapter.getIndexOfChipById(chipId);
        // Early exit if the index is out of range or the key is unusable
        if (index === -1 || !navigationKeys.has(key)) {
            return;
        }
        var isRTL = this.adapter.isRTL();
        var isLeftKey = key === chipStrings.ARROW_LEFT_KEY ||
            key === chipStrings.IE_ARROW_LEFT_KEY;
        var isRightKey = key === chipStrings.ARROW_RIGHT_KEY ||
            key === chipStrings.IE_ARROW_RIGHT_KEY;
        var isDownKey = key === chipStrings.ARROW_DOWN_KEY ||
            key === chipStrings.IE_ARROW_DOWN_KEY;
        var shouldIncrement = !isRTL && isRightKey || isRTL && isLeftKey || isDownKey;
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
        this.removeFocusFromChipsExcept(index);
        this.focusChipAction(index, key, source);
    };
    MDCChipSetFoundation.prototype.focusChipAction = function (index, key, source) {
        var shouldJumpChips = jumpChipKeys.has(key);
        if (shouldJumpChips && source === EventSource.PRIMARY) {
            return this.adapter.focusChipPrimaryActionAtIndex(index);
        }
        if (shouldJumpChips && source === EventSource.TRAILING) {
            return this.adapter.focusChipTrailingActionAtIndex(index);
        }
        var dir = this.getDirection(key);
        if (dir === Direction.LEFT) {
            return this.adapter.focusChipTrailingActionAtIndex(index);
        }
        if (dir === Direction.RIGHT) {
            return this.adapter.focusChipPrimaryActionAtIndex(index);
        }
    };
    MDCChipSetFoundation.prototype.getDirection = function (key) {
        var isRTL = this.adapter.isRTL();
        var isLeftKey = key === chipStrings.ARROW_LEFT_KEY ||
            key === chipStrings.IE_ARROW_LEFT_KEY;
        var isRightKey = key === chipStrings.ARROW_RIGHT_KEY ||
            key === chipStrings.IE_ARROW_RIGHT_KEY;
        if (!isRTL && isLeftKey || isRTL && isRightKey) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    /**
     * Deselects the chip with the given id and optionally notifies clients.
     */
    MDCChipSetFoundation.prototype.deselectImpl = function (chipId, shouldNotifyClients) {
        if (shouldNotifyClients === void 0) { shouldNotifyClients = false; }
        var index = this.selectedChipIds.indexOf(chipId);
        if (index >= 0) {
            this.selectedChipIds.splice(index, 1);
            var chipIndex = this.adapter.getIndexOfChipById(chipId);
            this.adapter.selectChipAtIndex(chipIndex, /** isSelected */ false, shouldNotifyClients);
        }
    };
    /**
     * Deselects the chip with the given id and notifies clients.
     */
    MDCChipSetFoundation.prototype.deselectAndNotifyClients = function (chipId) {
        this.deselectImpl(chipId, true);
    };
    /**
     * Toggles selection of the chip with the given id.
     */
    MDCChipSetFoundation.prototype.toggleSelect = function (chipId) {
        if (this.selectedChipIds.indexOf(chipId) >= 0) {
            this.deselectAndNotifyClients(chipId);
        }
        else {
            this.selectAndNotifyClients(chipId);
        }
    };
    MDCChipSetFoundation.prototype.removeFocusFromChipsExcept = function (index) {
        var chipCount = this.adapter.getChipListCount();
        for (var i = 0; i < chipCount; i++) {
            if (i !== index) {
                this.adapter.removeFocusFromChipAtIndex(i);
            }
        }
    };
    MDCChipSetFoundation.prototype.selectAndNotifyClients = function (chipId) {
        this.selectImpl(chipId, true);
    };
    MDCChipSetFoundation.prototype.selectImpl = function (chipId, shouldNotifyClients) {
        if (this.selectedChipIds.indexOf(chipId) >= 0) {
            return;
        }
        if (this.adapter.hasClass(cssClasses.CHOICE) &&
            this.selectedChipIds.length > 0) {
            var previouslySelectedChip = this.selectedChipIds[0];
            var previouslySelectedIndex = this.adapter.getIndexOfChipById(previouslySelectedChip);
            this.selectedChipIds = [];
            this.adapter.selectChipAtIndex(previouslySelectedIndex, /** isSelected */ false, shouldNotifyClients);
        }
        this.selectedChipIds.push(chipId);
        var index = this.adapter.getIndexOfChipById(chipId);
        this.adapter.selectChipAtIndex(index, /** isSelected */ true, shouldNotifyClients);
    };
    return MDCChipSetFoundation;
}(MDCFoundation));
export { MDCChipSetFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipSetFoundation;
//# sourceMappingURL=foundation.js.map