<template>
  <div class="mdc-rangepicker">
    <ui-textfield
      ref="startInput"
      v-model="startInputValue"
      class="mdc-rangepicker__start"
      :outlined="outlined"
      :placeholder="startPlaceholder"
      :label="startLabel"
      :disabled="disabled"
      :attrs="{ readonly: true }"
    ></ui-textfield>
    <span class="mdc-rangepicker__separator">
      <slot name="separator"></slot>
    </span>
    <ui-textfield
      ref="endInput"
      v-model="endInputValue"
      class="mdc-rangepicker__end"
      :outlined="outlined"
      :placeholder="endPlaceholder"
      :label="endLabel"
      :disabled="disabled"
      :attrs="{ readonly: true }"
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
  name: 'ui-rangepicker',
  components: {
    UiTextfield
  },
  model: {
    prop: 'model',
    event: UI_RANGEPICKER.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: Array,
      default() {
        return [];
      }
    },
    // UI common attributes
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    labels: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholders: {
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
      loaded: false,
      startInputValue: '',
      endInputValue: ''
    };
  },
  watch: {
    model(val, oldVal) {
      this.loaded = val[0] && val[1] && !(oldVal[0] || oldVal[1]);

      if (this.loaded) {
        this.updateInputs(val);
        this.updateInitialValue();
      }
    }
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

        this.$emit(UI_RANGEPICKER.EVENT.CHANGE, [
          this.startInputValue,
          this.endInputValue
        ]);
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
      instance.setDate([this.startInputValue, this.endInputValue], true); // Redrawing

      // TODO: temporary solution - fix focus bug
      this.$refs.startInput.$textField.foundation_.inputBlurHandler_();
    }
  }
};
</script>
