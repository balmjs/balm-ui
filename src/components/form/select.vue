<template>
  <!-- Native element, shown on mobile devices -->
  <select :class="className"
    v-model="model"
    :disabled="disabled"
    :multiple="multiple"
    @change="handleChange">
    <option v-if="defaultValue"
      :value="defaultKey" selected>{{ defaultValue }}</option>
    <template v-if="group">
      <template v-for="option in options">
        <!-- A group of options -->
        <optgroup v-if="option.label && option.items && option.items.length"
          class="mdc-list-group" :label="option.label">
          <option v-for="item in option.items"
            class="mdc-list-item"
            :value="item[optionKey]">{{ item[optionValue] }}</option>
        </optgroup>
        <!-- A list item -->
        <option v-if="!option.label && option[optionValue]"
          class="mdc-list-item"
          :value="option[optionKey]">{{ option[optionValue] }}</option>
        <!-- A divider -->
        <option v-if="multiple && (option.hr || option.divider)"
          class="mdc-list-divider" role="presentation" disabled></option>
      </template>
    </template>
    <template v-else>
      <option v-for="option in options"
        :value="option[optionKey]">{{ option[optionValue] }}</option>
    </template>
  </select>
</template>

<script>
import {isObject} from '../utils/helper';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-select',
  props: {
    // attribute
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    // mdc
    selected: {
      required: true
    },
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
      model: this.selected
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
    selected(val) {
      this.model = val;
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_EVENT_CHANGE, this.model);
    },
    init() {
      if (!this.defaultValue && this.options.length) {
        let defaultOption = {};

        if (this.group) {
          for (let options of this.options) {
            if (options.items && options.items.length) {
              defaultOption = this.model
                ? options.items.find(option => option[this.optionKey] == this.model) // `object` || `undefined`
                : options.items[0]; // `object`
            }
            if (isObject(defaultOption) && defaultOption.hasOwnProperty(this.optionKey)) {
              break;
            }
          }
        } else {
          defaultOption = this.model
            ? this.options.find(option => option[this.optionKey] == this.model)
            : this.options[0];
        }

        this.$emit(UI_EVENT_CHANGE, defaultOption[this.optionKey]);
      }
    }
  },
  mounted() {
    if (!this.multiple) {
      this.init();
    }
  }
};
</script>
