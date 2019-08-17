module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return work; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/home/Projects/ifa-brand/components/Footer.js";


function work() {
  var imagePath = 'static/icons/';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3902174783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.facebook.com/ifapolaroids/",
    target: "_blank",
    className: "jsx-3902174783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imagePath + 'facebook.png',
    className: "jsx-3902174783" + " " + 'linkIcon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/ifabrand/",
    target: "_blank",
    className: "jsx-3902174783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imagePath + 'instagram.png',
    className: "jsx-3902174783" + " " + 'linkIcon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.etsy.com/shop/Ifaroids/",
    target: "_blank",
    className: "jsx-3902174783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imagePath + 'etsy.png',
    className: "jsx-3902174783" + " " + 'linkIcon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3902174783",
    __self: this
  }, "footer.jsx-3902174783{position:fixed;top:200px;left:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.linkIcon.jsx-3902174783{padding:20px;height:40px;margin:0;}@media (max-width:950px){footer.jsx-3902174783{top:unset;left:unset;bottom:0;background-color:white;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPd0IsQUFHb0MsQUFRRixBQU1ELFVBQ0MsR0FORCxFQVJGLE1BZUMsSUFkRCxBQVFELEtBT2dCLElBTjdCLENBUmlCLGtCQWVBLFdBQ1ksNkNBZkgsc0RBZ0JELHdCQWZFLDZDQWdCdkIsc0RBZkoiLCJmaWxlIjoiL1VzZXJzL2hvbWUvUHJvamVjdHMvaWZhLWJyYW5kL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd29yaygpIHtcbiAgICBjb25zdCBpbWFnZVBhdGggPSAnc3RhdGljL2ljb25zLydcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2lmYXBvbGFyb2lkcy8nIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgY2xhc3NOYW1lPSdsaW5rSWNvbicgc3JjPXtpbWFnZVBhdGggKyAnZmFjZWJvb2sucG5nJ30gLz48L2E+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2lmYWJyYW5kLycgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBjbGFzc05hbWU9J2xpbmtJY29uJyBzcmM9e2ltYWdlUGF0aCArICdpbnN0YWdyYW0ucG5nJ30gLz48L2E+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5ldHN5LmNvbS9zaG9wL0lmYXJvaWRzLycgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBjbGFzc05hbWU9J2xpbmtJY29uJyBzcmM9e2ltYWdlUGF0aCArICdldHN5LnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saW5rSWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/Footer.js */"));
}

/***/ }),

/***/ "./components/ImageGrid.js":
/*!*********************************!*\
  !*** ./components/ImageGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGrid; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/home/Projects/ifa-brand/components/ImageGrid.js";


function ImageGrid(props) {
  var imagePath = 'static/images/';
  var images = props.images,
      onClickImage = props.onClickImage;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2792638702",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2792638702" + " " + 'gridContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, images.map(function (image, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i,
      onClick: function onClick() {
        return onClickImage(i);
      },
      className: "jsx-2792638702" + " " + 'gridItem',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: imagePath + image.title + '_thumb.jpg',
      className: "jsx-2792638702",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2792638702",
    __self: this
  }, ".gridContainer.jsx-2792638702{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1249px;margin:0px auto;}.gridItem.jsx-2792638702{cursor:pointer;margin:10px;}img.jsx-2792638702{min-width:250px;}@media (max-width:950px){img.jsx-2792638702{min-width:150px;width:150px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL0ltYWdlR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndCLEFBR2tDLEFBUUUsQUFJQyxBQUlJLGVBUFIsQ0FJaEIsQUFJb0IsV0FQcEIsQ0FRSSw4Q0FqQnVCLG1HQUNSLHlEQUNFLGlCQUNELGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvaG9tZS9Qcm9qZWN0cy9pZmEtYnJhbmQvY29tcG9uZW50cy9JbWFnZUdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlR3JpZChwcm9wcykge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9ICdzdGF0aWMvaW1hZ2VzLydcbiAgICBjb25zdCB7aW1hZ2VzLCBvbkNsaWNrSW1hZ2V9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWRDb250YWluZXInfT5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5vbkNsaWNrSW1hZ2UoaSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydncmlkSXRlbSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlUGF0aCArIGltYWdlLnRpdGxlICsgJ190aHVtYi5qcGcnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmdyaWRDb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTI0OXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ncmlkSXRlbXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/ImageGrid.js */"));
}

/***/ }),

/***/ "./components/ImageModal.js":
/*!**********************************!*\
  !*** ./components/ImageModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageModal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/home/Projects/ifa-brand/components/ImageModal.js";




var ImageModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ImageModal, _Component);

  function ImageModal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageModal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageModal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var body = document.querySelector("body");
      body.classList.add('modal-open');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var body = document.querySelector("body");
      body.classList.remove('modal-open');
    }
  }, {
    key: "render",
    value: function render() {
      var imagePath = 'static/images/';
      var _this$props = this.props,
          image = _this$props.image,
          onClickClose = _this$props.onClickClose,
          onClickNext = _this$props.onClickNext,
          onClickPrev = _this$props.onClickPrev;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-391590506" + " " + 'modal',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous",
        className: "jsx-391590506",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-391590506",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-391590506" + " " + 'closeBar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: onClickClose,
        className: "jsx-391590506" + " " + "closeButton far fa-times-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-391590506" + " " + 'carousel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: onClickPrev,
        className: "jsx-391590506" + " " + "arrow prev fas fa-chevron-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: imagePath + image.title + '.jpg',
        className: "jsx-391590506",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: onClickNext,
        className: "jsx-391590506" + " " + "arrow next fas fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3062607175",
        __self: this
      }, ".modal.jsx-391590506{margin:0;padding:0;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2;}img.jsx-391590506{width:auto;max-width:700px;max-height:100vh;}.closeBar.jsx-391590506{background-color:none;position:fixed;left:0;top:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.closeButton.jsx-391590506{margin:10px;cursor:pointer;font-size:30px;color:black;}.carousel.jsx-391590506{z-index:20;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.arrow.jsx-391590506{color:black;font-size:50px;margin:50px;cursor:pointer;}@media (max-width:800px){.modal.jsx-391590506{background-color:white;}img.jsx-391590506{width:100vw;font-size:70px;}.arrow.jsx-391590506{position:fixed;background-color:rgba(255,255,255,0.6);}.prev.jsx-391590506{left:0;}.next.jsx-391590506{right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL0ltYWdlTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN3QixBQUdpQyxBQWdCRyxBQUtXLEFBU1YsQUFNRCxBQU1DLEFBT2UsQUFHWCxBQUlHLEFBSVQsQUFHQyxPQUZYLENBR0EsQ0EvRFMsRUFnQk8sQUFvQkosQ0FORyxBQVlBLEFBVUksR0FJMkIsSUF2RGhDLEdBb0JDLENBNEJmLElBaENpQixBQWNGLEFBWUgsQUFVWixPQW5ESyxHQW9CRSxFQXNCUSxDQXpDVCxFQTZCSyxFQWRmLEFBS1UsR0FuQkssR0FvQkEsSUFTZixBQVlBLEFBWUksSUFwRFksR0FvQkMsU0FuQjZCLGVBK0JuQix3QkE5QlYsMEJBbUJZLGdEQWxCRixDQThCSixnREFYdkIsNkNBWUEsS0E5QnVCLDZGQUNULFVBQ2QiLCJmaWxlIjoiL1VzZXJzL2hvbWUvUHJvamVjdHMvaWZhLWJyYW5kL2NvbXBvbmVudHMvSW1hZ2VNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9ICdzdGF0aWMvaW1hZ2VzLydcbiAgICBjb25zdCB7aW1hZ2UsIG9uQ2xpY2tDbG9zZSwgb25DbGlja05leHQsIG9uQ2xpY2tQcmV2fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbW9kYWwnfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01MG9CVUhFbXZwUSsxbFc0eTU3UFRGbWhDYVhwME1MNWQ2ME0xTTd1SDIrbnFVaXZ6SWViaG5kT0pLMjhhbnZmXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjbG9zZUJhcid9ID5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja0Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZUJ1dHRvbiBmYXIgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nhcm91c2VsJ30+XG4gICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e29uQ2xpY2tQcmV2fSBjbGFzc05hbWU9XCJhcnJvdyBwcmV2IGZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVBhdGggKyBpbWFnZS50aXRsZSArICcuanBnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja05leHR9IGNsYXNzTmFtZT1cImFycm93IG5leHQgZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKndpZHRoOiA2MHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDsqL1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlQmFye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZUJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJvdXNlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5leHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keS5tb2RhbC1vcGVuIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/ImageModal.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2976112516",
        __self: this
      }, "body.modal-open{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL0ltYWdlTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0crQixBQUc2QixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2hvbWUvUHJvamVjdHMvaWZhLWJyYW5kL2NvbXBvbmVudHMvSW1hZ2VNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9ICdzdGF0aWMvaW1hZ2VzLydcbiAgICBjb25zdCB7aW1hZ2UsIG9uQ2xpY2tDbG9zZSwgb25DbGlja05leHQsIG9uQ2xpY2tQcmV2fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbW9kYWwnfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01MG9CVUhFbXZwUSsxbFc0eTU3UFRGbWhDYVhwME1MNWQ2ME0xTTd1SDIrbnFVaXZ6SWViaG5kT0pLMjhhbnZmXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjbG9zZUJhcid9ID5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja0Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZUJ1dHRvbiBmYXIgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nhcm91c2VsJ30+XG4gICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e29uQ2xpY2tQcmV2fSBjbGFzc05hbWU9XCJhcnJvdyBwcmV2IGZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVBhdGggKyBpbWFnZS50aXRsZSArICcuanBnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja05leHR9IGNsYXNzTmFtZT1cImFycm93IG5leHQgZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKndpZHRoOiA2MHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDsqL1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlQmFye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZUJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJvdXNlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5leHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keS5tb2RhbC1vcGVuIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/ImageModal.js */"));
    }
  }]);

  return ImageModal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NavbarContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavbarContent */ "./components/NavbarContent.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _NavbarContent_smallscreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavbarContent_smallscreen */ "./components/NavbarContent_smallscreen.js");







var _jsxFileName = "/Users/home/Projects/ifa-brand/components/Navbar.js";






var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleResize", function () {
      var smallScreen = _this.state.smallScreen;
      var width = window.innerWidth;
      var newSmallScreen = false;

      if (width <= 500) {
        newSmallScreen = true;
      }

      if (newSmallScreen !== smallScreen) {
        _this.setState({
          smallScreen: newSmallScreen
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScroll", function () {
      var newYPos = window.scrollY;

      if (newYPos > 62 && newYPos < _this.yPos) {
        _this.setState({
          positionFixed: true
        });
      } else if (newYPos <= 1 || newYPos > _this.yPos) {
        _this.setState({
          positionFixed: false
        });
      }

      _this.yPos = newYPos;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getPosition", function () {
      var positionFixed = _this.state.positionFixed;
      return positionFixed ? 'fixed' : '';
    });

    _this.state = {
      positionFixed: false,
      smallScreen: undefined
    };
    _this.yPos = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          positionFixed = _this$state.positionFixed,
          smallScreen = _this$state.smallScreen;
      var forceRemoveNav = this.props.forceRemoveNav;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous",
        className: "jsx-4178360401",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), smallScreen !== undefined && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, smallScreen ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NavbarContent_smallscreen__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, positionFixed && !forceRemoveNav && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "jsx-4178360401" + " " + 'fixed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NavbarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), forceRemoveNav ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "jsx-4178360401" + " " + 'static hide',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NavbarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "jsx-4178360401" + " " + 'static',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NavbarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "175856510",
        __self: this
      }, ".fixed.jsx-4178360401{position:fixed;top:0;background-color:white;box-shadow:5px 5px 5px;-webkit-animation-name:example;-webkit-animation-duration:0.5;-webkit-animation-name:example-jsx-4178360401;animation-name:example-jsx-4178360401;-webkit-animation-duration:0.5s;animation-duration:0.5s;}.static.jsx-4178360401{margin-bottom:60px;}.hide.jsx-4178360401{color:transparent !important;}@-webkit-keyframes example{from.jsx-4178360401{opacity:0;}to.jsx-4178360401{opacity:1;}}@-webkit-keyframes example-jsx-4178360401{from{opacity:0;}to{opacity:1;}}@keyframes example-jsx-4178360401{from{opacity:0;}to{opacity:1;}}@media (max-width:950px){.fixed.jsx-4178360401{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBRzRCLEFBVUksQUFHVSxBQUlkLEFBQ0YsQUFLRSxBQUNGLEFBSUQsVUFYSSxBQUNGLEFBS0UsQUFDRixDQUtkLElBNUJNLElBVVIsRUFUeUIsUUFZekIsZUFYeUIsdUJBQ1EsK0JBQ0EsK0JBQ1Isb0ZBQ0Msd0RBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXJDb250ZW50IGZyb20gJy4vTmF2YmFyQ29udGVudCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbiBmcm9tICcuL05hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG4gICAgICBzbWFsbFNjcmVlbjogdW5kZWZpbmVkXG4gICAgfVxuICAgIHRoaXMueVBvcyA9IDBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXG4gIH1cblxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc3Qge3NtYWxsU2NyZWVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgbGV0IG5ld1NtYWxsU2NyZWVuID0gZmFsc2VcbiAgICBpZiAod2lkdGggPD0gNTAwKXtcbiAgICAgIG5ld1NtYWxsU2NyZWVuID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoIG5ld1NtYWxsU2NyZWVuICE9PSBzbWFsbFNjcmVlbil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzbWFsbFNjcmVlbjogbmV3U21hbGxTY3JlZW59KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdZUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKG5ld1lQb3MgPiA2MiAmJiBuZXdZUG9zIDwgdGhpcy55UG9zKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3NpdGlvbkZpeGVkOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIGlmIChuZXdZUG9zPD0xIHx8IG5ld1lQb3MgPiB0aGlzLnlQb3Mpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnlQb3MgPSBuZXdZUG9zXG4gIH1cblxuICBnZXRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7cG9zaXRpb25GaXhlZH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIHBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cG9zaXRpb25GaXhlZCwgc21hbGxTY3JlZW59ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtmb3JjZVJlbW92ZU5hdn0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01MG9CVUhFbXZwUSsxbFc0eTU3UFRGbWhDYVhwME1MNWQ2ME0xTTd1SDIrbnFVaXZ6SWViaG5kT0pLMjhhbnZmXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgeyhzbWFsbFNjcmVlbiAhPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtzbWFsbFNjcmVlbiA/IFxuICAgICAgICAgICAgICA8TmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbiAvPlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7IChwb3NpdGlvbkZpeGVkICYmICFmb3JjZVJlbW92ZU5hdikgJiZcbiAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmaXhlZCc+PE5hdmJhckNvbnRlbnQgLz48L25hdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBmb3JjZVJlbW92ZU5hdiA/XG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nc3RhdGljIGhpZGUnPjxOYXZiYXJDb250ZW50IC8+PC9uYXY+XG4gICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nc3RhdGljJz48TmF2YmFyQ29udGVudCAvPjwvbmF2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG5cblxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZml4ZWQge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweDtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjU7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RhdGljIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oaWRlIHtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGV4YW1wbGUge1xuICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogMDt9XG4gICAgICAgICAgICB0byB7b3BhY2l0eTogMTt9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogU3RhbmRhcmQgc3ludGF4ICovXG4gICAgICAgICAgQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IDA7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHk6IDE7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgIC5maXhlZHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/Navbar.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3531829542",
        __self: this
      }, "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SCtCLEFBR3FCLFNBQ0MsVUFDYiIsImZpbGUiOiIvVXNlcnMvaG9tZS9Qcm9qZWN0cy9pZmEtYnJhbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyQ29udGVudCBmcm9tICcuL05hdmJhckNvbnRlbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4gZnJvbSAnLi9OYXZiYXJDb250ZW50X3NtYWxsc2NyZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuICAgICAgc21hbGxTY3JlZW46IHVuZGVmaW5lZFxuICAgIH1cbiAgICB0aGlzLnlQb3MgPSAwXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIHRoaXMuaGFuZGxlUmVzaXplKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICB9XG5cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzbWFsbFNjcmVlbn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGxldCBuZXdTbWFsbFNjcmVlbiA9IGZhbHNlXG4gICAgaWYgKHdpZHRoIDw9IDUwMCl7XG4gICAgICBuZXdTbWFsbFNjcmVlbiA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBuZXdTbWFsbFNjcmVlbiAhPT0gc21hbGxTY3JlZW4pe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c21hbGxTY3JlZW46IG5ld1NtYWxsU2NyZWVufSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3WVBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChuZXdZUG9zID4gNjIgJiYgbmV3WVBvcyA8IHRoaXMueVBvcyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAobmV3WVBvczw9MSB8fCBuZXdZUG9zID4gdGhpcy55UG9zKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy55UG9zID0gbmV3WVBvc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qge3Bvc2l0aW9uRml4ZWR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiBwb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICcnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Bvc2l0aW9uRml4ZWQsIHNtYWxsU2NyZWVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7Zm9yY2VSZW1vdmVOYXZ9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjEvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNTBvQlVIRW12cFErMWxXNHk1N1BURm1oQ2FYcDBNTDVkNjBNMU03dUgyK25xVWl2ekllYmhuZE9KSzI4YW52ZlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHsoc21hbGxTY3JlZW4gIT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7c21hbGxTY3JlZW4gPyBcbiAgICAgICAgICAgICAgPE5hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4gLz5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgeyAocG9zaXRpb25GaXhlZCAmJiAhZm9yY2VSZW1vdmVOYXYpICYmXG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZml4ZWQnPjxOYXZiYXJDb250ZW50IC8+PC9uYXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgZm9yY2VSZW1vdmVOYXYgP1xuICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J3N0YXRpYyBoaWRlJz48TmF2YmFyQ29udGVudCAvPjwvbmF2PlxuICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J3N0YXRpYyc+PE5hdmJhckNvbnRlbnQgLz48L25hdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpeGVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleGFtcGxlOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41OyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXRpYyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGlkZSB7XG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBleGFtcGxlIHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IDA7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHk6IDE7fVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICAgICAgICAgIEBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAwO31cbiAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxO31cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAuZml4ZWR7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/Navbar.js */"));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./components/NavbarContent.js":
/*!*************************************!*\
  !*** ./components/NavbarContent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/home/Projects/ifa-brand/components/NavbarContent.js";





var NavbarContent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavbarContent, _Component);

  function NavbarContent() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarContent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarContent).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarContent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4085654278" + " " + 'navbarContent',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon/favicon.ico",
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous",
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "jsx-4085654278" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4085654278" + " " + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Ifa Brand"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-4085654278" + " " + 'navItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Work"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.etsy.com/shop/Ifaroids/",
        target: "_blank",
        className: "jsx-4085654278",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Shop")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4085654278",
        __self: this
      }, "nav.jsx-4085654278{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Titillium Web',sans-serif;font-weight:100;font-size:20px;}ul.jsx-4085654278{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;}li.jsx-4085654278{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-right:30px;}.logo.jsx-4085654278{font-size:30px;margin:0;margin-right:60px;font-weight:100 !important;}a.jsx-4085654278{color:unset;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.jsx-4085654278:hover{opacity:0.6;}.fixed.jsx-4085654278{position:fixed;background-color:white;}.menuDropdown.jsx-4085654278{color:black;font-size:40px;position:fixed;right:30px;top:20px;}@media (max-width:950px){.nav.jsx-4085654278{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}.logo.jsx-4085654278{margin-left:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhckNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUc4QixBQU9BLEFBS0QsQUFPRyxBQU9KLEFBTUMsQUFJRyxBQUtELEFBUUcsQUFLSSxZQTNCTixBQU1qQixBQVNtQixHQXRCUixBQWlCYyxFQWtCdkIsT0FsQ2tCLEdBT0csQUFlSixXQUxuQixJQWhCNEIsQUFzQmIsV0FDRixTQUNiLE9BdkJBLEtBdEIwQyxBQU85QixBQUtNLEFBcUNrQixHQXJCcEMsT0FwQkEsTUFLdUIsdUJBWkwsZ0JBQ0QsZUFDbkIsNkNBZ0RHLEVBckNtQixTQXFDbEIsU0FwQ0YiLCJmaWxlIjoiL1VzZXJzL2hvbWUvUHJvamVjdHMvaWZhLWJyYW5kL2NvbXBvbmVudHMvTmF2YmFyQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJDb250ZW50Jz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5JZmEgQnJhbmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZJdGVtcyc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtgL3dvcmtgfT48YT5Xb3JrPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17YC9hYm91dGB9PjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93d3cuZXRzeS5jb20vc2hvcC9JZmFyb2lkcy8nIHRhcmdldD1cIl9ibGFua1wiPlNob3A8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDoxMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOnVuc2V0O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgLmZpeGVkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgLm1lbnVEcm9wZG93bntcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/NavbarContent.js */"));
    }
  }]);

  return NavbarContent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./components/NavbarContent_smallscreen.js":
/*!*************************************************!*\
  !*** ./components/NavbarContent_smallscreen.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarContent_smallscreen; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/home/Projects/ifa-brand/components/NavbarContent_smallscreen.js";





var NavbarContent_smallscreen =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavbarContent_smallscreen, _Component);

  function NavbarContent_smallscreen(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarContent_smallscreen);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavbarContent_smallscreen).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeDropdown", function (e) {
      console.log('close dropdown', e.target.id);
      var dropdownOpen = _this.state.dropdownOpen;

      if (dropdownOpen && e.target.id !== 'dropdownMenu') {
        _this.setState({
          dropdownOpen: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggelDropdown", function () {
      var dropdownOpen = _this.state.dropdownOpen;
      console.log('set', !dropdownOpen);

      _this.setState({
        dropdownOpen: !dropdownOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onLinkClick", function () {
      _this.setState({
        dropdownOpen: false
      });
    });

    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarContent_smallscreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.onclick = this.closeDropdown;
    }
  }, {
    key: "render",
    value: function render() {
      var dropdownOpen = this.state.dropdownOpen;
      console.log('render open?', dropdownOpen);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-24859087" + " " + 'navbarContent',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon/favicon.ico",
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous",
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-24859087" + " " + 'navbarMargin',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
        className: "jsx-24859087" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-24859087" + " " + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Ifa Brand"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.toggelDropdown,
        className: "jsx-24859087" + " " + 'menuDropdown',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        id: "dropdownMenu",
        className: "jsx-24859087" + " " + "fas fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), dropdownOpen && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-24859087" + " " + 'navItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Work"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "https://www.etsy.com/shop/Ifaroids/",
        target: "_blank",
        className: "jsx-24859087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Shop")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "24859087",
        __self: this
      }, ".navbarMargin.jsx-24859087{margin-top:100px;}nav.jsx-24859087{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100vw;padding-top:20px;height:50px;position:fixed;top:0;background-color:white;}.logo.jsx-24859087{font-size:30px;margin:0;margin-right:60px;font-weight:100 !important;}ul.jsx-24859087{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;}li.jsx-24859087{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:30px;margin:10px;}h1.jsx-24859087{font-size:30px;margin:0;margin-right:60px;}a.jsx-24859087{color:unset;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.jsx-24859087:hover{opacity:0.6;}.fixed.jsx-24859087{position:fixed;background-color:white;}.menuDropdown.jsx-24859087{color:black;font-size:40px;position:fixed;right:30px;top:20px;}.logo.jsx-24859087{margin-left:50px;}.navItems.jsx-24859087{position:fixed;top:50px;right:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:50px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:white;box-shadow:0px 0px 5px 0px;}#dropdownMenu.jsx-24859087{font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR3QixBQUdrQyxBQUdKLEFBVUUsQUFPRixBQUtELEFBUUcsQUFNSixBQU1DLEFBSUcsQUFLRCxBQU9PLEFBR0YsQUFVRixZQWxDRixBQU1qQixBQVNtQixHQXpDUixBQW9CQSxBQWdCYyxBQWVWLEFBVWIsRUExRUYsQUE2REUsT0EvQ2tCLEFBb0JBLEFBK0JKLEdBekJPLEFBZUosT0FXQSxJQWhCbkIsSUFuQzRCLEFBb0I1QixBQXFCZSxXQUNGLFNBQ2IsT0ExQ0EsS0FiZ0MsQUFpQnBCLEFBS00sR0FnQmxCLE9BcEJBLE1BS3VCLGtCQXlDRSxtQkFDRyw4REFoRWQsRUF1QkcsVUF0QkUsSUFnRVUsQ0F6Q2YsWUF0QkEsQUF1QmQsVUF5Q2lDLEVBL0RoQixlQUNULE1BQ2lCLElBOER2QixtQkE3REYiLCJmaWxlIjoiL1VzZXJzL2hvbWUvUHJvamVjdHMvaWZhLWJyYW5kL2NvbXBvbmVudHMvTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gdGhpcy5jbG9zZURyb3Bkb3duXG4gICAgfVxuXG4gICAgY2xvc2VEcm9wZG93biA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xvc2UgZHJvcGRvd24nLCBlLnRhcmdldC5pZClcbiAgICAgIGNvbnN0IHtkcm9wZG93bk9wZW59ID0gdGhpcy5zdGF0ZVxuICAgICAgaWYgKGRyb3Bkb3duT3BlbiAmJiBlLnRhcmdldC5pZCAhPT0gJ2Ryb3Bkb3duTWVudScpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3Bkb3duT3BlbjogZmFsc2V9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dlbERyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCcsICFkcm9wZG93bk9wZW4pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiAhZHJvcGRvd25PcGVufSlcbiAgICB9XG5cbiAgICBvbkxpbmtDbGljayA9ICgpID0+IHtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiBmYWxzZX0pXG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIG9wZW4/JywgZHJvcGRvd25PcGVuKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJDb250ZW50Jz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJNYXJnaW4nPjwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPklmYSBCcmFuZDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51RHJvcGRvd24nIG9uQ2xpY2s9e3RoaXMudG9nZ2VsRHJvcGRvd259PjxpIGlkPSdkcm9wZG93bk1lbnUnIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGRyb3Bkb3duT3BlbiAmJlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZJdGVtcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC93b3JrYH0+PGE+V29yazwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9uTGlua0NsaWNrfT48TGluayBocmVmPXtgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly93d3cuZXRzeS5jb20vc2hvcC9JZmFyb2lkcy8nIHRhcmdldD1cIl9ibGFua1wiPlNob3A8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLm5hdmJhck1hcmdpbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6MTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6dW5zZXQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAuZml4ZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAubWVudURyb3Bkb3due1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2SXRlbXN7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjZHJvcGRvd25NZW51IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/components/NavbarContent_smallscreen.js */"));
    }
  }]);

  return NavbarContent_smallscreen;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return work; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ImageGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ImageGrid */ "./components/ImageGrid.js");
/* harmony import */ var _components_ImageModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ImageModal */ "./components/ImageModal.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");







var _jsxFileName = "/Users/home/Projects/ifa-brand/pages/work.js";








var work =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(work, _Component);

  function work(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, work);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(work).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClickImage", function (index) {
      _this.setState({
        selectedIndex: index,
        forceRemoveNav: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeImageModal", function () {
      return _this.setState({
        selectedIndex: undefined,
        forceRemoveNav: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClickNextImage", function () {
      var _this$state = _this.state,
          selectedIndex = _this$state.selectedIndex,
          images = _this$state.images;

      if (selectedIndex < images.length - 1) {
        _this.setState({
          selectedIndex: selectedIndex + 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClickPrevImage", function () {
      var selectedIndex = _this.state.selectedIndex;

      if (selectedIndex > 0) {
        _this.setState({
          selectedIndex: selectedIndex - 1
        });
      }
    });

    _this.state = {
      images: undefined,
      selectedIndex: undefined,
      forceRemoveNav: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(work, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var images = __webpack_require__(/*! ../static/images/images.json */ "./static/images/images.json").images;

      this.setState({
        images: images
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          images = _this$state2.images,
          selectedIndex = _this$state2.selectedIndex,
          forceRemoveNav = _this$state2.forceRemoveNav;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Ifa Brand"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Titillium+Web:100,200,400",
        rel: "stylesheet",
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), selectedIndex !== undefined && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ImageModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        image: images[selectedIndex],
        onClickClose: this.closeImageModal,
        onClickNext: this.onClickNextImage,
        onClickPrev: this.onClickPrevImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        forceRemoveNav: forceRemoveNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), images && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ImageGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        images: images,
        onClickImage: this.onClickImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1177443500",
        __self: this
      }, "div.jsx-1557574126{margin:0;padding:10px 50px;}@media (max-width:950px){div.jsx-1557574126{padding:10px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9wYWdlcy93b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFNEIsQUFHaUMsQUFLUyxTQUpBLE1BS2pCLFlBSkoiLCJmaWxlIjoiL1VzZXJzL2hvbWUvUHJvamVjdHMvaWZhLWJyYW5kL3BhZ2VzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZUdyaWQnO1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZU1vZGFsJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3b3JrIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWFnZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGZvcmNlUmVtb3ZlTmF2OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gcmVxdWlyZSgnLi4vc3RhdGljL2ltYWdlcy9pbWFnZXMuanNvbicpLmltYWdlcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VzfSlcbiAgICB9XG5cbiAgICBvbkNsaWNrSW1hZ2UgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGZvcmNlUmVtb3ZlTmF2OiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xvc2VJbWFnZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkSW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9yY2VSZW1vdmVOYXY6IGZhbHNlXG4gICAgfSlcblxuICAgIG9uQ2xpY2tOZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZEluZGV4LCBpbWFnZXN9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IGltYWdlcy5sZW5ndGgtMSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4KzF9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja1ByZXZJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSW5kZXh9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJbmRleDogc2VsZWN0ZWRJbmRleC0xfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2ltYWdlcywgc2VsZWN0ZWRJbmRleCwgZm9yY2VSZW1vdmVOYXZ9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPklmYSBCcmFuZDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGl0aWxsaXVtK1dlYjoxMDAsMjAwLDQwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZEluZGV4IT09dW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsIGltYWdlPXtpbWFnZXNbc2VsZWN0ZWRJbmRleF19IG9uQ2xpY2tDbG9zZT17dGhpcy5jbG9zZUltYWdlTW9kYWx9IG9uQ2xpY2tOZXh0PXt0aGlzLm9uQ2xpY2tOZXh0SW1hZ2V9IG9uQ2xpY2tQcmV2PXt0aGlzLm9uQ2xpY2tQcmV2SW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPE5hdmJhciBmb3JjZVJlbW92ZU5hdj17Zm9yY2VSZW1vdmVOYXZ9Lz5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZUdyaWQgaW1hZ2VzPXtpbWFnZXN9IG9uQ2xpY2tJbWFnZT17dGhpcy5vbkNsaWNrSW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHggNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/pages/work.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1144164619",
        __self: this
      }, "*{font-family:'Titillium Web',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9wYWdlcy93b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFMkMsQUFHeUQsdUNBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9ob21lL1Byb2plY3RzL2lmYS1icmFuZC9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VHcmlkJztcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VNb2RhbCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd29yayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1hZ2VzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBmb3JjZVJlbW92ZU5hdjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2VzLmpzb24nKS5pbWFnZXM7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltYWdlc30pXG4gICAgfVxuXG4gICAgb25DbGlja0ltYWdlID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgICBmb3JjZVJlbW92ZU5hdjogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsb3NlSW1hZ2VNb2RhbCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZEluZGV4OiB1bmRlZmluZWQsXG4gICAgICAgIGZvcmNlUmVtb3ZlTmF2OiBmYWxzZVxuICAgIH0pXG5cbiAgICBvbkNsaWNrTmV4dEltYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7c2VsZWN0ZWRJbmRleCwgaW1hZ2VzfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPCBpbWFnZXMubGVuZ3RoLTEpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCsxfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tQcmV2SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZEluZGV4fSA9IHRoaXMuc3RhdGVcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAwKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgtMX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpbWFnZXMsIHNlbGVjdGVkSW5kZXgsIGZvcmNlUmVtb3ZlTmF2fSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5JZmEgQnJhbmQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRpdGlsbGl1bStXZWI6MTAwLDIwMCw0MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJbmRleCE9PXVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbCBpbWFnZT17aW1hZ2VzW3NlbGVjdGVkSW5kZXhdfSBvbkNsaWNrQ2xvc2U9e3RoaXMuY2xvc2VJbWFnZU1vZGFsfSBvbkNsaWNrTmV4dD17dGhpcy5vbkNsaWNrTmV4dEltYWdlfSBvbkNsaWNrUHJldj17dGhpcy5vbkNsaWNrUHJldkltYWdlfS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxOYXZiYXIgZm9yY2VSZW1vdmVOYXY9e2ZvcmNlUmVtb3ZlTmF2fS8+XG4gICAgICAgICAgICAgICAge2ltYWdlcyAmJlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VHcmlkIGltYWdlcz17aW1hZ2VzfSBvbkNsaWNrSW1hZ2U9e3RoaXMub25DbGlja0ltYWdlfS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/home/Projects/ifa-brand/pages/work.js */"));
    }
  }]);

  return work;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "./static/images/images.json":
/*!***********************************!*\
  !*** ./static/images/images.json ***!
  \***********************************/
/*! exports provided: images, default */
/***/ (function(module) {

module.exports = {"images":[{"title":"1","thumbnail":"1_thumb.jpg","largeImage":"1.jpg"},{"title":"2","thumbnail":"2_thumb.jpg","largeImage":"2.jpg"},{"title":"3","thumbnail":"3_thumb.jpg","largeImage":"3.jpg"},{"title":"4","thumbnail":"4_thumb.jpg","largeImage":"4.jpg"},{"title":"5","thumbnail":"5_thumb.jpg","largeImage":"5.jpg"},{"title":"6","thumbnail":"dummy-image-250-250.jpg","largeImage":"6.jpg"},{"title":"7","thumbnail":"dummy-image-250-250.jpg","largeImage":"7.jpg"},{"title":"8","thumbnail":"dummy-image-250-250.jpg","largeImage":"8.jpg"},{"title":"9","thumbnail":"dummy-image-250-250.jpg","largeImage":"9.jpg"},{"title":"10","thumbnail":"dummy-image-250-250.jpg","largeImage":"10.jpg"},{"title":"11","thumbnail":"dummy-image-250-250.jpg","largeImage":"dummy-image-1000-1000.jpg"},{"title":"12","thumbnail":"dummy-image-250-250.jpg","largeImage":"dummy-image-1000-1000.jpg"},{"title":"13","thumbnail":"dummy-image-250-250.jpg","largeImage":"dummy-image-1000-1000.jpg"},{"title":"14","thumbnail":"dummy-image-250-250.jpg","largeImage":"dummy-image-1000-1000.jpg"},{"title":"15","thumbnail":"dummy-image-250-250.jpg","largeImage":"dummy-image-1000-1000.jpg"},{"title":"16","thumbnail":"dummy-image-250-250.jpg","largeImage":"dummy-image-1000-1000.jpg"},{"title":"17"},{"title":"18"},{"title":"19"},{"title":"20"},{"title":"21"},{"title":"22"},{"title":"23"},{"title":"24"},{"title":"25"},{"title":"26"},{"title":"27"},{"title":"28"},{"title":"29"},{"title":"30"},{"title":"31"},{"title":"32"},{"title":"33"},{"title":"34"},{"title":"35"},{"title":"36"},{"title":"37"},{"title":"38"},{"title":"39"},{"title":"40"}]};

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/home/Projects/ifa-brand/pages/work.js */"./pages/work.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map