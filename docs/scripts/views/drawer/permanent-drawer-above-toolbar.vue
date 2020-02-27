<template>
  <div class="demo--drawer demo--permanent-drawer-above-toolbar">
    <ui-drawer type="permanent">
      <ui-drawer-header>
        <ui-drawer-title>{{ title }}</ui-drawer-title>
        <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-common-content></ui-drawer-common-content>
    </ui-drawer>

    <main class="demo-main">
      <ui-top-app-bar
        contentSelector=".demo-content"
        class="demo-top-app-bar"
        v-shadow="4"
      >
        <template #nav-icon>
          <ui-icon @click="$router.back()">arrow_back</ui-icon>
        </template>
        Permanent Drawer Above Toolbar
      </ui-top-app-bar>

      <div :class="[$tt('body1'), 'demo-content']">
        <div :class="$tt('body2')">
          <h1 :class="$tt('headline4')">Permanent Drawer</h1>
          <p>It sits to the left of this content.</p>
          <ui-snippet :code="$store.demos[1]"></ui-snippet>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UiDrawerCommonContent from './drawer-common-content';
import DrawerMixin from '@/mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Permanent Drawer Above Toolbar'
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
