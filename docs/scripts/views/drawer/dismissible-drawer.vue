<template>
  <div class="demo--drawer demo--dismissible-drawer">
    <ui-dismissible-drawer menuSelector="#demo-menu">
      <ui-drawer-header>
        <ui-drawer-title>{{ title }}</ui-drawer-title>
        <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-common-conntent>
        <ui-item-link
          firstIcon="arrow_back"
          @click.native="() => { $router.back(); }">
          Back
        </ui-item-link>
        <ui-list-divider></ui-list-divider>
      </ui-drawer-common-conntent>
    </ui-dismissible-drawer>

    <ui-drawer-app-content class="demo-main">
      <ui-top-app-bar
        contentSelector=".demo-content"
        navId="demo-menu"
        class="demo-top-app-bar"
        v-shadow="4">
        Dismissible Drawer
      </ui-top-app-bar>

      <div :class="[$tt('body1'), 'demo-content']">
        <div :class="$tt('body2')">
          <h1 :class="$tt('headline4')">Dismissible Drawer</h1>
          <p>Click the menu icon above to open and close the drawer.</p>
          <ui-accordion>
            <ui-markdown :code="code[3]"></ui-markdown>
          </ui-accordion>
        </div>
      </div>
    </ui-drawer-app-content>
  </div>
</template>

<script>
import UiDrawerCommonConntent from './drawer-common-conntent';
import DrawerMixin from '../../mixins/drawer';
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Dismissible Drawer'
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
