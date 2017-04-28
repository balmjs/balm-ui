<template>
  <div class="demo-list">
    <div class="component-title">
      <h3>Layout</h3>
    </div>

    <h4>Transparent header</h4>
    <div class="layout-demo">
      <ui-layout transparent hasDrawer
        class="demo-layout-transparent">
        <template slot="header-title">{{ layout.title }}</template>
        <template slot="header-right">
          <ui-navigation :links="layout.menu"></ui-navigation>
        </template>
        <template slot="drawer-title">{{ layout.title }}</template>
        <template slot="drawer-top">
          <ui-navigation :links="layout.menu"></ui-navigation>
        </template>
      </ui-layout>
    </div>

    <ui-apidoc name="layout"></ui-apidoc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: {
        title: 'Title',
        menu: [{
          name: 'Link1',
          url: '#1'
        }, {
          name: 'Link2',
          url: '#2'
        }, {
          name: 'Link3',
          url: '#3'
        }, {
          name: 'Link4',
          url: '#4'
        }]
      }
    };
  }
};
</script>
