import Emotion from '../emoji/emotion';
import getEmojiFormat from './emoji-format';
import getEmojiModule from './emoji-module';
import getHistory from './history';

function registerExtension(Quill, emotions) {
  new Emotion(emotions);

  Quill.register(
    {
      'formats/emoji': getEmojiFormat(Quill),
      'modules/emoji': getEmojiModule(Quill)
    },
    true
  );

  getHistory(Quill);
}

export default registerExtension;
