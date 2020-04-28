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
import { MDCComponent } from '../../base/component';
import { MDCRipple } from '../../ripple/component';
import { MDCRippleFoundation } from '../../ripple/foundation';
import { strings } from './constants';
import { MDCChipFoundation } from './foundation';
var INTERACTION_EVENTS = ['click', 'keydown'];
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
            return this.foundation_.isSelected();
        },
        /**
         * Sets selected state on the chip.
         */
        set: function (selected) {
            this.foundation_.setSelected(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
        /**
         * @return Whether a trailing icon click should trigger exit/removal of the chip.
         */
        get: function () {
            return this.foundation_.getShouldRemoveOnTrailingIconClick();
        },
        /**
         * Sets whether a trailing icon click should trigger exit/removal of the chip.
         */
        set: function (shouldRemove) {
            this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "id", {
        get: function () {
            return this.root_.id;
        },
        enumerable: true,
        configurable: true
    });
    MDCChip.attachTo = function (root) {
        return new MDCChip(root);
    };
    MDCChip.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new MDCRipple(el, foundation); }; }
        this.leadingIcon_ = this.root_.querySelector(strings.LEADING_ICON_SELECTOR);
        this.trailingIcon_ = this.root_.querySelector(strings.TRAILING_ICON_SELECTOR);
        this.checkmark_ = this.root_.querySelector(strings.CHECKMARK_SELECTOR);
        this.primaryAction_ = this.root_.querySelector(strings.PRIMARY_ACTION_SELECTOR);
        this.trailingAction_ = this.root_.querySelector(strings.TRAILING_ACTION_SELECTOR);
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var rippleAdapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { computeBoundingRect: function () { return _this.foundation_.getDimensions(); } });
        this.ripple_ = rippleFactory(this.root_, new MDCRippleFoundation(rippleAdapter));
    };
    MDCChip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function (evt) { return _this.foundation_.handleInteraction(evt); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.handleTrailingIconInteraction_ = function (evt) {
            return _this.foundation_.handleTrailingIconInteraction(evt);
        };
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleFocusIn_ = function (evt) {
            _this.foundation_.handleFocusIn(evt);
        };
        this.handleFocusOut_ = function (evt) {
            _this.foundation_.handleFocusOut(evt);
        };
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.listen(evtType, _this.handleInteraction_);
        });
        this.listen('transitionend', this.handleTransitionEnd_);
        this.listen('keydown', this.handleKeydown_);
        this.listen('focusin', this.handleFocusIn_);
        this.listen('focusout', this.handleFocusOut_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
    };
    MDCChip.prototype.destroy = function () {
        var _this = this;
        this.ripple_.destroy();
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.unlisten(evtType, _this.handleInteraction_);
        });
        this.unlisten('transitionend', this.handleTransitionEnd_);
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('focusin', this.handleFocusIn_);
        this.unlisten('focusout', this.handleFocusOut_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChip.prototype.beginExit = function () {
        this.foundation_.beginExit();
    };
    MDCChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
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
            getAttribute: function (attr) { return _this.root_.getAttribute(attr); },
            getCheckmarkBoundingClientRect: function () {
                return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
            },
            getComputedStyleValue: function (propertyName) {
                return window.getComputedStyle(_this.root_).getPropertyValue(propertyName);
            },
            getRootBoundingClientRect: function () { return _this.root_.getBoundingClientRect(); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            hasLeadingIcon: function () { return !!_this.leadingIcon_; },
            hasTrailingAction: function () { return !!_this.trailingAction_; },
            isRTL: function () {
                return window.getComputedStyle(_this.root_).getPropertyValue('direction') ===
                    'rtl';
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
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeClassFromLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.remove(className);
                }
            },
            setPrimaryActionAttr: function (attr, value) {
                if (_this.primaryAction_) {
                    _this.primaryAction_.setAttribute(attr, value);
                }
            },
            setStyleProperty: function (propertyName, value) {
                return _this.root_.style.setProperty(propertyName, value);
            },
            setTrailingActionAttr: function (attr, value) {
                if (_this.trailingAction_) {
                    _this.trailingAction_.setAttribute(attr, value);
                }
            },
        };
        return new MDCChipFoundation(adapter);
    };
    MDCChip.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
        this.foundation_.setSelectedFromChipSet(selected, shouldNotifyClients);
    };
    MDCChip.prototype.focusPrimaryAction = function () {
        this.foundation_.focusPrimaryAction();
    };
    MDCChip.prototype.focusTrailingAction = function () {
        this.foundation_.focusTrailingAction();
    };
    MDCChip.prototype.removeFocus = function () {
        this.foundation_.removeFocus();
    };
    MDCChip.prototype.remove = function () {
        var parent = this.root_.parentNode;
        if (parent !== null) {
            parent.removeChild(this.root_);
        }
    };
    return MDCChip;
}(MDCComponent));
export { MDCChip };
//# sourceMappingURL=component.js.map