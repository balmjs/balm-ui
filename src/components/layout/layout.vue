<template>
  <div :class="className.outer">
    <header :class="className.header">
      <div v-if="!noDrawerButton" class="mdl-layout-icon"></div>
      <div class="mdl-layout__header-row">
        <!-- title -->
        <div class="mdl-layout__title">
          <slot name="header-title">{{ headerTitle }}</slot>
        </div>
        <!-- header left -->
        <slot name="header-left" :className="navClassName">
          <ui-navigation :links="headerLeft"></ui-navigation>
        </slot>
        <!-- header center -->
        <div class="mdl-layout-spacer">
          <slot name="header-center"></slot>
        </div>
        <!-- header right -->
        <slot name="header-right" :className="navClassName">
          <ui-navigation :links="headerRight"></ui-navigation>
        </slot>
      </div>
      <!-- header bottom -->
      <slot name="header-bottom" :className="headerClassName"></slot>
      <!-- header tabs -->
      <div v-if="tabs" class="mdl-layout__tab-bar mdl-js-ripple-effect" ref="tabs">
        <a v-for="(tab, index) in tabs"
          :key="index"
          :href="`#${tabName}-${index+1}`"
          :class="['mdl-layout__tab', {'is-active': !index}]">{{ tab }}</a>
      </div>
    </header>
    <div v-if="!noDrawerButton" class="mdl-layout__drawer">
      <!-- drawer title -->
      <div class="mdl-layout__title">
        <slot name="drawer-title">{{ drawerTitle }}</slot>
      </div>
      <!-- drawer top -->
      <slot name="drawer-top" :className="navClassName">
        <ui-navigation :links="drawerLink"></ui-navigation>
      </slot>
      <div class="mdl-layout-spacer"></div>
      <!-- drawer bottom -->
      <slot name="drawer-bottom"></slot>
    </div>
    <div class="mdl-layout__content">
      <!-- main content -->
      <slot></slot>
      <!-- tabs content -->
      <section v-if="tabs"
        v-for="n in tabs.length"
        :key="n"
        :class="['mdl-layout__tab-panel', {'is-active': n === 1}]"
        :id="`${tabName}-${n}`">
        <code v-text="getPanelTemplate(n)"></code>
      </section>
      <slot name="footer-inner"></slot>
    </div>
    <slot name="footer-outer"></slot>
  </div>
</template>

<script>
import '../../material-design-lite/layout/layout';
import '../../material-design-lite/ripple/ripple';
import UiNavigation from './navigation';

const CLASSNAME_HEADER = 'mdl-layout__header-row';
const CLASSNAME_NAV = 'mdl-navigation';
const CLASSNAME_LINK = 'mdl-navigation__link';

export default {
  name: 'ui-layout',
  components: {
    UiNavigation
  },
  props: {
    headerTitle: String,
    headerLeft: Array,
    headerRight: Array,
    drawerTitle: String,
    drawerLink: Array,
    tabName: {
      type: String,
      default: 'layout-tab'
    },
    tabs: {
      type: [Array, Boolean],
      default: false
    },
    // Makes the header scroll with the content
    scroll: {
      type: Boolean,
      default: false
    },
    // Makes the drawer always visible and open in larger screens
    fixedDrawer: {
      type: Boolean,
      default: false
    },
    // Makes the header always visible, even in small screens
    fixedHeader: {
      type: Boolean,
      default: false
    },
    // Does not display a drawer button
    noDrawerButton: {
      type: Boolean,
      default: false
    },
    // Does not display a drawer button in desktop mode
    noDesktopDrawerButton: {
      type: Boolean,
      default: false
    },
    // Allows a "waterfall" effect with multiple header lines
    waterfall: {
      type: Boolean,
      default: false
    },
    // Hides the top rather than the bottom rows on a waterfall header
    waterfallHideTop: {
      type: Boolean,
      default: false
    },
    // Makes header transparent (draws on top of layout background)
    transparent: {
      type: Boolean,
      default: false
    },
    // Uses a header without a shadow
    seamed: {
      type: Boolean,
      default: false
    },
    // Uses fixed tabs instead of the default scrollable tabs
    fixedTabs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      headerClassName: CLASSNAME_HEADER,
      navClassName: {
        parent: CLASSNAME_NAV,
        child: CLASSNAME_LINK
      }
    }
  },
  computed: {
    className() {
      return {
        outer: {
          'mdl-layout': true,
          'mdl-js-layout': true,
          'mdl-layout--fixed-drawer': this.fixedDrawer,
          'mdl-layout--fixed-header': this.fixedHeader,
          'mdl-layout--no-drawer-button': this.noDrawerButton,
          'mdl-layout--no-desktop-drawer-button': this.noDesktopDrawerButton,
          'mdl-layout--fixed-tabs': this.fixedTabs
        },
        header: {
          'mdl-layout__header': true,
          'mdl-layout__header--scroll': this.scroll,
          'mdl-layout__header--waterfall': this.waterfall,
          'mdl-layout__header--waterfall-hide-top': this.waterfall && this.waterfallHideTop,
          'mdl-layout__header--transparent': this.transparent,
          'mdl-layout__header--seamed': this.seamed
        }
      };
    }
  },
  methods: {
    getPanelTemplate(index) {
      return `<template slot="panel${index}"></template>`;
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialLayout');
    if (this.tabs) {
      this.$ui.upgradeElement(this.$refs.tabs, 'MaterialRipple');
    }
  }
};
</script>
