module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
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
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ]
  ],
  env: {
    test: {
      plugins: ['istanbul']
    }
  }
};
