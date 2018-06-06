<template>
  <a :href="url" :class="className">
    <ui-icon v-if="materialIcon"
      :class="UI_LINK.CLASSNAME.ICON"
      :size="iconSize"
      :dark="iconDark"
      :light="iconLight"
      :inactive="iconInactive">{{ materialIcon }}</ui-icon>
    <slot :className="slotClass"></slot>
  </a>
</template>

<script>
import buttonMixin from '../../mixins/button';

// Define constants
const UI_LINK = {
  CLASSNAME: {
    ICON: 'mdc-button__icon'
  }
};

export default {
  name: 'ui-link',
  mixins: [buttonMixin],
  props: {
    // Element attributes
    url: {
      type: String,
      default: 'javascript:void(0)'
    }
  },
  data() {
    return {
      UI_LINK,
      slotClass: {
        icon: UI_LINK.CLASSNAME.ICON
      }
    };
  }
};
</script>
