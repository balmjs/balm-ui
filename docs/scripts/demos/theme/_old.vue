<template>
  <div>
    <h5 :class="$tt('headline5')">Baseline Colors</h5>

    <section class="demo-component-section">
      <h6 :class="[$tt('headline6'), 'demo-component-section__heading']">
        CSS Classes
      </h6>

      <div class="demo-theme-color-section">
        <div class="demo-theme-color-section__row">
          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">Theme colors as text</legend>

            <div class="demo-theme-color-group">
              <div class="demo-theme-color-swatches">
                <div
                  :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('primary')
                  ]"
                >
                  Primary
                </div>
              </div>
              <div class="demo-theme-color-swatches">
                <div
                  :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('secondary')
                  ]"
                >
                  Secondary
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">
              Theme colors as background
            </legend>

            <div class="demo-theme-color-group">
              <div class="demo-theme-color-swatches">
                <div
                  :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('primary-bg'),
                    $themeColor('on-primary')
                  ]"
                >
                  Primary
                </div>
              </div>
              <div class="demo-theme-color-swatches">
                <div
                  :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('secondary-bg'),
                    $themeColor('on-secondary')
                  ]"
                >
                  Secondary
                </div>
              </div>
              <div class="demo-theme-color-swatches">
                <div
                  :class="[
                    'demo-theme-color-swatch demo-theme-color-swatch--elevated',
                    $themeColor('background'),
                    $textColor('primary')
                  ]"
                >
                  Background
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <ui-snippet :code="$store.demos[1]"></ui-snippet>
      </div>

      <div class="demo-theme-color-section">
        <div class="demo-theme-color-section_row">
          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">Text on background</legend>

            <div class="demo-theme-color-group">
              <div :class="['demo-theme-text-row', $themeColor('background')]">
                <span :class="['demo-theme-text-style', $textColor('primary')]"
                  >Primary</span
                >
                <span
                  :class="['demo-theme-text-style', $textColor('secondary')]"
                  >Secondary</span
                >
                <span :class="['demo-theme-text-style', $textColor('hint')]"
                  >Hint</span
                >
                <span :class="['demo-theme-text-style', $textColor('disabled')]"
                  >Disabled</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('icon'),
                    'material-icons'
                  ]"
                  >favorite</span
                >
              </div>
            </div>
          </fieldset>
        </div>
        <ui-snippet :code="$store.demos[2]"></ui-snippet>

        <div class="demo-theme-color-section__row">
          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">Text on primary</legend>

            <div class="demo-theme-color-group">
              <div :class="['demo-theme-text-row', $themeColor('primary-bg')]">
                <span
                  :class="['demo-theme-text-style', $themeColor('on-primary')]"
                  >Text</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $themeColor('on-primary'),
                    'material-icons'
                  ]"
                  >favorite</span
                >
              </div>
            </div>
          </fieldset>

          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">Text on secondary</legend>

            <div class="demo-theme-color-group">
              <div
                :class="['demo-theme-text-row', $themeColor('secondary-bg')]"
              >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $themeColor('on-secondary')
                  ]"
                  >Text</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $themeColor('on-secondary'),
                    'material-icons'
                  ]"
                  >favorite</span
                >
              </div>
            </div>
          </fieldset>
        </div>
        <ui-snippet :code="$store.demos[3]"></ui-snippet>

        <div class="demo-theme-color-section__row">
          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">
              Text on user-defined light background
            </legend>

            <div class="demo-theme-color-group">
              <div :class="['demo-theme-text-row demo-theme-bg--custom-light']">
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('primary', 'light')
                  ]"
                  >Primary</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('secondary', 'light')
                  ]"
                  >Secondary</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('hint', 'light')
                  ]"
                  >Hint</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('disabled', 'light')
                  ]"
                  >Disabled</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('icon', 'light'),
                    'material-icons'
                  ]"
                  >favorite</span
                >
              </div>
            </div>
          </fieldset>

          <fieldset class="demo-fieldset--color">
            <legend :class="$tt('subtitle1')">
              Text on user-defined dark background
            </legend>

            <div class="demo-theme-color-group">
              <div :class="['demo-theme-text-row demo-theme-bg--custom-dark']">
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('primary', 'dark')
                  ]"
                  >Primary</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('secondary', 'dark')
                  ]"
                  >Secondary</span
                >
                <span
                  :class="['demo-theme-text-style', $textColor('hint', 'dark')]"
                  >Hint</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('disabled', 'dark')
                  ]"
                  >Disabled</span
                >
                <span
                  :class="[
                    'demo-theme-text-style',
                    $textColor('icon', 'dark'),
                    'material-icons'
                  ]"
                  >favorite</span
                >
              </div>
            </div>
          </fieldset>
        </div>
        <ui-snippet :code="$store.demos[4]"></ui-snippet>
      </div>
    </section>
  </div>
</template>
