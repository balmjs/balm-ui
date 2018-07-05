<template>
  <li class="mdc-image-list__item">
    <div v-if="withWrapper" class="mdc-image-list__image-aspect-container">
      <div v-if="block" :class="UI_IMAGE_LIST.CLASSNAME.IMAGE" :style="style"></div>
      <img v-else :class="UI_IMAGE_LIST.CLASSNAME.IMAGE" :src="src">
    </div>
    <template v-else>
      <div v-if="block" :class="UI_IMAGE_LIST.CLASSNAME.IMAGE" :style="style"></div>
      <img v-else :class="UI_IMAGE_LIST.CLASSNAME.IMAGE" :src="src">
    </template>
    <slot><!-- The text label --></slot>
  </li>
</template>

<script>
// Define constants
const UI_IMAGE_LIST = {
  CLASSNAME: {
    IMAGE: 'mdc-image-list__image'
  }
};

export default {
  name: 'ui-image-item',
  props: {
    // UI attributes
    src: String,
    withWrapper: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_IMAGE_LIST
    };
  },
  computed: {
    style() {
      return this.src
        ? {
            'background-image': `url(${this.src})`
          }
        : false;
    }
  }
};
</script>
