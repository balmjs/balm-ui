<template>
  <div class="demo--switch">
    <section class="hero">
      <ui-switch></ui-switch>
    </section>

    <section class="example">
      <h2>Switch on Light Theme</h2>
      <ui-switch id="basic-switch" :model="value1" @change="onChange('value1', $event)">off/on</ui-switch>
    </section>
    <section class="example">
      <h2>Switch on Light Theme - Disabled</h2>
      <ui-switch disabled id="basic-switch--disabled">off/on</ui-switch>
    </section>

    <section class="example mdc-theme--dark">
      <h2>Switch on Dark Theme</h2>
      <ui-switch id="basic-switch--dark">off/on</ui-switch>
    </section>

    <section class="example mdc-theme--dark">
      <h2>Switch on Dark Theme - Disabled</h2>
      <ui-switch disabled id="basic-switch--dark--disabled">off/on</ui-switch>
    </section>

    <!-- <ui-apidoc name="switch"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      value1: false
    };
  },
  created() {
    // this.showCode('switch');
  }
};
</script>
