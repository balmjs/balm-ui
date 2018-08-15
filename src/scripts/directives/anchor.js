import autoInit from './register';

// Define
let ANCHOR = {
  CLASSNAME: {
    OUTER: 'v-anchor--html',
    INNER: 'v-anchor'
  },
  body: document.body,
  offset: 0,
  isMounted: false
};

const goAnchor = selector => {
  let anchor = document.querySelector(selector);
  if (anchor) {
    ANCHOR.body.scrollTop = anchor.offsetTop - ANCHOR.offset;
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
    el.classList[method](ANCHOR.CLASSNAME.OUTER);
  }
};

const initAnchor = (el, { value, rawName, modifiers }) => {
  if (
    ANCHOR.body.tagName === 'BODY' &&
    (rawName === ANCHOR.CLASSNAME.INNER || modifiers.offset)
  ) {
    ANCHOR.body = el;
    if (modifiers.offset) {
      ANCHOR.offset = value;
    }
  }
};

const bindAnchor = method => {
  let anchorElementList = document.querySelectorAll(
    `.${ANCHOR.CLASSNAME.OUTER} .${ANCHOR.CLASSNAME.INNER}`
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
    updateAnchor('remove', el, binding);
    if (binding.modifiers.html) {
      bindAnchor('remove');
    }
  }
};

autoInit(BalmUI_AnchorDirective.name, BalmUI_AnchorDirective);

export default BalmUI_AnchorDirective;
