<template>
  <!-- Container -->
  <header :class="className">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <!-- Navigation icon (optional) / Close button (instead of a navigation icon) -->
        <button
          :class="[UI_TOP_APP_BAR.SLOT_CLASS.icon, 'mdc-top-app-bar__navigation-icon', 'mdc-icon-button']"
          :id="navIcon === UI_TOP_APP_BAR.TYPES[1] ? null : navId"
          @click="handleClick"
        >
          <slot name="nav-icon">{{ navIcon || defaultNavIcon }}</slot>
        </button>
        <!-- Title (optional) / Contextual title -->
        <span class="mdc-top-app-bar__title">
          <slot>{{ title }}</slot>
        </span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <!-- Action items (optional) / Contextual actions -->
        <!-- Overflow menu (optional) -->
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
  TYPES: ['menu', 'close'], // NOTE: Type - 0: Regular, 1: Contextual action bar
  VARIANTS: {
    standard: 0,
    fixed: 1,
    dense: 2,
    prominent: 3,
    prominentDense: 4,
    short: 5,
    shortCollapsed: 6
  },
  FIXED_ADJUST: {
    STANDARD: 'mdc-top-app-bar--fixed-adjust',
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
    contentSelector: {
      type: String,
      required: true
    },
    // UI attributes
    type: {
      type: [String, Number],
      default: 0
    },
    variant: {
      type: [String, Number],
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    navId: String,
    navIcon: {
      type: String,
      default: 'menu'
    }
  },
  data() {
    return {
      UI_TOP_APP_BAR,
      $topAppBar: null,
      fixed: false,
      dense: false,
      prominent: false,
      prominentDense: false,
      short: false,
      shortCollapsed: false,
      contentElement: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--fixed': this.fixed,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed
      };
    },
    defaultNavIcon() {
      let type = +this.type;

      return type >= 0 && type <= UI_TOP_APP_BAR.TYPES.length - 1
        ? UI_TOP_APP_BAR.TYPES[type]
        : UI_TOP_APP_BAR.TYPES[0];
    }
  },
  watch: {
    variant(val) {
      this.init(val);
    }
  },
  mounted() {
    this.init(this.variant);
  },
  methods: {
    createFixedAdjustElement(variant) {
      if (this.contentSelector) {
        this.contentElement = document.querySelector(this.contentSelector);

        this.contentElement.classList.remove(
          ...Object.values(UI_TOP_APP_BAR.FIXED_ADJUST)
        );

        switch (variant) {
          case 2:
          case 'dense':
            this.contentElement.classList.add(
              UI_TOP_APP_BAR.FIXED_ADJUST.DENSE
            );
            break;
          case 3:
          case 'prominent':
            this.contentElement.classList.add(
              UI_TOP_APP_BAR.FIXED_ADJUST.PROMINENT
            );
            break;
          case 4:
          case 'prominentDense':
            this.contentElement.classList.add(
              UI_TOP_APP_BAR.FIXED_ADJUST.DENSE_PROMINENT
            );
            break;
          case 5:
          case 'short':
          case 6:
          case 'shortCollapsed':
            this.contentElement.classList.add(
              UI_TOP_APP_BAR.FIXED_ADJUST.SHORT
            );
            break;
          default:
            this.contentElement.classList.add(
              UI_TOP_APP_BAR.FIXED_ADJUST.STANDARD
            );
        }
      } else {
        console.warn('`contentSelector` is required');
      }
    },
    init(variant) {
      if (this.$topAppBar) {
        this.$topAppBar.destroy();

        this.fixed = false;
        this.dense = false;
        this.prominent = false;
        this.prominentDense = false;
        this.short = false;
        this.shortCollapsed = false;
      }

      switch (variant) {
        case 1:
        case 'fixed':
          this.fixed = true;
          break;
        case 2:
        case 'dense':
          this.dense = true;
          break;
        case 3:
        case 'prominent':
          this.prominent = true;
          break;
        case 4:
        case 'prominentDense':
          this.prominentDense = true;
          break;
        case 5:
        case 'short':
          this.short = true;
          break;
        case 6:
        case 'shortCollapsed':
          this.short = true;
          this.shortCollapsed = true;
          break;
        default:
        // Standard
      }

      this.$nextTick(() => {
        this.createFixedAdjustElement(variant);
        this.$topAppBar = new MDCTopAppBar(this.$el);
      });
    },
    handleClick() {
      this.$emit(
        this.navIcon === UI_TOP_APP_BAR.TYPES[1]
          ? UI_TOP_APP_BAR.EVENT.CLOSE
          : UI_TOP_APP_BAR.EVENT.NAV
      );
    }
  }
};
</script>
