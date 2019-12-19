<template>
  <div>
    <ui-form-field block>
      <ui-checkbox :id="`${idPrefix}-rtl`" v-model="controls.rtl"></ui-checkbox>
      <label :for="`${idPrefix}-rtl`">RTL</label>
    </ui-form-field>
    <ui-form-field block>
      <ui-checkbox
        :id="`${idPrefix}-alternate-colors`"
        v-model="controls.customColor"
      ></ui-checkbox>
      <label :for="`${idPrefix}-alternate-colors`">Alternate Colors</label>
    </ui-form-field>
    <ui-form-field block>
      <ui-checkbox
        :id="`${idPrefix}-disabled`"
        v-model="controls.disabled"
      ></ui-checkbox>
      <label :for="`${idPrefix}-disabled`">Disabled</label>
    </ui-form-field>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'controls',
    event: 'change'
  },
  props: {
    idPrefix: {
      type: String,
      default: 'default'
    },
    controls: {
      type: Object,
      default() {
        return {
          rtl: false,
          customColor: false,
          disabled: false
        };
      }
    }
  }
};
</script>
