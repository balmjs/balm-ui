<template>
  <div class="demo--drawer demo--modal-drawer">
    <ui-top-app-bar fixed contentSelector=".demo-main" navId="demo-menu">
      Modal Drawer
    </ui-top-app-bar>

    <ui-modal-drawer v-model="open" menuSelector="#demo-menu">
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
    </ui-modal-drawer>

    <ui-drawer-scrim></ui-drawer-scrim>

    <main :class="[$tt('body1'), 'demo-main']">
      <div :class="$tt('body2')">
        <h1 :class="$tt('headline4')">Modal Drawer</h1>
        <p>Click the menu icon above to open.</p>
        <ui-accordion>
          <ui-markdown :code="code[4]"></ui-markdown>
        </ui-accordion>
      </div>
    </main>
  </div>
</template>

<script>
import UiDrawerCommonConntent from './drawer-common-conntent';
import DrawerMixin from '../../mixins/drawer';
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Modal Drawer'
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
