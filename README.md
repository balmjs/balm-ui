# [BalmUI](https://material.balmjs.com/) [![NPM version][balm-ui-image]][balm-ui-url] [![NPM version][mdc-web-image]][mdc-web-url]

> Next Generation Material UI for Vue.js

## What is BalmUI?

Following the [Material Design](https://material.io/components/) UI components for the web specification, we developed a BalmUI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.

## [Demos & Documentation](https://material.balmjs.com/)(updated with every release)

## Quick Start

### 0. Requirement

- [BalmJS](https://balmjs.com/)(Recommended) or other toolchains
- [Vue.js](https://vuejs.org/)@2.x

### 1. Install

```sh
npm install --save balm-ui
// OR
yarn add balm-ui
```

### 2. Config

Edit `my-project/app/styles/global/_vendor.scss`

```css
/* Add BalmUI styles */
@import 'node_modules/balm-ui/src/styles/balm-ui.scss';
```

Download [Material Design Icons](https://material.balmjs.com/MaterialIcons.zip) and extract to `/path/to/my-project/app/fonts`.

### 3. Usage

Edit `my-project/app/scripts/main.js`

#### 3.1 Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional

Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional
```

#### 3.2 Standalone Usage

```js
import Vue from 'vue';
import UiButtonComponents from 'balm-ui/components/button';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/icon.css'; // Optional.

Vue.use(UiButtonComponents);
```

Enjoy 👻

## Reusability & Composition

### Components

- Layouts
  - Layout Grid
  - Toolbar (:skull:)
  - Top App Bar (migrate from Toolbar)
  - Drawer
  - Tabs
- Buttons
  - Button
  - Floating Action
  - <del>Icon Toggle</del> (:skull:)
  - Icon Button (migrate from Icon Toggle)
- Icon
- Data View
  - List
  - Grid List (:skull:)
  - Image List (migrate from Grid List)
  - Card
  - Chips
  - Pagination (:bulb:)
  - Text Divider (:bulb:)
- Linear Progress
- Inputs and Controls
  - Text Field
  - Checkbox
  - Radio
  - Select
  - Switch
  - Slider
  - Dropdown (:bulb:)
  - Autocomplete (:bulb:)
  - File (:bulb:)
- Modal
  - Dialog
  - Snackbar
- Menu

### Plugins

- Event
- Grid (TODO)
- Typography
- Theme
- Validator (:bulb:)
- Alert (:bulb:)
- Confirm (:bulb:)
- Toast (:bulb:)

### Directives

- Ripple
- Elevation
- Anchor (:bulb:)

### Utilities

- Type Detections
- Helper Functions
- IE Detection

> :bulb:: Plus UI, :skull:: Deprecated

## Contributing

We'd love for you to contribute and make BalmUI even better than it is today! Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request. You can submit any ideas as [pull requests](https://github.com/balmjs/ui-vue/pulls) or as [GitHub issues](https://github.com/balmjs/ui-vue/issues).

## Browser support

We officially support the last two versions of every major browser. Specifically, we test on the following browsers:

- **Chrome** on Android, Windows, macOS, and Linux
- **Firefox** on Windows, macOS, and Linux
- **Safari** on iOS and macOS
- **Edge** on Windows
- **IE** 11 on Windows

## Thank you

- [BalmJS](https://balmjs.com/)
- [Vue.js](https://vuejs.org/)
- [MDC Web](https://material.io/components/)

[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://npmjs.org/package/balm-ui
[mdc-web-image]: https://img.shields.io/badge/mdc--web-0.42.1-brightgreen.svg
[mdc-web-url]: https://www.npmjs.com/package/material-components-web
