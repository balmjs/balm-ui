<template>
  <button :type="type" :class="className" @click="handleClick">
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

const UI_EVENT_CLICK = 'click';

export default {
  name: 'ui-button',
  mixins: [buttonMixin],
  props: {
    // Element attributes
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_EVENT_CLICK, event);
    }
  }
};
</script>
