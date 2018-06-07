<template>
  <a :class="[className, actionClassName]" :href="url">
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
import linkMixin from '../../mixins/link';

// Define constants
const UI_LINK = {
  CLASSNAME: {
    ICON: 'mdc-button__icon'
  }
};

export default {
  name: 'ui-link',
  mixins: [buttonMixin, linkMixin],
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
