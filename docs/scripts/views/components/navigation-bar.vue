<template>
  <div class="page--navigation-bar-container">
    <ui-top-app-bar content-selector=".demo-content" fixed>
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button
          icon="arrow_back"
          :class="navIconClass"
          @click="$router.back()"
        ></ui-icon-button>
      </template>
      <span class="catalog-title">Navigation Bar</span>
      <template #toolbar="{ toolbarItemClass }">
        <top-app-toolbar :item-class="toolbarItemClass"></top-app-toolbar>
      </template>
    </ui-top-app-bar>

    <docs-page class="demo-content" name="navigation-bar" demo-count="1">
      <template #hero>
        <h3 :class="$tt('headline3')">Navigation Bar</h3>
      </template>

      <!-- Content -->
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </docs-page>

    <ui-navigation-bar content-selector=".demo-content" stacked>
      <ui-tabs
        v-model="active"
        type="textWithIcon"
        :items="items"
        stacked
        @change="onChange"
      ></ui-tabs>
    </ui-navigation-bar>
  </div>
</template>

<script>
import TopAppToolbar from '@/components/top-app-toolbar';

export default {
  metaInfo() {
    return {
      subtitle: 'Navigation Bar'
    };
  },
  components: {
    TopAppToolbar
  },
  data() {
    return {
      // hero
      items: [
        {
          text: 'Favorites',
          icon: 'favorite',
          url: 'url 1'
        },
        {
          text: 'Music',
          icon: 'music_note',
          url: 'url 2'
        },
        {
          text: 'Places',
          icon: 'place'
        },
        {
          text: 'News',
          icon: 'newspaper'
        }
      ],
      active: 1
    };
  },
  methods: {
    onChange(index) {
      console.log(index);
    }
  }
};
</script>
