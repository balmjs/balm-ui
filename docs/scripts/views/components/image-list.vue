<template>
  <div :class="[$tt('body1'), 'demo--image-list']">
    <section class="hero component">
      <ui-image-list class="hero-image-list">
        <ui-image-item v-for="i in 15" :key="i" block></ui-image-item>
      </ui-image-list>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section :class="['example', {'rounded-corners': radius}]">
        <ui-checkbox id="toggle-radius" v-model="radius">Toggle Rounded Corners</ui-checkbox>

        <h5 :class="$tt('headline5')">1.1 Standard Image List</h5>
        <ui-image-list-controls v-model="controls1"></ui-image-list-controls>
        <ui-image-list
          id="standard-image-list"
          class="standard-image-list"
          :withTextProtection="controls1.labelsType === 2"
        >
          <ui-image-item
            v-for="i in 15"
            :key="i"
            :src="require(`../../../images/photos/3x2/${i}.jpg`)"
          >
            <ui-image-supporting v-if="controls1.labelsType">Text label</ui-image-supporting>
          </ui-image-item>
        </ui-image-list>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>

        <h5 :class="$tt('headline5')">1.2 Masonry Image List</h5>
        <ui-image-list-controls idPrefix="masonry" v-model="controls2"></ui-image-list-controls>
        <ui-image-list
          id="masonry-image-list"
          class="masonry-image-list"
          masonry
          :withTextProtection="controls2.labelsType === 2"
        >
          <ui-image-item
            v-for="(item, index) in list"
            :key="index"
            :src="require(`../../../images/photos/${item}.jpg`)"
          >
            <ui-image-supporting v-if="controls2.labelsType">Text label</ui-image-supporting>
          </ui-image-item>
        </ui-image-list>
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="image-list"></ui-apidocs>
      <ui-apidocs name="image-item"></ui-apidocs>
      <ui-apidocs name="image-supporting"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="image-list"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import UiImageListControls from '../../components/image-list-controls';

export default {
  metaInfo: {
    titleTemplate: '%s - Image List'
  },
  components: {
    UiImageListControls
  },
  mixins: [snippets],
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
  },
  created() {
    this.showCode('image-list', 2);
  }
};
</script>
