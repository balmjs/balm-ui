<template>
  <!-- Container -->
  <div class="mdc-chip" role="row" @click="handleClick">
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
    <span role="gridcell">
      <span :role="role" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">
          <slot></slot>
        </span>
      </span>
    </span>
    <!-- Remove icon [optional] -->
    <slot name="after" :iconClass="UI_CHIPS.cssClasses.removeIcon">
      <span v-if="$parent.inputChips || removable" role="gridcell">
        <i
          :class="getIconClassName(UI_CHIPS.cssClasses.removeIcon)"
          tabindex="-1"
          role="button"
          @click="handleRemove"
        >
          cancel
        </i>
      </span>
    </slot>
  </div>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';
import UI_CHIPS from './constants';

export default {
  name: 'UiChip',
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
      UI_CHIPS
    };
  },
  computed: {
    thumbnailClassName() {
      return [
        UI_GLOBAL.cssClasses.icon,
        UI_CHIPS.cssClasses.icon,
        { 'mdc-chip__icon--leading-hidden': this.hidden }
      ];
    },
    role() {
      let name = null;

      if (this.$parent.choiceChips) {
        name = 'radio';
      } else if (this.$parent.filterChips) {
        name = 'checkbox';
      } else {
        name = 'button';
      }

      return name;
    }
  },
  methods: {
    handleClick(event) {
      this.$parent.choiceChipId = this.$el.id; // fix(ui): twice trigger
      this.$emit(UI_CHIPS.EVENT.CLICK, event);
    },
    handleRemove(event) {
      this.$emit(UI_CHIPS.EVENT.REMOVE, event);
    }
  }
};
</script>
