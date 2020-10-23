import useTextAlign from './align';
import useDirection from './direction';
import useIndent from './indent';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';
import useTextIndent from './text-indent';

function useTypography(Quill, { font, size, lineheight, textindent }) {
  useTextAlign(Quill);
  useDirection(Quill);
  useIndent(Quill);

  font && useFontFamliy(Quill, font);
  size && useFontSize(Quill, size);
  lineheight && useLineHeight(Quill, lineheight);
  textindent && useTextIndent(Quill)
}

export default useTypography;
