<template>
  <ui-layout
    class="container"
    :header="header"
    :drawer="drawer"
    fixedDrawer>
    <template slot="header-right" scope="props">
      <ui-tooltip name="qr-code">
        <i slot="target" class="material-icons">face</i>
        <img slot="tips" :src="require('../images/test/1.png')">
      </ui-tooltip>
      <ui-menu :data="menus" :position="3" @clicked="onMenu" effect></ui-menu>
    </template>
    <div slot="content">
      <router-view></router-view>
    </div>
  </ui-layout>
</template>

<script>
import menu from './menu';

export default {
  data() {
    return {
      header: {
        title: 'BalmUI',
        left: [
          {
            url:'/a',
            name: 'Item A'
          }, {
            url:'/b',
            name: 'Item B'
          }, {
            url:'/c',
            name: 'Item C'
          }
        ]
      },
      drawer: {
        title: 'BalmUI',
        links: menu
      },
      menus: [
        {
          url:'/a',
          name: 'Item A'
        }, {
          url:'/b',
          name: 'Item B',
          disabled: true
        }, {
          url:'/c',
          name: 'Item C'
        }
      ]
    };
  },
  methods: {
    onMenu(data) {
      console.log('menu', data);
    }
  }
};
</script>
