<template>
  <a class="mdc-tab" role="tab" @click.prevent>
    <slot name="before"></slot>
    <template v-if="icon">
      <slot name="icon" :className="UI_TAB.SLOT_CLASS">
        <i :class="['material-icons', UI_TAB.SLOT_CLASS.icon]">{{ icon }}</i>
      </slot>
      <span v-if="text" class="mdc-tab__icon-text">{{ text }}</span>
    </template>
    <template v-else>
      <slot>{{ text }}</slot>
    </template>
    <slot name="after"></slot>
  </a>
</template>

<script>
import getType from '../../utils/typeof';

// Define constants
const UI_TAB = {
  SLOT_CLASS: {
    icon: 'mdc-tab__icon'
  }
};

export default {
  name: 'ui-tab',
  props: {
    // UI attributes
    text: String,
    icon: String
  },
  data() {
    return {
      UI_TAB
    };
  }
};
</script>
