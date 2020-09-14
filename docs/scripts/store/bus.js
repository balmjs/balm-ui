import { createApp } from 'vue';

let eventBus = {};

const busApp = createApp(
  {},
  {
    $emit(eventName, ...args) {
      eventBus[eventName] = [...args];
    },
    $on(event, callback) {
      if (eventBus[event]) {
        callback(eventBus[event]);
      }
    }
  }
);

export default busApp._props;
