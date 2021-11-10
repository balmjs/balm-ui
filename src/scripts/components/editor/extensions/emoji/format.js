import { useEditor } from '../../core/quill';
import Emotion from './emotion';
import { emojiClassName, createEmoji } from './utils';

function emojiFormat() {
  const { Quill } = useEditor();
  const Parchment = Quill.import('parchment');

  class EmojiBlot extends Parchment.Embed {
    static create(value) {
      let node =
        value.type === 'emoji'
          ? document.createElement('span')
          : document.createElement('img');

      if (typeof value === 'object') {
        return createEmoji(value, node);
      } else if (typeof value === 'string') {
        const emojiMap = Emotion.getEmotions();
        return createEmoji(emojiMap[value], node);
      } else {
        console.warn('[UiEditor]', 'Invalid emoji');
      }

      return node;
    }
  }

  EmojiBlot.blotName = 'emoji';
  EmojiBlot.tagName = ['SPAN', 'IMG'];
  EmojiBlot.className = emojiClassName;

  Quill.register('formats/emoji', EmojiBlot, true);
}

export default emojiFormat;
