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
import { MDCComponent } from '../base/component';
import { closest } from '../dom/ponyfill';
import { MDCList } from '../list/component';
import { numbers as listConstants } from '../list/constants';
import { MDCListFoundation } from '../list/foundation';
import { MDCMenuSurface } from '../menu-surface/component';
import { MDCMenuSurfaceFoundation } from '../menu-surface/foundation';
import { cssClasses, strings } from './constants';
import { MDCMenuFoundation } from './foundation';
var MDCMenu = /** @class */ (function (_super) {
    __extends(MDCMenu, _super);
    function MDCMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenu.attachTo = function (root) {
        return new MDCMenu(root);
    };
    MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
        if (menuSurfaceFactory === void 0) { menuSurfaceFactory = function (el) { return new MDCMenuSurface(el); }; }
        if (listFactory === void 0) { listFactory = function (el) { return new MDCList(el); }; }
        this.menuSurfaceFactory = menuSurfaceFactory;
        this.listFactory = listFactory;
    };
    MDCMenu.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.menuSurface = this.menuSurfaceFactory(this.root);
        var list = this.root.querySelector(strings.LIST_SELECTOR);
        if (list) {
            this.list = this.listFactory(list);
            this.list.wrapFocus = true;
        }
        else {
            this.list = null;
        }
        this.handleKeydown = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleItemAction = function (evt) {
            _this.foundation.handleItemAction(_this.items[evt.detail.index]);
        };
        this.handleMenuSurfaceOpened = function () {
            _this.foundation.handleMenuSurfaceOpened();
        };
        this.menuSurface.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened);
        this.listen('keydown', this.handleKeydown);
        this.listen(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction);
    };
    MDCMenu.prototype.destroy = function () {
        if (this.list) {
            this.list.destroy();
        }
        this.menuSurface.destroy();
        this.menuSurface.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened);
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction);
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCMenu.prototype, "open", {
        get: function () {
            return this.menuSurface.isOpen();
        },
        set: function (value) {
            if (value) {
                this.menuSurface.open();
            }
            else {
                this.menuSurface.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
        get: function () {
            return this.list ? this.list.wrapFocus : false;
        },
        set: function (value) {
            if (this.list) {
                this.list.wrapFocus = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "hasTypeahead", {
        /**
         * Sets whether the menu has typeahead functionality.
         * @param value Whether typeahead is enabled.
         */
        set: function (value) {
            if (this.list) {
                this.list.hasTypeahead = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "typeaheadInProgress", {
        /**
         * @return Whether typeahead logic is currently matching some user prefix.
         */
        get: function () {
            return this.list ? this.list.typeaheadInProgress : false;
        },
        enumerable: false,
        configurable: true
    });
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
    MDCMenu.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
        if (this.list) {
            return this.list.typeaheadMatchItem(nextChar, startingIndex);
        }
        return -1;
    };
    /**
     * Layout the underlying list element in the case of any dynamic updates
     * to its structure.
     */
    MDCMenu.prototype.layout = function () {
        if (this.list) {
            this.list.layout();
        }
    };
    Object.defineProperty(MDCMenu.prototype, "items", {
        /**
         * Return the items within the menu. Note that this only contains the set of elements within
         * the items container that are proper list items, and not supplemental / presentational DOM
         * elements.
         */
        get: function () {
            return this.list ? this.list.listElements : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "singleSelection", {
        /**
         * Turns on/off the underlying list's single selection mode. Used mainly
         * by select menu.
         *
         * @param singleSelection Whether to enable single selection mode.
         */
        set: function (singleSelection) {
            if (this.list) {
                this.list.singleSelection = singleSelection;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "selectedIndex", {
        /**
         * Retrieves the selected index. Only applicable to select menus.
         * @return The selected index, which is a number for single selection and
         *     radio lists, and an array of numbers for checkbox lists.
         */
        get: function () {
            return this.list ? this.list.selectedIndex : listConstants.UNSET_INDEX;
        },
        /**
         * Sets the selected index of the list. Only applicable to select menus.
         * @param index The selected index, which is a number for single selection and
         *     radio lists, and an array of numbers for checkbox lists.
         */
        set: function (index) {
            if (this.list) {
                this.list.selectedIndex = index;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "quickOpen", {
        set: function (quickOpen) {
            this.menuSurface.quickOpen = quickOpen;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     * @param focusState Default focus state.
     */
    MDCMenu.prototype.setDefaultFocusState = function (focusState) {
        this.foundation.setDefaultFocusState(focusState);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu corner.
     */
    MDCMenu.prototype.setAnchorCorner = function (corner) {
        this.menuSurface.setAnchorCorner(corner);
    };
    MDCMenu.prototype.setAnchorMargin = function (margin) {
        this.menuSurface.setAnchorMargin(margin);
    };
    /**
     * Sets the list item as the selected row at the specified index.
     * @param index Index of list item within menu.
     */
    MDCMenu.prototype.setSelectedIndex = function (index) {
        this.foundation.setSelectedIndex(index);
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenu.prototype.setEnabled = function (index, isEnabled) {
        this.foundation.setEnabled(index, isEnabled);
    };
    /**
     * @return The item within the menu at the index specified.
     */
    MDCMenu.prototype.getOptionByIndex = function (index) {
        var items = this.items;
        if (index < items.length) {
            return this.items[index];
        }
        else {
            return null;
        }
    };
    /**
     * @param index A menu item's index.
     * @return The primary text within the menu at the index specified.
     */
    MDCMenu.prototype.getPrimaryTextAtIndex = function (index) {
        var item = this.getOptionByIndex(index);
        if (item && this.list) {
            return this.list.getPrimaryText(item) || '';
        }
        return '';
    };
    MDCMenu.prototype.setFixedPosition = function (isFixed) {
        this.menuSurface.setFixedPosition(isFixed);
    };
    MDCMenu.prototype.setIsHoisted = function (isHoisted) {
        this.menuSurface.setIsHoisted(isHoisted);
    };
    MDCMenu.prototype.setAbsolutePosition = function (x, y) {
        this.menuSurface.setAbsolutePosition(x, y);
    };
    /**
     * Sets the element that the menu-surface is anchored to.
     */
    MDCMenu.prototype.setAnchorElement = function (element) {
        this.menuSurface.anchorElement = element;
    };
    MDCMenu.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClassToElementAtIndex: function (index, className) {
                var list = _this.items;
                list[index].classList.add(className);
            },
            removeClassFromElementAtIndex: function (index, className) {
                var list = _this.items;
                list[index].classList.remove(className);
            },
            addAttributeToElementAtIndex: function (index, attr, value) {
                var list = _this.items;
                list[index].setAttribute(attr, value);
            },
            removeAttributeFromElementAtIndex: function (index, attr) {
                var list = _this.items;
                list[index].removeAttribute(attr);
            },
            getAttributeFromElementAtIndex: function (index, attr) {
                var list = _this.items;
                return list[index].getAttribute(attr);
            },
            elementContainsClass: function (element, className) {
                return element.classList.contains(className);
            },
            closeSurface: function (skipRestoreFocus) {
                _this.menuSurface.close(skipRestoreFocus);
            },
            getElementIndex: function (element) { return _this.items.indexOf(element); },
            notifySelected: function (evtData) {
                _this.emit(strings.SELECTED_EVENT, {
                    index: evtData.index,
                    item: _this.items[evtData.index],
                });
            },
            getMenuItemCount: function () { return _this.items.length; },
            focusItemAtIndex: function (index) {
                _this.items[index].focus();
            },
            focusListRoot: function () {
                _this.root.querySelector(strings.LIST_SELECTOR).focus();
            },
            isSelectableItemAtIndex: function (index) {
                return !!closest(_this.items[index], "." + cssClasses.MENU_SELECTION_GROUP);
            },
            getSelectedSiblingOfItemAtIndex: function (index) {
                var selectionGroupEl = closest(_this.items[index], "." + cssClasses.MENU_SELECTION_GROUP);
                var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses.MENU_SELECTED_LIST_ITEM);
                return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCMenuFoundation(adapter);
    };
    return MDCMenu;
}(MDCComponent));
export { MDCMenu };
//# sourceMappingURL=component.js.map