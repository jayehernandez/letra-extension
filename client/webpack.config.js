const webpack = require('webpack');
const ejs = require('ejs');
const CopyPlugin = require('copy-webpack-plugin');
const ExtensionReloader = require('webpack-extension-reloader');
const Dotenv = require('dotenv-webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { version } = require('./package.json');

function transformHtml(content) {
  return ejs.render(content.toString(), {
    ...process.env,
  });
}

const config = {
  mode: process.env.NODE_ENV,
  context: `${__dirname}/src`,
  entry: {
    main: './main.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: 'vue-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/images/',
          emitFile: false,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts/',
          emitFile: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      global: 'window',
    }),
    new Dotenv({
      path: './.env',
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'icons', to: 'icons', globOptions: { ignore: ['icon.xcf'] } },
        { from: 'scripts', to: 'scripts' },
        { from: 'index.html', to: 'index.html', transform: transformHtml },
        {
          from: 'manifest.json',
          to: 'manifest.json',
          transform: content => {
            const jsonContent = JSON.parse(content);
            jsonContent.version = version;

            return JSON.stringify(jsonContent, null, 2);
          },
        },
      ],
    }),
  ],
};

if (config.mode === 'production') {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ]);
}

if (process.env.HMR === 'true') {
  config.plugins = (config.plugins || []).concat([
    new ExtensionReloader({
      manifest: `${__dirname}/src/manifest.json`,
    }),
  ]);
}

module.exports = config;
