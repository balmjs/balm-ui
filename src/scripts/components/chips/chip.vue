<template>
  <!-- Container -->
  <div ref="chip" class="mdc-chip" role="row" @click="handleClick">
    <div class="mdc-chip__ripple"></div>
    <!-- Thumbnail (optional) -->
    <slot name="before" :iconClass="UI_CHIP.cssClasses.icon">
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
    <slot name="after" :iconClass="UI_CHIP.cssClasses.removeIcon">
      <span v-if="$parent.inputChips || removable" role="gridcell">
        <i
          :class="UI_GLOBAL.getMaterialIconClass(UI_CHIP.cssClasses.removeIcon)"
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
import UI_GLOBAL from '../../config/constants';

// Define chip constants
const UI_CHIP = {
  cssClasses: {
    icon: 'mdc-chip__icon mdc-chip__icon--leading',
    removeIcon: 'mdc-chip__icon mdc-chip__icon--trailing'
  },
  EVENTS: {
    REMOVE: 'remove'
  }
};

export default {
  name: 'UiChip',
  customOptions: {
    UI_GLOBAL,
    UI_CHIP
  }
};
</script>

<script setup>
import { ref, computed, getCurrentInstance, nextTick } from 'vue';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';

const props = defineProps({
  // UI attributes
  ...iconProps,
  selected: {
    type: Boolean,
    default: false
  },
  removable: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK, UI_CHIP.EVENTS.REMOVE]);

const instance = getCurrentInstance();
const parent = instance.parent;
const chip = ref(null);

const { materialIcon } = useMaterialIcon(props);

const thumbnailClassName = computed(() => [
  UI_GLOBAL.cssClasses.icon,
  UI_CHIP.cssClasses.icon,
  {
    'mdc-chip__icon--leading-hidden': props.selected
  }
]);
const role = computed(() => {
  let name = null;

  if (parent?.exposed?.choiceChips.value) {
    name = 'radio';
  } else if (parent?.exposed?.filterChips.value) {
    name = 'checkbox';
  } else {
    name = 'button';
  }

  return name;
});

function handleClick(event) {
  nextTick(() => {
    // fix(ui): twice trigger
    const choiceChips = parent?.exposed?.choiceChips.value;
    if (choiceChips) {
      parent.exposed.choiceChipId.value = chip.value.id;
    }

    emit(UI_GLOBAL.EVENTS.CLICK, event);
  });
}

function handleRemove(event) {
  emit(UI_CHIP.EVENTS.REMOVE, event);
}
</script>
