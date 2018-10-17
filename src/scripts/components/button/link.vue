<template>
  <a :class="[className, actionClassName]" :href="url">
    <!-- Icon (optional) -->
    <i v-if="materialIcon" :class="[UI_BUTTON.SLOT_CLASS.icon, 'material-icons']">
      {{ materialIcon }}
    </i>
    <slot :iconClass="UI_BUTTON.SLOT_CLASS.icon"><!-- Text label --></slot>
  </a>
</template>

<script>
import buttonMixin from '../../mixins/button';
import linkMixin from '../../mixins/link';
import UI_BUTTON from './constants';

export default {
  name: 'ui-link',
  mixins: [buttonMixin, linkMixin],
  data() {
    return {
      UI_BUTTON
    };
  }
};
</script>
