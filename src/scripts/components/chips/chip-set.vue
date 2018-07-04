<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import { MDCChipSet } from '../../../material-components-web/chips';

const UI_CHIPSET = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-chip-set',
  model: {
    prop: 'selectedIndex',
    event: UI_CHIPSET.EVENT.CHANGE
  },
  props: {
    // States
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    // UI attributes
    input: {
      type: Boolean,
      default: false
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
      chipsCount: this.items.length
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
    items(val) {
      if (val.length > this.chipsCount) {
        this.addChip(val.length);
      } else if (val.length < this.chipsCount) {
        this.chipsCount--;
      }
    },
    selectedIndex(val) {
      this.$emit(UI_CHIPSET.EVENT.CHANGE, val);
    }
  },
  mounted() {
    if (!this.$chipSet) {
      this.$chipSet = new MDCChipSet(this.$el);

      if (this.choice && this.selectedIndex > -1) {
        this.$chipSet.chips[this.selectedIndex].foundation_.setSelected(true);
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
      if (this.choice) {
        this.$nextTick(() => {
          let hasMultipleChoice =
            this.$chipSet.chips.filter(chip => chip.isSelected()).length > 1;
          if (hasMultipleChoice) {
            this.$chipSet.chips[this.selectedIndex].foundation_.setSelected(
              false
            );
          }

          let index = this.$chipSet.chips.findIndex(chip => chip.isSelected());
          this.$emit(UI_CHIPSET.EVENT.CHANGE, index);
        });
      }
    }
  }
};
</script>
