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
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      open: true
    };
  },
  methods: {
    onSwitchChange(val) {
      this.open = val;
    }
  },
  created() {
    this.showCode('switch');
  }
};
</script>
