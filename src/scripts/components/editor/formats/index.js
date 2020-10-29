import useTextAlign from './align';
import useDirection from './direction';
import useIndent from './indent';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';

function useDefaultFormats({ font, size, lineheight }) {
  useTextAlign();
  useDirection();
  useIndent();

  useFontFamliy(font);
  useFontSize(size);
  useLineHeight(lineheight);
}

export default useDefaultFormats;
