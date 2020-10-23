import { useEditor } from '../quill';

function usePreview() {
  const { Quill } = useEditor();

  class PreviewModule {
    constructor(quill) {
      const toolbar = quill.getModule('toolbar');
      if (typeof toolbar !== 'undefined') {
        toolbar.addHandler('preview', () => {
          console.log('preview');
        });
      }
    }
  }

  Quill.register('modules/preview', PreviewModule);
}

export default usePreview;
