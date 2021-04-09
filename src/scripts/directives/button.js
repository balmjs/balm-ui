import { MDCRipple } from '../../material-components-web/ripple';

// Define link button constants
const UI_LINK_BUTTON = {
  cssClasses: {
    // Text button
    base: 'mdc-button',
    // Outlined button
    outlined: 'mdc-button--outlined',
    // Contained button
    raised: 'mdc-button--raised',
    unelevated: 'mdc-button--unelevated'
  }
};

const updateClassName = (el, modifiers) => {
  el.classList.add(UI_LINK_BUTTON.cssClasses.base);

  for (const key of Object.keys(modifiers)) {
    if (UI_LINK_BUTTON.cssClasses[key]) {
      el.classList.add(UI_LINK_BUTTON.cssClasses[key]);
      break;
    }
  }
};

const updateContent = (el) => {
  const labelText = el.innerHTML;
  el.innerHTML = '';

  const rippleEl = document.createElement('div');
  rippleEl.className = 'mdc-button__ripple';
  const labelEl = document.createElement('div');
  labelEl.className = 'mdc-button__label';
  labelEl.innerHTML = labelText;

  el.appendChild(rippleEl);
  el.appendChild(labelEl);
};

const initRipple = (el) => {
  new MDCRipple(el);
};

const initLinkButton = (el, { modifiers }) => {
  if (el.tagName === 'A') {
    updateClassName(el, modifiers);
    updateContent(el);
    initRipple(el);
  } else {
    console.warn('[v-button]', 'You need one <a> element for link button');
  }
};

const vButton = {
  name: 'button',
  mounted(el, binding) {
    initLinkButton(el, binding);
  }
};

export default vButton;
