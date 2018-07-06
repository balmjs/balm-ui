<template>
  <div>
    <ui-radio :id="`${idPrefix}-label-below`"
      :name="`${idPrefix}-labels`"
      :value="1"
      v-model="controls.labelsType">
      Labels below images
    </ui-radio>
    <ui-radio :id="`${idPrefix}-label-protected`"
      :name="`${idPrefix}-labels`"
      :value="2"
      v-model="controls.labelsType">
      Labels over images with text protection
    </ui-radio>
    <ui-radio :id="`${idPrefix}-label-protected`"
      :name="`${idPrefix}-labels`"
      :value="0"
      v-model="controls.labelsType">
      No labels
    </ui-radio>
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
