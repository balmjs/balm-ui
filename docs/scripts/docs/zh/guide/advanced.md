# 进阶用法

> 以下配置仍然是基于 [Balm CLI](https://github.com/balmjs/balm-cli) 构建的 Vue 脚手架。

##  目录

1. CSS 模块化
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-sass">使用 Sass</a>
   - <a href="javascript:void(0)" class="v-anchor" data-href="#use-css">使用 CSS</a>
2. JS 模块化
   - <a href="javascript:void(0)" class="v-anchor" data-href="#default-usage">默认用法</a>（桌面端）
   - <a href="javascript:void(0)" class="v-anchor" data-href="#Individual-usage">独立用法</a>（手机端）
   - <a href="javascript:void(0)" class="v-anchor" data-href="#source-code-usage">源代码用法</a>
3. <a href="javascript:void(0)" class="v-anchor" data-href="#mdi">获取 Material Icons</a>（无需下载）

## 1. CSS 模块化

<div id="use-sass"></div>

### 1.1 使用 Sass（推荐）

- 编辑 `/path/to/my-project/config/balmrc.js`

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

- 编辑 `/path/to/my-project/app/styles/global/_vendor.scss`

  > **`SASS`/`CSS` Management** by [BalmJS](https://balm.js.org/): the entry files of the vendors

  ```scss
  @use '@material/theme' as theme-variables with (
    $primary: #6200ee,
    $secondary: #018786
  );

  @use 'balm-ui/dist/balm-ui';
  ```

然后，您可以通过 Sass变量 复写或重新定义 UI 样式。（详情见各组件的 **SASS变量** 文档）

**入口模板文件标准格式：**

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

> 如果第三方提供了 sass/css 文件，建议在 `/path/to/my-project/app/styles/global/_vendor.scss` 中进行管理

<div id="use-css"></div>

### 1.2 使用 CSS

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

- `css/vendors.css`: [BalmJS](https://balm.js.org/) 工作流合并指定第三方样式文件之后的文件路径。
- `main.css`: 项目的样式入口文件。

## 2. JS 模块化

<div id="default-usage"></div>

### 2.1 默认用法

> 推荐用于 **桌面端**

**2.1.1 JS中引用**（推荐）

- 编辑 `/path/to/my-project/app/scripts/main.js`

  ```js
  import { createApp } from 'vue';
  import App from '@/views/layouts/app';

  // Import BalmUI scripts
  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
  import BalmUINext from 'balm-ui-next'; // Experimental Material Components

  // Import BalmUI styles (Not recommend usage, and see above "SASS/CSS Management" for recommended usage)
  import 'balm-ui-css';

  const app = createApp(App);

  app.use(BalmUI); // Mandatory
  app.use(BalmUIPlus); // Optional
  app.use(BalmUINext); // Experimental

  app.mount('#app');
  ```

**2.1.2 浏览器中引用**

- 编辑 `/path/to/my-project/app/index.html`

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

        app.use(BalmUI);
        app.use(BalmUIPlus);
        app.use(BalmUINext);

        app.mount('#app');
      </script>
    </body>
  </html>
  ```

<div id="Individual-usage"></div>

### 2.2 独立用法

> 推荐用于 **移动端**，因为构建更小更快。

**2.2.1 JS中引用**

- 编辑 `/path/to/my-project/app/scripts/main.js`

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

> 关于 CSSinJS ，可以通过BalmJS配置来提取样式；但是 BalmJS的思想 更建议分离管理项目中的样式和脚本，以实现更灵活的模块配置和管理。

- SASS 管理 (`/path/to/my-project/app/styles/global/_vendor.scss`)

  ```scss
  @use 'balm-ui/components/core';
  @use 'balm-ui/components/button/button';
  @use 'balm-ui/components/icon/icon';
  @use 'balm-ui/components/dialog/dialog';
  @use 'balm-ui/plugins/alert/alert';
  ```

- CSS 管理 (`/path/to/my-project/app/index.html`)

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

**2.2.2 浏览器中引用**

- 编辑 `/path/to/my-project/app/index.html`

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

### 2.3 源码用法

> 这是最优化的代码构建方案，用法和默认构建版本相同。

> ⚠️ 提示：`balm-ui` < 9.40.0 的 alias 配置

```js
{
  'balm-ui-source': 'balm-ui/src/scripts/index.js',
  'balm-ui-plus-source': 'balm-ui/src/scripts/plus.js',
  'balm-ui-next-source': 'balm-ui/src/scripts/next.js'
}
```

**2.3.1 Balm CLI**

- 编辑 `/path/to/my-project/config/balmrc.js`，并添加以下代码：

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
        'balm-ui-source': 'balm-ui/src/scripts/balm-ui.js',
        'balm-ui-plus-source': 'balm-ui/src/scripts/balm-ui-plus.js',
        'balm-ui-next-source': 'balm-ui/src/scripts/balm-ui-next.js'
      }
    },
    ...
  };
  ```

**2.3.2 Vue CLI or Vite**

- `vue-cli`

  ```js
  // vue.config.js
  module.exports = {
    runtimeCompiler: true,
    transpileDependencies: ['node_modules/balm-ui/src/scripts'],
    // NOTE: set alias via `configureWebpack` or `chainWebpack`
    configureWebpack: {
      resolve: {
        alias: {
          'balm-ui-source': 'balm-ui/src/scripts/balm-ui.js',
          'balm-ui-plus-source': 'balm-ui/src/scripts/balm-ui-plus.js',
          'balm-ui-next-source': 'balm-ui/src/scripts/balm-ui-next.js'
        }
      }
    }
    // chainWebpack: (config) => {
    //   config.resolve.alias
    //     .set('balm-ui-source', 'balm-ui/src/scripts/balm-ui.js')
    //     .set('balm-ui-plus-source', 'balm-ui/src/scripts/balm-ui-plus.js')
    //     .set('balm-ui-next-source', 'balm-ui/src/scripts/balm-ui-next.js');
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
        'balm-ui-source': 'balm-ui/src/scripts/balm-ui.js',
        'balm-ui-plus-source': 'balm-ui/src/scripts/balm-ui-plus.js',
        'balm-ui-next-source': 'balm-ui/src/scripts/balm-ui-next.js'
      }
    }
  });
  ```

> 现在，代码中引用的 `balm-ui` 已直接指向了源代码，可用于开发或调试 BalmUI。

<div id="mdi"></div>

## 3. 获取 [Material Icons](https://next-material.balmjs.com/material-icons.zip)（无需下载）

- 编辑 `/path/to/my-project/balm.config.js`

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
