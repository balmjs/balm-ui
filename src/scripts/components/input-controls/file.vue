<template>
  <div :class="className.outer" @click="handleClick">
    <input
      v-show="false"
      :id="id"
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
      <button :class="className.button" :disabled="disabled">
        <i :class="[UI_GLOBAL.cssClasses.icon, className.icon]">publish</i>
        <span :class="className.label">{{ text }}</span>
      </button>
    </slot>
  </div>
</template>

<script>
import elementMixin from '../../mixins/element';
import handleFileChange from '../../utils/file';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiFile',
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
        },
        icon: 'mdc-button__icon',
        label: 'mdc-button__label'
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
