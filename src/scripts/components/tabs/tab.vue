<template>
  <button :class="className" role="tab" aria-selected="false" tabindex="-1">
    <span class="mdc-tab__content">
      <template v-if="textWithIcon">
        <slot name="icon" :iconClass="UI_TAB.SLOT_CLASS.icon">
          <i :class="[UI_GLOBAL.mdi, UI_TAB.SLOT_CLASS.icon]">{{ icon }}</i>
        </slot>
        <span class="mdc-tab__text-label">
          <slot>{{ text }}</slot>
        </span>
      </template>
      <template v-else-if="iconOnly">
        <slot name="icon" :iconClass="UI_TAB.SLOT_CLASS.icon">
          <i :class="[UI_GLOBAL.mdi, UI_TAB.SLOT_CLASS.icon]">{{ icon }}</i>
        </slot>
      </template>
      <span v-else class="mdc-tab__text-label">
        <slot>{{ text }}</slot>
      </span>

      <template v-if="contentIndicator">
        <slot name="indicator">
          <ui-tab-indicator></ui-tab-indicator>
        </slot>
      </template>
    </span>

    <template v-if="!contentIndicator">
      <slot name="indicator">
        <ui-tab-indicator></ui-tab-indicator>
      </slot>
    </template>

    <span class="mdc-tab__ripple"></span>
  </button>
</template>

<script>
import UiTabIndicator from './tab-indicator';
import tabMixin from '../../mixins/tab';
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_TAB = {
  SLOT_CLASS: {
    icon: 'mdc-tab__icon'
  }
};

export default {
  name: 'ui-tab',
  components: {
    UiTabIndicator
  },
  mixins: [tabMixin],
  props: {
    // UI attributes
    text: String,
    icon: String
  },
  data() {
    return {
      UI_GLOBAL,
      UI_TAB
    };
  },
  computed: {
    className() {
      return {
        'mdc-tab': true,
        'mdc-tab--stacked': this.stacked,
        'mdc-tab--min-width': this.minWidth
      };
    }
  }
};
</script>
