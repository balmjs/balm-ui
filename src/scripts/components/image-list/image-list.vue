<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
import typeMixin from '../../mixins/type';

// Define image list constants
const UI_IMAGE_LIST = {
  TYPES: {
    standard: 0,
    masonry: 1
  },
  cssClasses: {
    image: 'mdc-image-list__image'
  },
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiImageList',
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    masonry: {
      type: Boolean,
      default: false
    },
    // UI attributes
    textProtection: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isMasonry() {
      return this.checkType(UI_IMAGE_LIST.TYPES, 'masonry');
    },
    className() {
      return {
        'mdc-image-list': true,
        'mdc-image-list--masonry': this.isMasonry,
        'mdc-image-list--with-text-protection': this.textProtection
      };
    }
  }
};
</script>
