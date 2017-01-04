<template>
  <div class="docs-menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    // TODO
    <ui-menu effect name="menu1" :data="menus"></ui-menu>

    <ui-menu effect name="menu2">
      <template scope="props">
        <li v-for="menu in menus" :class="props.className">{{ menu.name }}</li>
      </template>
    </ui-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [{
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
  }
};
</script>
