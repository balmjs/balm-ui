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
        :toolbar-custom-handlers="toolbarCustomHandlers"
        :emotions="emotions"
        :extension="extension"
        custom-image-handler
        @file-change="onFileChange"
      ></ui-editor>
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
import { ref, reactive, toRefs, onMounted } from 'vue';
import UiEditor from 'balm-ui-editor'; // Individual Usage for IE10 bug
import EmojiHuaixiao from '@/assets/emoji/pcmoren_huaixiao.png';
import EmojiTian from '@/assets/emoji/pcmoren_tian.png';
import HrFormat from '@/extensions/hr-format';

const toolbar = [
  [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }, { align: [] }],
  ['emoji', 'link', 'image', 'video'],
  ['clean'],
  ['undo', 'redo'],
  ['hr']
];

const toolbarCustomHandlers = {
  undo: (quill) => {
    quill.history.undo();
  },
  redo: (quill) => {
    quill.history.redo();
  },
  hr: (quill, insert) => {
    insert();
  }
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

const extension = {
  'formats/hr': HrFormat
};

const state = reactive({
  content1: '',
  content2: '',
  encodeContent: '',
  decodeContent: ''
});

const useEditor = (editor) => {
  function onEncodeContent() {
    state.encodeContent = editor.value.encodeEmoji(state.decodeContent);
  }

  return {
    onEncodeContent
  };
};

export default {
  components: {
    UiEditor
  },
  metaInfo: {
    titleTemplate: '%s - Editor'
  },
  setup(props, ctx) {
    const editor = ref(null);

    const { onEncodeContent } = useEditor(editor);

    onMounted(() => {
      setTimeout(() => {
        state.content1 = '<p>Hello BalmUI</p>';
        state.content2 = '<p>Hello BalmJS</p>';

        state.decodeContent = editor.value.decodeEmoji(
          '<p>Hello BalmUI [oo] and BalmJS :smile: !</p>'
        );
      }, 1e3);
    });

    return {
      editor,
      ...toRefs(state),
      toolbar,
      toolbarCustomHandlers,
      emotions,
      extension,
      onEncodeContent
    };
  },
  methods: {
    async onFileChange(file, insert) {
      console.log('upload file', file);
      // custom file upload action...
      insert(file.name);
    }
  }
};
</script>
