<template>
  <div class="page--top-app-bar">
    <ui-top-app-bar content-selector="#content-main" :type="type" :title="title" @nav="onTest">
      <template #toolbar="{ toolbarItemClass }">
        <ui-icon-button :class="toolbarItemClass" icon="file_download"></ui-icon-button>
        <ui-icon-button :class="toolbarItemClass" icon="print"></ui-icon-button>
        <ui-icon-button :class="toolbarItemClass" icon="bookmark"></ui-icon-button>
      </template>
    </ui-top-app-bar>

    <ui-drawer v-model="a.b.c" type="modal">
      <ui-drawer-header>
        <ui-drawer-title>Header here</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item active @click="$router.back()">
            <ui-item-first-content>
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Back</ui-item-text-content>
          </ui-item>
          <ui-list-divider></ui-list-divider>
        </ui-list>
      </ui-drawer-content>
    </ui-drawer>

    <ui-drawer-backdrop></ui-drawer-backdrop>

    <div id="content-main">
      <p v-for="i in 36" :key="i">Content</p>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
  name: 'Test',
  data() {
    return {
      type: 1,
      title: 'Hello BalmUI',
      openDrawer: false,
      a: {
        b: {
          c: false
        }
      }
    };
  },
  mounted() {},
  methods: {
    onTest() {
      this.$balmUI.onShow('a.b.c');
    }
  }
};
</script>

<style></style>
