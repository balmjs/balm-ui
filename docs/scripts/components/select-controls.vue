<template>
  <div>
    <div>
      <ui-checkbox :id="`${idPrefix}-rtl`" v-model="controls.rtl">RTL</ui-checkbox>
    </div>
    <div>
      <ui-checkbox :id="`${idPrefix}-alternate-colors`" v-model="controls.customColor">Alternate Colors</ui-checkbox>
    </div>
    <div>
      <ui-checkbox :id="`${idPrefix}-disabled`" v-model="controls.disabled">Disabled</ui-checkbox>
    </div>
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
