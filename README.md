# [BalmUI](https://material.balmjs.com/) [![NPM version][balm-ui-image]][balm-ui-url]

> Next Generation Material UI for Vue.js

## What is BalmUI?

Following the [Material Design](https://material.io/components/) UI components for the web specification, we developed a BalmUI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.

## Quick Start

### 0. Requirement

- [BalmJS](https://balmjs.com/)
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

```js
import Vue from 'vue';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional

Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional
```

Enjoy 👻

## [Documentation](https://material.balmjs.com/)

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
  - Icon Toggle (:skull:)
  - Icon Button (migrate from Icon Toggle)
- Icon
- Data View
  - List
  - Grid List (:skull:)
  - Image List (migrate from Grid List)
  - Card
  - Chips
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
- Modal
  - Dialog
  - Snackbar
- Menu

### Plugins

- Event
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
- Shape

### Utilities

- IE Detection
- Type Detection
- Util Function

> :bulb:: Plus UI, :skull:: Deprecated

## Contributing

We'd love for you to contribute and make BalmUI even better than it is today!

Welcome to help us improve BalmUI, and issues [here](https://github.com/balmjs/ui-vue/issues).

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
