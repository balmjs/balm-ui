<template>
  <ui-textfield
    ref="input"
    v-model="inputValue"
    class="mdc-datepicker"
    :input-id="inputId"
    :outlined="outlined"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :fullwidth="fullwidth"
    :end-aligned="endAligned"
    :icon="icon"
    :with-leading-icon="withLeadingIcon"
    :with-trailing-icon="withTrailingIcon || toggle || clear"
    @change="handleChange"
  >
    <!-- Leading icon (optional) -->
    <template #before="{ iconClass }">
      <i
        v-if="materialIcon"
        :class="
          getIconClassName([
            UI_TEXTFIELD_ICON.cssClasses.icon,
            UI_TEXTFIELD_ICON.cssClasses.leadingIcon
          ])
        "
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
      <template v-if="toggle || clear">
        <span :class="[iconClass, 'mdc-datepicker__icon']">
          <template v-if="toggle">
            <span class="mdc-datepicker__toggle" data-toggle>
              <slot name="toggle">
                <svg viewBox="0 0 18 18">
                  <path
                    d="M14 2v-1h-3v1h-5v-1h-3v1h-3v15h17v-15h-3zM12 2h1v2h-1v-2zM4 2h1v2h-1v-2zM16 16h-15v-8.921h15v8.921zM1 6.079v-3.079h2v2h3v-2h5v2h3v-2h2v3.079h-15z"
                    fill="#000000"
                  />
                </svg>
              </slot>
            </span>
          </template>
          <template v-if="clear">
            <span
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
          </template>
        </span>
      </template>
      <template v-else>
        <slot name="after" :iconClass="iconClass"></slot>
      </template>
    </template>
  </ui-textfield>
</template>

<script>
import flatpickr from 'flatpickr';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import UiTextfield from '../input-controls/textfield';
import textfieldMixin from '../../mixins/textfield';
import { UI_TEXTFIELD_ICON } from '../input-controls/constants';

// Define datepicker constants
const UI_DATEPICKER = {
  MODE: {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
    RANGE: 'range',
    MONTH: 'month', // Custom
    TIME: 'time' // Custom
  },
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiDatepicker',
  components: {
    UiTextfield
  },
  mixins: [textfieldMixin],
  model: {
    prop: 'model',
    event: UI_DATEPICKER.EVENT.CHANGE
  },
  props: {
    // <ui-textfield> variants
    outlined: {
      type: Boolean,
      default: false
    },
    // States
    model: {
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
      default() {
        return {};
      }
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
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      UI_TEXTFIELD_ICON,
      flatpickr: null,
      inputValue: this.model,
      mode: this.config.mode || UI_DATEPICKER.MODE.SINGLE,
      rangeSeparator: ''
    };
  },
  watch: {
    model(val) {
      if (this.mode === UI_DATEPICKER.MODE.RANGE) {
        this.setRangeDate(val);
      } else {
        this.inputValue = val;
      }
      this.syncSelectedDates(this.inputValue);
    }
  },
  mounted() {
    const uiTextField = this.$refs.input;
    const inputEl = uiTextField.$el.querySelector('input');
    inputEl.dataset.input = '';

    if (!this.flatpickr) {
      let config = Object.assign({}, this.config);
      switch (this.config.mode) {
        case UI_DATEPICKER.MODE.MONTH:
          config = Object.assign(config, {
            mode: UI_DATEPICKER.MODE.SINGLE,
            plugins: [new monthSelectPlugin(this.monthOptions)]
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
          uiTextField.$textField.foundation.activateFocus();
        }
      };
      config.onClose = () => {
        if (config.altInput) {
          uiTextField.$textField.foundation.deactivateFocus();
        }

        // fix(ui): time mode bug when the initial value is empty
        if (config.mode === UI_DATEPICKER.MODE.TIME && !this.inputValue) {
          inputEl.value = '';
        }

        inputEl.blur();
      };
      // Set default value
      if (this.mode === UI_DATEPICKER.MODE.RANGE) {
        this.rangeSeparator = config.locale
          ? config.locale.rangeSeparator
          : ' to ';
        this.setRangeDate(this.model);
      } else {
        config.onReady = (selectedDates, dateStr, instance) => {
          // defaultDate: 'today'
          if (dateStr) {
            this.inputValue = dateStr;
            this.$emit(UI_DATEPICKER.EVENT.CHANGE, dateStr);
          }
        };
        // fix(ui): `clear` event
        config.onChange = (selectedDates, dateStr, instance) => {
          if (!dateStr) {
            this.$emit(UI_DATEPICKER.EVENT.CHANGE, '');
          }
        };
      }
      // Init
      config.defaultDate = this.inputValue;
      this.flatpickr = flatpickr(this.$el, config);
    }
  },
  beforeDestroy() {
    this.flatpickr.destroy();
    this.flatpickr = null;
  },
  methods: {
    syncSelectedDates(value) {
      if (this.flatpickr) {
        this.flatpickr.setDate(value);
      }
    },
    handleChange(event) {
      this.inputValue = event.target.value;

      let result;
      switch (this.mode) {
        case UI_DATEPICKER.MODE.MULTIPLE:
          let multipleValue = this.inputValue.replace(/\s,\s/, ',').split(',');
          result =
            multipleValue.length === 1
              ? multipleValue[0] // string
              : multipleValue; // array
          break;
        case UI_DATEPICKER.MODE.RANGE:
          let rangeValue = this.inputValue.split(this.rangeSeparator);
          let startDate = rangeValue[0];
          let endDate = rangeValue[1];
          if (startDate && endDate) {
            result =
              startDate === endDate
                ? startDate // string
                : [startDate, endDate]; // array

            this.syncSelectedDates(result);
          }
          break;
        default:
          result = this.inputValue; // string
          break;
      }

      if (result) {
        this.$emit(UI_DATEPICKER.EVENT.CHANGE, result);
      }
    },
    handleClear(event) {
      // fix(ui): trigger `<ui-textfield>` focused when clicking the clear button
      if (!this.inputValue) {
        event.stopPropagation();
      }
    },
    setRangeDate(selectedDates) {
      if (Array.isArray(selectedDates) && selectedDates.length === 2) {
        let startDate = selectedDates[0];
        let endDate = selectedDates[1];
        this.inputValue =
          startDate === endDate
            ? startDate
            : `${startDate}${this.rangeSeparator}${endDate}`;
      }
    }
  }
};
</script>
