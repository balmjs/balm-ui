import Quill from 'quill';
import getType from '../../../utils/typeof';
import Emotion from './emotion';

const Embed = Quill.import('blots/embed');
const content = Emotion.getEmotion('emoji');
const emojiMap = {};

class EmojiBlot extends Embed {
  static create(value) {
    const node = super.create();

    if (getType(value) === 'object') {
      EmojiBlot.buildIcon(value, node);
    } else if (getType(value) === 'string') {
      const valueObj = emojiMap[value];

      if (valueObj) {
        EmojiBlot.buildIcon(valueObj, node);
      }
    }

    return node;
  }

  static buildIcon({ name }, node) {
    const emojiEl = document.createElement('span');
    emojiEl.classList.add(`${this.className}-${name}`);

    node.setAttribute('title', name);
    node.setAttribute('data-name', name);
    node.appendChild(emojiEl);
  }

  static value(node) {
    return node.dataset.name;
  }
}

EmojiBlot.blotName = 'emoji';
EmojiBlot.className = 'ql-emoji';
EmojiBlot.tagName = 'i';

export default EmojiBlot;
