# [BalmUI](https://material.balmjs.com/) [![BalmUI version][balm-ui-image]][balm-ui-url] [![MDC version][mdc-web-image]][mdc-web-url] [![FOSSA Status][fossa-image]][fossa-url]

> Next Generation Material UI for Vue.js

## What is BalmUI?

Following the [Material Design](https://material.io/components/) UI components for the web specification, we developed the BalmUI library that contains a set of high quality components and demos for building rich, interactive user interfaces.

## [Documentation & Demos](https://material.balmjs.com/)

## Quick Start

### 0. Requirement

- [BalmJS](https://balmjs.com/)@2.8.0+(Recommended) or other toolchains
- [Vue.js](https://vuejs.org/)@2.1.0+

### 1. Install

```sh
yarn add balm-ui
// OR
npm install --save balm-ui
```

### 2. Config

- **`balm.config`** [**setup**](https://balmjs.com/docs/v2/config/styles.html#styles-dartsass) for Dart Sass

```js
balm.config = {
  styles: {
    extname: 'scss',
    dartSass: true // !important
  }
  // Other Options...
};
```

- Download [Material Design Icons](https://material.balmjs.com/material-icons.zip) and extract to `/path/to/my-project/app/fonts`.

### 3. Usage

#### Default Usage

Edit `my-project/app/styles/global/_vendor.scss`

```scss
/* Add BalmUI styles */
@use 'balm-ui/dist/balm-ui.scss';
```

Edit `my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional
import BalmUINext from 'balm-ui/dist/balm-ui-next'; // Experimental

Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional
Vue.use(BalmUINext); // Experimental
```

#### Standalone Usage

Edit `my-project/app/styles/global/_vendor.scss`

```scss
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/button/button.scss';
@use 'balm-ui/components/icon/icon.scss';
```

Edit `my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import UiButtonComponents from 'balm-ui/components/button';

Vue.use(UiButtonComponents);
```

Enjoy 👻

## Reusability & Composition

### Components

- General
  - Button
  - Floating Action Button
  - Icon Button
- Layout
  - Top App Bar
  - Layout Grid
- Navigation
  - Drawer
  - Tabs
  - Menu
- Theme
  - Icon (Material icons)
- Data Entry
  - Text Field
  - Select
  - Checkbox
  - Radio
  - Switch
  - Slider
  - File (:bulb:)
  - Autocomplete (:bulb:)
  - Datepicker (:bulb:)
  - Rangepicker (:bulb:)
- Data View
  - List
  - Image List
  - Card
  - Chips
  - Data Table
  - Pagination (:bulb:)
  - Text Divider (:bulb:)
- Feedback
  - Dialog
  - Snackbar
  - Linear Progress
  - Circular Progress
  - Skeleton (:bulb:)

### Plugins

- Event (:bulb:)
- Grid
- Typography
- Theme
- Validator (:bulb:)
- Alert (:bulb:)
- Confirm (:bulb:)
- Toast (:bulb:)

### Directives

- Ripple
- Elevation
- A11y
- Shape
- Anchor (:bulb:)

### Utilities (:bulb:)

- Type Detections
- Helper Functions
- IE Detection

> :bulb:: Plus UI

## Contributing

We'd love for you to contribute and make BalmUI even better than it is today! Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request. You can submit any ideas as [pull requests](https://github.com/balmjs/balm-ui/pulls) or as [GitHub issues](https://github.com/balmjs/balm-ui/issues).

## Browser support

We officially support the last two versions of every major browser. Specifically, we test on the following browsers:

- **Chrome** on Android, Windows, macOS, and Linux
- **Firefox** on Windows, macOS, and Linux
- **Safari** on iOS and macOS
- **Edge** on Windows
- **IE** 11 on Windows

## Special Thanks to

- [BalmJS](https://balmjs.com/)
- [Vue.js](https://vuejs.org/)
- [MDC Web](https://material.io/components/)

[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://www.npmjs.com/package/balm-ui
[mdc-web-image]: https://img.shields.io/badge/mdc--web-6.0.0-blue.svg
[mdc-web-url]: https://www.npmjs.com/package/material-components-web
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui?ref=badge_shield

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui?ref=badge_large)
