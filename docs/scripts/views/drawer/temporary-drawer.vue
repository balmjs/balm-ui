<template>
  <div class="demo--drawer demo--temporary-drawer">
    <ui-top-app-bar fixed contentSelector=".demo-main" navId="demo-menu">
      Temporary Drawer
    </ui-top-app-bar>

    <ui-temporary-drawer class="demo-drawer" menuSelector="#demo-menu">
      <ui-drawer-header :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]">
        Header here
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list-group>
          <ui-list-nav>
            <ui-item-link @click.native="() => { $router.back(); }" firstIcon="arrow_back">
              Back
            </ui-item-link>
            <ui-item-link v-for="(item, index) in menu1" :key="index" :firstIcon="item.icon">
              {{ item.name }}
            </ui-item-link>
          </ui-list-nav>
          <ui-list-divider></ui-list-divider>
          <ui-list-nav>
            <ui-item-link v-for="(item, index) in menu2" :key="index" :firstIcon="item.icon">
              {{ item.name }}
            </ui-item-link>
          </ui-list-nav>
        </ui-list-group>
      </ui-drawer-content>
    </ui-temporary-drawer>

    <main class="demo-main">
      <div :class="$tt('body2')">
        <h1 :class="$tt('headline4')">Temporary Drawer</h1>
        <p :class="$tt('body1')">Click the menu icon above to open.</p>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </div>
    </main>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import DrawerMixin from '../../mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Temporary Drawer'
  },
  mixins: [snippets, DrawerMixin],
  created() {
    this.showCode('drawer', 4);
  }
};
</script>
