<template>
  <a class="mdc-tab" role="tab" @click.prevent>
    <slot name="before"></slot>
    <i v-if="icon" class="material-icons mdc-tab__icon">{{ icon }}</i>
    <template v-else>
      <slot name="icon"><!-- Custom Icon --></slot>
    </template>
    <span v-if="text" class="mdc-tab__icon-text">{{ text }}</span>
    <template v-else>
      <slot><!-- Text Label --></slot>
    </template>
    <slot name="after"></slot>
  </a>
</template>

<script>
import getType from '../../utils/typeof';

export default {
  name: 'ui-tab',
  props: {
    // UI attributes
    icon: String,
    text: String
  }
};
</script>
