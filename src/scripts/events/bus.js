import Vue from 'vue';

const busApp = new Vue();

function on(event, callback) {
  busApp.$on(event, callback);
}

function once(event, callback) {
  busApp.$once(event, callback);
}

function off(event, callback = false) {
  callback ? busApp.$off(event, callback) : busApp.$off(event);
}

function emit(eventName, ...args) {
  busApp.$emit(eventName, ...args);
}

const bus = {
  on,
  once,
  off,
  emit
};

export default bus;
