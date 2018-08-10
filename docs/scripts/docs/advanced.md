# Advanced Usage

> The following configuration is still the Vue scaffold built based on [Balm CLI](https://github.com/balmjs/balm-cli).

## TOC

1.  Modular CSS
    - <a href="javascript:void(0)" class="v-anchor" data-href="#use-sass">Use Sass</a>
    - <a href="javascript:void(0)" class="v-anchor" data-href="#use-css">Use CSS</a>
2.  Modular JS
    - <a href="javascript:void(0)" class="v-anchor" data-href="#default-usage">Default Usage</a>
    - <a href="javascript:void(0)" class="v-anchor" data-href="#standalone-usage">Standalone Usage</a>
    - <a href="javascript:void(0)" class="v-anchor" data-href="#source-code-usage">Source Code Usage</a>
3.  <a href="javascript:void(0)" class="v-anchor" data-href="#mdi">Get Material Design Icons without downloading</a>

## 1. Modular CSS

<div id="use-sass"></div>

### 1.1 Use Sass (Recommended)

Edit `/path/to/my-project/app/styles/global/_vendor.scss` (manage sass entry files of the vendors)

```css
/* Add BalmUI styles */
@import 'node_modules/balm-ui/src/styles/balm-ui.scss';
```

Then, you can overwrite or redefine UI styles by editing `/path/to/my-project/app/styles/global/_var.scss`. (See components APIs)

**The template standard format:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    ...
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
    <!-- build:css css/plugins.css -->
    <link rel="stylesheet" href="/node_modules/path/to/some-plugin.css">
    ...
    <!-- endbuild -->
  </head>
  <body>
    ...
  </body>
</html>
```

- `main.css`: The css entry file of the project.
- `css/plugins.css`: The file path after building all third-party style files.

> If the third-party provides sass file, recommended to manage in `/path/to/my-project/app/styles/global/_vendor.scss`

<div id="use-css"></div>

### 1.2 Use CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    ...
    <!-- build:css css/vendors.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/dist/balm-ui.css">
    <link rel="stylesheet" href="/node_modules/path/to/some-plugin.css">
    ...
    <!-- endbuild -->
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
  </head>
  <body>
    ...
  </body>
</html>
```

> Note `main.css` position order

## 2. Modular JS

<div id="default-usage"></div>

### 2.1 Default Usage

> Recommended to use for **desktop**

**2.1.1 Import in JS** (Recommended)

Edit `/path/to/my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional

Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

**2.1.2 Import in Browser**

Edit `/path/to/my-project/app/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    ...
    <!-- build:css css/vendors.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/dist/balm-ui.css">
    <!-- endbuild -->
  </head>
  <body>
    <div id="app">
      <ui-button @click="$alert(message)">SayHi</ui-button>
    </div>

    <script src="https://unpkg.com/vue"></script>
    <!-- build:js js/vendors.js -->
    <script src="/node_modules/balm-ui/dist/balm-ui.js"></script>
    <script src="/node_modules/balm-ui/dist/balm-ui-plus.js"></script>
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

<div id="standalone-usage"></div>

### 2.2 Standalone Usage

> Recommended to use for **mobile**, because the building volume is relatively small.

**2.2.1 Import in JS**

Edit `/path/to/my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';

// Import BalmUI scripts
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

// Import BalmUI styles (Not recommend usage, and see "Import in Browser" for recommended usage)
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/dialog.css';
import 'balm-ui/plugins/alert.css';

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

**2.2.2 Import in Browser**

Edit `/path/to/my-project/app/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    ...
    <!-- build:css css/vendors.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css">
    <link rel="stylesheet" href="/node_modules/balm-ui/components/button.css">
    <link rel="stylesheet" href="/node_modules/balm-ui/components/dialog.css">
    <link rel="stylesheet" href="/node_modules/balm-ui/plugins/alert.css">
    <!-- endbuild -->
  </head>
  <body>
    <div id="app">
      <ui-button @click="$alert(message)">SayHi</ui-button>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <!-- build:js js/vendors.js -->
    <script src="/node_modules/balm-ui/components/button.js"></script>
    <script src="/node_modules/balm-ui/plugins/alert.js"></script>
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
      'balm-ui-plus': 'balm-ui/src/scripts/plus.js'
    },
    include: [
      // The script in this folder needs to compile ES6+
      path.resolve('./node_modules/balm-ui/src/scripts')
    ]
  },
  ...
};
```

> Now, the `balm-ui` referenced in the code points directly to the source code, which can be used to debug BalmUI.

<div id="mdi"></div>

## 3. Get [Material Design Icons](https://material.balmjs.com/MaterialIcons.zip) without downloading

Edit `/path/to/my-project/gulpfile.js`

```js
...

balm.go(function(mix) {
  if (balm.config.production) {
    ...
  } else {
    // Use BalmJS `copy` api
    mix.copy('node_modules/balm-ui/font/*', 'app/fonts');
  }
});
```
