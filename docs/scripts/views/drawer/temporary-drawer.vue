<template>
  <div class="demo--drawer demo--temporary-drawer">
    <ui-toolbar :fixed="true" contentSelector=".demo-main">
      <ui-toolbar-row>
        <ui-toolbar-section align="start">
          <ui-toolbar-button type="menu" class="demo-menu"></ui-toolbar-button>
          <ui-toolbar-title class="catalog-title">Temporary Drawer</ui-toolbar-title>
        </ui-toolbar-section>
      </ui-toolbar-row>
    </ui-toolbar>

    <ui-temporary-drawer menuSelector=".demo-menu">
      <ui-drawer-header :contentClass="[balmUI.themeColor('primary', true), balmUI.textColor('primary', 'primary')]">
        Header here
      </ui-drawer-header>
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
    </ui-temporary-drawer>

    <main class="demo-main">
      <h1 :class="balmUI.tt('display1')">Temporary Drawer</h1>
      <p :class="balmUI.tt('body1')">Click the menu icon above to open.</p>
    </main>
  </div>
</template>

<script>
import DrawerMixin from '../../mixins/drawer';

export default {
  mixins: [DrawerMixin]
};
</script>
