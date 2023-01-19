<template>
  <!-- Container -->
  <div :class="className" role="banner">
    <div v-if="fixed" class="mdc-banner__fixed">
      <mdc-banner-content
        :primary-button-text="primaryButtonText"
        :secondary-button-text="secondaryButtonText"
      >
        <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
        <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-banner-content>
    </div>
    <mdc-banner-content
      v-else
      :primary-button-text="primaryButtonText"
      :secondary-button-text="secondaryButtonText"
    >
      <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
      <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData"></slot>
      </template>
    </mdc-banner-content>
  </div>
</template>

<script>
import { MDCBanner } from '../../../material-components-web/banner';
import { events } from '../../../material-components-web/banner/constants';
import MdcBannerContent from './mdc-banner-content.vue';

// Define banner constants
const UI_BANNER = {
  EVENT: {
    CHANGE: 'change',
    CLOSED: 'closed'
  }
};

export default {
  name: 'UiBanner',
  components: {
    MdcBannerContent
  },
  model: {
    prop: 'open',
    event: UI_BANNER.EVENT.CHANGE
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    centered: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    withImage: {
      type: Boolean,
      default: false
    },
    mobileStacked: {
      type: Boolean,
      default: false
    },
    primaryButtonText: {
      type: String,
      default: 'OK'
    },
    secondaryButtonText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      $banner: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-banner': true,
        'mdc-banner--centered': this.centered,
        'mdc-banner--mobile-stacked': this.mobileStacked
      };
    }
  },
  watch: {
    open(val) {
      if (this.$banner) {
        val ? this.$banner.open() : this.$banner.close();
      }
    }
  },
  mounted() {
    this.$banner = new MDCBanner(this.$el);

    this.$banner.listen(events.CLOSED, ({ detail }) => {
      this.$emit(UI_BANNER.EVENT.CHANGE, false);
      this.$emit(UI_BANNER.EVENT.CLOSED, detail.reason);
    });
  }
};
</script>
