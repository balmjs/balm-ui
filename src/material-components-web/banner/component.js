/**
 * @license
 * Copyright 2020 Google Inc.
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
import { FocusTrap } from '../dom/focus-trap';
import { closest } from '../dom/ponyfill';
import { events, selectors } from './constants';
import { MDCBannerFoundation } from './foundation';
/** Vanilla JS implementation of banner component. */
var MDCBanner = /** @class */ (function (_super) {
    __extends(MDCBanner, _super);
    function MDCBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCBanner.attachTo = function (root) {
        return new MDCBanner(root);
    };
    MDCBanner.prototype.initialize = function (focusTrapFactory) {
        var _this = this;
        if (focusTrapFactory === void 0) { focusTrapFactory = function (el, focusOptions) {
            return new FocusTrap(el, focusOptions);
        }; }
        this.contentEl = this.root.querySelector(selectors.CONTENT);
        this.textEl = this.root.querySelector(selectors.TEXT);
        this.primaryActionEl =
            this.root.querySelector(selectors.PRIMARY_ACTION);
        this.secondaryActionEl =
            this.root.querySelector(selectors.SECONDARY_ACTION);
        this.focusTrapFactory = focusTrapFactory;
        this.handleContentClick = function (evt) {
            var target = evt.target;
            if (closest(target, selectors.PRIMARY_ACTION)) {
                _this.foundation.handlePrimaryActionClick();
            }
            else if (closest(target, selectors.SECONDARY_ACTION)) {
                _this.foundation.handleSecondaryActionClick();
            }
        };
    };
    MDCBanner.prototype.initialSyncWithDOM = function () {
        this.registerContentClickHandler(this.handleContentClick);
        this.focusTrap = this.focusTrapFactory(this.root, { initialFocusEl: this.primaryActionEl });
    };
    MDCBanner.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.deregisterContentClickHandler(this.handleContentClick);
    };
    MDCBanner.prototype.layout = function () {
        this.foundation.layout();
    };
    /**
     * Opens the banner and fires events.OPENING to indicate the beginning of its
     * opening animation and then events.OPENED once the animation finishes.
     */
    MDCBanner.prototype.open = function () {
        this.foundation.open();
    };
    /**
     * Closes the banner and fires events.CLOSING to indicate the beginning of its
     * closing animation and then events.CLOSED once the animation finishes.
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
     *     custom handling of programmatic closing of the banner.
     */
    MDCBanner.prototype.close = function (reason) {
        this.foundation.close(reason);
    };
    MDCBanner.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            getContentHeight: function () {
                return _this.contentEl.offsetHeight;
            },
            notifyClosed: function (reason) {
                _this.emit(events.CLOSED, { reason: reason });
            },
            notifyClosing: function (reason) {
                _this.emit(events.CLOSING, { reason: reason });
            },
            notifyOpened: function () {
                _this.emit(events.OPENED, {});
            },
            notifyOpening: function () {
                _this.emit(events.OPENING, {});
            },
            releaseFocus: function () {
                _this.focusTrap.releaseFocus();
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setStyleProperty: function (propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            trapFocus: function () {
                _this.focusTrap.trapFocus();
            },
        };
        return new MDCBannerFoundation(adapter);
    };
    Object.defineProperty(MDCBanner.prototype, "isOpen", {
        get: function () {
            return this.foundation.isOpen();
        },
        enumerable: false,
        configurable: true
    });
    MDCBanner.prototype.getText = function () {
        return this.textEl.textContent || '';
    };
    MDCBanner.prototype.setText = function (text) {
        this.textEl.textContent = text;
    };
    MDCBanner.prototype.getPrimaryActionText = function () {
        return this.primaryActionEl.textContent || '';
    };
    MDCBanner.prototype.setPrimaryActionText = function (actionButtonText) {
        this.primaryActionEl.textContent = actionButtonText;
    };
    /** Returns null if the banner has no secondary action. */
    MDCBanner.prototype.getSecondaryActionText = function () {
        return this.secondaryActionEl ? this.secondaryActionEl.textContent || '' :
            null;
    };
    MDCBanner.prototype.setSecondaryActionText = function (actionButtonText) {
        if (this.secondaryActionEl) {
            this.secondaryActionEl.textContent = actionButtonText;
        }
    };
    MDCBanner.prototype.registerContentClickHandler = function (handler) {
        this.contentEl.addEventListener('click', handler);
    };
    MDCBanner.prototype.deregisterContentClickHandler = function (handler) {
        this.contentEl.removeEventListener('click', handler);
    };
    return MDCBanner;
}(MDCComponent));
export { MDCBanner };
//# sourceMappingURL=component.js.map