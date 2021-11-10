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
import { __assign, __extends } from "tslib";
import { MDCComponent } from '../base/component';
import { applyPassive } from '../dom/events';
import { matches } from '../dom/ponyfill';
import { MDCRipple } from '../ripple/component';
import { MDCRippleFoundation } from '../ripple/foundation';
import { cssClasses, events } from './constants';
import { MDCSliderFoundation } from './foundation';
import { Thumb, TickMark } from './types';
/** Vanilla JS implementation of slider component. */
var MDCSlider = /** @class */ (function (_super) {
    __extends(MDCSlider, _super);
    function MDCSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skipInitialUIUpdate = false;
        // Function that maps a slider value to the value of the `aria-valuetext`
        // attribute on the thumb element.
        _this.valueToAriaValueTextFn = null;
        return _this;
    }
    MDCSlider.attachTo = function (root, options) {
        if (options === void 0) { options = {}; }
        return new MDCSlider(root, undefined, options);
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
            getInputValue: function (thumb) { return _this.getInput(thumb).value; },
            setInputValue: function (value, thumb) {
                _this.getInput(thumb).value = value;
            },
            getInputAttribute: function (attribute, thumb) {
                return _this.getInput(thumb).getAttribute(attribute);
            },
            setInputAttribute: function (attribute, value, thumb) {
                _this.getInput(thumb).setAttribute(attribute, value);
            },
            removeInputAttribute: function (attribute, thumb) {
                _this.getInput(thumb).removeAttribute(attribute);
            },
            focusInput: function (thumb) {
                _this.getInput(thumb).focus();
            },
            isInputFocused: function (thumb) {
                return _this.getInput(thumb) === document.activeElement;
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
            removeThumbStyleProperty: function (propertyName, thumb) {
                _this.getThumbEl(thumb).style.removeProperty(propertyName);
            },
            setTrackActiveStyleProperty: function (propertyName, value) {
                _this.trackActive.style.setProperty(propertyName, value);
            },
            removeTrackActiveStyleProperty: function (propertyName) {
                _this.trackActive.style.removeProperty(propertyName);
            },
            setValueIndicatorText: function (value, thumb) {
                var valueIndicatorEl = _this.getThumbEl(thumb).querySelector("." + cssClasses.VALUE_INDICATOR_TEXT);
                valueIndicatorEl.textContent = String(value);
            },
            getValueToAriaValueTextFn: function () { return _this.valueToAriaValueTextFn; },
            updateTickMarks: function (tickMarks) {
                var tickMarksContainer = _this.root.querySelector("." + cssClasses.TICK_MARKS_CONTAINER);
                if (!tickMarksContainer) {
                    tickMarksContainer = document.createElement('div');
                    tickMarksContainer.classList.add(cssClasses.TICK_MARKS_CONTAINER);
                    var track = _this.root.querySelector("." + cssClasses.TRACK);
                    track.appendChild(tickMarksContainer);
                }
                if (tickMarks.length !== tickMarksContainer.children.length) {
                    while (tickMarksContainer.firstChild) {
                        tickMarksContainer.removeChild(tickMarksContainer.firstChild);
                    }
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
            emitDragStartEvent: function (_, thumb) {
                // Emitting event is not yet implemented. See issue:
                // https://github.com/material-components/material-components-web/issues/6448
                _this.getRipple(thumb).activate();
            },
            emitDragEndEvent: function (_, thumb) {
                // Emitting event is not yet implemented. See issue:
                // https://github.com/material-components/material-components-web/issues/6448
                _this.getRipple(thumb).deactivate();
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
            registerInputEventHandler: function (thumb, evtType, handler) {
                _this.getInput(thumb).addEventListener(evtType, handler);
            },
            deregisterInputEventHandler: function (thumb, evtType, handler) {
                _this.getInput(thumb).removeEventListener(evtType, handler);
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
            // tslint:enable:object-literal-sort-keys
        };
        return new MDCSliderFoundation(adapter);
    };
    /**
     * Initializes component, with the following options:
     * - `skipInitialUIUpdate`: Whether to skip updating the UI when initially
     *   syncing with the DOM. This should be enabled when the slider position
     *   is set before component initialization.
     */
    MDCSlider.prototype.initialize = function (_a) {
        var _b = _a === void 0 ? {} : _a, skipInitialUIUpdate = _b.skipInitialUIUpdate;
        this.inputs =
            [].slice.call(this.root.querySelectorAll("." + cssClasses.INPUT));
        this.thumbs =
            [].slice.call(this.root.querySelectorAll("." + cssClasses.THUMB));
        this.trackActive =
            this.root.querySelector("." + cssClasses.TRACK_ACTIVE);
        this.ripples = this.createRipples();
        if (skipInitialUIUpdate) {
            this.skipInitialUIUpdate = true;
        }
    };
    MDCSlider.prototype.initialSyncWithDOM = function () {
        this.foundation.layout({ skipUpdateUI: this.skipInitialUIUpdate });
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
    /**
     * Sets a function that maps the slider value to the value of the
     * `aria-valuetext` attribute on the thumb element.
     */
    MDCSlider.prototype.setValueToAriaValueTextFn = function (mapFn) {
        this.valueToAriaValueTextFn = mapFn;
    };
    MDCSlider.prototype.getThumbEl = function (thumb) {
        return thumb === Thumb.END ? this.thumbs[this.thumbs.length - 1] :
            this.thumbs[0];
    };
    MDCSlider.prototype.getInput = function (thumb) {
        return thumb === Thumb.END ? this.inputs[this.inputs.length - 1] :
            this.inputs[0];
    };
    MDCSlider.prototype.getRipple = function (thumb) {
        return thumb === Thumb.END ? this.ripples[this.ripples.length - 1] :
            this.ripples[0];
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
        var ripples = [];
        var rippleSurfaces = [].slice.call(this.root.querySelectorAll("." + cssClasses.THUMB));
        var _loop_1 = function (i) {
            var rippleSurface = rippleSurfaces[i];
            // Use the corresponding input as the focus source for the ripple (i.e.
            // when the input is focused, the ripple is in the focused state).
            var input = this_1.inputs[i];
            var adapter = __assign(__assign({}, MDCRipple.createAdapter(this_1)), { addClass: function (className) {
                    rippleSurface.classList.add(className);
                }, computeBoundingRect: function () { return rippleSurface.getBoundingClientRect(); }, deregisterInteractionHandler: function (evtType, handler) {
                    input.removeEventListener(evtType, handler);
                }, isSurfaceActive: function () { return matches(input, ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) {
                    input.addEventListener(evtType, handler, applyPassive());
                }, removeClass: function (className) {
                    rippleSurface.classList.remove(className);
                }, updateCssVariable: function (varName, value) {
                    rippleSurface.style.setProperty(varName, value);
                } });
            var ripple = new MDCRipple(rippleSurface, new MDCRippleFoundation(adapter));
            ripple.unbounded = true;
            ripples.push(ripple);
        };
        var this_1 = this;
        for (var i = 0; i < rippleSurfaces.length; i++) {
            _loop_1(i);
        }
        return ripples;
    };
    return MDCSlider;
}(MDCComponent));
export { MDCSlider };
//# sourceMappingURL=component.js.map