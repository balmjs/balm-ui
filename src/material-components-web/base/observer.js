/**
 * @license
 * Copyright 2021 Google Inc.
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
import { __assign, __extends, __read, __spreadArray, __values } from "tslib";
/**
 * Mixin to add `MDCObserver` functionality to an optional base class.
 *
 * @template C Optional base class constructor type.
 * @param {C} baseClass - Optional base class.
 * @return {Constructor<MDCObserver> & C} A class that extends the optional base
 *     class with `MDCObserver` functionality.
 */
export function mdcObserver(baseClass) {
    if (baseClass === void 0) { baseClass = /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }()); }
    // Mixin classes cannot use private members and Symbol() cannot be used in 3P
    // for IE11.
    var unobserveMap = new WeakMap();
    return /** @class */ (function (_super) {
        __extends(MDCObserver, _super);
        function MDCObserver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MDCObserver.prototype.observe = function (target, observers) {
            var e_1, _a;
            var _this = this;
            var cleanup = [];
            try {
                for (var _b = __values(Object.keys(observers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var property = _c.value;
                    var observer = observers[property].bind(this);
                    cleanup.push(observeProperty(target, property, observer));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var unobserve = function () {
                var e_2, _a;
                try {
                    for (var cleanup_1 = __values(cleanup), cleanup_1_1 = cleanup_1.next(); !cleanup_1_1.done; cleanup_1_1 = cleanup_1.next()) {
                        var cleanupFn = cleanup_1_1.value;
                        cleanupFn();
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (cleanup_1_1 && !cleanup_1_1.done && (_a = cleanup_1.return)) _a.call(cleanup_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                var unobserves = unobserveMap.get(_this) || [];
                var index = unobserves.indexOf(unobserve);
                if (index > -1) {
                    unobserves.splice(index, 1);
                }
            };
            var unobserves = unobserveMap.get(this);
            if (!unobserves) {
                unobserves = [];
                unobserveMap.set(this, unobserves);
            }
            unobserves.push(unobserve);
            return unobserve;
        };
        MDCObserver.prototype.setObserversEnabled = function (target, enabled) {
            setObserversEnabled(target, enabled);
        };
        MDCObserver.prototype.unobserve = function () {
            var e_3, _a;
            // Iterate over a copy since unobserve() will remove themselves from the
            // array
            var unobserves = unobserveMap.get(this) || [];
            try {
                for (var _b = __values(__spreadArray([], __read(unobserves))), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var unobserve = _c.value;
                    unobserve();
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        return MDCObserver;
    }(baseClass));
}
/**
 * Observe a target's property for changes. When a property changes, the
 * provided `Observer` function will be invoked with the properties current and
 * previous values.
 *
 * The returned cleanup function will stop listening to changes for the
 * provided `Observer`.
 *
 * @template T The observed target type.
 * @template K The observed property.
 * @param {T} target - The target to observe.
 * @param {K} property - The property of the target to observe.
 * @param {Observer<T, K>} - An observer function to invoke each time the
 *     property changes.
 * @return {Function} A cleanup function that will stop observing changes for
 *     the provided `Observer`.
 */
export function observeProperty(target, property, observer) {
    var targetObservers = installObserver(target, property);
    var observers = targetObservers.getObservers(property);
    observers.push(observer);
    return function () {
        observers.splice(observers.indexOf(observer), 1);
    };
}
/**
 * A Map of all `TargetObservers` that have been installed.
 */
var allTargetObservers = new WeakMap();
/**
 * Installs a `TargetObservers` for the provided target (if not already
 * installed), and replaces the given property with a getter and setter that
 * will respond to changes and call `TargetObservers`.
 *
 * Subsequent calls to `installObserver()` with the same target and property
 * will not override the property's previously installed getter/setter.
 *
 * @template T The observed target type.
 * @template K The observed property to create a getter/setter for.
 * @param {T} target - The target to observe.
 * @param {K} property - The property to create a getter/setter for, if needed.
 * @return {TargetObservers<T>} The installed `TargetObservers` for the provided
 *     target.
 */
function installObserver(target, property) {
    var observersMap = new Map();
    if (!allTargetObservers.has(target)) {
        allTargetObservers.set(target, {
            isEnabled: true,
            getObservers: function (key) {
                var observers = observersMap.get(key) || [];
                if (!observersMap.has(key)) {
                    observersMap.set(key, observers);
                }
                return observers;
            },
            installedProperties: new Set()
        });
    }
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers.installedProperties.has(property)) {
        // The getter/setter has already been replaced for this property
        return targetObservers;
    }
    // Retrieve the original descriptor from the target...
    var descriptor = getDescriptor(target, property);
    // ...and create a copy that will be used for the observer.
    var observedDescriptor = __assign({}, descriptor);
    var descGet = descriptor.get, descSet = descriptor.set;
    if ('value' in descriptor) {
        // The descriptor is a simple value (not a getter/setter).
        // For our observer descriptor that we copied, delete the value/writable
        // properties, since they are incompatible with the get/set properties
        // for descriptors.
        delete observedDescriptor.value;
        delete observedDescriptor.writable;
        // Set up a simple getter...
        var value_1 = descriptor.value;
        descGet = function () {
            return value_1;
        };
        // ...and setter (if the original property was writable).
        if (descriptor.writable) {
            descSet = function (newValue) {
                value_1 = newValue;
            };
        }
    }
    if (descGet) {
        var getter_1 = descGet;
        observedDescriptor.get = function () {
            return getter_1.call(this);
        };
    }
    if (descSet) {
        var setter_1 = descSet;
        observedDescriptor.set = function (newValue) {
            var e_4, _a;
            var previous = descGet ? descGet.call(this) : newValue;
            setter_1.call(this, newValue);
            if (targetObservers.isEnabled && (!descGet || newValue !== previous)) {
                try {
                    for (var _b = __values(targetObservers.getObservers(property)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer(newValue, previous);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        };
    }
    targetObservers.installedProperties.add(property);
    Object.defineProperty(target, property, observedDescriptor);
    return targetObservers;
}
function getDescriptor(target, property) {
    var descriptor = Object.getOwnPropertyDescriptor(target, property);
    if (descriptor) {
        return descriptor;
    }
    var prototype = Object.getPrototypeOf(target);
    descriptor = Object.getOwnPropertyDescriptor(prototype, property);
    if (descriptor) {
        return descriptor;
    }
    return {
        configurable: true,
        enumerable: true,
        value: undefined,
        writable: true
    };
}
/**
 * Enables or disables all observers for a provided target. Changes to observed
 * properties will not call any observers when disabled.
 *
 * @template T The observed target type.
 * @param {T} target - The target to enable or disable observers for.
 * @param {Boolean} enabled - True to enable or false to disable observers.
 */
export function setObserversEnabled(target, enabled) {
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers) {
        targetObservers.isEnabled = enabled;
    }
}
//# sourceMappingURL=observer.js.map