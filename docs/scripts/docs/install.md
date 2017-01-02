### Installation & Setup

#### Requirement

- [BalmJS](http://balmjs.com/) or [webpack](http://webpack.github.io/)
- [Vue.js](https://vuejs.org/)@2.x

#### Install

```sh
npm install --save balm-ui
```

#### Setup

```json
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /balm-ui.src.*?js$/,
      loader: 'babel'
    }],
    alias: {
      vue: 'vue/dist/vue.js',
      'balm-ui': 'balm-ui/src/index.js'
    }
  },
  ...
};
```
