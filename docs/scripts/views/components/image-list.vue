<template>
  <docs-page
    name="image-list"
    :apis="['ui-image-list', 'image-list', 'image-item', 'image-text']"
    demo-count="2"
  >
    <template #hero>
      <ui-image-list class="hero-image-list">
        <ui-image-item
          v-for="i in 15"
          :key="i"
          :bg-image="`https://picsum.photos/128?random=${i}`"
        ></ui-image-item>
      </ui-image-list>
    </template>

    <!-- Content -->
    <section :class="{ 'rounded-corners': radius }">
      <div class="demo-controls">
        <ui-form-field>
          <ui-checkbox v-model="radius" input-id="toggle-radius"></ui-checkbox>
          <label for="toggle-radius">Toggle Rounded Corners</label>
        </ui-form-field>
      </div>

      <section class="demo-wrapper">
        <h6 :class="$tt('headline6')">1.1 Standard Image List</h6>
        <ui-image-list-controls v-model="controls1"></ui-image-list-controls>
        <div class="demo">
          <ui-image-list
            id="standard-image-list"
            class="standard-image-list"
            :text-protection="controls1.labelsType === 2"
          >
            <ui-image-item
              v-for="(image, index) in images1"
              :key="index"
              :bg-image="image"
            >
              <ui-image-text v-if="controls1.labelsType">
                Text label
              </ui-image-text>
            </ui-image-item>
          </ui-image-list>
        </div>
        <ui-snippet :code="$store.demos[1]"></ui-snippet>
      </section>

      <section class="demo-wrapper">
        <h6 :class="$tt('headline6')">1.2 Masonry Image List</h6>
        <ui-image-list-controls
          v-model="controls2"
          id-prefix="masonry"
        ></ui-image-list-controls>
        <div class="demo">
          <ui-image-list
            id="masonry-image-list"
            type="masonry"
            class="masonry-image-list"
            :text-protection="controls2.labelsType === 2"
          >
            <ui-image-item
              v-for="(image, index) in images2"
              :key="index"
              :image="image"
            >
              <ui-image-text v-if="controls2.labelsType">
                Text label
                <template #action>
                  <ui-icon-button icon="favorite_border"></ui-icon-button>
                </template>
              </ui-image-text>
            </ui-image-item>
          </ui-image-list>
        </div>
        <ui-snippet :code="$store.demos[2]"></ui-snippet>
      </section>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs, onBeforeMount } from 'vue';
import UiImageListControls from '@/demos/image-list/image-list-controls';
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
  '3x2/7'
];

const state = reactive({
  radius: false,
  controls1: {
    labelsType: 1
  },
  images1: [],
  controls2: {
    labelsType: 1
  },
  images2: []
});

export default {
  metaInfo() {
    return {
      subtitle: 'Image List'
    };
  },
  components: {
    UiImageListControls
  },
  setup() {
    onBeforeMount(async () => {
      for (let i = 1; i <= 15; i++) {
        state.images1.push(await loadAsset(`assets/photos/3x2/${i}.jpg`));
      }

      for (const item of list) {
        state.images2.push(await loadAsset(`assets/photos/${item}.jpg`));
      }
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>
