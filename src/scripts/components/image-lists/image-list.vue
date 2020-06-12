<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
import typeMixin from '../../mixins/type';
import UI_IMAGE_LIST from './constants';

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
