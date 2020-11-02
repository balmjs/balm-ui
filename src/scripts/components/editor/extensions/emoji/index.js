import Emotion from './emotion';
import emojiFormat from './format';
import emojiModule from './module';

function useEmoji(emotions) {
  if (!Emotion.getTypes().length) {
    new Emotion(emotions);

    emojiFormat();
    emojiModule();
  }
}

export default useEmoji;
