/**
 * @license
 * Copyright 2018 Google Inc.
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
import { __extends } from "tslib";
import { MDCComponent } from '../../base/component';
import { announce } from '../../dom/announce';
import { MDCChip } from '../chip/component';
import { MDCChipEvents } from '../chip/constants';
import { MDCChipSetCssClasses } from './constants';
import { MDCChipSetFoundation } from './foundation';
/**
 * MDCChip provides component encapsulation of the foundation implementation.
 */
var MDCChipSet = /** @class */ (function (_super) {
    __extends(MDCChipSet, _super);
    function MDCChipSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipSet.attachTo = function (root) {
        return new MDCChipSet(root);
    };
    MDCChipSet.prototype.initialize = function (chipFactory) {
        if (chipFactory === void 0) { chipFactory = function (el) { return new MDCChip(el); }; }
        this.chips = [];
        var chipEls = this.root.querySelectorAll("." + MDCChipSetCssClasses.CHIP);
        for (var i = 0; i < chipEls.length; i++) {
            var chip = chipFactory(chipEls[i]);
            this.chips.push(chip);
        }
    };
    MDCChipSet.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChipAnimation = function (event) {
            _this.foundation.handleChipAnimation(event);
        };
        this.handleChipInteraction = function (event) {
            _this.foundation.handleChipInteraction(event);
        };
        this.handleChipNavigation = function (event) {
            _this.foundation.handleChipNavigation(event);
        };
        this.listen(MDCChipEvents.ANIMATION, this.handleChipAnimation);
        this.listen(MDCChipEvents.INTERACTION, this.handleChipInteraction);
        this.listen(MDCChipEvents.NAVIGATION, this.handleChipNavigation);
    };
    MDCChipSet.prototype.destroy = function () {
        this.unlisten(MDCChipEvents.ANIMATION, this.handleChipAnimation);
        this.unlisten(MDCChipEvents.INTERACTION, this.handleChipInteraction);
        this.unlisten(MDCChipEvents.NAVIGATION, this.handleChipNavigation);
        _super.prototype.destroy.call(this);
    };
    MDCChipSet.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            announceMessage: function (message) {
                announce(message);
            },
            emitEvent: function (eventName, eventDetail) {
                _this.emit(eventName, eventDetail, true /* shouldBubble */);
            },
            getAttribute: function (attrName) { return _this.root.getAttribute(attrName); },
            getChipActionsAtIndex: function (index) {
                if (!_this.isIndexValid(index))
                    return [];
                return _this.chips[index].getActions();
            },
            getChipCount: function () { return _this.chips.length; },
            getChipIdAtIndex: function (index) {
                if (!_this.isIndexValid(index))
                    return '';
                return _this.chips[index].getElementID();
            },
            getChipIndexById: function (id) {
                return _this.chips.findIndex(function (chip) { return chip.getElementID() === id; });
            },
            isChipFocusableAtIndex: function (index, action) {
                if (!_this.isIndexValid(index))
                    return false;
                return _this.chips[index].isActionFocusable(action);
            },
            isChipSelectableAtIndex: function (index, action) {
                if (!_this.isIndexValid(index))
                    return false;
                return _this.chips[index].isActionSelectable(action);
            },
            isChipSelectedAtIndex: function (index, action) {
                if (!_this.isIndexValid(index))
                    return false;
                return _this.chips[index].isActionSelected(action);
            },
            removeChipAtIndex: function (index) {
                if (!_this.isIndexValid(index))
                    return;
                _this.chips[index].destroy();
                _this.chips[index].remove();
                _this.chips.splice(index, 1);
            },
            setChipFocusAtIndex: function (index, action, focus) {
                if (!_this.isIndexValid(index))
                    return;
                _this.chips[index].setActionFocus(action, focus);
            },
            setChipSelectedAtIndex: function (index, action, selected) {
                if (!_this.isIndexValid(index))
                    return;
                _this.chips[index].setActionSelected(action, selected);
            },
            startChipAnimationAtIndex: function (index, animation) {
                if (!_this.isIndexValid(index))
                    return;
                _this.chips[index].startAnimation(animation);
            },
        };
        // Default to the primary foundation
        return new MDCChipSetFoundation(adapter);
    };
    /** Returns the index of the chip with the given ID or -1 if none exists. */
    MDCChipSet.prototype.getChipIndexByID = function (chipID) {
        return this.chips.findIndex(function (chip) { return chip.getElementID() === chipID; });
    };
    /**
     * Returns the ID of the chip at the given index or an empty string if the
     * index is out of bounds.
     */
    MDCChipSet.prototype.getChipIdAtIndex = function (index) {
        if (!this.isIndexValid(index))
            return '';
        return this.chips[index].getElementID();
    };
    /** Returns the unique indexes of the selected chips. */
    MDCChipSet.prototype.getSelectedChipIndexes = function () {
        return this.foundation.getSelectedChipIndexes();
    };
    /** Sets the selection state of the chip. */
    MDCChipSet.prototype.setChipSelected = function (index, action, isSelected) {
        this.foundation.setChipSelected(index, action, isSelected);
    };
    /** Returns the selection state of the chip. */
    MDCChipSet.prototype.isChipSelected = function (index, action) {
        return this.foundation.isChipSelected(index, action);
    };
    /** Animates the chip addition at the given index. */
    MDCChipSet.prototype.addChip = function (index) {
        this.foundation.addChip(index);
    };
    /** Removes the chip at the given index. */
    MDCChipSet.prototype.removeChip = function (index) {
        this.foundation.removeChip(index);
    };
    MDCChipSet.prototype.isIndexValid = function (index) {
        return index > -1 && index < this.chips.length;
    };
    return MDCChipSet;
}(MDCComponent));
export { MDCChipSet };
//# sourceMappingURL=component.js.map