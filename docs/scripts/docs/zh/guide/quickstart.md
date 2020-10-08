# 快速入门

## 0. 设置开发环境

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least Node.js version 10.13.0 or greater and npm version 5.2.0 or greater** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

Good tools make application development quicker and easier to maintain than if you did everything by hand.

The [Balm CLI](https://github.com/balmjs/balm-cli) is a command line interface tool that scaffolds out a [BalmJS](https://github.com/balmjs/balm) project.

> **[Balm CLI](https://github.com/balmjs/balm-cli)**（BalmJS 官方推荐） 或 [Vue CLI](https://github.com/vuejs/vue-cli) 或 其他工具链 🚀

- 使用 Balm CLI 前首先需要全局安装 [Balm Core](https://github.com/balmjs/balm) 和 [Balm CLI](https://github.com/balmjs/balm-cli)。

  ```bash
  yarn global add balm-core balm-cli
  # OR
  npm install -g balm-core balm-cli
  ```

## 1. Balm CLI (推荐)

### 1.0 创建一个新项目

打开一个命令行窗口。

根据以下命令生成一个新项目：

```bash
balm init vue#next my-project
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
yarn add balm-ui@next
# OR
npm install --save balm-ui@next
```

### 1.2 Configuration

更新 `balm.config.js`

- 获取 [Material Icons](https://next-material.balmjs.com/material-icons.zip) 无需下载（或者下载后解压至 `/path/to/my-project/app/fonts`）

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
      extname: 'scss',
      dartSass: true
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

> 推荐在 `/path/to/your-project/styles/_vendor.scss` 中使用 Sass，这样你将能使用到更多 BalmUI 的高级简便的样式管理方案。

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

## 2. Vue CLI 或 Vite

### 2.0 创建一个新项目

- `vue-cli`

  ```bash
  vue create my-project

  cd my-project
  ```

- `vite`

  ```bash
  npm init vite-app my-project
  # OR
  yarn create vite-app my-project

  cd my-project
  ```

### 2.1 安装 `balm-ui`

```bash
yarn add balm-ui@next
# OR
npm install --save balm-ui@next
```

### 2.2 使用

- 编辑 `/path/to/src/main.js`

  ```js
  import { createApp } from 'vue';
  import App from '@/views/layouts/app';
  import BalmUI from 'balm-ui'; // Official Google Material Components
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
  import 'balm-ui/dist/balm-ui.css';

  const app = createApp(App);

  // using `.default`: because the non-esm-bundler for default vue
  app.use(BalmUI.default);
  app.use(BalmUIPlus.default);

  app.mount('#app');
  ```

## 3. 直接 `<script>` 引用

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

      app.use(BalmUI.default);
      app.use(BalmUIPlus.default);

      app.mount('#app');
    </script>
  </body>
</html>
```

愉快的“码”起来 👻
