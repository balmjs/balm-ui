<template>
  <div class="demo--drawer demo--permanent-drawer-above-toolbar">

    <ui-common-drawer></ui-common-drawer>

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
import UiCommonDrawer from './common-drawer';
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Permanent Drawer Above Toolbar'
  },
  components: {
    UiCommonDrawer
  },
  mixins: [snippets],
  created() {
    this.showCode('drawer', 4);
  }
};
</script>
