<template>
  <select class="mdc-select"
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
    multiple: { // TODO
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
  watch: {
    selected(val) {
      this.model = val;
    }
  },
  computed: {
    selectedOption() {
      return this.options.length
        ? this.options.find(option => option[this.optionKey] == this.model)
        : {};
    }
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, {
        key: this.selectedOption[this.optionKey],
        value: this.selectedOption[this.optionValue]
      });
    },
    placeholder() {
      if (!this.defaultValue && this.options.length) {
        let defaultOption = this.model
          ? this.selectedOption
          : this.options[0];

        this.$emit(EVENT_CHANGE, {
          key: defaultOption[this.optionKey],
          value: defaultOption[this.optionValue]
        });
      }
    }
  },
  mounted() {
    this.placeholder();
  }
};
</script>
