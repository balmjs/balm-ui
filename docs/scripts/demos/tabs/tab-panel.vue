<template>
  <section class="demo-wrapper">
    <h6 :class="$tt('headline6')">1.4 Tab Panel</h6>

    <ui-tabs v-model="active">
      <ui-tab>Tab One</ui-tab>
      <ui-tab>Tab Two</ui-tab>
      <ui-tab>Tab Three</ui-tab>
    </ui-tabs>

    <ui-panels v-model="active">
      <ui-panel>Panel One</ui-panel>
      <ui-panel>Panel Two</ui-panel>
      <ui-panel>Panel Three</ui-panel>
    </ui-panels>
    <ui-snippet :code="$store.demos[9]"></ui-snippet>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
