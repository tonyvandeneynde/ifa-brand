webpackHotUpdate("static/development/pages/work.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ImageGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ImageGrid */ "./components/ImageGrid.js");
/* harmony import */ var _components_ImageModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ImageModal */ "./components/ImageModal.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Volumes/websites/ifa-brand/pages/work.js";







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
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Ifa Brand"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Titillium+Web",
        rel: "stylesheet",
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-1557574126",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), selectedIndex !== undefined && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ImageModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        image: images[selectedIndex],
        onClickClose: this.closeImageModal,
        onClickNext: this.onClickNextImage,
        onClickPrev: this.onClickPrevImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        forceRemoveNav: forceRemoveNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), images && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ImageGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        images: images,
        onClickImage: this.onClickImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1177443500",
        __self: this
      }, "div.jsx-1557574126{margin:0;padding:10px 50px;}@media (max-width:950px){div.jsx-1557574126{padding:10px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9wYWdlcy93b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFNEIsQUFHaUMsQUFLUyxTQUpBLE1BS2pCLFlBSkoiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL3BhZ2VzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZUdyaWQnO1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZU1vZGFsJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdvcmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltYWdlczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZm9yY2VSZW1vdmVOYXY6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zdCBpbWFnZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvaW1hZ2VzL2ltYWdlcy5qc29uJykuaW1hZ2VzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWFnZXN9KVxuICAgIH1cblxuICAgIG9uQ2xpY2tJbWFnZSA9IChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgZm9yY2VSZW1vdmVOYXY6IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjbG9zZUltYWdlTW9kYWwgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JjZVJlbW92ZU5hdjogZmFsc2VcbiAgICB9KVxuXG4gICAgb25DbGlja05leHRJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSW5kZXgsIGltYWdlc30gPSB0aGlzLnN0YXRlXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4IDwgaW1hZ2VzLmxlbmd0aC0xKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgrMX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrUHJldkltYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7c2VsZWN0ZWRJbmRleH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID4gMCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4LTF9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aW1hZ2VzLCBzZWxlY3RlZEluZGV4LCBmb3JjZVJlbW92ZU5hdn0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SWZhIEJyYW5kPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UaXRpbGxpdW0rV2ViXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkSW5kZXghPT11bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWwgaW1hZ2U9e2ltYWdlc1tzZWxlY3RlZEluZGV4XX0gb25DbGlja0Nsb3NlPXt0aGlzLmNsb3NlSW1hZ2VNb2RhbH0gb25DbGlja05leHQ9e3RoaXMub25DbGlja05leHRJbWFnZX0gb25DbGlja1ByZXY9e3RoaXMub25DbGlja1ByZXZJbWFnZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8TmF2YmFyIGZvcmNlUmVtb3ZlTmF2PXtmb3JjZVJlbW92ZU5hdn0vPlxuICAgICAgICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlR3JpZCBpbWFnZXM9e2ltYWdlc30gb25DbGlja0ltYWdlPXt0aGlzLm9uQ2xpY2tJbWFnZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Volumes/websites/ifa-brand/pages/work.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1144164619",
        __self: this
      }, "*{font-family:'Titillium Web',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9wYWdlcy93b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFMkMsQUFHeUQsdUNBQ3hDIiwiZmlsZSI6Ii9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VHcmlkJztcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VNb2RhbCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3b3JrIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWFnZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGZvcmNlUmVtb3ZlTmF2OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gcmVxdWlyZSgnLi4vc3RhdGljL2ltYWdlcy9pbWFnZXMuanNvbicpLmltYWdlcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VzfSlcbiAgICB9XG5cbiAgICBvbkNsaWNrSW1hZ2UgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGZvcmNlUmVtb3ZlTmF2OiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xvc2VJbWFnZU1vZGFsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkSW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9yY2VSZW1vdmVOYXY6IGZhbHNlXG4gICAgfSlcblxuICAgIG9uQ2xpY2tOZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZEluZGV4LCBpbWFnZXN9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IGltYWdlcy5sZW5ndGgtMSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4KzF9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja1ByZXZJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSW5kZXh9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJbmRleDogc2VsZWN0ZWRJbmRleC0xfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2ltYWdlcywgc2VsZWN0ZWRJbmRleCwgZm9yY2VSZW1vdmVOYXZ9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPklmYSBCcmFuZDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGl0aWxsaXVtK1dlYlwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZEluZGV4IT09dW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZU1vZGFsIGltYWdlPXtpbWFnZXNbc2VsZWN0ZWRJbmRleF19IG9uQ2xpY2tDbG9zZT17dGhpcy5jbG9zZUltYWdlTW9kYWx9IG9uQ2xpY2tOZXh0PXt0aGlzLm9uQ2xpY2tOZXh0SW1hZ2V9IG9uQ2xpY2tQcmV2PXt0aGlzLm9uQ2xpY2tQcmV2SW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPE5hdmJhciBmb3JjZVJlbW92ZU5hdj17Zm9yY2VSZW1vdmVOYXZ9Lz5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZUdyaWQgaW1hZ2VzPXtpbWFnZXN9IG9uQ2xpY2tJbWFnZT17dGhpcy5vbkNsaWNrSW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweCA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Volumes/websites/ifa-brand/pages/work.js */"));
    }
  }]);

  return work;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=work.js.3d46f3b68a3d6ee52051.hot-update.js.map