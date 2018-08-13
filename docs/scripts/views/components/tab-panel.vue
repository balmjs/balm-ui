<template>
  <section class="example">
    <h5 :class="$tt('headline4')">1.4 Tab Panel</h5>

    <ui-tab-bar v-model="active">
      <ui-tab>Tab One</ui-tab>
      <ui-tab>Tab Two</ui-tab>
      <ui-tab>Tab Three</ui-tab>
    </ui-tab-bar>

    <ui-panels v-model="active">
      <ui-panel>Panel One</ui-panel>
      <ui-panel>Panel Two</ui-panel>
      <ui-panel>Panel Three</ui-panel>
    </ui-panels>
    <ui-accordion>
      <ui-markdown :text="code[9]"></ui-markdown>
    </ui-accordion>
  </section>
</template>

<script>
export default {
  props: {
    code: Array
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
