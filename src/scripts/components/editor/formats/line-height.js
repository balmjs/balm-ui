import { useEditor } from '../quill';

function useLineHeight(customLineHeight = []) {
  if (customLineHeight.length) {
    const { Quill } = useEditor();
    const Parchment = Quill.import('parchment');

    let config = {
      scope: Parchment.Scope.INLINE,
      whitelist: customLineHeight
    };

    const LineHeightStyle = new Parchment.StyleAttributor(
      'lineheight',
      'line-height',
      config
    );

    Quill.register(LineHeightStyle, true);
  }
}

export default useLineHeight;
