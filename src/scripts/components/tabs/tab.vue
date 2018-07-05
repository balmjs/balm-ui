<template>
  <a class="mdc-tab" role="tab" @click.prevent>
    <slot name="before"></slot>
    <i v-if="materialIcon" class="material-icons mdc-tab__icon">{{ materialIcon }}</i>
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
import getType from '../../helpers/typeof';

export default {
  name: 'ui-tab',
  props: {
    // UI attributes
    icon: {
      type: [String, Boolean],
      default: false
    },
    text: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    materialIcon() {
      return getType(this.icon) === 'string' ? this.icon : false;
    }
  }
};
</script>
