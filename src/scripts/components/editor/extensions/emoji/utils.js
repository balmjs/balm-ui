export const emojiClassName = 'ql-emoji';

export function isValidEmoji(type, emoji) {
  return emoji.name && (type === 'emoji' ? emoji.value : emoji.src);
}

export function getCode(emoji) {
  return emoji.type === 'emoji' ? `:${emoji.name}:` : `[${emoji.name}]`;
}

function getEmoji(emoji, node) {
  let emojiEl = node;

  if (!node) {
    emojiEl =
      emoji.type === 'emoji'
        ? document.createElement('span')
        : document.createElement('img');
  }

  if (emoji.type === 'emoji') {
    emojiEl.innerHTML = emoji.value;
    emojiEl.style.fontSize = '18px';
  } else {
    emojiEl.src = emoji.src;
    emojiEl.setAttribute('alt', emoji.alt || '');
  }

  return emojiEl;
}

export function createEmoji(emoji, node = null) {
  let emojiEl = getEmoji(emoji, node);
  let emojiItemEl;

  if (!node) {
    emojiItemEl = document.createElement('span');
    emojiItemEl.classList.add(emojiClassName, `ql-${emoji.type}-${emoji.name}`);
    emojiItemEl.appendChild(emojiEl);
  }

  return node ? emojiEl : emojiItemEl;
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
