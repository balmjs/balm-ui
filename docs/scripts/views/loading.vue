<template>
  <div class="demo-loading">
    <div class="component-title">
      <h3>Loading</h3>
      <p>Indicate loading and progress states.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-loading active></ui-loading>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-loading :type="1" active></ui-loading>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <ui-apidoc name="loading"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    this.showCode('loading', 2);
  }
};
</script>

