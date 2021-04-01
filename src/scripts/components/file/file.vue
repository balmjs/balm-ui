<template>
  <div :class="className" @click="handleClick">
    <input
      v-show="false"
      :id="inputId"
      ref="file"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="attrs"
      @change="
        handleFileChange($event, (result) => {
          $emit(UI_FILE.EVENT.CHANGE, result);
        })
      "
    />
    <slot>
      <mdc-button
        :outlined="outlined"
        :unelevated="!outlined"
        icon="file_upload"
        :disabled="disabled"
      >
        {{ text }}
      </mdc-button>
    </slot>
  </div>
</template>

<script>
import MdcButton from '../button/mdc-button.vue';
import inputMixin from '../../mixins/input';
import handleFileChange from '../../utils/file';

// Define file constants
const UI_FILE = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiFile',
  components: {
    MdcButton
  },
  mixins: [inputMixin],
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
      UI_FILE
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
    handleFileChange
  }
};
</script>
