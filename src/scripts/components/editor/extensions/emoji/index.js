import Emotion from './emotion';
import emojiFormat from './emoji-format';
import emojiModule from './emoji-module';

function useEmoji(Quill, options, emotions) {
  options.modules.emoji = true;

  new Emotion(emotions);

  emojiFormat(Quill);
  emojiModule(Quill);
}

export default useEmoji;
