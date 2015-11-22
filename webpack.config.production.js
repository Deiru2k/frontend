import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: [
    `webpack-hot-middleware/client`,
    path.join(__dirname, `src`, `index`),
  ],
  output: {
    path: path.join(__dirname, `src`),
    filename: `app.js`,
    publicPath: `/static/`,
  },
  module: {
    noParse: [`node_modules/react`],
    loaders: [
      { test: /(.js|.jsx)/, exclude: /node_modules/, loaders: [`babel?cacheDirectory=true`] },
      { test: /\.pcss/, loader: ExtractTextPlugin.extract(`style`, `css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss`) },
    ],
  },
  resolve: {
    root: path.join(__dirname, `src`),
    extensions: [``, `.js`, `.json`, `.jsx`, `.pcss`, `.svg`],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src`, `index.production.tpl`),
    }),
    new ExtractTextPlugin(`app.[contenthash].css`, {
      allChunks: true,
    }),
  ],
  postcss: [
    require(`postcss-import`),
    require(`postcss-simple-vars`),
    require(`postcss-nested`),
    require(`autoprefixer`)({ browsers: [`last 2 versions`] }),
  ],
  devtool: `cheap-module-eval-source-map`,
};
