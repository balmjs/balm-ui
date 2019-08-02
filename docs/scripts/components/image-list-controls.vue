<template>
  <div>
    <ui-form-field>
      <ui-radio
        :id="`${idPrefix}-label-below`"
        :name="`${idPrefix}-labels`"
        :value="1"
        v-model="controls.labelsType"
      ></ui-radio>
      <label :for="`${idPrefix}-label-below`">Labels below images</label>
    </ui-form-field>

    <ui-form-field>
      <ui-radio
        :id="`${idPrefix}-label-protected`"
        :name="`${idPrefix}-labels`"
        :value="2"
        v-model="controls.labelsType"
      ></ui-radio>
      <label :for="`${idPrefix}-label-protected`">Labels over images with text protection</label>
    </ui-form-field>

    <ui-form-field>
      <ui-radio
        :id="`${idPrefix}-label-none`"
        :name="`${idPrefix}-labels`"
        :value="0"
        v-model="controls.labelsType"
      ></ui-radio>
      <label :for="`${idPrefix}-label-none`">No labels</label>
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
      default: 'standard'
    },
    controls: {
      type: Object,
      default() {
        return {
          labelsType: 1
        };
      }
    }
  }
};
</script>
