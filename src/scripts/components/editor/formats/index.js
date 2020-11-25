import useTextAlign from './align';
import useDirection from './direction';
import useIndent from './indent';
import useFontFamliy from './font';
import useFontSize from './size';
import useLineHeight from './line-height';
import useHtml from './html';

function useDefaultFormats({ font, size, lineheight }) {
  useTextAlign();
  useDirection();
  useIndent();

  useFontFamliy(font);
  useFontSize(size);
  useLineHeight(lineheight);

  useHtml();
}

export default useDefaultFormats;
