# 快速入门

Good tools make application development quicker and easier to maintain than if you did everything by hand.

The [Balm CLI](https://github.com/balmjs/balm-cli) is a command line interface tool that scaffolds out a [BalmJS](https://github.com/balmjs/balm) project.

> [BalmJS](https://balm.js.org/)@2.8.0+(Recommended) or other toolchains 🚀

## 0. Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least Node.js version 12.0.0 or greater and npm version 5.2.0 or greater** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

First install the [Balm Core](https://github.com/balmjs/balm) and [Balm CLI](https://github.com/balmjs/balm-cli) globally.

```bash
yarn global add balm-core balm-cli
# OR
npm install -g balm-core balm-cli
```

## 1. Create a new project

Open a terminal window.

Generate a new project and default app by running the following command:

```bash
balm init vue my-project
```

## 2. Install

Go to the project directory.

```bash
cd my-project
```

2.1 Install dependencies

```bash
yarn
# OR
npm install
```

Installs the necessary npm packages, This can take some time.

> (China Only) 如果“网络”不科学，请设置[淘宝源](https://developer.aliyun.com/mirror/NPM)

2.2 Install **BalmUI**

```bash
yarn add balm-ui
# OR
npm install --save balm-ui
```

## 3. Config

- **`balm.config`** [**setup**](https://balm.js.org/docs/config/styles.html#styles-dartsass) for Dart Sass

⚠️️ Edit `my-project/config/balmrc.js`

```js
module.exports = {
  styles: {
    extname: 'scss',
    dartSass: true // required
  }
  // Other Options...
};
```

- Download [Material Design Icons](https://material.balmjs.com/material-icons.zip) and extract to `/path/to/my-project/app/fonts`.

> More BalmUI usages and font without downloading, see [Advanced Usage](https://material.balmjs.com/#/guide/advanced).

## 4. Usage

### Default Usage

Edit `my-project/app/styles/global/_vendor.scss`

```scss
/* import BalmUI styles */
@use 'balm-ui/dist/balm-ui';
```

> Recommend to use Sass in `/path/to/your-project/styles/_vendor.scss`, and you can use more advanced style usage of the BalmUI.

Edit `my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui'; // BalmUI Core & Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components

Vue.config.productionTip = false;
Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### Individual Usage

Edit `my-project/app/styles/global/_vendor.scss`

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/alert/alert';
```

Edit `my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import UiButton from 'balm-ui/components/button';

Vue.use(UiButton);
```

## 5. Development and testing

```bash
npm run dev
```

Edit a vue component: `my-project/app/scripts/views/components/hello.vue`

```html
<template>
  <div class="hello">
    ...
    <!-- Add a test button -->
    <ui-button @click="$alert('gg')">Click Me</ui-button>
  </div>
</template>
```

## 6. Bundling and deployment

```bash
npm run prod
```

Enjoy 👻
