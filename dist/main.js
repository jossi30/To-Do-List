/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgb(240, 240, 240);\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  height: 100vh;\\n}\\n\\n.title {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid #eee;\\n  line-height: 0;\\n  padding: 10px 10px 10px 20px;\\n}\\n\\n.title i {\\n  margin-right: 10px;\\n}\\n\\n.main {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n}\\n\\n.main-container {\\n  min-width: 300px;\\n  width: 40%;\\n  max-width: 1000px;\\n  border-radius: 4px;\\n  margin: 15% auto;\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid #eee;\\n  background: white;\\n  font-size: 16px;\\n  line-height: 24px;\\n  box-shadow: 10px 10px 10px 0 rgb(0 0 0 / 27%);\\n}\\n\\n.todo-title {\\n  font-size: 18px;\\n  font-weight: 100;\\n}\\n\\n.input-container {\\n  border-bottom: 1px solid #eee;\\n  line-height: 24px;\\n  display: flex;\\n  padding: 5px 10px 5px 5px;\\n  align-items: center;\\n  font-style: italic;\\n  justify-content: space-between;\\n}\\n\\n.input-field {\\n  width: 90%;\\n  height: 24px;\\n  border: none;\\n  font-size: 16px;\\n  font-style: italic;\\n  padding: 5px 0 5px 10px;\\n}\\n\\n.add-btn {\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  outline: none;\\n  margin-right: 8px;\\n}\\n\\n.clear-all-btn {\\n  width: 100%;\\n  margin: 12px 0 0 0;\\n  border: none;\\n  cursor: pointer;\\n  background-color: #eee;\\n  color: black;\\n  outline: none;\\n  padding: 20px 0;\\n  font-size: 16px;\\n  font-weight: 100;\\n}\\n\\n.todo-container {\\n  list-style: none;\\n  padding: 0 14px;\\n  margin: 0;\\n}\\n\\n.todo-li {\\n  display: flex;\\n  padding: 8px 0;\\n  list-style: none;\\n  line-height: 24px;\\n  border-bottom: 1px solid #eee;\\n  font-weight: 100;\\n  justify-content: space-between;\\n}\\n\\n.todo-li:last-child {\\n  border-bottom: none;\\n  padding: 7px 0 0 0;\\n}\\n\\n.todo-text {\\n  width: 85%;\\n  padding: 0 7px;\\n  border: none;\\n  font-size: 16px;\\n  font-weight: 100;\\n}\\n\\n.trash-can {\\n  padding-right: 5px;\\n  cursor: pointer;\\n  text-decoration: none;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todos.js */ \"./src/modules/todos.js\");\n/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n\n\n\n\n\n\n\n// Variables\nconst input = document.querySelector('.input-field');\nconst toDoList = document.querySelector('.todo-container');\nconst addButton = document.querySelector('.add-btn');\n\nconst clearButton = document.querySelector('.clear-all-btn');\n\n// Add Event Listener with Enter\ninput.addEventListener('keypress', (e) => {\n  if (e.keyCode === 13 && input.value !== '') {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)(), input.value);\n    input.value = '';\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n  }\n});\n\n// Add Event Listener with Click\naddButton.addEventListener('click', () => {\n  if (input.value !== '') {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)(), input.value);\n    input.value = '';\n    (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.setToDo)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n  }\n});\n\n// Edit Event Listener\ntoDoList.addEventListener('click', (e) => {\n  if (e.target.closest('.todo-text')) {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.editToDo)(e, (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n  }\n});\n\n// Delete Event Listener\ntoDoList.addEventListener('click', (e) => {\n  if (e.target.closest('.trash-can')) {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.deleteToDo)(e, (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n  }\n});\n\n// Clear Completed Todo Event Listener\nclearButton.addEventListener('click', () => {\n  const toDoList = (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.clearToDos)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n  (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.setToDo)(toDoList);\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n});\n\n// Mark Completed Todo Event Listener\ntoDoList.addEventListener('click', (e) => {\n  if (e.target.closest('.todo-checkbox')) {\n    (0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.markToDo)(e, (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)());\n  }\n});\n\nconst render = () => {\n  window.addEventListener('load', (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)((0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getToDo)()));\n};\nrender();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToDoList\": () => (/* binding */ renderToDoList)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\nconst toDoList = document.querySelector('.todo-container');\n\n// eslint-disable-next-line import/prefer-default-export\nconst renderToDoList = (todos) => {\n  toDoList.innerHTML = '';\n\n  todos = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getToDo)();\n  todos.forEach((toDo) => {\n    const toDoItem = document.createElement('li');\n    toDoItem.classList.add('todo-li');\n\n    const toDoCheckbox = document.createElement('input');\n    toDoCheckbox.classList.add('todo-checkbox');\n    toDoCheckbox.type = 'checkbox';\n    toDoCheckbox.checked = toDo.completed;\n    toDoItem.appendChild(toDoCheckbox);\n\n    const toDoText = document.createElement('input');\n    toDoText.classList.add('todo-text');\n    toDoText.value = toDo.toDoItem;\n    toDoItem.appendChild(toDoText);\n\n    if (toDo.completed) {\n      toDoText.classList.add('completed');\n    }\n    const deleteIcon = document.createElement('span');\n    deleteIcon.classList.add('trash-can');\n    deleteIcon.innerHTML = '<i class=\"fa-regular fa-trash-can\"></i>';\n    toDoItem.appendChild(deleteIcon);\n    toDoList.appendChild(toDoItem);\n  });\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getToDo\": () => (/* binding */ getToDo),\n/* harmony export */   \"setToDo\": () => (/* binding */ setToDo)\n/* harmony export */ });\nconst setToDo = (todos) => {\n  localStorage.setItem('toDoList', JSON.stringify(todos));\n};\n\nconst getToDo = () => {\n  const toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];\n  const todos = toDoData;\n  return todos;\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/store.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"clearToDos\": () => (/* binding */ clearToDos),\n/* harmony export */   \"deleteToDo\": () => (/* binding */ deleteToDo),\n/* harmony export */   \"editToDo\": () => (/* binding */ editToDo),\n/* harmony export */   \"markToDo\": () => (/* binding */ markToDo)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n\n\n\n// Add Todo\nconst addToDo = (todos, toDoItem) => {\n  todos.push({\n    toDoItem,\n    completed: false,\n    id: todos.length + 1,\n  });\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setToDo)(todos);\n};\n\n// Edit Todo\nconst editToDo = (e, todos) => {\n  const clickedToDo = e.target.closest('.todo-text');\n  clickedToDo.disabled = false;\n  clickedToDo.focus();\n  const toDoText = clickedToDo.value;\n  clickedToDo.addEventListener('keypress', (e) => {\n    if (e.keyCode === 13 && clickedToDo.value !== '') {\n      const toDoIndex = todos.findIndex(\n        (toDoItem) => toDoItem.toDoItem === toDoText,\n      );\n      todos[toDoIndex].toDoItem = clickedToDo.value;\n      clickedToDo.disabled = true;\n      (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setToDo)(todos);\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderToDoList)(todos);\n    }\n  });\n};\n\n// Delete Todo\nconst deleteToDo = (e, todos) => {\n  const deleteButton = e.target.closest('.trash-can');\n  const clickedToDo = deleteButton.previousElementSibling;\n  const toDoIndex = todos.findIndex(\n    (toDoItem) => toDoItem.toDoItem === clickedToDo.value,\n  );\n  todos.splice(toDoIndex, 1);\n  todos.forEach((toDoItem, index) => {\n    toDoItem.id = index + 1;\n  });\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setToDo)(todos);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderToDoList)(todos);\n};\n\n// Mark Completed Todo\nconst markToDo = (e, todos) => {\n  const clickedCheckbox = e.target.closest('.todo-checkbox');\n  const clickedToDo = clickedCheckbox.nextElementSibling;\n  const toDoIndex = todos.findIndex(\n    (toDoItem) => toDoItem.toDoItem === clickedToDo.value,\n  );\n  todos = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getToDo)();\n  todos[toDoIndex].completed = !todos[toDoIndex].completed;\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.setToDo)(todos);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderToDoList)(todos);\n};\n\n// Clear Completed Todo\nconst clearToDos = (todos) => {\n  todos = todos.filter((toDoItem) => toDoItem.completed === false);\n  todos.forEach((toDoItem, index) => {\n    toDoItem.id = index + 1;\n  });\n  return todos;\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;