<template>
  <docs-page class="demo-content" name="bottom-sheet" demo-count="1">
    <template #hero>
      <h3 :class="$tt('headline3')">Bottom Sheet</h3>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-button @click="show = true">Show action sheet</ui-button>
      <ui-bottom-sheet v-model="show">
        <ui-list>
          <ui-item v-for="i in 3" :key="i">Action {{ i }}</ui-item>
        </ui-list>
      </ui-bottom-sheet>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
