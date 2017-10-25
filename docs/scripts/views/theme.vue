<template>
  <div class="demo--theme">
    <section class="hero">
      <ui-button raised :class="[
        themeColor('primary', true),
        textColor('primary', 'primary')
      ]">Primary</ui-button>
      <ui-button raised :class="[
        themeColor('secondary', true),
        textColor('primary', 'secondary')
      ]">Secondary</ui-button>
    </section>

    <h2 :class="typography('display1')">Theme colors</h2>

    <section class="example">
      <h3 :class="typography('title')">Theme colors as text</h3>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          themeColor('primary'),
          typography('body2')
        ]">Primary</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('primary-light'),
          typography('body2')
        ]">Primary Light</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('primary-dark'),
          typography('body2')
        ]">Primary Dark</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          themeColor('secondary'),
          typography('body2')
        ]">Secondary</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('secondary-light'),
          typography('body2')
        ]">Secondary Light</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('secondary-dark'),
          typography('body2')
        ]">Secondary Dark</div>
      </div>
    </section>

    <section class="example">
      <h3 :class="typography('title')">Theme colors as background</h3>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          themeColor('primary', true),
          textColor('primary', 'primary')
        ]">Primary</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('primary-light', true),
          textColor('primary', 'primary-light')
        ]">Primary Light</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('primary-dark', true),
          textColor('primary', 'primary-dark')
        ]">Primary Dark</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          themeColor('secondary', true),
          textColor('primary', 'secondary')
        ]">Secondary</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('secondary-light', true),
          textColor('primary', 'secondary-light')
        ]">Secondary Light</div>
        <div :class="[
          'demo-theme__color__block',
          themeColor('secondary-dark', true),
          textColor('primary', 'secondary-dark')
        ]">Secondary Dark</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          themeColor('background'),
          textColor('primary', 'background')
        ]">Background</div>
      </div>
    </section>

    <section class="example">
      <h3 :class="typography('title')">Light and dark tonal variants for extreme input luminance</h3>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--low-luminance',
          textColor('primary', 'dark')
        ]">Low Luminance</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--low-luminance-light',
          textColor('primary', 'dark')
        ]">Light Variant</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--low-luminance-dark',
          textColor('primary', 'dark')
        ]">Dark Variant</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--high-luminance',
          textColor('primary', 'light')
        ]">High Luminance</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--high-luminance-light',
          textColor('primary', 'light')
        ]">Light Variant</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--high-luminance-dark',
          textColor('primary', 'light')
        ]">Dark Variant</div>
      </div>
    </section>

    <h2 :class="typography('display1')">Text colors for contrast</h2>

    <section class="example">
      <h3 :class="typography('title')">Text on background</h3>
      <div :class="['demo-theme__text-styles', themeColor('background'), typography('body2')]">
        <span :class="textColor('primary', 'background')">Primary</span>
        <span :class="textColor('secondary', 'background')">Secondary</span>
        <span :class="textColor('hint', 'background')">Hint</span>
        <span :class="textColor('disabled', 'background')">Disabled</span>
        <span :class="[textColor('icon', 'background'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="typography('title')">Text on primary</h3>
      <div :class="['demo-theme__text-styles', themeColor('primary', true), typography('body2')]">
        <span :class="textColor('primary', 'primary')">Primary</span>
        <span :class="textColor('secondary', 'primary')">Secondary</span>
        <span :class="textColor('hint', 'primary')">Hint</span>
        <span :class="textColor('disabled', 'primary')">Disabled</span>
        <span :class="[textColor('icon', 'primary'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="typography('title')">Text on secondary</h3>
      <div :class="['demo-theme__text-styles', themeColor('secondary', true), typography('body2')]">
        <span :class="textColor('primary', 'secondary')">Primary</span>
        <span :class="textColor('secondary', 'secondary')">Secondary</span>
        <span :class="textColor('hint', 'secondary')">Hint</span>
        <span :class="textColor('disabled', 'secondary')">Disabled</span>
        <span :class="[textColor('icon', 'secondary'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="typography('title')">Text on user-defined light background</h3>
      <div :class="['demo-theme__text-styles', 'demo-theme--custom-light-bg', typography('body2')]">
        <span :class="textColor('primary', 'light')">Primary</span>
        <span :class="textColor('secondary', 'light')">Secondary</span>
        <span :class="textColor('hint', 'light')">Hint</span>
        <span :class="textColor('disabled', 'light')">Disabled</span>
        <span :class="[textColor('icon', 'light'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="typography('title')">Text on user-defined dark background</h3>
      <div :class="['demo-theme__text-styles', 'demo-theme--custom-dark-bg', typography('body2')]">
        <span :class="textColor('primary', 'dark')">Primary</span>
        <span :class="textColor('secondary', 'dark')">Secondary</span>
        <span :class="textColor('hint', 'dark')">Hint</span>
        <span :class="textColor('disabled', 'dark')">Disabled</span>
        <span :class="[textColor('icon', 'dark'), 'material-icons']">favorite</span>
      </div>
    </section>
  </div>
</template>
