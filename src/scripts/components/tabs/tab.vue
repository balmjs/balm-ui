<template>
  <!-- Tab item -->
  <button :class="className" role="tab" aria-selected="false" tabindex="-1">
    <span class="mdc-tab__content">
      <template v-if="isTextWithIcon">
        <!-- Icon -->
        <slot name="icon" :iconClass="UI_TAB.cssClasses.icon">
          <i
            v-if="materialIcon"
            :class="getIconClassName(UI_TAB.cssClasses.icon)"
            aria-hidden="true"
            v-text="materialIcon"
          ></i>
        </slot>
        <!-- Text label -->
        <span class="mdc-tab__text-label">
          <slot>{{ text }}</slot>
        </span>
      </template>
      <template v-else-if="isIconOnly">
        <slot name="icon" :iconClass="UI_TAB.cssClasses.icon">
          <i
            v-if="materialIcon"
            :class="getIconClassName(UI_TAB.cssClasses.icon)"
            aria-hidden="true"
            v-text="materialIcon"
          ></i>
        </slot>
      </template>
      <span v-else class="mdc-tab__text-label">
        <slot>{{ text }}</slot>
      </span>

      <!-- Active tab indicator - content inner -->
      <template v-if="contentIndicator">
        <slot name="indicator">
          <ui-tab-indicator></ui-tab-indicator>
        </slot>
      </template>
    </span>

    <!-- Active tab indicator - content outer -->
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
import materialIconMixin from '../../mixins/material-icon';
import { UI_TAB } from './constants';

export default {
  name: 'UiTab',
  components: {
    UiTabIndicator
  },
  mixins: [tabMixin, materialIconMixin],
  props: {
    // UI attributes
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      UI_TAB,
      $tab: null
    };
  },
  computed: {
    className() {
      const isActive =
        this.$el && this.$el.classList.contains(UI_TAB.cssClasses.active);

      return {
        'mdc-tab': true,
        'mdc-tab--stacked': this.isStacked,
        'mdc-tab--min-width': this.minWidth,
        'mdc-tab--active': isActive
      };
    }
  }
};
</script>
