import autoInit from './register';
import { MDCTooltip } from '../../material-components-web/tooltip';

const createTooltip = (id, text) => {
  return `<div id="${id}" class="mdc-tooltip" role="tooltip" aria-hidden="true">
    <div class="mdc-tooltip__surface">${text}</div>
  </div>`;
};

const initTooltip = (el, { value }) => {
  const id = el.getAttribute('aria-describedby');
  if (id) {
    let template = createTooltip(id, value);
    let newNode = document.createRange().createContextualFragment(template);
    el.parentNode.insertBefore(newNode, el.nextElementSibling);
    new MDCTooltip(document.getElementById(id));
  } else {
    console.warn('`aria-describedby` is required for tooltip');
  }
};

const BalmUI_TooltipDirective = {
  name: 'tooltip',
  inserted(el, binding) {
    initTooltip(el, binding);
  }
};

autoInit(BalmUI_TooltipDirective.name, BalmUI_TooltipDirective);

export default BalmUI_TooltipDirective;
