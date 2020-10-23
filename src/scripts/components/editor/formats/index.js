import useTextAlign from './align';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';
import useTextIndent from './text-indent';

function useTypography(Quill, { font, size, lineheight, textindent }) {
  useTextAlign(Quill);
  font && useFontFamliy(Quill, font);
  size && useFontSize(Quill, size);
  lineheight && useLineHeight(Quill, lineheight);
  textindent && useTextIndent(Quill)
}

export default useTypography;
