/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nmodule.exports = {\n  entry: {\n    index: './index.js'\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  target: 'node',\n  // node: {\n  //   // Need this when working with express, otherwise the build fails\n  //   __dirname: false,   // if you don't put this is, __dirname\n  //   __filename: false,  // and __filename return blank or /\n  // },\n  externals: [nodeExternals()],\n  // Need this to avoid error when working with Express\n  module: {\n    rules: [{\n      // Transpiles ES6-8 into ES5\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      use: {\n        loader: \"babel-loader\",\n        options: {\n          babelrc: true\n        }\n      }\n    }]\n  }\n}; // var path = require('path');\n// var webpack = require('webpack');\n// module.exports = {\n//     entry: './public/js/main.js',\n//     output: {\n//         path: path.resolve(__dirname, 'public/js/'),\n//         filename: 'bundle.js'\n//     },\n//     module: {\n//         loaders: [\n//             {\n//                 test: /.js$/,\n//                 exclude: /node_modules/,\n//                 loader: 'babel-loader',\n//                 query: {\n//                     presets: ['es2015']\n//                 }\n//             }\n//         ]\n//     }\n// };\n// var debug = process.env.NODE_ENV !== \"production\";\n// var webpack = require('webpack');\n// var module_dir = `${__dirname}/node_modules`;\n// const path = require('path');\n// module.exports = {\n//   entry: './server.js',\n//   mode:debug,\n//   output: {\n//     path: path.resolve(__dirname, 'build'),\n//     filename: '[name].bundle.js',\n//   },\n//   module: {\n//     rules: [{\n//         test: /\\.js?$/,\n//         exclude: module_dir,\n//         loader: 'babel-loader',\n//         query: {\n//             presets: ['env']\n//         }\n//     }]\n//   }\n// }\n// import nodeExternals from 'webpack-node-externals'\n// import path from 'path';\n// const config = {\n//   mode: 'development',\n//   target: 'node',\n//   externals: [nodeExternals()],\n//   entry:  './server.js',\n//   output: {\n//     path: __dirname,\n//     filename: '[name].bundle.js',\n//     libraryTarget: 'commonjs2'\n//   },\n//   module: {\n//     rules: [{\n//       test: /\\.js$/,\n//       use: {\n//         loader: 'babel-loader',\n//         options: {\n//           presets: [\n//             ['env', {\n//               'targets': {\n//                 'node': 'current'\n//               }\n//             }]\n//           ]\n//         }\n//       }\n//     }]\n//   }\n// }\n// export default [config]\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });