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
  props: {
    // States
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
      $chipSet: null
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
  mounted() {
    if (!this.$chipSet) {
      this.$chipSet = new MDCChipSet(this.$el);
    }
  },
  methods: {
    // noop() {},
    handleClick() {
      let index = this.$chipSet.chips.findIndex(chip => chip.isSelected());
      console.log(index);
      this.$emit(UI_CHIPSET.EVENT.CHANGE, index);
    }
  }
};
</script>
