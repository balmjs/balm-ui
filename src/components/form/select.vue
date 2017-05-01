<template>
  <select class="mdc-select" v-model="model" @change="handleChange">
    <option v-if="defaultValue" :value="defaultKey" selected>{{ defaultValue }}</option>
    <option v-for="option in options" :value="option[optionKey]">{{ option[optionValue] }}</option>
  </select>
</template>

<script>
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-select',
  props: {
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
  methods: {
    handleChange() {
      let selectedOption = this.options.find(option => option[this.optionKey] == this.model);
      this.$emit(EVENT_CHANGE, {
        key: selectedOption[this.optionKey],
        value: selectedOption[this.optionValue]
      });
    }
  }
};
</script>
