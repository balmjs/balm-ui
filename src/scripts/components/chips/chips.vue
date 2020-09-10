<template>
  <div :class="className" role="grid">
    <slot>
      <template v-for="(option, index) in currentOptions">
        <ui-chip :key="index">{{ option[optionLabel] }}</ui-chip>
      </template>
    </slot>
  </div>
</template>

<script>
import { MDCChipSet } from '../../../material-components-web/chips';
import UiChip from './chip';
import typeMixin from '../../mixins/type';
import UI_CHIPS from './constants';

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
    optionLabel: {
      type: String,
      default: 'label'
    },
    optionValue: {
      type: String,
      default: 'value'
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
    model(val) {
      this.selectedValue = val;
    },
    options(val) {
      if (this.choiceChips || this.filterChips) {
        this.currentOptions = val;
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

      const chips = this.$chipSet.chips;
      if (chips.length) {
        if (this.filterChips) {
          let selectedIndexes = [];

          if (this.currentOptions.length) {
            this.currentOptions.forEach((option, index) => {
              if (this.selectedValue.includes(option[this.optionValue])) {
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
              (option) => option[this.optionValue] === this.selectedValue
            );
          } else {
            selectedIndex = this.selectedValue;
          }

          if (selectedIndex > -1 && chips[selectedIndex]) {
            chips[selectedIndex].selected = true;
          }
        }

        const adapter = this.$chipSet.foundation.adapter;
        this.$chipSet.listen('MDCChip:selection', ({ detail }) => {
          if (this.choiceChips) {
            if (detail.chipId === this.choiceChipId) {
              const selectedIndex = detail.selected
                ? adapter.getIndexOfChipById(detail.chipId)
                : -1;

              if (this.currentOptions.length) {
                let selectedValue =
                  selectedIndex > -1
                    ? this.currentOptions[selectedIndex][this.optionValue]
                    : '';

                this.$emit(UI_CHIPS.EVENT.CHANGE, selectedValue);
              } else {
                this.$emit(UI_CHIPS.EVENT.CHANGE, selectedIndex);
              }
            }
          } else if (this.filterChips) {
            let selectedIndexes = [];
            chips.forEach((chip, index) => {
              if (chip.selected) {
                selectedIndexes.push(index);
              }
            });

            if (this.currentOptions.length) {
              let selectedValue = this.currentOptions
                .filter((option, index) => selectedIndexes.includes(index))
                .map((option) => option[this.optionValue]);

              this.$emit(UI_CHIPS.EVENT.CHANGE, selectedValue);
            } else {
              this.$emit(UI_CHIPS.EVENT.CHANGE, selectedIndexes);
            }
          }
        });
      } else {
        this.$chipSet = null;
      }
    },
    addChip(length) {
      this.$nextTick(() => {
        let newChipIndex = length - 1;
        let newChipEl = this.$el.querySelectorAll('.mdc-chip')[newChipIndex];
        this.$chipSet.addChip(newChipEl);
        this.chipsCount++;
      });
    }
  }
};
</script>
