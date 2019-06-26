<template>
  <div class="demo--drawer demo--permanent-drawer-below-toolbar">
    <ui-top-app-bar contentSelector=".demo-main">
      <template #nav-icon>
        <ui-icon @click="$router.back()">arrow_back</ui-icon>
      </template>Permanent Drawer Below Toolbar
    </ui-top-app-bar>

    <main class="demo-main">
      <ui-permanent-drawer>
        <ui-drawer-header>
          <ui-drawer-title>{{ title }}</ui-drawer-title>
          <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
        </ui-drawer-header>
        <ui-drawer-common-conntent></ui-drawer-common-conntent>
      </ui-permanent-drawer>

      <div :class="[$tt('body1'), 'demo-content']">
        <div :class="$tt('body2')">
          <h1 :class="$tt('headline4')">Permanent Drawer</h1>
          <p>It sits to the left of this content.</p>
          <ui-accordion>
            <ui-markdown :code="code[2]"></ui-markdown>
          </ui-accordion>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UiDrawerCommonConntent from './drawer-common-conntent';
import DrawerMixin from '@/mixins/drawer';
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Permanent Drawer Below Toolbar'
  },
  components: {
    UiDrawerCommonConntent
  },
  mixins: [DrawerMixin, snippets],
  created() {
    this.showCode('drawer', 4);
  }
};
</script>
