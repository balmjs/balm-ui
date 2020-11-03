<template>
  <button type="button" :class="className" @click="$emit('click', $event)">
    <div class="mdc-button__ripple"></div>
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="getIconClassName('mdc-button__icon')"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <template v-if="noLabel">
      <slot></slot>
    </template>
    <span v-else class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';

export default {
  name: 'MdcButton',
  mixins: [materialIconMixin],
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    noLabel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-button': true,
        'mdc-button--outlined': this.outlined,
        'mdc-button--unelevated': this.unelevated
      };
    }
  }
};
</script>
