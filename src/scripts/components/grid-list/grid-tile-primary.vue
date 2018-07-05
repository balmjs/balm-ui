<template>
  <div class="mdc-grid-tile__primary">
    <img v-if="image" ref="cover" :class="imageClassName" :src="image">
    <div v-else ref="cover" :class="imageClassName"></div>
  </div>
</template>

<script>
import elementMixin from '../../mixins/element';

export default {
  name: 'ui-grid-tile-primary',
  mixins: [elementMixin],
  props: {
    // UI attributes
    image: String,
    imageClass: String
  },
  computed: {
    imageClassName() {
      return ['mdc-grid-tile__primary-content', this.imageClass];
    }
  },
  mounted() {
    this.initAttributes(this.$refs.cover);
  }
};
</script>
