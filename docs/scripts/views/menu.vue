<template>
  <div class="docs-menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    <div class="demo-content" style="height:300px">
      <ui-menu-anchor>
        <ui-button @click.native="openMenu">Open Menu</ui-button>
        <ui-menu :open="open"
          @selected="onSelected"
          @cancel="onCancel">
          <ui-menuitem v-for="(item, index) in menu" :key="index">
            {{ item.label }}
          </ui-menuitem>
        </ui-menu>
      </ui-menu-anchor>
    </div>

    <!-- <ui-apidoc name="menu"></ui-apidoc>
    <ui-apidoc name="menuitem"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      open: false,
      menu: [{
        url:'/a',
        label: 'Item A'
      }, {
        url:'/b',
        label: 'Item B'
      }, {
        url:'/c',
        label: 'Item C'
      }]
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    },
    onSelected(data) {
      console.log('onSelected', data);
    },
    onCancel() {
      console.log('onCancel');
      this.open = false;
    }
  },
  created() {
    this.showCode('menu', 2);
  }
};
</script>
