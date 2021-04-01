// Define badge constants
const UI_BADGE = {
  cssClasses: {
    outer: 'mdc-badge',
    overlap: 'mdc-badge--overlap',
    inner: 'mdc-badge__sup',
    hide: 'mdc-badge__sup--hide',
    dot: 'mdc-badge__sup--dot'
  },
  maxCount: 99
};

const overflowCount = (badgeEl, count = 0) => {
  if (count) {
    badgeEl.classList.remove(UI_BADGE.cssClasses.hide);
  } else {
    badgeEl.classList.add(UI_BADGE.cssClasses.hide);
  }

  badgeEl.textContent =
    count > UI_BADGE.maxCount ? `${UI_BADGE.maxCount}+` : count;
};

const initBadge = (el, { value, modifiers }) => {
  if (
    el.parentNode &&
    !el.parentNode.classList.contains(UI_BADGE.cssClasses.outer)
  ) {
    const wrapperEl = document.createElement('div');
    wrapperEl.className = UI_BADGE.cssClasses.outer;

    const badgeEl = document.createElement('sup');
    badgeEl.className = UI_BADGE.cssClasses.inner;

    if (modifiers.overlap) {
      wrapperEl.classList.add(UI_BADGE.cssClasses.overlap);
    }

    if (modifiers.dot) {
      badgeEl.classList.add(UI_BADGE.cssClasses.dot);
    } else {
      overflowCount(badgeEl, value);
    }

    el.parentNode.insertBefore(wrapperEl, el);
    el.parentNode.removeChild(el);

    wrapperEl.appendChild(el);
    wrapperEl.appendChild(badgeEl);
  }
};

const updateBadge = (el, { value, modifiers }) => {
  if (!modifiers.dot) {
    const badgeEl = el.nextElementSibling;
    overflowCount(badgeEl, value);
  }
};

const vBadge = {
  name: 'badge',
  mounted(el, binding) {
    initBadge(el, binding);
  },
  updated(el, binding) {
    updateBadge(el, binding);
  }
};

export default vBadge;
