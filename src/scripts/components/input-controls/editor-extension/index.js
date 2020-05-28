import Quill from 'quill';
import EmojiFormat from './emoji-format';
import EmojiToolbarModule from './emoji-toolbar-module';
import Emotion from './emotion';

function create(container, { options, emotions, extensions }) {
  new Emotion(emotions);

  Quill.register(
    {
      'formats/emoji': EmojiFormat,
      'modules/emoji-toolbar': EmojiToolbarModule
    },
    true
  );

  extensions.forEach((extension) => {
    Quill.register(extension, true);
  });

  return new Quill(container, options);
}

function destroy() {
  Emotion.clear();
}

export default {
  create,
  destroy
};
