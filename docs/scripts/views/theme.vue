<template>
  <div class="demo--theme">
    <section class="hero">
      <ui-button raised :class="[themeColor('primary', true), textColor('primary', 'primary')]">Primary</ui-button>
      <ui-button raised :class="[themeColor('accent', true), textColor('primary', 'accent')]">Accent</ui-button>
    </section>

    <h2 class="mdc-typography--display1">Theme colors</h2>

    <section class="example">
      <h3 class="mdc-typography--title">Theme colors as text</h3>
      <div class="demo-theme__color">
        <div class="demo-theme__color__label">Primary</div>
        <div :class="['demo-theme__color__block', themeColor('primary'), 'mdc-typography mdc-typography--body2']">Lorem ipsum</div>
      </div>
      <div class="demo-theme__color">
        <div class="demo-theme__color__label">Accent</div>
        <div :class="['demo-theme__color__block',  themeColor('accent'), 'mdc-typography mdc-typography--body2']">Lorem ipsum</div>
      </div>
    </section>

    <section class="example">
      <h3 class="mdc-typography--title">Theme colors as background</h3>
      <div class="demo-theme__color">
        <div class="demo-theme__color__label">Primary</div>
        <div :class="['demo-theme__color__block', themeColor('primary', true)]"></div>
      </div>
      <div class="demo-theme__color">
        <div class="demo-theme__color__label">Accent</div>
        <div :class="['demo-theme__color__block', themeColor('accent', true)]"></div>
      </div>
      <div class="demo-theme__color">
        <div class="demo-theme__color__label">Background</div>
        <div :class="['demo-theme__color__block', themeColor('background')]"></div>
      </div>
    </section>

    <h2 class="mdc-typography--display1">Text colors for contrast</h2>

    <section class="example">
      <h3 class="mdc-typography--title">Text on background</h3>
      <div :class="['demo-theme__text-styles', themeColor('background'), 'mdc-typography mdc-typography--body2']">
        <span :class="textColor('primary', 'background')">Primary</span>
        <span :class="textColor('secondary', 'background')">Secondary</span>
        <span :class="textColor('hint', 'background')">Hint</span>
        <span :class="textColor('disabled', 'background')">Disabled</span>
        <span :class="[textColor('icon', 'background'), 'material-icons']">favorite</span>
      </div>
      <h3 class="mdc-typography--title">Text on primary</h3>
      <div :class="['demo-theme__text-styles', themeColor('primary', true), 'mdc-typography mdc-typography--body2']">
        <span :class="textColor('primary', 'primary')">Primary</span>
        <span :class="textColor('secondary', 'primary')">Secondary</span>
        <span :class="textColor('hint', 'primary')">Hint</span>
        <span :class="textColor('disabled', 'primary')">Disabled</span>
        <span :class="[textColor('icon', 'primary'), 'material-icons']">favorite</span>
      </div>
      <h3 class="mdc-typography--title">Text on accent</h3>
      <div :class="['demo-theme__text-styles', themeColor('accent', true), 'mdc-typography mdc-typography--body2']">
        <span :class="textColor('primary', 'accent')">Primary</span>
        <span :class="textColor('secondary', 'accent')">Secondary</span>
        <span :class="textColor('hint', 'accent')">Hint</span>
        <span :class="textColor('disabled', 'accent')">Disabled</span>
        <span :class="[textColor('icon', 'accent'), 'material-icons']">favorite</span>
      </div>
      <h3 class="mdc-typography--title">Text on user-defined light background</h3>
      <div class="demo-theme__text-styles demo-theme--custom-light-bg mdc-typography mdc-typography--body2">
        <span :class="textColor('primary', 'light')">Primary</span>
        <span :class="textColor('secondary', 'light')">Secondary</span>
        <span :class="textColor('hint', 'light')">Hint</span>
        <span :class="textColor('disabled', 'light')">Disabled</span>
        <span :class="[textColor('icon', 'light'), 'material-icons']">favorite</span>
      </div>
      <h3 class="mdc-typography--title">Text on user-defined dark background</h3>
      <div class="demo-theme__text-styles demo-theme--custom-dark-bg mdc-typography mdc-typography--body2">
        <span :class="textColor('primary', 'dark')">Primary</span>
        <span :class="textColor('secondary', 'dark')">Secondary</span>
        <span :class="textColor('hint', 'dark')">Hint</span>
        <span :class="textColor('disabled', 'dark')">Disabled</span>
        <span :class="[textColor('icon', 'dark'), 'material-icons']">favorite</span>
      </div>
    </section>
  </div>
</template>
