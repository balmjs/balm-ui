<template>
  <div :class="[$tt('body1'), 'demo--tabs']">
    <section class="hero component">
      <div class="demo">
        <ui-tabs type="both"
          v-model="active"
          :items="tabs"
          stacked></ui-tabs>
      </div>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">1. Example</h4>
      <ui-tab-demo :tabs="tabs"></ui-tab-demo>
      <ui-tab-bar-demo :tabs="tabs"></ui-tab-bar-demo>
      <ui-tab-scroller-demo></ui-tab-scroller-demo>

      <!-- <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="tabs"></ui-apidocs>
      <ui-apidocs name="tab"></ui-apidocs>
      <ui-apidocs name="panels"></ui-apidocs> -->
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiTabDemo from './tab';
import UiTabBarDemo from './tab-bar';
import UiTabScrollerDemo from './tab-scroller';

export default {
  metaInfo: {
    titleTemplate: '%s - Tabs'
  },
  components: {
    UiTabDemo,
    UiTabBarDemo,
    UiTabScrollerDemo
  },
  mixins: [snippets],
  data() {
    return {
      active: 0,
      tabs: [
        {
          text: 'Favorites',
          icon: 'favorite',
          indicator: 'crop_square'
        },
        {
          text: 'Recents',
          icon: 'phone',
          indicator: 'panorama_fish_eye'
        },
        {
          text: 'Nearby',
          icon: 'near_me',
          indicator: 'change_history'
        }
      ]
    };
  },
  created() {
    this.showCode('tabs', 6);
  }
};
</script>
