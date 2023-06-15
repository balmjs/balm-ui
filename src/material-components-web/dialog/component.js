/**
 * @license
 * Copyright 2017 Google Inc.
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
import { FocusTrap } from '../dom/focus-trap';
import { closest, matches } from '../dom/ponyfill';
import { MDCRipple } from '../ripple/component';
import { MDCDialogFoundation } from './foundation';
import * as util from './util';
var strings = MDCDialogFoundation.strings;
var MDCDialog = /** @class */ (function (_super) {
    __extends(MDCDialog, _super);
    function MDCDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCDialog.prototype, "isOpen", {
        get: function () {
            return this.foundation.isOpen();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
        get: function () {
            return this.foundation.getEscapeKeyAction();
        },
        set: function (action) {
            this.foundation.setEscapeKeyAction(action);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
        get: function () {
            return this.foundation.getScrimClickAction();
        },
        set: function (action) {
            this.foundation.setScrimClickAction(action);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
        get: function () {
            return this.foundation.getAutoStackButtons();
        },
        set: function (autoStack) {
            this.foundation.setAutoStackButtons(autoStack);
        },
        enumerable: false,
        configurable: true
    });
    MDCDialog.attachTo = function (root) {
        return new MDCDialog(root);
    };
    MDCDialog.prototype.initialize = function (focusTrapFactory) {
        var e_1, _a;
        if (focusTrapFactory === void 0) { focusTrapFactory = function (el, focusOptions) {
            return new FocusTrap(el, focusOptions);
        }; }
        var container = this.root.querySelector(strings.CONTAINER_SELECTOR);
        if (!container) {
            throw new Error("Dialog component requires a " + strings.CONTAINER_SELECTOR + " container element");
        }
        this.container = container;
        this.content =
            this.root.querySelector(strings.CONTENT_SELECTOR);
        this.buttons = [].slice.call(this.root.querySelectorAll(strings.BUTTON_SELECTOR));
        this.defaultButton = this.root.querySelector("[" + strings.BUTTON_DEFAULT_ATTRIBUTE + "]");
        this.focusTrapFactory = focusTrapFactory;
        this.buttonRipples = [];
        try {
            for (var _b = __values(this.buttons), _c = _b.next(); !_c.done; _c = _b.next()) {
                var buttonEl = _c.value;
                this.buttonRipples.push(new MDCRipple(buttonEl));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCDialog.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.focusTrap = util.createFocusTrapInstance(this.container, this.focusTrapFactory, this.getInitialFocusEl() || undefined);
        this.handleClick = this.foundation.handleClick.bind(this.foundation);
        this.handleKeydown = this.foundation.handleKeydown.bind(this.foundation);
        this.handleDocumentKeydown =
            this.foundation.handleDocumentKeydown.bind(this.foundation);
        // this.handleLayout = this.layout.bind(this);
        this.handleOpening = function () {
            document.addEventListener('keydown', _this.handleDocumentKeydown);
        };
        this.handleClosing = function () {
            document.removeEventListener('keydown', _this.handleDocumentKeydown);
        };
        this.listen('click', this.handleClick);
        this.listen('keydown', this.handleKeydown);
        this.listen(strings.OPENING_EVENT, this.handleOpening);
        this.listen(strings.CLOSING_EVENT, this.handleClosing);
    };
    MDCDialog.prototype.destroy = function () {
        this.unlisten('click', this.handleClick);
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten(strings.OPENING_EVENT, this.handleOpening);
        this.unlisten(strings.CLOSING_EVENT, this.handleClosing);
        this.handleClosing();
        this.buttonRipples.forEach(function (ripple) {
            ripple.destroy();
        });
        _super.prototype.destroy.call(this);
    };
    MDCDialog.prototype.layout = function () {
        this.foundation.layout();
    };
    MDCDialog.prototype.open = function () {
        this.foundation.open();
    };
    MDCDialog.prototype.close = function (action) {
        if (action === void 0) { action = ''; }
        this.foundation.close(action);
    };
    MDCDialog.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addBodyClass: function (className) { return document.body.classList.add(className); },
            addClass: function (className) { return _this.root.classList.add(className); },
            areButtonsStacked: function () { return util.areTopsMisaligned(_this.buttons); },
            clickDefaultButton: function () {
                if (_this.defaultButton && !_this.defaultButton.disabled) {
                    _this.defaultButton.click();
                }
            },
            eventTargetMatches: function (target, selector) {
                return target ? matches(target, selector) : false;
            },
            getActionFromEvent: function (evt) {
                if (!evt.target) {
                    return '';
                }
                var element = closest(evt.target, "[" + strings.ACTION_ATTRIBUTE + "]");
                return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
            },
            getInitialFocusEl: function () { return _this.getInitialFocusEl(); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            isContentScrollable: function () { return util.isScrollable(_this.content); },
            notifyClosed: function (action) { return _this.emit(strings.CLOSED_EVENT, action ? { action: action } : {}); },
            notifyClosing: function (action) { return _this.emit(strings.CLOSING_EVENT, action ? { action: action } : {}); },
            notifyOpened: function () { return _this.emit(strings.OPENED_EVENT, {}); },
            notifyOpening: function () { return _this.emit(strings.OPENING_EVENT, {}); },
            releaseFocus: function () {
                _this.focusTrap.releaseFocus();
            },
            removeBodyClass: function (className) { return document.body.classList.remove(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            reverseButtons: function () {
                _this.buttons.reverse();
                _this.buttons.forEach(function (button) {
                    button.parentElement.appendChild(button);
                });
            },
            trapFocus: function () {
                _this.focusTrap.trapFocus();
            },
            registerContentEventHandler: function (evt, handler) {
                if (_this.content instanceof HTMLElement) {
                    _this.content.addEventListener(evt, handler);
                }
            },
            deregisterContentEventHandler: function (evt, handler) {
                if (_this.content instanceof HTMLElement) {
                    _this.content.removeEventListener(evt, handler);
                }
            },
            isScrollableContentAtTop: function () {
                return util.isScrollAtTop(_this.content);
            },
            isScrollableContentAtBottom: function () {
                return util.isScrollAtBottom(_this.content);
            },
            registerWindowEventHandler: function (evt, handler) {
                window.addEventListener(evt, handler);
            },
            deregisterWindowEventHandler: function (evt, handler) {
                window.removeEventListener(evt, handler);
            },
        };
        return new MDCDialogFoundation(adapter);
    };
    MDCDialog.prototype.getInitialFocusEl = function () {
        return this.root.querySelector("[" + strings.INITIAL_FOCUS_ATTRIBUTE + "]");
    };
    return MDCDialog;
}(MDCComponent));
export { MDCDialog };
//# sourceMappingURL=component.js.map