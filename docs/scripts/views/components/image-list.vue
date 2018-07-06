<template>
  <div class="demo--image-list">
    <section class="hero">
      <ui-image-list class="hero-image-list">
        <ui-image-item v-for="i in 15" :key="i" block>
        </ui-image-item>
      </ui-image-list>
    </section>

    <section :class="['example', {'rounded-corners': radius}]">
      <ui-checkbox id="toggle-radius" v-model="radius">Toggle Rounded Corners</ui-checkbox>

      <h1 :class="$tt('headline5')">Standard Image List</h1>
      <ui-image-list-controls v-model="controls1"></ui-image-list-controls>
      <ui-image-list
        id="standard-image-list"
        class="standard-image-list"
        :withTextProtection="controls1.labelsType === 2">
        <ui-image-item v-for="i in 15" :key="i"
          :src="`images/photos/3x2/${i}.jpg`">
          <ui-image-label v-if="controls1.labelsType">Text label</ui-image-label>
        </ui-image-item>
      </ui-image-list>

      <h1 :class="$tt('headline5')">Masonry Image List</h1>
      <ui-image-list-controls idPrefix="masonry" v-model="controls2"></ui-image-list-controls>
      <ui-image-list
        id="masonry-image-list"
        class="masonry-image-list"
        masonry
        :withTextProtection="controls2.labelsType === 2">
        <ui-image-item v-for="(item, index) in list" :key="index"
          :src="`images/photos/${item}.jpg`">
          <ui-image-label v-if="controls2.labelsType">Text label</ui-image-label>
        </ui-image-item>
      </ui-image-list>
    </section>
  </div>
</template>

<script>
import UiImageListControls from '../../components/image-list-controls';

export default {
  components: {
    UiImageListControls
  },
  data() {
    return {
      radius: false,
      controls1: {
        labelsType: 1
      },
      controls2: {
        labelsType: 1
      },
      list: [
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
      ]
    };
  }
};
</script>
