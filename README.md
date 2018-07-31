# [BalmUI](https://material.balmjs.com/) [![NPM version][balm-ui-image]][balm-ui-url]

> Next Generation Material UI for Vue.js

## Quick Start

### 0. Requirement

- [BalmJS](https://balmjs.com/)
- [Vue.js](https://vuejs.org/)@2.x

### 1. Install

```sh
npm install --save balm-ui
// or
yarn add balm-ui
```

### 2. CSS Config

```css
/* `/path/to/_vendor.scss` */

/* Sass code  */
@import 'node_modules/balm-ui/src/styles/balm-ui.scss';
```

### 3. Usage

```js
// `/path/to/your_main.js`

import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
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

[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://npmjs.org/package/balm-ui

> **thx [BalmJS](https://balmjs.com/) & [Vue.js](https://vuejs.org/)**
