const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
/**@type {import 'webpack'.Configuration} */
let _cfg = {
  mode: 'production',
  target: 'web',
  entry: {
    'jss/main1': './src/main1.js',
    'js5/main5':'./src/js/main5.js',
    'ts/ts1':'./src/ts/ts1.ts',
    'min/all.js': ['./src/main2.js', './src/main3.js']
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: 'jschunk/chunck.js'
    

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
      {

      oneOf:[
        // "url" loader works like "file" loader except that it embeds assets
            // smaller than specified limit in bytes as data URLs to avoid requests.
            // A missing `test` is equivalent to a match.
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 30000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            // Process application JS with Babel.
            // The preset includes JSX, Flow, TypeScript, and some ESnext features.
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
            
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
                }
              
            },
      //yarn add  --dev style-loader css-loader
      {

        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      //yarn add  --dev file-loader
      
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader',
      //   ],
      // },
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
      },          
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      // This loader doesn't use a "test" so it will catch all modules
      // that fall through the other loaders.
      {
        loader: require.resolve('file-loader'),
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    
    ]
    }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }

}
module.exports = _cfg
/**@typedef {import 'webpack'}  wbpk */

let sss




