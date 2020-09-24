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
import { __extends, __values } from "tslib";
import { MDCComponent } from '../base/component';
import { MDCRipple } from '../ripple/component';
import { cssClasses, events } from './constants';
import { MDCSliderFoundation } from './foundation';
import { Thumb, TickMark } from './types';
/** Vanilla JS implementation of slider component. */
var MDCSlider = /** @class */ (function (_super) {
    __extends(MDCSlider, _super);
    function MDCSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlider.attachTo = function (root) {
        return new MDCSlider(root);
    };
    MDCSlider.prototype.getDefaultFoundation = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same
        // order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root.classList.contains(className); },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            addThumbClass: function (className, thumb) {
                _this.getThumbEl(thumb).classList.add(className);
            },
            removeThumbClass: function (className, thumb) {
                _this.getThumbEl(thumb).classList.remove(className);
            },
            getAttribute: function (attribute) { return _this.root.getAttribute(attribute); },
            getThumbAttribute: function (attribute, thumb) {
                return _this.getThumbEl(thumb).getAttribute(attribute);
            },
            setThumbAttribute: function (attribute, value, thumb) {
                _this.getThumbEl(thumb).setAttribute(attribute, value);
            },
            isThumbFocused: function (thumb) {
                return _this.getThumbEl(thumb) === document.activeElement;
            },
            focusThumb: function (thumb) {
                _this.getThumbEl(thumb).focus();
            },
            getThumbKnobWidth: function (thumb) {
                return _this.getThumbEl(thumb)
                    .querySelector("." + cssClasses.THUMB_KNOB)
                    .getBoundingClientRect()
                    .width;
            },
            getThumbBoundingClientRect: function (thumb) {
                return _this.getThumbEl(thumb).getBoundingClientRect();
            },
            getBoundingClientRect: function () { return _this.root.getBoundingClientRect(); },
            isRTL: function () { return getComputedStyle(_this.root).direction === 'rtl'; },
            setThumbStyleProperty: function (propertyName, value, thumb) {
                _this.getThumbEl(thumb).style.setProperty(propertyName, value);
            },
            setTrackActiveStyleProperty: function (propertyName, value) {
                _this.trackActive.style.setProperty(propertyName, value);
            },
            setValueIndicatorText: function (value, thumb) {
                var valueIndicatorEl = _this.getThumbEl(thumb).querySelector("." + cssClasses.VALUE_INDICATOR_TEXT);
                valueIndicatorEl.textContent = String(value);
            },
            updateTickMarks: function (tickMarks) {
                var tickMarksContainer = _this.root.querySelector("." + cssClasses.TICK_MARKS_CONTAINER);
                if (!tickMarksContainer) {
                    tickMarksContainer = document.createElement('div');
                    tickMarksContainer.classList.add(cssClasses.TICK_MARKS_CONTAINER);
                    var track = _this.root.querySelector("." + cssClasses.TRACK);
                    track.appendChild(tickMarksContainer);
                }
                if (tickMarks.length !== tickMarksContainer.children.length) {
                    tickMarksContainer.innerHTML = '';
                    _this.addTickMarks(tickMarksContainer, tickMarks);
                }
                else {
                    _this.updateTickMarks(tickMarksContainer, tickMarks);
                }
            },
            setPointerCapture: function (pointerId) {
                _this.root.setPointerCapture(pointerId);
            },
            emitChangeEvent: function (value, thumb) {
                _this.emit(events.CHANGE, { value: value, thumb: thumb });
            },
            emitInputEvent: function (value, thumb) {
                _this.emit(events.INPUT, { value: value, thumb: thumb });
            },
            registerEventHandler: function (evtType, handler) {
                _this.listen(evtType, handler);
            },
            deregisterEventHandler: function (evtType, handler) {
                _this.unlisten(evtType, handler);
            },
            registerThumbEventHandler: function (thumb, evtType, handler) {
                _this.getThumbEl(thumb).addEventListener(evtType, handler);
            },
            deregisterThumbEventHandler: function (thumb, evtType, handler) {
                _this.getThumbEl(thumb).removeEventListener(evtType, handler);
            },
            registerBodyEventHandler: function (evtType, handler) {
                document.body.addEventListener(evtType, handler);
            },
            deregisterBodyEventHandler: function (evtType, handler) {
                document.body.removeEventListener(evtType, handler);
            },
            registerWindowEventHandler: function (evtType, handler) {
                window.addEventListener(evtType, handler);
            },
            deregisterWindowEventHandler: function (evtType, handler) {
                window.removeEventListener(evtType, handler);
            },
        };
        return new MDCSliderFoundation(adapter);
    };
    MDCSlider.prototype.initialize = function () {
        this.thumbs =
            [].slice.call(this.root.querySelectorAll("." + cssClasses.THUMB));
        this.trackActive =
            this.root.querySelector("." + cssClasses.TRACK_ACTIVE);
    };
    MDCSlider.prototype.initialSyncWithDOM = function () {
        this.createRipples();
        this.foundation.layout();
    };
    /** Redraws UI based on DOM (e.g. element dimensions, RTL). */
    MDCSlider.prototype.layout = function () {
        this.foundation.layout();
    };
    MDCSlider.prototype.getValueStart = function () {
        return this.foundation.getValueStart();
    };
    MDCSlider.prototype.setValueStart = function (valueStart) {
        this.foundation.setValueStart(valueStart);
    };
    MDCSlider.prototype.getValue = function () {
        return this.foundation.getValue();
    };
    MDCSlider.prototype.setValue = function (value) {
        this.foundation.setValue(value);
    };
    /** @return Slider disabled state. */
    MDCSlider.prototype.getDisabled = function () {
        return this.foundation.getDisabled();
    };
    /** Sets slider disabled state. */
    MDCSlider.prototype.setDisabled = function (disabled) {
        this.foundation.setDisabled(disabled);
    };
    MDCSlider.prototype.getThumbEl = function (thumb) {
        return thumb === Thumb.END ? this.thumbs[this.thumbs.length - 1] :
            this.thumbs[0];
    };
    /** Adds tick mark elements to the given container. */
    MDCSlider.prototype.addTickMarks = function (tickMarkContainer, tickMarks) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < tickMarks.length; i++) {
            var div = document.createElement('div');
            var tickMarkClass = tickMarks[i] === TickMark.ACTIVE ?
                cssClasses.TICK_MARK_ACTIVE :
                cssClasses.TICK_MARK_INACTIVE;
            div.classList.add(tickMarkClass);
            fragment.appendChild(div);
        }
        tickMarkContainer.appendChild(fragment);
    };
    /** Updates tick mark elements' classes in the given container. */
    MDCSlider.prototype.updateTickMarks = function (tickMarkContainer, tickMarks) {
        var tickMarkEls = Array.from(tickMarkContainer.children);
        for (var i = 0; i < tickMarkEls.length; i++) {
            if (tickMarks[i] === TickMark.ACTIVE) {
                tickMarkEls[i].classList.add(cssClasses.TICK_MARK_ACTIVE);
                tickMarkEls[i].classList.remove(cssClasses.TICK_MARK_INACTIVE);
            }
            else {
                tickMarkEls[i].classList.add(cssClasses.TICK_MARK_INACTIVE);
                tickMarkEls[i].classList.remove(cssClasses.TICK_MARK_ACTIVE);
            }
        }
    };
    /** Initializes thumb ripples. */
    MDCSlider.prototype.createRipples = function () {
        var e_1, _a;
        var rippleSurfaces = [].slice.call(this.root.querySelectorAll("." + cssClasses.THUMB));
        try {
            for (var rippleSurfaces_1 = __values(rippleSurfaces), rippleSurfaces_1_1 = rippleSurfaces_1.next(); !rippleSurfaces_1_1.done; rippleSurfaces_1_1 = rippleSurfaces_1.next()) {
                var rippleSurface = rippleSurfaces_1_1.value;
                var ripple = new MDCRipple(rippleSurface);
                ripple.unbounded = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rippleSurfaces_1_1 && !rippleSurfaces_1_1.done && (_a = rippleSurfaces_1.return)) _a.call(rippleSurfaces_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return MDCSlider;
}(MDCComponent));
export { MDCSlider };
//# sourceMappingURL=component.js.map