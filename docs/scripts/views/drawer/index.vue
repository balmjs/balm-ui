<template>
  <div :class="[$tt('body1'), 'demo--drawer']">
    <section class="hero component">
      <h2 :class="$tt('headline4')">Drawer</h2>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <ui-list nonInteractive>
        <ui-item>
          1.1 <router-link :to="{name: 'layouts.permanent-drawer-above-toolbar'}">Permanent Drawer Above Toolbar</router-link>
        </ui-item>
        <ui-item>
          1.2 <router-link :to="{name: 'layouts.permanent-drawer-below-toolbar'}">Permanent Drawer Below Toolbar</router-link>
        </ui-item>
        <ui-item>
          1.3 <router-link :to="{name: 'layouts.dismissible-drawer'}">Dismissible Drawer</router-link>
        </ui-item>
        <ui-item>
          1.4 <router-link :to="{name: 'layouts.modal-drawer'}">Modal Drawer</router-link>
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
