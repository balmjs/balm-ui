# BalmUI
> Material Design + Vue + Idea

## Installation & Setup

### 1. Requirement

- [BalmJS](http://balmjs.com/)
- [Vue.js](https://vuejs.org/)@2.1.0+

### 2. Install

```sh
npm install --save balm-ui
```

### 3. Setup

#### 1. CSS Config

##### 1.1 Use Sass (Recommended)

__`/path/to/_vendor.scss`__

```css
@import 'node_modules/balm-ui/src/styles/main.scss';
```

##### 1.2 Use JavaScript

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

#### 2. JS Config

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
      vue: 'vue/dist/vue.js',
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

#### 3. Assets Config

> BalmUI [images & fonts](http://balmjs.com/ui-vue/assets.zip)

## Components

- [x] Button ✅
- [x] Card
- [x] Checkbox
- [x] Dialog
- [x] Drawer
- [x] Elevation
- [x] FAB
- [x] Grid List
- [x] Icon Toggle
- [x] Layout grid
- [x] List
- [x] Select
- [x] Select2
- [x] Menu
- [x] Switch
- [x] Radio
- [x] Ripple
- [x] Snackbar
- [x] Form Field
- [x] Textfield
- [x] Textfield Helptext
- [x] Theme
- [x] Toolbar
- [x] Typography


> __thx [BalmJS](http://balmjs.com/) & [Vue.js](https://vuejs.org/)__
