<template>
  <div>
    <div v-if="options.includes('disabled')">
      <ui-checkbox :id="`${idPrefix}-disable`" v-model="value.disabled">
        Disabled
      </ui-checkbox>
    </div>
    <div v-if="options.includes('rtl')">
      <ui-checkbox :id="`${idPrefix}-rtl`" v-model="value.rtl">
        RTL
      </ui-checkbox>
    </div>
    <div v-if="options.includes('dense')">
      <ui-checkbox :id="`${idPrefix}-dense`" v-model="value.dense">
        Dense
      </ui-checkbox>
    </div>
    <div v-if="options.includes('required')">
      <ui-checkbox :id="`${idPrefix}-required`" v-model="value.required">
        Required
      </ui-checkbox>
    </div>
    <div v-if="options.includes('customColor')">
      <ui-checkbox :id="`${idPrefix}-alternate-colors`" v-model="value.customColor">
        Alternate Colors
      </ui-checkbox>
    </div>
    <div v-if="options.includes('min')">
      <ui-checkbox :id="`${idPrefix}-outlined-minlength`" v-model="value.min">
        Must be at least 8 characters
      </ui-checkbox>
    </div>
    <div v-if="options.includes('max')">
      <ui-checkbox :id="`${idPrefix}-outlined-maxlength`" v-model="value.max">
        Must not exceed 10 characters
      </ui-checkbox>
    </div>
    <template v-if="options.includes('helperText')">
      <div>
        <ui-checkbox :id="`${idPrefix}-use-helper-text`" v-model="value.helperText">
          Use Helper Text
        </ui-checkbox>
      </div>
      <div>
        <ui-checkbox :id="`${idPrefix}-persistent-helper-text`" v-model="value.isVisible" :disabled="!value.helperText">
          Make helper text persistent
        </ui-checkbox>
      </div>
      <div>
        <ui-checkbox :id="`${idPrefix}-helper-text-as-validation`" v-model="value.isValidMsg" :disabled="!value.helperText">
          Use helper text as validation message
        </ui-checkbox>
      </div>
    </template>
  </div>
</template>

<script>
const OPTION_TYPES = [
  'disabled',
  'rtl',
  'dense',
  'required',
  'customColor',
  'helperText',
  'min',
  'max'
];

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    idPrefix: {
      type: String,
      default: 'default'
    },
    options: Array,
    value: {
      type: Object,
      default() {
        return {
          disabled: false,
          rtl: false,
          dense: false,
          required: false,
          customColor: false,
          helperText: false,
          isVisible: false,
          isValidMsg: false,
          min: false,
          max: false
        };
      }
    }
  }
};
</script>
