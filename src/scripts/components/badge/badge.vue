<template>
  <div :class="className">
    <slot></slot>
    <sup v-if="count" class="mdc-badge__sup">{{ overflowCount }}</sup>
    <sup v-else :class="supClassName">
      <slot name="badge"></slot>
    </sup>
  </div>
</template>

<script>
import stateTypeMixins from '../../mixins/state-type';

export default {
  name: 'UiBadge',
  mixins: [stateTypeMixins],
  props: {
    // States
    count: {
      type: Number,
      default: 0
    },
    // UI attributes
    overlap: {
      type: Boolean,
      default: false
    },
    maxCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: '' // success, info, warning, error
    }
  },
  computed: {
    className() {
      return {
        'mdc-badge': true,
        'mdc-badge--overlap': this.overlap
      };
    },
    overflowCount() {
      return this.count > this.maxCount ? `${this.maxCount}+` : this.count;
    },
    supClassName() {
      return [
        {
          'mdc-badge__sup': true,
          'mdc-badge__sup--dot': this.dot
        },
        this.stateType ? `mdc-badge__sup--${this.stateType}` : ''
      ];
    }
  }
};
</script>
