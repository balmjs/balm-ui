<template>
  <docs-page type="plugin" name="theme" demo-count="4">
    <template #hero>
      <div class="hero-demos">
        <ui-button raised :class="[$theme.getThemeClass('primary-bg')]">Primary</ui-button>
        <ui-button raised :class="[$theme.getThemeClass('secondary-bg')]">Secondary</ui-button>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 The Material Design baseline default theme</h6>

      <h6>Theme Color</h6>
      <dl class="demo-theme">
        <dt
          :style="themeColorStyle($theme.getThemeColor('background'))"
        >background: {{ $store.themeColors.background }}</dt>
        <dd
          :class="$theme.getThemeClass('on-primary')"
          :style="themeColorStyle($theme.getThemeColor('primary'))"
        >primary: {{ $store.themeColors.primary }}</dd>
        <dd :style="themeColorStyle('#fff')">on-primary: {{ $store.themeColors['on-primary'] }}</dd>
        <dd
          :class="$theme.getThemeClass('on-secondary')"
          :style="themeColorStyle($theme.getThemeColor('secondary'))"
        >secondary: {{ $store.themeColors.secondary }}</dd>
        <dd :style="themeColorStyle('#fff')">on-secondary: {{ $store.themeColors['on-secondary'] }}</dd>
        <dd
          :class="$theme.getThemeClass('on-surface')"
          :style="themeColorStyle($theme.getThemeColor('surface'))"
        >surface: {{ $store.themeColors.surface }}</dd>
        <dd
          :style="[themeColorStyle('#000'), { color: '#fff' }]"
        >on-surface: {{ $store.themeColors['on-surface'] }}</dd>
        <dd
          :class="$theme.getThemeClass('on-error')"
          :style="themeColorStyle($theme.getThemeColor('error'))"
        >error: {{ $store.themeColors.error }}</dd>
        <dd :style="themeColorStyle('#fff')">on-error: {{ $store.themeColors['on-error'] }}</dd>
      </dl>

      <h6>Text Color</h6>
      <div class="demo-text-theme">
        <ul :style="themeColorStyle('#fff')">
          <li :class="$theme.getTextClassOnLight('primary')">primary</li>
          <li :class="$theme.getTextClassOnLight('secondary')">secondary</li>
          <li :class="$theme.getTextClassOnLight('hint')">hint</li>
          <li :class="$theme.getTextClassOnLight('disabled')">disabled</li>
          <li :class="$theme.getTextClassOnLight('icon')">icon</li>
        </ul>
        <ul :style="themeColorStyle('#000')">
          <li :class="$theme.getTextClassOnDark('primary')">primary</li>
          <li :class="$theme.getTextClassOnDark('secondary')">secondary</li>
          <li :class="$theme.getTextClassOnDark('hint')">hint</li>
          <li :class="$theme.getTextClassOnDark('disabled')">disabled</li>
          <li :class="$theme.getTextClassOnDark('icon')">icon</li>
        </ul>
      </div>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 The Material Design Components demo</h6>
      <div class="demo-main">
        <button-demo></button-demo>
        <fab-demo></fab-demo>

        <top-app-bar-demo></top-app-bar-demo>
        <drawer-demo></drawer-demo>

        <menu-demo></menu-demo>
        <tabs-demo></tabs-demo>

        <textfield-demo></textfield-demo>
        <select-demo></select-demo>

        <checkbox-demo></checkbox-demo>
        <radio-demo></radio-demo>

        <switch-demo></switch-demo>
        <slider-demo></slider-demo>

        <card-demo></card-demo>
        <image-list-demo></image-list-demo>

        <list-demo></list-demo>
        <table-demo></table-demo>
      </div>
    </section>

    <template #after>
      <ui-grid class="color-palette">
        <template v-for="(color, colorIndex) in COLOR.colors">
          <ui-grid-cell :key="colorIndex">
            <h6 :class="$tt('headline6')">{{ color }}</h6>
            <ui-list>
              <template v-for="(shade, shadeIndex) in COLOR.shades">
                <ui-item
                  v-if="hasColor(color, shade)"
                  :key="shadeIndex"
                  :class="[
                    getColorName(color, shade),
                    getColorTone(color, shadeIndex),
                    'btn-copy'
                  ]"
                  :data-clipboard-text="getColorValue(color, shadeIndex)"
                  :data-name="getColorName(color, shade)"
                >
                  <span class="shade">${{ getColorName(color, shade) }}</span>
                  <span class="hex">{{ getColorValue(color, shadeIndex) }}</span>
                </ui-item>
              </template>
            </ui-list>
          </ui-grid-cell>
        </template>
        <ui-grid-cell>
          <h6 :class="$tt('headline6')">Black &amp; White</h6>
          <ui-list>
            <ui-item
              :class="[$theme.getTextClassOnDark('primary'), 'btn-copy']"
              :style="{ 'background-color': '#000' }"
              data-clipboard-text="#000000"
              data-name="Black"
            >
              <span class="shade">Black</span>
              <span class="hex">#000000</span>
            </ui-item>
            <ui-item
              :class="[$theme.getTextClassOnLight('primary'), 'btn-copy']"
              :style="{ 'background-color': '#fff' }"
              data-clipboard-text="#ffffff"
              data-name="White"
            >
              <span class="shade">White</span>
              <span class="hex">#ffffff</span>
            </ui-item>
          </ui-list>
        </ui-grid-cell>
      </ui-grid>
    </template>
  </docs-page>
</template>

<script>
import Clipboard from 'clipboard';
import COLOR from '@/config/color';
import ButtonDemo from '@/demos/theme/button';
import FabDemo from '@/demos/theme/fab';
import TopAppBarDemo from '@/demos/theme/top-app-bar';
import DrawerDemo from '@/demos/theme/drawer';
import MenuDemo from '@/demos/theme/menu';
import TabsDemo from '@/demos/theme/tabs';
import TextfieldDemo from '@/demos/theme/textfield';
import SelectDemo from '@/demos/theme/select';
import CheckboxDemo from '@/demos/theme/checkbox';
import RadioDemo from '@/demos/theme/radio';
import SwitchDemo from '@/demos/theme/switch';
import SliderDemo from '@/demos/theme/slider';
import CardDemo from '@/demos/theme/card';
import ImageListDemo from '@/demos/theme/image-list';
import ListDemo from '@/demos/theme/list';
import TableDemo from '@/demos/theme/table';

export default {
  metaInfo: {
    titleTemplate: '%s - Theme'
  },
  components: {
    ButtonDemo,
    FabDemo,
    TopAppBarDemo,
    DrawerDemo,
    MenuDemo,
    TabsDemo,
    TextfieldDemo,
    SelectDemo,
    CheckboxDemo,
    RadioDemo,
    SwitchDemo,
    SliderDemo,
    CardDemo,
    ImageListDemo,
    ListDemo,
    TableDemo
  },
  data() {
    return {
      COLOR
    };
  },
  mounted() {
    let clipboard = new Clipboard('.btn-copy');

    clipboard.on('success', (e) => {
      let color = e.trigger.dataset.name;
      if (color) {
        let colorName = ['Black', 'White'].includes(color)
          ? color
          : `$${color}`;
        this.$toast(`${colorName} copied: ${e.text}`);

        e.clearSelection();
      }
    });
  },
  methods: {
    themeColorStyle(background) {
      return {
        background
      };
    },
    getColorName(color, shade) {
      let colorName = color.toLowerCase().split(' ').join('-');
      return `${colorName}-${shade}`;
    },
    hasColor(color, shade) {
      let colorName = color.toLowerCase().split(' ').join('-');

      return !(
        ['brown', 'grey', 'blue-grey'].includes(colorName) &&
        ['a100', 'a200', 'a400', 'a700'].includes(shade)
      );
    },
    getColorValue(color, shadeIndex) {
      let names = color.split(' ');
      let key = names[0].toLowerCase();
      if (names[1]) {
        key += names[1];
      }
      return COLOR.hex[key].value[shadeIndex];
    },
    getColorTone(color, shadeIndex) {
      let names = color.split(' ');
      let key = names[0].toLowerCase();
      if (names[1]) {
        key += names[1];
      }
      return this.$theme.getTextClass(
        'primary',
        COLOR.hex[key].tone[shadeIndex] ? 'light' : 'dark'
      );
    }
  }
};
</script>
