<template>
  <div class="demo--drawer demo--dismissible-drawer">
    <ui-drawer type="dismissible" menuSelector="#demo-menu">
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

    <ui-drawer-app-content class="demo-main">
      <ui-top-app-bar
        contentSelector=".demo-content"
        class="demo-top-app-bar"
        v-shadow="4"
        >Dismissible Drawer</ui-top-app-bar
      >

      <div :class="[$tt('body1'), 'demo-content']">
        <div :class="$tt('body2')">
          <h1 :class="$tt('headline4')">Dismissible Drawer</h1>
          <p>Click the menu icon above to open and close the drawer.</p>
          <ui-snippet :code="$store.demos[3]"></ui-snippet>
        </div>
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
      demoCount: 4
    });
  }
};
</script>
