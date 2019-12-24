/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./public/assets/images/react.png":
/*!****************************************!*\
  !*** ./public/assets/images/react.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/82a318ccea22a8af9fc4590f41df9238.png");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LandingPage */ "./src/pages/LandingPage.js");
/* harmony import */ var _pages_DashboardPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/DashboardPage */ "./src/pages/DashboardPage.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var App = function App(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "mb-3",
    color: "light",
    light: true,
    expand: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"], {
    href: "/"
  }, "Canna-record"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: toggle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto",
    navbar: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/components/"
  }, "Components")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "https://github.com/reactstrap/reactstrap"
  }, "GitHub")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownToggle"], {
    nav: true,
    caret: true
  }, "Options"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, "Option 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, "Option 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    divider: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], null, "Reset")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarText"], null, "Simple Text"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_LandingPage__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_DashboardPage__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "*"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_LandingPage__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/DashboardPage.js":
/*!************************************!*\
  !*** ./src/pages/DashboardPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-minimal-pie-chart */ "./node_modules/react-minimal-pie-chart/dist/index.js");
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var DashboardPage = function DashboardPage(props) {
  var data = [{
    x: 'Sativa',
    y: 3
  }, {
    x: 'Hybrid',
    y: 2
  }, {
    x: 'Indica',
    y: 1
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "Welcome Chris"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    md: {
      size: 6,
      offset: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-center"
  }, "You Have Entered ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "45"), " Strains."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1___default.a, {
    animate: true,
    data: [{
      title: 'Indica',
      value: 10,
      color: '#724373'
    }, {
      title: 'Sativa',
      value: 15,
      color: '#B24828'
    }, {
      title: 'Hybrid',
      value: 20,
      color: '#7CAD3D'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "mx-auto",
    style: {
      backgroundColor: '#724373',
      borderColor: '#333',
      color: 'white',
      curson: 'default',
      display: 'block'
    },
    outline: true
  }, "Indica ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "secondary"
  }, "10"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "mx-auto",
    style: {
      backgroundColor: '#B24828',
      borderColor: '#333',
      color: 'white',
      curson: 'default',
      display: 'block'
    },
    outline: true
  }, "Sativa ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "secondary"
  }, "15"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "mx-auto",
    style: {
      backgroundColor: '#7CAD3D',
      borderColor: '#333',
      color: 'white',
      curson: 'default',
      display: 'block'
    },
    outline: true
  }, "Hybrid ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "secondary"
  }, "20"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    md: "6",
    lg: "4",
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    outline: true,
    color: "danger"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    className: "text-center font-weight-bold"
  }, "Enter A New Strain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: "text-center"
  }, "Enter information about a strain."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Click Here"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    md: "6",
    lg: "4",
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    outline: true,
    color: "success"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    className: "text-center font-weight-bold"
  }, "View All Strain Entries"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: "text-center"
  }, "View all strains that have been entered"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Click Here"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    md: "6",
    lg: "4",
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    outline: true,
    color: "primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    className: "text-center font-weight-bold"
  }, "Search Strain Entries"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    className: "text-center"
  }, "Search for an existing strain entry."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Click Here")))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ }),

/***/ "./src/pages/LandingPage.js":
/*!**********************************!*\
  !*** ./src/pages/LandingPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _public_assets_images_react_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/images/react.png */ "./public/assets/images/react.png");






var LandingPage = function LandingPage(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var responseGoogle = function responseGoogle(response) {
    console.log(response);
    history.push('/dashboard');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "display-3"
  }, "Cannabis diary app"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "It uses utility classes for typography and spacing to space content out within the larger container."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLogin"], {
    clientId: "700009615343-7l1j7oelrvssgh24b7gu3elkissvf4l5.apps.googleusercontent.com",
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "primary"
  }, "Learn More"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    sm: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
    top: true,
    width: "100%",
    src: _public_assets_images_react_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Card image cap"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], null, "Easy to get started."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], null, "Just sign in with Google to create an account."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Button")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    sm: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
    top: true,
    width: "100%",
    src: _public_assets_images_react_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Card image cap"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], null, "Keep track"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], null, "Easy to use interface allows you to keep track of cannabis strains that you have tried."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Button")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    sm: "12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
    top: true,
    width: "100%",
    src: _public_assets_images_react_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Card image cap"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], null, "Card title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], null, "Card subtitle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], null, "Some quick example text to build on the card title and make up the bulk of the card's content."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Button"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! G:\code\strain-app\client\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcmVhY3QucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9EYXNoYm9hcmRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9MYW5kaW5nUGFnZS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRGFzaGJvYXJkUGFnZSIsImRhdGEiLCJ4IiwieSIsInNpemUiLCJvZmZzZXQiLCJ0aXRsZSIsInZhbHVlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImN1cnNvbiIsImRpc3BsYXkiLCJMYW5kaW5nUGFnZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicmVhY3RJbWFnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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YWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvODJhMzE4Y2NlYTIyYThhZjlmYzQ1OTBmNDFkZjkyMzgucG5nXCI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGFuZGluZ1BhZ2UgZnJvbSAnLi9wYWdlcy9MYW5kaW5nUGFnZSc7XHJcbmltcG9ydCBEYXNoYm9hcmRQYWdlIGZyb20gJy4vcGFnZXMvRGFzaGJvYXJkUGFnZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBOYXZiYXJUZXh0XHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBBcHAgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZmx1aWQ9XCJzbVwiPlxyXG4gICAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm1iLTNcIiBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5DYW5uYS1yZWNvcmQ8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb21wb25lbnRzL1wiPkNvbXBvbmVudHM8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXBcIj5cclxuICAgICAgICAgICAgICAgIEdpdEh1YlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXYgY2FyZXQ+XHJcbiAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IHJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5PcHRpb24gMTwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5PcHRpb24gMjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlJlc2V0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDxOYXZiYXJUZXh0PlNpbXBsZSBUZXh0PC9OYXZiYXJUZXh0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG5cclxuICAgICAgPFJvdXRlcj5cclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICAgIDxMYW5kaW5nUGFnZSAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICA8RGFzaGJvYXJkUGFnZSAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiPlxyXG4gICAgICAgICAgICA8TGFuZGluZ1BhZ2UgLz5cclxuICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGllQ2hhcnQgZnJvbSAncmVhY3QtbWluaW1hbC1waWUtY2hhcnQnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCwgQnV0dG9uLCBDYXJkVGl0bGUsIENhcmRUZXh0LCBCYWRnZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkUGFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAgeyB4OiAnU2F0aXZhJywgeTogMyB9LFxyXG4gICAgeyB4OiAnSHlicmlkJywgeTogMiB9LFxyXG4gICAgeyB4OiAnSW5kaWNhJywgeTogMSB9XHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+V2VsY29tZSBDaHJpczwvaDE+XHJcblxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7IHNpemU6IDYsIG9mZnNldDogMyB9fT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICBZb3UgSGF2ZSBFbnRlcmVkIDxzdHJvbmc+NDU8L3N0cm9uZz4gU3RyYWlucy5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8UGllQ2hhcnRcclxuICAgICAgICAgICAgYW5pbWF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgIHsgdGl0bGU6ICdJbmRpY2EnLCB2YWx1ZTogMTAsIGNvbG9yOiAnIzcyNDM3MycgfSxcclxuICAgICAgICAgICAgICB7IHRpdGxlOiAnU2F0aXZhJywgdmFsdWU6IDE1LCBjb2xvcjogJyNCMjQ4MjgnIH0sXHJcbiAgICAgICAgICAgICAgeyB0aXRsZTogJ0h5YnJpZCcsIHZhbHVlOiAyMCwgY29sb3I6ICcjN0NBRDNEJyB9XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI0MzczJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMzMzJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvbjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb3V0bGluZVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEluZGljYSA8QmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIj4xMDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0IyNDgyOCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzMzMycsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb246ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG91dGxpbmVcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYXRpdmEgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCI+MTU8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3Q0FEM0QnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMzMzMnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29uOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSHlicmlkIDxCYWRnZSBjb2xvcj1cInNlY29uZGFyeVwiPjIwPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjZcIiBsZz1cIjRcIiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICA8Q2FyZCBib2R5IG91dGxpbmUgY29sb3I9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgRW50ZXIgQSBOZXcgU3RyYWluXHJcbiAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBFbnRlciBpbmZvcm1hdGlvbiBhYm91dCBhIHN0cmFpbi5cclxuICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbj5DbGljayBIZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI2XCIgbGc9XCI0XCIgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgPENhcmQgYm9keSBvdXRsaW5lIGNvbG9yPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICBWaWV3IEFsbCBTdHJhaW4gRW50cmllc1xyXG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmRUZXh0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgVmlldyBhbGwgc3RyYWlucyB0aGF0IGhhdmUgYmVlbiBlbnRlcmVkXHJcbiAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24+Q2xpY2sgSGVyZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiNlwiIGxnPVwiNFwiIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgIDxDYXJkIGJvZHkgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgU2VhcmNoIFN0cmFpbiBFbnRyaWVzXHJcbiAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBTZWFyY2ggZm9yIGFuIGV4aXN0aW5nIHN0cmFpbiBlbnRyeS5cclxuICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgPEJ1dHRvbj5DbGljayBIZXJlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCB7XHJcbiAgSnVtYm90cm9uLFxyXG4gIEJ1dHRvbixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkVGl0bGUsXHJcbiAgQ2FyZFN1YnRpdGxlXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCByZWFjdEltYWdlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3JlYWN0LnBuZyc7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9IHByb3BzID0+IHtcclxuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSByZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBoaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEp1bWJvdHJvbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zXCI+Q2FubmFiaXMgZGlhcnkgYXBwPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICBUaGlzIGlzIGEgc2ltcGxlIGhlcm8gdW5pdCwgYSBzaW1wbGUgSnVtYm90cm9uLXN0eWxlIGNvbXBvbmVudCBmb3JcclxuICAgICAgICAgIGNhbGxpbmcgZXh0cmEgYXR0ZW50aW9uIHRvIGZlYXR1cmVkIGNvbnRlbnQgb3IgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEl0IHVzZXMgdXRpbGl0eSBjbGFzc2VzIGZvciB0eXBvZ3JhcGh5IGFuZCBzcGFjaW5nIHRvIHNwYWNlIGNvbnRlbnRcclxuICAgICAgICAgIG91dCB3aXRoaW4gdGhlIGxhcmdlciBjb250YWluZXIuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICBjbGllbnRJZD1cIjcwMDAwOTYxNTM0My03bDFqN29lbHJ2c3NnaDI0YjdndTNlbGtpc3N2ZjRsNS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5MZWFybiBNb3JlPC9CdXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjEyXCI+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWcgdG9wIHdpZHRoPVwiMTAwJVwiIHNyYz17cmVhY3RJbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5FYXN5IHRvIGdldCBzdGFydGVkLjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIHsvKiA8Q2FyZFN1YnRpdGxlPkNhcmQgc3VidGl0bGU8L0NhcmRTdWJ0aXRsZT4gKi99XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgSnVzdCBzaWduIGluIHdpdGggR29vZ2xlIHRvIGNyZWF0ZSBhbiBhY2NvdW50LlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjEyXCI+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWcgdG9wIHdpZHRoPVwiMTAwJVwiIHNyYz17cmVhY3RJbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5LZWVwIHRyYWNrPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgey8qIDxDYXJkU3VidGl0bGU+Q2FyZCBzdWJ0aXRsZTwvQ2FyZFN1YnRpdGxlPiAqL31cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBFYXN5IHRvIHVzZSBpbnRlcmZhY2UgYWxsb3dzIHlvdSB0byBrZWVwIHRyYWNrIG9mIGNhbm5hYmlzXHJcbiAgICAgICAgICAgICAgICBzdHJhaW5zIHRoYXQgeW91IGhhdmUgdHJpZWQuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiMTJcIj5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZyB0b3Agd2lkdGg9XCIxMDAlXCIgc3JjPXtyZWFjdEltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlPkNhcmQgc3VidGl0bGU8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cFxyXG4gICAgICAgICAgICAgICAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=