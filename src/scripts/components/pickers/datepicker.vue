<template>
  <ui-textfield
    :id="id"
    ref="input"
    v-model="inputValue"
    class="mdc-datepicker"
    :outlined="outlined"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :fullwidth="fullwidth"
    :end-aligned="endAligned"
    :icon="icon"
    :with-leading-icon="withLeadingIcon"
    :with-trailing-icon="withTrailingIcon || toggle || allowInput || clear"
    :attrs="{ readonly: true }"
    @change="handleChange"
  >
    <!-- Leading icon (optional) -->
    <template #before="{ iconClass }">
      <slot name="before" :iconClass="iconClass"></slot>
    </template>

    <!-- Label text -->
    <template #default>
      <slot></slot>
    </template>

    <!-- Trailing icon (optional) -->
    <template #after="{ iconClass }">
      <template v-if="toggle || allowInput || clear">
        <span :class="[iconClass, 'mdc-datepicker__icon']">
          <template v-if="toggle || allowInput">
            <span class="mdc-datepicker__toggle" title="toggle" data-toggle>
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
            <span class="mdc-datepicker__clear" title="clear" data-clear>
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
import UiTextfield from '../input-controls/textfield';
import textfieldMixin from '../../mixins/textfield';

// Define datepicker constants
const UI_DATEPICKER = {
  MODE: {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
    RANGE: 'range'
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
    id: {
      type: [String, null],
      default: null
    },
    icon: {
      type: String,
      default: ''
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
    }
  },
  data() {
    return {
      flatpickr: null,
      inputValue: this.model,
      mode: this.config.mode || UI_DATEPICKER.MODE.SINGLE,
      rangeSeparator: ''
    };
  },
  computed: {
    allowInput() {
      return this.config.allowInput;
    }
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
    const inputEl = this.$refs.input.$el.querySelector('input');
    inputEl.dataset.input = '';

    if (!this.flatpickr) {
      let config = Object.assign({}, this.config);
      // Default config for ui
      config.wrap = true; // For toggle & clear icons, mobile support
      config.clickOpens = !config.allowInput; // NOTE: fix flatpickr bug
      // Custom event
      config.onClose = () => {
        inputEl.blur();
      };
      // Set default value
      switch (this.mode) {
        case UI_DATEPICKER.MODE.MULTIPLE:
          config.defaultDate = this.inputValue;
          break;
        case UI_DATEPICKER.MODE.RANGE:
          this.rangeSeparator = config.locale
            ? config.locale.rangeSeparator
            : ' to ';
          this.setRangeDate(this.model);
          config.defaultDate = this.inputValue;
          break;
        default:
          config.onReady = (selectedDates, dateStr, instance) => {
            // defaultDate: 'today'
            if (dateStr) {
              this.inputValue = dateStr;
              this.$emit(UI_DATEPICKER.EVENT.CHANGE, dateStr);
            }
          };
          break;
      }
      // Init
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
