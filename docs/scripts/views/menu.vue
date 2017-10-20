<template>
  <div class="demo--menu">
    <section class="hero">
      <ui-menu cssOnly
        class="demo-menu mdc-simple-menu--open"
        :menu="['Back', 'Forward', 'Reload', '-', 'Help & Feedback', 'Settings']">
      </ui-menu>
    </section>

    <section class="example"></section>

    <div :class="['demo-content', {'mdc-theme--dark': dark}]">
      <ui-menu-anchor :position="position">
        <ui-button raised @click.native="openMenu">Reveal Menu</ui-button>

        <ui-menu :open="open" :dark="dark"
          @selected="onSelected"
          @cancel="onCancel">
          <ui-menuitem v-for="(item, index) in menu" :key="index">
            {{ item }}
          </ui-menuitem>
          <ui-item-divider></ui-item-divider>
          <ui-menuitem>Save As...</ui-menuitem>
        </ui-menu>
      </ui-menu-anchor>

      <div class="demo-controls-container">
        <div class="demo-controls">
          Button position:
          <ui-radio block
            name="position"
            id="top-left"
            :value="1"
            :model="position"
            @change="onChange('position', $event)">Top left</ui-radio>
          <ui-radio block
            name="position"
            id="top-right"
            :value="2"
            :model="position"
            @change="onChange('position', $event)">Top right</ui-radio>
          <ui-radio block
            name="position"
            id="bottom-left"
            :value="3"
            :model="position"
            @change="onChange('position', $event)">Bottom left</ui-radio>
          <ui-radio block
            name="position"
            id="bottom-right"
            :value="4"
            :model="position"
            @change="onChange('position', $event)">Bottom right</ui-radio>
          <ui-checkbox block
            id="dark-mode"
            :model="dark"
            @change="onChange('dark', $event)">Dark mode</ui-checkbox>
          <p>
            <span>Last Selected item: <em id="last-selected">{{ selected.item || 'none' }} selected</em></span>
          </p>
        </div>
      </div>
    </div>

    <section class="example"></section>

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
      menu: ['Back', 'Forward', 'Reload'],
      selected: {},
      position: 1,
      dark: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    },
    onSelected(data) {
      console.log('onSelected', data);
      this.selected = data;
    },
    onCancel() {
      console.log('onCancel');
      this.open = false;
    }
  },
  created() {
    // this.showCode('menu', 2);
  }
};
</script>
