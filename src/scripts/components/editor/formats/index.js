import useTextAlign from './align';
import useDirection from './direction';
import useIndent from './indent';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';
import useDivider from './divider';

function useDefaultFormats({ font, size, lineheight }) {
  useTextAlign();
  useDirection();
  useIndent();

  font && useFontFamliy(font);
  size && useFontSize(size);
  lineheight && useLineHeight(lineheight);

  useDivider();
}

export default useDefaultFormats;
