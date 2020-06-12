<template>
  <ui-page name="switch" demo-count="1">
    <template #hero>
      <ui-form-field>
        <ui-switch id="hero-switch" v-model="toggle"></ui-switch>
        <label for="hero-switch">{{ toggle }}</label>
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Enabled</h6>
      <div class="demo">
        <ui-form-field>
          <ui-switch id="basic-switch" v-model="toggle1" :trueValue="1" :falseValue="0"></ui-switch>
          <label for="basic-switch">{{ toggle1 }}</label>
        </ui-form-field>
      </div>
      <br />
      <div class="demo">
        <ui-form-field>
          <ui-switch
            id="basic-switch-custom"
            v-model="toggle2"
            class="demo-switch--custom"
            true-value="on"
            false-value="off"
          ></ui-switch>
          <label for="basic-switch-custom">{{ toggle2 }} (custom color)</label>
        </ui-form-field>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Disabled</h6>
      <div class="demo">
        <ui-form-field>
          <ui-switch id="basic-switch--disabled" disabled></ui-switch>
          <label for="basic-switch--disabled">off/on</label>
        </ui-form-field>
      </div>
    </section>
  </ui-page>
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
  },
  mounted() {
    setTimeout(() => {
      this.toggle = true;
    }, 1e3);
  }
};
</script>
