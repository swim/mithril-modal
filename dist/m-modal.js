(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Modal = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @file
 * modal.js
 *
 * Vanilla modal class.
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Modal = (function () {
  function Modal(options) {
    _classCallCheck(this, Modal);

    this.state = options.state ? options.state : false;
  }

  _createClass(Modal, [{
    key: 'toggle',
    value: function toggle() {
      this.state = this.state ? false : true;
    }
  }, {
    key: 'component',
    value: function component() {
      return {
        controller: function controller(options) {
          // console.log(options)
          this.view = options.view;
        },
        view: (function (ctrl) {
          return m('.modal', [this.state ? m('.modal-overlay', [m('.modal-container', [m('.modal-content', [ctrl.view(ctrl)])])]) : '']);
        }).bind(this)
      };
    }
  }]);

  return Modal;
})();

module.exports = Modal;

},{}]},{},[1])(1)
});


//# sourceMappingURL=m-modal.js.map
