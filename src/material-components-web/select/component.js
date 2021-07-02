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
            this.root.querySelector(strings.SELECT_ANCHOR_SELECTOR);
        this.selectedText =
            this.root.querySelector(strings.SELECTED_TEXT_SELECTOR);
        this.hiddenInput = this.root.querySelector(strings.HIDDEN_INPUT_SELECTOR);
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
        var labelElement = this.root.querySelector(strings.LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root.querySelector(strings.LINE_RIPPLE_SELECTOR);
        this.lineRipple =
            lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root.querySelector(strings.OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        var leadingIcon = this.root.querySelector(strings.LEADING_ICON_SELECTOR);
        if (leadingIcon) {
            this.leadingIcon = iconFactory(leadingIcon);
        }
        if (!this.root.classList.contains(cssClasses.OUTLINED)) {
            this.ripple = this.createRipple();
        }
    };
    /**
     * Initializes the select's event listeners and internal state based
     * on the environment's state.
     */
    MDCSelect.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleFocus = function () {
            _this.foundation.handleFocus();
        };
        this.handleBlur = function () {
            _this.foundation.handleBlur();
        };
        this.handleClick = function (evt) {
            _this.selectAnchor.focus();
            _this.foundation.handleClick(_this.getNormalizedXCoordinate(evt));
        };
        this.handleKeydown = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleMenuItemAction = function (evt) {
            _this.foundation.handleMenuItemAction(evt.detail.index);
        };
        this.handleMenuOpened = function () {
            _this.foundation.handleMenuOpened();
        };
        this.handleMenuClosed = function () {
            _this.foundation.handleMenuClosed();
        };
        this.handleMenuClosing = function () {
            _this.foundation.handleMenuClosing();
        };
        this.selectAnchor.addEventListener('focus', this.handleFocus);
        this.selectAnchor.addEventListener('blur', this.handleBlur);
        this.selectAnchor.addEventListener('click', this.handleClick);
        this.selectAnchor.addEventListener('keydown', this.handleKeydown);
        this.menu.listen(menuSurfaceConstants.strings.CLOSED_EVENT, this.handleMenuClosed);
        this.menu.listen(menuSurfaceConstants.strings.CLOSING_EVENT, this.handleMenuClosing);
        this.menu.listen(menuSurfaceConstants.strings.OPENED_EVENT, this.handleMenuOpened);
        this.menu.listen(menuConstants.strings.SELECTED_EVENT, this.handleMenuItemAction);
        if (this.hiddenInput) {
            if (this.hiddenInput.value) {
                // If the hidden input already has a value, use it to restore the
                // select's value. This can happen e.g. if the user goes back or (in
                // some browsers) refreshes the page.
                this.foundation.setValue(this.hiddenInput.value, /** skipNotify */ true);
                this.foundation.layout();
                return;
            }
            this.hiddenInput.value = this.value;
        }
    };
    MDCSelect.prototype.destroy = function () {
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
            return this.foundation.getValue();
        },
        set: function (value) {
            this.foundation.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    MDCSelect.prototype.setValue = function (value, skipNotify) {
        if (skipNotify === void 0) { skipNotify = false; }
        this.foundation.setValue(value, skipNotify);
    };
    Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
        get: function () {
            return this.foundation.getSelectedIndex();
        },
        set: function (selectedIndex) {
            this.foundation.setSelectedIndex(selectedIndex, /* closeMenu */ true);
        },
        enumerable: false,
        configurable: true
    });
    MDCSelect.prototype.setSelectedIndex = function (selectedIndex, skipNotify) {
        if (skipNotify === void 0) { skipNotify = false; }
        this.foundation.setSelectedIndex(selectedIndex, /* closeMenu */ true, skipNotify);
    };
    Object.defineProperty(MDCSelect.prototype, "disabled", {
        get: function () {
            return this.foundation.getDisabled();
        },
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
            if (this.hiddenInput) {
                this.hiddenInput.disabled = disabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
        set: function (label) {
            this.foundation.setLeadingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation.setLeadingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
        /**
         * Sets the text content of the helper text.
         */
        set: function (content) {
            this.foundation.setHelperTextContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "useDefaultValidation", {
        /**
         * Enables or disables the default validation scheme where a required select
         * must be non-empty. Set to false for custom validation.
         * @param useDefaultValidation Set this to false to ignore default
         *     validation scheme.
         */
        set: function (useDefaultValidation) {
            this.foundation.setUseDefaultValidation(useDefaultValidation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "valid", {
        /**
         * Checks if the select is in a valid state.
         */
        get: function () {
            return this.foundation.isValid();
        },
        /**
         * Sets the current invalid state of the select.
         */
        set: function (isValid) {
            this.foundation.setValid(isValid);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "required", {
        /**
         * Returns whether the select is required.
         */
        get: function () {
            return this.foundation.getRequired();
        },
        /**
         * Sets the control to the required state.
         */
        set: function (isRequired) {
            this.foundation.setRequired(isRequired);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */
    MDCSelect.prototype.layout = function () {
        this.foundation.layout();
    };
    /**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */
    MDCSelect.prototype.layoutOptions = function () {
        this.foundation.layoutOptions();
        this.menu.layout();
        // Update cached menuItemValues for adapter.
        this.menuItemValues =
            this.menu.items.map(function (el) { return el.getAttribute(strings.VALUE_ATTR) || ''; });
        if (this.hiddenInput) {
            this.hiddenInput.value = this.value;
        }
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
        this.menuElement = this.root.querySelector(strings.MENU_SELECTOR);
        this.menu = menuFactory(this.menuElement);
        this.menu.hasTypeahead = true;
        this.menu.singleSelection = true;
        this.menuItemValues =
            this.menu.items.map(function (el) { return el.getAttribute(strings.VALUE_ATTR) || ''; });
    };
    MDCSelect.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = __assign(__assign({}, MDCRipple.createAdapter({ root: this.selectAnchor })), { registerInteractionHandler: function (evtType, handler) {
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
            getMenuItemAttr: function (menuItem, attr) {
                return menuItem.getAttribute(attr);
            },
            setSelectedText: function (text) {
                _this.selectedText.textContent = text;
            },
            isSelectAnchorFocused: function () { return document.activeElement === _this.selectAnchor; },
            getSelectAnchorAttr: function (attr) {
                return _this.selectAnchor.getAttribute(attr);
            },
            setSelectAnchorAttr: function (attr, value) {
                _this.selectAnchor.setAttribute(attr, value);
            },
            removeSelectAnchorAttr: function (attr) {
                _this.selectAnchor.removeAttribute(attr);
            },
            addMenuClass: function (className) {
                _this.menuElement.classList.add(className);
            },
            removeMenuClass: function (className) {
                _this.menuElement.classList.remove(className);
            },
            openMenu: function () {
                _this.menu.open = true;
            },
            closeMenu: function () {
                _this.menu.open = false;
            },
            getAnchorElement: function () {
                return _this.root.querySelector(strings.SELECT_ANCHOR_SELECTOR);
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
            getSelectedIndex: function () {
                var index = _this.menu.selectedIndex;
                return index instanceof Array ? index[0] : index;
            },
            setSelectedIndex: function (index) {
                _this.menu.selectedIndex = index;
            },
            focusMenuItemAtIndex: function (index) {
                _this.menu.items[index].focus();
            },
            getMenuItemCount: function () { return _this.menu.items.length; },
            // Cache menu item values. layoutOptions() updates this cache.
            getMenuItemValues: function () { return _this.menuItemValues; },
            getMenuItemTextAtIndex: function (index) {
                return _this.menu.getPrimaryTextAtIndex(index);
            },
            isTypeaheadInProgress: function () { return _this.menu.typeaheadInProgress; },
            typeaheadMatchItem: function (nextChar, startingIndex) {
                return _this.menu.typeaheadMatchItem(nextChar, startingIndex);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getCommonAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
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
                if (_this.hiddenInput) {
                    _this.hiddenInput.value = value;
                }
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
            setLabelRequired: function (isRequired) {
                _this.label && _this.label.setRequired(isRequired);
            },
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
            helperText: this.helperText ? this.helperText.foundationForSelect :
                undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForSelect :
                undefined,
        };
    };
    return MDCSelect;
}(MDCComponent));
export { MDCSelect };
//# sourceMappingURL=component.js.map