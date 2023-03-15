"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\github\\\\syntegra\\\\renderer\\\\pages\\\\index.js\";\n\n\n\n\nconst Home = () => {\n  const {\n    0: input,\n    1: setInput\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: message,\n    1: setMessage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const handleMessage = (event, message) => setMessage(message);\n\n    window.electron.message.on(handleMessage);\n    return () => {\n      window.electron.message.off(handleMessage);\n    };\n  }, []);\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    window.electron.message.send(input);\n    setMessage(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"jsx-1361289130\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      className: \"jsx-1361289130\",\n      children: \"Hello Electron!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), message && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: \"jsx-1361289130\",\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 19\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      className: \"jsx-1361289130\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: input,\n        onChange: e => setInput(e.target.value),\n        className: \"jsx-1361289130\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"1361289130\",\n      children: \"h1.jsx-1361289130{color:red;font-size:50px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXRodWJcXHN5bnRlZ3JhXFxyZW5kZXJlclxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Da0IsQUFHcUIsVUFDSyxlQUNqQiIsImZpbGUiOiJDOlxcZ2l0aHViXFxzeW50ZWdyYVxccmVuZGVyZXJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UpID0+IHNldE1lc3NhZ2UobWVzc2FnZSlcbiAgICB3aW5kb3cuZWxlY3Ryb24ubWVzc2FnZS5vbihoYW5kbGVNZXNzYWdlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5lbGVjdHJvbi5tZXNzYWdlLm9mZihoYW5kbGVNZXNzYWdlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHdpbmRvdy5lbGVjdHJvbi5tZXNzYWdlLnNlbmQoaW5wdXQpXG4gICAgc2V0TWVzc2FnZShudWxsKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvIEVsZWN0cm9uITwvaDE+XG5cbiAgICAgIHttZXNzYWdlICYmIDxwPnttZXNzYWdlfTwvcD59XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\\n/*@ sourceURL=C:\\\\\\\\github\\\\\\\\syntegra\\\\\\\\renderer\\\\\\\\pages\\\\\\\\index.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLE1BQU07RUFDakIsTUFBTTtJQUFBLEdBQUNDLEtBQUQ7SUFBQSxHQUFRQztFQUFSLElBQW9CSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFDQSxNQUFNO0lBQUEsR0FBQ0ssT0FBRDtJQUFBLEdBQVVDO0VBQVYsSUFBd0JOLCtDQUFRLENBQUMsSUFBRCxDQUF0QztFQUVBQyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNTSxhQUFhLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRSCxPQUFSLEtBQW9CQyxVQUFVLENBQUNELE9BQUQsQ0FBcEQ7O0lBQ0FJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkwsT0FBaEIsQ0FBd0JNLEVBQXhCLENBQTJCSixhQUEzQjtJQUVBLE9BQU8sTUFBTTtNQUNYRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JMLE9BQWhCLENBQXdCTyxHQUF4QixDQUE0QkwsYUFBNUI7SUFDRCxDQUZEO0VBR0QsQ0FQUSxFQU9OLEVBUE0sQ0FBVDs7RUFTQSxNQUFNTSxZQUFZLEdBQUlMLEtBQUQsSUFBVztJQUM5QkEsS0FBSyxDQUFDTSxjQUFOO0lBQ0FMLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkwsT0FBaEIsQ0FBd0JVLElBQXhCLENBQTZCWixLQUE3QjtJQUNBRyxVQUFVLENBQUMsSUFBRCxDQUFWO0VBQ0QsQ0FKRDs7RUFNQSxvQkFDRTtJQUFBO0lBQUEsd0JBQ0U7TUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLEVBR0dELE9BQU8saUJBQUk7TUFBQTtNQUFBLFVBQUlBO0lBQUo7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUhkLGVBS0U7TUFBTSxRQUFRLEVBQUVRLFlBQWhCO01BQUE7TUFBQSx1QkFDRTtRQUNFLElBQUksRUFBQyxNQURQO1FBRUUsS0FBSyxFQUFFVixLQUZUO1FBR0UsUUFBUSxFQUFHYSxDQUFELElBQU9aLFFBQVEsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FIM0I7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBTEY7TUFBQTtNQUFBO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFzQkQsQ0F6Q0Q7O0FBMkNBLGlFQUFlaEIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSkgPT4gc2V0TWVzc2FnZShtZXNzYWdlKVxuICAgIHdpbmRvdy5lbGVjdHJvbi5tZXNzYWdlLm9uKGhhbmRsZU1lc3NhZ2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmVsZWN0cm9uLm1lc3NhZ2Uub2ZmKGhhbmRsZU1lc3NhZ2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgd2luZG93LmVsZWN0cm9uLm1lc3NhZ2Uuc2VuZChpbnB1dClcbiAgICBzZXRNZXNzYWdlKG51bGwpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGVsbG8gRWxlY3Ryb24hPC9oMT5cblxuICAgICAge21lc3NhZ2UgJiYgPHA+e21lc3NhZ2V9PC9wPn1cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImlucHV0Iiwic2V0SW5wdXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZU1lc3NhZ2UiLCJldmVudCIsIndpbmRvdyIsImVsZWN0cm9uIiwib24iLCJvZmYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();