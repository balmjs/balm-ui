import autoInit from './register';

// Define anchor constants
const DEFAULT_BODY = document.documentElement || document.body;
let UI_ANCHOR = {
  cssClasses: {
    outer: 'v-anchor--html',
    inner: 'v-anchor'
  },
  body: DEFAULT_BODY,
  offset: 0,
  isMounted: false
};

// TODO: It has bug in <ui-bottom-navigation>

const goAnchor = selector => {
  let anchorEl = document.querySelector(selector);
  if (anchorEl) {
    // console.log(UI_ANCHOR.body);
    UI_ANCHOR.body.scrollTop = anchorEl.offsetTop - UI_ANCHOR.offset;
  } else {
    console.warn(`Invalid anchor: ${selector}`);
  }
};

const updateAnchor = (method, el, { value, arg, modifiers }) => {
  switch (arg) {
    case 'href':
      el.dataset.href = value;
      el[`${method}EventListener`]('click', () => {
        goAnchor(value);
      });
      break;
    case 'id':
      el.setAttribute('id', value);
      break;
    default:
  }

  if (modifiers.html) {
    el.classList[method](UI_ANCHOR.cssClasses.outer);
  }
};

const initAnchor = (el, { value, rawName, modifiers }) => {
  if (
    rawName === UI_ANCHOR.cssClasses.inner ||
    rawName === `${UI_ANCHOR.cssClasses.inner}.offset`
  ) {
    UI_ANCHOR.body = el;
    if (modifiers.offset) {
      UI_ANCHOR.offset = value;
    }
  }
};

const bindAnchor = method => {
  let anchorElementList = document.querySelectorAll(
    `.${UI_ANCHOR.cssClasses.outer} .${UI_ANCHOR.cssClasses.inner}`
  );
  if (anchorElementList.length) {
    anchorElementList.forEach(anchorEl => {
      anchorEl[`${method}EventListener`]('click', () => {
        goAnchor(anchorEl.dataset.href);
      });
    });
  }
};

const BalmUI_AnchorDirective = {
  name: 'anchor',
  bind(el, binding) {
    updateAnchor('add', el, binding);
  },
  inserted(el, binding) {
    initAnchor(el, binding);
    if (binding.modifiers.html) {
      bindAnchor('add');
    }
  },
  unbind(el, binding) {
    if (el === UI_ANCHOR.body) {
      UI_ANCHOR.body = DEFAULT_BODY;
    }

    updateAnchor('remove', el, binding);
    if (binding.modifiers.html) {
      bindAnchor('remove');
    }
  }
};

autoInit(BalmUI_AnchorDirective.name, BalmUI_AnchorDirective);

export default BalmUI_AnchorDirective;
