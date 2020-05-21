// For IE9+
(function () {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }

  function BalmUIEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    const evt = document.createEvent('BalmUIEvent');
    evt.initBalmUIEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );

    return evt;
  }

  BalmUIEvent.prototype = window.Event.prototype;

  window.CustomEvent = BalmUIEvent;
})();
