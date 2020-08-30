<template>
  <div class="page--bottom-navigation-container">
    <ui-top-app-bar content-selector=".demo-content">
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button icon="arrow_back" :class="navIconClass" @click="$router.back()"></ui-icon-button>
      </template>
      <span class="['catalog-title', $themeColor('on-primary')]">Bottom Navigation</span>
    </ui-top-app-bar>

    <docs-page class="demo-content" name="bottom-navigation" demo-count="1">
      <template #hero>
        <h3 :class="$tt('headline3')">Bottom Navigation</h3>
      </template>

      <!-- Content -->
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </docs-page>

    <ui-bottom-navigation content-selector=".page--bottom-navigation-container">
      <ui-tabs v-model="active" :items="items" @change="onChange"></ui-tabs>
    </ui-bottom-navigation>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Bottom Navigation'
  },
  data() {
    return {
      // hero
      items: [
        {
          text: 'Nav menu 1',
          icon: 'watch_later'
        },
        {
          text: 'Nav menu 2',
          icon: 'near_me'
        },
        {
          text: 'Nav menu 3',
          icon: 'favorite'
        }
      ],
      active: 0
    };
  },
  methods: {
    onChange(active) {
      console.log(active);
    }
  }
};
</script>
