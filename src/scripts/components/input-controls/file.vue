<template>
  <div :class="className.outer" @click="handleClick">
    <input v-show="false" type="file" :accept="accept" :multiple="multiple" @change="handleChange">
    <slot>
      <button :class="className.button">
        <i :class="UI_GLOBAL.mdi">file_upload</i>
        {{ text }}
      </button>
    </slot>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_FILE = {
  EVENT: {
    CHANGE: 'change'
  },
  ERROR: {
    NOT_IMAGE_ERR: 1, // 无法预览非图片类型的文件
    PREVIEW_ERR: 2 // 当前浏览器不支持本地预览
  },
  uuid() {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);

    let result = '';
    for (let i = 0, len = array.length; i < len; i++) {
      result += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
    }

    return result;
  },
  createFileObject: file => {
    return {
      uuid: UI_FILE.uuid(),
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
      sourceFile: file
    };
  },
  getPreviewSrc: fileObj => {
    return new Promise(function(resolve, reject) {
      if (fileObj.type.startsWith('image/')) {
        if (window.URL) {
          resolve(window.URL.createObjectURL(fileObj.sourceFile));
        } else if (window.FileReader) {
          let reader = new FileReader();
          reader.onload = function() {
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
  name: 'ui-file',
  props: {
    accept: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Upload'
    }
  },
  data() {
    return {
      UI_GLOBAL
    };
  },
  computed: {
    className() {
      return {
        outer: {
          'mdc-file': true,
          'mdc-file--single': !this.multiple,
          'mdc-file--multiple': this.multiple
        },
        button: {
          'mdc-button': true,
          'mdc-button--unelevated': !this.outlined,
          'mdc-button--outlined': this.outlined
        }
      };
    }
  },
  methods: {
    handleClick() {
      let input = this.$el.querySelector('input');
      input && input.click();
    },
    handleChange(event) {
      let files = [].slice.call(event.target.files);

      if (files.length) {
        let result = files.map(file => {
          let fileObj = UI_FILE.createFileObject(file);
          this.preview && this.handlePreview(fileObj);
          return fileObj;
        });

        this.$emit(UI_FILE.EVENT.CHANGE, result);
        // event.target.value = '';
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
