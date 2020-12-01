const path = require('path');
const defaultSettings = require('./src/settings.js');
// webpack plugins
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

// 產生版本號檔案static/
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const packageVersion = require('./package.json').version;
const gitRevisionPlugin = new GitRevisionPlugin();
let gitCommitHash = gitRevisionPlugin.commithash();
gitCommitHash = gitCommitHash && gitCommitHash.substr(0, 7);
process.env.VERSION = JSON.stringify(gitCommitHash);
// end //

function resolve(dir) {
  return path.join(__dirname, dir);
}

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {

  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  parallel: true, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // devServer: {
  //   port,
  //   open: true,
  //   overlay: {
  //     warnings: false,
  //     errors: true,
  //   },
  //   // headers: { 'Access-Control-Allow-Origin': '*' },
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       target: process.env.VUE_APP_BASE_API_TO,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         [`^${process.env.VUE_APP_BASE_API}`]: '',
  //       },
  //       logLevel: 'debug',
  //     },
  //   },
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none', // none eval cheap-source-map cheap-eval-source-map
  },
  chainWebpack: config => {
    console.log(`\n**** NODE_ENV :${process.env.NODE_ENV} : *****`);
    config.name(defaultSettings.title || 'GGTing');
    config.resolve.alias.set('@', resolve('src'));

    config.plugins.delete('preload'); // TODO: need test
    config.plugins.delete('prefetch'); // TODO: need test
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //   })
    //   .end();
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
    // https://webpack.js.org/configuration/devtool/#development
    // config.when(process.env.NODE_ENV === 'development', config => {
    // config.devtool('none'); // none eval cheap-source-map cheap-eval-source-map
    // });

    // bundle 檢測  透過env開關 dev環境不預設開啟
    config.when(process.env.VUE_CLI_WEB_BUNDLE_ANALYZER === 'true', config => {
      const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
      config.plugin('webpackBundleAnalyzer').use(new webpackBundleAnalyzer({
        openAnalyzer: true,
        analyzerPort: '7788',
      }));
    });

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });

    // 減少lodash的bundle size
    config.plugin('lodash-replace').use(new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }));
    config.plugin('gitRevision').use(gitRevisionPlugin);

    config.optimization.minimizer('terser').tap(args => {
      // eslint-disable-next-line camelcase
      args[0].terserOptions.compress.drop_console = true;
      // eslint-disable-next-line camelcase
      args[0].terserOptions.compress.drop_debugger = true;
      args[0].terserOptions.compress.warnings = false;
      // eslint-disable-next-line camelcase
      args[0].terserOptions.compress.pure_funcs = ['console.*'];
      return args;
    });

    // define 'VUE_APP_GIT_COMMIT_HASH', 'VUE_APP_PACKAGE_VERSION'
    config.plugin('define').tap(args => {
      args[0]['process.env'].VUE_APP_GIT_COMMIT_HASH = JSON.stringify(gitCommitHash);
      args[0]['process.env'].VUE_APP_PACKAGE_VERSION = JSON.stringify(packageVersion);
      return args;
    });
  },
  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/assets/styles/settings/_variables.scss";`,
      },
    },
  },
  transpileDependencies: ['vue-echarts', 'resize-detector'],
};
