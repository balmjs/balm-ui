<template>
  <div :class="className">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot><!-- Tab components --></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabScroller } from '../../../material-components-web/tab-scroller';
import tabScrollerMixin from '../../mixins/tab-scroller';
import UI_TABS from './constants';

// Define constants
const TAB_ALIGNMENT = ['start', 'center', 'end'];

export default {
  name: 'ui-tab-scroller',
  mixins: [tabScrollerMixin],
  model: {
    prop: 'scrollX',
    event: UI_TABS.EVENT.CHANGE
  },
  props: {
    // States
    scrollX: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      $tabScroller: null,
      scrollValue: this.scrollX
    };
  },
  watch: {
    scrollX(val) {
      // console.log('watch', val);
      let newScrollValue = +val;
      this.$tabScroller.scrollTo(newScrollValue);
      this.scrollValue = newScrollValue;
    }
  },
  computed: {
    className() {
      let result = ['mdc-tab-scroller'];
      if (TAB_ALIGNMENT.includes(this.align)) {
        result.push(`mdc-tab-scroller--align-${this.align}`);
      }
      return result.join(' ');
    }
  },
  mounted() {
    this.$tabScroller = new MDCTabScroller(this.$el);
  },
  methods: {
    increment(scrollX = 0) {
      let offsetScrollX = +scrollX;
      // console.log('increment', offsetScrollX);
      this.$tabScroller.incrementScroll(offsetScrollX);
      // TODO: sync scrollX
      this.$nextTick(() => {
        this.scrollValue = this.$tabScroller.getScrollPosition();
        // console.log(this.scrollValue);
        this.$emit(UI_TABS.EVENT.CHANGE, this.scrollValue);
      });
    }
  }
};
</script>
