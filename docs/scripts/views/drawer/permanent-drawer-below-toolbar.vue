<template>
  <div class="demo-container page--drawer page--permanent-drawer-below-toolbar">
    <!-- App bar -->
    <ui-top-app-bar content-selector=".demo-content">
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button :class="navIconClass" icon="arrow_back" @click="$router.back()"></ui-icon-button>
      </template>
      Permanent Drawer Below Toolbar
    </ui-top-app-bar>
    <!-- Content -->
    <div class="demo-content">
      <!-- Drawer -->
      <ui-drawer type="permanent" viewport-height>
        <ui-drawer-header>
          <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)">Title</ui-drawer-title>
          <ui-drawer-subtitle :class="$theme.getTextClass('secondary', $store.theme)">Subtitle</ui-drawer-subtitle>
        </ui-drawer-header>
        <ui-drawer-content>
          <ui-nav>
            <ui-nav-item
              href="javascript:void(0)"
              active
              :class="$theme.getTextClass('primary', $store.theme)"
            >Item {{ 0 }}</ui-nav-item>
            <ui-nav-item
              v-for="i in 12"
              :key="i"
              href="javascript:void(0)"
              :class="$theme.getTextClass('primary', $store.theme)"
            >Item {{ i }}</ui-nav-item>
          </ui-nav>
        </ui-drawer-content>
      </ui-drawer>
      <!-- App content -->
      <div :class="[$tt('body1'), 'demo-app-content']">
        <h6>Permanent Drawer</h6>
        <p>It sits to the left of this content.</p>
        <ui-snippet :code="$store.demos[2]"></ui-snippet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Permanent Drawer Below Toolbar'
  },
  created() {
    this.$store.initSnippet('drawer', 2);
  }
};
</script>
