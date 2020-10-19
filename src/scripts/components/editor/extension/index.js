import Emotion from '../emoji/emotion';
import getEmojiFormat from './emoji-format';
import getEmojiModule from './emoji-module';
import setToolbarIcons from './toolbar';

function registerExtension(Quill, { toolbarIcons, emotions }) {
  new Emotion(emotions);

  Quill.register(
    {
      'formats/emoji': getEmojiFormat(Quill),
      'modules/emoji': getEmojiModule(Quill)
    },
    true
  );

  setToolbarIcons(Quill, toolbarIcons);
}

export default registerExtension;
