"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Guilherme Modugno
 * @description CleanDOM is a library for easy manipulation of gift and events
 * @version 1.0
 * 
 */
var CleanDOM = exports.CleanDOM = function () {
  function CleanDOM(selector) {
    _classCallCheck(this, CleanDOM);

    this.element = this._treatElement(selector);
  }

  /**
   * Treat element
   * @param {NodeElement|HTMLElement|String} selector Selector or Node Element
   */


  _createClass(CleanDOM, [{
    key: "_treatElement",
    value: function _treatElement(selector) {
      var element = document.querySelectorAll(selector);

      if (element.length == 0) {
        return undefined;
      }

      return element.length > 1 ? element : element[0];
    }
  }]);

  return CleanDOM;
}();