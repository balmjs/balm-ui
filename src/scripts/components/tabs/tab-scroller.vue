<template>
  <div :class="className">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot>
          <!-- Tab components -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabScroller } from '../../../material-components-web/tab-scroller';
import tabScrollerMixin from '../../mixins/tab-scroller';
import { UI_TAB_SCROLLER } from './constants';

export default {
  name: 'UiTabScroller',
  mixins: [tabScrollerMixin],
  model: {
    prop: 'scrollX',
    event: UI_TAB_SCROLLER.EVENT.CHANGE
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
  computed: {
    className() {
      let result = ['mdc-tab-scroller'];

      if (UI_TAB_SCROLLER.ALIGN.includes(this.align)) {
        result.push(`mdc-tab-scroller--align-${this.align}`);
      }

      return result.join(' ');
    }
  },
  watch: {
    scrollX(val) {
      let newScrollValue = +val;
      this.$tabScroller.scrollTo(newScrollValue);

      this.scrollValue = newScrollValue;
    }
  },
  mounted() {
    this.$tabScroller = new MDCTabScroller(this.$el);
  },
  methods: {
    increment(scrollX = 0) {
      let offsetScrollX = +scrollX;
      this.$tabScroller.incrementScroll(offsetScrollX);

      this.scrollValue += offsetScrollX;
      if (this.scrollValue < 0) {
        this.scrollValue = 0;
      }

      this.$emit(UI_TAB_SCROLLER.EVENT.CHANGE, this.scrollValue);
    }
  }
};
</script>
