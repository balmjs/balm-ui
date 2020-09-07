# Advanced Usage

> The following configuration is still the Vue scaffold built based on [Balm CLI](https://github.com/balmjs/balm-cli).

## TOC

1. Modular CSS
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-sass">Use Sass</a>
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-css">Use CSS</a>
2. Modular JS
   - <a href="javascript:void(0)" class="v-anchor" data-href="#default-usage">Default Usage</a> (desktop)
   - <a href="javascript:void(0)" class="v-anchor" data-href="#Individual-usage">Individual Usage</a> (mobile)
   - <a href="javascript:void(0)" class="v-anchor" data-href="#source-code-usage">Source Code Usage</a> (development)
3. <a href="javascript:void(0)" class="v-anchor" data-href="#mdi">Get Material Icons without downloading</a>

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
  import Vue from 'vue';
  import App from '@/views/layouts/app';

  // Import BalmUI scripts
  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
  import BalmUINext from 'balm-ui/dist/balm-ui-next'; // Experimental Material Components

  // Import BalmUI styles (Not recommend usage, and see above "SASS/CSS Management" for recommended usage)
  import 'balm-ui/dist/balm-ui.css';

  Vue.use(BalmUI); // Mandatory
  Vue.use(BalmUIPlus); // Optional
  Vue.use(BalmUINext); // Experimental

  new Vue({
    el: '#app',
    components: { App },
    template: '<app/>'
  });
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
        var app = new Vue({
          el: '#app',
          data: {
            message: 'Hello BalmUI'
          }
        });
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
  import Vue from 'vue';
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

  // Install components or plugins
  Vue.use(UiButton);
  Vue.use($alert);

  new Vue({
    el: '#app',
    components: { App },
    template: '<app/>'
  });
  ```

> With regard to _CSSinJS_, styles can be extracted through BalmJS configuration, but the idea of BalmJS is more recommended to separate and manage styles and scripts to achieve more flexible module configuration and management.

- SASS management

  ```scss
  /* /path/to/my-project/app/styles/global/_vendor.scss */
  @use 'balm-ui/components/core';
  @use 'balm-ui/components/button/button';
  @use 'balm-ui/components/icon/icon';
  @use 'balm-ui/components/dialog/dialog';
  @use 'balm-ui/plugins/alert/alert';
  ```

- CSS management

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
        var app = new Vue({
          el: '#app',
          data: {
            message: 'Hello BalmUI'
          }
        });
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

## 3. Get [Material Icons](https://material.balmjs.com/material-icons.zip) without downloading

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
