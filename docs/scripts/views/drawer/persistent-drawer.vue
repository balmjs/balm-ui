<template>
  <div class="demo--drawer demo--persistent-drawer">
    <ui-persistent-drawer menuSelector="#demo-menu">
      <ui-drawer-toolbar-spacer></ui-drawer-toolbar-spacer>
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
    </ui-persistent-drawer>

    <div class="demo-content">
      <ui-top-app-bar contentSelector=".demo-main" navId="demo-menu" v-shadow="4">
        Persistent Drawer
      </ui-top-app-bar>

      <main class="demo-main">
        <div :class="$tt('body2')">
          <h1 :class="$tt('headline4')">Persistent Drawer</h1>
          <p :class="$tt('body1')">Click the menu icon above to open and close the drawer.</p>
          <ui-accordion>
            <ui-markdown :code="code[2]"></ui-markdown>
          </ui-accordion>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import DrawerMixin from '../../mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Persistent Drawer'
  },
  mixins: [snippets, DrawerMixin],
  created() {
    this.showCode('drawer', 4);
  }
};
</script>
