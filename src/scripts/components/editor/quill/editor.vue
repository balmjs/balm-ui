<template>
  <div :class="className">
    <slot name="toolbar"></slot>
    <div class="mdc-editor__content">
      <pre v-if="editSourceCode" class="mdc-editor-code" contenteditable>{{
        htmlContent
      }}</pre>
      <div v-else ref="editor" class="mdc-editor-quill"></div>
    </div>
    <div v-if="withCounter" ref="counter" class="mdc-editor__counter"></div>
    <input
      v-if="customImageHandler"
      ref="file"
      type="file"
      hidden
      @change="handleChange"
    />
    <slot></slot>
  </div>
</template>

<script>
import UI_EDITOR from './constants';

export default {
  name: 'UiEditor',
  customOptions: {
    UI_EDITOR
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick
} from 'vue';
import { createEditor, Emotion } from './core';
import { onBlurEmojiHandler } from './extensions/emoji/module';
import handleFileChange from '../../../utils/file';
import getType from '../../../utils/typeof';

const props = defineProps({
  // States
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Object,
    default: () => ({})
  },
  // UI attributes
  toolbar: {
    type: [Array, String, null],
    default: null
  },
  placeholder: {
    type: [String, null],
    default: null
  },
  readonly: {
    type: Boolean,
    default: false
  },
  fullwidth: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'snow'
  },
  // Extension attributes
  toolbarIcons: {
    type: Object,
    default: () => ({})
  },
  toolbarTips: {
    type: Object,
    default: () => ({})
  },
  toolbarOptions: {
    type: Object,
    default: () => ({})
  },
  toolbarHandlers: {
    type: Object,
    default: () => ({})
  },
  customImageHandler: {
    type: Boolean,
    default: false
  },
  emotions: {
    type: Array,
    default: () => [] // format: [{ type, title, content: { name, value, src } }]
  },
  withCounter: {
    type: Boolean,
    default: false
  },
  extension: {
    type: [Boolean, Object],
    default: false
  }
});

const emit = defineEmits([
  UI_EDITOR.EVENTS.TEXT_CHANGE,
  UI_EDITOR.EVENTS.FILE_CHANGE
]);

const editor = ref(null);
const counter = ref(null);
const file = ref(null);
const state = reactive({
  $editor: null,
  htmlContent: '',
  editSourceCode: false // TODO
});
const { htmlContent, editSourceCode } = toRefs(state);

const className = computed(() => ({
  'mdc-editor': true,
  'mdc-editor--fullwidth': props.fullwidth
}));

onMounted(() => {
  nextTick(async () => {
    const { toolbarTips, toolbarOptions, emotions, extension } = props;
    state.$editor = await createEditor(editor.value, {
      toolbarIcons: Object.assign(UI_EDITOR.toolbarIcons, props.toolbarIcons),
      toolbarTips,
      toolbarOptions,
      options: getOptions(counter.value),
      emotions,
      extension
    });

    if (props.modelValue) {
      setHTML(props.modelValue);
    }

    state.$editor.on('text-change', (delta, oldDelta, source) => {
      let html = getHTML();
      if (html === UI_EDITOR.BLANK) {
        html = '';
      }

      state.htmlContent = html;
      emit(UI_EDITOR.EVENTS.TEXT_CHANGE, html);
    });
  });

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        if (state.htmlContent !== val) {
          setHTML(val);
          state.$editor.blur();
        }
      } else {
        setHTML('');
      }
    }
  );

  document.addEventListener('click', onBlurEmojiHandler);
});

onBeforeUnmount(() => {
  Emotion.clear();

  document.removeEventListener('click', onBlurEmojiHandler);
});

function setToolbarOption(toolbar, key, value) {
  for (let format of toolbar) {
    if (
      getType(format) === 'object' &&
      getType(format[key]) === 'array' &&
      format[key].length === 0
    ) {
      format[key] = [false, ...value];
    } else if (getType(format) === 'array') {
      setToolbarOption(format, key, value);
    }
  }
}

function getToolbar() {
  let customToolbar = props.toolbar;
  if (getType(customToolbar) === 'array') {
    Object.keys(props.toolbarOptions).forEach((format) => {
      let value = props.toolbarOptions[format];
      if (value.length) {
        setToolbarOption(customToolbar, format, props.toolbarOptions[format]);
      }
    });
  }
  return props.toolbar === 'full' ? UI_EDITOR.defaultToolbar : customToolbar;
}

function getOptions(counterEl) {
  const { placeholder, readOnly, theme } = props;
  const defaultOptions = {
    modules: {},
    placeholder,
    readOnly,
    theme
  };
  let options = Object.assign(defaultOptions, props.options);

  options.modules.toolbar = {
    container: getToolbar(),
    handlers: {}
  };

  if (props.withCounter) {
    options.modules.counter = {
      container: counterEl
      // unit: 'word'
    };
  }

  // Custom event handlers
  const toolbarHandlers = options.modules.toolbar.handlers;

  if (props.customImageHandler) {
    toolbarHandlers.image = () => {
      file.value.click();
    };
  }

  Object.keys(props.toolbarHandlers).forEach((format) => {
    toolbarHandlers[format] = (value) => {
      props.toolbarHandlers[format](state.$editor, value);
    };
  });

  return options;
}

const getHTML = () => state.$editor.root.innerHTML;
const setHTML = (html) => (state.$editor.root.innerHTML = html);

const insertImage = (url) => state.$editor.insert('image', url);
function handleChange(event) {
  handleFileChange(props, event, (result) => {
    emit(UI_EDITOR.EVENTS.FILE_CHANGE, result[0], insertImage);
  });
}

const encodeEmoji = (html) => Emotion.encode(html); // output: content
const decodeEmoji = (content) => Emotion.decode(content); // output: html

defineExpose({
  encodeEmoji,
  decodeEmoji
});
</script>
