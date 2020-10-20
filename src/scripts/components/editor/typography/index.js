import fontFamliy from './font-famliy';
import fontSize from './font-size';
import lineHeight from './line-height';

function useTypography(Quill) {
  fontFamliy(Quill);
  fontSize(Quill);
  lineHeight(Quill);
}

export default useTypography;
