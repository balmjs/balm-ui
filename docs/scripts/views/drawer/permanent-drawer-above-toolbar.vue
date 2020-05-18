<template>
  <div class="demo-container page--drawer page--permanent-drawer-above-toolbar">
    <!-- Drawer -->
    <ui-drawer type="permanent" viewportHeight>
      <ui-drawer-header>
        <ui-drawer-title>Title</ui-drawer-title>
        <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <template #default="{ itemClass, activeClass }">
            <a :class="[itemClass, activeClass]">Item {{ 0 }}</a>
            <a v-for="i in 12" :key="i" :class="itemClass">Item {{ i }}</a>
          </template>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <!-- Content -->
    <div class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar contentSelector=".demo-app-content" class="demo-app-bar">
        <template #nav-icon="{ navIconClass }">
          <ui-icon-button
            :class="navIconClass"
            icon="arrow_back"
            @click="$router.back()"
          ></ui-icon-button>
        </template>
        Permanent Drawer Above Toolbar
      </ui-top-app-bar>
      <!-- App content -->
      <div :class="[$tt('body1'), 'demo-app-content']">
        <h6>Permanent Drawer</h6>
        <p>It sits to the left of this content.</p>
        <ui-snippet :code="$store.demos[1]"></ui-snippet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Permanent Drawer Above Toolbar'
  },
  created() {
    this.$store.initDocs('drawer', {
      demoCount: 5
    });
  }
};
</script>
