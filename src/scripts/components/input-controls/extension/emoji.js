import Quill from 'quill';
import getType from '../../../utils/typeof';

const Embed = Quill.import('blots/embed');

const emojiMap = {
  '100': {
    name: 'good',
    code: ':good:',
    title: '好'
  },
  gg: {
    name: 'bad',
    code: ':bad:',
    title: '孬'
  }
}; // TODO

class EmojiBlot extends Embed {
  static create(value) {
    let node = super.create();

    console.log(value);

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

  static buildIcon({ name, title }, node) {
    console.log(node);
    let emojiEl = document.createElement('span');
    emojiEl.classList.add(`${this.className}-${name}`);

    node.setAttribute('title', title);
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
