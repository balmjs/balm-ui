<template>
  <div class="demo--drawer demo--temporary-drawer">
    <ui-toolbar :fixed="true">
      <ui-toolbar-section align="start">
        <template slot="before">
          <ui-button link class="demo-menu material-icons" @click.native="openMenu">menu</ui-button>
        </template>
        <span class="catalog-title">Temporary Drawer</span>
      </ui-toolbar-section>
    </ui-toolbar>

    <!-- menuSelector=".demo-menu" -->
    <ui-temporary-drawer
      hasHeader
      headerClass="mdc-theme--primary-bg mdc-theme--text-primary-on-primary"
      :open="open"
      @open="onOpen"
      @close="onClose">
      <template slot="header">Header here</template>
      <ui-list-group>
        <ui-list-nav>
          <template slot="default" scope="props">
            <ui-link item effect v-for="(item, index) in menu1" :key="index">
              <i :class="[props.className.start, 'material-icons']" aria-hidden="true">
                {{ item.icon }}
              </i>
              {{ item.name }}
            </ui-link>
          </template>
        </ui-list-nav>
        <ui-list-divider></ui-list-divider>
        <ui-list-nav>
          <template slot="default" scope="props">
            <ui-link item effect v-for="(item, index) in menu2" :key="index">
              <i :class="[props.className.start, 'material-icons']" aria-hidden="true">
                {{ item.icon }}
              </i>
              {{ item.name }}
            </ui-link>
          </template>
        </ui-list-nav>
      </ui-list-group>
    </ui-temporary-drawer>

    <main class="demo-main">
      <h1 class="mdc-typography--display1">Temporary Drawer</h1>
      <p class="mdc-typography--body1">Click the menu icon above to open.</p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu1: [{
        icon: 'inbox',
        name: 'Inbox'
      }, {
        icon: 'star',
        name: 'Star'
      }, {
        icon: 'send',
        name: 'Sent Mail'
      }, {
        icon: 'drafts',
        name: 'Drafts'
      }],
      menu2: [{
        icon: 'email',
        name: 'All Mail'
      }, {
        icon: 'delete',
        name: 'Trash'
      }, {
        icon: 'report',
        name: 'Spam'
      }],
      open: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    },
    onOpen(val) {
      console.log('open', val);
    },
    onClose(val) {
      this.open = false;
      console.log('close', val);
    }
  }
};
</script>
