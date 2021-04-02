// Define accessibility constants
const UI_ACCESSIBILITY = {
  components: {
    button: 'mdc-button',
    checkbox: 'mdc-checkbox',
    chip: 'mdc-chip',
    radio: 'mdc-radio',
    miniFab: 'mdc-fab--mini'
  },
  cssClasses: {
    wrapper: 'mdc-touch-target-wrapper',
    button: {
      outer: 'mdc-button--touch',
      inner: 'mdc-button__touch'
    },
    checkbox: {
      outer: 'mdc-checkbox--touch'
    },
    chip: {
      outer: 'mdc-chip--touch',
      inner: 'mdc-chip__touch'
    },
    radio: {
      outer: 'mdc-radio--touch'
    },
    miniFab: {
      outer: 'mdc-fab--touch',
      inner: 'mdc-fab__touch'
    },
    segmentedButton: {
      outer: 'mdc-segmented-button--touch',
      inner: 'mdc-segmented-button__touch'
    }
  }
};

const checkComponent = (el) => {
  let result = false;

  const components = Object.keys(UI_ACCESSIBILITY.components);
  for (let i = 0, len = components.length; i < len; i++) {
    const key = components[i];
    const value = UI_ACCESSIBILITY.components[key];
    if (el.classList.contains(value)) {
      result = key;
      break;
    }
  }

  return result;
};

const initAccessibility = (el) => {
  let componentKey = checkComponent(el);

  if (componentKey) {
    const wrapperEl = document.createElement('div');
    wrapperEl.className = UI_ACCESSIBILITY.cssClasses.wrapper;

    if (UI_ACCESSIBILITY.cssClasses[componentKey].inner) {
      const innerEl = document.createElement('div');
      innerEl.className = UI_ACCESSIBILITY.cssClasses[componentKey].inner;
      el.appendChild(innerEl);
    }

    el.classList.add(UI_ACCESSIBILITY.cssClasses[componentKey].outer);
    if (el.parentNode) {
      el.parentNode.insertBefore(wrapperEl, el);
      el.parentNode.removeChild(el);
    }
    wrapperEl.appendChild(el);
  }
};

const vAccessibility = {
  name: 'a11y',
  mounted(el) {
    initAccessibility(el);
  }
};

export default vAccessibility;
