<template>
  <div class="demo-divider">
    <div class="component-title">
      <h3>Divider</h3>
      <p>Some guys like to use dividers， so we made this component.</p>
    </div>

    <div class="snippet-group w320">
      <ui-divider>divider</ui-divider>
    </div>

    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-divider>diiiiiiiiiiivider!</ui-divider>

    <p>We even made a vertical divider.</p>
    <div class="snippet-group">
      <div class="demo-divider-container">
        <div class="a"></div>
        <ui-divider type="vertical">or</ui-divider>
        <div class="b"></div>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <ui-divider>diiiiiiiiiiivider!</ui-divider>

    <p>Sometimes you may want to change the color of the dividing line, there is a  simple way here:</p>

    <div class="snippet-group w320 colored">
      <ui-divider>divider</ui-divider>
    </div>

    <ui-markdown :text="code[2]"></ui-markdown>

    <ui-apidoc name="divider"></ui-apidoc>
  </div>
</template>
<style scoped>

  .snippet-group.w320 {
    width: 320px;
  }

  .snippet-group.colored {
    color: rgb(255,64,129);
  }

  .demo-divider-container {
    height: 100px;
    width: 280px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border: 1px solid currentColor;
  }
  .demo-divider-container .a, .demo-divider-container .b {
    height: 80px;
    width: 80px;
    background-color: rgb(63,81,181);
  }

  .demo-divider-container .b {
    background-color: rgb(255,64,129);
  }
</style>
<script type="text/babel">
  import snippets from '../mixins/snippets';

  export default {
    mixins: [snippets],
    created() {
      this.showCode('divider', 3);
    },
  }
</script>
