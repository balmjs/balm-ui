import {
  emojiClassName,
  isValidEmoji,
  getCode,
  createEmoji,
  replaceElementToString
} from './utils';

const emojiRegExp = /(:\w+:)|(\[\w+\])/g;

let emojiTypes = [];
let emojiData = {};
let emojiMap = {};

class Emotion {
  constructor(emotions) {
    for (let i = 0, len = emotions.length; i < len; i++) {
      const emotion = emotions[i];

      emojiTypes.push({
        type: emotion.type,
        title: emotion.title
      });

      if (emotion.content.every((item) => isValidEmoji(emotion.type, item))) {
        let emojiList = [];

        [].slice.call(emotion.content).forEach((item) => {
          const emoji = Object.assign({ type: emotion.type }, item);
          const code = getCode(emoji);

          emojiList.push(emoji);

          emojiMap[code] = emoji;
        });

        emojiData[emotion.title] = emojiList;
      } else {
        console.warn('[UiEditor]', 'Invalid emotions format');
        // reset
        emojiTypes = [];
        emojiData = {};
        emojiMap = {};
        break;
      }
    }
  }

  static getTypes() {
    return emojiTypes;
  }

  static getEmotion(title) {
    return emojiData[title];
  }

  static getEmotions() {
    return emojiMap;
  }

  static clear() {
    emojiTypes = [];
    emojiData = {};
    emojiMap = {};
  }

  static encode(html) {
    const documentEl = new DOMParser().parseFromString(html, 'text/html');
    documentEl.querySelectorAll(`.${emojiClassName}`).forEach((el) => {
      const emojiKeys = el.classList[1] ? el.classList[1].split('-') : [];
      if (emojiKeys.length === 3) {
        const type = emojiKeys[1];
        const name = emojiKeys[2];
        const code = getCode({ type, name });
        replaceElementToString(el, code);
      }
    });

    let content = documentEl.querySelector('body').innerHTML;

    return content;
  }

  static decode(content) {
    let html = content;

    try {
      const result = content.match(emojiRegExp);

      if (result) {
        result.forEach((code) => {
          let node =
            emojiMap[code].type === 'emoji'
              ? document.createElement('span')
              : document.createElement('img');

          node.classList.add(emojiClassName);

          const emojiEl = createEmoji(emojiMap[code], node);
          html = html.replace(code, emojiEl.outerHTML);
        });
      }
    } catch (e) {
      console.warn(
        '[UiEditor]',
        `The param of the 'decodeEmoji' method must be an async data`
      );
    }

    return html;
  }
}

export default Emotion;
