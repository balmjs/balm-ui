<template>
  <ui-page-structure name="switch" demoCount="1">
    <template #hero>
      <ui-form-field>
        <ui-switch id="hero-switch" v-model="toggle"></ui-switch>
        <label for="hero-switch">{{ toggle }}</label>
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="example">
      <h2>1.1 Enabled</h2>
      <div class="demo-switch-wrapper">
        <ui-switch
          id="basic-switch"
          :trueValue="1"
          :falseValue="0"
          v-model="toggle1"
        ></ui-switch>
        <label for="basic-switch">{{ toggle1 }}</label>
      </div>
      <div class="demo-switch-wrapper">
        <ui-switch
          id="basic-switch-custom"
          class="demo-switch--custom"
          trueValue="on"
          falseValue="off"
          v-model="toggle2"
        ></ui-switch>
        <label for="basic-switch-custom">{{ toggle2 }} (custom color)</label>
      </div>
    </section>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <section class="example">
      <h2>1.2 Disabled</h2>
      <div class="demo-switch-wrapper">
        <ui-switch id="basic-switch--disabled" disabled></ui-switch>
        <label for="basic-switch--disabled">off/on</label>
      </div>
    </section>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Switch'
  },
  data() {
    return {
      toggle: false,
      toggle1: 0,
      toggle2: 'on'
    };
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.toggle = true;
  //   }, 1e3);
  // }
};
</script>
