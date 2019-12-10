<template>
  <div :class="[$tt('body1'), 'demo--tabs']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-tabs
          v-show="typeOption === 0"
          v-model="active1"
          :type="tabType"
          :items="ShortTabItems"
          :stacked="iconOption === 2"
        ></ui-tabs>
        <ui-tabs
          v-show="typeOption === 1"
          v-model="active2"
          class="long"
          :type="tabType"
          :items="LongTabItems"
          :stacked="iconOption === 2"
        ></ui-tabs>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <div class="hero-option hero-options">
          <ui-form-field>
            <ui-checkbox
              id="options"
              v-model="textLabel"
              :disabled="!iconOption"
            ></ui-checkbox>
            <label for="options">Text label</label>
          </ui-form-field>
          <ui-select :options="IconOptions" v-model="iconOption"
            >Icons</ui-select
          >
        </div>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <!-- <ui-tab-bar v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index">{{
          tab.text
        }}</ui-tab>
      </ui-tab-bar> -->
      <ui-tab-demo :tabs="tabs" :code="demoCode"></ui-tab-demo>
      <ui-tab-bar-demo
        :tabs="tabs"
        :isLargeScreen="isLargeScreen"
        :code="demoCode"
      ></ui-tab-bar-demo>
      <ui-tab-scroller-demo :code="demoCode"></ui-tab-scroller-demo>
      <ui-tab-panel-demo :code="demoCode"></ui-tab-panel-demo>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="tabs"></ui-apidocs>
      <ui-apidocs name="tab-bar"></ui-apidocs>
      <ui-apidocs name="tab-scroller"></ui-apidocs>
      <ui-apidocs name="tab"></ui-apidocs>
      <ui-apidocs name="tab-indicator"></ui-apidocs>
      <ui-apidocs name="tab-panel"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
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

const TypeOptions = [
  {
    label: 'Fixed',
    value: 0
  },
  {
    label: 'Scrollable',
    value: 1
  }
];

const IconOptions = [
  {
    label: 'None',
    value: 0
  },
  {
    label: 'Leading icon',
    value: 1
  },
  {
    label: 'Top icon',
    value: 2
  }
];

const ShortTabItems = [
  {
    text: 'Tab one',
    icon: 'watch_later'
  },
  {
    text: 'Tab two',
    icon: 'near_me'
  },
  {
    text: 'Tab three',
    icon: 'favorite'
  }
];

const LongTabItems = [
  ...ShortTabItems,
  {
    text: 'Tab four',
    icon: 'free_breakfast'
  },
  {
    text: 'Tab five',
    icon: 'lightbulb'
  },
  {
    text: 'Tab six',
    icon: 'place'
  },
  {
    text: 'Tab seven',
    icon: 'mail'
  },
  {
    text: 'Tab eight',
    icon: 'add_circle'
  },
  {
    text: 'Tab nine',
    icon: 'star'
  },
  {
    text: 'Tab ten',
    icon: 'person'
  }
];

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
      TypeOptions,
      IconOptions,
      ShortTabItems,
      LongTabItems,
      typeOption: 0,
      textLabel: true,
      iconOption: 0,
      active1: 0,
      active2: 0,
      active: 0,
      tabs: [],
      isLargeScreen: false
    };
  },
  computed: {
    tabType() {
      let type = 0;

      if (this.iconOption) {
        type = this.textLabel ? 2 : 1;
      }

      return type;
    },
    demoCode() {
      return this.code;
    }
  },
  created() {
    this.showCode('tabs', 9);
    setTimeout(() => {
      this.tabs = [
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
      ];
    }, 100);
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
