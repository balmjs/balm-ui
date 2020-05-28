import Quill from 'quill';
import EmojiBlot from './emoji';

Quill.register(
  {
    'formats/emoji': EmojiBlot
  },
  true
);

export default Quill;
