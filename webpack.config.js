const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  // node: {
  //   // Need this when working with express, otherwise the build fails
  //   __dirname: false,   // if you don't put this is, __dirname
  //   __filename: false,  // and __filename return blank or /
  // },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            babelrc:true
          }
        }
      }
    ]
  }
}


















// var path = require('path');
// var webpack = require('webpack');
// module.exports = {
//     entry: './public/js/main.js',
//     output: {
//         path: path.resolve(__dirname, 'public/js/'),
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             }
//         ]
//     }
// };




// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
// var module_dir = `${__dirname}/node_modules`;
// const path = require('path');

// module.exports = {
//   entry: './server.js',
//   mode:debug,
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: '[name].bundle.js',
//   },
//   module: {
//     rules: [{

//         test: /\.js?$/,
//         exclude: module_dir,
//         loader: 'babel-loader',
//         query: {
//             presets: ['env']
//         }
//     }]
//   }
// }

// import nodeExternals from 'webpack-node-externals'
// import path from 'path';

// const config = {
//   mode: 'development',

//   target: 'node',
//   externals: [nodeExternals()],
//   entry:  './server.js',
//   output: {
//     path: __dirname,
//     filename: '[name].bundle.js',
//     libraryTarget: 'commonjs2'
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             ['env', {
//               'targets': {
//                 'node': 'current'
//               }
//             }]
//           ]
//         }
//       }
//     }]
//   }
// }

// export default [config]