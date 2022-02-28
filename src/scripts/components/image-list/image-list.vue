<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
// Define image list constants
const UI_IMAGE_LIST = {
  TYPES: {
    standard: 0,
    masonry: 1
  },
  cssClasses: {
    image: 'mdc-image-list__image'
  },
  EVENTS: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiImageList',
  customOptions: {
    UI_IMAGE_LIST
  }
};
</script>

<script setup>
import { computed } from 'vue';
import checkType from '../../mixins/type';

const props = defineProps({
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
});

const isMasonry = computed(() =>
  checkType(props, UI_IMAGE_LIST.TYPES, 'masonry')
);
const className = computed(() => ({
  'mdc-image-list': true,
  'mdc-image-list--masonry': isMasonry.value,
  'mdc-image-list--with-text-protection': props.textProtection
}));

defineExpose({
  isMasonry
});
</script>
