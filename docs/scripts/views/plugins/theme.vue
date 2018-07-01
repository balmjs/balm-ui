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
                    $themeColor('on-background')]">Background</div>
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
