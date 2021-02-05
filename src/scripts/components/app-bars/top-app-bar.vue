<template>
  <!-- Container -->
  <header :class="className">
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <!-- Navigation icon (optional) / Close button (instead of a navigation icon) -->
        <span class="mdc-top-app-bar__brand">
          <slot
            name="nav-icon"
            :navIconClass="UI_TOP_APP_BAR.cssClasses.navIcon"
          >
            <mdc-icon-button
              v-if="defaultNavIcon"
              :id="navId"
              :class="UI_TOP_APP_BAR.cssClasses.navIcon"
              v-text="defaultNavIcon"
            ></mdc-icon-button>
          </slot>
        </span>
        <!-- Title (optional) / Contextual title -->
        <span class="mdc-top-app-bar__title">
          <slot>{{ title }}</slot>
        </span>
      </section>
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
      >
        <!-- Regular: Action items (optional) & Overflow menu (optional) -->
        <!-- Contextual action bar: Contextual actions & Overflow menu (optional) -->
        <slot
          name="toolbar"
          :toolbarItemClass="UI_TOP_APP_BAR.cssClasses.actionItem"
        ></slot>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from '../../../material-components-web/top-app-bar';
import MdcIconButton from '../buttons/mdc-icon-button';
import typeMixin from '../../mixins/type';

// Define top app bar constants
const UI_TOP_APP_BAR = {
  TYPES: {
    nonRegular: -1, // Contextual action bar
    standard: 0,
    fixed: 1,
    dense: 2,
    prominent: 3,
    prominentDense: 4,
    short: 5,
    shortCollapsed: 6
  },
  cssClasses: {
    navIcon: 'mdc-top-app-bar__navigation-icon',
    actionItem: 'mdc-top-app-bar__action-item'
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
  }
};

export default {
  name: 'UiTopAppBar',
  components: {
    MdcIconButton
  },
  mixins: [typeMixin],
  props: {
    contentSelector: {
      type: String,
      required: true
    },
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    fixed: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    prominentDense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    shortCollapsed: {
      type: Boolean,
      default: false
    },
    // UI attributes
    title: {
      type: String,
      default: ''
    },
    navIcon: {
      type: [String, Boolean],
      default: 'menu'
    },
    navId: {
      type: [String, null],
      default: null
    }
  },
  data() {
    return {
      UI_TOP_APP_BAR,
      $topAppBar: null
    };
  },
  computed: {
    isNonRegular() {
      return this.checkType(UI_TOP_APP_BAR.TYPES, 'nonRegular');
    },
    isFixed() {
      return this.checkType(UI_TOP_APP_BAR.TYPES, 'fixed');
    },
    isDense() {
      return this.checkType(UI_TOP_APP_BAR.TYPES, 'dense');
    },
    isProminent() {
      return this.checkType(UI_TOP_APP_BAR.TYPES, 'prominent');
    },
    isProminentDense() {
      return (
        (this.dense && this.prominent) ||
        this.checkType(UI_TOP_APP_BAR.TYPES, 'prominentDense')
      );
    },
    isShort() {
      return this.checkType(UI_TOP_APP_BAR.TYPES, 'short');
    },
    isShortCollapsed() {
      return this.checkType(UI_TOP_APP_BAR.TYPES, 'shortCollapsed');
    },
    className() {
      return {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--fixed': this.isFixed,
        'mdc-top-app-bar--dense': this.isDense || this.isProminentDense,
        'mdc-top-app-bar--prominent': this.isProminent || this.isProminentDense,
        'mdc-top-app-bar--short': this.isShort || this.isShortCollapsed,
        'mdc-top-app-bar--short-collapsed': this.isShortCollapsed
      };
    },
    defaultNavIcon() {
      return this.isNonRegular ? UI_TOP_APP_BAR.EVENT.CLOSE : this.navIcon;
    }
  },
  watch: {
    type() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    getFixedAdjustElement(contentEl) {
      let el;

      const newDiv = document.createElement('div');
      const firstElInContent = contentEl.children[0];

      if (firstElInContent) {
        if (firstElInContent.classList.contains('mdc-drawer')) {
          el = contentEl;
        } else {
          let existingFixedAdjust = /^mdc-top-app-bar--([a-z]+-)*fixed-adjust$/.test(
            firstElInContent.className
          );

          if (existingFixedAdjust) {
            el = firstElInContent;
          } else {
            el = newDiv;
            contentEl.insertBefore(newDiv, contentEl.firstChild);
          }
        }
      } else {
        el = newDiv;
        contentEl.insertBefore(newDiv, contentEl.firstChild);
      }

      return el;
    },
    createFixedAdjustElement() {
      if (this.contentSelector) {
        const contentEl = document.querySelector(this.contentSelector);
        const fixedAdjustEl = this.getFixedAdjustElement(contentEl);

        if (fixedAdjustEl) {
          fixedAdjustEl.classList.remove(
            ...Object.values(UI_TOP_APP_BAR.FIXED_ADJUST)
          );

          if (this.isDense) {
            fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.DENSE);
          } else if (this.isProminent) {
            fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.PROMINENT);
          } else if (this.isProminentDense) {
            fixedAdjustEl.classList.add(
              UI_TOP_APP_BAR.FIXED_ADJUST.DENSE_PROMINENT
            );
          } else if (this.isShort || this.isShortCollapsed) {
            fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.SHORT);
          } else {
            fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.STANDARD);
          }
        }
      } else {
        console.warn('`contentSelector` is required');
      }
    },
    init() {
      if (this.$topAppBar) {
        this.$topAppBar.destroy();
      }

      this.$nextTick(() => {
        this.createFixedAdjustElement();
        this.$topAppBar = new MDCTopAppBar(this.$el);

        this.$topAppBar.listen(
          `MDCTopAppBar:${UI_TOP_APP_BAR.EVENT.NAV}`,
          () => {
            this.$emit(
              this.isNonRegular
                ? UI_TOP_APP_BAR.EVENT.CLOSE
                : UI_TOP_APP_BAR.EVENT.NAV
            );
          }
        );
      });
    }
  }
};
</script>
