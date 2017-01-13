<template>
  <div class="docs-menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    // TODO
    <ui-menu effect :menu="menu" @clicked="onMenu"></ui-menu>

    <ui-menu effect>
      <ui-menuitem v-for="item in menu" :item="item">
        {{ item.name }}
      </ui-menuitem>
    </ui-menu>
    <!-- <ui-menu effect name="menu1" :data="menus" @clicked="onMenu"></ui-menu>

    <ui-menu effect name="menu2" :data="menus">
      <template slot="icon">
        按钮
      </template>
      <template slot="menu" scope="props">
        <a :href="props.data.url">{{ props.data.name }}</li>
      </template>
    </ui-menu>

    <ui-menu effect name="menu3">
      <template slot="icon">
        头像
      </template>
      <template scope="props">
        <li v-for="menu in menus" :class="props.className">{{ menu.name }}</li>
      </template>
    </ui-menu> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        url:'/a',
        name: 'Item A'
      }, {
        url:'/b',
        name: 'Item B',
        disabled: true
      }, {
        url:'/c',
        name: 'Item C'
      }]
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    }
  }
};
</script>
