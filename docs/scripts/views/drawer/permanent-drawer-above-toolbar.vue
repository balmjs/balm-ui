<template>
  <div class="demo-body">
    <ui-permanent-drawer hasSpacer>
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
    </ui-permanent-drawer>

    <div class="demo-content">
      <ui-toolbar :class="'mdc-elevation--z4'">
        <ui-toolbar-section align="start">
          <span class="catalog-title">Permanent Drawer Above Toolbar</span>
        </ui-toolbar-section>
      </ui-toolbar>

      <main class="demo-main">
        <h1 class="mdc-typography--display1">Permanent Drawer</h1>
        <p class="mdc-typography--body1">It sits to the left of this content.</p>
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
      }]
    };
  }
};
</script>

<style scoped>
/* Place drawer and content side by side. */
.demo-body {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
/* Stack toolbar and main on top of each other. */
.demo-content {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
}
/* Place drawer above toolbar shadow. */
.mdc-permanent-drawer {
  z-index: 2;
}
.demo-main {
  padding-left: 16px;
}
</style>
