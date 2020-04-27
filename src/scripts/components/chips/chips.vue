<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import { MDCChipSet } from '../../../material-components-web/chips';
import typeMixin from '../../mixins/type';
import UI_CHIPS from './constants';

export default {
  name: 'ui-chips',
  mixins: [typeMixin],
  model: {
    prop: 'model',
    event: UI_CHIPS.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: [Number, Array],
      default: -1
    },
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    options: {
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
      chipsCount: this.options.length,
      choiceChipId: null // NOTE: for twice trigger bugfix
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
          chips.forEach((chip, index) => {
            if (!chip.selected && this.selectedValue.includes(index)) {
              chip.selected = true;
            }
          });
        } else if (
          this.choiceChips &&
          this.selectedValue > -1 &&
          chips[this.selectedValue]
        ) {
          chips[this.selectedValue].selected = true;
        }

        const adapter = this.$chipSet.foundation_.adapter_;
        this.$chipSet.listen('MDCChip:selection', ({ detail }) => {
          if (this.choiceChips) {
            if (detail.chipId === this.choiceChipId) {
              const selectedIndex = detail.selected
                ? adapter.getIndexOfChipById(detail.chipId)
                : -1;

              this.$emit(UI_CHIPS.EVENT.CHANGE, selectedIndex);
            }
          } else if (this.filterChips) {
            let selectedIndexes = [];
            chips.forEach((chip, index) => {
              if (chip.selected) {
                selectedIndexes.push(index);
              }
            });

            this.$emit(UI_CHIPS.EVENT.CHANGE, selectedIndexes);
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
