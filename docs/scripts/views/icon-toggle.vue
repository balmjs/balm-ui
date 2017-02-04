<template>
  <div class="demo-icon-toggle">
    <div class="component-title">
      <h3>Icon Toggle</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-icon-toggle value="X" :model="icons" @change="onIconsChange">X</ui-icon-toggle>
        <ui-icon-toggle value="Y" :model="icons" @change="onIconsChange">Y</ui-icon-toggle>
        <ui-icon-toggle value="Z" :model="icons" @change="onIconsChange">Z</ui-icon-toggle>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="icon-toggle"></ui-apidoc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [],
      demoCount: 1,
      code: []
    };
  },
  methods: {
    onIconsChange(val) {
      this.icons = val;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/icon-toggle/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>

<style>
.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
  color: red;
}
</style>
