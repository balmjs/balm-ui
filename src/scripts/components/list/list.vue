<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
import rippleMixin from '../../mixins/ripple';
import cssClasses from './constants';

export default {
  name: 'ui-list',
  mixins: [rippleMixin],
  props: {
    // ui attributes
    dense: {
      type: Boolean,
      default: false
    },
    twoLine: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    },
    effect: {
      type: Boolean,
      default: false
    }
    // NOTE: coming soon
    // threeLine: {
    //   type: Boolean,
    //   default: false
    // }
  },
  computed: {
    className() {
      return {
        'mdc-list': true,
        'mdc-list--dense': this.dense,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--avatar-list': this.avatar
      };
    }
  },
  mounted() {
    if (this.effect) {
      this.$el.querySelectorAll(`.${cssClasses.item}`).forEach(item => {
        this.initRipple(item);
      });
    }
  }
};
</script>
