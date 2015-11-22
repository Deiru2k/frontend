require(`babel-core/register`);

const path = require(`path`);
const express = require(`express`);
const webpack = require(`webpack`);
const config = require(`./webpack.config.dev`);

const app = express();
const compiler = webpack(config);

app.use(require(`webpack-dev-middleware`)(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  contentBase: path.join(`src`),
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(require(`webpack-hot-middleware`)(compiler));

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `src`, `index.html`));
});

app.listen(3000, `0.0.0.0`, (err) => {
  if (err) throw err;

  console.log(`Listening at http://localhost:3000`);
});
