const path = require('path');

module.exports = {
  // Tell webpack that we are bundling it for server
  target: "node",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node-module/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: {browsers: ['last 2 versions']}}],
          ],
        }
      }
    ],
  },
};
