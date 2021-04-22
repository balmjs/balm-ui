// Define anchor constants
let UI_ANCHOR = {
  cssClasses: {
    outer: 'v-anchor--html',
    inner: 'v-anchor'
  },
  body: null,
  offset: 0 // Global offset
};

const goAnchor = (selector) => {
  let anchorEl = document.querySelector(selector);
  if (anchorEl) {
    UI_ANCHOR.body.scrollTop = anchorEl.offsetTop - UI_ANCHOR.offset;
  } else {
    console.warn('[v-anchor]', `Invalid anchor: ${selector}`);
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

const initAnchor = (el, { value, modifiers }) => {
  if (Object.keys(modifiers).length) {
    UI_ANCHOR.body = modifiers.bodyElement // Custom container
      ? el
      : document.documentElement || document.body;

    // Custom offset
    UI_ANCHOR.offset = modifiers.offset
      ? value
      : UI_ANCHOR.body.dataset.vanchorOffset || 0;
  }
};

const bindAnchor = (method, el = document) => {
  let anchorElementList = el.querySelectorAll(
    `.${UI_ANCHOR.cssClasses.outer} .${UI_ANCHOR.cssClasses.inner}`
  );

  if (anchorElementList.length) {
    anchorElementList.forEach((anchorEl) => {
      anchorEl[`${method}EventListener`]('click', () => {
        goAnchor(anchorEl.dataset.href);
      });
    });
  }
};

const vAnchor = {
  name: 'anchor',
  beforeMount(el, binding) {
    updateAnchor('add', el, binding);
  },
  mounted(el, binding) {
    initAnchor(el, binding);
    if (binding.modifiers.html) {
      bindAnchor('add');
    }
  },
  updated(el, binding, vnode) {
    if (binding.modifiers.html) {
      bindAnchor('add', vnode.el);
    }
  },
  beforeUnmount(el, binding) {
    if (el === UI_ANCHOR.body) {
      UI_ANCHOR.body = document.documentElement || document.body;
    }

    updateAnchor('remove', el, binding);
    if (binding.modifiers.html) {
      bindAnchor('remove');
    }
  }
};

export default vAnchor;
