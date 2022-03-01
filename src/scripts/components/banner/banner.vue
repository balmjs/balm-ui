<template>
  <!-- Container -->
  <div ref="banner" :class="className" role="banner">
    <div v-if="fixed" class="mdc-banner__fixed">
      <mdc-banner-content
        :primary-button-text="primaryButtonText"
        :secondary-button-text="secondaryButtonText"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-banner-content>
    </div>
    <mdc-banner-content
      v-else
      :primary-button-text="primaryButtonText"
      :secondary-button-text="secondaryButtonText"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData"></slot>
      </template>
    </mdc-banner-content>
  </div>
</template>

<script>
// Define banner constants
const UI_BANNER = {
  EVENTS: {
    CHANGE: 'update:modelValue',
    CLOSED: 'closed'
  }
};

export default {
  name: 'UiBanner',
  customOptions: {
    UI_BANNER
  }
};
</script>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { MDCBanner } from '../../../material-components-web/banner';
import { events } from '../../../material-components-web/banner/constants';
import MdcBannerContent from './mdc-banner-content.vue';

const props = defineProps({
  // States
  modelValue: {
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
});

const emit = defineEmits([UI_BANNER.EVENTS.CHANGE, UI_BANNER.EVENTS.CLOSED]);

const banner = ref(null);
const state = reactive({
  $banner: null
});

const className = computed(() => ({
  'mdc-banner': true,
  'mdc-banner--centered': props.centered,
  'mdc-banner--mobile-stacked': props.mobileStacked
}));

onMounted(() => {
  state.$banner = new MDCBanner(banner.value);

  state.$banner.listen(events.CLOSED, ({ detail }) => {
    emit(UI_BANNER.EVENTS.CHANGE, false);
    emit(UI_BANNER.EVENTS.CLOSED, detail.reason);
  });

  watch(
    () => props.modelValue,
    (val) => (val ? state.$banner.open() : state.$banner.close())
  );
});
</script>
