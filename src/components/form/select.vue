<template>
  <select :class="className"
    v-model="model"
    :disabled="disabled"
    :multiple="multiple"
    @change="handleChange">
    <option v-if="defaultValue" :value="defaultKey" selected>{{ defaultValue }}</option>
    <option v-for="option in options" :value="option[optionKey]">{{ option[optionValue] }}</option>
  </select>
</template>

<script>
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
    defaultValue: String
  },
  data() {
    return {
      model: this.selected
    };
  },
  computed: {
    className() {
      return {
        'mdc-select': true,
        'mdc-multi-select': this.multiple
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
        let defaultOption = this.model
          ? this.options.find(option => option[this.optionKey] == this.model)
          : this.options[0];

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
