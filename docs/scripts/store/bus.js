import { createApp } from 'vue';

let eventBus = {};

const busApp = createApp(
  {},
  {
    $emit(eventName, ...args) {
      eventBus[eventName] = [...args];
    },
    $on(eventName, callback) {
      if (eventBus[eventName]) {
        callback(eventBus[eventName]);
      }
    }
  }
);

export default busApp._props;
