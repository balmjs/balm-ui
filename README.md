# [BalmUI](https://next-material.balmjs.com/) [![BalmUI version][balm-ui-image]][balm-ui-url] [![MDC version][mdc-web-image]][mdc-web-url]

> Next Generation Material UI for Vue.js

## Introduction

[BalmUI](https://next-material.balmjs.com/) is a modular and customizable [Material Design](https://material.io/) UI library for Vue.js 3.0.

> [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) supports for Vue 2

## Features

- Enterprise-class UI designed for web applications
- A set of high-quality Vue components/plugins/directives/utils out of the box
- Powerful theme customization in every detail
- Integrated a complete set of the latest Material Icons
- All components and plugins is highly customizable, and can be used individually

## Documentation & Demos

- Visit [next-material.balmjs.com](https://next-material.balmjs.com/)
- Visit [material.balmjs.com](https://material.balmjs.com/) (for Vue 2)

## Quick Start

### Requirements

- Vue.js@3.0+
- :rocket: **[Balm CLI](https://github.com/balmjs/balm-cli)**(Recommended) or [Vue CLI](https://github.com/vuejs/vue-cli)/[Vite](https://github.com/vitejs/vite) or other toolchains

### 1. For Balm CLI (Recommended)

#### 1.0 Create a project

```sh
balm init vue#next my-project
cd my-project
```

#### 1.1 Installing `balm-ui`

```sh
yarn add balm-ui@next
# OR
npm install --save balm-ui@next
```

#### 1.2 Configuration

update `balm.config.js`

- get [Material Icons](https://next-material.balmjs.com/material-icons.zip) without downloading (or, download and extract to `/path/to/my-project/app/fonts`)

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
      extname: 'scss',
      dartSass: true
    }
    // Other Options...
  };
  ```

#### 1.3 Usage

##### Default Usage

- edit `my-project/app/styles/global/_vendor.scss`

  ```scss
  /* import BalmUI styles */
  @use 'balm-ui/dist/balm-ui';
  ```

  > Recommend to use Sass in `/path/to/your-project/styles/_vendor.scss`, and you can use more advanced style usage of the BalmUI.

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

##### Standalone Usage

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

#### 1.4 Development and testing

```bash
npm run dev
```

- edit a vue component: `my-project/app/scripts/views/components/hello.vue`

  ```html
  <template>
    <div class="hello">
      ...
      <!-- Add a test button -->
      <ui-button @click="$alert('Hello BalmUI')">Click Me</ui-button>
    </div>
  </template>
  ```

#### 1.5 Bundling and deployment

```bash
npm run prod
```

### 2. For Vue CLI or Vite

#### 2.0 Create a project

- `vue-cli`

  ```sh
  vue create my-project

  cd my-project
  ```

- `vite`

  ```sh
  npm init vite-app my-project
  # OR
  yarn create vite-app my-project

  cd my-project
  ```

#### 2.1 Installing `balm-ui`

```sh
yarn add balm-ui@next
# OR
npm install --save balm-ui@next
```

#### 2.2 Configuration

- `vue-cli`

  ```js
  // vue.config.js
  module.exports = {
    runtimeCompiler: true
  };
  ```

- `vite`

  ```js
  // vite.config.js
  export default {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    },
    optimizeDeps: {
      include: ['balm-ui/dist/balm-ui-plus']
    }
  };
  ```

#### 2.3 Usage

- edit `/path/to/src/main.js`

  ```js
  import { createApp } from 'vue';
  import App from './App.vue';
  import './index.css'; // vite template

  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
  import 'balm-ui/dist/balm-ui.css';

  const app = createApp(App);

  app.use(BalmUI);
  app.use(BalmUIPlus);

  app.mount('#app');
  ```

### 3. For `<script>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello BalmUI</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/balm-ui@next/dist/balm-ui.css"
    />
  </head>
  <body>
    <div id="app">
      <ui-button icon="add" @click="$alert(message)">SayHi</ui-button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/balm-ui@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/balm-ui@next/dist/balm-ui-plus.js"></script>
    <script>
      var app = Vue.createApp({
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

## Contributing

We'd love for you to contribute and make BalmUI even better than it is today! Please make sure to read the [Contributing Guide](https://github.com/balmjs/balm-ui/blob/master/CONTRIBUTING.md) before making a pull request. You can submit any ideas as [pull requests](https://github.com/balmjs/balm-ui/pulls) or as [GitHub issues](https://github.com/balmjs/balm-ui/issues).

## Browser support

We officially support the last two versions of every major browser. Specifically, we test on the following browsers:

- **Chrome** on Android, Windows, macOS, and Linux
- **Firefox** on Windows, macOS, and Linux
- **Safari** on iOS and macOS
- **Edge** on Windows
- **IE** 11 on Windows

## Special Thanks to

- [BalmJS](https://balm.js.org/)
- [Vue.js](https://v3.vuejs.org/)
- [MDC Web](https://github.com/material-components/material-components-web)

[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://www.npmjs.com/package/balm-ui
[mdc-web-image]: https://img.shields.io/badge/mdc--web-10.0.0-blue.svg
[mdc-web-url]: https://www.npmjs.com/package/material-components-web
