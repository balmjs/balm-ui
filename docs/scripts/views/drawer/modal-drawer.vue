<template>
  <div class="demo-container page--drawer page--modal-drawer">
    <!-- Drawer -->
    <ui-drawer v-model="open" type="modal" nav-id="demo-menu">
      <ui-drawer-header>
        <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)">Title</ui-drawer-title>
        <ui-drawer-subtitle :class="$theme.getTextClass('secondary', $store.theme)">Subtitle</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item href="javascript:void(0)" active @click="$router.back()">
            <ui-item-first-content :class="$theme.getTextClass('secondary', $store.theme)">
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content :class="$theme.getTextClass('primary', $store.theme)">Back</ui-item-text-content>
          </ui-nav-item>
          <ui-list-divider></ui-list-divider>
          <ui-nav-item
            v-for="i in 12"
            :key="i"
            href="javascript:void(0)"
            :class="$theme.getTextClass('primary', $store.theme)"
          >Item {{ i }}</ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <ui-drawer-backdrop></ui-drawer-backdrop>
    <!-- Content -->
    <div class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar fixed content-selector=".demo-app-content" nav-id="demo-menu">Modal Drawer</ui-top-app-bar>
      <!-- App content -->
      <div :class="[$tt('body1'), 'demo-app-content']">
        <h6>Modal Drawer</h6>
        <p>Click the menu icon above to open.</p>
        <ui-snippet :code="$store.demos[5]"></ui-snippet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Modal Drawer'
  },
  data() {
    return {
      open: false
    };
  },
  created() {
    this.$store.initSnippet('drawer', 5);
  },
  mounted() {
    this.$store.setTheme();
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
