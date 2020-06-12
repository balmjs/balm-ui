<template>
  <div>
    <ui-form-field>
      <ui-radio
        :id="`${idPrefix}-label-below`"
        v-model="controls.labelsType"
        :name="`${idPrefix}-labels`"
        :value="1"
      ></ui-radio>
      <label :for="`${idPrefix}-label-below`">Labels below images</label>
    </ui-form-field>

    <ui-form-field>
      <ui-radio
        :id="`${idPrefix}-label-protected`"
        v-model="controls.labelsType"
        :name="`${idPrefix}-labels`"
        :value="2"
      ></ui-radio>
      <label :for="`${idPrefix}-label-protected`">Labels over images with text protection</label>
    </ui-form-field>

    <ui-form-field>
      <ui-radio
        :id="`${idPrefix}-label-none`"
        v-model="controls.labelsType"
        :name="`${idPrefix}-labels`"
        :value="0"
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
