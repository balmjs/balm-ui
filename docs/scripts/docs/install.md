## Installation & Setup

### Requirement

- [BalmJS](http://balmjs.com/)
- [Vue.js](https://vuejs.org/)@2.1.0+

### Install

```sh
npm install --save balm-ui
```

### Setup

### 1. CSS Config

#### 1.1 Use Sass (Recommended)

__`/path/to/_vendor.scss`__

```css
@import 'node_modules/balm-ui/src/styles/main.scss';
```

#### 1.2 Use JavaScript

```sh
npm install --save-dev sass-loader
```

__`gulpfile.js`__

```js
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.scss$/,
      loader: 'sass'
    }],
    alias: {
      'balm-css': 'balm-ui/balm-ui/src/styles/main.scss'
    }
  },
  ...
};
```

__`/path/to/yours_main.js`__

```js
import 'balm-css';
```

### 2. JS Config

__`gulpfile.js`__

```js
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /balm-ui.src.*?js$/,
      loader: 'babel'
    }],
    alias: {
      'vue': 'vue/dist/vue.js',
      'balm-ui': 'balm-ui/src/index.js'
    }
  },
  ...
};
```

__`/path/to/yours_main.js`__

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### 3. Assets Config

- Copy [BalmUI assets](http://balmjs.com/ui-vue/assets.zip) (images & fonts) to your project
