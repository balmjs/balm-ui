<template>
  <div class="demo-home">
    <ui-badge value="99+">Badge</ui-badge>
    <hr>
    <ui-button>Button</ui-button>
    <hr>
    <ui-card border dp="2">
      <template slot="title" scope="props">
        <h2 :class="props.className.title">Card Title</h2>
        <h3 :class="props.className.subtitle">Sub Title</h3>
      </template>
      <p slot="text">Card Text</p>
      <p slot="actions">
        <ui-button>Card Button</ui-button>
      </p>
    </ui-card>
    <hr>
    <ui-chip>Chip</ui-chip>
    <hr>
    <ui-tabs :active="tab" @switched="onChange">
      <ui-panel tab="菜单1">
        <p>panel1</p>
      </ui-panel>
      <ui-panel tab="菜单2">
        <p>panel2</p>
      </ui-panel>
      <ui-panel tab="菜单3">
        <p>panel3</p>
      </ui-panel>
    </ui-tabs>
    <hr>
    <ui-loading isActive></ui-loading>
    <ui-loading type="1" isActive></ui-loading>
    <hr>
    <ui-menu name="menu2" :data="menus"></ui-menu>
    <hr>
    <ui-slider></ui-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
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
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    }
  }
};
</script>

<style scoped>
.demo-home {
  padding: 20px;
}
</style>
