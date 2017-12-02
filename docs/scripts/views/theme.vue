<template>
  <div class="demo--theme">
    <section class="hero">
      <ui-button raised :class="[
        balmUI.themeColor('primary', true),
        balmUI.textColor('primary', 'primary')
      ]">Primary</ui-button>
      <ui-button raised :class="[
        balmUI.themeColor('secondary', true),
        balmUI.textColor('primary', 'secondary')
      ]">Secondary</ui-button>
    </section>

    <h2 :class="balmUI.tt('display1')">Theme colors</h2>

    <section class="example">
      <h3 :class="balmUI.tt('title')">Theme colors as text</h3>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('primary'),
          balmUI.tt('body2')
        ]">Primary</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('primary-light'),
          balmUI.tt('body2')
        ]">Primary Light</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('primary-dark'),
          balmUI.tt('body2')
        ]">Primary Dark</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('secondary'),
          balmUI.tt('body2')
        ]">Secondary</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('secondary-light'),
          balmUI.tt('body2')
        ]">Secondary Light</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('secondary-dark'),
          balmUI.tt('body2')
        ]">Secondary Dark</div>
      </div>
    </section>

    <section class="example">
      <h3 :class="balmUI.tt('title')">Theme colors as background</h3>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('primary', true),
          balmUI.textColor('primary', 'primary')
        ]">Primary</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('primary-light', true),
          balmUI.textColor('primary', 'primary-light')
        ]">Primary Light</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('primary-dark', true),
          balmUI.textColor('primary', 'primary-dark')
        ]">Primary Dark</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('secondary', true),
          balmUI.textColor('primary', 'secondary')
        ]">Secondary</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('secondary-light', true),
          balmUI.textColor('primary', 'secondary-light')
        ]">Secondary Light</div>
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('secondary-dark', true),
          balmUI.textColor('primary', 'secondary-dark')
        ]">Secondary Dark</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          balmUI.themeColor('background'),
          balmUI.textColor('primary', 'background')
        ]">Background</div>
      </div>
    </section>

    <section class="example">
      <h3 :class="balmUI.tt('title')">Light and dark tonal variants for extreme input luminance</h3>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--low-luminance',
          balmUI.textColor('primary', 'dark')
        ]">Low Luminance</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--low-luminance-light',
          balmUI.textColor('primary', 'dark')
        ]">Light Variant</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--low-luminance-dark',
          balmUI.textColor('primary', 'dark')
        ]">Dark Variant</div>
      </div>
      <div class="demo-theme__color">
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--high-luminance',
          balmUI.textColor('primary', 'light')
        ]">High Luminance</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--high-luminance-light',
          balmUI.textColor('primary', 'light')
        ]">Light Variant</div>
        <div :class="[
          'demo-theme__color__block',
          'demo-theme-bg--high-luminance-dark',
          balmUI.textColor('primary', 'light')
        ]">Dark Variant</div>
      </div>
    </section>

    <h2 :class="balmUI.tt('display1')">Text colors for contrast</h2>

    <section class="example">
      <h3 :class="balmUI.tt('title')">Text on background</h3>
      <div :class="['demo-theme__text-styles', balmUI.themeColor('background'), balmUI.tt('body2')]">
        <span :class="balmUI.textColor('primary', 'background')">Primary</span>
        <span :class="balmUI.textColor('secondary', 'background')">Secondary</span>
        <span :class="balmUI.textColor('hint', 'background')">Hint</span>
        <span :class="balmUI.textColor('disabled', 'background')">Disabled</span>
        <span :class="[balmUI.textColor('icon', 'background'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="balmUI.tt('title')">Text on primary</h3>
      <div :class="['demo-theme__text-styles', balmUI.themeColor('primary', true), balmUI.tt('body2')]">
        <span :class="balmUI.textColor('primary', 'primary')">Primary</span>
        <span :class="balmUI.textColor('secondary', 'primary')">Secondary</span>
        <span :class="balmUI.textColor('hint', 'primary')">Hint</span>
        <span :class="balmUI.textColor('disabled', 'primary')">Disabled</span>
        <span :class="[balmUI.textColor('icon', 'primary'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="balmUI.tt('title')">Text on secondary</h3>
      <div :class="['demo-theme__text-styles', balmUI.themeColor('secondary', true), balmUI.tt('body2')]">
        <span :class="balmUI.textColor('primary', 'secondary')">Primary</span>
        <span :class="balmUI.textColor('secondary', 'secondary')">Secondary</span>
        <span :class="balmUI.textColor('hint', 'secondary')">Hint</span>
        <span :class="balmUI.textColor('disabled', 'secondary')">Disabled</span>
        <span :class="[balmUI.textColor('icon', 'secondary'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="balmUI.tt('title')">Text on user-defined light background</h3>
      <div :class="['demo-theme__text-styles', 'demo-theme--custom-light-bg', balmUI.tt('body2')]">
        <span :class="balmUI.textColor('primary', 'light')">Primary</span>
        <span :class="balmUI.textColor('secondary', 'light')">Secondary</span>
        <span :class="balmUI.textColor('hint', 'light')">Hint</span>
        <span :class="balmUI.textColor('disabled', 'light')">Disabled</span>
        <span :class="[balmUI.textColor('icon', 'light'), 'material-icons']">favorite</span>
      </div>
      <h3 :class="balmUI.tt('title')">Text on user-defined dark background</h3>
      <div :class="['demo-theme__text-styles', 'demo-theme--custom-dark-bg', balmUI.tt('body2')]">
        <span :class="balmUI.textColor('primary', 'dark')">Primary</span>
        <span :class="balmUI.textColor('secondary', 'dark')">Secondary</span>
        <span :class="balmUI.textColor('hint', 'dark')">Hint</span>
        <span :class="balmUI.textColor('disabled', 'dark')">Disabled</span>
        <span :class="[balmUI.textColor('icon', 'dark'), 'material-icons']">favorite</span>
      </div>
    </section>
  </div>
</template>
