```html
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
```

```js
import HrFormat from '@/extensions/hr-format';

export default {
  data() {
    return {
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
              src:
                'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
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
              src:
                'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
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
    if (this.$refs.editor) {
      this.decodeContent = this.$refs.editor.decodeEmoji(
        '<p>Hello BalmUI [oo] and BalmJS :smile: !</p>'
      );
    }
  },
  methods: {
    async onFileChange(file, insert) {
      let { url } = await this.$http.post('/api/upload', { file });
      insert(url);
    },
    onSubmit() {
      this.encodeContent = this.$refs.editor.encodeEmoji(this.decodeContent);
      // submit action...
    }
  }
};
```
