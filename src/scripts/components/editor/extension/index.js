import Emotion from '../emoji/emotion';
import getEmojiFormat from './emoji-format';
import getEmojiModule from './emoji-module';
import setToolbarIcons from './toolbar';
import setFont from './font';

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
  setFont(Quill);
}

export default registerExtension;
