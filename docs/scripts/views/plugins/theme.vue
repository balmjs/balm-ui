<template>
  <div class="demo--theme">
    <section class="hero">
      <ui-button raised :class="[
        $themeColor('primary-bg')
      ]">Primary</ui-button>
      <ui-button raised :class="[
        $themeColor('secondary-bg')
      ]">Secondary</ui-button>
    </section>

    <div class="demo-main">
      <ui-menu-anchor>
        <ui-button ref="colorButton"
          id="theme-color-action"
          title="Change theme colors"
          data-theme="baseline"
          @click="balmUI.onShow('open')">
          <i class="demo-theme-color-radio">
            <span class="demo-theme-color-radio__inner"></span>
          </i>
        </ui-button>

        <ui-menu id="theme-color-menu"
          class="demo-theme-menu"
          v-model="open"
          @selected="onSelected">
          <ui-menuitem v-for="(item, index) in colorItems"
            :key="index"
            :data-theme="item.value">
            <div class="mdc-list-item__graphic">
              <i class="demo-theme-color-radio">
                <span class="demo-theme-color-radio__inner"></span>
              </i>
            </div>
            {{ item.label }}
          </ui-menuitem>
        </ui-menu>
      </ui-menu-anchor>

      <h2 :class="$tt('headline4')">Baseline Colors</h2>

      <section class="demo-component-section">
        <h3 :class="[$tt('headline5'), 'demo-component-section__heading']">
          CSS Classes
        </h3>

        <div class="demo-theme-color-section">
          <div class="demo-theme-color-section__row">
            <fieldset class="demo-fieldset--color">
              <legend :class="$tt('subtitle1')">Theme colors as text</legend>

              <div class="demo-theme-color-group">
                <div class="demo-theme-color-swatches">
                  <div :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('primary'),
                    $tt('body2')]">Primary</div>
                </div>
                <div class="demo-theme-color-swatches">
                  <div :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('secondary'),
                    $tt('body2')]">Secondary</div>
                </div>
              </div>
            </fieldset>

            <fieldset class="demo-fieldset--color">
              <legend :class="$tt('subtitle1')">Theme colors as background</legend>

              <div class="demo-theme-color-group">
                <div class="demo-theme-color-swatches">
                  <div :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('primary-bg'),
                    $themeColor('on-primary')]">Primary</div>
                </div>
                <div class="demo-theme-color-swatches">
                  <div :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('secondary-bg'),
                    $themeColor('on-secondary')]">Secondary</div>
                </div>
                <div class="demo-theme-color-swatches">
                  <div :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('background'),
                    $textColor('primary')]">Background</div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="demo-theme-color-section">
          <div class="demo-theme-color-section_row">
            <fieldset class="demo-fieldset--color">
              <legend :class="$tt('subtitle1')">Text on background</legend>

              <div class="demo-theme-color-group">
                <div :class="['demo-theme-text-row', $themeColor('background'), $tt('body2')]">
                  <span :class="['demo-theme-text-style', $textColor('primary')]">Primary</span>
                  <span :class="['demo-theme-text-style', $textColor('secondary')]">Secondary</span>
                  <span :class="['demo-theme-text-style', $textColor('hint')]">Hint</span>
                  <span :class="['demo-theme-text-style', $textColor('disabled')]">Disabled</span>
                  <span :class="['demo-theme-text-style', $textColor('icon'), 'material-icons']">favorite</span>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="demo-theme-color-section__row">
            <fieldset class="demo-fieldset--color">
              <legend :class="$tt('subtitle1')">Text on primary</legend>

              <div class="demo-theme-color-group">
                <div :class="['demo-theme-text-row', $themeColor('primary-bg'), $tt('body2')]">
                  <span :class="['demo-theme-text-style', $themeColor('on-primary')]">Text</span>
                  <span :class="['demo-theme-text-style', $themeColor('on-primary'), 'material-icons']">favorite</span>
                </div>
              </div>
            </fieldset>

            <fieldset class="demo-fieldset--color">
              <legend :class="$tt('subtitle1')">Text on secondary</legend>

              <div class="demo-theme-color-group">
                <div :class="['demo-theme-text-row', $themeColor('secondary-bg'), $tt('body2')]">
                  <span :class="['demo-theme-text-style', $themeColor('on-secondary')]">Text</span>
                  <span :class="['demo-theme-text-style', $themeColor('on-secondary'), 'material-icons']">favorite</span>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="demo-theme-color-section__row">
            <fieldset class="demo-fieldset--color">
              <legend :class="$tt('subtitle1')">Text on user-defined light background</legend>

              <div class="demo-theme-color-group">
                <div :class="['demo-theme-text-row demo-theme-bg--custom-light', $tt('body2')]">
                  <span :class="['demo-theme-text-style', $textColor('primary', 'light')]">Primary</span>
                  <span :class="['demo-theme-text-style', $textColor('secondary', 'light')]">Secondary</span>
                  <span :class="['demo-theme-text-style', $textColor('hint', 'light')]">Hint</span>
                  <span :class="['demo-theme-text-style', $textColor('disabled', 'light')]">Disabled</span>
                  <span :class="['demo-theme-text-style', $textColor('icon', 'light'), 'material-icons']">favorite</span>
                </div>
              </div>
            </fieldset>

            <fieldset class="demo-fieldset--color">
              <legend class="mdc-typography--subtitle1">Text on user-defined dark background</legend>

              <div class="demo-theme-color-group">
                <div :class="['demo-theme-text-row demo-theme-bg--custom-dark', $tt('body2')]">
                  <span :class="['demo-theme-text-style', $textColor('primary', 'dark')]">Primary</span>
                  <span :class="['demo-theme-text-style', $textColor('secondary', 'dark')]">Secondary</span>
                  <span :class="['demo-theme-text-style', $textColor('hint', 'dark')]">Hint</span>
                  <span :class="['demo-theme-text-style', $textColor('disabled', 'dark')]">Disabled</span>
                  <span :class="['demo-theme-text-style', $textColor('icon', 'dark'), 'material-icons']">favorite</span>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
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
  beforeDestroy() {
    this.reset();
  },
  methods: {
    reset() {
      this.$setTheme('primary', '#6200ee');
      this.$setTheme('secondary', '#018786');
      this.$setTheme('background', '#fff');
      this.$setTheme('on-primary', '#fff');
      this.$setTheme('on-secondary', '#fff');
      this.$setTextTheme('primary', 'background', 'rgba(0, 0, 0, 0.87)');
      this.$setTextTheme('secondary', 'background', 'rgba(0, 0, 0, 0.54)');
      this.$setTextTheme('hint', 'background', 'rgba(0, 0, 0, 0.38)');
      this.$setTextTheme('disabled', 'background', 'rgba(0, 0, 0, 0.38)');
      this.$setTextTheme('icon', 'background', 'rgba(0, 0, 0, 0.38)');
    },
    onSelected(data) {
      let themeValue = this.colorItems[data.index].value;

      switch (themeValue) {
        case 'dark':
          this.$setTheme('primary', '#ffd54f');
          this.$setTheme('secondary', '#ec407a');
          this.$setTheme('on-primary', '#000');
          this.$setTheme('on-secondary', '#fff');
          break;
        case 'black':
          this.$setTheme('primary', '#212121');
          this.$setTheme('secondary', '#64dd17');
          this.$setTheme('on-primary', '#fff');
          this.$setTheme('on-secondary', '#000');
          break;
        case 'shrine':
          this.$setTheme('primary', '#fcb8ab');
          this.$setTheme('secondary', '#feeae6');
          this.$setTheme('on-primary', '#442b2d');
          this.$setTheme('on-secondary', '#442b2d');
          break;
        default:
          this.reset();
          break;
      }

      if (themeValue !== 'baseline') {
        if (themeValue === 'dark') {
          this.$setTheme('background', '#212121');
          this.$setTextTheme('primary', 'background', 'white');
          this.$setTextTheme('secondary', 'background', 'rgba(255, 255, 255, 0.7)');
          this.$setTextTheme('hint', 'background', 'rgba(255, 255, 255, 0.5)');
          this.$setTextTheme('disabled', 'background', 'rgba(255, 255, 255, 0.5)');
          this.$setTextTheme('icon', 'background', 'rgba(255, 255, 255, 0.5)');
        } else {
          this.$setTheme('background', '#fff');
          this.$setTextTheme('primary', 'background', 'rgba(0, 0, 0, 0.87)');
          this.$setTextTheme('secondary', 'background', 'rgba(0, 0, 0, 0.54)');
          this.$setTextTheme('hint', 'background', 'rgba(0, 0, 0, 0.38)');
          this.$setTextTheme('disabled', 'background', 'rgba(0, 0, 0, 0.38)');
          this.$setTextTheme('icon', 'background', 'rgba(0, 0, 0, 0.38)');
        }
      }

      this.$refs.colorButton.$el.dataset.theme = themeValue;
    }
  }
};
</script>
