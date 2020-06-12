const webpackConfig = require('./config/webpack.karma');

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],

    files: ['test/utils/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    },

    browsers: ['Chrome']
  });
};
