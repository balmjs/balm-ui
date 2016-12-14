<template>
  <ui-layout
    class="container"
    :header="layout.header"
    :drawer="layout.drawer"
    fixedDrawer>
    <template slot="header-right" scope="props">
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
      layout: {
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
          ],
          right: [
            {
              url:'/a',
              name: 'aaa'
            }, {
              url:'/b',
              name: 'bbb'
            }, {
              url:'/c',
              name: 'ccc'
            }
          ]
        },
        drawer: {
          title: 'BalmUI',
          links: menu
        }
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
