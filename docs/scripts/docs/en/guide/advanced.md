# Advanced Usage

> The following configuration is still the Vue scaffold built based on [Balm CLI](https://github.com/balmjs/balm-cli).

## TOC

1. Modular CSS
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-sass">Use Sass</a>
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-css">Use CSS</a>
2. Modular JS
   - <a href="javascript:void(0)" class="v-anchor" data-href="#default-usage">Default Usage</a> (desktop)
   - <a href="javascript:void(0)" class="v-anchor" data-href="#Individual-usage">Individual Usage</a> (mobile)
   - <a href="javascript:void(0)" class="v-anchor" data-href="#source-code-usage">Source Code Usage</a>
3. <a href="javascript:void(0)" class="v-anchor" data-href="#mdi">Get Material Icons</a> (without downloading)

## 1. Modular CSS

<div id="use-sass"></div>

### 1.1 Use Sass (Recommended)

- Edit `/path/to/my-project/config/balmrc.js`

  ```js
  module.exports = {
    styles: {
      extname: 'scss'
    },
    scripts: {
      alias: {
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-next': 'balm-ui/dist/balm-ui-next.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css'
      }
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
  import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
  import BalmUINext from 'balm-ui-next'; // Experimental Material Components

  // Import BalmUI styles (Not recommend usage, and see above "SASS/CSS Management" for recommended usage)
  import 'balm-ui-css';

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
    <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
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
      <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
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

> For the optimal code building solution, the usage is the same as the built versions.

**2.3.1 For Balm CLI**

- Edit `/path/to/my-project/config/balmrc.js`, and add the following lines of code:

  ```js
  const path = require('path');

  function resolve(dir) {
    return path.join(__dirname, '..', dir);
  }

  module.exports = {
    ...
    scripts: {
      // To explicitly transpile a dependency with Babel
      includeJsResource: [
        resolve('node_modules/balm-ui/src/scripts')
      ],
      // Reassign the entry file
      alias: {
        'balm-ui-source': 'balm-ui/src/scripts',
        'balm-ui-plus-source': 'balm-ui/src/scripts/plus.js',
        'balm-ui-next-source': 'balm-ui/src/scripts/next.js'
      }
    },
    ...
  };
  ```

**2.3.2 For Vue CLI**

- Edit `/path/to/my-project/vue.config.js`, and add the following lines of code:

  ```js
  module.exports = {
    runtimeCompiler: true,
    // NOTE: set alias via `configureWebpack` or `chainWebpack`
    configureWebpack: {
      resolve: {
        alias: {
          'balm-ui-source': 'balm-ui/src/scripts',
          'balm-ui-plus-source': 'balm-ui/src/scripts/plus.js',
          'balm-ui-next-source': 'balm-ui/src/scripts/next.js'
        }
      }
    }
    // chainWebpack: (config) => {
    //   config.resolve.alias
    //     .set('balm-ui-source', resolve('node_modules/balm-ui/src/scripts'))
    //     .set('balm-ui-plus-source', resolve('node_modules/balm-ui/src/scripts/plus.js'))
    //     .set('balm-ui-next-source', resolve('node_modules/balm-ui/src/scripts/next.js'));
    // }
  };
  ```

> Now, the `balm-ui` referenced in the code points directly to the source code, which can be used to develop or debug BalmUI.

<div id="mdi"></div>

## 3. Get [Material Icons](https://v8.material.balmjs.com/material-icons.zip) (without downloading)

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
