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
import { MDCComponent } from '../base/component';
import { MDCFloatingLabel } from '../floating-label/component';
import { MDCLineRipple } from '../line-ripple/component';
import * as menuSurfaceConstants from '../menu-surface/constants';
import { MDCMenu } from '../menu/component';
import * as menuConstants from '../menu/constants';
import { MDCNotchedOutline } from '../notched-outline/component';
import { MDCRipple } from '../ripple/component';
import { MDCRippleFoundation } from '../ripple/foundation';
import { cssClasses, strings } from './constants';
import { MDCSelectFoundation } from './foundation';
import { MDCSelectHelperText } from './helper-text/component';
import { MDCSelectIcon } from './icon/component';
var MDCSelect = /** @class */ (function (_super) {
    tslib_1.__extends(MDCSelect, _super);
    function MDCSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelect.attachTo = function (root) {
        return new MDCSelect(root);
    };
    MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
        if (labelFactory === void 0) { labelFactory = function (el) { return new MDCFloatingLabel(el); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new MDCLineRipple(el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new MDCNotchedOutline(el); }; }
        if (menuFactory === void 0) { menuFactory = function (el) { return new MDCMenu(el); }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new MDCSelectIcon(el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) { return new MDCSelectHelperText(el); }; }
        this.selectAnchor_ = this.root_.querySelector(strings.SELECT_ANCHOR_SELECTOR);
        this.selectedText_ = this.root_.querySelector(strings.SELECTED_TEXT_SELECTOR);
        if (!this.selectedText_) {
            throw new Error('MDCSelect: Missing required element: The following selector must be present: ' +
                ("'" + strings.SELECTED_TEXT_SELECTOR + "'"));
        }
        if (this.selectedText_.hasAttribute(strings.ARIA_CONTROLS)) {
            var helperTextElement = document.getElementById(this.selectedText_.getAttribute(strings.ARIA_CONTROLS));
            if (helperTextElement) {
                this.helperText_ = helperTextFactory(helperTextElement);
            }
        }
        this.menuSetup_(menuFactory);
        var labelElement = this.root_.querySelector(strings.LABEL_SELECTOR);
        this.label_ = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root_.querySelector(strings.LINE_RIPPLE_SELECTOR);
        this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root_.querySelector(strings.OUTLINE_SELECTOR);
        this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
        var leadingIcon = this.root_.querySelector(strings.LEADING_ICON_SELECTOR);
        if (leadingIcon) {
            this.leadingIcon_ = iconFactory(leadingIcon);
        }
        if (!this.root_.classList.contains(cssClasses.OUTLINED)) {
            this.ripple_ = this.createRipple_();
        }
    };
    /**
     * Initializes the select's event listeners and internal state based
     * on the environment's state.
     */
    MDCSelect.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange_ = function () { return _this.foundation_.handleChange(); };
        this.handleFocus_ = function () { return _this.foundation_.handleFocus(); };
        this.handleBlur_ = function () { return _this.foundation_.handleBlur(); };
        this.handleClick_ = function (evt) {
            _this.selectedText_.focus();
            _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
        };
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleMenuItemAction_ = function (evt) { return _this.foundation_.handleMenuItemAction(evt.detail.index); };
        this.handleMenuOpened_ = function () { return _this.foundation_.handleMenuOpened(); };
        this.handleMenuClosed_ = function () { return _this.foundation_.handleMenuClosed(); };
        this.selectedText_.addEventListener('focus', this.handleFocus_);
        this.selectedText_.addEventListener('blur', this.handleBlur_);
        this.selectedText_.addEventListener('click', this.handleClick_);
        this.selectedText_.addEventListener('keydown', this.handleKeydown_);
        this.menu_.listen(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed_);
        this.menu_.listen(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened_);
        this.menu_.listen(menuConstants.strings.SELECTED_EVENT, this.handleMenuItemAction_);
        this.foundation_.init();
        // Sets disabled state in foundation
        this.disabled = this.root_.classList.contains(cssClasses.DISABLED);
    };
    MDCSelect.prototype.destroy = function () {
        this.selectedText_.removeEventListener('change', this.handleChange_);
        this.selectedText_.removeEventListener('focus', this.handleFocus_);
        this.selectedText_.removeEventListener('blur', this.handleBlur_);
        this.selectedText_.removeEventListener('keydown', this.handleKeydown_);
        this.selectedText_.removeEventListener('click', this.handleClick_);
        this.menu_.unlisten(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed_);
        this.menu_.unlisten(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened_);
        this.menu_.unlisten(menuConstants.strings.SELECTED_EVENT, this.handleMenuItemAction_);
        this.menu_.destroy();
        if (this.ripple_) {
            this.ripple_.destroy();
        }
        if (this.outline_) {
            this.outline_.destroy();
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.destroy();
        }
        if (this.helperText_) {
            this.helperText_.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCSelect.prototype, "value", {
        get: function () {
            return this.foundation_.getValue();
        },
        set: function (value) {
            this.foundation_.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
        get: function () {
            return this.foundation_.getSelectedIndex();
        },
        set: function (selectedIndex) {
            this.foundation_.setSelectedIndex(selectedIndex, /** closeMenu */ true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "disabled", {
        get: function () {
            return this.foundation_.getDisabled();
        },
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
        set: function (label) {
            this.foundation_.setLeadingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation_.setLeadingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
        /**
         * Sets the text content of the helper text.
         */
        set: function (content) {
            this.foundation_.setHelperTextContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "valid", {
        /**
         * Checks if the select is in a valid state.
         */
        get: function () {
            return this.foundation_.isValid();
        },
        /**
         * Sets the current invalid state of the select.
         */
        set: function (isValid) {
            this.foundation_.setValid(isValid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "required", {
        /**
         * Returns whether the select is required.
         */
        get: function () {
            return this.foundation_.getRequired();
        },
        /**
         * Sets the control to the required state.
         */
        set: function (isRequired) {
            this.foundation_.setRequired(isRequired);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCSelect.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCSelect.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = tslib_1.__assign({}, this.getSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());
        return new MDCSelectFoundation(adapter, this.getFoundationMap_());
    };
    /**
     * Handles setup for the menu.
     */
    MDCSelect.prototype.menuSetup_ = function (menuFactory) {
        this.menuElement_ = this.root_.querySelector(strings.MENU_SELECTOR);
        this.menu_ = menuFactory(this.menuElement_);
    };
    MDCSelect.prototype.createRipple_ = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = tslib_1.__assign({}, MDCRipple.createAdapter({ root_: this.selectAnchor_ }), { registerInteractionHandler: function (evtType, handler) { return _this.selectedText_.addEventListener(evtType, handler); }, deregisterInteractionHandler: function (evtType, handler) { return _this.selectedText_.removeEventListener(evtType, handler); } });
        // tslint:enable:object-literal-sort-keys
        return new MDCRipple(this.selectAnchor_, new MDCRippleFoundation(adapter));
    };
    MDCSelect.prototype.getSelectAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getSelectedMenuItem: function () { return _this.menuElement_.querySelector(strings.SELECTED_ITEM_SELECTOR); },
            getMenuItemAttr: function (menuItem, attr) { return menuItem.getAttribute(attr); },
            setSelectedText: function (text) { return _this.selectedText_.textContent = text; },
            isSelectedTextFocused: function () { return document.activeElement === _this.selectedText_; },
            getSelectedTextAttr: function (attr) { return _this.selectedText_.getAttribute(attr); },
            setSelectedTextAttr: function (attr, value) { return _this.selectedText_.setAttribute(attr, value); },
            openMenu: function () { return _this.menu_.open = true; },
            closeMenu: function () { return _this.menu_.open = false; },
            getAnchorElement: function () { return _this.root_.querySelector(strings.SELECT_ANCHOR_SELECTOR); },
            setMenuAnchorElement: function (anchorEl) { return _this.menu_.setAnchorElement(anchorEl); },
            setMenuAnchorCorner: function (anchorCorner) { return _this.menu_.setAnchorCorner(anchorCorner); },
            setMenuWrapFocus: function (wrapFocus) { return _this.menu_.wrapFocus = wrapFocus; },
            setAttributeAtIndex: function (index, attributeName, attributeValue) {
                return _this.menu_.items[index].setAttribute(attributeName, attributeValue);
            },
            removeAttributeAtIndex: function (index, attributeName) {
                return _this.menu_.items[index].removeAttribute(attributeName);
            },
            focusMenuItemAtIndex: function (index) { return _this.menu_.items[index].focus(); },
            getMenuItemCount: function () { return _this.menu_.items.length; },
            getMenuItemValues: function () { return _this.menu_.items.map(function (el) { return el.getAttribute(strings.VALUE_ATTR) || ''; }); },
            getMenuItemTextAtIndex: function (index) { return _this.menu_.items[index].textContent; },
            addClassAtIndex: function (index, className) { return _this.menu_.items[index].classList.add(className); },
            removeClassAtIndex: function (index, className) { return _this.menu_.items[index].classList.remove(className); },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getCommonAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setRippleCenter: function (normalizedX) { return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX); },
            activateBottomLine: function () { return _this.lineRipple_ && _this.lineRipple_.activate(); },
            deactivateBottomLine: function () { return _this.lineRipple_ && _this.lineRipple_.deactivate(); },
            notifyChange: function (value) {
                var index = _this.selectedIndex;
                _this.emit(strings.CHANGE_EVENT, { value: value, index: index }, true /* shouldBubble  */);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasOutline: function () { return Boolean(_this.outline_); },
            notchOutline: function (labelWidth) { return _this.outline_ && _this.outline_.notch(labelWidth); },
            closeOutline: function () { return _this.outline_ && _this.outline_.closeNotch(); },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getLabelAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasLabel: function () { return !!_this.label_; },
            floatLabel: function (shouldFloat) { return _this.label_ && _this.label_.float(shouldFloat); },
            getLabelWidth: function () { return _this.label_ ? _this.label_.getWidth() : 0; },
        };
        // tslint:enable:object-literal-sort-keys
    };
    /**
     * Calculates where the line ripple should start based on the x coordinate within the component.
     */
    MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
        return xCoordinate - targetClientRect.left;
    };
    MDCSelect.prototype.isTouchEvent_ = function (evt) {
        return Boolean(evt.touches);
    };
    /**
     * Returns a map of all subcomponents to subfoundations.
     */
    MDCSelect.prototype.getFoundationMap_ = function () {
        return {
            helperText: this.helperText_ ? this.helperText_.foundation : undefined,
            leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
        };
    };
    return MDCSelect;
}(MDCComponent));
export { MDCSelect };
//# sourceMappingURL=component.js.map