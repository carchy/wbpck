const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
/**@type {webpack.Configuration} */
let _cfg = {
  mode: 'production',

  entry: {
    'min/all.js': ['./src/main1.js'],
    'js4/main4': './src/js/main4.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename:'jschunk/chunck.js'
  },
  plugins: [

    new HtmlWebpackPlugin({
      filename: 'pages/index.html',
      template: 'src/index.html',
      chunks: ['jss/main1']
    })
  ],
  module: {
    rules: [
      //yarn add  --dev style-loader css-loader
      {

        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      //yarn add  --dev file-loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      //yarn add  --dev csv-loader xml-loader
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      }

    ],
  },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },

}

module.exports = _cfg