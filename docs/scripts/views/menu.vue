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

      <ui-menu-anchor :position="4">
        <ui-button @click.native="openMenu2">Open Menu2</ui-button>
        <ui-menu :open="open2" :position="4"
          @selected="onSelected"
          @cancel="onCancel2">
          <ui-menuitem v-for="(item, index) in menu2" :key="index">
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
      }],
      open2: false,
      menu2: [{
        url:'/d',
        label: 'Item D'
      }, {
        url:'/e',
        label: 'Item E'
      }, {
        url:'/f',
        label: 'Item F'
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
    },
    openMenu2() {
      this.open2 = true;
    },
    onCancel2() {
      console.log('onCancel2');
      this.open2 = false;
    }
  },
  created() {
    // this.showCode('menu', 2);
  }
};
</script>
