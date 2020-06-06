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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model */ \"./src/model/model.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view */ \"./src/view/view.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Controller (Application Logic) - The controller is the glue between the model and the view.\n * The controller processes and responds to events set off by either the model or view.\n * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever\n * the model changes.\n */\n\n\n\nvar Controller = /*#__PURE__*/function () {\n  function Controller(model, view) {\n    _classCallCheck(this, Controller);\n\n    this.model = new _model_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _view_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(Controller, [{\n    key: \"showMessage\",\n    value: function showMessage() {\n      this.view.render(this.model.data);\n    }\n  }]);\n\n  return Controller;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/controller/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/model */ \"./src/model/model.js\");\n/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/controller */ \"./src/controller/controller.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view */ \"./src/view/view.js\");\n\n\n\n\nvar main = function main() {\n  var model = new _model_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var view = new _view_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  var controller = new _controller_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](model, view);\n  view.drawShape();\n};\n\nwindow.onload = main; // const app = new PIXI.Application({\n//     width: 300, height: 200, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,\n// });\n// // document.body.appendChild(app.view);\n// const container = new PIXI.Container();\n// app.stage.addChild(container);\n// // Create a new texture\n// const texture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png');\n// // Create a 5x5 grid of bunnies\n// for (let i = 0; i < 25; i++) {\n//     const bunny = new PIXI.Sprite(texture);\n//     bunny.anchor.set(0.5);\n//     bunny.x = (i % 5) * 40;\n//     bunny.y = Math.floor(i / 5) * 40;\n//     container.addChild(bunny);\n// }\n// // Move container to the center\n// container.x = app.screen.width / 2;\n// container.y = app.screen.height / 2;\n// // Center bunny sprite in local container coordinates\n// container.pivot.x = container.width / 2;\n// container.pivot.y = container.height / 2;\n// // Listen for animate update\n// app.ticker.add((delta) => {\n//     // rotate the container!\n//     // use delta to create frame-independent transform\n//     container.rotation -= 0.01 * delta;\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/model.js":
/*!****************************!*\
  !*** ./src/model/model.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Model (Data Layer) - this is where the data is stored for your app.\n * The model is decoupled from the views and controller.\n */\nvar Model = /*#__PURE__*/function () {\n  function Model() {\n    _classCallCheck(this, Model);\n\n    this.data = \"Hello MVffffdddC world!\";\n    this.config = {\n      speed: 30,\n      shapes: 10\n    };\n  }\n\n  _createClass(Model, [{\n    key: \"addSHape\",\n    value: function addSHape() {\n      shapePosition = {\n        x: 10,\n        y: 20\n      };\n    }\n  }, {\n    key: \"createRect\",\n    value: function createRect() {\n      var graphics = new PIXI.Graphics();\n      graphics.lineStyle(2, 0x0000FF, 1);\n      graphics.drawRect(50, 250, 100, 100);\n    }\n  }]);\n\n  return Model;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n//# sourceURL=webpack:///./src/model/model.js?");

/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model */ \"./src/model/model.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.\n * Use it to draw, display or animate whatever you want\n */\n\n\n\nvar View = /*#__PURE__*/function () {\n  function View() {\n    _classCallCheck(this, View);\n\n    this.model = new _model_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    this.test = function (text) {\n      return console.log(text);\n    };\n\n    this.app = new PIXI.Application({\n      width: 800,\n      height: 600,\n      backgroundColor: 0x1099bb\n    });\n    document.querySelector('#gameScreen').appendChild(this.app.view);\n  }\n\n  _createClass(View, [{\n    key: \"drawShape\",\n    value: function drawShape() {\n      this.app.stage.addChild(this.model.addShape);\n    }\n  }]);\n\n  return View;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack:///./src/view/view.js?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/style.blocks.css\");\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/index.js ./styles/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./styles/style.scss */\"./styles/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./styles/style.scss?");

/***/ })

/******/ });