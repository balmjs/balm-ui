<template>
  <ui-menu-anchor class="switch-theme">
    <ui-button
      ref="colorButton"
      title="Change theme colors"
      data-theme="baseline"
      @click="$balmUI.onShow('open')"
    >
      <i class="demo-theme-color-radio">
        <span class="demo-theme-color-radio__inner"></span>
      </i>
    </ui-button>

    <ui-menu v-model="open" class="demo-theme-menu" @selected="onSelected">
      <ui-menuitem
        v-for="(item, index) in themeColorList"
        :key="index"
        :class="{
          'demo-theme-menu__list-item--selected': selectedTheme === item.value
        }"
        :data-theme="item.value"
      >
        <ui-menuitem-icon>
          <i class="demo-theme-color-radio">
            <span class="demo-theme-color-radio__inner"></span>
          </i>
        </ui-menuitem-icon>
        {{ item.label }}
      </ui-menuitem>
    </ui-menu>
  </ui-menu-anchor>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      selectedTheme: 'baseline',
      themeColorList: [
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
  methods: {
    onSelected(data) {
      let themeValue = this.themeColorList[data.index].value;

      switch (themeValue) {
        case 'dark':
          this.primary = '#ffd54f';
          this.secondary = '#ec407a';
          break;
        case 'black':
          this.primary = '#212121';
          this.secondary = '#64dd17';
          break;
        case 'shrine':
          this.primary = '#fcb8ab';
          this.secondary = '#feeae6';
          break;
        default:
          this.primary = '#6200ee';
          this.secondary = '#018786';
      }

      if (themeValue === 'shrine') {
        this.$theme.colors = {
          primary: this.primary,
          secondary: this.secondary,
          'on-primary': '#442b2d',
          'on-secondary': '#442b2d'
        };
      } else {
        this.$theme.colors = {
          primary: this.primary,
          secondary: this.secondary
        };
      }
      this.$store.getTheme();

      this.selectedTheme = themeValue;
      this.$refs.colorButton.$el.dataset.theme = themeValue;
    }
  }
};
</script>
