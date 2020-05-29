import { getCode, getEmoji } from './emoji-utils';

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

      if (
        emotion.content.every(
          (item) => item.name && getEmoji(emotion.type, item)
        )
      ) {
        let contentList = [];
        let contentMap = {};

        [].slice.call(emotion.content).forEach((item) => {
          const code = getCode(emotion.type, item);
          const emoji = getEmoji(emotion.type, item);

          contentList.push(item);
          contentMap[code] = emoji;

          emojiMap[code] = emoji;
        });

        emojiData[emotion.type] = {
          contentList,
          contentMap
        };
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
