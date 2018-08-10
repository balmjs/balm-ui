import autoInit from './register';

const ANCHOR_CLASSNAME = 'v-anchor';
let anchorBody = document.body;
let anchorOffset = 0;

const goAnchor = selector => {
  let anchor = document.querySelector(selector);
  anchorBody.scrollTop = anchor.offsetTop - anchorOffset;
};

const initAnchor = (el, { value, rawName, modifiers }) => {
  if (
    anchorBody.tagName === 'BODY' &&
    (rawName === ANCHOR_CLASSNAME || modifiers.offset)
  ) {
    anchorBody = el;
    if (modifiers.offset) {
      anchorOffset = value;
    }
  }
};

const BalmUI_AnchorDirective = {
  name: 'anchor',
  bind(el, binding) {
    let { value, arg } = binding;

    switch (arg) {
      case 'href':
        el.dataset.href = value;
        el.addEventListener('click', () => {
          goAnchor(value);
        });
        break;
      case 'id':
        el.setAttribute('id', value);
        break;
      default:
    }
  },
  inserted(el, binding) {
    initAnchor(el, binding);
  },
  componentUpdated(el, binding) {
    let anchorElementList = document.querySelectorAll(`.${ANCHOR_CLASSNAME}`);
    if (anchorElementList.length) {
      anchorElementList.forEach(anchorEl => {
        anchorEl.addEventListener('click', () => {
          goAnchor(anchorEl.dataset.href);
        });
      });
    }
  }
};

autoInit(BalmUI_AnchorDirective.name, BalmUI_AnchorDirective);

export default BalmUI_AnchorDirective;
