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







var _jsxFileName = "/Volumes/websites/ifa-brand/components/Navbar.js";






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
        className: "jsx-3344867789",
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
        className: "jsx-3344867789" + " " + 'fixed',
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
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "jsx-3344867789" + " " + 'static',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NavbarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2905336706",
        __self: this
      }, ".fixed.jsx-3344867789{position:fixed;top:0;background-color:white;box-shadow:5px 5px 5px;-webkit-animation-name:example;-webkit-animation-duration:0.5;-webkit-animation-name:example-jsx-3344867789;animation-name:example-jsx-3344867789;-webkit-animation-duration:0.5s;animation-duration:0.5s;}.static.jsx-3344867789{margin-bottom:100px;}@-webkit-keyframes example{from.jsx-3344867789{opacity:0;}to.jsx-3344867789{opacity:1;}}@-webkit-keyframes example-jsx-3344867789{from{opacity:0;}to{opacity:1;}}@keyframes example-jsx-3344867789{from{opacity:0;}to{opacity:1;}}@media (max-width:950px){.fixed.jsx-3344867789{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRm9CLEFBRzRCLEFBVUssQUFJTCxBQUNGLEFBS0UsQUFDRixBQUlELFVBWEksQUFDRixBQUtFLEFBQ0YsQ0FLZCxJQXpCTSxLQVVSLENBVHlCLHVCQUNBLHVCQUNRLCtCQUNBLCtCQUNSLG9GQUNDLHdEQUMxQiIsImZpbGUiOiIvVm9sdW1lcy93ZWJzaXRlcy9pZmEtYnJhbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyQ29udGVudCBmcm9tICcuL05hdmJhckNvbnRlbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4gZnJvbSAnLi9OYXZiYXJDb250ZW50X3NtYWxsc2NyZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuICAgICAgc21hbGxTY3JlZW46IHVuZGVmaW5lZFxuICAgIH1cbiAgICB0aGlzLnlQb3MgPSAwXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIHRoaXMuaGFuZGxlUmVzaXplKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICB9XG5cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzbWFsbFNjcmVlbn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGxldCBuZXdTbWFsbFNjcmVlbiA9IGZhbHNlXG4gICAgaWYgKHdpZHRoIDw9IDUwMCl7XG4gICAgICBuZXdTbWFsbFNjcmVlbiA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBuZXdTbWFsbFNjcmVlbiAhPT0gc21hbGxTY3JlZW4pe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c21hbGxTY3JlZW46IG5ld1NtYWxsU2NyZWVufSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3WVBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChuZXdZUG9zID4gNjIgJiYgbmV3WVBvcyA8IHRoaXMueVBvcyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAobmV3WVBvczw9MSB8fCBuZXdZUG9zID4gdGhpcy55UG9zKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy55UG9zID0gbmV3WVBvc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qge3Bvc2l0aW9uRml4ZWR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiBwb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICcnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Bvc2l0aW9uRml4ZWQsIHNtYWxsU2NyZWVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7Zm9yY2VSZW1vdmVOYXZ9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjEvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNTBvQlVIRW12cFErMWxXNHk1N1BURm1oQ2FYcDBNTDVkNjBNMU03dUgyK25xVWl2ekllYmhuZE9KSzI4YW52ZlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHsoc21hbGxTY3JlZW4gIT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7c21hbGxTY3JlZW4gPyBcbiAgICAgICAgICAgICAgPE5hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4gLz5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgeyAocG9zaXRpb25GaXhlZCAmJiAhZm9yY2VSZW1vdmVOYXYpICYmXG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZml4ZWQnPjxOYXZiYXJDb250ZW50IC8+PC9uYXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdzdGF0aWMnPjxOYXZiYXJDb250ZW50IC8+PC9uYXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpeGVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleGFtcGxlOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41OyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXRpYyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBleGFtcGxlIHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IDA7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHk6IDE7fVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICAgICAgICAgIEBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAwO31cbiAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxO31cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAuZml4ZWR7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/Navbar.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3531829542",
        __self: this
      }, "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSCtCLEFBR3FCLFNBQ0MsVUFDYiIsImZpbGUiOiIvVm9sdW1lcy93ZWJzaXRlcy9pZmEtYnJhbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyQ29udGVudCBmcm9tICcuL05hdmJhckNvbnRlbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4gZnJvbSAnLi9OYXZiYXJDb250ZW50X3NtYWxsc2NyZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuICAgICAgc21hbGxTY3JlZW46IHVuZGVmaW5lZFxuICAgIH1cbiAgICB0aGlzLnlQb3MgPSAwXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIHRoaXMuaGFuZGxlUmVzaXplKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICB9XG5cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzbWFsbFNjcmVlbn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGxldCBuZXdTbWFsbFNjcmVlbiA9IGZhbHNlXG4gICAgaWYgKHdpZHRoIDw9IDUwMCl7XG4gICAgICBuZXdTbWFsbFNjcmVlbiA9IHRydWVcbiAgICB9XG4gICAgaWYgKCBuZXdTbWFsbFNjcmVlbiAhPT0gc21hbGxTY3JlZW4pe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c21hbGxTY3JlZW46IG5ld1NtYWxsU2NyZWVufSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3WVBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChuZXdZUG9zID4gNjIgJiYgbmV3WVBvcyA8IHRoaXMueVBvcyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAobmV3WVBvczw9MSB8fCBuZXdZUG9zID4gdGhpcy55UG9zKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy55UG9zID0gbmV3WVBvc1xuICB9XG5cbiAgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qge3Bvc2l0aW9uRml4ZWR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiBwb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICcnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3Bvc2l0aW9uRml4ZWQsIHNtYWxsU2NyZWVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7Zm9yY2VSZW1vdmVOYXZ9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjEvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtNTBvQlVIRW12cFErMWxXNHk1N1BURm1oQ2FYcDBNTDVkNjBNMU03dUgyK25xVWl2ekllYmhuZE9KSzI4YW52ZlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHsoc21hbGxTY3JlZW4gIT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7c21hbGxTY3JlZW4gPyBcbiAgICAgICAgICAgICAgPE5hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4gLz5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgeyAocG9zaXRpb25GaXhlZCAmJiAhZm9yY2VSZW1vdmVOYXYpICYmXG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZml4ZWQnPjxOYXZiYXJDb250ZW50IC8+PC9uYXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdzdGF0aWMnPjxOYXZiYXJDb250ZW50IC8+PC9uYXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZpeGVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleGFtcGxlOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41OyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXRpYyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBleGFtcGxlIHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IDA7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHk6IDE7fVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICAgICAgICAgIEBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAwO31cbiAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxO31cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAuZml4ZWR7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/Navbar.js */"));
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





var _jsxFileName = "/Volumes/websites/ifa-brand/components/NavbarContent.js";





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
        className: "jsx-3678126383" + " " + 'navbarContent',
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
        className: "jsx-3678126383",
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
        className: "jsx-3678126383",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "jsx-3678126383" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3678126383" + " " + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-3678126383",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Ifa Brand")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-3678126383" + " " + 'navItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-3678126383",
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
        className: "jsx-3678126383",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Work"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-3678126383",
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
        className: "jsx-3678126383",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-3678126383",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/shop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3678126383",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Shop"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3678126383",
        __self: this
      }, "nav.jsx-3678126383{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-3678126383{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;}li.jsx-3678126383{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-right:30px;}h1.jsx-3678126383{font-size:30px;margin:0;margin-right:60px;}a.jsx-3678126383{color:unset;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3678126383:hover{opacity:0.6;}.fixed.jsx-3678126383{position:fixed;background-color:white;}.menuDropdown.jsx-3678126383{color:black;font-size:40px;position:fixed;right:30px;top:20px;}@media (max-width:950px){.nav.jsx-3678126383{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}.logo.jsx-3678126383{margin-left:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhckNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUc4QixBQUlBLEFBS0QsQUFPRyxBQU1KLEFBTUMsQUFJRyxBQUtELEFBUUcsQUFLSSxZQTNCTixBQU1qQixBQVNtQixHQXJCUixBQWdCYyxFQWtCdkIsT0FqQ2tCLEdBTUcsQUFlSixXQUxuQixJQWZBLEFBcUJlLFdBQ0YsU0FDYixZQXpDRixBQUljLEFBS00sQUFvQ2tCLEdBckJwQyxPQW5CQSxNQUt1QixtR0FxQ3RCLEVBcENtQixTQW9DbEIsU0FuQ0YiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL2NvbXBvbmVudHMvTmF2YmFyQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJDb250ZW50Jz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz48aDE+SWZhIEJyYW5kPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZJdGVtcyc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtgL3dvcmtgfT48YT5Xb3JrPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17YC9hYm91dGB9PjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17YC9zaG9wYH0+PGE+U2hvcDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjp1bnNldDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgIC5maXhlZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgIC5tZW51RHJvcGRvd257XG4gICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/NavbarContent.js */"));
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







var _jsxFileName = "/Volumes/websites/ifa-brand/components/NavbarContent_smallscreen.js";





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
        className: "jsx-2388869103" + " " + 'navbarContent',
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
        className: "jsx-2388869103",
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
        className: "jsx-2388869103",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2388869103" + " " + 'navbarMargin',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
        className: "jsx-2388869103" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2388869103" + " " + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-2388869103",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Ifa Brand")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.toggelDropdown,
        className: "jsx-2388869103" + " " + 'menuDropdown',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        id: "dropdownMenu",
        className: "jsx-2388869103" + " " + "fas fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), dropdownOpen && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-2388869103" + " " + 'navItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-2388869103",
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
        className: "jsx-2388869103",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Work"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-2388869103",
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
        className: "jsx-2388869103",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-2388869103",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/shop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: "jsx-2388869103",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Shop"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2388869103",
        __self: this
      }, ".navbarMargin.jsx-2388869103{margin-top:100px;}nav.jsx-2388869103{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100vw;padding-top:20px;height:50px;position:fixed;top:0;background-color:white;}ul.jsx-2388869103{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;}li.jsx-2388869103{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:30px;margin:10px;}h1.jsx-2388869103{font-size:30px;margin:0;margin-right:60px;}a.jsx-2388869103{color:unset;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.jsx-2388869103:hover{opacity:0.6;}.fixed.jsx-2388869103{position:fixed;background-color:white;}.menuDropdown.jsx-2388869103{color:black;font-size:40px;position:fixed;right:30px;top:20px;}.logo.jsx-2388869103{margin-left:50px;}.navItems.jsx-2388869103{position:fixed;top:50px;right:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:50px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:white;box-shadow:0px 0px 5px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR3QixBQUdrQyxBQUdKLEFBV0EsQUFLRCxBQVFHLEFBTUosQUFNQyxBQUlHLEFBS0QsQUFPTyxBQUdGLFlBeEJKLEFBTWpCLEFBU21CLEdBckJSLEFBZ0JjLEFBZVYsRUExRGYsQUF1REUsT0EzQmtCLEFBK0JKLEdBekJPLEFBZUosT0FXQSxJQWhCbkIsSUFmQSxBQXFCZSxXQUNGLFNBQ2IsWUFqRGdDLEFBV3BCLEFBS00sR0FnQmxCLE9BcEJBLE1BS3VCLGtCQXlDRSxtQkFDRyw4REExRGQsRUFpQkcsVUFoQkUsSUEwRFUsQ0F6Q2YsWUFoQkEsQUFpQmQsVUF5Q2lDLEVBekRoQixlQUNULE1BQ2lCLElBd0R2QixtQkF2REoiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL2NvbXBvbmVudHMvTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gdGhpcy5jbG9zZURyb3Bkb3duXG4gICAgfVxuXG4gICAgY2xvc2VEcm9wZG93biA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xvc2UgZHJvcGRvd24nLCBlLnRhcmdldC5pZClcbiAgICAgIGNvbnN0IHtkcm9wZG93bk9wZW59ID0gdGhpcy5zdGF0ZVxuICAgICAgaWYgKGRyb3Bkb3duT3BlbiAmJiBlLnRhcmdldC5pZCAhPT0gJ2Ryb3Bkb3duTWVudScpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3Bkb3duT3BlbjogZmFsc2V9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dlbERyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCcsICFkcm9wZG93bk9wZW4pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiAhZHJvcGRvd25PcGVufSlcbiAgICB9XG5cbiAgICBvbkxpbmtDbGljayA9ICgpID0+IHtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiBmYWxzZX0pXG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIG9wZW4/JywgZHJvcGRvd25PcGVuKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJDb250ZW50Jz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJNYXJnaW4nPjwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPjxoMT5JZmEgQnJhbmQ8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51RHJvcGRvd24nIG9uQ2xpY2s9e3RoaXMudG9nZ2VsRHJvcGRvd259PjxpIGlkPSdkcm9wZG93bk1lbnUnIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGRyb3Bkb3duT3BlbiAmJlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZJdGVtcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC93b3JrYH0+PGE+V29yazwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9uTGlua0NsaWNrfT48TGluayBocmVmPXtgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC9zaG9wYH0+PGE+U2hvcDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLm5hdmJhck1hcmdpbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6dW5zZXQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAuZml4ZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAubWVudURyb3Bkb3due1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2SXRlbXN7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/NavbarContent_smallscreen.js */"));
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return work; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Volumes/websites/ifa-brand/pages/about.js";




function work() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-664863860" + " " + 'about',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Ifa Brand"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Titillium+Web:100",
    rel: "stylesheet",
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-664863860" + " " + 'about-text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Eroticism."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Sometimes Bold. Other times subtle."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "The underlining driving force in the work of Ifa Brand whilst exploring her exhibitionism. The viewer- voyeur in atmospheric tales with hints of fetishism engraved in polaroid worlds.\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "My interest in photography is an extension of my modelling career. The desire to create and control my own image started to appeal more to me than just being in front of the camera acting out someone else\u2019s concept. Since late 2017 I have been shooting solo and arranging everything from location to make-up, styling, modelling to the photography itself. Starring in my own film."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-664863860" + " " + 'about-publications',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Publications:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://photodarium.de/",
    target: "_blank",
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Photodarium Private 2019")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://photodarium.de/",
    target: "_blank",
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Photodarium Private 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://wasemag.com/",
    target: "_blank",
    className: "jsx-664863860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Wasemag.com"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1371671430",
    __self: this
  }, ".about.jsx-664863860{margin:0;padding:10px 50px;}.about-text.jsx-664863860{max-width:900px;margin-left:10%;margin-right:10%;}.about-publications.jsx-664863860{margin-top:100px;}a.jsx-664863860{-webkit-text-decoration:none;text-decoration:none;color:black;}@media (max-width:950px){.about.jsx-664863860{padding:10px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2dCLEFBR21CLEFBSU8sQUFLRSxBQUdJLEFBS0osU0FoQkEsTUFpQmpCLENBYmdCLENBS2xCLFVBUkEsS0FJbUIsaUJBQ25CLENBTWMsWUFDZCIsImZpbGUiOiIvVm9sdW1lcy93ZWJzaXRlcy9pZmEtYnJhbmQvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd29yaygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQnPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPklmYSBCcmFuZDwvdGl0bGU+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRpdGlsbGl1bStXZWI6MTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXZiYXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtdGV4dCc+XG4gICAgICA8cD5Fcm90aWNpc20uPC9wPlxuICAgICAgPHA+U29tZXRpbWVzIEJvbGQuIE90aGVyIHRpbWVzIHN1YnRsZS48L3A+XG4gICAgICA8cD5UaGUgdW5kZXJsaW5pbmcgZHJpdmluZyBmb3JjZSBpbiB0aGUgd29yayBvZiBJZmEgQnJhbmQgd2hpbHN0IGV4cGxvcmluZyBoZXIgZXhoaWJpdGlvbmlzbS4gVGhlIHZpZXdlci1cbiAgICAgIHZveWV1ciBpbiBhdG1vc3BoZXJpYyB0YWxlcyB3aXRoIGhpbnRzIG9mIGZldGlzaGlzbSBlbmdyYXZlZCBpbiBwb2xhcm9pZCB3b3JsZHMuwqA8L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxwPk15IGludGVyZXN0IGluIHBob3RvZ3JhcGh5IGlzIGFuIGV4dGVuc2lvbiBvZiBteSBtb2RlbGxpbmcgY2FyZWVyLiBUaGUgZGVzaXJlIHRvIGNyZWF0ZSBhbmQgY29udHJvbFxuICAgICAgbXkgb3duIGltYWdlIHN0YXJ0ZWQgdG8gYXBwZWFsIG1vcmUgdG8gbWUgdGhhbiBqdXN0IGJlaW5nIGluIGZyb250IG9mIHRoZSBjYW1lcmEgYWN0aW5nIG91dFxuICAgICAgc29tZW9uZSBlbHNl4oCZcyBjb25jZXB0LiBTaW5jZSBsYXRlIDIwMTcgSSBoYXZlIGJlZW4gc2hvb3Rpbmcgc29sbyBhbmQgYXJyYW5naW5nIGV2ZXJ5dGhpbmcgZnJvbVxuICAgICAgbG9jYXRpb24gdG8gbWFrZS11cCwgc3R5bGluZywgbW9kZWxsaW5nIHRvIHRoZSBwaG90b2dyYXBoeSBpdHNlbGYuIFN0YXJyaW5nIGluIG15IG93biBmaWxtLjwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC1wdWJsaWNhdGlvbnMnPlxuICAgICAgICA8ZGl2PlB1YmxpY2F0aW9uczo8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9waG90b2Rhcml1bS5kZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5QaG90b2Rhcml1bSBQcml2YXRlIDIwMTk8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vcGhvdG9kYXJpdW0uZGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGhvdG9kYXJpdW0gUHJpdmF0ZSAyMDIwPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3dhc2VtYWcuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPldhc2VtYWcuY29tPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFib3V0e1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHBhZGRpbmc6MTBweCA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hYm91dC10ZXh0e1xuICAgICAgICAgIG1heC13aWR0aDo5MDBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgICB9XG4gICAgICAgIC5hYm91dC1wdWJsaWNhdGlvbnN7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Volumes/websites/ifa-brand/pages/about.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "780453243",
    __self: this
  }, "*{font-family:'Titillium Web',sans-serif;font-weight:100;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGlDLEFBR3lELHVDQUN4QixnQkFDRCxlQUNmIiwiZmlsZSI6Ii9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3b3JrKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dCc+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SWZhIEJyYW5kPC90aXRsZT5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGl0aWxsaXVtK1dlYjoxMDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPE5hdmJhciAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC10ZXh0Jz5cbiAgICAgIDxwPkVyb3RpY2lzbS48L3A+XG4gICAgICA8cD5Tb21ldGltZXMgQm9sZC4gT3RoZXIgdGltZXMgc3VidGxlLjwvcD5cbiAgICAgIDxwPlRoZSB1bmRlcmxpbmluZyBkcml2aW5nIGZvcmNlIGluIHRoZSB3b3JrIG9mIElmYSBCcmFuZCB3aGlsc3QgZXhwbG9yaW5nIGhlciBleGhpYml0aW9uaXNtLiBUaGUgdmlld2VyLVxuICAgICAgdm95ZXVyIGluIGF0bW9zcGhlcmljIHRhbGVzIHdpdGggaGludHMgb2YgZmV0aXNoaXNtIGVuZ3JhdmVkIGluIHBvbGFyb2lkIHdvcmxkcy7CoDwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPHA+TXkgaW50ZXJlc3QgaW4gcGhvdG9ncmFwaHkgaXMgYW4gZXh0ZW5zaW9uIG9mIG15IG1vZGVsbGluZyBjYXJlZXIuIFRoZSBkZXNpcmUgdG8gY3JlYXRlIGFuZCBjb250cm9sXG4gICAgICBteSBvd24gaW1hZ2Ugc3RhcnRlZCB0byBhcHBlYWwgbW9yZSB0byBtZSB0aGFuIGp1c3QgYmVpbmcgaW4gZnJvbnQgb2YgdGhlIGNhbWVyYSBhY3Rpbmcgb3V0XG4gICAgICBzb21lb25lIGVsc2XigJlzIGNvbmNlcHQuIFNpbmNlIGxhdGUgMjAxNyBJIGhhdmUgYmVlbiBzaG9vdGluZyBzb2xvIGFuZCBhcnJhbmdpbmcgZXZlcnl0aGluZyBmcm9tXG4gICAgICBsb2NhdGlvbiB0byBtYWtlLXVwLCBzdHlsaW5nLCBtb2RlbGxpbmcgdG8gdGhlIHBob3RvZ3JhcGh5IGl0c2VsZi4gU3RhcnJpbmcgaW4gbXkgb3duIGZpbG0uPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LXB1YmxpY2F0aW9ucyc+XG4gICAgICAgIDxkaXY+UHVibGljYXRpb25zOjwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3Bob3RvZGFyaXVtLmRlL1wiIHRhcmdldD1cIl9ibGFua1wiPlBob3RvZGFyaXVtIFByaXZhdGUgMjAxOTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9waG90b2Rhcml1bS5kZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5QaG90b2Rhcml1bSBQcml2YXRlIDIwMjA8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd2FzZW1hZy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2FzZW1hZy5jb208L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYWJvdXR7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgcGFkZGluZzoxMHB4IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0LXRleHR7XG4gICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0LXB1YmxpY2F0aW9uc3tcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Volumes/websites/ifa-brand/pages/about.js */"));
}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/websites/ifa-brand/pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map