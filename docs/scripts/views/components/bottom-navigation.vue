<template>
  <div class="page--bottom-navigation-container">
    <ui-top-app-bar content-selector=".demo-content" fixed>
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button
          icon="arrow_back"
          :class="navIconClass"
          @click="$router.back()"
        ></ui-icon-button>
      </template>
      <span class="catalog-title">Bottom Navigation</span>
      <template #toolbar="{ toolbarItemClass }">
        <top-app-toolbar :item-class="toolbarItemClass"></top-app-toolbar>
      </template>
    </ui-top-app-bar>

    <docs-page class="demo-content" name="bottom-navigation" demo-count="1">
      <template #hero>
        <h3 :class="$tt('headline3')">Bottom Navigation</h3>
      </template>

      <!-- Content -->
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </docs-page>

    <ui-bottom-navigation content-selector=".demo-content" stacked>
      <ui-tabs
        v-model="active"
        type="textWithIcon"
        :items="items"
        stacked
        @change="onChange"
      ></ui-tabs>
    </ui-bottom-navigation>
  </div>
</template>

<script>
import TopAppToolbar from '@/components/top-app-toolbar';

export default {
  metaInfo() {
    return {
      subtitle: 'Bottom Navigation'
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
          icon: 'fiber_new'
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
