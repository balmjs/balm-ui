<template>
  <div :class="[$tt('body1'), 'demo--drawer']">
    <div :class="$tt('body2')">
      <h3 :class="$tt('headline3')">Drawer</h3>

      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <ui-list twoLine nonInteractive>
        <ui-item>
          <ui-item-text>
            1.1 <router-link :to="{name: 'layouts.temporary-drawer'}">Temporary Drawer</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.2 <router-link :to="{name: 'layouts.persistent-drawer'}">Persistent Drawer</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.3 <router-link :to="{name: 'layouts.permanent-drawer-above-toolbar'}">Permanent Drawer Above Toolbar</router-link>
            <ui-item-subtext>Desktop Only</ui-item-subtext>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.4 <router-link :to="{name: 'layouts.permanent-drawer-below-toolbar'}">Permanent Drawer Below Toolbar</router-link>
            <ui-item-subtext>Desktop Only</ui-item-subtext>
          </ui-item-text>
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
