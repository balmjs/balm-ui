import { useEditor } from '../../quill';
import Emotion from './emotion';
import { emojiClassName, createEmoji } from './utils';

function emojiFormat() {
  const { Quill } = useEditor();
  const Parchment = Quill.import('parchment');

  class EmojiBlot extends Parchment.Embed {
    static create(value) {
      let node = super.create();

      if (typeof value === 'object') {
        return createEmoji(value);
      } else if (typeof value === 'string') {
        const emojiMap = Emotion.getEmotions();
        return createEmoji(emojiMap[value]);
      } else {
        console.warn('[UiEditor] Invalid emoji');
      }

      return node;
    }
  }

  EmojiBlot.blotName = 'emoji';
  EmojiBlot.tagName = 'span';
  EmojiBlot.className = emojiClassName;

  Quill.register(
    {
      'formats/emoji': EmojiBlot
    },
    true
  );
}

export default emojiFormat;
