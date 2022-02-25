<template>
  <div class="mdc-rangepicker">
    <ui-textfield
      ref="startDatepicker"
      v-model="startInputValue"
      class="mdc-rangepicker__start"
      :outlined="outlined"
      :label="startLabel"
      :placeholder="startPlaceholder"
      :disabled="disabled"
    ></ui-textfield>
    <span class="mdc-rangepicker__separator">
      <slot name="separator"></slot>
    </span>
    <ui-textfield
      ref="endDatepicker"
      v-model="endInputValue"
      class="mdc-rangepicker__end"
      :outlined="outlined"
      :label="endLabel"
      :placeholder="endPlaceholder"
      :disabled="disabled"
    ></ui-textfield>
  </div>
</template>

<script>
// Define rangepicker constants
const UI_RANGEPICKER = {
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiRangepicker',
  customOptions: {
    UI_RANGEPICKER
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue';
import flatpickr from 'flatpickr';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import UiTextfield from '../textfield/textfield.vue';

const props = defineProps({
  // <ui-textfield> variants
  outlined: {
    type: Boolean,
    default: false
  },
  // States
  modelValue: {
    type: Array,
    default: () => []
  },
  // <ui-textfield> attributes
  disabled: {
    type: Boolean,
    default: false
  },
  // UI attributes
  placeholders: {
    type: Array,
    default: () => []
  },
  labels: {
    type: Array,
    default: () => []
  },
  // For flatpickr
  config: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits([UI_RANGEPICKER.EVENTS.CHANGE]);

const startLabel = computed(() => props.labels[0] || '');
const endLabel = computed(() => props.labels[1] || '');
const startPlaceholder = computed(() => props.placeholders[0] || '');
const endPlaceholder = computed(() => props.placeholders[1] || '');

const startDatepicker = ref(null);
const endDatepicker = ref(null);
const state = reactive({
  picker: null,
  startInputValue: '',
  endInputValue: ''
});
const { startInputValue, endInputValue } = toRefs(state);

onMounted(() => {
  const startInputEl = startDatepicker.value.textfield.querySelector('input');
  const endInputEl = endDatepicker.value.textfield.querySelector('input');

  if (!state.picker) {
    let config = Object.assign({}, props.config, {
      disableMobile: true, // Mobile Support
      plugins: [
        new rangePlugin({
          input: endInputEl
        })
      ]
    });
    // custom event
    config.onChange = (selectedDates, dateStr, instance) => {
      updateInputs(selectedDates);
      emit(UI_RANGEPICKER.EVENTS.CHANGE, [
        state.startInputValue,
        state.endInputValue
      ]);
    };
    config.onClose = () => {
      startInputEl.blur();
      endInputEl.blur();
    };
    // set default value
    config.onReady = (selectedDates, dateStr, instance) => {
      updateInputs(props.modelValue);
      updateInitialValue(instance);

      const dateValue = [state.startInputValue, state.endInputValue];
      emit(UI_RANGEPICKER.EVENTS.CHANGE, dateValue);
    };
    // fix(@flatpickr): second input onChange bug for rangePlugin (temporary solution)
    config.onValueUpdate = () => {
      onEndInputChange();
    };

    state.picker = flatpickr(startInputEl, config);
  }

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      const hasOneOldValue = oldVal[0] || oldVal[1];
      const hasTwoNewValue = val[0] && val[1];

      if (!hasOneOldValue && hasTwoNewValue) {
        updateInputs(val);
        updateInitialValue();
      } else if (hasOneOldValue && !hasTwoNewValue) {
        clear();
      }
    }
  );
});

onBeforeUnmount(() => {
  if (state.picker) {
    state.picker.destroy();
    state.picker = null;
  }
});

function updateInputs(dates) {
  if (dates.length === 2) {
    const selectedDates = dates.map((value) =>
      value
        ? flatpickr.formatDate(
            new Date(value),
            props.config.dateFormat || 'Y-m-d'
          )
        : ''
    );

    if (
      state.startInputValue !== selectedDates[0] ||
      state.endInputValue !== selectedDates[1]
    ) {
      state.startInputValue = selectedDates[0];
      state.endInputValue = selectedDates[1];
    }
  }
}

function updateInitialValue(instance = state.picker) {
  const dateValue =
    state.startInputValue && state.endInputValue
      ? [state.startInputValue, state.endInputValue]
      : [];
  instance.setDate(dateValue, true); // Redrawing

  // fix(ui): focus bug for init (temporary solution)
  const $textFieldInstance = startDatepicker.value.$textField;
  $textFieldInstance.foundation.deactivateFocus();
}

function clear() {
  state.startInputValue = '';
  state.endInputValue = '';
  updateInitialValue();
}

function onEndInputChange() {
  if (props.config.enableTime) {
    const currentEndInputValue = endDatepicker.value.$textField.value;
    if (currentEndInputValue !== state.endInputValue) {
      updateInputs([state.startInputValue, currentEndInputValue]);
      emit(UI_RANGEPICKER.EVENTS.CHANGE, [
        state.startInputValue,
        state.endInputValue
      ]);
    }
  }
}
</script>
