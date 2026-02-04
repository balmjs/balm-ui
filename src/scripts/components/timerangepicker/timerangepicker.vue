<template>
  <div class="mdc-timerangepicker">
    <ui-textfield
      ref="startInput"
      v-model="startInputValue"
      class="mdc-timerangepicker__start"
      :outlined="outlined"
      :label="startLabel"
      :placeholder="startPlaceholder"
      :disabled="disabled"
    ></ui-textfield>
    <span class="mdc-timerangepicker__separator">
      <slot name="separator"></slot>
    </span>
    <ui-textfield
      ref="endInput"
      v-model="endInputValue"
      class="mdc-timerangepicker__end"
      :outlined="outlined"
      :label="endLabel"
      :placeholder="endPlaceholder"
      :disabled="disabled"
    ></ui-textfield>
  </div>
</template>

<script>
import flatpickr from 'flatpickr';
import UiTextfield from '../textfield/textfield.vue';

// Define timerangepicker constants
const UI_TIMERANGEPICKER = {
  EVENT: {
    CHANGE: 'change'
  },
  DEFAULT_CONFIG: {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true
  }
};

export default {
  name: 'UiTimerangepicker',
  components: {
    UiTextfield
  },
  model: {
    prop: 'model',
    event: UI_TIMERANGEPICKER.EVENT.CHANGE
  },
  props: {
    // <ui-textfield> variants
    outlined: {
      type: Boolean,
      default: false
    },
    // States
    model: {
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
  },
  data() {
    return {
      flatpickr: null,
      startInputValue: '',
      endInputValue: ''
    };
  },
  computed: {
    startLabel() {
      return this.labels[0] || '';
    },
    endLabel() {
      return this.labels[1] || '';
    },
    startPlaceholder() {
      return this.placeholders[0] || '';
    },
    endPlaceholder() {
      return this.placeholders[1] || '';
    }
  },
  watch: {
    model(val, oldVal) {
      let hasOneOldValue = oldVal[0] || oldVal[1];
      let hasTwoNewValue = val[0] && val[1];

      if (!hasOneOldValue && hasTwoNewValue) {
        this.updateInputs(val);
        this.updateInitialValue();
      } else if (hasOneOldValue && !hasTwoNewValue) {
        this.clear();
      } else {
        if (val[0] !== oldVal[0] || val[1] !== oldVal[1]) {
          this.updateInputs(val);
        }
      }
    }
  },
  mounted() {
    const startInput = this.$refs.startInput;
    const startInputEl = startInput.$el.querySelector('input');
    const endInputEl = this.$refs.endInput.$el.querySelector('input');

    if (!this.flatpickr) {
      const config = this.setPickerConfig(startInput, startInputEl, endInputEl);

      this.flatpickr = [
        flatpickr(startInputEl, config),
        flatpickr(endInputEl, config)
      ];
    }
  },
  beforeDestroy() {
    this.destroyPicker();
  },
  methods: {
    setPickerConfig(startInput, startInputEl, endInputEl) {
      // Merge default time config with user config
      let config = Object.assign(
        {},
        UI_TIMERANGEPICKER.DEFAULT_CONFIG,
        this.config,
        {
          altInput: false,
          disableMobile: true // Mobile Support
        }
      );

      // custom event
      config.onChange = (selectedDates, dateStr, instance) => {
        const canEmit = this.updateInputs([
          startInputEl.value,
          endInputEl.value
        ]);
        canEmit &&
          this.$emit(UI_TIMERANGEPICKER.EVENT.CHANGE, [
            this.startInputValue,
            this.endInputValue
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
        const canEmit = this.updateInputs(this.model);
        if (canEmit) {
          this.updateInitialValue();
          this.$emit(UI_TIMERANGEPICKER.EVENT.CHANGE, [
            this.startInputValue,
            this.endInputValue
          ]);
        }
      };


      return config;
    },
    destroyPicker() {
      this.flatpickr.forEach((item) => item.destroy());
      this.flatpickr = null;
    },
    getTimeFormat() {
      return this.config.dateFormat || UI_TIMERANGEPICKER.DEFAULT_CONFIG.dateFormat;
    },
    parseTimeValue(value) {
      // Handle time string (e.g., "14:30") or Date object
      if (!value) return '';

      const format = this.getTimeFormat();

      if (typeof value === 'string') {
        // Already a time string, validate and return
        // Simple regex for H:i format
        if (/^\d{1,2}:\d{2}$/.test(value)) {
          return value;
        }
        // Try to parse as date string and extract time
        const parsed = flatpickr.parseDate(value, format);
        if (parsed) {
          return flatpickr.formatDate(parsed, format);
        }
        return value;
      }

      if (value instanceof Date) {
        return flatpickr.formatDate(value, format);
      }

      return '';
    },
    updateInputs(times) {
      let canEmit = false;

      if (times.length === 2) {
        const startTime = this.parseTimeValue(times[0]);
        const endTime = this.parseTimeValue(times[1]);

        const noUpdates =
          this.startInputValue === startTime && this.endInputValue === endTime;

        if (!noUpdates) {
          this.startInputValue = startTime;
          this.endInputValue = endTime;

          canEmit = startTime && endTime;
        }
      }

      return canEmit;
    },
    updateInitialValue() {
      if (this.flatpickr && this.flatpickr.length === 2) {
        this.flatpickr.forEach((item, index) =>
          item.setDate(this.model[index])
        );
      }
    },
    clear() {
      this.startInputValue = '';
      this.endInputValue = '';
      this.updateInitialValue();
    },
    onEndInputChange() {
      // Always enabled for time range picker
      const endInputValue = this.$refs.endInput.$textField.value;
      if (endInputValue !== this.endInputValue) {
        const canEmit = this.updateInputs([
          this.startInputValue,
          endInputValue
        ]);
        canEmit &&
          this.$emit(UI_TIMERANGEPICKER.EVENT.CHANGE, [
            this.startInputValue,
            this.endInputValue
          ]);
      }
    }
  }
};
</script>
