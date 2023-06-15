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
import { MDCRipple } from '../ripple/component';
import { cssClasses, strings } from './constants';
import { MDCFixedTopAppBarFoundation } from './fixed/foundation';
import { MDCShortTopAppBarFoundation } from './short/foundation';
import { MDCTopAppBarFoundation } from './standard/foundation';
var MDCTopAppBar = /** @class */ (function (_super) {
    __extends(MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function (root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el) { return MDCRipple.attachTo(el); }; }
        this.navIcon = this.root.querySelector(strings.NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root.querySelectorAll(strings.ACTION_ITEM_SELECTOR));
        if (this.navIcon) {
            icons.push(this.navIcon);
        }
        this.iconRipples = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget = window;
    };
    MDCTopAppBar.prototype.initialSyncWithDOM = function () {
        this.handleNavigationClick =
            this.foundation.handleNavigationClick.bind(this.foundation);
        this.handleWindowResize =
            this.foundation.handleWindowResize.bind(this.foundation);
        this.handleTargetScroll =
            this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll);
        if (this.navIcon) {
            this.navIcon.addEventListener('click', this.handleNavigationClick);
        }
        var isFixed = this.root.classList.contains(cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.addEventListener('resize', this.handleWindowResize);
        }
    };
    MDCTopAppBar.prototype.destroy = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.iconRipples), _c = _b.next(); !_c.done; _c = _b.next()) {
                var iconRipple = _c.value;
                iconRipple.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
        if (this.navIcon) {
            this.navIcon.removeEventListener('click', this.handleNavigationClick);
        }
        var isFixed = this.root.classList.contains(cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.removeEventListener('resize', this.handleWindowResize);
        }
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
        this.scrollTarget = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll =
            this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll);
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root.classList.contains(className); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setStyle: function (property, value) {
                return _this.root.style.setProperty(property, value);
            },
            getTopAppBarHeight: function () { return _this.root.clientHeight; },
            notifyNavigationIconClicked: function () {
                return _this.emit(strings.NAVIGATION_EVENT, {});
            },
            getViewportScrollY: function () {
                var win = _this.scrollTarget;
                var el = _this.scrollTarget;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () {
                return _this.root.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length;
            },
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root.classList.contains(cssClasses.SHORT_CLASS)) {
            foundation = new MDCShortTopAppBarFoundation(adapter);
        }
        else if (this.root.classList.contains(cssClasses.FIXED_CLASS)) {
            foundation = new MDCFixedTopAppBarFoundation(adapter);
        }
        else {
            foundation = new MDCTopAppBarFoundation(adapter);
        }
        return foundation;
    };
    return MDCTopAppBar;
}(MDCComponent));
export { MDCTopAppBar };
//# sourceMappingURL=component.js.map