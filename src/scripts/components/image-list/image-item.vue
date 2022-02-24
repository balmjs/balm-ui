<template>
  <!-- Image list item -->
  <li ref="imageItem" class="mdc-image-list__item" @click="handleClick">
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
  EVENTS: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiImageItem',
  customOptions: {
    UI_IMAGE_ITEM
  }
};
</script>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';

const props = defineProps({
  // UI attributes
  image: {
    type: [String, null],
    default: null
  },
  bgImage: {
    type: [String, null],
    default: null
  }
});

const emit = defineEmits([UI_IMAGE_ITEM.EVENTS.CLICK]);

const style = computed(() => ({
  'background-image': `url(${props.bgImage})`
}));

const imageItem = ref(null);

onBeforeMount(() => {
  if (imageItem.$parent.isMasonry && props.bgImage) {
    console.warn(
      '[UiImageItem]',
      `The 'bgImage' prop is not compatible with the masonry image list, you need to set the 'image' prop`
    );
  }
});

function handleClick(event) {
  emit(UI_IMAGE_ITEM.EVENTS.CLICK, event);
}
</script>
