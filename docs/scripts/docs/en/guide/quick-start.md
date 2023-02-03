# Quick Start

## TOC

0. <a href="javascript:void(0)" class="v-anchor" data-href="#for-env">Set up the Development Environment</a>
1. <a href="javascript:void(0)" class="v-anchor" data-href="#for-balm-cli">For Balm CLI</a>
2. <a href="javascript:void(0)" class="v-anchor" data-href="#for-vue-cli-or-vite">For Vue CLI or Vite</a>
3. <a href="javascript:void(0)" class="v-anchor" data-href="#for-script">For &lt;script&gt;</a>

<div id="for-env"></div>

## 0. Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least Node.js version 10.13.0 or greater and npm version 5.2.0 or greater** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

Good tools make application development quicker and easier to maintain than if you did everything by hand.

The [Balm CLI](https://github.com/balmjs/balm-cli) is a command line interface tool that scaffolds out a [BalmJS](https://github.com/balmjs/balm) project.

> **[Balm CLI](https://github.com/balmjs/balm-cli)**(Recommended) or [Vue CLI](https://github.com/vuejs/vue-cli)/[Vite](https://github.com/vitejs/vite) or other toolchains 🚀

- First install the [Balm Core](https://github.com/balmjs/balm) and [Balm CLI](https://github.com/balmjs/balm-cli) globally for Balm CLI.

  ```bash
  npm install -g balm-core balm-cli
  # OR
  yarn global add balm-core balm-cli
  ```

> ⚠️ NOTE: If you are using pnpm, please configure the `.npmrc` file for BalmUI

- Hoisting everything to the the root of node_modules:

  ```ini
  shamefully-hoist=true
  ```

- Or, hoisting only packages that match a pattern:

  ```ini
  public-hoist-pattern[]="*deepmerge*"
  public-hoist-pattern[]="*flatpickr*"
  public-hoist-pattern[]="*material-components-web*"
  public-hoist-pattern[]="@material/*"
  public-hoist-pattern[]="*quill*"
  ```

<div id="for-balm-cli"></div>

## 1. For Balm CLI

### 1.0 Create a new project

Open a terminal window.

Generate a new project and default app by running the following command:

```bash
balm init vue my-project
cd my-project # Go to the project directory
```

Install dependencies

```bash
yarn
# OR
npm install
```

Installs the necessary npm packages, This can take some time.

> (China Only) 如果“网络”不科学，请设置[淘宝源](https://developer.aliyun.com/mirror/NPM)

### 1.1 Installing `balm-ui`

```bash
yarn add balm-ui
# OR
npm install --save balm-ui
```

### 1.2 Configuration

update `balm.config.js`

- get [Material Icons](https://material.balmjs.com/material-icons.zip) without downloading (or, download and extract to `my-project/app/fonts`)

  ```js
  const api = (mix) => {
    if (mix.env.isDev) {
      mix.copy('node_modules/balm-ui/fonts/*', 'app/fonts');
    }
  };
  ```

- edit `my-project/config/balmrc.js` for using [Dart Sass](https://balm.js.org/docs/config/styles.html#styles-dartsass)

  ```js
  module.exports = {
    styles: {
      extname: 'scss'
    }
    // Other Options...
  };
  ```

### 1.3 Usage

#### Default Usage

- edit `my-project/app/styles/global/_vendor.scss`

  ```scss
  /* import BalmUI styles */
  @use 'balm-ui/dist/balm-ui';
  ```

> Recommend to use Sass in `/path/to/project-name/styles/_vendor.scss`, and you can use more advanced style usage of the BalmUI.

- edit `my-project/app/scripts/main.js`

  ```js
  import { createApp } from 'vue';
  import App from '@/views/layouts/app';
  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components

  const app = createApp(App);

  app.use(BalmUI); // Mandatory
  app.use(BalmUIPlus); // Optional

  app.mount('#app');
  ```

#### Individual Usage

- edit `my-project/app/styles/global/_vendor.scss`

  ```scss
  @use 'balm-ui/components/core';
  @use 'balm-ui/components/button/button';
  @use 'balm-ui/components/icon/icon';
  @use 'balm-ui/components/dialog/dialog';
  @use 'balm-ui/plugins/alert/alert';
  ```

- edit `my-project/app/scripts/main.js`

  ```js
  import { createApp } from 'vue';
  import App from '@/views/layouts/app';
  import UiButton from 'balm-ui/components/button';
  import $alert from 'balm-ui/plugins/alert';

  const app = createApp(App);

  app.use(UiButton);
  app.use($alert);

  app.mount('#app');
  ```

### 1.4 Development and testing

```bash
npm run dev
```

- edit a vue component: `my-project/app/scripts/views/components/hello.vue`

  ```html
  <template>
    <div class="hello">
      ...
      <!-- Add a test button -->
      <ui-button icon="add" @click="$alert('Hello BalmUI')">Click Me</ui-button>
    </div>
  </template>
  ```

### 1.5 Bundling and deployment

```bash
npm run prod
```

<div id="for-vue-cli-or-vite"></div>

## 2. For Vue CLI or Vite

### 2.0 Create a project

- `vue-cli`

  ```bash
  vue create my-project

  cd my-project
  ```

- `vite`

  ```bash
  # npm 6.x
  npm init @vitejs/app my-project --template vue

  # npm 7+, extra double-dash is needed:
  npm init @vitejs/app my-project -- --template vue

  # yarn
  yarn create @vitejs/app my-project --template vue

  cd my-project
  ```

### 2.1 Installing `balm-ui`

```bash
yarn add balm-ui
# OR
npm install --save balm-ui
```

### 2.2 Configuration

- `vue-cli`

  ```js
  // vue.config.js
  module.exports = {
    runtimeCompiler: true,
    // NOTE: set alias via `configureWebpack` or `chainWebpack`
    configureWebpack: {
      resolve: {
        alias: {
          'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
          'balm-ui-css': 'balm-ui/dist/balm-ui.css'
        }
      }
    }
    // chainWebpack: (config) => {
    //   config.resolve.alias
    //     .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
    //     .set('balm-ui-css', 'balm-ui/dist/balm-ui.css');
    // }
  };
  ```

- `vite`

  ```js
  // vite.config.js
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';

  export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.esm.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css'
      }
    }
  });
  ```

### 2.3 Usage

- edit `my-project/src/main.js`

  ```js
  import { createApp } from 'vue';
  import App from './App.vue';

  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
  import 'balm-ui-css';

  const app = createApp(App);

  app.use(BalmUI);
  app.use(BalmUIPlus);

  app.mount('#app');
  ```

<div id="for-script"></div>

## 3. For `<script>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello BalmUI</title>
    <link rel="stylesheet" href="https://unpkg.com/balm-ui/dist/balm-ui.css" />
  </head>
  <body>
    <div id="app">
      <ui-button icon="add" @click="$alert(message)">SayHi</ui-button>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/balm-ui"></script>
    <script src="https://unpkg.com/balm-ui/dist/balm-ui-plus.js"></script>
    <script>
      const app = Vue.createApp({
        setup() {
          var message = 'Hello BalmUI';

          return {
            message
          };
        }
      });

      app.use(BalmUI);
      app.use(BalmUIPlus);

      app.mount('#app');
    </script>
  </body>
</html>
```

Enjoy 👻
