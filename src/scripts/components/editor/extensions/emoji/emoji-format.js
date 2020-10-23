import { useEditor } from '../../quill';
import Emotion from './emotion';
import { emojiClassName, createEmoji } from './utils';

function emojiFormat() {
  const { Quill } = useEditor();
  const Embed = Quill.import('blots/embed');

  class EmojiBlot extends Embed {
    static create(value) {
      const node = super.create();

      if (typeof value === 'object') {
        createEmoji(value, node);
      } else if (typeof value === 'string') {
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
