import { ref } from 'vue';

const DATALIST_EVENTS = {
  CLICK: 'click'
};

const open = ref(false);
let $listener = null;

function removeDatalistEvent() {
  if ($listener) {
    document.removeEventListener(DATALIST_EVENTS.CLICK, $listener);
  }
}

function useDatalist(elementRef, { type, offHandler }) {
  function handleBlur(event) {
    if (!$listener) {
      let el = null;

      switch (type) {
        case 'select':
          break;
        case 'autocomplete':
          el = elementRef.value?.textfield;
          break;
      }

      $listener = (e) => {
        let inTarget = false;
        let parentEl = e.target;

        while (parentEl && parentEl !== el) {
          parentEl = parentEl.parentNode;
          if (parentEl === el) {
            inTarget = true;
          }
        }

        console.log('blur', e, parentEl);

        if (e !== event && !inTarget && open) {
          document.removeEventListener(DATALIST_EVENTS.CLICK, $listener);
          offHandler();
        }
      };
    }

    document.addEventListener(DATALIST_EVENTS.CLICK, $listener);
  }

  return {
    open,
    handleBlur,
    removeDatalistEvent
  };
}

export { useDatalist };
