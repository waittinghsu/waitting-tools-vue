module.exports = {
  plugins: ['lodash', '@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator'],
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
      },
      '@vue/babel-preset-jsx',
    ],
  ],
};

