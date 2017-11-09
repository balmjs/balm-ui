<template>
  <a class="mdc-tab" role="tab" @click.prevent>
    <slot name="before"></slot>
    <template v-if="icon">
      <ui-icon
        :class="'mdc-tab__icon'"
        :size="iconSize"
        :dark="iconDark"
        :light="iconLight"
        :inactive="iconInactive">{{ icon }}</ui-icon>
    </template>
    <template v-else>
      <slot name="icon"><!-- Custom Icon --></slot>
    </template>
    <template v-if="text">
      <span class="mdc-tab__icon-text">{{ text }}</span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <slot name="after"></slot>
  </a>
</template>

<script>
import iconMixin from '../../mixins/icon';

export default {
  name: 'ui-tab',
  mixins: [iconMixin],
  props: {
    // ui attributes
    icon: {
      type: [String, Boolean],
      default: false
    },
    text: {
      type: [String, Boolean],
      default: false
    }
  }
};
</script>
