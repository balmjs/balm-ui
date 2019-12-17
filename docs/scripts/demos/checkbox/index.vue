<template>
  <div>
    <div>
      <ui-form-field :alignEnd="alignEnd">
        <ui-checkbox :id="`basic-checkbox`"></ui-checkbox>
        <label :for="`basic-checkbox`">Default checkbox</label>
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
        <ui-checkbox
          :id="`basic-checkbox-disabled`"
          :disabled="disabled"
        ></ui-checkbox>
        <label :for="`basic-checkbox-disabled`">Disabled checkbox</label>
      </ui-form-field>
      <div class="demo-toggle-group">
        <ui-button outlined @click="$balmUI.onChange('disabled', !disabled)">
          Toggle
          <code>disabled</code>
        </ui-button>
      </div>
    </div>
    <ui-form-field>
      <ui-checkbox
        :id="`basic-checkbox-indeterminate`"
        :indeterminate="indeterminate"
      ></ui-checkbox>
      <label :for="`basic-checkbox-indeterminate`"
        >Indeterminate checkbox</label
      >
    </ui-form-field>
    <div class="demo-toggle-group">
      <ui-button
        outlined
        @click="$balmUI.onChange('indeterminate', !indeterminate)"
      >
        Toggle
        <code>indeterminate</code>
      </ui-button>
    </div>
    <ui-form-field class="demo-checkbox--custom-all" block>
      <ui-checkbox block :id="`basic-checkbox-custom-all`"></ui-checkbox>
      <label :for="`basic-checkbox-custom-all`"
        >Custom colored checkbox (stroke, fill, ripple, and focus)</label
      >
    </ui-form-field>
    <ui-form-field class="demo-checkbox--custom-stroke-and-fill" block>
      <ui-checkbox
        block
        :id="`basic-checkbox-custom-stroke-and-fill`"
      ></ui-checkbox>
      <label :for="`basic-checkbox-custom-stroke-and-fill`"
        >Custom colored checkbox (stroke and fill only)</label
      >
    </ui-form-field>
  </div>
</template>

<script>
export default {
  props: {
    code: Array
  },
  data() {
    return {
      alignEnd: false,
      indeterminate: true,
      disabled: true
    };
  }
};
</script>
