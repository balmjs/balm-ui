<template>
  <docs-page name="editor" demo-count="3" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">WYSIWYG</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Snow (Default)</h6>
      <ui-editor v-model="content1"></ui-editor>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Bubble</h6>
      <ui-editor v-model="content2" theme="bubble"></ui-editor>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Custom Toolbar</h6>
      <ui-editor
        ref="editor"
        v-model="decodeContent"
        placeholder="Compose an epic..."
        :toolbar="toolbar"
        :toolbar-options="toolbarOptions"
        :toolbar-handlers="toolbarHandlers"
        :emotions="emotions"
      ></ui-editor>
      <ui-dialog v-model="preview.show" class="preview-dialog">
        <ui-dialog-title>
          Preview
          <ui-icon-button
            class="close"
            icon="close"
            @click="$balmUI.onClose('preview.show')"
          ></ui-icon-button>
        </ui-dialog-title>
        <ui-dialog-content>
          <ui-tabs
            v-model="preview.type"
            :type="2"
            :items="[
              {
                text: 'Desktop',
                icon: 'desktop_windows'
              },
              {
                text: 'Tablet',
                icon: 'tablet'
              },
              {
                text: 'Mobile',
                icon: 'phone_iphone'
              }
            ]"
          ></ui-tabs>
          <div
            v-shadow="4"
            v-html="preview.content"
            class="preview-content"
            :style="previewStyle"
          ></div>
        </ui-dialog-content>
      </ui-dialog>
      <p>
        <ui-button outlined @click="onEncodeContent"
          >Show Encode Content</ui-button
        >
      </p>
      <div>{{ encodeContent }}</div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import EmojiHuaixiao from '@/assets/emoji/pcmoren_huaixiao.png';
import EmojiTian from '@/assets/emoji/pcmoren_tian.png';

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
        src: EmojiHuaixiao
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
        name: 'xx',
        alt: '舔屏',
        src: EmojiTian
      }
    ]
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Editor'
  },
  data() {
    return {
      toolbarOptions,
      emotions,
      content1: '',
      content2: '',
      encodeContent: '',
      decodeContent: '',
      toolbar: [
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
        ['preview']
      ],
      toolbarHandlers: {
        preview: (quill, value) => {
          this.preview.show = true;
          this.preview.content = this.decodeContent;
        }
      },
      preview: {
        show: false,
        type: 0,
        content: ''
      }
    };
  },
  computed: {
    previewStyle() {
      let width;

      switch (this.preview.type) {
        case 1:
          width = '768px';
          break;
        case 2:
          width = '375px';
          break;
        default:
          width = '960px';
      }

      return { width };
    }
  },
  mounted() {
    setTimeout(() => {
      this.content1 = `<p><strong>BalmUI</strong> is a modular and customizable Material Design UI library for Vue.js.</p><p><br></p><ul><li>Enterprise-class UI designed for web applications</li><li>A set of high-quality Vue components/plugins/directives/utils out of the box</li><li>Powerful theme customization in every detail</li><li>Integrated a complete set of the latest Material Icons</li><li>All components and plugins is highly customizable, and can be used individually</li></ul>`;
      this.content2 =
        '<p><strong>BalmJS</strong>: A flexible Front-End workflow for webapps</p>';

      if (this.$refs.editor) {
        this.decodeContent = this.$refs.editor.decodeEmoji(
          `<h1 style="text-align: center;">Rich Text Editor</h1>
          <p><a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill</a> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
          <p style="text-align: center;"><img src="${this.$domain}/images/editor-image.png"></p>
          <p style="text-align: center;">Hello BalmUI [oo] and BalmJS :smile: !</p>`
        );
      }
    }, 1e3);
  },
  methods: {
    async onFileChange(file, insert) {
      console.log('upload file', file);
      // custom file upload action...
      insert(file.name);
    },
    onEncodeContent() {
      this.encodeContent = this.$refs.editor.encodeEmoji(this.decodeContent);
    }
  }
};
</script>
