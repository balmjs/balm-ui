<template>
  <ui-textfield
    ref="datepicker"
    :model-value="inputValue"
    class="mdc-datepicker"
    :input-id="inputId"
    :outlined="outlined"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :fullwidth="fullwidth"
    :end-aligned="endAligned"
    :with-leading-icon="hasLeadingIcon"
    :with-trailing-icon="hasTrailingIcon"
    @change="handleChange"
  >
    <!-- Leading icon (optional) -->
    <template #before="{ iconClass }">
      <i
        v-if="materialIcon"
        :class="UI_GLOBAL.getMaterialIconClass(iconClass)"
        v-text="materialIcon"
      ></i>
      <template v-else>
        <slot name="before" :iconClass="iconClass"></slot>
      </template>
    </template>

    <!-- Label text -->
    <template #default>
      <slot></slot>
    </template>

    <!-- Trailing icon (optional) -->
    <template #after="{ iconClass }">
      <span v-if="toggle || clear" :class="[iconClass, 'mdc-datepicker__icon']">
        <span v-if="toggle" class="mdc-datepicker__toggle" data-toggle>
          <slot name="toggle">
            <svg viewBox="0 0 18 18">
              <path
                d="M14 2v-1h-3v1h-5v-1h-3v1h-3v15h17v-15h-3zM12 2h1v2h-1v-2zM4 2h1v2h-1v-2zM16 16h-15v-8.921h15v8.921zM1 6.079v-3.079h2v2h3v-2h5v2h3v-2h2v3.079h-15z"
                fill="#000000"
              />
            </svg>
          </slot>
        </span>
        <span
          v-if="clear"
          class="mdc-datepicker__clear"
          data-clear
          @click.capture="handleClear"
        >
          <slot name="clear">
            <svg viewBox="0 0 18 18">
              <path
                d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"
                fill="#000000"
              />
            </svg>
          </slot>
        </span>
      </span>
      <template v-else>
        <slot name="after" :iconClass="iconClass"></slot>
      </template>
    </template>
  </ui-textfield>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define datepicker constants
const UI_DATEPICKER = {
  MODE: {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
    RANGE: 'range',
    MONTH: 'month', // Custom
    TIME: 'time' // Custom
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiDatepicker',
  customOptions: {
    UI_GLOBAL,
    UI_DATEPICKER
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
  onBeforeUnmount,
  useSlots
} from 'vue';
import flatpickr from 'flatpickr';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import UiTextfield from '../textfield/textfield.vue';
import { textfieldProps } from '../../mixins/textfield';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';

const props = defineProps({
  ...textfieldProps,
  ...iconProps,
  // <ui-textfield> variants
  outlined: {
    type: Boolean,
    default: false
  },
  // States
  modelValue: {
    type: [String, Number, Array],
    default: ''
  },
  // <ui-textfield> attributes
  inputId: {
    type: [String, null],
    default: null
  },
  // For flatpickr
  config: {
    type: Object,
    default: () => ({})
  },
  toggle: {
    type: Boolean,
    default: false
  },
  clear: {
    type: Boolean,
    default: false
  },
  monthOptions: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits([UI_DATEPICKER.EVENTS.CHANGE]);
const slots = useSlots();

const datepicker = ref(null);
const state = reactive({
  picker: null,
  inputValue: props.modelValue,
  mode: props.config.mode || UI_DATEPICKER.MODE.SINGLE,
  rangeSeparator: ''
});
const { inputValue } = toRefs(state);

const { materialIcon } = useMaterialIcon(props);

const hasLeadingIcon = computed(
  () => !!(props.withLeadingIcon || slots.before)
);
const hasTrailingIcon = computed(
  () => !!(props.withTrailingIcon || slots.after || props.toggle || props.clear)
);

onMounted(() => {
  const el = datepicker.value.textfield;
  const inputEl = el.querySelector('input');
  inputEl.dataset.input = '';

  if (!state.picker) {
    let config = Object.assign({}, props.config);
    switch (config.mode) {
      case UI_DATEPICKER.MODE.MONTH:
        config = Object.assign(config, {
          mode: UI_DATEPICKER.MODE.SINGLE,
          plugins: [new monthSelectPlugin(props.monthOptions)]
        });
        break;
      case UI_DATEPICKER.MODE.TIME:
        config = Object.assign(config, {
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i'
        });
        break;
      default:
    }
    // Default config for ui
    config.disableMobile = true; // mobile support required
    config.wrap = true; // For toggle & clear icons
    // Custom event
    config.onOpen = () => {
      // fix(ui): `altInput` bug
      if (config.altInput) {
        datepicker.value.$textField.foundation.activateFocus();
      }
    };
    config.onClose = () => {
      if (config.altInput) {
        datepicker.value.$textField.foundation.deactivateFocus();
      }

      // fix(ui): time mode bug when the initial value is empty
      if (config.mode === UI_DATEPICKER.MODE.TIME && !state.inputValue) {
        inputEl.value = '';
      }

      inputEl.blur();
    };
    // Set default value
    if (state.mode === UI_DATEPICKER.MODE.RANGE) {
      state.rangeSeparator = config.locale
        ? config.locale.rangeSeparator
        : ' to ';
      setRangeDate(props.modelValue);
    } else {
      config.onReady = (selectedDates, dateStr, instance) => {
        // defaultDate: 'today'
        if (dateStr) {
          state.inputValue = dateStr;
          emit(UI_DATEPICKER.EVENTS.CHANGE, dateStr);
        }
      };
      // fix(ui): `clear` event
      config.onChange = (selectedDates, dateStr, instance) => {
        if (!dateStr) {
          emit(UI_DATEPICKER.EVENTS.CHANGE, '');
        }
      };
    }
    // Init
    config.defaultDate = state.inputValue;
    state.picker = flatpickr(el, config);
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (state.mode === UI_DATEPICKER.MODE.RANGE) {
        setRangeDate(val);
      } else {
        state.inputValue = val;
      }
      syncSelectedDates(state.inputValue);
    }
  );
});

onBeforeUnmount(() => {
  if (state.picker) {
    state.picker.destroy();
    state.picker = null;
  }
});

function syncSelectedDates(value) {
  if (state.picker) {
    state.picker.setDate(value);
  }
}

function handleChange(event) {
  state.inputValue = event.target.value;

  let result;
  switch (state.mode) {
    case UI_DATEPICKER.MODE.MULTIPLE:
      let multipleValue = state.inputValue.replace(/\s,\s/, ',').split(',');
      result =
        multipleValue.length === 1
          ? multipleValue[0] // string
          : multipleValue; // array
      break;
    case UI_DATEPICKER.MODE.RANGE:
      let rangeValue = state.inputValue.split(state.rangeSeparator);
      let startDate = rangeValue[0];
      let endDate = rangeValue[1];
      if (startDate && endDate) {
        result =
          startDate === endDate
            ? startDate // string
            : [startDate, endDate]; // array

        syncSelectedDates(result);
      }
      break;
    default:
      result = state.inputValue; // string
      break;
  }

  if (result) {
    emit(UI_DATEPICKER.EVENTS.CHANGE, result);
  }
}

function handleClear(event) {
  // fix(ui): trigger `<ui-textfield>` focused when clicking the clear button
  if (!state.inputValue) {
    event.stopPropagation();
  }
}

function setRangeDate(selectedDates) {
  if (Array.isArray(selectedDates) && selectedDates.length === 2) {
    let startDate = selectedDates[0];
    let endDate = selectedDates[1];
    state.inputValue =
      startDate === endDate
        ? startDate
        : `${startDate}${state.rangeSeparator}${endDate}`;
  }
}

defineExpose({
  hasLeadingIcon,
  hasTrailingIcon
});
</script>
