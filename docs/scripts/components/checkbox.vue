<template>
  <div>
    <div>
      <ui-form-field :alignEnd="alignEnd">
        <ui-checkbox :id="`${idPrefix}-checkbox`" :cssOnly="cssOnly"></ui-checkbox>
        <label :for="`${idPrefix}-checkbox`">Default checkbox</label>
      </ui-form-field>
      <div class="demo-toggle-group">
        <ui-button outlined @click="$balmUI.onChange('alignEnd', !alignEnd)">
          Toggle
          <code>--align-end</code>
        </ui-button>
      </div>
    </div>
    <div>
      <ui-form-field>
        <ui-checkbox :id="`${idPrefix}-checkbox-disabled`" :cssOnly="cssOnly" :disabled="disabled"></ui-checkbox>
        <label :for="`${idPrefix}-checkbox-disabled`">Disabled checkbox</label>
      </ui-form-field>
      <div class="demo-toggle-group">
        <ui-button outlined @click="$balmUI.onChange('disabled', !disabled)">
          Toggle
          <code>disabled</code>
        </ui-button>
      </div>
    </div>
    <div v-if="!cssOnly">
      <ui-form-field>
        <ui-checkbox
          :id="`${idPrefix}-checkbox-indeterminate`"
          :cssOnly="cssOnly"
          :indeterminate="indeterminate"
        ></ui-checkbox>
        <label :for="`${idPrefix}-checkbox-indeterminate`">Indeterminate checkbox</label>
      </ui-form-field>
      <div class="demo-toggle-group">
        <ui-button outlined @click="$balmUI.onChange('indeterminate', !indeterminate)">
          Toggle
          <code>indeterminate</code>
        </ui-button>
      </div>
    </div>
    <ui-form-field class="demo-checkbox--custom-all" block>
      <ui-checkbox block :id="`${idPrefix}-checkbox-custom-all`" :cssOnly="cssOnly"></ui-checkbox>
      <label
        :for="`${idPrefix}-checkbox-custom-all`"
      >Custom colored checkbox (stroke, fill, ripple, and focus)</label>
    </ui-form-field>
    <ui-form-field class="demo-checkbox--custom-stroke-and-fill" block>
      <ui-checkbox block :id="`${idPrefix}-checkbox-custom-stroke-and-fill`" :cssOnly="cssOnly"></ui-checkbox>
      <label
        :for="`${idPrefix}-checkbox-custom-stroke-and-fill`"
      >Custom colored checkbox (stroke and fill only)</label>
    </ui-form-field>
  </div>
</template>

<script>
export default {
  props: {
    cssOnly: {
      type: Boolean,
      default: false
    },
    code: Array
  },
  data() {
    return {
      alignEnd: false,
      indeterminate: true,
      disabled: true
    };
  },
  computed: {
    categoryNumber() {
      return this.cssOnly ? 2 : 1;
    },
    idPrefix() {
      return this.cssOnly ? 'basic' : 'native-js';
    }
  }
};
</script>
