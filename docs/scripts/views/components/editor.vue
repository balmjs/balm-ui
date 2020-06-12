<template>
  <ui-page name="editor" demoCount="3" withoutCss>
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
        :toolbarCustomHandlers="toolbarCustomHandlers"
        :emotions="emotions"
        :extension="extension"
        customImageHandler
        @file-change="onFileChange"
      ></ui-editor>
      <p>
        <ui-button outlined @click="onEncodeContent">Show Encode Content</ui-button>
      </p>
      <div>{{ encodeContent }}</div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
import EmojiHuaixiao from '@/assets/emoji/pcmoren_huaixiao.png';
import EmojiTian from '@/assets/emoji/pcmoren_tian.png';
import HrFormat from '@/extensions/hr-format';

export default {
  metaInfo: {
    titleTemplate: '%s - Editor'
  },
  data() {
    return {
      content1: '',
      content2: '',
      encodeContent: '',
      decodeContent: '',
      toolbar: [
        [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' }
        ],
        [{ direction: 'rtl' }, { align: [] }],
        ['emoji', 'link', 'image', 'video'],
        ['clean'],
        ['undo', 'redo'],
        ['hr']
      ],
      toolbarCustomHandlers: {
        undo: (quill) => {
          quill.history.undo();
        },
        redo: (quill) => {
          quill.history.redo();
        },
        hr: (quill, insert) => {
          insert();
        }
      },
      emotions: [
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
      ],
      extension: {
        'formats/hr': HrFormat
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.content1 = '<p>Hello BalmUI</p>';
      this.content2 = '<p>Hello BalmJS</p>';
      this.decodeContent = this.$refs.editor.decodeEmoji(
        '<p>Hello BalmUI [oo] and BalmJS :smile: !</p>'
      );
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
