let eventBus = new Map();

function on(eventName, callback) {
  eventBus.set(eventName, callback);
}

function removeEvent(eventName) {
  if (eventBus.has(eventName)) {
    eventBus.delete(eventName);
  }
}

function off(eventName = false) {
  if (eventName) {
    if (Array.isArray(eventName)) {
      eventName.forEach((event) => removeEvent(eventName));
    } else {
      removeEvent(eventName);
    }
  } else {
    eventBus.clear();
  }
}

function emit(eventName, ...args) {
  if (eventBus.has(eventName)) {
    eventBus.get(eventName)(...args);
  } else {
    console.warn('[$bus]', `The '${eventName}' event is not defined`);
  }
}

const bus = {
  on,
  off,
  emit
};

export default bus;
