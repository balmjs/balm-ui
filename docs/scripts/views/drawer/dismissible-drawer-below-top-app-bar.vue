<template>
  <div class="demo-container page--drawer page--dismissible-drawer-below-top-app-bar">
    <!-- App bar -->
    <ui-top-app-bar
      class="demo-app-bar"
      content-selector=".demo-app-content"
      nav-id="demo-menu"
    >Dismissible Drawer Below Top App Bar</ui-top-app-bar>
    <!-- Drawer -->
    <ui-drawer type="dismissible" viewport-height nav-id="demo-menu">
      <ui-drawer-header>
        <ui-drawer-header>
          <ui-drawer-title>Title</ui-drawer-title>
          <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
        </ui-drawer-header>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <template #default="{ itemClass, activeClass }">
            <a :class="[itemClass, activeClass]" @click="$router.back()">
              <ui-item-first-content>
                <ui-icon>arrow_back</ui-icon>
              </ui-item-first-content>
              <ui-item-text-content>Back</ui-item-text-content>
            </a>
            <ui-list-divider></ui-list-divider>
            <a v-for="i in 12" :key="i" :class="itemClass">Item {{ i }}</a>
          </template>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <!-- App content -->
    <ui-drawer-app-content :class="[$tt('body1'), 'demo-app-content']">
      <!-- Content -->
      <div class="demo-content">
        <h6>Dismissible Drawer</h6>
        <p>Click the menu icon above to open and close the drawer.</p>
        <ui-snippet :code="$store.demos[4]"></ui-snippet>
      </div>
    </ui-drawer-app-content>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Dismissible Drawer'
  },
  created() {
    this.$store.initDocs('drawer', {
      demoCount: 5
    });
  }
};
</script>
