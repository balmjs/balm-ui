import { isValidEmoji, getCode } from './emoji-utils';

let emojiTypes = [];
let emojiData = {};
let emojiMap = {};

class Emotion {
  constructor(emotions) {
    for (let i = 0, len = emotions.length; i < len; i++) {
      const emotion = emotions[i];

      emojiTypes.push({
        type: emotion.type,
        name: emotion.title
      });

      if (emotion.content.every((item) => isValidEmoji(emotion.type, item))) {
        let emojiList = [];

        [].slice.call(emotion.content).forEach((item) => {
          const emoji = Object.assign({ type: emotion.type }, item);
          const code = getCode(emoji);

          emojiList.push(emoji);

          emojiMap[code] = emoji;
        });

        emojiData[emotion.type] = emojiList;
      } else {
        console.warn('Invalid emotions format');
        // reset
        emojiTypes = [];
        emojiData = {};
        emojiMap = {};
        break;
      }
    }

    // console.log('emojiTypes', emojiTypes);
    // console.log('emojiData', emojiData);
    // console.log('emojiMap', emojiMap);
  }

  static getTypes() {
    return emojiTypes;
  }

  static getEmotion(type) {
    return emojiData[type];
  }

  static getEmotions() {
    return emojiMap;
  }

  static clear() {
    emojiTypes = [];
    emojiData = {};
    emojiMap = {};
  }
}

export default Emotion;
