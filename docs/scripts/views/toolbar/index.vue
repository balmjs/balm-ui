<template>
  <div class="demo--toolbar">
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

    <div class="intro">
      <p>
        To best show the functionality of toolbars, we put both demos in iframes.
        Click the links above the iframe to view the demo in a full browser window.
      </p>
    </div>

    <section class="examples">
      <div class="example">
        <h2>Normal Toolbar</h2>
        <p><router-link to="default-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/default-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Fixed Toolbar</h2>
        <p><router-link to="fixed-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/fixed-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Fixed Toolbar with Menu</h2>
        <p><router-link to="menu-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/menu-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Waterfall Toolbar</h2>
        <p><router-link to="waterfall-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/waterfall-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Default Flexible Toolbar</h2>
        <p><router-link to="default-flexible-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/default-flexible-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Waterfall Flexible Toolbar</h2>
        <p><router-link to="waterfall-flexible-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/waterfall-flexible-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Waterfall Toolbar Fix Last Row</h2>
        <p><router-link to="waterfall-toolbar-fix-last-row" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/waterfall-toolbar-fix-last-row`"></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Toolbar'
  }
};
</script>
