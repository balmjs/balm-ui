<template>
  <div class="demo-grid">
    <div class="component-title">
      <h3>Grid</h3>
    </div>

    <div class="snippet-demo">
      <ui-grid>
        <ui-cell v-for="i in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]" :col="i">{{ i }}</ui-cell>
      </ui-grid>
      <ui-grid>
        <ui-cell v-for="i in [4, 4, 4]" :col="i">{{ i }}</ui-cell>
      </ui-grid>
      <ui-grid>
        <ui-cell :col="6">6</ui-cell>
        <ui-cell :col="4">4</ui-cell>
        <ui-cell :col="2">2</ui-cell>
      </ui-grid>
      <ui-grid>
        <ui-cell :col="{col:6, tablet:8}">6 (8 tablet)</ui-cell>
        <ui-cell :col="{col:4, tablet:6}">4 (6 tablet)</ui-cell>
        <ui-cell :col="{col:2, phone:4}">2 (4 phone)</ui-cell>
      </ui-grid>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="grid"></ui-apidoc>
    <ui-apidoc name="cell"></ui-apidoc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demoCount: 1,
      code: []
    };
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/grid/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>

<style scoped>
.demo-grid .mdl-cell {
  box-sizing: border-box;
  background-color: #BDBDBD;
  height: 200px;
  padding-left: 8px;
  padding-top: 4px;
  color: white;
}

.snippet-demo .mdl-grid:first-of-type .mdl-cell {
  height: 50px;
}
</style>
