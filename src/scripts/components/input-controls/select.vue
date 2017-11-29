<template>
  <!-- Native element, shown on mobile devices -->
  <select v-model="currentValue"
          :class="className"
          :disabled="disabled"
          :multiple="multiple"
          :size="size"
          @change="handleChange">
    <!-- Default value -->
    <option v-if="defaultValue"
            :value="defaultKey"
            selected>{{ defaultValue }}</option>
    <template v-if="group">
      <template v-for="option in options">
        <!-- A group of options -->
        <optgroup v-if="option.label && option.items && option.items.length"
                  class="mdc-list-group"
                  :label="option.label">
          <option v-for="(item, index) in option.items"
                  :key="index"
                  class="mdc-list-item"
                  :value="item[optionKey]">{{ item[optionValue] }}</option>
        </optgroup>
        <!-- A list item -->
        <option v-if="!option.label && option[optionValue]"
                class="mdc-list-item"
                :value="option[optionKey]">{{ option[optionValue] }}</option>
        <!-- A divider -->
        <option v-if="multiple && (option === DIVIDER)"
                class="mdc-list-divider"
                role="presentation"
                disabled></option>
      </template>
    </template>
    <template v-else>
      <option v-for="(option, index) in options"
              :key="index"
              :value="option[optionKey]"
              :disabled="option.disabled">{{ option[optionValue] }}</option>
    </template>
  </select>
</template>

<script>
import getType from '../../helpers/typeof';

const DIVIDER = '-';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-select',
  props: {
    // state
    model: null,
    // element attributes
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 0
    },
    // ui attributes
    options: {
      required: true,
      type: Array,
      default() {
        return [];
      }
    },
    optionKey: {
      type: String,
      default: 'value'
    },
    optionValue: {
      type: String,
      default: 'label'
    },
    defaultKey: {
      type: String,
      default: ''
    },
    defaultValue: String,
    group: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      DIVIDER,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-select': !this.multiple && !this.group,
        'mdc-select--disabled': this.disabled,
        'mdc-multi-select': this.multiple,
        'mdc-list': this.group
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    if (!this.multiple) {
      this.init();
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_EVENT_CHANGE, this.currentValue);
    },
    init() {
      if (!this.defaultValue && this.options.length) {
        let defaultOption = {};

        if (this.group) {
          for (let options of this.options) {
            if (options.items && options.items.length) {
              defaultOption = this.currentValue
                ? options.items.find(option => option[this.optionKey] == this.currentValue) // `object` || `undefined`
                : options.items[0]; // `object`
            }
            if (getType(defaultOption) === 'object' && defaultOption.hasOwnProperty(this.optionKey)) {
              break;
            }
          }
        } else {
          defaultOption = this.currentValue
            ? this.options.find(option => option[this.optionKey] == this.currentValue)
            : this.options[0];
        }

        this.$emit(UI_EVENT_CHANGE, defaultOption[this.optionKey]);
      }
    }
  }
};
</script>
