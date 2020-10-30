import { domain } from '@/config';

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
        src: `${domain}/images/emoji/p_huaixiao.png`
      },
      {
        name: 'xx',
        alt: '舔屏',
        src: `${domain}/images/emoji/p_tian.png`
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
        src: `${domain}/images/emoji/g_shenshou.gif`
      },
      {
        name: 'zz',
        alt: '浮云',
        src: `${domain}/images/emoji/g_fuyun.gif`
      }
    ]
  }
];

export { toolbar, toolbarOptions, emotions };
