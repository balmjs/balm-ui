<template>
  <a :href="url" :class="className">
    <ui-icon v-if="icon"
      :class="'mdc-button__icon'"
      :size="iconSize"
      :dark="iconDark"
      :light="iconLight"
      :inactive="iconInactive">{{ icon }}</ui-icon>
    <slot></slot>
  </a>
</template>

<script>
import buttonMixin from '../../mixins/button';

export default {
  name: 'ui-link',
  mixins: [buttonMixin],
  props: {
    // element attributes
    url: {
      type: String,
      default: 'javascript:void(0)'
    }
  }
};
</script>
