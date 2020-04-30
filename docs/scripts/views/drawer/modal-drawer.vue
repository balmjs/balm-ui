<template>
  <div class="demo-container demo--drawer demo--modal-drawer">
    <!-- Drawer -->
    <ui-drawer type="modal" v-model="open" navId="demo-menu">
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
    <ui-drawer-backdrop></ui-drawer-backdrop>
    <!-- Content -->
    <main class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar
        fixed
        contentSelector=".demo-app-content"
        navId="demo-menu"
        >Modal Drawer</ui-top-app-bar
      >
      <!-- App content -->
      <div :class="[$tt('body1'), 'demo-app-content']">
        <h6>Modal Drawer</h6>
        <p>Click the menu icon above to open.</p>
        <ui-snippet :code="$store.demos[4]"></ui-snippet>
      </div>
    </main>
  </div>
</template>

<script>
import UiDrawerCommonContent from './drawer-common-content';
import DrawerMixin from '@/mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Modal Drawer'
  },
  components: {
    UiDrawerCommonContent
  },
  mixins: [DrawerMixin],
  created() {
    this.$store.initDocs('drawer', {
      demoCount: 4
    });
  }
};
</script>
