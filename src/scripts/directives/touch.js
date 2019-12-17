import autoInit from './register';

// Define touch target constants
const UI_TOUCH_TARGET = {
  components: {
    button: 'mdc-button',
    chip: 'mdc-chip',
    checkbox: 'mdc-checkbox',
    radio: 'mdc-radio'
    // miniFab: 'mdc-fab--mini' // TODO
  },
  cssClasses: {
    wrapper: 'mdc-touch-target-wrapper',
    button: {
      outer: 'mdc-button--touch',
      inner: 'mdc-button__touch'
    },
    chip: {
      outer: 'mdc-chip--touch',
      inner: 'mdc-chip__touch'
    },
    checkbox: {
      outer: 'mdc-checkbox--touch'
    },
    radio: {
      outer: 'mdc-radio--touch'
    }
    // miniFab: {
    //   outer: 'mdc-fab--touch',
    //   inner: 'mdc-fab__touch'
    // }
  }
};

const checkComponent = el => {
  let result = false;

  const components = Object.keys(UI_TOUCH_TARGET.components);
  for (let i = 0, len = components.length; i < len; i++) {
    const key = components[i];
    const value = UI_TOUCH_TARGET.components[key];
    if (el.classList.contains(value)) {
      result = key;
      break;
    }
  }

  return result;
};

const initTouch = el => {
  let componentKey = checkComponent(el);

  if (componentKey) {
    const wrapperEl = document.createElement('div');
    wrapperEl.className = UI_TOUCH_TARGET.cssClasses.wrapper;

    if (UI_TOUCH_TARGET.cssClasses[componentKey].inner) {
      const innerEl = document.createElement('div');
      innerEl.className = UI_TOUCH_TARGET.cssClasses[componentKey].inner;
      el.appendChild(innerEl);
    }

    el.classList.add(UI_TOUCH_TARGET.cssClasses[componentKey].outer);
    el.parentNode.insertBefore(wrapperEl, el);
    el.parentNode.removeChild(el);
    wrapperEl.appendChild(el);
  }
};

const BalmUI_TouchDirective = {
  name: 'touch',
  inserted(el) {
    initTouch(el);
  }
};

autoInit(BalmUI_TouchDirective.name, BalmUI_TouchDirective);

export default BalmUI_TouchDirective;
