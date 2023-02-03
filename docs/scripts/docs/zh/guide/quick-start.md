# 快速入门

## TOC

0. <a href="javascript:void(0)" class="v-anchor" data-href="#for-env">设置开发环境</a>
1. <a href="javascript:void(0)" class="v-anchor" data-href="#for-balm-cli">Balm CLI</a>
2. <a href="javascript:void(0)" class="v-anchor" data-href="#for-vue-cli-or-vite">Vue CLI 或 Vite</a>
3. <a href="javascript:void(0)" class="v-anchor" data-href="#for-script">&lt;script&gt; 引用</a>

<div id="for-env"></div>

## 0. 设置开发环境

在开始之前，您需要先设置开发环境。

如果您的计算机上尚未安装 [Node.js® and npm](https://nodejs.org/en/download/)，请安装它们。

> 通过在终端/控制台窗口中运行 `node -v` 和 `npm -v` 来验证您至少在运行 Node.js 10.13.0 或更高版本以及 npm 5.2.0 或更高版本。较旧的版本可能会产生错误，所以推荐使用较新的版本。

工欲善其事，必先利其器。好的工具可以使应用程序开发更快，更容易维护。

[Balm CLI](https://github.com/balmjs/balm-cli) 是一个命令行界面工具，用于构建 [BalmJS](https://github.com/balmjs/balm) 项目。

> **[Balm CLI](https://github.com/balmjs/balm-cli)**（BalmJS 官方推荐） 或 [Vue CLI](https://github.com/vuejs/vue-cli)/[Vite](https://github.com/vitejs/vite) 或 其他工具链 🚀

- 使用 Balm CLI 前首先需要全局安装 [Balm Core](https://github.com/balmjs/balm) 和 [Balm CLI](https://github.com/balmjs/balm-cli)。

  ```bash
  npm install -g balm-core balm-cli
  # OR
  yarn global add balm-core balm-cli
  ```

> ⚠️ 提示：如果你使用 pnpm，请为 BalmUI 配置 `.npmrc` 文件

- 把所有依赖都提升到 node_modules 的根目录：

  ```ini
  shamefully-hoist=true
  ```

- 或者只提升匹配的依赖包：

  ```ini
  public-hoist-pattern[]="*deepmerge*"
  public-hoist-pattern[]="*flatpickr*"
  public-hoist-pattern[]="*material-components-web*"
  public-hoist-pattern[]="@material/*"
  public-hoist-pattern[]="*quill*"
  ```

<div id="for-balm-cli"></div>

## 1. Balm CLI

### 1.0 创建一个新项目

打开一个命令行窗口。

根据以下命令生成一个新项目：

```bash
balm init vue my-project
cd my-project # Go to the project directory
```

安装依赖

```bash
yarn
# OR
npm install
```

安装必须要的 npm 包，这里可能需要一些时间。

> （China Only）如果“网络”不科学，请设置[淘宝源](https://developer.aliyun.com/mirror/NPM)

### 1.1 安装 `balm-ui`

```bash
yarn add balm-ui
# OR
npm install --save balm-ui
```

### 1.2 配置

更新 `balm.config.js`

- 获取 [Material Icons](https://material.balmjs.com/material-icons.zip) 无需下载（或者下载后解压至 `my-project/app/fonts`）

  ```js
  const api = (mix) => {
    if (mix.env.isDev) {
      mix.copy('node_modules/balm-ui/fonts/*', 'app/fonts');
    }
  };
  ```

- 编辑 `my-project/config/balmrc.js`，配置使用 [Dart Sass](https://balm.js.org/docs/config/styles.html#styles-dartsass)

  ```js
  module.exports = {
    styles: {
      extname: 'scss'
    }
    // Other Options...
  };
  ```

### 1.3 使用

#### 默认用法

- 编辑 `my-project/app/styles/global/_vendor.scss`

  ```scss
  /* import BalmUI styles */
  @use 'balm-ui/dist/balm-ui';
  ```

> 推荐在 `/path/to/project-name/styles/_vendor.scss` 中使用 Sass，这样你将能使用到更多 BalmUI 的高级简便的样式管理方案。

- 编辑 `my-project/app/scripts/main.js`

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

#### 独立用法

- 编辑 `my-project/app/styles/global/_vendor.scss`

  ```scss
  @use 'balm-ui/components/core';
  @use 'balm-ui/components/button/button';
  @use 'balm-ui/components/icon/icon';
  @use 'balm-ui/components/dialog/dialog';
  @use 'balm-ui/plugins/alert/alert';
  ```

- 编辑 `my-project/app/scripts/main.js`

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

### 1.4 开发和测试

```bash
npm run dev
```

- 编辑一个 vue 组件：`my-project/app/scripts/views/components/hello.vue`

  ```html
  <template>
    <div class="hello">
      ...
      <!-- Add a test button -->
      <ui-button icon="add" @click="$alert('Hello BalmUI')">Click Me</ui-button>
    </div>
  </template>
  ```

### 1.5 打包和发布

```bash
npm run prod
```

<div id="for-vue-cli-or-vite"></div>

## 2. Vue CLI 或 Vite

### 2.0 创建一个新项目

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

### 2.1 安装 `balm-ui`

```bash
yarn add balm-ui
# OR
npm install --save balm-ui
```

### 2.2 配置

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

### 2.3 使用

- 编辑 `my-project/src/main.js`

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

## 3. `<script>` 引用

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

愉快的“码”起来 👻
