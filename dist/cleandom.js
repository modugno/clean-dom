(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cleanDOM"] = factory();
	else
		root["cleanDOM"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cleanDOM = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helpers = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	* index.js
	* @author Guilherme Modugno
	* @description CleanDOM is a library for easy manipulation of gift and events
	* @version 1.0
	* 
	*/
	var CleanDOM = function (_Helpers) {
	    _inherits(CleanDOM, _Helpers);

	    function CleanDOM(selector) {
	        _classCallCheck(this, CleanDOM);

	        var _this = _possibleConstructorReturn(this, (CleanDOM.__proto__ || Object.getPrototypeOf(CleanDOM)).call(this));

	        _this.element = _this._treatElement(selector);
	        return _this;
	    }

	    /**
	    * Add or return value from inputs
	    * 
	    * @param {string} value 
	    */


	    _createClass(CleanDOM, [{
	        key: 'val',
	        value: function val() {
	            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


	            if (value) {
	                this.element.value = value;
	                return this;
	            }

	            return this.element.value;
	        }

	        /**
	        * Set or get attribute
	        * 
	        * @param {string} attribute 
	        * @param {string} value 
	        */

	    }, {
	        key: 'attr',
	        value: function attr(attribute, value) {

	            if (value) {
	                this.element.setAttribute(attribute, value);
	            }

	            return this.element.getAttribute(attribute);
	        }

	        /**
	        * Remove attribute
	        * 
	        * @param {string} attribute 
	        */

	    }, {
	        key: 'removeAttr',
	        value: function removeAttr(attribute) {
	            this.element.removeAttribute(attribute);
	            return this;
	        }

	        /**
	        * Show element
	        */

	    }, {
	        key: 'show',
	        value: function show() {
	            this.element.style.display = 'block';
	            return this;
	        }

	        /**
	        * Hide element
	        */

	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.element.style.display = 'none';
	            return this;
	        }

	        /**
	        * Add style in element
	        * 
	        * @param {string|object} values 
	        */

	    }, {
	        key: 'css',
	        value: function css() {
	            for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	                values[_key] = arguments[_key];
	            }

	            // validation
	            this._cssValidation(values);

	            if (values.length == 2) {
	                this.element.style[values[0]] = values[1];
	            } else if (values.length == 1) {

	                values = values.shift();

	                var prop = void 0;
	                for (prop in values) {
	                    this.element.style[prop] = values[prop];
	                }
	            }

	            return this;
	        }

	        /**
	        * Add class in element
	        * 
	        * @param {string} className 
	        */

	    }, {
	        key: 'addClass',
	        value: function addClass(className) {
	            this.element.classList.add(className);
	            return this;
	        }

	        /**
	        * Remove class from element
	        * @param {string} className 
	        */

	    }, {
	        key: 'removeClass',
	        value: function removeClass(className) {
	            if (this.hasClass(className)) {
	                this.element.classList.remove(className);
	            }
	            return this;
	        }

	        /**
	        * Check if exist class in element
	        * 
	        * @param {string} className 
	        */

	    }, {
	        key: 'hasClass',
	        value: function hasClass(className) {
	            return this.element.classList.contains(className);
	        }

	        /**
	        * Toggle class in element
	        * 
	        * @param {string} className 
	        */

	    }, {
	        key: 'toggleClass',
	        value: function toggleClass(className) {
	            this.element.classList.toggle(className);
	            return this;
	        }

	        /**
	        * Append html in element
	        * 
	        * @param {string} content 
	        */

	    }, {
	        key: 'html',
	        value: function html() {
	            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


	            if (content) {
	                this.element.innerHTML = content;
	                return this;
	            }

	            return this.element.innerHTML;
	        }

	        /**
	        * Append text in element
	        * 
	        * @param {string} content 
	        */

	    }, {
	        key: 'text',
	        value: function text() {
	            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


	            if (content) {
	                this.element.textContent = content;
	                return this;
	            }

	            return this.element.textContent;
	        }

	        /**
	        * Append content at the end in element
	        * 
	        * @param {string} content 
	        */

	    }, {
	        key: 'append',
	        value: function append() {
	            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	            if (content) {
	                this.element.innerHTML += content;
	            }

	            return this.element.innerHTML;
	        }

	        /**
	        * Append content at the beginning in element
	        * 
	        * @param {string} content 
	        */

	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	            if (content) {
	                this.element.innerHTML = content + this.element.innerHTML;
	            }

	            return this.element.innerHTML;
	        }
	    }, {
	        key: 'parents',
	        value: function parents() {}
	    }, {
	        key: 'children',
	        value: function children() {}
	    }, {
	        key: 'find',
	        value: function find() {}
	    }, {
	        key: 'remove',
	        value: function remove() {}
	    }]);

	    return CleanDOM;
	}(_helpers.Helpers);

	/**
	* Export method to use cleanDOM
	* @param {NodeElement|HTMLElement|String} selector Selector or Node Element
	*/


	var cleanDOM = exports.cleanDOM = function cleanDOM(selector) {
	    return new CleanDOM(selector);
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* Helpers.js
	* @description Helpers to CleanDOM
	*/
	var Helpers = exports.Helpers = function () {
	    function Helpers() {
	        _classCallCheck(this, Helpers);
	    }

	    _createClass(Helpers, [{
	        key: '_treatElement',


	        /**
	        * Treat element
	        * @param {NodeElement|HTMLElement|String} selector Selector or Node Element
	        */
	        value: function _treatElement(selector) {
	            var element = document.querySelectorAll(selector);

	            if (element.length == 0) {
	                return undefined;
	            }

	            return element.length > 1 ? element : element[0];
	        }
	    }, {
	        key: '_cssValidation',
	        value: function _cssValidation(values) {
	            if (!values.length) {
	                throw new Error('The CSS method needs a parameter');
	            } else if (values.length > 2) {
	                throw new Error('The CSS method has many parameters');
	            }
	        }
	    }]);

	    return Helpers;
	}();

/***/ })
/******/ ])
});
;