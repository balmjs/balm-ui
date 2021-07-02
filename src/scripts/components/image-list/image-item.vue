<template>
  <!-- Image list item -->
  <li class="mdc-image-list__item" @click="handleClick">
    <!-- Image container -->
    <template v-if="$parent.isMasonry">
      <slot name="image" :imageClass="UI_IMAGE_ITEM.cssClasses.image">
        <div
          v-if="bgImage"
          :class="UI_IMAGE_ITEM.cssClasses.image"
          :style="style"
        ></div>
        <img v-else :class="UI_IMAGE_ITEM.cssClasses.image" :src="image" />
      </slot>
    </template>
    <div v-else class="mdc-image-list__image-aspect-container">
      <slot name="image" :imageClass="UI_IMAGE_ITEM.cssClasses.image">
        <div
          v-if="bgImage"
          :class="UI_IMAGE_ITEM.cssClasses.image"
          :style="style"
        ></div>
        <img v-else :class="UI_IMAGE_ITEM.cssClasses.image" :src="image" />
      </slot>
    </div>
    <slot></slot>
  </li>
</template>

<script>
// Define image item constants
const UI_IMAGE_ITEM = {
  cssClasses: {
    image: 'mdc-image-list__image'
  },
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiImageItem',
  props: {
    // UI attributes
    image: {
      type: [String, null],
      default: null
    },
    bgImage: {
      type: [String, null],
      default: null
    }
  },
  emits: [UI_IMAGE_ITEM.EVENT.CLICK],
  data() {
    return {
      UI_IMAGE_ITEM
    };
  },
  computed: {
    style() {
      return {
        'background-image': `url(${this.bgImage})`
      };
    }
  },
  created() {
    if (this.$parent.isMasonry && this.bgImage) {
      console.warn(
        '[UiImageItem]',
        `The 'bgImage' prop is not compatible with the masonry image list, you need to set the 'image' prop`
      );
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_IMAGE_ITEM.EVENT.CLICK, event);
    }
  }
};
</script>
