<template>
  <div
    class="demo-container demo--drawer demo--dismissible-drawer-below-top-app-bar"
  >
    <!-- App bar -->
    <ui-top-app-bar
      contentSelector=".demo-content"
      navId="demo-menu"
      class="demo-app-bar"
      >Dismissible Drawer Below Top App Bar</ui-top-app-bar
    >
    <!-- Drawer -->
    <ui-drawer type="dismissible" navId="demo-menu">
      <ui-drawer-header></ui-drawer-header>
      <ui-drawer-common-content>
        <ui-item @click="$router.back()">
          <ui-item-first-content>
            <ui-icon>arrow_back</ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>Back</ui-item-text-content>
        </ui-item>
        <ui-list-divider></ui-list-divider>
      </ui-drawer-common-content>
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
import UiDrawerCommonContent from './drawer-common-content';
import DrawerMixin from '@/mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Dismissible Drawer'
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
