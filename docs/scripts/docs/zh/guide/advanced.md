# 进阶用法

> The following configuration is still the Vue scaffold built based on [Balm CLI](https://github.com/balmjs/balm-cli).

##  目录

1. CSS 模块化
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-sass">使用 Sass</a>
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-css">使用 CSS</a>
2. JS 模块化
   - <a href="javascript:void(0)" class="v-anchor" data-href="#default-usage">默认用法</a>（桌面端）
   - <a href="javascript:void(0)" class="v-anchor" data-href="#Individual-usage">独立用法</a>（手机端）
   - <a href="javascript:void(0)" class="v-anchor" data-href="#source-code-usage">源代码用法</a>（开发）
3. <a href="javascript:void(0)" class="v-anchor" data-href="#mdi">获取 Material Icons 无需下载</a>

## 1. Modular CSS

<div id="use-sass"></div>

### 1.1 Use Sass (Recommended)

- Edit `/path/to/my-project/config/balmrc.js`

  ```js
  module.exports = {
    styles: {
      extname: 'scss',
      dartSass: true // required
    }
    // Other Options...
  };
  ```

- Edit `/path/to/my-project/app/styles/global/_vendor.scss`

  > **`SASS`/`CSS` Management** by [BalmJS](https://balm.js.org/): the entry files of the vendors

  ```scss
  @use '@material/theme' as theme-variables with (
    $primary: #6200ee,
    $secondary: #018786
  );

  @use 'balm-ui/dist/balm-ui';
  ```

Then, you can overwrite or redefine UI styles by sass variables. (See components **SASS** docs)

**The template standard format:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    ...
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
  </head>
  <body>
    ...
  </body>
</html>
```

> If the third-party provides sass/css file, recommended to manage in `/path/to/my-project/app/styles/global/_vendor.scss`

<div id="use-css"></div>

### 1.2 Use CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    ...
    <!-- build:css css/vendors.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/dist/balm-ui.css" />
    <link rel="stylesheet" href="/node_modules/path/to/some-plugin.css" />
    <!-- endbuild -->
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
  </head>
  <body>
    ...
  </body>
</html>
```

- `css/vendors.css`: The file path after building all third-party style files in [BalmJS](https://balm.js.org/) workflow.
- `main.css`: The css entry file of the project.

## 2. Modular JS

<div id="default-usage"></div>

### 2.1 Default Usage

> Recommended to use for **desktop**

**2.1.1 Import in JS** (Recommended)

- Edit `/path/to/my-project/app/scripts/main.js`

  ```js
  import { createApp } from 'vue';
  import App from '@/views/layouts/app';

  // Import BalmUI scripts
  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
  import BalmUINext from 'balm-ui/dist/balm-ui-next'; // Experimental Material Components

  // Import BalmUI styles (Not recommend usage, and see above "SASS/CSS Management" for recommended usage)
  import 'balm-ui/dist/balm-ui.css';

  const app = createApp(App);

  app.use(BalmUI); // Mandatory
  app.use(BalmUIPlus); // Optional
  app.use(BalmUINext); // Experimental

  app.mount('#app');
  ```

**2.1.2 Import in Browser**

- Edit `/path/to/my-project/app/index.html`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      ...
      <!-- build:css css/vendors.css -->
      <link rel="stylesheet" href="/node_modules/balm-ui/dist/balm-ui.css" />
      <!-- endbuild -->
    </head>
    <body>
      <div id="app">
        <ui-button icon="add" @click="$alert(message)">SayHi</ui-button>
      </div>

      <!-- build:js js/vendors.js -->
      <script src="/node_modules/vue/dist/vue.js"></script>
      <script src="/node_modules/balm-ui/dist/balm-ui.js"></script>
      <script src="/node_modules/balm-ui/dist/balm-ui-plus.js"></script>
      <script src="/node_modules/balm-ui/dist/balm-ui-next.js"></script>
      <!-- endbuild -->
      <script>
        var app = Vue.createApp({
          setup() {
            var message = 'Hello BalmUI';

            return {
              message
            };
          }
        });

        app.use(BalmUI.default);
        app.use(BalmUIPlus.default);
        app.use(BalmUINext.default);

        app.mount('#app');
      </script>
    </body>
  </html>
  ```

<div id="Individual-usage"></div>

### 2.2 Individual Usage

> Recommended to use for **mobile**, because the building volume is relatively small.

**2.2.1 Import in JS**

- Edit `/path/to/my-project/app/scripts/main.js`

  ```js
  import { createApp } from 'vue';
  import App from '@/views/layouts/app';

  // Import BalmUI scripts
  import UiButton from 'balm-ui/components/button';
  import $alert from 'balm-ui/plugins/alert';

  // Import BalmUI styles (Not recommend usage, and see below "SASS/CSS management" for recommended usage)
  import 'balm-ui/components/core.css';
  import 'balm-ui/components/button/button.css';
  import 'balm-ui/components/icon/icon.css';
  import 'balm-ui/components/dialog/dialog.css';
  import 'balm-ui/plugins/alert/alert.css';

  const app = createApp(App);

  // Install components or plugins
  app.use(UiButton);
  app.use($alert);

  app.mount('#app');
  ```

> With regard to _CSSinJS_, styles can be extracted through BalmJS configuration, but the idea of BalmJS is more recommended to separate and manage styles and scripts to achieve more flexible module configuration and management.

- SASS management (`/path/to/my-project/app/styles/global/_vendor.scss`)

  ```scss
  @use 'balm-ui/components/core';
  @use 'balm-ui/components/button/button';
  @use 'balm-ui/components/icon/icon';
  @use 'balm-ui/components/dialog/dialog';
  @use 'balm-ui/plugins/alert/alert';
  ```

- CSS management (`/path/to/my-project/app/index.html`)

  ```html
  <head>
    <!-- build:css css/vendors.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
    <link rel="stylesheet" href="/node_modules/balm-ui/components/button/button.css" />
    <link rel="stylesheet" href="/node_modules/balm-ui/components/dialog/dialog.css" />
    <link rel="stylesheet" href="/node_modules/balm-ui/plugins/alert/alert.css" />
    <!-- endbuild -->
  </head>
  ```

**2.2.2 Import in Browser**

- Edit `/path/to/my-project/app/index.html`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      ...
      <!-- build:css css/vendors.css -->
      <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
      <link rel="stylesheet" href="/node_modules/balm-ui/components/button/button.css" />
      <link rel="stylesheet" href="/node_modules/balm-ui/components/dialog/dialog.css" />
      <link rel="stylesheet" href="/node_modules/balm-ui/plugins/alert/alert.css" />
      <!-- endbuild -->
    </head>
    <body>
      <div id="app">
        <ui-button icon="add" @click="$alert(message)">SayHi</ui-button>
      </div>

      <!-- build:js js/vendors.js -->
      <script src="/node_modules/vue/dist/vue.js"></script>
      <script src="/node_modules/balm-ui/components/button/button.js"></script>
      <script src="/node_modules/balm-ui/plugins/alert/alert.js"></script>
      <!-- endbuild -->
      <script>
        var app = Vue.createApp({
          setup() {
            var message = 'Hello BalmUI';

            return {
              message
            };
          }
        });

        app.use(UiButton);
        app.use($alert);

        app.mount('#app');
      </script>
    </body>
  </html>
  ```

<div id="source-code-usage"></div>

### 2.3 Source Code Usage

> Just for developing and debugging components, the building production is the same as the default usage.

Edit `/path/to/my-project/app/config/balmrc.js`, and add the following lines of code:

```js
const path = require('path'); // Reference path library

module.exports = {
  ...
  scripts: {
    ...
    alias: {
      ...
      // Reassign the entry file
      'balm-ui': 'balm-ui/src/scripts',
      'balm-ui-plus': 'balm-ui/src/scripts/plus.js',
      'balm-ui-next': 'balm-ui/src/scripts/next.js'
    },
    includeJsResource: [
      // The script in this folder needs to compile ES6+
      path.resolve('./node_modules/balm-ui/src/scripts')
    ]
  },
  ...
};
```

> Now, the `balm-ui` referenced in the code points directly to the source code, which can be used to debug BalmUI.

<div id="mdi"></div>

## 3. Get [Material Icons](https://next-material.balmjs.com/material-icons.zip) without downloading

- Edit `/path/to/my-project/balm.config.js`

  ```js
  const config = require('./config/balmrc');

  const api = (mix) => {
    if (mix.env.isProd) {
      // ...
    } else {
      // Use BalmJS `copy` api
      mix.copy('node_modules/balm-ui/fonts/*', 'app/fonts');
    }
  };

  module.exports = (balm) => {
    return {
      config,
      api
    };
  };
  ```
