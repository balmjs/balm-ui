import { MDCTooltip } from '../../material-components-web/tooltip';

// Define anchor constants
let UI_TOOLTIP = {
  globalAnchor: {
    el: null,
    id: 'mdc-tooltip-anchor',
    className: 'mdc-tooltip-wrapper--rich'
  },
  attrs: {
    ariaId: 'aria-describedby'
  }
};

const createTooltipAnchor = () => {
  const el = document.createElement('div');
  el.id = UI_TOOLTIP.globalAnchor.id;
  el.className = UI_TOOLTIP.globalAnchor.className;

  return el;
};

const createTooltip = (id, text) => {
  return `<div id="${id}" class="mdc-tooltip" role="tooltip" aria-hidden="true">
    <div class="mdc-tooltip__surface">${text}</div>
  </div>`;
};

const initTooltipAnchor = () => {
  if (!UI_TOOLTIP.globalAnchor.el) {
    document.body.appendChild(createTooltipAnchor());

    UI_TOOLTIP.globalAnchor.el = document.getElementById(
      UI_TOOLTIP.globalAnchor.id
    );
  }
};

const initTooltip = (el, { value }) => {
  initTooltipAnchor();

  const id = el.getAttribute(UI_TOOLTIP.attrs.ariaId);
  if (id) {
    let template = createTooltip(id, value);
    let tooltipEl = document.createRange().createContextualFragment(template);
    UI_TOOLTIP.globalAnchor.el.appendChild(tooltipEl);

    new MDCTooltip(document.getElementById(id));
  } else {
    console.warn(
      `[BalmUI v-tooltip]: '${UI_TOOLTIP.attrs.ariaId}' is required for plain tooltip.`
    );
  }
};

const BalmUI_TooltipDirective = {
  name: 'tooltip',
  mounted(el, binding) {
    initTooltip(el, binding);
  }
};

export default BalmUI_TooltipDirective;
