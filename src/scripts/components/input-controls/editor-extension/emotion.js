let data = {};
let types = [];

class Emotion {
  constructor(emotions) {
    for (let i = 0, len = emotions.length; i < len; i++) {
      const emotion = emotions[i];

      types.push({
        type: emotion.type,
        name: emotion.title
      });

      if (emotion.content.every((item) => item.name)) {
        let contentList = [];
        let contentMap = {};

        [].slice.call(emotion.content).forEach((item) => {
          contentList.push(item);
          contentMap[item.name] = item;
        });

        data[emotion.type] = {
          contentList,
          contentMap
        };
      } else {
        console.warn('Invalid emotions format');
        data = {}; // reset data
        break;
      }
    }

    // console.log('data', data);
  }

  static getEmotion(type) {
    return data[type];
  }

  static getTypes() {
    return types;
  }

  static clear() {
    data = {};
    types = [];
  }
}

export default Emotion;
