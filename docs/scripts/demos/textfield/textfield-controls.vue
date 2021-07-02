<template>
  <ui-form>
    <ui-form-field v-if="options.includes('disabled')">
      <ui-checkbox
        v-model="controls.disabled"
        :input-id="`${idPrefix}-disable`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-disable`">Disabled</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('rtl')">
      <ui-checkbox
        v-model="controls.rtl"
        :input-id="`${idPrefix}-rtl`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-rtl`">RTL</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('required')">
      <ui-checkbox
        v-model="controls.required"
        :input-id="`${idPrefix}-required`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-required`">Required</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('customColor')">
      <ui-checkbox
        v-model="controls.customColor"
        :input-id="`${idPrefix}-alternate-colors`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-alternate-colors`">Alternate Colors</label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('unclickable')">
      <ui-checkbox
        v-model="controls.unclickable"
        :input-id="`${idPrefix}-unclickable-leading-trailing`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-unclickable-leading-trailing`">
        Unclickable icons
      </label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('min')">
      <ui-checkbox
        v-model="controls.min"
        :input-id="`${idPrefix}-outlined-minlength`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-outlined-minlength`">
        Must be at least 8 characters
      </label>
    </ui-form-field>
    <ui-form-field v-if="options.includes('max')">
      <ui-checkbox
        v-model="controls.max"
        :input-id="`${idPrefix}-outlined-maxlength`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-outlined-maxlength`">
        Must not exceed 10 characters
      </label>
    </ui-form-field>
    <template v-if="options.includes('helperText')">
      <ui-form-field>
        <ui-checkbox
          v-model="controls.helperText"
          :input-id="`${idPrefix}-use-helper-text`"
        ></ui-checkbox>
        <label :for="`${idPrefix}-use-helper-text`">Use Helper Text</label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          v-model="controls.isVisible"
          :input-id="`${idPrefix}-persistent-helper-text`"
          :disabled="!controls.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-persistent-helper-text`">
          Make helper text persistent
        </label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          v-model="controls.isValidMsg"
          :input-id="`${idPrefix}-helper-text-as-validation`"
          :disabled="!controls.helperText"
        ></ui-checkbox>
        <label :for="`${idPrefix}-helper-text-as-validation`">
          Use helper text as validation message
        </label>
      </ui-form-field>
    </template>
  </ui-form>
</template>

<script>
export default {
  props: {
    idPrefix: {
      type: String,
      default: 'default'
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      controls: this.modelValue
    };
  },
  watch: {
    modelValue(val) {
      this.controls = val;
      this.$emit('update:modelValue', val);
    }
  }
};
</script>
