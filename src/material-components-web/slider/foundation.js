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
import { getCorrectPropertyName } from '../animation/util';
import { MDCFoundation } from '../base/foundation';
import { KEY, normalizeKey } from '../dom/keyboard';
import { attributes, cssClasses, numbers } from './constants';
import { Thumb, TickMark } from './types';
// Accessing `window` without a `typeof` check will throw on Node environments.
var HAS_WINDOW = typeof window !== 'undefined';
/**
 * Foundation class for slider. Responsibilities include:
 * - Updating slider values (internal state and DOM updates) based on client
 *   'x' position.
 * - Updating DOM after slider property updates (e.g. min, max).
 */
var MDCSliderFoundation = /** @class */ (function (_super) {
    __extends(MDCSliderFoundation, _super);
    function MDCSliderFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSliderFoundation.defaultAdapter), adapter)) || this;
        // Whether the initial styles (to position the thumb, before component
        // initialization) have been removed.
        _this.initialStylesRemoved = false;
        _this.isDisabled = false;
        _this.isDiscrete = false;
        // Step value for discrete sliders.
        _this.step = 1;
        _this.bigStep = _this.step * numbers.BIG_STEP_FACTOR;
        _this.hasTickMarks = false;
        // The following properties are only set for range sliders.
        _this.isRange = false;
        // Tracks the thumb being moved across a slider pointer interaction (down,
        // move event).
        _this.thumb = null;
        // `clientX` from the most recent down event. Used in subsequent move
        // events to determine which thumb to move (in the case of
        // overlapping thumbs).
        _this.downEventClientX = null;
        // Width of the start thumb knob.
        _this.startThumbKnobWidth = 0;
        // Width of the end thumb knob.
        _this.endThumbKnobWidth = 0;
        return _this;
    }
    Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same
            // order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addThumbClass: function () { return undefined; },
                removeThumbClass: function () { return undefined; },
                getAttribute: function () { return null; },
                getThumbAttribute: function () { return null; },
                setThumbAttribute: function () { return null; },
                getThumbKnobWidth: function () { return 0; },
                isThumbFocused: function () { return false; },
                focusThumb: function () { return undefined; },
                getThumbBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                isRTL: function () { return false; },
                setThumbStyleProperty: function () { return undefined; },
                removeThumbStyleProperty: function () { return undefined; },
                setTrackActiveStyleProperty: function () { return undefined; },
                setValueIndicatorText: function () { return undefined; },
                updateTickMarks: function () { return undefined; },
                setPointerCapture: function () { return undefined; },
                emitChangeEvent: function () { return undefined; },
                emitInputEvent: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
                registerThumbEventHandler: function () { return undefined; },
                deregisterThumbEventHandler: function () { return undefined; },
                registerBodyEventHandler: function () { return undefined; },
                deregisterBodyEventHandler: function () { return undefined; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSliderFoundation.prototype.init = function () {
        var _this = this;
        this.isDisabled = this.adapter.hasClass(cssClasses.DISABLED);
        this.isDiscrete = this.adapter.hasClass(cssClasses.DISCRETE);
        this.hasTickMarks = this.adapter.hasClass(cssClasses.TICK_MARKS);
        this.isRange = this.adapter.hasClass(cssClasses.RANGE);
        var min = this.convertAttributeValueToNumber(this.adapter.getThumbAttribute(attributes.ARIA_VALUEMIN, Thumb.END), attributes.ARIA_VALUEMIN);
        var max = this.convertAttributeValueToNumber(this.adapter.getThumbAttribute(attributes.ARIA_VALUEMAX, Thumb.END), attributes.ARIA_VALUEMAX);
        var value = this.convertAttributeValueToNumber(this.adapter.getThumbAttribute(attributes.ARIA_VALUENOW, Thumb.END), attributes.ARIA_VALUENOW);
        var valueStart = this.isRange ?
            this.convertAttributeValueToNumber(this.adapter.getThumbAttribute(attributes.ARIA_VALUENOW, Thumb.START), attributes.ARIA_VALUENOW) :
            min;
        this.validateProperties({ min: min, max: max, value: value, valueStart: valueStart });
        this.min = min;
        this.max = max;
        this.value = value;
        this.valueStart = valueStart;
        this.valueBeforeDownEvent = value;
        this.valueStartBeforeDownEvent = valueStart;
        if (this.isDiscrete) {
            var step = this.convertAttributeValueToNumber(this.adapter.getAttribute(attributes.DATA_ATTR_STEP), attributes.DATA_ATTR_STEP);
            if (step <= 0) {
                throw new Error("MDCSliderFoundation: step must be a positive number. " +
                    ("Current step: " + step));
            }
            this.step = step;
            var bigStep = this.adapter.getAttribute(attributes.DATA_ATTR_BIG_STEP);
            this.bigStep = bigStep !== null ?
                this.convertAttributeValueToNumber(bigStep, attributes.DATA_ATTR_BIG_STEP) :
                step * numbers.BIG_STEP_FACTOR;
        }
        this.mousedownOrTouchstartListener =
            this.handleMousedownOrTouchstart.bind(this);
        this.moveListener = this.handleMove.bind(this);
        this.pointerdownListener = this.handlePointerdown.bind(this);
        this.pointerupListener = this.handlePointerup.bind(this);
        this.thumbStartKeydownListener = function (event) {
            _this.handleThumbKeydown(event, Thumb.START);
        };
        this.thumbEndKeydownListener = function (event) {
            _this.handleThumbKeydown(event, Thumb.END);
        };
        this.thumbFocusOrMouseenterListener =
            this.handleThumbFocusOrMouseenter.bind(this);
        this.thumbBlurOrMouseleaveListener =
            this.handleThumbBlurOrMouseleave.bind(this);
        this.resizeListener = this.layout.bind(this);
        this.registerEventHandlers();
    };
    MDCSliderFoundation.prototype.destroy = function () {
        this.deregisterEventHandlers();
    };
    MDCSliderFoundation.prototype.getMin = function () {
        return this.min;
    };
    MDCSliderFoundation.prototype.getMax = function () {
        return this.max;
    };
    /**
     * - For single point sliders, returns the thumb value.
     * - For range (two-thumb) sliders, returns the end thumb's value.
     */
    MDCSliderFoundation.prototype.getValue = function () {
        return this.value;
    };
    /**
     * - For single point sliders, sets the thumb value.
     * - For range (two-thumb) sliders, sets the end thumb's value.
     */
    MDCSliderFoundation.prototype.setValue = function (value) {
        if (this.isRange && value < this.valueStart) {
            throw new Error("end thumb value (" + value + ") must be >= start thumb " +
                ("value (" + this.valueStart + ")"));
        }
        this.updateValue(value, Thumb.END);
    };
    /**
     * Only applicable for range sliders.
     * @return The start thumb's value.
     */
    MDCSliderFoundation.prototype.getValueStart = function () {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        return this.valueStart;
    };
    /**
     * Only applicable for range sliders. Sets the start thumb's value.
     */
    MDCSliderFoundation.prototype.setValueStart = function (valueStart) {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        if (this.isRange && valueStart > this.value) {
            throw new Error("start thumb value (" + valueStart + ") must be <= end thumb " +
                ("value (" + this.value + ")"));
        }
        this.updateValue(valueStart, Thumb.START);
    };
    MDCSliderFoundation.prototype.getStep = function () {
        return this.step;
    };
    MDCSliderFoundation.prototype.getBigStep = function () {
        return this.bigStep;
    };
    MDCSliderFoundation.prototype.getDisabled = function () {
        return this.isDisabled;
    };
    /**
     * Sets disabled state, including updating styles and thumb tabindex.
     */
    MDCSliderFoundation.prototype.setDisabled = function (disabled) {
        this.isDisabled = disabled;
        if (disabled) {
            this.adapter.addClass(cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.setThumbAttribute('tabindex', '-1', Thumb.START);
                this.adapter.setThumbAttribute('aria-disabled', 'true', Thumb.START);
            }
            this.adapter.setThumbAttribute('tabindex', '-1', Thumb.END);
            this.adapter.setThumbAttribute('aria-disabled', 'true', Thumb.END);
        }
        else {
            this.adapter.removeClass(cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.setThumbAttribute('tabindex', '0', Thumb.START);
                this.adapter.setThumbAttribute('aria-disabled', 'false', Thumb.START);
            }
            this.adapter.setThumbAttribute('tabindex', '0', Thumb.END);
            this.adapter.setThumbAttribute('aria-disabled', 'false', Thumb.END);
        }
    };
    /** @return Whether the slider is a range slider. */
    MDCSliderFoundation.prototype.getIsRange = function () {
        return this.isRange;
    };
    /**
     * - Syncs slider boundingClientRect with the current DOM.
     * - Updates UI based on internal state.
     */
    MDCSliderFoundation.prototype.layout = function () {
        this.rect = this.adapter.getBoundingClientRect();
        if (this.isRange) {
            this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.START);
            this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.END);
        }
        this.updateUI();
    };
    /**
     * Handles pointer down events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleDown = function (event) {
        if (this.isDisabled)
            return;
        this.valueStartBeforeDownEvent = this.valueStart;
        this.valueBeforeDownEvent = this.value;
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        this.downEventClientX = clientX;
        var value = this.mapClientXOnSliderScale(clientX);
        this.thumb = this.getThumbFromDownEvent(clientX, value);
        if (this.thumb === null)
            return;
        // Presses within the range do not invoke slider updates.
        var newValueInCurrentRange = this.isRange && value >= this.valueStart && value <= this.value;
        if (newValueInCurrentRange)
            return;
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer move events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleMove = function (event) {
        if (this.isDisabled)
            return;
        // Prevent scrolling.
        event.preventDefault();
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        this.thumb = this.getThumbFromMoveEvent(clientX);
        if (this.thumb === null)
            return;
        var value = this.mapClientXOnSliderScale(clientX);
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer up events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleUp = function () {
        if (this.isDisabled || this.thumb === null)
            return;
        var oldValue = this.thumb === Thumb.START ?
            this.valueStartBeforeDownEvent :
            this.valueBeforeDownEvent;
        var newValue = this.thumb === Thumb.START ? this.valueStart : this.value;
        if (oldValue !== newValue) {
            this.adapter.emitChangeEvent(newValue, this.thumb);
        }
        this.thumb = null;
    };
    /**
     * Handles keydown events on the slider thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbKeydown = function (event, thumb) {
        if (this.isDisabled)
            return;
        var key = normalizeKey(event);
        if (key !== KEY.ARROW_LEFT && key !== KEY.ARROW_UP &&
            key !== KEY.ARROW_RIGHT && key !== KEY.ARROW_DOWN && key !== KEY.HOME &&
            key !== KEY.END && key !== KEY.PAGE_UP && key !== KEY.PAGE_DOWN) {
            return;
        }
        // Prevent scrolling.
        event.preventDefault();
        var value = this.getValueForKey(key, thumb);
        var currentValue = thumb === Thumb.START ? this.valueStart : this.value;
        if (value === currentValue)
            return;
        this.updateValue(this.getValueForKey(key, thumb), thumb, { emitChangeEvent: true, emitInputEvent: true });
    };
    /**
     * Shows the value indicator, as follows:
     * - Range slider: Shows value indicator on both thumbs, on either hover or
     *   focus.
     * - Single point slider: Shows value indicator on thumb, only on focus.
     */
    MDCSliderFoundation.prototype.handleThumbFocusOrMouseenter = function (event) {
        if (!this.isDiscrete)
            return;
        if (this.isRange) {
            this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
            this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
        }
        else if (event.type === 'focus') {
            // If single point slider, only show value indicator on focus, not hover.
            this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
        }
    };
    /**
     * Hides the value indicator, as follows:
     * - Range slider: Hides value indicator on both thumbs, on either blur
     *   or mouseleave, provided there is no thumb already focused.
     * - Single point slider: Hides value indicator on thumb, on blur.
     */
    MDCSliderFoundation.prototype.handleThumbBlurOrMouseleave = function (event) {
        if (!this.isDiscrete)
            return;
        if (this.isRange && !this.adapter.isThumbFocused(Thumb.START) &&
            !this.adapter.isThumbFocused(Thumb.END)) {
            this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
            this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
        }
        else if (!this.isRange && event.type === 'blur') {
            this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
        }
    };
    MDCSliderFoundation.prototype.handleMousedownOrTouchstart = function (event) {
        var _this = this;
        var moveEventType = event.type === 'mousedown' ? 'mousemove' : 'touchmove';
        // After a down event on the slider root, listen for move events on
        // body (so the slider value is updated for events outside of the
        // slider root).
        this.adapter.registerBodyEventHandler(moveEventType, this.moveListener);
        var upHandler = function () {
            _this.handleUp();
            // Once the drag is finished (up event on body), remove the move
            // handler.
            _this.adapter.deregisterBodyEventHandler(moveEventType, _this.moveListener);
            // Also stop listening for subsequent up events.
            _this.adapter.deregisterEventHandler('mouseup', upHandler);
            _this.adapter.deregisterEventHandler('touchend', upHandler);
        };
        this.adapter.registerBodyEventHandler('mouseup', upHandler);
        this.adapter.registerBodyEventHandler('touchend', upHandler);
        this.handleDown(event);
    };
    MDCSliderFoundation.prototype.handlePointerdown = function (event) {
        this.adapter.setPointerCapture(event.pointerId);
        this.adapter.registerEventHandler('pointermove', this.moveListener);
        this.handleDown(event);
    };
    /**
     * @return Returns new value for the given thumb, based on key pressed.
     *     E.g. ARROW_DOWN on discrete slider decrements the current thumb
     *     value by the `step` value.
     */
    MDCSliderFoundation.prototype.getValueForKey = function (key, thumb) {
        var delta = this.step || (this.max - this.min) / 100;
        var deltaBigStep = this.bigStep || (this.max - this.min) / 10;
        var value = thumb === Thumb.START ? this.valueStart : this.value;
        switch (key) {
            case KEY.ARROW_LEFT:
                return this.adapter.isRTL() ? value + delta : value - delta;
            case KEY.ARROW_DOWN:
                return value - delta;
            case KEY.ARROW_RIGHT:
                return this.adapter.isRTL() ? value - delta : value + delta;
            case KEY.ARROW_UP:
                return value + delta;
            case KEY.HOME:
                return this.min;
            case KEY.END:
                return this.max;
            case KEY.PAGE_DOWN:
                return value - deltaBigStep;
            case KEY.PAGE_UP:
                return value + deltaBigStep;
            default:
                return value;
        }
    };
    /**
     * @return The thumb to be moved based on initial down event.
     */
    MDCSliderFoundation.prototype.getThumbFromDownEvent = function (clientX, value) {
        // For single point slider, thumb to be moved is always the END (only)
        // thumb.
        if (!this.isRange)
            return Thumb.END;
        // Check if event press point is in the bounds of any thumb.
        var thumbStartRect = this.adapter.getThumbBoundingClientRect(Thumb.START);
        var thumbEndRect = this.adapter.getThumbBoundingClientRect(Thumb.END);
        var inThumbStartBounds = clientX >= thumbStartRect.left && clientX <= thumbStartRect.right;
        var inThumbEndBounds = clientX >= thumbEndRect.left && clientX <= thumbEndRect.right;
        if (inThumbStartBounds && inThumbEndBounds) {
            // Thumbs overlapping. Thumb to be moved cannot be determined yet.
            return null;
        }
        // If press is in bounds for either thumb on down event, that's the thumb
        // to be moved.
        if (inThumbStartBounds) {
            return Thumb.START;
        }
        if (inThumbEndBounds) {
            return Thumb.END;
        }
        // Otherwise, if press occurred outside of the range, return either start
        // or end thumb based on which the press is closer to.
        if (value < this.valueStart) {
            return Thumb.START;
        }
        if (value > this.value) {
            return Thumb.END;
        }
        return null;
    };
    /**
     * @return The thumb to be moved based on move event (based on drag
     *     direction from original down event). Only applicable if thumbs
     *     were overlapping in the down event.
     */
    MDCSliderFoundation.prototype.getThumbFromMoveEvent = function (clientX) {
        // Thumb has already been chosen.
        if (this.thumb !== null)
            return this.thumb;
        if (this.downEventClientX === null) {
            throw new Error('`downEventClientX` is null after move event.');
        }
        var moveDistanceUnderThreshold = Math.abs(this.downEventClientX - clientX) < numbers.THUMB_UPDATE_MIN_PX;
        if (moveDistanceUnderThreshold)
            return this.thumb;
        var draggedThumbToLeft = clientX < this.downEventClientX;
        if (draggedThumbToLeft) {
            return this.adapter.isRTL() ? Thumb.END : Thumb.START;
        }
        else {
            return this.adapter.isRTL() ? Thumb.START : Thumb.END;
        }
    };
    /**
     * Updates UI based on internal state.
     * @param thumb Thumb whose value is being updated. If undefined, UI is
     *     updated for both thumbs based on current internal state.
     */
    MDCSliderFoundation.prototype.updateUI = function (thumb) {
        this.updateThumbAndTrackUI(thumb);
        this.updateValueIndicatorUI(thumb);
        this.updateTickMarksUI();
    };
    /**
     * @param thumb Thumb whose value indicator to update.
     */
    MDCSliderFoundation.prototype.updateValueIndicatorUI = function (thumb) {
        if (!this.isDiscrete || !thumb)
            return;
        var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
        this.adapter.setValueIndicatorText(value, thumb === Thumb.START ? Thumb.START : Thumb.END);
    };
    /**
     * Updates tick marks UI within slider, based on current min, max, and step.
     */
    MDCSliderFoundation.prototype.updateTickMarksUI = function () {
        if (!this.isDiscrete || !this.hasTickMarks)
            return;
        var numTickMarksInactiveStart = (this.valueStart - this.min) / this.step;
        var numTickMarksActive = (this.value - this.valueStart) / this.step + 1;
        var numTickMarksInactiveEnd = (this.max - this.value) / this.step;
        var tickMarksInactiveStart = Array.from({ length: numTickMarksInactiveStart })
            .fill(TickMark.INACTIVE);
        var tickMarksActive = Array.from({ length: numTickMarksActive })
            .fill(TickMark.ACTIVE);
        var tickMarksInactiveEnd = Array.from({ length: numTickMarksInactiveEnd })
            .fill(TickMark.INACTIVE);
        this.adapter.updateTickMarks(tickMarksInactiveStart.concat(tickMarksActive)
            .concat(tickMarksInactiveEnd));
    };
    /** Maps clientX to a value on the slider scale. */
    MDCSliderFoundation.prototype.mapClientXOnSliderScale = function (clientX) {
        var xPos = clientX - this.rect.left;
        var pctComplete = xPos / this.rect.width;
        if (this.adapter.isRTL()) {
            pctComplete = 1 - pctComplete;
        }
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        var value = this.min + pctComplete * (this.max - this.min);
        if (this.isDiscrete && value !== this.max && value !== this.min) {
            return this.quantize(value);
        }
        return value;
    };
    /**
     * Updates slider value (internal state and UI) based on the given value.
     */
    MDCSliderFoundation.prototype.updateValue = function (value, thumb, _a) {
        var _b = _a === void 0 ? {} : _a, emitInputEvent = _b.emitInputEvent, emitChangeEvent = _b.emitChangeEvent;
        value = this.clampValue(value, thumb);
        if (this.isRange && thumb === Thumb.START) {
            // Exit early if current value is the same as the new value.
            if (this.valueStart === value)
                return;
            this.valueStart = value;
            this.adapter.setThumbAttribute(attributes.ARIA_VALUENOW, String(this.valueStart), Thumb.START);
        }
        else {
            // Exit early if current value is the same as the new value.
            if (this.value === value)
                return;
            this.value = value;
            this.adapter.setThumbAttribute(attributes.ARIA_VALUENOW, String(this.value), Thumb.END);
        }
        this.updateUI(thumb);
        if (emitInputEvent) {
            this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
        }
        if (emitChangeEvent) {
            this.adapter.emitChangeEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
        }
    };
    /** Calculates the quantized value based on step value. */
    MDCSliderFoundation.prototype.quantize = function (value) {
        var numSteps = Math.round(value / this.step);
        return numSteps * this.step;
    };
    /**
     * Clamps the given value for the given thumb based on slider properties:
     * - Restricts value within [min, max].
     * - If range slider, clamp start value <= end value, and
     *   end value >= start value.
     */
    MDCSliderFoundation.prototype.clampValue = function (value, thumb) {
        // Clamp value to [min, max] range.
        value = Math.min(Math.max(value, this.min), this.max);
        var thumbStartMovedPastThumbEnd = this.isRange && thumb === Thumb.START && value > this.value;
        if (thumbStartMovedPastThumbEnd) {
            return this.value;
        }
        var thumbEndMovedPastThumbStart = this.isRange && thumb === Thumb.END && value < this.valueStart;
        if (thumbEndMovedPastThumbStart) {
            return this.valueStart;
        }
        return value;
    };
    /**
     * Updates the active track and thumb style properties to reflect current
     * value.
     */
    MDCSliderFoundation.prototype.updateThumbAndTrackUI = function (thumb) {
        var _this = this;
        var _a = this, max = _a.max, min = _a.min;
        var pctComplete = (this.value - this.valueStart) / (max - min);
        var rangePx = pctComplete * this.rect.width;
        var isRtl = this.adapter.isRTL();
        var transformProp = HAS_WINDOW ? getCorrectPropertyName(window, 'transform') : 'transform';
        if (this.isRange) {
            var thumbLeftPos_1 = this.adapter.isRTL() ?
                (max - this.value) / (max - min) * this.rect.width :
                (this.valueStart - min) / (max - min) * this.rect.width;
            var thumbRightPos_1 = thumbLeftPos_1 + rangePx;
            requestAnimationFrame(function () {
                // Set active track styles, accounting for animation direction by
                // setting `transform-origin`.
                var trackAnimatesFromRight = (!isRtl && thumb === Thumb.START) ||
                    (isRtl && thumb !== Thumb.START);
                if (trackAnimatesFromRight) {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'right');
                    _this.adapter.setTrackActiveStyleProperty('left', 'unset');
                    _this.adapter.setTrackActiveStyleProperty('right', _this.rect.width - thumbRightPos_1 + "px");
                }
                else {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'left');
                    _this.adapter.setTrackActiveStyleProperty('right', 'unset');
                    _this.adapter.setTrackActiveStyleProperty('left', thumbLeftPos_1 + "px");
                }
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                // Set thumb styles.
                var thumbStartPos = isRtl ? thumbRightPos_1 : thumbLeftPos_1;
                var thumbEndPos = _this.adapter.isRTL() ? thumbLeftPos_1 : thumbRightPos_1;
                if (thumb === Thumb.START || !thumb) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.START);
                }
                if (thumb === Thumb.END || !thumb) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbEndPos + "px)", Thumb.END);
                }
                _this.removeInitialStyles(isRtl);
                _this.updateOverlappingThumbsUI(thumbStartPos, thumbEndPos, thumb);
                _this.focusThumbIfDragging(thumb);
            });
        }
        else {
            requestAnimationFrame(function () {
                var thumbStartPos = isRtl ? _this.rect.width - rangePx : rangePx;
                _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.END);
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                _this.removeInitialStyles(isRtl);
                _this.focusThumbIfDragging(thumb);
            });
        }
    };
    /**
     * Removes initial inline styles if not already removed. `left:<...>%`
     * inline styles can be added to position the thumb correctly before JS
     * initialization. However, they need to be removed before the JS starts
     * positioning the thumb. This is because the JS uses
     * `transform:translateX(<...>)px` (for performance reasons) to position
     * the thumb (which is not possible for initial styles since we need the
     * bounding rect measurements).
     */
    MDCSliderFoundation.prototype.removeInitialStyles = function (isRtl) {
        if (this.initialStylesRemoved)
            return;
        var position = isRtl ? 'right' : 'left';
        this.adapter.removeThumbStyleProperty(position, Thumb.END);
        if (this.isRange) {
            this.adapter.removeThumbStyleProperty(position, Thumb.START);
        }
        this.initialStylesRemoved = true;
    };
    /**
     * Adds THUMB_TOP class to active thumb if thumb knobs overlap; otherwise
     * removes THUMB_TOP class from both thumbs.
     * @param thumb Thumb that is active (being moved).
     */
    MDCSliderFoundation.prototype.updateOverlappingThumbsUI = function (thumbStartPos, thumbEndPos, thumb) {
        var thumbsOverlap = false;
        if (this.adapter.isRTL()) {
            var startThumbLeftEdge = thumbStartPos - this.startThumbKnobWidth / 2;
            var endThumbRightEdge = thumbEndPos + this.endThumbKnobWidth / 2;
            thumbsOverlap = endThumbRightEdge >= startThumbLeftEdge;
        }
        else {
            var startThumbRightEdge = thumbStartPos + this.startThumbKnobWidth / 2;
            var endThumbLeftEdge = thumbEndPos - this.endThumbKnobWidth / 2;
            thumbsOverlap = startThumbRightEdge >= endThumbLeftEdge;
        }
        if (thumbsOverlap) {
            this.adapter.addThumbClass(cssClasses.THUMB_TOP, 
            // If no thumb was dragged (in the case of initial layout), end
            // thumb is on top by default.
            thumb || Thumb.END);
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, thumb === Thumb.START ? Thumb.END : Thumb.START);
        }
        else {
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.START);
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.END);
        }
    };
    MDCSliderFoundation.prototype.focusThumbIfDragging = function (thumb) {
        if (!thumb)
            return;
        // Not dragging thumb via pointer interaction.
        if (this.thumb === null)
            return;
        if (!this.adapter.isThumbFocused(thumb)) {
            this.adapter.focusThumb(thumb);
        }
    };
    /**
     * Converts attribute value to a number, e.g. '100' => 100. Throws errors
     * for invalid values.
     * @param attributeValue Attribute value, e.g. 100.
     * @param attributeName Attribute name, e.g. `aria-valuemax`.
     */
    MDCSliderFoundation.prototype.convertAttributeValueToNumber = function (attributeValue, attributeName) {
        if (attributeValue === null) {
            throw new Error("MDCSliderFoundation: `" + attributeName + "` must be non-null.");
        }
        var value = Number(attributeValue);
        if (isNaN(value)) {
            throw new Error("MDCSliderFoundation: `" + attributeName + "` value is " +
                ("`" + attributeValue + "`, but must be a number."));
        }
        return value;
    };
    /** Checks that the given properties are valid slider values. */
    MDCSliderFoundation.prototype.validateProperties = function (_a) {
        var min = _a.min, max = _a.max, value = _a.value, valueStart = _a.valueStart;
        if (min >= max) {
            throw new Error("MDCSliderFoundation: min must be strictly less than max. " +
                ("Current: [min: " + min + ", max: " + max + "]"));
        }
        if (this.isRange) {
            if (value < min || value > max || valueStart < min || valueStart > max) {
                throw new Error("MDCSliderFoundation: values must be in [min, max] range. " +
                    ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
            }
            if (valueStart > value) {
                throw new Error("MDCSliderFoundation: start value must be <= end value. " +
                    ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
            }
        }
        else { // Single point slider.
            if (value < min || value > max) {
                throw new Error("MDCSliderFoundation: value must be in [min, max] range. " +
                    ("Current value: " + value));
            }
        }
    };
    MDCSliderFoundation.prototype.registerEventHandlers = function () {
        this.adapter.registerWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            // If supported, use pointer events API with #setPointerCapture.
            this.adapter.registerEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.registerEventHandler('pointerup', this.pointerupListener);
        }
        else {
            // Otherwise, fall back to mousedown/touchstart events.
            this.adapter.registerEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.registerEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.registerThumbEventHandler(Thumb.START, 'keydown', this.thumbStartKeydownListener);
            this.adapter.registerThumbEventHandler(Thumb.START, 'focus', this.thumbFocusOrMouseenterListener);
            this.adapter.registerThumbEventHandler(Thumb.START, 'mouseenter', this.thumbFocusOrMouseenterListener);
            this.adapter.registerThumbEventHandler(Thumb.START, 'blur', this.thumbBlurOrMouseleaveListener);
            this.adapter.registerThumbEventHandler(Thumb.START, 'mouseleave', this.thumbBlurOrMouseleaveListener);
        }
        this.adapter.registerThumbEventHandler(Thumb.END, 'keydown', this.thumbEndKeydownListener);
        this.adapter.registerThumbEventHandler(Thumb.END, 'focus', this.thumbFocusOrMouseenterListener);
        this.adapter.registerThumbEventHandler(Thumb.END, 'mouseenter', this.thumbFocusOrMouseenterListener);
        this.adapter.registerThumbEventHandler(Thumb.END, 'blur', this.thumbBlurOrMouseleaveListener);
        this.adapter.registerThumbEventHandler(Thumb.END, 'mouseleave', this.thumbBlurOrMouseleaveListener);
    };
    MDCSliderFoundation.prototype.deregisterEventHandlers = function () {
        this.adapter.deregisterWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            this.adapter.deregisterEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.deregisterEventHandler('pointerup', this.pointerupListener);
        }
        else {
            this.adapter.deregisterEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.deregisterEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'keydown', this.thumbStartKeydownListener);
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'focus', this.thumbFocusOrMouseenterListener);
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'mouseenter', this.thumbFocusOrMouseenterListener);
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'blur', this.thumbBlurOrMouseleaveListener);
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'mouseleave', this.thumbBlurOrMouseleaveListener);
        }
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'keydown', this.thumbEndKeydownListener);
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'focus', this.thumbFocusOrMouseenterListener);
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'mouseenter', this.thumbFocusOrMouseenterListener);
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'blur', this.thumbBlurOrMouseleaveListener);
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'mouseleave', this.thumbBlurOrMouseleaveListener);
    };
    MDCSliderFoundation.prototype.handlePointerup = function () {
        this.handleUp();
        this.adapter.deregisterEventHandler('pointermove', this.moveListener);
    };
    MDCSliderFoundation.SUPPORTS_POINTER_EVENTS = HAS_WINDOW && Boolean(window.PointerEvent);
    return MDCSliderFoundation;
}(MDCFoundation));
export { MDCSliderFoundation };
//# sourceMappingURL=foundation.js.map