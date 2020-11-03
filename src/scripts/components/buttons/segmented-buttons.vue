<template>
  <div :class="className" :role="role">
    <slot>
      <ui-segmented-button
        v-for="(buttonItem, buttonIndex) in items"
        :key="buttonIndex"
        :text="buttonItem.text || null"
        :icon="buttonItem.icon || null"
        :role="singleSelect ? 'radio' : null"
      ></ui-segmented-button>
    </slot>
  </div>
</template>

<script>
import { MDCSegmentedButton } from '../../../material-components-web/segmented-button';
import UiSegmentedButton from './segmented-button';

// Define segmented button constants
const UI_SEGMENTED_BUTTON = {
  EVENT: {
    CHANGE: 'change',
    SELECTED: 'selected'
  }
};

export default {
  name: 'UiSegmentedButtons',
  components: {
    UiSegmentedButton
  },
  model: {
    prop: 'model',
    event: UI_SEGMENTED_BUTTON.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: [String, Number, Array],
      default: ''
    },
    items: {
      type: Array,
      default() {
        return []; // Data: { text: string, icon: string }
      }
    },
    // UI attributes
    singleSelect: {
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
        'mdc-segmented-button--single-select': this.singleSelect
      };
    },
    role() {
      return this.singleSelect ? 'radiogroup' : 'group';
    }
  },
  mounted() {
    this.$segmentedButton = new MDCSegmentedButton(this.$el);

    // this.$segmentedButton.listen(
    //   `MDCSegmentedButton:${UI_SEGMENTED_BUTTON.EVENT.CHANGE}`,
    //   ({ detail }) => {
    //     console.log('change', e);
    //   }
    // );
    // this.$segmentedButton.listen(
    //   `MDCSegmentedButtonSegment:${UI_SEGMENTED_BUTTON.EVENT.SELECTED}`,
    //   ({ detail }) => {
    //     console.log('selected', e);
    //   }
    // );
  },
  methods: {
    isChecked({ selected }) {
      return this.singleSelect ? selected || false : null;
    }
  }
};
</script>
