<template>
  <span class="mdc-list-item__graphic">
    <slot>
      <i v-if="icon" class="material-icons">{{ icon }}</i>
      <img v-if="image" :src="image" v-bind="attrs">
    </slot>
  </span>
</template>

<script>
import elementMixin from '../../mixins/element';

export default {
  name: 'ui-item-first',
  mixins: [elementMixin],
  props: {
    icon: String,
    image: String
  },
  created() {
    if (this.icon && this.image) {
      console.warn('You can only set an icon or image');
    }
  }
};
</script>
