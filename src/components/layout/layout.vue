<template>
  <div :class="className.outer">
    <header :class="className.header">
      <div class="mdl-layout-icon"></div>
      <div class="mdl-layout__header-row">
        <div class="mdl-layout__title">
          <slot name="header-title">{{ header.title }}</slot>
        </div>
        <slot name="header-left" :className="navigationClassName">
          <ui-navigation :links="header.left"></ui-navigation>
        </slot>
        <div class="mdl-layout-spacer">
          <slot name="header-center"></slot>
        </div>
        <slot name="header-right" :className="navigationClassName">
          <ui-navigation :links="header.right"></ui-navigation>
        </slot>
      </div>
      <slot name="header-bottom" :className="headerClassName"></slot>
    </header>
    <div class="mdl-layout__drawer">
      <div class="mdl-layout__title">
        <slot name="drawer-title">{{ drawer.title }}</slot>
      </div>
      <slot name="drawer-top" :className="navigationClassName">
        <ui-navigation :links="drawer.links"></ui-navigation>
      </slot>
      <div class="mdl-layout-spacer"></div>
      <slot name="drawer-bottom"></slot>
    </div>
    <main class="mdl-layout__content">
      <slot name="content">
        <code v-text="getContentTemplate()"></code>
      </slot>
    </main>
  </div>
</template>

<script>
import mdlLayout from '../../styles/layout/layout';
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
    header: {
      type: Object,
      default: function() {
        return {
          title: '',
          left: [],
          right: []
        }
      }
    },
    drawer: {
      type: Object,
      default: function() {
        return {
          title: '',
          links: []
        };
      }
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
    }
  },
  data() {
    return {
      headerClassName: CLASSNAME_HEADER,
      navigationClassName: {
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
          'mdl-layout--no-desktop-drawer-button': this.noDesktopDrawerButton
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
    getContentTemplate(links) {
      return '<template slot="content"></template>';
    }
  }
};
</script>
