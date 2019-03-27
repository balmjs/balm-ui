<template>
  <div :class="[$tt('body1'), 'demo--tabs']">
    <section class="hero component">
      <div class="demo">
        <ui-tabs type="both" v-model="active" :items="tabs" stacked></ui-tabs>
      </div>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <ui-tab-demo :tabs="tabs" :code="demoCode"></ui-tab-demo>
      <ui-tab-bar-demo :tabs="tabs" :isLargeScreen="isLargeScreen" :code="demoCode"></ui-tab-bar-demo>
      <ui-tab-scroller-demo :code="demoCode"></ui-tab-scroller-demo>
      <ui-tab-panel-demo :code="demoCode"></ui-tab-panel-demo>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="tab"></ui-apidocs>
      <ui-apidocs name="tab-bar"></ui-apidocs>
      <ui-apidocs name="tab-indicator"></ui-apidocs>
      <ui-apidocs name="tab-scroller"></ui-apidocs>
      <ui-apidocs name="tab-panel"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="tabs"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import UiTabDemo from './tab';
import UiTabBarDemo from './tab-bar';
import UiTabScrollerDemo from './tab-scroller';
import UiTabPanelDemo from './tab-panel';

const largeScreenSize = 1024;

export default {
  metaInfo: {
    titleTemplate: '%s - Tabs'
  },
  components: {
    UiTabDemo,
    UiTabBarDemo,
    UiTabScrollerDemo,
    UiTabPanelDemo
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
      ],
      isLargeScreen: false
    };
  },
  computed: {
    demoCode() {
      return this.code;
    }
  },
  created() {
    this.showCode('tabs', 9);
  },
  mounted() {
    window.addEventListener('balmResize', this.init);
    this.init();
  },
  methods: {
    init() {
      this.isLargeScreen = window.innerWidth >= largeScreenSize;
    }
  }
};
</script>
