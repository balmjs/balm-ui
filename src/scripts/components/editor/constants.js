// Define editor constants
export default {
  EVENT: {
    TEXT_CHANGE: 'change',
    FILE_CHANGE: 'file-change'
  },
  BLANK: '<p><br></p>',
  toolbarIcons: {
    // default icons
    align: {
      '': 'format_align_left',
      center: 'format_align_center',
      right: 'format_align_right',
      justify: 'format_align_justify'
    },
    background: 'font_download',
    blockquote: 'format_quote',
    bold: 'format_bold',
    clean: 'format_clear',
    code: 'code',
    // 'code-block': '',
    color: 'text_format',
    // direction: {
    //   '': 'format_textdirection_l_to_r',
    //   rtl: 'format_textdirection_r_to_l'
    // },
    italic: 'format_italic',
    image: 'insert_photo',
    indent: {
      '+1': 'format_indent_increase',
      '-1': 'format_indent_decrease'
    },
    link: 'insert_link',
    list: {
      ordered: 'format_list_numbered',
      bullet: 'format_list_bulleted'
    },
    script: {
      sub: 'subscript',
      super: 'superscript'
    },
    strike: 'strikethrough_s',
    underline: 'format_underlined',
    video: 'videocam',
    // extension icons
    alignleft: 'format_align_left',
    aligncenter: 'format_align_center',
    alignright: 'format_align_right',
    alignjustify: 'format_align_justify',
    divider: 'horizontal_rule',
    cut: 'content_cut',
    copy: 'content_copy',
    paste: 'content_paste',
    delete: 'clear',
    search: 'search',
    preview: 'preview',
    fullscreen: {
      '': 'fullscreen',
      exit: 'fullscreen_exit'
    },
    table: 'table_view',
    emoji: 'insert_emoticon',
    undo: 'undo',
    redo: 'redo',
    linkoff: 'link_off',
    textindent: {
      '+1': 'format_indent_increase',
      '-1': 'format_indent_decrease'
    }
  },
  defaultToolbar: [
    [{ font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ header: [] }, 'blockquote', 'code-block'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
      { textindent: '-1' },
      { textindent: '+1' }
    ],
    [{ direction: 'rtl' }, { align: [] }],
    ['link', 'linkoff'],
    ['image', 'video'], // NOTE: 'formula' - requires `KaTex`
    ['clean']
  ]
};
