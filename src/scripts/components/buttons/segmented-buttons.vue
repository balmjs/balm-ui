<template>
  <div :class="className" :role="role">
    <slot>
      <ui-segmented-button
        v-for="(buttonItem, buttonIndex) in items"
        :key="buttonIndex"
        :text="buttonItem.text || null"
        :icon="buttonItem.icon || null"
        :selected="singleSelect ? buttonIndex === selectedValue : false"
        @click="handleClick($event, buttonIndex)"
      ></ui-segmented-button>
    </slot>
  </div>
</template>

<script>
import { MDCSegmentedButton } from '../../../material-components-web/segmented-button';
import { events } from '../../../material-components-web/segmented-button/segmented-button/constants';
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
      type: [Array, Number],
      default() {
        return [];
      }
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
      $segmentedButton: null,
      selectedValue: this.model
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
    try {
      this.init();
    } catch (e) {
      // No segment selected in singleSelect mdc-segmented-button
    }
  },
  methods: {
    init() {
      this.$segmentedButton = new MDCSegmentedButton(this.$el);

      this.$segmentedButton.listen(events.CHANGE, ({ detail }) => {
        const currentIndex = detail.index;

        if (this.singleSelect) {
          this.selectedValue = currentIndex;
        } else {
          if (detail.selected) {
            this.selectedValue.push(currentIndex);
            this.selectedValue = [...new Set(this.selectedValue)];
          } else {
            this.selectedValue = this.selectedValue.filter(
              (value) => value != currentIndex
            );
          }
          this.selectedValue.sort((a, b) => a - b);
        }

        this.$emit(UI_SEGMENTED_BUTTON.EVENT.CHANGE, this.selectedValue);
        this.$emit(UI_SEGMENTED_BUTTON.EVENT.SELECTED, currentIndex);
      });

      const selectedSegments = this.$segmentedButton.segments.filter(
        (segment, index) => this.selectedValue.includes(index)
      );
      if (selectedSegments.length) {
        selectedSegments.forEach((segment) => segment.setSelected());
      }
    },
    handleClick(event, index) {
      if (this.singleSelect) {
        this.selectedValue = index;

        this.$emit(UI_SEGMENTED_BUTTON.EVENT.CHANGE, this.selectedValue);
        this.$emit(UI_SEGMENTED_BUTTON.EVENT.SELECTED, index);
      }
    }
  }
};
</script>
