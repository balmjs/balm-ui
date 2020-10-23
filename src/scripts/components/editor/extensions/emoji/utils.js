export const emojiClassName = 'ql-emoji';

export function isValidEmoji(type, emoji) {
  return emoji.name && (type === 'emoji' ? emoji.value : emoji.src);
}

export function getCode(emoji) {
  return emoji.type === 'emoji' ? `:${emoji.name}:` : `[${emoji.name}]`;
}

export function createEmoji(emoji, withWrapper = false) {
  let emojiEl;
  let emojiWrapperEl;

  if (emoji.type === 'emoji') {
    emojiEl = document.createElement('em');
    emojiEl.innerHTML = emoji.value;
    emojiEl.style.fontStyle = 'normal';
    emojiEl.style.fontSize = '18px';
  } else {
    emojiEl = document.createElement('img');
    emojiEl.src = emoji.src;
    emojiEl.setAttribute('alt', emoji.alt || '');
  }

  if (withWrapper) {
    emojiWrapperEl = document.createElement('span');
    emojiWrapperEl.classList.add(
      emojiClassName,
      `ql-${emoji.type}-${emoji.name}`
    );
    emojiWrapperEl.appendChild(emojiEl);
  }

  return emojiWrapperEl || emojiEl;
}

export function replaceElementToString(el, str) {
  if (el.outerHTML) {
    el.outerHTML = str;
  } else {
    let tmpEl = document.createElement('div');
    tmpEl.innerText = str;

    let parentEl = el.parentNode;
    parentEl.replaceChild(tmpEl, el);
    parentEl.innerHTML = parentEl.innerHTML.replace(`<div>${str}</div>`, str);
  }
}
