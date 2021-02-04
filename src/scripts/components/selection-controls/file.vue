<template>
  <div :class="className" @click="handleClick">
    <input
      v-show="false"
      :id="inputId"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="attrs"
      @change="
        handleFileChange($event, (result) => {
          $emit('change', result);
        })
      "
    />
    <slot>
      <mdc-button
        :outlined="outlined"
        :unelevated="!outlined"
        icon="publish"
        :disabled="disabled"
      >
        {{ text }}
      </mdc-button>
    </slot>
  </div>
</template>

<script>
import MdcButton from '../buttons/mdc-button';
import inputMixin from '../../mixins/input';
import handleFileChange from '../../utils/file';

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
        let input = this.$el.querySelector('input');
        input && input.click();
      }
    },
    handleFileChange
  }
};
</script>
