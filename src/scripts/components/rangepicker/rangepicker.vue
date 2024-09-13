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
  },
  disableRangePlugin: {
    type: Boolean,
    default: false
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
  const startInput = startDatepicker.value;
  const startInputEl = startInput.textfield.querySelector('input');
  const endInputEl = endDatepicker.value.textfield.querySelector('input');

  if (!state.picker) {
    const config = setPickerConfig(startInput, startInputEl, endInputEl);

    state.picker = props.disableRangePlugin
      ? [flatpickr(startInputEl, config), flatpickr(endInputEl, config)]
      : flatpickr(startInputEl, config);
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

onBeforeUnmount(destroyPicker);

function setPickerConfig(startInput, startInputEl, endInputEl) {
  let config = Object.assign({}, props.config, {
    altInput: false,
    disableMobile: true, // Mobile Support
    plugins: props.disableRangePlugin
      ? []
      : [
          new rangePlugin({
            input: endInputEl
          })
        ]
  });

  // custom event
  config.onChange = (selectedDates, dateStr, instance) => {
    const canEmit = updateInputs([startInputEl.value, endInputEl.value]);
    canEmit &&
      emit(UI_RANGEPICKER.EVENTS.CHANGE, [
        state.startInputValue,
        state.endInputValue
      ]);
  };
  config.onClose = () => {
    setTimeout(() => {
      startInput.$textField.foundation.deactivateFocus();
      startInputEl.blur();
    }, 1);
  };
  // set default value
  config.onReady = (selectedDates, dateStr, instance) => {
    const canEmit = updateInputs(props.modelValue);
    if (canEmit) {
      updateInitialValue(instance);
      emit(UI_RANGEPICKER.EVENTS.CHANGE, [
        state.startInputValue,
        state.endInputValue
      ]);
    }
  };
  if (!props.disableRangePlugin) {
    // fix(@flatpickr): second input onChange bug for rangePlugin (temporary solution)
    config.onValueUpdate = () => {
      onEndInputChange();
    };
  }

  return config;
}

function destroyPicker() {
  if (state.picker) {
    if (props.disableRangePlugin) {
      state.picker.forEach((item) => item.destroy());
    } else {
      state.picker.destroy();
    }
    state.picker = null;
  }
}

function updateInputs(dates) {
  let canEmit = false;

  if (dates.length === 2) {
    const selectedDates = dates.map((value) =>
      value
        ? flatpickr.formatDate(
            new Date(value),
            props.config.dateFormat || 'Y-m-d'
          )
        : ''
    );

    const startDate = selectedDates[0];
    const endDate = selectedDates[1];
    const noUpdates =
      state.startInputValue === startDate && state.endInputValue === endDate;

    if (!noUpdates) {
      state.startInputValue = startDate;
      state.endInputValue = endDate;

      canEmit = startDate && endDate;
    }
  }

  return canEmit;
}

function updateInitialValue(instance = state.picker) {
  const dateValue =
    state.startInputValue && state.endInputValue
      ? [state.startInputValue, state.endInputValue]
      : [];

  if (props.disableRangePlugin) {
    if (state.picker && state.picker.length === 2) {
      state.picker.forEach((item, index) =>
        item.setDate(props.modelValue[index])
      );
    }
  } else {
    instance.setDate(dateValue, true); // Redrawing

    // fix(ui): focus bug for init (temporary solution)
    const startInput = startDatepicker.value;
    startInput.$textField.foundation.deactivateFocus();
  }
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
      const canEmit = updateInputs([
        state.startInputValue,
        currentEndInputValue
      ]);
      canEmit &&
        emit(UI_RANGEPICKER.EVENTS.CHANGE, [
          state.startInputValue,
          state.endInputValue
        ]);
    }
  }
}
</script>
