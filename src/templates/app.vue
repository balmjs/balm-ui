<template>
  <ui-layout
    class="container"
    :headerTitle="title"
    :headerLeft="headerLeft"
    :drawerTitle="title"
    :drawerLink="drawerLink"
    fixedDrawer>
    <template slot="header-right" scope="props">
      <ui-textfield id="search" name="search" :model="keywords" plus>
        <i slot="icon" class="material-icons">search</i>
      </ui-textfield>
      <ui-tooltip name="qr-code">
        <i slot="target" class="material-icons">face</i>
        <div slot="tips">tips</div>
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
      keywords: '',
      title: 'BalmUI',
      headerLeft: [
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
      ],
      drawerLink: menu,
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
