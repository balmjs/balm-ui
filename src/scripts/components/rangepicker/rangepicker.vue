<template>
  <div class="mdc-rangepicker">
    <ui-textfield
      ref="startInput"
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
      ref="endInput"
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
import flatpickr from 'flatpickr';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import UiTextfield from '../textfield/textfield.vue';

// Define rangepicker constants
const UI_RANGEPICKER = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiRangepicker',
  components: {
    UiTextfield
  },
  model: {
    prop: 'model',
    event: UI_RANGEPICKER.EVENT.CHANGE
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
    disableRangePlugin: {
      type: Boolean,
      default: false
    }
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
      }
    }
  },
  mounted() {
    const startInput = this.$refs.startInput;
    const startInputEl = startInput.$el.querySelector('input');
    const endInputEl = this.$refs.endInput.$el.querySelector('input');

    if (!this.flatpickr) {
      const config = this.setPickerConfig(startInput, startInputEl, endInputEl);

      this.flatpickr = this.disableRangePlugin
        ? [flatpickr(startInputEl, config), flatpickr(endInputEl, config)]
        : flatpickr(startInputEl, config);
    }
  },
  beforeDestroy() {
    this.destroyPicker();
  },
  methods: {
    setPickerConfig(startInput, startInputEl, endInputEl) {
      let config = Object.assign({}, this.config, {
        disableMobile: true, // Mobile Support
        plugins: this.disableRangePlugin
          ? []
          : [
              new rangePlugin({
                input: endInputEl
              })
            ]
      });

      // custom event
      config.onChange = (selectedDates, dateStr, instance) => {
        const canEmit = this.updateInputs([
          startInputEl.value,
          endInputEl.value
        ]);
        canEmit &&
          this.$emit(UI_RANGEPICKER.EVENT.CHANGE, [
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
          this.updateInitialValue(instance);
          this.$emit(UI_RANGEPICKER.EVENT.CHANGE, [
            this.startInputValue,
            this.endInputValue
          ]);
        }
      };
      if (!this.disableRangePlugin) {
        // fix(@flatpickr): second input onChange bug for rangePlugin (temporary solution)
        config.onValueUpdate = () => {
          this.onEndInputChange();
        };
      }

      return config;
    },
    destroyPicker() {
      if (this.disableRangePlugin) {
        this.flatpickr.forEach((item) => item.destroy());
      } else {
        this.flatpickr.destroy();
      }
      this.flatpickr = null;
    },
    updateInputs(dates) {
      let canEmit = false;

      if (dates.length === 2) {
        const selectedDates = dates.map((value) =>
          value
            ? flatpickr.formatDate(
                new Date(value),
                this.config.dateFormat || 'Y-m-d'
              )
            : ''
        );

        const startDate = selectedDates[0];
        const endDate = selectedDates[1];
        const noUpdates =
          this.startInputValue === startDate && this.endInputValue === endDate;

        if (!noUpdates) {
          this.startInputValue = startDate;
          this.endInputValue = endDate;

          canEmit = startDate && endDate;
        }
      }

      return canEmit;
    },
    updateInitialValue(instance = this.flatpickr) {
      const dateValue =
        this.startInputValue && this.endInputValue
          ? [this.startInputValue, this.endInputValue]
          : [];

      if (this.disableRangePlugin) {
        if (this.flatpickr && this.flatpickr.length === 2) {
          this.flatpickr.forEach((item, index) =>
            item.setDate(this.model[index])
          );
        }
      } else {
        instance.setDate(dateValue, true); // Redrawing

        // fix(ui): focus bug for init (temporary solution)
        this.$refs.startInput.$textField.foundation.deactivateFocus();
      }
    },
    clear() {
      this.startInputValue = '';
      this.endInputValue = '';
      this.updateInitialValue();
    },
    onEndInputChange() {
      if (this.config.enableTime) {
        const endInputValue = this.$refs.endInput.$textField.value;
        if (endInputValue !== this.endInputValue) {
          const canEmit = this.updateInputs([
            this.startInputValue,
            endInputValue
          ]);
          canEmit &&
            this.$emit(UI_RANGEPICKER.EVENT.CHANGE, [
              this.startInputValue,
              this.endInputValue
            ]);
        }
      }
    }
  }
};
</script>
