<template>
  <div class="demo--default-flexible-toolbar">
    <ui-toolbar defaultFlexible @change="onChange">
      <ui-toolbar-row>
        <ui-toolbar-section align="start">
          <ui-toolbar-anchor type="menu"></ui-toolbar-anchor>
          <ui-toolbar-title>Title</ui-toolbar-title>
        </ui-toolbar-section>
        <ui-toolbar-section align="end">
          <ui-toolbar-anchor alt="Download">file_download</ui-toolbar-anchor>
          <ui-toolbar-anchor alt="Print this page">print</ui-toolbar-anchor>
          <ui-toolbar-anchor alt="Bookmark this page">bookmark</ui-toolbar-anchor>
        </ui-toolbar-section>
      </ui-toolbar-row>
    </ui-toolbar>
    <main>
      <p class="demo-paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
      </p>
      <p class="demo-paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
      </p>
      <p class="demo-paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
      </p>
    </main>
    <footer>
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
