webpackHotUpdate("static/development/pages/about.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
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
        className: "jsx-2064827309" + " " + 'navbarContent',
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
        className: "jsx-2064827309",
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
        className: "jsx-2064827309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2064827309" + " " + 'navbarMargin',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
        className: "jsx-2064827309" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2064827309" + " " + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-2064827309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Ifa Brand")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.toggelDropdown,
        className: "jsx-2064827309" + " " + 'menuDropdown',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        id: "dropdownMenu",
        className: "jsx-2064827309" + " " + "fas fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), dropdownOpen && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-2064827309" + " " + 'navItems',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-2064827309",
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
        className: "jsx-2064827309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Work"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-2064827309",
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
        className: "jsx-2064827309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        onClick: this.onLinkClick,
        className: "jsx-2064827309",
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
        className: "jsx-2064827309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Shop"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2388869103",
        __self: this
      }, ".navbarMargin.jsx-2064827309{margin-top:100px;}nav.jsx-2064827309{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100vw;padding-top:20px;height:50px;position:fixed;top:0;background-color:white;}ul.jsx-2064827309{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;}li.jsx-2064827309{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:30px;margin:10px;}h1.jsx-2064827309{font-size:30px;margin:0;margin-right:60px;}a.jsx-2064827309{color:unset;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.jsx-2064827309:hover{opacity:0.6;}.fixed.jsx-2064827309{position:fixed;background-color:white;}.menuDropdown.jsx-2064827309{color:black;font-size:40px;position:fixed;right:30px;top:20px;}.logo.jsx-2064827309{margin-left:50px;}.navItems.jsx-2064827309{position:fixed;top:50px;right:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:50px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:white;box-shadow:0px 0px 5px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR3QixBQUdrQyxBQUdKLEFBV0EsQUFLRCxBQVFHLEFBTUosQUFNQyxBQUlHLEFBS0QsQUFPTyxBQUdGLFlBeEJKLEFBTWpCLEFBU21CLEdBckJSLEFBZ0JjLEFBZVYsRUExRGYsQUF1REUsT0EzQmtCLEFBK0JKLEdBekJPLEFBZUosT0FXQSxJQWhCbkIsSUFmQSxBQXFCZSxXQUNGLFNBQ2IsWUFqRGdDLEFBV3BCLEFBS00sR0FnQmxCLE9BcEJBLE1BS3VCLGtCQXlDRSxtQkFDRyw4REExRGQsRUFpQkcsVUFoQkUsSUEwRFUsQ0F6Q2YsWUFoQkEsQUFpQmQsVUF5Q2lDLEVBekRoQixlQUNULE1BQ2lCLElBd0R2QixtQkF2REoiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL2NvbXBvbmVudHMvTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gdGhpcy5jbG9zZURyb3Bkb3duXG4gICAgfVxuXG4gICAgY2xvc2VEcm9wZG93biA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xvc2UgZHJvcGRvd24nLCBlLnRhcmdldC5pZClcbiAgICAgIGNvbnN0IHtkcm9wZG93bk9wZW59ID0gdGhpcy5zdGF0ZVxuICAgICAgaWYgKGRyb3Bkb3duT3BlbiAmJiBlLnRhcmdldC5pZCAhPT0gJ2Ryb3Bkb3duTWVudScpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3Bkb3duT3BlbjogZmFsc2V9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dlbERyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCcsICFkcm9wZG93bk9wZW4pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiAhZHJvcGRvd25PcGVufSlcbiAgICB9XG5cbiAgICBvbkxpbmtDbGljayA9ICgpID0+IHtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiBmYWxzZX0pXG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIG9wZW4/JywgZHJvcGRvd25PcGVuKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJDb250ZW50Jz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJNYXJnaW4nPjwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPjxoMT5JZmEgQnJhbmQ8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51RHJvcGRvd24nIG9uQ2xpY2s9e3RoaXMudG9nZ2VsRHJvcGRvd259PjxpIGlkPSdkcm9wZG93bk1lbnUnIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGRyb3Bkb3duT3BlbiAmJlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZJdGVtcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC93b3JrYH0+PGE+V29yazwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9uTGlua0NsaWNrfT48TGluayBocmVmPXtgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC9zaG9wYH0+PGE+U2hvcDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLm5hdmJhck1hcmdpbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6dW5zZXQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAuZml4ZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAubWVudURyb3Bkb3due1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2SXRlbXN7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/NavbarContent_smallscreen.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1144164619",
        __self: this
      }, "*{font-family:'Titillium Web',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL05hdmJhckNvbnRlbnRfc21hbGxzY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0h1QyxBQUd5RCx1Q0FDeEMiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL2NvbXBvbmVudHMvTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyQ29udGVudF9zbWFsbHNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gdGhpcy5jbG9zZURyb3Bkb3duXG4gICAgfVxuXG4gICAgY2xvc2VEcm9wZG93biA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xvc2UgZHJvcGRvd24nLCBlLnRhcmdldC5pZClcbiAgICAgIGNvbnN0IHtkcm9wZG93bk9wZW59ID0gdGhpcy5zdGF0ZVxuICAgICAgaWYgKGRyb3Bkb3duT3BlbiAmJiBlLnRhcmdldC5pZCAhPT0gJ2Ryb3Bkb3duTWVudScpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3Bkb3duT3BlbjogZmFsc2V9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dlbERyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCcsICFkcm9wZG93bk9wZW4pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiAhZHJvcGRvd25PcGVufSlcbiAgICB9XG5cbiAgICBvbkxpbmtDbGljayA9ICgpID0+IHtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJvcGRvd25PcGVuOiBmYWxzZX0pXG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZHJvcGRvd25PcGVufSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIG9wZW4/JywgZHJvcGRvd25PcGVuKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJDb250ZW50Jz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXJNYXJnaW4nPjwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPjxoMT5JZmEgQnJhbmQ8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51RHJvcGRvd24nIG9uQ2xpY2s9e3RoaXMudG9nZ2VsRHJvcGRvd259PjxpIGlkPSdkcm9wZG93bk1lbnUnIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGRyb3Bkb3duT3BlbiAmJlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZJdGVtcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC93b3JrYH0+PGE+V29yazwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9uTGlua0NsaWNrfT48TGluayBocmVmPXtgL2Fib3V0YH0+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5vbkxpbmtDbGlja30+PExpbmsgaHJlZj17YC9zaG9wYH0+PGE+U2hvcDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLm5hdmJhck1hcmdpbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6dW5zZXQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAuZml4ZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAubWVudURyb3Bkb3due1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2SXRlbXN7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/NavbarContent_smallscreen.js */"));
    }
  }]);

  return NavbarContent_smallscreen;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=about.js.ab5e93aa59edbe8136e7.hot-update.js.map