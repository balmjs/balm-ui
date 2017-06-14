<template>
  <div class="demo--drawer demo--persistent-drawer">
    <ui-persistent-drawer
      hasSpacer
      menuSelector=".demo-menu">
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
    </ui-persistent-drawer>

    <div class="demo-content">
      <ui-toolbar contentSelector=".demo-main" :class="zSpace(4)">
        <ui-toolbar-row>
          <ui-toolbar-section align="start">
            <ui-toolbar-button type="menu" class="demo-menu"></ui-toolbar-button>
            <ui-toolbar-title class="catalog-title">Persistent Drawer</ui-toolbar-title>
          </ui-toolbar-section>
        </ui-toolbar-row>
      </ui-toolbar>

      <main class="demo-main">
        <h1 :class="typography('display1')">Persistent Drawer</h1>
        <p :class="typography('body1')">Click the menu icon above to open and close the drawer.</p>
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
