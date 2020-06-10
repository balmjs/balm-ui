<template>
  <ui-page type="plugin" name="theme" demoCount="4">
    <template #hero>
      <div class="hero-demos">
        <ui-button raised :class="[$themeColor('primary-bg')]"
          >Primary</ui-button
        >
        <ui-button raised :class="[$themeColor('secondary-bg')]"
          >Secondary</ui-button
        >
      </div>
    </template>

    <!-- Content -->
    <ui-menu-anchor class="demo-fixed-theme">
      <ui-button
        ref="colorButton"
        id="theme-color-action"
        title="Change theme colors"
        data-theme="baseline"
        @click="$balmUI.onShow('open')"
      >
        <i class="demo-theme-color-radio">
          <span class="demo-theme-color-radio__inner"></span>
        </i>
      </ui-button>

      <ui-menu
        id="theme-color-menu"
        class="demo-theme-menu"
        v-model="open"
        @selected="onSelected"
      >
        <ui-menuitem
          v-for="(item, index) in colorItems"
          :key="index"
          :data-theme="item.value"
          :class="{
            'demo-theme-menu__list-item--selected': selectedTheme === item.value
          }"
        >
          <span class="mdc-list-item__graphic">
            <i class="demo-theme-color-radio">
              <span class="demo-theme-color-radio__inner"></span>
            </i>
          </span>
          {{ item.label }}
        </ui-menuitem>
      </ui-menu>
    </ui-menu-anchor>

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

    <template #after>
      <ui-grid class="color-palette">
        <ui-grid-cell
          v-for="(color, colorIndex) in COLOR.colors"
          :key="colorIndex"
        >
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
        <ui-grid-cell>
          <h6 :class="$tt('headline6')">Black &amp; White</h6>
          <ui-list>
            <ui-item
              :class="[$textColor('primary', 'dark'), 'btn-copy']"
              :style="{ 'background-color': '#000' }"
              data-clipboard-text="#000000"
              data-name="Black"
            >
              <span class="shade">Black</span>
              <span class="hex">#000000</span>
            </ui-item>
            <ui-item
              :class="[$textColor('primary', 'light'), 'btn-copy']"
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
  </ui-page>
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
      COLOR,
      open: false,
      selectedTheme: 'baseline',
      colorItems: [
        {
          label: 'Baseline (default)',
          value: 'baseline'
        },
        {
          label: 'Dark background (custom)',
          value: 'dark'
        },
        {
          label: 'Black primary (custom)',
          value: 'black'
        },
        {
          label: 'Shrine (custom)',
          value: 'shrine'
        }
      ]
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
  beforeDestroy() {
    this.reset();
  },
  methods: {
    reset() {
      this.primary = '#6200ee';
      this.secondary = '#018786';

      // this.$setTheme('background', '#fff');
      this.$setTheme('on-primary', '#fff');
      this.$setTheme('on-secondary', '#fff');
      // this.$setTextTheme('primary', 'background', 'rgba(0, 0, 0, 0.87)');
      // this.$setTextTheme('secondary', 'background', 'rgba(0, 0, 0, 0.54)');
      // this.$setTextTheme('hint', 'background', 'rgba(0, 0, 0, 0.38)');
      // this.$setTextTheme('disabled', 'background', 'rgba(0, 0, 0, 0.38)');
      // this.$setTextTheme('icon', 'background', 'rgba(0, 0, 0, 0.38)');
    },
    onSelected(data) {
      let themeValue = this.colorItems[data.index].value;

      switch (themeValue) {
        case 'dark':
          this.primary = '#ffd54f';
          this.secondary = '#ec407a';

          this.$setTheme('on-primary', '#000');
          this.$setTheme('on-secondary', '#fff');
          break;
        case 'black':
          this.primary = '#212121';
          this.secondary = '#64dd17';

          this.$setTheme('on-primary', '#fff');
          this.$setTheme('on-secondary', '#000');
          break;
        case 'shrine':
          this.primary = '#fcb8ab';
          this.secondary = '#feeae6';

          this.$setTheme('on-primary', '#442b2d');
          this.$setTheme('on-secondary', '#442b2d');
          break;
        default:
          this.reset();
          break;
      }

      this.$setTheme('primary', this.primary);
      this.$setTheme('secondary', this.secondary);

      // if (themeValue !== 'baseline') {
      //   if (themeValue === 'dark') {
      //     this.$setTheme('background', '#212121');
      //     this.$setTextTheme('primary', 'background', 'white');
      //     this.$setTextTheme(
      //       'secondary',
      //       'background',
      //       'rgba(255, 255, 255, 0.7)'
      //     );
      //     this.$setTextTheme('hint', 'background', 'rgba(255, 255, 255, 0.5)');
      //     this.$setTextTheme(
      //       'disabled',
      //       'background',
      //       'rgba(255, 255, 255, 0.5)'
      //     );
      //     this.$setTextTheme('icon', 'background', 'rgba(255, 255, 255, 0.5)');
      //   } else {
      //     this.$setTheme('background', '#fff');
      //     this.$setTextTheme('primary', 'background', 'rgba(0, 0, 0, 0.87)');
      //     this.$setTextTheme('secondary', 'background', 'rgba(0, 0, 0, 0.54)');
      //     this.$setTextTheme('hint', 'background', 'rgba(0, 0, 0, 0.38)');
      //     this.$setTextTheme('disabled', 'background', 'rgba(0, 0, 0, 0.38)');
      //     this.$setTextTheme('icon', 'background', 'rgba(0, 0, 0, 0.38)');
      //   }
      // }

      this.selectedTheme = themeValue;
      this.$refs.colorButton.$el.dataset.theme = themeValue;
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
      return this.$textColor(
        'primary',
        COLOR.hex[key].tone[shadeIndex] ? 'light' : 'dark'
      );
    }
  }
};
</script>
