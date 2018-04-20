const path          = require('path');
const webpack       = require('webpack');

module.exports = function (gulpConfig) {
  // Webpack config settings
  const webpackConfig = {
    resolve: {
      root: [
        path.resolve('src'),
      ],
    },
    output: {
      filename: 'scripts.min.js',
    },
    eslint: {
      configFile: './.eslintrc',
      failOnWarning: false,
      failOnError: false,
      emitWarning: true, // This is needed for 'failOnError: false' to work
    },
    plugins: [],
    watch: gulpConfig.env === 'dev',
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
      ],
      loaders: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
          },
        },
      ],
    },
  };

  // If not dev (i.e., building for prod) then add plugin to minify JS
  if (gulpConfig.env === 'prod') {
    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        }
      })
    );
  }

  return webpackConfig;
};
