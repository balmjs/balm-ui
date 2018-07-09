<template>
  <a :class="UI_LIST.SLOT_CLASS.item" :href="url">
    <slot :className="UI_LIST.SLOT_CLASS"></slot>
  </a>
</template>

<script>
import linkMixin from '../../mixins/link';
import rippleMixin from '../../mixins/ripple';
import UI_LIST from './constants';

export default {
  name: 'ui-item-link',
  mixins: [linkMixin, rippleMixin],
  props: {
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_LIST
    };
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
</script>
