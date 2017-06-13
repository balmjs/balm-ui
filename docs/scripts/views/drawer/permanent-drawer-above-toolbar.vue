<template>
  <div class="demo--drawer demo--permanent-drawer-above-toolbar">
    <ui-permanent-drawer hasSpacer>
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
    </ui-permanent-drawer>

    <div class="demo-content">
      <ui-toolbar :class="zSpace(4)">
        <ui-toolbar-row>
          <ui-toolbar-section align="start">
            <ui-toolbar-title class="catalog-title">Permanent Drawer Above Toolbar</ui-toolbar-title>
          </ui-toolbar-section>
        </ui-toolbar-row>
      </ui-toolbar>

      <main class="demo-main">
        <h1 :class="typography('display1')">Permanent Drawer</h1>
        <p :class="typography('body1')">It sits to the left of this content.</p>
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
