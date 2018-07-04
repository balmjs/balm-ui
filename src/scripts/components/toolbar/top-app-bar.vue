<template>
  <header :class="className">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a class="material-icons mdc-top-app-bar__navigation-icon"
          :id="menuId"
          @click="$emit(UI_TOP_APP_BAR.EVENT.NAV)">
          <slot name="logo">menu</slot>
        </a>
        <span class="mdc-top-app-bar__title">
          <slot>{{ title }}</slot>
        </span>
      </section>
      <section v-if="actionItems" class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <slot name="toolbar" :className="UI_TOP_APP_BAR.SLOT_CLASS">
          <a v-for="(item, index) in actionItems"
            :key="index"
            :href="item.url"
            :class="[UI_TOP_APP_BAR.SLOT_CLASS.icon, UI_TOP_APP_BAR.SLOT_CLASS.item]"
            :aria-label="item.label"
            :alt="item.label">
            {{ item.icon }}
          </a>
        </slot>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '../../../material-components-web/top-app-bar';

// Define constants
const UI_TOP_APP_BAR = {
  ADJUST: {
    DEFAULT: 'mdc-top-app-bar--fixed-adjust',
    PROMINENT: 'mdc-top-app-bar--prominent-fixed-adjust',
    DENSE: 'mdc-top-app-bar--dense-fixed-adjust',
    DENSE_PROMINENT: 'mdc-top-app-bar--dense-prominent-fixed-adjust',
    SHORT: 'mdc-top-app-bar--short-fixed-adjust'
  },
  EVENT: {
    NAV: 'nav'
  },
  SLOT_CLASS: {
    icon: 'material-icons',
    item: 'mdc-top-app-bar__action-item'
  }
};

export default {
  name: 'ui-top-app-bar',
  props: {
    // States
    actionItems: {
      type: Array,
      default() {
        return [];
      }
    },
    // UI attributes
    title: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    alwaysClosed: {
      type: Boolean,
      default: false
    },
    contentSelector: {
      type: String,
      required: true
    },
    menuId: String
  },
  data() {
    return {
      UI_TOP_APP_BAR,
      $topAppBar: null,
      contentElement: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--fixed': this.fixed,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.alwaysClosed
      };
    }
  },
  watch: {
    fixed() {
      this.reset();
    },
    prominent(val) {
      this.reset();
      this.contentElement.classList.toggle(UI_TOP_APP_BAR.ADJUST.PROMINENT);
      this.updateDenseProminentFixedAdjust();
    },
    dense(val) {
      this.reset();
      this.contentElement.classList.toggle(UI_TOP_APP_BAR.ADJUST.DENSE);
      this.updateDenseProminentFixedAdjust();
    },
    short(val) {
      this.reset();
      this.contentElement.classList.toggle(UI_TOP_APP_BAR.ADJUST.SHORT);
    },
    alwaysClosed() {
      this.reset();
    }
  },
  mounted() {
    if (!this.$topAppBar) {
      this.init();

      this.createFixedAdjustElement();
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.$topAppBar = new MDCTopAppBar(this.$el);
      });
    },
    reset() {
      this.$topAppBar.destroy();
      this.init();
    },
    createFixedAdjustElement() {
      if (this.contentSelector) {
        this.contentElement = document.querySelector(this.contentSelector);

        if (
          !this.contentElement.classList.contains(UI_TOP_APP_BAR.ADJUST.DEFAULT)
        ) {
          this.contentElement.classList.add(UI_TOP_APP_BAR.ADJUST.DEFAULT);
        }

        if (this.short) {
          this.contentElement.classList.add(UI_TOP_APP_BAR.ADJUST.SHORT);
        } else {
          if (this.prominent) {
            this.contentElement.classList.add(UI_TOP_APP_BAR.ADJUST.PROMINENT);
          }

          if (this.dense) {
            this.contentElement.classList.add(UI_TOP_APP_BAR.ADJUST.DENSE);
          }

          if (this.dense && this.prominent) {
            this.contentElement.classList.add(UI_TOP_APP_BAR.ADJUST.DENSE_PROMINENT);
          }
        }
      }
    },
    updateDenseProminentFixedAdjust() {
      if (this.dense && this.prominent) {
        this.contentElement.classList.add(
          UI_TOP_APP_BAR.ADJUST.DENSE_PROMINENT
        );
      } else {
        this.contentElement.classList.remove(
          UI_TOP_APP_BAR.ADJUST.DENSE_PROMINENT
        );
      }
    }
  }
};
</script>
