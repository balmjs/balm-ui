<template>
  <div class="demo-switch">
    <div class="component-title">
      <h3>Switch</h3>
    </div>

    // TODO
    <ui-switch :model="open" @change="onSwitchChange">On/Off</ui-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: '',
      open2: ''
    };
  },
  methods: {
    onSwitchChange(val) {
      this.open = val;
    }
  }
};
</script>
