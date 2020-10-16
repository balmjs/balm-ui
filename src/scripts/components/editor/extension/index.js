import Emotion from '../emoji/emotion';
import getEmojiFormat from './emoji-format';
import getEmojiModule from './emoji-module';
import registerHistory from './history';

function registerExtension(Quill, emotions) {
  new Emotion(emotions);

  Quill.register(
    {
      'formats/emoji': getEmojiFormat(Quill),
      'modules/emoji': getEmojiModule(Quill)
    },
    true
  );

  registerHistory(Quill);
}

export default registerExtension;
