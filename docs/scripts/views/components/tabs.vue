<template>
  <docs-page
    name="tabs"
    demo-count="9"
    :apis="[
      'ui-tabs',
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
        <ui-select v-model="typeOption" class="hero-option" :options="TypeOptions">Type</ui-select>
        <div class="hero-option hero-options">
          <ui-form-field>
            <ui-checkbox id="options" v-model="textLabel" :disabled="!iconOption"></ui-checkbox>
            <label for="options">Text label</label>
          </ui-form-field>
          <ui-select v-model="iconOption" :options="IconOptions">Icons</ui-select>
        </div>
      </div>
    </template>

    <!-- Test -->
    <!-- <ui-tab-bar v-model="active">
      <ui-tab v-for="(tab, index) in tabs" :key="index">{{ tab.text }}</ui-tab>
    </ui-tab-bar>-->

    <!-- Content -->
    <ui-tab-demo :code="demoCode"></ui-tab-demo>
    <ui-tab-bar-demo :code="demoCode" :is-large-screen="isLargeScreen"></ui-tab-bar-demo>
    <ui-tab-scroller-demo :code="demoCode"></ui-tab-scroller-demo>
    <ui-tab-panel-demo :code="demoCode"></ui-tab-panel-demo>
  </docs-page>
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
    this.init();
    window.addEventListener('balmResize', this.init);
  },
  beforeDestroy() {
    window.removeEventListener('balmResize', this.init);
  },
  methods: {
    init() {
      this.isLargeScreen = window.innerWidth >= largeScreenSize;
    }
  }
};
</script>
