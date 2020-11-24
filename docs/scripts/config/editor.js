import { domain } from '@/config';

const DEMO_IMAGE_DIR = `${domain}/images/demo/emoji`;

const toolbar = [
  [
    { header: [false, 1, 2, 3, 4, 5, 6] },
    { font: [] },
    { size: [] },
    { lineheight: [] }
  ],
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
  ['link', 'image', 'video'],
  ['strike', { script: 'super' }, { script: 'sub' }, 'divider'],
  ['clean', 'undo', 'redo'],
  ['preview'] // custom
];

const toolbarTips = {
  header: 'Headline',
  font: 'Font Famliy',
  size: 'Font Size',
  lineheight: 'Line Height',
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  color: 'Text Color',
  background: 'Background Color',
  align: {
    default: 'Left Align',
    center: 'Center Align',
    right: 'Right Align',
    justify: 'Justify Align'
  },
  list: {
    ordered: 'Ordered List',
    bullet: 'Bullet List'
  },
  indent: {
    '+1': 'Increase Indent',
    '-1': 'Decrease Indent'
  },
  blockquote: 'Blockquote',
  emoji: 'Emoji'
};

const toolbarOptions = {
  font: [
    'Arial',
    'Arial Black',
    'Comic Sans MS',
    'Courier New',
    'Tahoma',
    'Georgia',
    'Helvetica',
    'Segoe UI',
    'Impact',
    'Times New Roman',
    'Verdana'
  ],
  size: [
    '8px',
    '9px',
    '10px',
    '11px',
    '12px',
    '13px',
    '14px',
    '16px',
    '18px',
    '24px',
    '36px',
    '48px',
    '60px',
    '72px',
    '96px'
  ],
  lineheight: [
    '1',
    '1.2',
    '1.5',
    '1.6',
    '1.8',
    '2',
    '2.4',
    '2.8',
    '3',
    '4',
    '5'
  ]
};

const emotions = [
  {
    type: 'image',
    title: 'Default',
    content: [
      {
        name: 'oo',
        alt: '坏笑',
        src: `${DEMO_IMAGE_DIR}/p_huaixiao.png`
      },
      {
        name: 'xx',
        alt: '舔屏',
        src: `${DEMO_IMAGE_DIR}/p_tian.png`
      }
    ]
  },
  {
    type: 'emoji',
    title: 'Emoji',
    content: [
      {
        name: 'smile',
        value: '😀'
      },
      {
        name: 'cry',
        value: '😆'
      }
    ]
  },
  {
    type: 'image',
    title: 'Custom',
    content: [
      {
        name: 'yy',
        alt: '神兽',
        src: `${DEMO_IMAGE_DIR}/g_shenshou.gif`
      },
      {
        name: 'zz',
        alt: '浮云',
        src: `${DEMO_IMAGE_DIR}/g_fuyun.gif`
      }
    ]
  }
];

export { toolbar, toolbarTips, toolbarOptions, emotions };
