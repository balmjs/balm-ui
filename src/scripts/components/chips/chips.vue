<template>
  <div :class="className" role="grid">
    <slot>
      <ui-chip v-for="(option, index) in currentOptions" :key="index">{{
        option[optionFormat.label]
      }}</ui-chip>
    </slot>
  </div>
</template>

<script>
import { MDCChipSet } from '../../../material-components-web/chips/deprecated';
import { strings } from '../../../material-components-web/chips/deprecated/chip/constants';
import UiChip from './chip';
import typeMixin from '../../mixins/type';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

// Define chips constants
const UI_CHIPS = {
  TYPES: {
    action: 0,
    input: 1,
    choice: 2,
    filter: 3
  },
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiChips',
  components: {
    UiChip
  },
  mixins: [typeMixin],
  model: {
    prop: 'model',
    event: UI_CHIPS.EVENT.CHANGE
  },
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // States
    model: {
      type: [String, Number, Array],
      default: -1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    optionFormat: {
      type: Object,
      default() {
        return optionFormatDefaultValue;
      }
    },
    // UI attributes
    chips: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      $chipSet: null,
      selectedValue: this.model,
      currentOptions: this.options,
      chipsCount: this.chips.length,
      choiceChipId: null // fix(ui): twice trigger
    };
  },
  computed: {
    inputChips() {
      return this.checkType(UI_CHIPS.TYPES, 'input');
    },
    choiceChips() {
      return this.checkType(UI_CHIPS.TYPES, 'choice');
    },
    filterChips() {
      return this.checkType(UI_CHIPS.TYPES, 'filter');
    },
    className() {
      return {
        'mdc-chip-set': true,
        'mdc-chip-set--input': this.inputChips,
        'mdc-chip-set--choice': this.choiceChips,
        'mdc-chip-set--filter': this.filterChips
      };
    }
  },
  watch: {
    model(val, oldVal) {
      this.clearSelected(val, oldVal);
      this.selectedValue = val;
    },
    options(val) {
      if (this.choiceChips || this.filterChips) {
        this.currentOptions = [];

        this.$nextTick(() => {
          this.currentOptions = val;

          if (this.$chipSet) {
            this.$chipSet.destroy();
            this.$chipSet = null;
            this.init();
          }
        });
      }
    },
    chips(val) {
      if (val.length > this.chipsCount) {
        this.addChip(val.length);
      } else if (val.length < this.chipsCount) {
        this.chipsCount--;
      }
    }
  },
  beforeMount() {
    checkOptionFormat('<ui-chips>', this.optionFormat);
  },
  mounted() {
    this.init();
  },
  updated() {
    if (!this.$chipSet) {
      this.init();
    }
  },
  methods: {
    init() {
      this.$chipSet = new MDCChipSet(this.$el);

      if (this.$chipSet.chips.length) {
        this.initData();
        this.initEvent();
      } else {
        this.$chipSet = null;
      }
    },
    initData(chips = this.$chipSet.chips) {
      if (this.filterChips) {
        let selectedIndexes = [];

        if (this.currentOptions.length) {
          this.currentOptions.forEach((option, index) => {
            if (
              Array.isArray(this.selectedValue) &&
              this.selectedValue.includes(option[this.optionFormat.value])
            ) {
              selectedIndexes.push(index);
            }
          });
        } else {
          selectedIndexes = this.selectedValue;
        }

        chips.forEach((chip, index) => {
          if (!chip.selected && selectedIndexes.includes(index)) {
            chip.selected = true;
          }
        });
      } else if (this.choiceChips) {
        let selectedIndex = -1;

        if (this.currentOptions.length) {
          selectedIndex = this.currentOptions.findIndex(
            (option) => option[this.optionFormat.value] === this.selectedValue
          );
        } else {
          selectedIndex = this.selectedValue;
        }

        if (~selectedIndex && chips[selectedIndex]) {
          chips[selectedIndex].selected = true;
          this.choiceChipId = chips[selectedIndex].id;
        }
      }
    },
    setChoiceChips({ chipId, selected }) {
      if (chipId === this.choiceChipId) {
        this.choiceChipId = null;

        if (selected) {
          const adapter = this.$chipSet.foundation.adapter;
          const selectedIndex = adapter.getIndexOfChipById(chipId);
          let selectedValue = ~selectedIndex
            ? this.currentOptions[selectedIndex][this.optionFormat.value]
            : '';
          this.$emit(UI_CHIPS.EVENT.CHANGE, selectedValue);
        } else {
          this.$emit(UI_CHIPS.EVENT.CHANGE, -1);
        }
      }
    },
    setFilterChips() {
      let selectedIndexes = [];
      this.$chipSet.chips.forEach((chip, index) => {
        if (chip.selected) {
          selectedIndexes.push(index);
        }
      });

      if (this.currentOptions.length) {
        const selectedValue = this.currentOptions
          .filter((option, index) => selectedIndexes.includes(index))
          .map((option) => option[this.optionFormat.value]);

        const oldValue = this.selectedValue;
        const newValue = selectedValue;
        const canEmit = !(
          oldValue.length === newValue.length &&
          oldValue.every((a) => newValue.some((b) => a === b)) &&
          newValue.every((b) => oldValue.some((a) => b === a))
        );

        if (canEmit) {
          this.selectedValue = selectedValue;
          this.$emit(UI_CHIPS.EVENT.CHANGE, selectedValue);
        }
      } else {
        this.$emit(UI_CHIPS.EVENT.CHANGE, selectedIndexes);
      }
    },
    initEvent() {
      this.$chipSet.listen(strings.SELECTION_EVENT, ({ detail }) => {
        if (this.choiceChips) {
          this.setChoiceChips(detail);
        } else if (this.filterChips) {
          this.setFilterChips();
        }
      });
    },
    addChip(length) {
      this.$nextTick(() => {
        let newChipIndex = length - 1;
        let newChipEl = this.$el.querySelectorAll('.mdc-chip')[newChipIndex];
        this.$chipSet.addChip(newChipEl);
        this.chipsCount++;
      });
    },
    clearSelected(newSelectedValue, oldSelectedValue) {
      const canClear = !newSelectedValue.length && oldSelectedValue.length;

      if (canClear) {
        if (this.filterChips) {
          let selectedIndexes = [];

          this.currentOptions.forEach((option, index) => {
            if (oldSelectedValue.includes(option[this.optionFormat.value])) {
              selectedIndexes.push(index);
            }
          });

          this.$chipSet.chips.forEach((chip, index) => {
            if (selectedIndexes.includes(index)) {
              chip.selected = false;
            }
          });
        } else if (this.choiceChips) {
          let selectedIndex = this.currentOptions.findIndex((option) =>
            oldSelectedValue.includes(option[this.optionFormat.value])
          );

          this.$chipSet.chips[selectedIndex].selected = false;
        }
      }
    }
  }
};
</script>
