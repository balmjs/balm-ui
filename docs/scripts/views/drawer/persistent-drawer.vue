<template>
  <div class="demo--drawer demo--persistent-drawer">
    <!-- menuSelector=".demo-menu" -->
    <ui-persistent-drawer
      hasSpacer
      :open="open"
      @open="onOpen"
      @close="onClose">
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
    </ui-persistent-drawer>

    <div class="demo-content">
      <ui-toolbar contentSelector=".demo-main" :class="'mdc-elevation--z4'">
        <ui-toolbar-section align="start">
          <template slot="before">
            <ui-button link class="demo-menu material-icons" @click.native="openMenu">menu</ui-button>
          </template>
          <span class="catalog-title">Persistent Drawer</span>
        </ui-toolbar-section>
      </ui-toolbar>

      <main class="demo-main">
        <h1 class="mdc-typography--display1">Persistent Drawer</h1>
        <p class="mdc-typography--body1">Click the menu icon above to open and close the drawer.</p>
      </main>
    </div>

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
      this.open = !this.open;
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
