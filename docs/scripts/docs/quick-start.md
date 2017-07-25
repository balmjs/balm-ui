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
