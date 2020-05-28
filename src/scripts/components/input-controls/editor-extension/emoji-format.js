import Quill from 'quill';
import getType from '../../../utils/typeof';

const Embed = Quill.import('blots/embed');

class EmojiBlot extends Embed {
  static create(emojiItem) {
    const node = super.create();

    if (getType(emojiItem) === 'object') {
      EmojiBlot.buildHtml(emojiItem, node);
    } else {
      console.warn('Invalid emoji');
    }

    return node;
  }

  static buildHtml(emojiItem, node) {
    node.classList.add(`ql-${emojiItem.type}-${emojiItem.name}`);

    let emojiEl;
    if (emojiItem.type === 'emoji') {
      node.innerHTML = emojiItem.value;
    } else {
      emojiEl = document.createElement('img');
      emojiEl.src = emojiItem.src;
      if (emojiItem.alt) {
        emojiEl.setAttribute('alt', emojiItem.alt);
      }
      node.appendChild(emojiEl);
    }
  }
}

EmojiBlot.blotName = 'emoji';
EmojiBlot.className = 'ql-emoji';
EmojiBlot.tagName = 'span';

export default EmojiBlot;
