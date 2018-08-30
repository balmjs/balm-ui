<template>
  <div class="demo--waterfall-toolbar-fix-last-row">
    <ui-toolbar
      class="demo-toolbar"
      fixedLastrow
      waterfall
      defaultFlexible
      @change="onChange">
      <ui-toolbar-row class="demo-toolbar__row--with-image">
        <ui-toolbar-section align="start">
          <ui-toolbar-anchor type="menu"></ui-toolbar-anchor>
          <ui-toolbar-title>Title</ui-toolbar-title>
        </ui-toolbar-section>
      </ui-toolbar-row>
      <ui-toolbar-row>
        <ui-toolbar-section align="end">
          <ui-toolbar-anchor alt="Download">file_download</ui-toolbar-anchor>
          <ui-toolbar-anchor alt="Print this page">print</ui-toolbar-anchor>
          <ui-toolbar-anchor alt="Bookmark this page">bookmark</ui-toolbar-anchor>
        </ui-toolbar-section>
      </ui-toolbar-row>
    </ui-toolbar>
    <main>
      <div class="mdc-toolbar-fixed-adjust">
        <p v-for="i in 12" :key="i" class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
      </div>
    </main>
    <footer class="demo-toolbar-floating-footer">
      <span>Flexible Expansion Ratio: <span id="ratio">{{ ratio }}</span></span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: 0
    };
  },
  methods: {
    onChange(ratio) {
      this.ratio = ratio.toFixed(2);
    }
  }
};
</script>

<style scoped>
.demo-toolbar {
  background-color: #141395;
  transition: background-color 0.2s ease;
}
.demo-toolbar.mdc-toolbar--flexible-space-minimized {
  background-color: #3f51b5;
}
</style>
