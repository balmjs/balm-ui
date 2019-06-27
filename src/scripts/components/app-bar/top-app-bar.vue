<template>
  <!-- Container -->
  <header :class="className">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <!-- Navigation icon (optional) / Close button (instead of a navigation icon) -->
        <button
          :class="[UI_TOP_APP_BAR.SLOT_CLASS.icon, 'mdc-top-app-bar__navigation-icon', 'mdc-icon-button']"
          :id="navIcon === UI_TOP_APP_BAR.EVENT.CLOSE ? null : navId"
          @click="handleClick"
        >
          <slot name="nav-icon">{{ navIcon }}</slot>
        </button>
        <!-- Title (optional) / Contextual title -->
        <span class="mdc-top-app-bar__title">
          <slot>{{ title }}</slot>
        </span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <!-- Action items (optional) / Contextual actions -->
        <!-- Overflow menu (optional, or "short" mode only) -->
        <slot
          name="toolbar"
          :iconClass="UI_TOP_APP_BAR.SLOT_CLASS.icon"
          :itemClass="UI_TOP_APP_BAR.SLOT_CLASS.item"
        ></slot>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '../../../material-components-web/top-app-bar';
import UI_GLOBAL from '../../config/constants';

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
    NAV: 'nav',
    CLOSE: 'close'
  },
  SLOT_CLASS: {
    icon: UI_GLOBAL.mdi,
    item: 'mdc-top-app-bar__action-item mdc-icon-button'
  }
};

export default {
  name: 'ui-top-app-bar',
  props: {
    // UI attributes
    contentSelector: {
      type: String,
      required: true
    },
    navId: String,
    navIcon: {
      type: String,
      default: 'menu'
    },
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
    }
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
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.createFixedAdjustElement();
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
            this.contentElement.classList.add(
              UI_TOP_APP_BAR.ADJUST.DENSE_PROMINENT
            );
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
    },
    handleClick() {
      this.$emit(
        this.navIcon === UI_TOP_APP_BAR.EVENT.CLOSE
          ? UI_TOP_APP_BAR.EVENT.CLOSE
          : UI_TOP_APP_BAR.EVENT.NAV
      );
    }
  }
};
</script>
