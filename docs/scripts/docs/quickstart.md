## Quick Start

Good tools make application development quicker and easier to maintain than if you did everything by hand.

The [Balm CLI](https://github.com/balmjs/balm-cli) is a command line interface tool that scaffolds out a [BalmJS](https://balmjs.com/) project.

> [BalmJS](https://balmjs.com/)(Recommended) or other toolchains 🚀

### 0. Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least Node.js version 8.x or greater and npm version 5.x or greater** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

[BalmJS](https://balmjs.com/) using gulp for the build process, so we need to install gulp globally.

```sh
npm install -g gulp-cli
```

Then install the [Balm CLI](https://github.com/balmjs/balm-cli) globally.

```sh
npm install -g balm-cli
```

### 1. Create a new project

Open a terminal window.

Generate a new project and default app by running the following command:

```sh
balm init vue my-project
```

### 2. Install

Go to the project directory.

```sh
cd my-project
```

2.1 Install dependencies

```sh
npm install
# OR
yarn
```

Installs the necessary npm packages, This can take some time.

> (China Only) 如果“网络”不科学，请走[淘宝源](https://npm.taobao.org/)

2.2 Install **BalmUI**

```sh
npm i --save balm-ui
# OR
yarn add balm-ui
```

### 3. Config

3.1 CSS (Edit `my-project/app/styles/global/_vendor.scss`)

```css
/* Add BalmUI styles */
@import 'node_modules/balm-ui/src/styles/balm-ui.scss';
```

> Recommend to use Sass in `/path/to/your-project/styles/_vendor.scss`, and you can use more advanced style usage of the BalmUI.

3.2 JS (Edit `my-project/app/scripts/main.js`)

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional

Vue.config.productionTip = false;
Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

3.3 Font

Download [Material Design Icons](https://material.balmjs.com/material-icons.zip) and extract to `/path/to/my-project/app/fonts`.

> More BalmUI usages and font without downloading, see [Advanced Usage](https://material.balmjs.com/#/guide/advanced).

### 4. Development and testing

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

### 5. Bundling and deployment

```sh
npm run prod
```

Enjoy 👻
