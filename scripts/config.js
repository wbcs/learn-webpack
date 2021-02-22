const { relative } = require('./utils');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const config = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', relative('../src/index.tsx')],
  output: {
    path: relative('../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.module\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
              },
            },
          },
          'less-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': relative('../src'),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: relative('../public/index.html'),
    }),
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
