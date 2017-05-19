<template>
  <a class="mdc-tab" role="tab" @click.prevent>
    <slot name="before"></slot>
    <template v-if="icon">
      <i class="mdc-tab__icon material-icons">{{ icon }}</i>
    </template>
    <template v-else>
      <slot name="icon"></slot>
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
// const MDC_EVENT_SELECTED = 'MDCTab:selected';

export default {
  name: 'ui-tab',
  props: {
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
