<template>
  <div class="demo--drawer demo--permanent-drawer-below-toolbar">
    <ui-toolbar :fixed="true">
      <ui-toolbar-row>
        <ui-toolbar-section align="start">
          <span class="catalog-back">
            <ui-toolbar-anchor type="menu" href="javascript:void(0)"
              @click.native="() => { $router.back(); }">&#xE5C4;</ui-toolbar-anchor>
          </span>
          <ui-toolbar-title class="catalog-title">Permanent Drawer Below Toolbar</ui-toolbar-title>
        </ui-toolbar-section>
      </ui-toolbar-row>
    </ui-toolbar>

    <div class="demo-content mdc-toolbar-fixed-adjust">
      <ui-permanent-drawer>
        <ui-drawer-content>
          <ui-list-group>
            <ui-list-nav>
              <ui-item-link v-for="(item, index) in menu1" :key="index">
                <ui-item-start :icon="item.icon"></ui-item-start>
                {{ item.name }}
              </ui-item-link>
            </ui-list-nav>
            <ui-list-divider></ui-list-divider>
            <ui-list-nav>
              <ui-item-link v-for="(item, index) in menu2" :key="index">
                <ui-item-start :icon="item.icon"></ui-item-start>
                {{ item.name }}
              </ui-item-link>
            </ui-list-nav>
          </ui-list-group>
        </ui-drawer-content>
      </ui-permanent-drawer>

      <main class="demo-main">
        <h1 :class="balmUI.tt('display1')">Permanent Drawer</h1>
        <p :class="balmUI.tt('body1')">It sits to the left of this content.</p>
      </main>
    </div>
  </div>
</template>

<script>
import DrawerMixin from '../../mixins/drawer';

export default {
  mixins: [DrawerMixin]
};
</script>
