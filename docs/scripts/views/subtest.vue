<template>
  <div>
    <ui-button @click="$balmUI.onShow('open')">Child Test</ui-button>
    <ui-dialog v-model="open">
      <ui-dialog-content>Dialog</ui-dialog-content>
      <ui-dialog-actions>
        <ui-button @click="onClose">Close</ui-button>
      </ui-dialog-actions>
    </ui-dialog>
  </div>
</template>

<script>
export default {
  name: 'Subtest',
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClose() {
      this.$balmUI.onHide('open');
      this.$emit('close');
    }
  }
};
</script>
