<template>
  <ui-page-structure
    name="tabs"
    demoCount="9"
    :apis="[
      'tabs',
      'tab-bar',
      'tab-scroller',
      'tab',
      'tab-indicator',
      'tab-panel'
    ]"
  >
    <template #hero>
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
    </template>

    <!-- Test -->
    <!-- <ui-tab-bar v-model="active">
      <ui-tab v-for="(tab, index) in tabs" :key="index">{{ tab.text }}</ui-tab>
    </ui-tab-bar> -->

    <!-- Content -->
    <ui-tab-demo :tabs="tabs" :code="demoCode"></ui-tab-demo>
    <ui-tab-bar-demo
      :tabs="tabs"
      :isLargeScreen="isLargeScreen"
      :code="demoCode"
    ></ui-tab-bar-demo>
    <ui-tab-scroller-demo :code="demoCode"></ui-tab-scroller-demo>
    <ui-tab-panel-demo :code="demoCode"></ui-tab-panel-demo>
  </ui-page-structure>
</template>

<script>
import UiTabDemo from '@/demos/tabs/tab';
import UiTabBarDemo from '@/demos/tabs/tab-bar';
import UiTabScrollerDemo from '@/demos/tabs/tab-scroller';
import UiTabPanelDemo from '@/demos/tabs/tab-panel';

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
  data() {
    return {
      // hero
      TypeOptions,
      IconOptions,
      ShortTabItems,
      LongTabItems,
      typeOption: 0,
      textLabel: true,
      iconOption: 0,
      active1: 0,
      active2: 0,
      // demo
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
      return this.$store.demos;
    }
  },
  mounted() {
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

      // this.active = 1;
    }, 1e3);

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
