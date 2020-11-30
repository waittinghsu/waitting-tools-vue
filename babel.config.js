module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    'v',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
};
