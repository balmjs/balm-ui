<template>
  <docs-page name="switch" demo-count="1">
    <template #hero>
      <ui-form-field>
        <ui-switch v-model="toggle" input-id="hero-switch"></ui-switch>
        <label for="hero-switch">{{ toggle }}</label>
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Enabled</h6>
      <div class="demo">
        <ui-form-field>
          <ui-switch
            v-model="toggle1"
            input-id="basic-switch"
            :true-value="1"
            :false-value="0"
            @selected="balmUI.onChange('toggle1Label', $event)"
          ></ui-switch>
          <label for="basic-switch">{{ toggle1Label }}</label>
        </ui-form-field>
      </div>
      <br />
      <div class="demo">
        <ui-form-field>
          <ui-switch
            v-model="toggle2"
            input-id="basic-switch-custom"
            class="demo-switch--custom"
            true-value="on"
            false-value="off"
            @selected="balmUI.onChange('toggle2Label', $event)"
          ></ui-switch>
          <label for="basic-switch-custom">
            {{ toggle2Label }} (custom color)
          </label>
        </ui-form-field>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Disabled</h6>
      <div class="demo">
        <ui-form-field>
          <ui-switch input-id="basic-switch--disabled" disabled></ui-switch>
          <label for="basic-switch--disabled">off/on</label>
        </ui-form-field>
      </div>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Switch'
  },
  setup() {
    const balmUI = useEvent();

    return {
      balmUI
    };
  },
  data() {
    return {
      toggle: false,
      toggle1: false,
      toggle1Label: 0,
      toggle2: true,
      toggle2Label: 'on'
    };
  },
  mounted() {
    setTimeout(() => {
      this.toggle = true;
    }, 1e3);
  }
};
</script>
