<template>
  <div class="demo-switch">
    <div class="component-title">
      <h3>Switch</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-switch :model="open" @change="onSwitchChange">{{ open ? 'On' : 'Off' }}</ui-switch>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="switch"></ui-apidoc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      demoCount: 1,
      code: []
    };
  },
  methods: {
    onSwitchChange(val) {
      this.open = val;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/switch/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
