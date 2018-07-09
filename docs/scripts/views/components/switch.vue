<template>
  <div class="demo--switch">
    <section class="hero">
      <ui-switch v-model="toggle">{{ toggle }}</ui-switch>
    </section>

    <section class="example">
      <h2>Enabled</h2>
      <div class="demo-switch-wrapper">
        <ui-switch id="basic-switch"
          :trueValue="1"
          :falseValue="0"
          v-model="toggle1">
          {{ toggle1 }}
        </ui-switch>
      </div>
      <div class="demo-switch-wrapper">
        <ui-switch id="basic-switch"
          class="demo-switch--custom"
          trueValue="on"
          falseValue="off"
          v-model="toggle2">
          {{ toggle2 }} (custom color)
        </ui-switch>
      </div>
    </section>

    <section class="example">
      <h2>Disabled</h2>
      <div class="demo-switch-wrapper">
        <ui-switch disabled>off/on</ui-switch>
      </div>
    </section>

    <!-- <ui-apidoc name="switch"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Switch'
  },
  mixins: [snippets],
  data() {
    return {
      toggle: false,
      toggle1: 0,
      toggle2: 'on'
    };
  },
  created() {
    // this.showCode('switch');
  }
};
</script>
