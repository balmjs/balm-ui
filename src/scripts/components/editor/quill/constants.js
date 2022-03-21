// Define editor constants
export default {
  EVENTS: {
    TEXT_CHANGE: 'update:modelValue',
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
    color: 'text_format',
    // direction: {
    //   '': 'format_textdirection_l_to_r',
    //   rtl: 'format_textdirection_r_to_l'
    // },
    formula: 'functions',
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
    divider: 'horizontal_rule',
    emoji: 'insert_emoticon',
    cut: 'content_cut',
    copy: 'content_copy',
    paste: 'content_paste',
    delete: 'clear',
    search: 'search',
    preview: 'preview',
    selectall: 'select_all',
    fullscreen: {
      '': 'fullscreen',
      exit: 'fullscreen_exit'
    },
    undo: 'undo',
    redo: 'redo',
    linkoff: 'link_off',
    textindent: {
      '+1': 'format_indent_increase',
      '-1': 'format_indent_decrease'
    },
    pdf: 'picture_as_pdf'
  },
  defaultToolbar: [
    [{ header: [] }, { font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', { color: [] }, { background: [] }],
    [
      { align: '' },
      { align: 'center' },
      { align: 'right' },
      { align: 'justify' }
    ],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '+1' },
      { indent: '-1' },
      'blockquote',
      'emoji'
    ],
    // ['selectall', 'cut', 'copy', 'paste', 'delete', 'search'],
    ['link', 'image', 'video'], // NOTE: 'formula' - requires `KaTex`
    ['strike', { script: 'super' }, { script: 'sub' }, 'divider'],
    ['clean', 'undo', 'redo']
  ]
};
