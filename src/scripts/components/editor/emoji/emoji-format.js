import Emotion from './emotion';
import { emojiClassName, createEmoji } from './utils';
import getType from '../../../utils/typeof';

function emojiFormat(Quill) {
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
        console.warn('[UiEditor] Invalid emoji');
      }

      return node;
    }
  }

  EmojiBlot.blotName = 'emoji';
  EmojiBlot.tagName = 'SPAN';
  EmojiBlot.className = emojiClassName;

  Quill.register('formats/emoji', EmojiBlot);
}

export default emojiFormat;
