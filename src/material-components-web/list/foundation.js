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
import { __assign, __extends, __read, __spreadArray, __values } from "tslib";
import { MDCFoundation } from '../base/foundation';
import { normalizeKey } from '../dom/keyboard';
import { cssClasses, numbers, strings } from './constants';
import { preventDefaultEvent } from './events';
import * as typeahead from './typeahead';
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
/** List of modifier keys to consider while handling keyboard events. */
var handledModifierKeys = ['Alt', 'Control', 'Meta', 'Shift'];
/** Checks if the event has the given modifier keys. */
function createModifierChecker(event) {
    var eventModifiers = new Set(event ? handledModifierKeys.filter(function (m) { return event.getModifierState(m); }) : []);
    return function (modifiers) {
        return modifiers.every(function (m) { return eventModifiers.has(m); }) &&
            modifiers.length === eventModifiers.size;
    };
}
var MDCListFoundation = /** @class */ (function (_super) {
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCListFoundation.defaultAdapter), adapter)) || this;
        _this.wrapFocus = false;
        _this.isVertical = true;
        _this.isSingleSelectionList = false;
        _this.areDisabledItemsFocusable = false;
        _this.selectedIndex = numbers.UNSET_INDEX;
        _this.focusedItemIndex = numbers.UNSET_INDEX;
        _this.useActivatedClass = false;
        _this.useSelectedAttr = false;
        _this.ariaCurrentAttrValue = null;
        _this.isCheckboxList = false;
        _this.isRadioList = false;
        _this.lastSelectedIndex = null;
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
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
                notifySelectionChange: function () { },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
                getPrimaryTextAtIndex: function () { return ''; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter.getListItemCount() === 0) {
            return;
        }
        // TODO(b/172274142): consider all items when determining the list's type.
        if (this.adapter.hasCheckboxAtIndex(0)) {
            this.isCheckboxList = true;
        }
        else if (this.adapter.hasRadioAtIndex(0)) {
            this.isRadioList = true;
        }
        else {
            this.maybeInitializeSingleSelection();
        }
        if (this.hasTypeahead) {
            this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
        }
    };
    /** Returns the index of the item that was last focused. */
    MDCListFoundation.prototype.getFocusedItemIndex = function () {
        return this.focusedItemIndex;
    };
    /** Toggles focus wrapping with keyboard navigation. */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus = value;
    };
    /**
     * Toggles orientation direction for keyboard navigation (true for vertical,
     * false for horizontal).
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical = value;
    };
    /** Toggles single-selection behavior. */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList = value;
        if (value) {
            this.maybeInitializeSingleSelection();
            this.selectedIndex = this.getSelectedIndexFromDOM();
        }
    };
    MDCListFoundation.prototype.setDisabledItemsFocusable = function (value) {
        this.areDisabledItemsFocusable = value;
    };
    /**
     * Automatically determines whether the list is single selection list. If so,
     * initializes the internal state to match the selected item.
     */
    MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
        var selectedItemIndex = this.getSelectedIndexFromDOM();
        if (selectedItemIndex === numbers.UNSET_INDEX)
            return;
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
        if (hasActivatedClass) {
            this.setUseActivatedClass(true);
        }
        this.isSingleSelectionList = true;
        this.selectedIndex = selectedItemIndex;
    };
    /** @return Index of the first selected item based on the DOM state. */
    MDCListFoundation.prototype.getSelectedIndexFromDOM = function () {
        var selectedIndex = numbers.UNSET_INDEX;
        var listItemsCount = this.adapter.getListItemCount();
        for (var i = 0; i < listItemsCount; i++) {
            var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_SELECTED_CLASS);
            var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
            if (!(hasSelectedClass || hasActivatedClass)) {
                continue;
            }
            selectedIndex = i;
            break;
        }
        return selectedIndex;
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
    /** Toggle use of the "activated" CSS class. */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass = useActivated;
    };
    /**
     * Toggles use of the selected attribute (true for aria-selected, false for
     * aria-checked).
     */
    MDCListFoundation.prototype.setUseSelectedAttribute = function (useSelected) {
        this.useSelectedAttr = useSelected;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        if (!this.isIndexValid(index)) {
            return;
        }
        if (this.isCheckboxList) {
            this.setCheckboxAtIndex(index, options);
        }
        else if (this.isRadioList) {
            this.setRadioAtIndex(index, options);
        }
        else {
            this.setSingleSelectionAtIndex(index, options);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (listItemIndex) {
        if (listItemIndex >= 0) {
            this.focusedItemIndex = listItemIndex;
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (listItemIndex) {
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
    MDCListFoundation.prototype.isIndexDisabled = function (index) {
        return this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
        var _this = this;
        var _a;
        var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
        var isArrowUp = normalizeKey(event) === 'ArrowUp';
        var isArrowRight = normalizeKey(event) === 'ArrowRight';
        var isArrowDown = normalizeKey(event) === 'ArrowDown';
        var isHome = normalizeKey(event) === 'Home';
        var isEnd = normalizeKey(event) === 'End';
        var isEnter = normalizeKey(event) === 'Enter';
        var isSpace = normalizeKey(event) === 'Spacebar';
        // The keys for forward and back differ based on list orientation.
        var isForward = (this.isVertical && isArrowDown) || (!this.isVertical && isArrowRight);
        var isBack = (this.isVertical && isArrowUp) || (!this.isVertical && isArrowLeft);
        // Have to check both upper and lower case, because having caps lock on
        // affects the value.
        var isLetterA = event.key === 'A' || event.key === 'a';
        var eventHasModifiers = createModifierChecker(event);
        if (this.adapter.isRootFocused()) {
            if ((isBack || isEnd) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusLastElement();
            }
            else if ((isForward || isHome) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusFirstElement();
            }
            else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusLastElement();
                if (focusedIndex !== -1) {
                    this.setSelectedIndexOnAction(focusedIndex, false);
                }
            }
            else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusFirstElement();
                if (focusedIndex !== -1) {
                    this.setSelectedIndexOnAction(focusedIndex, false);
                }
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
                    isItemAtIndexDisabled: function (index) { return _this.isIndexDisabled(index); },
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
        if (isForward && eventHasModifiers([])) {
            preventDefaultEvent(event);
            this.focusNextElement(currentIndex);
        }
        else if (isBack && eventHasModifiers([])) {
            preventDefaultEvent(event);
            this.focusPrevElement(currentIndex);
        }
        else if (isForward && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            preventDefaultEvent(event);
            var focusedIndex = this.focusNextElement(currentIndex);
            if (focusedIndex !== -1) {
                this.setSelectedIndexOnAction(focusedIndex, false);
            }
        }
        else if (isBack && eventHasModifiers(['Shift']) && this.isCheckboxList) {
            preventDefaultEvent(event);
            var focusedIndex = this.focusPrevElement(currentIndex);
            if (focusedIndex !== -1) {
                this.setSelectedIndexOnAction(focusedIndex, false);
            }
        }
        else if (isHome && eventHasModifiers([])) {
            preventDefaultEvent(event);
            this.focusFirstElement();
        }
        else if (isEnd && eventHasModifiers([])) {
            preventDefaultEvent(event);
            this.focusLastElement();
        }
        else if (isHome && eventHasModifiers(['Control', 'Shift']) &&
            this.isCheckboxList) {
            preventDefaultEvent(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            this.focusFirstElement();
            this.toggleCheckboxRange(0, currentIndex, currentIndex);
        }
        else if (isEnd && eventHasModifiers(['Control', 'Shift']) &&
            this.isCheckboxList) {
            preventDefaultEvent(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            this.focusLastElement();
            this.toggleCheckboxRange(currentIndex, this.adapter.getListItemCount() - 1, currentIndex);
        }
        else if (isLetterA && eventHasModifiers(['Control']) && this.isCheckboxList) {
            event.preventDefault();
            this.checkboxListToggleAll(this.selectedIndex === numbers.UNSET_INDEX ?
                [] :
                this.selectedIndex, true);
        }
        else if ((isEnter || isSpace) && eventHasModifiers([])) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                var target = event.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                preventDefaultEvent(event);
                if (this.isIndexDisabled(currentIndex)) {
                    return;
                }
                if (!this.isTypeaheadInProgress()) {
                    if (this.isSelectableList()) {
                        this.setSelectedIndexOnAction(currentIndex, false);
                    }
                    this.adapter.notifyAction(currentIndex);
                }
            }
        }
        else if ((isEnter || isSpace) && eventHasModifiers(['Shift']) &&
            this.isCheckboxList) {
            // Return early if enter key is pressed on anchor element which triggers
            // synthetic MouseEvent event.
            var target = event.target;
            if (target && target.tagName === 'A' && isEnter) {
                return;
            }
            preventDefaultEvent(event);
            if (this.isIndexDisabled(currentIndex)) {
                return;
            }
            if (!this.isTypeaheadInProgress()) {
                this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : currentIndex, currentIndex, currentIndex);
                this.adapter.notifyAction(currentIndex);
            }
        }
        if (this.hasTypeahead) {
            var handleKeydownOpts = {
                event: event,
                focusItemAtIndex: function (index) { _this.focusItemAtIndex(index); },
                focusedItemIndex: this.focusedItemIndex,
                isTargetListItem: isRootListItem,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: function (index) { return _this.isIndexDisabled(index); },
            };
            typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
    };
    /**
     * Click handler for the list.
     *
     * @param index Index for the item that has been clicked.
     * @param isCheckboxAlreadyUpdatedInAdapter Whether the checkbox for
     *   the list item has already been updated in the adapter. This attribute
     *   should be set to `true` when e.g. the click event directly landed on
     *   the underlying native checkbox element which would cause the checked
     *   state to be already toggled within `adapter.isCheckboxCheckedAtIndex`.
     */
    MDCListFoundation.prototype.handleClick = function (index, isCheckboxAlreadyUpdatedInAdapter, event) {
        var _a;
        var eventHasModifiers = createModifierChecker(event);
        if (index === numbers.UNSET_INDEX) {
            return;
        }
        if (this.isIndexDisabled(index)) {
            return;
        }
        if (eventHasModifiers([])) {
            if (this.isSelectableList()) {
                this.setSelectedIndexOnAction(index, isCheckboxAlreadyUpdatedInAdapter);
            }
            this.adapter.notifyAction(index);
        }
        else if (this.isCheckboxList && eventHasModifiers(['Shift'])) {
            this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : index, index, index);
            this.adapter.notifyAction(index);
        }
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter.getListItemCount();
        var nextIndex = index;
        var firstChecked = null;
        do {
            nextIndex++;
            if (nextIndex >= count) {
                if (this.wrapFocus) {
                    nextIndex = 0;
                }
                else {
                    // Return early because last item is already focused.
                    return index;
                }
            }
            if (nextIndex === firstChecked) {
                return -1;
            }
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : nextIndex;
        } while (!this.areDisabledItemsFocusable &&
            this.isIndexDisabled(nextIndex));
        this.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var count = this.adapter.getListItemCount();
        var prevIndex = index;
        var firstChecked = null;
        do {
            prevIndex--;
            if (prevIndex < 0) {
                if (this.wrapFocus) {
                    prevIndex = count - 1;
                }
                else {
                    // Return early because first item is already focused.
                    return index;
                }
            }
            if (prevIndex === firstChecked) {
                return -1;
            }
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : prevIndex;
        } while (!this.areDisabledItemsFocusable &&
            this.isIndexDisabled(prevIndex));
        this.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        // Pass -1 to `focusNextElement`, since it will incremement to 0 and focus
        // the first element.
        return this.focusNextElement(-1);
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        // Pass the length of the list to `focusNextElement` since it will decrement
        // to length - 1 and focus the last element.
        return this.focusPrevElement(this.adapter.getListItemCount());
    };
    MDCListFoundation.prototype.focusInitialElement = function () {
        var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
        if (initialIndex !== numbers.UNSET_INDEX) {
            this.focusItemAtIndex(initialIndex);
        }
        return initialIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid(itemIndex, false)) {
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
    MDCListFoundation.prototype.setSingleSelectionAtIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        if (this.selectedIndex === index && !options.forceUpdate) {
            return;
        }
        var selectedClassName = cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass) {
            selectedClassName = cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex !== numbers.UNSET_INDEX) {
            this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
        }
        this.setAriaForSingleSelectionAtIndex(index);
        this.setTabindexAtIndex(index);
        if (index !== numbers.UNSET_INDEX) {
            this.adapter.addClassForElementIndex(index, selectedClassName);
        }
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) {
            this.adapter.notifySelectionChange([index]);
        }
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex = function (index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex === numbers.UNSET_INDEX &&
            index !== numbers.UNSET_INDEX) {
            this.ariaCurrentAttrValue =
                this.adapter.getAttributeForElementIndex(index, strings.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue !== null;
        var ariaAttribute = isAriaCurrent ? strings.ARIA_CURRENT : strings.ARIA_SELECTED;
        if (this.selectedIndex !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, 'false');
        }
        if (index !== numbers.UNSET_INDEX) {
            var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : 'true';
            this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
        }
    };
    /**
     * Returns the attribute to use for indicating selection status.
     */
    MDCListFoundation.prototype.getSelectionAttribute = function () {
        return this.useSelectedAttr ? strings.ARIA_SELECTED : strings.ARIA_CHECKED;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it
     * is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex = function (index, options) {
        if (options === void 0) { options = {}; }
        var selectionAttribute = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex === index && !options.forceUpdate) {
            return;
        }
        if (this.selectedIndex !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, 'false');
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) {
            this.adapter.notifySelectionChange([index]);
        }
    };
    MDCListFoundation.prototype.setCheckboxAtIndex = function (indices, options) {
        if (options === void 0) { options = {}; }
        var currentIndex = this.selectedIndex;
        // If this update is not triggered by a user interaction, we do not
        // need to know about the currently selected indices and can avoid
        // constructing the `Set` for performance reasons.
        var currentlySelected = options.isUserInteraction ?
            new Set(currentIndex === numbers.UNSET_INDEX ? [] :
                currentIndex) :
            null;
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for (var i = 0; i < this.adapter.getListItemCount(); i++) {
            if (options.omitDisabledItems && this.isIndexDisabled(i)) {
                continue;
            }
            var previousIsChecked = currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(i);
            var newIsChecked = indices.indexOf(i) >= 0;
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
            }
            this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
            this.adapter.setAttributeForElementIndex(i, selectionAttribute, newIsChecked ? 'true' : 'false');
        }
        this.selectedIndex = options.omitDisabledItems ?
            this.resolveSelectedIndices(indices) :
            indices;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && changedIndices.length) {
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    /**
     * Helper method for ensuring that the list of selected indicies remains
     * accurate when calling setCheckboxAtIndex with omitDisabledItems set to
     * true.
     */
    MDCListFoundation.prototype.resolveSelectedIndices = function (setCheckedItems) {
        var _this = this;
        var currentlySelectedItems = this.selectedIndex === numbers.UNSET_INDEX ?
            [] :
            this.selectedIndex;
        var currentlySelectedDisabledItems = currentlySelectedItems.filter(function (i) { return _this.isIndexDisabled(i); });
        var enabledSetCheckedItems = setCheckedItems.filter(function (i) { return !_this.isIndexDisabled(i); });
        // Updated selectedIndex should be the enabled setCheckedItems + any missing
        // selected disabled items.
        var updatedSelectedItems = __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read(enabledSetCheckedItems)), __read(currentlySelectedDisabledItems)))));
        return updatedSelectedItems.sort(function (a, b) { return a - b; });
    };
    /**
     * Toggles the state of all checkboxes in the given range (inclusive) based
     * on the state of the checkbox at the `toggleIndex`. To determine whether
     * to set the given range to checked or unchecked, read the value of the
     * checkbox at the `toggleIndex` and negate it. Then apply that new checked
     * state to all checkboxes in the range.
     * @param fromIndex The start of the range of checkboxes to toggle
     * @param toIndex The end of the range of checkboxes to toggle
     * @param toggleIndex The index that will be used to determine the new state
     *     of the given checkbox range.
     */
    MDCListFoundation.prototype.toggleCheckboxRange = function (fromIndex, toIndex, toggleIndex) {
        this.lastSelectedIndex = toggleIndex;
        var currentlySelected = new Set(this.selectedIndex === numbers.UNSET_INDEX ?
            [] :
            this.selectedIndex);
        var newIsChecked = !(currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(toggleIndex));
        var _a = __read([fromIndex, toIndex].sort(), 2), startIndex = _a[0], endIndex = _a[1];
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for (var i = startIndex; i <= endIndex; i++) {
            if (this.isIndexDisabled(i)) {
                continue;
            }
            var previousIsChecked = currentlySelected.has(i);
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
                this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
                this.adapter.setAttributeForElementIndex(i, selectionAttribute, "" + newIsChecked);
                if (newIsChecked) {
                    currentlySelected.add(i);
                }
                else {
                    currentlySelected.delete(i);
                }
            }
        }
        // If the selected value has changed, update and notify the selection
        // change to the adapter.
        if (changedIndices.length) {
            this.selectedIndex = __spreadArray([], __read(currentlySelected));
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    MDCListFoundation.prototype.setTabindexAtIndex = function (index) {
        if (this.focusedItemIndex === numbers.UNSET_INDEX && index !== 0 &&
            index !== numbers.UNSET_INDEX) {
            // If some list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has
            // no preselected items.
            this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
            this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
        }
        // Set the previous selection's tabindex to -1. We need this because
        // in selection menus that are not visible, programmatically setting an
        // option will not change focus but will change where tabindex should be
        // 0.
        if (!(this.selectedIndex instanceof Array) &&
            this.selectedIndex !== index &&
            this.focusedItemIndex !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(this.selectedIndex, 'tabindex', '-1');
        }
        if (index !== numbers.UNSET_INDEX) {
            this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
        }
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio
     *     list.
     */
    MDCListFoundation.prototype.isSelectableList = function () {
        return this.isSingleSelectionList || this.isCheckboxList ||
            this.isRadioList;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
        var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function () {
        var e_1, _a;
        var firstFocusableListItem = this.getFirstEnabledItem();
        if (this.adapter.getListItemCount() === 0) {
            return numbers.UNSET_INDEX;
        }
        // Action lists retain focus on the most recently focused item.
        if (!this.isSelectableList()) {
            return Math.max(this.focusedItemIndex, firstFocusableListItem);
        }
        // Single-selection lists focus the selected item.
        if (typeof this.selectedIndex === 'number' &&
            this.selectedIndex !== numbers.UNSET_INDEX) {
            return this.areDisabledItemsFocusable &&
                this.isIndexDisabled(this.selectedIndex) ?
                firstFocusableListItem :
                this.selectedIndex;
        }
        // Multiple-selection lists focus the first enabled selected item.
        if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
            var sorted = __spreadArray([], __read(this.selectedIndex)).sort(function (a, b) { return a - b; });
            try {
                for (var sorted_1 = __values(sorted), sorted_1_1 = sorted_1.next(); !sorted_1_1.done; sorted_1_1 = sorted_1.next()) {
                    var index = sorted_1_1.value;
                    if (this.isIndexDisabled(index) && !this.areDisabledItemsFocusable) {
                        continue;
                    }
                    else {
                        return index;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (sorted_1_1 && !sorted_1_1.done && (_a = sorted_1.return)) _a.call(sorted_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // Selection lists without a selection focus the first item.
        return firstFocusableListItem;
    };
    MDCListFoundation.prototype.getFirstEnabledItem = function () {
        var listSize = this.adapter.getListItemCount();
        var i = 0;
        while (i < listSize) {
            if (!this.isIndexDisabled(i)) {
                break;
            }
            i++;
        }
        return i === listSize ? numbers.UNSET_INDEX : i;
    };
    MDCListFoundation.prototype.isIndexValid = function (index, validateListType) {
        var _this = this;
        if (validateListType === void 0) { validateListType = true; }
        if (index instanceof Array) {
            if (!this.isCheckboxList && validateListType) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList && validateListType) {
                throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
            }
            return this.isIndexInRange(index) ||
                this.isSingleSelectionList && index === numbers.UNSET_INDEX;
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange = function (index) {
        var listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkboxes in checkbox lists
     * by default, unless `isCheckboxAlreadyUpdatedInAdapter` is set to `true`.
     *
     * In cases where `isCheckboxAlreadyUpdatedInAdapter` is set to `true`, the
     * UI is just updated to reflect the value returned by the adapter.
     *
     * When calling this, make sure user interaction does not toggle disabled
     * list items.
     */
    MDCListFoundation.prototype.setSelectedIndexOnAction = function (index, isCheckboxAlreadyUpdatedInAdapter) {
        this.lastSelectedIndex = index;
        if (this.isCheckboxList) {
            this.toggleCheckboxAtIndex(index, isCheckboxAlreadyUpdatedInAdapter);
            this.adapter.notifySelectionChange([index]);
        }
        else {
            this.setSelectedIndex(index, { isUserInteraction: true });
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex = function (index, isCheckboxAlreadyUpdatedInAdapter) {
        var selectionAttribute = this.getSelectionAttribute();
        var adapterIsChecked = this.adapter.isCheckboxCheckedAtIndex(index);
        // By default the checked value from the adapter is toggled unless the
        // checked state in the adapter has already been updated beforehand.
        // This can be happen when the underlying native checkbox has already
        // been updated through the native click event.
        var newCheckedValue;
        if (isCheckboxAlreadyUpdatedInAdapter) {
            newCheckedValue = adapterIsChecked;
        }
        else {
            newCheckedValue = !adapterIsChecked;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(index, newCheckedValue);
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, newCheckedValue ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not
        // initialized then provide a default value.
        var selectedIndexes = this.selectedIndex === numbers.UNSET_INDEX ?
            [] :
            this.selectedIndex.slice();
        if (newCheckedValue) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation.prototype.focusItemAtIndex = function (index) {
        this.adapter.focusItemAtIndex(index);
        this.focusedItemIndex = index;
    };
    MDCListFoundation.prototype.getEnabledListItemCount = function () {
        var listSize = this.adapter.getListItemCount();
        var adjustedCount = 0;
        for (var i = 0; i < listSize; i++) {
            if (!this.isIndexDisabled(i)) {
                adjustedCount++;
            }
        }
        return adjustedCount;
    };
    MDCListFoundation.prototype.checkboxListToggleAll = function (currentlySelectedIndices, isUserInteraction) {
        var _this = this;
        var enabledListItemCount = this.getEnabledListItemCount();
        var totalListItemCount = this.adapter.getListItemCount();
        var currentlyEnabledSelectedIndices = currentlySelectedIndices.filter(function (i) { return !_this.isIndexDisabled(i); });
        // If all items are selected, deselect everything.
        // We check >= rather than === to `enabledListItemCount` since a disabled
        // item could be selected, and we don't take that into consideration when
        // toggling the other checkbox values.
        if (currentlyEnabledSelectedIndices.length >= enabledListItemCount) {
            // Use omitDisabledItems option to ensure disabled selected items are not
            // de-selected.
            this.setCheckboxAtIndex([], { isUserInteraction: isUserInteraction, omitDisabledItems: true });
        }
        else {
            // Otherwise select all enabled options.
            var allIndexes = [];
            for (var i = 0; i < totalListItemCount; i++) {
                if (!this.isIndexDisabled(i) ||
                    currentlySelectedIndices.indexOf(i) > -1) {
                    allIndexes.push(i);
                }
            }
            // Use omitDisabledItems option to ensure disabled selected items are not
            // de-selected.
            this.setCheckboxAtIndex(allIndexes, { isUserInteraction: isUserInteraction, omitDisabledItems: true });
        }
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only
     *     relevant when starting a new match sequence. To start a new match
     *     sequence, clear the buffer using `clearTypeaheadBuffer`, or wait for
     *     the buffer to clear after a set interval defined in list foundation.
     *     Defaults to the currently focused index.
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
            isItemAtIndexDisabled: function (index) { return _this.isIndexDisabled(index); }
        };
        return typeahead.matchItem(opts, this.typeaheadState);
    };
    /**
     * Initializes the MDCListTextAndIndex data structure by indexing the
     * current list items by primary text.
     *
     * @return The primary texts of all the list items sorted by first
     *     character.
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