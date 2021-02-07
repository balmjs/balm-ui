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
import { __assign, __extends } from "tslib";
// TODO(b/152410470): Remove trailing underscores from private properties
// tslint:disable:strip-private-property-underscore
import { MDCFoundation } from '../base/foundation';
import { normalizeKey } from '../dom/keyboard';
import { cssClasses, numbers, strings } from './constants';
import { preventDefaultEvent } from './events';
import * as typeahead from './typeahead';
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = /** @class */ (function (_super) {
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCListFoundation.defaultAdapter), adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = numbers.UNSET_INDEX;
        _this.focusedItemIndex = numbers.UNSET_INDEX;
        _this.useActivatedClass_ = false;
        _this.useSelectedAttr_ = false;
        _this.ariaCurrentAttrValue_ = null;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        _this.hasTypeahead = false;
        // Transiently holds current typeahead prefix from user.
        _this.typeaheadState = typeahead.initState();
        _this.sortedIndexByFirstChar = new Map();
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassForElementIndex: function () { return undefined; },
                focusItemAtIndex: function () { return undefined; },
                getAttributeForElementIndex: function () { return null; },
                getFocusedElementIndex: function () { return 0; },
                getListItemCount: function () { return 0; },
                hasCheckboxAtIndex: function () { return false; },
                hasRadioAtIndex: function () { return false; },
                isCheckboxCheckedAtIndex: function () { return false; },
                isFocusInsideList: function () { return false; },
                isRootFocused: function () { return false; },
                listItemAtIndexHasClass: function () { return false; },
                notifyAction: function () { return undefined; },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
                getPrimaryTextAtIndex: function () { return ''; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter.getListItemCount() === 0) {
            return;
        }
        // TODO(b/172274142): consider all items when determining the list's type.
        if (this.adapter.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
        }
        else if (this.adapter.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
        }
        else {
            this.maybeInitializeSingleSelection();
        }
        if (this.hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
        if (value) {
            this.maybeInitializeSingleSelection();
        }
    };
    /**
     * Automatically determines whether the list is single selection list. If so,
     * initializes the internal state to match the selected item.
     */
    MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
        var listItemsCount = this.adapter.getListItemCount();
        for (var i = 0; i < listItemsCount; i++) {
            var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_SELECTED_CLASS);
            var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
            if (!(hasSelectedClass || hasActivatedClass)) {
                continue;
            }
            if (hasActivatedClass) {
                this.setUseActivatedClass(true);
            }
            this.isSingleSelectionList_ = true;
            this.selectedIndex_ = i;
            return;
        }
    };
    /**
     * Sets whether typeahead is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */
    MDCListFoundation.prototype.setHasTypeahead = function (hasTypeahead) {
        this.hasTypeahead = hasTypeahead;
        if (hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */
    MDCListFoundation.prototype.isTypeaheadInProgress = function () {
        return this.hasTypeahead &&
            typeahead.isTypingInProgress(this.typeaheadState);
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
    };
    /**
     * Sets the useSelectedAttr_ private variable.
     */
    MDCListFoundation.prototype.setUseSelectedAttribute = function (useSelected) {
        this.useSelectedAttr_ = useSelected;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(index);
        }
        else if (this.isRadioList_) {
            this.setRadioAtIndex_(index);
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.focusedItemIndex = listItemIndex;
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedOrFocusedItem();
            }
        }, 0);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
        var _this = this;
        var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
        var isArrowUp = normalizeKey(event) === 'ArrowUp';
        var isArrowRight = normalizeKey(event) === 'ArrowRight';
        var isArrowDown = normalizeKey(event) === 'ArrowDown';
        var isHome = normalizeKey(event) === 'Home';
        var isEnd = normalizeKey(event) === 'End';
        var isEnter = normalizeKey(event) === 'Enter';
        var isSpace = normalizeKey(event) === 'Spacebar';
        // Have to check both upper and lower case, because having caps lock on affects the value.
        var isLetterA = event.key === 'A' || event.key === 'a';
        if (this.adapter.isRootFocused()) {
            if (isArrowUp || isEnd) {
                event.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                event.preventDefault();
                this.focusFirstElement();
            }
            if (this.hasTypeahead) {
                var handleKeydownOpts = {
                    event: event,
                    focusItemAtIndex: function (index) {
                        _this.focusItemAtIndex(index);
                    },
                    focusedItemIndex: -1,
                    isTargetListItem: isRootListItem,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    isItemAtIndexDisabled: function (index) {
                        return _this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS);
                    },
                };
                typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
            }
            return;
        }
        var currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        if ((this.isVertical_ && isArrowDown) ||
            (!this.isVertical_ && isArrowRight)) {
            preventDefaultEvent(event);
            this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            preventDefaultEvent(event);
            this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            preventDefaultEvent(event);
            this.focusFirstElement();
        }
        else if (isEnd) {
            preventDefaultEvent(event);
            this.focusLastElement();
        }
        else if (isLetterA && event.ctrlKey && this.isCheckboxList_) {
            event.preventDefault();
            this.toggleAll(this.selectedIndex_ === numbers.UNSET_INDEX ? [] : this.selectedIndex_);
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                var target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                preventDefaultEvent(event);
                if (this.adapter.listItemAtIndexHasClass(currentIndex, cssClasses.LIST_ITEM_DISABLED_CLASS)) {
                    return;
                }
                if (!this.isTypeaheadInProgress()) {
                    if (this.isSelectableList_()) {
                        this.setSelectedIndexOnAction_(currentIndex);
                    }
                    this.adapter.notifyAction(currentIndex);
                }
            }
        }
        if (this.hasTypeahead) {
            var handleKeydownOpts = {
                event: event,
                focusItemAtIndex: function (index) {
                    _this.focusItemAtIndex(index);
                },
                focusedItemIndex: this.focusedItemIndex,
                isTargetListItem: isRootListItem,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: function (index) { return _this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS); },
            };
            typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
    };
    /**
     * Click handler for the list.
     */
    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === numbers.UNSET_INDEX) {
            return;
        }
        if (this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS)) {
            return;
        }
        if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }
        this.adapter.notifyAction(index);
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        this.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter.getListItemCount() - 1;
        this.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    MDCListFoundation.prototype.focusInitialElement = function () {
        var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.focusItemAtIndex(initialIndex);
        return initialIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        if (isEnabled) {
            this.adapter.removeClassForElementIndex(itemIndex, cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, strings.ARIA_DISABLED, 'false');
        }
        else {
            this.adapter.addClassForElementIndex(itemIndex, cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, strings.ARIA_DISABLED, 'true');
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        if (this.selectedIndex_ === index) {
            return;
        }
        var selectedClassName = cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ !== numbers.UNSET_INDEX) {
            this.adapter.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        }
        this.setAriaForSingleSelectionAtIndex_(index);
        this.setTabindexAtIndex(index);
        if (index !== numbers.UNSET_INDEX) {
            this.adapter.addClassForElementIndex(index, selectedClassName);
        }
        this.selectedIndex_ = index;
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex_ === numbers.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter.getAttributeForElementIndex(index, strings.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        var ariaAttribute = isAriaCurrent ? strings.ARIA_CURRENT : strings.ARIA_SELECTED;
        if (this.selectedIndex_ !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        if (index !== numbers.UNSET_INDEX) {
            var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
            this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
        }
    };
    /**
     * Returns the attribute to use for indicating selection status.
     */
    MDCListFoundation.prototype.getSelectionAttribute = function () {
        return this.useSelectedAttr_ ? strings.ARIA_SELECTED : strings.ARIA_CHECKED;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it
     * is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        var selectionAttribute = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex_ !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex_, selectionAttribute, 'false');
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        var selectionAttribute = this.getSelectionAttribute();
        for (var i = 0; i < this.adapter.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex = function (index) {
        if (this.focusedItemIndex === numbers.UNSET_INDEX && index !== 0) {
            // If some list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no
            // preselected items.
            this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
            this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
        }
        // Set the previous selection's tabindex to -1. We need this because
        // in selection menus that are not visible, programmatically setting an
        // option will not change focus but will change where tabindex should be 0.
        if (!(this.selectedIndex_ instanceof Array) &&
            this.selectedIndex_ !== index) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', '-1');
        }
        if (index !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
        }
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio
     *     list.
     */
    MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ ||
            this.isRadioList_;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
        var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function () {
        var targetIndex = this.focusedItemIndex >= 0 ? this.focusedItemIndex : 0;
        if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' &&
                this.selectedIndex_ !== numbers.UNSET_INDEX) {
                targetIndex = this.selectedIndex_;
            }
            else if (isNumberArray(this.selectedIndex_) &&
                this.selectedIndex_.length > 0) {
                targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) { return Math.min(currentIndex, minIndex); });
            }
        }
        return targetIndex;
    };
    MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange_(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
                throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
            }
            return this.isIndexInRange_(index) ||
                this.isSingleSelectionList_ && index === numbers.UNSET_INDEX;
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */
    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) { toggleCheckbox = true; }
        if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        }
        else {
            this.setSelectedIndex(index);
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var selectionAttribute = this.getSelectionAttribute();
        var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not
        // initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === numbers.UNSET_INDEX ?
            [] :
            this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    MDCListFoundation.prototype.focusItemAtIndex = function (index) {
        this.adapter.focusItemAtIndex(index);
        this.focusedItemIndex = index;
    };
    MDCListFoundation.prototype.toggleAll = function (currentlySelectedIndexes) {
        var count = this.adapter.getListItemCount();
        // If all items are selected, deselect everything.
        if (currentlySelectedIndexes.length === count) {
            this.setCheckboxAtIndex_([]);
        }
        else {
            // Otherwise select all enabled options.
            var allIndexes = [];
            for (var i = 0; i < count; i++) {
                if (!this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_DISABLED_CLASS) ||
                    currentlySelectedIndexes.indexOf(i) > -1) {
                    allIndexes.push(i);
                }
            }
            this.setCheckboxAtIndex_(allIndexes);
        }
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only relevant
     *     when starting a new match sequence. To start a new match sequence,
     *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
     *     to clear after a set interval defined in list foundation. Defaults to
     *     the currently focused index.
     * @return The index of the matched item, or -1 if no match.
     */
    MDCListFoundation.prototype.typeaheadMatchItem = function (nextChar, startingIndex, skipFocus) {
        var _this = this;
        if (skipFocus === void 0) { skipFocus = false; }
        var opts = {
            focusItemAtIndex: function (index) {
                _this.focusItemAtIndex(index);
            },
            focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
            nextChar: nextChar,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: skipFocus,
            isItemAtIndexDisabled: function (index) { return _this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS); }
        };
        return typeahead.matchItem(opts, this.typeaheadState);
    };
    /**
     * Initializes the MDCListTextAndIndex data structure by indexing the current
     * list items by primary text.
     *
     * @return The primary texts of all the list items sorted by first character.
     */
    MDCListFoundation.prototype.typeaheadInitSortedIndex = function () {
        return typeahead.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    /**
     * Clears the typeahead buffer.
     */
    MDCListFoundation.prototype.clearTypeaheadBuffer = function () {
        typeahead.clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation;
}(MDCFoundation));
export { MDCListFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCListFoundation;
//# sourceMappingURL=foundation.js.map