<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import { MDCChipSet } from '../../../material-components-web/chips';

// Define constants
const UI_CHIPSET = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-chip-set',
  model: {
    prop: 'model',
    event: UI_CHIPSET.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: [Number, Array],
      default: -1
    },
    // UI attributes
    input: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    choice: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $chipSet: null,
      selectedValue: this.model,
      chipsCount: this.options.length
    };
  },
  computed: {
    className() {
      return {
        'mdc-chip-set': true,
        'mdc-chip-set--input': this.input,
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter
      };
    }
  },
  watch: {
    options(val) {
      if (val.length > this.chipsCount) {
        this.addChip(val.length);
      } else if (val.length < this.chipsCount) {
        this.chipsCount--;
      }
    },
    model(val) {
      this.selectedValue = val;
    }
  },
  mounted() {
    if (!this.$chipSet) {
      this.$chipSet = new MDCChipSet(this.$el);

      if (this.choice && this.selectedValue > -1) {
        this.$chipSet.chips[this.selectedValue].foundation_.setSelected(true);
      }

      if (this.filter) {
        this.$chipSet.chips.forEach((chip, index) => {
          if (this.selectedValue.includes(index)) {
            chip.foundation_.setSelected(true);
          }
        });
      }
    }
  },
  methods: {
    addChip(length) {
      this.$nextTick(() => {
        let newChipIndex = length - 1;
        let newChip = this.$el.querySelectorAll('.mdc-chip')[newChipIndex];
        this.$chipSet.addChip(newChip);
        this.chipsCount++;
      });
    },
    handleClick() {
      this.$nextTick(() => {
        if (this.choice) {
          let hasMultipleChoice =
            this.$chipSet.chips.filter(chip => chip.isSelected()).length > 1;
          if (hasMultipleChoice) {
            this.$chipSet.chips[this.selectedValue].foundation_.setSelected(
              false
            );
          }

          let selectedIndex = this.$chipSet.chips.findIndex(chip =>
            chip.isSelected()
          );
          this.$emit(UI_CHIPSET.EVENT.CHANGE, selectedIndex);
        } else if (this.filter) {
          let selectedIndexes = [];
          this.$chipSet.chips.forEach((chip, index) => {
            if (chip.isSelected()) {
              selectedIndexes.push(index);
            }
          });

          this.$emit(UI_CHIPSET.EVENT.CHANGE, selectedIndexes);
        }
      });
    }
  }
};
</script>
