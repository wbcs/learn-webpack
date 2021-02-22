const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./config');

const app = express();
const compiler = webpack(config);

app.use(
  devMiddleware(compiler, {
    publicPath: '/',
  })
);

app.use(
  hotMiddleware(compiler, {
    path: '/__webpack_hmr',
  })
);

app.listen(3000, () => {
  compiler.hooks.done.tap('done', () => {
    console.log('Your app is running here: http://localhost:3000');
  });
});
