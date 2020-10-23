import { useEditor } from '../quill';

function useDivider() {
  const { Quill } = useEditor();

  class DividerModule {
    constructor(quill) {
      const toolbar = quill.getModule('toolbar');
      if (typeof toolbar !== 'undefined') {
        toolbar.addHandler('divider', () => {
          let range = quill.getSelection();
          if (range) {
            quill.insertEmbed(range.index, 'divider', 'null');
          }
        });
      }
    }
  }

  Quill.register('modules/divider', DividerModule);
}

export default useDivider;
