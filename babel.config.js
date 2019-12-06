module.exports = function(api) {
  let envOptions = api.env('production')
    ? { modules: false, useBuiltIns: 'usage', corejs: 3 }
    : { modules: false };
  let runtimeOptions = api.env('production') ? { corejs: 3 } : {};

  return {
    presets: [['@babel/preset-env', envOptions]],
    plugins: [
      // Stage 2
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: false
        }
      ],
      '@babel/plugin-proposal-json-strings',
      // Runtime
      ['@babel/plugin-transform-runtime', runtimeOptions]
    ],
    env: {
      test: {
        presets: ['@babel/preset-env'],
        plugins: ['istanbul']
      }
    }
  };
};
