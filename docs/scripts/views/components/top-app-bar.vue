<template>
  <div class="page--top-app-bar">
    <ui-top-app-bar
      content-selector="#content-main"
      :type="typeOption"
      :title="title"
      nav-id="demo-menu"
    >
      <template #toolbar="{ toolbarItemClass }">
        <ui-menu-anchor v-if="isShort">
          <ui-icon-button
            :class="toolbarItemClass"
            icon="more_vert"
            @click="showMoreActions = true"
          ></ui-icon-button>
          <ui-menu
            v-model="showMoreActions"
            :items="['Back', 'Forward', 'Reload', '-', 'Settings']"
          ></ui-menu>
        </ui-menu-anchor>
        <top-toolbar v-else :item-class="toolbarItemClass"></top-toolbar>
      </template>
    </ui-top-app-bar>

    <ui-drawer v-model="openDrawer" nav-id="demo-menu" type="modal">
      <ui-drawer-header
        :inner-class="$theme.getThemeClass(['primary-bg', 'on-primary'])"
      >
        <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)">
          Header here
        </ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item href="javascript:void(0)" @click="$router.back()">
            <ui-item-first-content
              :class="$theme.getTextClass('secondary', $store.theme)"
            >
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content
              :class="$theme.getTextClass('primary', $store.theme)"
            >
              Back
            </ui-item-text-content>
          </ui-nav-item>
          <ui-list-divider></ui-list-divider>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>

    <ui-drawer-backdrop></ui-drawer-backdrop>

    <div class="demo-main">
      <docs-page
        id="content-main"
        name="top-app-bar"
        demo-count="1"
        bottom-affix
      >
        <template #hero>
          <h1 :class="$tt('headline1')">Top App Bar</h1>
        </template>

        <!-- Content -->
        <section class="demo-wrapper">
          <div class="demo-controls">
            <ui-select v-model="typeOption" :options="TypeOptions">
              Type
            </ui-select>
            <ui-textfield v-model="title">Title</ui-textfield>
          </div>
          <p v-for="i in 12" :key="i" class="demo-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ui-snippet :code="$store.demos[1]"></ui-snippet>
        </section>
      </docs-page>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';
import { useStore } from 'balm-ui';
import TopToolbar from '@/components/top-toolbar';

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

const state = reactive({
  typeOption: 0,
  title: 'Hello BalmUI',
  openDrawer: false,
  showMoreActions: false
});

export default {
  metaInfo: {
    titleTemplate: '%s - Top App Bar'
  },
  components: {
    TopToolbar
  },
  setup() {
    const store = useStore();

    store.setTheme();

    const isShort = computed(
      () => state.typeOption === 5 || state.typeOption === 6
    );

    return {
      // hero
      TypeOptions,
      ...toRefs(state),
      isShort
    };
  }
};
</script>
