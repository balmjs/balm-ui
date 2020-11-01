<template>
  <div :class="className" :role="role">
    <button class="mdc-segmented-button__segment" aria-pressed="false">
      <i class="material-icons mdc-segmented-button__icon">favorite</i>
    </button>
    <button class="mdc-segmented-button__segment" aria-pressed="false">
      <div class="mdc-segmented-button__label">Sample Text</div>
    </button>
    <button class="mdc-segmented-button__segment" aria-pressed="false">
      <i class="material-icons mdc-segmented-button__icon">favorite</i>
      <div class="mdc-segmented-button__label">Sample Text</div>
    </button>
  </div>
</template>

<script>
import { MDCSegmentedButton } from '../../../material-components-web/segmented-button';
import { events } from '../../../material-components-web/segmented-button/segmented-button/constants';

export default {
  name: 'UiSegmentedButton',
  model: {
    prop: 'model',
    event: UI_ICON_BUTTON.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: [String, Number, Array],
      default: ''
    },
    // UI attributes
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $segmentedButton: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-segmented-button': true,
        'mdc-segmented-button--single-select': this.single
      };
    },
    role() {
      return this.single ? 'radiogroup' : 'group';
    }
  },
  mounted() {
    this.$segmentedButton = new MDCSegmentedButton(this.$el);

    this.$segmentedButton.listen(
      `MDCSegmentedButton:${events.CHANGE}`,
      ({ detail }) => {
        console.log('change', detail);
      }
    );

    this.$segmentedButton.listen(
      `MDCSegmentedButtonSegment:${events.SELECTED}`,
      ({ detail }) => {
        console.log('selected', detail);
      }
    );
  }
};
</script>
