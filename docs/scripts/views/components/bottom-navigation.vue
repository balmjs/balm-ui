<template>
  <div class="demo--bottom-navigation-container">
    <ui-top-app-bar contentSelector=".demo-content">
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button
          icon="arrow_back"
          :class="navIconClass"
          @click="$router.back()"
        ></ui-icon-button>
      </template>
      <span class="['catalog-title', $themeColor('on-primary')]"
        >Bottom Navigation</span
      >
    </ui-top-app-bar>

    <ui-page class="demo-content" name="bottom-navigation" demoCount="1">
      <template #hero>
        <h3 :class="$tt('headline3')">Bottom Navigation</h3>
      </template>

      <!-- Content -->
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </ui-page>

    <ui-bottom-navigation contentSelector=".demo--bottom-navigation-container">
      <ui-tabs :items="items" v-model="active" @change="onChange"></ui-tabs>
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
