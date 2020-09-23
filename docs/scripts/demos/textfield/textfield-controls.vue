<template>
  <ui-form>
    <ui-form-field v-if="options.includes('disabled')">
      <ui-checkbox
        :id="`${idPrefix}-disable`"
        v-model="value.disabled"
      ></ui-checkbox>
      <label :for="`${idPrefix}-disable`">Disabled</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('rtl')">
      <ui-checkbox :id="`${idPrefix}-rtl`" v-model="value.rtl"></ui-checkbox>
      <label :for="`${idPrefix}-rtl`">RTL</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('required')">
      <ui-checkbox
        :id="`${idPrefix}-required`"
        v-model="value.required"
      ></ui-checkbox>
      <label :for="`${idPrefix}-required`">Required</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('customColor')">
      <ui-checkbox
        :id="`${idPrefix}-alternate-colors`"
        v-model="value.customColor"
      ></ui-checkbox>
      <label :for="`${idPrefix}-alternate-colors`">Alternate Colors</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('unclickable')">
      <ui-checkbox
        :id="`${idPrefix}-unclickable-leading-trailing`"
        v-model="value.unclickable"
      ></ui-checkbox>
      <label :for="`${idPrefix}-unclickable-leading-trailing`"
        >Unclickable icons</label
      >
    </ui-form-field>
    <ui-form-field v-if="options.includes('min')">
      <ui-checkbox
        :id="`${idPrefix}-outlined-minlength`"
        v-model="value.min"
      ></ui-checkbox>
      <label :for="`${idPrefix}-outlined-minlength`"
        >Must be at least 8 characters</label
      >
    </ui-form-field>
    <ui-form-field v-if="options.includes('max')">
      <ui-checkbox
        :id="`${idPrefix}-outlined-maxlength`"
        v-model="value.max"
      ></ui-checkbox>
      <label :for="`${idPrefix}-outlined-maxlength`"
        >Must not exceed 10 characters</label
      >
    </ui-form-field>
    <template v-if="options.includes('helperText')">
      <ui-form-field>
        <ui-checkbox
          :id="`${idPrefix}-use-helper-text`"
          v-model="value.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-use-helper-text`">Use Helper Text</label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          :id="`${idPrefix}-persistent-helper-text`"
          v-model="value.isVisible"
          :disabled="!value.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-persistent-helper-text`"
          >Make helper text persistent</label
        >
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          :id="`${idPrefix}-helper-text-as-validation`"
          v-model="value.hasValidMsg"
          :disabled="!value.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-helper-text-as-validation`"
          >Use helper text as validation message</label
        >
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
