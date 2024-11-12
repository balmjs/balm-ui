module.exports = function (api) {
  let envOptions = api.env('production')
    ? {
        modules: false,
        useBuiltIns: 'entry',
        corejs: { version: '3.30' }
      }
    : {
        modules: false
      };
  let runtimeOptions = api.env('production') ? { corejs: 3 } : {};

  return {
    presets: [['@babel/preset-env', envOptions]],
    plugins: [
      '@babel/plugin-transform-optional-chaining',
      ['@babel/plugin-transform-runtime', runtimeOptions],
      [
        'prismjs',
        {
          languages: [
            'markup',
            'ini',
            'css',
            'javascript',
            'bash',
            'scss',
            'typescript'
          ],
          plugins: ['highlight-keywords', 'toolbar', 'copy-to-clipboard']
        }
      ]
    ]
  };
};
