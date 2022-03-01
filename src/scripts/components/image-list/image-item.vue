<template>
  <!-- Image list item -->
  <li class="mdc-image-list__item" @click="handleClick">
    <!-- Image container -->
    <template v-if="$parent.isMasonry">
      <slot name="image" :imageClass="UI_IMAGE_ITEM.cssClasses.image">
        <img :class="UI_IMAGE_ITEM.cssClasses.image" :src="image" />
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
import UI_GLOBAL from '../../config/constants';

// Define image item constants
const name = 'UiImageItem';

const UI_IMAGE_ITEM = {
  cssClasses: {
    image: 'mdc-image-list__image'
  }
};

export default {
  name,
  customOptions: {
    name,
    UI_GLOBAL,
    UI_IMAGE_ITEM
  }
};
</script>

<script setup>
import { computed, onBeforeMount, getCurrentInstance } from 'vue';
import { useGlobal } from '../../config/constants';

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

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const instance = getCurrentInstance();
const parent = instance.parent;

const { handleClick } = useGlobal({ emit });

const style = computed(() => ({
  'background-image': `url(${props.bgImage})`
}));

onBeforeMount(() => {
  if (parent?.exposed?.isMasonry.value && props.bgImage) {
    console.warn(
      `[${name}]: The 'bgImage' prop is not compatible with the masonry image list, you need to set the 'image' prop`
    );
  }
});
</script>
