export const emojiClassName = 'ql-emoji';

export function isValidEmoji(type, emoji) {
  return emoji.name && (type === 'emoji' ? emoji.value : emoji.src);
}

export function getCode(emoji) {
  return emoji.type === 'emoji' ? `:${emoji.name}:` : `[${emoji.name}]`;
}

export function createEmoji(emoji, node = null) {
  let emojiEl;

  if (emoji.type === 'emoji') {
    emojiEl = document.createElement('i');
    emojiEl.innerHTML = emoji.value;
  } else {
    emojiEl = document.createElement('img');
    emojiEl.src = emoji.src;
    emojiEl.setAttribute('alt', emoji.alt || '');
  }

  if (node) {
    node.classList.add(`ql-${emoji.type}-${emoji.name}`);
    node.appendChild(emojiEl);
  } else {
    const emojiWrapperEl = document.createElement('span');
    emojiWrapperEl.classList.add(
      emojiClassName,
      `ql-${emoji.type}-${emoji.name}`
    );
    emojiWrapperEl.appendChild(emojiEl);

    return emojiWrapperEl;
  }
}
