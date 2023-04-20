<template>
  <docs-page class="demo-content" name="side-sheet" demo-count="1">
    <template #hero>
      <h3 :class="$tt('headline3')">Side Sheet</h3>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-button @click="$balmUI.onShow('show')">Show action sheet</ui-button>
      <ui-side-sheet v-model="show" closable>
        <template #title>Title</template>
        <ui-list>
          <ui-item v-for="i in 3" :key="i">Action {{ i }}</ui-item>
        </ui-list>
        <template #actions>
          <ui-button raised>Save</ui-button>
          <ui-button outlined>Cancel</ui-button>
        </template>
      </ui-side-sheet>
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
