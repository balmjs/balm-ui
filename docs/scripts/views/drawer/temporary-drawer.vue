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

    <ui-temporary-drawer
      hasHeader
      :headerClass="[themeColor('primary', true), textColor('primary', 'primary')]"
      menuSelector=".demo-menu">
      <template slot="header">Header here</template>
      <ui-list-group>
        <ui-list-nav>
          <template slot="default" scope="props">
            <ui-link item effect v-for="(item, index) in menu1" :key="index">
              <i :class="[props.className.start, 'material-icons']" aria-hidden="true">
                {{ item.icon }}
              </i>
              {{ item.name }}
            </ui-link>
          </template>
        </ui-list-nav>
        <ui-list-divider></ui-list-divider>
        <ui-list-nav>
          <template slot="default" scope="props">
            <ui-link item effect v-for="(item, index) in menu2" :key="index">
              <i :class="[props.className.start, 'material-icons']" aria-hidden="true">
                {{ item.icon }}
              </i>
              {{ item.name }}
            </ui-link>
          </template>
        </ui-list-nav>
      </ui-list-group>
    </ui-temporary-drawer>

    <main class="demo-main">
      <h1 :class="typography('display1')">Temporary Drawer</h1>
      <p :class="typography('body1')">Click the menu icon above to open.</p>
    </main>
  </div>
</template>

<script>
import DrawerMixin from '../../mixins/drawer';

export default {
  mixins: [DrawerMixin]
};
</script>
