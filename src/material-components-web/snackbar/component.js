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
import { strings } from './constants';
import { MDCSnackbarFoundation } from './foundation';
import * as util from './util';
var SURFACE_SELECTOR = strings.SURFACE_SELECTOR, LABEL_SELECTOR = strings.LABEL_SELECTOR, ACTION_SELECTOR = strings.ACTION_SELECTOR, DISMISS_SELECTOR = strings.DISMISS_SELECTOR, OPENING_EVENT = strings.OPENING_EVENT, OPENED_EVENT = strings.OPENED_EVENT, CLOSING_EVENT = strings.CLOSING_EVENT, CLOSED_EVENT = strings.CLOSED_EVENT;
var MDCSnackbar = /** @class */ (function (_super) {
    __extends(MDCSnackbar, _super);
    function MDCSnackbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSnackbar.attachTo = function (root) {
        return new MDCSnackbar(root);
    };
    MDCSnackbar.prototype.initialize = function (announcerFactory) {
        if (announcerFactory === void 0) { announcerFactory = function () { return util.announce; }; }
        this.announce = announcerFactory();
    };
    MDCSnackbar.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.surfaceEl = this.root.querySelector(SURFACE_SELECTOR);
        this.labelEl = this.root.querySelector(LABEL_SELECTOR);
        this.actionEl = this.root.querySelector(ACTION_SELECTOR);
        this.handleKeyDown = function (evt) {
            _this.foundation.handleKeyDown(evt);
        };
        this.handleSurfaceClick = function (evt) {
            var target = evt.target;
            if (_this.isActionButton(target)) {
                _this.foundation.handleActionButtonClick(evt);
            }
            else if (_this.isActionIcon(target)) {
                _this.foundation.handleActionIconClick(evt);
            }
        };
        this.registerKeyDownHandler(this.handleKeyDown);
        this.registerSurfaceClickHandler(this.handleSurfaceClick);
    };
    MDCSnackbar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.deregisterKeyDownHandler(this.handleKeyDown);
        this.deregisterSurfaceClickHandler(this.handleSurfaceClick);
    };
    MDCSnackbar.prototype.open = function () {
        this.foundation.open();
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    MDCSnackbar.prototype.close = function (reason) {
        if (reason === void 0) { reason = ''; }
        this.foundation.close(reason);
    };
    MDCSnackbar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            announce: function () {
                _this.announce(_this.labelEl);
            },
            notifyClosed: function (reason) { return _this.emit(CLOSED_EVENT, reason ? { reason: reason } : {}); },
            notifyClosing: function (reason) { return _this.emit(CLOSING_EVENT, reason ? { reason: reason } : {}); },
            notifyOpened: function () { return _this.emit(OPENED_EVENT, {}); },
            notifyOpening: function () { return _this.emit(OPENING_EVENT, {}); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
        };
        return new MDCSnackbarFoundation(adapter);
    };
    Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
        get: function () {
            return this.foundation.getTimeoutMs();
        },
        set: function (timeoutMs) {
            this.foundation.setTimeoutMs(timeoutMs);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
        get: function () {
            return this.foundation.getCloseOnEscape();
        },
        set: function (closeOnEscape) {
            this.foundation.setCloseOnEscape(closeOnEscape);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
        get: function () {
            return this.foundation.isOpen();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbar.prototype, "labelText", {
        get: function () {
            // This property only returns null if the node is a document, DOCTYPE,
            // or notation. On Element nodes, it always returns a string.
            return this.labelEl.textContent;
        },
        set: function (labelText) {
            this.labelEl.textContent = labelText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
        get: function () {
            return this.actionEl.textContent;
        },
        set: function (actionButtonText) {
            this.actionEl.textContent = actionButtonText;
        },
        enumerable: false,
        configurable: true
    });
    MDCSnackbar.prototype.registerKeyDownHandler = function (handler) {
        this.listen('keydown', handler);
    };
    MDCSnackbar.prototype.deregisterKeyDownHandler = function (handler) {
        this.unlisten('keydown', handler);
    };
    MDCSnackbar.prototype.registerSurfaceClickHandler = function (handler) {
        this.surfaceEl.addEventListener('click', handler);
    };
    MDCSnackbar.prototype.deregisterSurfaceClickHandler = function (handler) {
        this.surfaceEl.removeEventListener('click', handler);
    };
    MDCSnackbar.prototype.isActionButton = function (target) {
        return Boolean(closest(target, ACTION_SELECTOR));
    };
    MDCSnackbar.prototype.isActionIcon = function (target) {
        return Boolean(closest(target, DISMISS_SELECTOR));
    };
    return MDCSnackbar;
}(MDCComponent));
export { MDCSnackbar };
//# sourceMappingURL=component.js.map