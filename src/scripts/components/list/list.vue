<template>
  <ul :class="className" aria-orientation="vertical">
    <slot></slot>
  </ul>
</template>

<script>
import listMixin from '../../mixins/list';
import rippleMixin from '../../mixins/ripple';
import UI_LIST from './constants';

export default {
  name: 'ui-list',
  mixins: [listMixin, rippleMixin],
  props: {
    // States
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    activated: {
      type: Number,
      default: -1
    },
    // UI attributes
    ripple: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.ripple) {
      this.$el.querySelectorAll(`.${UI_LIST.SLOT_CLASS.item}`).forEach(item => {
        this.initRipple(item);
      });
    }
  }
};
</script>
