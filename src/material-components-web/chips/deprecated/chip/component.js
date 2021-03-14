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
import { MDCComponent } from '@material/base/component';
import { MDCRipple } from '@material/ripple/component';
import { MDCRippleFoundation } from '@material/ripple/foundation';
import { MDCChipTrailingAction } from '../trailingaction/component';
import { strings as trailingActionStrings } from '../trailingaction/constants';
import { strings } from './constants';
import { MDCChipFoundation } from './foundation';
var MDCChip = /** @class */ (function (_super) {
    __extends(MDCChip, _super);
    function MDCChip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCChip.prototype, "selected", {
        /**
         * @return Whether the chip is selected.
         */
        get: function () {
            return this.foundation.isSelected();
        },
        /**
         * Sets selected state on the chip.
         */
        set: function (selected) {
            this.foundation.setSelected(selected);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
        /**
         * @return Whether a trailing icon click should trigger exit/removal of the chip.
         */
        get: function () {
            return this.foundation.getShouldRemoveOnTrailingIconClick();
        },
        /**
         * Sets whether a trailing icon click should trigger exit/removal of the chip.
         */
        set: function (shouldRemove) {
            this.foundation.setShouldRemoveOnTrailingIconClick(shouldRemove);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "setShouldFocusPrimaryActionOnClick", {
        /**
         * Sets whether a clicking on the chip should focus the primary action.
         */
        set: function (shouldFocus) {
            this.foundation.setShouldFocusPrimaryActionOnClick(shouldFocus);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "id", {
        get: function () {
            return this.root.id;
        },
        enumerable: false,
        configurable: true
    });
    MDCChip.attachTo = function (root) {
        return new MDCChip(root);
    };
    MDCChip.prototype.initialize = function (rippleFactory, trailingActionFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new MDCRipple(el, foundation); }; }
        if (trailingActionFactory === void 0) { trailingActionFactory = function (el) { return new MDCChipTrailingAction(el); }; }
        this.leadingIcon_ = this.root.querySelector(strings.LEADING_ICON_SELECTOR);
        this.checkmark_ = this.root.querySelector(strings.CHECKMARK_SELECTOR);
        this.primaryAction_ =
            this.root.querySelector(strings.PRIMARY_ACTION_SELECTOR);
        var trailingActionEl = this.root.querySelector(strings.TRAILING_ACTION_SELECTOR);
        if (trailingActionEl) {
            this.trailingAction_ = trailingActionFactory(trailingActionEl);
        }
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var rippleAdapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { computeBoundingRect: function () { return _this.foundation.getDimensions(); } });
        this.ripple_ =
            rippleFactory(this.root, new MDCRippleFoundation(rippleAdapter));
    };
    MDCChip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        // Custom events
        this.handleTrailingActionInteraction_ = function () {
            _this.foundation.handleTrailingActionInteraction();
        };
        this.handleTrailingActionNavigation_ =
            function (evt) {
                _this.foundation.handleTrailingActionNavigation(evt);
            };
        // Native events
        this.handleClick_ = function () {
            _this.foundation.handleClick();
        };
        this.handleKeydown_ = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleTransitionEnd_ = function (evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.handleFocusIn_ = function (evt) {
            _this.foundation.handleFocusIn(evt);
        };
        this.handleFocusOut_ = function (evt) {
            _this.foundation.handleFocusOut(evt);
        };
        this.listen('transitionend', this.handleTransitionEnd_);
        this.listen('click', this.handleClick_);
        this.listen('keydown', this.handleKeydown_);
        this.listen('focusin', this.handleFocusIn_);
        this.listen('focusout', this.handleFocusOut_);
        if (this.trailingAction_) {
            this.listen(trailingActionStrings.INTERACTION_EVENT, this.handleTrailingActionInteraction_);
            this.listen(trailingActionStrings.NAVIGATION_EVENT, this.handleTrailingActionNavigation_);
        }
    };
    MDCChip.prototype.destroy = function () {
        this.ripple_.destroy();
        this.unlisten('transitionend', this.handleTransitionEnd_);
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('click', this.handleClick_);
        this.unlisten('focusin', this.handleFocusIn_);
        this.unlisten('focusout', this.handleFocusOut_);
        if (this.trailingAction_) {
            this.unlisten(trailingActionStrings.INTERACTION_EVENT, this.handleTrailingActionInteraction_);
            this.unlisten(trailingActionStrings.NAVIGATION_EVENT, this.handleTrailingActionNavigation_);
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChip.prototype.beginExit = function () {
        this.foundation.beginExit();
    };
    MDCChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            addClassToLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.add(className);
                }
            },
            eventTargetHasClass: function (target, className) {
                return target ? target.classList.contains(className) : false;
            },
            focusPrimaryAction: function () {
                if (_this.primaryAction_) {
                    _this.primaryAction_.focus();
                }
            },
            focusTrailingAction: function () {
                if (_this.trailingAction_) {
                    _this.trailingAction_.focus();
                }
            },
            getAttribute: function (attr) { return _this.root.getAttribute(attr); },
            getCheckmarkBoundingClientRect: function () {
                return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
            },
            getComputedStyleValue: function (propertyName) {
                return window.getComputedStyle(_this.root).getPropertyValue(propertyName);
            },
            getRootBoundingClientRect: function () { return _this.root.getBoundingClientRect(); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            hasLeadingIcon: function () { return !!_this.leadingIcon_; },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            isTrailingActionNavigable: function () {
                if (_this.trailingAction_) {
                    return _this.trailingAction_.isNavigable();
                }
                return false;
            },
            notifyInteraction: function () { return _this.emit(strings.INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            notifyNavigation: function (key, source) {
                return _this.emit(strings.NAVIGATION_EVENT, { chipId: _this.id, key: key, source: source }, true /* shouldBubble */);
            },
            notifyRemoval: function (removedAnnouncement) {
                _this.emit(strings.REMOVAL_EVENT, { chipId: _this.id, removedAnnouncement: removedAnnouncement }, true /* shouldBubble */);
            },
            notifySelection: function (selected, shouldIgnore) {
                return _this.emit(strings.SELECTION_EVENT, { chipId: _this.id, selected: selected, shouldIgnore: shouldIgnore }, true /* shouldBubble */);
            },
            notifyTrailingIconInteraction: function () {
                return _this.emit(strings.TRAILING_ICON_INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */);
            },
            notifyEditStart: function () { },
            notifyEditFinish: function () { },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            removeClassFromLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.remove(className);
                }
            },
            removeTrailingActionFocus: function () {
                if (_this.trailingAction_) {
                    _this.trailingAction_.removeFocus();
                }
            },
            setPrimaryActionAttr: function (attr, value) {
                if (_this.primaryAction_) {
                    _this.primaryAction_.setAttribute(attr, value);
                }
            },
            setStyleProperty: function (propertyName, value) {
                return _this.root.style.setProperty(propertyName, value);
            },
        };
        return new MDCChipFoundation(adapter);
    };
    MDCChip.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
        this.foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    };
    MDCChip.prototype.focusPrimaryAction = function () {
        this.foundation.focusPrimaryAction();
    };
    MDCChip.prototype.focusTrailingAction = function () {
        this.foundation.focusTrailingAction();
    };
    MDCChip.prototype.removeFocus = function () {
        this.foundation.removeFocus();
    };
    MDCChip.prototype.remove = function () {
        var parent = this.root.parentNode;
        if (parent !== null) {
            parent.removeChild(this.root);
        }
    };
    return MDCChip;
}(MDCComponent));
export { MDCChip };
//# sourceMappingURL=component.js.map