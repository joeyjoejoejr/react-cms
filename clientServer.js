import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const config = require('./webpack.config.js');

export default (PORT) => {
  const server = new WebpackDevServer(webpack(config), {
    hot: true,
    contentBase: 'build/',
    proxy: {
      '/api*': {
        target: 'http://localhost:' + (PORT - 1),
        rewrite: (req) => {
          console.log('Request to api: ', req.url);
          req.url = req.url.replace(/^\/api/, '');
        }
      }
    }
  });

  server.listen(PORT, '0.0.0.0');
};
