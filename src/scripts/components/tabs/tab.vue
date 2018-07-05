<template>
  <a class="mdc-tab" role="tab" @click.prevent>
    <slot name="before"></slot>
    <template v-if="materialIcon">
      <ui-icon
        :class="'mdc-tab__icon'"
        :size="iconSize"
        :dark="iconDark"
        :light="iconLight"
        :inactive="iconInactive">{{ materialIcon }}</ui-icon>
    </template>
    <template v-else>
      <slot name="icon"><!-- Custom Icon --></slot>
    </template>
    <template v-if="text">
      <span class="mdc-tab__icon-text">{{ text }}</span>
    </template>
    <template v-else>
      <slot><!-- Text Label --></slot>
    </template>
    <slot name="after"></slot>
  </a>
</template>

<script>
import iconMixin from '../../mixins/icon';
import getType from '../../helpers/typeof';

export default {
  name: 'ui-tab',
  mixins: [iconMixin],
  props: {
    // UI attributes
    icon: String,
    text: String
  },
  computed: {
    materialIcon() {
      return getType(this.icon) === 'string' ? this.icon : false;
    }
  }
};
</script>
