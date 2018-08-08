<template>
  <div :class="[$tt('body1'), 'demo--drawer']">
    <div :class="$tt('body2')">
      <h3 :class="$tt('headline3')">Drawer</h3>

      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <ui-list>
        <ui-item>
          <router-link :to="{name: 'temporary-drawer'}">
            1.1 Temporary Drawer
          </router-link>
        </ui-item>
        <ui-item>
          <router-link :to="{name: 'persistent-drawer'}">
            1.2 Persistent Drawer
          </router-link>
        </ui-item>
        <ui-item>
          <router-link :to="{name: 'permanent-drawer-above-toolbar'}">
            1.3 Permanent Drawer Above Toolbar
          </router-link>
        </ui-item>
        <ui-item>
          <router-link :to="{name: 'permanent-drawer-below-toolbar'}">
            1.4 Permanent Drawer Below Toolbar
          </router-link>
        </ui-item>
      </ui-list>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="drawer"></ui-apidocs>
      <ui-apidocs name="drawer-header"></ui-apidocs>
      <ui-apidocs name="drawer-content"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Drawer'
  },
  mixins: [snippets],
  created() {
    this.showCode('drawer');
  }
};
</script>
