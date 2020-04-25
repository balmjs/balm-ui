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
import { __assign, __extends } from "tslib";
import { MDCFoundation } from '../base/foundation';
import { Corner } from '../menu-surface/constants';
import { cssClasses, numbers, strings } from './constants';
var MDCSelectFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation.defaultAdapter), adapter)) || this;
        // Index of the currently selected menu item.
        _this.selectedIndex = numbers.UNSET_INDEX;
        // Disabled state
        _this.disabled = false;
        // isMenuOpen is used to track the state of the menu by listening to the
        // MDCMenuSurface:closed event For reference, menu.open will return false if
        // the menu is still closing, but isMenuOpen returns false only after the menu
        // has closed
        _this.isMenuOpen = false;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.helperText = foundationMap.helperText;
        _this.menuItemValues = _this.adapter_.getMenuItemValues();
        _this.setDisabled(_this.adapter_.hasClass(cssClasses.DISABLED));
        return _this;
    }
    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                activateBottomLine: function () { return undefined; },
                deactivateBottomLine: function () { return undefined; },
                getSelectedMenuItem: function () { return null; },
                hasLabel: function () { return false; },
                floatLabel: function () { return undefined; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
                setRippleCenter: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setSelectedText: function () { return undefined; },
                isSelectAnchorFocused: function () { return false; },
                getSelectAnchorAttr: function () { return ''; },
                setSelectAnchorAttr: function () { return undefined; },
                openMenu: function () { return undefined; },
                closeMenu: function () { return undefined; },
                getAnchorElement: function () { return null; },
                setMenuAnchorElement: function () { return undefined; },
                setMenuAnchorCorner: function () { return undefined; },
                setMenuWrapFocus: function () { return undefined; },
                setAttributeAtIndex: function () { return undefined; },
                removeAttributeAtIndex: function () { return undefined; },
                focusMenuItemAtIndex: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                getMenuItemValues: function () { return []; },
                getMenuItemTextAtIndex: function () { return ''; },
                getMenuItemAttr: function () { return ''; },
                addClassAtIndex: function () { return undefined; },
                removeClassAtIndex: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Returns the index of the currently selected menu item, or -1 if none. */
    MDCSelectFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
        if (closeMenu === void 0) { closeMenu = false; }
        if (index >= this.adapter_.getMenuItemCount()) {
            return;
        }
        var previouslySelectedIndex = this.selectedIndex;
        this.selectedIndex = index;
        if (this.selectedIndex === numbers.UNSET_INDEX) {
            this.adapter_.setSelectedText('');
        }
        else {
            this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex).trim());
        }
        if (previouslySelectedIndex !== numbers.UNSET_INDEX) {
            this.adapter_.removeClassAtIndex(previouslySelectedIndex, cssClasses.SELECTED_ITEM_CLASS);
            this.adapter_.removeAttributeAtIndex(previouslySelectedIndex, strings.ARIA_SELECTED_ATTR);
        }
        if (this.selectedIndex !== numbers.UNSET_INDEX) {
            this.adapter_.addClassAtIndex(this.selectedIndex, cssClasses.SELECTED_ITEM_CLASS);
            this.adapter_.setAttributeAtIndex(this.selectedIndex, strings.ARIA_SELECTED_ATTR, 'true');
        }
        this.layout();
        if (closeMenu) {
            this.adapter_.closeMenu();
        }
        this.handleChange();
    };
    MDCSelectFoundation.prototype.setValue = function (value) {
        var index = this.menuItemValues.indexOf(value);
        this.setSelectedIndex(index);
    };
    MDCSelectFoundation.prototype.getValue = function () {
        var listItem = this.adapter_.getSelectedMenuItem();
        if (listItem) {
            return this.adapter_.getMenuItemAttr(listItem, strings.VALUE_ATTR) || '';
        }
        return '';
    };
    MDCSelectFoundation.prototype.getDisabled = function () {
        return this.disabled;
    };
    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
        this.disabled = isDisabled;
        if (this.disabled) {
            this.adapter_.addClass(cssClasses.DISABLED);
            this.adapter_.closeMenu();
        }
        else {
            this.adapter_.removeClass(cssClasses.DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(this.disabled);
        }
        this.adapter_.setSelectAnchorAttr('tabindex', this.disabled ? '-1' : '0');
        this.adapter_.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.layout = function () {
        if (this.adapter_.hasLabel()) {
            var openNotch = this.getValue().length > 0;
            this.notchOutline(openNotch);
        }
    };
    MDCSelectFoundation.prototype.handleMenuOpened = function () {
        if (this.adapter_.getMenuItemValues().length === 0) {
            return;
        }
        this.adapter_.addClass(cssClasses.ACTIVATED);
        // Menu should open to the last selected element, should open to first menu item otherwise.
        var focusItemIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0;
        this.adapter_.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation.prototype.handleMenuClosed = function () {
        this.adapter_.removeClass(cssClasses.ACTIVATED);
        this.isMenuOpen = false;
        this.adapter_.setSelectAnchorAttr('aria-expanded', 'false');
        // Unfocus the select if menu is closed without a selection
        if (!this.adapter_.isSelectAnchorFocused()) {
            this.blur();
        }
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundation.prototype.handleChange = function () {
        this.updateLabel();
        this.adapter_.notifyChange(this.getValue());
        var isRequired = this.adapter_.hasClass(cssClasses.REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText) {
                this.helperText.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
        this.setSelectedIndex(index, /** closeMenu */ true);
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundation.prototype.handleFocus = function () {
        this.adapter_.addClass(cssClasses.FOCUSED);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
        }
        this.adapter_.activateBottomLine();
        if (this.helperText) {
            this.helperText.showToScreenReader();
        }
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundation.prototype.handleBlur = function () {
        if (this.isMenuOpen) {
            return;
        }
        this.blur();
    };
    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
        if (this.isMenuOpen) {
            return;
        }
        this.adapter_.setRippleCenter(normalizedX);
        this.adapter_.openMenu();
        this.isMenuOpen = true;
        this.adapter_.setSelectAnchorAttr('aria-expanded', 'true');
    };
    MDCSelectFoundation.prototype.handleKeydown = function (event) {
        if (this.isMenuOpen) {
            return;
        }
        var isEnter = event.key === 'Enter' || event.keyCode === 13;
        var isSpace = event.key === 'Space' || event.keyCode === 32;
        var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
        var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;
        if (this.adapter_.hasClass(cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
            this.adapter_.openMenu();
            this.isMenuOpen = true;
            this.adapter_.setSelectAnchorAttr('aria-expanded', 'true');
            event.preventDefault();
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        var isFocused = this.adapter_.hasClass(cssClasses.FOCUSED);
        if (openNotch) {
            var labelScale = numbers.LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else if (!isFocused) {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.setValid = function (isValid) {
        this.adapter_.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
        if (isValid) {
            this.adapter_.removeClass(cssClasses.INVALID);
        }
        else {
            this.adapter_.addClass(cssClasses.INVALID);
        }
    };
    MDCSelectFoundation.prototype.isValid = function () {
        if (this.adapter_.hasClass(cssClasses.REQUIRED) && !this.adapter_.hasClass(cssClasses.DISABLED)) {
            // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
            // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
            return this.selectedIndex !== numbers.UNSET_INDEX &&
                (this.selectedIndex !== 0 || Boolean(this.getValue()));
        }
        return true;
    };
    MDCSelectFoundation.prototype.setRequired = function (isRequired) {
        if (isRequired) {
            this.adapter_.addClass(cssClasses.REQUIRED);
        }
        else {
            this.adapter_.removeClass(cssClasses.REQUIRED);
        }
        this.adapter_.setSelectAnchorAttr('aria-required', isRequired.toString());
    };
    MDCSelectFoundation.prototype.getRequired = function () {
        return this.adapter_.getSelectAnchorAttr('aria-required') === 'true';
    };
    MDCSelectFoundation.prototype.init = function () {
        var anchorEl = this.adapter_.getAnchorElement();
        if (anchorEl) {
            this.adapter_.setMenuAnchorElement(anchorEl);
            this.adapter_.setMenuAnchorCorner(Corner.BOTTOM_START);
        }
        this.adapter_.setMenuWrapFocus(false);
        var value = this.getValue();
        if (value) {
            this.setValue(value);
        }
        // Initially sync floating label
        this.updateLabel();
    };
    /**
     * Notches the outline and floats the label when appropriate.
     */
    MDCSelectFoundation.prototype.updateLabel = function () {
        var value = this.getValue();
        var optionHasValue = value.length > 0;
        if (this.adapter_.hasLabel()) {
            this.notchOutline(optionHasValue);
            if (!this.adapter_.hasClass(cssClasses.FOCUSED)) {
                this.adapter_.floatLabel(optionHasValue);
            }
        }
    };
    /**
     * Unfocuses the select component.
     */
    MDCSelectFoundation.prototype.blur = function () {
        this.adapter_.removeClass(cssClasses.FOCUSED);
        this.updateLabel();
        this.adapter_.deactivateBottomLine();
        var isRequired = this.adapter_.hasClass(cssClasses.REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText) {
                this.helperText.setValidity(this.isValid());
            }
        }
    };
    return MDCSelectFoundation;
}(MDCFoundation));
export { MDCSelectFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCSelectFoundation;
//# sourceMappingURL=foundation.js.map