<template>
  <div class="demo-container page--drawer page--permanent-drawer-above-toolbar">
    <!-- Drawer -->
    <ui-drawer type="permanent" viewport-height>
      <ui-drawer-header>
        <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)">
          Title
        </ui-drawer-title>
        <ui-drawer-subtitle
          :class="$theme.getTextClass('secondary', $store.theme)"
        >
          Subtitle
        </ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item
            href="javascript:void(0)"
            active
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Item {{ 0 }}
          </ui-nav-item>
          <ui-nav-item
            v-for="i in 12"
            :key="i"
            href="javascript:void(0)"
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Item {{ i }}
          </ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <!-- Content -->
    <div class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar content-selector=".demo-app-content" class="demo-app-bar">
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
    this.$store.initSnippet('drawer', 1);
  },
  mounted() {
    this.$store.setTheme();
  }
};
</script>
