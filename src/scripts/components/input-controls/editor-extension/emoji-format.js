import Quill from 'quill';
import Emotion from './emotion';
import getType from '../../../utils/typeof';
import { emojiClassName, createEmoji } from './emoji-utils';

const Embed = Quill.import('blots/embed');

class EmojiBlot extends Embed {
  static create(value) {
    const node = super.create();

    if (getType(value) === 'object') {
      createEmoji(value, node);
    } else if (getType(value) === 'string') {
      const emojiMap = Emotion.getEmotions();
      createEmoji(emojiMap[value], node);
    } else {
      console.warn('Invalid emoji');
    }

    return node;
  }
}

EmojiBlot.blotName = 'emoji';
EmojiBlot.className = emojiClassName;
EmojiBlot.tagName = 'SPAN';

export default EmojiBlot;
