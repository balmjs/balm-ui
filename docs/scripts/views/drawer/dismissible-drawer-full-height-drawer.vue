<template>
  <div
    class="demo-container demo--drawer demo--dismissible-drawer-full-height-drawer"
  >
    <!-- Drawer -->
    <ui-drawer type="dismissible" navId="demo-menu">
      <ui-drawer-header>
        <ui-drawer-title>{{ title }}</ui-drawer-title>
        <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
      </ui-drawer-header>
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
    <!-- Content -->
    <ui-drawer-app-content class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar
        contentSelector=".demo-app-content"
        navId="demo-menu"
        class="demo-app-bar"
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
