<template>
  <div>
    <ui-top-app-bar
      fixed
      :navIcon="false"
      contentSelector="#below-nav"
      :class="$themeColor('secondary-bg')"
    >
      test
      <template v-slot:toolbar>
        <ui-button>Logout</ui-button>
      </template>
    </ui-top-app-bar>

    <div id="below-nav">
      <ui-drawer viewportHeight>
        <ui-drawer-header>
          <ui-drawer-title>Title</ui-drawer-title>
          <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
        </ui-drawer-header>
        <ui-drawer-content>
          <ui-nav #default="{ itemClass, activeClass }">
            <a :class="[itemClass, activeClass]">Active link</a>
            <a :class="itemClass">Unactive link</a>
          </ui-nav>
        </ui-drawer-content>
      </ui-drawer>
      <div>
        main content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
