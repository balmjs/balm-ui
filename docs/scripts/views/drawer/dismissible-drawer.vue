<template>
  <div class="demo--drawer demo--dismissible-drawer">
    <ui-drawer variant="dismissible" menuSelector="#demo-menu">
      <ui-drawer-header>
        <ui-drawer-title>{{ title }}</ui-drawer-title>
        <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-common-content>
        <ui-item-a
          activated
          firstIcon="arrow_back"
          @click.native="
            () => {
              $router.back();
            }
          "
          >Back</ui-item-a
        >
        <ui-list-divider></ui-list-divider>
      </ui-drawer-common-content>
    </ui-drawer>

    <ui-drawer-app-content class="demo-main">
      <ui-top-app-bar
        contentSelector=".demo-content"
        navId="demo-menu"
        class="demo-top-app-bar"
        v-shadow="4"
        >Dismissible Drawer</ui-top-app-bar
      >

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
import UiDrawerCommonContent from './drawer-common-content';
import DrawerMixin from '@/mixins/drawer';
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Dismissible Drawer'
  },
  components: {
    UiDrawerCommonContent
  },
  mixins: [DrawerMixin, snippets],
  created() {
    this.showCode('drawer', 4);
  }
};
</script>
