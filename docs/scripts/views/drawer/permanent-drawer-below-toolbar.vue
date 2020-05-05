<template>
  <div class="demo-container demo--drawer demo--permanent-drawer-below-toolbar">
    <!-- App bar -->
    <ui-top-app-bar contentSelector=".demo-content">
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button
          :class="navIconClass"
          icon="arrow_back"
          @click="$router.back()"
        ></ui-icon-button>
      </template>
      Permanent Drawer Below Toolbar
    </ui-top-app-bar>
    <!-- Content -->
    <div class="demo-content">
      <!-- Drawer -->
      <ui-drawer type="permanent" viewportHeight>
        <ui-drawer-header>
          <ui-drawer-title>{{ title }}</ui-drawer-title>
          <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
        </ui-drawer-header>
        <ui-drawer-common-content></ui-drawer-common-content>
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
import UiDrawerCommonContent from './drawer-common-content';
import DrawerMixin from '@/mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Permanent Drawer Below Toolbar'
  },
  components: {
    UiDrawerCommonContent
  },
  mixins: [DrawerMixin],
  created() {
    this.$store.initDocs('drawer', {
      demoCount: 5
    });
  }
};
</script>
