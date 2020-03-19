<template>
  <div class="demo--top-app-bar">
    <!-- navId="demo-menu" -->
    <ui-top-app-bar
      contentSelector="#content-main"
      :type="typeOption"
      :title="title"
      @nav="$balmUI.onShow('openDrawer')"
    >
      <template #toolbar="{ toolbarItemClass }">
        <template v-if="isShort">
          <ui-menu-anchor>
            <ui-icon-button
              :class="toolbarItemClass"
              icon="more_vert"
              @click="$balmUI.onOpen('showMoreActions')"
            ></ui-icon-button>
            <ui-menu
              v-model="showMoreActions"
              :items="['Back', 'Forward', 'Reload', '-', 'Settings']"
            ></ui-menu>
          </ui-menu-anchor>
        </template>
        <template v-else>
          <ui-icon-a :class="toolbarItemClass" icon="file_download"></ui-icon-a>
          <ui-icon-a :class="toolbarItemClass" icon="print"></ui-icon-a>
          <ui-icon-a :class="toolbarItemClass" icon="bookmark"></ui-icon-a>
          <!-- <ui-list :class="toolbarItemClass">
            <ui-item>Menu item 1</ui-item>
            <ui-item>Menu item 2</ui-item>
            <ui-item>Menu item 3</ui-item>
          </ui-list> -->
        </template>
      </template>
    </ui-top-app-bar>

    <!-- navId="demo-menu" -->
    <ui-drawer type="modal" v-model="openDrawer">
      <ui-drawer-header
        :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]"
      >
        <ui-drawer-title>Header here</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item activated @click="$router.back()">
            <ui-item-first-content>
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Back</ui-item-text-content>
          </ui-item>
          <ui-item-divider></ui-item-divider>
        </ui-list>
      </ui-drawer-content>
    </ui-drawer>

    <ui-drawer-backdrop></ui-drawer-backdrop>

    <main class="demo-main">
      <ui-page-structure id="content-main" name="top-app-bar" demoCount="1">
        <template #hero>
          <h1 :class="$tt('headline1')">Top App Bar</h1>
        </template>

        <!-- Content -->
        <div class="demo-controls">
          <ui-select :options="TypeOptions" v-model="typeOption"
            >Type</ui-select
          >
          <ui-textfield v-model="title">Title</ui-textfield>
        </div>
        <p v-for="i in 12" :key="i" class="demo-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ui-snippet :code="$store.demos[1]"></ui-snippet>
      </ui-page-structure>
    </main>
  </div>
</template>

<script>
import DrawerMixin from '@/mixins/drawer';

const TypeOptions = [
  {
    label: 'Standard',
    value: 0
  },
  {
    label: 'Fixed',
    value: 1
  },
  {
    label: 'Dense',
    value: 2
  },
  {
    label: 'Prominent',
    value: 3
  },
  {
    label: 'Prominent and Dense',
    value: 4
  },
  {
    label: 'Short',
    value: 5
  },
  {
    label: 'Short, Always Collapsed',
    value: 6
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Top App Bar'
  },
  mixins: [DrawerMixin],
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0,
      title: 'Hello BalmUI',
      openDrawer: false,
      showMoreActions: false
    };
  },
  computed: {
    isShort() {
      return this.typeOption === 5 || this.typeOption === 6;
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.openDrawer = true;
  //   }, 1e3);
  // }
};
</script>
