webpackHotUpdate("static/development/pages/work.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Volumes/websites/ifa-brand/components/ImageModal.js";




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
        className: "jsx-1836409225" + " " + 'modal',
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
        className: "jsx-1836409225",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1836409225",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1836409225" + " " + 'closeBar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: onClickClose,
        className: "jsx-1836409225" + " " + "closeButton far fa-times-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1836409225" + " " + 'carousel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: onClickPrev,
        className: "jsx-1836409225" + " " + "arrow prev fas fa-chevron-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: imagePath + image.title + '.jpg',
        className: "jsx-1836409225",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: onClickNext,
        className: "jsx-1836409225" + " " + "arrow next fas fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1393942052",
        __self: this
      }, ".modal.jsx-1836409225{margin:0;padding:0;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2;}img.jsx-1836409225{width:60vw;max-width:700px;}.closeBar.jsx-1836409225{background-color:white;position:fixed;left:0;top:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.closeButton.jsx-1836409225{margin:10px;cursor:pointer;font-size:30px;color:black;}.carousel.jsx-1836409225{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.arrow.jsx-1836409225{color:black;font-size:50px;margin:50px;cursor:pointer;}@media (max-width:800px){.modal.jsx-1836409225{background-color:white;}img.jsx-1836409225{width:100vw;font-size:70px;}.arrow.jsx-1836409225{position:fixed;background-color:rgba(255,255,255,0.6);}.prev.jsx-1836409225{left:0;}.next.jsx-1836409225{right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL0ltYWdlTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN3QixBQUdpQyxBQWNHLEFBSVksQUFTWCxBQU1BLEFBS0EsQUFPZSxBQUdYLEFBSUcsQUFJVCxBQUdDLE9BRlgsQ0FHQSxDQTNEUyxFQWNPLENBYUQsQUFXQSxBQVVJLEdBSTJCLElBbkRoQyxJQWlCQyxBQTJCZixJQTlCSixBQWFtQixBQVdILEFBVVosT0EvQ0ssSUFpQkUsQ0FxQlEsQ0FyQ1QsRUEwQkssR0FUTCxFQWhCSyxJQWlCQSxHQVNmLEFBV0EsQUFZSSxJQWhEWSxJQWlCQyxRQWhCNkIsSUEyQm5CLG1DQTFCViwyQkFnQlkscUNBV04sVUExQkksa0RBZ0IzQixpQ0FXQSxnQkExQnVCLDZGQUNULFVBQ2QiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL2NvbXBvbmVudHMvSW1hZ2VNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9ICdzdGF0aWMvaW1hZ2VzLydcbiAgICBjb25zdCB7aW1hZ2UsIG9uQ2xpY2tDbG9zZSwgb25DbGlja05leHQsIG9uQ2xpY2tQcmV2fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbW9kYWwnfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01MG9CVUhFbXZwUSsxbFc0eTU3UFRGbWhDYVhwME1MNWQ2ME0xTTd1SDIrbnFVaXZ6SWViaG5kT0pLMjhhbnZmXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjbG9zZUJhcid9ID5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja0Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZUJ1dHRvbiBmYXIgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nhcm91c2VsJ30+XG4gICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e29uQ2xpY2tQcmV2fSBjbGFzc05hbWU9XCJhcnJvdyBwcmV2IGZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVBhdGggKyBpbWFnZS50aXRsZSArICcuanBnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja05leHR9IGNsYXNzTmFtZT1cImFycm93IG5leHQgZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlQmFye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VCdXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2Fyb3VzZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFycm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFycm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubmV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5Lm1vZGFsLW9wZW4ge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxufVxuIl19 */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/ImageModal.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2976112516",
        __self: this
      }, "body.modal-open{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dlYnNpdGVzL2lmYS1icmFuZC9jb21wb25lbnRzL0ltYWdlTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0crQixBQUc2QixnQkFDcEIiLCJmaWxlIjoiL1ZvbHVtZXMvd2Vic2l0ZXMvaWZhLWJyYW5kL2NvbXBvbmVudHMvSW1hZ2VNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9ICdzdGF0aWMvaW1hZ2VzLydcbiAgICBjb25zdCB7aW1hZ2UsIG9uQ2xpY2tDbG9zZSwgb25DbGlja05leHQsIG9uQ2xpY2tQcmV2fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbW9kYWwnfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01MG9CVUhFbXZwUSsxbFc0eTU3UFRGbWhDYVhwME1MNWQ2ME0xTTd1SDIrbnFVaXZ6SWViaG5kT0pLMjhhbnZmXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjbG9zZUJhcid9ID5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja0Nsb3NlfSBjbGFzc05hbWU9XCJjbG9zZUJ1dHRvbiBmYXIgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Nhcm91c2VsJ30+XG4gICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e29uQ2xpY2tQcmV2fSBjbGFzc05hbWU9XCJhcnJvdyBwcmV2IGZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVBhdGggKyBpbWFnZS50aXRsZSArICcuanBnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17b25DbGlja05leHR9IGNsYXNzTmFtZT1cImFycm93IG5leHQgZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlQmFye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VCdXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2Fyb3VzZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFycm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFycm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubmV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5Lm1vZGFsLW9wZW4ge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxufVxuIl19 */\n/*@ sourceURL=/Volumes/websites/ifa-brand/components/ImageModal.js */"));
    }
  }]);

  return ImageModal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=work.js.948c286ed2cca6eaa724.hot-update.js.map