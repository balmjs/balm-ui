<template>
  <div :class="className" @click="handleClick">
    <input
      v-show="false"
      :id="id"
      ref="file"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="attrs"
      @change="handleChange($event)"
    />
    <slot>
      <mdc-button unelevated icon="publish" :disabled="disabled">{{
        text
      }}</mdc-button>
    </slot>
  </div>
</template>

<script>
import MdcButton from '../buttons/mdc-button';
import elementMixin from '../../mixins/element';
import UI_GLOBAL from '../../config/constants';

// Define file constants
const UI_FILE = {
  EVENT: {
    CHANGE: 'change'
  },
  ERROR: {
    NOT_IMAGE_ERR: 1, // 无法预览非图片类型的文件
    PREVIEW_ERR: 2 // 当前浏览器不支持本地预览
  },
  tmpId() {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);

    let result = '';
    for (let i = 0, len = array.length; i < len; i++) {
      result += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
    }

    return result;
  },
  createFileObject: (file) => {
    let { lastModified, name, size, type } = file;

    return {
      tmpId: UI_FILE.tmpId(),
      lastModified,
      name,
      size,
      type,
      sourceFile: file
    };
  },
  getPreviewSrc: (fileObj) => {
    return new Promise(function (resolve, reject) {
      if (fileObj.type.startsWith('image/')) {
        if (window.URL) {
          resolve(window.URL.createObjectURL(fileObj.sourceFile));
        } else if (window.FileReader) {
          let reader = new FileReader();
          reader.onload = function () {
            resolve(this.result);
          };
          reader.readAsDataURL(fileObj.sourceFile);
        } else {
          reject(UI_FILE.ERROR.PREVIEW_ERR);
        }
      } else {
        reject(UI_FILE.ERROR.NOT_IMAGE_ERR);
      }
    });
  }
};

export default {
  name: 'UiFile',
  components: {
    MdcButton
  },
  mixins: [elementMixin],
  props: {
    // <input type="file"> attributes
    accept: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // <ui-button> props
    outlined: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Upload'
    },
    // UI attributes
    preview: {
      type: Boolean,
      default: false
    }
  },
  emits: [UI_FILE.EVENT.CHANGE],
  data() {
    return {
      UI_GLOBAL
    };
  },
  computed: {
    className() {
      return {
        'mdc-file': true,
        'mdc-file--single': !this.multiple,
        'mdc-file--multiple': this.multiple
      };
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        let input = this.$refs.file;
        input && input.click();
      }
    },
    async handleChange(event) {
      let files = [].slice.call(event.target.files);

      if (files.length) {
        let result = await Promise.all(
          files.map(async (file) => {
            let fileObj = UI_FILE.createFileObject(file);
            this.preview && (await this.handlePreview(fileObj));
            return Promise.resolve(fileObj);
          })
        );

        this.$emit(UI_FILE.EVENT.CHANGE, result);
        event.target.value = '';
      }
    },
    async handlePreview(fileObj) {
      fileObj.previewSrc = '';
      fileObj.previewError = 0;
      try {
        fileObj.previewSrc = await UI_FILE.getPreviewSrc(fileObj);
      } catch (e) {
        fileObj.previewError = e;
      }
    }
  }
};
</script>
