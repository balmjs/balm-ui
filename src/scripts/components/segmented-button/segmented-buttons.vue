<template>
  <div ref="segmentedButtons" :class="className" :role="role">
    <slot>
      <ui-segmented-button
        v-for="(buttonItem, buttonIndex) in items"
        :key="buttonIndex"
        :text="buttonItem.text || null"
        :icon="buttonItem.icon || null"
        :selected="singleSelect ? buttonIndex === selected.value : false"
        @click="handleClick($event, buttonIndex)"
      ></ui-segmented-button>
    </slot>
  </div>
</template>

<script>
// Define segmented buttons constants
const UI_SEGMENTED_BUTTONS = {
  EVENTS: {
    CHANGE: 'update:modelValue',
    SELECTED: 'selected'
  }
};

export default {
  name: 'UiSegmentedButtons',
  customOptions: {
    UI_SEGMENTED_BUTTONS
  }
};
</script>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { MDCSegmentedButton } from '../../../material-components-web/segmented-button';
import { events } from '../../../material-components-web/segmented-button/segmented-button/constants';
import UiSegmentedButton from './segmented-button.vue';

const props = defineProps({
  // States
  modelValue: {
    type: [Array, Number],
    default: () => []
  },
  items: {
    type: Array,
    default: () => [] // Data: { text: string, icon: string }
  },
  // UI attributes
  singleSelect: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  UI_SEGMENTED_BUTTONS.EVENTS.CHANGE,
  UI_SEGMENTED_BUTTONS.EVENTS.SELECTED
]);

const segmentedButtons = ref(null);
let selected = ref(props.modelValue);

const className = computed(() => ({
  'mdc-segmented-button': true,
  'mdc-segmented-button--single-select': props.singleSelect
}));
const role = computed(() => (props.singleSelect ? 'radiogroup' : 'group'));

function init(el) {
  const $segmentedButton = new MDCSegmentedButton(el);

  $segmentedButton.listen(events.CHANGE, ({ detail }) => {
    const currentIndex = detail.index;

    let selectedValue = selected.value;
    if (props.singleSelect) {
      selectedValue = currentIndex;
    } else {
      if (detail.selected) {
        selectedValue.push(currentIndex);
        selectedValue = [...new Set(selectedValue)];
      } else {
        selectedValue = selectedValue.filter((value) => value != currentIndex);
      }
      selectedValue.sort((a, b) => a - b);
    }

    emit(UI_SEGMENTED_BUTTONS.EVENTS.CHANGE, selectedValue);
    emit(UI_SEGMENTED_BUTTONS.EVENTS.SELECTED, currentIndex);
  });

  const selectedSegments = $segmentedButton.segments.filter((segment, index) =>
    selectedValue.includes(index)
  );
  if (selectedSegments.length) {
    selectedSegments.forEach((segment) => segment.setSelected());
  }
}

onMounted(() => {
  try {
    init(segmentedButtons.value);
  } catch (e) {
    // No segment selected in singleSelect mdc-segmented-button
  }
});

function handleClick(event, index) {
  if (props.singleSelect) {
    selected.value = index;

    emit(UI_SEGMENTED_BUTTONS.EVENTS.CHANGE, selected.value);
    emit(UI_SEGMENTED_BUTTONS.EVENTS.SELECTED, index);
  }
}
</script>
