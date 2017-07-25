# BalmUI
> Material Components + Vue

## Quick Start

### 0. Requirement

- [BalmJS](http://balmjs.com/)
- [Vue.js](https://vuejs.org/)@2.1.0+

### 1. Install

```sh
yarn add balm-ui
// or
npm install --save balm-ui
```

### 2. Setup

2.1 CSS Config (__`/path/to/_vendor.scss`__)

```css
@import 'node_modules/balm-ui/src/styles/main.scss';
```

2.2 JS Config (__`./gulpfile.js`__)

```js
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue' // You need install `vue-loader`
    }, {
      test: /balm-ui.src.*?js$/,
      loader: 'babel' // BalmJS include `babel-loader` by default
    }],
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js',
      'balm-ui': 'balm-ui/src/index.js'
    }
  },
  ...
};
```

### 3. Usage

```js
// `/path/to/your_main.js`

import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Enjoy 👻

## Components

- Layout
    - Drawer
    - Toolbar
    - Grid
    - Tabs
- Common
    - Material Icon
    - Button
    - Fab
    - Icon Toggle
    - Menu
    - Linear Progress
- Input Controls
    - Form Field
    - Textfield
    - Checkbox
    - Radio
    - Select
    - Switch
- Data
    - Card
    - Grid List
    - List
- Dialog
    - Dialog
    - Snackbar

## Plugins

- helper
    - getType
    - isBoolean
    - isNull
    - isUndefined
    - isNumber
    - isString
    - isSymbol
    - isObject
    - isArray
    - isFunction
    - detectIE
- event
    - onChange
    - openDialog/showDialog
    - closeDialog/hideDialog
    - setGrid
- mixin
    - elevation
    - theme
    - typography
- alert
- confirm
- toast

## `balm-ui`@0.1.x

Migrated to [balm-ui-lite](https://github.com/balmjs/ui-vue-lite/tree/0.1.x)@0.1.x


> __thx [BalmJS](http://balmjs.com/) & [Vue.js](https://vuejs.org/)__
