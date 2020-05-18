<template>
  <div
    class="demo-container page--drawer page--dismissible-drawer-full-height-drawer"
  >
    <!-- Drawer -->
    <ui-drawer type="dismissible" viewportHeight navId="demo-menu">
      <ui-drawer-header>
        <ui-drawer-title>Title</ui-drawer-title>
        <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
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
    <!-- Content -->
    <ui-drawer-app-content class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar
        class="demo-app-bar"
        contentSelector=".demo-app-content"
        navId="demo-menu"
        >Dismissible Drawer Full Height Drawer</ui-top-app-bar
      >
      <!-- App content -->
      <div :class="[$tt('body1'), 'demo-app-content']">
        <h6>Dismissible Drawer</h6>
        <p>Click the menu icon above to open and close the drawer.</p>
        <ui-snippet :code="$store.demos[3]"></ui-snippet>
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
