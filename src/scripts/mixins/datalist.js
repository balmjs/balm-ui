const DATALIST_EVENTS = {
  CLICK: 'click'
};

function isElementInContainer(event, containerEl) {
  let currentEl = event.target;
  let inContainer = currentEl === containerEl;

  while (currentEl && !inContainer) {
    currentEl = currentEl.parentNode;
    if (currentEl === containerEl) {
      inContainer = true;
    }
  }

  return inContainer;
}

function createDatalistEventListener(el, callback) {
  const listener = (e) => {
    const inContainer = isElementInContainer(e, el);

    if (!inContainer) {
      callback();
    }
  };

  return listener;
}

function addDatalistEventListener({ el, listener, callback }) {
  if (!listener) {
    listener = createDatalistEventListener(el, callback);
  }

  document.addEventListener(DATALIST_EVENTS.CLICK, listener, {
    capture: true
  });
}

function removeDatalistEventListener(listener) {
  if (listener) {
    document.removeEventListener(DATALIST_EVENTS.CLICK, listener, {
      capture: true
    });
  }
}

function useDatalist() {
  return {
    createDatalistEventListener,
    addDatalistEventListener,
    removeDatalistEventListener
  };
}

export { DATALIST_EVENTS, useDatalist };
