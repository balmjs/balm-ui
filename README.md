# [BalmUI](https://material.balmjs.com/) [![BalmUI version][balm-ui-image]][balm-ui-url] [![MDC version][mdc-web-image]][mdc-web-url] [![FOSSA Status][fossa-image]][fossa-url]

> Next Generation Material UI for Vue.js

## Introduction

BalmUI is a modular and customizable [Material Design](https://material.io/) UI library for Vue.js.

## Features

- Enterprise-class UI designed for web applications
- A set of high-quality Vue components/plugins/directives/utils out of the box
- Powerful theme customization in every detail
- Integrated a complete set of the latest Material Icons
- All components and plugins is highly customizable, and can be used individually

## Documentation & Demos

Visit [material.balmjs.com](https://material.balmjs.com/).

## Quick Start

### 0. Requirement

- Vue.js@2.1.0+
- **[Balm CLI](https://github.com/balmjs/balm-cli)**(Recommended) or [Vue CLI](https://github.com/vuejs/vue-cli) or other toolchains

### 1. Installing `balm-ui`

```sh
yarn add balm-ui
// OR
npm install --save balm-ui
```

### 2. Config & Usage

#### 2.1 For Balm CLI

- edit `balm.config.js` for [Dart Sass](https://balm.js.org/docs/config/styles.html#styles-dartsass)

  ```js
  module.exports = {
    styles: {
      extname: 'scss',
      dartSass: true // required
    }
    // Other Options...
  };
  ```

- Download [Material Design Icons](https://material.balmjs.com/material-icons.zip) and extract to `/path/to/my-project/app/fonts`.

##### Default Usage

- edit `my-project/app/styles/global/_vendor.scss`

  ```scss
  /* import BalmUI styles */
  @use 'balm-ui/dist/balm-ui';
  ```

- edit `my-project/app/scripts/main.js`

  ```js
  import Vue from 'vue';
  import BalmUI from 'balm-ui'; // Google Official Material Components
  import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Extension Components

  Vue.use(BalmUI); // Mandatory
  Vue.use(BalmUIPlus); // Optional
  ```

##### Standalone Usage

- edit `my-project/app/styles/global/_vendor.scss`

  ```scss
  @use 'balm-ui/components/core';
  @use 'balm-ui/components/button/button';
  @use 'balm-ui/components/icon/icon'; // Optional
  ```

- edit `my-project/app/scripts/main.js`

  ```js
  import Vue from 'vue';
  import UiButton from 'balm-ui/components/button';

  Vue.use(UiButton);
  ```

- Enjoy 👻

  ```sh
  # For development
  npm run dev

  # For production
  npm run prod
  ```

#### 2.2 For Vue CLI

// TODO

## Contributing

We'd love for you to contribute and make BalmUI even better than it is today! Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request. You can submit any ideas as [pull requests](https://github.com/balmjs/balm-ui/pulls) or as [GitHub issues](https://github.com/balmjs/balm-ui/issues).

## Browser support

We officially support the last two versions of every major browser. Specifically, we test on the following browsers:

- **Chrome** on Android, Windows, macOS, and Linux
- **Firefox** on Windows, macOS, and Linux
- **Safari** on iOS and macOS
- **Edge** on Windows
- **IE** 11 on Windows

## Special Thanks to

- [BalmJS](https://balm.js.org/)
- [Vue.js](https://vuejs.org/)
- [MDC Web](https://github.com/material-components/material-components-web)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui?ref=badge_large)

[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://www.npmjs.com/package/balm-ui
[mdc-web-image]: https://img.shields.io/badge/mdc--web-7.0.0-blue.svg
[mdc-web-url]: https://www.npmjs.com/package/material-components-web
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm-ui?ref=badge_shield
