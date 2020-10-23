import useTextAlign from './align';
import useDirection from './direction';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';

function useTypography(Quill, { font, size, lineheight }) {
  useTextAlign(Quill);
  useDirection(Quill);

  font && useFontFamliy(Quill, font);
  size && useFontSize(Quill, size);
  lineheight && useLineHeight(Quill, lineheight);
}

export default useTypography;
