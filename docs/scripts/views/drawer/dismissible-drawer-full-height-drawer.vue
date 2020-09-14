<template>
  <div class="demo-container page--drawer page--dismissible-drawer-full-height-drawer">
    <!-- Drawer -->
    <ui-drawer type="dismissible" viewport-height nav-id="demo-menu">
      <ui-drawer-header>
        <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)">Title</ui-drawer-title>
        <ui-drawer-subtitle :class="$theme.getTextClass('secondary', $store.theme)">Subtitle</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item activated @click="$router.back()">
            <ui-item-first-content :class="$theme.getTextClass('secondary', $store.theme)">
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content :class="$theme.getTextClass('primary', $store.theme)">Back</ui-item-text-content>
          </ui-nav-item>
          <ui-list-divider></ui-list-divider>
          <ui-nav-item
            v-for="i in 12"
            :key="i"
            :class="$theme.getTextClass('primary', $store.theme)"
          >Item {{ i }}</ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <!-- Content -->
    <ui-drawer-app-content class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar
        class="demo-app-bar"
        content-selector=".demo-app-content"
        nav-id="demo-menu"
      >Dismissible Drawer Full Height Drawer</ui-top-app-bar>
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
    this.$store.initSnippet('drawer', 3);
  }
};
</script>
