<template>
  <div :class="className" @click="$emit('click', $event)">
    <slot></slot>
    <sup v-if="count" class="mdc-badge__sup">{{ overflowCount }}</sup>
    <template v-else>
      <sup v-if="overlap && !dot"></sup>
      <sup
        v-else
        :class="[
          'mdc-badge__sup',
          { 'mdc-badge__sup--dot': dot },
          stateType ? `mdc-badge__sup--${stateType}` : ''
        ]"
      >
        <slot name="badge"></slot>
      </sup>
    </template>
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
    }
  }
};
</script>
