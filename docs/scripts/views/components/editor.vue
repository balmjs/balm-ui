<template>
  <ui-page name="editor" demoCount="2" withoutCss>
    <template #hero>
      <h1 :class="$tt('headline1')">WYSIWYG</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Snow (Default)</h6>
      <ui-editor
        ref="editor"
        v-model="content1"
        :toolbarCustomHandlers="toolbarCustomHandlers"
      >
      </ui-editor>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Bubble</h6>
      <ui-editor
        v-model="content2"
        :toolbar="toolbar"
        :emotions="emotions"
        theme="bubble"
      ></ui-editor>
    </section>
  </ui-page>
</template>

<script>
// import HrFormat from '@/extensions/hr-format';

export default {
  metaInfo: {
    titleTemplate: '%s - Editor'
  },
  data() {
    return {
      content1: '',
      content2: '',
      // toolbar: ['bold', 'image', 'emoji', 'undo', 'redo'],
      toolbarCustomHandlers: {
        undo: (quill) => {
          quill.history.undo();
        },
        redo: (quill) => {
          quill.history.redo();
        }
        // hr: (quill) => {
        //   var range = quill.getSelection();
        //   if (range) {
        //     // insert the <hr> where the cursor is
        //     quill.insertEmbed(range.index, 'hr', 'null');
        //   }
        // }
      },
      // extension: {
      //   'formats/hr': HrFormat
      // },
      emotions: [
        {
          type: 'image',
          title: '默认',
          content: [
            {
              name: 'oo',
              alt: '坏笑',
              src:
                'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
            },
            {
              name: 'xx',
              alt: '舔屏',
              src:
                'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
            }
          ]
        },
        {
          type: 'emoji',
          title: 'emoji',
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
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.content1 = this.$refs.editor.decodeEmoji('<p>Hello BalmUI</p>');
      this.content2 = '<p>Hello BalmJS</p>';
    }, 1e3);
  },
  methods: {
    onSubmit() {
      let content = this.$refs.editor.encodeEmoji(this.content1);
      console.log('submit', content);
    },
    onFileChange(file, insert) {
      console.log('file', file);
      console.log('insert', insert);
    }
  }
};
</script>
