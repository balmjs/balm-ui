import Emotion from './emotion';
import emojiFormat from './emoji-format';
import emojiModule from './emoji-module';

function useEmoji(options, emotions) {
  new Emotion(emotions);

  emojiFormat();
  emojiModule();
}

export default useEmoji;
