<template>
  <div class="docs-menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    // TODO
    <ui-menu name="menu1" :data="menus"></ui-menu>
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
