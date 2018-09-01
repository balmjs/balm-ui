<template>
  <div class="demo--drawer demo--permanent-drawer-above-toolbar">

    <ui-permanent-drawer>
      <ui-drawer-header>
        <ui-drawer-title>{{ title }}</ui-drawer-title>
        <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-common-conntent></ui-drawer-common-conntent>
    </ui-permanent-drawer>

    <main class="demo-main">
      <ui-top-app-bar
        contentSelector=".demo-content"
        class="demo-top-app-bar"
        v-shadow="4">
        <template slot="nav-icon">
          <ui-toolbar-anchor type="menu"
            @click.native="() => { $router.back(); }">&#xE5C4;</ui-toolbar-anchor>
        </template>
        Permanent Drawer Above Toolbar
      </ui-top-app-bar>

      <div :class="[$tt('body1'), 'demo-content']">
        <div :class="$tt('body2')">
          <h1 :class="$tt('headline4')">Permanent Drawer</h1>
          <p>It sits to the left of this content.</p>
          <ui-accordion>
            <ui-markdown :code="code[3]"></ui-markdown>
          </ui-accordion>
        </div>
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
    titleTemplate: '%s - Permanent Drawer Above Toolbar'
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
