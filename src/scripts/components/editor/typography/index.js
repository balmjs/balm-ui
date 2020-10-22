import useFontFamliy from './font-famliy';
import useFontSize from './font-size';
import useLineHeight from './line-height';

function useTypography(Quill, { font, size, lineheight }) {
  font && useFontFamliy(Quill, font);
  size && useFontSize(Quill, size);
  lineheight && useLineHeight(Quill, lineheight);
}

export default useTypography;
