import Emotion from './emotion';
import emojiFormat from './format';
import emojiModule from './module';

function useEmoji(emotions) {
  new Emotion(emotions);

  emojiFormat();
  emojiModule();
}

export default useEmoji;
