<template>
  <!-- Container -->
  <div class="mdc-chip" @click="$parent.handleClick">
    <!-- Thumbnail (optional) -->
    <slot name="thumbnail" :className="thumbnailClass">
      <i :class="thumbnailClass">{{ thumbnail }}</i>
    </slot>
    <!-- Text -->
    <div class="mdc-chip__text">
      <slot></slot>
    </div>
    <!-- Remove icon [optional] -->
    <slot name="remove-icon" :className="removeIconClass">
      <i :class="removeIconClass"
        tabindex="0"
        role="button"
        @click="handleClick">
        {{ removeIcon }}
      </i>
    </slot>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_CHIP = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'ui-chip',
  props: {
    thumbnail: String,
    removeIcon: {
      type: String,
      default: 'cancel'
    }
  },
  data() {
    return {
      UI_GLOBAL
    };
  },
  computed: {
    thumbnailClassName() {
      return [
        UI_GLOBAL.mdi,
        'mdc-chip__icon mdc-chip__icon--leading',
        { 'mdc-chip__icon--leading-hidden': this.hidden }
      ];
    },
    removeIconClass() {
      return [UI_GLOBAL.mdi, 'mdc-chip__icon mdc-chip__icon--trailing'];
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_CHIP.EVENT.CLICK, event);
    }
  }
};
</script>
