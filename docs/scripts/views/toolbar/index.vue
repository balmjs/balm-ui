<template>
  <div :class="[$tt('body1'), 'demo--toolbar']">
    <div class="hero component">
      <div class="catalog-toolbar-container">
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section align="start">
              <ui-toolbar-anchor type="menu"></ui-toolbar-anchor>
              <ui-toolbar-title>Toolbar</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section align="end">
              <ui-toolbar-anchor alt="Download">file_download</ui-toolbar-anchor>
              <ui-toolbar-anchor alt="Print this page">print</ui-toolbar-anchor>
              <ui-toolbar-anchor alt="Bookmark this page">bookmark</ui-toolbar-anchor>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </div>
    </div>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">1. Example</h4>
      <ui-list twoLine nonInteractive>
        <ui-item>
          <ui-item-text>
            1.1 <router-link :to="{name: 'layouts.default-toolbar'}">Normal Toolbar</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.2 <router-link :to="{name: 'layouts.fixed-toolbar'}">Fixed Toolbar</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.3 <router-link :to="{name: 'layouts.menu-toolbar'}">Fixed Toolbar with Menu</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.4 <router-link :to="{name: 'layouts.waterfall-toolbar'}">Waterfall Toolbar</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.5 <router-link :to="{name: 'layouts.default-flexible-toolbar'}">Default Flexible Toolbar</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.6 <router-link :to="{name: 'layouts.waterfall-flexible-toolbar'}">Waterfall Flexible Toolbar</router-link>
          </ui-item-text>
        </ui-item>
        <ui-item>
          <ui-item-text>
            1.7 <router-link :to="{name: 'layouts.waterfall-toolbar-fix-last-row'}">Waterfall Toolbar Fix Last Row</router-link>
          </ui-item-text>
        </ui-item>
      </ui-list>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Toolbar'
  }
};
</script>
