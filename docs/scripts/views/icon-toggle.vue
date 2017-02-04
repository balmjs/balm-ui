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
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      icons: []
    };
  },
  methods: {
    onIconsChange(val) {
      this.icons = val;
    }
  },
  created() {
    this.showCode('icon-toggle');
  }
};
</script>

<style>
.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
  color: red;
}
</style>
