<template>
  <ui-form>
    <ui-form-field>
      <ui-checkbox :id="`${idPrefix}-rtl`" v-model="controls.rtl"></ui-checkbox>
      <label :for="`${idPrefix}-rtl`">RTL</label>
    </ui-form-field>
    <ui-form-field>
      <ui-checkbox
        v-model="controls.customColor"
        :input-id="`${idPrefix}-alternate-colors`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-alternate-colors`">Alternate Colors</label>
    </ui-form-field>
    <ui-form-field>
      <ui-checkbox
        v-model="controls.disabled"
        :input-id="`${idPrefix}-disabled`"
      ></ui-checkbox>
      <label :for="`${idPrefix}-disabled`">Disabled</label>
    </ui-form-field>
  </ui-form>
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
