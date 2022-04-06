<template>
  <docs-page type="plugin" name="lazyload" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">$lazyload</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-image-list
          id="masonry-image-list"
          type="masonry"
          class="masonry-image-list"
          text-protection
        >
          <template v-for="(image, index) in images" :key="index">
            <ui-image-item v-lazyload="image">
              <ui-image-text>Text label</ui-image-text>
            </ui-image-item>
          </template>
        </ui-image-list>
      </div>
      <!-- <ui-snippet :code="$store.demos[1]"></ui-snippet> -->
    </section>
  </docs-page>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { loadAsset } from '@/utils';

const list = [
  '3x2/16',
  '2x3/1',
  '3x2/1',
  '2x3/2',
  '2x3/3',
  '3x2/2',
  '2x3/4',
  '3x2/3',
  '2x3/5',
  '3x2/4',
  '2x3/6',
  '3x2/5',
  '2x3/7',
  '3x2/6',
  '3x2/7',
  // repeat
  '3x2/16',
  '2x3/1',
  '3x2/1',
  '2x3/2',
  '2x3/3',
  '3x2/2',
  '2x3/4',
  '3x2/3',
  '2x3/5',
  '3x2/4',
  '2x3/6',
  '3x2/5',
  '2x3/7',
  '3x2/6',
  '3x2/7',
  // repeat
  '3x2/16',
  '2x3/1',
  '3x2/1',
  '2x3/2',
  '2x3/3',
  '3x2/2',
  '2x3/4',
  '3x2/3',
  '2x3/5',
  '3x2/4',
  '2x3/6',
  '3x2/5',
  '2x3/7',
  '3x2/6',
  '3x2/7'
];

export default {
  metaInfo() {
    return {
      subtitle: 'Lazyload'
    };
  },
  setup() {
    const images = ref([]);

    onBeforeMount(async () => {
      for (const item of list) {
        images.value.push(await loadAsset(`assets/photos/${item}.jpg`));
      }
    });

    return {
      images
    };
  }
};
</script>
