<template>
  <!-- Container -->
  <div class="mdc-chip" @click="handleClick">
    <div class="mdc-chip__ripple"></div>
    <!-- Thumbnail (optional) -->
    <slot name="before" :iconClass="UI_CHIPS.cssClasses.icon">
      <i v-if="materialIcon" :class="thumbnailClassName">{{ materialIcon }}</i>
    </slot>
    <span v-if="$parent.filterChips" class="mdc-chip__checkmark">
      <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path
          class="mdc-chip__checkmark-path"
          fill="none"
          stroke="black"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </span>
    <!-- Text -->
    <div class="mdc-chip__text">
      <slot></slot>
    </div>
    <!-- Remove icon [optional] -->
    <slot name="after" :iconClass="UI_CHIPS.cssClasses.removeIcon">
      <i
        v-if="$parent.inputChips || removable"
        :class="[UI_GLOBAL.mdi, UI_CHIPS.cssClasses.removeIcon]"
        tabindex="-1"
        role="button"
        @click="handleRemove"
        >cancel</i
      >
    </slot>
  </div>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';
import UI_CHIPS from './constants';

export default {
  name: 'ui-chip',
  mixins: [materialIconMixin],
  props: {
    hidden: {
      type: Boolean,
      default: false
    },
    removable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL,
      UI_CHIPS
    };
  },
  computed: {
    thumbnailClassName() {
      return [
        UI_GLOBAL.mdi,
        UI_CHIPS.cssClasses.icon,
        { 'mdc-chip__icon--leading-hidden': this.hidden }
      ];
    }
  },
  mounted() {
    const parent = this.$parent;
    parent.$nextTick(() => {
      const chipSet = parent.$chipSet;
      chipSet && chipSet.addChip(this.$el);

      // init
      const selectedValue = parent.selectedValue;
      if (parent.filterChips) {
        chipSet.chips.forEach((chip, index) => {
          if (!chip.selected && selectedValue.includes(index)) {
            chip.selected = true;
            chipSet.selectedChipIds.push(chip.id);
          }
        });
      } else if (
        parent.choiceChips &&
        selectedValue > -1 &&
        chipSet.chips[selectedValue]
      ) {
        chipSet.chips[selectedValue].selected = true;
      }
    });
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_CHIPS.EVENT.CLICK, event);
    },
    handleRemove(event) {
      this.$emit(UI_CHIPS.EVENT.REMOVE, event);
    }
  }
};
</script>
