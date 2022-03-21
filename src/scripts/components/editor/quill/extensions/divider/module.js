import { useEditor } from '../../core/quill';

function dividerModule() {
  const { Quill } = useEditor();

  class DividerModule {
    constructor(quill) {
      this.quill = quill;

      const toolbar = quill.getModule('toolbar');
      if (typeof toolbar !== 'undefined') {
        toolbar.addHandler('divider', this.insertHandler.bind(this));
      }
    }

    insertHandler() {
      let range = this.quill.getSelection(true);
      if (range) {
        this.quill.insertText(range.index, '\n', Quill.sources.USER);
        this.quill.insertEmbed(
          range.index + 1,
          'divider',
          true,
          Quill.sources.USER
        );
        this.quill.setSelection(range.index + 2, Quill.sources.SILENT);
      }
    }
  }

  Quill.register('modules/divider', DividerModule, true);
}

export default dividerModule;
