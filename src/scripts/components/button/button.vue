<template>
  <button :type="type" :class="className">
    <ui-icon v-if="icon"
      :class="'mdc-button__icon'"
      :size="iconSize"
      :dark="iconDark"
      :light="iconLight"
      :inactive="iconInactive">{{ icon }}</ui-icon>
    <slot></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';

export default {
  name: 'ui-button',
  mixins: [buttonMixin],
  props: {
    // Element attributes
    type: {
      type: String,
      default: 'button'
    }
  }
};
</script>
