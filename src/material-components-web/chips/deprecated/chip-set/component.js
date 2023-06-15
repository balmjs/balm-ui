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
import { __extends, __values } from "tslib";
import { MDCComponent } from '../../../base/component';
import { announce } from '../../../dom/announce';
import { MDCChip } from '../chip/component';
import { MDCChipFoundation } from '../chip/foundation';
import { MDCChipSetFoundation } from './foundation';
var _a = MDCChipFoundation.strings, INTERACTION_EVENT = _a.INTERACTION_EVENT, SELECTION_EVENT = _a.SELECTION_EVENT, REMOVAL_EVENT = _a.REMOVAL_EVENT, NAVIGATION_EVENT = _a.NAVIGATION_EVENT;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;
var MDCChipSet = /** @class */ (function (_super) {
    __extends(MDCChipSet, _super);
    function MDCChipSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipSet.attachTo = function (root) {
        return new MDCChipSet(root);
    };
    Object.defineProperty(MDCChipSet.prototype, "chips", {
        get: function () {
            return this.chipsList.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
        /**
         * @return An array of the IDs of all selected chips.
         */
        get: function () {
            return this.foundation.getSelectedChipIds();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param chipFactory A function which creates a new MDCChip.
     */
    MDCChipSet.prototype.initialize = function (chipFactory) {
        if (chipFactory === void 0) { chipFactory = function (el) { return new MDCChip(el); }; }
        this.chipFactory = chipFactory;
        this.chipsList = this.instantiateChips(this.chipFactory);
    };
    MDCChipSet.prototype.initialSyncWithDOM = function () {
        var e_1, _a;
        var _this = this;
        try {
            for (var _b = __values(this.chipsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var chip = _c.value;
                if (chip.id && chip.selected) {
                    this.foundation.select(chip.id);
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
        this.handleChipInteraction = function (evt) {
            return _this.foundation.handleChipInteraction(evt.detail);
        };
        this.handleChipSelection = function (evt) {
            return _this.foundation.handleChipSelection(evt.detail);
        };
        this.handleChipRemoval = function (evt) {
            return _this.foundation.handleChipRemoval(evt.detail);
        };
        this.handleChipNavigation = function (evt) {
            return _this.foundation.handleChipNavigation(evt.detail);
        };
        this.listen(INTERACTION_EVENT, this.handleChipInteraction);
        this.listen(SELECTION_EVENT, this.handleChipSelection);
        this.listen(REMOVAL_EVENT, this.handleChipRemoval);
        this.listen(NAVIGATION_EVENT, this.handleChipNavigation);
    };
    MDCChipSet.prototype.destroy = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.chipsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var chip = _c.value;
                chip.destroy();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.unlisten(INTERACTION_EVENT, this.handleChipInteraction);
        this.unlisten(SELECTION_EVENT, this.handleChipSelection);
        this.unlisten(REMOVAL_EVENT, this.handleChipRemoval);
        this.unlisten(NAVIGATION_EVENT, this.handleChipNavigation);
        _super.prototype.destroy.call(this);
    };
    /**
     * Adds a new chip object to the chip set from the given chip element.
     */
    MDCChipSet.prototype.addChip = function (chipEl) {
        chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
        this.chipsList.push(this.chipFactory(chipEl));
    };
    MDCChipSet.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            announceMessage: function (message) {
                announce(message);
            },
            focusChipPrimaryActionAtIndex: function (index) {
                _this.chipsList[index].focusPrimaryAction();
            },
            focusChipTrailingActionAtIndex: function (index) {
                _this.chipsList[index].focusTrailingAction();
            },
            getChipListCount: function () { return _this.chips.length; },
            getIndexOfChipById: function (chipId) {
                return _this.findChipIndex(chipId);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            removeChipAtIndex: function (index) {
                if (index >= 0 && index < _this.chips.length) {
                    _this.chipsList[index].destroy();
                    _this.chipsList[index].remove();
                    _this.chipsList.splice(index, 1);
                }
            },
            removeFocusFromChipAtIndex: function (index) {
                _this.chipsList[index].removeFocus();
            },
            selectChipAtIndex: function (index, selected, shouldNotifyClients) {
                if (index >= 0 && index < _this.chips.length) {
                    _this.chipsList[index].setSelectedFromChipSet(selected, shouldNotifyClients);
                }
            },
        };
        return new MDCChipSetFoundation(adapter);
    };
    /**
     * Instantiates chip components on all of the chip set's child chip elements.
     */
    MDCChipSet.prototype.instantiateChips = function (chipFactory) {
        var chipElements = [].slice.call(this.root.querySelectorAll(CHIP_SELECTOR));
        return chipElements.map(function (el) {
            el.id = el.id || "mdc-chip-" + ++idCounter;
            return chipFactory(el);
        });
    };
    /**
     * Returns the index of the chip with the given id, or -1 if the chip does not exist.
     */
    MDCChipSet.prototype.findChipIndex = function (chipId) {
        for (var i = 0; i < this.chips.length; i++) {
            if (this.chipsList[i].id === chipId) {
                return i;
            }
        }
        return -1;
    };
    return MDCChipSet;
}(MDCComponent));
export { MDCChipSet };
//# sourceMappingURL=component.js.map