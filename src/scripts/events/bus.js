import Vue from 'vue';

const busApp = new Vue();

function on(eventName, callback) {
  busApp.$on(eventName, callback);
}

function off(eventName, callback = false) {
  callback ? busApp.$off(eventName, callback) : busApp.$off(eventName);
}

function emit(eventName, ...args) {
  busApp.$emit(eventName, ...args);
}

const bus = {
  on,
  off,
  emit
};

export default bus;
