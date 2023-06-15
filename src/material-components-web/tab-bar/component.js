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
import { __extends, __values } from "tslib";
import { MDCComponent } from '../base/component';
import { MDCTabScroller } from '../tab-scroller/component';
import { MDCTab } from '../tab/component';
import { MDCTabFoundation } from '../tab/foundation';
import { MDCTabBarFoundation } from './foundation';
var strings = MDCTabBarFoundation.strings;
var tabIdCounter = 0;
var MDCTabBar = /** @class */ (function (_super) {
    __extends(MDCTabBar, _super);
    function MDCTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabBar.attachTo = function (root) {
        return new MDCTabBar(root);
    };
    Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            var e_1, _a;
            try {
                for (var _b = __values(this.tabList), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var tab = _c.value;
                    tab.focusOnActivate = focusOnActivate;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
        set: function (useAutomaticActivation) {
            this.foundation.setUseAutomaticActivation(useAutomaticActivation);
        },
        enumerable: false,
        configurable: true
    });
    MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
        if (tabFactory === void 0) { tabFactory = function (el) { return new MDCTab(el); }; }
        if (tabScrollerFactory === void 0) { tabScrollerFactory = function (el) { return new MDCTabScroller(el); }; }
        this.tabList = this.instantiateTabs(tabFactory);
        this.tabScroller = this.instantiatetabScroller(tabScrollerFactory);
    };
    MDCTabBar.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleTabInteraction = function (evt) {
            _this.foundation.handleTabInteraction(evt);
        };
        this.handleKeyDown = function (evt) {
            _this.foundation.handleKeyDown(evt);
        };
        this.listen(MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction);
        this.listen('keydown', this.handleKeyDown);
        for (var i = 0; i < this.tabList.length; i++) {
            if (this.tabList[i].active) {
                this.scrollIntoView(i);
                break;
            }
        }
    };
    MDCTabBar.prototype.destroy = function () {
        var e_2, _a;
        _super.prototype.destroy.call(this);
        this.unlisten(MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction);
        this.unlisten('keydown', this.handleKeyDown);
        try {
            for (var _b = __values(this.tabList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                tab.destroy();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.tabScroller) {
            this.tabScroller.destroy();
        }
    };
    MDCTabBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            scrollTo: function (scrollX) {
                _this.tabScroller.scrollTo(scrollX);
            },
            incrementScroll: function (scrollXIncrement) {
                _this.tabScroller.incrementScroll(scrollXIncrement);
            },
            getScrollPosition: function () { return _this.tabScroller.getScrollPosition(); },
            getScrollContentWidth: function () { return _this.tabScroller.getScrollContentWidth(); },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            setActiveTab: function (index) {
                _this.foundation.activateTab(index);
            },
            activateTabAtIndex: function (index, clientRect) {
                _this.tabList[index].activate(clientRect);
            },
            deactivateTabAtIndex: function (index) {
                _this.tabList[index].deactivate();
            },
            focusTabAtIndex: function (index) {
                _this.tabList[index].focus();
            },
            getTabIndicatorClientRectAtIndex: function (index) {
                return _this.tabList[index].computeIndicatorClientRect();
            },
            getTabDimensionsAtIndex: function (index) {
                return _this.tabList[index].computeDimensions();
            },
            getPreviousActiveTabIndex: function () {
                for (var i = 0; i < _this.tabList.length; i++) {
                    if (_this.tabList[i].active) {
                        return i;
                    }
                }
                return -1;
            },
            getFocusedTabIndex: function () {
                var tabElements = _this.getTabElements();
                var activeElement = document.activeElement;
                return tabElements.indexOf(activeElement);
            },
            getIndexOfTabById: function (id) {
                for (var i = 0; i < _this.tabList.length; i++) {
                    if (_this.tabList[i].id === id) {
                        return i;
                    }
                }
                return -1;
            },
            getTabListLength: function () { return _this.tabList.length; },
            notifyTabActivated: function (index) { return _this.emit(strings.TAB_ACTIVATED_EVENT, { index: index }, true); },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCTabBarFoundation(adapter);
    };
    /**
     * Activates the tab at the given index
     * @param index The index of the tab
     */
    MDCTabBar.prototype.activateTab = function (index) {
        this.foundation.activateTab(index);
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index THe index of the tab
     */
    MDCTabBar.prototype.scrollIntoView = function (index) {
        this.foundation.scrollIntoView(index);
    };
    /**
     * Returns all the tab elements in a nice clean array
     */
    MDCTabBar.prototype.getTabElements = function () {
        return [].slice.call(this.root.querySelectorAll(strings.TAB_SELECTOR));
    };
    /**
     * Instantiates tab components on all child tab elements
     */
    MDCTabBar.prototype.instantiateTabs = function (tabFactory) {
        return this.getTabElements().map(function (el) {
            el.id = el.id || "mdc-tab-" + ++tabIdCounter;
            return tabFactory(el);
        });
    };
    /**
     * Instantiates tab scroller component on the child tab scroller element
     */
    MDCTabBar.prototype.instantiatetabScroller = function (tabScrollerFactory) {
        var tabScrollerElement = this.root.querySelector(strings.TAB_SCROLLER_SELECTOR);
        if (tabScrollerElement) {
            return tabScrollerFactory(tabScrollerElement);
        }
        return null;
    };
    return MDCTabBar;
}(MDCComponent));
export { MDCTabBar };
//# sourceMappingURL=component.js.map