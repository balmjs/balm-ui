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
    __extends(MDCSelect, _super);
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
        this.selectAnchor =
            this.root_.querySelector(strings.SELECT_ANCHOR_SELECTOR);
        this.selectedText = this.root_.querySelector(strings.SELECTED_TEXT_SELECTOR);
        if (!this.selectedText) {
            throw new Error('MDCSelect: Missing required element: The following selector must be present: ' +
                ("'" + strings.SELECTED_TEXT_SELECTOR + "'"));
        }
        if (this.selectAnchor.hasAttribute(strings.ARIA_CONTROLS)) {
            var helperTextElement = document.getElementById(this.selectAnchor.getAttribute(strings.ARIA_CONTROLS));
            if (helperTextElement) {
                this.helperText = helperTextFactory(helperTextElement);
            }
        }
        this.menuSetup(menuFactory);
        var labelElement = this.root_.querySelector(strings.LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root_.querySelector(strings.LINE_RIPPLE_SELECTOR);
        this.lineRipple =
            lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root_.querySelector(strings.OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        var leadingIcon = this.root_.querySelector(strings.LEADING_ICON_SELECTOR);
        if (leadingIcon) {
            this.leadingIcon = iconFactory(leadingIcon);
        }
        if (!this.root_.classList.contains(cssClasses.OUTLINED)) {
            this.ripple = this.createRipple();
        }
    };
    /**
     * Initializes the select's event listeners and internal state based
     * on the environment's state.
     */
    MDCSelect.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange = function () {
            _this.foundation_.handleChange();
        };
        this.handleFocus = function () {
            _this.foundation_.handleFocus();
        };
        this.handleBlur = function () {
            _this.foundation_.handleBlur();
        };
        this.handleClick = function (evt) {
            _this.selectAnchor.focus();
            _this.foundation_.handleClick(_this.getNormalizedXCoordinate(evt));
        };
        this.handleKeydown = function (evt) {
            _this.foundation_.handleKeydown(evt);
        };
        this.handleMenuItemAction = function (evt) {
            _this.foundation_.handleMenuItemAction(evt.detail.index);
        };
        this.handleMenuOpened = function () {
            _this.foundation_.handleMenuOpened();
        };
        this.handleMenuClosed = function () {
            _this.foundation_.handleMenuClosed();
        };
        this.selectAnchor.addEventListener('focus', this.handleFocus);
        this.selectAnchor.addEventListener('blur', this.handleBlur);
        this.selectAnchor.addEventListener('click', this.handleClick);
        this.selectAnchor.addEventListener('keydown', this.handleKeydown);
        this.menu.listen(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed);
        this.menu.listen(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened);
        this.menu.listen(menuConstants.strings.SELECTED_EVENT, this.handleMenuItemAction);
        this.foundation_.init();
    };
    MDCSelect.prototype.destroy = function () {
        this.selectAnchor.removeEventListener('change', this.handleChange);
        this.selectAnchor.removeEventListener('focus', this.handleFocus);
        this.selectAnchor.removeEventListener('blur', this.handleBlur);
        this.selectAnchor.removeEventListener('keydown', this.handleKeydown);
        this.selectAnchor.removeEventListener('click', this.handleClick);
        this.menu.unlisten(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed);
        this.menu.unlisten(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened);
        this.menu.unlisten(menuConstants.strings.SELECTED_EVENT, this.handleMenuItemAction);
        this.menu.destroy();
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.outline) {
            this.outline.destroy();
        }
        if (this.leadingIcon) {
            this.leadingIcon.destroy();
        }
        if (this.helperText) {
            this.helperText.destroy();
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
        var adapter = __assign(__assign(__assign(__assign({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
        return new MDCSelectFoundation(adapter, this.getFoundationMap());
    };
    /**
     * Handles setup for the menu.
     */
    MDCSelect.prototype.menuSetup = function (menuFactory) {
        this.menuElement = this.root_.querySelector(strings.MENU_SELECTOR);
        this.menu = menuFactory(this.menuElement);
    };
    MDCSelect.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = __assign(__assign({}, MDCRipple.createAdapter({ root_: this.selectAnchor })), { registerInteractionHandler: function (evtType, handler) {
                _this.selectAnchor.addEventListener(evtType, handler);
            }, deregisterInteractionHandler: function (evtType, handler) {
                _this.selectAnchor.removeEventListener(evtType, handler);
            } });
        // tslint:enable:object-literal-sort-keys
        return new MDCRipple(this.selectAnchor, new MDCRippleFoundation(adapter));
    };
    MDCSelect.prototype.getSelectAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getSelectedMenuItem: function () {
                return _this.menuElement.querySelector(strings.SELECTED_ITEM_SELECTOR);
            },
            getMenuItemAttr: function (menuItem, attr) {
                return menuItem.getAttribute(attr);
            },
            setSelectedText: function (text) {
                _this.selectedText.value = text;
            },
            isSelectAnchorFocused: function () { return document.activeElement === _this.selectAnchor; },
            getSelectAnchorAttr: function (attr) {
                return _this.selectAnchor.getAttribute(attr);
            },
            setSelectAnchorAttr: function (attr, value) {
                _this.selectAnchor.setAttribute(attr, value);
            },
            openMenu: function () {
                _this.menu.open = true;
            },
            closeMenu: function () {
                _this.menu.open = false;
            },
            getAnchorElement: function () {
                return _this.root_.querySelector(strings.SELECT_ANCHOR_SELECTOR);
            },
            setMenuAnchorElement: function (anchorEl) {
                _this.menu.setAnchorElement(anchorEl);
            },
            setMenuAnchorCorner: function (anchorCorner) {
                _this.menu.setAnchorCorner(anchorCorner);
            },
            setMenuWrapFocus: function (wrapFocus) {
                _this.menu.wrapFocus = wrapFocus;
            },
            setAttributeAtIndex: function (index, attributeName, attributeValue) {
                _this.menu.items[index].setAttribute(attributeName, attributeValue);
            },
            removeAttributeAtIndex: function (index, attributeName) {
                _this.menu.items[index].removeAttribute(attributeName);
            },
            focusMenuItemAtIndex: function (index) {
                _this.menu.items[index].focus();
            },
            getMenuItemCount: function () { return _this.menu.items.length; },
            getMenuItemValues: function () { return _this.menu.items.map(function (el) { return el.getAttribute(strings.VALUE_ATTR) || ''; }); },
            getMenuItemTextAtIndex: function (index) {
                return _this.menu.items[index].textContent;
            },
            addClassAtIndex: function (index, className) {
                _this.menu.items[index].classList.add(className);
            },
            removeClassAtIndex: function (index, className) {
                _this.menu.items[index].classList.remove(className);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getCommonAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) {
                _this.root_.classList.add(className);
            },
            removeClass: function (className) {
                _this.root_.classList.remove(className);
            },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setRippleCenter: function (normalizedX) {
                _this.lineRipple && _this.lineRipple.setRippleCenter(normalizedX);
            },
            activateBottomLine: function () {
                _this.lineRipple && _this.lineRipple.activate();
            },
            deactivateBottomLine: function () {
                _this.lineRipple && _this.lineRipple.deactivate();
            },
            notifyChange: function (value) {
                var index = _this.selectedIndex;
                _this.emit(strings.CHANGE_EVENT, { value: value, index: index }, true /* shouldBubble  */);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getOutlineAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasOutline: function () { return Boolean(_this.outline); },
            notchOutline: function (labelWidth) {
                _this.outline && _this.outline.notch(labelWidth);
            },
            closeOutline: function () {
                _this.outline && _this.outline.closeNotch();
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getLabelAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasLabel: function () { return !!_this.label; },
            floatLabel: function (shouldFloat) {
                _this.label && _this.label.float(shouldFloat);
            },
            getLabelWidth: function () { return _this.label ? _this.label.getWidth() : 0; },
        };
        // tslint:enable:object-literal-sort-keys
    };
    /**
     * Calculates where the line ripple should start based on the x coordinate within the component.
     */
    MDCSelect.prototype.getNormalizedXCoordinate = function (evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var xCoordinate = this.isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
        return xCoordinate - targetClientRect.left;
    };
    MDCSelect.prototype.isTouchEvent = function (evt) {
        return Boolean(evt.touches);
    };
    /**
     * Returns a map of all subcomponents to subfoundations.
     */
    MDCSelect.prototype.getFoundationMap = function () {
        return {
            helperText: this.helperText ? this.helperText.foundation : undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundation : undefined,
        };
    };
    return MDCSelect;
}(MDCComponent));
export { MDCSelect };
//# sourceMappingURL=component.js.map