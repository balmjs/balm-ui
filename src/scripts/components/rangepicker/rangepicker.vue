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
import UiTextfield from '../input-controls/textfield';
import getType from '../../utils/typeof';

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
      default() {
        return [];
      }
    },
    // <ui-textfield> attributes
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    placeholders: {
      type: Array,
      default() {
        return [];
      }
    },
    labels: {
      type: Array,
      default() {
        return [];
      }
    },
    // For flatpickr
    config: {
      type: Object,
      default() {
        return {};
      }
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
    const startInputEl = this.$refs.startInput.$el.querySelector('input');
    const endInputEl = this.$refs.endInput.$el.querySelector('input');

    if (!this.flatpickr) {
      let config = Object.assign({}, this.config, {
        disableMobile: true, // Mobile Support
        plugins: [
          new rangePlugin({
            input: endInputEl
          })
        ]
      });
      // custom event
      config.onChange = (selectedDates, dateStr, instance) => {
        this.updateInputs(selectedDates);
        this.$emit(UI_RANGEPICKER.EVENT.CHANGE, [
          this.startInputValue,
          this.endInputValue
        ]);
      };
      config.onClose = () => {
        startInputEl.blur();
        endInputEl.blur();
      };
      // set default value
      config.onReady = (selectedDates, dateStr, instance) => {
        this.updateInputs(this.model);
        this.updateInitialValue(instance);

        const dateValue = [this.startInputValue, this.endInputValue];
        this.$emit(UI_RANGEPICKER.EVENT.CHANGE, dateValue);
      };
      // fix(@flatpickr): second input onChange bug for rangePlugin (temporary solution)
      config.onValueUpdate = () => {
        this.onEndInputChange();
      };

      this.flatpickr = flatpickr(startInputEl, config);
    }
  },
  methods: {
    updateInputs(dates) {
      if (dates.length === 2) {
        const selectedDates = dates.map((value) =>
          value
            ? flatpickr.formatDate(
                new Date(value),
                this.config.dateFormat || 'Y-m-d'
              )
            : ''
        );

        if (
          this.startInputValue !== selectedDates[0] ||
          this.endInputValue !== selectedDates[1]
        ) {
          this.startInputValue = selectedDates[0];
          this.endInputValue = selectedDates[1];
        }
      }
    },
    updateInitialValue(instance = this.flatpickr) {
      const dateValue =
        this.startInputValue && this.endInputValue
          ? [this.startInputValue, this.endInputValue]
          : [];
      instance.setDate(dateValue, true); // Redrawing

      // fix(ui): focus bug for init (temporary solution)
      this.$refs.startInput.$textField.foundation.deactivateFocus();
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
          this.updateInputs([this.startInputValue, endInputValue]);
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
