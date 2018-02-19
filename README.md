# BalmUI

> Material Components + Vue

## Quick Start

### 0. Requirement

* [BalmJS](http://balmjs.com/)
* [Vue.js](https://vuejs.org/)@2.1.0+

### 1. Install

```sh
yarn add balm-ui
// or
npm install --save balm-ui
```

### 2. Setup

2.1 CSS Config (**`/path/to/_vendor.scss`**)

```css
@import 'node_modules/balm-ui/src/styles/main.scss';
```

2.2 JS Config (**`./gulpfile.js`**)

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

## Helpers

```js
import { helpers } from 'balm-ui';
```

* getType
* isBoolean
* isNull
* isUndefined
* isNumber
* isString
* isSymbol
* isObject
* isArray
* isFunction
* detectIE

## Mixins

```js
import {mixins} from 'balm-ui';

export default {
  mixins: [mixins.formValidator],
  ...
};
```

* formValidator

## Components

```js
import {UiButton, UiIcon} from 'balm-ui';

export default {
  components: {
    UiButton,
    UiIcon
  },
  ...
};
```

* Layout
  * Drawer
  * Toolbar (Header and footers)
  * Grid (Grid and gutter support)
  * Tabs (Tabs with support for icon and text labels)
* Common
  * Material Icon
  * Button (Raised and flat buttons)
  * Fab (The primary action in an application)
  * Icon Toggle (Toggling icon states)
  * Menu (Pop over menus)
  * Linear Progress (Fills from 0% to 100%, represented by bars)
* Input Controls
  * Form Field
  * Checkbox (Multi-selection controls)
  * Radio (Single selection controls)
  * Select (Popover selection menus)
  * Slider (Range Controls)
  * Switch (On off switches)
  * Textfield (Single and multiline text fields)
* Data
  * Card (Various card layout styles)
  * Grid List (2D grid layouts)
  * List (Item layouts in lists)
* Dialog
  * Dialog (Secondary text)
  * Snackbar (Transient messages)

## Plugins

```js
import Vue from 'vue';
import { plugins } from 'balm-ui';

Vue.use(plugins.alert);

export default {
  created() {
    this.$alert('message');
  }
};
```

* event
  * onChange
  * openDialog/showDialog
  * closeDialog/hideDialog
  * setGrid
* mixin
  * elevation (Shadow for different elevations)
  * theme (Using primary and accent colors)
  * typography (Type hierarchy)
* alert
* confirm
* toast

## `balm-ui`@0.1.x

Migrated to [balm-ui-lite](https://github.com/balmjs/ui-vue-lite/tree/0.1.x)@0.1.x

> **thx [BalmJS](http://balmjs.com/) & [Vue.js](https://vuejs.org/)**
