<template>
  <ui-form>
    <ui-form-field v-if="options.includes('disabled')">
      <ui-checkbox
        v-model="value.disabled"
        :input-id="`${idPrefix}-disable`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-disable`">Disabled</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('rtl')">
      <ui-checkbox
        v-model="value.rtl"
        :input-id="`${idPrefix}-rtl`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-rtl`">RTL</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('required')">
      <ui-checkbox
        v-model="value.required"
        :input-id="`${idPrefix}-required`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-required`">Required</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('customColor')">
      <ui-checkbox
        v-model="value.customColor"
        :input-id="`${idPrefix}-alternate-colors`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-alternate-colors`">Alternate Colors</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('unclickable')">
      <ui-checkbox
        v-model="value.unclickable"
        :input-id="`${idPrefix}-unclickable-leading-trailing`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-unclickable-leading-trailing`">
        Unclickable icons
      </label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('min')">
      <ui-checkbox
        v-model="value.min"
        :input-id="`${idPrefix}-outlined-minlength`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-outlined-minlength`">
        Must be at least 8 characters
      </label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('max')">
      <ui-checkbox
        v-model="value.max"
        :input-id="`${idPrefix}-outlined-maxlength`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-outlined-maxlength`">
        Must not exceed 10 characters
      </label>
    </ui-form-field>
    <template v-if="options.includes('helperText')">
      <ui-form-field>
        <ui-checkbox
          v-model="value.helperText"
          :input-id="`${idPrefix}-use-helper-text`"
        ></ui-checkbox>
        <label :for="`${idPrefix}-use-helper-text`">Use Helper Text</label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          v-model="value.isVisible"
          :input-id="`${idPrefix}-persistent-helper-text`"
          :disabled="!value.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-persistent-helper-text`">
          Make helper text persistent
        </label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          v-model="value.hasValidMsg"
          :input-id="`${idPrefix}-helper-text-as-validation`"
          :disabled="!value.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-helper-text-as-validation`">
          Use helper text as validation message
        </label>
      </ui-form-field>
    </template>
  </ui-form>
</template>

<script>
// const OPTION_TYPES = [
//   'disabled',
//   'rtl',
//   'dense',
//   'required',
//   'customColor',
//   'helperText',
//   'min',
//   'max',
//   'unclickable'
// ];

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
          hasValidMsg: false,
          min: false,
          max: false,
          unclickable: false
        };
      }
    }
  }
};
</script>
