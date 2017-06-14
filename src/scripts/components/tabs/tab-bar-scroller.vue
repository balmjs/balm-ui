<template>
  <div class="mdc-tab-bar-scroller">
    <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
      <a class="mdc-tab-bar-scroller__indicator__inner material-icons"
         href="javascript:void(0)"
         aria-label="scroll back button"
         @click.prevent>
        <slot name="prev">navigate_before</slot>
      </a>
    </div>
    <div class="mdc-tab-bar-scroller__scroll-frame">
      <nav class="mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs">
        <slot name="before"></slot>
        <slot></slot>
        <span class="mdc-tab-bar__indicator"></span>
        <slot name="after"></slot>
      </nav>
    </div>
    <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
      <a class="mdc-tab-bar-scroller__indicator__inner material-icons"
         href="javascript:void(0)"
         aria-label="scroll forward button"
         @click.prevent>
        <slot name="next">navigate_next</slot>
      </a>
    </div>
  </div>
</template>

<script>
import {MDCTabBarScroller} from '../../material-components-web/tabs';

export default {
  name: 'ui-tab-bar-scroller',
  data() {
    return {
      $tabBarScroller: null
    };
  },
  mounted() {
    if (!this.$tabBarScroller) {
      this.$tabBarScroller = new MDCTabBarScroller(this.$el);
    }
  }
};
</script>
