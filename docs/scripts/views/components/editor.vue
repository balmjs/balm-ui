<template>
  <docs-page name="editor" demo-count="3">
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
        :toolbar-tips="toolbarTips"
        :toolbar-handlers="toolbarHandlers"
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
            class="preview-content"
            :style="previewStyle"
            v-html="preview.content"
          ></div>
        </ui-dialog-content>
      </ui-dialog>
      <p>
        <ui-button outlined @click="onEncodeContent"
          >Show Encode Content</ui-button
        >
      </p>
      <div class="preview-code">{{ encodeContent }}</div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { toolbar, toolbarTips } from '@/config/editor';

export default {
  metaInfo: {
    titleTemplate: '%s - Editor'
  },
  data() {
    return {
      content1: '',
      content2: '',
      // demo3
      encodeContent: '',
      decodeContent: '',
      toolbar,
      toolbarTips,
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
          width = '100%';
      }

      return { width };
    }
  },
  mounted() {
    setTimeout(() => {
      this.content1 = `<p><a href="https://github.com/balmjs/balm-ui" rel="noopener noreferrer" target="_blank"><strong>BalmUI</strong></a> is a modular and customizable Material Design UI library for Vue.js.</p><p><br></p><ul><li>Enterprise-class UI designed for web applications</li><li>A set of high-quality Vue components/plugins/directives/utils out of the box</li><li>Powerful theme customization in every detail</li><li>Integrated a complete set of the latest Material Icons</li><li>All components and plugins is highly customizable, and can be used individually</li></ul>`;
      this.content2 =
        '<p><strong>BalmJS</strong>: A flexible Front-End workflow for webapps</p>';

      if (this.$refs.editor) {
        this.decodeContent = this.$refs.editor.decodeEmoji(
          `<h1 style="text-align: center;">Rich Text Editor</h1><p><br></p><p><a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill</a> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p><p><br></p><p style="text-align: center;"><img src="${this.$domain}/images/demo/editor-image.png"></p><p><br></p><p style="text-align: center;">Hello BalmUI [oo] and BalmJS :smile: !</p>`
        );

        this.setToolbar();
        window.addEventListener('balmResize', this.setToolbar);
      }
    }, 1e3);
  },
  beforeDestroy() {
    window.removeEventListener('balmResize', this.setToolbar);
  },
  methods: {
    async onFileChange(file, insert) {
      console.log('upload file', file);
      // custom file upload action...
      insert(file.name);
    },
    onEncodeContent() {
      this.encodeContent = this.$refs.editor.encodeEmoji(this.decodeContent);
    },
    setToolbar() {
      let isWideScreen = window.innerWidth > 1024;
      let previewFormat = this.$refs.editor.$el.querySelector('.ql-preview');

      if (isWideScreen) {
        previewFormat.style.display = 'block';
      } else {
        previewFormat.style.display = 'none';
        this.preview.show = false;
      }
    }
  }
};
</script>
