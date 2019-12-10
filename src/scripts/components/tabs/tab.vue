<template>
  <!-- Tab item -->
  <button :class="className" role="tab" aria-selected="false" tabindex="-1">
    <span class="mdc-tab__content">
      <template v-if="isTextWithIcon">
        <!-- Icon -->
        <slot name="icon" :iconClass="UI_TAB.cssClasses.icon">
          <i
            v-if="materialIcon"
            :class="[UI_GLOBAL.cssClasses.icon, UI_TAB.cssClasses.icon]"
            aria-hidden="true"
            >{{ materialIcon }}</i
          >
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
            :class="[UI_GLOBAL.cssClasses.icon, UI_TAB.cssClasses.icon]"
            aria-hidden="true"
            >{{ materialIcon }}</i
          >
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
import { MDCTab } from '../../../material-components-web/tab';
import UiTabIndicator from './tab-indicator';
import tabMixin from '../../mixins/tab';
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';
import { UI_TAB } from './constants';

export default {
  name: 'ui-tab',
  components: {
    UiTabIndicator
  },
  mixins: [tabMixin, materialIconMixin],
  props: {
    // UI attributes
    text: String
  },
  data() {
    return {
      UI_GLOBAL,
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
  },
  mounted() {
    this.$tab = new MDCTab(this.$el);

    this.addTab(); // For async tab
  },
  methods: {
    addTab() {
      const parent = this.$parent.$parent;

      if (parent.$el.classList.contains('mdc-tab-bar')) {
        parent.$nextTick(() => {
          if (
            parent.$tabBar.tabList_.length !==
            parent.$el.querySelectorAll('.mdc-tab').length
          ) {
            if (!parent.nextTabId) {
              const currentTabList = document.querySelectorAll('.mdc-tab');
              const currentLastTab = currentTabList[currentTabList.length - 1];
              parent.nextTabId = +currentLastTab.id.replace(
                UI_TAB.idPrefix,
                ''
              );
            }

            const id = `${UI_TAB.idPrefix}${++parent.nextTabId}`;
            this.$tab.id = id;
            this.$el.id = id;

            parent.$tabBar.tabList_.push(this.$tab);
            parent.initActivateTab();
          }
        });
      } else {
        console.warn('Invalid `<ui-tabs>` or `<ui-tab-bar>`.');
      }
    }
  }
};
</script>
