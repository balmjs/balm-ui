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

### 2. Config

2.1 Edit `/path/to/project/styles/_vendor.scss`

```css
/* Sass code  */
@import 'node_modules/balm-ui/src/styles/balm-ui.scss';
```

2.2 Download [Material Design Icons](https://material.balmjs.com/MaterialIcons.zip) and extract to `/path/to/project/fonts`.

### 3. Usage

Edit `/path/to/project/scripts/main.js`

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Enjoy 👻
