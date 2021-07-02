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
import { __assign, __extends, __values } from "tslib";
import { MDCFoundation } from '../../base/foundation';
import { strings } from './constants';
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCSelectIconFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectIconFoundation, _super);
    function MDCSelectIconFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSelectIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex = null;
        _this.interactionHandler = function (evt) {
            _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCSelectIconFoundation.prototype.init = function () {
        var e_1, _a;
        this.savedTabIndex = this.adapter.getAttr('tabindex');
        try {
            for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return)) _a.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCSelectIconFoundation.prototype.destroy = function () {
        var e_2, _a;
        try {
            for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return)) _a.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex);
            this.adapter.setAttr('role', strings.ICON_ROLE);
        }
    };
    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCSelectIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter.notifyIconAction();
        }
    };
    return MDCSelectIconFoundation;
}(MDCFoundation));
export { MDCSelectIconFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCSelectIconFoundation;
//# sourceMappingURL=foundation.js.map