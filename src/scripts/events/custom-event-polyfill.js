// For IE9-11
function getCustomEventPolyfill() {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };

    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );

    return evt;
  }

  window.CustomEvent = CustomEvent;
}

export default getCustomEventPolyfill;
