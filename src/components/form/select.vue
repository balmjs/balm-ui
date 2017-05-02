<template>
  <select :class="className"
    v-model="model"
    :disabled="disabled"
    :multiple="multiple"
    @change="handleChange">
    <option v-if="defaultValue"
      :value="defaultKey" selected>{{ defaultValue }}</option>
    <template v-if="group">
      <template v-for="option in options">
        <option v-if="multiple && (option.hr || option.divider)"
          class="mdc-list-divider" role="presentation" disabled></option>
        <template v-else>
          <optgroup v-if="option.items && option.items.length"
            class="mdc-list-group" :label="option.label">
            <option v-for="item in option.items"
              class="mdc-list-item"
              :value="item[optionKey]">{{ item[optionValue] }}</option>
          </optgroup>
        </template>
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

const EVENT_CHANGE = 'change';

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
      this.$emit(EVENT_CHANGE, this.model);
    },
    placeholder() {
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

        this.$emit(EVENT_CHANGE, defaultOption[this.optionKey]);
      }
    }
  },
  mounted() {
    if (!this.multiple) {
      this.placeholder();
    }
  }
};
</script>
