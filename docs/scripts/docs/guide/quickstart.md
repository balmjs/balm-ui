# Quick Start

Good tools make application development quicker and easier to maintain than if you did everything by hand.

The [Balm CLI](https://github.com/balmjs/balm-cli) is a command line interface tool that scaffolds out a [BalmJS](https://balmjs.com/) project.

> [BalmJS](https://balmjs.com/)@2.8.0+(Recommended) or other toolchains 🚀

## 0. Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least Node.js version 10.13.x or greater and npm version 5.2.x or greater** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

🔔 BalmJS workflow using [gulp](https://balmjs.com/) for the build process, so you need install `gulp-cli` globally.

```sh
yarn global add gulp-cli
# OR
npm install -g gulp-cli

# Verify
$ gulp -v
# Output:
# CLI version: 2.2.0
```

Then install the [Balm CLI](https://github.com/balmjs/balm-cli) globally.

```sh
yarn global add balm-cli
# OR
npm install -g balm-cli
```

## 1. Create a new project

Open a terminal window.

Generate a new project and default app by running the following command:

```sh
balm init vue my-project
```

## 2. Install

Go to the project directory.

```sh
cd my-project
```

2.1 Install dependencies

```sh
yarn
# OR
npm install
```

Installs the necessary npm packages, This can take some time.

> (China Only) 如果“网络”不科学，请设置[淘宝源](https://developer.aliyun.com/mirror/NPM)

2.2 Install **BalmUI**

```sh
yarn add balm-ui
# OR
npm install --save balm-ui
```

## 3. Config

- **`balm.config`** [**setup**](https://balmjs.com/docs/v2/config/styles.html#styles-dartsass) for Dart Sass

⚠️️ Edit `my-project/config/balmrc.js`

```js
module.exports = {
  styles: {
    extname: 'scss',
    dartSass: true // !important
  }
  // Other Options...
};
```

- Download [Material Design Icons](https://material.balmjs.com/material-icons.zip) and extract to `/path/to/my-project/app/fonts`.

> More BalmUI usages and font without downloading, see [Advanced Usage](https://material.balmjs.com/#/guide/advanced).

## 4. Usage

### Default Usage

Edit `my-project/app/styles/global/_vendor.scss`

```css
/* import BalmUI styles */
@use 'balm-ui/dist/balm-ui.scss';
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

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/button/button.scss';
@use 'balm-ui/components/dialog/dialog.scss';
@use 'balm-ui/plugins/alert/alert.scss';
```

Edit `my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import UiButton from 'balm-ui/components/button';

Vue.use(UiButton);
```

## 5. Development and testing

```sh
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

```sh
npm run prod
```

Enjoy 👻
